var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var glob = require('glob');
var path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir)
}
var nodeModules = resolve('node_modules');
var port = 8080;
var rootPath = resolve('./dist');

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
    filename: '[name].[hash:8].min.js',
    path: rootPath,
    publicPath: './'
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
        use: 'vue-loader',
      }, {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: nodeModules,
      }, {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({ fallback: 'vue-style-loader', use: 'css-loader' }),
      }, {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({ fallback: 'vue-style-loader', use: 'css-loader!sass-loader?indentedSyntax'}),
      },
      // loader png or jpg or git and svg files 然后压缩之，并把小于10kb的图片base64格式内联到css文件中。
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          'image-webpack-loader?{progressive:true, optimizationLevel: 4, ' +
          'interlaced: false, pngquant:{quality: "65-90", speed: 4}}', // 压缩图片
          'url-loader?limit=10000&name=img/[name].[hash:8].[ext]', // 小于10kb的图片base64格式内联到css文件中。
        ],
      }, {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: 'url-loader?limit=10000&name=fonts/[name].[hash:8].[ext]'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': "'production'"
    }),
    new ExtractTextPlugin({filename:'css/[name].[hash:8].min.css',disable: false, allChunks: true}),//可以将所有css文件打包到css/main.css文件中
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.ProvidePlugin({'Vue': "vue"}),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    })
  ]
}

let htmlPageWebpack = fileNames.map((name)=>{
  return new HtmlWebpackPlugin({
      filename: `${name}.html`,
      template: 'index.html',
      inject: true,
      title: "hello page",
      chunks:['vendor', name],
      hash:true,
      minify: {
          removeComments: true,//移除注释
          collapseWhitespace: true
      }
  });
});

webpackConfig.plugins = [].concat(webpackConfig.plugins,htmlPageWebpack);
module.exports = webpackConfig;