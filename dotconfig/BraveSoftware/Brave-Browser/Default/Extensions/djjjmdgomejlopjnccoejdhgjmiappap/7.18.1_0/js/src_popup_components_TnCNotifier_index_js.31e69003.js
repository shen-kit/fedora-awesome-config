"use strict";(self.webpackChunkwhale_ext=self.webpackChunkwhale_ext||[]).push([["src_popup_components_TnCNotifier_index_js"],{30282:
/*!***************************************************************!*\
  !*** ./src/popup/components/TnCNotifier/index.js + 2 modules ***!
  \***************************************************************/(e,t,n)=>{n.r(t),n.d(t,{default:()=>q});var a=n(41609),r=n.n(a),i=n(45697),o=n.n(i),l=n(67294),c=n(65858),s=n(23588),m=n(63535),d=n(20374),h=n(77803),p=n(8018),u=n(31732),f=n(49043),g=n(7781),C=n(90623),x=n(18855),v=n(43541),b=n(83582),E=n(6688),_=n(96965),w=n(26846),k=n(53731),y=function(e){var t=e.className;return l.createElement("svg",{width:"8",height:"8",viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:t},l.createElement("path",{d:"M1 4.75L2.8 7L7 1",stroke:"#898D9A",strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"}))};y.propTypes={className:i.string},y.defaultProps={className:""};const N=l.memo(y);var I=n(92319),T=n(20136),S="#36c189",Z="#ff3407",L="#e5faf1",P="#fff0f0",A=s.ZP.div.withConfig({displayName:"CashbackTerms__Container",componentId:"hmiu3j-0"})(["&&{display:flex;flex-direction:column;}"]),O=(0,s.ZP)(g.T).withConfig({displayName:"CashbackTerms__Header",componentId:"hmiu3j-1"})(["&&{padding:0px !important;margin-bottom:12px !important;}"]),j=(0,s.ZP)(T.xv).withConfig({displayName:"CashbackTerms__TnCInfoText",componentId:"hmiu3j-2"})(["&&{font-weight:bold;font-size:12px;line-height:14px;color:#212836;text-align:justify;margin-bottom:12px;}"]),M=(0,s.ZP)(T.xv).withConfig({displayName:"CashbackTerms__TnCTitle",componentId:"hmiu3j-3"})(["&&{font-weight:bold;font-size:10px;line-height:12px;text-align:justify;margin-bottom:8px;color:",";}"],(function(e){return e.color})),D=s.ZP.div.withConfig({displayName:"CashbackTerms__TnCList",componentId:"hmiu3j-4"})(["&&{padding:8px;margin-bottom:12px;background:",";}"],(function(e){return e.background})),H=s.ZP.div.withConfig({displayName:"CashbackTerms__DataRow",componentId:"hmiu3j-5"})(["&&{display:flex;flex-direction:row;align-items:center;}&&:not(:last-child){margin-bottom:14px;}"]),R=(0,s.iv)(["margin-right:4px;margin-top:2px;align-self:start;flex-shrink:0;"]),z=(0,s.ZP)(N).withConfig({displayName:"CashbackTerms__StyledCheckIcon",componentId:"hmiu3j-6"})(["&&{",";}"],R),G=(0,s.ZP)(I.Z).withConfig({displayName:"CashbackTerms__StyledCrossIcon",componentId:"hmiu3j-7"})(["&&{",";}"],R),X=(0,s.ZP)(T.xv).withConfig({displayName:"CashbackTerms__TnCItem",componentId:"hmiu3j-8"})(["&&{font-size:10px;line-height:12px;color:#212836;text-align:left;}"]),B=function(e){var t,n,a,i,o=e.tnc;return r()(o.tracked)&&r()(o.notAvailable)?null:l.createElement(l.Fragment,null,l.createElement(O,{title:browser.i18n.getMessage("tnc_title_cashback_note")}),l.createElement(A,null,l.createElement(j,null,browser.i18n.getMessage("tnc_ensure_cashback")),!r()(o.tracked)&&l.createElement(l.Fragment,null,l.createElement(M,{color:S},browser.i18n.getMessage("tnc_dos")),l.createElement(D,{background:L},null===(t=o.tracked)||void 0===t||null===(n=t.map)||void 0===n?void 0:n.call(t,(function(e){return l.createElement(H,{key:e},l.createElement(z,null),l.createElement(k.Z,{componentDecorator:function(e,t,n){return l.createElement("a",{target:"blank",href:e,key:n},t)}},l.createElement(X,null,e)))})))),!r()(o.notAvailable)&&l.createElement(l.Fragment,null,l.createElement(M,{color:Z},browser.i18n.getMessage("tnc_donts")),l.createElement(D,{background:P},null===(a=o.notAvailable)||void 0===a||null===(i=a.map)||void 0===i?void 0:i.call(a,(function(e){return l.createElement(H,{key:e},l.createElement(G,null),l.createElement(k.Z,{componentDecorator:function(e,t,n){return l.createElement("a",{target:"blank",href:e,key:n},t)}},l.createElement(X,null,e)))}))))))};B.defaultProps={tnc:{notAvailable:[],tracked:[]}},B.propTypes={tnc:o().shape({notAvailable:o().array,tracked:o().array})};const F=B;var U=(0,s.ZP)(g.Z).withConfig({displayName:"TnCNotifier__TabContentContainer",componentId:"sc-1szpwiu-0"})(["&&{padding:12px;}"]),K=function(e){var t,n=e.selfTabIndex,a=e.selfContentIndex,i=(0,v.O)(),o=null!==(t=null==i?void 0:i.merchantId)&&void 0!==t?t:null,s=(0,c.I0)(),g=(0,m.Z)(n,a),k=(0,c.v9)((function(e){return(0,b.GM)(e,{merchant:i})})),y=(0,c.v9)((function(e){return(0,b.tm)(e,{merchant:i})}))||k,N=(0,c.v9)((function(e){return(0,E.vb)(e,{merchantId:o})||(0,_.v6)(e,{merchant:i})})),I=(0,c.v9)(w.NQ),T=I===C.dF,S=I===C.UP||I===C.j5,Z=(0,c.v9)((function(e){return(0,w.j_)(e,{id:o})})),L=!r()(null==Z?void 0:Z.tracked)||!r()(null==Z?void 0:Z.notAvailable)||!r()(null==Z?void 0:Z.tncSections);(0,l.useEffect)((function(){o&&s((0,h.vu)(o))}),[]);var P=L||S;return(0,d.Z)(x.UW,L,P),N&&!y?null:L?l.createElement(u.Z,{merchant:i},l.createElement(U,{ref:g},l.createElement(F,{tnc:Z}),l.createElement(p.Z,{tnc:Z}))):T?l.createElement(f.Z,{ref:g}):null};K.propTypes={selfTabIndex:i.number.isRequired,selfContentIndex:i.number.isRequired};const q=l.memo(K)},94588:
/*!***************************************************************!*\
  !*** ./src/shared/components/CashbackTnCSection/constants.js ***!
  \***************************************************************/(e,t,n)=>{n.d(t,{G:()=>a});var a={CASHBACK_EXCLUSIONS:"CASHBACK_EXCLUSIONS",SPECIAL_NOTES:"SPECIAL_NOTES",TERM_AND_CONDITIONS:"TERM_AND_CONDITIONS"}},8018:
/*!***********************************************************!*\
  !*** ./src/shared/components/CashbackTnCSection/index.js ***!
  \***********************************************************/(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(/*! lodash/isEmpty */41609),r=n.n(a),i=n(/*! prop-types */45697),o=n.n(i),l=n(/*! react */67294),c=n(/*! styled-components */23588),s=n(/*! ./constants */94588),m=c.ZP.div.withConfig({displayName:"CashbackTnCSection__Container",componentId:"sc-1yhsbh6-0"})(["&&{margin-bottom:12px;}"]),d=c.ZP.h3.withConfig({displayName:"CashbackTnCSection__CashbackTnCTitle",componentId:"sc-1yhsbh6-1"})(["&&{font-weight:700;font-size:14px;line-height:16px;color:#232938;margin-top:0;margin-bottom:12px;}"]),h=c.ZP.div.withConfig({displayName:"CashbackTnCSection__ContentContainer",componentId:"sc-1yhsbh6-2"})(["&&{font-size:12px;text-align:left;color:#40485a;}&& ul{list-style-type:disc !important;margin:0 0 20px 20px !important;padding:0px;}&& ul > li{list-style-type:disc !important;}&& ul:last-child{margin:0 0 0 20px !important;}&& p{margin-bottom:0;}&& h3{font-weight:normal;margin:0;}"]),p=function(e){var t=e.tnc,n=e.includeList,a=e.isExpand,i=t.tncSections;if(r()(i))return null;if(!a)return null;var o=new Set(n);return i.filter((function(e){return o.has(e.key)})).map((function(e){var t=e.title,n=e.content,a=e.key;return l.createElement(m,{key:a},l.createElement(d,null,t),l.createElement(h,{dangerouslySetInnerHTML:{__html:n}}))}))};p.defaultProps={tnc:{tncSections:[]},includeList:[s.G.CASHBACK_EXCLUSIONS,s.G.SPECIAL_NOTES,s.G.TERM_AND_CONDITIONS],isExpand:!0},p.propTypes={tnc:o().shape({tncSections:o().array}),includeList:o().array,isExpand:o().bool};const u=p},31732:
/*!**************************************************************************!*\
  !*** ./src/shared/components/Experiment/MerchantOffExperimentWrapper.js ***!
  \**************************************************************************/(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(/*! react-redux */65858),r=n(/*! ../../selectors/activation */83582),i=n(/*! ../../selectors/experiments */6688);const o=function(e){var t=e.children,n=e.merchant,o=e.disableInAllStatus,l=void 0!==o&&o,c=(0,a.v9)((function(e){return(0,i.Zb)(e,{merchantId:null==n?void 0:n.merchantId})})),s=(0,a.v9)((function(e){return(0,r.GM)(e,{merchant:n})||(0,r.tm)(e,{merchant:n})}));return c&&l||c&&!s?null:t}},92319:
/*!**************************************************!*\
  !*** ./src/shared/components/Icons/CrossIcon.js ***!
  \**************************************************/(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(/*! prop-types */45697),r=n(/*! react */67294),i=function(e){var t=e.className;return r.createElement("svg",{width:"8",height:"8",viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:t},r.createElement("path",{d:"M7.83263 0.97549C8.05579 0.752333 8.05579 0.390524 7.83263 0.167368C7.60948 -0.0557892 7.24767 -0.0557892 7.02451 0.167368L4 3.19188L0.97549 0.167368C0.752333 -0.0557892 0.390524 -0.0557892 0.167368 0.167368C-0.0557892 0.390524 -0.0557892 0.752333 0.167368 0.97549L3.19188 4L0.167368 7.02451C-0.0557892 7.24767 -0.0557892 7.60948 0.167368 7.83263C0.390524 8.05579 0.752333 8.05579 0.97549 7.83263L4 4.80812L7.02451 7.83263C7.24767 8.05579 7.60948 8.05579 7.83263 7.83263C8.05579 7.60948 8.05579 7.24767 7.83263 7.02451L4.80812 4L7.83263 0.97549Z",fill:"#898D9A"}))};i.propTypes={className:a.string},i.defaultProps={className:""};const o=r.memo(i)},49043:
/*!**************************************************************!*\
  !*** ./src/shared/components/Skeletons/TnCSkeleton/index.js ***!
  \**************************************************************/(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(/*! react */67294),r=n(/*! styled-components */23588),i=n(/*! ../../../styledComponents */20136),o=n(/*! ../../../styledComponents/Skeleton */64616),l=(0,r.ZP)(i.z4).withConfig({displayName:"TnCSkeleton__Container",componentId:"sc-1a108al-0"})(["&&{padding:",";}"],"12px");const c=a.forwardRef((function(e,t){return a.createElement(l,{ref:t},a.createElement(o.O,{width:"100px",height:"16px"}),a.createElement(i.NH,{height:"14px"}),a.createElement(o.O,{width:"200px",height:"14px"}),a.createElement(i.NH,{height:"12px"}),a.createElement(o.O,{width:"50px",height:"12px"}),a.createElement(i.NH,{height:"8px"}),a.createElement(o.O,{width:"100%",height:"75px"}),a.createElement(i.NH,{height:"12px"}),a.createElement(o.O,{width:"50px",height:"12px"}),a.createElement(i.NH,{height:"8px"}),a.createElement(o.O,{width:"100%",height:"75px"}))}))},64616:
/*!*************************************************!*\
  !*** ./src/shared/styledComponents/Skeleton.js ***!
  \*************************************************/(e,t,n)=>{n.d(t,{O:()=>i,L:()=>o});var a=n(/*! styled-components */23588),r=(0,a.F4)(["0%{transform:translateX(-100%);}60%{transform:translateX(100%);}100%{transform:translateX(100%);}"]),i=a.ZP.div.withConfig({displayName:"Skeleton",componentId:"edinct-0"})(["&&{width:",";height:",";margin:",";border-radius:",";display:",";background:linear-gradient(90deg,#efefef,transparent);overflow:hidden;}&&:after{width:",";height:",";content:'';animation:"," 1.5s linear 0.5s infinite;background:linear-gradient(90deg,transparent,#f5f5f5,transparent);}"],(function(e){return e.width||"auto"}),(function(e){return e.height}),(function(e){return e.margin}),(function(e){return e.borderRadius||"3px"}),(function(e){return e.display||"flex"}),(function(e){return e.width||"auto"}),(function(e){return e.height}),r),o=(0,a.ZP)(i).withConfig({displayName:"Skeleton__CircleSkeleton",componentId:"edinct-1"})(["&&{border-radius:50%;}"])}}]);