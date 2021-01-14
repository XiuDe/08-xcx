// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad() {
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
  getUserInfo(e) {
    console.log('获取用户信息',e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  // code -> session_key、openid
  // 获取手机号
  getPhoneNumber(e){
    console.log('获取手机号：', e);
    if (e.detail.errMsg == "getPhoneNumber:ok") {
      console.log('获取手机号成功：', e);
      wx.request({
        url: app.globalData.ser_url +  '/member-provider/api/appletLogin/wechatLogin',
        data:{
          iv:e.detail.iv,
          encryptedData: e.detail.encryptedData,
          openId: wx.getStorageSync('wx_info').openid,
          unionid: wx.getStorageSync('wx_info').unionid,
          sessionKey:wx.getStorageSync('wx_info').session_key,
          avatar: this.data.userInfo.avatarUrl,
          nickName: this.data.userInfo.nickName,
          // inviterId
        },
        header: {
          loginModel: app.globalData.phoneModal
        },
        success: (res=>{
          console.log('手机号登录：', res);
        })
      })
    }
  },
})
