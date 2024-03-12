# css

## 配色参考

1. **柔和粉蓝配色**
   - 浅粉色：`#f5f0f9`
   - 淡蓝色：`#e2eff8`
   - 灰色：`#d3d3d3`

2. **温暖奶油配色**
   - 奶油色：`#f9f1e6`
   - 浅黄色：`#fff9e7`
   - 柔和棕色：`#c1a58f`

3. **清新草木配色**
   - 浅绿色：`#e5f2e7`
   - 淡青色：`#eff7f5`
   - 浅灰绿：`#d4e2dc`

4. **淡雅天空配色**
   - 淡蓝色：`#e7f5fe`
   - 浅灰色：`#f0f0f0`
   - 白色：`#ffffff`

5. **优雅紫罗兰配色**
   - 淡紫色：`#f0e6f5`
   - 浅粉色：`#f9f2f4`
   - 银色：`#d9d9d9`

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
