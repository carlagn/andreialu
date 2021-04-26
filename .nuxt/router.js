import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _e4841e72 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _6b4de87a = () => interopDefault(import('../pages/about-pt.vue' /* webpackChunkName: "pages/about-pt" */))
const _cf49fbd6 = () => interopDefault(import('../pages/work/acordar-com-gosto.vue' /* webpackChunkName: "pages/work/acordar-com-gosto" */))
const _4907a4b2 = () => interopDefault(import('../pages/work/amor-rafeiro.vue' /* webpackChunkName: "pages/work/amor-rafeiro" */))
const _163e1c64 = () => interopDefault(import('../pages/work/coisas-de-miudos.vue' /* webpackChunkName: "pages/work/coisas-de-miudos" */))
const _3b1ec33e = () => interopDefault(import('../pages/work/conversa-de-chat.vue' /* webpackChunkName: "pages/work/conversa-de-chat" */))
const _263b7706 = () => interopDefault(import('../pages/work/desafio-da-poupanca.vue' /* webpackChunkName: "pages/work/desafio-da-poupanca" */))
const _a84d3770 = () => interopDefault(import('../pages/work/drive-code.vue' /* webpackChunkName: "pages/work/drive-code" */))
const _3a368d82 = () => interopDefault(import('../pages/work/have-a-drink.vue' /* webpackChunkName: "pages/work/have-a-drink" */))
const _5fe44c69 = () => interopDefault(import('../pages/work/mais-cabo-verde.vue' /* webpackChunkName: "pages/work/mais-cabo-verde" */))
const _07b623be = () => interopDefault(import('../pages/work/mesas-para-todos-os-gostos.vue' /* webpackChunkName: "pages/work/mesas-para-todos-os-gostos" */))
const _04737f29 = () => interopDefault(import('../pages/work/o-segredo-das-relacoes.vue' /* webpackChunkName: "pages/work/o-segredo-das-relacoes" */))
const _aeb213a6 = () => interopDefault(import('../pages/work/pedras.vue' /* webpackChunkName: "pages/work/pedras" */))
const _7ce128ae = () => interopDefault(import('../pages/work/ProjectExample.vue' /* webpackChunkName: "pages/work/ProjectExample" */))
const _e3c03698 = () => interopDefault(import('../pages/work/reprogramar-a-manha.vue' /* webpackChunkName: "pages/work/reprogramar-a-manha" */))
const _900b50f6 = () => interopDefault(import('../pages/work/seja-o-heroi.vue' /* webpackChunkName: "pages/work/seja-o-heroi" */))
const _c55ebafe = () => interopDefault(import('../pages/work/smart.vue' /* webpackChunkName: "pages/work/smart" */))
const _3c335518 = () => interopDefault(import('../pages/work/style-guide.vue' /* webpackChunkName: "pages/work/style-guide" */))
const _6d051414 = () => interopDefault(import('../pages/work/this-is-a-new-page.vue' /* webpackChunkName: "pages/work/this-is-a-new-page" */))
const _b7279524 = () => interopDefault(import('../pages/work/tofa.vue' /* webpackChunkName: "pages/work/tofa" */))
const _ec101b40 = () => interopDefault(import('../pages/work/um-mundo-sem-cem.vue' /* webpackChunkName: "pages/work/um-mundo-sem-cem" */))
const _2d0531fe = () => interopDefault(import('../pages/work/winona.vue' /* webpackChunkName: "pages/work/winona" */))
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
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _e4841e72,
    name: "about"
  }, {
    path: "/about-pt",
    component: _6b4de87a,
    name: "about-pt"
  }, {
    path: "/work/acordar-com-gosto",
    component: _cf49fbd6,
    name: "work-acordar-com-gosto"
  }, {
    path: "/work/amor-rafeiro",
    component: _4907a4b2,
    name: "work-amor-rafeiro"
  }, {
    path: "/work/coisas-de-miudos",
    component: _163e1c64,
    name: "work-coisas-de-miudos"
  }, {
    path: "/work/conversa-de-chat",
    component: _3b1ec33e,
    name: "work-conversa-de-chat"
  }, {
    path: "/work/desafio-da-poupanca",
    component: _263b7706,
    name: "work-desafio-da-poupanca"
  }, {
    path: "/work/drive-code",
    component: _a84d3770,
    name: "work-drive-code"
  }, {
    path: "/work/have-a-drink",
    component: _3a368d82,
    name: "work-have-a-drink"
  }, {
    path: "/work/mais-cabo-verde",
    component: _5fe44c69,
    name: "work-mais-cabo-verde"
  }, {
    path: "/work/mesas-para-todos-os-gostos",
    component: _07b623be,
    name: "work-mesas-para-todos-os-gostos"
  }, {
    path: "/work/o-segredo-das-relacoes",
    component: _04737f29,
    name: "work-o-segredo-das-relacoes"
  }, {
    path: "/work/pedras",
    component: _aeb213a6,
    name: "work-pedras"
  }, {
    path: "/work/ProjectExample",
    component: _7ce128ae,
    name: "work-ProjectExample"
  }, {
    path: "/work/reprogramar-a-manha",
    component: _e3c03698,
    name: "work-reprogramar-a-manha"
  }, {
    path: "/work/seja-o-heroi",
    component: _900b50f6,
    name: "work-seja-o-heroi"
  }, {
    path: "/work/smart",
    component: _c55ebafe,
    name: "work-smart"
  }, {
    path: "/work/style-guide",
    component: _3c335518,
    name: "work-style-guide"
  }, {
    path: "/work/this-is-a-new-page",
    component: _6d051414,
    name: "work-this-is-a-new-page"
  }, {
    path: "/work/tofa",
    component: _b7279524,
    name: "work-tofa"
  }, {
    path: "/work/um-mundo-sem-cem",
    component: _ec101b40,
    name: "work-um-mundo-sem-cem"
  }, {
    path: "/work/winona",
    component: _2d0531fe,
    name: "work-winona"
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
