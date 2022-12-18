---
icon: vscode-icons:file-type-cmake
title: CMakeLists
---

## 基本语法

### 变量

使用set命令显式定义及赋值，在非if语句中，使用${}引用，if中直接使用变量名引用；后续的set命令会清理变量原来的值；

```cmake
command (args ...) # 命令不分大小写，参数使用空格分隔，使用双引号引起参数中空格
set(var a;b;c) <=> set(var a b c) # 定义变量var并赋值为a;b;c这样一个string list
Add_executable(${var}) <=> Add_executable(a b c) # 变量使用${xxx}引用
```

### 条件语句

|逻辑值|常量值|
|:---:|:---:|
|true |1、ON、YES、TRUE、Y、非0数字|
|false| 0、OFF、NO、FALSE、N、IGNORE、NOTFOUNT、空字符串、-NOTFOUND结尾字符串|

```cmake
if(var)
#...
else()/elseif()
#...
endif(var)
```

```cmake
# 逻辑运算
if(NOT <condition>) # 非运算
if(<cond1> AND <cond2>) # 与运算
if(<cond1> OR <cond2>) #或运算
if((condition) AND (condition OR (condition))) # 有括号时，先计算括号的逻辑值

# 存在性判断
if(COMMAND command-name) # true 给定参数是可调用的命令、宏、函数时
if(POLICY policy-id) # true 给定的策略存在时
if(TARGET target-name) # true 给定的目标参数是通过add_executable()、add_library() 或 add_custom_target() 命令创建并存在的
if(TEST test-name) # true 给定参数是通过add_test()创建并存在的
if(DEFINED <name>|CACHE{<name>}|ENV{<name>}) # true 如果变量、缓存、环境变量存在（其取值无关）
if(<variable|string> IN_LIST <variable>) # true 如果<variable|string>存在于列表变量<variable>中

# 文件判断
# 以下路径参数可以为相对路径或绝对路径，相对是指相对于当前执行cmake的路径。
if(EXISTS path-to-file-or-directory) # true 如果文件/目录存在，当参数是连接时表示连接指向的实体存在。
if(file1 IS_NEWER_THAN file2) # true file1比file2新
if(IS_DIRECTORY path-to-directory) # true 如果参数是目录
if(IS_SYMLINK file-name)# true 如果参数是一个链接
if(IS_ABSOLUTE path) # true 如果参数是绝对路径

# 比较
# 正则匹配
if(<variable|string> MATCHES regex)
# 数字比较
if(<variable|string> LESS <variable|string>)       # <
if(<variable|string> GREATER <variable|string>)     # >
if(<variable|string> EQUAL <variable|string>)      # ==
if(<variable|string> LESS_EQUAL <variable|string>)   # <=
if(<variable|string> GREATER_EQUAL <variable|string>) # >=
# 字符串比较
if(<variable|string> STRLESS <variable|string>)       # <
if(<variable|string> STRGREATER <variable|string>)     # >
if(<variable|string> STREQUAL <variable|string>)      # ==
if(<variable|string> STRLESS_EQUAL <variable|string>)   # <=
if(<variable|string> STRGREATER_EQUAL <variable|string>) # >=
# 版本号比较
if(<variable|string> VERSION_LESS <variable|string>)       # <
if(<variable|string> VERSION_GREATER <variable|string>)     # >
if(<variable|string> VERSION_EQUAL <variable|string>)      # ==
if(<variable|string> VERSION_LESS_EQUAL <variable|string>)   # <=
if(<variable|string> VERSION_GREATER_EQUAL <variable|string>) # >=
```

### 循环语句

```cmake
Set(VAR a b c)
Foreach(f ${VAR})
#...
Endforeach(f)
```

```cmake
WHILE()
#...
ENDWHILE()
```

## others

### 导入库文件

需要添加的内容包括

1.库文件搜索路径: `link_directories`(输入你的MinGW中的lib文件夹的完整路径，不用引号)

2.需要添加的库名称： 这里我用到的库是ws2_32库文件，因此添加的内容是：link_libraries(ws2_32)

以上内容需要添加在`add_executable`前。 在`add_executable`后加上`target_link_libraries("执行名称"空格库名)`
即`target_link_libraries(YOUR_PROJECT ws2_32)`

### 一个示例

```cmake
set(LINK_DIR /usr/lib2/libnet-1.2-rc3/src/.libs)
set(LINK_DIR2 /usr/lib2/libpcap-1.0.0)
set(PRO simple_network_sniffer)
#1.cmake verson，指定cmake版本
cmake_minimum_required(VERSION 3.2)

#2.project name，指定项目的名称，一般和项目的文件夹名称对应
PROJECT(${PRO})

#3.head file path，头文件目录
INCLUDE_DIRECTORIES(
        ../include
)
link_directories(${LINK_DIR}
        ${LINK_DIR2})
link_libraries(net pcap)

#4.source directory，源文件目录
AUX_SOURCE_DIRECTORY(../src DIR_SRCS)

#5.set environment variable，设置环境变量，编译用到的源文件全部都要放到这里，否则编译能够通过，但是执行的时候会出现各种问题，比如"symbol lookup error xxxxx , undefined symbol"
#SET(TEST_MATH ${DIR_SRCS})

#6.add executable file，添加要编译的可执行文件
ADD_EXECUTABLE(${PRO} ${DIR_SRCS})

#7.add link library，添加可执行文件所需要的库，比如我们用到了libm.so（命名规则：lib+name+.so），就添加该库的名称
TARGET_LINK_LIBRARIES(${PRO} net pcap)
```

## 内部变量

`CMAKE_C_COMPILER`：指定C编译器

`CMAKE_CXX_COMPILER`：

`CMAKE_C_FLAGS`：编译C文件时的选项，如-g；也可以通过`add_definitions`添加编译选项

`EXECUTABLE_OUTPUT_PATH`：可执行文件的存放路径

`LIBRARY_OUTPUT_PATH`：库文件路径

`CMAKE_BUILD_TYPE`：build类型(Debug, Release, ...)，CMAKE_BUILD_TYPE=Debug

`BUILD_SHARED_LIBS`：Switch between shared and static libraries

内置变量的使用：

* 在CMakeLists.txt中指定，使用set
* cmake命令中使用，如`cmake -DBUILD_SHARED_LIBS=OFF`

## 命令

project(HELLO)#指定项目名称，生成的VC项目的名称；

> 使用${HELLO_SOURCE_DIR}表示项目根目录

include_directories：指定头文件的搜索路径，相当于指定gcc的-I参数

> include_directories (${HELLO_SOURCE_DIR}/Hello)#增加Hello为include目录

link_directories：动态链接库或静态链接库的搜索路径，相当于gcc的-L参数

> link_directories (${HELLO_BINARY_DIR}/Hello)#增加Hello为link目录

add_subdirectory：包含子目录

> add_subdirectory (Hello)

add_executable：编译可执行程序，指定编译，好像也可以添加.o文件

> add_executable (helloDemo demo.cxx demo_b.cxx)#将cxx编译成可执行文件——

add_definitions：添加编译参数

> add_definitions(-DDEBUG)将在gcc命令行添加DEBUG宏定义；

> add_definitions( “-Wall -ansi –pedantic –g”)

target_link_libraries：添加链接库,相同于指定-l参数

> target_link_libraries(demo Hello) #将可执行文件与Hello连接成最终文件demo

add_library:

> add_library(Hello hello.cxx)#将hello.cxx编译成静态库如libHello.a

add_custom_target:

message( status|fatal_error, “message”):

set_target_properties( ... ): lots of properties... OUTPUT_NAME, VERSION, ....

link_libraries( lib1 lib2 ...): All targets link with the same set of libs

### 注意

CMAKE生成的makefile能够处理好.h文件更改时只编译需要的cpp文件

## FAQ

1）怎样获得一个目录下的所有源文件

```cmake
aux_source_directory(<dir> <variable>)
```

* 将dir中所有源文件（不包括头文件）保存到变量variable中，然后可以add_executable (ss7gw ${variable})这样使用。

2）怎样指定项目编译目标

* `project`命令指定

3）怎样添加动态库和静态库

* `target_link_libraries`命令添加即可

4）怎样在执行CMAKE时打印消息

```cmake
message([SEND_ERROR | STATUS | FATAL_ERROR] "message to display" ...)
```

* **注意大小写**

5）怎样指定头文件与库文件路径

* `include_directories`与`link_directories`

* 可以多次调用以设置多个路径

* `link_directories`仅对其后面的targets起作用

6）怎样区分debug、release版本

* 建立debug/release两目录，分别在其中执行`cmake -DCMAKE_BUILD_TYPE=Debug`(`cmake -DCMAKE_BUILD_TYPE=Release`)
  ，需要编译不同版本时进入不同目录执行make即可；

**Debug版会使用参数`-g`；Release版使用`-O3 –DNDEBUG`**

* 另一种设置方法——例如DEBUG版设置编译参数`DDEBUG`

```cmake
IF (DEBUG_mode)
    add_definitions(-DDEBUG)
ENDIF ()
```

在执行cmake时增加参数即可，例如`cmake -D DEBUG_mode=ON`

7）怎样设置条件编译

例如debug版设置编译选项DEBUG，并且更改不应改变CMakelists.txt

* 使用option command，eg：

```cmake
option(DEBUG_mode "ON for debug or OFF for release" ON)
IF (DEBUG_mode)
    add_definitions(-DDEBUG)
ENDIF ()
```

* 使其生效的方法：首先cmake生成makefile，然后make edit_cache编辑编译选项；Linux下会打开一个文本框，可以更改，该完后再make生成目标文件——emacs不支持make edit_cache；

* `局限`：这种方法不能直接设置生成的makefile，而是必须使用命令在make前设置参数；对于debug、release版本，相当于需要两个目录，分别先cmake一次，然后分别make edit_cache一次；

* `期望的效果`：在执行cmake时直接通过参数指定一个开关项，生成相应的makefile——可以这样做，例如`cmake –DDEBUGVERSION=ON`

8）怎样添加编译宏定义

* 使用`add_definitions`命令，见命令部分说明

9）怎样添加编译依赖项 用于确保编译目标项目前依赖项必须先构建好

* `add_dependencies`

10）怎样指定目标文件目录

* 建立一个新的目录，在该目录中执行cmake生成Makefile文件，这样编译结果会保存在该目录——类似

```cmake
SET_TARGET_PROPERTIES(ss7gw PROPERTIES
        RUNTIME_OUTPUT_DIRECTORY "${BIN_DIR}")
```

11）很多文件夹，难道需要把每个文件夹编译成一个库文件？

* 可以不在子目录中使用CMakeList.txt，直接在上层目录中指定子目录

12）怎样设定依赖的cmake版本

* `cmake_minimum_required(VERSION 2.6)`

13）相对路径怎么指定

* `${projectname_SOURCE_DIR}`表示根源文件目录，`${projectname_BINARY_DIR}`表示根二进制文件目录？

14）怎样设置编译中间文件的目录

* `TBD`

15）怎样在IF语句中使用字串或数字比较

* 数字比较`LESS、GREATER、EQUAL`，字串比较`STRLESS、STRGREATER、STREQUAL`，

* Eg：

```cmake
set(CMAKE_ALLOW_LOOSE_LOOP_CONSTRUCTS ON)
set(AAA abc)
IF (AAA STREQUAL abc)
    message(STATUS "true")#应该打印true
ENDIF ()
```

16）更改h文件时是否只编译必须的cpp文件

* 是

17）机器上安装了VC7和VC8，CMAKE会自动搜索编译器，但是怎样指定某个版本？

* `TBD`

18）怎样根据OS指定编译选项

* `IF( APPLE ); IF( UNIX ); IF( WIN32 )`

19）能否自动执行某些编译前、后命令？

* 可以，TBD

20）怎样打印make的输出

* make VERBOSE=1
