(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{185:function(e,n,t){var content=t(251);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(37).default)("20951ede",content,!0,{sourceMap:!1})},186:function(e,n,t){var content=t(253);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(37).default)("60f84d4e",content,!0,{sourceMap:!1})},187:function(e,n,t){var content=t(255);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(37).default)("877c2e9a",content,!0,{sourceMap:!1})},188:function(e,n,t){var content=t(257);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(37).default)("52e12e6b",content,!0,{sourceMap:!1})},189:function(e,n,t){var content=t(259);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(37).default)("6dd9bc24",content,!0,{sourceMap:!1})},190:function(e,n,t){var content=t(261);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(37).default)("9e10b5f0",content,!0,{sourceMap:!1})},191:function(e,n,t){var content=t(263);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(37).default)("6d9adab0",content,!0,{sourceMap:!1})},193:function(e,n,t){"use strict";t.r(n);t(39);var r={props:{value:{type:String,default:"default"},themes:{type:Array,default:function(){return[]}}},computed:{activeThemes:function(){var e=this;return this.themes.map((function(n){var t=Object.assign({},n);return t.active=n.value===e.selectedTheme,t}))},selectedTheme:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}},methods:{setTheme:function(e){this.selectedTheme=e,this.$emit("click",e)}}},o=t(11),component=Object(o.a)(r,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("list-wrapper",e._l(e.activeThemes,(function(n,r){return t("list-item",{key:n.value+r,staticClass:"text-xl",attrs:{active:n.active},on:{click:function(t){return e.setTheme(n.value)}}},[e._v("\n    "+e._s(n.text)+"\n  ")])})),1)}),[],!1,null,"2fc2a19e",null);n.default=component.exports;installComponents(component,{ListItem:t(293).default,ListWrapper:t(294).default})},194:function(e,n,t){"use strict";t.r(n);t(151);var r={name:"BaseMenu",props:{text:{type:String,default:"Options"},top:{type:[String,Number],default:"initial"},bottom:{type:[String,Number],default:"initial"},left:{type:[String,Number],default:"initial"},right:{type:[String,Number],default:"initial"}},data:function(){return{isDropdownActive:!1,display:"none",on:this.$listeners}},mounted:function(){this.on={click:this.showDropdown},window.addEventListener("click",this.checkTarget)},destroyed:function(){window.removeEventListener("click",this.checkTarget)},methods:{showDropdown:function(e){e.stopPropagation(),this.isDropdownActive=!this.isDropdownActive},checkTarget:function(e){e.target.matches(".menu")||this.hideDropdown()},hideDropdown:function(){this.isDropdownActive=!1}}},o=(t(258),t(11)),component=Object(o.a)(r,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"relative inline-block text-left bg--primary"},[t("div",[e._t("activator",null,null,{on:e.on})],2),e._v(" "),t("div",{staticClass:"menu absolute mt-2 rounded-md shadow-lg bg-white",class:{show:e.isDropdownActive},style:{top:e.top,bottom:e.bottom,left:e.left,right:e.right},attrs:{id:"menu-content",role:"menu"}},[e._t("default")],2)])}),[],!1,null,"3f46a1a4",null);n.default=component.exports},199:function(e,n,t){"use strict";t(28),t(22),t(31),t(13),t(40),t(27),t(41);var r=t(14),o=t(26);function l(object,e){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(n){Object(r.a)(e,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(source,n))}))}return e}var d={data:function(){return{width:""}},computed:c(c({},Object(o.c)(["theme"])),{},{isSmallScreen:function(){return this.width<640}}),mounted:function(){var e;this.setTheme(null!==(e=localStorage.getItem("theme"))&&void 0!==e?e:"default"),this.loadTheme(),window.addEventListener("resize",this.setWidth),this.setWidth()},destroyed:function(){window.removeEventListener("resize",this.setWidth)},methods:c(c({},Object(o.b)(["setTheme"])),{},{loadTheme:function(){"default"===this.theme?document.documentElement.removeAttribute("theme"):document.documentElement.setAttribute("theme","crazy")},setWidth:function(){this.width=window.innerWidth}})},f=t(11),component=Object(f.a)(d,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("header",[e.isSmallScreen?t("base-gradient",{attrs:{degrees:"180deg",height:6}}):e._e(),e._v(" "),e.isSmallScreen?t("div",{staticClass:"top-gradient"}):e._e(),e._v(" "),e.isSmallScreen?e._e():t("top-nav",{staticClass:"invisible sm:visible top-0 left-0 right-0"})],1),e._v(" "),t("Nuxt"),e._v(" "),t("bottom-nav",{staticClass:"sm:invisible fixed bottom-0 left-0 right-0 z-50"}),e._v(" "),t("div",{staticClass:"mt-20 pt-10 sm:mt-0 content"}),e._v(" "),e.isSmallScreen?e._e():t("vue-back-to-top")],1)}),[],!1,null,null,null);n.a=component.exports;installComponents(component,{BaseGradient:t(291).default,TopNav:t(292).default,BottomNav:t(295).default,VueBackToTop:t(296).default})},203:function(e,n,t){t(204),e.exports=t(205)},245:function(e,n,t){var content=t(246);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(37).default)("5959e63c",content,!0,{sourceMap:!1})},246:function(e,n,t){var r=t(36)((function(i){return i[1]}));r.push([e.i,'/*purgecss start ignore*/\n\n.vueperslide{\n  white-space:normal;\n  background-size:cover;\n  flex-shrink:0;\n  display:block;\n  width:100%;\n  position:relative\n}\n\n.vueperslide--clone-1{\n  position:absolute;\n  top:0;\n  bottom:0;\n  right:100%\n}\n\n.vueperslides--rtl .vueperslide--clone-1{\n  right:auto;\n  left:100%\n}\n\n.vueperslide[href]{\n  -webkit-user-drag:none\n}\n\n.vueperslide__image{\n  background-size:cover\n}\n\n.vueperslide__image,.vueperslide__loader{\n  position:absolute;\n  top:0;\n  left:0;\n  right:0;\n  bottom:0\n}\n\n.vueperslide__loader{\n  display:flex;\n  flex-direction:column;\n  align-items:center;\n  justify-content:center\n}\n\n.vueperslide__content-wrapper:not(.vueperslide__content-wrapper--outside-top):not(.vueperslide__content-wrapper--outside-bottom){\n  height:100%;\n  margin:auto\n}\n\n.vueperslides--fade .vueperslide{\n  position:absolute;\n  top:0;\n  left:0;\n  right:0;\n  bottom:0;\n  opacity:0;\n  transition:opacity ease-in-out;\n  transition-duration:inherit\n}\n\n.vueperslides--fade .vueperslide--active,.vueperslides--fade .vueperslide--visible{\n  z-index:1;\n  opacity:1\n}\n\n.vueperslides--slide-image-inside .vueperslide{\n  overflow:hidden\n}\n\n.vueperslides--3d .vueperslide{\n  position:absolute;\n  z-index:-1;\n  height:100%\n}\n\n.vueperslides--3d .vueperslide--active,.vueperslides--3d .vueperslide--next-slide,.vueperslides--3d .vueperslide--previous-slide{\n  z-index:0\n}\n\n.vueperslides--3d .vueperslide--active{\n  z-index:1\n}\n\n.vueperslides--3d .vueperslide[face=front]{\n  transform:rotateY(90deg) translateX(-50%) rotateY(-90deg)\n}\n\n.vueperslides--3d .vueperslide[face=right]{\n  transform:rotateY(90deg) translateX(50%);\n  transform-origin:100% 0\n}\n\n.vueperslides--3d .vueperslide[face=back]{\n  transform:rotateY(270deg) translateX(-50%) rotateY(-90deg)\n}\n\n.vueperslides--3d .vueperslide[face=left]{\n  transform:rotateY(270deg) translateX(-50%);\n  transform-origin:0 0\n}\n\n.vueperslides:not(.no-shadow):not(.vueperslides--3d) .vueperslides__parallax-wrapper:after,.vueperslides:not(.no-shadow):not(.vueperslides--3d) .vueperslides__parallax-wrapper:before{\n  content:"";\n  position:absolute;\n  bottom:100%;\n  left:-1em;\n  right:-1em;\n  height:2em;\n  box-shadow:0 0 20px rgba(0,0,0,.25);\n  z-index:2\n}\n\n.vueperslides:not(.no-shadow):not(.vueperslides--3d) .vueperslides__parallax-wrapper:after{\n  top:100%;\n  bottom:auto\n}\n\n.vueperslides__arrows{\n  color:#fff\n}\n\n.vueperslides__arrows--outside{\n  color:currentColor\n}\n\n.vueperslides__arrow{\n  top:50%;\n  background-color:transparent;\n  border:none;\n  opacity:.7\n}\n\n.vueperslides--rtl .vueperslides__arrow--next,.vueperslides__arrow--prev{\n  right:auto;\n  left:.5em\n}\n\n.vueperslides--rtl .vueperslides__arrow--prev,.vueperslides__arrow--next{\n  left:auto;\n  right:.5em\n}\n\n.vueperslides__arrow:hover{\n  opacity:1\n}\n\n.vueperslides--rtl .vueperslides__arrows--outside .vueperslides__arrow--next,.vueperslides__arrows--outside .vueperslides__arrow--prev{\n  right:auto;\n  left:-3.5em\n}\n\n.vueperslides--rtl .vueperslides__arrows--outside .vueperslides__arrow--prev,.vueperslides__arrows--outside .vueperslides__arrow--next{\n  left:auto;\n  right:-3.5em\n}\n\n.vueperslides__paused{\n  top:.7em;\n  right:.7em;\n  opacity:0;\n  text-shadow:0 0 3px rgba(0,0,0,.4);\n  z-index:1\n}\n\n.vueperslides:hover .vueperslides__paused{\n  opacity:1\n}\n\n.vueperslides__bullets:not(.vueperslides__bullets--outside){\n  color:#fff\n}\n\n.vueperslides__bullet{\n  margin:1.5em .6em;\n  padding:0;\n  border:none;\n  background:none\n}\n\n.vueperslides__bullet .default{\n  width:12px;\n  height:12px;\n  border-radius:12px;\n  border:1px solid;\n  background-color:transparent;\n  box-shadow:0 0 1px rgba(0,0,0,.5),0 0 3px rgba(0,0,0,.3);\n  transition:.4s ease-in-out;\n  box-sizing:border-box\n}\n\n.vueperslides__bullet .default span{\n  display:none\n}\n\n.vueperslides__bullet--active .default{\n  border-width:6px\n}\n\n.vueperslide,.vueperslide__image{\n  background-position:50%\n}\n\n.vueperslide__video{\n  outline:none\n}\n\n.vueperslide--no-pointer-events:before{\n  content:"";\n  position:absolute;\n  top:0;\n  bottom:0;\n  left:0;\n  right:0\n}\n\n.vueperslide__content-wrapper:not(.vueperslide__content-wrapper--outside-top):not(.vueperslide__content-wrapper--outside-bottom){\n  display:flex;\n  flex:1 1 auto;\n  flex-direction:column;\n  align-items:center;\n  justify-content:center;\n  text-align:center\n}\n\n.vueperslide--has-image-inside .vueperslide__content-wrapper,.vueperslide--has-video .vueperslide__content-wrapper,.vueperslide__content-wrapper.parallax-fixed-content{\n  position:absolute;\n  z-index:2;\n  top:0;\n  bottom:0;\n  left:0;\n  right:0;\n  display:flex;\n  flex-direction:column;\n  justify-content:center;\n  align-items:center;\n  pointer-events:none\n}\n\n.vueperslides{\n  position:relative\n}\n\n.vueperslides--fixed-height .vueperslide,.vueperslides--fixed-height .vueperslides__inner,.vueperslides--fixed-height .vueperslides__parallax-wrapper{\n  height:inherit\n}\n\n.vueperslides--fixed-height .vueperslides__parallax-wrapper{\n  padding-bottom:0!important\n}\n\n.vueperslides--fixed-height.vueperslides--bullets-outside{\n  margin-bottom:4em\n}\n\n.vueperslides__inner{\n  position:relative;\n  -webkit-user-select:none;\n  -moz-user-select:none;\n  -ms-user-select:none;\n  user-select:none\n}\n\n.vueperslides__parallax-wrapper{\n  position:relative;\n  overflow:hidden\n}\n\n.vueperslides--3d .vueperslides__parallax-wrapper{\n  overflow:visible\n}\n\n.vueperslides__track{\n  position:absolute;\n  top:0;\n  height:100%;\n  left:0;\n  right:0;\n  overflow:hidden;\n  z-index:1\n}\n\n.vueperslides--parallax .vueperslides__track{\n  height:200%;\n  transform:translateY(0)\n}\n\n.vueperslides--touchable .vueperslides__track{\n  cursor:ew-resize;\n  cursor:-webkit-grab;\n  cursor:grab\n}\n\n.vueperslides--touchable .vueperslides__track--dragging,.vueperslides--touchable .vueperslides__track--mousedown{\n  cursor:-webkit-grabbing;\n  cursor:grabbing\n}\n\n.vueperslides--3d .vueperslides__track{\n  overflow:visible;\n  perspective:100em\n}\n\n.vueperslides__track-inner{\n  white-space:nowrap;\n  transition:transform .5s ease-in-out;\n  height:100%;\n  display:flex\n}\n\n.vueperslides--no-animation .vueperslides__track-inner{\n  transition-duration:0s!important\n}\n\n.vueperslides--fade .vueperslides__track-inner{\n  white-space:normal;\n  transition:none\n}\n\n.vueperslides--3d .vueperslides__track-inner{\n  transform-style:preserve-3d\n}\n\n.vueperslides__track--mousedown .vueperslides__track-inner{\n  transition:transform .25s ease-in-out!important\n}\n\n.vueperslides__track--dragging .vueperslides__track-inner{\n  transition:none\n}\n\n.vueperslides__arrow{\n  position:absolute;\n  font-size:inherit;\n  color:inherit;\n  text-align:center;\n  transform:translateY(-50%);\n  cursor:pointer;\n  -webkit-user-select:none;\n  -moz-user-select:none;\n  -ms-user-select:none;\n  user-select:none;\n  outline:none;\n  z-index:2;\n  line-height:1\n}\n\n.vueperslides__arrow,.vueperslides__arrow svg{\n  transition:.3s ease-in-out\n}\n\n.vueperslides__arrow svg{\n  vertical-align:middle;\n  stroke:currentColor;\n  fill:none;\n  width:3.5em;\n  padding:1em;\n  stroke-width:1;\n  box-sizing:border-box\n}\n\n.vueperslides__arrow svg:hover{\n  stroke-width:1.3\n}\n\n.vueperslides__paused{\n  position:absolute;\n  transition:.3s ease-in-out\n}\n\n.vueperslides__bullets{\n  display:flex;\n  justify-content:center;\n  position:absolute;\n  bottom:0;\n  left:0;\n  right:0\n}\n\n.vueperslides__bullets--outside{\n  position:relative\n}\n\n.vueperslides__bullet,.vueperslides__bullets button{\n  cursor:pointer;\n  -webkit-user-select:none;\n  -moz-user-select:none;\n  -ms-user-select:none;\n  user-select:none;\n  outline:none;\n  z-index:2;\n  display:flex;\n  justify-content:center;\n  align-items:center;\n  color:inherit\n}\n\n.vueperslides__bullet::-moz-focus-inner,.vueperslides__bullets button::-moz-focus-inner{\n  border:0\n}\n\n.vueperslides__fractions{\n  position:absolute;\n  top:.8em;\n  left:.5em;\n  z-index:2;\n  padding:.2em 1em;\n  border:1px solid hsla(0,0%,100%,.5);\n  border-radius:2em;\n  background:hsla(0,0%,100%,.2);\n  color:#fff\n}\n\n.vueperslides__progress{\n  position:absolute;\n  top:0;\n  left:0;\n  right:0;\n  z-index:2;\n  height:6px;\n  color:rgba(0,0,0,.7)\n}\n\n.vueperslides__progress>*{\n  position:absolute;\n  top:0;\n  bottom:0;\n  left:0;\n  background:currentColor;\n  transition:.3s ease-in-out\n}\n\n:root{\n  --text-color-primary:#111827;\n  --text-color-secondary:rgba(6,8,14,0.7607843137254902);\n  --text-color-gray-900:#111827;\n  --color-gray-100:#f3f4f6 ;\n  --color-primary:#33bebc;\n  --color-secondary:#6ee7b7;\n  --bg-color-primary:#f9fafb;\n  --bg-card:#e5e7eb \n}\n\n:root[theme=crazy]{\n  --text-color-primary:#f9fafb;\n  --text-color-secondary:#f9fafb;\n  --bg-color-primary:#483d8b;\n  --bg-card:#5b50a0 \n}\n\n:root[theme=dark]{\n  --text-color-primary:#f9fafb;\n  --text-color-secondary:hsla(0,0%,100%,0.8);\n  --color-primary:#cc925c;\n  --color-secondary:#aa794a;\n  --bg-color-primary:#1e1e1e;\n  --bg-card:#272626 \n}\n\n.container{\n  max-width:100%\n}\n\n@media screen and (min-width:640px){\n  .container{\n    max-width:610px;\n    margin-right:auto;\n    margin-left:auto\n  }\n}\n\n@media screen and (min-width:768px){\n  .container{\n    max-width:728px\n  }\n}\n\n@media screen and (min-width:1024px){\n  .container{\n    max-width:954px\n  }\n}\n\n@media screen and (min-width:1280px){\n  .container{\n    max-width:1220px\n  }\n}\n\n@media screen and (min-width:1536px){\n  .container{\n    max-width:1456px\n  }\n}\n\nbody{\n  font-family:"Lato","Lucida Sans","Lucida Sans Regular","Lucida Grande","Lucida Sans Unicode",Geneva,Verdana,sans-serif;\n  background-color:#f9fafb;\n  background-color:var(--bg-color-primary);\n  color:rgba(6,8,14,0.7607843137254902);\n  color:var(--text-color-secondary)\n}\n\nh1,h2,h3,h4,h5{\n  font-family:"Patua One","Lato","Lucida Sans","Lucida Sans Regular","Lucida Grande","Lucida Sans Unicode",Geneva,Verdana,sans-serif;\n  color:#111827;\n  color:var(--text-color-primary)\n}\n\nh2{\n  font-size:1.4rem\n}\n\n.social-link{\n  transition:all .4s\n}\n\n.social-link:hover{\n  color:#6ee7b7;\n  color:var(--color-secondary);\n  transform:scale(1.2)\n}\n\n@media screen and (min-width:640px){\n  .col-md-6{\n    flex:0 0 auto;\n    width:50%\n  }\n}\n\n@media screen and (min-width:1024px){\n  .col-lg-4{\n    flex:0 0 auto;\n    width:33.3333333333%\n  }\n}\n\n.color-primary{\n  color:#33bebc;\n  color:var(--color-primary)\n}\n\n.bg-primary{\n  background-color:#33bebc!important;\n  background-color:var(--color-primary)!important\n}\n\n.bg-secondary{\n  background-color:#f9fafb!important;\n  background-color:var(--bg-color-primary)!important\n}\n\n.no-outline{\n  outline:none!important\n}\n\n.vueperslides__bullet .default{\n  border-color:#33bebc;\n  border-color:var(--color-primary);\n  box-shadow:none;\n  transition:.3s;\n  width:16px;\n  height:16px\n}\n\n/*purgecss end ignore*/',""]),r.locals={},e.exports=r},250:function(e,n,t){"use strict";t(185)},251:function(e,n,t){var r=t(36)((function(i){return i[1]}));r.push([e.i,'/*purgecss start ignore*/\n.gradient[data-v-2a68b8b2]{\n  content:"";\n  margin-bottom:-4em\n}\n\n/*purgecss end ignore*/',""]),r.locals={},e.exports=r},252:function(e,n,t){"use strict";t(186)},253:function(e,n,t){var r=t(36)((function(i){return i[1]}));r.push([e.i,"/*purgecss start ignore*/\n.no-outline[data-v-ba8c2c00]{\n  outline:none\n}\n.icon-button[data-v-ba8c2c00]{\n  background-color:transparent!important;\n  border-radius:50%;\n  height:2.3em;\n  width:2.3em;\n  padding:.5em;\n  margin:.2em\n}\n.button[data-v-ba8c2c00]{\n  transition:all .2s\n}\n.button[data-v-ba8c2c00]:hover{\n  background-color:var(--color-secondary)!important\n}\n.border-top-primary[data-v-ba8c2c00]{\n  border-top-color:var(--color-primary)!important\n}\n.call-to-action[data-v-ba8c2c00]{\n  font-size:1.6rem;\n  padding:.6em 1.6em;\n  font-weight:700\n}\n.outline[data-v-ba8c2c00]{\n  border:1px solid;\n  background-color:transparent!important\n}\n\n/*purgecss end ignore*/",""]),r.locals={},e.exports=r},254:function(e,n,t){"use strict";t(187)},255:function(e,n,t){var r=t(36)((function(i){return i[1]}));r.push([e.i,"/*purgecss start ignore*/\n.navbar__link[data-v-c65010c6]{\n  color:var(--text-color-primary);\n  transition:all .2s;\n  position:relative;\n  margin-left:0;\n  margin-right:0\n}\n.navbar__link>img[data-v-c65010c6]{\n  position:absolute;\n  top:15px;\n  left:14.5px\n}\n.navbar__link[data-v-c65010c6]:hover{\n  color:var(--text-color-secondary)\n}\n\n/*purgecss end ignore*/",""]),r.locals={},e.exports=r},256:function(e,n,t){"use strict";t(188)},257:function(e,n,t){var r=t(36)((function(i){return i[1]}));r.push([e.i,"/*purgecss start ignore*/\n.app-list-item[data-v-750ebb38]{\n  cursor:pointer;\n  transition:all .2s;\n  color:var(--text-color-gray-900)\n}\n.app-list-item[data-v-750ebb38]:hover{\n  background-color:var(--color-gray-100)\n}\n\n/*purgecss end ignore*/",""]),r.locals={},e.exports=r},258:function(e,n,t){"use strict";t(189)},259:function(e,n,t){var r=t(36)((function(i){return i[1]}));r.push([e.i,"/*purgecss start ignore*/\n.menu[data-v-3f46a1a4]{\n  transition:opacity .3s linear;\n  visibility:hidden;\n  transition:visibility 0s .1s,opacity .1s linear;\n  opacity:0\n}\n.show[data-v-3f46a1a4]{\n  visibility:visible;\n  opacity:1;\n  transition:opacity .1s linear\n}\n\n/*purgecss end ignore*/",""]),r.locals={},e.exports=r},260:function(e,n,t){"use strict";t(190)},261:function(e,n,t){var r=t(36)((function(i){return i[1]}));r.push([e.i,"/*purgecss start ignore*/\napp-links li[data-v-1451aa23]{\n  display:inline\n}\n.buttons[data-v-1451aa23]{\n  z-index:20\n}\n.links[data-v-1451aa23]{\n  position:absolute;\n  transition:all .3s linear;\n  z-index:10;\n  bottom:0\n}\n.links--hidden[data-v-1451aa23]{\n  bottom:-250px\n}\n\n/*purgecss end ignore*/",""]),r.locals={},e.exports=r},262:function(e,n,t){"use strict";t(191)},263:function(e,n,t){var r=t(36)((function(i){return i[1]}));r.push([e.i,"/*purgecss start ignore*/\n.floating-button[data-v-0893f33a]{\n  display:none;\n  position:fixed;\n  bottom:20px;\n  right:30px;\n  z-index:99;\n  outline:none;\n  background-color:transparent;\n  border-color:var(--color-primary);\n  color:var(--color-primary);\n  border-width:2px;\n  width:2em;\n  height:2em;\n  font-size:1.5rem;\n  transition:all .5s\n}\n.floating-button--show[data-v-0893f33a]{\n  display:block;\n  -webkit-animation:roll-data-v-0893f33a 1s;\n          animation:roll-data-v-0893f33a 1s\n}\n.floating-button>img[data-v-0893f33a]{\n  left:7px;\n  top:6px;\n  z-index:100\n}\n@-webkit-keyframes roll-data-v-0893f33a{\n0%{\n    transform:rotate(0)\n}\nto{\n    transform:rotate(1turn)\n}\n}\n@keyframes roll-data-v-0893f33a{\n0%{\n    transform:rotate(0)\n}\nto{\n    transform:rotate(1turn)\n}\n}\n\n/*purgecss end ignore*/",""]),r.locals={},e.exports=r},264:function(e,n,t){"use strict";t.r(n),t.d(n,"state",(function(){return r})),t.d(n,"mutations",(function(){return o}));var r=function(){return{theme:"default",themes:[{value:"default",text:"Default",iconColor:"#33bebc"},{value:"crazy",text:"Crazy",iconColor:"#33bebc"},{value:"dark",text:"Dark",iconColor:"#cc925c"}],links:[{link:"#home",text:"home"},{link:"#about",text:"about"},{link:"#portfolio",text:"portfolio"},{link:"#social-networks",text:"contacts"},{link:"#repositories",text:"repositories"}]}},o={setTheme:function(e,n){e.theme!==n&&(e.theme=n,document.documentElement.hasAttribute("theme")&&document.documentElement.removeAttribute("theme"),document.documentElement.setAttribute("theme",n))}}},291:function(e,n,t){"use strict";t.r(n);t(151);var r={name:"BaseGradient",props:{degrees:{type:String,default:"180deg"},height:{type:Number,default:9}}},o=(t(250),t(11)),component=Object(o.a)(r,(function(){var e=this,n=e.$createElement;return(e._self._c||n)("div",{staticClass:"gradient",style:{height:e.height+"em",background:"linear-gradient("+e.degrees+", var(--color-primary) 0%, var(--color-primary) 20%, var(--bg-color-primary) 100%)"}})}),[],!1,null,"2a68b8b2",null);n.default=component.exports},292:function(e,n,t){"use strict";t.r(n);t(28),t(22),t(31),t(13),t(40),t(27),t(41);var r=t(14),o=(t(21),t(62),t(26));function l(object,e){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(n){Object(r.a)(e,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(source,n))}))}return e}var d={name:"TopNav",components:{BaseButton:t(67).default},data:function(){return{isHidden:!1,theme:"default"}},computed:c({},Object(o.c)(["links","themes"])),watch:{theme:function(e){this.setTheme(e)}},methods:c(c({},Object(o.b)(["setTheme"])),{},{changeLocal:function(){"en"===this.$i18n.locale?this.$i18n.setLocale("es"):this.$i18n.setLocale("en")},scrollToPosition:function(e){document.getElementById(e.split("#").pop()).scrollIntoView({behavior:"smooth"})}})},f=(t(254),t(11)),component=Object(f.a)(d,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("nav",{staticClass:"flex bg-primary"},[t("div",{staticClass:"container flex justify-center text-2xl ml-14 z-50"},[e._m(0),e._v(" "),t("ul",{staticClass:"flex items-center text-xl mx-auto"},e._l(e.links,(function(link){return t("li",{key:link.link+link.text,staticClass:"px-3 navbar__link"},[t("a",{attrs:{href:link.link},on:{click:function(n){return n.preventDefault(),e.scrollToPosition(link.link)}}},[e._v("\n          "+e._s(e.$t(link.text))+"\n        ")])])})),0),e._v(" "),t("div",[t("base-button",{staticClass:"navbar__link",attrs:{icon:""},on:{click:e.changeLocal}},[t("img",{attrs:{src:"icons/translate.svg",width:"25px",height:"25px",alt:"Translate icon"}})]),e._v(" "),t("base-menu",{attrs:{bottom:"initial",top:"3rem"},scopedSlots:e._u([{key:"activator",fn:function(n){var r=n.on;return[t("base-button",e._g({staticClass:"navbar__link",attrs:{icon:""}},r),[t("img",{attrs:{src:"icons/invert-colors.svg",width:"25px",height:"25px",alt:"Color themes selector icon"}})])]}}])},[e._v(" "),t("theme-selector",{attrs:{themes:e.themes},model:{value:e.theme,callback:function(n){e.theme=n},expression:"theme"}})],1)],1)])])}),[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"flex items-center"},[t("h4",{staticClass:"text-3xl"},[e._v("\n        José García\n      ")])])}],!1,null,"c65010c6",null);n.default=component.exports;installComponents(component,{BaseButton:t(67).default,ThemeSelector:t(193).default,BaseMenu:t(194).default})},293:function(e,n,t){"use strict";t.r(n);var r={name:"ListItem",props:{active:{type:Boolean,default:!1}},methods:{click:function(){this.$emit("click")}}},o=(t(256),t(11)),component=Object(o.a)(r,(function(){var e=this,n=e.$createElement;return(e._self._c||n)("div",{staticClass:"py-2 px-4 app-list-item",class:{"bg-gray-200":e.active},on:{click:e.click}},[e._t("default")],2)}),[],!1,null,"750ebb38",null);n.default=component.exports},294:function(e,n,t){"use strict";t.r(n);var r={name:"ListWrapper"},o=t(11),component=Object(o.a)(r,(function(){var e=this,n=e.$createElement;return(e._self._c||n)("div",{staticClass:"my-3 flex flex-col"},[e._t("default")],2)}),[],!1,null,"55122605",null);n.default=component.exports},295:function(e,n,t){"use strict";t.r(n);t(28),t(22),t(31),t(13),t(40),t(27),t(41);var r=t(14),o=(t(21),t(62),t(26));function l(object,e){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(n){Object(r.a)(e,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(source,n))}))}return e}var d={name:"BottomNav",components:{BaseButton:t(67).default},data:function(){return{isHidden:!0,theme:"default"}},computed:c({},Object(o.c)(["links","themes"])),watch:{theme:function(e){this.setTheme(e)}},methods:c(c({},Object(o.b)(["setTheme"])),{},{changeLocal:function(){"en"===this.$i18n.locale?this.$i18n.setLocale("es"):this.$i18n.setLocale("en")},scrollToPosition:function(e){document.getElementById(e.split("#").pop()).scrollIntoView({behavior:"smooth"})}})},f=(t(260),t(11)),component=Object(f.a)(d,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("nav",{staticClass:"flex flex-col"},[t("div",{staticClass:"relative flex flex-col items-center"},[t("div",{staticClass:"links flex flex-col items-center justify-center text-center bg-primary px-10 pt-2 rounded-t-md",class:{"links--hidden":e.isHidden}},[t("ul",e._l(e.links,(function(link){return t("li",{key:link.link+link.text,staticClass:"navbar__link py-3",on:{click:function(n){return n.preventDefault(),e.scrollToPosition(link.link)}}},[t("a",{staticClass:"text-xl",attrs:{href:link.link}},[e._v("\n            "+e._s(e.$t(link.text))+"\n          ")])])})),0)])]),e._v(" "),t("div",{staticClass:"buttons flex justify-center bg-primary px-3 text-2xl"},[t("base-button",{staticClass:"navbar__link",attrs:{icon:""},on:{click:e.changeLocal}},[t("img",{attrs:{src:"icons/translate.svg",width:"30px",height:"30px",alt:"Translate icon"}})]),e._v(" "),t("base-menu",{attrs:{bottom:"3rem"},scopedSlots:e._u([{key:"activator",fn:function(n){var r=n.on;return[t("base-button",e._g({staticClass:"navbar__link",attrs:{icon:""}},r),[t("img",{attrs:{src:"icons/invert-colors.svg",width:"30px",height:"30px",alt:"Color themes selector icon"}})])]}}])},[e._v(" "),t("theme-selector",{attrs:{themes:e.themes},model:{value:e.theme,callback:function(n){e.theme=n},expression:"theme"}})],1),e._v(" "),t("base-button",{staticClass:"navbar__link",attrs:{icon:""},on:{click:function(n){e.isHidden=!e.isHidden}}},[t("img",{attrs:{src:"icons/menu.svg",width:"30px",height:"30px",alt:"Hamburger menu icon"}})])],1)])}),[],!1,null,"1451aa23",null);n.default=component.exports;installComponents(component,{BaseButton:t(67).default,ThemeSelector:t(193).default,BaseMenu:t(194).default})},296:function(e,n,t){"use strict";t.r(n);var r={name:"VueBackToTop",components:{},data:function(){return{floatingButton:null,isShowing:!1}},computed:{isShowingClasses:function(){return this.isShowing?{"floating-button--show":!0}:{}}},mounted:function(){var e=this;this.floatingButton=document.getElementById("floating-button"),window.onscroll=function(){e.scrollFunction(e.floatingButton)}},methods:{scrollFunction:function(){document.body.scrollTop>20||document.documentElement.scrollTop>20?this.isShowing=!0:this.isShowing=!1},topFunction:function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}}},o=(t(262),t(11)),component=Object(o.a)(r,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("button",{staticClass:"rounded-lg lol floating-button",class:e.isShowingClasses,attrs:{title:"Go to top"},on:{click:e.topFunction}},[t("img",{staticClass:"absolute",attrs:{src:"/icons/arrow-up.svg",alt:"Arrow up icon",width:"30px",height:"30px"}})])}),[],!1,null,"0893f33a",null);n.default=component.exports},67:function(e,n,t){"use strict";t.r(n);var r={name:"BaseButton",props:{text:{type:String,default:""},value:{type:Boolean,default:!1},isActivable:{type:Boolean,default:!0},icon:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},loadingText:{type:String,default:""},isCallToAction:{type:Boolean,default:!1},outline:{type:Boolean,default:!1}},computed:{buttonClasses:function(){var e={};return this.icon&&(e.padding=0,e["icon-button"]=!0),this.isCallToAction&&(e["call-to-action"]=!0),this.outline&&(e.outline=!0),e}}},o=(t(252),t(11)),component=Object(o.a)(r,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("button",e._g(e._b({staticClass:"button rounded-lg bg-primary no-outline py-2 px-5 hover:bg-green-300",class:e.buttonClasses},"button",e.$attrs,!1),e.$listeners),[e.loading?t("div",{staticClass:"flex justify-center items-center"},[t("div",{staticClass:"spinner-border animate-spin inline-block w-6 h-6 border-4 border-top-primary rounded-full",attrs:{role:"status"}}),e._v(" "),e.loadingText?t("span",{staticClass:"ml-2"},[e._v(e._s(e.loadingText))]):t("span",{staticClass:"ml-2"},[e._v("Loading...")])]):e._t("default",(function(){return[e._v("\n    "+e._s(e.text)+"\n  ")]}))],2)}),[],!1,null,"ba8c2c00",null);n.default=component.exports}},[[203,26,4,27]]]);