(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{193:function(t,e,r){var content=r(196);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(34).default)("5c9b8714",content,!0,{sourceMap:!1})},194:function(t,e,r){"use strict";var n=r(2),o=r(35).findIndex,d=r(88),c=r(15),h=!0,l=c("findIndex");"findIndex"in[]&&Array(1).findIndex((function(){h=!1})),n({target:"Array",proto:!0,forced:h||!l},{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),d("findIndex")},195:function(t,e,r){"use strict";r(193)},196:function(t,e,r){(e=r(33)(!1)).push([t.i,'.pagination-wrapper[data-v-4a479668]{padding-top:40px;padding-bottom:80px;margin-left:100px;margin-right:100px;width:auto}@media(min-device-width:769px){.pagination-wrapper[data-v-4a479668]{padding:40px 0}}.pagination-wrapper .pagination-content[data-v-4a479668]{display:flex;justify-content:space-between;max-width:500px;margin:0 auto}.pagination-wrapper .pagination-content a[data-v-4a479668]{font-weight:400;position:relative;font-size:32px}@media(min-device-width:769px){.pagination-wrapper .pagination-content a[data-v-4a479668]{font-weight:lighter;font-size:16px}}.pagination-wrapper .pagination-content .prev-proj[data-v-4a479668]:before{content:"";position:absolute;border-left:3px solid #000;border-top:3px solid #000;transform:rotate(-45deg);height:15px;width:15px;right:100%;top:10px;margin-right:10px}@media(min-device-width:769px){.pagination-wrapper .pagination-content .prev-proj[data-v-4a479668]:before{border-width:1px;height:8px;width:8px;top:5px}}.pagination-wrapper .pagination-content .next-proj[data-v-4a479668]:after{content:"";position:absolute;border-right:3px solid #000;border-top:3px solid #000;margin-left:10px;transform:rotate(45deg);height:15px;width:15px;left:100%;top:10px}@media(min-device-width:769px){.pagination-wrapper .pagination-content .next-proj[data-v-4a479668]:after{border-width:1px;height:8px;width:8px;top:5px}}',""]),t.exports=e},197:function(t,e,r){"use strict";r(194),r(36),r(37),r(89);var n=r(1).a.extend({mixins:[{computed:{routes:function(){return[{name:"Home",path:"/"},{name:"Pedras",path:"/work/pedras"},{name:"Acordar com gosto",path:"/work/acordar-com-gosto"},{name:"Winona",path:"/work/winona"},{name:"Reprogramar a Manha",path:"/work/reprogramar-a-manha"},{name:"Mesas para todos os gosto",path:"/work/mesas-para-todos-os-gostos"},{name:"Amor Rafeiro",path:"/work/amor-rafeiro"},{name:"O segredo das relações duradouras",path:"/work/o-segredo-das-relacoes"},{name:"Drive code",path:"/work/drive-code"},{name:"Desafio da Poupança",path:"/work/desafio-da-poupanca"},{name:"Have a drink",path:"/work/have-a-drink"},{name:"Um mundo sem cem",path:"/work/um-mundo-sem-cem"},{name:"Coisas de miúdos",path:"/work/coisas-de-miudos"},{name:"Conversa de chat",path:"/work/conversa-de-chat"},{name:"Tofa",path:"/work/tofa"},{name:"smart",path:"/work/smart"},{name:"Mais cabo verde",path:"/work/mais-cabo-verde"},{name:"Seja o herói",path:"/work/seja-o-heroi"},{name:"Home",path:"/"}]}}}],data:function(){return{currentUrl:"",nextUrl:{},prevUrl:{}}},props:{next:{type:Object},prev:{type:Object}},created:function(){var t=this;this.currentUrl=this.$route.name.split("-")[1];var e=this.routes.findIndex((function(e){return e.path===t.$route.path}));this.prevUrl=e>0?this.routes[e-1]:{},e===this.routes.length-1?this.nextUrl={}:this.nextUrl=this.routes[e+1]}}),o=(r(195),r(11)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"pagination-wrapper"},[r("div",{staticClass:"pagination-content"},[r("nuxt-link",{staticClass:"prev-proj",attrs:{to:t.prevUrl.path}},[t._v(t._s(t.prevUrl.name))]),t._v(" "),r("nuxt-link",{staticClass:"next-proj",attrs:{to:t.nextUrl.path}},[t._v(t._s(t.nextUrl.name))])],1)])}),[],!1,null,"4a479668",null);e.a=component.exports},283:function(t,e,r){"use strict";r.r(e);var n=r(21),o=r(1),d=r(16),c=r(197);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var l=o.a.extend({components:{Pagination:c.a},mounted:function(){this.$store.commit("setSidebar","open-grid")},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(d.b)(["setSideBar"]))}),m=r(11),component=Object(m.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"project-wrapper"},[this._m(0),this._v(" "),e("Pagination")],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content-minus-pag"},[r("div",{staticClass:"title-section"},[r("h1",{staticClass:"title"},[t._v("Novo Banco")]),t._v(" "),r("h2",{staticClass:"subtitle"},[t._v("Conversa de chat.")])]),t._v(" "),r("div",{staticClass:"project-content"},[r("p",{staticClass:"credits"},[t._v("Silver for best radio campaign @CCP")]),t._v(" "),r("p",[t._v("Novo Banco was the first portuguese bank to launch an app that made money transfers possible by chat. An app that made sending money, as easy as sending emojis. We named it: Chat Pay. We also decided to go inside live chats and narrate the conversations, in order to show people how the new app works.")]),t._v(" "),r("h3",[t._v("Radios")]),t._v(" "),r("iframe",{attrs:{width:"100%",height:"100",scrolling:"no",frameborder:"no",allow:"autoplay",src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1188413743&color=%231c1c30&auto_play=false&hide_related=false&show_teaser=true"}}),t._v(" "),r("p"),t._v(" "),r("p",{staticClass:"credits"},[r("b",[t._v("TBWA")]),t._v(" C: Andreia Luísa C.D: Marco Pacheco ")])])])}],!1,null,null,null);e.default=component.exports}}]);