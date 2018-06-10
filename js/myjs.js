var WaterSource = new Vue({
  el:'#WaterSource',
  data:{
    todos: [
      { text: 'PH值：' },
      { text: '电导率：' },
      { text: '溶解氧：' },
      { text: '浊度：' },
      { text: 'COD-Mn：' },
      { text: 'BOD：' },
      { text: '氨氮：' },
      { text: '总氮：' },
      { text: '总磷：' },
      { text: 'TOC：' }
    ]
  }
})

var BeforeFilling = new Vue({
  el:'#BeforeFilling',
  data:{
    todos: [
      { text: 'PH值：' },
      { text: '电导率：' },
      { text: '溶解氧：' },
      { text: '浊度：' },
      { text: 'COD-Mn：' },
      { text: 'BOD：' },
      { text: '氨氮：' },
      { text: '总氮：' },
      { text: '总磷：' },
      { text: 'TOC：' }
    ]
  }
})

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
          label: 'PH值'
        }, {
          value: '选项2',
          label: '水温'
        }, {
          value: '选项3',
          label: '电导率'
        }, {
          value: '选项4',
          label: '溶解氧'
        }, {
          value: '选项5',
          label: '浊度'
        }],
        value: ''
      }
    }
  }
var CtorItem = Vue.extend(itemPicker)
new CtorItem().$mount('#itemPicker')
