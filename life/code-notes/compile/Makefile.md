# Makefile

## beginner

## higher

### 使用 Makefile.in 和 configure

Makefile.in 是一个模板文件，它指定了如何生成最终的 Makefile。它通常由项目的开发者提供，并且是一个文本文件。

Makefile.in 中可以包含各种指令，用来定义编译项目时所需的变量和规则。例如，下面是一个简单的 Makefile.in 示例：

```makefile [Makefile.in]
# define some variables
CC = gcc
CFLAGS = -g -O2

# define a target to build the executable
myapp: myapp.o
        $(CC) $(CFLAGS) -o myapp myapp.o

# define a target to clean up the project
clean:
        rm -f myapp myapp.o
```

要生成最终的 Makefile，需要使用 configure 工具。configure 工具是一个 [shell][shell] 脚本，它的作用是根据系统环境和项目的特定要求来生成 Makefile。

要编写一个 configure 脚本，需要了解 [shell][shell] 脚本语言，并且需要了解项目的特定环境和需求。一个简单的 configure 脚本示例如下所示：

```shell [configure]
#!/bin/bash

# check for the required compiler
if ! which gcc > /dev/null; then
  echo "Error: GCC is not installed"
  exit 1
fi

# check for the required libraries
if ! pkg-config --exists libfoo; then
  echo "Error: libfoo is not installed"
  exit 1
fi

# create the Makefile
echo "CC = gcc" > Makefile
echo "CFLAGS = -g -O2" >> Makefile
echo "" >> Makefile
echo "myapp: myapp.o" >> Makefile
echo -e "\t\$(CC) \$(CFLAGS) -o myapp myapp.o" >> Makefile
echo "" >> Makefile
echo "clean:" >> Makefile
echo -e "\trm -f myapp myapp.o" >> Makefile
```

[shell]: /code/program/lang/shell
