// miniprogram/pages/search/search.js
Page({
  data: {
    focus: false,
    suggestion:''
  },

  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  bindReplaceInput: function (e) {
    var value = e.detail.value
    var pos = e.detail.cursor
    var left
    if (pos !== -1) {
      // 光标在中间
      left = e.detail.value.slice(0, pos)
      // 计算光标的位置
      pos = left.replace(/11/g, '2').length
    }

    // 直接返回对象，可以对输入进行过滤处理，同时可以控制光标的位置
    return {
      value: value.replace(/11/g, '2'),
      cursor: pos
    }

    // 或者直接返回字符串,光标在最后边
    // return value.replace(/11/g,'2'),
  },
  bindHideKeyboard: function (e) {
    if (e.detail.value === '123') {
      // 收起键盘
      wx.hideKeyboard()
    }
  },

  bindFormSubmit: function(e) {
    console.log(e.detail.value.textarea)
    wx.showToast({
      title: '感谢您的反馈',
      icon: 'success',
      duration: 1500
      })
    this.setData({
      suggestion:''
    })
  },

  copy1:function(e){
    wx.setClipboardData({
      data: "coursehome.zhihuishu.com/courseHome/2068709#teachTeam",
      success: function(e){
        wx.showToast({
          title: '复制成功',
          icon: 'success',
          duration: 1000
          })
      }
    })
  },

  copy2:function(e){
    wx.setClipboardData({
      data: "www.chinajade.cn",
      success: function(e){
        wx.showToast({
          title: '复制成功',
          icon: 'success',
          duration: 1000
          })
      }
    })
  },

  copy3:function(e){
    wx.setClipboardData({
      data: "http://openstd.samr.gov.cn/bzgk/gb/newGbInfo?hcno=18FFB042811998A0309E05CF452B2438",
      success: function(e){
        wx.showToast({
          title: '复制成功',
          icon: 'success',
          duration: 1000
          })
      }
    })
  }
})
