// pages/address/address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: 0,
    name: '',
    phone: '',
    address: '',
  },
  input: function (e) {
    if (e.target.dataset.id == 1) {
      this.setData({
        name: e.detail.value
      })
    }
    if (e.target.dataset.id == 2) {
      this.setData({
        phone: e.detail.value
      })
    }
    if (e.target.dataset.id == 3) {
      this.setData({
        address: e.detail.value
      })
    }
  },
  //表单提交事件
  submit:function(){
    if (!this.data.name) {
      wx.showToast({
        title: '姓名不能为空!',
        icon: 'none',
        duration: 1000
      })
      return false;
    }
    var reg = /^1\d{10}$/;
    if (reg.test(this.data.phone) == false) {
      wx.showToast({
        title: '电话号码有误!',
        icon: 'none',
        duration: 1000
      })
      return false;
    }
    if (!this.data.address) {
      wx.showToast({
        title: '地址不能为空!',
        icon: 'none',
        duration: 1000
      })
      return false;
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})