// pages/home/home.js
Page({
  // 事件传参
  btnHandle: function(event){
    console.log('ok');
    console.log(event.target.dataset.info)
  },
  // 触摸事件
  tapName: function(event){
    console.log(event)
  },
  // 输入框事件
  inputName: function(e){
    // 打印输入框的值
    console.log(e.detail.value)
  },
  ipHandle: function(e){
    // 打印输入框的值
    console.log(e.detail.value)
  },
    // 同步数据 
  bindKeyInput: function (e) {
    // 同步data中的数据
    this.setData({
      msg:e.detail.value //重新赋值
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    info: 'init data', // 字符串类型的数据
    array: [{msg:'1'},{msg:'2'}],
    message: 'Hello Yaotiao',
    id:0,
    flag:true,
    msg:'init data'
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

  },
  // 监听tab栏事件
  onTabItemTap(item) {
    console.log(item);
  },
  // 编程式传参
  btnTapNavigator:function(){
    wx.navigateTo({
      url: '/pages/info/info?name=ls&age=20',
    })
  },
  // Post请求
  btnPost:function(){
    wx.request({
      url: 'https://api.yaotiao.net/appinlet/good/list',
      method: 'POST',// 设置请求类型，如果不设置，默认发起GET请求
      data: {
        "page": 2, "type": "new",// 发送到服务器的数据
        success: function (result){
          console.log(result);
        }
      }
    });
    }
})