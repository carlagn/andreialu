(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{362:function(t,e,n){var content=n(368);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("7787a1f1",content,!0,{sourceMap:!1})},363:function(t,e,n){"use strict";var r=n(6),o=n(364)(6),c="findIndex",d=!0;c in[]&&Array(1)[c]((function(){d=!1})),r(r.P+r.F*d,"Array",{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),n(76)(c)},364:function(t,e,n){var r=n(28),o=n(75),c=n(29),d=n(24),h=n(365);t.exports=function(t,e){var n=1==t,l=2==t,m=3==t,f=4==t,v=6==t,w=5==t||v,x=e||h;return function(e,h,_){for(var y,j,k=c(e),O=o(k),C=r(h,_,3),P=d(O.length),U=0,D=n?x(e,P):l?x(e,0):void 0;P>U;U++)if((w||U in O)&&(j=C(y=O[U],U,k),t))if(n)D[U]=j;else if(j)switch(t){case 3:return!0;case 5:return y;case 6:return U;case 2:D.push(y)}else if(f)return!1;return v?-1:m||f?f:D}}},365:function(t,e,n){var r=n(366);t.exports=function(t,e){return new(r(t))(e)}},366:function(t,e,n){var r=n(11),o=n(113),c=n(3)("species");t.exports=function(t){var e;return o(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!o(e.prototype)||(e=void 0),r(e)&&null===(e=e[c])&&(e=void 0)),void 0===e?Array:e}},367:function(t,e,n){"use strict";n(362)},368:function(t,e,n){(e=n(22)(!1)).push([t.i,'.pagination-wrapper[data-v-4a36a4e6]{padding-top:40px;padding-bottom:80px;margin-left:100px;margin-right:100px;width:auto}@media(min-device-width:769px){.pagination-wrapper[data-v-4a36a4e6]{padding:40px 0}}.pagination-wrapper .pagination-content[data-v-4a36a4e6]{display:flex;justify-content:space-between;max-width:500px;margin:0 auto}.pagination-wrapper .pagination-content a[data-v-4a36a4e6]{font-weight:400;position:relative;font-size:32px}@media(min-device-width:769px){.pagination-wrapper .pagination-content a[data-v-4a36a4e6]{font-weight:lighter;font-size:16px}}.pagination-wrapper .pagination-content .prev-proj[data-v-4a36a4e6]:before{content:"";position:absolute;border-left:3px solid #000;border-top:3px solid #000;transform:rotate(-45deg);height:15px;width:15px;right:100%;top:10px;margin-right:10px}@media(min-device-width:769px){.pagination-wrapper .pagination-content .prev-proj[data-v-4a36a4e6]:before{border-width:1px;height:8px;width:8px;top:5px}}.pagination-wrapper .pagination-content .next-proj[data-v-4a36a4e6]:after{content:"";position:absolute;border-right:3px solid #000;border-top:3px solid #000;margin-left:10px;transform:rotate(45deg);height:15px;width:15px;left:100%;top:10px}@media(min-device-width:769px){.pagination-wrapper .pagination-content .next-proj[data-v-4a36a4e6]:after{border-width:1px;height:8px;width:8px;top:5px}}',""]),t.exports=e},369:function(t,e,n){"use strict";n(363),n(30),n(77);var r=n(1).a.extend({mixins:[{computed:{routes:function(){return[{name:"Home",path:"/"},{name:"Pedras",path:"/work/pedras"},{name:"Acordar com gosto",path:"/work/acordar-com-gosto"},{name:"Winona",path:"/work/winona"},{name:"Reprogramar a manhã",path:"/work/reprogramar-a-manha"},{name:"Mesas para todos os gosto",path:"/work/mesas-para-todos-os-gostos"},{name:"Amor Rafeiro",path:"/work/amor-rafeiro"},{name:"O segredo das relações duradouras",path:"/work/o-segredo-das-relacoes"},{name:"Drive code",path:"/work/drive-code"},{name:"Desafio da poupança",path:"/work/desafio-da-poupanca"},{name:"Have a drink",path:"/work/have-a-drink"},{name:"Um mundo sem cem",path:"/work/um-mundo-sem-cem"},{name:"Coisas de miúdos",path:"/work/coisas-de-miudos"},{name:"Conversa de chat",path:"/work/conversa-de-chat"},{name:"Tofa",path:"/work/tofa"},{name:"smart",path:"/work/smart"},{name:"Mais Cabo Verde",path:"/work/mais-cabo-verde"},{name:"Seja o herói",path:"/work/seja-o-heroi"},{name:"Home",path:"/"}]}}}],data:function(){return{currentUrl:"",nextUrl:{},prevUrl:{}}},created:function(){var t=this;this.currentUrl=this.$route.name.split("-")[1];var e=this.routes.findIndex((function(e){return e.path===t.$route.path}));this.prevUrl=e>0?this.routes[e-1]:{},e===this.routes.length-1?this.nextUrl={}:this.nextUrl=this.routes[e+1]}}),o=(n(367),n(8)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pagination-wrapper"},[n("div",{staticClass:"pagination-content"},[n("nuxt-link",{staticClass:"prev-proj",attrs:{to:t.prevUrl.path}},[t._v(t._s(t.prevUrl.name))]),t._v(" "),n("nuxt-link",{staticClass:"next-proj",attrs:{to:t.nextUrl.path}},[t._v(t._s(t.nextUrl.name))])],1)])}),[],!1,null,"4a36a4e6",null);e.a=component.exports},398:function(t,e,n){"use strict";n.r(e);n(47),n(20),n(21),n(9),n(36);var r=n(16),o=n(1),c=n(14),d=n(369);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m=o.a.extend({components:{Pagination:d.a},data:function(){return{lang:"en"}},mounted:function(){this.$store.commit("setSidebar","open-grid")},methods:l(l({},Object(c.b)(["setSideBar"])),{},{setLang:function(t){this.lang=t}})}),f=n(8),component=Object(f.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"project-wrapper"},[n("div",{staticClass:"content-minus-pag"},[t._m(0),t._v(" "),n("div",{staticClass:"project-content"},[n("p",{staticClass:"credits"},[t._v("Film campaign")]),t._v(" "),n("p",[t._v("Piggy and Ziggy are the pigs that teach children how to save money. Besides naming the 2 little pigs, we made a Saving Challenge for the Junior Savings account where the pigs were the MC’s.")]),t._v(" "),"en"===t.lang?n("div",{staticStyle:{padding:"56.25% 0 0 0",position:"relative"}},[n("iframe",{staticStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},attrs:{src:"https://www.youtube.com/embed/0zBT8H_DilI",frameborder:"0",allow:"fullscreen",allowfullscreen:""}})]):t._e(),t._v(" "),t._m(1)])]),t._v(" "),n("Pagination"),t._v(" "),n("footer")],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title-section"},[e("h1",{staticClass:"title"},[this._v("Novo Banco")]),this._v(" "),e("h2",{staticClass:"subtitle"},[this._v("Piggy & Ziggy "),e("br"),this._v(" Desafio da Poupança.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"credits"},[e("b",[this._v("BBDO")]),this._v(" C: Andreia Luísa A.D: António Belchior C.D: Marco Pacheco")])}],!1,null,null,null);e.default=component.exports}}]);