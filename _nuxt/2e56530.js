(window.webpackJsonp=window.webpackJsonp||[]).push([[25,4,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23,24],{295:function(t,e,n){var content=n(299);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(38).default)("15d2cf2c",content,!0,{sourceMap:!1})},296:function(t,e,n){"use strict";n.r(e);var r={name:"BaseCard",props:{glass:{type:Boolean,default:!1},transparent:{type:Boolean,default:!1}}},l=(n(298),n(11)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"flex flex-col",class:{card:!t.transparent,"card--glass":t.glass}},[t._t("default")],2)}),[],!1,null,"23ac9950",null);e.default=component.exports},297:function(t,e,n){var content=n(304);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(38).default)("7f8e303c",content,!0,{sourceMap:!1})},298:function(t,e,n){"use strict";n(295)},299:function(t,e,n){var r=n(37)((function(i){return i[1]}));r.push([t.i,'/*purgecss start ignore*/\n.card[data-v-23ac9950]{\n  background-color:var(--bg-card);\n  border-radius:10px\n}\n.card--glass[data-v-23ac9950]{\n  background-color:initial;\n  border:1px solid #fff;\n  border-radius:15px;\n  box-shadow:0 0 1rem 0 rgba(0,0,0,.2);\n  position:relative;\n  overflow:hidden\n}\n.card--glass[data-v-23ac9950]:before{\n  background-color:hsla(0,0%,100%,.3);\n  -webkit-backdrop-filter:blur(10px) saturate(100%) contrast(45%) brightness(130%);\n          backdrop-filter:blur(10px) saturate(100%) contrast(45%) brightness(130%);\n  content:"";\n  height:100%;\n  position:absolute;\n  width:100%;\n  top:0;\n  right:0;\n  left:0;\n  bottom:0;\n  z-index:-10\n}\n\n/*purgecss end ignore*/',""]),r.locals={},t.exports=r},300:function(t,e,n){var content=n(309);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(38).default)("2253d302",content,!0,{sourceMap:!1})},301:function(t,e,n){"use strict";n.r(e);var r={name:"BaseSection",props:{title:{type:String,required:!0},titleAlignment:{type:[String],default:""}}},l=n(11),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"flex flex-col my-32 p-3"},[n("h2",{staticClass:"mb-3 text-3xl text-5xl self-start sm:self-center",class:t.titleAlignment},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),t._t("default")],2)}),[],!1,null,"60681a50",null);e.default=component.exports},302:function(t,e,n){"use strict";n.r(e);var r={name:"CardText",props:{noPadding:{type:Boolean,default:!1}}},l=(n(303),n(11)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"py-3 px-2",class:{"no-padding":t.noPadding}},[t._t("default")],2)}),[],!1,null,"a5657dec",null);e.default=component.exports},303:function(t,e,n){"use strict";n(297)},304:function(t,e,n){var r=n(37)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.no-padding[data-v-a5657dec]{\n  padding:0!important\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},306:function(t,e,n){var content=n(315);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(38).default)("3aed28f4",content,!0,{sourceMap:!1})},307:function(t,e,n){var content=n(317);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(38).default)("5466fcf6",content,!0,{sourceMap:!1})},308:function(t,e,n){"use strict";n(300)},309:function(t,e,n){var r=n(37)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.link[data-v-ea6fdff2]{\n  width:auto;\n  display:inline-block\n}\ndiv[data-v-ea6fdff2]{\n  transition:all .2s ease;\n  border-color:var(--text-color-primary);\n  border-top:1px solid;\n  transform:scale(0)\n}\n.link:hover div[data-v-ea6fdff2]{\n  transform:scale(1)\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},310:function(t,e,n){"use strict";n.r(e);var r={name:"BaseLink",props:{icon:{type:Boolean,default:!1},text:{type:String,default:"lorem ipsum"}}},l=(n(308),n(11)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"mt-1 px-2"},[n("span",{staticClass:"link"},[t.icon?n("span",{staticClass:"mdi mdi-link"}):t._e(),t._v("\n    "+t._s(t.text)+"\n    "),n("div")])])}),[],!1,null,"ea6fdff2",null);e.default=component.exports},311:function(t,e,n){var content=n(324);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(38).default)("a54b0340",content,!0,{sourceMap:!1})},312:function(t,e,n){var content=n(326);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(38).default)("77be9af8",content,!0,{sourceMap:!1})},313:function(t,e,n){var content=n(328);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(38).default)("b7dad836",content,!0,{sourceMap:!1})},314:function(t,e,n){"use strict";n(306)},315:function(t,e,n){var r=n(37)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.chip[data-v-4a3cd802]{\n  background-color:var(--bg-card)\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},316:function(t,e,n){"use strict";n(307)},317:function(t,e,n){var r=n(37)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.h-100px[data-v-6063a327]{\n  height:100px\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},318:function(t,e,n){"use strict";(function(t){n(28),n(21),n(31),n(39),n(27),n(40);var r=n(14),l=n(7);n(53),n(13);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a={name:"SectionContacts",data:function(){return{socialLinks:[{link:"https://www.linkedin.com/in/jose-garcia-888941180/",icon:"mdi-linkedin"},{link:"https://stackoverflow.com/users/10824037/jogarcia",icon:"mdi-stack-overflow"},{link:"https://github.com/Tauromachian",icon:"mdi-github"},{link:"https://t.me/BetanKore",icon:"mdi-telegram"},{link:"https://www.reddit.com/user/BetanKore",icon:"mdi-reddit"}],form:{name:"",address:"",subject:"Work for me",body:""},message:{success:!0,text:"",active:!1},loading:!1}},methods:{submitForm:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function n(){var r,l,body,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.loading=!0,r=t.env.NUXT_ENV_EMAIL_SERVICE_TOKEN,l=t.env.NUXT_ENV_RECIPIENT,body=c(c({},e.form),{},{token:r,recipient:l}),n.prev=4,n.next=7,fetch("https://jts-email-service.herokuapp.com/api/email-service",{method:"POST",body:JSON.stringify(body),headers:{"Content-Type":"application/json"}});case 7:o=n.sent,n.next=14;break;case 10:return n.prev=10,n.t0=n.catch(4),e.displayErrorMessage(),n.abrupt("return");case 14:if(!o.error){n.next=17;break}return e.displayErrorMessage(),n.abrupt("return");case 17:e.displaySuccessMessage(),e.loading=!1;case 19:case"end":return n.stop()}}),n,null,[[4,10]])})))()},displaySuccessMessage:function(){this.message.success=!0,this.message.text="Success! email sent correctly",this.message.active=!0,this.loading=!1},displayErrorMessage:function(){this.message.success=!1,this.message.text="Error there was a problem sending the email",this.message.active=!0,this.loading=!1}}}}).call(this,n(201))},319:function(t,e,n){"use strict";(function(t){var r=n(7),l=(n(53),n(340)),o=n.n(l);e.a={name:"SectionRepositories",data:function(){return{repositories:[]}},created:function(){this.loadRepositories()},methods:{loadRepositories:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,l,c,data;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.env.NUXT_ENV_GITHUB_TOKEN,n.prev=1,n.next=4,o.a.get("https://api.github.com/users/tauromachian/repos",{headers:{authorization:"token ".concat(r)}});case 4:c=n.sent,data=c.data,l=data,n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),l=[];case 12:e.repositories=l;case 13:case"end":return n.stop()}}),n,null,[[1,9]])})))()}}}}).call(this,n(201))},320:function(t,e,n){"use strict";n.r(e);var r={name:"BaseButton",props:{text:{type:String,default:""}}},l=(n(314),n(11)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"chip rounded-3xl py-1 px-3 text-xs",on:{click:function(e){return t.$emit("click")}}},[t._t("default",(function(){return[t._v("\n    "+t._s(t.text)+"\n  ")]}))],2)}),[],!1,null,"4a3cd802",null);e.default=component.exports},321:function(t,e,n){"use strict";n.r(e);var r={name:"CardProject",props:{src:{type:String,default:""},title:{type:String,default:""},description:{type:String,default:""},siteUrl:{type:String,default:""},alt:{type:String,default:""}}},l=(n(316),n(11)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("base-card",{staticClass:"rounded-lg"},[n("picture",[n("source",{attrs:{type:"image/avif",srcset:t.src+".avif"}}),t._v(" "),n("img",{staticClass:"max-w-full h-auto align-middle border-none rounded-t-lg",attrs:{loading:"lazy",decoding:"async",src:t.src+".jpg",width:"1908",height:"930",alt:t.alt}})]),t._v(" "),n("card-text",{staticClass:"flex flex-col px-5 mt-3"},[n("h2",{staticClass:"font-bold"},[t._v("\n      "+t._s(t.title)+"\n    ")]),t._v(" "),n("p",{staticClass:"h-28 overflow-hidden"},[t._v("\n      "+t._s(t.description)+"\n    ")]),t._v(" "),n("div",[n("base-link",{staticClass:"mt-1",attrs:{href:t.siteUrl,text:t.$t("visit"),icon:""}})],1)])],1)}),[],!1,null,"6063a327",null);e.default=component.exports;installComponents(component,{BaseLink:n(310).default,CardText:n(302).default,BaseCard:n(296).default})},322:function(t,e,n){var content=n(337);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(38).default)("cb74c6a6",content,!0,{sourceMap:!1})},323:function(t,e,n){"use strict";n(311)},324:function(t,e,n){var r=n(37)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\ninput[data-v-5673fc64]{\n  color:var(--text-color-gray-900);\n  outline:none;\n  transition:all .1s;\n  --shadow-color:#9ca3af ;\n  box-shadow:6px 6px 0 1px var(--shadow-color)\n}\n.input[data-v-5673fc64]:focus{\n  transform:translate(2px,2px);\n  box-shadow:4px 4px 0 1px var(--shadow-color)\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},325:function(t,e,n){"use strict";n(312)},326:function(t,e,n){var r=n(37)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.textarea[data-v-5542f1c2]{\n  color:var(--text-color-gray-900);\n  outline:none;\n  transition:all .1s;\n  --shadow-color:#9ca3af ;\n  box-shadow:6px 6px 0 1px var(--shadow-color)\n}\n.textarea[data-v-5542f1c2]:focus{\n  transform:translate(2px,2px);\n  box-shadow:4px 4px 0 1px var(--shadow-color)\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},327:function(t,e,n){"use strict";n(313)},328:function(t,e,n){var r=n(37)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.ball[data-v-6fa7f04e]{\n  box-shadow:0 0 1rem 0 rgba(0,0,0,.2);\n  position:absolute\n}\n.big[data-v-6fa7f04e]{\n  height:150px;\n  width:150px\n}\n.medium[data-v-6fa7f04e]{\n  height:100px;\n  width:100px\n}\n.small[data-v-6fa7f04e]{\n  height:50px;\n  width:50px\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},329:function(t,e,n){"use strict";n.r(e);var r={name:"FeatureCard",props:{title:{type:String,default:"Lorem"},icon:{type:String,default:"mdi-emoticon"}}},l=n(11),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex md:flex-col items-center"},[n("span",{staticClass:"mdi text-7xl mr-1.5 color-primary md:text-8xl md:mr-0",class:t.icon}),t._v(" "),n("div",{staticClass:"flex flex-col md:items-center"},[n("h2",{staticClass:"font-bold"},[t._v("\n      "+t._s(t.title)+"\n    ")]),t._v(" "),t._t("default")],2)])}),[],!1,null,"6384fb32",null);e.default=component.exports},330:function(t,e,n){"use strict";n.r(e);var r={name:"ChipRiver",props:{values:{type:[Array,Object],default:function(){return[]}}},data:function(){return{activeChips:[]}}},l=n(11),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-wrap"},t._l(t.values,(function(e,r){return n("base-chip",{key:e+r,staticClass:"mr-1 mb-1",attrs:{text:e,"is-activable":!1},model:{value:t.activeChips[r],callback:function(e){t.$set(t.activeChips,r,e)},expression:"activeChips[index]"}})})),1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BaseChip:n(320).default})},331:function(t,e,n){"use strict";n.r(e);var r=n(338),l={components:{VueperSlides:r.VueperSlides,VueperSlide:r.VueperSlide},data:function(){return{breakpoints:{4e3:{visibleSlides:3,slideMultiple:3,touchable:!1},1100:{visibleSlides:2,slideMultiple:2,touchable:!1},690:{visibleSlides:2,slideMultiple:2,arrows:!1},600:{arrows:!1}}}},computed:{projects:function(){return[{src:"queues",title:"Waiting room",description:this.$t("projects.description.queues"),link:"https://myqueues.herokuapp.com/",alt:"Queues app picture"},{src:"johnson-turbine-support-website",title:"Johnson Turbine Support",description:this.$t("projects.description.johnson-turbine"),link:"https://www.johnsonturbine.com/",alt:"Jhonson Turbine company's portfolio site."},{src:"sancho",title:"Sancho Restaurant",description:this.$t("projects.description.sanchoRestaurant"),link:"https://sancho-restaurant.herokuapp.com/",alt:"Site of hispanic food restaurant. Shancho Restaurant."},{src:"zaru",title:"Zaru Arquitectura",description:this.$t("projects.description.zaruArquitectura"),link:"https://zaruarquitectura.onrender.com/",alt:"Site of architectural displays."},{src:"kanpeki",title:"Kanpeki",description:this.$t("projects.description.kanpeki"),link:"https://kanpeki-sa.herokuapp.com/",alt:"Site of all asian culture fanatics"},{src:"flowers-site",title:"Flowers",description:this.$t("projects.description.flowers"),link:"https://kanpeki-sa.herokuapp.com/",alt:"Simple template of a possible flower store."}]}}},o=n(11),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("vueper-slides",{staticClass:"w-full no-shadow",attrs:{"arrows-outside":"","transition-speed":"250","fixed-height":"28em","bullets-outside":"",breakpoints:t.breakpoints,gap:2}},t._l(t.projects,(function(e,r){return n("vueper-slide",{key:e.src+r,scopedSlots:t._u([{key:"content",fn:function(){return[n("card-project",{staticClass:"flex-1 h-full bg-secondary w-full",attrs:{title:e.title,description:e.description,"site-url":e.link,src:e.src,alt:e.alt}})]},proxy:!0}],null,!0)})})),1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CardProject:n(321).default})},332:function(t,e,n){"use strict";n.r(e);var r={name:"AppAlert",props:{type:{type:String,default:"success"},text:{type:String,default:"Success!"}}},l=n(11),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-full bg-primary text-left py-4 lg:px-4 rounded flex items-center",attrs:{role:"alert"}},[n("span",{staticClass:"mdi text-3xl mr-3",class:{"mdi-check":"success"===t.type,"mdi-alert":"error"===t.type}}),t._v(" "),n("span",[t._v("\n\n    "+t._s(t.text)+"\n  ")])])}),[],!1,null,null,null);e.default=component.exports},333:function(t,e,n){"use strict";n.r(e);var r={name:"BaseInputText",props:{label:{type:String,default:"input"},placeholder:{type:String,default:""},type:{type:String,default:"text"},col:{type:Boolean,default:!0},value:{type:String,default:""}},computed:{text:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}}},l=(n(323),n(11)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex",class:{"flex-col":t.col}},[n("label",[t._v(t._s(t.label))]),t._v(" "),"checkbox"===t.type?n("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"p-1 rounded no-outline input",attrs:{placeholder:t.placeholder,type:"checkbox"},domProps:{checked:Array.isArray(t.text)?t._i(t.text,null)>-1:t.text},on:{change:function(e){var n=t.text,r=e.target,l=!!r.checked;if(Array.isArray(n)){var o=t._i(n,null);r.checked?o<0&&(t.text=n.concat([null])):o>-1&&(t.text=n.slice(0,o).concat(n.slice(o+1)))}else t.text=l}}},"input",t.$attrs,!1)):"radio"===t.type?n("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"p-1 rounded no-outline input",attrs:{placeholder:t.placeholder,type:"radio"},domProps:{checked:t._q(t.text,null)},on:{change:function(e){t.text=null}}},"input",t.$attrs,!1)):n("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"p-1 rounded no-outline input",attrs:{placeholder:t.placeholder,type:t.type},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}},"input",t.$attrs,!1))])}),[],!1,null,"5673fc64",null);e.default=component.exports},334:function(t,e,n){"use strict";n.r(e);var r={name:"BaseTextArea",props:{label:{type:String,default:"input"},placeholder:{type:String,default:""},type:{type:String,default:"text"},col:{type:Boolean,default:!0},value:{type:String,default:""}},computed:{text:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}}},l=(n(325),n(11)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex",class:{"flex-col":t.col}},[n("label",[t._v(t._s(t.label))]),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"p-1 rounded no-outline textarea",attrs:{cols:"10",rows:"4",placeholder:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}})])}),[],!1,null,"5542f1c2",null);e.default=component.exports},335:function(t,e,n){"use strict";n.r(e);n(151);var r={name:"BaseBall",props:{zIndex:{type:Number,default:0},big:{type:Boolean,default:!1},medium:{type:Boolean,default:!0},small:{type:Boolean,default:!1},top:{type:String,default:"initial"},bottom:{type:String,default:"initial"},left:{type:String,default:"initial"},right:{type:String,default:"initial"}}},l=(n(327),n(11)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"rounded-full ball",class:{small:t.small,medium:t.medium,big:t.big},style:{"z-index":t.zIndex,top:t.top,bottom:t.bottom,left:t.left,right:t.right}})}),[],!1,null,"6fa7f04e",null);e.default=component.exports},336:function(t,e,n){"use strict";n(322)},337:function(t,e,n){var r=n(37)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n@media screen and (min-width:1024px){\nsection[data-v-081ab26b]{\n    height:calc(100vh - 64px)\n}\n}\n.code-handler-styles[data-v-081ab26b]{\n  border-radius:10px\n}\n.hero__code[data-v-081ab26b],.hero__text[data-v-081ab26b]{\n  flex-basis:50%\n}\n.hero__code .code-toolbar[data-v-081ab26b]{\n  height:100%!important\n}\n.hero-content-last-name[data-v-081ab26b]{\n  margin-top:-.25em\n}\n.scroll-icon[data-v-081ab26b]{\n  -webkit-animation:up-and-down-data-v-081ab26b 1s ease-out infinite;\n          animation:up-and-down-data-v-081ab26b 1s ease-out infinite;\n  position:absolute;\n  bottom:0;\n  left:0;\n  font-size:4rem\n}\n@-webkit-keyframes up-and-down-data-v-081ab26b{\n0%{\n    transform:translateY(0)\n}\n50%{\n    transform:translateY(-10px)\n}\nto{\n    transform:translateY(0)\n}\n}\n@keyframes up-and-down-data-v-081ab26b{\n0%{\n    transform:translateY(0)\n}\n50%{\n    transform:translateY(-10px)\n}\nto{\n    transform:translateY(0)\n}\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},351:function(t,e,n){"use strict";n.r(e);n(22),n(62);var r={name:"SectionHero",methods:{scrollToPosition:function(t){document.getElementById(t.split("#").pop()).scrollIntoView({behavior:"smooth"})}}},l=(n(336),n(11)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"flex flex-col lg:flex-row mb-32 p-3 relative",attrs:{id:"home"}},[n("div",{staticClass:"flex flex-col h-full justify-center hero__text md:mr-5 xl:mr-0"},[n("h1",{staticClass:"text-6xl xl:text-7xl 2xl:text-8xl"},[t._v("\n      "+t._s(t.$t("hero.title"))+"\n    ")]),t._v(" "),n("p",{staticClass:"mt-10 text-xl"},[n("strong",[t._v("\n        "+t._s(t.$t("hero.description1"))+"\n      ")])]),t._v(" "),n("p",{staticClass:"text-xl"},[n("strong",[t._v("\n        "+t._s(t.$t("hero.description2"))+"\n      ")])]),t._v(" "),n("div",{staticClass:"flex flex-col sm:flex-row lg:flex-col xl:flex-row"},[n("a",[n("base-button",{staticClass:"mt-12 relative w-full md:w-unset",attrs:{"is-call-to-action":""},on:{click:function(e){return t.scrollToPosition("portfolio")}}},[n("div",{staticClass:"w-full h-full"}),t._v(" "),n("span",{staticClass:"mdi mdi-eye absolute left-5"}),t._v(" "),n("span",{staticClass:"mx-2"}),t._v("\n          "+t._s(t.$t("hero.button1"))+"\n        ")])],1),t._v(" "),n("a",[n("base-button",{staticClass:"mt-2 sm:mt-12 lg:mt-2 xl:mt-12 sm:ml-2 lg:ml-0 xl:ml-2 relative w-full md:w-unset",attrs:{"is-call-to-action":"",outline:""},on:{click:function(e){return t.scrollToPosition("social-networks")}}},[n("div",{staticClass:"w-full h-full"}),t._v(" "),n("span",{staticClass:"mdi mdi-email absolute left-5"}),t._v(" "),n("span",{staticClass:"mx-2"}),t._v("\n          "+t._s(t.$t("hero.button2"))+"\n        ")])],1)])]),t._v(" "),t._m(0),t._v(" "),n("span",{staticClass:"mdi mdi-arrow-down scroll-icon invisible xl:visible"})])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex flex-col mt-10 md:mt-0 h-full justify-center hero__code lg:max-w-lg xl:max-w-max"},[e("img",{staticClass:"w-full h-auto",attrs:{src:"code.png",width:"336",height:"268.583",alt:"Code for the sake of showing some of my skills.",srcset:""}})])}],!1,null,"081ab26b",null);e.default=component.exports;installComponents(component,{BaseButton:n(67).default})},352:function(t,e,n){"use strict";n.r(e);var r={name:"SectionAbout"},l=n(11),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("base-section",{staticClass:"items-center justify-center",attrs:{id:"about",title:t.$t("about")}},[n("p",[t._v("\n    "+t._s(t.$t("aboutText"))+"\n  ")]),t._v(" "),n("div",{staticClass:"flex flex-col sm:flex-row mt-2"},[n("div",{staticClass:"flex flex-col md:flex-row"},[n("base-card",{staticClass:"w-full md:mr-1 py-4",attrs:{transparent:""}},[n("card-feature",{attrs:{title:t.$t("intuitive"),icon:"mdi-lightbulb-on-outline"}},[n("p",{staticClass:"md:text-center md:mx-3"},[t._v("\n            "+t._s(t.$t("intuitiveText"))+"\n          ")])])],1),t._v(" "),n("base-card",{staticClass:"w-full md:mx-1 py-4",attrs:{transparent:""}},[n("card-feature",{attrs:{title:t.$t("fast"),icon:"mdi-rocket-launch"}},[n("p",{staticClass:"md:text-center md:mx-3"},[t._v("\n            "+t._s(t.$t("fastText"))+"\n          ")])])],1)],1),t._v(" "),n("div",{staticClass:"flex flex-col md:flex-row md:mt-2"},[n("base-card",{staticClass:"w-full md:mr-1 py-4",attrs:{transparent:""}},[n("card-feature",{attrs:{title:t.$t("responsive"),icon:"mdi-responsive"}},[n("p",{staticClass:"md:text-center md:mx-3"},[t._v("\n            "+t._s(t.$t("responsiveText"))+"\n          ")])])],1),t._v(" "),n("base-card",{staticClass:"w-full md:mx-1 py-4",attrs:{transparent:""}},[n("card-feature",{attrs:{title:t.$t("reactive"),icon:"mdi-alpha-r-circle"}},[n("p",{staticClass:"md:text-center md:mx-3"},[t._v("\n            "+t._s(t.$t("reactiveText"))+"\n          ")])])],1)],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CardFeature:n(329).default,BaseCard:n(296).default,BaseSection:n(301).default})},353:function(t,e,n){"use strict";n.r(e);var r={name:"SectionSkills",data:function(){return{frontendTechnologies:["HTML5","CSS3","SCSS","Tailwind CSS","Bootstrap","Vuetify","Javascript","Vue.js","Angular","Nuxt.js"],backendTechnologies:["Javascript","PHP","Node.js","Express.js","Laravel"],databaseTechnologies:["MariaDB","MySQL","PostgreSQL","MongoDB"],languages:["English","Español"]}}},l=n(11),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("base-section",{staticClass:"items-center justify-center",attrs:{id:"portfolio",title:t.$t("portfolio")}},[n("div",{staticClass:"flex flex-col"},[n("base-card",{staticClass:"bg-secondary mx-4"},[n("card-text",{staticClass:"flex",attrs:{"no-padding":""}},[n("span",{staticClass:"mdi self-center md:self-auto mdi-code-tags text-8xl color-primary mr-2"}),t._v(" "),n("div",{staticClass:"flex flex-col"},[n("h2",[t._v("Frontend")]),t._v(" "),n("p",[t._v(t._s(t.$t("frontendDescription")))]),t._v(" "),n("chip-river",{staticClass:"mt-2",attrs:{values:t.frontendTechnologies}})],1)])],1),t._v(" "),n("base-card",{staticClass:"bg-secondary mx-4 mt-4 md:mt-8"},[n("card-text",{staticClass:"flex",attrs:{"no-padding":""}},[n("span",{staticClass:"mdi self-center md:self-auto mdi-server text-8xl color-primary mr-2"}),t._v(" "),n("div",{staticClass:"flex flex-col"},[n("h2",[t._v("Backend")]),t._v(" "),n("p",[t._v(t._s(t.$t("backendDescription")))]),t._v(" "),n("chip-river",{staticClass:"mt-2",attrs:{values:t.backendTechnologies}})],1)])],1),t._v(" "),n("base-card",{staticClass:"bg-secondary mx-4 mt-4 md:mt-8"},[n("card-text",{staticClass:"flex",attrs:{"no-padding":""}},[n("span",{staticClass:"mdi self-center md:self-auto mdi-database text-8xl color-primary mr-2"}),t._v(" "),n("div",{staticClass:"flex flex-col"},[n("h2",[t._v(t._s(t.$t("database")))]),t._v(" "),n("p",[t._v(t._s(t.$t("databaseDescription")))]),t._v(" "),n("chip-river",{staticClass:"mt-2",attrs:{values:t.databaseTechnologies}})],1)])],1),t._v(" "),n("base-card",{staticClass:"bg-secondary mx-4 mt-4 md:mt-8"},[n("card-text",{staticClass:"flex",attrs:{"no-padding":""}},[n("span",{staticClass:"mdi self-center md:self-auto mdi-translate text-8xl color-primary mr-2"}),t._v(" "),n("div",{staticClass:"flex flex-col"},[n("h2",[t._v(t._s(t.$t("language")))]),t._v(" "),n("p",[t._v(t._s(t.$t("languagesDescription")))]),t._v(" "),n("chip-river",{staticClass:"mt-2",attrs:{values:t.languages}})],1)])],1)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ChipRiver:n(330).default,CardText:n(302).default,BaseCard:n(296).default,BaseSection:n(301).default})},354:function(t,e,n){"use strict";n.r(e);var r={name:"SectionProjects"},l=n(11),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("base-section",{staticClass:"flex flex-col items-center justify-center",attrs:{title:t.$t("projects.title")}},[n("base-card",{staticClass:"w-full"},[n("card-text",[n("project-carousel")],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProjectCarousel:n(331).default,CardText:n(302).default,BaseCard:n(296).default,BaseSection:n(301).default})},355:function(t,e,n){"use strict";n.r(e);var r=n(318).a,l=n(11),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("base-section",{staticClass:"items-center justify-center",attrs:{id:"social-networks",title:t.$t("contacts"),"title-alignment":"self-center"}},[n("div",{staticClass:"flex text-7xl md:text-8xl"},t._l(t.socialLinks,(function(link,t){return n("a",{key:link+t,staticClass:"social-link",attrs:{href:link.link}},[n("span",{class:"mdi "+link.icon+" color-primary"})])})),0),t._v(" "),n("base-card",{staticClass:"mt-8 p-4"},[n("h2",{staticClass:"text-base sm:text-2xl font-bold"},[t._v("\n      "+t._s(t.$t("formTitle"))+"\n    ")]),t._v(" "),t.message.active?n("app-alert",{staticClass:"mt-3",attrs:{text:t.message.text,type:t.message.type}}):t._e(),t._v(" "),n("form",{attrs:{id:"form",name:"contact","data-netlify":"true"},on:{submit:function(e){return e.preventDefault(),t.submitForm.apply(null,arguments)}}},[n("div",{staticClass:"flex flex-col"},[n("base-input-text",{staticClass:"mt-3",attrs:{label:t.$t("form.name"),required:"",placeholder:"John Doe",name:"name"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),t._v(" "),n("base-input-text",{staticClass:"mt-3",attrs:{label:t.$t("form.email"),type:"email",required:"",placeholder:"john@mail.com",name:"email"},model:{value:t.form.address,callback:function(e){t.$set(t.form,"address",e)},expression:"form.address"}}),t._v(" "),n("base-area-text",{staticClass:"mt-3",attrs:{label:t.$t("form.message"),required:"",placeholder:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",name:"message"},model:{value:t.form.body,callback:function(e){t.$set(t.form,"body",e)},expression:"form.body"}}),t._v(" "),n("base-button",{staticClass:"mt-3 self-start",attrs:{loading:t.loading}},[t._v("\n          "+t._s(t.$t("button.send"))+"\n        ")])],1)])],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AppAlert:n(332).default,BaseInputText:n(333).default,BaseAreaText:n(334).default,BaseButton:n(67).default,BaseCard:n(296).default,BaseSection:n(301).default})},356:function(t,e,n){"use strict";n.r(e);var r=n(319).a,l=n(11),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.repositories&&t.repositories.length?n("base-section",{staticClass:"items-center justify-center",attrs:{id:"repositories",title:t.$t("repositories"),"title-alignment":"self-center"}},[n("div",{staticClass:"relative"},[n("base-ball",{staticClass:"bg-primary",attrs:{right:"-30px",top:"-20px","z-index":-10,medium:""}}),t._v(" "),n("base-ball",{staticClass:"bg-primary",attrs:{right:"30px",top:"20px","z-index":-10,small:""}}),t._v(" "),n("base-card",{staticClass:"pb-8"},[n("card-text",{staticClass:"flex flex-col justify-center"},t._l(t.repositories,(function(t,e){return n("base-link",{key:t.name+e,staticClass:"mt-1 px-2 rounded",attrs:{href:t.html_url,text:t.name,icon:""}})})),1)],1),t._v(" "),n("base-ball",{staticClass:"bg-primary",attrs:{left:"30px",bottom:"-20px","z-index":-10,small:""}})],1)]):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BaseBall:n(335).default,BaseLink:n(310).default,CardText:n(302).default,BaseCard:n(296).default,BaseSection:n(301).default})},380:function(t,e,n){"use strict";n.r(e);var r={name:"Index"},l=n(11),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container mx-auto"},[n("section-hero"),t._v(" "),n("section-about"),t._v(" "),n("section-skills"),t._v(" "),n("section-projects"),t._v(" "),n("section-contacts"),t._v(" "),n("section-repositories")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SectionHero:n(351).default,SectionAbout:n(352).default,SectionSkills:n(353).default,SectionProjects:n(354).default,SectionContacts:n(355).default,SectionRepositories:n(356).default})}}]);