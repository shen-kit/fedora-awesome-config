"use strict";(globalThis.webpackChunkmomentum=globalThis.webpackChunkmomentum||[]).push([[7734,9437],{99437:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(20144),l=n(88026),i=n(51726),o=n.n(i),d=n(34952),s=n(7838),u=n(35174);let c={};const r={bind:function(e,t){m.utils.isTouchDevice()&&(e.dataset.justBoundMobileClickHandler=!0,setTimeout((()=>{e.dataset.justBoundMobileClickHandler=!1}),100),e.dataset.mobileClickHandlerId=Math.random().toString(36).substring(7),c[e.dataset.mobileClickHandlerId]=t.value,e.addEventListener("click",t.value))},unbind:function(e){m.utils.isTouchDevice()&&(e.removeEventListener("click",c[e.dataset.mobileClickHandlerId]),delete c[e.dataset.mobileClickHandlerId],delete e.dataset.mobileClickHandlerId,delete e.dataset.justBoundMobileClickHandler)}};var b=n(28692),v=n(64398),k=n(77197);a.ZP.use(l.Z,{name:"unreactive"}),a.ZP.use(o()),a.ZP.use(d.InlineSvgPlugin),a.ZP.use(b.og),a.ZP.use(k.Z),a.ZP.prototype.$xhr=u.Z,a.ZP.prototype.$e=s.Z,a.ZP.directive("mobile-click",r),new a.ZP({bb:()=>({conditionalFeatures:m.conditionalFeatures,teamInfo:m.models.teamInfo,date:m.models.date,balance:m.models.balanceMode,bookmarksSettings:m.models.bookmarksSettings})}),a.ZP.mixin({unreactive:()=>({$touch:m.utils.isTouchDevice()}),computed:{$mobile:()=>m.reactive.windowDimensions.width<=450,$plus:()=>m.conditionalFeatures.featureEnabled("plus"),$team:()=>m.conditionalFeatures.featureEnabled("team"),$admin:()=>m.models.teamInfo&&m.models.teamInfo.get("team")&&m.models.teamInfo.get("team").userIsAdmin},pinia:v.Z});const p=a.ZP},37734:(e,t,n)=>{n.r(t);var a=n(99437);const l=()=>Promise.all([n.e(3246),n.e(3064),n.e(7651),n.e(3554),n.e(2363),n.e(6285),n.e(5537)]).then(n.bind(n,39243));localStorage.getItem("dev-panel:open")?o():m.once("globalEvent:ctrlShiftBacktick",o);const i=localStorage.getObject("dev-panel:pinned-step");function o(){m.utils.loadModuleDefault(l).then((e=>{let t=document.createElement("div");t.setAttribute("id","dev-panel"),document.body.prepend(t),new a.Z({render:t=>t(e)}).$mount("#dev-panel")}))}i&&m.utils.loadModuleDefault((()=>Promise.all([n.e(3064),n.e(7651),n.e(5774)]).then(n.bind(n,55774)))).then((e=>{e.setPinnedStepActiveOnDashLoad(i)}))}}]);