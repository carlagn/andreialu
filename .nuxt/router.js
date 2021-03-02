import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _53bb0a73 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _3d16f5e9 = () => interopDefault(import('../pages/work/acordar-com-gosto.vue' /* webpackChunkName: "pages/work/acordar-com-gosto" */))
const _072f9c5e = () => interopDefault(import('../pages/work/amor-rafeiro.vue' /* webpackChunkName: "pages/work/amor-rafeiro" */))
const _2ca5990c = () => interopDefault(import('../pages/work/coisas-de-miudos.vue' /* webpackChunkName: "pages/work/coisas-de-miudos" */))
const _2feb04ea = () => interopDefault(import('../pages/work/conversa-de-chat.vue' /* webpackChunkName: "pages/work/conversa-de-chat" */))
const _52709351 = () => interopDefault(import('../pages/work/desafio-da-poupanca.vue' /* webpackChunkName: "pages/work/desafio-da-poupanca" */))
const _38b356f4 = () => interopDefault(import('../pages/work/drive-code.vue' /* webpackChunkName: "pages/work/drive-code" */))
const _bde69e2a = () => interopDefault(import('../pages/work/have-a-drink.vue' /* webpackChunkName: "pages/work/have-a-drink" */))
const _0cf3253d = () => interopDefault(import('../pages/work/mais-cabo-verde.vue' /* webpackChunkName: "pages/work/mais-cabo-verde" */))
const _7cfc08cd = () => interopDefault(import('../pages/work/mesas-para-todos-os-gostos.vue' /* webpackChunkName: "pages/work/mesas-para-todos-os-gostos" */))
const _2ffacfd5 = () => interopDefault(import('../pages/work/o-segredo-das-relacoes.vue' /* webpackChunkName: "pages/work/o-segredo-das-relacoes" */))
const _435d1ed9 = () => interopDefault(import('../pages/work/pedras.vue' /* webpackChunkName: "pages/work/pedras" */))
const _d4cfaf56 = () => interopDefault(import('../pages/work/ProjectExample.vue' /* webpackChunkName: "pages/work/ProjectExample" */))
const _18a398f0 = () => interopDefault(import('../pages/work/reprogramar-a-manha.vue' /* webpackChunkName: "pages/work/reprogramar-a-manha" */))
const _76224f31 = () => interopDefault(import('../pages/work/seja-o-heroi.vue' /* webpackChunkName: "pages/work/seja-o-heroi" */))
const _47c69756 = () => interopDefault(import('../pages/work/smart.vue' /* webpackChunkName: "pages/work/smart" */))
const _4a97b7ec = () => interopDefault(import('../pages/work/style-guide.vue' /* webpackChunkName: "pages/work/style-guide" */))
const _5fc79ac0 = () => interopDefault(import('../pages/work/this-is-a-new-page.vue' /* webpackChunkName: "pages/work/this-is-a-new-page" */))
const _e4a6cdcc = () => interopDefault(import('../pages/work/tofa.vue' /* webpackChunkName: "pages/work/tofa" */))
const _7ec4340c = () => interopDefault(import('../pages/work/um-mundo-sem-cem.vue' /* webpackChunkName: "pages/work/um-mundo-sem-cem" */))
const _70894aac = () => interopDefault(import('../pages/work/winona.vue' /* webpackChunkName: "pages/work/winona" */))
const _7372e538 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _53bb0a73,
    name: "about"
  }, {
    path: "/work/acordar-com-gosto",
    component: _3d16f5e9,
    name: "work-acordar-com-gosto"
  }, {
    path: "/work/amor-rafeiro",
    component: _072f9c5e,
    name: "work-amor-rafeiro"
  }, {
    path: "/work/coisas-de-miudos",
    component: _2ca5990c,
    name: "work-coisas-de-miudos"
  }, {
    path: "/work/conversa-de-chat",
    component: _2feb04ea,
    name: "work-conversa-de-chat"
  }, {
    path: "/work/desafio-da-poupanca",
    component: _52709351,
    name: "work-desafio-da-poupanca"
  }, {
    path: "/work/drive-code",
    component: _38b356f4,
    name: "work-drive-code"
  }, {
    path: "/work/have-a-drink",
    component: _bde69e2a,
    name: "work-have-a-drink"
  }, {
    path: "/work/mais-cabo-verde",
    component: _0cf3253d,
    name: "work-mais-cabo-verde"
  }, {
    path: "/work/mesas-para-todos-os-gostos",
    component: _7cfc08cd,
    name: "work-mesas-para-todos-os-gostos"
  }, {
    path: "/work/o-segredo-das-relacoes",
    component: _2ffacfd5,
    name: "work-o-segredo-das-relacoes"
  }, {
    path: "/work/pedras",
    component: _435d1ed9,
    name: "work-pedras"
  }, {
    path: "/work/ProjectExample",
    component: _d4cfaf56,
    name: "work-ProjectExample"
  }, {
    path: "/work/reprogramar-a-manha",
    component: _18a398f0,
    name: "work-reprogramar-a-manha"
  }, {
    path: "/work/seja-o-heroi",
    component: _76224f31,
    name: "work-seja-o-heroi"
  }, {
    path: "/work/smart",
    component: _47c69756,
    name: "work-smart"
  }, {
    path: "/work/style-guide",
    component: _4a97b7ec,
    name: "work-style-guide"
  }, {
    path: "/work/this-is-a-new-page",
    component: _5fc79ac0,
    name: "work-this-is-a-new-page"
  }, {
    path: "/work/tofa",
    component: _e4a6cdcc,
    name: "work-tofa"
  }, {
    path: "/work/um-mundo-sem-cem",
    component: _7ec4340c,
    name: "work-um-mundo-sem-cem"
  }, {
    path: "/work/winona",
    component: _70894aac,
    name: "work-winona"
  }, {
    path: "/",
    component: _7372e538,
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
