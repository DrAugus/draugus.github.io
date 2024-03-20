import type { CardData } from '../type';

const prefixLinks = '/code/cpp/lib/';

export const CPP_LIBS_DATA: CardData[] = [
    {
        title: 'cpp 库待分类',
        items: [
            {
                icon: "",
                title: 'STL',
                desc: {
                    intro: "",
                    homepage: "https://en.cppreference.com/w/cpp/standard_library",
                },
                link: `${prefixLinks}stl`
            },
            {
                icon: "",
                title: 'Boost',
                desc: {
                    intro: "Boost provides free peer-reviewed portable C++ source libraries.",
                    homepage: "https://www.boost.org/",
                    guide: "https://www.boost.org/doc/"
                },
                link: `${prefixLinks}Boost`
            },
            {
                icon: "https://www.actor-framework.org/static/img/caf-logo.png",
                title: 'Actor Framework',
                desc: {
                    intro: "<b>CAF</b> offers a high-level programming environment based on the Actor Model of computation combined with an efficient, native runtime environment that lets you build scalable applications. For example, software for molecular research, communication backends for distributed network security monitoring or even massive multiplayer online games.",
                    repo: "https://github.com/actor-framework/actor-framework",
                    homepage: "https://www.actor-framework.org/",
                    guide: "https://www.cafcademy.com/articles",
                    others: [
                        {
                            text: "Developer Blog",
                            link: "https://www.actor-framework.org/blog"
                        },
                        {
                            text: "Manual",
                            link: "https://actor-framework.readthedocs.io"
                        },
                        {
                            text: "Doxygen",
                            link: "https://www.actor-framework.org/doxygen/"
                        }
                    ]
                },
                link: `${prefixLinks}actor`
            },

            {
                icon: "https://api.iconify.design/simple-icons:zeromq.svg",
                title: 'ZeroMQ',
                desc: {
                    intro: "<b>ZeroMQ</b> (also known as ØMQ, 0MQ, or zmq) looks like an embeddable networking library but acts like a concurrency framework. It gives you sockets that carry atomic messages across various transports like in-process, inter-process, TCP, and multicast. You can connect sockets N-to-N with patterns like fan-out, pub-sub, task distribution, and request-reply. It's fast enough to be the fabric for clustered products. Its asynchronous I/O model gives you scalable multicore applications, built as asynchronous message-processing tasks. It has a score of language APIs and runs on most operating systems.",
                    repo: "https://github.com/zeromq/cppzmq",
                    homepage: "https://zeromq.org/",
                    guide: "https://zguide.zeromq.org/",
                },
                link: `${prefixLinks}cppzmq`
            },
            {
                icon: "",
                title: 'libevent',
                desc: {
                    intro: "The libevent API provides a mechanism to execute a callback function when a specific event occurs on a file descriptor or after a timeout has been reached. Furthermore, libevent also support callbacks due to signals or regular timeouts.",
                    repo: "https://github.com/libevent/libevent",
                    homepage: "https://libevent.org/",
                    guide: "https://zguide.zeromq.org/",
                },
                link: `${prefixLinks}libevent`
            },
            {
                icon: "",
                title: 'libuv',
                desc: {
                    intro: "libuv is a multi-platform support library with a focus on asynchronous I/O. It was primarily developed for use by Node.js, but it's also used by Luvit, Julia, uvloop, and others.",
                    repo: "https://github.com/libuv/libuv",
                    homepage: "https://libuv.org/",
                    guide: "https://docs.libuv.org/en/v1.x/guide.html",
                },
                link: `${prefixLinks}libuv`
            },
            {
                icon: "",
                title: 'LuaJIT',
                desc: {
                    intro: "LuaJIT is a Just-In-Time (JIT) compiler for the Lua programming language.",
                    repo: "https://github.com/LuaJIT/LuaJIT",
                    homepage: "https://luajit.org/",
                },
                link: `${prefixLinks}LuaJIT`
            },
            {
                icon: "",
                title: 'protobuf',
                desc: {
                    intro: "Protocol Buffers (a.k.a., protobuf) are Google's language-neutral, platform-neutral, extensible mechanism for serializing structured data.",
                    repo: "https://github.com/protocolbuffers/protobuf",
                    homepage: "https://protobuf.dev/",
                    guide: "https://protobuf.dev/getting-started/cpptutorial/",
                    others: [
                        {
                            text: "CPP Install",
                            link: "https://github.com/protocolbuffers/protobuf/blob/main/src/README.md"
                        }
                    ]
                },
                link: `${prefixLinks}protobuf`
            },
            {
                icon: "",
                title: 'RapidJSON',
                desc: {
                    intro: "A fast JSON parser/generator for C++ with both SAX/DOM style API",
                    repo: "https://github.com/Tencent/rapidjson/",
                    homepage: "https://rapidjson.org/",
                },
                link: `${prefixLinks}RapidJSON`
            },

        ]
    },
];
