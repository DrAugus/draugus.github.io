# 米哈游 cookie

## 获取米哈游 cookie

> 登陆账号后，直接在 F12 网络/network 里查看 `ys/` 内的 cookie，或者使用 console 命令 `document.cookie`，获取到的 cookie 都无法使用

参考了一些文章/文档，尝试后，这里提供一种方法，来获取 cookie。

> 仅提供电脑端获取 Edge/Safari/Google Chrome

首先进入米哈游通行证(<https://user.mihoyo.com>)并登陆，不要注销登录。  
然后，打开米游社(<https://bbs.mihoyo.com/ys>)并登陆。打开开发者工具（F12或者Fn+F12，Safari需要在偏好设置里先启用开发者工具），切换到 `网络/network` 这一栏。刷新网页重新加载，如果网页停住，需要去掉调试断点。在 `All/全部` 最上方找到`ys/`，点进去，找到以 cookie 字样开头的地方，这一栏全部的内容就是cookie。
