 // webpack 基于node环境， 所以使用node的语法。
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const webpack = require('webpack'); 
const path = require("path");
module.exports = {
  mode: 'production',
  entry: './src/app.jsx',
  output:{
    path: path.resolve(__dirname, 'build'),
    filename: 'app.js'
  },
  module: {
    rules: [
      { test: /\.jsx$/, use: { loader: 'babel-loader'} }
    ]
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
      inject:'body',
      // 打包后的js插入在html的哪个位置，true/'head'  false/'body', 默认是false
      hash:true, 
      // 是否给文件添加hash ，客户端根据hash值来判断是否更新， 处理缓存的方法
      showError:true, 
      // 是否把错误信息输出在html上
      minify:{
        collapseWhitespace: true, 
        //压缩成一行， 删除空格符、换行
        removeComments: true, 
        // 去除注释
        // removeRedundantAttributes: true,
        // removeScriptTypeAttributes: true,
        // removeStyleLinkTypeAttributes: true,
        // useShortDoctype: true
      }
    })
  ]
}; 
