---
article: true
date: 2022-05-26
isOriginal: true
---

# Linux 日常

[安装pg](./stroll.md#pg-坑)

[安装nodejs](./stroll.md#安装-nodejs-流程)

## 遇到的问题

- `bash: cd: too many arguments`
- 原因：路径名或者变量有空格时候，会造成参数太多的错误提示
- 解决：把空格的地方用引号包括起来

- `Can't locate Digest/MD5.pm in @INC (@INC contains:`
- 原因：缺少perl-Digest-MD5包， 安装perl-Digest-MD5即可解决。
- 解决：`yum -y install perl-Digest-MD5`
