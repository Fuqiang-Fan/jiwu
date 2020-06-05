export default {
  name: 'information',
  data() {
    return {
      headlines: [
        {
          id: 100001,
          name: 'yaju',
          title: '买房前必须要做的一件事：购房能力评估',
          detail: '现在很少有人会全款买房，大多数都是选择贷款，这就需要注意一件事，正确评估自身的购房能力，避免购房之后出现经济问题，甚至是房贷断供的情况。那么该如何评估购房能力呢？本文为购房者详细介绍，一起来看看吧。',
          src: 'http://img-other.jiwu.com/other/2020/05/06/152203302592.jpg'
        }
      ],
      informations: [
        {
          id: 100001,
          title: '大兴林肯时代商住值得投资吗？',
          detail: '林肯时代怎么样？项目周边云集八大公园、六大商业及全系医疗、教育资源，咫尺尽享一城繁华。项目周边路网发达，距三环仅9公里，距四环仅4公里，距五环10公里，距国贸15公里，距天安门18公里，距首都机场28公里。项目附近有博大路、东环北路等五纵路网，随心切换周边版图。',
          src: 'http://img-other.jiwu.com/news/2020/05/06/153912262358.jpg/newsx',
          active: true
        },
        {
          id: 100002,
          title: '北京林肯时代楼盘',
          detail: '北京林肯时代楼盘位于北京地铁亦庄线荣京东街站附近，它是由北京运通博远房地产开发有限公司开发的，他周边的生态环境非常良好，有林肯中央公园，博大公园儿，企业文化园，红博公园儿，高兴公园，公园大道，南海子公园，对，湿地公园包围着，生态环境良好，负氧离子高，是一个巨大的天然氧吧。',
          src: 'http://img-other.jiwu.com/news/2020/05/06/153457545641.jpg/newsx',
          active: false
        },
        {
          id: 100003,
          title: '雅居乐京华雅郡售楼处最新动态',
          detail: '雅居乐京华雅郡景观风格为现代中式，从传统园林中提取“三进四合”的空间布局手法。休息空间与运动空间动静结合形成“三进式”院落，一进迎门，脱尘儒雅，世家风范，礼迎来客；二进静心，水满银辉，富贵堂前，清潭静人心；三进脱尘，揽景庭前，林荫飘渺，藏品重不凡。',
          src: 'http://img-other.jiwu.com/news/2020/05/06/153021060589.jpg/newsx',
          active: false
        },
        {
          id: 100004,
          title: '大兴雅居乐京华雅郡已开盘',
          detail: '2019年初，北京市政府正式搬到了通州，从通州新城核心区走六环仅需15分钟，即可达到亦庄开发区。正因如此，坊间将其称之为新北京的“新二环”。雅居乐亦庄地块是“熟地”，房产投资选房讲究均好性和投资稳妥性。',
          src: 'http://img-other.jiwu.com/news/2020/05/06/150048911934.jpg/newsx',
          active: false
        }
      ]
    };
  },
  methods: {
    mouseover(information) {
      this.informations.forEach((item, index) => {
        this.informations[index].active = information.id === item.id;
      });
    },
  }
};
