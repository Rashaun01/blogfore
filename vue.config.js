const { defineConfig } = require('@vue/cli-service')
/* eslint-disable import/extensions,import/no-unresolved */
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const {ElementPlusResolver} = require('unplugin-vue-components/resolvers')

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8001
  },
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ]
  }
})
