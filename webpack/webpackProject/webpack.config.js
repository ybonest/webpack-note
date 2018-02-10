const path = require("path") //node内置path模块，用于拼接路径


//用于将html文件托管于内存中，与webpack-dev-server配合使用，达到js和index实时编译的目的
const HtmlWebpackPlugin = require("html-webpack-plugin")
const webpack = require("webpack")

module.exports = {  //node函数，用于将对象暴露给外界
  entry: path.join(__dirname, './src/main.js'), //指定入口js文件
  output: {
    path: path.join(__dirname, './dist'), //制定出口文件目录
    filename: "bundle.js"  //制定编译后的js文件名称
  },
  plugins: [  //配置webpack使用的插件
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html'),
      filename: "index.html"
    })
  ],
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }, //处理css文件

      /**
       * 处理sass文件,依赖style-loader/css-loader/sass-loader
       */
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.png|jpg|jif|bmp$/,
        use: ['url-loader?limit=1&name=[hash:8]-[name].[ext]']
      }, //url-loader和file-loader处理路径问题
      {
        test: /\.js$/,
        use: ["babel-loader"],
        exclude: /node_modules/
      }, //安装相关loader编译js高级语法
      {
        test: /\.eot|svg|ttf|woff|woff2$/,
        use: ['url-loader']
      },
      {
        test: /\.vue$/,     //配置解析vue模板文件，依赖vue-loader和vue-template-compiler
        use: ['vue-loader']
      },
      {
        test: require.resolve('jquery'), use: [{  //.配置全局jquery
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
}