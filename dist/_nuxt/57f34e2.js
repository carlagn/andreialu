(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{130:function(t,e,r){var content=r(181);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(59).default)("c2f4f006",content,!0,{sourceMap:!1})},135:function(t,e,r){"use strict";var o=r(30),n=(r(29),r(1).a.extend({watch:{$route:function(t,e){console.log(t,e)}},methods:{backToTop:function(){this.$store.commit("setSidebar","");var t=setInterval((function(){document.querySelector(".grid-wrapper").scrollLeft-=20,0===document.querySelector(".grid-wrapper").scrollLeft&&clearInterval(t)}),1)}}})),d=(r(180),r(20)),c=Object(d.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"sidebar-wrapper"},[o("div",{staticClass:"sidebar-box"},[o("div",{staticClass:"logo-box",on:{click:function(e){return t.backToTop()}}},[o("img",{attrs:{src:r(179)}}),t._v(" "),o("span",{staticClass:"label"},[t._v("copywriter.")])]),t._v(" "),o("div",{staticClass:"intro-box"},[t._v("\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n            Aenean sed orci convallis, ultrices elit at, lacinia ante.\n            Praesent quam felis, lobortis nec rhoncus quis, vestibulum at purus.\n            Etiam leo quam, rutrum ut egestas eget, porta fringilla orci.\n        ")]),t._v(" "),o("div",{staticClass:"hotlinks"},[t._v("\n            Find me at:\n        ")]),t._v(" "),o("div",{staticClass:"link-box"},[t._v("\n            [lo][lo][lo]\n        ")])])])}),[],!1,null,"1a508f5f",null).exports,l=r(23);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={components:{Sidebar:c},computed:{sidebarClass:function(){return this.$store.state.sidebar}},methods:m(m({},Object(l.b)(["setSideBar"])),{},{scrollHorizontal:function(element,t){document.querySelector(".grid-container")&&(document.querySelector(".grid-container").getBoundingClientRect().x<100?this.$store.commit("setSidebar","open-grid"):this.$store.commit("setSidebar",""))}})},w=Object(d.a)(v,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{on:{wheel:this.scrollHorizontal}},[e("Sidebar",{class:this.sidebarClass}),this._v(" "),e("Nuxt",{attrs:{sidebar:this.sidebarClass}})],1)}),[],!1,null,null,null);e.a=w.exports},136:function(t,e,r){t.exports=r(137)},179:function(t,e,r){t.exports=r.p+"img/logo.ac98316.png"},180:function(t,e,r){"use strict";r(130)},181:function(t,e,r){(e=r(58)(!1)).push([t.i,'.sidebar-wrapper[data-v-1a508f5f]{position:absolute;background-color:#fff;font-family:"Castoro",serif;height:auto;width:100%}@media(min-width:768px){.sidebar-wrapper[data-v-1a508f5f]{width:500px;height:100vh}}.sidebar-wrapper .logo-box[data-v-1a508f5f]{cursor:pointer;display:flex;align-items:center}@media(min-width:768px){.sidebar-wrapper .logo-box[data-v-1a508f5f]{display:block}}.sidebar-wrapper.open-grid[data-v-1a508f5f]{width:100px;display:flex;align-items:center}.sidebar-wrapper.open-grid .hotlinks[data-v-1a508f5f],.sidebar-wrapper.open-grid .intro-box[data-v-1a508f5f],.sidebar-wrapper.open-grid .link-box[data-v-1a508f5f]{display:none}.sidebar-wrapper.open-grid img[data-v-1a508f5f]{margin-top:0;max-width:100px}.sidebar-wrapper .label[data-v-1a508f5f]{font-size:12px;display:block;text-decoration:underline}@media(min-width:768px){.sidebar-wrapper .label[data-v-1a508f5f]{margin-top:-25px;margin-bottom:24px;text-align:center}}.sidebar-wrapper img[data-v-1a508f5f]{display:block;max-width:100px}@media(min-width:768px){.sidebar-wrapper img[data-v-1a508f5f]{max-width:150px;margin:30% auto 0}}.sidebar-wrapper.open[data-v-1a508f5f]:after{background:#000}.sidebar-wrapper .hotlinks[data-v-1a508f5f],.sidebar-wrapper .intro-box[data-v-1a508f5f],.sidebar-wrapper .link-box[data-v-1a508f5f]{padding:10px 30px;display:none}@media(min-width:768px){.sidebar-wrapper .hotlinks[data-v-1a508f5f],.sidebar-wrapper .intro-box[data-v-1a508f5f],.sidebar-wrapper .link-box[data-v-1a508f5f]{display:block}}',""]),t.exports=e},182:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return o})),r.d(e,"mutations",(function(){return n}));var o=function(){return{sidebar:""}},n={setSidebar:function(t,e){t.sidebar=e}}}},[[136,4,1,5]]]);