(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{274:function(t,e,r){var map={"./AMOR_CAPA.png":121,"./CAPA2.jpg":122,"./CAPA_SANDEMAN.jpg":123,"./CERAS.png":124,"./aspirina.png":125,"./capa_tofa.jpg":126,"./drive.png":127,"./kidz.gif":128,"./kidz.webm":115,"./mcmuffin.png":129,"./mesas.png":130,"./mobile/capa_MCDONALDS.png":131,"./mobile/capa_PD.png":132,"./mobile/capa_PORCOS.png":133,"./mobile/capa_pedras.png":134,"./mobile/capa_print.png":135,"./pedras.gif":136,"./pedras.webm":116,"./pedras_still.png":137,"./porcos.gif":138,"./porcos.webm":117,"./pub.png":139,"./robot.gif":140,"./robot.webm":118,"./smarta_capa.jpg":141,"./unitel.png":142,"./winona_CAPA.png":143};function n(t){var e=o(t);return r(e)}function o(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=o,t.exports=n,n.id=274},275:function(t,e,r){var content=r(284);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(27).default)("49c31d18",content,!0,{sourceMap:!1})},276:function(t,e,r){var content=r(289);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(27).default)("64f9a59c",content,!0,{sourceMap:!1})},277:function(t,e,r){var content=r(291);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(27).default)("2e107364",content,!0,{sourceMap:!1})},282:function(t,e,r){t.exports=function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(object,t){return Object.prototype.hasOwnProperty.call(object,t)},r.p="",r(r.s="fb15")}({"183d":function(t,e,r){},"46c2":function(t,e,r){"use strict";(function(t){r.d(e,"b",(function(){return o}));var n=r("5e0b");function o(t){o.installed||(o.installed=!0,t.component("HorizontalScroll",n.a))}var c={install:o},d=null;"undefined"!=typeof window?d=window.Vue:void 0!==t&&(d=t.Vue),d&&d.use(c),e.a=n.a}).call(this,r("c8ba"))},"5e0b":function(t,e,r){"use strict";var n={mounted:function(){var content=this.$el;content.addEventListener&&content.addEventListener("DOMMouseScroll",(function(t){content.scrollBy(-t.wheelDelta,0)}),!1),content.attachEvent&&content.attachEvent("onmousewheel",(function(t){content.scrollBy(-t.wheelDelta,0)})),content.onmousewheel=function(t){content.scrollBy(-t.wheelDelta,0)}}};r("fb89");var component=function(t,e,r,n,o,c,d,l){var f,m="function"==typeof t?t.options:t;if(e&&(m.render=e,m.staticRenderFns=r,m._compiled=!0),n&&(m.functional=!0),c&&(m._scopeId="data-v-"+c),d?(f=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(d)},m._ssrRegister=f):o&&(f=l?function(){o.call(this,this.$root.$options.shadowRoot)}:o),f)if(m.functional){m._injectStyles=f;var v=m.render;m.render=function(t,e){return f.call(e),v(t,e)}}else{var h=m.beforeCreate;m.beforeCreate=h?[].concat(h,f):[f]}return{exports:t,options:m}}(n,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"_horizontal-scroll"},[this._t("default")],2)}),[],!1,null,"5ce095ec",null);e.a=component.exports},8875:function(t,e,r){var n,o,c;"undefined"!=typeof self&&self,o=[],void 0===(c="function"==typeof(n=function(){return function(){if(document.currentScript)return document.currentScript;try{throw new Error}catch(l){var t,e,r,n=/.*at [^(]*\((.*):(.+):(.+)\)$/gi.exec(l.stack)||/@([^@]*):(\d+):(\d+)\s*$/gi.exec(l.stack),o=n&&n[1]||!1,line=n&&n[2]||!1,c=document.location.href.replace(document.location.hash,""),d=document.getElementsByTagName("script");o===c&&(t=document.documentElement.outerHTML,e=new RegExp("(?:[^\\n]+?\\n){0,"+(line-2)+"}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*","i"),r=t.replace(e,"$1").trim());for(var i=0;i<d.length;i++){if("interactive"===d[i].readyState)return d[i];if(d[i].src===o)return d[i];if(o===c&&d[i].innerHTML&&d[i].innerHTML.trim()===r)return d[i]}return null}}})?n.apply(e,o):n)||(t.exports=c)},c8ba:function(t,e){var g;g=function(){return this}();try{g=g||new Function("return this")()}catch(t){"object"==typeof window&&(g=window)}t.exports=g},fb15:function(t,e,r){"use strict";if(r.r(e),r.d(e,"install",(function(){return d.b})),"undefined"!=typeof window){var n=window.document.currentScript,o=r("8875");n=o(),"currentScript"in document||Object.defineProperty(document,"currentScript",{get:o});var c=n&&n.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);c&&(r.p=c[1])}var d=r("46c2");e.default=d.a},fb89:function(t,e,r){"use strict";var n=r("183d");r.n(n).a}})},283:function(t,e,r){"use strict";r(275)},284:function(t,e,r){(e=r(26)(!1)).push([t.i,'.grid-element[data-v-2d2383f9]{transition:opacity .15s ease-in-out;width:50vw;height:500px;opacity:0}.grid-element.loaded[data-v-2d2383f9]{opacity:1}@media(min-device-width:769px){.grid-element[data-v-2d2383f9]{width:calc(33.33333vh - 5.66667px);height:calc(33.33333vh - 5.66667px)}.grid-element.xv[data-v-2d2383f9]{height:calc(66.66667vh - 11.33333px)}}.grid-element.xh[data-v-2d2383f9]{width:600px}.grid-element .grid-video[data-v-2d2383f9],.grid-element img[data-v-2d2383f9]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.grid-element.empty[data-v-2d2383f9]{display:none;justify-content:center;align-items:center;font-family:"Fraunces",serif;font-weight:lighter}@media(min-device-width:769px){.grid-element.empty[data-v-2d2383f9]{display:flex}}.grid-element .grid-video[data-v-2d2383f9]{display:none}@media(min-device-width:769px){.grid-element .grid-video[data-v-2d2383f9]{display:block}}.grid-element .grid-gif[data-v-2d2383f9]{display:block}@media(min-device-width:769px){.grid-element .grid-gif[data-v-2d2383f9]{display:none}}',""]),t.exports=e},285:function(t,e,r){var content=r(286);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(27).default)("63d070ac",content,!0,{sourceMap:!1})},286:function(t,e,r){(e=r(26)(!1)).push([t.i,"._horizontal-scroll[data-v-5ce095ec]{box-sizing:border-box;overflow-x:scroll;overflow-y:hidden;text-align:left;white-space:nowrap}",""]),t.exports=e},287:function(t,e,r){var map={"./kidz.webm":115,"./pedras.webm":116,"./porcos.webm":117,"./robot.webm":118};function n(t){var e=o(t);return r(e)}function o(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=o,t.exports=n,n.id=287},288:function(t,e,r){"use strict";r(276)},289:function(t,e,r){(e=r(26)(!1)).push([t.i,'.grid-container[data-v-04880a00]{display:flex;padding-top:300px;flex-wrap:wrap;margin-left:0;height:auto;flex-direction:row}@media(min-device-width:769px){.grid-container[data-v-04880a00]{flex-direction:column;height:calc(100vh - 17px);padding-top:0}}.grid-container .grid-element[data-v-04880a00]{width:50vw;height:500px}@media(min-device-width:769px){.grid-container .grid-element[data-v-04880a00]{width:calc(33.33333vh - 5.66667px);height:calc(33.33333vh - 5.66667px)}}@media(min-device-width:769px){.grid-container .grid-element.xv[data-v-04880a00]{height:calc(66.66667vh - 11.33333px)!important}}.grid-container .grid-element.empty[data-v-04880a00]{display:none;justify-content:center;align-items:center;font-family:"Fraunces",serif;font-weight:lighter}@media(min-device-width:769px){.grid-container .grid-element.empty[data-v-04880a00]{display:flex}}',""]),t.exports=e},290:function(t,e,r){"use strict";r(277)},291:function(t,e,r){(e=r(26)(!1)).push([t.i,"html body{background-color:#f8f8ff}",""]),t.exports=e},292:function(t,e,r){"use strict";r.r(e);var n=r(1),o=(r(47),r(20),r(21),r(9),r(36),r(16)),c=r(282),d=r.n(c),l=r(14),f=(r(48),r(49),{props:{source:{type:String,require:!0},alt:{type:String},animated:{type:Boolean,default:!1},mode:{type:String}},data:function(){return{loaded:[]}},computed:{imgSrc:function(){return this.source},imgAlt:function(){return this.alt}},methods:{isLoaded:function(t){return this.loaded.includes(t)},pushToLoaded:function(t){this.loaded.push(t)}}}),m=(r(283),r(8)),v=Object(m.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.animated?n("div",{staticClass:"grid-element",class:{loaded:t.isLoaded(t.imgSrc),xv:"portrait"===t.mode}},[t.isMobile?n("img",{attrs:{src:"~/assets/CAPAS/"+t.imgAlt}}):n("video",{staticClass:"grid-video",attrs:{autoplay:"true",muted:"true",loop:"true"},domProps:{muted:!0},on:{canplay:function(e){return t.pushToLoaded(t.imgSrc)}}},[n("source",{attrs:{src:r(274)("./"+t.imgSrc)}})])]):n("div",{staticClass:"grid-element",class:{loaded:t.isLoaded(t.imgSrc),xv:"portrait"===t.mode}},[n("img",{attrs:{src:r(274)("./"+t.imgSrc)},on:{load:function(e){return t.pushToLoaded(t.imgSrc)}}})])}),[],!1,null,"2d2383f9",null).exports;r(285);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function w(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var y=n.a.extend({components:{HorizontalScroll:d.a,Cover:v},data:function(){return{mobile:!1}},mounted:function(){this.$store.commit("setSidebar",""),this.$emit("grid",this.$refs.grid),this.mobile=window.screen.width<=768,this.setActivePage("work")},beforeDestroy:function(){this.setActivePage("")},methods:w(w({},Object(l.b)(["setSideBar","setActivePage"])),{},{isLoaded:function(t){return!0},pushToLoaded:function(t){return"h"},setActivePage:function(t){this.$store.commit("setActivePage",t)},getCover:function(t){var e=r(287)("./".concat(t,".webm"));return'<video class="grid-video" autoplay="true" muted="true" loop="true"><source src="'.concat(e,'" /></video>')}}),computed:{sidebarClass:function(){return this.$store.state.sidebar},isMobile:function(){return this.mobile}}}),x=(r(288),Object(m.a)(y,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r(t.isMobile?"div":"HorizontalScroll",{tag:"component",staticClass:"grid-wrapper",class:t.sidebarClass},[r("div",{ref:"grid",staticClass:"grid-container"},[r("div",{staticClass:"grid-element empty"}),t._v(" "),r("nuxt-link",{attrs:{to:"/work/pedras"}},[r("Cover",{attrs:{source:"pedras.webm",animated:!0,mode:"portrait",alt:"pedras_still.png"}})],1),t._v(" "),r("div",{staticClass:"grid-element empty"},[t._v("Hello :)")]),t._v(" "),r("nuxt-link",{attrs:{to:"/work/acordar-com-gosto"}},[r("Cover",{attrs:{source:"mcmuffin.png"}})],1),t._v(" "),r("nuxt-link",{attrs:{to:"/work/winona"}},[r("Cover",{attrs:{source:"winona_CAPA.png"}})],1),t._v(" "),r("nuxt-link",{attrs:{to:"/work/reprogramar-a-manha"}},[r("Cover",{attrs:{source:"robot.webm",animated:!0,alt:"robot.gif"}})],1),t._v(" "),r("nuxt-link",{attrs:{to:"/work/mesas-para-todos-os-gostos"}},[r("Cover",{attrs:{source:"mesas.png"}})],1),t._v(" "),r("nuxt-link",{attrs:{to:"/work/amor-rafeiro"}},[r("Cover",{attrs:{source:"AMOR_CAPA.png"}})],1),t._v(" "),r("nuxt-link",{attrs:{to:"/work/o-segredo-das-relacoes"}},[r("Cover",{attrs:{source:"CERAS.png"}})],1),t._v(" "),r("nuxt-link",{attrs:{to:"/work/drive-code"}},[r("Cover",{attrs:{source:"drive.png"}})],1),t._v(" "),r("nuxt-link",{attrs:{to:"/work/desafio-da-poupanca"}},[r("Cover",{attrs:{source:"porcos.webm",animated:!0,alt:"porcos.gif"}})],1),t._v(" "),r("nuxt-link",{attrs:{to:"/work/have-a-drink"}},[r("Cover",{attrs:{source:"CAPA_SANDEMAN.jpg",mode:"portrait"}})],1),t._v(" "),r("nuxt-link",{attrs:{to:"/work/um-mundo-sem-cem"}},[r("Cover",{attrs:{source:"pub.png"}})],1),t._v(" "),r("nuxt-link",{attrs:{to:"/work/coisas-de-miudos"}},[r("Cover",{attrs:{source:"kidz.webm",animated:!0,alt:"kidz.gif"}})],1),t._v(" "),r("nuxt-link",{attrs:{to:"/work/conversa-de-chat"}},[r("Cover",{attrs:{source:"CAPA2.jpg"}})],1),t._v(" "),r("nuxt-link",{attrs:{to:"/work/tofa"}},[r("Cover",{attrs:{source:"capa_tofa.jpg"}})],1),t._v(" "),r("nuxt-link",{attrs:{to:"/work/smart"}},[r("Cover",{attrs:{source:"smarta_capa.jpg"}})],1),t._v(" "),r("nuxt-link",{attrs:{to:"/work/mais-cabo-verde"}},[r("Cover",{attrs:{source:"unitel.png"}})],1),t._v(" "),r("nuxt-link",{attrs:{to:"/work/seja-o-heroi"}},[r("Cover",{attrs:{source:"aspirina.png"}})],1)],1)])}),[],!1,null,"04880a00",null).exports),_=n.a.extend({components:{GridView:x},props:{sidebar:{type:String}}}),k=(r(290),Object(m.a)(_,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"body-wrapper"},[e("GridView")],1)}),[],!1,null,null,null));e.default=k.exports}}]);