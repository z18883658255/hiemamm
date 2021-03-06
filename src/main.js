import Vue from 'vue'
import App from './App.vue'
import router from './router'
//导入Element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 导入全局样式
import './style/index.css'

//使用gElement
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
