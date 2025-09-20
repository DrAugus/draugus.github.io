# App Store

## QA

### 操作失败，未能打开文件，因为你没有查看它的权限

```swift
// 确保我们可以访问文件
guard url.startAccessingSecurityScopedResource() else {
    return
}
```

## 苹果开发账户

下载 Developer App 注册，年费 **$99**。等待注册成功邮件，如下：

:::tip xxx你好
感谢你加入 Apple Developer Program。我们很高兴能够为你的工作提供支持，帮助你将奇思妙想化为现实。加入该计划后，你可以访问一整套资源，用于构建、测试和分发面向 Apple 平台的创新 App。
:::

## 创建AppID、证书、描述文件

### 登录开发者账户

打开Apple开发者登录页 <http://developer.apple.com/account>
如果是第一次登录或用户账户登录，会出现【双重认证】窗口，此时需要输入注册账户相关人员提供的6位验证码

### 添加用户访问

如果需要添加用户访问，账户页，计划资源 - **App Store Connect** - **用户和访问**

![img](/img/dev/apple/account.jpg)

### 创建 App ID

账户页，计划资源，证书、标识符和描述文件（Certificates, Identifiers & Profiles），选择**标识符**（Identifiers）  
而后，点击侧边 **Identifiers** 标签，进入点击加号，依次选择：App IDs - Continue - select App - Continue - 输入 Description 和 Bundle ID （如果是 tauri 对应 `tauri.conf.json` 的 identifier），Capabilities 选择你需要的，点击 Continue 而后 Register。此时 您添加的 App ID 已经显示在 Identifiers 列表中。

### 创建开发证书（打包证书）

账户页，计划资源，证书、标识符和描述文件（Certificates, Identifiers & Profiles），选择**证书**（Certificates）  
而后，点击侧边 **Certificates** 标签，进入点击加号，依次选择：iOS Distribution (App Store Connect and Ad Hoc) - Continue 进入 Upload a Certificate Signing Request 页面，此时需要 CSR 文件

:::details 创建 CSR 文件
打开**钥匙串访问**（key Chain）应用  
按图选择，证书助理 - 从证书颁发机构请求证书...
![img](/img/dev/apple/csr.jpg)
填好邮件、名称，保存到磁盘。最终得到一个 CertificateSigningRequest.certSigningRequest 文件，也就是 CSR 文件。该文件后缀名不要更改，文件名可自由制定。
:::

选择完成，点击 Continue 按钮，证书就创建好了，下载创建好的证书，在申请打包的邮件的附件中要包括该文件。

### 添加测试设备

:::warning 按需
如果需要要测试安装包，则需要添加测试设备，如果不需要测试，该步骤可省略
:::
账户页，计划资源，证书、标识符和描述文件（Certificates, Identifiers & Profiles），选择**设备**（Devices）  
而后，点击侧边 **Devices** 标签，进入点击加号，输入设备名称和设备的 UDID （可以打开 Xcode 连接设备后即可看到），点击 Continue 按钮，确认无误后点击 Reigster

### 创建描述文件

账户页，计划资源，证书、标识符和描述文件（Certificates, Identifiers & Profiles），选择**描述文件**（Profiles）  
而后，点击侧边 **Profiles** 标签，进入点击加号，依次选择：AdHoc（或者 App Store 按需） - Continue - 选择 （创建 App ID 步骤生成的） App ID - Continue - Select Certificates - Continue - 选择（添加测试设备添加的）设备 - Continue - 输入 Profile Name - Generate - Download

:::tip iOS打包时常用的的三种类型的 Profile
Development: 开发调试  
Ad Hoc: 内部测试  
App Store Connect：上线到苹果商店时用到  
:::

将上述操作生成的证书（Certificate）、描述文件（Profile）下载放到一起放到附件中，发送给相关开发人员

## 开发流程

新建 Xcode 项目，开发好代码。在 Assets 里配置好 AppIcon，1024x1024px 的格式即可。  
配置 PROJECT 点击左侧项目，PROJECT - Info，配置 Localizations，设置为中文。  
配置 TARGETS ，这里需要配置的比较多

1. **General**: Minimum Deployments 选择对应的最低支持版本，Identity 按需填写，App Icons 按需填写
2. **Signing & Capabilities**： 点选自动签名
3. **Info**: Custom macOS Application Target Properties 里面增加一个 `App Uses Non-Exempt Encryption` set **NO**（无需在 AppStore Connect 官网为下一构建版本提供出口合规证明信息（[参考](https://help.apple.com/xcode/mac/current/#/dev0dc15d044)））
