(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{343:function(t,e,r){var content=r(346);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(36).default)("7787a1f1",content,!0,{sourceMap:!1})},344:function(t,e,r){"use strict";var o=r(4),n=r(84)(6),c="findIndex",d=!0;c in[]&&Array(1)[c]((function(){d=!1})),o(o.P+o.F*d,"Array",{findIndex:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),r(83)(c)},345:function(t,e,r){"use strict";r(343)},346:function(t,e,r){var o=r(35)(!1);o.push([t.i,'.pagination-wrapper[data-v-4a36a4e6]{padding-top:40px;padding-bottom:80px;margin-left:100px;margin-right:100px;width:auto}@media(min-device-width:769px){.pagination-wrapper[data-v-4a36a4e6]{padding:40px 0}}.pagination-wrapper .pagination-content[data-v-4a36a4e6]{display:flex;justify-content:space-between;max-width:500px;margin:0 auto}.pagination-wrapper .pagination-content a[data-v-4a36a4e6]{font-weight:400;position:relative;font-size:32px}@media(min-device-width:769px){.pagination-wrapper .pagination-content a[data-v-4a36a4e6]{font-weight:lighter;font-size:16px}}.pagination-wrapper .pagination-content .prev-proj[data-v-4a36a4e6]:before{content:"";position:absolute;border-left:3px solid #000;border-top:3px solid #000;transform:rotate(-45deg);height:15px;width:15px;right:100%;top:10px;margin-right:10px}@media(min-device-width:769px){.pagination-wrapper .pagination-content .prev-proj[data-v-4a36a4e6]:before{border-width:1px;height:8px;width:8px;top:5px}}.pagination-wrapper .pagination-content .next-proj[data-v-4a36a4e6]:after{content:"";position:absolute;border-right:3px solid #000;border-top:3px solid #000;margin-left:10px;transform:rotate(45deg);height:15px;width:15px;left:100%;top:10px}@media(min-device-width:769px){.pagination-wrapper .pagination-content .next-proj[data-v-4a36a4e6]:after{border-width:1px;height:8px;width:8px;top:5px}}',""]),t.exports=o},347:function(t,e,r){"use strict";r(122),r(23),r(344);var o=r(1).a.extend({mixins:[{computed:{routes:function(){return[{name:"Home",path:"/"},{name:"Pedras",path:"/work/pedras"},{name:"O Segredo das Relações Duradouras",path:"/work/o-segredo-das-relacoes"},{name:"Tofa",path:"/work/tofa"},{name:"Reprogramar a Manhã",path:"/work/reprogramar-a-manha"},{name:"Mesas para Todos os Gostos",path:"/work/mesas-para-todos-os-gostos"},{name:"smart",path:"/work/smart"},{name:"Desafio da Poupança",path:"/work/desafio-da-poupanca"},{name:"Print",path:"/work/print"},{name:"Conversa de Chat",path:"/work/conversa-de-chat"},{name:"Coisas de Miúdos",path:"/work/coisas-de-miudos"},{name:"Home",path:"/"},{name:"Side-B",path:"/side-b"},{name:"Skate",path:"/side-b/skate"},{name:"Hello",path:"/side-b/hello"},{name:"Bimba",path:"/side-b/bimba"},{name:"Fotopoema",path:"/side-b/fotopoema"},{name:"Noite Oráculo",path:"/side-b/noite-oraculo"},{name:"Winona",path:"/side-b/winona"},{name:"Um Horror de Licor",path:"/side-b/horror-de-licor"},{name:"Cowboy",path:"/side-b/cowboy"},{name:"Neon",path:"/side-b/neon"},{name:"Amor Rafeiro",path:"/side-b/amor-rafeiro"},{name:"Home",path:"/"}]}}}],data:function(){return{currentUrl:"",nextUrl:{},prevUrl:{}}},created:function(){var t=this;this.currentUrl=this.$route.name.split("-")[1];var e=this.routes.findIndex((function(e){return e.path===t.$route.path}));this.prevUrl=e>0?this.routes[e-1]:{},e===this.routes.length-1?this.nextUrl={}:this.nextUrl=this.routes[e+1]}}),n=(r(345),r(9)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"pagination-wrapper"},[r("div",{staticClass:"pagination-content"},[r("nuxt-link",{staticClass:"prev-proj",attrs:{to:t.prevUrl.path}},[t._v(t._s(t.prevUrl.name))]),t._v(" "),r("nuxt-link",{staticClass:"next-proj",attrs:{to:t.nextUrl.path}},[t._v(t._s(t.nextUrl.name))])],1)])}),[],!1,null,"4a36a4e6",null);e.a=component.exports},348:function(t,e,r){"use strict";r(27),r(18),r(22),r(33),r(34);var o=r(10),n=r(1),c=r(19);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l=n.a.extend({name:"Img",props:{source:{type:String},zoom:{type:Boolean,default:!1}},methods:m(m({},Object(c.b)(["setActiveZoom"])),{},{zoomIn:function(t){this.zoom&&this.$store.commit("setActiveZoom",t)}})}),h=r(9),component=Object(h.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"pagination-wrapper"},[o("img",{staticClass:"media",style:{cursor:t.zoom?"pointer":"auto"},attrs:{src:r(123)("./"+t.source)},on:{click:function(e){return t.zoomIn(t.source)}}})])}),[],!1,null,null,null);e.a=component.exports},399:function(t,e,r){"use strict";r.r(e);r(27),r(18),r(22),r(33),r(34);var o=r(10),n=r(1),c=r(19),d=r(347),m=r(348);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var h=n.a.extend({components:{Pagination:d.a,Img:m.a},mounted:function(){this.$store.commit("setSidebar","open-grid")},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)(["setSideBar"]))}),f=r(9),component=Object(f.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"project-wrapper"},[t._m(0),t._v(" "),r("div",{staticClass:"project-content"},[r("h3",[t._v("This is a tagline")]),t._v(" "),r("p",{staticClass:"credits"},[t._v("(c) Aqui são os créditos, ou qualquer side-note que querias pôr a cinza.")]),t._v(" "),r("p",[t._v('Um parágrafo. Tudo o que for aqui dentro, mesmo que separado por um "Enter", vai ser mostrado como texto corrido. Para evitar esta situação, podes fazer vários elementos iguais a este tal como no exemplo')]),t._v(" "),r("p",[t._v("que")]),t._v(" "),r("p",[t._v("estou aqui")]),t._v(" "),r("p",[t._v("a mostrar")]),t._v(" "),t._m(1),t._v(" "),r("video",{staticClass:"media",attrs:{controls:"",muted:"",autoplay:"",src:"https://cdn-a.luerzersarchive.com/archive/submissions/tv_commercials/720/2018/317094.mp4?Expires=1609614723&Signature=GHeYQe3YeQ2j~cltAnM4nG17xQXDAz7EyRzXFZfea34bsdpO5R9RoWumey3Ldt1BDiS7ax5FhsLIatBJiLEMp6UyCl1z9fw~efQDP~awWLQ1SgtOaDC3HzHnZX3mqJkuwC1YXss0ri4Nq4IAmvRrJ2QwevR8s9gOgGR4G81IdHPBMNjs5P8vrDcz~QrmzZdOZ5AUulb1JT9yxNt4Bv-dDqMlJbiUTTzN1xlID9nsJUpGuTg7prWwvRmfG-OVOYgRODbDx0ShVpOVGe0iqd~Y5jwzVPBBPwCap76QEQpjcl4dYKjFKLBjOsibawaZ2MzbKRF-NdZ4h8SOqMm6iX7VOA__&Key-Pair-Id=APKAJXKTOLSPBG77KE6Q"},domProps:{muted:!0}}),t._v(" "),r("p",[t._v(" Imagens:  (substituir o url no código pelo endereço da imagem (Exemplo: 'tofa/tofa06.png')")]),t._v(" "),r("Img",{attrs:{source:"tofa/tofa06.png"}}),t._v(" "),r("p",[t._v(" Imagens com zoom:")]),t._v(" "),r("Img",{attrs:{source:"tofa/tofa06.png",zoom:!0}})],1),t._v(" "),r("footer")])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"title-section"},[r("h1",{staticClass:"title"},[t._v("Título grande")]),t._v(" "),r("h2",{staticClass:"subtitle"},[t._v("Título menor")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("Ou separar com esta chamada: "),r("br"),t._v(" este elemento faz um parágrafo.")])}],!1,null,null,null);e.default=component.exports}}]);