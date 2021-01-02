import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _e4841e72 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _7ce128ae = () => interopDefault(import('../pages/work/ProjectExample.vue' /* webpackChunkName: "pages/work/ProjectExample" */))
const _e3c03698 = () => interopDefault(import('../pages/work/reprogramar-a-manha.vue' /* webpackChunkName: "pages/work/reprogramar-a-manha" */))
const _3c335518 = () => interopDefault(import('../pages/work/style-guide.vue' /* webpackChunkName: "pages/work/style-guide" */))
const _a51468e8 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/andreialu/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _e4841e72,
    name: "about"
  }, {
    path: "/work/ProjectExample",
    component: _7ce128ae,
    name: "work-ProjectExample"
  }, {
    path: "/work/reprogramar-a-manha",
    component: _e3c03698,
    name: "work-reprogramar-a-manha"
  }, {
    path: "/work/style-guide",
    component: _3c335518,
    name: "work-style-guide"
  }, {
    path: "/",
    component: _a51468e8,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  const router = new Router(routerOptions)
  const resolve = router.resolve.bind(router)

  // encodeURI(decodeURI()) ~> support both encoded and non-encoded urls
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = encodeURI(decodeURI(to))
    }
    return resolve(to, current, append)
  }

  return router
}
