const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const cwd = process.cwd();

// This runs the pre-render server, with the app built from client.config.js.
module.exports = ( env ) => {
  return {
    entry: {
      server: './src/template-server/server.js',
    },
    output: {
      path: path.join(cwd, './build/template-server'),
      publicPath: '/',
      filename: '[name].js'
    },
    target: 'node',
    node: {
      // Need this when working with express, otherwise the build fails
      __dirname: false,   // if you don't put this is, __dirname
      __filename: false,  // and __filename return blank or /
    },
    externals: [nodeExternals()], // Need this to avoid error when working with Express
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          },
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        'serverConfig': {
          'keepalive': JSON.stringify( env?.keepalive ),
        },
      }),
    ]
  };
};