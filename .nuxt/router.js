import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _e4841e72 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _6b4de87a = () => interopDefault(import('../pages/about-pt.vue' /* webpackChunkName: "pages/about-pt" */))
const _226fb3b6 = () => interopDefault(import('../pages/side-b/index.vue' /* webpackChunkName: "pages/side-b/index" */))
const _48062337 = () => interopDefault(import('../pages/side-b/amor-rafeiro.vue' /* webpackChunkName: "pages/side-b/amor-rafeiro" */))
const _a18ea8d0 = () => interopDefault(import('../pages/side-b/bimba.vue' /* webpackChunkName: "pages/side-b/bimba" */))
const _5f1ecbc4 = () => interopDefault(import('../pages/side-b/cowboy.vue' /* webpackChunkName: "pages/side-b/cowboy" */))
const _b2d17cae = () => interopDefault(import('../pages/side-b/fotopoema.vue' /* webpackChunkName: "pages/side-b/fotopoema" */))
const _663e1625 = () => interopDefault(import('../pages/side-b/hello.vue' /* webpackChunkName: "pages/side-b/hello" */))
const _02f57ff3 = () => interopDefault(import('../pages/side-b/horror-de-licor.vue' /* webpackChunkName: "pages/side-b/horror-de-licor" */))
const _672d7a53 = () => interopDefault(import('../pages/side-b/neon.vue' /* webpackChunkName: "pages/side-b/neon" */))
const _68fa2adc = () => interopDefault(import('../pages/side-b/noite-oraculo.vue' /* webpackChunkName: "pages/side-b/noite-oraculo" */))
const _08a992e6 = () => interopDefault(import('../pages/side-b/skate.vue' /* webpackChunkName: "pages/side-b/skate" */))
const _1c4f1c1a = () => interopDefault(import('../pages/side-b/style-guide.vue' /* webpackChunkName: "pages/side-b/style-guide" */))
const _72523843 = () => interopDefault(import('../pages/side-b/winona.vue' /* webpackChunkName: "pages/side-b/winona" */))
const _163e1c64 = () => interopDefault(import('../pages/work/coisas-de-miudos.vue' /* webpackChunkName: "pages/work/coisas-de-miudos" */))
const _3b1ec33e = () => interopDefault(import('../pages/work/conversa-de-chat.vue' /* webpackChunkName: "pages/work/conversa-de-chat" */))
const _263b7706 = () => interopDefault(import('../pages/work/desafio-da-poupanca.vue' /* webpackChunkName: "pages/work/desafio-da-poupanca" */))
const _07b623be = () => interopDefault(import('../pages/work/mesas-para-todos-os-gostos.vue' /* webpackChunkName: "pages/work/mesas-para-todos-os-gostos" */))
const _04737f29 = () => interopDefault(import('../pages/work/o-segredo-das-relacoes.vue' /* webpackChunkName: "pages/work/o-segredo-das-relacoes" */))
const _aeb213a6 = () => interopDefault(import('../pages/work/pedras.vue' /* webpackChunkName: "pages/work/pedras" */))
const _ef70a536 = () => interopDefault(import('../pages/work/print.vue' /* webpackChunkName: "pages/work/print" */))
const _7ce128ae = () => interopDefault(import('../pages/work/ProjectExample.vue' /* webpackChunkName: "pages/work/ProjectExample" */))
const _e3c03698 = () => interopDefault(import('../pages/work/reprogramar-a-manha.vue' /* webpackChunkName: "pages/work/reprogramar-a-manha" */))
const _c55ebafe = () => interopDefault(import('../pages/work/smart.vue' /* webpackChunkName: "pages/work/smart" */))
const _3c335518 = () => interopDefault(import('../pages/work/style-guide.vue' /* webpackChunkName: "pages/work/style-guide" */))
const _6d051414 = () => interopDefault(import('../pages/work/this-is-a-new-page.vue' /* webpackChunkName: "pages/work/this-is-a-new-page" */))
const _b7279524 = () => interopDefault(import('../pages/work/tofa.vue' /* webpackChunkName: "pages/work/tofa" */))
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
    path: "/side-b",
    component: _226fb3b6,
    name: "side-b"
  }, {
    path: "/side-b/amor-rafeiro",
    component: _48062337,
    name: "side-b-amor-rafeiro"
  }, {
    path: "/side-b/bimba",
    component: _a18ea8d0,
    name: "side-b-bimba"
  }, {
    path: "/side-b/cowboy",
    component: _5f1ecbc4,
    name: "side-b-cowboy"
  }, {
    path: "/side-b/fotopoema",
    component: _b2d17cae,
    name: "side-b-fotopoema"
  }, {
    path: "/side-b/hello",
    component: _663e1625,
    name: "side-b-hello"
  }, {
    path: "/side-b/horror-de-licor",
    component: _02f57ff3,
    name: "side-b-horror-de-licor"
  }, {
    path: "/side-b/neon",
    component: _672d7a53,
    name: "side-b-neon"
  }, {
    path: "/side-b/noite-oraculo",
    component: _68fa2adc,
    name: "side-b-noite-oraculo"
  }, {
    path: "/side-b/skate",
    component: _08a992e6,
    name: "side-b-skate"
  }, {
    path: "/side-b/style-guide",
    component: _1c4f1c1a,
    name: "side-b-style-guide"
  }, {
    path: "/side-b/winona",
    component: _72523843,
    name: "side-b-winona"
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
    path: "/work/print",
    component: _ef70a536,
    name: "work-print"
  }, {
    path: "/work/ProjectExample",
    component: _7ce128ae,
    name: "work-ProjectExample"
  }, {
    path: "/work/reprogramar-a-manha",
    component: _e3c03698,
    name: "work-reprogramar-a-manha"
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
