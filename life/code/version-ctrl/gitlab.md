---
icon: logos:gitlab
---

# Gitlab

## [web ide](https://docs.gitlab.com/ee/user/shortcuts.html#web-ide)

hotkeys

- find command + F (win ctrl+F)
- replace command + option + F (win ctrl+F)

## [auto create repo](https://docs.gitlab.com/ee/user/project/index.html#create-a-new-project-with-git-push)

```bash
cd your_project
git init
git add .
git push --set-upstream git@gitlab.example.com:namespace/myproject.git master
# git push --set-upstream https://gitlab.example.com/namespace/myproject.git master
git remote add origin https://gitlab.example.com/namespace/myproject.git
# got remote: The private project namespace/myproject was created.
# then done
```
