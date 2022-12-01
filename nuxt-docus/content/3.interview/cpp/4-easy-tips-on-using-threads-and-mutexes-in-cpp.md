# 4 Easy Tips for Using Threads and Mutexes in C++

> [refer][link]

C++ is a great programming language that’s generally associated with fast performance, custom memory management, and pointers. However, some of the most important and less-talked-about components of the language are threads and mutexes. Perhaps one of the most powerful features of C++ is possessing a wide range of control and precision over the execution of multiple concurrent threads and sharing resources safely between those threads. The web browser you are viewing this on right now uses multiple threads to facilitate multiple actions or displays simultaneously.

In this article, I will go over four tips for using threads and mutexes in C++. The interfaces discussed here are those defined in the C++11 standard of the language. Prior to C++11, threads were not formally defined in the language and only OS-specific thread interfaces such as posix threads could be used.

## 1. Threads Aren’t Disposable — You Have to Join Them Back Together!

A common mistake made by those new to multithreading is believing that the function passed to a new thread being created is similar to just calling another function. It’s not. Let’s take a look at the seemingly benign program below:

```cpp
#include <iostream>
#include <thread>

void doStuff()
{
  int x = 5;
  while(x--)
       std::cout << "Doing stuff\n";
}

int main() {
  std::thread t1(&doStuff);
}
```

You might think, “This code just works and prints out a few messages.” Wrong. It actually crashes!

```
terminate called without an active exception
exited, aborted
```

In the printout above, `terminate` is a reference to the C++ `std::terminate()` function that is called by the runtime for several dangerous situations. In this situation, we are starting a thread of execution, but we aren’t joining it. You have to join threads you start to keep a program synchronized and to maintain the order of scheduling and execution of tasks. Adding `t1.join();` to this program makes it work as expected.

## 2. Use a Flag to Signal to Threads When They Should Shut Down

Another potential issue with spawning multiple threads is when a thread repeats the same function or loop of events infinitely. Many threads are implemented with a role in mind, and throughout the course of the program, they generally repeat that list of tasks over and over again. You cannot directly `join()` a thread that’s in an infinite loop because the call to join will cause the parent thread to simply wait forever. Joining is only intended for a thread that can reach a terminal, finite point of ending work.

To properly shut down such threads, you will need a global flag — ideally a boolean — that is checked by the threads to determine if they should continue running or not. Since C++11, `std::atomic<bool>`variables at the global scope are considered thread-safe to access and modify. In this case, only the parent main thread can modify the boolean, and the spawned threads only read the value. Thus, example code for that can be written below:

```cpp
#include <iostream>
#include <thread>
#include <chrono>
#include <atomic>

static std::atomic<bool> KEEP_GOING;

void doStuff()
{
  while(true) {
      if (!KEEP_GOING.load())
          break;
      std::cout << "Doing stuff\n";
  }
}


int main() {
  KEEP_GOING.store(true);
  std::thread t1(&doStuff);
  std::thread t2(&doStuff);
  std::this_thread::sleep_for(std::chrono::milliseconds(100));
  KEEP_GOING.store(false);
  t1.join();
  t2.join();
}
```

The statement `std::this_thread::sleep_for(std::chrono::milliseconds(100))` is added to show that when running the program, the spawned thread does some initial work but then ends its execution via reading that `KEEP_GOING` has been set to `false`. Unlike processes, threads do not have a built-in signaling mechanism to stop running. So patterns of design like this are critical for thread shutdown.

## 3. Use a mutex When Threads Are Accessing Shared Resources and Data

In many multithreaded programs and designs, threads will need to read, write, and exchange data with other threads. Threads can share any resource that is not local to each thread. So variables and objects allocated on a thread’s stack won’t be accessible to other threads. Global objects, or pointers to objects passed into a thread’s initial “main” function, can be accessed by multiple threads. However, to have a fully functioning, bug-free program, you need to ensure threads share resources safely. If one thread reads a resource, like an array or chunk of memory, while another one is writing to it, that’s going to result in corrupted data.

There are many tools and techniques that can be used to achieve safe resource sharing, but the most straightforward tool to accomplish this is a mutex. A mutex is an object with a hardware- and system-specific implementation that allows a thread to acquire a “lock.” While the thread holds the mutex, other threads who attempt to acquire the mutex will halt or block the acquisition call. This means other threads cannot proceed to lock the mutex until the thread holding it currently unlocks it. The C++11 standard defines a cross-platform type called `std::mutex` that can be locked or unlocked by different threads. It’s as simple as doing:

```cpp
static std::mutex mtx; // global scope
{ /*Some scope of execution with a shared resource*/
    mtx.lock();
    // Some actions
    mtx.unlock();
}
```

Although that code does lock and unlock a mutex, directly calling methods on the mutex — such as the `lock` and `unlock` methods — is generally not recommended. That’s because as soon as `.unlock()` is called, any thread waiting on that mutex will be given access to that portion of code between the `lock` and `unlock` statements. Additionally, `return` statements before the `.unlock()` statement will cause the mutex to stay locked forever, which is a very dangerous situation.

The most common way to utilize a mutex is using an RAII style object that’s constructed at the top of a scope and destroyed at the end. For C++11, the standard library provides something called `std::lock_guard`. In C++17, there’s an even better class called `std::scoped_lock`, which is an RAII object that can lock multiple mutexes at once in a scope. The advantage of using an RAII scoped approach to mutex locking is the unlock is handled when the scope is finished, so you don’t have to worry about the order of your statements or having to reach an explicit call to `.unlock()`.

For this example, two different threads will read and write values from an array, and that array will be guarded by a mutex. One thread will have the role of a writer, whereas the other one will have the role of the reader. The threads will be controlled via a global flag, as before. Let’s take a look at the full code:

```cpp
#include <iostream>
#include <thread>
#include <chrono>
#include <mutex>
#include <atomic>
#include <string.h>

static std::atomic<bool> KEEP_GOING;

struct Point {
    long x;
    long y;
};

template<class T, size_t arraySize>
class SharedArray {
public:
    void get(size_t index, T* out) const {
        std::lock_guard<std::mutex> lockit(_mtx);
        *out = _items[index];
    }

    void set(size_t index, const T& value) {
        std::lock_guard<std::mutex> lockit(_mtx);
        _items[index] = value;
    }

    void clean() { memset(_items, 0, sizeof(_items)); }
private:
   T _items[arraySize];
   mutable std::mutex _mtx;
};

#define SHARED_ARRAY_SIZE 10
static SharedArray<Point, SHARED_ARRAY_SIZE> SHARED_ARRAY;

void doWrites()
{
  Point p;
  p.x = 0;
  p.y = 0;
  while(true) {
      if (!KEEP_GOING.load())
          break;
      for (size_t i = 0 ; i < SHARED_ARRAY_SIZE; ++i){
          SHARED_ARRAY.set(i, p);
          ++p.x;
          ++p.y;
      }
      std::this_thread::sleep_for(std::chrono::milliseconds(500));
  }
}

void doReads()
{
    while(true) {
      if(!KEEP_GOING.load())
        break;
      for (size_t i = 0 ; i < SHARED_ARRAY_SIZE; ++i){
          Point r;
          SHARED_ARRAY.get(i, &r);
          std::cout << "x=" << r.x << " y=" << r.y << "\n";
      }
      std::this_thread::sleep_for(std::chrono::milliseconds(500));   
  }
}

int main() {
  KEEP_GOING.store(true);
  SHARED_ARRAY.clean();
  std::thread writer(&doWrites);
  std::thread reader(&doReads);
  std::this_thread::sleep_for(std::chrono::seconds(5));
  KEEP_GOING.store(false);
  writer.join();
  reader.join();
}
```

The first thing you might notice is the passing by value of the `Point` objects. Typically in C++, you would pass by reference when accessing an element of a vector or array. However, as soon as the `any` function with a lock guard at the top of its scope returns, that mutex is unlocked. You cannot safely return a pointer or reference to a resource that is shared by multiple threads directly. That’s because acquiring a pointer has no guarantee about blocking other threads from changing the value it points to. That’s only controlled by a mutex.

In the example above, you will likely notice several `sleep_for` calls. These aren’t required to make the code work, but using them and altering their periods can help visualize threads doing work, going to sleep, then waking up again. If you run this program and decrease the sleep period for just the writer thread, you might see a pattern like the following:

```
x=55 y=55
x=56 y=56
x=57 y=57
x=58 y=58
x=59 y=59
x=80 y=80
x=81 y=81
x=82 y=82
x=83 y=83
x=84 y=84
x=85 y=85
```

There’s a skip in the printouts! But this is not a bug. If the reader thread sleeps for a longer period of time than the writer thread, that means the writer thread will have the time to do work, while the reader thread is sleeping. This means by the time the reader thread wakes up, the values in the array are advanced past the point to which it last read them, rendering its observation no longer sequential. When the two sleep periods are equal, you shouldn’t see this happening.

## 4. Beware of the Hardware’s Limit on Concurrent Threads

On any CPU, there is a limit to the number of threads that can run concurrently. Although complex C++ programs may have hundreds of threads, they are certainly not all running at the exact same time. Running literally means executing machine instructions at the current moment. Thus, programs that require many threads design them to work in such a manner where the work is not precisely simultaneous at all times but rather distributed to maximize throughput and performance.

As a concept, the number of concurrent threads on a platform is determined by the number of cores of the CPU. For example, I am currently using a laptop with a 2.7 GHz quad-core Intel Core i7 processor. Thus, I have four cores, and up to four threads can run concurrently. Machines used to run servers, such as those in cloud computing products, can typically possess a higher number of cores than your personal computer.

C++11 provides a static interface to check the number of possible concurrent threads, such as in the example below:

```cpp
#include <iostream>
#include <thread>

int main() {
  std::cout << "The number of concurrent threads is " << std::thread::hardware_concurrency() << "\n";
}
```

And in my case, as expected, the result is:

```
The number of concurrent threads is 4
```

This value is typically useful when implementing a thread pool, a design where threads continuously run a loop to check a resource such as a queue for jobs to perform. In a thread pool, you typically will not see a benefit from using more than the number of concurrent threads the hardware supports. In general, checking the hardware concurrency limit is a form of hardware-focused design.

There are many components of modern C++, like atomic variables and memory fences, that provide optimizations for multithreaded programs, but only for particular hardware architectures.






[link]: https://betterprogramming.pub/4-easy-tips-on-using-threads-and-mutexes-in-c-566eb2927152