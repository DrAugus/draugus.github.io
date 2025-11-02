# Vitepress

## 本地跑起来

```bash
#!/bin/bash
# preview-gh-pages.sh

REPO_URL="https://github.com/username/repo-name.git"
TEMP_DIR="preview-temp"

echo "正在克隆 gh-pages 分支..."
git clone -b gh-pages --single-branch $REPO_URL $TEMP_DIR

cd $TEMP_DIR

echo "启动本地服务器在 http://localhost:8080"
echo "按 Ctrl+C 停止服务器"

python -m http.server 8080
```

## 常用的，默认主题组件

### Frontmatter Config

```md
---
title: Docs with VitePress
titleTemplate: Vite & Vue powered static site generator
description: VitePress
head:
  - - meta
    - name: description
      content: hello
  - - meta
    - name: keywords
      content: super duper SEO
layout: doc | home | page
navbar: false
aside: boolean | 'left'
editLink: true
outline: number | [number, number] | 'deep' | false
lastUpdated: false
footer: false
pageClass: custom-page-class
---
```

```md
{{ $frontmatter.title }}
```

### Badge

:::code-group

```md [Markdown]
Title <Badge type="info" text="default" />
Title <Badge type="tip" text="^1.9.0" />
Title <Badge type="warning" text="beta" />
Title <Badge type="danger" text="caution" />
```

```vue [Vue]
Title <Badge type="info" text="default" />
Title <Badge type="tip" text="^1.9.0" />
Title <Badge type="warning" text="beta" />
Title <Badge type="danger" text="caution" />
```

:::

### Detials/Tip/Warning/Danger

::::code-group

```md [Markdown]

:::tip tip title
this is one tip
:::

:::details This is summary
This is the content.
:::

```

```vue [Vue]
<!-- tip/danger/warning -->
<div class="tip custom-block">
    <p class="custom-block-title">tip title</p>
    <p>this is one tip</p>
</div>
<!-- details -->
<details class="details custom-block">
    <summary>This is summary</summary>
    This is the content.
</details>
```

::::
