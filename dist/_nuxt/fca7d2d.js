(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{260:function(t,e,r){var content=r(266);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(36).default)("7787a1f1",content,!0,{sourceMap:!1})},261:function(t,e,r){"use strict";var o=r(6),n=r(262)(6),c="findIndex",d=!0;c in[]&&Array(1)[c]((function(){d=!1})),o(o.P+o.F*d,"Array",{findIndex:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),r(76)(c)},262:function(t,e,r){var o=r(26),n=r(75),c=r(27),d=r(22),l=r(263);t.exports=function(t,e){var r=1==t,h=2==t,v=3==t,m=4==t,f=6==t,w=5==t||f,x=e||l;return function(e,l,y){for(var _,k,j=c(e),O=n(j),P=o(l,y,3),C=d(O.length),S=0,D=r?x(e,C):h?x(e,0):void 0;C>S;S++)if((w||S in O)&&(k=P(_=O[S],S,j),t))if(r)D[S]=k;else if(k)switch(t){case 3:return!0;case 5:return _;case 6:return S;case 2:D.push(_)}else if(m)return!1;return f?-1:v||m?m:D}}},263:function(t,e,r){var o=r(264);t.exports=function(t,e){return new(o(t))(e)}},264:function(t,e,r){var o=r(11),n=r(112),c=r(3)("species");t.exports=function(t){var e;return n(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!n(e.prototype)||(e=void 0),o(e)&&null===(e=e[c])&&(e=void 0)),void 0===e?Array:e}},265:function(t,e,r){"use strict";r(260)},266:function(t,e,r){(e=r(35)(!1)).push([t.i,'.pagination-wrapper[data-v-4a36a4e6]{padding-top:40px;padding-bottom:80px;margin-left:100px;margin-right:100px;width:auto}@media(min-device-width:769px){.pagination-wrapper[data-v-4a36a4e6]{padding:40px 0}}.pagination-wrapper .pagination-content[data-v-4a36a4e6]{display:flex;justify-content:space-between;max-width:500px;margin:0 auto}.pagination-wrapper .pagination-content a[data-v-4a36a4e6]{font-weight:400;position:relative;font-size:32px}@media(min-device-width:769px){.pagination-wrapper .pagination-content a[data-v-4a36a4e6]{font-weight:lighter;font-size:16px}}.pagination-wrapper .pagination-content .prev-proj[data-v-4a36a4e6]:before{content:"";position:absolute;border-left:3px solid #000;border-top:3px solid #000;transform:rotate(-45deg);height:15px;width:15px;right:100%;top:10px;margin-right:10px}@media(min-device-width:769px){.pagination-wrapper .pagination-content .prev-proj[data-v-4a36a4e6]:before{border-width:1px;height:8px;width:8px;top:5px}}.pagination-wrapper .pagination-content .next-proj[data-v-4a36a4e6]:after{content:"";position:absolute;border-right:3px solid #000;border-top:3px solid #000;margin-left:10px;transform:rotate(45deg);height:15px;width:15px;left:100%;top:10px}@media(min-device-width:769px){.pagination-wrapper .pagination-content .next-proj[data-v-4a36a4e6]:after{border-width:1px;height:8px;width:8px;top:5px}}',""]),t.exports=e},267:function(t,e,r){"use strict";r(261),r(28),r(77);var o=r(1).a.extend({mixins:[{computed:{routes:function(){return[{name:"Home",path:"/"},{name:"Pedras",path:"/work/pedras"},{name:"Acordar com gosto",path:"/work/acordar-com-gosto"},{name:"Winona",path:"/work/winona"},{name:"Reprogramar a Manha",path:"/work/reprogramar-a-manha"},{name:"Mesas para todos os gosto",path:"/work/mesas-para-todos-os-gostos"},{name:"Amor Rafeiro",path:"/work/amor-rafeiro"},{name:"O segredo das relações duradouras",path:"/work/o-segredo-das-relacoes"},{name:"Drive code",path:"/work/drive-code"},{name:"Desafio da Poupança",path:"/work/desafio-da-poupanca"},{name:"Have a drink",path:"/work/have-a-drink"},{name:"Um mundo sem cem",path:"/work/um-mundo-sem-cem"},{name:"Coisas de miúdos",path:"/work/coisas-de-miudos"},{name:"Conversa de chat",path:"/work/conversa-de-chat"},{name:"Tofa",path:"/work/tofa"},{name:"smart",path:"/work/smart"},{name:"Mais cabo verde",path:"/work/mais-cabo-verde"},{name:"Seja o herói",path:"/work/seja-o-heroi"},{name:"Home",path:"/"}]}}}],data:function(){return{currentUrl:"",nextUrl:{},prevUrl:{}}},created:function(){var t=this;this.currentUrl=this.$route.name.split("-")[1];var e=this.routes.findIndex((function(e){return e.path===t.$route.path}));this.prevUrl=e>0?this.routes[e-1]:{},e===this.routes.length-1?this.nextUrl={}:this.nextUrl=this.routes[e+1]}}),n=(r(265),r(10)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"pagination-wrapper"},[r("div",{staticClass:"pagination-content"},[r("nuxt-link",{staticClass:"prev-proj",attrs:{to:t.prevUrl.path}},[t._v(t._s(t.prevUrl.name))]),t._v(" "),r("nuxt-link",{staticClass:"next-proj",attrs:{to:t.nextUrl.path}},[t._v(t._s(t.nextUrl.name))])],1)])}),[],!1,null,"4a36a4e6",null);e.a=component.exports},294:function(t,e,r){"use strict";r.r(e);var o=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"content-minus-pag"},[o("div",{staticClass:"title-section"},[o("h1",{staticClass:"title"},[t._v("Pedras")]),t._v(" "),o("h2",{staticClass:"subtitle"},[t._v("A natureza tem muitas cores.")])]),t._v(" "),o("div",{staticClass:"project-content"},[o("p",[t._v('Green is the color of nature. It is also the color of Água das Pedras, which makes sense for a sparkling water that is 100% natural. In order to strenghten the signature "Deixa o melhor de ti vir ao de cima" we did an ascending movie, from the fountain to the bottle.')]),t._v(" "),o("div",{staticStyle:{padding:"56.25% 0 0 0",position:"relative"}},[o("iframe",{staticStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},attrs:{src:"https://player.vimeo.com/video/224472530?title=0&byline=0&portrait=0",frameborder:"0",allow:"fullscreen",allowfullscreen:""}})]),t._v(" "),o("p",[t._v('But there are more colors to nature than green. Like yellow, pink or red, the colors of Pedras Sabores. We served a fresh cocktail in the shape of an ad with the claim "Descobre as outras cores da natureza".')]),t._v(" "),o("div",{staticStyle:{padding:"56.25% 0 0 0",position:"relative"}},[o("iframe",{staticStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},attrs:{src:"https://player.vimeo.com/video/219110949?title=0&byline=0&portrait=0",frameborder:"0",allow:"fullscreen",allowfullscreen:""}})]),t._v(" "),o("p",[t._v("And because nature gives us Pedras, we decided to give back to nature at dardevolta.pt/a-natureza/")]),t._v(" "),o("div",{staticStyle:{padding:"56.25% 0 0 0",position:"relative"}},[o("iframe",{staticStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},attrs:{src:"https://player.vimeo.com/video/392483268?title=0&byline=0&portrait=0",frameborder:"0",allow:"fullscreen",allowfullscreen:""}})]),t._v(" "),o("p",[t._v("Pedras & coffe, good combinations.")]),t._v(" "),o("div",[o("img",{staticClass:"media",attrs:{src:r(145)}})]),t._v(" "),o("p",{staticClass:"credits"},[o("b",[t._v("BBDO")]),t._v(" C: Andreia Luísa A.D: António Belchior C.D: Marco Pacheco and Rui Silva Directors: Frederico Miranda and Luciano Ottani")])])])}],n=(r(47),r(20),r(21),r(8),r(34),r(16)),c=r(1),d=r(14),l=r(267);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var v=c.a.extend({components:{Pagination:l.a},mounted:function(){this.$store.commit("setSidebar","open-grid")},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(d.b)(["setSideBar"]))}),m=r(10),component=Object(m.a)(v,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"project-wrapper"},[this._m(0),this._v(" "),e("Pagination")],1)}),o,!1,null,null,null);e.default=component.exports}}]);