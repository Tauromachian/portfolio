(window.webpackJsonp=window.webpackJsonp||[]).push([[17,10],{309:function(t,e,n){var content=n(317);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(37).default)("3aed28f4",content,!0,{sourceMap:!1})},316:function(t,e,n){"use strict";n(309)},317:function(t,e,n){var r=n(36)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.chip[data-v-4a3cd802]{\n  background-color:var(--bg-card)\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},321:function(t,e,n){"use strict";n.r(e);var r={name:"BaseButton",props:{text:{type:String,default:""}}},c=(n(316),n(11)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"chip rounded-3xl py-1 px-3 text-xs",on:{click:function(e){return t.$emit("click")}}},[t._t("default",(function(){return[t._v("\n    "+t._s(t.text)+"\n  ")]}))],2)}),[],!1,null,"4a3cd802",null);e.default=component.exports},330:function(t,e,n){"use strict";n.r(e);var r={name:"ChipRiver",props:{values:{type:[Array,Object],default:function(){return[]}}},data:function(){return{activeChips:[]}}},c=n(11),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-wrap"},t._l(t.values,(function(e,r){return n("base-chip",{key:e+r,staticClass:"mr-1 mb-1",attrs:{text:e,"is-activable":!1},model:{value:t.activeChips[r],callback:function(e){t.$set(t.activeChips,r,e)},expression:"activeChips[index]"}})})),1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BaseChip:n(321).default})}}]);