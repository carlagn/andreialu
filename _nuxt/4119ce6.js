(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{351:function(e,t,r){var map={"./AMOR_CAPA.png":126,"./BAMBI.png":127,"./CAPA2.jpg":128,"./CAPA_SANDEMAN.jpg":129,"./CERAS.png":130,"./FOTOPOEMA.png":131,"./HELLO.png":132,"./HORROR.png":133,"./LONG.png":134,"./LONG_COWBOY.png":135,"./NEON.png":136,"./NO.png":137,"./acordarcedo.gif":138,"./acordarcedo.webm":139,"./aspirina.png":140,"./capa_tofa.jpg":141,"./drive.png":142,"./kidz.gif":143,"./kidz.webm":144,"./mcmuffin.png":145,"./mesas.png":146,"./mobile/capa_MCDONALDS.png":147,"./mobile/capa_PD.png":148,"./mobile/capa_PORCOS.png":149,"./mobile/capa_pedras.png":150,"./mobile/capa_print.png":151,"./pedras.gif":152,"./pedras.webm":153,"./pedras_still.png":154,"./porcos.gif":155,"./porcos.webm":156,"./pub.png":157,"./smarta_capa.jpg":158,"./unitel.png":159,"./winona_CAPA.png":160};function n(e){var t=o(e);return r(t)}function o(e){if(!r.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}n.keys=function(){return Object.keys(map)},n.resolve=o,e.exports=n,n.id=351},352:function(e,t,r){var content=r(355);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(36).default)("7a5cc604",content,!0,{sourceMap:!1})},353:function(e,t,r){e.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(object,e){return Object.prototype.hasOwnProperty.call(object,e)},r.p="",r(r.s="fb15")}({"183d":function(e,t,r){},"46c2":function(e,t,r){"use strict";(function(e){r.d(t,"b",(function(){return o}));var n=r("5e0b");function o(e){o.installed||(o.installed=!0,e.component("HorizontalScroll",n.a))}var c={install:o},d=null;"undefined"!=typeof window?d=window.Vue:void 0!==e&&(d=e.Vue),d&&d.use(c),t.a=n.a}).call(this,r("c8ba"))},"5e0b":function(e,t,r){"use strict";var n={mounted:function(){var content=this.$el;content.addEventListener&&content.addEventListener("DOMMouseScroll",(function(e){content.scrollBy(-e.wheelDelta,0)}),!1),content.attachEvent&&content.attachEvent("onmousewheel",(function(e){content.scrollBy(-e.wheelDelta,0)})),content.onmousewheel=function(e){content.scrollBy(-e.wheelDelta,0)}}};r("fb89");var component=function(e,t,r,n,o,c,d,l){var f,m="function"==typeof e?e.options:e;if(t&&(m.render=t,m.staticRenderFns=r,m._compiled=!0),n&&(m.functional=!0),c&&(m._scopeId="data-v-"+c),d?(f=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(d)},m._ssrRegister=f):o&&(f=l?function(){o.call(this,this.$root.$options.shadowRoot)}:o),f)if(m.functional){m._injectStyles=f;var v=m.render;m.render=function(e,t){return f.call(t),v(e,t)}}else{var h=m.beforeCreate;m.beforeCreate=h?[].concat(h,f):[f]}return{exports:e,options:m}}(n,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"_horizontal-scroll"},[e._t("default")],2)}),[],!1,null,"5ce095ec",null);t.a=component.exports},8875:function(e,t,r){var n,o,c;"undefined"!=typeof self&&self,o=[],void 0===(c="function"==typeof(n=function(){function e(){if(document.currentScript)return document.currentScript;try{throw new Error}catch(f){var e,t,r,n=/@([^@]*):(\d+):(\d+)\s*$/gi,o=/.*at [^(]*\((.*):(.+):(.+)\)$/gi.exec(f.stack)||n.exec(f.stack),c=o&&o[1]||!1,line=o&&o[2]||!1,d=document.location.href.replace(document.location.hash,""),l=document.getElementsByTagName("script");c===d&&(e=document.documentElement.outerHTML,t=new RegExp("(?:[^\\n]+?\\n){0,"+(line-2)+"}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*","i"),r=e.replace(t,"$1").trim());for(var i=0;i<l.length;i++){if("interactive"===l[i].readyState)return l[i];if(l[i].src===c)return l[i];if(c===d&&l[i].innerHTML&&l[i].innerHTML.trim()===r)return l[i]}return null}}return e})?n.apply(t,o):n)||(e.exports=c)},c8ba:function(e,t){var g;g=function(){return this}();try{g=g||new Function("return this")()}catch(e){"object"==typeof window&&(g=window)}e.exports=g},fb15:function(e,t,r){"use strict";if(r.r(t),r.d(t,"install",(function(){return d.b})),"undefined"!=typeof window){var n=window.document.currentScript,o=r("8875");n=o(),"currentScript"in document||Object.defineProperty(document,"currentScript",{get:o});var c=n&&n.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);c&&(r.p=c[1])}var d=r("46c2");t.default=d.a},fb89:function(e,t,r){"use strict";var n=r("183d");r.n(n).a}})},354:function(e,t,r){"use strict";r(352)},355:function(e,t,r){var n=r(35)(!1);n.push([e.i,".grid-element[data-v-46486a33]{transition:opacity .15s ease-in-out;width:50vw;height:500px;opacity:0}.grid-element.loaded[data-v-46486a33]{opacity:1}@media(min-device-width:769px){.grid-element[data-v-46486a33]{width:calc(33.33333vh - 5.66667px);height:calc(33.33333vh - 5.66667px)}.grid-element.xl[data-v-46486a33]{width:calc(66.66667vh - 11.33333px)}.grid-element.xl[data-v-46486a33],.grid-element.xv[data-v-46486a33]{height:calc(66.66667vh - 11.33333px)}}.grid-element.xh[data-v-46486a33]{width:600px}.grid-element .grid-video[data-v-46486a33],.grid-element img[data-v-46486a33]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.grid-element .grid-video[data-v-46486a33]{display:none}@media(min-device-width:769px){.grid-element .grid-video[data-v-46486a33]{display:block}}.grid-element .grid-gif[data-v-46486a33]{display:block}@media(min-device-width:769px){.grid-element .grid-gif[data-v-46486a33]{display:none}}",""]),e.exports=n},356:function(e,t,r){var content=r(357);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(36).default)("63d070ac",content,!0,{sourceMap:!1})},357:function(e,t,r){var n=r(35)(!1);n.push([e.i,"._horizontal-scroll[data-v-5ce095ec]{box-sizing:border-box;overflow-x:scroll;overflow-y:hidden;text-align:left;white-space:nowrap}",""]),e.exports=n},358:function(e,t,r){"use strict";r(52),r(53);var n={props:{source:{type:String},alt:{type:String},animated:{type:Boolean,default:!1},mode:{type:String},isMobile:{type:Boolean}},data:function(){return{loaded:[]}},computed:{imgSrc:function(){return this.source},imgAlt:function(){return this.alt}},methods:{isLoaded:function(e){return this.loaded.includes(e)},pushToLoaded:function(e){this.loaded.push(e)}}},o=(r(354),r(9)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.animated?n("div",{staticClass:"grid-element",class:{loaded:e.isLoaded(e.imgSrc)||e.isLoaded(e.imgAlt),xv:"portrait"===e.mode,xl:"big"===e.mode}},[e.isMobile?n("img",{attrs:{src:r(351)("./"+e.imgAlt)},on:{load:function(t){return e.pushToLoaded(e.imgAlt)}}}):n("video",{staticClass:"grid-video",attrs:{autoplay:"true",muted:"true",loop:"true"},domProps:{muted:!0},on:{canplay:function(t){return e.pushToLoaded(e.imgSrc)}}},[n("source",{attrs:{src:r(351)("./"+e.imgSrc)}})])]):n("div",{staticClass:"grid-element",class:{loaded:e.isLoaded(e.imgSrc),xv:"portrait"===e.mode,xl:"big"===e.mode}},[n("img",{attrs:{src:r(351)("./"+e.imgSrc)},on:{load:function(t){return e.pushToLoaded(e.imgSrc)}}})])}),[],!1,null,"46486a33",null);t.a=component.exports},363:function(e,t,r){var content=r(374);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(36).default)("7e0f98e2",content,!0,{sourceMap:!1})},364:function(e,t,r){var content=r(376);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(36).default)("2e107364",content,!0,{sourceMap:!1})},373:function(e,t,r){"use strict";r(363)},374:function(e,t,r){var n=r(35)(!1);n.push([e.i,'.grid-container[data-v-4370b010]{display:flex;padding-top:300px;flex-wrap:wrap;margin-left:0;height:auto;width:100%;flex-direction:row}@media(min-device-width:769px){.grid-container[data-v-4370b010]{flex-direction:column;height:100vh;width:-webkit-max-content;width:-moz-max-content;width:max-content;padding-top:0}}.grid-element-empty[data-v-4370b010]{display:none;justify-content:center;align-items:center;font-family:"Fraunces",serif;font-weight:lighter}@media(min-device-width:769px){.grid-element-empty[data-v-4370b010]{display:flex;width:calc(33.33333vh - 5.66667px);height:calc(33.33333vh - 5.66667px)}}.grid-big[data-v-4370b010]{flex-direction:column}.grid-big[data-v-4370b010],.grid-big>div[data-v-4370b010]{display:flex}',""]),e.exports=n},375:function(e,t,r){"use strict";r(364)},376:function(e,t,r){var n=r(35)(!1);n.push([e.i,"html body{background-color:#f8f8ff}",""]),e.exports=n},378:function(e,t,r){"use strict";r.r(t);var n=r(1),o=(r(27),r(18),r(22),r(33),r(34),r(10)),c=r(353),d=r.n(c),l=r(19),f=r(358);r(356);function m(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var h=n.a.extend({components:{HorizontalScroll:d.a,Cover:f.a},data:function(){return{mobile:!1}},mounted:function(){this.$store.commit("setSidebar",""),this.$emit("grid",this.$refs.grid),this.mobile=window.screen.width<=768,this.setActivePage("side-a")},beforeDestroy:function(){this.setActivePage("")},methods:v(v({},Object(l.b)(["setSideBar","setActivePage"])),{},{setActivePage:function(e){this.$store.commit("setActivePage",e)}}),computed:{sidebarClass:function(){return this.$store.state.sidebar},isMobile:function(){return this.mobile}}}),_=(r(373),r(9)),w=Object(_.a)(h,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r(e.isMobile?"div":"HorizontalScroll",{tag:"component",staticClass:"grid-wrapper",class:e.sidebarClass},[r("div",{ref:"grid",staticClass:"grid-container"},[r("div",{staticClass:"grid-element-empty"}),e._v(" "),r("nuxt-link",{attrs:{to:"/side-a/pedras"}},[r("Cover",{attrs:{isMobile:e.isMobile,source:"pedras.webm",animated:!0,mode:"portrait",alt:"pedras_still.png"}})],1),e._v(" "),r("div",{staticClass:"grid-element-empty"}),e._v(" "),r("nuxt-link",{attrs:{to:"/side-a/o-segredo-das-relacoes"}},[r("Cover",{attrs:{isMobile:e.isMobile,source:"CERAS.png"}})],1),e._v(" "),r("nuxt-link",{attrs:{to:"/side-a/tofa"}},[r("Cover",{attrs:{isMobile:e.isMobile,source:"capa_tofa.jpg"}})],1),e._v(" "),e.isMobile?e._e():r("div",{staticClass:"grid-big"},[r("nuxt-link",{attrs:{to:"/side-a/reprogramar-a-manha"}},[r("Cover",{attrs:{isMobile:e.isMobile,source:"acordarcedo.webm",animated:!0,alt:"acordarcedo.gif",mode:"big"}})],1),e._v(" "),r("div",[r("nuxt-link",{attrs:{to:"/side-a/mesas-para-todos-os-gostos"}},[r("Cover",{attrs:{isMobile:e.isMobile,source:"mesas.png"}})],1),e._v(" "),r("nuxt-link",{attrs:{to:"/side-a/smart"}},[r("Cover",{attrs:{isMobile:e.isMobile,source:"smarta_capa.jpg"}})],1)],1)],1),e._v(" "),e.isMobile?r("nuxt-link",{attrs:{to:"/side-a/reprogramar-a-manha"}},[r("Cover",{attrs:{isMobile:e.isMobile,source:"acordarcedo.webm",animated:!0,alt:"acordarcedo.gif"}})],1):e._e(),e._v(" "),e.isMobile?r("nuxt-link",{attrs:{to:"/side-a/mesas-para-todos-os-gostos"}},[r("Cover",{attrs:{isMobile:e.isMobile,source:"mesas.png"}})],1):e._e(),e._v(" "),e.isMobile?r("nuxt-link",{attrs:{to:"/side-a/smart"}},[r("Cover",{attrs:{isMobile:e.isMobile,source:"smarta_capa.jpg"}})],1):e._e(),e._v(" "),r("nuxt-link",{attrs:{to:"/side-a/desafio-da-poupanca"}},[r("Cover",{attrs:{isMobile:e.isMobile,source:"porcos.webm",animated:!0,alt:"porcos.gif"}})],1),e._v(" "),r("nuxt-link",{attrs:{to:"/side-a/print"}},[r("Cover",{attrs:{isMobile:e.isMobile,source:"CAPA_SANDEMAN.jpg",mode:"portrait"}})],1),e._v(" "),r("nuxt-link",{attrs:{to:"/side-a/conversa-de-chat"}},[r("Cover",{attrs:{isMobile:e.isMobile,source:"CAPA2.jpg"}})],1),e._v(" "),r("nuxt-link",{attrs:{to:"/side-a/coisas-de-miudos"}},[r("Cover",{attrs:{isMobile:e.isMobile,source:"kidz.webm",animated:!0,alt:"kidz.gif"}})],1)],1)])}),[],!1,null,"4370b010",null).exports,x=n.a.extend({components:{GridView:w},props:{sidebar:{type:String}},head:function(){return{title:"Andreia Luísa - Side-A"}}}),y=(r(375),Object(_.a)(x,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"body-wrapper"},[t("GridView")],1)}),[],!1,null,null,null));t.default=y.exports}}]);