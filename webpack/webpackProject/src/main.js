import Vue from "vue"

import VueRouter from "vue-router"
Vue.use(VueRouter)

import router from "./router.js"


import jQuery from "jquery"
import bootstrap from "./lib/bootstrap/js/bootstrap.js"
import "./lib/bootstrap/css/bootstrap.css"
import "./css/normalize.css"
import "./css/index.scss"
import "./lib/font-awesome-4.7.0/css/font-awesome.css"
// import echarts from "./js/echarts.js"

import axios from "axios"
Vue.prototype.$http = axios //绑定vue的ajax请求插件

import App from "./component/App.vue"

//创建Vue实例
const vm = new Vue({
  el:"#app",
  render: c => c(App),
  router
})