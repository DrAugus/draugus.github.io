# Mergify

github 官方支持 [auto merge][github auto merge pr] ~~这个 [bot][mergify] 可以下架了~~

nonono, official doc, I haven't figured it yet... now still use mergify

```yml
pull_request_rules:
  - name: automatic merge for ImgBot pull requests
    conditions:
      - author=imgbot[bot]
    actions:
      merge:
        method: merge

  - name: automatic merge for dependabot pull requests
    conditions:
      - author=dependabot[bot]
      - check-success=deploy
    actions:
      merge:
        method: merge

  - name: automatic merge for Renovate pull requests
    conditions:
      - author=renovate[bot]
      - check-success=deploy
    actions:
      merge:
        method: merge

  - name: automatic merge for Requires.io pull requests
    conditions:
      - title~=^\[requires.io\]
      - head~=^requires-io
      - check-success=deploy
    actions:
      merge:
        method: merge

  - name: automatic merge for auto pull requests
    conditions:
      - title=pulling refs/heads/dev into master
      - check-success=deploy
    actions:
      merge:
        method: merge
```

[mergify]: https://docs.mergify.com/examples/#bots
[github auto merge pr]: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request

当使用 matrix 时，

```yml
jobs:
  deploy-life:
    strategy:
      matrix:
        os: [ubuntu-latest] # macos-latest, windows-latest
        node: [16]
        deploy-dir: [life/.vitepress/dist]
        deploy-user: [augusmeow]
        deploy-repo: [life, augusmeow.github.io]
```

:::warning 对于条件的解释
[condition](https://docs.mergify.com/conditions/#github-actions)  
不一定全都会响应 在此判定 任意一个失败都不可以  
必须用 not or  
修改成这样是因为 [无法匹配 matrix](https://github.com/Mergifyio/mergify/discussions/5067#discussioncomment-4859692)

```yml
conditions:
  - author=dependabot[bot]
  - not:
      or:
        - check-failure=deploy-life (ubuntu-latest, 16, life/.vitepress/dist, augusmeow, life)
        - check-failure=deploy-life (ubuntu-latest, 16, life/.vitepress/dist, augusmeow, augusmeow.github.io)
        - check-failure=deploy-game (ubuntu-latest, 16, game/.vitepress/dist, augusmeow, game)
```

上面的 **not or 也不行！！**，失败的反义词并不是成功，状态检查一共有四个，分别是 `check-success` `check-failure` `check-neutral` `check-pending`，需要照顾到所有可能的情况。  
~~修改为直接正则匹配 deploy 也可行~~，不可行的，正则匹配到的是 **any of**，有任何一个成功就 pass 了

```yml
conditions:
  - check-success~=^deploy
```

:::

:::danger `not` 关键字修改

参看 [conditions](https://docs.mergify.com/configuration/conditions/)

`-label~=^work` is **false** because there is a label matching the regular expression ^work but the condition is reversed with the **-** prefix.

about [Modifiers](https://docs.mergify.com/configuration/conditions/#modifiers)

```yml
[ "-" ] [ "#" ] <attribute> [ <operator> <value> ]
```

The optional minus (-) operator at the beginning of the condition negates the result of the condition, acting as a “not” operator.

The optional hash (#) operator is used to evaluate the length of a list when the attribute is a list.

:::
