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

  + 安装bootstrap，并在main.js引入，使用api请参考[官方文档](http://www.bootcss.com/)
  + 安装echarts插件，具体使用请查看[官方文档](http://echarts.baidu.com/)，echars在webpack中的使用方式请参考该处[链接](http://echarts.baidu.com/tutorial.html#%E5%9C%A8%20webpack%20%E4%B8%AD%E4%BD%BF%E7%94%A8%20ECharts)