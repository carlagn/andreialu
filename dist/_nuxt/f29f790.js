(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{193:function(t,e,r){var content=r(196);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(34).default)("5c9b8714",content,!0,{sourceMap:!1})},194:function(t,e,r){"use strict";var n=r(2),o=r(35).findIndex,d=r(88),c=r(15),l=!0,h=c("findIndex");"findIndex"in[]&&Array(1).findIndex((function(){l=!1})),n({target:"Array",proto:!0,forced:l||!h},{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),d("findIndex")},195:function(t,e,r){"use strict";r(193)},196:function(t,e,r){(e=r(33)(!1)).push([t.i,'.pagination-wrapper[data-v-4a479668]{padding-top:40px;padding-bottom:80px;margin-left:100px;margin-right:100px;width:auto}@media(min-device-width:769px){.pagination-wrapper[data-v-4a479668]{padding:40px 0}}.pagination-wrapper .pagination-content[data-v-4a479668]{display:flex;justify-content:space-between;max-width:500px;margin:0 auto}.pagination-wrapper .pagination-content a[data-v-4a479668]{font-weight:400;position:relative;font-size:32px}@media(min-device-width:769px){.pagination-wrapper .pagination-content a[data-v-4a479668]{font-weight:lighter;font-size:16px}}.pagination-wrapper .pagination-content .prev-proj[data-v-4a479668]:before{content:"";position:absolute;border-left:3px solid #000;border-top:3px solid #000;transform:rotate(-45deg);height:15px;width:15px;right:100%;top:10px;margin-right:10px}@media(min-device-width:769px){.pagination-wrapper .pagination-content .prev-proj[data-v-4a479668]:before{border-width:1px;height:8px;width:8px;top:5px}}.pagination-wrapper .pagination-content .next-proj[data-v-4a479668]:after{content:"";position:absolute;border-right:3px solid #000;border-top:3px solid #000;margin-left:10px;transform:rotate(45deg);height:15px;width:15px;left:100%;top:10px}@media(min-device-width:769px){.pagination-wrapper .pagination-content .next-proj[data-v-4a479668]:after{border-width:1px;height:8px;width:8px;top:5px}}',""]),t.exports=e},197:function(t,e,r){"use strict";r(194),r(36),r(37),r(89);var n=r(1).a.extend({mixins:[{computed:{routes:function(){return[{name:"Home",path:"/"},{name:"Project example",path:"/work/ProjectExample"},{name:"Reprogramar a Manha",path:"/work/reprogramar-a-manha"},{name:"Derpings",path:"/contacts"}]}}}],data:function(){return{currentUrl:"",nextUrl:{},prevUrl:{}}},props:{next:{type:Object},prev:{type:Object}},created:function(){var t=this;this.currentUrl=this.$route.name.split("-")[1];var e=this.routes.findIndex((function(e){return e.path===t.$route.path}));this.prevUrl=e>0?this.routes[e-1]:{},e===this.routes.length-1?this.nextUrl={}:this.nextUrl=this.routes[e+1]}}),o=(r(195),r(11)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"pagination-wrapper"},[r("div",{staticClass:"pagination-content"},[r("nuxt-link",{staticClass:"prev-proj",attrs:{to:t.prevUrl.path}},[t._v(t._s(t.prevUrl.name))]),t._v(" "),r("nuxt-link",{staticClass:"next-proj",attrs:{to:t.nextUrl.path}},[t._v(t._s(t.nextUrl.name))])],1)])}),[],!1,null,"4a479668",null);e.a=component.exports},231:function(t,e,r){"use strict";r.r(e);r(197);var n=r(11),component=Object(n.a)(void 0,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"project-wrapper"},[t._m(0),t._v(" "),r("div",{staticClass:"project-content"},[r("p",{staticClass:"credits"},[t._v("(c) Aqui são os créditos, ou qualquer side-note que querias pôr a cinza.")]),t._v(" "),r("p",[t._v('Um parágrafo. Tudo o que for aqui dentro, mesmo que separado por um "Enter", vai ser mostrado como texto corrido. Para evitar esta situação, podes fazer vários elementos iguais a este tal como no exemplo')]),t._v(" "),r("p",[t._v("que")]),t._v(" "),r("p",[t._v("estou aqui")]),t._v(" "),r("p",[t._v("a mostrar")]),t._v(" "),t._m(1),t._v(" "),r("video",{staticClass:"media",attrs:{controls:"",muted:"",autoplay:"",src:"https://cdn-a.luerzersarchive.com/archive/submissions/tv_commercials/720/2018/317094.mp4?Expires=1609614723&Signature=GHeYQe3YeQ2j~cltAnM4nG17xQXDAz7EyRzXFZfea34bsdpO5R9RoWumey3Ldt1BDiS7ax5FhsLIatBJiLEMp6UyCl1z9fw~efQDP~awWLQ1SgtOaDC3HzHnZX3mqJkuwC1YXss0ri4Nq4IAmvRrJ2QwevR8s9gOgGR4G81IdHPBMNjs5P8vrDcz~QrmzZdOZ5AUulb1JT9yxNt4Bv-dDqMlJbiUTTzN1xlID9nsJUpGuTg7prWwvRmfG-OVOYgRODbDx0ShVpOVGe0iqd~Y5jwzVPBBPwCap76QEQpjcl4dYKjFKLBjOsibawaZ2MzbKRF-NdZ4h8SOqMm6iX7VOA__&Key-Pair-Id=APKAJXKTOLSPBG77KE6Q"},domProps:{muted:!0}})])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title-section"},[e("h1",{staticClass:"title"},[this._v("Título grande")]),this._v(" "),e("h2",{staticClass:"subtitle"},[this._v("Título menor")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Ou separar com esta chamada: "),e("br"),this._v(" este elemento faz um parágrafo.")])}],!1,null,null,null);e.default=component.exports}}]);