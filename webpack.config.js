
'use strict';

var webpack = require('webpack');
var path = require('path');
var BaseMapSrcPath = path.join(__dirname, 'lib/baseMap/lib');

module.exports = {
    entry:{
      Base: path.join(BaseMapSrcPath, 'main.js'),
    },
    resolve: {
      root: BaseMapSrcPath,
      extensions: ['', '.js'],
      modulesDirectories: ['node_modules', 'src']
    },
    output:{
      path: path.join(__dirname, '/build'),
      filename: 'main.bin.js',
      library: ['Example', '[name]'],
      pathInfo: true
    },
    module:{
      loaders:[
        {
          test: /\.(js|jsx)?$/,
          exclude: /node_modules/,
          loader: ['babel-loader'],
          query:{
            presets:['es2015','react']
          }
        },
        {
          test: /\.(css|less)$/,
          loader:'less!css!style'
        },
        {
          test:/\.(png|woff|woff2|eot|ttf|svg)?$/,
          loader:'url-loader'
        }
      ]
    },
    devServer: {
      contentBase: '/build',
      historyApiFallback: true
    },
    debug: true,
    devtool: 'eval-cheap-module-source-map'
};
