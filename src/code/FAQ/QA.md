# 开发本网站遇到的问题

本地调试无法显示上次更新，及贡献者。
> 启动脚本 加入 `--debug`

## plugin

### docsearch

[获取搜索索引](https://v2.vuepress.vuejs.org/zh/reference/plugin/docsearch.html#获取搜索索引)

1. [sign up](https://docsearch.algolia.com/apply/)
2. copy key, id
3. run py to make index, use [docker](https://docsearch.algolia.com/docs/legacy/run-your-own/#run-the-crawl-from-the-docker-image)

主题通过 [`@vuepress/plugin-git`][git] 插件在页面底部显示页面的最后更新时间与贡献者，并提供了“编辑此页”按钮的支持。

主题同时根据侧边栏配置提供上一页和下一页的导航按钮。

### 基于 Git 的信息

通过内置 [`@vuepress/plugin-git`][git] 插件，实现了页面创建时间、最后更新时间与贡献者的自动生成。

插件会通过页面文件最后一次 `git` 提交的 UNIX 时间戳 (ms) 来自动生成页面创建时间和最后更新时间，同时根据提交记录生成贡献者。

主题将以合适的日期格式将最后更新时间显示在每一页的底部，同时显示该页面所有贡献者。

::: tip

主题会使用 `Date.toLocaleString(pageLang)` 自动根据当前语言，本地化最后更新时间的表述文字。

:::

::: warning 使用注意事项

由于最后更新时间是基于 `git` 的, 所以你只能在一个基于 `git` 的项目中启用它。此外，由于使用的时间戳来自 git commit，因此它将仅在给定页的第一次提交之后显示，并且仅在该页面后续提交更改时更新。

:::

::: danger 开发模式默认禁用

由于 `git` 插件对性能有严重影响，所以默认情况下**主题不会在开发模式下启用**。

如有需要，请在主题选项中设置 `plugins.git: true` 或使用 `--debug` 标志运行开发指令。

:::

### 编辑此页链接

你可以通过在主题选项中中设置如下项目，来自动为每个页面生成编辑此页链接:

- `docsRepo`: 文档仓库地址，默认同主题选项中的 `repo`
- `docsDir`: 文档在仓库中的目录，默认为根目录
- `docsBranch`: 文档存放的分值，默认为 `"main"`

### 显示控制

如果你想要全局禁用这些项目的显示，请在主题选项中中，将以下对应项目设置为 `false`。你也可以通过 `YAML front matter` 中设置这些项目来启用/禁用指定页面:

- `lastUpdated`: 是否显示页面最后更新时间
- `contributors`: 是否显示页面贡献者
- `editLink`: 是否展示编辑此页链接

[git]: https://v2.vuepress.vuejs.org/zh/reference/plugin/git.html

## 各种奇怪报错

### client 版本不一致

```
✔ Compiling with vite - done in 58.94s
✖ Rendering 394 pages - failed in 10.09s
ReferenceError: Cannot access 'clientConfigs' before initialization
    at file:///Users/apple/Documents/GitHub/draugus.github.io/src/.vuepress/.temp/.server/app.ab084cb7.mjs:3264:17
    at ModuleJob.run (node:internal/modules/esm/module_job:193:25)
    at async Promise.all (index 0)
    at async ESMLoader.import (node:internal/modules/esm/loader:526:24)
    at async file:///Users/apple/Documents/GitHub/draugus.github.io/node_modules/@vuepress/bundler-vite/dist/index.js:420:30
    at async file:///Users/apple/Documents/GitHub/draugus.github.io/node_modules/@vuepress/utils/dist/index.js:98:20
    at async build (file:///Users/apple/Documents/GitHub/draugus.github.io/node_modules/@vuepress/bundler-vite/dist/index.js:408:3)
    at async CAC.<anonymous> (file:///Users/apple/Documents/GitHub/draugus.github.io/node_modules/@vuepress/cli/dist/index.js:228:3)
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```

请确保你在使用最新的 `vuepress` V2 版本，因为一些你遇到的 bug 可能已经在新版本中修复。

你可以通过执行下列命令来更新到最新版本。

::: code-tabs#shell

@tab pnpm

```bash
pnpm add vuepress@next 
```

@tab yarn

```bash
yarn add vuepress@next 
```

@tab npm

```bash
npm i vuepress@next 
```

:::

::: warning

任何以 `@vuepress/plugin-` 开头的官方插件应该和 VuePress 保持相同版本。

如果你使用了其他第三方插件，请确保它兼容你要升级到的 VuePress 版本。

:::

事实上并不是 版本不同 引起这个错误

vue 本身也需要升级 真的是绝了

算了 不用了

每次升级都需要做大量的修改！主题难用至极！！！弃用主题

### Cannot read properties of undefined
