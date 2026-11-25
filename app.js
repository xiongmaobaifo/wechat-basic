// app.js
App({
  onLaunch() {
    // 第一次打开
    // options.query == {number:1}
    console.info('App onLaunch');
  },
  onShow(options) {
    // 从后台被 scheme 重新打开
    // options.query == {number:1}
  },
  onHide() {
    // 小程序从前台进入后台
  },
  onError(msg) {
    // 小程序发生脚本错误或 API 调用出现报错
    console.log(msg);
  },
  globalData: {
    userInfo: null
  }
})
