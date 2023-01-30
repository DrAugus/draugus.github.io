---
icon: pajamas:git-merge
---

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
