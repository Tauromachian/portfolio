(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{323:function(t,e,n){var content=n(334);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(37).default)("2234674b",content,!0,{sourceMap:!1})},333:function(t,e,n){"use strict";n(323)},334:function(t,e,n){var o=n(36)((function(i){return i[1]}));o.push([t.i,"/*purgecss start ignore*/\n@media screen and (min-width:1024px){\nsection[data-v-71401023]{\n    height:calc(100vh - 64px)\n}\n}\n.code-handler-styles[data-v-71401023]{\n  border-radius:10px\n}\n.hero__code[data-v-71401023],.hero__text[data-v-71401023]{\n  flex-basis:50%\n}\n.hero__code .code-toolbar[data-v-71401023]{\n  height:100%!important\n}\n.hero-content-last-name[data-v-71401023]{\n  margin-top:-.25em\n}\n.scroll-icon[data-v-71401023]{\n  -webkit-animation:up-and-down-data-v-71401023 1s ease-out infinite;\n          animation:up-and-down-data-v-71401023 1s ease-out infinite;\n  position:absolute;\n  bottom:0;\n  left:0;\n  font-size:4rem\n}\n.perspective[data-v-71401023]{\n  perspective:1000px\n}\n.rotation-effect[data-v-71401023]{\n  transform-style:preserve-3d;\n  margin-top:20px;\n  box-shadow:20px 20px 30px #000;\n  transform:rotateY(-30deg)\n}\n@-webkit-keyframes up-and-down-data-v-71401023{\n0%{\n    transform:translateY(0)\n}\n50%{\n    transform:translateY(-10px)\n}\nto{\n    transform:translateY(0)\n}\n}\n@keyframes up-and-down-data-v-71401023{\n0%{\n    transform:translateY(0)\n}\n50%{\n    transform:translateY(-10px)\n}\nto{\n    transform:translateY(0)\n}\n}\n\n/*purgecss end ignore*/",""]),o.locals={},t.exports=o},355:function(t,e,n){"use strict";n.r(e);n(21),n(62);var o={name:"SectionHero",components:{},data:function(){return{isHidden:!0,theme:"default"}},methods:{scrollToPosition:function(t){document.getElementById(t.split("#").pop()).scrollIntoView({behavior:"smooth"})}}},l=(n(333),n(11)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"flex flex-col lg:flex-row mb-32 p-3 relative",attrs:{id:"home"}},[n("div",{staticClass:"flex flex-col h-full justify-center hero__text md:mr-5 xl:mr-0"},[n("h1",{staticClass:"text-6xl xl:text-7xl 2xl:text-8xl"},[t._v("\n      "+t._s(t.$t("hero.title"))+"\n    ")]),t._v(" "),n("p",{staticClass:"mt-10 text-xl"},[n("strong",[t._v("\n        "+t._s(t.$t("hero.description1"))+"\n      ")])]),t._v(" "),n("p",{staticClass:"text-xl"},[n("strong",[t._v("\n        "+t._s(t.$t("hero.description2"))+"\n      ")])]),t._v(" "),n("div",{staticClass:"flex flex-col sm:flex-row lg:flex-col xl:flex-row"},[n("a",[n("base-button",{staticClass:"mt-12 relative w-full md:w-unset",attrs:{"is-call-to-action":""},on:{click:function(e){return t.scrollToPosition("portfolio")}}},[n("div",{staticClass:"w-full h-full"}),t._v(" "),n("img",{staticClass:"absolute left-5 top-5",attrs:{src:"/icons/eye.svg",alt:"Eye icon",width:"30px",height:"30px"}}),t._v(" "),n("span",{staticClass:"mx-2"}),t._v("\n          "+t._s(t.$t("hero.button1"))+"\n        ")])],1),t._v(" "),n("a",[n("base-button",{staticClass:"mt-2 sm:mt-12 lg:mt-2 xl:mt-12 sm:ml-2 lg:ml-0 xl:ml-2 relative w-full md:w-unset",attrs:{"is-call-to-action":"",outline:""},on:{click:function(e){return t.scrollToPosition("social-networks")}}},[n("div",{staticClass:"w-full h-full"}),t._v(" "),n("img",{staticClass:"absolute left-5 top-5",attrs:{src:"/icons/email.svg",alt:"Email icon",width:"30px",height:"30px"}}),t._v(" "),n("span",{staticClass:"mx-2"}),t._v("\n          "+t._s(t.$t("hero.button2"))+"\n        ")])],1)])]),t._v(" "),t._m(0),t._v(" "),n("img",{staticClass:"scroll-icon invisible xl:visible ml-2",attrs:{src:"/icons/arrow-down.svg",alt:"Arrow down icon",width:"60px",height:"60px"}})])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col mt-10 md:mt-0 h-full justify-center hero__code lg:max-w-lg xl:max-w-max"},[n("div",[n("picture",{staticClass:"perspective"},[n("source",{attrs:{sizes:"(min-width: 347px)",type:"image/avif",srcset:"avif/1280/code.avif 1280w, avif/640/code.avif 640w"}}),t._v(" "),n("source",{attrs:{type:"image/webp",srcset:"webp/1280/code.webp 1280w, webp/640/code.webp 640w"}}),t._v(" "),n("img",{staticClass:"w-full h-auto rotation-effect",attrs:{width:"1256",height:"1004",alt:"Code for the sake of showing some of my skills.",srcset:"images/1280/code.png 1280w, images/640/code.png 640w"}})])])])}],!1,null,"71401023",null);e.default=component.exports;installComponents(component,{BaseButton:n(67).default})}}]);