(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{335:function(t,n,e){var content=e(350);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(28).default)("1119e08a",content,!0,{sourceMap:!1})},349:function(t,n,e){"use strict";e(335)},350:function(t,n,e){var l=e(27)((function(i){return i[1]}));l.push([t.i,"/*purgecss start ignore*/\n@media screen and (min-width:1024px){\nsection[data-v-161467da]{\n    height:calc(100vh - 64px)\n}\n}\n.code-handler-styles[data-v-161467da]{\n  border-radius:10px\n}\n.hero__code[data-v-161467da],.hero__text[data-v-161467da]{\n  flex-basis:50%\n}\n.hero-content-last-name[data-v-161467da]{\n  margin-top:-.25em\n}\n.scroll-icon[data-v-161467da]{\n  -webkit-animation:up-and-down-data-v-161467da 1s ease-out infinite;\n          animation:up-and-down-data-v-161467da 1s ease-out infinite;\n  position:absolute;\n  bottom:0;\n  left:0;\n  font-size:4rem\n}\n@-webkit-keyframes up-and-down-data-v-161467da{\n0%{\n    transform:translateY(0)\n}\n50%{\n    transform:translateY(-10px)\n}\nto{\n    transform:translateY(0)\n}\n}\n@keyframes up-and-down-data-v-161467da{\n0%{\n    transform:translateY(0)\n}\n50%{\n    transform:translateY(-10px)\n}\nto{\n    transform:translateY(0)\n}\n}\n\n/*purgecss end ignore*/",""]),l.locals={},t.exports=l},364:function(t,n,e){"use strict";e.r(n);e(22),e(62);var l=e(148),o={name:"SectionHero",mounted:function(){l.a.highlightAll()},methods:{scrollToPosition:function(t){document.getElementById(t.split("#").pop()).scrollIntoView({behavior:"smooth"})}}},r=(e(349),e(11)),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"flex flex-col lg:flex-row mb-32 p-3 relative",attrs:{id:"home"}},[e("div",{staticClass:"flex flex-col h-full justify-center hero__text md:mr-5 xl:mr-0"},[e("h1",{staticClass:"text-6xl xl:text-7xl 2xl:text-8xl"},[t._v("\n      "+t._s(t.$t("hero.title"))+"\n    ")]),t._v(" "),e("p",{staticClass:"mt-10 text-xl"},[e("strong",[t._v("\n        "+t._s(t.$t("hero.description1"))+"\n      ")])]),t._v(" "),e("p",{staticClass:" text-xl"},[e("strong",[t._v("\n        "+t._s(t.$t("hero.description2"))+"\n      ")])]),t._v(" "),e("div",{staticClass:"flex flex-col sm:flex-row lg:flex-col xl:flex-row"},[e("a",[e("base-button",{staticClass:"mt-12 relative w-full md:w-unset",attrs:{"is-call-to-action":""},on:{click:function(n){return t.scrollToPosition("portfolio")}}},[e("div",{staticClass:"w-full h-full"}),t._v(" "),e("span",{staticClass:"mdi mdi-eye absolute left-5"}),t._v(" "),e("span",{staticClass:"mx-2"}),t._v("\n          "+t._s(t.$t("hero.button1"))+"\n        ")])],1),t._v(" "),e("a",[e("base-button",{staticClass:"mt-2 sm:mt-12 lg:mt-2 xl:mt-12 sm:ml-2 lg:ml-0 xl:ml-2 relative w-full md:w-unset",attrs:{"is-call-to-action":"",outline:""},on:{click:function(n){return t.scrollToPosition("social-networks")}}},[e("div",{staticClass:"w-full h-full"}),t._v(" "),e("span",{staticClass:"mdi mdi-email absolute left-5"}),t._v(" "),e("span",{staticClass:"mx-2"}),t._v("\n          "+t._s(t.$t("hero.button2"))+"\n        ")])],1)])]),t._v(" "),t._m(0),t._v(" "),e("span",{staticClass:"mdi mdi-arrow-down scroll-icon invisible xl:visible"})])}),[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"flex flex-col h-full justify-center hero__code lg:max-w-lg xl:max-w-max"},[n("pre",{staticClass:"line-numbers code-handler-styles",attrs:{"data-src":"/markup.html"}})])}],!1,null,"161467da",null);n.default=component.exports;installComponents(component,{BaseButton:e(67).default})}}]);