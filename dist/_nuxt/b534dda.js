(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{193:function(t,e,r){var content=r(196);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(34).default)("d8f1fde6",content,!0,{sourceMap:!1})},194:function(t,e,r){"use strict";var n=r(2),o=r(35).findIndex,c=r(88),l=r(15),d=!0,h=l("findIndex");"findIndex"in[]&&Array(1).findIndex((function(){d=!1})),n({target:"Array",proto:!0,forced:d||!h},{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),c("findIndex")},195:function(t,e,r){"use strict";r(193)},196:function(t,e,r){(e=r(33)(!1)).push([t.i,".pagination-wrapper[data-v-72d8af04]{width:auto;margin:32px 100px 40px}.pagination-wrapper .pagination-content[data-v-72d8af04]{display:flex;justify-content:space-between;max-width:500px;margin:0 auto}.pagination-wrapper .pagination-content a[data-v-72d8af04]{font-weight:lighter}",""]),t.exports=e},197:function(t,e,r){"use strict";r(194),r(36),r(37),r(89);var n=r(1).a.extend({mixins:[{computed:{routes:function(){return[{name:"Home",path:"/"},{name:"Project example",path:"/work/ProjectExample"},{name:"Reprogramar a Manha",path:"/work/reprogramar-a-manha"},{name:"Derpings",path:"/contacts"}]}}}],data:function(){return{currentUrl:"",nextUrl:{},prevUrl:{}}},props:{next:{type:Object},prev:{type:Object}},created:function(){var t=this;this.currentUrl=this.$route.name.split("-")[1];var e=this.routes.findIndex((function(e){return e.path===t.$route.path}));this.prevUrl=e>0?this.routes[e-1]:{},e===this.routes.length-1?this.nextUrl={}:this.nextUrl=this.routes[e+1]}}),o=(r(195),r(11)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"pagination-wrapper"},[r("div",{staticClass:"pagination-content"},[r("nuxt-link",{staticClass:"prev-proj",attrs:{to:t.prevUrl.path}},[t._v(t._s(t.prevUrl.name))]),t._v(" "),r("nuxt-link",{staticClass:"next-proj",attrs:{to:t.nextUrl.path}},[t._v(t._s(t.nextUrl.name))])],1)])}),[],!1,null,"72d8af04",null);e.a=component.exports},227:function(t,e,r){"use strict";r.r(e);var n=r(22),o=r(1),c=r(19),l=r(197);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var h=o.a.extend({components:{Pagination:l.a},mounted:function(){this.$store.commit("setSidebar","open-grid")},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)(["setSideBar"]))}),f=r(11),component=Object(f.a)(h,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"project-wrapper"},[this._m(0),this._v(" "),this._m(1),this._v(" "),e("Pagination")],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title-section"},[e("h1",{staticClass:"title"},[this._v("McDonald’s")]),this._v(" "),e("h2",{staticClass:"subtitle"},[this._v("Reprogramar a manhã.")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"project-content"},[r("p",{staticClass:"credits"},[t._v("(c) LüRZER'S ARCHIVE & 4 stars in DAVID REVIEWS")]),t._v(" "),r("p",[t._v("Links: "),r("a",{attrs:{href:"https://vimeo.com/266584215"}},[t._v("ENG")]),t._v(" & "),r("a",{attrs:{href:"https://www.youtube.com/watch?v=16g1yV89nvA"}},[t._v("PT")])]),t._v(" "),r("div",{staticStyle:{padding:"56.25% 0 0 0",position:"relative"}},[r("iframe",{staticStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},attrs:{src:"https://player.vimeo.com/video/266584215?title=0&byline=0&portrait=0",frameborder:"0",allow:"fullscreen",allowfullscreen:""}})]),t._v(" "),r("p",[t._v("McDonald’s “The Robots” is like “Groundhog Day”– only this time with robots. Caught in a time loop, doing the same things over and over again, not being able to break out of the circle until the McDonald’s breakfast menu offers a helping hand, adding variety to the daily grind.")]),t._v(" "),r("p",[t._v("We had this served it with some radios on the side. Sunny side up.\n            "),r("br"),t._v("Rádios -  "),r("a",{attrs:{href:"https://soundcloud.com/ndyuu/sets/reprogramar-a-manha-radios"}},[t._v("https://soundcloud.com/ndyuu/sets/reprogramar-a-manha-radios")])]),t._v(" "),r("p",{staticClass:"credits"},[r("b",[t._v("TBWA")]),t._v(" C: Andreia Luísa A.D: António Belchior C.D: Marco Pacheco Director: Major Paco (Major West)")])])}],!1,null,null,null);e.default=component.exports}}]);