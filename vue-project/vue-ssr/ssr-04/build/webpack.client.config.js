const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./webpack.base.config')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')

const config = merge(base, {
  entry: {
    app: './src/entry-client.js'
  },
  resolve: {
    alias: {
      'create-api': './create-api-client.js'
    }
  },
  optimization: {
    runtimeChunk: {
      name: "manifest",
    },
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all"
        }
      }
    }
  },
  plugins: [
    // strip dev-only code in Vue source
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.VUE_ENV': '"client"'
    }),
    // extract vendor chunks for better caching
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor',
    //   minChunks: function (module) {
    //     // a module is extracted into the vendor chunk if...
    //     return (
    //       // it's inside node_modules
    //       // and not a CSS file (due to extract-text-webpack-plugin limitation)
    //       /node_modules/.test(module.context) && !/\.css$/.test(module.request)
    //     )
    //   }
    // }),
    // // extract webpack runtime & manifest to avoid vendor chunk hash changing
    // // on every build.
    // // 重要信息：这将 webpack 运行时分离到一个引导 chunk 中，
    // // 以便可以在之后正确注入异步 chunk。
    // // 这也为你的应用程序 /vendor 代码提供了更好的缓存。
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'manifest'
    // }),
    // 此插件在输出目录中
    // 生成 `vue-ssr-client-manifest.json`
    new VueSSRClientPlugin()
  ]
})

module.exports = config