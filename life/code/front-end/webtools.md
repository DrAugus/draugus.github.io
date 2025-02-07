# Web Tools

## node

### install

> [refer][node install]

use [official][node download] download, or use `nodesource` below

> [new refer](https://github.com/nodesource/distributions#nodejs)

```bash
# Download and import the Nodesource GPG key
sudo apt-get update
sudo apt-get install -y ca-certificates curl gnupg
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | sudo gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg
# Create deb repository
NODE_MAJOR=20 # 16 18 20 21
echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_$NODE_MAJOR.x nodistro main" | sudo tee /etc/apt/sources.list.d/nodesource.list
# Run Update and Install
sudo apt-get update
sudo apt-get install nodejs -y
```

Test installation using

```bash
node -v
npm version
npx -v
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

## QA

### nuxt dev catch error

ExperimentalWarning: The Fetch API is an experimental feature. This feature could change at any time

[solve][nuxt explain] or upgrade your node/npm/pnpm

[node install]: https://github.com/nodesource/distributions
[node download]: https://nodejs.org/en/download/
[pnpm install]: https://pnpm.io/installation
[nuxt explain]: https://github.com/nuxt/framework/issues/9524#issuecomment-1337698628

### 升级

```bash
pnpm install package@latest --save-dev
pnpm install vite@latest --save-dev
pnpm install vitepress@latest --save-dev
```
