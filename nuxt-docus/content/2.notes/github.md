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

