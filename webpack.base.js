const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const devMode = process.env.NODE_ENV !== 'production'
const path = require('path');


module.exports = {
  entry: './src/app.jsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.js'
  },
  resolve: {
    extensions: [".js", ".json", ".jsx"],
    // 解析配置，可以省略 对应的文件后缀
  },
  module:{
    rules:[
    {
      test: /\.jsx|js$/,
      exclude: /node_modules/,
      use: { loader: 'babel-loader' },
    }
  ]
  },
  plugins:[
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ]
}