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

dockerfile_name 可以在同一项目里放置多个 dockerfile

```shell
docker build -t my_image -f dockerfile_name .
```

## run

运行 docker：

1. 启动 docker 服务：`sudo service docker start`
2. 进入 docker 终端：`docker run -it [image_name] /bin/bash`

在 docker 里运行命令：

1. 在 docker 终端中输入命令，按下回车执行。例如：`ls` 查看当前目录文件列表。
2. 也可以在运行 docker 时指定要执行的命令，例如：`docker run [image_name] ls` 查看当前目录文件列表。

退出 `exit` / `Ctrl + D`

## exec

在运行的容器中执行命令

```bash
docker exec [OPTIONS] CONTAINER COMMAND [ARG...]
```

OPTIONS说明

- `-d`: 分离模式: 在后台运行
- `-i`: 即使没有附加也保持STDIN 打开
- `-t`: 分配一个伪终端

e.g.

```bash
docker exec -it container_id /bin/bash
```

## save

```shell
# 在 Linux 上将 Docker image my_image 打包为 tar 文件 my_image.tar
docker save my_image > my_image.tar

# 将 tar 文件复制到本地
scp my_image.tar user@localhost:~/

# 将 tar 文件导入到本地的 Docker 中
docker load < my_image.tar
```

## multi-stage

### 参数传递

::list

- ARG 声明传入的参数
- FROM 分隔了不同的构建阶段
- 不同构建阶段必须先声明 ARG 后才能使用
::

```docker [e.g.]
ARG COMMIT_ID
ARG APP_VERSION

# stage 1
FROM augus/basin-env:latest AS stage-compile

ARG COMMIT_ID

ENV WORK_PATH /augus

WORKDIR ${WORK_PATH}
RUN ${WORK_PATH}/a.sh ${COMMIT_ID}


# stage 2
FROM debian:latest AS stage-runtime

ARG COMMIT_ID
ARG APP_VERSION

ENV WORK_PATH /augus
ENV PROJECT_NAME "AUGUS"
ENV PROJECT_SYS_TYPE "Linux_x86_64"
ENV RELEASE ${PROJECT_NAME}_v${APP_VERSION}_${PROJECT_SYS_TYPE}_${COMMIT_ID}.deb

RUN echo ${RELEASE}

WORKDIR ${WORK_PATH}
COPY --from=stage-compile ${WORK_PATH}/${RELEASE} .
```

通过 `--build-arg KEY="VAL"` 传入参数

### 指定阶段

```shell
docker build --target stage-runtime -t augus/test:runtime .
```

### 阶段内引用

```docker
FROM debian:latest AS base
# ...
FROM base AS derive
# ...
FROM derive AS son
# ...
```

## check docker

初始化判断docker中某镜像是否存在

```shell
CON=`docker image ls 'augus:latest' | wc -l`
if [ $CON -eq 2 ]  #CON取值为2表示镜像存在，为1镜像不存在
then
docker rmi augus  #镜像存在时remove
fi
```

## cp

### dockerfile 内互相拷贝

参考上面的 e.g.

### 一个docker里的文件迁移到另一个docker

要将一个Docker容器中的文件迁移到另一个Docker容器，你需要使用Docker的`cp`命令。首先，使用`docker ps`命令查看正在运行的Docker容器的ID。然后，使用以下命令将文件从源容器复制到目标容器：

```shell
docker cp [source_container_id]:/path/to/source/file [target_container_id]:/path/to/target/file
```

例如，如果要将一个名为`myfile.txt`的文件从源容器`4fa6e0f0c67a`复制到目标容器`8dbd9e392a96`，你可以使用以下命令：

```shell
docker cp 4fa6e0f0c67a:/myfile.txt 8dbd9e392a96:/myfile.txt
```

请注意，在上面的命令中，`/path/to/source/file`和`/path/to/target/file`都是相对于Docker容器中的根目录的路径。因此，如果文件在Docker容器中的其他目录下，你需要指定完整的路径。

## 第一个 docker

要写一个 Dockerfile，需要按照以下步骤进行：

1. 打开一个文本编辑器，新建一个文件，并命名为“Dockerfile”（注意文件名的大小写）。
2. 在文件中输入以下内容：

    ```docker
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

## sol

### debian 源加入 阿里云 的镜像源 会抛出 Certificate verification failed

Certificate verification failed: The certificate is NOT trusted. The certificate issuer is unknown. Could not handshake: Error in the certificate verification.

todo

### 不同系统可能出现不同的问题

在一次 docker 编译 c++ 代码实践中，mac 平台出现 `Relocations in generic ELF (EM: 62)` 异常，linux 平台可以正常编译

### docker 源超时问题

加上[国内源](./linux/sys_category#官方源超时)，在 dockerfile 里导入

```docker
RUN cp /etc/apt/sources.list /etc/apt/sources.list.bak
COPY source_aliyun /home
RUN cat /home/source_aliyun >> /etc/apt/sources.list
RUN apt-get update
```

### Error: You don't have enough free space in /var/cache/apt/archives/

[refer](https://github.com/onyx-platform/onyx-starter/issues/5#issuecomment-276562225), [refer](https://github.com/onyx-platform/onyx-starter/issues/5#issuecomment-736082622)

```shell
docker system prune
```

----

## refer

::list

- [Docker 从入门到实践](https://yeasy.gitbook.io/docker_practice/)
- [Dockerfile 多阶段构建](https://yeasy.gitbook.io/docker_practice/image/multistage-builds)
- [Multi-stage builds](https://docs.docker.com/build/building/multi-stage/)
::
