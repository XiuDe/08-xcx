// pages/customTitle/customTitle.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    jnPosition: {}, // 胶囊位置基本信息 自定义标题栏
    s: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  changeNav(e) {
    let news = e.currentTarget.dataset.state;
    let {
      s
    } = this.data;
    if (news == s) return;
    this.setData({
      s: news,
    })
    // this.getOrder();
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
    // 自定义标题栏start
    let jnPosition = wx.getMenuButtonBoundingClientRect();
    this.setData({
      jnPosition
    });
    console.log('胶囊位置', jnPosition);
    // 自定义标题栏end
  },
  // 返回
  backpage(){
    wx.navigateBack({})
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