var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var glob = require('glob');
var path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir)
}
var nodeModules = resolve('node_modules');
var port = 8080;
var rootPath = resolve('./build');

var _entries = {};
var fileNames=[];
var jsDir = resolve('./src/entry');
var entryFiles = glob.sync(`${jsDir}/*.js`);
entryFiles.forEach((filePath) => {
    var filename = filePath.substring(filePath.lastIndexOf('/')+1,filePath.lastIndexOf('.'));
    _entries[filename] = filePath;
    fileNames.push(filename);
});


var webpackConfig = {
  entry: Object.assign({},{"vendor":['vue']},_entries),
  output: {
    filename: '[name].js',
    path: rootPath,
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.common.js',
    }
  },
  devServer: {
    port: port
  },
  devtool: '#eval-source-map',
  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader'
      }, {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: nodeModules,
      }, {
        test: /\.css$/,
        loader: 'vue-style-loader!css-loader',
      }, {
        test: /\.scss$/,
        loader: 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
      },
      // loader png or jpg or git and svg files 然后压缩之，并把小于10kb的图片base64格式内联到css文件中。
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'image-webpack-loader?{progressive:true, optimizationLevel: 4, ' +
          'interlaced: false, pngquant:{quality: "65-90", speed: 4}}', // 压缩图片
          'url-loader?limit=10000&name=img/[hash:8].[name].[ext]', // 小于10kb的图片base64格式内联到css文件中。
        ],
      }, {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader?limit=10000&name=fonts/[hash:8].[name].[ext]'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': "'development'"
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.ProvidePlugin({'Vue': "vue"}),
    new webpack.LoaderOptionsPlugin({
      // test: /\.xxx$/, // may apply this only for some modules
      options: {
        vue: {
          loaders: {
            css: 'vue-style-loader!css-loader',
            postcss: 'vue-style-loader!css-loader',
            sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
          }
        }
      }
    })
  ]
}
let htmlPageWebpack = fileNames.map((name)=>{
  return new HtmlWebpackPlugin({
      filename: `${name}.html`,
      template: 'index.html',
      inject: "body",
      title: "hello page",
      chunks:['vendor', name],
  });
});
webpackConfig.plugins = [].concat(webpackConfig.plugins,htmlPageWebpack);
module.exports = webpackConfig;