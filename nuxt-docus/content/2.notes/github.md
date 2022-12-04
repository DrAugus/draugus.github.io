---
icon: logos:github
---

# Github

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

[generate ssh]: https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
