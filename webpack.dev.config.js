// webpack 基于node环境， 所以使用node的语法。
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require("path");
module.exports = {
  mode:'development',
  entry: './src/app.jsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.js'
  },
  module: {
    rules: [
      { test: /\.jsx$/, use: { loader: 'babel-loader' } }
    ]
  },
  devServer:{
    compress: true, 
    // 对应用服务进行压缩 gzip
    // open: true,
     // 编译完自动打开浏览器
    historyApiFallback:true,
    // 请求错误的处理
    host: '0.0.0.0',
    // 指定启动的服务地址 
    port: '5000',
    // 指定的端口
    inline: true,
    // 修改内容完是否自动刷新, 但是这个不是热更新，是刷新页面
    overlay: {
      warnings: false,
      errors: true
    },
    // 是否将有编译错误或者警告的代码，全屏显示在浏览器中
    proxy:{
      '/api':'http://localhost:3000'
    }
    // 请求代理 ,请求到/api/users 现在被代理到请求 http://localhost:3000/api/users
  },
  resolve: {
    extensions: [".js", ".json", ".jsx"],
    // 解析配置，可以省略 对应的文件后缀
  },
  plugins: [
    new HtmlWebpackPlugin({   // 处理打包出来的html
      template: './public/index.html',
      // html 模版路径
      filename: "index.html",
      // 输出文件在output里叫什么
      inject: 'body',
      // 打包后的js插入在html的哪个位置，true/'head'  false/'body', 默认是false
      showError: true,
      // 是否把错误信息输出在html上
    })
  ]
}; 
