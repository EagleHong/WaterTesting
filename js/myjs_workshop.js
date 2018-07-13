var WaterSource = new Vue({
  el:'#workshop',
  data:{
    todos: [
      { text: '温度：' },
      { text: '湿度：' }
    ]
  }
})

var BeforeFilling = new Vue({
  el:'#store',
  data:{
    todos: [
      { text: '温度：' },
      { text: '湿度：' }
    ]
  }
})

var workshopPicker = {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '一号车间'
        }, {
          value: '选项2',
          label: '二号车间'
        }],
        value: ''
      }
    }
  }
var CtorItem = Vue.extend(workshopPicker)
new CtorItem().$mount('#workshopPicker')

var storePicker = {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '一号仓库'
        }, {
          value: '选项2',
          label: '二号仓库'
        }],
        value: ''
      }
    }
  }
var CtorItem = Vue.extend(storePicker)
new CtorItem().$mount('#storePicker')
