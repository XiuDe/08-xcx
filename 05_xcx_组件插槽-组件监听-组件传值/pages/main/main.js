// pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    length:6,
    flag:false,
    temp:true,
    list:[
      '要挑商城',
      '三享读书',
      '聚米创客'
    ],
    list2:[
      {id:0,name:'要挑商城'},
      {id:1,name:'三享读书'},
      {id:2,name:'聚米创客'}
    ],
    name:'',
    page:1,
    msglist:[1,2,3,4,5,6,7,8,9,10]
  },
  btntap:function(){
    this.setData({
      temp:!this.data.temp
    })
  },
  // 接收输入框的值
  iptHandler:function(e){
    this.setData({
      name:e.detail.value
    })
  },
  // 将接受的输入框的值添加到渲染列表中
  add:function(){
    // 打印输入框的值
     console.log(this.data.name);
    //  将输入框的值存储为对象
     const userInfo = {id:this.data.list2.length,name:this.data.name}
     console.log(userInfo);
    //  处理data中需要渲染的数组
    const arr = this.data.list2;
    arr.unshift(userInfo);
    console.log(arr);
    this.setData({
      list2:arr
    })
  },
  // 通过按钮触发下拉刷新按钮
  btn2Handler:function(){
    wx.startPullDownRefresh();
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
    console.log('触发的下拉刷新的页面！');
    this.setData({
      list:['要挑商城周边购']
    });
    wx.stopPullDownRefresh();
  },
  // 监听用户滚动事件
  onPageScroll(obj){
    console.log('当前页面在垂直方向已经滚动了'+obj.scrollTop);
  },
  
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('触底了！');
    // 先让页码值自增 +1
    this.setData({
      page :this.data.page + 1
    })
    // 
    const newArr = [];
    for(let i=1;i<=10;i++){
      const c = (this.data.page -1)*10 + i;
      newArr.push(c)
    }
    console.log(newArr);
    // 解构赋值
    this.setData({
      msglist:[...this.data.msglist,...newArr]
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (obj) {
    // 获取自定义属性的值
    console.log(obj.target.dataset.info);
    if(obj.from === 'button'){
      // 来自页面内转发内容
      console.log(obj.target);
    }
    return{
      title:'要挑商城',
      path:'/page/user?id=123',
      imageUrl:'http://img.yaotiao.net/yaotiao/head/carousel/2019/11/29/2b208726c48c6a50e57c599404d584cb.jpeg?x-oss-process=style/webp'
    }
  },
  // 监听tab栏事件
  onTabItemTap(item){
    console.log(item);
  }

})