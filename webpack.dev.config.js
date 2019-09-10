// webpack 基于node环境， 所以使用node的语法。
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const merge = require("webpack-merge");
const common = require("./webpack.base");
const webpack = require('webpack');
const path = require("path");
module.exports = merge(common, {
  mode: 'development',
  module: {
    // use 的执行顺序， 从右向左执行， 从上至下执行
    rules: [
      {
        // style-loader 把css 插入head标签里
        // css-loader 解析css 文件
        test: /\.css|less$/,
        exclude: /node_modules/,
        use: [
            {
            loader: 'style-loader',
            options: {
              // hmr: process.env.NODE_ENV === 'development',
              // injectType: 'styleTag',
              // insert:'head', // 生成的css代码插入在head的最上面, 不止为何会报错(官方好像去掉了旧的写法)
              // insert: function insertAtTop(element) { // 生成的css代码插入在head的最上面
              //   var parent = document.querySelector('head');
              //   var lastInsertedElement =
              //     window._lastElementInsertedByStyleLoader;

              //   if (!lastInsertedElement) {
              //     parent.insertBefore(element, parent.firstChild);
              //   } else if (lastInsertedElement.nextSibling) {
              //     parent.insertBefore(element, lastInsertedElement.nextSibling);
              //   } else {
              //     parent.appendChild(element);
              //   }

              //   window._lastElementInsertedByStyleLoader = element;
              // },
            }
          }, 
          {
            loader: 'css-loader',
            options: { sourceMap: true, },

          },
          'postcss-loader',
          'less-loader',
        ]
      },

    ]
  },
  devServer: {
    compress: true,
    // 对应用服务进行压缩 gzip
    // open: true,
    // 编译完自动打开浏览器
    progress: true,
    contentBase: path.resolve(__dirname, "build"),
    historyApiFallback: true,
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
    proxy: {
      '/api': 'http://localhost:3000'
    }
    // 请求代理 ,请求到/api/users 现在被代理到请求 http://localhost:3000/api/users
  },
  plugins: [
    new HtmlWebpackPlugin({   // 处理打包出来的html
      template: './public/index.html',
      filename: "index.html",
      showError: true,
      // 是否把错误信息输出在html上
    }),
  ]
})
