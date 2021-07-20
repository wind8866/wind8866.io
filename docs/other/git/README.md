# git 笔记
## todo
- [ ] git rebase -i
- [ ] 有冲突时rebase会怎样？
- [ ] 如何选择rebase与merge
- [ ] 脏目录
- [ ] git hooks

## 教程
笔记[./learngitbranching.md](./learngitbranching)
## 知识
### 容易忽略的知识

将本地的ssh key加入到github的配置文件里，推送新项目时不必每次都输入密码。
生成key的方法`ssh-keygen -t ed25519 -C "<email>"` 一般存储在 ~ 的 ssh 下。

`git clone`只会获取默认分支的代码，使用`git checkout stage`或`git clone -b stage https://github.com/wind8866/wind8866.io`才可以。

默认情况下git使用全局配置，若想公司项目和远程项目分开，需要配置当前项目，使用`git config`修改



常用的 [.gitignore](https://github.com/github/gitignore)

### git 识别错误
有时文件名重命名不能被git识别，文件重命名不能被识别问题比较严重，要重视。

```bash
git rm <filename>

git mv <oldname> <newname>

git add webpack.common.js webpack.config.js
```

### 快速关联本地与线上项目
```bash
# 1、github/gitlab 创建空项目
# 2、本地项目代码准备
# 3、本地项目初始化
# 4、重命名分支
# 5、将分支推送到服务器

git init
git checkout -b main
git push --set-upstream origin main

# 6、迁出分支 develop
```
### 查看
```bash
# 已提交历史
git log
# 提交日期 | 作者 | 提交说明
git log --pretty=format:"%ad | %an | %s"

# 当前状态
git status
git status —-short
git status -s
#M  修改过并放入了暂存区
# M 修改过且没有放入缓存区
#MM 放入缓存区的文件再次被修改
#A  新添加文件
#?? 未添加跟踪

# 当前文件与暂存快照之间的差异（只提供已存在仓库里的文件的对比）
git diff
# 已暂存的将要添加到下次提交里的内容
git diff --cached
git diff --staged
# 调用图形化界面的文本比较工具
git difftool
```

### 提交
```bash
git commit
git commit -m 'add readme'
# 跳过add将所有已跟踪的文件commit
git commit -a
# 绕过git勾子提交
git commit --no-verify -m "绕过了git勾子"

# 提交后发现丢了几个文件没有提交
git add "*.html"
git commit —amend

# 撤销上一次提交
git reset --soft HEAD^
```

### xxx 之后的提交都不要了
```bash
git pull

# 获取想要回到的那个版本的key
git log

# 本地恢复到某个版本
git reset --hard cdfe984c1e3402799f3ac8a89d333ed6bd7ff7b5

# 提交到线上
git push --force
```

### git 设置
```
# 本计算机
/etc/gitconfig
git config --system

# 当前用户
~/.gitconfig
git config --global

# 特定项目
.git/config
git config

git config --list
git config user.name
```

#### 分支管理
```bash
# 查看
# 列出分支
git branch
# 列出服务器上分支
git branch -a
# 列出所有远程仓库分支
git remote -v

# 切换
git checkout 分支名

# 新增
git branch 分支名
# 添加远程仓库
git remote add 分支名 url

# 删除
git branch -d dev
# 强制删除
git branch -D dev-clear
# 删除远程本地仓库
git remote rm dev
# 删除远程分支
git push aasorigin --delete master

# 重命名本地分支
git branch -m oldBranch newBranch

# 关联
git branch -u origin/main main-local
git checkout -b local-main origin/main
# git init 后将分支改为main
git checkout -b main

```

### merge
```bash
# 撤销merge请求
git merge --abort
```

### 其他

#### git 的目录结构
```
.git
├── HEAD
├── config
├── description
├── hooks
│   ├── applypatch-msg.sample
│   ├── commit-msg.sample
│   ├── fsmonitor-watchman.sample
│   ├── post-update.sample
│   ├── pre-applypatch.sample
│   ├── pre-commit.sample
│   ├── pre-push.sample
│   ├── pre-rebase.sample
│   ├── pre-receive.sample
│   ├── prepare-commit-msg.sample
│   └── update.sample
├── info
│   └── exclude
├── objects
│   ├── info
│   └── pack
└── refs
    ├── heads
    └── tags
```

