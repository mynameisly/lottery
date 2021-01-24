/*
 * @Description: 
 * @FilePath: \wb_litoob\src\main.js
 * @LastEditTime: 2020-07-22 21:26:22
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import '@/utils/filter';
import config from '@/utils/config.js';

import Vant from 'vant'
import 'vant/lib/index.css'
import '@style/common.scss'
import moment from 'moment';
import { getRequest, postRequest } from '@/api'
import { formDataObject } from "@uit/comtool";

Vue.prototype.themeColor = '#0468a5';
Vue.prototype.moment = moment;
Vue.prototype.fetchget = getRequest;
Vue.prototype.fetchpost = postRequest;
Vue.prototype.formDataObject = formDataObject;
Vue.prototype.$config = config;

Vue.use(Vant);
Vue.config.productionTip = false

console.log('env：', process.env.NODE_ENV);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
