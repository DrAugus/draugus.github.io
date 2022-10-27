# Markdown

代码块支持的语言，以文件名后缀即可

[refer]


## 代码规范检查

Markdown 常用代码规范检查工具如下：


｜ 工具 ｜ 	用途	｜ lint 命令｜	支持 IDE｜
｜:---:｜:---:｜:---:｜:--—:｜
|[remark]	|Markdown 通用规范	|remark -f docs/	|[VSCode][vsc-remark]|
|[lint-md]|	Markdown 中文规范|	lint-md docs/	|[VSCode][vsc-lint-md]|
|[fnlint]|	文件名 slug 规范	|fnlint -c .fnlint.json	|不支持|

### remark

[remark] 是国际流行的开源项目，用于检查 Markdown 书写规范，内置推荐规范「remark-preset-lint-recommended」，常见规则如下：

- 文本文件结尾需要换行符（POSIX 规范）；
- 列表：顶格，符号后 3 个空格；

安装：

```shell
$ npm install -save-dev remark-cli remark-preset-lint-recommended
$ vi package.json
  "scripts": {
    "lint-all": "remark -f docs/"
  },
  "remarkConfig": {
    "plugins": ["remark-preset-lint-recommended"]
  }
```
全量检查：
```shell
$ npx remark -f docs/
docs/start/ci.md: no issues found
docs/open/start.md
     1:1   warning  Missing newline character at end of file
     16:4  warning  Incorrect list-item indent: add 1 space
     22:3  warning  Incorrect list-item indent: add 2 spaces
⚠ 2422 warnings
```
本地增量检查：

`git diff --diff-filter=d --name-only HEAD | grep ".md$" | xargs npx remark -f`
持续集成合并请求增量检查：

`sh "git diff --diff-filter=d --name-only ${env.MR_TARGET_BRANCH}... | grep '.md\$' | xargs npx remark -f"`
### lint-md

[lint-md] 用于检查 Markdown 中文书写规范，内置「[阮一峰中文技术文档规范]」，常见规则如下：

- 中文与英文之间需要空格
- 中文与数字之间需要空格
- 代码块需声明编程语言（参考：[Markdown 编程语言清单]）
- 禁止使用全角数字
安装：

`$ npm install -save-dev lint-md-cli`
全量检查：
```shell
$ lint-md docs/
docs/project/open/webhook.md
51:1-51:4   no-empty-code-lang Language of code can not be empty. 
74:1-74:123 no-long-code       Code Block cannot have too long line. line with 122 characters exceeds code max length 100
docs/practice/agile-development.md
52:27-52:28 space-round-alphabet No space between Chinese and alphabet. '后，Scrum负责人就会
docs/project/basis/settings.md
75:29-75:30 space-round-number   No space between Chinese and number. '的缺陷最多显示10条，可
Lint total 247 files, 0 warnings 782 errors
$ echo $?
1
```
本地增量检查：

`git diff --diff-filter=d --name-only HEAD | grep ".md$" | xargs npx lint-md`
持续集成合并请求增量检查：

`sh "git diff --diff-filter=d --name-only ${env.MR_TARGET_BRANCH}... | grep '.md\$' | xargs npx lint-md"`
### fnlint

[fnlint] 用于检查文件名规范，内置 4 种规范：

- kebabcase （如 kebab-case.md）
- camelcase （如 camelCase.js）
- pascalcase （如 PascalCase.js）
- snakecase （如 snake_case.rb）
其中「kebabcase」适合用于检查 Markdown 文档的文件名，因为文件名将出现在 URL 中，按照 slug 和域名规范，应使用全小写、连字符，禁止使用大写字母、下划线。

安装：
```shell
$ npm install --save-dev fnlint
$ vi .fnlint.json
{
  "basePath": ".",
  "files": "docs/**/*.md",
  "format": "kebabcase",
  "directories": true
}
```
全量检查：
```shell
$ npx fnlint -c .fnlint.json
kebabcase: 9 of 257 file(s) failed linting
/docs/coding.net.md
/docs/best-practices/ci/1minute/#C+makefile.md
/docs/cd/question/FAQ.md
/docs/repo/git/commands.md
/docs/ZZZ/aaa/a.md
```
增量检查：不支持。


[refer]: https://coding.net/help/docs/ci/practice/lint/markdown.html
[remark]: https://github.com/remarkjs/remark-lint
[lint-md]: https://github.com/lint-md/lint-md
[fnlint]: https://github.com/usabilla/fnlint
[vsc-remark]: https://marketplace.visualstudio.com/items?itemName=drewbourne.vscode-remark-lint
[vsc-lint-md]: https://marketplace.visualstudio.com/items?itemName=ZhixiangZhang.mdlint
[阮一峰中文技术文档规范]: https://github.com/ruanyf/document-style-guide
[Markdown 编程语言清单]: https://coding.net/docs/ci/lint/markdown-code-lang.html
