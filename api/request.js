import {
  Loading
} from "./loading"
const loading = new Loading()

const baseUrl = 'https://*******';

const defaultHeader = {
  'content-type': 'application/json'
  // token
}

// 封装请求
module.exports = function (options) {
  return new Promise((resolve, reject) => {
    options.loading && loading.addLoading()
    wx.request({
      ...options,
      url: baseUrl + options.url,
      header: Object.assign(defaultHeader, options.header),
      success: function (res) {
        resolve(res);
      },
      fail: function (error) {
        reject(error);
      },
      complete: () => {
        setTimeout(() => {
          options.loading && loading.closeLoading()
        }, 100);
      },
    });
  });
};