(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{362:function(t,e,r){var content=r(368);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(23).default)("7787a1f1",content,!0,{sourceMap:!1})},363:function(t,e,r){"use strict";var o=r(6),n=r(364)(6),c="findIndex",d=!0;c in[]&&Array(1)[c]((function(){d=!1})),o(o.P+o.F*d,"Array",{findIndex:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),r(76)(c)},364:function(t,e,r){var o=r(28),n=r(75),c=r(29),d=r(24),m=r(365);t.exports=function(t,e){var r=1==t,l=2==t,h=3==t,f=4==t,v=6==t,w=5==t||v,x=e||m;return function(e,m,j){for(var O,_,y=c(e),k=n(y),P=o(m,j,3),C=d(k.length),D=0,z=r?x(e,C):l?x(e,0):void 0;C>D;D++)if((w||D in k)&&(_=P(O=k[D],D,y),t))if(r)z[D]=_;else if(_)switch(t){case 3:return!0;case 5:return O;case 6:return D;case 2:z.push(O)}else if(f)return!1;return v?-1:h||f?f:z}}},365:function(t,e,r){var o=r(366);t.exports=function(t,e){return new(o(t))(e)}},366:function(t,e,r){var o=r(11),n=r(113),c=r(3)("species");t.exports=function(t){var e;return n(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!n(e.prototype)||(e=void 0),o(e)&&null===(e=e[c])&&(e=void 0)),void 0===e?Array:e}},367:function(t,e,r){"use strict";r(362)},368:function(t,e,r){(e=r(22)(!1)).push([t.i,'.pagination-wrapper[data-v-4a36a4e6]{padding-top:40px;padding-bottom:80px;margin-left:100px;margin-right:100px;width:auto}@media(min-device-width:769px){.pagination-wrapper[data-v-4a36a4e6]{padding:40px 0}}.pagination-wrapper .pagination-content[data-v-4a36a4e6]{display:flex;justify-content:space-between;max-width:500px;margin:0 auto}.pagination-wrapper .pagination-content a[data-v-4a36a4e6]{font-weight:400;position:relative;font-size:32px}@media(min-device-width:769px){.pagination-wrapper .pagination-content a[data-v-4a36a4e6]{font-weight:lighter;font-size:16px}}.pagination-wrapper .pagination-content .prev-proj[data-v-4a36a4e6]:before{content:"";position:absolute;border-left:3px solid #000;border-top:3px solid #000;transform:rotate(-45deg);height:15px;width:15px;right:100%;top:10px;margin-right:10px}@media(min-device-width:769px){.pagination-wrapper .pagination-content .prev-proj[data-v-4a36a4e6]:before{border-width:1px;height:8px;width:8px;top:5px}}.pagination-wrapper .pagination-content .next-proj[data-v-4a36a4e6]:after{content:"";position:absolute;border-right:3px solid #000;border-top:3px solid #000;margin-left:10px;transform:rotate(45deg);height:15px;width:15px;left:100%;top:10px}@media(min-device-width:769px){.pagination-wrapper .pagination-content .next-proj[data-v-4a36a4e6]:after{border-width:1px;height:8px;width:8px;top:5px}}',""]),t.exports=e},369:function(t,e,r){"use strict";r(363),r(30),r(77);var o=r(1).a.extend({mixins:[{computed:{routes:function(){return[{name:"Home",path:"/"},{name:"Pedras",path:"/work/pedras"},{name:"Acordar com gosto",path:"/work/acordar-com-gosto"},{name:"Winona",path:"/work/winona"},{name:"Reprogramar a manhã",path:"/work/reprogramar-a-manha"},{name:"Mesas para todos os gosto",path:"/work/mesas-para-todos-os-gostos"},{name:"Amor Rafeiro",path:"/work/amor-rafeiro"},{name:"O segredo das relações duradouras",path:"/work/o-segredo-das-relacoes"},{name:"Drive code",path:"/work/drive-code"},{name:"Desafio da poupança",path:"/work/desafio-da-poupanca"},{name:"Have a drink",path:"/work/have-a-drink"},{name:"Um mundo sem cem",path:"/work/um-mundo-sem-cem"},{name:"Coisas de miúdos",path:"/work/coisas-de-miudos"},{name:"Conversa de chat",path:"/work/conversa-de-chat"},{name:"Tofa",path:"/work/tofa"},{name:"smart",path:"/work/smart"},{name:"Mais Cabo Verde",path:"/work/mais-cabo-verde"},{name:"Seja o herói",path:"/work/seja-o-heroi"},{name:"Home",path:"/"}]}}}],data:function(){return{currentUrl:"",nextUrl:{},prevUrl:{}}},created:function(){var t=this;this.currentUrl=this.$route.name.split("-")[1];var e=this.routes.findIndex((function(e){return e.path===t.$route.path}));this.prevUrl=e>0?this.routes[e-1]:{},e===this.routes.length-1?this.nextUrl={}:this.nextUrl=this.routes[e+1]}}),n=(r(367),r(8)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"pagination-wrapper"},[r("div",{staticClass:"pagination-content"},[r("nuxt-link",{staticClass:"prev-proj",attrs:{to:t.prevUrl.path}},[t._v(t._s(t.prevUrl.name))]),t._v(" "),r("nuxt-link",{staticClass:"next-proj",attrs:{to:t.nextUrl.path}},[t._v(t._s(t.nextUrl.name))])],1)])}),[],!1,null,"4a36a4e6",null);e.a=component.exports},370:function(t,e,r){"use strict";r(47),r(20),r(21),r(9),r(36);var o=r(16),n=r(1),c=r(14);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l=n.a.extend({name:"Img",props:{source:{type:String},zoom:{type:Boolean,default:!1}},methods:m(m({},Object(c.b)(["setActiveZoom"])),{},{zoomIn:function(t){this.zoom&&this.$store.commit("setActiveZoom",t)}})}),h=r(8),component=Object(h.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"pagination-wrapper"},[o("img",{staticClass:"media",style:{cursor:t.zoom?"pointer":"auto"},attrs:{src:r(114)("./"+t.source)},on:{click:function(e){return t.zoomIn(t.source)}}})])}),[],!1,null,null,null);e.a=component.exports},408:function(t,e,r){"use strict";r.r(e);r(47),r(20),r(21),r(9),r(36);var o=r(16),n=r(1),c=r(14),d=r(369),m=r(370);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var h=n.a.extend({components:{Pagination:d.a,Img:m.a},mounted:function(){this.$store.commit("setSidebar","open-grid")},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)(["setSideBar"]))}),f=r(8),component=Object(f.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"project-wrapper"},[r("div",{staticClass:"content-minus-pag"},[t._m(0),t._v(" "),r("div",{staticClass:"project-content"},[r("p",{staticClass:"credits"},[t._v("Featured on Digital Done Right")]),t._v(" "),r("p",[t._v("Remember when Elon Musk sent a Tesla Roadster into space?")]),t._v(" "),r("Img",{attrs:{source:"smart/tesla-post.png",zoom:!0}}),t._v(" "),r("p",[t._v("We reacted fast.")]),t._v(" "),r("Img",{attrs:{source:"smart/smart1_.png",zoom:!0}}),t._v(" "),r("p",[t._v("We also did some prints.")]),t._v(" "),r("div",[r("Img",{attrs:{source:"smart/smart4.jpg",zoom:!0}}),t._v(" "),r("Img",{attrs:{source:"smart/smart5.jpg",zoom:!0}}),t._v(" "),r("Img",{attrs:{source:"smart/smart7.jpg",zoom:!0}})],1),t._v(" "),t._m(1)],1)]),t._v(" "),r("Pagination"),t._v(" "),r("footer")],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title-section"},[e("h1",{staticClass:"title"},[this._v("smart")]),this._v(" "),e("h2",{staticClass:"subtitle"},[this._v("Little things "),e("br"),this._v(" for a big car.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"credits"},[e("b",[this._v("BBDO")]),this._v(" C: Andreia Luísa A.D: António Belchior C.D: Marco Pacheco")])}],!1,null,null,null);e.default=component.exports}}]);