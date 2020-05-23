// miniprogram/pages/info/info.js
 Page({
     data: {
     list: [{
        id: '1',
        name: '和田玉的性质',
        open: false,
        pageLists:[{
          id :'1.1',
          page: '质地',
          pageOpen:false,
          imgstyle: 'height:0%',
          content:'一般来说，和田玉的质地细腻温润，具有油脂光泽，水头也好。其质地上佳者外观雍容大气，是古人所谓的“缜密而栗”，为其他玉石所不及。\n'
        },{
          id :'1.2',
          page: '颜色',
          pageOpen:false,
          imgstyle: 'height:0%',
          content:'和田玉的颜色很多，市面上主要的品类大致上可分为白、黄、绿、墨四个色调，还有介于其中的许许多多的其他颜色。各颜色的成因不尽相同——二价铁产生暗绿色，二价铬产生翠绿色，三价铁产生糖色，而石墨会使玉石发黑，产生墨色。\n'
        },{
          id :'1.3',
          page: '物理性质',
          pageOpen:false,
          imgstyle: 'height:0%',
          content:'很长一段时间里，和田玉有一种别名“软玉”，让人误以为和田玉是一种质地非常软的玉石，其实不然。和田玉的硬度在6-6.5之间，超越了生活中大多数的材料硬度。\n\n此外，和田玉也具有一定的透明度，在一般厚度下属于微透明体，为其营造了一种温润质感。\n'
        }]

    },{

        id: '2',
        name: '何为好玉',
        open: false,
        pageLists:[{
          id :'2.1',
          page: '外观方面',
          pageOpen: false,
          imgsrc: 'image/yangzhi.jpg',
          content:'\n众多品类的和田玉中，数羊脂白玉为上品。上图就是一块羊脂白玉，可以看到，其具备两大特征——高纯度白玉，且质地细腻滋润、油脂性好。当然，随着收藏者的喜好不同，成色较好的黄玉，绿玉和墨玉也可售出高价，这与玉石料本身的特征，玉雕创意等因素都有关系。\n'
        },{
          id :'2.2',
          page: '质地方面',
          pageOpen:false,
          imgstyle: 'height:0%',
          content:'和田玉是一种具有把玩属性的玉石，这源于其本身细腻的质感。相应地，和田玉也有不少小件的可用器具作品，譬如吊饰、茶壶等。要鉴别一件好的和田玉玉作品，对其做工要求是必不可少的。\n'
        }]

    },{

      id: '3',
      name: '产状分类',
      open: false,
      pageLists:[{
        id :'3.1',
        page: '山料',
        pageOpen:false,
        imgstyle: 'height:0%',
        content:'指生长于山脉中的原生矿，特点是外形呈不规则块状，棱角分明，基本无风化壳。\n'
      },{
        id :'3.2',
        page: '子料',
        pageOpen:false,
        imgstyle: 'height:0%',
        content:'经过河流搬运腐蚀作用的玉料，远离原生矿，具有厚薄不一的风化层，也叫冲击砾矿。根据其风化皮色不同，子料的价格也不同，其中以金色、红色最为名贵。但一般来说，子料均富有光泽，质量较好，价格较高。\n'
      },{
        id :'3.3',
        page: '山流水',
        pageOpen:false,
        imgstyle: 'height:0%',
        content:'学名称为残坡积矿，是原来接近地表的矿脉受到风吹雨淋剥落到半山坡的玉料，呈次棱角状，具有自然蚀痕。\n'
      },{
        id :'3.4',
        page: '戈壁料',
        pageOpen:false,
        imgstyle: 'height:0%',
        content:'产出于戈壁滩上的玉料，特征是磨圆度差，次棱角状，一般为小块，没有风化壳。由于其特殊的风化作用，其料性很好，硬度、韧度极高，雕琢之后光泽优异。相应地，其雕刻工序也费时费力，作品一般成色上佳，价格很高。\n'
      }]

    },{

        id: '4',
        name: '和田玉的鉴别',
        open: false,
        pageLists:[{
          id :'4.1',
          page: '物理参数试验方法',
          pageOpen:false,
          imgstyle: 'height:0%',
          content:'和田玉的仿制品可以是由各种各样外观胜似和田玉的材料制成，例如：石英岩、岫玉、玻璃等等。如要鉴别这些仿制品，比较直接的方是从物理参数的方面入手——以密度为例，和田玉几乎比所有的仿制材料的密度都要大。\n'
        },{
          id :'4.2',
          page: '徒手现场鉴别',
          pageOpen:false,
          imgstyle: 'height:0%',
          content:'如要不借助科学仪器鉴别和田玉，这里面就大有学问了。一般来说，可以考虑使用的判断方法有手电筒打光（透明度和微观结构）、掂分量（比重）、划玻璃（硬度）、凉感（导热性）等。\n'
        },{
          id :'4.3',
          page: '产状鉴别举例',
          pageOpen:false,
          imgstyle: 'height:0%',
          content:'产状的鉴别一般需要从其产生环境和条件入手，把握其应具备的特征。例如：戈壁料的表面具有像沙丘一样的起伏，子料具有碰撞形成的汗毛孔，且其风化皮也很有油性。\n'
        }]

    },{

          id: '5',
          name: '和田玉名作欣赏',
          open: false,
          pageLists:[{
            id :'5.1',
            page: '三星高照——万伟',
            pageOpen:false,
            imgsrc: 'image/sanxinggaozhao.jpg',
            content:'\n'
          },{
            id :'5.2',
            page: '祝福——王金高',
            pageOpen:false,
            imgsrc: 'image/zhufu.jpg',
            content:'\n'
          },{
            id :'5.3',
            page: '双鱼戏荷——张静',
            pageOpen:false,
            imgsrc: 'image/shuangyuxihe.jpg',
            content:'\n'
          },{
            id :'5.4',
            page: '幽兰——殷小金',
            pageOpen:false,
            imgsrc: 'image/youlan.jpg',
            content:'\n'
          },{
            id :'5.5',
            page: '相濡以沫——冯钤',
            pageOpen:false,
            imgsrc: 'image/xiangruyimo.jpg',
            content:'\n'
          }]

    }]
    },
  
    kindToggle(e) {
      const id = e.currentTarget.id
      const list = this.data.list
      let pagelist
      for (let i = 0, len = list.length; i < len; ++i) {
        pagelist = this.data.list[i].pageLists
        if (list[i].id === id) {
          list[i].open = !list[i].open
        }
        for (let j = 0, len1 = pagelist.length; j < len1; ++j){
          if (pagelist[j].id === id) {
            pagelist[j].pageOpen = !pagelist[j].pageOpen
          }
        }
        if (list[i].open===false){
          for (let j = 0, len1 = pagelist.length; j < len1; ++j){
            pagelist[j].pageOpen = false
          }
        }
      }

      this.setData({
        list
      })
    }
  })