import Vue from 'vue'
import App from './App.vue'
import { SweetButton } from '../lib/index.umd.min'
// import { SweetButton } from '../packages/index'
import '../lib/index.css'

Vue.config.productionTip = false
Vue.use(SweetButton)
new Vue({
  render: h => h(App),
}).$mount('#app')
