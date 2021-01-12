var animationShowHeight = -315;
Page({
  data: {
    jnPosition: {}, // 胶囊位置基本信息 自定义标题栏
    showSplice: false, // 弹窗
    animationData_g: {},
    my:1, 
    myorder: true,
    s: '',
  },
  changeOrder(e){
    let my = this.data.my;
    if(my==e.currentTarget.dataset.my){
      this.setData({
        myorder: true
      });
    }else{
      this.setData({
        myorder: false
      });
    }
  },
  // 全部订单切换
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
    // 自定义标题栏start
    let jnPosition = wx.getMenuButtonBoundingClientRect();
    this.setData({
      jnPosition
    });
    console.log('胶囊位置', jnPosition);
    // 自定义标题栏end
  },
  // 标题展示各平台类型
   // 显示遮罩层
   showsplice() {
    var that = this;
    this.setData({
      showSplice: !this.data.showSplice
    })
    // if (!this.data.startDate && !this.data.endDate) {
    //   this.defaultDate();
    // }
    // 创建动画实例
    var animation = wx.createAnimation({
      duration: 400,
      timingFunction: 'ease',
    })
    this.animation = animation;
    var time1 = setTimeout(function () {
      that.slideDown();
      clearTimeout(time1);
      time1 = null;
    }, 100)
  },
   // 隐藏遮罩层
   hideSplice: function () {
    var that = this;
    var animation = wx.createAnimation({
      duration: 400,
      timingFunction: 'ease',
    })
    this.animation = animation;
    that.slideIn(); //调用动画--滑出
    var time1 = setTimeout(function () {
      that.setData({
        showSplice: false
      })
      clearTimeout(time1);
      time1 = null;
    }, 220)
  },
  //动画 -- 滑入
  slideIn: function () {
    this.animation.top(animationShowHeight).step()
    this.setData({
      animationData_g: this.animation.export()
    })
  },
  //动画 -- 滑出
  slideDown: function () {
    this.animation.top(0).step()
    this.setData({
      animationData_g: this.animation.export(),
    })
  },
  //阻止冒泡
  stopMove() {},
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