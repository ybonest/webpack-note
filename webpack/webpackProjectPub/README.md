#### 项目搭建步骤
1. 安装webpack，执行命令：`npm i webpack -D`
2. 安装webpack-dev-server(一个小型的node服务)，执行命令：`npm i webpack-dev-server -D`
3. 安装html-webpack-plugin，执行命令：`npm i html-webpack-plugin -D`
4. 安装项目所需其它文件
  + `axios`------vue推荐的ajax请求插件
  + `vue`
  + `vue-router` ---- Vue路由
  + `vuex` ---- Vue数据共享池
  + js高级语法相关loader ,此处注意配置.babelrc文件
  + css以及sass编译相关loader和依赖
  + 配置对.vue结尾的文件解析loader:`vue-loader`和`vue-template-compiler`
  + 引入jQuery 使用expose-loader 配置在webpack.config.js文件中配置全局对象
  ```
   module: {
    rules: [
      {
        test: require.resolve('jquery'), use: [{
          loader: 'expose-loader',
          options: 'jQuery'
        }, 
        {
          loader:'expose-loader',
          options:'$'
        }]
      }
    ]
  }
  ```