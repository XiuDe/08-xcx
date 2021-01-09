import Card from '../../palette/card'; // 展示 数据
import CardSave from '../../palette/card-save'; // 保存 数据

// src/pages/xml2can/xml2can.js
Page({
  imagePath1: '',
  imagePath2: '',
  history: [],
  future: [],
  isSave: false,

  /**
   * 页面的初始数据
   */
  data: {
    template1: {},
    template2: {},
    // customActionStyle: {
    //   border: {
    //     borderColor: '#1A7AF8',
    //   },
    //   scale: {
    //     textIcon: '/palette/switch.png',
    //     imageIcon: '/palette/scale.png'
    //   },
    //   delete: {
    //     icon: '/palette/close.png'
    //   }
    // }
  },

  onImgOK1(e) {
    console.log('onImgOK(e)1:e', e);
    this.imagePath1 = e.detail.path;
    this.setData({
      image1: this.imagePath1
    })
    // if (this.isSave) {
    //   this.saveImage(this.imagePath);
    // }
  },
  onImgOK2(e) {
    console.log('onImgOK(e)2:e', e);
    this.imagePath2 = e.detail.path;
    this.setData({
      image2: this.imagePath2
    })
    if (this.isSave) {
      this.saveImage(this.imagePath2);
    }
  },

  // onRevert() {
  //   const pre = this.history.pop()
  //   if (!pre) {
  //     return
  //   }
  //   const needRefresh = pre.index && pre.index >= 0 && pre.index <= this.data.template.views.length
  //   if (needRefresh) {
  //     if (this.data.template.views[pre.index].id === pre.view.id) {
  //       this.data.template.views.splice(pre.index, 1)
  //     } else {
  //       this.data.template.views.splice(pre.index, 0, pre.view)
  //     }
  //     this.future.push(pre)
  //   } else {
  //     for (let i in this.data.template.views) {
  //       if (this.data.template.views[i].id === pre.view.id) {
  //         this.future.push({ view: this.data.template.views[i] })
  //         this.data.template.views[i] = pre.view
  //         break
  //       }
  //     }
  //   }
  //   const props = {
  //     paintPallette: this.data.template,
  //   }
  //   if (needRefresh) {
  //     props.template = this.data.template
  //   } else {
  //     props.action = pre
  //   }
  //   this.setData(props)
  // },

  // onRecover() {
  //   const fut = this.future.pop()
  //   if (!fut) {
  //     return
  //   }
  //   const needRefresh = fut.index && fut.index >= 0 && fut.index <= this.data.template.views.length
  //   if (needRefresh) {
  //     if (this.data.template.views[fut.index].id === fut.view.id) {
  //       this.data.template.views.splice(fut.index, 1)
  //     } else {
  //       this.data.template.views.splice(fut.index, 0, fut.view)
  //     }
  //     this.history.push(fut)
  //   } else {
  //     for (let i in this.data.template.views) {
  //       if (this.data.template.views[i].id === fut.view.id) {
  //         this.history.push({ view: this.data.template.views[i] })
  //         this.data.template.views[i] = fut.view
  //         break
  //       }
  //     }
  //   }
  //   const props = {
  //     paintPallette: this.data.template,
  //   }
  //   if (needRefresh) {
  //     props.template = this.data.template
  //   } else {
  //     props.action = fut
  //   }
  //   this.setData(props)
  // },

  saveImage(imagePath = '') {
    if (!this.isSave) {
      this.isSave = true;
      this.setData({
        paintPallette2: this.data.template2,
      });
    } else 
    if (imagePath) {
      this.isSave = false;
      console.log('saveImage:imagePath2', imagePath);
      wx.saveImageToPhotosAlbum({
        filePath: imagePath,
      });
    }
  },
  SecondSaveImage() {
    this.setData({
      template2: new CardSave().paletteSave(),
    });
    this.saveImage(this.imagePath2);
    // wx.saveImageToPhotosAlbum({
    //   filePath: this.imagePath2,
    // });
  },
  showImage() {
    this.setData({
      template1: new Card().palette(),
    });
  },

  // touchEnd({ detail }) {
  //   let needRefresh = detail.index >= 0 && detail.index <= this.data.template.views.length
  //   if (needRefresh) {
  //     this.history.push({
  //       ...detail
  //     })
  //     if (this.data.template.views[detail.index].id === detail.view.id) {
  //       this.data.template.views.splice(detail.index, 1)
  //     } else {
  //       this.data.template.views.splice(detail.index, 0, detail.view)
  //     }
  //   } else {
  //     for (let view of this.data.template.views) {
  //       if (view.id === detail.view.id) {
  //         this.history.push({
  //           view: {
  //             ...detail.view,
  //             ...view
  //           }
  //         })
  //         view.css = detail.view.css
  //         break
  //       }
  //     }
  //   }
  //   this.future.length = 0
  //   const props = {
  //     paintPallette: this.data.template,
  //   }
  //   if (needRefresh) {
  //     props.template = this.data.template
  //   }
  //   this.setData(props);
  // },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // this.setData({
    //   template: new Card().palette(),
    // });
  },
});