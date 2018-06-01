//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '../../images/a.jpg',
      '../../images/b.jpg',
      '../../images/c.jpg',
      '../../images/d.jpg',
      '../../images/e.jpg'
    ],
    defaultImg:'../../images/no_pic.jpg',
    paiImage1:"../../images/buttonSolid1.png",//选中排序图片
    paiImage2:"../../images/buttonSolid.png",//没选中排序图片
    paiImage3:"../../images/buttonSolid.png",
    items:1,//用于选中
    searchValue:"",
    motto: 'Hello World',
    loading: true,
    indicatorDots: true,
    autoplay: true,
    loading: true,
    interval: 5000,
    duration: 1000,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //swiper点击事件(跳转图片对应活动)
  onSwiperTap:function(e){
    console.log("当前swiper对应的活动id:"+e.target.dataset.id);
    wx.navigateTo({
      url: '/pages/product/product'
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    
  },
  inputs:function(e){
    this.setData({
      searchValue: e.detail.value
    })
  },
  clear:function(){
    this.setData({
      searchValue:"",
    })
  },
  paixu:function(e){
    if (e.currentTarget.dataset.id == 1){
      this.setData({
        items:1,
        paiImage1:"../../images/buttonSolid1.png",
        paiImage2: "../../images/buttonSolid.png",
        paiImage3: "../../images/buttonSolid.png"
      })
    }
    if (e.currentTarget.dataset.id == 2){
      this.setData({
        items: 2,
        paiImage1: "../../images/buttonSolid.png",
        paiImage2: "../../images/buttonSolid1.png",
        paiImage3: "../../images/buttonSolid.png"
      })
    }
    if (e.currentTarget.dataset.id == 3){
      this.setData({
        items:3,
        paiImage1: "../../images/buttonSolid.png",
        paiImage2: "../../images/buttonSolid.png",
        paiImage3: "../../images/buttonSolid1.png"
      })
    }
  }
})
