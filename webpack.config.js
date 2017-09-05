var path = require('path');

module.exports = {
  entry: "./app/assets/scripts/App.js",
  output: {
    path: path.resolve(__dirname, "./app/temp/scripts"),
    filename: "App.js"
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader', // interacts with webpack
        query: {
          presets : ['es2015']
        },
        test: /\.js$/, //only apply to js files 
        exclude: /node_modules/ // not all js files need to be converted
      }
    ]
  }
}