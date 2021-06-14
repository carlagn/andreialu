import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3b1bd33c = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _7b3218ff = () => interopDefault(import('..\\pages\\about-pt.vue' /* webpackChunkName: "pages/about-pt" */))
const _de0df88a = () => interopDefault(import('..\\pages\\side-b\\index.vue' /* webpackChunkName: "pages/side-b/index" */))
const _218a1588 = () => interopDefault(import('..\\pages\\side-a\\coisas-de-miudos.vue' /* webpackChunkName: "pages/side-a/coisas-de-miudos" */))
const _3578c6ac = () => interopDefault(import('..\\pages\\side-a\\conversa-de-chat.vue' /* webpackChunkName: "pages/side-a/conversa-de-chat" */))
const _c4513b62 = () => interopDefault(import('..\\pages\\side-a\\desafio-da-poupanca.vue' /* webpackChunkName: "pages/side-a/desafio-da-poupanca" */))
const _1347ffe2 = () => interopDefault(import('..\\pages\\side-a\\mesas-para-todos-os-gostos.vue' /* webpackChunkName: "pages/side-a/mesas-para-todos-os-gostos" */))
const _7e268fd2 = () => interopDefault(import('..\\pages\\side-a\\o-segredo-das-relacoes.vue' /* webpackChunkName: "pages/side-a/o-segredo-das-relacoes" */))
const _b94869ca = () => interopDefault(import('..\\pages\\side-a\\pedras.vue' /* webpackChunkName: "pages/side-a/pedras" */))
const _4e4d82b7 = () => interopDefault(import('..\\pages\\side-a\\print.vue' /* webpackChunkName: "pages/side-a/print" */))
const _3f150286 = () => interopDefault(import('..\\pages\\side-a\\reprogramar-a-manha.vue' /* webpackChunkName: "pages/side-a/reprogramar-a-manha" */))
const _635677d3 = () => interopDefault(import('..\\pages\\side-a\\smart.vue' /* webpackChunkName: "pages/side-a/smart" */))
const _2b8464ea = () => interopDefault(import('..\\pages\\side-a\\style-guide.vue' /* webpackChunkName: "pages/side-a/style-guide" */))
const _bae52448 = () => interopDefault(import('..\\pages\\side-a\\tofa.vue' /* webpackChunkName: "pages/side-a/tofa" */))
const _1182f0e1 = () => interopDefault(import('..\\pages\\side-b\\amor-rafeiro.vue' /* webpackChunkName: "pages/side-b/amor-rafeiro" */))
const _5169892e = () => interopDefault(import('..\\pages\\side-b\\bimba.vue' /* webpackChunkName: "pages/side-b/bimba" */))
const _745b6f48 = () => interopDefault(import('..\\pages\\side-b\\cowboy.vue' /* webpackChunkName: "pages/side-b/cowboy" */))
const _39593782 = () => interopDefault(import('..\\pages\\side-b\\fotopoema.vue' /* webpackChunkName: "pages/side-b/fotopoema" */))
const _086ef3bb = () => interopDefault(import('..\\pages\\side-b\\hello.vue' /* webpackChunkName: "pages/side-b/hello" */))
const _5576da09 = () => interopDefault(import('..\\pages\\side-b\\horror-de-licor.vue' /* webpackChunkName: "pages/side-b/horror-de-licor" */))
const _7180dc06 = () => interopDefault(import('..\\pages\\side-b\\neon.vue' /* webpackChunkName: "pages/side-b/neon" */))
const _319fd228 = () => interopDefault(import('..\\pages\\side-b\\noite-oraculo.vue' /* webpackChunkName: "pages/side-b/noite-oraculo" */))
const _c447d7ba = () => interopDefault(import('..\\pages\\side-b\\skate.vue' /* webpackChunkName: "pages/side-b/skate" */))
const _1fd371ee = () => interopDefault(import('..\\pages\\side-b\\style-guide.vue' /* webpackChunkName: "pages/side-b/style-guide" */))
const _163d0d6d = () => interopDefault(import('..\\pages\\side-b\\winona.vue' /* webpackChunkName: "pages/side-b/winona" */))
const _0229f127 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _3b1bd33c,
    name: "about"
  }, {
    path: "/about-pt",
    component: _7b3218ff,
    name: "about-pt"
  }, {
    path: "/side-b",
    component: _de0df88a,
    name: "side-b"
  }, {
    path: "/side-a/coisas-de-miudos",
    component: _218a1588,
    name: "side-a-coisas-de-miudos"
  }, {
    path: "/side-a/conversa-de-chat",
    component: _3578c6ac,
    name: "side-a-conversa-de-chat"
  }, {
    path: "/side-a/desafio-da-poupanca",
    component: _c4513b62,
    name: "side-a-desafio-da-poupanca"
  }, {
    path: "/side-a/mesas-para-todos-os-gostos",
    component: _1347ffe2,
    name: "side-a-mesas-para-todos-os-gostos"
  }, {
    path: "/side-a/o-segredo-das-relacoes",
    component: _7e268fd2,
    name: "side-a-o-segredo-das-relacoes"
  }, {
    path: "/side-a/pedras",
    component: _b94869ca,
    name: "side-a-pedras"
  }, {
    path: "/side-a/print",
    component: _4e4d82b7,
    name: "side-a-print"
  }, {
    path: "/side-a/reprogramar-a-manha",
    component: _3f150286,
    name: "side-a-reprogramar-a-manha"
  }, {
    path: "/side-a/smart",
    component: _635677d3,
    name: "side-a-smart"
  }, {
    path: "/side-a/style-guide",
    component: _2b8464ea,
    name: "side-a-style-guide"
  }, {
    path: "/side-a/tofa",
    component: _bae52448,
    name: "side-a-tofa"
  }, {
    path: "/side-b/amor-rafeiro",
    component: _1182f0e1,
    name: "side-b-amor-rafeiro"
  }, {
    path: "/side-b/bimba",
    component: _5169892e,
    name: "side-b-bimba"
  }, {
    path: "/side-b/cowboy",
    component: _745b6f48,
    name: "side-b-cowboy"
  }, {
    path: "/side-b/fotopoema",
    component: _39593782,
    name: "side-b-fotopoema"
  }, {
    path: "/side-b/hello",
    component: _086ef3bb,
    name: "side-b-hello"
  }, {
    path: "/side-b/horror-de-licor",
    component: _5576da09,
    name: "side-b-horror-de-licor"
  }, {
    path: "/side-b/neon",
    component: _7180dc06,
    name: "side-b-neon"
  }, {
    path: "/side-b/noite-oraculo",
    component: _319fd228,
    name: "side-b-noite-oraculo"
  }, {
    path: "/side-b/skate",
    component: _c447d7ba,
    name: "side-b-skate"
  }, {
    path: "/side-b/style-guide",
    component: _1fd371ee,
    name: "side-b-style-guide"
  }, {
    path: "/side-b/winona",
    component: _163d0d6d,
    name: "side-b-winona"
  }, {
    path: "/",
    component: _0229f127,
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
