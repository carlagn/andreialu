(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{130:function(t,e,r){var content=r(183);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(45).default)("6eb9a023",content,!0,{sourceMap:!1})},131:function(t,e,r){var content=r(185);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(45).default)("84455a9e",content,!0,{sourceMap:!1})},135:function(t,e,r){"use strict";var o=r(11),component=Object(o.a)({},void 0,void 0,!1,null,null,null);e.a=component.exports},137:function(t,e,r){"use strict";var o=r(22),n=(r(30),r(1)),c=r(19);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=n.a.extend({data:function(){return{active:"work"}},computed:{getCurrentRoute:function(){return this.$router.path},getActivePage:function(){return this.$store.state.activePage},getSidebarState:function(){return this.$store.state.sidebar}},methods:l(l({},Object(c.b)(["setSideBar","setProjTitle","setActivePage"])),{},{toggleAbout:function(){this.displayAbout=!this.displayAbout},backToTop:function(){if("/"===this.$route.path){this.$store.commit("setSidebar","");var t=setInterval((function(){document.querySelector(".grid-wrapper").scrollLeft-=20,0===document.querySelector(".grid-wrapper").scrollLeft&&clearInterval(t)}),1)}else this.$router.push({path:"/"})}})}),v=(r(182),r(11));function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var x={components:{Sidebar:Object(v.a)(f,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"sidebar-wrapper",class:{active:t.getSidebarState}},[o("div",{staticClass:"sidebar-box"},[o("div",{staticClass:"logo-box"},[o("div",{staticClass:"logo",on:{click:function(e){return t.backToTop()}}},[o("img",{attrs:{src:r(181)}}),t._v(" "),o("span",{staticClass:"label"},[t._v("copywriter.")])]),t._v(" "),o("div",{staticClass:"menu"},[o("nuxt-link",{class:{active:"work"===t.getActivePage},attrs:{to:"/"}},[t._v("Work")]),t._v(" "),o("nuxt-link",{class:{active:"about"===t.getActivePage},attrs:{to:"/about"}},[t._v("About")])],1)])])])}),[],!1,null,"744439f3",null).exports},computed:{sidebarClass:function(){return this.$store.state.sidebar}},mounted:function(){},methods:h(h({},Object(c.b)(["setSideBar"])),{},{checkIfMobile:function(){return document.querySelector(".grid-container").getBoundingClientRect()>=768}})},m=(r(184),Object(v.a)(x,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Sidebar",{class:this.sidebarClass}),this._v(" "),e("Nuxt",{attrs:{sidebar:this.sidebarClass}})],1)}),[],!1,null,null,null));e.a=m.exports},138:function(t,e,r){t.exports=r(139)},181:function(t,e,r){t.exports=r.p+"img/logo.ac98316.png"},182:function(t,e,r){"use strict";r(130)},183:function(t,e,r){(e=r(44)(!1)).push([t.i,'.sidebar-wrapper[data-v-744439f3]{transition:.2s,.1s ease-in;transition-property:height,width;transition-delay:0s,.3s;pointer-events:none;position:fixed;background-color:#f8f8ff;font-family:"Roboto Mono",monospace;font-weight:300;height:auto;width:100%}@media(min-device-width:769px){.sidebar-wrapper[data-v-744439f3]{width:auto;height:33.33333vh}}.sidebar-wrapper.active[data-v-744439f3]{height:100vh}.sidebar-wrapper a[data-v-744439f3]{pointer-events:auto}.sidebar-wrapper a.active[data-v-744439f3]{text-decoration:underline}.sidebar-wrapper .sidebar-box[data-v-744439f3]{width:auto;margin:46px 0;padding:0 32px 0 24px}.sidebar-wrapper .logo-box[data-v-744439f3]{display:flex;pointer-events:auto;align-items:center}.sidebar-wrapper .logo-box img[data-v-744439f3]{margin-top:0;max-width:100px}.sidebar-wrapper .logo-box .logo[data-v-744439f3]{cursor:pointer;display:inline-block}.sidebar-wrapper .logo-box .menu[data-v-744439f3]{padding-left:16px;text-transform:uppercase;font-family:"Roboto",sans-serif;font-size:14px;letter-spacing:2px;transition-property:opacity;transition-delay:.4s}.sidebar-wrapper .logo-box .menu a[data-v-744439f3],.sidebar-wrapper .logo-box .menu div[data-v-744439f3]{display:inline-block;margin-right:8px;text-decoration:none;position:relative;color:#000}.sidebar-wrapper .logo-box .menu a.active[data-v-744439f3],.sidebar-wrapper .logo-box .menu div.active[data-v-744439f3]{text-decoration:underline}.sidebar-wrapper.open-grid[data-v-744439f3]{transition:.2s,.1s ease-in;transition-property:height,width;width:100%;transition-delay:.35s,.3s;height:160px;display:flex;align-items:flex-start}@media(min-device-width:769px){.sidebar-wrapper.open-grid[data-v-744439f3]{width:170px}}.sidebar-wrapper.open-grid .hotlinks[data-v-744439f3],.sidebar-wrapper.open-grid .intro-box[data-v-744439f3],.sidebar-wrapper.open-grid .link-box[data-v-744439f3]{opacity:0;position:absolute;transition:opacity .1s ease-in;transition-delay:0s}.sidebar-wrapper.open-grid .menu[data-v-744439f3]{opacity:0;transition-property:opacity;transition-delay:0s}.sidebar-wrapper .label[data-v-744439f3]{font-family:"Roboto Mono",monospace;font-weight:700;font-size:12px;display:block;text-decoration:underline}@media(min-device-width:769px){.sidebar-wrapper .label[data-v-744439f3]{margin-top:-25px;margin-bottom:24px;text-align:left;margin-left:24px}}.sidebar-wrapper img[data-v-744439f3]{display:block;max-width:100px}@media(min-device-width:769px){.sidebar-wrapper img[data-v-744439f3]{max-width:150px;margin:100% 0 0}}.sidebar-wrapper.open[data-v-744439f3]:after{background:#000}.sidebar-wrapper .intro-box[data-v-744439f3]{margin-top:25%}.sidebar-wrapper .hotlinks[data-v-744439f3],.sidebar-wrapper .intro-box[data-v-744439f3],.sidebar-wrapper .link-box[data-v-744439f3]{transition:opacity .1s ease-in;line-height:20px;transition-delay:.35s;padding:10px 20px;position:absolute;opacity:0}@media(min-device-width:769px){.sidebar-wrapper .hotlinks[data-v-744439f3],.sidebar-wrapper .intro-box[data-v-744439f3],.sidebar-wrapper .link-box[data-v-744439f3]{position:static;opacity:1}}.sidebar-wrapper .hotlinks[data-v-744439f3]{bottom:0}.sidebar-wrapper .about[data-v-744439f3]{display:none}.sidebar-wrapper .about.active[data-v-744439f3]{display:block}',""]),t.exports=e},184:function(t,e,r){"use strict";r(131)},185:function(t,e,r){(e=r(44)(!1)).push([t.i,'body{background-color:#f8f8ff;margin:0}.title-section{font-family:"Merriweather",serif;position:fixed;left:16px;max-width:20%;top:225px}.title-section .subtitle,.title-section .title{padding-left:16px}.title-section h1.title{font-size:20px}.title-section h2.subtitle{font-size:18px;margin:4px 0;font-weight:regular}.project-wrapper{font-family:"Roboto",sans-serif;height:100vh;margin-left:100px;overflow:auto;font-weight:300;position:relative}.project-wrapper iframe,.project-wrapper video{width:100%}.project-wrapper .media{margin:32px auto;display:block;width:100%}.project-wrapper .media.portrait{width:50%;height:auto}.project-wrapper .project-content{max-width:800px;margin:0 auto;padding:16px}.project-wrapper h1{margin:0}.project-wrapper h3{font-weight:400;font-size:16px;margin:8px 0}.project-wrapper .credits{font-weight:light;color:grey;font-size:12px;margin:4px 0}.project-wrapper a{font-weight:700;color:#000;text-decoration:none}.project-wrapper a:hover{text-decoration:underline}p{margin:32px 0;line-height:16pt}',""]),t.exports=e},186:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return o})),r.d(e,"mutations",(function(){return n})),r.d(e,"getters",(function(){return c}));var o=function(){return{sidebar:"",title:"",activePage:"work"}},n={setSidebar:function(t,e){t.sidebar=e},setProjTitle:function(t,e){t.title=e},setActivePage:function(t,e){t.activePage=e}},c={getProjTitle:function(t){return t.title}}}},[[138,7,1,8]]]);