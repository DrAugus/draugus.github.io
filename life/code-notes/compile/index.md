---
icon: fluent-emoji-flat:person-running-light
---
# Compile

## cannot bind ... lvalue to ...

`error: cannot bind 'std::ostream {aka std::basic_ostream<char>}' lvalue to 'std::basic_ostream<char>&&'`

## make[1]: *** No rule to make target

清除之前生成的 build

## can not be used when making a shared object

```shell
/usr/bin/ld: /usr/lib/gcc/x86_64-linux-gnu/7/crtbeginT.o: relocation R_X86_64_32 against hidden symbol `__TMC_END__' can not be used when making a shared object
```

## configure: error: C compiler cannot create executables

在 x64 位机器上编译 x86 位程序时，报错 `configure: error: C compiler cannot create executables`。

```bash
# 确认主机内核为 x64 输出 amd64
dpkg --print-architecture 
# 确认打开了多架构支持 输出 i386
dpkg --print-foreign-architectures
# 若没有
dpkg --add-architecture i386 && apt-get update
# 安装 gcc multilib
apt-get install  gcc-multilib g++-multilib 
# 编译加上 -m32
```

## error adding symbols: DSO missing from command line

```txt
/usr/bin/ld: build/release/objs/index_conn.o: undefined reference to symbol '_ZN5boost6system15system_categoryEv'
//usr/lib/x86_64-linux-gnu/libboost_system.so.1.55.0: error adding symbols: DSO missing from command line
collect2: error: ld returned 1 exit status
make[1]: *** [build/release/query_runner] Error 1
```

sol: flag add `-lboost_system`, `:LDFLAGS += -L/usr/lib/boost -lboost_thread -lpthread -lboost_system`

## undefined reference to `dpi_number_columns'

没有 -l此库

## is incompatible with i386:x86-64 output

/usr/bin/ld: i386 architecture of input file `xxx.a(log.o)' is incompatible with i386:x86-64 output

将 xxx.a 库在当前机器上重新编译 或者 flag + `-m32`  
cmake `set_target_properties (your_project PROPERTIES LINK_FLAGS "-m32")`

## -D_FILE_OFFSET_BITS=64

<https://digital-domain.net/largefiles.html>
