(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{263:function(t,e,r){var content=r(269);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(27).default)("7787a1f1",content,!0,{sourceMap:!1})},264:function(t,e,r){"use strict";var o=r(6),n=r(265)(6),c="findIndex",l=!0;c in[]&&Array(1)[c]((function(){l=!1})),o(o.P+o.F*l,"Array",{findIndex:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),r(76)(c)},265:function(t,e,r){var o=r(28),n=r(75),c=r(29),l=r(22),d=r(266);t.exports=function(t,e){var r=1==t,h=2==t,m=3==t,f=4==t,v=6==t,w=5==t||v,x=e||d;return function(e,d,y){for(var O,j,_=c(e),k=n(_),P=o(d,y,3),C=l(k.length),D=0,S=r?x(e,C):h?x(e,0):void 0;C>D;D++)if((w||D in k)&&(j=P(O=k[D],D,_),t))if(r)S[D]=j;else if(j)switch(t){case 3:return!0;case 5:return O;case 6:return D;case 2:S.push(O)}else if(f)return!1;return v?-1:m||f?f:S}}},266:function(t,e,r){var o=r(267);t.exports=function(t,e){return new(o(t))(e)}},267:function(t,e,r){var o=r(11),n=r(113),c=r(3)("species");t.exports=function(t){var e;return n(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!n(e.prototype)||(e=void 0),o(e)&&null===(e=e[c])&&(e=void 0)),void 0===e?Array:e}},268:function(t,e,r){"use strict";r(263)},269:function(t,e,r){(e=r(26)(!1)).push([t.i,'.pagination-wrapper[data-v-4a36a4e6]{padding-top:40px;padding-bottom:80px;margin-left:100px;margin-right:100px;width:auto}@media(min-device-width:769px){.pagination-wrapper[data-v-4a36a4e6]{padding:40px 0}}.pagination-wrapper .pagination-content[data-v-4a36a4e6]{display:flex;justify-content:space-between;max-width:500px;margin:0 auto}.pagination-wrapper .pagination-content a[data-v-4a36a4e6]{font-weight:400;position:relative;font-size:32px}@media(min-device-width:769px){.pagination-wrapper .pagination-content a[data-v-4a36a4e6]{font-weight:lighter;font-size:16px}}.pagination-wrapper .pagination-content .prev-proj[data-v-4a36a4e6]:before{content:"";position:absolute;border-left:3px solid #000;border-top:3px solid #000;transform:rotate(-45deg);height:15px;width:15px;right:100%;top:10px;margin-right:10px}@media(min-device-width:769px){.pagination-wrapper .pagination-content .prev-proj[data-v-4a36a4e6]:before{border-width:1px;height:8px;width:8px;top:5px}}.pagination-wrapper .pagination-content .next-proj[data-v-4a36a4e6]:after{content:"";position:absolute;border-right:3px solid #000;border-top:3px solid #000;margin-left:10px;transform:rotate(45deg);height:15px;width:15px;left:100%;top:10px}@media(min-device-width:769px){.pagination-wrapper .pagination-content .next-proj[data-v-4a36a4e6]:after{border-width:1px;height:8px;width:8px;top:5px}}',""]),t.exports=e},270:function(t,e,r){"use strict";r(264),r(30),r(77);var o=r(1).a.extend({mixins:[{computed:{routes:function(){return[{name:"Home",path:"/"},{name:"Pedras",path:"/work/pedras"},{name:"Acordar com gosto",path:"/work/acordar-com-gosto"},{name:"Winona",path:"/work/winona"},{name:"Reprogramar a manhã",path:"/work/reprogramar-a-manha"},{name:"Mesas para todos os gosto",path:"/work/mesas-para-todos-os-gostos"},{name:"Amor Rafeiro",path:"/work/amor-rafeiro"},{name:"O segredo das relações duradouras",path:"/work/o-segredo-das-relacoes"},{name:"Drive code",path:"/work/drive-code"},{name:"Desafio da poupança",path:"/work/desafio-da-poupanca"},{name:"Have a drink",path:"/work/have-a-drink"},{name:"Um mundo sem cem",path:"/work/um-mundo-sem-cem"},{name:"Coisas de miúdos",path:"/work/coisas-de-miudos"},{name:"Conversa de chat",path:"/work/conversa-de-chat"},{name:"Tofa",path:"/work/tofa"},{name:"smart",path:"/work/smart"},{name:"Mais Cabo Verde",path:"/work/mais-cabo-verde"},{name:"Seja o herói",path:"/work/seja-o-heroi"},{name:"Home",path:"/"}]}}}],data:function(){return{currentUrl:"",nextUrl:{},prevUrl:{}}},created:function(){var t=this;this.currentUrl=this.$route.name.split("-")[1];var e=this.routes.findIndex((function(e){return e.path===t.$route.path}));this.prevUrl=e>0?this.routes[e-1]:{},e===this.routes.length-1?this.nextUrl={}:this.nextUrl=this.routes[e+1]}}),n=(r(268),r(8)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"pagination-wrapper"},[r("div",{staticClass:"pagination-content"},[r("nuxt-link",{staticClass:"prev-proj",attrs:{to:t.prevUrl.path}},[t._v(t._s(t.prevUrl.name))]),t._v(" "),r("nuxt-link",{staticClass:"next-proj",attrs:{to:t.nextUrl.path}},[t._v(t._s(t.nextUrl.name))])],1)])}),[],!1,null,"4a36a4e6",null);e.a=component.exports},271:function(t,e,r){"use strict";r(47),r(20),r(21),r(9),r(36);var o=r(16),n=r(1),c=r(14);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h=n.a.extend({name:"Img",props:{source:{type:String},zoom:{type:Boolean,default:!1}},methods:d(d({},Object(c.b)(["setActiveZoom"])),{},{zoomIn:function(t){this.zoom&&this.$store.commit("setActiveZoom",t)}})}),m=r(8),component=Object(m.a)(h,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"pagination-wrapper"},[o("img",{staticClass:"media",style:{cursor:t.zoom?"pointer":"auto"},attrs:{src:r(114)("./"+t.source)},on:{click:function(e){return t.zoomIn(t.source)}}})])}),[],!1,null,null,null);e.a=component.exports},297:function(t,e,r){"use strict";r.r(e);r(47),r(20),r(21),r(9),r(36);var o=r(16),n=r(1),c=r(14),l=r(270),d=r(271);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=n.a.extend({components:{Pagination:l.a,Img:d.a},data:function(){return{lang:"en"}},mounted:function(){this.$store.commit("setSidebar","open-grid")},methods:m(m({},Object(c.b)(["setSideBar"])),{},{setLang:function(t){this.lang=t}})}),v=r(8),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"project-wrapper"},[r("div",{staticClass:"content-minus-pag"},[t._m(0),t._v(" "),r("div",{staticClass:"project-content"},[r("p",{staticClass:"credits"},[t._v("Film and radio campaigns")]),t._v(" "),r("h3",[t._v("Ler leva-nos mais longe/ Reading takes us farther.")]),t._v("\n            A child’s imagination has no limits. To show that, and to sell a collection of juvenile books, we invited Fernanda Serrano to interview a group of interviewees with a very fertile imagination."),r("p"),t._v(" "),"en"===t.lang?r("div",{staticStyle:{padding:"56.25% 0 0 0",position:"relative"}},[r("iframe",{staticStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},attrs:{src:"https://www.youtube.com/embed/3-_jkS2acOY",frameborder:"0",allow:"fullscreen",allowfullscreen:""}})]):t._e(),t._v(" "),"en"===t.lang?r("div",{staticStyle:{padding:"56.25% 0 0 0",position:"relative"}},[r("iframe",{staticStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},attrs:{src:"https://www.youtube.com/embed/T5CL-0npVWg",frameborder:"0",allow:"fullscreen",allowfullscreen:""}})]):t._e(),t._v(" "),r("p"),r("h3",[t._v("Bando do Bosque")]),t._v(" Bando do Bosque is a bunch of plush friends that anyone who shops at Pingo Doce can take home. They also have an adventure book. And are adorable. We invited them to go to the radio and tell the children about this brand new collection.\n            "),r("p"),t._v(" "),r("iframe",{attrs:{width:"100%",height:"100",scrolling:"no",frameborder:"no",allow:"autoplay",src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1188412042&color=%23272823&auto_play=false&hide_related=false&show_teaser=true"}}),t._v(" "),t._m(1)])]),t._v(" "),r("Pagination"),t._v(" "),r("footer")],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title-section"},[e("h1",{staticClass:"title"},[this._v("Pingo Doce")]),this._v(" "),e("h2",{staticClass:"subtitle"},[this._v("Coisas de miúdos.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"credits"},[e("b",[this._v("BBDO")]),this._v(" C: Andreia Luísa C.D: Marco Pacheco")])}],!1,null,null,null);e.default=component.exports}}]);