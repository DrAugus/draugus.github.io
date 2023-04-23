# Reactor

## sample

```cpp
#include <iostream>
#include <vector>
#include <unordered_map>
#include <functional>

class Reactor
{
public:
    Reactor() = default;
    ~Reactor() = default;

    // 注册事件处理函数
    void register_handler(int event, std::function<void(int)> handler)
    {
        m_handlers[event] = handler;
    }

    // 分发事件
    void dispatch(int event, int fd)
    {
        auto it = m_handlers.find(event);
        if (it != m_handlers.end())
            it->second(fd);
    }

private:
    // 事件处理函数列表
    std::unordered_map<int, std::function<void(int)>> m_handlers;
};

int main()
{
    // 创建Reactor对象
    Reactor reactor;
    // 注册事件处理函数
    reactor.register_handler(1, [](int fd) { 
        std::cout << "Event 1 triggered on fd " << fd << std::endl; 
    });
    reactor.register_handler(2, [](int fd) { 
        std::cout << "Event 2 triggered on fd " << fd << std::endl; 
    });

    // 分发事件
    reactor.dispatch(1, 5);
    reactor.dispatch(2, 8);
    reactor.dispatch(3, 9); // 无法处理的事件

    return 0;
}

/* 输出结果:
Event 1 triggered on fd 5
Event 2 triggered on fd 8
*/
```

## 2

```cpp
#include <iostream>
#include <vector>
#include <map>
#include <sys/epoll.h>
#include <unistd.h>
#include <fcntl.h>

const int MAX_EVENT_NUMBER = 1024;

class EventHandler;

class Reactor
{
public:
    Reactor()
    {
        epollfd = epoll_create1(0);
    }
    void registerHandler(int fd, EventHandler *eh)
    {
        struct epoll_event event;
        event.data.ptr = eh;
        event.events = eh->getEvents();
        epoll_ctl(epollfd, EPOLL_CTL_ADD, fd, &event);
        fd2eh[fd] = eh;
    }

    void removeHandler(int fd)
    {
        epoll_ctl(epollfd, EPOLL_CTL_DEL, fd, nullptr);
        fd2eh.erase(fd);
    }

    void handleEvents()
    {
        int n = epoll_wait(epollfd, events, MAX_EVENT_NUMBER, -1);
        for (int i = 0; i < n; i++)
        {
            EventHandler *eh = static_cast<EventHandler *>(events[i].data.ptr);
            eh->handleEvents(events[i].events);
        }
    }

private:
    int epollfd;
    std::map<int, EventHandler *> fd2eh;
    struct epoll_event events[MAX_EVENT_NUMBER];
};

class EventHandler
{
public:
    virtual int getFd() = 0;
    virtual int getEvents() = 0;
    virtual void handleEvents(int events) = 0;
};

class IOEventHandler : public EventHandler
{
public:
    IOEventHandler(int fd)
    {
        this->fd = fd;
    }
    int getFd()
    {
        return fd;
    }

    int getEvents()
    {
        return events;
    }

    void handleEvents(int events)
    {
        if (events & EPOLLIN)
        {
            handleRead();
        }
        if (events & EPOLLOUT)
        {
            handleWrite();
        }
        if (events & EPOLLERR)
        {
            handleError();
        }
    }

private:
    int fd;
    int events;
    void handleRead()
    {
        std::cout << "handleRead" << std::endl;
    }

    void handleWrite()
    {
        std::cout << "handleWrite" << std::endl;
    }

    void handleError()
    {
        std::cout << "handleError" << std::endl;
    }
};

int main()
{
    Reactor reactor;
    int fd = open("test.txt", O_RDWR | O_NONBLOCK);
    IOEventHandler *ioeh = new IOEventHandler(fd);
    reactor.registerHandler(fd, ioeh);
    while (true)
    {
        reactor.handleEvents();
    }

    return 0;
}
```

这里没有考虑多线程情况，如果在多线程环境下使用该实现，需要对Reactor类进行线程同步处理。

另外，这里的代码只是简单实现了Reactor模式的基本功能，实际项目中还可能需要支持的功能包括：

- 超时处理：epoll_wait函数可以指定超时时间，如果超时时间到了但没有事件发生，则返回0，可以通过这种方式实现超时处理。
- 定时器处理：可以通过封装一个Timer类来实现定时器功能，定时器到期后可以触发相应的回调函数。
- 关闭处理：可以通过在Reactor中添加一个标志位来判断是否需要关闭，并在handleEvents函数中进行判断。
