(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{343:function(t,e,o){var content=o(346);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(36).default)("7787a1f1",content,!0,{sourceMap:!1})},344:function(t,e,o){"use strict";var r=o(4),n=o(84)(6),c="findIndex",d=!0;c in[]&&Array(1)[c]((function(){d=!1})),r(r.P+r.F*d,"Array",{findIndex:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),o(83)(c)},345:function(t,e,o){"use strict";o(343)},346:function(t,e,o){var r=o(35)(!1);r.push([t.i,'.pagination-wrapper[data-v-4a36a4e6]{padding-top:40px;padding-bottom:80px;margin-left:100px;margin-right:100px;width:auto}@media(min-device-width:769px){.pagination-wrapper[data-v-4a36a4e6]{padding:40px 0}}.pagination-wrapper .pagination-content[data-v-4a36a4e6]{display:flex;justify-content:space-between;max-width:500px;margin:0 auto}.pagination-wrapper .pagination-content a[data-v-4a36a4e6]{font-weight:400;position:relative;font-size:32px}@media(min-device-width:769px){.pagination-wrapper .pagination-content a[data-v-4a36a4e6]{font-weight:lighter;font-size:16px}}.pagination-wrapper .pagination-content .prev-proj[data-v-4a36a4e6]:before{content:"";position:absolute;border-left:3px solid #000;border-top:3px solid #000;transform:rotate(-45deg);height:15px;width:15px;right:100%;top:10px;margin-right:10px}@media(min-device-width:769px){.pagination-wrapper .pagination-content .prev-proj[data-v-4a36a4e6]:before{border-width:1px;height:8px;width:8px;top:5px}}.pagination-wrapper .pagination-content .next-proj[data-v-4a36a4e6]:after{content:"";position:absolute;border-right:3px solid #000;border-top:3px solid #000;margin-left:10px;transform:rotate(45deg);height:15px;width:15px;left:100%;top:10px}@media(min-device-width:769px){.pagination-wrapper .pagination-content .next-proj[data-v-4a36a4e6]:after{border-width:1px;height:8px;width:8px;top:5px}}',""]),t.exports=r},347:function(t,e,o){"use strict";o(122),o(23),o(344);var r=o(1).a.extend({mixins:[{computed:{routes:function(){return[{name:"Home",path:"/"},{name:"Pedras",path:"/work/pedras"},{name:"O Segredo das Relações Duradouras",path:"/work/o-segredo-das-relacoes"},{name:"Tofa",path:"/work/tofa"},{name:"Reprogramar a Manhã",path:"/work/reprogramar-a-manha"},{name:"Mesas para Todos os Gostos",path:"/work/mesas-para-todos-os-gostos"},{name:"smart",path:"/work/smart"},{name:"Desafio da Poupança",path:"/work/desafio-da-poupanca"},{name:"Print",path:"/work/print"},{name:"Conversa de Chat",path:"/work/conversa-de-chat"},{name:"Coisas de Miúdos",path:"/work/coisas-de-miudos"},{name:"Home",path:"/"},{name:"Side-B",path:"/side-b"},{name:"Skate",path:"/side-b/skate"},{name:"Hello",path:"/side-b/hello"},{name:"Bimba",path:"/side-b/bimba"},{name:"Fotopoema",path:"/side-b/fotopoema"},{name:"Noite Oráculo",path:"/side-b/noite-oraculo"},{name:"Winona",path:"/side-b/winona"},{name:"Um Horror de Licor",path:"/side-b/horror-de-licor"},{name:"Cowboy",path:"/side-b/cowboy"},{name:"Neon",path:"/side-b/neon"},{name:"Amor Rafeiro",path:"/side-b/amor-rafeiro"},{name:"Home",path:"/"}]}}}],data:function(){return{currentUrl:"",nextUrl:{},prevUrl:{}}},created:function(){var t=this;this.currentUrl=this.$route.name.split("-")[1];var e=this.routes.findIndex((function(e){return e.path===t.$route.path}));this.prevUrl=e>0?this.routes[e-1]:{},e===this.routes.length-1?this.nextUrl={}:this.nextUrl=this.routes[e+1]}}),n=(o(345),o(9)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"pagination-wrapper"},[o("div",{staticClass:"pagination-content"},[o("nuxt-link",{staticClass:"prev-proj",attrs:{to:t.prevUrl.path}},[t._v(t._s(t.prevUrl.name))]),t._v(" "),o("nuxt-link",{staticClass:"next-proj",attrs:{to:t.nextUrl.path}},[t._v(t._s(t.nextUrl.name))])],1)])}),[],!1,null,"4a36a4e6",null);e.a=component.exports},348:function(t,e,o){"use strict";o(27),o(18),o(22),o(33),o(34);var r=o(10),n=o(1),c=o(19);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m=n.a.extend({name:"Img",props:{source:{type:String},zoom:{type:Boolean,default:!1}},methods:l(l({},Object(c.b)(["setActiveZoom"])),{},{zoomIn:function(t){this.zoom&&this.$store.commit("setActiveZoom",t)}})}),h=o(9),component=Object(h.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"pagination-wrapper"},[r("img",{staticClass:"media",style:{cursor:t.zoom?"pointer":"auto"},attrs:{src:o(123)("./"+t.source)},on:{click:function(e){return t.zoomIn(t.source)}}})])}),[],!1,null,null,null);e.a=component.exports},400:function(t,e,o){"use strict";o.r(e);o(27),o(18),o(22),o(33),o(34);var r=o(10),n=o(1),c=o(19),d=o(347),l=o(348);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}var h=n.a.extend({components:{Pagination:d.a,Img:l.a},mounted:function(){this.$store.commit("setSidebar","open-grid")},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)(["setSideBar"]))}),f=o(9),component=Object(f.a)(h,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"project-wrapper"},[o("div",{staticClass:"content-minus-pag"},[t._m(0),t._v(" "),o("div",{staticClass:"project-content"},[t._m(1),t._v(" "),o("p",[t._v("Let's start with the storyline of the logo:")]),t._v(" "),o("div",[o("Img",{attrs:{source:"tofa/tofa01.png",zoom:!0}}),t._v(" "),t._m(2),t._v(" "),o("Img",{attrs:{source:"tofa/tofa02.png",zoom:!0}}),t._v(" "),o("p",[t._v("And a tasteful touch on the signature. O gosto que é nosso/ The taste that is ours.")]),t._v(" "),o("Img",{attrs:{source:"tofa/tofa03.png",zoom:!0}}),t._v(" "),o("p",[t._v("Would you like some sugar?")]),t._v(" "),o("Img",{attrs:{source:"tofa/tofa04.png",zoom:!0}}),t._v(" "),o("Img",{attrs:{source:"tofa/tofa05.png",zoom:!0}}),t._v(" "),o("p",[t._v("We decorated some iconic transports with the new identity, such as the cacilheiro or the tram, and distributed some coffee on board. What a lovely way to see the city.")]),t._v(" "),o("Img",{attrs:{source:"tofa/tofa06.png",zoom:!0}}),t._v(" "),o("Img",{attrs:{source:"tofa/tofa_zoom.png",zoom:!0}}),t._v(" "),o("Img",{attrs:{source:"tofa/tofa07.png",zoom:!0}})],1),t._v(" "),t._m(3)])]),t._v(" "),o("Pagination"),t._v(" "),o("footer")],1)}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"title-section"},[o("h1",{staticClass:"title"},[t._v("Tofa")]),t._v(" "),o("h2",{staticClass:"subtitle"},[t._v("Rebranding.")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",[t._v("How do you like your coffee, Lisbon?"),o("br"),t._v('\n           Be it "curto", "longo", "pingado", "escaldado" or "sem princípio", Tofa is a coffee Lisbon loves. ')])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",[t._v("A rebranding was needed and we wanted to keep it simple."),o("br"),t._v(" \n           But with a twist on the F word (not that one), inspired by the coffe plant.")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",{staticClass:"credits"},[o("b",[t._v("BBDO")]),t._v(" C: Andreia Luísa A.D: Rita Feliciano IL: João Fazenda C.D: Marco Pacheco e Rui Silva")])}],!1,null,null,null);e.default=component.exports}}]);