(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{343:function(t,e,r){var map={"./AMOR_CAPA.png":115,"./BAMBI.png":116,"./CAPA2.jpg":117,"./CAPA_SANDEMAN.jpg":118,"./CERAS.png":119,"./FOTOPOEMA.png":120,"./HELLO.png":121,"./HORROR.png":122,"./LONG.png":123,"./LONG_COWBOY.png":124,"./NEON.png":125,"./NO.png":126,"./aspirina.png":127,"./capa_tofa.jpg":128,"./drive.png":129,"./kidz.gif":130,"./kidz.webm":131,"./mcmuffin.png":132,"./mesas.png":133,"./mobile/capa_MCDONALDS.png":134,"./mobile/capa_PD.png":135,"./mobile/capa_PORCOS.png":136,"./mobile/capa_pedras.png":137,"./mobile/capa_print.png":138,"./pedras.gif":139,"./pedras.webm":140,"./pedras_still.png":141,"./porcos.gif":142,"./porcos.webm":143,"./pub.png":144,"./robot.gif":145,"./robot.webm":146,"./smarta_capa.jpg":147,"./unitel.png":148,"./winona_CAPA.png":149};function n(t){var e=o(t);return r(e)}function o(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=o,t.exports=n,n.id=343},344:function(t,e,r){var content=r(347);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(27).default)("7a5cc604",content,!0,{sourceMap:!1})},345:function(t,e,r){t.exports=function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(object,t){return Object.prototype.hasOwnProperty.call(object,t)},r.p="",r(r.s="fb15")}({"183d":function(t,e,r){},"46c2":function(t,e,r){"use strict";(function(t){r.d(e,"b",(function(){return o}));var n=r("5e0b");function o(t){o.installed||(o.installed=!0,t.component("HorizontalScroll",n.a))}var c={install:o},l=null;"undefined"!=typeof window?l=window.Vue:void 0!==t&&(l=t.Vue),l&&l.use(c),e.a=n.a}).call(this,r("c8ba"))},"5e0b":function(t,e,r){"use strict";var n={mounted:function(){var content=this.$el;content.addEventListener&&content.addEventListener("DOMMouseScroll",(function(t){content.scrollBy(-t.wheelDelta,0)}),!1),content.attachEvent&&content.attachEvent("onmousewheel",(function(t){content.scrollBy(-t.wheelDelta,0)})),content.onmousewheel=function(t){content.scrollBy(-t.wheelDelta,0)}}};r("fb89");var component=function(t,e,r,n,o,c,l,d){var f,m="function"==typeof t?t.options:t;if(e&&(m.render=e,m.staticRenderFns=r,m._compiled=!0),n&&(m.functional=!0),c&&(m._scopeId="data-v-"+c),l?(f=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(l)},m._ssrRegister=f):o&&(f=d?function(){o.call(this,this.$root.$options.shadowRoot)}:o),f)if(m.functional){m._injectStyles=f;var v=m.render;m.render=function(t,e){return f.call(e),v(t,e)}}else{var h=m.beforeCreate;m.beforeCreate=h?[].concat(h,f):[f]}return{exports:t,options:m}}(n,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"_horizontal-scroll"},[this._t("default")],2)}),[],!1,null,"5ce095ec",null);e.a=component.exports},8875:function(t,e,r){var n,o,c;"undefined"!=typeof self&&self,o=[],void 0===(c="function"==typeof(n=function(){return function(){if(document.currentScript)return document.currentScript;try{throw new Error}catch(d){var t,e,r,n=/.*at [^(]*\((.*):(.+):(.+)\)$/gi.exec(d.stack)||/@([^@]*):(\d+):(\d+)\s*$/gi.exec(d.stack),o=n&&n[1]||!1,line=n&&n[2]||!1,c=document.location.href.replace(document.location.hash,""),l=document.getElementsByTagName("script");o===c&&(t=document.documentElement.outerHTML,e=new RegExp("(?:[^\\n]+?\\n){0,"+(line-2)+"}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*","i"),r=t.replace(e,"$1").trim());for(var i=0;i<l.length;i++){if("interactive"===l[i].readyState)return l[i];if(l[i].src===o)return l[i];if(o===c&&l[i].innerHTML&&l[i].innerHTML.trim()===r)return l[i]}return null}}})?n.apply(e,o):n)||(t.exports=c)},c8ba:function(t,e){var g;g=function(){return this}();try{g=g||new Function("return this")()}catch(t){"object"==typeof window&&(g=window)}t.exports=g},fb15:function(t,e,r){"use strict";if(r.r(e),r.d(e,"install",(function(){return l.b})),"undefined"!=typeof window){var n=window.document.currentScript,o=r("8875");n=o(),"currentScript"in document||Object.defineProperty(document,"currentScript",{get:o});var c=n&&n.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);c&&(r.p=c[1])}var l=r("46c2");e.default=l.a},fb89:function(t,e,r){"use strict";var n=r("183d");r.n(n).a}})},346:function(t,e,r){"use strict";r(344)},347:function(t,e,r){(e=r(26)(!1)).push([t.i,".grid-element[data-v-46486a33]{transition:opacity .15s ease-in-out;width:50vw;height:500px;opacity:0}.grid-element.loaded[data-v-46486a33]{opacity:1}@media(min-device-width:769px){.grid-element[data-v-46486a33]{width:calc(33.33333vh - 5.66667px);height:calc(33.33333vh - 5.66667px)}.grid-element.xl[data-v-46486a33]{width:calc(66.66667vh - 11.33333px)}.grid-element.xl[data-v-46486a33],.grid-element.xv[data-v-46486a33]{height:calc(66.66667vh - 11.33333px)}}.grid-element.xh[data-v-46486a33]{width:600px}.grid-element .grid-video[data-v-46486a33],.grid-element img[data-v-46486a33]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.grid-element .grid-video[data-v-46486a33]{display:none}@media(min-device-width:769px){.grid-element .grid-video[data-v-46486a33]{display:block}}.grid-element .grid-gif[data-v-46486a33]{display:block}@media(min-device-width:769px){.grid-element .grid-gif[data-v-46486a33]{display:none}}",""]),t.exports=e},348:function(t,e,r){var content=r(349);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(27).default)("63d070ac",content,!0,{sourceMap:!1})},349:function(t,e,r){(e=r(26)(!1)).push([t.i,"._horizontal-scroll[data-v-5ce095ec]{box-sizing:border-box;overflow-x:scroll;overflow-y:hidden;text-align:left;white-space:nowrap}",""]),t.exports=e},350:function(t,e,r){"use strict";r(48),r(49);var n={props:{source:{type:String},alt:{type:String},animated:{type:Boolean,default:!1},mode:{type:String},isMobile:{type:Boolean}},data:function(){return{loaded:[]}},computed:{imgSrc:function(){return this.source},imgAlt:function(){return this.alt}},methods:{isLoaded:function(t){return this.loaded.includes(t)},pushToLoaded:function(t){this.loaded.push(t)}}},o=(r(346),r(8)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.animated?n("div",{staticClass:"grid-element",class:{loaded:t.isLoaded(t.imgSrc)||t.isLoaded(t.imgAlt),xv:"portrait"===t.mode,xl:"big"===t.mode}},[t.isMobile?n("img",{attrs:{src:r(343)("./"+t.imgAlt)},on:{load:function(e){return t.pushToLoaded(t.imgAlt)}}}):n("video",{staticClass:"grid-video",attrs:{autoplay:"true",muted:"true",loop:"true"},domProps:{muted:!0},on:{canplay:function(e){return t.pushToLoaded(t.imgSrc)}}},[n("source",{attrs:{src:r(343)("./"+t.imgSrc)}})])]):n("div",{staticClass:"grid-element",class:{loaded:t.isLoaded(t.imgSrc),xv:"portrait"===t.mode,xl:"big"===t.mode}},[n("img",{attrs:{src:r(343)("./"+t.imgSrc)},on:{load:function(e){return t.pushToLoaded(t.imgSrc)}}})])}),[],!1,null,"46486a33",null);e.a=component.exports},355:function(t,e,r){var content=r(366);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(27).default)("0b53f12a",content,!0,{sourceMap:!1})},356:function(t,e,r){var content=r(368);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(27).default)("2e107364",content,!0,{sourceMap:!1})},365:function(t,e,r){"use strict";r(355)},366:function(t,e,r){(e=r(26)(!1)).push([t.i,'.grid-container[data-v-4112f56e]{display:flex;padding-top:300px;flex-wrap:wrap;margin-left:0;height:auto;width:-webkit-min-content;width:-moz-min-content;width:min-content;flex-direction:row}@media(min-device-width:769px){.grid-container[data-v-4112f56e]{flex-direction:column;height:100vh;padding-top:0}}.grid-element-empty[data-v-4112f56e]{display:none;justify-content:center;align-items:center;font-family:"Fraunces",serif;font-weight:lighter}@media(min-device-width:769px){.grid-element-empty[data-v-4112f56e]{display:flex;width:calc(33.33333vh - 5.66667px);height:calc(33.33333vh - 5.66667px)}}.grid-big[data-v-4112f56e]{flex-direction:column}.grid-big[data-v-4112f56e],.grid-big>div[data-v-4112f56e]{display:flex}',""]),t.exports=e},367:function(t,e,r){"use strict";r(356)},368:function(t,e,r){(e=r(26)(!1)).push([t.i,"html body{background-color:#f8f8ff}",""]),t.exports=e},370:function(t,e,r){"use strict";r.r(e);var n=r(1),o=(r(47),r(20),r(21),r(9),r(36),r(16)),c=r(345),l=r.n(c),d=r(14),f=r(350);r(348);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h=n.a.extend({components:{HorizontalScroll:l.a,Cover:f.a},data:function(){return{mobile:!1}},mounted:function(){this.$store.commit("setSidebar",""),this.$emit("grid",this.$refs.grid),this.mobile=window.screen.width<=768,this.setActivePage("work")},beforeDestroy:function(){this.setActivePage("")},methods:v(v({},Object(d.b)(["setSideBar","setActivePage"])),{},{setActivePage:function(t){this.$store.commit("setActivePage",t)}}),computed:{sidebarClass:function(){return this.$store.state.sidebar},isMobile:function(){return this.mobile}}}),w=(r(365),r(8)),y=Object(w.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r(t.isMobile?"div":"HorizontalScroll",{tag:"component",staticClass:"grid-wrapper",class:t.sidebarClass},[r("div",{ref:"grid",staticClass:"grid-container"},[r("div",{staticClass:"grid-element-empty"}),t._v(" "),r("nuxt-link",{attrs:{to:"/work/pedras"}},[r("Cover",{attrs:{isMobile:t.isMobile,source:"pedras.webm",animated:!0,mode:"portrait",alt:"pedras_still.png"}})],1),t._v(" "),r("div",{staticClass:"grid-element-empty"}),t._v(" "),r("nuxt-link",{attrs:{to:"/work/o-segredo-das-relacoes"}},[r("Cover",{attrs:{isMobile:t.isMobile,source:"CERAS.png"}})],1),t._v(" "),r("nuxt-link",{attrs:{to:"/work/tofa"}},[r("Cover",{attrs:{isMobile:t.isMobile,source:"capa_tofa.jpg"}})],1),t._v(" "),r("div",{staticClass:"grid-big"},[r("nuxt-link",{attrs:{to:"/work/reprogramar-a-manha"}},[r("Cover",{attrs:{isMobile:t.isMobile,source:"robot.webm",animated:!0,alt:"robot.gif",mode:"big"}})],1),t._v(" "),r("div",[r("nuxt-link",{attrs:{to:"/work/mesas-para-todos-os-gostos"}},[r("Cover",{attrs:{isMobile:t.isMobile,source:"mesas.png"}})],1),t._v(" "),r("nuxt-link",{attrs:{to:"/work/smart"}},[r("Cover",{attrs:{isMobile:t.isMobile,source:"smarta_capa.jpg"}})],1)],1)],1),t._v(" "),r("nuxt-link",{attrs:{to:"/work/desafio-da-poupanca"}},[r("Cover",{attrs:{isMobile:t.isMobile,source:"porcos.webm",animated:!0,alt:"porcos.gif"}})],1),t._v(" "),r("nuxt-link",{attrs:{to:"/work/print"}},[r("Cover",{attrs:{isMobile:t.isMobile,source:"CAPA_SANDEMAN.jpg",mode:"portrait"}})],1),t._v(" "),r("nuxt-link",{attrs:{to:"/work/conversa-de-chat"}},[r("Cover",{attrs:{isMobile:t.isMobile,source:"CAPA2.jpg"}})],1),t._v(" "),r("nuxt-link",{attrs:{to:"/work/coisas-de-miudos"}},[r("Cover",{attrs:{isMobile:t.isMobile,source:"kidz.webm",animated:!0,alt:"kidz.gif"}})],1)],1)])}),[],!1,null,"4112f56e",null).exports,x=n.a.extend({components:{GridView:y},props:{sidebar:{type:String}}}),_=(r(367),Object(w.a)(x,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"body-wrapper"},[e("GridView")],1)}),[],!1,null,null,null));e.default=_.exports}}]);