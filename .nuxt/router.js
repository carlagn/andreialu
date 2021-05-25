import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _53bb0a73 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _d8474164 = () => interopDefault(import('../pages/about-pt.vue' /* webpackChunkName: "pages/about-pt" */))
const _aa51da0e = () => interopDefault(import('../pages/side-b/index.vue' /* webpackChunkName: "pages/side-b/index" */))
const _1c0edfe3 = () => interopDefault(import('../pages/side-b/amor-rafeiro.vue' /* webpackChunkName: "pages/side-b/amor-rafeiro" */))
const _6b47986c = () => interopDefault(import('../pages/side-b/bimba.vue' /* webpackChunkName: "pages/side-b/bimba" */))
const _d381706c = () => interopDefault(import('../pages/side-b/cowboy.vue' /* webpackChunkName: "pages/side-b/cowboy" */))
const _9608b706 = () => interopDefault(import('../pages/side-b/fotopoema.vue' /* webpackChunkName: "pages/side-b/fotopoema" */))
const _224d02f9 = () => interopDefault(import('../pages/side-b/hello.vue' /* webpackChunkName: "pages/side-b/hello" */))
const _b09d1872 = () => interopDefault(import('../pages/side-b/horror-de-licor.vue' /* webpackChunkName: "pages/side-b/horror-de-licor" */))
const _01e3a2ff = () => interopDefault(import('../pages/side-b/neon.vue' /* webpackChunkName: "pages/side-b/neon" */))
const _7891c366 = () => interopDefault(import('../pages/side-b/noite-oraculo.vue' /* webpackChunkName: "pages/side-b/noite-oraculo" */))
const _908bb93e = () => interopDefault(import('../pages/side-b/skate.vue' /* webpackChunkName: "pages/side-b/skate" */))
const _0ea12072 = () => interopDefault(import('../pages/side-b/style-guide.vue' /* webpackChunkName: "pages/side-b/style-guide" */))
const _3820e5ef = () => interopDefault(import('../pages/side-b/winona.vue' /* webpackChunkName: "pages/side-b/winona" */))
const _2ca5990c = () => interopDefault(import('../pages/work/coisas-de-miudos.vue' /* webpackChunkName: "pages/work/coisas-de-miudos" */))
const _2feb04ea = () => interopDefault(import('../pages/work/conversa-de-chat.vue' /* webpackChunkName: "pages/work/conversa-de-chat" */))
const _52709351 = () => interopDefault(import('../pages/work/desafio-da-poupanca.vue' /* webpackChunkName: "pages/work/desafio-da-poupanca" */))
const _7cfc08cd = () => interopDefault(import('../pages/work/mesas-para-todos-os-gostos.vue' /* webpackChunkName: "pages/work/mesas-para-todos-os-gostos" */))
const _2ffacfd5 = () => interopDefault(import('../pages/work/o-segredo-das-relacoes.vue' /* webpackChunkName: "pages/work/o-segredo-das-relacoes" */))
const _435d1ed9 = () => interopDefault(import('../pages/work/pedras.vue' /* webpackChunkName: "pages/work/pedras" */))
const _71d8818e = () => interopDefault(import('../pages/work/print.vue' /* webpackChunkName: "pages/work/print" */))
const _d4cfaf56 = () => interopDefault(import('../pages/work/ProjectExample.vue' /* webpackChunkName: "pages/work/ProjectExample" */))
const _18a398f0 = () => interopDefault(import('../pages/work/reprogramar-a-manha.vue' /* webpackChunkName: "pages/work/reprogramar-a-manha" */))
const _47c69756 = () => interopDefault(import('../pages/work/smart.vue' /* webpackChunkName: "pages/work/smart" */))
const _4a97b7ec = () => interopDefault(import('../pages/work/style-guide.vue' /* webpackChunkName: "pages/work/style-guide" */))
const _5fc79ac0 = () => interopDefault(import('../pages/work/this-is-a-new-page.vue' /* webpackChunkName: "pages/work/this-is-a-new-page" */))
const _e4a6cdcc = () => interopDefault(import('../pages/work/tofa.vue' /* webpackChunkName: "pages/work/tofa" */))
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
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _53bb0a73,
    name: "about"
  }, {
    path: "/about-pt",
    component: _d8474164,
    name: "about-pt"
  }, {
    path: "/side-b",
    component: _aa51da0e,
    name: "side-b"
  }, {
    path: "/side-b/amor-rafeiro",
    component: _1c0edfe3,
    name: "side-b-amor-rafeiro"
  }, {
    path: "/side-b/bimba",
    component: _6b47986c,
    name: "side-b-bimba"
  }, {
    path: "/side-b/cowboy",
    component: _d381706c,
    name: "side-b-cowboy"
  }, {
    path: "/side-b/fotopoema",
    component: _9608b706,
    name: "side-b-fotopoema"
  }, {
    path: "/side-b/hello",
    component: _224d02f9,
    name: "side-b-hello"
  }, {
    path: "/side-b/horror-de-licor",
    component: _b09d1872,
    name: "side-b-horror-de-licor"
  }, {
    path: "/side-b/neon",
    component: _01e3a2ff,
    name: "side-b-neon"
  }, {
    path: "/side-b/noite-oraculo",
    component: _7891c366,
    name: "side-b-noite-oraculo"
  }, {
    path: "/side-b/skate",
    component: _908bb93e,
    name: "side-b-skate"
  }, {
    path: "/side-b/style-guide",
    component: _0ea12072,
    name: "side-b-style-guide"
  }, {
    path: "/side-b/winona",
    component: _3820e5ef,
    name: "side-b-winona"
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
    path: "/work/print",
    component: _71d8818e,
    name: "work-print"
  }, {
    path: "/work/ProjectExample",
    component: _d4cfaf56,
    name: "work-ProjectExample"
  }, {
    path: "/work/reprogramar-a-manha",
    component: _18a398f0,
    name: "work-reprogramar-a-manha"
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
