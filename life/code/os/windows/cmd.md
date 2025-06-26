# CMD

## CMD 命令

可以用cmd /?查看帮助信息

* `cmd /c dir` 是执行完dir命令后关闭命令窗口。

* `cmd /k dir` 是执行完dir命令后不关闭命令窗口。

* `cmd /c start dir` 会打开一个新窗口后执行dir指令，原窗口会关闭。

* `cmd /k start dir` 会打开一个新窗口后执行dir指令，原窗口不会关闭。

## 恢复cmd默认配色

不知道哪次脑子抽了换成这种配色

![image.png](https://i.loli.net/2021/10/30/3QFsoKDjcbB6JRH.png)

然后试图恢复默认，为什么想要恢复，发现WebStorm里的控制台颜色也变了，，丑死了

![image.png](https://i.loli.net/2021/10/30/vVSBLnk8jI6Wdwe.png)

打开注册表 regedit

HKEY_CURRENT_USER - Console 将下面的全删了

![image.png](https://i.loli.net/2021/10/30/DF8ik9cX1VdbowW.png)

## .bat 使用 pause 不管用怎么办

正常来说是有用的。

但是有可能上一个命令直接把进程关了啥的，窗口就直接关闭了，等不到你 pause。

比如 `npm publish --registry http://xxxx`

设计两个脚本，一个是真正执行你任务的脚本 `yourscript.bat`，然后一个是用户使用的脚本 `test.bat`，其内容是：

```bat
start /B yourscript.bat
pause
```

## 跨脚本执行

:::danger 提示错误
Assertion failed: process_title, file c:\ws\deps\uv\src\win\util.c, line 412
:::

```bat
@REM start ""
@REM 第一个 "" 是窗口标题（如果为空就会出现上面的问题）。
@REM 去掉 /B 参数后，每个 start 会打开一个新窗口运行指定的批处理文件。

start "build_game" "build_game.bat"
start "build_life" "build_life.bat"
pause
```
