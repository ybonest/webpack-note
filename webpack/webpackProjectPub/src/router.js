import VueRouter from "vue-router"

import home from "./component/subcomponent/home.vue"
// import bootply from "./component/subcomponent/Bootply.vue"
// import facilin from "./component/subcomponent/facilin.vue"
// import eros from "./component/subcomponent/eros.vue"

const bootply = () => import(/* webpackChunkName: "news" */ './component/subcomponent/Bootply.vue')
const facilin = () => import(/* webpackChunkName: "news" */ './component/subcomponent/facilin.vue')
const eros = () => import(/* webpackChunkName: "news" */ './component/subcomponent/eros.vue')

const router = new VueRouter({
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/bootply", component: bootply, props: true },
    { path: "/facilin", component: facilin },
    { path: "/eros", component: eros }
  ]
})

export default router

