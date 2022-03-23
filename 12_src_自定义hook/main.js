// 引入的不再是Vue构造函数，而是一个名为 createApp 的工厂函数
import { createApp } from 'vue'
import App from './App.vue'

// 拆分以下代码
// createApp(App).mount('#app')

// 创建应用实例对象--app（类似于Vue2中的 vm，但app更加轻量）
const app = createApp(App)
console.log(app);
// 挂载
app.mount('#app')

/*
const vm = new Vue({
  render: h => h(app)
})
vm.$mount('#app')
*/