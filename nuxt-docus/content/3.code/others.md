# 一些有的没的

## 关于网狐棋牌框架

- `CTCPSocketService`用来处理各个服务器之间的通信的 `TCPNetworkEngine`用来和客户端用户之间的通信
- 同时`TCPNetworkEngine`还承担`CTCPSocketService`处理过的消息的转发
- `CTCPSocketService`应用了windows下两种常见的socket通信模式
  - `WSAAsyncSelect`异步I/O模型处理各个服务器之间的通信
  - 完成端口模型，为windows下特有的通信模型，支持高并发的模型

## 同时使用GitHub和GitLab

想要在同一项目里使用不同的远端仓库，使用不同的用户名邮箱来推送。找到了一个方案，本地能够改好，但是似乎不能生效。[☞](https://www.cnblogs.com/popfisher/p/5731232.html)
