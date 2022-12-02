# 遇到的问题速查

> 代码过程遇到的一些问题速查表

## OS error code 4: Interrupted system call



## error: invalid storage class for function  

报错的函数的前面的那一个函数{}不配对

## 地址消毒器

为什么必须是下面这个顺序？暂时还不晓得

```cmake
set_target_properties (app PROPERTIES LINK_FLAGS "-fsanitize=address")
set_target_properties (app PROPERTIES LINK_FLAGS "-static")
set_target_properties (app PROPERTIES LINK_FLAGS "-lpthread")
```

原本是这样的

```cmake
set_target_properties (app PROPERTIES LINK_FLAGS "-static")
set_target_properties (app PROPERTIES LINK_FLAGS "-lpthread")
set_target_properties (app PROPERTIES LINK_FLAGS "-fsanitize=address")
```

抛出错误
```txt
undefined reference to symbol 'pthread_join@@GLIBC_2.0'
//lib/i386-linux-gnu/libpthread.so.0: error adding symbols: DSO missing from command line
collect2: error: ld returned 1 exit status
```

## segfault at 11 ip 00007f24b21adcee sp 00007fff7379ded0 error 4 in...

[refer][segfault]

run `addr2line -e yourSegfaultingProgram 00007f9bebcca90d`

- `address` (after the at) - the location in memory the code is trying to access (it's likely that 10 and 11 are offsets from a pointer we expect to be set to a valid value but which is instead pointing to 0)
- `ip` - instruction pointer, ie. where the code which is trying to do this lives
- `sp` - stack pointer
- `error` - An error code for page faults; see below for what this means on x86 ([link]).

```h
/*
 * Page fault error code bits:
 *
 *   bit 0 ==    0: no page found       1: protection fault
 *   bit 1 ==    0: read access         1: write access
 *   bit 2 ==    0: kernel-mode access  1: user-mode access
 *   bit 3 ==                           1: use of reserved bit detected
 *   bit 4 ==                           1: fault was an instruction fetch
 *   bit 5 ==                           1: protection keys block access
 *   bit 15 ==                          1: SGX MMU page-fault
 */
```



 [link]: https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/tree/arch/x86/include/asm/trap_pf.h?h=v5.16#n5
 [segfault]: https://stackoverflow.com/questions/2549214/interpreting-segfault-messages