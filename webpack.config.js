const path = require('path');
module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer:{
    contentBase:'./dist',
    compress: true,
    port: 9091
  },
  module: {
    rules:[
      {
        test:/\.vue$/,
        use:[
          'vue-loader'
        ]
      },
      {
        test: /\.css/,
        use:[
          'style-loader',
          'css-loader'
        ]
      },
      {
        test:/\.(png|svg|jpg|gif)$/,
        use:[
          'file-loader'
        ]
      },
      {
        test:/\.js$/,
        use:[
          'babel-loader?cacheDirectory'
        ]
      }
    ]
  },
  devtool: 'inline-source-map'
}
