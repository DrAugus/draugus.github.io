---
outline: [2, 4]
---

# GitHub

## [hub](https://hub.github.com/)

自动建仓

```bash
hub create [-poc] [-d <DESCRIPTION>] [-h <HOMEPAGE>] [<ORGANIZATION>/<NAME>]
```

## clone private repo

github clone private repo, clone submodule private repo  

```yaml
uses: actions/checkout@v3
with:
  submodules: recursive
  token: '${{ secrets.KEY }}'
```

## [generate ssh]

[generate ssh]: https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent

```shell
ssh-keygen -t ed25519 -C "your_email@example.com"
```

## GitHub Action

### cron 表达式

```txt
*     *     *   *    *  
-     -     -   -    -  
|     |     |   |    |  
|     |     |   |    +----- day of week (0 - 7) [both 0 and 7 mean Sunday]  
|     |     |   +------- month (1 - 12)  
|     |     +--------- day of month (1 - 31)  
|     +----------- hour (0 - 23)  
+------------- min (0 - 59)
```

### 自动 pr

#### [Create Pull Request](https://github.com/marketplace/actions/create-pull-request)

> GitHub Action

try it by [documents](https://github.com/peter-evans/create-pull-request/blob/main/docs/examples.md#keep-a-branch-up-to-date-with-another)

```yaml
name: Create production promotion pull request
on:
  push:
    branches:
      - main
jobs:
  productionPromotion:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
        with:
          ref: production
      - name: Reset promotion branch
        run: |
          git fetch origin main:main
          git reset --hard main
      - name: Create Pull Request
        uses: peter-evans/create-pull-request@v4
        with:
          branch: production-promotion
```

但是并没有生效，就更换了其他的 ci。

#### [GitHub Pull Request Action](https://github.com/marketplace/actions/github-pull-request-action)

[docs](https://fluxcd.io/docs/use-cases/gh-actions-auto-pr/)

```yaml
# ./.github/workflows/staging-auto-pr.yaml
name: Staging Auto-PR
on:
  push:
    branches: [staging]

jobs:
  pull-request:
    name: Open PR to main
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
        name: checkout

      - uses: repo-sync/pull-request@v2
        name: pull-request
        with:
          destination_branch: main
          pr_title: 'Pulling ${{ github.ref }} into main'
          pr_body: '👑 *An automated PR*'
          pr_reviewer: kingdonb
          pr_draft: true
          github_token: ${{ secrets.GITHUB_TOKEN }}
```

也即本网站的[最终方案](https://github.com/DrAugus/draugus.github.io/blob/master/.github/workflows/autopr.yml)  
如果提交无变更，则不执行此 job，参看[若未改动则不 pr](#若未改动则不-pr)

### Tips

#### 指定条件运行指定 job

条件判断，多个 job 时，指定某个特定条件下运行某个 job

```yml
on:
  # Runs on pushes targeting the default branch
  push:
    branches: ["master"]
  pull_request:
    branches: ["master"]
jobs:
  # Build job
  build:
    # something
  # Deployment job
  deploy:      
    # something
    if: github.event_name == 'push'    
```

#### 若未改动则不 pr

```yml
- name: Commit files
  id: commit
  run: |
    git config --local user.email "action@github.com"
    git config --local user.name "GitHub Action"
    git add .
    if git diff --cached --quiet; then  
      echo "No changes to commit"  
      echo "has_changes=false" >> $GITHUB_OUTPUT
    else  
      git commit -m "something" -a
      echo "has_changes=true" >> $GITHUB_OUTPUT
    fi
- name: Create Pull Request
  if: ${{ steps.commit.outputs.has_changes == true }}
  uses: peter-evans/create-pull-request@v6
  with:
    token: ${{ secrets.DEPLOY_GH }}
    title: "something"
    commit-message: "something"
    committer: GitHub <noreply@github.com>
    author: GitHub <noreply@github.com>
    branch: create-pull-request/patch-life-recent-update
    base: master    
    labels: |
      report
      automated pr
    assignees: DrAugus
```

:::warning 关于 GITHUB_OUTPUT 的使用

```yml
- name: test output
  env:
    AUG: ${{steps.commit.outputs.has_changes}}
  run: |
    echo "=========="
    echo "$GITHUB_OUTPUT"
    echo "=========="
    echo "${{steps.commit.outputs.has_changes}}"
    echo "=========="
    echo "$AUG"
```

输出如下

```text
==========
/home/runner/work/_temp/_runner_file_commands/set_output_xxxxxx
==========
false
==========
false
```

:::

:::danger 注意 if 条件

```yml
if: ${{ steps.commit.outputs.has_changes == true }}
```

千万不可写成

```yml
if: ${{ steps.commit.outputs.has_changes }} == true
```

:::

参考：[Example of setting an output parameter](https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions#setting-an-output-parameter)，[Defining outputs for jobs](https://docs.github.com/en/actions/using-jobs/defining-outputs-for-jobs)
