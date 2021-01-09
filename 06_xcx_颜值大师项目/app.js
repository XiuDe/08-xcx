//app.js
App({
  // 全局共享的数据
  globalData: {
    access_token: ''
  },

  onLaunch: function () { 
    // this.globalData.access_token = 'aaa';
    wx.request({
      method:'POST',
      url: 'https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id=NnSOYFG17V3pnLmVQMbbodBo&client_secret=KSAB7skCdGkL2CDYfNeoIsGoyYELGuwZ',
      success: (res)=> {
        // console.log(res.data.access_token);
        this.globalData.access_token = res.data.access_token;
      },
      fail: () => {
        wx.showToast({
          title: '鉴权失败~',
        })
      }
    })
  },
})