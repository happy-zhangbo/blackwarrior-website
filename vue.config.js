const path = require('path')
const resolve = dir => path.join(__dirname, dir)

const CompressionWebpackPlugin = require("compression-webpack-plugin");
const zopfli = require("@gfx/zopfli");
const BrotliPlugin = require("brotli-webpack-plugin");

const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV);
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i;

const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

module.exports = {
  publicPath: './',
  configureWebpack: config => {
    const plugins = [];
    if (IS_PROD) {
      plugins.push(
          new CompressionWebpackPlugin({
            algorithm(input, compressionOptions, callback) {
              return zopfli.gzip(input, compressionOptions, callback);
            },
            compressionOptions: {
              numiterations: 15
            },
            minRatio: 0.99,
            test: productionGzipExtensions
          })
      );
      plugins.push(
          new BrotliPlugin({
            test: productionGzipExtensions,
            minRatio: 0.99
          })
      );
    }
    plugins.push(new NodePolyfillPlugin());
    config.plugins = [...config.plugins, ...plugins];

  },
  chainWebpack: config => {
    config.module
        .rule('css')
        .test(/\.css$/)
        .oneOf('vue')
        .resourceQuery(/\?vue/)
    config.resolve.alias
        .set('@', resolve('src'))
        .set('assets', resolve('src/assets'))
        .set('components', resolve('src/components'))
        .set('views', resolve('src/views'))
  },

  devServer: {
    // overlay: {
    //   warnings: true,
    //   errors: true
    // },
    // open: false,
    // host: "localhost",
    // port: "8080",
    // https: false,
    // hotOnly: false,
    historyApiFallback: {
      index: '/index.html'
      //与output的publicPath有关(HTMLplugin生成的html默认为index.html)
    },
    proxy: {
      "/api": {
        target: "http://127.0.0.1:8080/",
        secure: false,
        changeOrigin: true,
        ws: false,
        pathRewrite: {
          "^/api": "/"
        }
      }
    }
  }
}
