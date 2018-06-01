// pages/activity/activity.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentCate:0,
    huodong:[
      {
        id: 1,
        name: "xx活动"
      },
      {
        id: 2,
        name: "xx活动"
      },
      {
        id: 3,
        name: "xx活动"
      },
      {
        id: 4,
        name: "xx活动"
      }
    ],
    defaultImg: '../../images/no_pic.jpg',
    paiImage1: "../../images/buttonSolid1.png",//选中排序图片
    paiImage2: "../../images/buttonSolid.png",//没选中排序图片
    paiImage3: "../../images/buttonSolid.png",
    items: 1,//用于选中
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
  switchCate:function(e){
    console.log("当前选中:"+e.target.dataset.id)
    this.setData({
      currentCate: e.target.dataset.id
    })
  },
  paixu: function (e) {
    if (e.currentTarget.dataset.id == 1) {
      this.setData({
        items: 1,
        paiImage1: "../../images/buttonSolid1.png",
        paiImage2: "../../images/buttonSolid.png",
        paiImage3: "../../images/buttonSolid.png"
      })
    }
    if (e.currentTarget.dataset.id == 2) {
      this.setData({
        items: 2,
        paiImage1: "../../images/buttonSolid.png",
        paiImage2: "../../images/buttonSolid1.png",
        paiImage3: "../../images/buttonSolid.png"
      })
    }
    if (e.currentTarget.dataset.id == 3) {
      this.setData({
        items: 3,
        paiImage1: "../../images/buttonSolid.png",
        paiImage2: "../../images/buttonSolid.png",
        paiImage3: "../../images/buttonSolid1.png"
      })
    }
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