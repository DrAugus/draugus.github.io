# Tauri

What is Tauri?(Tauri [v2.0](https://v2.tauri.app/start/))

## 创建一个项目

跟着[官方教程](https://v2.tauri.app/start/create-project/)，创建应用

```bash
pnpm create tauri-app
# 选择你的项目名，技术栈等等，创建完毕后
cd tauri-app
pnpm install
pnpm tauri dev
```

## Build

`pnpm build`

:::warning [for ubuntu](https://v2.tauri.app/distribute/debian/)

```bash
sudo apt-get update
sudo apt-get install -y libwebkit2gtk-4.1-dev libgtk-3-dev
```

:::

## Pipelines(Github Action)

参考[官方教程](https://v2.tauri.app/distribute/pipelines/github/)

:::warning 注意环境变量

[所有环境变量](https://v2.tauri.app/reference/environment-variables/)，从1.0升级来的环境变量的[改动](https://v2.tauri.app/start/migrate/from-tauri-1/#environment-variables-changes)

- `TAURI_PRIVATE_KEY` -> `TAURI_SIGNING_PRIVATE_KEY`
- `TAURI_KEY_PASSWORD` -> `TAURI_SIGNING_PRIVATE_KEY_PASSWORD`

:::

## 自动升级

即官方文档的 [Updater](https://v2.tauri.app/plugin/updater/)

```bash
pnpm tauri add updater
pnpm tauri signer generate -w ~/.tauri/myapp.key
```

:::code-group

```json [tauri.conf.json]
{
  "bundle": {
    "createUpdaterArtifacts": true
  },
  "plugins": {
    "updater": {
      "pubkey": "CONTENT FROM PUBLICKEY.PEM",
      "endpoints": [
        "https://releases.myapp.com/{{target}}/{{arch}}/{{current_version}}",
        // or a static github json file
        "https://github.com/user/repo/releases/latest/download/latest.json"
      ]
    }
  }
}
```

:::

## QA

### Rust 更新

run `rustup update`
