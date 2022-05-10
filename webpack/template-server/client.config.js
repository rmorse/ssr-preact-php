const path = require("path")
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const cwd = process.cwd();

// Generates the app with with the babel-template-vars plugin enabled.
module.exports = ( env ) => {
  return {
    entry: {
      main: './src/index.js'
    },
    output: {
      path: path.join(cwd, './build/template-server'),
      publicPath: '/',
      filename: '[name].js'
    },
    target: 'web',
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.(js|jsx|tsx|ts)$/,
          exclude: /node_modules/,
          loader: "babel-loader",
          options: {
							plugins: [ 'babel-plugin-jsx-template-props' ],
          }
        },
        {
          // Loads the javacript into html template provided.
          // Entry point is set below in HtmlWebPackPlugin in Plugins 
          test: /\.html$/,
          use: [
            {
              loader: "html-loader",
              //options: { minimize: true }
            }
          ]
        },
        {
          test: /\.css$/,
          use: [ 'style-loader', 'css-loader' ]
        },
        {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
        }
      ]
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: "./src/template-server/index.html",
        filename: "./index.html",
        excludeChunks: [ 'server' ]
      })
    ]
  };
};

