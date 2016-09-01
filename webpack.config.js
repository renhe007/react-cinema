var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
   'webpack-dev-server/client?http://localhost:4000',
   'webpack/hot/only-dev-server',
   path.resolve(__dirname, './app/main.js')
 ],
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js',
    publicPath: "http://localhost:4000/build/"
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015']
      },
      { 
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ]
  },
  devtool: 'source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve:{
    extensions:['','.js','.jsx']
  },
  devServer:{
        contentBase:path.join(__dirname,'build')
    }
};
