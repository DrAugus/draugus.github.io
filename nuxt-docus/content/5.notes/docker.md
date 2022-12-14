---
icon: logos:docker-icon
---

# Docker

## [Linux install][install]

```shell
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin
sudo docker run hello-world
```

## build

当你使用 `docker build` 命令构建镜像时，镜像会被保存在你本地电脑上的 Docker 镜像仓库中。通常，这个仓库位于 `/var/lib/docker` 目录中。要查看镜像仓库中所有的镜像，可以使用 `docker images` 命令。如果你想要查看镜像的详细信息，可以使用 `docker inspect` 命令。

```shell
docker image build .
```

这样操作的 REPOSITORY TAG 都为 `<none>` 使用 `docker tag`

```shell
docker tag <image> <tag>
docker tag <your_image name or id> <tag>
docker tag my-img my-repo:my-tag
```

```shell
docker build -t my_image .
```

## run

运行 docker：

1. 启动 docker 服务：`sudo service docker start`
2. 进入 docker 终端：`docker run -it [image_name] /bin/bash`

在 docker 里运行命令：

1. 在 docker 终端中输入命令，按下回车执行。例如：`ls` 查看当前目录文件列表。
2. 也可以在运行 docker 时指定要执行的命令，例如：`docker run [image_name] ls` 查看当前目录文件列表。

退出 `exit` / `Ctrl + D`

## save

```shell
# 在 Linux 上将 Docker image my_image 打包为 tar 文件 my_image.tar
docker save my_image > my_image.tar

# 将 tar 文件复制到本地
scp my_image.tar user@localhost:~/

# 将 tar 文件导入到本地的 Docker 中
docker load < my_image.tar
```

## 第一个 docker

要写一个 Dockerfile，需要按照以下步骤进行：

1. 打开一个文本编辑器，新建一个文件，并命名为“Dockerfile”（注意文件名的大小写）。
2. 在文件中输入以下内容：

    ```dockerfile
    # 指定基础镜像
    FROM <base image>
    # 指定维护人员的名字和电子邮件地址
    MAINTAINER <name> <email>
    # 安装需要的软件包
    RUN <command>
    # 拷贝文件到容器中
    COPY <src> <dest>
    # 暴露容器中的端口
    EXPOSE <port>
    # 容器启动时运行的命令
    CMD <command>
    ```

3. 根据需要，修改上面各项内容的具体值。例如，如果你想基于 Ubuntu 镜像构建容器，那么 FROM 命令就应该写成：FROM ubuntu。

4. 保存文件，并在命令行中运行以下命令来构建镜像：

    ```shell
    docker build -t <image name> .
    ```

5. 构建完成后，就可以使用以下命令来运行容器：

    ```shell
    docker run -d -p <host port>:<container port> <image name>
    ```
　　
这样就完成了一个 Dockerfile 的编写。

　　需要注意的是，上面的内容是 Dockerfile 的基本结构和写法，但是实际写 Dockerfile 时还需要注意一些其他的事项。例如，你需要根据需要调整命令的执行顺序，确保每个命令都能够正常执行。此外，你还需要注意每个命令的格式，确保命令能够正确识别。

　　总之，写 Dockerfile 需要注意很多细节，需要结合实际情况来进行调整和优化。如果遇到问题，可以查阅相关文档或者询问更有经验的开发人员。

[install]: https://docs.docker.com/engine/install/ubuntu/#prerequisites
