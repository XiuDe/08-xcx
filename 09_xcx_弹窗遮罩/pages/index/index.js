Page({
  data: {
    coverdisplay:false
  },
  showview: function() { 
    this.setData({
      coverdisplay: true
    })
  },
  hideview: function() {
    this.setData({
      coverdisplay: false
    })
  }
})