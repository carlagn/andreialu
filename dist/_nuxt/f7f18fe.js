(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{130:function(t,e,r){var content=r(185);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(34).default)("33af2d20",content,!0,{sourceMap:!1})},131:function(t,e,r){var content=r(187);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(34).default)("84455a9e",content,!0,{sourceMap:!1})},135:function(t,e,r){"use strict";var o=r(11),component=Object(o.a)({},void 0,void 0,!1,null,null,null);e.a=component.exports},137:function(t,e,r){"use strict";var o=r(22),n=(r(30),r(1)),d=r(19);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=n.a.extend({computed:{getCurrentRoute:function(){return this.$router.path},getActivePage:function(){return this.$store.state.activePage},getSidebarState:function(){return this.$store.state.sidebar}},mounted:function(){this.$store.commit("setActivePage","")},methods:l(l({},Object(d.b)(["setSideBar","setProjTitle","setActivePage"])),{},{toggleAbout:function(){this.displayAbout=!this.displayAbout},backToTop:function(){if("/"===this.$route.path){this.$store.commit("setSidebar","");var t=setInterval((function(){document.querySelector(".grid-wrapper").scrollLeft-=20,0===document.querySelector(".grid-wrapper").scrollLeft&&clearInterval(t)}),1)}else this.$router.push({path:"/"})}})}),v=(r(184),r(11));function x(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={transition:{name:"test",mode:"out-in"},components:{Sidebar:Object(v.a)(f,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"sidebar-wrapper",class:{active:t.getSidebarState,background:"work"===t.getActivePage}},[o("div",{staticClass:"sidebar-box"},[o("div",{staticClass:"logo-box"},[o("div",{staticClass:"logo",on:{click:function(e){return t.backToTop()}}},[o("img",{attrs:{src:r(183)}}),t._v(" "),o("span",{staticClass:"label"},[t._v("copywriter.")])]),t._v(" "),o("div",{staticClass:"menu"},[o("nuxt-link",{class:{active:"work"===t.getActivePage},attrs:{to:"/"}},[t._v("Work")]),t._v(" "),o("nuxt-link",{class:{active:"about"===t.getActivePage},attrs:{to:"/about"}},[t._v("About")])],1)])])])}),[],!1,null,"34baf014",null).exports},computed:{sidebarClass:function(){return this.$store.state.sidebar}},mounted:function(){},methods:h(h({},Object(d.b)(["setSideBar"])),{},{checkIfMobile:function(){return document.querySelector(".grid-container").getBoundingClientRect()>=768}})},w=(r(186),Object(v.a)(m,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Sidebar",{class:this.sidebarClass}),this._v(" "),e("transition",{attrs:{name:"fade",mode:"out-in"}},[e("Nuxt",{attrs:{sidebar:this.sidebarClass}})],1)],1)}),[],!1,null,null,null));e.a=w.exports},138:function(t,e,r){t.exports=r(139)},181:function(t,e,r){var content=r(182);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(34).default)("5c670272",content,!0,{sourceMap:!1})},182:function(t,e,r){(e=r(33)(!1)).push([t.i,".page-enter-active,.page-leave-active{transition:all .5s}.page-enter,.page-leave-active{opacity:0}",""]),t.exports=e},183:function(t,e,r){t.exports=r.p+"img/logo.ac98316.png"},184:function(t,e,r){"use strict";r(130)},185:function(t,e,r){(e=r(33)(!1)).push([t.i,'.sidebar-wrapper[data-v-34baf014]{z-index:10000;position:relative;transition:.2s,.1s ease-in;transition-property:height,width;transition-delay:0s,.3s;pointer-events:none;font-family:"Roboto Mono",monospace;font-weight:300;height:auto;width:100%}@media(min-device-width:769px){.sidebar-wrapper[data-v-34baf014]{width:auto;position:absolute;height:33.33333vh}}.sidebar-wrapper.active[data-v-34baf014]{height:100vh}.sidebar-wrapper.background[data-v-34baf014]{height:auto;position:fixed;background-color:#f8f8ff}@media(min-device-width:769px){.sidebar-wrapper.background[data-v-34baf014]{height:33.33333vh}}.sidebar-wrapper a[data-v-34baf014]{pointer-events:auto}.sidebar-wrapper a.active[data-v-34baf014]{text-decoration:underline}.sidebar-wrapper .sidebar-box[data-v-34baf014]{width:auto}@media(min-device-width:769px){.sidebar-wrapper .sidebar-box[data-v-34baf014]{padding:0 32px 0 24px;margin:46px 0}}.sidebar-wrapper .logo-box[data-v-34baf014]{display:flex;pointer-events:auto;align-items:center;height:268px;padding:16px}@media(min-device-width:769px){.sidebar-wrapper .logo-box[data-v-34baf014]{height:auto;padding:0}}.sidebar-wrapper .logo-box img[data-v-34baf014]{margin-top:0;max-width:180px}@media(min-device-width:769px){.sidebar-wrapper .logo-box img[data-v-34baf014]{max-width:100px}}.sidebar-wrapper .logo-box .logo[data-v-34baf014]{cursor:pointer;display:inline-block;padding-bottom:32px}@media(min-device-width:769px){.sidebar-wrapper .logo-box .logo[data-v-34baf014]{padding-bottom:0}}.sidebar-wrapper .logo-box .menu[data-v-34baf014]{font-size:32px;margin-left:auto;text-transform:uppercase;padding-left:16px;font-family:"Roboto",sans-serif;letter-spacing:2px;transition-property:opacity;transition-delay:.4s}@media(min-device-width:769px){.sidebar-wrapper .logo-box .menu[data-v-34baf014]{font-size:14px;margin-left:none}}.sidebar-wrapper .logo-box .menu a[data-v-34baf014],.sidebar-wrapper .logo-box .menu div[data-v-34baf014]{display:inline-block;margin-right:8px;text-decoration:none;position:relative;color:#000}.sidebar-wrapper .logo-box .menu a.active[data-v-34baf014],.sidebar-wrapper .logo-box .menu div.active[data-v-34baf014]{text-decoration:underline}.sidebar-wrapper.open-grid[data-v-34baf014]{height:auto;transition:.2s,.1s ease-in;transition-property:height,width;width:100%;transition-delay:.35s,.3s;display:flex;align-items:flex-start}@media(min-device-width:769px){.sidebar-wrapper.open-grid[data-v-34baf014]{width:170px;height:160px}}.sidebar-wrapper.open-grid .hotlinks[data-v-34baf014],.sidebar-wrapper.open-grid .intro-box[data-v-34baf014],.sidebar-wrapper.open-grid .link-box[data-v-34baf014]{opacity:0;position:absolute;transition:opacity .1s ease-in;transition-delay:0s}.sidebar-wrapper.open-grid .menu[data-v-34baf014]{opacity:0;transition-property:opacity;transition-delay:0s}.sidebar-wrapper.open-grid .menu>a[data-v-34baf014]{pointer-events:none}.sidebar-wrapper .label[data-v-34baf014]{text-align:center;margin-top:-40px;font-size:18px;margin-left:32px;font-family:"Roboto Mono",monospace;font-weight:700;display:block;text-decoration:underline}@media(min-device-width:769px){.sidebar-wrapper .label[data-v-34baf014]{margin-top:-25px;margin-bottom:24px;text-align:left;font-size:12px;margin-left:24px}}.sidebar-wrapper img[data-v-34baf014]{display:block;max-width:100px}@media(min-device-width:769px){.sidebar-wrapper img[data-v-34baf014]{max-width:150px;margin:100% 0 0}}.sidebar-wrapper.open[data-v-34baf014]:after{background:#000}.sidebar-wrapper .intro-box[data-v-34baf014]{margin-top:25%}.sidebar-wrapper .hotlinks[data-v-34baf014],.sidebar-wrapper .intro-box[data-v-34baf014],.sidebar-wrapper .link-box[data-v-34baf014]{transition:opacity .1s ease-in;line-height:20px;transition-delay:.35s;padding:10px 20px;position:absolute;opacity:0}@media(min-device-width:769px){.sidebar-wrapper .hotlinks[data-v-34baf014],.sidebar-wrapper .intro-box[data-v-34baf014],.sidebar-wrapper .link-box[data-v-34baf014]{position:static;opacity:1}}.sidebar-wrapper .hotlinks[data-v-34baf014]{bottom:0}.sidebar-wrapper .about[data-v-34baf014]{display:none}.sidebar-wrapper .about.active[data-v-34baf014]{display:block}',""]),t.exports=e},186:function(t,e,r){"use strict";r(131)},187:function(t,e,r){(e=r(33)(!1)).push([t.i,'body{background-color:#f8f8ff;margin:0}.title-section{font-family:"Roboto Mono",monospace;margin-right:40px;text-align:right;height:300px;display:flex;justify-content:center;align-items:left;flex-direction:column;top:225px}@media(min-device-width:769px){.title-section{position:fixed;left:16px;max-width:20%;margin-right:0;height:auto;text-align:left}}.title-section .subtitle,.title-section .title{padding-left:16px}.title-section h1.title{font-size:32px}@media(min-device-width:769px){.title-section h1.title{font-size:20px}}.title-section h2.subtitle{font-weight:regular;font-size:24px;margin-top:24px}@media(min-device-width:769px){.title-section h2.subtitle{font-size:18px;margin:4px 0}}.project-wrapper{padding:0 16px;font-family:"Roboto",sans-serif;height:100vh;font-weight:300;position:relative;margin-top:-300px}@media(min-device-width:769px){.project-wrapper{margin-top:0;overflow:auto;margin-left:100px}}.project-wrapper iframe,.project-wrapper video{width:100%}.project-wrapper .media{margin:32px auto;display:block;width:100%}.project-wrapper .media.portrait{width:50%;height:auto}.project-wrapper .project-content{max-width:800px;margin:0 auto;padding:16px}.project-wrapper h1{margin:0}.project-wrapper h3{font-size:24px;font-weight:400;margin:8px 0}@media(min-device-width:769px){.project-wrapper h3{font-size:16px}}.project-wrapper .credits{font-size:20px;font-weight:light;color:grey;margin:4px 0}@media(min-device-width:769px){.project-wrapper .credits{font-size:12px}}.project-wrapper a{font-weight:700;color:#000;text-decoration:none}.project-wrapper a:hover{text-decoration:underline}p{font-size:24px;line-height:24pt;margin:32px 0}@media(min-device-width:769px){p{line-height:16pt;font-size:16px}}',""]),t.exports=e},188:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return o})),r.d(e,"mutations",(function(){return n})),r.d(e,"getters",(function(){return d}));var o=function(){return{sidebar:"",title:"",activePage:"work"}},n={setSidebar:function(t,e){t.sidebar=e},setProjTitle:function(t,e){t.title=e},setActivePage:function(t,e){t.activePage=e}},d={getProjTitle:function(t){return t.title}}}},[[138,7,1,8]]]);