(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{193:function(t,e,n){var content=n(196);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(34).default)("5c9b8714",content,!0,{sourceMap:!1})},194:function(t,e,n){"use strict";var r=n(2),o=n(35).findIndex,c=n(88),d=n(15),m=!0,h=d("findIndex");"findIndex"in[]&&Array(1).findIndex((function(){m=!1})),r({target:"Array",proto:!0,forced:m||!h},{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),c("findIndex")},195:function(t,e,n){"use strict";n(193)},196:function(t,e,n){(e=n(33)(!1)).push([t.i,'.pagination-wrapper[data-v-4a479668]{padding-top:40px;padding-bottom:80px;margin-left:100px;margin-right:100px;width:auto}@media(min-device-width:769px){.pagination-wrapper[data-v-4a479668]{padding:40px 0}}.pagination-wrapper .pagination-content[data-v-4a479668]{display:flex;justify-content:space-between;max-width:500px;margin:0 auto}.pagination-wrapper .pagination-content a[data-v-4a479668]{font-weight:400;position:relative;font-size:32px}@media(min-device-width:769px){.pagination-wrapper .pagination-content a[data-v-4a479668]{font-weight:lighter;font-size:16px}}.pagination-wrapper .pagination-content .prev-proj[data-v-4a479668]:before{content:"";position:absolute;border-left:3px solid #000;border-top:3px solid #000;transform:rotate(-45deg);height:15px;width:15px;right:100%;top:10px;margin-right:10px}@media(min-device-width:769px){.pagination-wrapper .pagination-content .prev-proj[data-v-4a479668]:before{border-width:1px;height:8px;width:8px;top:5px}}.pagination-wrapper .pagination-content .next-proj[data-v-4a479668]:after{content:"";position:absolute;border-right:3px solid #000;border-top:3px solid #000;margin-left:10px;transform:rotate(45deg);height:15px;width:15px;left:100%;top:10px}@media(min-device-width:769px){.pagination-wrapper .pagination-content .next-proj[data-v-4a479668]:after{border-width:1px;height:8px;width:8px;top:5px}}',""]),t.exports=e},197:function(t,e,n){"use strict";n(194),n(36),n(37),n(89);var r=n(1).a.extend({mixins:[{computed:{routes:function(){return[{name:"Home",path:"/"},{name:"Pedras",path:"/work/pedras"},{name:"Acordar com gosto",path:"/work/acordar-com-gosto"},{name:"Winona",path:"/work/winona"},{name:"Reprogramar a Manha",path:"/work/reprogramar-a-manha"},{name:"Mesas para todos os gosto",path:"/work/mesas-para-todos-os-gostos"},{name:"Amor Rafeiro",path:"/work/amor-rafeiro"},{name:"O segredo das relações duradouras",path:"/work/o-segredo-das-relacoes"},{name:"Drive code",path:"/work/drive-code"},{name:"Desafio da Poupança",path:"/work/desafio-da-poupanca"},{name:"Have a drink",path:"/work/have-a-drink"},{name:"Um mundo sem cem",path:"/work/um-mundo-sem-cem"},{name:"Coisas de miúdos",path:"/work/coisas-de-miudos"},{name:"Conversa de chat",path:"/work/conversa-de-chat"},{name:"Tofa",path:"/work/tofa"},{name:"smart",path:"/work/smart"},{name:"Mais cabo verde",path:"/work/mais-cabo-verde"},{name:"Seja o herói",path:"/work/seja-o-heroi"},{name:"Home",path:"/"}]}}}],data:function(){return{currentUrl:"",nextUrl:{},prevUrl:{}}},props:{next:{type:Object},prev:{type:Object}},created:function(){var t=this;this.currentUrl=this.$route.name.split("-")[1];var e=this.routes.findIndex((function(e){return e.path===t.$route.path}));this.prevUrl=e>0?this.routes[e-1]:{},e===this.routes.length-1?this.nextUrl={}:this.nextUrl=this.routes[e+1]}}),o=(n(195),n(11)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pagination-wrapper"},[n("div",{staticClass:"pagination-content"},[n("nuxt-link",{staticClass:"prev-proj",attrs:{to:t.prevUrl.path}},[t._v(t._s(t.prevUrl.name))]),t._v(" "),n("nuxt-link",{staticClass:"next-proj",attrs:{to:t.nextUrl.path}},[t._v(t._s(t.nextUrl.name))])],1)])}),[],!1,null,"4a479668",null);e.a=component.exports},219:function(t,e,n){t.exports=n.p+"img/print-sb.92104d1.png"},220:function(t,e,n){t.exports=n.p+"img/print-pd.c46d337.png"},221:function(t,e,n){t.exports=n.p+"img/printc1a.0950fad.png"},222:function(t,e,n){t.exports=n.p+"img/printc1.f89bf9b.png"},223:function(t,e,n){t.exports=n.p+"img/printc1b.e3f15ff.png"},224:function(t,e,n){t.exports=n.p+"img/sandeman1c.3e21fe7.png"},286:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content-minus-pag"},[r("div",{staticClass:"title-section"},[r("h1",{staticClass:"title"},[t._v("Super Bock "),r("br"),t._v(" Pingo Doce "),r("br"),t._v(" Sandeman ")]),t._v(" "),r("h2",{staticClass:"subtitle"},[t._v("Print.")])]),t._v(" "),r("div",{staticClass:"project-content"},[r("p",{staticClass:"credits"},[t._v("Print and outdoor campaigns")]),t._v(" "),r("p",[t._v("Drinks on the house.")]),t._v(" "),r("div",[r("img",{staticClass:"media",attrs:{src:n(219)}}),t._v(" "),r("img",{staticClass:"media",attrs:{src:n(220)}}),t._v(" "),r("img",{staticClass:"media",attrs:{src:n(221)}}),t._v(" "),r("img",{staticClass:"media",attrs:{src:n(222)}}),t._v(" "),r("img",{staticClass:"media",attrs:{src:n(223)}}),t._v(" "),r("img",{staticClass:"media",attrs:{src:n(224)}})]),t._v(" "),r("p",{staticClass:"credits"},[r("b",[t._v("BBDO")]),t._v(" C: Andreia Luísa A.D: António Belchior, Hugo Carvalheiro C.D: Marco Pacheco, Hugo Carvalheiro")])])])}],o=n(21),c=n(1),d=n(16),m=n(197);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=c.a.extend({components:{Pagination:m.a},data:function(){return{lang:"en"}},mounted:function(){this.$store.commit("setSidebar","open-grid")},methods:l(l({},Object(d.b)(["setSideBar"])),{},{setLang:function(t){this.lang=t}})}),v=n(11),component=Object(v.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"project-wrapper"},[this._m(0),this._v(" "),e("Pagination")],1)}),r,!1,null,null,null);e.default=component.exports}}]);