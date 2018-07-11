//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 0,
    loading:true
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  add:function() {
    console.log(this.data.motto);
    let that = this;
    wx.request({
      url: 'https://dyxuan.top/api/saveclick',
      method: 'GET',
      success: function (res) {
        console.log(res);
      }
    })
    this.setData({
      motto: this.data.motto+1
    })
  },
  onLoad: function () {
    let that = this;
    wx.request({
      url: 'https://dyxuan.top/api/getclick',
      method: 'GET',
      success: function (res) {
        console.log(res);
        that.setData({
          motto:res.data.data||0,
          loading:false
        })
      }
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
