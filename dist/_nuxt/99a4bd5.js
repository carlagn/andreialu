(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{343:function(t,e,o){var content=o(346);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(36).default)("7787a1f1",content,!0,{sourceMap:!1})},344:function(t,e,o){"use strict";var n=o(4),r=o(84)(6),d="findIndex",c=!0;d in[]&&Array(1)[d]((function(){c=!1})),n(n.P+n.F*c,"Array",{findIndex:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),o(83)(d)},345:function(t,e,o){"use strict";o(343)},346:function(t,e,o){var n=o(35)(!1);n.push([t.i,'.pagination-wrapper[data-v-4a36a4e6]{padding-top:40px;padding-bottom:80px;margin-left:100px;margin-right:100px;width:auto}@media(min-device-width:769px){.pagination-wrapper[data-v-4a36a4e6]{padding:40px 0}}.pagination-wrapper .pagination-content[data-v-4a36a4e6]{display:flex;justify-content:space-between;max-width:500px;margin:0 auto}.pagination-wrapper .pagination-content a[data-v-4a36a4e6]{font-weight:400;position:relative;font-size:32px}@media(min-device-width:769px){.pagination-wrapper .pagination-content a[data-v-4a36a4e6]{font-weight:lighter;font-size:16px}}.pagination-wrapper .pagination-content .prev-proj[data-v-4a36a4e6]:before{content:"";position:absolute;border-left:3px solid #000;border-top:3px solid #000;transform:rotate(-45deg);height:15px;width:15px;right:100%;top:10px;margin-right:10px}@media(min-device-width:769px){.pagination-wrapper .pagination-content .prev-proj[data-v-4a36a4e6]:before{border-width:1px;height:8px;width:8px;top:5px}}.pagination-wrapper .pagination-content .next-proj[data-v-4a36a4e6]:after{content:"";position:absolute;border-right:3px solid #000;border-top:3px solid #000;margin-left:10px;transform:rotate(45deg);height:15px;width:15px;left:100%;top:10px}@media(min-device-width:769px){.pagination-wrapper .pagination-content .next-proj[data-v-4a36a4e6]:after{border-width:1px;height:8px;width:8px;top:5px}}',""]),t.exports=n},347:function(t,e,o){"use strict";o(122),o(23),o(344);var n=o(1).a.extend({mixins:[{computed:{routes:function(){return[{name:"Home",path:"/"},{name:"Pedras",path:"/work/pedras"},{name:"O Segredo das Relações Duradouras",path:"/work/o-segredo-das-relacoes"},{name:"Tofa",path:"/work/tofa"},{name:"Reprogramar a Manhã",path:"/work/reprogramar-a-manha"},{name:"Mesas para Todos os Gostos",path:"/work/mesas-para-todos-os-gostos"},{name:"smart",path:"/work/smart"},{name:"Desafio da Poupança",path:"/work/desafio-da-poupanca"},{name:"Print",path:"/work/print"},{name:"Conversa de Chat",path:"/work/conversa-de-chat"},{name:"Coisas de Miúdos",path:"/work/coisas-de-miudos"},{name:"Home",path:"/"},{name:"Side-B",path:"/side-b"},{name:"Skate",path:"/side-b/skate"},{name:"Hello",path:"/side-b/hello"},{name:"Bimba",path:"/side-b/bimba"},{name:"Fotopoema",path:"/side-b/fotopoema"},{name:"Noite Oráculo",path:"/side-b/noite-oraculo"},{name:"Winona",path:"/side-b/winona"},{name:"Um Horror de Licor",path:"/side-b/horror-de-licor"},{name:"Cowboy",path:"/side-b/cowboy"},{name:"Neon",path:"/side-b/neon"},{name:"Amor Rafeiro",path:"/side-b/amor-rafeiro"},{name:"Home",path:"/"}]}}}],data:function(){return{currentUrl:"",nextUrl:{},prevUrl:{}}},created:function(){var t=this;this.currentUrl=this.$route.name.split("-")[1];var e=this.routes.findIndex((function(e){return e.path===t.$route.path}));this.prevUrl=e>0?this.routes[e-1]:{},e===this.routes.length-1?this.nextUrl={}:this.nextUrl=this.routes[e+1]}}),r=(o(345),o(9)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"pagination-wrapper"},[o("div",{staticClass:"pagination-content"},[o("nuxt-link",{staticClass:"prev-proj",attrs:{to:t.prevUrl.path}},[t._v(t._s(t.prevUrl.name))]),t._v(" "),o("nuxt-link",{staticClass:"next-proj",attrs:{to:t.nextUrl.path}},[t._v(t._s(t.nextUrl.name))])],1)])}),[],!1,null,"4a36a4e6",null);e.a=component.exports},391:function(t,e,o){"use strict";o.r(e);o(27),o(18),o(22),o(33),o(34);var n=o(10),r=o(1),d=o(19),c=o(347);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}var h=r.a.extend({components:{Pagination:c.a},mounted:function(){this.$store.commit("setSidebar","open-grid")},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(d.b)(["setSideBar"]))}),m=o(9),component=Object(m.a)(h,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"project-wrapper"},[t._m(0),t._v(" "),o("Pagination"),t._v(" "),o("footer")],1)}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"content-minus-pag"},[o("div",{staticClass:"title-section"},[o("h1",{staticClass:"title"},[t._v("Novo Banco")]),t._v(" "),o("h2",{staticClass:"subtitle"},[t._v("Conversa de chat.")])]),t._v(" "),o("div",{staticClass:"project-content"},[o("p",{staticClass:"credits"},[t._v("Silver for best radio campaign @CCP")]),t._v(" "),o("p",[t._v("Novo Banco was the first Portuguese bank to launch an app that made sending money, as easy as sending emojis. We named it: Chat Pay. We also decided to go inside live chats to narrate the process.")]),t._v(" "),o("h3",[t._v("Radios")]),t._v(" "),o("iframe",{attrs:{width:"100%",height:"100",scrolling:"no",frameborder:"no",allow:"autoplay",src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1188413743&color=%231c1c30&auto_play=false&hide_related=false&show_teaser=true"}}),t._v(" "),o("p",{staticClass:"credits"},[o("b",[t._v("TBWA")]),t._v(" C: Andreia Luísa C.D: Marco Pacheco ")])])])}],!1,null,null,null);e.default=component.exports}}]);