"use strict";(self.webpackChunkwhale_ext=self.webpackChunkwhale_ext||[]).push([["src_popup_components_EducationNotifier_js"],{30716:
/*!***************************************************!*\
  !*** ./src/popup/components/EducationNotifier.js ***!
  \***************************************************/(e,n,t)=>{t.r(n),t.d(n,{default:()=>k});var r=t(/*! lodash/isNil */14293),i=t.n(r),a=t(/*! prop-types */45697),o=t(/*! react */67294),u=t(/*! react-redux */65858),c=t(/*! styled-components */23588),l=t(/*! ../hooks/useDisplayState */63535),p=t(/*! ../hooks/useScreenProperties */20374),d=t(/*! ../../shared/components/Experiment/MerchantOffExperimentWrapper */31732),s=t(/*! ../../shared/components/Icons/WomanIcon */45203),m=t(/*! ../../shared/components/Tabs/TabContent */7781),h=t(/*! ../../shared/constants/tabs */18855),g=t(/*! ../../shared/contexts/merchant */43541),f=t(/*! ../../shared/selectors/activation */83582),x=t(/*! ../../shared/selectors/merchant */96965),b=t(/*! ../../shared/styledComponents */20136),w=c.ZP.div.withConfig({displayName:"EducationNotifier__Container",componentId:"sc-1clb8k7-0"})(["&&{display:flex;padding:0 8px 12px 8px;}"]),v=(0,c.ZP)(b.xv).withConfig({displayName:"EducationNotifier__EducationText",componentId:"sc-1clb8k7-1"})(["&&{font-size:12px;line-height:14px;color:#6b7280;text-align:left;width:250px;margin-left:12px;}"]),_=function(e){var n=e.selfTabIndex,t=e.selfContentIndex,r=(0,g.O)(),a=(0,u.v9)((function(e){return(0,x.Jz)(e,{merchant:r})})),c=(0,u.v9)((function(e){return(0,f.GM)(e,{merchant:r})})),b=(0,u.v9)((function(e){return(0,f.tm)(e,{merchant:r})}))||c,_=(0,u.v9)((function(e){return(0,x.v6)(e,{merchant:r})})),k=(0,l.Z)(n,t),E=!i()(r)&&!a;return(0,p.Z)(h.y2,E),E?_&&!b?null:o.createElement(d.Z,{merchant:r},o.createElement(m.Z,{ref:k},o.createElement(m.T,{title:browser.i18n.getMessage("tip")}),o.createElement(w,null,o.createElement(s.Z,null),o.createElement(v,null,browser.i18n.getMessage("popup_education_text"))))):null};_.propTypes={selfTabIndex:a.number.isRequired,selfContentIndex:a.number.isRequired};const k=o.memo(_)},31732:
/*!**************************************************************************!*\
  !*** ./src/shared/components/Experiment/MerchantOffExperimentWrapper.js ***!
  \**************************************************************************/(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(/*! react-redux */65858),i=t(/*! ../../selectors/activation */83582),a=t(/*! ../../selectors/experiments */6688);const o=function(e){var n=e.children,t=e.merchant,o=e.disableInAllStatus,u=void 0!==o&&o,c=(0,r.v9)((function(e){return(0,a.Zb)(e,{merchantId:null==t?void 0:t.merchantId})})),l=(0,r.v9)((function(e){return(0,i.GM)(e,{merchant:t})||(0,i.tm)(e,{merchant:t})}));return c&&u||c&&!l?null:n}},45203:
/*!**************************************************!*\
  !*** ./src/shared/components/Icons/WomanIcon.js ***!
  \**************************************************/(e,n,t)=>{t.d(n,{Z:()=>p});var r=t(/*! prop-types */45697),i=t(/*! react */67294),a=t(/*! styled-components */23588),o=browser.runtime.getURL("images/popup/woman-bg.png"),u=browser.runtime.getURL("images/popup/woman-bg-2x.png"),c=a.ZP.div.withConfig({displayName:"WomanIcon__WomanBackgroundContainer",componentId:"sc-1g8jh9d-0"})(["&&{background-image:url(",");background-image:image-set(url(",") 1x,url(",") 2x);background-repeat:no-repeat;background-size:cover;width:",";height:",";}"],o,o,u,(function(e){return e.width||"80px"}),(function(e){return e.height||"60px"})),l=function(e){var n=e.width,t=e.height;return i.createElement(c,{width:n,height:t})};l.propTypes={width:r.string,height:r.string},l.defaultProps={width:"80px",height:"60px"};const p=l}}]);