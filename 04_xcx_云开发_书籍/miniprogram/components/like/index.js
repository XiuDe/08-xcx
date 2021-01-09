// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    like:{
      type: Boolean
    },
    count:{
      type: Number,
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // like:true,  /*开放数据->写在properties*/
    // count: 9,  /*开放数据->写在properties*/
    yesSrc: 'images/like.png', /*封闭数据*/
    noSrc: 'images/like@dis.png' /*封闭数据*/
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike:function(event){
      let like = this.properties.like;
      let count = this.properties.count;

      count = like?count-1:count+1;
      this.setData({
        like: !like,
        count
      });
      
      // 激活状态
      let behavior = this.properties.like?'like':'cancel';
      // this.triggerEvent('',{},{});
      this.triggerEvent('like',{
        behavior: behavior
      },{});
      console.log(behavior);
    }
  },
  onLoad: function(options){}
})
