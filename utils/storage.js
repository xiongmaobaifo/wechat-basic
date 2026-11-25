const storage = {
  set(key, data) {
    wx.setStorageSync(key, data)
  },
  get(key) {
    const data = wx.getStorageSync(key)
    return data
  },
  getInfo() {
    const { keys, currentSize, limitSize } = wx.getStorageInfoSync();
    return keys
  },
  remove(key) {
    wx.removeStorageSync(key);
  },
  clear() {
    wx.clearStorageSync();
  }
}

export default storage;