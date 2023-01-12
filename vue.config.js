const { defineConfig } = require('@vue/cli-service');

const isDevelop = process.env.NODE_ENV === 'development';

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: isDevelop ? '/' : '/pdf-view-app/dist'
})
