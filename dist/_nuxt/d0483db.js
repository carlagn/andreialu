(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{334:function(t,e,r){var content=r(340);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(27).default)("7787a1f1",content,!0,{sourceMap:!1})},335:function(t,e,r){"use strict";var n=r(6),o=r(336)(6),c="findIndex",d=!0;c in[]&&Array(1)[c]((function(){d=!1})),n(n.P+n.F*d,"Array",{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),r(76)(c)},336:function(t,e,r){var n=r(28),o=r(75),c=r(29),d=r(22),l=r(337);t.exports=function(t,e){var r=1==t,h=2==t,m=3==t,f=4==t,v=6==t,w=5==t||v,x=e||l;return function(e,l,_){for(var O,j,y=c(e),P=o(y),I=n(l,_,3),k=d(P.length),S=0,C=r?x(e,k):h?x(e,0):void 0;k>S;S++)if((w||S in P)&&(j=I(O=P[S],S,y),t))if(r)C[S]=j;else if(j)switch(t){case 3:return!0;case 5:return O;case 6:return S;case 2:C.push(O)}else if(f)return!1;return v?-1:m||f?f:C}}},337:function(t,e,r){var n=r(338);t.exports=function(t,e){return new(n(t))(e)}},338:function(t,e,r){var n=r(11),o=r(113),c=r(3)("species");t.exports=function(t){var e;return o(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!o(e.prototype)||(e=void 0),n(e)&&null===(e=e[c])&&(e=void 0)),void 0===e?Array:e}},339:function(t,e,r){"use strict";r(334)},340:function(t,e,r){(e=r(26)(!1)).push([t.i,'.pagination-wrapper[data-v-4a36a4e6]{padding-top:40px;padding-bottom:80px;margin-left:100px;margin-right:100px;width:auto}@media(min-device-width:769px){.pagination-wrapper[data-v-4a36a4e6]{padding:40px 0}}.pagination-wrapper .pagination-content[data-v-4a36a4e6]{display:flex;justify-content:space-between;max-width:500px;margin:0 auto}.pagination-wrapper .pagination-content a[data-v-4a36a4e6]{font-weight:400;position:relative;font-size:32px}@media(min-device-width:769px){.pagination-wrapper .pagination-content a[data-v-4a36a4e6]{font-weight:lighter;font-size:16px}}.pagination-wrapper .pagination-content .prev-proj[data-v-4a36a4e6]:before{content:"";position:absolute;border-left:3px solid #000;border-top:3px solid #000;transform:rotate(-45deg);height:15px;width:15px;right:100%;top:10px;margin-right:10px}@media(min-device-width:769px){.pagination-wrapper .pagination-content .prev-proj[data-v-4a36a4e6]:before{border-width:1px;height:8px;width:8px;top:5px}}.pagination-wrapper .pagination-content .next-proj[data-v-4a36a4e6]:after{content:"";position:absolute;border-right:3px solid #000;border-top:3px solid #000;margin-left:10px;transform:rotate(45deg);height:15px;width:15px;left:100%;top:10px}@media(min-device-width:769px){.pagination-wrapper .pagination-content .next-proj[data-v-4a36a4e6]:after{border-width:1px;height:8px;width:8px;top:5px}}',""]),t.exports=e},341:function(t,e,r){"use strict";r(335),r(30),r(77);var n=r(1).a.extend({mixins:[{computed:{routes:function(){return[{name:"Home",path:"/"},{name:"Pedras",path:"/work/pedras"},{name:"O Segredo das Relações Duradouras",path:"/work/o-segredo-das-relacoes"},{name:"Tofa",path:"/work/tofa"},{name:"Reprogramar a Manhã",path:"/work/reprogramar-a-manha"},{name:"Mesas para Todos os Gostos",path:"/work/mesas-para-todos-os-gostos"},{name:"smart",path:"/work/smart"},{name:"Desafio da Poupança",path:"/work/desafio-da-poupanca"},{name:"Print",path:"/work/print"},{name:"Conversa de Chat",path:"/work/conversa-de-chat"},{name:"Coisas de Miúdos",path:"/work/coisas-de-miudos"},{name:"Home",path:"/"},{name:"Side-B",path:"/side-b"},{name:"Skate",path:"/side-b/skate"},{name:"Hello",path:"/side-b/hello"},{name:"Bimba",path:"/side-b/bimba"},{name:"Fotopoema",path:"/side-b/fotopoema"},{name:"Noite Oráculo",path:"/side-b/noite-oraculo"},{name:"Winona",path:"/side-b/winona"},{name:"Um Horror de Licor",path:"/side-b/horror-de-licor"},{name:"Cowboy",path:"/side-b/cowboy"},{name:"Neon",path:"/side-b/neon"},{name:"Amor Rafeiro",path:"/side-b/amor-rafeiro"},{name:"Home",path:"/"}]}}}],data:function(){return{currentUrl:"",nextUrl:{},prevUrl:{}}},created:function(){var t=this;this.currentUrl=this.$route.name.split("-")[1];var e=this.routes.findIndex((function(e){return e.path===t.$route.path}));this.prevUrl=e>0?this.routes[e-1]:{},e===this.routes.length-1?this.nextUrl={}:this.nextUrl=this.routes[e+1]}}),o=(r(339),r(8)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"pagination-wrapper"},[r("div",{staticClass:"pagination-content"},[r("nuxt-link",{staticClass:"prev-proj",attrs:{to:t.prevUrl.path}},[t._v(t._s(t.prevUrl.name))]),t._v(" "),r("nuxt-link",{staticClass:"next-proj",attrs:{to:t.nextUrl.path}},[t._v(t._s(t.nextUrl.name))])],1)])}),[],!1,null,"4a36a4e6",null);e.a=component.exports},342:function(t,e,r){"use strict";r(47),r(20),r(21),r(9),r(36);var n=r(16),o=r(1),c=r(14);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h=o.a.extend({name:"Img",props:{source:{type:String},zoom:{type:Boolean,default:!1}},methods:l(l({},Object(c.b)(["setActiveZoom"])),{},{zoomIn:function(t){this.zoom&&this.$store.commit("setActiveZoom",t)}})}),m=r(8),component=Object(m.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pagination-wrapper"},[n("img",{staticClass:"media",style:{cursor:t.zoom?"pointer":"auto"},attrs:{src:r(114)("./"+t.source)},on:{click:function(e){return t.zoomIn(t.source)}}})])}),[],!1,null,null,null);e.a=component.exports},381:function(t,e,r){"use strict";r.r(e);r(47),r(20),r(21),r(9),r(36);var n=r(16),o=r(1),c=r(14),d=r(341),l=r(342);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var m=o.a.extend({components:{Pagination:d.a,Img:l.a},mounted:function(){this.$store.commit("setSidebar","open-grid")},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)(["setSideBar"]))}),f=r(8),component=Object(f.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"project-wrapper"},[r("div",{staticClass:"content-minus-pag"},[t._m(0),t._v(" "),r("div",{staticClass:"project-content"},[r("p",[t._v("I wish I was a skater.")]),t._v(" "),r("div",[r("Img",{attrs:{source:"SKATE/IMG_4761.JPG"}}),t._v(" "),r("Img",{attrs:{source:"SKATE/IMG_4763.JPG"}}),t._v(" "),r("Img",{attrs:{source:"SKATE/IMG_4762.JPG"}}),t._v(" "),r("Img",{attrs:{source:"SKATE/IMG_4760.JPG"}}),t._v(" "),r("Img",{attrs:{source:"SKATE/IMG_4759.JPG"}}),t._v(" "),r("Img",{attrs:{source:"SKATE/IMG_4758.JPG"}}),t._v(" "),r("Img",{attrs:{source:"SKATE/IMG_4756.JPG"}}),t._v(" "),r("Img",{attrs:{source:"SKATE/IMG_4757.JPG"}})],1),t._v(" "),r("p",[t._v("But I just rollerskate. Not as cool.\n            ")]),t._v(" "),t._m(1)])]),t._v(" "),r("Pagination"),t._v(" "),r("footer")],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title-section"},[e("h1",{staticClass:"title"},[this._v("Sk8")]),this._v(" "),e("h2",{staticClass:"subtitle"},[this._v("Photography.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"credits"},[e("b",[this._v("California:")]),this._v(" Skaters were harmed in the making of these pics.")])}],!1,null,null,null);e.default=component.exports}}]);