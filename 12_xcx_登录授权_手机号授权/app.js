const defaultOptions = {
  method: 'GET',
  dataType: 'json',
  header: {},
  loading: false,
  loadingTxt: '加载中...',
  closeLoading: false //关闭异步请求外的loading
}

const isformal = false;
// const isformal = true;

let ser_url,isFullSucreen,phoneModa;

if (isformal) {
  // 正式服
  ser_url = 'https://gateway.jumituangou.com'; // 4.0正式服域名
} else {
    // 测试服 test4
    ser_url = 'http://test.gateway.yaotiao.net';
}

App({
  onLaunch() {
    // 登录 初次登陆和非初次登陆
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        if (res.code) {
          console.log('wx.login:res',res);
          //发起网络请求
          this.request({
            url: '/member-provider/api/appletLogin/wechatApplet',
            data: {
              code: res.code
            }
          }).then(result => {
            console.log('微信登录api/appletLogin/wechatApplet：', result);
            if (result.code == 200) {
              let userInfo = result.data.userInfo;
              if (userInfo.level) {
                userInfo.level = userInfo.level ? JSON.parse(userInfo.level) : userInfo.level;
                userInfo.originLevel = userInfo.originLevel ? JSON.parse(userInfo.originLevel) : userInfo.originLevel;
              }
              wx.setStorageSync("token", result.data.response.token);
              wx.setStorageSync("openId", result.data.response.wxOpenid);
              wx.setStorageSync('user_info', userInfo);
              wx.setStorageSync('uid', userInfo.id);
              wx.setStorageSync('member_id', userInfo.id);
            } else if (result.code == 500 && result.data.openid) {
              wx.setStorageSync('wx_info', result.data);
              wx.setStorageSync('openId', result.data.openid);
              cb && cb();
            } else {
              // wx.showToast({
              //   title: result.msg,
              //   icon: 'none'
              // })
            }
          }).catch(err => {
            // errCb && errCb(err);
          })
        }
      }
    });
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo;
               console.log("用户已授权:", this.globalData.userInfo);
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    }),
    // 手机信息
  wx.getSystemInfo({
    success: res => {
      // 根据 屏幕高度 进行判断
      if (res.screenHeight - res.windowHeight - res.statusBarHeight - 32 > 72) {
        this.globalData.isFullSucreen = true
      }
      this.globalData.phoneModal = res.model;
      // 根据手机型号匹配  
      console.log(res.model, '-app.js机型-');

      if (res.model.search('iPhone X') != -1) {
        this.globalData.isFullSucreen = true;
      }
    }
  })
  },
  
  // request
  request(params) {
    if (!params.notUseUrl) {
      params['url'] = this.globalData.ser_url + params['url'];
    }
    let config = {
      ...defaultOptions,
      ...params
    }


    config.method = config.method.toLocaleUpperCase();
    if (config.method === 'POST' && !config.header.hasOwnProperty('Content-Type')) {
      config.header['Content-Type'] = 'application/x-www-form-urlencoded';
    } else if (config.method === 'POST' && config.header.hasOwnProperty('Content-Type')) {
      config.header['Content-Type'] = 'application/json';
    }
    config.header['loginClient'] = 'xcx';

    if (config.loading) {
      wx.showLoading({
        title: config.loadingTxt,
      })
    }
    return new Promise((resolve, reject) => {
      wx.request({
        ...config,
        success: res => {
          if (res.statusCode == 200) {
            resolve(res.data);
          } else {
            // if (res.data.msg) {
            //   wx.showToast({
            //     title: res.data.msg,
            //     icon: 'none'
            //   })
            // } else if (res.data.message) {
            //   wx.showToast({
            //     title: res.data.message,
            //     icon: 'none'
            //   })
            // }
            reject(res.data);
          }
        },
        error: err => {
          reject(err);
        },
        complete: () => {
          if (config.loading || config.closeLoading) {
            wx.hideLoading();
          }
          config.complete && config.complete();
        }
      })
    })
  },
  globalData: {
    userInfo: null,
    ser_url,
  }
})
