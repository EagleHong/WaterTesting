var equimentPicker = {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '设备1'
        }, {
          value: '选项2',
          label: '设备2'
        }],
        value: ''
      }
    }
  }
var Ctor = Vue.extend(equimentPicker)
new Ctor().$mount('#equimentPicker')

var materialPicker = {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '材料1'
        }, {
          value: '选项2',
          label: '材料2'
        }],
        value: ''
      }
    }
  }
var Ctor = Vue.extend(materialPicker)
new Ctor().$mount('#materialPicker')

var DatePicker = {
    data() {
      return {
        pickerOptions2: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value6: '',
        value7: ''
      };
    }
  };
var CtorDate = Vue.extend(DatePicker)
new CtorDate().$mount('#datePicker')

var itemPicker = {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '设备1'
        }, {
          value: '选项2',
          label: '设备2'
        }, {
          value: '选项3',
          label: '设备3'
        }, {
          value: '选项4',
          label: '材料1'
        }, {
          value: '选项5',
          label: '材料2'
        }],
        value: ''
      }
    }
  }
var CtorItem = Vue.extend(itemPicker)
new CtorItem().$mount('#itemPicker')

var table = {
  data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          operation: '买入',
          item: '设备1',
          address: '上海市普陀区金沙江路 1518 弄',
          total: '55'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          operation: '买入',
          item: '设备1',
          address: '上海市普陀区金沙江路 1518 弄',
          total: '55'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          operation: '买入',
          item: '设备1',
          address: '上海市普陀区金沙江路 1518 弄',
          total: '55'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          operation: '买入',
          item: '设备1',
          address: '上海市普陀区金沙江路 1518 弄',
          total: '55'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          operation: '买入',
          item: '设备1',
          address: '上海市普陀区金沙江路 1518 弄',
          total: '55'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          operation: '买入',
          item: '设备1',
          address: '上海市普陀区金沙江路 1518 弄',
          total: '55'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          operation: '买入',
          item: '设备1',
          address: '上海市普陀区金沙江路 1518 弄',
          total: '55'
        }]
      }
    }
}

var CtorTable = Vue.extend(table)
new CtorTable().$mount('#table')
