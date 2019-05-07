// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入mint-ui
import MintUI from 'mint-ui'
// 引入axios
import axios from 'axios'
import 'mint-ui/lib/style.css'
// 引入mui相关资源
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

import VueResource from 'vue-resource'

Vue.use(MintUI)
Vue.use(VueResource)
// 给axios做配置
axios.defaults.baseURL = 'http://www.liulongbin.top:3005'
Vue.prototype.http = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
