(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{193:function(t,e,r){var content=r(196);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(34).default)("5c9b8714",content,!0,{sourceMap:!1})},194:function(t,e,r){"use strict";var n=r(2),o=r(35).findIndex,c=r(88),d=r(15),l=!0,h=d("findIndex");"findIndex"in[]&&Array(1).findIndex((function(){l=!1})),n({target:"Array",proto:!0,forced:l||!h},{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),c("findIndex")},195:function(t,e,r){"use strict";r(193)},196:function(t,e,r){(e=r(33)(!1)).push([t.i,'.pagination-wrapper[data-v-4a479668]{padding-top:40px;padding-bottom:80px;margin-left:100px;margin-right:100px;width:auto}@media(min-device-width:769px){.pagination-wrapper[data-v-4a479668]{padding:40px 0}}.pagination-wrapper .pagination-content[data-v-4a479668]{display:flex;justify-content:space-between;max-width:500px;margin:0 auto}.pagination-wrapper .pagination-content a[data-v-4a479668]{font-weight:400;position:relative;font-size:32px}@media(min-device-width:769px){.pagination-wrapper .pagination-content a[data-v-4a479668]{font-weight:lighter;font-size:16px}}.pagination-wrapper .pagination-content .prev-proj[data-v-4a479668]:before{content:"";position:absolute;border-left:3px solid #000;border-top:3px solid #000;transform:rotate(-45deg);height:15px;width:15px;right:100%;top:10px;margin-right:10px}@media(min-device-width:769px){.pagination-wrapper .pagination-content .prev-proj[data-v-4a479668]:before{border-width:1px;height:8px;width:8px;top:5px}}.pagination-wrapper .pagination-content .next-proj[data-v-4a479668]:after{content:"";position:absolute;border-right:3px solid #000;border-top:3px solid #000;margin-left:10px;transform:rotate(45deg);height:15px;width:15px;left:100%;top:10px}@media(min-device-width:769px){.pagination-wrapper .pagination-content .next-proj[data-v-4a479668]:after{border-width:1px;height:8px;width:8px;top:5px}}',""]),t.exports=e},197:function(t,e,r){"use strict";r(194),r(36),r(37),r(89);var n=r(1).a.extend({mixins:[{computed:{routes:function(){return[{name:"Home",path:"/"},{name:"Pedras",path:"/work/pedras"},{name:"Acordar com gosto",path:"/work/acordar-com-gosto"},{name:"Winona",path:"/work/winona"},{name:"Reprogramar a Manha",path:"/work/reprogramar-a-manha"},{name:"Mesas para todos os gosto",path:"/work/mesas-para-todos-os-gostos"},{name:"Amor Rafeiro",path:"/work/amor-rafeiro"},{name:"O segredo das relações duradouras",path:"/work/o-segredo-das-relacoes"},{name:"Drive code",path:"/work/drive-code"},{name:"Desafio da Poupança",path:"/work/desafio-da-poupanca"},{name:"Have a drink",path:"/work/have-a-drink"},{name:"Um mundo sem cem",path:"/work/um-mundo-sem-cem"},{name:"Coisas de miúdos",path:"/work/coisas-de-miudos"},{name:"Conversa de chat",path:"/work/conversa-de-chat"},{name:"Tofa",path:"/work/tofa"},{name:"smart",path:"/work/smart"},{name:"Mais cabo verde",path:"/work/mais-cabo-verde"},{name:"Seja o herói",path:"/work/seja-o-heroi"},{name:"Home",path:"/"}]}}}],data:function(){return{currentUrl:"",nextUrl:{},prevUrl:{}}},props:{next:{type:Object},prev:{type:Object}},created:function(){var t=this;this.currentUrl=this.$route.name.split("-")[1];var e=this.routes.findIndex((function(e){return e.path===t.$route.path}));this.prevUrl=e>0?this.routes[e-1]:{},e===this.routes.length-1?this.nextUrl={}:this.nextUrl=this.routes[e+1]}}),o=(r(195),r(11)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"pagination-wrapper"},[r("div",{staticClass:"pagination-content"},[r("nuxt-link",{staticClass:"prev-proj",attrs:{to:t.prevUrl.path}},[t._v(t._s(t.prevUrl.name))]),t._v(" "),r("nuxt-link",{staticClass:"next-proj",attrs:{to:t.nextUrl.path}},[t._v(t._s(t.nextUrl.name))])],1)])}),[],!1,null,"4a479668",null);e.a=component.exports},289:function(t,e,r){"use strict";r.r(e);var n=r(21),o=r(1),c=r(16),d=r(197);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m=o.a.extend({components:{Pagination:d.a},data:function(){return{lang:"en"}},mounted:function(){this.$store.commit("setSidebar","open-grid")},methods:h(h({},Object(c.b)(["setSideBar"])),{},{setLang:function(t){this.lang=t}})}),f=r(11),component=Object(f.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"project-wrapper"},[r("div",{staticClass:"content-minus-pag"},[t._m(0),t._v(" "),r("div",{staticClass:"project-content"},[r("p",{staticClass:"credits"},[t._v("Film campaign")]),t._v(" "),t._m(1),t._v(" "),"en"===t.lang?r("div",{staticStyle:{padding:"56.25% 0 0 0",position:"relative"}},[r("iframe",{staticStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},attrs:{src:"https://www.youtube.com/embed/Ul3lvKBjjTM",frameborder:"0",allow:"fullscreen",allowfullscreen:""}})]):t._e(),t._v(" "),t._m(2)])]),t._v(" "),r("Pagination")],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title-section"},[e("h1",{staticClass:"title"},[this._v("Atelier Encaixe")]),this._v(" "),e("h2",{staticClass:"subtitle"},[this._v("O segredo das relações duradouras.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("How to sell beeswax? It's tricky. "),e("br"),this._v("Unless you sell it to people who love furniture that lasts for life. For those, this is not wax. "),e("br"),this._v(" This is the secret for long lasting relationships.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"credits"},[e("b",[this._v("Atelier Encaixe")]),this._v(" C.D: Andreia Luísa Director: Leonor Bettencourt Loureiro")])}],!1,null,null,null);e.default=component.exports}}]);