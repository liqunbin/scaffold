 // webpack 基于node环境， 所以使用node的语法。
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const merge = require("webpack-merge");
const common = require("./webpack.base");
const webpack = require('webpack'); 
const path = require("path");
module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.less|css$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'less-loader',
        ]
      }
    ]
  },
 
  optimization: { // 优化
    minimize: true,
    // 是否压缩bundle ， producttion 默认就是为true
  },
  plugins: [
    new HtmlWebpackPlugin({   // 处理打包出来的html
      template: './public/index.html',
      // html 模版路径
      filename: "index.html",
      // 输出文件在output里叫什么
      inject: 'body',
      // 打包后的js插入在html的哪个位置，true/'head'  false/'body', 默认是false
      hash: true,
      // 是否给文件添加hash ，客户端根据hash值来判断是否更新， 处理缓存的方法
      minify: {
        collapseWhitespace: true,
        //压缩成一行， 删除空格符、换行
        removeComments: true,
        // 去除注释
        // removeRedundantAttributes: true,
        // removeScriptTypeAttributes: true,
        // removeStyleLinkTypeAttributes: true,
        // useShortDoctype: true
      }
    }),
  ]
}) 
