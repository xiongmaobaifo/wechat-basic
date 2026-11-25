export class Loading {
  loadingCount;
  loading;
  constructor() {
    this.loadingCount = 0;
  }

  initLoading() {
    if (this.loading) {
      wx.hideLoading();
    }
    this.loading = wx.showLoading({
      title: '加载中...'
    });
  }

  addLoading() {
    if (this.loadingCount === 0) {
      this.initLoading()
    }
    this.loadingCount++;
  }

  closeLoading() {
    if (this.loadingCount > 0) {
      if (this.loadingCount === 1) {
        wx.hideLoading();
      }
      this.loadingCount--;
    }
  }
}