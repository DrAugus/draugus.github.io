---
icon: vscode-icons:file-type-scss
---

# css

## 垂直居中文字

单行文本

```css
.foo {
    width: 300px;
    height: 100px;
    margin: 50px auto;
    border: 1px solid red;
    line-height: 100px; /*设置line-height与父级元素的height相等*/
    text-align: center; /*设置文本水平居中*/
    overflow: hidden; /*防止内容超出容器或者产生自动换行*/
}
```

多行文本

```css
.foo {
    width: 300px;
    margin: 50px auto;
    border: 1px solid red;
    text-align: center; /*设置文本水平居中*/
    padding: 50px 20px;
}
```
