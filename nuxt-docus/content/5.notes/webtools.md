---
icon: logos:web-dev-icon
---

# web tools

- node
- npm
- pnpm
- yarn

## node

### install

> [refer][node install]

use [official][node download] download, or use `nodesource` below

::code-group

```bash [Ubuntu]
curl -fsSL https://deb.nodesource.com/setup_19.x | sudo -E bash - &&\
sudo apt-get install -y nodejs
```

```bash [Debian, as root]
curl -fsSL https://deb.nodesource.com/setup_19.x | bash - &&\
apt-get install -y nodejs
```

::

```bash [Current]
curl -fsSL https://deb.nodesource.com/setup_current.x | sudo -E bash - &&\
sudo apt-get install -y nodejs
```

## npm

### install

to download the latest version of npm, on the command line, run the following command:

```shell
npm install -g npm
```

check

```shell
node -v
npm -v
```

## pnpm

### install

> [refer][pnpm install]

```shell
npm install -g pnpm
```

## yarn

1. 查看当前 yarn 版本

   ```shell
   yarn -v
   ```

2. 获取当前最新 yarn 版本

    ```shell
    npm view yarn version
    ```

3. 使用npm升级 yarn 版本

    ```shell
    npm install yarn@1.22.19 -g
    ```

4. 查看升级后版本

    ```shell
    yarn -v
    ```

[node install]: https://github.com/nodesource/distributions
[node download]: https://nodejs.org/en/download/
[pnpm install]: https://pnpm.io/installation
