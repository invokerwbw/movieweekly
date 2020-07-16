Page({
  data: {
    weeklyMovieList: [
      {
        name: "泰坦尼克号",
        comment: "失去的才是永恒的",
        imagePath: "/images/titanic.jpg",
        isHighlyRecommended: false,
        id: 1292722
      },
      {
        name: "这个杀手不太冷",
        comment: "小萝莉与怪蜀黍纯真灿烂的爱情故事",
        imagePath: "/images/leon.jpg",
        isHighlyRecommended: false,
        id: 1295644
      },
      {
        name: "教父",
        comment: "最精彩的剧本，最真实的黑帮电影。",
        imagePath: "/images/jf.jpg",
        isHighlyRecommended: true,
        id: 1291841
      }
    ]
  },
  onLoad: function (options) {
    // this.setData({
    //   currentIndex: this.data.weeklyMovieList.length - 1
    // })

    var that = this;

    wx.request({
      url: "https://localhost:8089/v2/movie/weekly",
      header: {
        "content-type": "json"
      },
      data: {
        "apikey": "0df993c66c0c636e29ecbb5344252a4a"
      },
      success: function (res) {
        if (res.statusCode == 200) {
          that.setData({
            subjects: res.data.subjects
          })
          that.setData({
            currentIndex: 0
          })
        }
      },
      complete: function () {
        wx.hideLoading()
      }
    })

    wx.showLoading({
      title: '正在加载，请稍后...',
    })


  },
  onShareAppMessage: function () {
    return {
      title: "每周推荐"
    }
  },
  f0: function (event) {
    // this.setData({
    //   currentIndex: this.data.weeklyMovieList.length - 1
    // })
    this.setData({
      currentIndex: 0
    })
  },
  f1: function (event) {
    var movieId = event.currentTarget.dataset.movieId;
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + movieId,
    })
  }
})