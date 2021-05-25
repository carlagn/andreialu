import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _e4841e72 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _6b4de87a = () => interopDefault(import('../pages/about-pt.vue' /* webpackChunkName: "pages/about-pt" */))
const _226fb3b6 = () => interopDefault(import('../pages/side-b/index.vue' /* webpackChunkName: "pages/side-b/index" */))
const _95862998 = () => interopDefault(import('../pages/side-a/coisas-de-miudos.vue' /* webpackChunkName: "pages/side-a/coisas-de-miudos" */))
const _090a86b8 = () => interopDefault(import('../pages/side-a/conversa-de-chat.vue' /* webpackChunkName: "pages/side-a/conversa-de-chat" */))
const _07f3ed52 = () => interopDefault(import('../pages/side-a/desafio-da-poupanca.vue' /* webpackChunkName: "pages/side-a/desafio-da-poupanca" */))
const _0bbce007 = () => interopDefault(import('../pages/side-a/mesas-para-todos-os-gostos.vue' /* webpackChunkName: "pages/side-a/mesas-para-todos-os-gostos" */))
const _502757e2 = () => interopDefault(import('../pages/side-a/o-segredo-das-relacoes.vue' /* webpackChunkName: "pages/side-a/o-segredo-das-relacoes" */))
const _337b51da = () => interopDefault(import('../pages/side-a/pedras.vue' /* webpackChunkName: "pages/side-a/pedras" */))
const _1ee997bf = () => interopDefault(import('../pages/side-a/print.vue' /* webpackChunkName: "pages/side-a/print" */))
const _c578ace4 = () => interopDefault(import('../pages/side-a/reprogramar-a-manha.vue' /* webpackChunkName: "pages/side-a/reprogramar-a-manha" */))
const _33f28cdb = () => interopDefault(import('../pages/side-a/smart.vue' /* webpackChunkName: "pages/side-a/smart" */))
const _bda2d81c = () => interopDefault(import('../pages/side-a/style-guide.vue' /* webpackChunkName: "pages/side-a/style-guide" */))
const _39d2d058 = () => interopDefault(import('../pages/side-a/tofa.vue' /* webpackChunkName: "pages/side-a/tofa" */))
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
const _a51468e8 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

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
    path: "/side-a/coisas-de-miudos",
    component: _95862998,
    name: "side-a-coisas-de-miudos"
  }, {
    path: "/side-a/conversa-de-chat",
    component: _090a86b8,
    name: "side-a-conversa-de-chat"
  }, {
    path: "/side-a/desafio-da-poupanca",
    component: _07f3ed52,
    name: "side-a-desafio-da-poupanca"
  }, {
    path: "/side-a/mesas-para-todos-os-gostos",
    component: _0bbce007,
    name: "side-a-mesas-para-todos-os-gostos"
  }, {
    path: "/side-a/o-segredo-das-relacoes",
    component: _502757e2,
    name: "side-a-o-segredo-das-relacoes"
  }, {
    path: "/side-a/pedras",
    component: _337b51da,
    name: "side-a-pedras"
  }, {
    path: "/side-a/print",
    component: _1ee997bf,
    name: "side-a-print"
  }, {
    path: "/side-a/reprogramar-a-manha",
    component: _c578ace4,
    name: "side-a-reprogramar-a-manha"
  }, {
    path: "/side-a/smart",
    component: _33f28cdb,
    name: "side-a-smart"
  }, {
    path: "/side-a/style-guide",
    component: _bda2d81c,
    name: "side-a-style-guide"
  }, {
    path: "/side-a/tofa",
    component: _39d2d058,
    name: "side-a-tofa"
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
    path: "/",
    component: _a51468e8,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
