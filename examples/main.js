import Vue from 'vue'
import App from './App.vue'
import { SweetButton } from '../packages/index'

Vue.config.productionTip = false
Vue.use(SweetButton)
new Vue({
  render: h => h(App),
}).$mount('#app')
