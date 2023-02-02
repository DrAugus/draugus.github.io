---
icon: fluent-emoji-flat:person-running-light
---
# Compile

## QA

### make[1]: *** No rule to make target

清除之前生成的 build

### can not be used when making a shared object

```shell
/usr/bin/ld: /usr/lib/gcc/x86_64-linux-gnu/7/crtbeginT.o: relocation R_X86_64_32 against hidden symbol `__TMC_END__' can not be used when making a shared object
```

### configure: error: C compiler cannot create executables

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
