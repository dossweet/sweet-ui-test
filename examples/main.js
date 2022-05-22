import Vue from 'vue'
import App from './App.vue'
import sweetUi from '../packages/index'

Vue.config.productionTip = false
Vue.use(sweetUi)
new Vue({
  render: h => h(App),
}).$mount('#app')
