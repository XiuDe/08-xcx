Page({

  /**
   * 页面的初始数据
   */
  data: {
    hideFlag: true, //true-隐藏  false-显示
    animationData: {}, //

    value: '规格',
    goods_map_spec: [{
        "goods_spec_id": 1,
        "goods_spec_name": "颜色",
        "goods_spec_value": [{
          "specs_value_id": 1,
          "specs_value_name": "黑色",
          "default": 1
        }]
      },
      {
        "goods_spec_id": 2,
        "goods_spec_name": "规格",
        "goods_spec_value": [{
          "specs_value_id": 9,
          "specs_value_name": "M",
          "default": 1
        }]
      },
      {
        "goods_spec_id": 4,
        "goods_spec_name": "尺码",
        "goods_spec_value": [{
            "specs_value_id": 4,
            "specs_value_name": "X",
            "default": 1
          },
          {
            "specs_value_id": 5,
            "specs_value_name": "S",
            "default": 0
          }
        ]
      },
      {
        "goods_spec_id": 5,
        "goods_spec_name": "厚度",
        "goods_spec_value": [{
          "specs_value_id": 14,
          "specs_value_name": "适中",
          "default": 1
        }]
      },
      {
        "goods_spec_id": 6,
        "goods_spec_name": "季节",
        "goods_spec_value": [{
          "specs_value_id": 16,
          "specs_value_name": "春季",
          "default": 1
        }]
      },
      {
        "goods_spec_id": 7,
        "goods_spec_name": "布料",
        "goods_spec_value": [{
          "specs_value_id": 18,
          "specs_value_name": "棉麻",
          "default": 1
        }]
      },
      {
        "goods_spec_id": 8,
        "goods_spec_name": "帽子",
        "goods_spec_value": [{
          "specs_value_id": 19,
          "specs_value_name": "带帽",
          "default": 1
        }]
      }
    ]
  },
  //取消
  mCancel: function() {
    var that = this;
    that.hideModal();
  },
  mConfirm(e) {
    this.hideModal();
  },
  clickMenu(event){
    let that = this;
    let selectIndex = event.currentTarget.dataset.selectIndex;
    let attrIndex = event.currentTarget.dataset.attrIndex;
    let content = event.currentTarget.dataset.content;
    var count = content[selectIndex].goods_spec_value.length;

    for (var i = 0; i < count; i++) {
      content[selectIndex].goods_spec_value[i].default = false;
    }
    content[selectIndex].goods_spec_value[attrIndex].default = true;
    // 必须重新渲染数据----------为了添加isSelect属性
    that.setData({
      goods_map_spec: content
    })
  },

  // 显示遮罩层
  showModal: function() {
    var that = this;
    that.setData({
      hideFlag: false
    })
    // 创建动画实例
    var animation = wx.createAnimation({
      duration: 400, //动画的持续时间
      timingFunction: 'ease', //动画的效果 默认值是linear->匀速，ease->动画以低速开始，然后加快，在结束前变慢
    })
    this.animation = animation; //将animation变量赋值给当前动画
    var time1 = setTimeout(function() {
      that.slideIn(); //调用动画--滑入
      clearTimeout(time1);
      time1 = null;
    }, 100)
  },

  // 隐藏遮罩层
  hideModal: function() {
    var that = this;
    var animation = wx.createAnimation({
      duration: 400, //动画的持续时间 默认400ms
      timingFunction: 'ease', //动画的效果 默认值是linear
    })
    this.animation = animation
    that.slideDown(); //调用动画--滑出
    var time1 = setTimeout(function() {
      that.setData({
        hideFlag: true
      })
      clearTimeout(time1);
      time1 = null;
    }, 220) //先执行下滑动画，再隐藏模块

  },
  //动画 -- 滑入
  slideIn: function() {
    this.animation.translateY(0).step() // 在y轴偏移，然后用step()完成一个动画
    this.setData({
      //动画实例的export方法导出动画数据传递给组件的animation属性
      animationData: this.animation.export()
    })
  },
  //动画 -- 滑出
  slideDown: function() {
    this.animation.translateY(300).step()
    this.setData({
      animationData: this.animation.export(),
    })
  }

})