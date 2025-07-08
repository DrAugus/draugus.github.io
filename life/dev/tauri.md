# Tauri

What is Tauri?(Tauri [v2.0](https://v2.tauri.app/start/))

## 创建一个项目

跟着[官方教程](https://v2.tauri.app/start/create-project/)，创建应用

```bash
pnpm create tauri-app
# 输入你的项目名，选择技术栈等等，创建完毕后
cd tauri-app
pnpm install
pnpm tauri dev
```

第一步  
修改你的界面，替换原有的模板界面，完善你的功能逻辑。

选择软件样式，如选择 `element-plus` 按需引入

```bash
pnpm add element-plus -D
pnpm add unplugin-element-plus -D
```

:::code-group

```ts [vite.config.ts]
import ElementPlus from 'unplugin-element-plus/vite';

export default defineConfig(async () => ({
  plugins: [
    ElementPlus({
      // useSource: true,
    }),
  ],
}));  
```

:::

`Cargo.toml` 中的，`description`、`authors` 注意修改。

## Build

`pnpm build`

:::warning [for ubuntu](https://v2.tauri.app/distribute/debian/)

```bash
sudo apt-get update
sudo apt-get install -y libwebkit2gtk-4.1-dev libgtk-3-dev
```

:::

### Build iOS  

参考 tauri 官方[分发](https://tauri.app/distribute/app-store/)

```bash
pnpm tauri ios init
```

After running `tauri ios init` to setup the Xcode project, you can use the `tauri icon` command to update the app icons.

```bash
pnpm tauri icon app-icon.png --ios-color '#fff' # 官方没加引号不好使，加了引号即 ok
```

:::warning `tauri ios init` 可能遇到的问题

```bash
# 如果缺少 rustup
brew install rustup # danger: 不能这么安装
# 可能提示缺少 toolchain 中国人先 设置源 再安装 toolchain
# 设置 rustup 的镜像源（清华）
export RUSTUP_DIST_SERVER=https://mirrors.tuna.tsinghua.edu.cn/rustup
export RUSTUP_UPDATE_ROOT=https://mirrors.tuna.tsinghua.edu.cn/rustup/rustup
rustup default stable
# 再次运行 pnpm tauri ios init 会提示缺少 cocoapods
brew intall cocoapods
pnpm tauri ios init
```

:::

在 Xcode 中打开项目

```bash
pnpm tauri ios build --open
```

之后，你的项目名字假设为 demo，则在 demo_iOS 应用中（TARGETS 里）选择 Signing & Capabilities - All - Signing 打开 Auto  
而后执行 `tauri ios build --export-method app-store-connect`

```bash
pnpm tauri ios build --export-method app-store-connect
```

:::details 遇到错误 error[E0463]: can't find crate for `std`

```rs
error[E0463]: can't find crate for `std`
  |
  = note: the `aarch64-apple-ios` target may not be installed
  = help: consider downloading the target with `rustup target add aarch64-apple-ios`

For more information about this error, try `rustc --explain E0463`.
```

是因为前面用 brew 装了 rustup，不能这么安装，需要去官网执行命令安装（参考：[uninstalling rust and reinstalling (without using brew)](https://github.com/tauri-apps/tauri/issues/12026#issuecomment-2558936709)）

:::

The generated IPA file can be found in `src-tauri/gen/apple/build/arm64/$APPNAME.ipa`.  
Now you can use the `altool` CLI to upload your iOS app to the App Store:

```bash
export APPNAME=
export APPLE_API_KEY_ID=
export APPLE_API_ISSUER=
```

```bash
xcrun altool --upload-app --type ios --file "src-tauri/gen/apple/build/arm64/$APPNAME.ipa" --apiKey $APPLE_API_KEY_ID --apiIssuer $APPLE_API_ISSUER
```

[**Authentication**](https://tauri.app/distribute/app-store/#authentication)  
To create a new API key, open the [App Store Connect's Users and Access page](https://appstoreconnect.apple.com/access/users), select the Integrations(集成) > Individual Keys tab, click on the Add button and select a name and the Developer access.

:::warning 可能遇到的问题

1. Multitasking iPad

Validation failed (409) Invalid bundle. Apps that support Multitasking on iPad must provide the app’s launch screen using an Xcode storyboard, or using UILaunchScreen if the app’s MinimumOSVersion is 14 or higher. Verify that the UILaunchStoryboardName key is included in your com.appname.app bundle if you’re using a storyboard. For details, see: <https://developer.apple.com/documentation/bundleresources/information_property_list/uilaunchstoryboardname> (ID: 58111d82-29b8-458a-8616-199fa31b6783)

**SOL**: TARGETS - General - Deployment Info - 勾选 **Requires full screen**

2. Alpha icon

Validation failed (409) Invalid large app icon. The large app icon in the asset catalog in “appname.app” can’t be transparent or contain an alpha channel. For details, visit: <https://developer.apple.com/design/human-interface-guidelines/app-icons>. (ID: e293c85f-d4c4-4609-8ab3-40837f8af198)

**SOL**: 打开图片，选择 文件 - 导出，去掉 alpha 勾选，保存重新用 `tauri icon` 生成即可

3. project.yml

missing project.yml file in the Xcode project directory: Operation not permitted (os error 1)  
       **Error** missing project.yml file in the Xcode project directory: Operation not permitted (os error 1)  
 ELIFECYCLE  Command failed with exit code 1.

**SQL**: [set the property `ENABLE_USER_SCRIPT_SANDBOXING` to **'No'**.](https://stackoverflow.com/a/76626156)

4. permission not found

Permission updater:default not found, expected one of...

**SQL**: 看是否是平台对应的 [capabilities](https://v2.tauri.app/security/capabilities/) 漏掉了，有三种 `default`, `desktop`, `mobile`
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

### iOS 开发相关

#### 某些标签/组件在 iOS 显示异常

排查 CSS 是否使用了 `env`，Tauri 的 iOS WebView 默认不支持 `env()` ……

#### 应用上部和下部出现了黑边

尚未发现诱因，可能是 Xcode 导致的，删除 `gen/apple` 目录，重新初始化 iOS 即可修复

### ICON

准备一个尺寸为 1240 x 1240 的 PNG 图片或者正方形的 SVG，文件命名为 `app-icon.png`，放在项目的根目录。而后执行 `pnpm tauri icon` 即可一键生成所有图标。

### Rust 更新

run `rustup update`

### defined multiple times

```rs
error[E0255]: the name `__cmd__add_info` is defined multiple times
   --> src\lib.rs:115:8
    |
114 | #[command]
    | ---------- previous definition of the macro `__cmd__add_info` here
115 | pub fn add_info(info: Saving) -> Result<(), String> {
    |        ^^^^^^^^ `__cmd__add_info` reimported here
    |
    = note: `__cmd__add_info` must be defined only once in the macro namespace of this module

```

`pub` 和 `#[command]` 冲突了，移除 `pub` 即可
