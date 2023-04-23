---
title: gitalk
icon: icon-park:github-one 
date: 2021-12-30 15:39:11 
category: 
  - 编程    
tag: 
  - gitalk 
  - 评论 
  - 转载    
---

# gitalk评论接入教程

> [转载并修改自sf](https://segmentfault.com/a/1190000018072952)

## 安装使用

### 安装 引入

```html  
<link rel="stylesheet" href="//cdn.bootcss.com/gitalk/1.5.0/gitalk.min.css">
<script src="//cdn.bootcss.com/gitalk/1.5.0/gitalk.min.js"></script>
```

### 使用

#### 1、申请一个OAuth application

> GitHub OAuth application允许程序来操作你的github账户，可以对github中仓库读写。

申请GitHub OAuth application流程：

1. 打开github网站登陆后，点击右上角的用户图标，选择Settings
2. 在Settings页面选择Developer settings选项。
3. 在Developer settings选择OAuth Apps,然后会在页面右边有一个New OAuth App按钮，点击这个按钮就进入到新建OAuth application页面

在注册OAuth应用页面有如下几个参数需要填写：

> Application name：必填，OAuth的名字  
> Homepage URL：必填，你应用的网址，哪个网站用了Gitalk组件，就填写这个网址  
> Application description：选填，该OAuth的说明  
> Authorization callback URL：必填，授权成功后回调网址，跟Homepage URL参数保持一致就好  
> 这些参数在注册成功后是可以修改。

参数填好后，点`Register application`按钮即可完成注册。

注册成功后会自动跳转到这个OAuth应用的页面，或者在Developer settings选择OAuth Apps后就能看见你创建的OAuth应用名字，点击它进入这个OAuth应用的页面：

找到 clientID clientSecret 后面会用到。

#### 2、首先需要在html文件中添加一个容器，Gitalk组件会在此处显示

```html  
<div id="gitalk-container"></div>
```

#### 3、使用下面的JavaScript代码来生成Gitalk评论

```javascript  
const initGitalk = () => {
    const gitalk = new Gitalk({
        clientID: "5301328d56cf49a6d68e",
        clientSecret: "dd04918e1a0267bc6eeaf27c1f7c9cc65832db57",
        repo: "draugus.github.io",
        owner: "draugus",
        admin: ["draugus"],
        id: "{{page.title}}",
        language: "zh-CN",
        perPage: 10,
        distractionFreeMode: false,
        pagerDirection: "last",
        createIssueManually: false
        // updateCountCallback: commentCount
    });

    gitalk.render("gitalk-container");
};
```

参数说明

* clientID

> 类型：字符串，必填，申请的OAuth App的Client ID

* clientSecret

> 类型：字符串，必填，申请的OAuth App的Client Secret

* repo

> 类型：字符串，必填，github上的仓库名字，用于存放Gitalk评论

* owner

> 类型：字符串，必填，github仓库的所有者的名字

* admin

> 类型：数组(元素是字符串)，必填，github仓库的所有者和合作者 (对这个 repository 有写权限的用户)

* id

> 类型：字符串，选填，页面的唯一标识。长度必须小于50。此参数用于评论和页面对应的标识，如果想让两个页面用一个评论，可设置两个页面的id一样。默认值：location.href(页面URL)

* title

> 类型：字符串，选填，GitHub issue 的标题，默认值：document.title(HTML中title标签中的值)

配置好会显示如下[效果](https://gitalk.github.io/)

![1](/img/code/gitalk.png)
