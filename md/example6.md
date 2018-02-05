### 实例六 配置webpack-dev-server启动方式
+ [实例链接](https://github.com/ybonest/webpack-note/tree/master/webpack/example6)

本例主要介绍在package.json文件中配置webpack-dev-server启动方式,如下
```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "webpack-dev-server --open chrome --port 3000 --host 192.168.171.58 --compress --progress --hot"
  },
```

+ `--open chrome`表示默认执行后自动打开浏览器，并且以chrome浏览器打开
+ `--port 3000`设置`webpack-dev-server`启动端口，默认8080
+ `--host 192.168.163.31`设置`webpack-dev-server`启动IP
+ `--compress`设置打包文件压缩
+ `--progress`设置启动时在控制台所显示进度条
+ `--hot`热更新/热刷新/热重载,更够提高打包的效率，因为热更新只是把需要重新打包的代码编译了一下，并以补丁的形式，热更新到了页面中，并没有重新编译整个项目,而且`--hot`也能够实现页面的无刷新重载(这个无刷新重载对JS无效，只对CSS有效)