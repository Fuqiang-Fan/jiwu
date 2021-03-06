// const hosthttp = 'http://59.110.157.146:8081';
// const hosthttp = 'http://api.nthpower.net/';
// const hosthttp = process.env.NODE_ENV === 'production' ? 'http://api.nthpower.net/' : 'http://test-api.nthpower.net/';

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/yanxuanhaofang/',
  devServer: {
    port: 5004,
    proxy: {
      '/': {
        target: 'http://api.nthpower.net/'
      }
    // },
    // configureWebpack: {
    //   devtool: 'source-map'
    }
    // 测试iframe时开启，需要在dist文件中添加iframe.html文件，访问项目地址加/iframe.html
    // contentBase: './dist'
  }
};
 