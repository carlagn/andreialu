(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{191:function(t,e,r){var content=r(194);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(45).default)("3b3d39d2",content,!0,{sourceMap:!1})},192:function(t,e,r){"use strict";var n=r(2),o=r(33).findIndex,l=r(88),c=r(15),m=!0,v=c("findIndex");"findIndex"in[]&&Array(1).findIndex((function(){m=!1})),n({target:"Array",proto:!0,forced:m||!v},{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),l("findIndex")},193:function(t,e,r){"use strict";r(191)},194:function(t,e,r){(e=r(44)(!1)).push([t.i,".pagination-wrapper[data-v-264a40ab]{width:auto;margin:32px 100px 40px}.pagination-wrapper .pagination-content[data-v-264a40ab]{display:flex;justify-content:space-between;max-width:500px;margin:0 auto}",""]),t.exports=e},195:function(t,e,r){"use strict";r(192),r(34),r(35),r(89);var n=r(1).a.extend({mixins:[{computed:{routes:function(){return[{name:"Home",path:"/"},{name:"Project example",path:"/work/ProjectExample"},{name:"Reprogramar a Manha",path:"/work/reprogramar-a-manha"},{name:"Derpings",path:"/contacts"}]}}}],data:function(){return{currentUrl:"",nextUrl:{},prevUrl:{}}},props:{next:{type:Object},prev:{type:Object}},created:function(){var t=this;this.currentUrl=this.$route.name.split("-")[1];var e=this.routes.findIndex((function(e){return e.path===t.$route.path}));this.prevUrl=e>0?this.routes[e-1]:{},e===this.routes.length-1?this.nextUrl={}:this.nextUrl=this.routes[e+1]}}),o=(r(193),r(11)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"pagination-wrapper"},[r("div",{staticClass:"pagination-content"},[r("nuxt-link",{staticClass:"prev-proj",attrs:{to:t.prevUrl.path}},[t._v(t._s(t.prevUrl.name))]),t._v(" "),r("nuxt-link",{staticClass:"next-proj",attrs:{to:t.nextUrl.path}},[t._v(t._s(t.nextUrl.name))])],1)])}),[],!1,null,"264a40ab",null);e.a=component.exports},221:function(t,e,r){"use strict";r.r(e);var n=r(22),o=r(1),l=r(19),c=r(195);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var v=o.a.extend({components:{Pagination:c.a},computed:{getProjTitle:function(){return this.$store.state.title}},mounted:function(){this.$store.commit("setSidebar","open-grid"),this.$store.commit("setProjTitle","This is an example")},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(l.b)(["setSideBar","setProjTitle"]))}),d=r(11),component=Object(d.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"project-wrapper"},[r("div",{staticClass:"title-section"},[r("h1",{staticClass:"title"},[t._v(t._s(t.getProjTitle))]),t._v(" "),r("h2",{staticClass:"subtitle"},[t._v(t._s(t.getProjTitle))])]),t._v(" "),t._m(0),t._v(" "),r("Pagination",{attrs:{next:{title:"next",url:"/work/hello"},prev:{title:"prev",url:"/work/world"}}})],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"project-content"},[r("h3",[t._v("This is a tagline")]),t._v(" "),r("p",{staticClass:"credits"},[t._v("(c) Xyz etc etc Google Apple Inc.")]),t._v(" "),r("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi placerat ligula est, a vehicula ante ultricies vel. Nullam sagittis, augue quis facilisis ullamcorper, risus nibh accumsan nibh, in pulvinar mauris nisl a leo. Nulla facilisi. Integer convallis sodales elementum. Quisque in laoreet diam. Duis a nulla venenatis, imperdiet lacus quis, gravida neque. Praesent eu orci vel urna consectetur porttitor. Cras dictum tristique lorem vitae mattis. Aliquam facilisis ac mauris sit amet vehicula. Etiam ut tortor nec dui vehicula volutpat. In et pulvinar dui. Curabitur pulvinar porttitor tortor id congue. Vivamus fringilla quis dui vitae iaculis. Nunc vel sem venenatis sem ultricies rhoncus a varius quam.")]),t._v(" "),r("video",{staticClass:"media",attrs:{controls:"",src:"https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"}}),t._v(" "),r("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi placerat ligula est, a vehicula ante ultricies vel. Nullam sagittis, augue quis facilisis ullamcorper, risus nibh accumsan nibh, in pulvinar mauris nisl a leo. Nulla facilisi. Integer convallis sodales elementum. Quisque in laoreet diam. Duis a nulla venenatis, imperdiet lacus quis, gravida neque. Praesent eu orci vel urna consectetur porttitor. Cras dictum tristique lorem vitae mattis. Aliquam facilisis ac mauris sit amet vehicula.")]),t._v(" "),r("img",{staticClass:"media",attrs:{src:"https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"}}),t._v(" "),r("img",{staticClass:"media portrait",attrs:{src:"https://lh3.googleusercontent.com/proxy/oEDjJ6QtlJBhKd1hV0l8Zfh3-W8vgrgkxuh8hWESE6E5mzPD1h7aAt7CzUOsFXZcZLJOQapOlOANgqP_rOG1oK1HC5HLH3DYf6VbDN47g_JXTzD6mCcdYYvyJjEHbJeIQuXFxuKy"}})])}],!1,null,null,null);e.default=component.exports}}]);