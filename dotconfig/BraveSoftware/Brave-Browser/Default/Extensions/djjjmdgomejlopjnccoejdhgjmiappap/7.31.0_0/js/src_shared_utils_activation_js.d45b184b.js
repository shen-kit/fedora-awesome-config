"use strict";(self.webpackChunkwhale_ext=self.webpackChunkwhale_ext||[]).push([["src_shared_utils_activation_js"],{91228:
/*!****************************************************!*\
  !*** ./src/shared/utils/activation.js + 2 modules ***!
  \****************************************************/(e,s,t)=>{t.d(s,{UO:()=>l,xc:()=>h,le:()=>m});t(50008),t(63038),t(48926);var i=t(34575),n=t.n(i),o=t(93913),r=t.n(o),c=t(44340),u=[c.C4.EXT_OPEN_MENU,c.C4.EXT_VIEW_MERCHANT_PAGE,c.C4.EXT_PROMPT_NOTIFIER_COMPARISON],a=function(e){var s=Math.floor(Date.now()/1e3);return{sessionId:e?e+s.toString():function(e){if(void 0!==e&&"number"==typeof e){for(var s="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",i="abcdefghijklmnopqrstuvwxyz",n=0;n<e-1;n++)s+=t.charAt(36*Math.random()%36);return s+i.charAt(26*Math.random()%26)}}(6)+s.toString(),createdAt:s}};new(function(){function e(){n()(this,e),this.sessionId=null,this.createdAt=-1,this.sessionTimeout=300}return r()(e,[{key:"checkAndGetSessionId",value:function(e,s){return!this.sessionId||this.isSessionExpired()?function(e){return u.includes(e)}(e)?(this.renew(s),this.sessionId):(this.revoke(),this.sessionId):(this.refresh(),this.sessionId)}},{key:"setTimeout",value:function(e){this.sessionTimeout=e}},{key:"renew",value:function(e){var s=a(e),t=s.sessionId,i=s.createdAt;this.sessionId=t,this.createdAt=i}},{key:"refresh",value:function(){this.createdAt=Math.floor(Date.now()/1e3)}},{key:"revoke",value:function(){this.sessionId=null,this.createdAt=-1}},{key:"isSessionExpired",value:function(){return Math.floor(Date.now()/1e3)-this.createdAt>this.sessionTimeout}},{key:"debug",value:function(){console.log("sessionId",this.sessionId),console.log("createAt",this.createdAt),console.log("sessionTimeout",this.sessionTimeout)}}]),e}());t(11713),t(62620);var d=t(92671);t(51693),t(45786),t(4536);var h=function(e){var s=e.merchant,t=e.utmMedium,i=e.cc,n=e.deeplink,o=e.isLoggedIn,r=e.isNewTab,c=e.unfocusedActivation;browser.runtime.sendMessage({merchant:s,utmMedium:t,cc:i,deeplink:n,isLoggedIn:o,isNewTab:r,unfocusedActivation:c,action:d.Dy})},l=function(e){var s=e.merchant,t=e.utmMedium,i=e.cc,n=e.deeplink,o=e.isLoggedIn,r=e.isNewTab,c=e.unfocusedActivation,u=e.sellerId,a=e.redirectUrl;browser.runtime.sendMessage({merchant:s,utmMedium:t,cc:i,deeplink:n,isLoggedIn:o,isNewTab:r,unfocusedActivation:c,sellerId:u,redirectUrl:a,action:d.BN})},m=function(e){var s=e.tabId,t=e.productId,i=e.merchant,n=e.utmMedium,o=e.cc,r=e.isLoggedIn;browser.runtime.sendMessage({tabId:s,productId:t,merchant:i,utmMedium:n,cc:o,isLoggedIn:r,action:d.s0})}}}]);