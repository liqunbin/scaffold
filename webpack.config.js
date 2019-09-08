const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
const path = require("path");
module.exports = {
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
  // 解析配置，可以省略 对应的文件后缀
  resolve: {
    extensions: [".js", ".json", ".jsx"]
  },
  plugins: [
    new HtmlWebpackPlugin({   // 处理打包出来的html
      template: './public/index.html',
      filename: "index.html",
      hash:true,
      minify:{
        // collapseWhitespace: true, 压缩成一行
        // removeComments: true,
        // removeRedundantAttributes: true,
        // removeScriptTypeAttributes: true,
        // removeStyleLinkTypeAttributes: true,
        // useShortDoctype: true
      }
    })
  ]
}; 
