import {
  BookModel
} from '../../models/book.js';
let bookModel = new BookModel();
// pages/book/book.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 一组数据
    books:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 获取书籍列表 
    bookModel.getBookList()
      .then(res => {
        console.log(res.data.result.data);
        // this.data.books = res.data.result.data;
        this.setData({
          books: res.data.result.data
        });
      })
    // 获取书籍分类页
    /* bookModel.getCategory()
      .then(res => {
        console.log(res.data.result);
      }) */
    /* const bookCategory = bookModel.getCategory();
        bookCategory.then(res=>{
          console.log(res.data.result);
          // 二次调用
          bookModel.getBookList()
          .then(res =>{
            console.log(res);
          })
        },error=>{
          console.log(error);
      }); */
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {}
})