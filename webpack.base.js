const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isProd = true;
// console.log('process.env.NODE_ENV: ', process.env.);
// console.log('isProd: ', isProd);
const path = require('path');
const firstloader = isProd ? MiniCssExtractPlugin.loader : 'style-loader'
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
    },
    {
      test: /\.css$/,
      exclude: /node_modules/,
      use: [
        firstloader,
        {
          loader: 'css-loader',
          options: isProd ? {} : { sourceMap: true, },
        },
        'postcss-loader',
      ]
    },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          firstloader,
          {
            loader: 'css-loader',
            options: isProd ? {} : { sourceMap: true, },
          },
          'postcss-loader',
          'less-loader',
        ]
      }
  ]
  },
  plugins:[
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ]
}