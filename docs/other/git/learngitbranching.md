## [交互式学习git](https://learngitbranching.js.org/?locale=zh_CN)
```bash
# git commit
git commit

# git branch
git branch bugFix
git checkout bugFix

# git merge
git merge bugFix

# git rebase
git rebase main

# 分离 HEAD
git checkout c4

# 相对引用^
git checkout HEAD^

# 相对引用2~
git branch -f main c3
git branch -f bugFix HEAD~2

# 撤销变更
git reset HEAD^
git revert HEAD

# 自由修改提交树
git cherry-pick C2 C3 C5

# 交互式rebase
git rebase -i HEAD~4

# 提交的技巧1
git commit --amend

# git tag
git tag v1.1 C2

# git describe
git describe main

# 多次rebase 只是用rebase📌
git rebase main main-fork

# 两个父节点
git branch bugFix HEAD~^2~4📌

# 纠缠不清的分支 使用cherry-pick📌
-

# git clone
git clone

# git fetch
git fetch

# git pull
git pull

# git push
git push

# 推送主分支📌
git pull --rebase
# 题
git fetch
git rebase o/main side1
git rebase side1 side2
git rebase side2 side3
git rebase side3 main
git push

# 合并远层仓库📌
git cehckout main
git pull
git merge side1
git merge side2
git merge side3
git push

# 远程追踪📌
git checkout -b local-main origin/main
git branch -u origin/main local-main
# 题 4line
git checkout -b side o/main
git commit
git pull --rebase
git push
# 第二种解法
git checkout o/main
git commit
git branch side
git branch -u o/main side
git checkout side
git pull --rebase
git push

```

## git rebase -i

```
pick 573b0fb 2aaa
pick d6d127e 3

# Rebase 76f6a3c..d6d127e onto 76f6a3c (2 commands)
#
# Commands:
# p, pick <commit> = use commit
# r, reword <commit> = use commit, but edit the commit message
# e, edit <commit> = use commit, but stop for amending
# s, squash <commit> = use commit, but meld into previous commit
# f, fixup <commit> = like "squash", but discard this commit's log message
# x, exec <command> = run command (the rest of the line) using shell
# b, break = stop here (continue rebase later with 'git rebase --continue')
# d, drop <commit> = remove commit
# l, label <label> = label current HEAD with a name
# t, reset <label> = reset HEAD to a label
# m, merge [-C <commit> | -c <commit>] <label> [# <oneline>]
# .       create a merge commit using the original merge commit's
# .       message (or the oneline, if no original merge commit was
# .       specified). Use -c <commit> to reword the commit message.
#
# These lines can be re-ordered; they are executed from top to bottom.
#
# If you remove a line here THAT COMMIT WILL BE LOST.
#
# However, if you remove everything, the rebase will be aborted.
#
# Note that empty commits are commented out
```