const path = require("path")
const webpack = require('webpack')
const cwd = process.cwd();

// Generates the app with with the babel-template-vars plugin enabled.
module.exports = ( env ) => {
  return {
    entry: {
      app: './src/index.js'
    },
    output: {
      path: path.join(cwd, './root/assets/'),
      publicPath: '/',
      filename: '[name].js'
    },
    devtool: 'eval-source-map',
    module: {
      rules: [
        {
          test: /\.(js|jsx|tsx|ts)$/,
          exclude: /node_modules/,
          loader: "babel-loader",
          options: {
							plugins: [ 
                [ 'babel-plugin-jsx-template-props', { tidyOnly: true } ]
              ],
          }
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
    plugins: []
  };
};

