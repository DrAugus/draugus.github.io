---
icon:
---

# svn

## externals

> official [zh][official zh] [en][official en]

Subversion (SVN) 的 `externals` 功能允许您将外部的 Subversion 仓库中的文件或目录链接到您当前的版本库中。这对于共享公共文件或库非常有用，而无需将这些文件或库完全复制到您自己的版本库中。

要使用 `externals`，首先需要在您的版本库中找到要将外部文件链接到的目录，并执行以下操作：

1. 使用 `svn propedit svn:externals` 来编辑该目录的 `svn:externals` 属性。
2. 在编辑器中，输入要链接的外部文件或目录的信息，格式为：
    `<外部目录名> <外部版本库 URL>`
    例如：
    `my_lib https://svn.example.com/repos/my_lib`s
3. 保存并退出编辑器。
4. 提交更改，使用 `svn commit` 命令。

现在，当您检出版本库时，您会看到在该目录中链接的外部文件或目录。如果您对外部文件进行了更改并提交了更改，则需要更新您的版本库，以便在本地看到这些更改。要这样做，请使用 `svn update` 命令。

递归列出所有 externals

```shell
svn propget svn:externals -R
```

[official zh]: https://tortoisesvn.net/docs/release/TortoiseSVN_zh_CN/tsvn-dug-externals.html
[official en]: https://tortoisesvn.net/docs/release/TortoiseSVN_en/tsvn-dug-externals.html
