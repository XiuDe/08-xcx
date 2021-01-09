//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad: function (options) {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    });
    console.log('从Home中传递过来的参数:' +  options );
  },
  // 监听tab栏事件
  onTabItemTap(item) {
    console.log(item);
  },
  // 跳转到home页面
  btnhanlder3:function(){
    wx.switchTab({
      url: '/pages/home/home',
    })
  }
})
