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
