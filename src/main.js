import Vue from 'vue'
import Axios from 'axios'
import ElementUI from 'element-ui'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

Vue.config.productionTip = false
Vue.prototype.$http = Axios
Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
