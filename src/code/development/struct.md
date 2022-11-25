# 项目结构

```tree
.
├── .gitignore
├── LICENSE
├── README.md
├── code
│   ├── genshin
│   │   ├── config.yml
│   │   ├── get_character.py
│   │   └── get_url_data.py
│   └── get_list_file.sh
├── package.json
├── src
│   ├── .vuepress
│   │   ├── components
│   │   │   ├── Article.vue
│   │   │   ├── Card.vue
│   │   │   ├── History.vue
│   │   │   ├── KatexPlayground.ts
│   │   │   ├── Leaflet.vue
│   │   │   ├── LinksRecord.vue
│   │   │   ├── Marvel.vue
│   │   │   ├── Modal.vue
│   │   │   ├── War.vue
│   │   │   ├── food
│   │   │   ├── genshin
│   │   │   ├── katex-playground.scss
│   │   │   ├── language
│   │   │   ├── utils.ts
│   │   │   └── wear
│   │   ├── config.ts
│   │   ├── configs
│   │   │   ├── alias.ts
│   │   │   ├── navbar
│   │   │   ├── plugin.ts
│   │   │   ├── sidebar
│   │   │   ├── siteLocalConfig.ts
│   │   │   └── theme
│   │   ├── data
│   │   │   ├── abbr.json
│   │   │   ├── article.json
│   │   │   ├── events.json
│   │   │   ├── food.json
│   │   │   ├── genshin
│   │   │   ├── history_china.json
│   │   │   ├── lifes_essentials.json
│   │   │   ├── links.json
│   │   │   ├── marvel.json
│   │   │   ├── war.json
│   │   │   └── words
│   │   ├── public
│   │   │   ├── favicon.ico
│   │   │   ├── image
│   │   │   ├── logo
│   │   │   ├── pdf
│   │   │   └── video
│   │   └── styles
│   │       ├── index.scss
│   │       └── palette.scss
│   ├── README.md
│   ├── blog
│   │   ├── 2021-02-18-nanyang2shenyang.md
│   │   ├── 2021-06-07-unit-test.md
│   │   ├── 2021-08-02-rapidJson.md
│   │   ├── 2021-08-19-mongoDB.md
│   │   ├── 2021-10-05-windows11-update.md
│   │   ├── 2021-10-08-软考系统架构.md
│   │   ├── 2021-10-21-xshell-global-color.md
│   │   ├── 2021-10-29-指针引起崩溃.md
│   │   ├── 2021-10-30-cmd-guide.md
│   │   ├── 2021-10-31-excel使用技巧.md
│   │   ├── 2021-12-30-gitalk-access.md
│   │   ├── 2022-01-12-cpp-notes.md
│   │   ├── 2022-02-21-high-concurrency.md
│   │   ├── 2022-04-06-虚拟机.md
│   │   ├── 2022-04-19-关于血腥暴力影视.md
│   │   ├── 2022-05-11-女人相亲惯用套路.md
│   │   ├── 2022-06-08-id-card.md
│   │   ├── 2022-06-15-web-tools.md
│   │   ├── 2022-06-18-ci.md
│   │   ├── 2022-07-14-vue-props.md
│   │   ├── 2022-07-20-chocolatey.md
│   │   ├── 2022-07-25-正则.md
│   │   ├── 2022-09-26-mac.md
│   │   ├── 2022-10-20-tmdb.md
│   │   ├── README.md
│   │   ├── academic-dress.md
│   │   ├── rex.md
│   │   ├── stroll.md
│   │   └── 痛经.md
│   ├── code
│   │   ├── FAQ
│   │   │   ├── QA.md
│   │   │   ├── README.md
│   │   │   └── complaints.md
│   │   ├── README.md
│   │   ├── development
│   │   │   ├── README.md
│   │   │   ├── ban.md
│   │   │   ├── changelog.md
│   │   │   ├── guide.md
│   │   │   └── struct.md
│   │   └── latex.md
│   ├── food
│   │   ├── README.md
│   │   ├── block.md
│   │   ├── cookbook.md
│   │   ├── dineout.md
│   │   ├── hangzhou.md
│   │   ├── random.md
│   │   └── takeaway.md
│   ├── game
│   │   ├── README.md
│   │   └── genshin
│   │       ├── README.md
│   │       ├── artifacts.md
│   │       ├── character.md
│   │       ├── dialog.md
│   │       ├── fork.md
│   │       ├── language.md
│   │       ├── level.md
│   │       ├── party.md
│   │       ├── timeline.md
│   │       ├── timelinetable.md
│   │       └── wish.md
│   ├── i18n
│   │   ├── de
│   │   │   ├── README.md
│   │   │   ├── code
│   │   │   ├── home.md
│   │   │   ├── learn
│   │   │   ├── life
│   │   │   └── social
│   │   ├── en
│   │   │   ├── README.md
│   │   │   ├── code
│   │   │   ├── home.md
│   │   │   ├── intro.md
│   │   │   ├── learn
│   │   │   ├── life
│   │   │   ├── slide.md
│   │   │   ├── social
│   │   │   └── sponsor.md
│   │   ├── fr
│   │   │   ├── README.md
│   │   │   ├── code
│   │   │   ├── home.md
│   │   │   ├── learn
│   │   │   ├── life
│   │   │   └── social
│   │   ├── it
│   │   │   ├── README.md
│   │   │   ├── code
│   │   │   ├── home.md
│   │   │   ├── learn
│   │   │   ├── life
│   │   │   └── social
│   │   └── kr
│   │       ├── README.md
│   │       ├── code
│   │       ├── home.md
│   │       ├── learn
│   │       ├── life
│   │       └── social
│   ├── intro.md
│   ├── learn
│   │   ├── README.md
│   │   ├── arts
│   │   │   ├── README.md
│   │   │   ├── art
│   │   │   ├── economics
│   │   │   ├── 古文
│   │   │   └── 檄文
│   │   ├── history
│   │   │   ├── README.md
│   │   │   ├── biography
│   │   │   ├── empire
│   │   │   └── organization
│   │   ├── language
│   │   │   ├── README.md
│   │   │   ├── chinese.md
│   │   │   ├── english-words.md
│   │   │   ├── english.md
│   │   │   ├── french.md
│   │   │   ├── german.md
│   │   │   ├── italian.md
│   │   │   ├── name.md
│   │   │   └── pronunciation.md
│   │   ├── pdf
│   │   │   ├── README.md
│   │   │   ├── TutorialLLVMBackendCpu0.md
│   │   │   ├── cpplibs.md
│   │   │   ├── sdf.md
│   │   │   ├── 中国经济简报.md
│   │   │   └── 信息资源建设.md
│   │   ├── science
│   │   │   └── README.md
│   │   └── tools
│   │       ├── README.md
│   │       ├── git.md
│   │       ├── gitlab.md
│   │       ├── sublime.md
│   │       ├── tabby.md
│   │       └── vscode.md
│   ├── life
│   │   ├── README.md
│   │   ├── about.md
│   │   ├── book.md
│   │   ├── car.md
│   │   ├── cat.md
│   │   ├── daily-necessities.md
│   │   ├── disease
│   │   │   ├── 2022-06-14-disease.md
│   │   │   ├── 2022-06-24-disease.md
│   │   │   └── README.md
│   │   ├── links.md
│   │   ├── movie
│   │   │   ├── README.md
│   │   │   └── marvel.md
│   │   ├── record.md
│   │   ├── resume-en.md
│   │   ├── resume.md
│   │   ├── speech
│   │   │   ├── README.md
│   │   │   └── craig-federighi.md
│   │   ├── tech
│   │   │   ├── README.md
│   │   │   └── apple
│   │   ├── trip
│   │   │   ├── Beijing.md
│   │   │   ├── Chongqing.md
│   │   │   ├── Fujian.md
│   │   │   ├── Hunan.md
│   │   │   ├── Jiangsu.md
│   │   │   ├── README.md
│   │   │   ├── Sichuan.md
│   │   │   ├── Yunnan.md
│   │   │   └── Zhejiang.md
│   │   ├── tv.md
│   │   └── wear.md
│   ├── record
│   │   ├── README.md
│   │   ├── accident
│   │   │   ├── 2018-Chongqing-bus-crash.md
│   │   │   ├── 2020-Anshun-bus-crash.md
│   │   │   ├── 2022-China-Eastern-Airlines-Flight-5735.md
│   │   │   └── README.md
│   │   ├── funny
│   │   │   ├── README.md
│   │   │   ├── airfare-price.md
│   │   │   └── lifetime_series.md
│   │   ├── health
│   │   │   ├── README.md
│   │   │   └── probiotics.md
│   │   ├── history
│   │   │   ├── README.md
│   │   │   ├── history.md
│   │   │   └── royal
│   │   ├── plant
│   │   │   ├── README.md
│   │   │   └── flower.md
│   │   └── war
│   │       ├── README.md
│   │       ├── falklands_war.md
│   │       └── punic_first_war.md
│   ├── slide.md
│   └── sponsor.md
└── yarn.lock

84 directories, 184 files
                    
```

暂时以中文目录下的为准，对于英、德、法、意、韩，翻译持续进行中。更欢迎各位语言高手来[贡献](https://github.com/DrAugus/draugus.github.io/tree/master/src/i18n)。