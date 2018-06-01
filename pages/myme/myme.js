//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onReady: function () {
    if (this.data.hasUserInfo == false) {
      console.log('未登录')
      wx.login({
        success: function (res) {
          if (res.code) {
            var code = res.code;
            wx.getUserInfo({
              success: function (res1) {
                console.log(res1)
                // this.setData({
                //   userInfo: res1.userInfo,
                //   hasUserInfo: true
                // })
                app.globalData.userInfo = res1.userInfo
                var page = getCurrentPages().pop();
                page.onLoad();
              }
            })
          }
        }
      })
    }

  },
  onLoad: function () {

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }



  },
  getUserInfo: function (e) {
    console.log(e)
    let msg = e.detail.errMsg
    if (msg.substring(msg.length - 2, msg.length) == 'ok') {
      app.globalData.userInfo = e.detail.userInfo
      this.setData({
        userInfo: e.detail.userInfo,
        hasUserInfo: true
      })
    }
    console.log(this.data.hasUserInfo)
  },
  //客服电话
  hotLine: function () {
    wx.makePhoneCall({
      phoneNumber: '400-968-5768',
      success: function () {
        console.log("拨号成功!");
      },
      fail: function () {
        console.log("拨号失败!");
      }
    })
  }
})
