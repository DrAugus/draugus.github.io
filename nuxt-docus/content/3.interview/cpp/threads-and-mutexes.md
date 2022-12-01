---
image: '/stanford.jpeg'
---

# Threads and Mutexes

from [stanford][link] edu **CS110 Lecture 10: Threads and Mutexes**


**CS110 Lecture 10: Threads and Mutexes**

Principles of Computer Systems  
Winter 2020   
Stanford University   
Computer Science Department  
**Instructors**: Chris Gregg and Nick Troccoli 

**CS110 Topic 3**: How can we have concurrency within a single process?

## Learning About Processes

![](/stanford/process.png)

## Today's Learning Goals

- Discover some of the pitfalls of threads sharing the same virtual address space 
- Learn how locks can help us limit access to shared resources
- Get practice using condition variables to wait for signals from other threads

## Plan For Today

- **Recap:** Threads in C++
- Races When Accessing Shared Data 
- Introducing Mutexes


### **Recap:** Threads in C++

#### Threads

A **thread** is an independent execution sequence within a single process.

- Most common: assign each thread to execute a single function in parallel
- Each thread operates within the same process, so they *share global data*(!) (text, data, and heap segments)
- They each have their own stack (e.g. for calls within a single thread)
- Execution alternates between threads as it does for processes
- Many similarities between threads and processes; in fact, threads are often called **lightweight processes**.

#### Threads vs. Processes

**Processes:**
- isolate virtual address spaces (good: security and stability, bad: harder to share info) 
- can run external programs easily (fork-exec) (good)
- harder to coordinate multiple tasks within the same program (bad)

**Threads:**

- share virtual address space (bad: security and stability, good: easier to share info) 
- can't run external programs easily (bad)
- easier to coordinate multiple tasks within the same program (good)

#### C++ **thread**

A thread object can be spawned to run the specified function with the given arguments.

```cpp
thread myThread(myFunc, arg1, arg2, ...);
```

- **myFunc:**the function the thread should execute asynchronously
- **args:**a list of arguments (any length, or none) to pass to the function upon execution 
- Once initialized with this constructor, the thread may execute at any time!

To pass objects by reference to a thread, use the **ref()**function:

```cpp
void myFunc(int& x, int& y) {...}

thread myThread(myFunc, ref(arg1), ref(arg2));
```

We can make an array of threads as follows:

```cpp
// declare array of empty thread handles 
thread friends[5]; 

// Spawn threads
for (size_t i = 0; i < 5; i++) {
    friends[i] = thread(myFunc, arg1, arg2); 
}
```

We can also initialize an array of threads as follows (note the loop by reference):

```cpp
thread friends[5]; 
for (thread& currFriend : friends) {
    currFriend = thread(myFunc, arg1, arg2); 
}  
```
To wait on a thread to finish, use the **.join()** method:

```cpp
thread myThread(myFunc, arg1, arg2); 

... // do some work

// Wait for thread to finish (blocks) 
myThread.join();
```

For multiple threads, we must wait on a specific thread one at a time:

```cpp
thread friends[5]; 
// spawn here
// now we wait for each to finish 
for (size_t i = 0; i < 5; i++) { 
    friends[i].join(); 
} 
```

#### Thread Safety

A *thread-safe*function is one that will always execute correctly, even when called concurrently from multiple threads.

- **printf**is thread-safe, but **operator<<**is *not*. This means e.g. **cout** statements could get interleaved! 
- To avoid this, use **oslock**and **osunlock**(custom CS110 functions - **#include "ostreamlock.h"**) around streams. They ensure at most one thread has permission to write into a stream at any one time.

```cpp
cout << oslock <<  "Hello, world!" <<  endl << osunlock;
```

#### Threads Share Memory

```cpp
static void greeting(size_t& i) {
    cout << oslock << "Hello, world! I am thread " << i << endl << osunlock; 
}

static const size_t kNumFriends = 6;
int main(int argc, char *argv[]) {
    cout << "Let's hear from " << kNumFriends << " threads." << endl;

    thread friends[kNumFriends]; // declare array of empty thread handles

    // Spawn threads
    for (size_t i = 0; i < kNumFriends; i++) {
        friends[i] = thread(greeting, ref(i));
    }

    // Wait for threads
    for (size_t i = 0; i < kNumFriends; i++) {
    friends[i].join();
    }

    cout << "Everyone's said hello!" << endl;
    return 0;
}
```

Output

```shell
$ ./friends
Let's hear from 6 threads.
Hello, world! I am thread 2 
Hello, world! I am thread 2 
Hello, world! I am thread 3 
Hello, world! I am thread 5 
Hello, world! I am thread 5 
Hello, world! I am thread 6 
Everyone's said hello!
```

```cpp
for ( size_t i =  0; i < kNumFriends; i++) {
    friends[i].join();    
}
```

![](/stanford/threads_share_memory.png)

**Solution**: pass a copy of i (not by reference) so it does not change.

### **Races When Accessing Shared Data** 

#### Thread-Level Parallelism

- Threads allow a process to parallelize a problem across multiple cores 
- Consider a scenario where we want to process 250 images and have 10 cores 
- **Simulation**: let each thread help process images until none are left
- Let's jump to a demo to see how this works

```cpp [images.cc]
int main(int argc, const char *argv[]) { 
    thread processors[10]; 
    size_t remainingImages = 250; 
    for (size_t i = 0; i < 10; i++)     
        processors[i] = thread(process, 101 + i, ref(remainingImages));   
    for (thread& proc: processors) proc.join();
    cout << "Images done!" << endl; 
    return 0; 
}
```

There is a *race condition* here!
- **Problem:**threads could interrupt each other in between lines 2 and 3.

    ```cpp
    static  void process(size_t id, size_t& remainingImages) { 
        while (remainingImages >  0) {  
            sleep_for( 500 );   // simulate "processing image" 
            remainingImages--;
            // ...    
        }
        //... 
    }
    ```    

- **Why is this?**It's because **remainingImages > 0** test and **remainingImages--** aren't atomic 
- Atomicity: externally, the code has either executed or not; external observers do not see any intermediate states mid-execution
- If a thread evaluates **remainingImages > 0**to be **true**and commits to processing an image, another thread could come in and claim that same image before this thread processes it.

#### Why Test and Decrement Is REALLY NOT Thread-Safe

- C++ statements aren't inherently atomic. Virtually all C++ statements—even ones as simple as **remainingImages--**—compile to multiple assembly code instructions.
- Assembly code instructions are atomic, but C++ statements are not.
- **g++** on the myths compiles **remainingImages--** to five assembly code instructions, as with:

    ```
    0x0000000000401a9b <+36>:   mov    -0x20(%rbp),%rax
    0x0000000000401a9f <+40>:   mov    (%rax),%eax
    0x0000000000401aa1 <+42>:   lea    -0x1(%rax),%edx
    0x0000000000401aa4 <+45>:   mov    -0x20(%rbp),%rax
    0x0000000000401aa8 <+49>:   mov    %edx,(%rax)
    ```

- The first two lines drill through the **remainingImages** reference to load a copy of the **remainingImages** held on **main**'s stack. The third line decrements that copy, and the last two write the decremented copy back to the **remainingImages** variable held on **main**'s stack.
- The ALU operates on registers, but registers are private to a core, so the variable needs to be loaded from and stored to memory.
    - Each thread makes a local copy of the variable before operating on it
    - What if multiple threads all load the variable at the same time: they all think there's only 128 images remaining and process 128 at the same time

### Introducing Mutexes

#### Mutex

A mutex is a variable type that represents something like a "locked door".

![](/stanford/locked_door.png)

You can **lock**the door:

- if it's unlocked, you go through the door and lock it![](Aspose.Words.76adaef4-3b48-49e6-a234-f1dfaf619441.019.png)
- if it's locked, you *wait for it to unlock first*

If you most recently locked the door, you can **unlock**the door:

- door is now unlocked, another may go in now

#### Mutex - Mutual Exclusion

A mutex is a type used to enforce *mutual exclusion*, i.e., a critical section 

Mutexes are often called locks

- To be very precise, mutexes are one kind of lock, there are others (read/write locks, reentrant locks, etc.), but we can just call them locks in this course, usually "lock" means "mutex"

When a thread locks a mutex

- If the lock is unlocked the thread takes the lock and continues execution
- If the lock is locked, the thread blocks and waits until the lock is unlocked
- If multiple threads are waiting for a lock they all wait until lock is unlocked, one receives lock

When a thread unlocks a mutex

- It continues normally; one waiting thread (if any) takes the lock and is scheduled to run

This is a subset of the C++ mutex abstraction: nicely simple! How can we use this in our buggy program?

```cpp
class mutex {
public:
    mutex();        // constructs the mutex to be in an unlocked state
    void lock();    // acquires the lock on the mutex, blocking until it's unlocked
    void unlock();  // releases the lock and wakes up another threads trying to lock it
};
```

#### Critical Sections With Mutexes

**main** instantiates a mutex, which it passes (by reference!) to invocations of **process.**   
The **process** code uses this lock to protect **remainingImages**.   
Note we need to unlock on line 5 -- in complex code forgetting this is an easy bug

```cpp
static void process ( size_t id, size_t & remainingImages, mutex& counterLock) {
    while ( true ) {
        counterLock.lock();
        if (remainingImages == 0) {
            counterLock.unlock(); 
            break;
        }
        processImage(remainingImages);
        remainingImages--;
        cout << oslock << "Thread#" << id << " processed an image (" << remainingImages 11   << " remain)." << endl << osunlock;
        counterLock.unlock();
    }
    cout << oslock << "Thread#" << id << " sees no remaining images and exits." << endl << osunlock;
}

// Create single mutex in main, pass by reference
```

#### Critical Sections Can Be Bottlenecks

The way we've set it up, only one thread agent can process an image at a time!

We can do better: serialize deciding which image to process and parallelize the actual processing 

Keep your critical sections as small as possible!

```cpp
static void process ( size _t id, size _t & remainingImages, mutex& counterLock) { 
    while ( true ) {
        size _t myImage; 
        
        counterLock.lock();   // Start of critical section 
        if (remainingImages == 0) { 
            counterLock.unlock(); // Rather keep it here, easier to check 
            break;
        } else { 
            myImage = remainingImages; 
            remainingImages--; 
            counterLock.unlock(); // end of critical section 
            
            processImage(myImage); 
            cout << oslock << "Thread#" << id << " processed an image (" << remainingImages 16   << " remain)." << endl << osunlock; 
        } 
    } 
    cout << oslock << "Thread#" << id << " sees no remaining images and exits." << endl << osunlock; 
} 
```

#### Problems That Might Arise

What if **processImage** can return an error?

- E.g., what if we need to distinguish allocating an image and processing it
- A thread can grab the image by decrementing **remainingImages** but if it fails there's no way for another thread to retry
- Because these are threads, if one thread has a SEGV the whole process will fail
- A more complex approach might be to maintain an actual queue of images and allow threads (in a critical section) to push things back into the queue

What if image processing times are *highly* variable (e.g, one image takes 100x as long as the others)?

- Might scan images to estimate execution time and try more intelligent scheduling

What if there's a bug in your code, such that sometimes processImage randomly enters an infinite loop?

- Need a way to reissue an image to an idle thread
- An infinite loop of course shouldn't occur, but when we get to networks sometimes execution time can vary by 100x for reasons outside our control

#### Some Types of Mutexes 

Standard **mutex**: what we've seen

- If a thread holding the lock tries to re-lock it, deadlock 

**recursive_mutex**

- A thread can lock the mutex multiple times, and needs to unlock it the same number of times to release it to other threads

**timed_mutex**

- A thread can **try_lock_for** / **try_lock_until**: if time elapses, don't take lock
- Deadlocks if same thread tries to lock multiple times, like standard mutex 

In this class, we'll focus on just regular **mutex**

#### How Do Mutexes Work?

Something we've seen a few times is that you can't read and write a variable atomically

- But a mutex does so! If the lock is unlocked, lock it

How does this work with caches?

- Each core has its own cache
- Writes are typically write-back (write to higher cache level when line is evicted), not write-through (always write to main memory) for performance
- Caches are *coherent* -- if one core writes to a cache line that is also in another core's cache, the other core's cache line is invalidated: this can become a performance problem

Hardware provides atomic memory operations, such as compare and swap

- cas old, new, addr
    - If addr == old, set addr to new
- Use this as a single bit to see if the lock is held and if not, take it
- If the lock is held already, then enqueue yourself (in a thread safe way) and tell kernel to sleep you
- When a node unlocks, it clears the bit and wakes up a thread




[link]: https://web.stanford.edu/class/archive/cs/cs110/cs110.1204/static/lectures/10-threads-and-mutexes.pdf