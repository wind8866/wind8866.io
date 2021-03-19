---
title: macOS JAVA开发环境配置
date: 2019-06-14 21:11:09
tags: JAVA,macOS,开发环境
---
作为一个前端开发人员，本不需要配置后端的开发环境，但是工作中一些项目是前后端不分离的，然后就有了下面这些配置过程。

<!--more-->
## jre
`jre`是`JAVA`的执行环境。
其实可不安装，`jdk`中就有，这里是因为下载错了，以为安装好`jre`就行了。
这一步跳过就行了，这里权当做个记录。
### 下载安装
下载地址这里找不到了，也是从oracle官网上下载的。
`jre`的`home`目录：

```bash
/Library/Internet\ Plug-Ins/JavaAppletPlugin.plugin/Contents/Home
```
### 配置环境变量
```bash
cd ~
vim .bash_profile
# 配置内容见下面
source .bash_profile
java -version
# 这里应该返回java的版本号
```
```
# .bash_profile

JAVA_HOME=/Library/Internet\ Plug-Ins/JavaAppletPlugin.plugin/Contents/Home/bin
CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar

PATH="$JAVA_HOME:${PATH}"
export PATH JAVA_HOME
```
有个坑是路径里有空格需要用反斜杠转义。

## jdk

### 下载安装
使用的是`jdk1.8`，这里是[下载地址](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
选择 `Java SE Development Kit 8u211`里面的`jdk-8u211-macosx-x64.dmg`。
下载可能很慢，请使用vpn。
下载后图形界面安装直接点下一步就行了。

安装好后会在系统偏好设置里面有JAVA配置选项设置。
jdk的home目录在
```
/Library/Java/JavaVirtualMachines/jdk1.8.0_211.jdk/Contents/Home
```

### 配置环境变量
不知道怎么配置的参考上一步的配置内容，其实只改了`JAVA_HOME`变量。
```
# .bash_profile

JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.8.0_211.jdk/Contents/Home
CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar

PATH="$JAVA_HOME:${PATH}"
export PATH JAVA_HOME
```
执行`java -version`看是否配置成功。

## tomcat
可以把 tomcat 简单的理解为一个 HTTP 服务器（就像Nginx）。
这里是[下载地址](https://tomcat.apache.org/download-80.cgi)
找到 Core ，下载 .zip 格式文件就行了。
下载解压，我把它放到了`~/Library/tomcat`下。
所以他的执行文件目录是：
```
/Users/liuzhen/Library/tomcat/apache-tomcat-8.5.41/bin
```
然后命令行执行
```bash

cd /Users/liuzhen/Library/tomcat/apache-tomcat-8.5.41/bin
# 因为我执行 startup.sh 时提示无命令 ls -l 看了下是没有执行权限
chmod u+x startup.sh
chmod u+x catalina.sh
chmod u+x shutdown.sh
# 启动
sudo ./startup.sh
# 停止
sudo ./shutdown.sh
```
启动后访问<localhost:8080>可以看到tomcat的欢迎界面。
这里要保证8080端口不被占用。

## maven
maven是JAVA的软件包管理工具，类似CentOS里面的yum，也类似JS的npm。这里是[下载地址](http://maven.apache.org/download.cgi)。

选择`apache-maven-3.6.1-bin.zip`下载就行，我解压到了`~/maven`下。

在windows中，软件包会装到C盘，mac下可能会安装到`${user.home}/.m2/repository`，所以软件包的目录需要配置一下。

我把他放在`~/Library/jar`下，打开`/Users/liuzhen/Library/maven/apache-maven-3.6.1/conf/settings.xml`添加配置就可以。

```xml
<!-- settings.xml -->

<localRepository>/Users/liuzhen/Library/jar</localRepository>
```

然后我们需要配置环境变量。

```
# maven
M2_HOME=/Users/liuzhen/Library/maven/apache-maven-3.6.1
PATH="$M2_HOME/bin:${PATH}"
export M2_HOME PATH
```
修改后执行`mvn --version`会提示信息。

## 下一步
选择IDEA或者Eclipse配置项目就可以了。

## 参考资料
* [在Mac环境下配置tomcat](https://www.jianshu.com/p/a705d4240cdc)
* [Mac配置Maven](https://www.jianshu.com/p/47b897214b88)
* [使用IntelliJ IDEA 配置Maven](https://blog.csdn.net/qq_32588349/article/details/51461182)
* [JRE](https://zh.wikipedia.org/wiki/JRE)
* [JDK](https://zh.wikipedia.org/wiki/JDK)
* [tomcat 与 nginx，apache的区别是什么？](https://www.zhihu.com/question/32212996)

---

同时发表在：
- [掘金](https://juejin.im/post/5d03b820e51d4550723b13e8)
