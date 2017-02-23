 var path = require('path');
 var webpack = require('webpack');

 module.exports = {
     entry: './js/index.js',
     output: {
         path: path.resolve(__dirname, 'build'),
         filename: 'index.bundle.js'
     },
     module: {
         loaders: [
             {
                 test: /\.js$/,
                 loader: 'babel-loader',
                 exclude: /node_modules/
             }
         ]
     },
     stats: {
         colors: true
     },
     devtool: 'source-map'
 };