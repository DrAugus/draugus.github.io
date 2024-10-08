---
icon: twemoji:card-file-box
---

# Docus

> 此网站的一些指南和疑问

## 指南

### icon 的使用

直接点击[此链接](https://icones.js.org/)[搜索](https://icones.js.org/collection/all)复制

### built-in component

variety of types
::list{type="success"}

- primary
- success
- info
- warning
- danger
::

#### `<Alert />`

```md
::alert{type="info"}
msg
::
```

#### `<Badge />`

```md
:badge[v1.2]

:badge[Deprecated]{type="warning"}

::badge{type="danger"}
Not found!
::
```

#### `<ButtonLink />`

```md [Code]
:button-link[Play]{icon="IconStackBlitz" href="#" blank}
```

#### `<Callout />`

```md
::callout{type="warning"}
#summary
This is a callout! Click me to open.
#content
This is the content of the callout.
::
```

#### `<Card />`

```md [Code]
::card{icon="logos:nuxt-icon"}
#title
Nuxt Architecture.
#description
Based on **Nuxt 3** and **Nuxt Content**. :br
Use Nuxt to build a static site, or a serverless app.
::
```

#### `<CardGrid />`

```md [Code]
::card-grid
#title
What's included
#root
:ellipsis
#default
    ::card
    #title
    Nuxt Architecture.
    #description
    Harness the full power of Nuxt and the Nuxt ecosystem.
    ::
    ::card
    #title
    Vue Components.
    #description
    Use built-in components (or your own!) inside your content.
    ::
    ::card
    #title
    Write Markdown.
    #description
    Enjoy the ease and simplicity of Markdown and discover MDC syntax.
    ::
::
```

#### `<CodeGroup />`

```md [Code]
::code-group
    ```bash [Yarn]
    yarn add docus
    ```
    ```bash [NPM]
    npm install docus
    ```
::
```

#### `<Icon />`

```md [Code]
:icon{name="logos:nuxt-icon"}
:icon{name="logos:vue"}
:icon{name="logos:nuxt-icon"}
```

#### `<List />`

```md [Code]
::list{type="primary"}
- **Important**
- Always
::
```

#### `<Terminal />`

```md [Code]
:terminal{content="nuxi build"}
```

#### `<VideoPlayer />`

```md [Code]
::div
:video-player{src="https://www.youtube.com/watch?v=o9e12WbKrd8"}
::
```

### component

use `:component_name` in `content/` *.md, as

```md
:component_name
or
<component_name />
```

about component name ([refer][component name])

If you have a component in nested directories such as:

```bash
| components/
--| base/
----| foo/
------| Button.vue
```

... then the component's name will be based on its own path directory and filename, with duplicate segments being removed. Therefore, the component's name will be:

```html
<BaseFooButton />
```

::alert
For clarity, we recommend that the component's filename matches its name. (So, in the example above, you could rename `Button.vue` to be `BaseFooButton.vue`.)
::

## 疑问

### this web question

- 插件有吗
- 搜索🔍是否需要重新申请

### found this web's bug

::list{type="danger"}

- 网站似乎非常卡顿，。。
- 目录过长时，目录没有滚动条
- 不支持以中文名命名的 markdown
- markdown 写在下方的链接不受支持

    ::alert
    nono  是下面这样的不支持
    ::

    ```md
    - [link] not supported  
    - [link][link] supported

    [link]: draugus.github.io
    ```

- 是否可以隐藏文件不在列表里显示 (这个算是 feature 吧)
::
::list{type="success"}
- ~~markdown 多级列表不支持~~ 现在支持了
::

## test

[component name]: https://nuxt.com/docs/guide/directory-structure/components#component-names
