import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _ba208fb6 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _51c50748 = () => interopDefault(import('..\\pages\\about-pt.vue' /* webpackChunkName: "pages/about-pt" */))
const _9cd56dac = () => interopDefault(import('..\\pages\\personal\\index.vue' /* webpackChunkName: "pages/personal/index" */))
const _297e7d38 = () => interopDefault(import('..\\pages\\personal\\style-guide.vue' /* webpackChunkName: "pages/personal/style-guide" */))
const _baa05378 = () => interopDefault(import('..\\pages\\work\\acordar-com-gosto.vue' /* webpackChunkName: "pages/work/acordar-com-gosto" */))
const _551caf23 = () => interopDefault(import('..\\pages\\work\\amor-rafeiro.vue' /* webpackChunkName: "pages/work/amor-rafeiro" */))
const _fccd4882 = () => interopDefault(import('..\\pages\\work\\coisas-de-miudos.vue' /* webpackChunkName: "pages/work/coisas-de-miudos" */))
const _7051a5a2 = () => interopDefault(import('..\\pages\\work\\conversa-de-chat.vue' /* webpackChunkName: "pages/work/conversa-de-chat" */))
const _955a6e28 = () => interopDefault(import('..\\pages\\work\\desafio-da-poupanca.vue' /* webpackChunkName: "pages/work/desafio-da-poupanca" */))
const _1de056f9 = () => interopDefault(import('..\\pages\\work\\drive-code.vue' /* webpackChunkName: "pages/work/drive-code" */))
const _220c78a0 = () => interopDefault(import('..\\pages\\work\\have-a-drink.vue' /* webpackChunkName: "pages/work/have-a-drink" */))
const _646e6058 = () => interopDefault(import('..\\pages\\work\\mais-cabo-verde.vue' /* webpackChunkName: "pages/work/mais-cabo-verde" */))
const _090b425c = () => interopDefault(import('..\\pages\\work\\mesas-para-todos-os-gostos.vue' /* webpackChunkName: "pages/work/mesas-para-todos-os-gostos" */))
const _6236f05a = () => interopDefault(import('..\\pages\\work\\o-segredo-das-relacoes.vue' /* webpackChunkName: "pages/work/o-segredo-das-relacoes" */))
const _022ce95e = () => interopDefault(import('..\\pages\\work\\pedras.vue' /* webpackChunkName: "pages/work/pedras" */))
const _1c8b9dda = () => interopDefault(import('..\\pages\\work\\ProjectExample.vue' /* webpackChunkName: "pages/work/ProjectExample" */))
const _56906923 = () => interopDefault(import('..\\pages\\work\\reprogramar-a-manha.vue' /* webpackChunkName: "pages/work/reprogramar-a-manha" */))
const _77e13c14 = () => interopDefault(import('..\\pages\\work\\seja-o-heroi.vue' /* webpackChunkName: "pages/work/seja-o-heroi" */))
const _2c970530 = () => interopDefault(import('..\\pages\\work\\smart.vue' /* webpackChunkName: "pages/work/smart" */))
const _0b0ab887 = () => interopDefault(import('..\\pages\\work\\style-guide.vue' /* webpackChunkName: "pages/work/style-guide" */))
const _a56a7476 = () => interopDefault(import('..\\pages\\work\\this-is-a-new-page.vue' /* webpackChunkName: "pages/work/this-is-a-new-page" */))
const _cef17e42 = () => interopDefault(import('..\\pages\\work\\tofa.vue' /* webpackChunkName: "pages/work/tofa" */))
const _16b05c51 = () => interopDefault(import('..\\pages\\work\\um-mundo-sem-cem.vue' /* webpackChunkName: "pages/work/um-mundo-sem-cem" */))
const _f2e9b5a2 = () => interopDefault(import('..\\pages\\work\\winona.vue' /* webpackChunkName: "pages/work/winona" */))
const _7ab0da2c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _ba208fb6,
    name: "about"
  }, {
    path: "/about-pt",
    component: _51c50748,
    name: "about-pt"
  }, {
    path: "/personal",
    component: _9cd56dac,
    name: "personal"
  }, {
    path: "/personal/style-guide",
    component: _297e7d38,
    name: "personal-style-guide"
  }, {
    path: "/work/acordar-com-gosto",
    component: _baa05378,
    name: "work-acordar-com-gosto"
  }, {
    path: "/work/amor-rafeiro",
    component: _551caf23,
    name: "work-amor-rafeiro"
  }, {
    path: "/work/coisas-de-miudos",
    component: _fccd4882,
    name: "work-coisas-de-miudos"
  }, {
    path: "/work/conversa-de-chat",
    component: _7051a5a2,
    name: "work-conversa-de-chat"
  }, {
    path: "/work/desafio-da-poupanca",
    component: _955a6e28,
    name: "work-desafio-da-poupanca"
  }, {
    path: "/work/drive-code",
    component: _1de056f9,
    name: "work-drive-code"
  }, {
    path: "/work/have-a-drink",
    component: _220c78a0,
    name: "work-have-a-drink"
  }, {
    path: "/work/mais-cabo-verde",
    component: _646e6058,
    name: "work-mais-cabo-verde"
  }, {
    path: "/work/mesas-para-todos-os-gostos",
    component: _090b425c,
    name: "work-mesas-para-todos-os-gostos"
  }, {
    path: "/work/o-segredo-das-relacoes",
    component: _6236f05a,
    name: "work-o-segredo-das-relacoes"
  }, {
    path: "/work/pedras",
    component: _022ce95e,
    name: "work-pedras"
  }, {
    path: "/work/ProjectExample",
    component: _1c8b9dda,
    name: "work-ProjectExample"
  }, {
    path: "/work/reprogramar-a-manha",
    component: _56906923,
    name: "work-reprogramar-a-manha"
  }, {
    path: "/work/seja-o-heroi",
    component: _77e13c14,
    name: "work-seja-o-heroi"
  }, {
    path: "/work/smart",
    component: _2c970530,
    name: "work-smart"
  }, {
    path: "/work/style-guide",
    component: _0b0ab887,
    name: "work-style-guide"
  }, {
    path: "/work/this-is-a-new-page",
    component: _a56a7476,
    name: "work-this-is-a-new-page"
  }, {
    path: "/work/tofa",
    component: _cef17e42,
    name: "work-tofa"
  }, {
    path: "/work/um-mundo-sem-cem",
    component: _16b05c51,
    name: "work-um-mundo-sem-cem"
  }, {
    path: "/work/winona",
    component: _f2e9b5a2,
    name: "work-winona"
  }, {
    path: "/",
    component: _7ab0da2c,
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
