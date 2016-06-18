// Helper: root(), and rootDir() are defined at the bottom
var path = require('path');
var webpack = require('webpack');
var AWS = require("aws-sdk");
var request = require('request');
// Webpack Plugins
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var S3Plugin = require('webpack-s3-plugin')
/**
 * Env
 * Get npm lifecycle event to identify the environment
 */
var ENV = process.env.npm_lifecycle_event;
var isTest = ENV === 'test' || ENV === 'test-watch';
var isDeploy = ( process.env.deploy === 'beta' || process.env.deploy === 'prod' );
var isProd = ENV === 'build' || isDeploy === true;

function ClearCloudFlareCachePlugin(options) {
  // Setup the plugin instance with options...
}

ClearCloudFlareCachePlugin.prototype.apply = function(compiler) {
  compiler.plugin("done", () => {
        console.log("Clearing cloudflare cache ...");
        var files={"files":["https://app-beta.secureslice.com/index.html","https://app-beta.secureslice.com"]};
        if(process.env.deploy==='prod'){
          files={"files":["https://app.secureslice.com/index.html","https://app.secureslice.com"]};
        }
        request.delete({
          url:"https://api.cloudflare.com/client/v4/zones/66221526cbd9df3d231698f5c085a73a/purge_cache",
          body:files,
          json:true,
          headers:{
            "X-Auth-Email": "apps@secureslice.com",
            "X-Auth-Key": "9397041a36a4e4d9448b03dc25ea24221e8f0"
          }
        }, function (error, response, body) {
          if(error || response.statusCode !== 200){
            console.error("Error clearing cloudflare cache ", error , "Response status code: " , response.statusCode);
            throw new Error("Error clearing cloudflare cache, do it manually");
          }else{
            console.log("Cleared cloudflare cache for files ", files);
          }
        });
  });
};




module.exports = function makeWebpackConfig() {
  /**
   * Config
   * Reference: http://webpack.github.io/docs/configuration.html
   * This is the object where all configuration gets set
   */
  var config = {};

  /**
   * Devtool
   * Reference: http://webpack.github.io/docs/configuration.html#devtool
   * Type of sourcemap to use per build type
   */
  if (isProd) {
    config.devtool = 'source-map';
  } else {
    config.devtool = 'eval-source-map';
  }

  // add debug messages
  config.debug = !isProd || !isTest;

  /**
   * Entry
   * Reference: http://webpack.github.io/docs/configuration.html#entry
   */
  config.entry = isTest ? {} : {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'app': './src/main.ts' // our angular app
  };

  /**
   * Output
   * Reference: http://webpack.github.io/docs/configuration.html#output
   */
  config.output = isTest ? {} : {
    path: root('dist'),
    publicPath: isProd ? '/' : 'http://localhost:8080/',
    filename: isProd ? '[hash]/js/[name].js' : 'js/[name].js',
    chunkFilename: isProd ? '[hash]/[id].chunk.js' : '[id].chunk.js'
  };

  /**
   * Resolve
   * Reference: http://webpack.github.io/docs/configuration.html#resolve
   */
  config.resolve = {
    cache: !isTest,
    root: root(),
    // only discover files that have those extensions
    extensions: ['', '.ts', '.js', '.json', '.css', '.scss', '.html'],
    alias: {
      'app': 'src/app',
      'common': 'src/common'
    }
  };

  /**
   * Loaders
   * Reference: http://webpack.github.io/docs/configuration.html#module-loaders
   * List: http://webpack.github.io/docs/list-of-loaders.html
   * This handles most of the magic responsible for converting modules
   */
  config.module = {
    preLoaders: isTest ? [] : [{test: /\.ts$/, loader: 'tslint'}],
    loaders: [
      // Support for .ts files.
      {
        test: /\.ts$/,
        loader: 'ts',
        query: {
          'ignoreDiagnostics': [
            2403, // 2403 -> Subsequent variable declarations
            2300, // 2300 -> Duplicate identifier
            2374, // 2374 -> Duplicate number index signature
            2375, // 2375 -> Duplicate string index signature
            2502  // 2502 -> Referenced directly or indirectly
          ]
        },
        exclude: [isTest ? /\.(e2e)\.ts$/ : /\.(spec|e2e)\.ts$/, /node_modules\/(?!(ng2-.+))/]
      },

      // copy those assets to output
      {test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/, loader: 'file?name=[hash]/fonts/[name].[ext]?'},

      // Support for *.json files.
      {test: /\.json$/, loader: 'json'},

      // Support for CSS as raw text
      // use 'null' loader in test mode (https://github.com/webpack/null-loader)
      // all css in src/style will be bundled in an external css file
      {
        test: /\.css$/,
        exclude: root('src', 'app'),
        loader: isTest ? 'null' : ExtractTextPlugin.extract('style', 'css?sourceMap!postcss')
      },
      // all css required in src/app files will be merged in js files
      {test: /\.css$/, include: root('src', 'app'), loader: 'raw!postcss'},

      // support for .scss files
      // use 'null' loader in test mode (https://github.com/webpack/null-loader)
      // all css in src/style will be bundled in an external css file
      {
        test: /\.scss$/,
        exclude: root('src', 'app'),
        loader: isTest ? 'null' : ExtractTextPlugin.extract('style', 'css?sourceMap!postcss!sass')
      },
      // all css required in src/app files will be merged in js files
      {test: /\.scss$/, exclude: root('src', 'style'), loader: 'raw!postcss!sass'},

      // support for .html as raw text
      // todo: change the loader to something that adds a hash to images
      {test: /\.html$/, loader: 'raw'}
    ],
    postLoaders: [],
    noParse: [/.+zone\.js\/dist\/.+/, /.+angular2\/bundles\/.+/, /angular2-polyfills\.js/]
  };

  if (isTest) {
    // instrument only testing sources with Istanbul, covers ts files
    config.module.postLoaders.push({
      test: /\.ts$/,
      include: path.resolve('src'),
      loader: 'istanbul-instrumenter-loader',
      exclude: [/\.spec\.ts$/, /\.e2e\.ts$/, /node_modules/]
    });

    // needed for remap-instanbul
    config.ts = {
      compilerOptions: {
        sourceMap: false,
        sourceRoot: './src',
        inlineSourceMap: true
      }
    };
  }

  /**
   * Plugins
   * Reference: http://webpack.github.io/docs/configuration.html#plugins
   * List: http://webpack.github.io/docs/list-of-plugins.html
   */
  config.plugins = [
    // Define env variables to help with builds
    // Reference: https://webpack.github.io/docs/list-of-plugins.html#defineplugin
    new webpack.DefinePlugin({
      // Environment helpers
      'process.env': {
        ENV: JSON.stringify(ENV)
      }
    })
  ];

  if (!isTest) {
    config.plugins.push(
      // Generate common chunks if necessary
      // Reference: https://webpack.github.io/docs/code-splitting.html
      // Reference: https://webpack.github.io/docs/list-of-plugins.html#commonschunkplugin
      new CommonsChunkPlugin({
        name: [ 'app', 'vendor', 'polyfills' ]
      }),

      // Inject script and link tags into html files
      // Reference: https://github.com/ampedandwired/html-webpack-plugin
      new HtmlWebpackPlugin({
        template: './src/public/index.html',
        chunksSortMode: 'dependency'
      }),

      // Extract css files
      // Reference: https://github.com/webpack/extract-text-webpack-plugin
      // Disabled when in test mode or not in build mode
      new ExtractTextPlugin('[hash]/css/[name].css', {disable: !isProd})
    );
  }

  // Add build specific plugins
  if (isProd) {
    config.plugins.push(
      // Reference: http://webpack.github.io/docs/list-of-plugins.html#noerrorsplugin
      // Only emit files when there are no errors
      new webpack.NoErrorsPlugin(),

      // Reference: http://webpack.github.io/docs/list-of-plugins.html#dedupeplugin
      // Dedupe modules in the output
      new webpack.optimize.DedupePlugin(),

      // Reference: http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
      // Minify all javascript, switch loaders to minimizing mode
      new webpack.optimize.UglifyJsPlugin({
        // Angular 2 is broken again, disabling mangle until beta 6 that should fix the thing
        // Todo: remove this with beta 6
        mangle: false
      }),

      // Copy assets from the public folder
      // Reference: https://github.com/kevlened/copy-webpack-plugin
      new CopyWebpackPlugin([{
        from: root('src/public')
      }])
    );
  }

  
  /**
   * PostCSS
   * Reference: https://github.com/postcss/autoprefixer-core
   * Add vendor prefixes to your css
   */
  config.postcss = [
    autoprefixer({
      browsers: ['last 2 version']
    })
  ];

  /**
   * Sass
   * Reference: https://github.com/jtangelder/sass-loader
   * Transforms .scss files to .css
   */
  config.sassLoader = {
    //includePaths: [path.resolve(__dirname, "node_modules/foundation-sites/scss")]
  };

  /**
   * Apply the tslint loader as pre/postLoader
   * Reference: https://github.com/wbuchwalter/tslint-loader
   */
  config.tslint = {
    emitErrors: false,
    failOnHint: false
  };

  /**
   * Dev server configuration
   * Reference: http://webpack.github.io/docs/configuration.html#devserver
   * Reference: http://webpack.github.io/docs/webpack-dev-server.html
   */
  config.devServer = {
    contentBase: './src/public',
    historyApiFallback: true,
    stats: 'minimal' // none (or false), errors-only, minimal, normal (or true) and verbose
  };
  if(isDeploy){
    var deployTarget = process.env.deploy;
    var s3BucketName='app-beta.secureslice.com';
    if(deployTarget === 'prod'){
      s3BucketName='app.secureslice.com';
    }
    var credentials = new AWS.SharedIniFileCredentials({profile: 'beta'});
    config.plugins.push(new S3Plugin({
      directory: "dist/",
      s3Options: {
        credentials:credentials,
        region: 'us-east-1'
      },
      s3UploadOptions: {
        Bucket: s3BucketName
      }
    }));
    config.plugins.push(new ClearCloudFlareCachePlugin());
  }
  return config;
}();

// Helper functions
function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [__dirname].concat(args));
}
