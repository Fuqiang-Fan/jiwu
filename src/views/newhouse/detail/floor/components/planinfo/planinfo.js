import { Common } from '@/utils/common';

import CustomTable from '@/components/customTable.vue';

import { Project } from '@/api';

const info = [
  { label: '单价',
    getValue: (val) => {
      return val.price ? val.price + '元/平米' : '暂无';
    }
  },
  { label: '开盘时间', value: 'openDate' },
  { label: '交房时间', value: 'deliveryDate' },

  { label: '咨询电话', value: 'sellPhone' },
  { label: '楼盘地址', value: 'site' },
  { label: '装修状况', value: 'decoration' },

  { label: '建筑形式', value: 'constructType' },
  { label: '规划面积',
    getValue: (val) => {
      return val.plannedArea ? val.plannedArea + '平米' : '暂无';
    }
  },
  { label: '建筑面积',
    getValue: (val) => {
      return val.floorArea ? val.floorArea + '平米' : '暂无';
    }
  },

  {
    label: '主力户型',
    getValue: (val) => {
      return val.mainRoomLayout
        ? val.mainRoomLayout.join('，')
          ? val.mainRoomLayout.join('，')
          : '暂无数据'
        : '暂无数据';
    }
  },
  { label: '容 积 率',
    getValue: (val) => {
      return val.plotRatio ? val.plotRatio*100 + '%' : '暂无';
    }
  },
  { label: '绿 化 率',
    getValue: (val) => {
      return val.greeningRate ? val.greeningRate*100 + '%' : '暂无';
    }
  },

  { label: '房屋产权', value: 'propertyRightType' },
  { label: '规划户数',
    getValue: (val) => {
      return val.plannedHouseholds ? val.plannedHouseholds + '户' : '暂无';
    }
  },
  { label: '车 位 数',
    getValue: (val) => {
      return val.undergroundParkSpaceNum ? val.undergroundParkSpaceNum + '个' : '暂无';
    }
  },
  { label: '最大栋距',
    getValue: (val) => {
      return val.maxSpace ? val.maxSpace + '米' : '暂无';
    }
  },
  { label: '最小栋距',
    getValue: (val) => {
      return val.minSpace ? val.minSpace + '米' : '暂无';
    }
  },
  { label: '楼盘朝向', value: 'orientations' },

  { label: '物业公司', value: 'propertyCompany' },
  {
    label: '物业类型', 
    getValue: (val) => {
      return val.propertyType
        ? val.propertyType.join('，')
          ? val.propertyType.join('，')
          : '暂无数据'
        : '暂无数据';
    }
  },
  { label: '物 业 费',
    getValue: (val) => {
      return val.propertyFeePrice ? val.propertyFeePrice + '元/平米' : '暂无';
    }
  },

  { label: '开 发 商', value: 'developerName' },
  { label: '销售代理', value: 'saleProxy' },
  { label: '工程进度', value: 'projectProgress' },

  { label: '预售许可证', value: 'advanceSalePermit' },
  { label: '售楼处地址', value: 'salesOfficeSite' },
  { label: '建筑设计单位', value: 'designCompany' },

  { label: '栋数',
    getValue: (val) => {
      return val.buildingNum ? val.buildingNum + '栋' : '暂无';
    }
  },
  { label: '施工单位', value: 'constructionCompany' }
];

export default {
  name: 'projectPlanInfo',
  props: [ 'data' ],
  components: { CustomTable },
  data() {
    return {
      info: info,
      store: {}
    };
  },
  computed: {
    projectId() {
      return this.$route.params.id;
    }
  },
  methods: {
    getProjectDetail() {
      Project.getProjectDetail(this.projectId).then(res => {
        this.store = Common.merge(res.data, this.store);
      });
    },
    getProjectPlanInfo() {
      Project.getProjectPlanInfo(this.projectId).then(res => {
        this.store = Common.merge(res.data, this.store);
      });
    }
  },
  mounted() {
    this.getProjectDetail();
    this.getProjectPlanInfo();
  }
};
