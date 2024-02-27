---
icon: logos:github-octocat
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

```shell
ssh-keygen -t ed25519 -C "your_email@example.com"
```

## GitHub Action

### [Create Pull Request](https://github.com/marketplace/actions/create-pull-request)

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

### [GitHub Pull Request Action](https://github.com/marketplace/actions/github-pull-request-action)

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

### Tips

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

[generate ssh]: https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
