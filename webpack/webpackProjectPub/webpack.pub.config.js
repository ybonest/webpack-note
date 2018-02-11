const path = require("path") //node内置path模块，用于拼接路径

/**
 *1、用于将html文件托管于内存中，与webpack-dev-server配合使用，达到js和index实时编译的目的 
 */
const HtmlWebpackPlugin = require("html-webpack-plugin")

/**
 *2、引入extract-text-webpack-plugin插件，抽离css/less/scss文件 
 */
const ExtractTextPlugin = require("extract-text-webpack-plugin")

/**
 * 3、每次发布自动删除dist目录，依赖插件：clean-webpack-plugin
 */
const CleanPlugin = require("clean-webpack-plugin")

/**
 * 4、优化压缩js文件(去掉换行注释等)
 *引入webpack， 配置plugins --- new Webpack.optimize.UglifyJsPlugin()
 */
const webpack = require("webpack")



module.exports = {  //node函数，用于将对象暴露给外界
  entry: {
    app: path.join(__dirname, './src/main.js'), //指定入口js文件
    vendors1:["vue","vuex","vue-router"],  //指定分离打包的js，放置在同一数组的会被打包到同一js文件
    vendors2:["axios"],
    vendors3:["jquery"],
    // vendors4:["popper","bootstrap"],
    vendors5:["echarts"]
  },
  output: {
    path: path.join(__dirname, './dist'), //制定出口文件目录
    chunkFilename:"js/[chunkhash:6]-[name].js",
    filename: "js/bundle.js"  //制定编译后的js文件名称
  },
  plugins: [
    /**
     * 配置html-webpack-plugin插件，以及对应的压缩配置
     */
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html'),
      filename: "index.html",
      minify: { // 指定 生成的 index.html 的压缩选项
        collapseWhitespace: true,  // 合并空白字符
        removeComments: true, // 把所有的注释删除掉
        removeAttributeQuotes: true // 移除属性上的引号
      }
    }),
    // new ExtractTextPlugin("css/styles.css")  //抽离css样式表
    new ExtractTextPlugin({ filename: 'css/[name].[hash:5].css', allChunks: true }),  //抽离css样式表
    new CleanPlugin(["dist"]), //该处配置要清空删除的目录
    new webpack.optimize.UglifyJsPlugin(),   //压缩js文件
    new webpack.optimize.CommonsChunkPlugin({
      name:["vendors1","vendors2","vendors3","vendors5"],  //对应入口文件的配置
      filename:"js/[chunkhash:6]-vendors.js"
    })
  ],
  module: {
    rules: [
      { //处理css文件
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },

      /**
       * 处理sass文件,依赖style-loader/css-loader/sass-loader
       */
      {
        test: /\.scss$/,
        // use: ['style-loader', 'css-loader', 'sass-loader']
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"]
        })
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
        // options:{
        //   extractCSS: true
        // }
      },
      {
        test: require.resolve('jquery'), use: [{  //.配置全局jquery
          loader: 'expose-loader',
          options: 'jQuery'
        },
        {
          loader: 'expose-loader',
          options: '$'
        }]
      }
    ]
  }
}