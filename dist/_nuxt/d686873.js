(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{260:function(t,e,r){var content=r(266);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(36).default)("7787a1f1",content,!0,{sourceMap:!1})},261:function(t,e,r){"use strict";var n=r(6),o=r(262)(6),c="findIndex",d=!0;c in[]&&Array(1)[c]((function(){d=!1})),n(n.P+n.F*d,"Array",{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),r(76)(c)},262:function(t,e,r){var n=r(26),o=r(75),c=r(27),d=r(22),h=r(263);t.exports=function(t,e){var r=1==t,l=2==t,m=3==t,f=4==t,v=6==t,w=5==t||v,x=e||h;return function(e,h,k){for(var _,j,O=c(e),y=o(O),C=n(h,k,3),P=d(y.length),U=0,D=r?x(e,P):l?x(e,0):void 0;P>U;U++)if((w||U in y)&&(j=C(_=y[U],U,O),t))if(r)D[U]=j;else if(j)switch(t){case 3:return!0;case 5:return _;case 6:return U;case 2:D.push(_)}else if(f)return!1;return v?-1:m||f?f:D}}},263:function(t,e,r){var n=r(264);t.exports=function(t,e){return new(n(t))(e)}},264:function(t,e,r){var n=r(11),o=r(112),c=r(3)("species");t.exports=function(t){var e;return o(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!o(e.prototype)||(e=void 0),n(e)&&null===(e=e[c])&&(e=void 0)),void 0===e?Array:e}},265:function(t,e,r){"use strict";r(260)},266:function(t,e,r){(e=r(35)(!1)).push([t.i,'.pagination-wrapper[data-v-4a36a4e6]{padding-top:40px;padding-bottom:80px;margin-left:100px;margin-right:100px;width:auto}@media(min-device-width:769px){.pagination-wrapper[data-v-4a36a4e6]{padding:40px 0}}.pagination-wrapper .pagination-content[data-v-4a36a4e6]{display:flex;justify-content:space-between;max-width:500px;margin:0 auto}.pagination-wrapper .pagination-content a[data-v-4a36a4e6]{font-weight:400;position:relative;font-size:32px}@media(min-device-width:769px){.pagination-wrapper .pagination-content a[data-v-4a36a4e6]{font-weight:lighter;font-size:16px}}.pagination-wrapper .pagination-content .prev-proj[data-v-4a36a4e6]:before{content:"";position:absolute;border-left:3px solid #000;border-top:3px solid #000;transform:rotate(-45deg);height:15px;width:15px;right:100%;top:10px;margin-right:10px}@media(min-device-width:769px){.pagination-wrapper .pagination-content .prev-proj[data-v-4a36a4e6]:before{border-width:1px;height:8px;width:8px;top:5px}}.pagination-wrapper .pagination-content .next-proj[data-v-4a36a4e6]:after{content:"";position:absolute;border-right:3px solid #000;border-top:3px solid #000;margin-left:10px;transform:rotate(45deg);height:15px;width:15px;left:100%;top:10px}@media(min-device-width:769px){.pagination-wrapper .pagination-content .next-proj[data-v-4a36a4e6]:after{border-width:1px;height:8px;width:8px;top:5px}}',""]),t.exports=e},267:function(t,e,r){"use strict";r(261),r(28),r(77);var n=r(1).a.extend({mixins:[{computed:{routes:function(){return[{name:"Home",path:"/"},{name:"Pedras",path:"/work/pedras"},{name:"Acordar com gosto",path:"/work/acordar-com-gosto"},{name:"Winona",path:"/work/winona"},{name:"Reprogramar a Manha",path:"/work/reprogramar-a-manha"},{name:"Mesas para todos os gosto",path:"/work/mesas-para-todos-os-gostos"},{name:"Amor Rafeiro",path:"/work/amor-rafeiro"},{name:"O segredo das relações duradouras",path:"/work/o-segredo-das-relacoes"},{name:"Drive code",path:"/work/drive-code"},{name:"Desafio da Poupança",path:"/work/desafio-da-poupanca"},{name:"Have a drink",path:"/work/have-a-drink"},{name:"Um mundo sem cem",path:"/work/um-mundo-sem-cem"},{name:"Coisas de miúdos",path:"/work/coisas-de-miudos"},{name:"Conversa de chat",path:"/work/conversa-de-chat"},{name:"Tofa",path:"/work/tofa"},{name:"smart",path:"/work/smart"},{name:"Mais cabo verde",path:"/work/mais-cabo-verde"},{name:"Seja o herói",path:"/work/seja-o-heroi"},{name:"Home",path:"/"}]}}}],data:function(){return{currentUrl:"",nextUrl:{},prevUrl:{}}},created:function(){var t=this;this.currentUrl=this.$route.name.split("-")[1];var e=this.routes.findIndex((function(e){return e.path===t.$route.path}));this.prevUrl=e>0?this.routes[e-1]:{},e===this.routes.length-1?this.nextUrl={}:this.nextUrl=this.routes[e+1]}}),o=(r(265),r(10)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"pagination-wrapper"},[r("div",{staticClass:"pagination-content"},[r("nuxt-link",{staticClass:"prev-proj",attrs:{to:t.prevUrl.path}},[t._v(t._s(t.prevUrl.name))]),t._v(" "),r("nuxt-link",{staticClass:"next-proj",attrs:{to:t.nextUrl.path}},[t._v(t._s(t.nextUrl.name))])],1)])}),[],!1,null,"4a36a4e6",null);e.a=component.exports},284:function(t,e,r){"use strict";r.r(e);var n=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content-minus-pag"},[n("div",{staticClass:"title-section"},[n("h1",{staticClass:"title"},[t._v("McDonald’s")]),t._v(" "),n("h2",{staticClass:"subtitle"},[t._v("Acordar com gosto.")])]),t._v(" "),n("div",{staticClass:"project-content"},[n("p",{staticClass:"credits"},[t._v("Print and outdoor campaign")]),t._v(" "),n("p",[t._v("Wake up with the McDonald's breakfast, a breakfast as fresh as you in the morning. "),n("br"),t._v(" If you're a morning person.\n             ")]),t._v(" "),n("div",[n("img",{staticClass:"media",attrs:{src:r(158)}}),t._v(" "),n("img",{staticClass:"media",attrs:{src:r(159)}}),t._v(" "),n("img",{staticClass:"media",attrs:{src:r(160)}})]),t._v(" "),n("p",{staticClass:"credits"},[n("b",[t._v("BBDO")]),t._v(" C: Andreia Luísa A.D: António Belchior C.D: Marco Pacheco")])])])}],o=(r(47),r(20),r(21),r(8),r(34),r(16)),c=r(1),d=r(14),h=r(267);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=c.a.extend({components:{Pagination:h.a},data:function(){return{lang:"en"}},mounted:function(){this.$store.commit("setSidebar","open-grid")},methods:m(m({},Object(d.b)(["setSideBar"])),{},{setLang:function(t){this.lang=t}})}),v=r(10),component=Object(v.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"project-wrapper"},[this._m(0),this._v(" "),e("Pagination")],1)}),n,!1,null,null,null);e.default=component.exports}}]);