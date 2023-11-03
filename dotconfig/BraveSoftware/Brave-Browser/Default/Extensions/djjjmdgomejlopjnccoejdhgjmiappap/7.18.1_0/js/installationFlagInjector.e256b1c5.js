(self.webpackChunkwhale_ext=self.webpackChunkwhale_ext||[]).push([["installationFlagInjector"],{22858:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/e=>{e.exports=function(e){if(Array.isArray(e))return e}},48926:
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/e=>{function t(e,t,r,n,i,o,a){try{var s=e[o](a),c=s.value}catch(e){return void r(e)}s.done?t(c):Promise.resolve(c).then(n,i)}e.exports=function(e){return function(){var r=this,n=arguments;return new Promise((function(i,o){var a=e.apply(r,n);function s(e){t(a,i,o,s,c,"next",e)}function c(e){t(a,i,o,s,c,"throw",e)}s(void 0)}))}}},59713:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/e=>{e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},13884:
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/e=>{e.exports=function(e,t){var r=[],n=!0,i=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){i=!0,o=e}finally{try{n||null==s.return||s.return()}finally{if(i)throw o}}return r}},80521:
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/e=>{e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},63038:
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/(e,t,r)=>{var n=r(/*! ./arrayWithHoles */22858),i=r(/*! ./iterableToArrayLimit */13884),o=r(/*! ./nonIterableRest */80521);e.exports=function(e,t){return n(e)||i(e,t)||o()}},50008:
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/e=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}function r(n){return"function"==typeof Symbol&&"symbol"===t(Symbol.iterator)?e.exports=r=function(e){return t(e)}:e.exports=r=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":t(e)},r(n)}e.exports=r},81330:
/*!***************************************************************************!*\
  !*** ./node_modules/@eduardoac-skimlinks/webext-redux/lib/alias/alias.js ***!
  \***************************************************************************/(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(e){return function(){return function(t){return function(r){var n=e[r.type];return t(n?n(r):r)}}}}},93974:
/*!*******************************************************************************!*\
  !*** ./node_modules/@eduardoac-skimlinks/webext-redux/lib/constants/index.js ***!
  \*******************************************************************************/(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DEFAULT_PORT_NAME=t.PATCH_STATE_TYPE=t.STATE_TYPE=t.FETCH_STATE_TYPE=t.DISPATCH_TYPE=void 0;t.DISPATCH_TYPE="chromex.dispatch";t.FETCH_STATE_TYPE="chromex.fetch_state";t.STATE_TYPE="chromex.state";t.PATCH_STATE_TYPE="chromex.patch_state";t.DEFAULT_PORT_NAME="chromex.port_name"},68141:
/*!*********************************************************************!*\
  !*** ./node_modules/@eduardoac-skimlinks/webext-redux/lib/index.js ***!
  \*********************************************************************/(e,t,r)=>{"use strict";Object.defineProperty(t,"yh",{enumerable:!0,get:function(){return n.default}});var n=s(r(/*! ./store/Store */33705)),i=s(r(/*! ./store/applyMiddleware */50166)),o=s(r(/*! ./wrap-store/wrapStore */48596)),a=s(r(/*! ./alias/alias */81330));function s(e){return e&&e.__esModule?e:{default:e}}},2641:
/*!*****************************************************************************!*\
  !*** ./node_modules/@eduardoac-skimlinks/webext-redux/lib/serialization.js ***!
  \*****************************************************************************/(e,t)=>{"use strict";function r(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(t,"__esModule",{value:!0}),t.withSerializer=t.withDeserializer=t.noop=void 0;var n=function(e){return e};t.noop=n;var i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n;return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){r(e,t,n[t])}))}return e}({},e,e.payload?{payload:t(e.payload)}:{})};t.withDeserializer=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n;return function(t){return function(r,o){return t(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n,r=arguments.length>2?arguments[2]:void 0;return r?function(n){for(var o=arguments.length,a=new Array(o>1?o-1:0),s=1;s<o;s++)a[s-1]=arguments[s];return r.apply(void 0,[n].concat(a))?e.apply(void 0,[i(n,t)].concat(a)):e.apply(void 0,[n].concat(a))}:function(r){for(var n=arguments.length,o=new Array(n>1?n-1:0),a=1;a<n;a++)o[a-1]=arguments[a];return e.apply(void 0,[i(r,t)].concat(o))}}(r,e,o))}}};t.withSerializer=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n;return function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return function(){for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];if(o.length<=r)throw new Error("Message in request could not be serialized. "+"Expected message in position ".concat(r," but only received ").concat(o.length," args."));return o[r]=i(o[r],e),t.apply(void 0,o)}}}},33705:
/*!***************************************************************************!*\
  !*** ./node_modules/@eduardoac-skimlinks/webext-redux/lib/store/Store.js ***!
  \***************************************************************************/(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(r(/*! lodash.assignin */5089)),i=r(/*! ../constants */93974),o=r(/*! ../serialization */2641),a=c(r(/*! ../strategies/shallowDiff/patch */21184)),s=r(/*! ../util */40560);function c(e){return e&&e.__esModule?e:{default:e}}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var l="\nLooks like there is an error in the background page. You might want to inspect your background page for more details.\n",f={portName:i.DEFAULT_PORT_NAME,state:{},extensionId:null,serializer:o.noop,deserializer:o.noop,patchStrategy:a.default},d=function(){function e(){var t=this,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,n=r.portName,a=void 0===n?f.portName:n,c=r.state,u=void 0===c?f.state:c,l=r.extensionId,d=void 0===l?f.extensionId:l,p=r.serializer,h=void 0===p?f.serializer:p,g=r.deserializer,m=void 0===g?f.deserializer:g,v=r.patchStrategy,b=void 0===v?f.patchStrategy:v;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),!a)throw new Error("portName is required in options");if("function"!=typeof h)throw new Error("serializer must be a function");if("function"!=typeof m)throw new Error("deserializer must be a function");if("function"!=typeof b)throw new Error("patchStrategy must be one of the included patching strategies or a custom patching function");this.portName=a,this.readyResolved=!1,this.readyPromise=new Promise((function(e){return t.readyResolve=e})),this.browserAPI=(0,s.getBrowserAPI)(),this.extensionId=d,this.initializeStore=this.initializeStore.bind(this),this.browserAPI.runtime.sendMessage(this.extensionId,{type:i.FETCH_STATE_TYPE,portName:a},void 0,this.initializeStore),this.deserializer=m,this.serializedPortListener=(0,o.withDeserializer)(m)((function(){var e;return(e=t.browserAPI.runtime.onMessage).addListener.apply(e,arguments)})),this.serializedMessageSender=(0,o.withSerializer)(h)((function(){var e;return(e=t.browserAPI.runtime).sendMessage.apply(e,arguments)}),1),this.listeners=[],this.state=u,this.patchStrategy=b,this.serializedPortListener((function(e){if(e.portName===t.portName)switch(e.type){case i.STATE_TYPE:t.replaceState(e.payload),t.readyResolved||(t.readyResolved=!0,t.readyResolve());break;case i.PATCH_STATE_TYPE:t.patchState(e.payload)}})),this.dispatch=this.dispatch.bind(this)}var t,r,a;return t=e,r=[{key:"ready",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null!==e?this.readyPromise.then(e):this.readyPromise}},{key:"subscribe",value:function(e){var t=this;return this.listeners.push(e),function(){t.listeners=t.listeners.filter((function(t){return t!==e}))}}},{key:"patchState",value:function(e){this.state=this.patchStrategy(this.state,e),this.listeners.forEach((function(e){return e()}))}},{key:"replaceState",value:function(e){this.state=e,this.listeners.forEach((function(e){return e()}))}},{key:"getState",value:function(){return this.state}},{key:"replaceReducer",value:function(){}},{key:"dispatch",value:function(e){var t=this;return new Promise((function(r,o){t.serializedMessageSender(t.extensionId,{type:i.DISPATCH_TYPE,portName:t.portName,payload:e},null,(function(e){if(e){var i=e.error,a=e.value;if(i){var s=new Error("".concat(l).concat(i));o((0,n.default)(s,i))}else r(a&&a.payload)}else{var c=t.browserAPI.runtime.lastError,u=new Error("".concat(l).concat(c));o((0,n.default)(u,c))}}))}))}},{key:"initializeStore",value:function(e){e&&e.type===i.FETCH_STATE_TYPE&&(this.replaceState(e.payload),this.readyResolved||(this.readyResolved=!0,this.readyResolve()))}}],r&&u(t.prototype,r),a&&u(t,a),e}();t.default=d},50166:
/*!*************************************************************************************!*\
  !*** ./node_modules/@eduardoac-skimlinks/webext-redux/lib/store/applyMiddleware.js ***!
  \*************************************************************************************/(e,t)=>{"use strict";function r(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce((function(e,t){return function(){return e(t.apply(void 0,arguments))}}))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];var o=function(){throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},a={getState:e.getState.bind(e),dispatch:function(){return o.apply(void 0,arguments)}};return n=(n||[]).map((function(e){return e(a)})),o=r.apply(void 0,function(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(n))(e.dispatch),e.dispatch=o,e}},37320:
/*!************************************************************************************!*\
  !*** ./node_modules/@eduardoac-skimlinks/webext-redux/lib/strategies/constants.js ***!
  \************************************************************************************/(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DIFF_STATUS_ARRAY_UPDATED=t.DIFF_STATUS_KEYS_UPDATED=t.DIFF_STATUS_REMOVED=t.DIFF_STATUS_UPDATED=void 0;t.DIFF_STATUS_UPDATED="updated";t.DIFF_STATUS_REMOVED="removed";t.DIFF_STATUS_KEYS_UPDATED="updated_keys";t.DIFF_STATUS_ARRAY_UPDATED="updated_array"},14719:
/*!*******************************************************************************************!*\
  !*** ./node_modules/@eduardoac-skimlinks/webext-redux/lib/strategies/shallowDiff/diff.js ***!
  \*******************************************************************************************/(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=[];return Object.keys(t).forEach((function(i){e[i]!==t[i]&&r.push({key:i,value:t[i],change:n.DIFF_STATUS_UPDATED})})),Object.keys(e).forEach((function(e){t.hasOwnProperty(e)||r.push({key:e,change:n.DIFF_STATUS_REMOVED})})),r};var n=r(/*! ../constants */37320)},21184:
/*!********************************************************************************************!*\
  !*** ./node_modules/@eduardoac-skimlinks/webext-redux/lib/strategies/shallowDiff/patch.js ***!
  \********************************************************************************************/(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=Object.assign({},e);return t.forEach((function(e){var t=e.change,i=e.key,o=e.value;switch(t){case n.DIFF_STATUS_UPDATED:r[i]=o;break;case n.DIFF_STATUS_REMOVED:Reflect.deleteProperty(r,i)}})),r};var n=r(/*! ../constants */37320)},40560:
/*!********************************************************************!*\
  !*** ./node_modules/@eduardoac-skimlinks/webext-redux/lib/util.js ***!
  \********************************************************************/(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getBrowserAPI=function(){var e;try{e=self.chrome||self.browser||browser}catch(t){e=browser}if(!e)throw new Error("Browser API is not present");return e}},48596:
/*!************************************************************************************!*\
  !*** ./node_modules/@eduardoac-skimlinks/webext-redux/lib/wrap-store/wrapStore.js ***!
  \************************************************************************************/(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,i=r(/*! ../constants */93974),o=r(/*! ../serialization */2641),a=r(/*! ../util */40560),s=(n=r(/*! ../strategies/shallowDiff/diff */14719))&&n.__esModule?n:{default:n};var c={portName:i.DEFAULT_PORT_NAME,dispatchResponder:function(e,t){Promise.resolve(e).then((function(e){t({error:null,value:e})})).catch((function(e){console.error("error dispatching result:",e),t({error:e.message,value:null})}))},serializer:o.noop,deserializer:o.noop,diffStrategy:s.default};t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c,r=t.portName,n=void 0===r?c.portName:r,s=t.dispatchResponder,u=void 0===s?c.dispatchResponder:s,l=t.serializer,f=void 0===l?c.serializer:l,d=t.deserializer,p=void 0===d?c.deserializer:d,h=t.diffStrategy,g=void 0===h?c.diffStrategy:h;if(!n)throw new Error("portName is required in options");if("function"!=typeof f)throw new Error("serializer must be a function");if("function"!=typeof p)throw new Error("deserializer must be a function");if("function"!=typeof g)throw new Error("diffStrategy must be one of the included diffing strategies or a custom diff function");var m=(0,a.getBrowserAPI)(),v=function(t,r,o){if(t.type===i.DISPATCH_TYPE&&t.portName===n){var a=Object.assign({},t.payload,{_sender:r}),s=null;try{s=e.dispatch(a)}catch(e){s=Promise.reject(e.message),console.error(e)}return u(s,o),!0}},b=(0,o.withSerializer)(f)((function(){for(var e,t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];var i=function(){m.runtime.lastError};return(e=m.runtime).sendMessage.apply(e,r.concat([i])),m.tabs.query({},(function(e){var t=!0,n=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(t=(a=s.next()).done);t=!0){var c,u=a.value;(c=m.tabs).sendMessage.apply(c,[u.id].concat(r,[i]))}}catch(e){n=!0,o=e}finally{try{t||null==s.return||s.return()}finally{if(n)throw o}}}))})),E=e.getState();e.subscribe((function(){var t=e.getState(),r=g(E,t);r.length&&(E=t,b({type:i.PATCH_STATE_TYPE,payload:r,portName:n}))})),b({type:i.STATE_TYPE,payload:E,portName:n});var A=(0,o.withDeserializer)(p),y=function(e){return e.type===i.DISPATCH_TYPE&&e.portName===n};m.runtime.onMessage.addListener((function(t,r,o){var a=e.getState();t.type===i.FETCH_STATE_TYPE&&t.portName===n&&o({type:i.FETCH_STATE_TYPE,payload:a})})),A((function(){var e;return(e=m.runtime.onMessage).addListener.apply(e,arguments)}))(v,y),m.runtime.onMessageExternal?A((function(){var e;return(e=m.runtime.onMessageExternal).addListener.apply(e,arguments)}))(v,y):console.warn("runtime.onMessageExternal is not supported")}},74444:
/*!***********************************************************!*\
  !*** ./node_modules/@firebase/util/dist/index.esm2017.js ***!
  \***********************************************************/(e,t,r)=>{"use strict";r.d(t,{BH:()=>f,LL:()=>m,ZR:()=>g,zI:()=>h,L:()=>a,vZ:()=>b,aH:()=>l,m9:()=>A,hl:()=>d,eu:()=>p});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const n=function(e){const t=[];let r=0;for(let n=0;n<e.length;n++){let i=e.charCodeAt(n);i<128?t[r++]=i:i<2048?(t[r++]=i>>6|192,t[r++]=63&i|128):55296==(64512&i)&&n+1<e.length&&56320==(64512&e.charCodeAt(n+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++n)),t[r++]=i>>18|240,t[r++]=i>>12&63|128,t[r++]=i>>6&63|128,t[r++]=63&i|128):(t[r++]=i>>12|224,t[r++]=i>>6&63|128,t[r++]=63&i|128)}return t},i={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let t=0;t<e.length;t+=3){const i=e[t],o=t+1<e.length,a=o?e[t+1]:0,s=t+2<e.length,c=s?e[t+2]:0,u=i>>2,l=(3&i)<<4|a>>4;let f=(15&a)<<2|c>>6,d=63&c;s||(d=64,o||(f=64)),n.push(r[u],r[l],r[f],r[d])}return n.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(n(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let r=0,n=0;for(;r<e.length;){const i=e[r++];if(i<128)t[n++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[r++];t[n++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=((7&i)<<18|(63&e[r++])<<12|(63&e[r++])<<6|63&e[r++])-65536;t[n++]=String.fromCharCode(55296+(o>>10)),t[n++]=String.fromCharCode(56320+(1023&o))}else{const o=e[r++],a=e[r++];t[n++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&a)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let t=0;t<e.length;){const i=r[e.charAt(t++)],a=t<e.length?r[e.charAt(t)]:0;++t;const s=t<e.length?r[e.charAt(t)]:64;++t;const c=t<e.length?r[e.charAt(t)]:64;if(++t,null==i||null==a||null==s||null==c)throw new o;const u=i<<2|a>>4;if(n.push(u),64!==s){const e=a<<4&240|s>>2;if(n.push(e),64!==c){const e=s<<6&192|c;n.push(e)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const a=function(e){return function(e){const t=n(e);return i.encodeByteArray(t,!0)}(e).replace(/\./g,"")},s=function(e){try{return i.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const c=()=>
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==r.g)return r.g;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,u=()=>{try{return c()||(()=>{if("undefined"==typeof process||void 0===process.env)return;const e=process.env.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&s(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},l=()=>{var e;return null===(e=u())||void 0===e?void 0:e.config};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class f{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,r))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d(){try{return"object"==typeof indexedDB}catch(e){return!1}}function p(){return new Promise(((e,t)=>{try{let r=!0;const n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},i.onupgradeneeded=()=>{r=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}function h(){return!("undefined"==typeof navigator||!navigator.cookieEnabled)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name="FirebaseError",Object.setPrototypeOf(this,g.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,m.prototype.create)}}class m{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},n=`${this.service}/${e}`,i=this.errors[e],o=i?function(e,t){return e.replace(v,((e,r)=>{const n=t[r];return null!=n?String(n):`<${r}?>`}))}(i,r):"Error",a=`${this.serviceName}: ${o} (${n}).`;return new g(n,a,r)}}const v=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(e,t){if(e===t)return!0;const r=Object.keys(e),n=Object.keys(t);for(const i of r){if(!n.includes(i))return!1;const r=e[i],o=t[i];if(E(r)&&E(o)){if(!b(r,o))return!1}else if(r!==o)return!1}for(const e of n)if(!r.includes(e))return!1;return!0}function E(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function A(e){return e&&e._delegate?e._delegate:e}},12871:
/*!*******************************************************************!*\
  !*** ./src/content/installationFlagInjector/index.js + 1 modules ***!
  \*******************************************************************/(e,t,r)=>{"use strict";var n=r(50933),i=(r(48971),r(51693)),o=r(20045);(0,n.y)().then((function(e){return function(e){var t=e.getState();if((0,o.g6)(t)){var r=(0,i.bo)(t),n=document.createElement("script");n.src=browser.runtime.getURL("injector.js"),n.id="shopback-extension-".concat(r),document.documentElement.appendChild(n)}}(e)}))},53437:
/*!*******************************************!*\
  !*** ./src/shared/constants/countries.js ***!
  \*******************************************/(e,t,r)=>{"use strict";r.d(t,{od:()=>n,zO:()=>i,fR:()=>a,ZP:()=>s});var n={AU:"AU",DE:"DE",HK:"HK",ID:"ID",KR:"KR",MY:"MY",PH:"PH",SG:"SG",TH:"TH",TW:"TW"},i=Object.values(n),o=Object.values({VN:"VN"}),a=([].concat(i,o),{AU:"en-AU",DE:"de",HK:"en",ID:"id",MY:"ms-MY",PH:"en",SG:"en-SG",TH:"th",TW:"en",KR:"ko-KR"});const s=n},62620:
/*!***************************************!*\
  !*** ./src/shared/constants/index.js ***!
  \***************************************/(e,t,r)=>{"use strict";r.d(t,{T$R:()=>a.T$,VKh:()=>a.VK,LaO:()=>a.L,oiE:()=>a.oi,TjR:()=>a.Tj,gz$:()=>a.gz,kLJ:()=>a.kL,DXw:()=>a.DX,HRN:()=>a.HR,yeY:()=>a.ye,Pnd:()=>a.Pn,Mfi:()=>a.Mf,pAz:()=>a.pA,CG1:()=>a.CG,UOx:()=>a.UO,_lE:()=>a._l,iQM:()=>a.iQ,Cge:()=>a.Cg,BFS:()=>u,_lx:()=>l,NkW:()=>f,utx:()=>d,kqf:()=>p,fk6:()=>h,RzL:()=>g,ow$:()=>m,PVA:()=>v,iYg:()=>b,Wgb:()=>E,gkN:()=>A,RR:()=>y,NVs:()=>_,yw4:()=>w,BDI:()=>S,JxL:()=>T,S0K:()=>I,Uor:()=>O,eqT:()=>P,vgW:()=>N,tz7:()=>M,xMg:()=>R,ulW:()=>x,kfr:()=>k,Shd:()=>C,kpX:()=>L,dcW:()=>F,F8F:()=>D,Nve:()=>B,SdJ:()=>s.Sd,idx:()=>j,MTw:()=>U,UFS:()=>$,ilb:()=>H,tQi:()=>z,Zr5:()=>G,SZL:()=>V,PJX:()=>W,NBx:()=>K,ibe:()=>q,x7b:()=>X,Ai9:()=>Y,MXk:()=>Z,Km:()=>J,bL_:()=>Q,slH:()=>ee,Jkz:()=>te,usU:()=>re,IKz:()=>ne,OO5:()=>ie,q9M:()=>oe,aTr:()=>ae,YKA:()=>se,P1k:()=>ce,CER:()=>ue,c$Z:()=>le,AuS:()=>fe,kQ1:()=>de,hLt:()=>pe,C22:()=>he,D1p:()=>ge,G9E:()=>me,P0H:()=>ve,Jyn:()=>be,obn:()=>Ee,HRF:()=>Ae});var n=r(/*! bowser */51206),i=r.n(n),o=r(/*! ../envConfig */5281),a=r(/*! ./utmMedium */76551),s=r(/*! ./tabs */18855),c=i().getParser(navigator.userAgent).getBrowserName(),u=o.Z.ACTIVATED_EXPIRED_MS,l=o.Z.ACTIVATED_EXPIRED_MS_FOR_TAOBAO,f=o.Z.PERMISSION_NOTIFIER_TTL,d="Roboto, Helvetica, arial, sans-serif",p="SF Pro Display, Helvetica, arial, sans-serif",h="ACTIVATE_TAOBAO_PRODUCT_FROM_SB",g="FETCH_TAOBAO_PRODUCT_CASHBACK_STATUS_SUCCESS",m="UI_FETCH_TAOBAO_PRODUCT_CASHBACK_STATUS",v="CLOSE_ACTIVATED_MERCHANT_NOTIFIER",b="DELETE_EXPIRED_ACTIVATED_MERCHANT",E="UI_VISIT_ACTIVATED_MERCHANT_NOTIFIER",A="OPT_IN_PERMISSION_NOTIFIER_SHOWN",y="UPDATE_USER_PREFERENCES",_="DEACTIVATE_TAOBAO_PRODUCT",w="pwd",S="CLOSE_PERMISSION_NOTIFIER",T="RESET_PERMISSION_NOTIFIER",I="UI_FETCH_USER_INFO_SUCCESS",O="DETECT_SB_REDIRECT_PAGE",P="DEEP_LINK_REDIRECT",N="DROP_COOKIE_DONE",M="SET_COOKIE_DONE",R="SET_COOKIE_FAIL",x="SHOW_DISABLE_NOTIFIER",k="UI_FETCH_USER_INFO",C="LOG_FOR_TRACK",L="UI_SWITCH_USER",F="DE_ACTIVATE",D="mv",B="LOGOUT",j="REFRESH_ACCESS_TOKEN_SUCCESS",U="EVENT_EXT_TRACKING",$="AU",H=3e5,z=6e4,G=36e5,V=18e5,W=36e5,K="unavailable",q="available",X="activated",Y="fetching",Z="down",J="ACTIVATE_STATE_ACTIVATING",Q="ACTIVATE_STATE_ACTIVATED",ee="TAOBAO_SET_PRODUCT_FROM_AI_TAOBAO_SEARCH_TO_ACTIVATED",te="TAOBAO_OPEN_NOTIFIER",re="TAOBAO_CLOSE_NOTIFIER",ne="TAOBAO_OPEN_CONFIRMATION_NOTIFIER",ie="TAOBAO_CLOSE_CONFIRMATION_NOTIFIER",oe="TAOBAO_OPEN_API_DOWN_NOTIFIER",ae="TAOBAO_CLOSE_API_DOWN_NOTIFIER",se="shopback-taobao-cart",ce=2,ue=[".ebates-serp","#gym_serp"],le="shopback-cashback-notifier",fe="shopback-confirmation-notifier",de="shopback-popup-search-input-box",pe="shopback-taobao-navigator",he="shopback-opt-in-permission-notifier",ge=c===i().BROWSER_MAP.firefox,me=c===i().BROWSER_MAP.chrome,ve=c===i().BROWSER_MAP.edge,be=31536e3,Ee={X_SHOPBACK_LAST_CC:"X-SHOPBACK-LAST-CC",X_SHOPBACK_IRONGATE_ENABLED:"X-SHOPBACK-IRONGATE-ENABLED",X_SHOPBACK_DOMAIN:"X-SHOPBACK-DOMAIN",X_SHOPBACK_EXTENSION_VERSION:"X-SHOPBACK-EXTENSION-VERSION",X_SHOPBACK_CLIENT_USER_AGENT:"X-SHOPBACK-CLIENT-USER-AGENT",X_SHOPBACK_ACCESS_TOKEN:"X-SHOPBACK-ACCESS-TOKEN",X_SHOPBACK_REFRESH_TOKEN:"X-SHOPBACK-REFRESH-TOKEN",X_SHOPBACK_EVENT_NAME:"X-SHOPBACK-TRACKING-EVENT-NAME",X_SHOPBACK_INTERNAL:"X-SHOPBACK-INTERNAL",X_SHOPBACK_AGENT:"X-SHOPBACK-AGENT",CONTENT_TYPE:"Content-Type",ACCEPT:"Accept",AUTHORIZATION:"Authorization"},Ae={ACCESS_TOKEN:"sbet",REFRESH_TOKEN:"sbrefresh"}},18855:
/*!**************************************!*\
  !*** ./src/shared/constants/tabs.js ***!
  \**************************************/(e,t,r)=>{"use strict";r.d(t,{Th:()=>n,YI:()=>i,wk:()=>o,uE:()=>a,Hl:()=>s,V1:()=>c,Sd:()=>u,si:()=>l,yV:()=>f,qq:()=>d,vo:()=>p,y2:()=>h,UW:()=>g,xE:()=>m,tz:()=>v,Si:()=>b,LL:()=>E,QS:()=>A,Gy:()=>y,uB:()=>_,Ly:()=>w,fP:()=>S,Ys:()=>T,PL:()=>I,kE:()=>O,E:()=>P,P:()=>N,mK:()=>M,DR:()=>R,nP:()=>x,DV:()=>k,$x:()=>C,z0:()=>L,Xh:()=>F,V9:()=>D,Zj:()=>B});var n="TABS/UI_OPEN_NEW_TAB",i="TABS/UPDATE_TAB",o="TABS/CLOSE_TAB",a="TABS/UPDATE_TAB_ACTIVATE_INFO",s="TABS/CREATE_TAB",c="TABS/CLEAR_OPENERURL",u="home",l="saved",f="account",d="notification",p="cashbackNotifier",h="educationNotifier",g="tncNotifier",m="complianceInfo",v="dealOfTheDay",b="upsizedFlashDeals",E="recommendation",A="watchList",y={MERCHANT:"merchantPage",NON_MERCHANT:"nonMerchantPage"},_="voucher",w="topStores",S="errorPage",T="lifeTimeEarnings",I="cashbackOverview",O="recentCashback",P="referFriend",N="reviewUs",M="helpCenter",R="countryDropdown",x="logoutButton",k="loginPage",C="priceComparison",L="priceHistory",F="savedPage",D="watchListProduct",B="watchListMerchant"},76551:
/*!*******************************************!*\
  !*** ./src/shared/constants/utmMedium.js ***!
  \*******************************************/(e,t,r)=>{"use strict";r.d(t,{T$:()=>n,oi:()=>i,UO:()=>o,L:()=>a,gz:()=>s,iQ:()=>c,_l:()=>u,k4:()=>l,xi:()=>f,kL:()=>d,ye:()=>p,DX:()=>h,HR:()=>g,Pn:()=>m,Mf:()=>v,R7:()=>b,KK:()=>E,Hq:()=>A,V_:()=>y,pA:()=>_,CG:()=>w,Ol:()=>S,G0:()=>T,Cg:()=>I,VK:()=>O,Tj:()=>P});var n="be_aliexpress_checkout_notifier",i="be_aliexpress_checkout_login_to_activate",o="be_cashback_notifier",a="be_disable_notifier",s="be_login_notifier",c="be_taobao_login_cashback_notifier",u="be_taobao_cashback_notifier",l="be_aliexpress_notifier",f="be_aliexpress_login_notifier",d="be_menu_getcashback",p="be_menu_logintogetcashback",h="be_menu_dealoftheday",g="be_menu_dealoftheday_nonlogin",m="be_menu_recommendedstore",v="be_menu_recommendedstore_nonlogin",b="be_menu_store",E="be_menu_store_nonlogin",A="be_menu_store_search",y="be_menu_store_search_nonlogin",_="be_menu_upsizeflashdeals",w="be_menu_upsizeflashdeals_nonlogin",S="be_watchlist_merchant",T="be_watchlist_recommended_merchant",I="be_watchlist_product",O="be_confirmation_notifier",P="be_login_confirmation_notifier"},5281:
/*!*********************************!*\
  !*** ./src/shared/envConfig.js ***!
  \*********************************/(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n=r(/*! ../../env/production.json */47776)},49485:
/*!************************************!*\
  !*** ./src/shared/selectors/cc.js ***!
  \************************************/(e,t,r)=>{"use strict";r.d(t,{q:()=>n});var n=function(e){return e.cc}},51693:
/*!***********************************************!*\
  !*** ./src/shared/selectors/extensionMeta.js ***!
  \***********************************************/(e,t,r)=>{"use strict";r.d(t,{hn:()=>o,bo:()=>a,Gw:()=>s});var n=r(/*! reselect */22222),i=function(e){return null==e?void 0:e.extension},o=(0,n.P1)(i,(function(e){return!(null==e||!e.loggerEnabled)})),a=(0,n.P1)(i,(function(e){return null==e?void 0:e.version})),s=(0,n.P1)(i,(function(e){return(null==e?void 0:e.previousVersion)||""}));(0,n.P1)(i,(function(e){return(null==e?void 0:e.sbExtId)||""}))},89489:
/*!************************************************!*\
  !*** ./src/shared/selectors/settings/index.js ***!
  \************************************************/(e,t,r)=>{"use strict";r.d(t,{Gw:()=>l,nz:()=>f,jM:()=>d,wJ:()=>h,bS:()=>g,hT:()=>m,kv:()=>v,TQ:()=>b});var n=r(/*! reselect */22222),i=r(/*! semver/functions/lt */21544),o=r.n(i),a=r(/*! shared/constants */62620),s=r(/*! shared/urls */4536),c=r(/*! ../cc */49485),u=r(/*! ../extensionMeta */51693),l=function(e){return e.settings},f=((0,n.P1)(l,(function(e){return e.fetchedAt})),(0,n.P1)(l,(function(e,t){return t.now}),(function(e,t){if(!e)return!0;var r=e.fetchedAt;return"number"!=typeof r||t-r>a.SZL})),(0,n.P1)(l,(function(e){return e.cashbackDisableReasons||[]}))),d=(0,n.P1)(l,(function(e){return e.minSupportVersion})),p=(0,n.P1)(l,(function(e){return!!e.showNonFunctionalIcon})),h=(0,n.P1)(u.bo,d,p,(function(e,t,r){return o()(e,t)&&r})),g=(0,n.P1)(l,(function(e){return e.postInstallUrl||s.UL})),m=(0,n.P1)(l,c.q,(function(e,t){return e.postInstallTooltipImgUrl||s.lq[t.toUpperCase()]})),v=(0,n.P1)(c.q,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"SG";return s.y7[e]})),b=((0,n.P1)(l,(function(e){return e&&e.trackingSessionTimeout})),(0,n.P1)(l,(function(e){return e.amplitudeExperimentsKeys||[]})));(0,n.P1)(l,(function(e){return e.optInPermissionNotifierShown}))},40062:
/*!***************************************************************!*\
  !*** ./src/shared/selectors/settings/serviceEnableCountry.js ***!
  \***************************************************************/(e,t,r)=>{"use strict";r.d(t,{OY:()=>f,tV:()=>d,CW:()=>p,f9:()=>h,Cq:()=>g,Bp:()=>m,OU:()=>v,I_:()=>b,G$:()=>E,y8:()=>A});var n=r(/*! lodash/get */27361),i=r.n(n),o=r(/*! reselect */22222),a=r(/*! semver/functions/gte */25903),s=r.n(a),c=r(/*! shared/constants */62620),u=r(/*! ../extensionMeta */51693),l=r(/*! ./ */89489),f=function(){return c.G9E},d=(0,o.P1)(l.Gw,(function(e){return!(null==e||!e.aliExpress)})),p=(0,o.P1)(l.bS,u.bo,l.jM,(function(e,t,r){return c.G9E&&window.location.pathname===e&&s()(t,r)})),h=(0,o.P1)(l.Gw,(function(e){return!(null==e||!e.showSidePanel)})),g=(0,o.P1)(l.Gw,(function(e){return!(null==e||!e.showAmsNotifier)})),m=(0,o.P1)(l.Gw,(function(e){return!(null==e||!e.enableVoucher)})),v=(0,o.P1)(l.Gw,(function(e){return!(null==e||!e.enableWatchlist)})),b=((0,o.P1)(l.Gw,(function(e){return i()(e,"enableInBrowserCrawler",!1)})),(0,o.P1)(l.Gw,(function(e){return!(null==e||!e.enableFirebase)}))),E=((0,o.P1)(l.Gw,(function(e){return!(null==e||!e.enableLogForTrack)})),(0,o.P1)(l.Gw,(function(e){return!(null==e||!e.enableNewRegion)})),(0,o.P1)(l.Gw,(function(e){return new Set(e.enableCountries)}))),A=(0,o.P1)(l.Gw,(function(e){return!(null==e||!e.enableActivatorInContent)}));(0,o.P1)(l.Gw,(function(e){return!(null==e||!e.enableActivatorWithWebMessage)}))},20045:
/*!**********************************************************!*\
  !*** ./src/shared/selectors/settings/userPreferences.js ***!
  \**********************************************************/(e,t,r)=>{"use strict";r.d(t,{nl:()=>o,g6:()=>a});var n=r(/*! reselect */22222),i=r(/*! ./ */89489),o=(0,n.P1)(i.Gw,(function(e){return e.userPreferences})),a=(0,n.P1)(o,(function(e){return e.cookiesEnabled}));(0,n.P1)(o,(function(e){return e.eventsEnabled})),(0,n.P1)(o,(function(e){return e.personalDataEnabled}))},4536:
/*!****************************!*\
  !*** ./src/shared/urls.js ***!
  \****************************/(e,t,r)=>{"use strict";r.d(t,{Pr:()=>f,UL:()=>d,lq:()=>p,y7:()=>g,_y:()=>m,lf:()=>v,Sj:()=>b,XF:()=>E,Eu:()=>A,yw:()=>y,kJ:()=>_,lb:()=>w,tn:()=>S,n1:()=>T,W4:()=>I,ub:()=>O,oq:()=>P,qq:()=>N,U:()=>M,RS:()=>R,Jf:()=>x,iq:()=>k,k9:()=>C,A2:()=>L,vI:()=>F});var n=r(/*! lodash/isArray */1469),i=r.n(n),o=r(/*! ./constants */62620),a=r(/*! ./constants/countries */53437),s=r(/*! ./envConfig */5281),c=(r(/*! ./utils/qs */31541),s.Z.API_HOST_XX),u=s.Z.EXTENSION_STORES,l=s.Z.HELP_CENTER,f=(s.Z.SAFARI_EXTENSION_HELP_CENTER_PAGE,s.Z.URL_COUNTRY_CODE,s.Z.URL_SIGN_UP),d=s.Z.URL_AFTER_INSTALL,p=s.Z.POST_INSTALL_TOOLTIP_IMG_URL,h=s.Z.SB_WEBSITE_XX,g=s.Z.ALI_EXPRESS_NAVIGATOR_QUESTION_MARK_URL;s.Z.POST_UNINSTALL_URL;var m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.UFS;return(arguments.length>1?arguments[1]:void 0).includes("".concat(h[e],"/redirect/alink"))},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.UFS,t=arguments.length>1?arguments[1]:void 0;return t.includes("".concat(h[e],"/product/redirect/plink"))||new URL(t).searchParams.get("storeId")},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.UFS;return(arguments.length>1?arguments[1]:void 0).includes("".concat(h[e]))},E=function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{api:!0}).api?c:h;return"https://".concat(t[function(e){return c[e]?e:o.UFS}(e)])},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.UFS;return h[e]},y=function(){return o.P0H?u.EDGE:o.D1p?u.FIREFOX:o.G9E?u.CHROME:""},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.UFS;return l[e]},w=function(){return/(?:https?:\/\/)?(?:\w+:\/)?[^:?#/\s]*?([^.\s]+\.(?:[a-z]{2,}|co\.uk|org\.uk|ac\.uk|org\.au|com\.au))(?:[:?#/]|$)/gi.exec(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"")},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.UFS;return"".concat(E(e,{api:!1}))},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.UFS;return"".concat(E(e,{api:!1}),"/login")},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.UFS;return"".concat(E(e,{api:!1}),"/logout")},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.UFS;return"".concat(E(e,{api:!1}),"/payment")},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.UFS;return"".concat(E(e,{api:!1}),"/cashback")},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.UFS;return e===a.ZP.DE?"".concat(E(e,{api:!1}),"/freunde-werben"):"".concat(E(e,{api:!1}),"/referral/invite")},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.UFS,t=arguments.length>1?arguments[1]:void 0;if(t){var r=new URL(t),n="".concat(r.pathname).concat(r.search),i=encodeURIComponent(n);return"".concat(E(e,{api:!1}),"/login?redirect=").concat(i)}return"".concat(E(e,{api:!1}),"/login")},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return!!e&&/r\.search\.yahoo\.com/.test(e)},x=function(e,t,r){return"https://".concat(A(e),"/product/redirect/plink/").concat(t,"?storeId=").concat(r)},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.UFS,t=arguments.length>1?arguments[1]:void 0;return"".concat(E(e),"/whale/taobao/item-info/").concat(t)},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.UFS;return"".concat(E(e),"/whale/merchants/bootstrap")},L=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.UFS,r=new URL("".concat(E(t),"/whale/merchants"));return i()(e)&&e.length>0&&r.searchParams.set("merchantIds",e.join(",")),r.toString()},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.UFS;return"".concat(E(e,{api:!1}),"/wes-api/extension/whale/health")}},35781:
/*!******************************************!*\
  !*** ./src/shared/utils/firebaseUtil.js ***!
  \******************************************/(e,t,r)=>{"use strict";r.d(t,{J:()=>i});r(/*! @babel/runtime/helpers/defineProperty */59713),r(/*! firebase/app */83977),r(/*! firebase/performance */55038);r(/*! ../envConfig */5281).Z.FIREBASE_CONFIG;var n=null,i=function(){if(n)return n;return null}},31541:
/*!********************************!*\
  !*** ./src/shared/utils/qs.js ***!
  \********************************/(e,t,r)=>{"use strict";r(/*! @babel/runtime/helpers/slicedToArray */63038),r(/*! ../constants */62620)},50933:
/*!****************************************!*\
  !*** ./src/shared/utils/storeUtils.js ***!
  \****************************************/(e,t,r)=>{"use strict";r.d(t,{y:()=>m});var n=r(/*! @babel/runtime/helpers/typeof */50008),i=r.n(n),o=r(/*! @babel/runtime/helpers/asyncToGenerator */48926),a=r.n(o),s=r(/*! @eduardoac-skimlinks/webext-redux */68141),c=r(/*! firebase/performance */55038),u=(r(/*! webext-redux */17045),r(/*! ../selectors/settings/serviceEnableCountry */40062)),l=r(/*! ./firebaseUtil */35781);function f(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */f=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,t,r,i){var o=t&&t.prototype instanceof h?t:h,a=Object.create(o.prototype),s=new O(i||[]);return n(a,"_invoke",{value:w(e,r,s)}),a}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var p={};function h(){}function g(){}function m(){}var v={};u(v,a,(function(){return this}));var b=Object.getPrototypeOf,E=b&&b(b(P([])));E&&E!==t&&r.call(E,a)&&(v=E);var A=m.prototype=h.prototype=Object.create(v);function y(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function _(e,t){function o(n,a,s,c){var u=d(e[n],e,a);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==i()(f)&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){o("next",e,s,c)}),(function(e){o("throw",e,s,c)})):t.resolve(f).then((function(e){l.value=e,s(l)}),(function(e){return o("throw",e,s,c)}))}c(u.arg)}var a;n(this,"_invoke",{value:function(e,r){function n(){return new t((function(t,n){o(e,r,t,n)}))}return a=a?a.then(n,n):n()}})}function w(e,t,r){var n="suspendedStart";return function(i,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===i)throw o;return N()}for(r.method=i,r.arg=o;;){var a=r.delegate;if(a){var s=S(a,r);if(s){if(s===p)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=d(e,t,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===p)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function S(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,S(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),p;var i=d(n,e.iterator,t.arg);if("throw"===i.type)return t.method="throw",t.arg=i.arg,t.delegate=null,p;var o=i.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,p):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,p)}function T(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function I(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function P(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,i=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:N}}function N(){return{value:void 0,done:!0}}return g.prototype=m,n(A,"constructor",{value:m,configurable:!0}),n(m,"constructor",{value:g,configurable:!0}),g.displayName=u(m,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,u(e,c,"GeneratorFunction")),e.prototype=Object.create(A),e},e.awrap=function(e){return{__await:e}},y(_.prototype),u(_.prototype,s,(function(){return this})),e.AsyncIterator=_,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new _(l(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},y(A),u(A,c,"Generator"),u(A,a,(function(){return this})),u(A,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=P,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(I),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return a.type="throw",a.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var s=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),I(r),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;I(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:P(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},e}var d=null,p=null,h=1,g=(0,l.J)(),m=function(){var e=a()(f().mark((function e(){return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d||(d=new s.yh),d&&(0,u.I_)(d.getState())&&g&&((p=(0,c.g4)(g,"getProxyStore")).start(),p.incrementMetric("numberOfConnections",h)),e.next=4,d.ready();case 4:return p&&(p.stop(),p=null),h++,e.abrupt("return",d);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},48971:
/*!**************************************!*\
  !*** ./src/shared/webextPolyfill.js ***!
  \**************************************/(e,t,r)=>{"use strict";var n=r(/*! @babel/runtime/helpers/typeof */50008),i=r.n(n),o=r(/*! @babel/runtime/helpers/asyncToGenerator */48926),a=r.n(o),s=r(/*! lodash/hasIn */79095),c=r.n(s);function u(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */u=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,r){return e[t]=r}}function f(e,t,r,i){var o=t&&t.prototype instanceof h?t:h,a=Object.create(o.prototype),s=new O(i||[]);return n(a,"_invoke",{value:w(e,r,s)}),a}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=f;var p={};function h(){}function g(){}function m(){}var v={};l(v,a,(function(){return this}));var b=Object.getPrototypeOf,E=b&&b(b(P([])));E&&E!==t&&r.call(E,a)&&(v=E);var A=m.prototype=h.prototype=Object.create(v);function y(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function _(e,t){function o(n,a,s,c){var u=d(e[n],e,a);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==i()(f)&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){o("next",e,s,c)}),(function(e){o("throw",e,s,c)})):t.resolve(f).then((function(e){l.value=e,s(l)}),(function(e){return o("throw",e,s,c)}))}c(u.arg)}var a;n(this,"_invoke",{value:function(e,r){function n(){return new t((function(t,n){o(e,r,t,n)}))}return a=a?a.then(n,n):n()}})}function w(e,t,r){var n="suspendedStart";return function(i,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===i)throw o;return N()}for(r.method=i,r.arg=o;;){var a=r.delegate;if(a){var s=S(a,r);if(s){if(s===p)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=d(e,t,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===p)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function S(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,S(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),p;var i=d(n,e.iterator,t.arg);if("throw"===i.type)return t.method="throw",t.arg=i.arg,t.delegate=null,p;var o=i.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,p):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,p)}function T(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function I(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function P(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,i=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:N}}function N(){return{value:void 0,done:!0}}return g.prototype=m,n(A,"constructor",{value:m,configurable:!0}),n(m,"constructor",{value:g,configurable:!0}),g.displayName=l(m,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,l(e,c,"GeneratorFunction")),e.prototype=Object.create(A),e},e.awrap=function(e){return{__await:e}},y(_.prototype),l(_.prototype,s,(function(){return this})),e.AsyncIterator=_,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new _(f(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},y(A),l(A,c,"Generator"),l(A,a,(function(){return this})),l(A,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=P,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(I),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return a.type="throw",a.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var s=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),I(r),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;I(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:P(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},e}var l=function(e,t){return t?"(".concat(e.toString(),")(...").concat(JSON.stringify(t),")"):"(".concat(e.toString(),")()")},f=function(){var e=a()(u().mark((function e(t){var r,n,i,o,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.func,n=t.files,i=t.target,o=t.args,a={code:r?l(r,o):void 0,file:n?n[0]:void 0},e.abrupt("return",browser.tabs.executeScript(i.tabId,a).then((function(e){return e.map((function(e){return{result:e}}))})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=a()(u().mark((function e(t){var r,n,i,o;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.func,n=t.files,i=t.target,o={code:r?l(r):void 0,file:n?n[0]:void 0},e.abrupt("return",browser.tabs.insertCSS(i.tabId,o));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();r.g.browser=r(/*! webextension-polyfill */93150),c()(r.g.browser,"scripting.executeScript")||Object.assign(r.g.browser,{scripting:{executeScript:f,insertCSS:d}}),c()(r.g.browser,"action")||Object.assign(r.g.browser,{action:r.g.browser.browserAction})},51206:
/*!************************************!*\
  !*** ./node_modules/bowser/es5.js ***!
  \************************************/function(e){e.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=90)}({17:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=r(18),i=function(){function e(){}return e.getFirstMatch=function(e,t){var r=t.match(e);return r&&r.length>0&&r[1]||""},e.getSecondMatch=function(e,t){var r=t.match(e);return r&&r.length>1&&r[2]||""},e.matchAndReturnConst=function(e,t,r){if(e.test(t))return r},e.getWindowsVersionName=function(e){switch(e){case"NT":return"NT";case"XP":case"NT 5.1":return"XP";case"NT 5.0":return"2000";case"NT 5.2":return"2003";case"NT 6.0":return"Vista";case"NT 6.1":return"7";case"NT 6.2":return"8";case"NT 6.3":return"8.1";case"NT 10.0":return"10";default:return}},e.getMacOSVersionName=function(e){var t=e.split(".").splice(0,2).map((function(e){return parseInt(e,10)||0}));if(t.push(0),10===t[0])switch(t[1]){case 5:return"Leopard";case 6:return"Snow Leopard";case 7:return"Lion";case 8:return"Mountain Lion";case 9:return"Mavericks";case 10:return"Yosemite";case 11:return"El Capitan";case 12:return"Sierra";case 13:return"High Sierra";case 14:return"Mojave";case 15:return"Catalina";default:return}},e.getAndroidVersionName=function(e){var t=e.split(".").splice(0,2).map((function(e){return parseInt(e,10)||0}));if(t.push(0),!(1===t[0]&&t[1]<5))return 1===t[0]&&t[1]<6?"Cupcake":1===t[0]&&t[1]>=6?"Donut":2===t[0]&&t[1]<2?"Eclair":2===t[0]&&2===t[1]?"Froyo":2===t[0]&&t[1]>2?"Gingerbread":3===t[0]?"Honeycomb":4===t[0]&&t[1]<1?"Ice Cream Sandwich":4===t[0]&&t[1]<4?"Jelly Bean":4===t[0]&&t[1]>=4?"KitKat":5===t[0]?"Lollipop":6===t[0]?"Marshmallow":7===t[0]?"Nougat":8===t[0]?"Oreo":9===t[0]?"Pie":void 0},e.getVersionPrecision=function(e){return e.split(".").length},e.compareVersions=function(t,r,n){void 0===n&&(n=!1);var i=e.getVersionPrecision(t),o=e.getVersionPrecision(r),a=Math.max(i,o),s=0,c=e.map([t,r],(function(t){var r=a-e.getVersionPrecision(t),n=t+new Array(r+1).join(".0");return e.map(n.split("."),(function(e){return new Array(20-e.length).join("0")+e})).reverse()}));for(n&&(s=a-Math.min(i,o)),a-=1;a>=s;){if(c[0][a]>c[1][a])return 1;if(c[0][a]===c[1][a]){if(a===s)return 0;a-=1}else if(c[0][a]<c[1][a])return-1}},e.map=function(e,t){var r,n=[];if(Array.prototype.map)return Array.prototype.map.call(e,t);for(r=0;r<e.length;r+=1)n.push(t(e[r]));return n},e.find=function(e,t){var r,n;if(Array.prototype.find)return Array.prototype.find.call(e,t);for(r=0,n=e.length;r<n;r+=1){var i=e[r];if(t(i,r))return i}},e.assign=function(e){for(var t,r,n=e,i=arguments.length,o=new Array(i>1?i-1:0),a=1;a<i;a++)o[a-1]=arguments[a];if(Object.assign)return Object.assign.apply(Object,[e].concat(o));var s=function(){var e=o[t];"object"==typeof e&&null!==e&&Object.keys(e).forEach((function(t){n[t]=e[t]}))};for(t=0,r=o.length;t<r;t+=1)s();return e},e.getBrowserAlias=function(e){return n.BROWSER_ALIASES_MAP[e]},e.getBrowserTypeByAlias=function(e){return n.BROWSER_MAP[e]||""},e}();t.default=i,e.exports=t.default},18:function(e,t,r){"use strict";t.__esModule=!0,t.ENGINE_MAP=t.OS_MAP=t.PLATFORMS_MAP=t.BROWSER_MAP=t.BROWSER_ALIASES_MAP=void 0,t.BROWSER_ALIASES_MAP={"Amazon Silk":"amazon_silk","Android Browser":"android",Bada:"bada",BlackBerry:"blackberry",Chrome:"chrome",Chromium:"chromium",Electron:"electron",Epiphany:"epiphany",Firefox:"firefox",Focus:"focus",Generic:"generic","Google Search":"google_search",Googlebot:"googlebot","Internet Explorer":"ie","K-Meleon":"k_meleon",Maxthon:"maxthon","Microsoft Edge":"edge","MZ Browser":"mz","NAVER Whale Browser":"naver",Opera:"opera","Opera Coast":"opera_coast",PhantomJS:"phantomjs",Puffin:"puffin",QupZilla:"qupzilla",QQ:"qq",QQLite:"qqlite",Safari:"safari",Sailfish:"sailfish","Samsung Internet for Android":"samsung_internet",SeaMonkey:"seamonkey",Sleipnir:"sleipnir",Swing:"swing",Tizen:"tizen","UC Browser":"uc",Vivaldi:"vivaldi","WebOS Browser":"webos",WeChat:"wechat","Yandex Browser":"yandex",Roku:"roku"},t.BROWSER_MAP={amazon_silk:"Amazon Silk",android:"Android Browser",bada:"Bada",blackberry:"BlackBerry",chrome:"Chrome",chromium:"Chromium",electron:"Electron",epiphany:"Epiphany",firefox:"Firefox",focus:"Focus",generic:"Generic",googlebot:"Googlebot",google_search:"Google Search",ie:"Internet Explorer",k_meleon:"K-Meleon",maxthon:"Maxthon",edge:"Microsoft Edge",mz:"MZ Browser",naver:"NAVER Whale Browser",opera:"Opera",opera_coast:"Opera Coast",phantomjs:"PhantomJS",puffin:"Puffin",qupzilla:"QupZilla",qq:"QQ Browser",qqlite:"QQ Browser Lite",safari:"Safari",sailfish:"Sailfish",samsung_internet:"Samsung Internet for Android",seamonkey:"SeaMonkey",sleipnir:"Sleipnir",swing:"Swing",tizen:"Tizen",uc:"UC Browser",vivaldi:"Vivaldi",webos:"WebOS Browser",wechat:"WeChat",yandex:"Yandex Browser"},t.PLATFORMS_MAP={tablet:"tablet",mobile:"mobile",desktop:"desktop",tv:"tv"},t.OS_MAP={WindowsPhone:"Windows Phone",Windows:"Windows",MacOS:"macOS",iOS:"iOS",Android:"Android",WebOS:"WebOS",BlackBerry:"BlackBerry",Bada:"Bada",Tizen:"Tizen",Linux:"Linux",ChromeOS:"Chrome OS",PlayStation4:"PlayStation 4",Roku:"Roku"},t.ENGINE_MAP={EdgeHTML:"EdgeHTML",Blink:"Blink",Trident:"Trident",Presto:"Presto",Gecko:"Gecko",WebKit:"WebKit"}},90:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n,i=(n=r(91))&&n.__esModule?n:{default:n},o=r(18);function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var s=function(){function e(){}var t,r,n;return e.getParser=function(e,t){if(void 0===t&&(t=!1),"string"!=typeof e)throw new Error("UserAgent should be a string");return new i.default(e,t)},e.parse=function(e){return new i.default(e).getResult()},t=e,n=[{key:"BROWSER_MAP",get:function(){return o.BROWSER_MAP}},{key:"ENGINE_MAP",get:function(){return o.ENGINE_MAP}},{key:"OS_MAP",get:function(){return o.OS_MAP}},{key:"PLATFORMS_MAP",get:function(){return o.PLATFORMS_MAP}}],(r=null)&&a(t.prototype,r),n&&a(t,n),e}();t.default=s,e.exports=t.default},91:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=c(r(92)),i=c(r(93)),o=c(r(94)),a=c(r(95)),s=c(r(17));function c(e){return e&&e.__esModule?e:{default:e}}var u=function(){function e(e,t){if(void 0===t&&(t=!1),null==e||""===e)throw new Error("UserAgent parameter can't be empty");this._ua=e,this.parsedResult={},!0!==t&&this.parse()}var t=e.prototype;return t.getUA=function(){return this._ua},t.test=function(e){return e.test(this._ua)},t.parseBrowser=function(){var e=this;this.parsedResult.browser={};var t=s.default.find(n.default,(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some((function(t){return e.test(t)}));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.browser=t.describe(this.getUA())),this.parsedResult.browser},t.getBrowser=function(){return this.parsedResult.browser?this.parsedResult.browser:this.parseBrowser()},t.getBrowserName=function(e){return e?String(this.getBrowser().name).toLowerCase()||"":this.getBrowser().name||""},t.getBrowserVersion=function(){return this.getBrowser().version},t.getOS=function(){return this.parsedResult.os?this.parsedResult.os:this.parseOS()},t.parseOS=function(){var e=this;this.parsedResult.os={};var t=s.default.find(i.default,(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some((function(t){return e.test(t)}));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.os=t.describe(this.getUA())),this.parsedResult.os},t.getOSName=function(e){var t=this.getOS().name;return e?String(t).toLowerCase()||"":t||""},t.getOSVersion=function(){return this.getOS().version},t.getPlatform=function(){return this.parsedResult.platform?this.parsedResult.platform:this.parsePlatform()},t.getPlatformType=function(e){void 0===e&&(e=!1);var t=this.getPlatform().type;return e?String(t).toLowerCase()||"":t||""},t.parsePlatform=function(){var e=this;this.parsedResult.platform={};var t=s.default.find(o.default,(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some((function(t){return e.test(t)}));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.platform=t.describe(this.getUA())),this.parsedResult.platform},t.getEngine=function(){return this.parsedResult.engine?this.parsedResult.engine:this.parseEngine()},t.getEngineName=function(e){return e?String(this.getEngine().name).toLowerCase()||"":this.getEngine().name||""},t.parseEngine=function(){var e=this;this.parsedResult.engine={};var t=s.default.find(a.default,(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some((function(t){return e.test(t)}));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.engine=t.describe(this.getUA())),this.parsedResult.engine},t.parse=function(){return this.parseBrowser(),this.parseOS(),this.parsePlatform(),this.parseEngine(),this},t.getResult=function(){return s.default.assign({},this.parsedResult)},t.satisfies=function(e){var t=this,r={},n=0,i={},o=0;if(Object.keys(e).forEach((function(t){var a=e[t];"string"==typeof a?(i[t]=a,o+=1):"object"==typeof a&&(r[t]=a,n+=1)})),n>0){var a=Object.keys(r),c=s.default.find(a,(function(e){return t.isOS(e)}));if(c){var u=this.satisfies(r[c]);if(void 0!==u)return u}var l=s.default.find(a,(function(e){return t.isPlatform(e)}));if(l){var f=this.satisfies(r[l]);if(void 0!==f)return f}}if(o>0){var d=Object.keys(i),p=s.default.find(d,(function(e){return t.isBrowser(e,!0)}));if(void 0!==p)return this.compareVersion(i[p])}},t.isBrowser=function(e,t){void 0===t&&(t=!1);var r=this.getBrowserName().toLowerCase(),n=e.toLowerCase(),i=s.default.getBrowserTypeByAlias(n);return t&&i&&(n=i.toLowerCase()),n===r},t.compareVersion=function(e){var t=[0],r=e,n=!1,i=this.getBrowserVersion();if("string"==typeof i)return">"===e[0]||"<"===e[0]?(r=e.substr(1),"="===e[1]?(n=!0,r=e.substr(2)):t=[],">"===e[0]?t.push(1):t.push(-1)):"="===e[0]?r=e.substr(1):"~"===e[0]&&(n=!0,r=e.substr(1)),t.indexOf(s.default.compareVersions(i,r,n))>-1},t.isOS=function(e){return this.getOSName(!0)===String(e).toLowerCase()},t.isPlatform=function(e){return this.getPlatformType(!0)===String(e).toLowerCase()},t.isEngine=function(e){return this.getEngineName(!0)===String(e).toLowerCase()},t.is=function(e){return this.isBrowser(e)||this.isOS(e)||this.isPlatform(e)},t.some=function(e){var t=this;return void 0===e&&(e=[]),e.some((function(e){return t.is(e)}))},e}();t.default=u,e.exports=t.default},92:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n,i=(n=r(17))&&n.__esModule?n:{default:n},o=/version\/(\d+(\.?_?\d+)+)/i,a=[{test:[/googlebot/i],describe:function(e){var t={name:"Googlebot"},r=i.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i,e)||i.default.getFirstMatch(o,e);return r&&(t.version=r),t}},{test:[/opera/i],describe:function(e){var t={name:"Opera"},r=i.default.getFirstMatch(o,e)||i.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/opr\/|opios/i],describe:function(e){var t={name:"Opera"},r=i.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i,e)||i.default.getFirstMatch(o,e);return r&&(t.version=r),t}},{test:[/SamsungBrowser/i],describe:function(e){var t={name:"Samsung Internet for Android"},r=i.default.getFirstMatch(o,e)||i.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/Whale/i],describe:function(e){var t={name:"NAVER Whale Browser"},r=i.default.getFirstMatch(o,e)||i.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/MZBrowser/i],describe:function(e){var t={name:"MZ Browser"},r=i.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i,e)||i.default.getFirstMatch(o,e);return r&&(t.version=r),t}},{test:[/focus/i],describe:function(e){var t={name:"Focus"},r=i.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i,e)||i.default.getFirstMatch(o,e);return r&&(t.version=r),t}},{test:[/swing/i],describe:function(e){var t={name:"Swing"},r=i.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i,e)||i.default.getFirstMatch(o,e);return r&&(t.version=r),t}},{test:[/coast/i],describe:function(e){var t={name:"Opera Coast"},r=i.default.getFirstMatch(o,e)||i.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/opt\/\d+(?:.?_?\d+)+/i],describe:function(e){var t={name:"Opera Touch"},r=i.default.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(o,e);return r&&(t.version=r),t}},{test:[/yabrowser/i],describe:function(e){var t={name:"Yandex Browser"},r=i.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(o,e);return r&&(t.version=r),t}},{test:[/ucbrowser/i],describe:function(e){var t={name:"UC Browser"},r=i.default.getFirstMatch(o,e)||i.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/Maxthon|mxios/i],describe:function(e){var t={name:"Maxthon"},r=i.default.getFirstMatch(o,e)||i.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/epiphany/i],describe:function(e){var t={name:"Epiphany"},r=i.default.getFirstMatch(o,e)||i.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/puffin/i],describe:function(e){var t={name:"Puffin"},r=i.default.getFirstMatch(o,e)||i.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/sleipnir/i],describe:function(e){var t={name:"Sleipnir"},r=i.default.getFirstMatch(o,e)||i.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/k-meleon/i],describe:function(e){var t={name:"K-Meleon"},r=i.default.getFirstMatch(o,e)||i.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/micromessenger/i],describe:function(e){var t={name:"WeChat"},r=i.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(o,e);return r&&(t.version=r),t}},{test:[/qqbrowser/i],describe:function(e){var t={name:/qqbrowserlite/i.test(e)?"QQ Browser Lite":"QQ Browser"},r=i.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(o,e);return r&&(t.version=r),t}},{test:[/msie|trident/i],describe:function(e){var t={name:"Internet Explorer"},r=i.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/\sedg\//i],describe:function(e){var t={name:"Microsoft Edge"},r=i.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/edg([ea]|ios)/i],describe:function(e){var t={name:"Microsoft Edge"},r=i.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/vivaldi/i],describe:function(e){var t={name:"Vivaldi"},r=i.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/seamonkey/i],describe:function(e){var t={name:"SeaMonkey"},r=i.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/sailfish/i],describe:function(e){var t={name:"Sailfish"},r=i.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i,e);return r&&(t.version=r),t}},{test:[/silk/i],describe:function(e){var t={name:"Amazon Silk"},r=i.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/phantom/i],describe:function(e){var t={name:"PhantomJS"},r=i.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/slimerjs/i],describe:function(e){var t={name:"SlimerJS"},r=i.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(e){var t={name:"BlackBerry"},r=i.default.getFirstMatch(o,e)||i.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/(web|hpw)[o0]s/i],describe:function(e){var t={name:"WebOS Browser"},r=i.default.getFirstMatch(o,e)||i.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/bada/i],describe:function(e){var t={name:"Bada"},r=i.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/tizen/i],describe:function(e){var t={name:"Tizen"},r=i.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(o,e);return r&&(t.version=r),t}},{test:[/qupzilla/i],describe:function(e){var t={name:"QupZilla"},r=i.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(o,e);return r&&(t.version=r),t}},{test:[/firefox|iceweasel|fxios/i],describe:function(e){var t={name:"Firefox"},r=i.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/electron/i],describe:function(e){var t={name:"Electron"},r=i.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/chromium/i],describe:function(e){var t={name:"Chromium"},r=i.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(o,e);return r&&(t.version=r),t}},{test:[/chrome|crios|crmo/i],describe:function(e){var t={name:"Chrome"},r=i.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/GSA/i],describe:function(e){var t={name:"Google Search"},r=i.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:function(e){var t=!e.test(/like android/i),r=e.test(/android/i);return t&&r},describe:function(e){var t={name:"Android Browser"},r=i.default.getFirstMatch(o,e);return r&&(t.version=r),t}},{test:[/playstation 4/i],describe:function(e){var t={name:"PlayStation 4"},r=i.default.getFirstMatch(o,e);return r&&(t.version=r),t}},{test:[/safari|applewebkit/i],describe:function(e){var t={name:"Safari"},r=i.default.getFirstMatch(o,e);return r&&(t.version=r),t}},{test:[/.*/i],describe:function(e){var t=-1!==e.search("\\(")?/^(.*)\/(.*)[ \t]\((.*)/:/^(.*)\/(.*) /;return{name:i.default.getFirstMatch(t,e),version:i.default.getSecondMatch(t,e)}}}];t.default=a,e.exports=t.default},93:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n,i=(n=r(17))&&n.__esModule?n:{default:n},o=r(18),a=[{test:[/Roku\/DVP/],describe:function(e){var t=i.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i,e);return{name:o.OS_MAP.Roku,version:t}}},{test:[/windows phone/i],describe:function(e){var t=i.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i,e);return{name:o.OS_MAP.WindowsPhone,version:t}}},{test:[/windows /i],describe:function(e){var t=i.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i,e),r=i.default.getWindowsVersionName(t);return{name:o.OS_MAP.Windows,version:t,versionName:r}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe:function(e){var t={name:o.OS_MAP.iOS},r=i.default.getSecondMatch(/(Version\/)(\d[\d.]+)/,e);return r&&(t.version=r),t}},{test:[/macintosh/i],describe:function(e){var t=i.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i,e).replace(/[_\s]/g,"."),r=i.default.getMacOSVersionName(t),n={name:o.OS_MAP.MacOS,version:t};return r&&(n.versionName=r),n}},{test:[/(ipod|iphone|ipad)/i],describe:function(e){var t=i.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i,e).replace(/[_\s]/g,".");return{name:o.OS_MAP.iOS,version:t}}},{test:function(e){var t=!e.test(/like android/i),r=e.test(/android/i);return t&&r},describe:function(e){var t=i.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i,e),r=i.default.getAndroidVersionName(t),n={name:o.OS_MAP.Android,version:t};return r&&(n.versionName=r),n}},{test:[/(web|hpw)[o0]s/i],describe:function(e){var t=i.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,e),r={name:o.OS_MAP.WebOS};return t&&t.length&&(r.version=t),r}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(e){var t=i.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i,e)||i.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i,e)||i.default.getFirstMatch(/\bbb(\d+)/i,e);return{name:o.OS_MAP.BlackBerry,version:t}}},{test:[/bada/i],describe:function(e){var t=i.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i,e);return{name:o.OS_MAP.Bada,version:t}}},{test:[/tizen/i],describe:function(e){var t=i.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i,e);return{name:o.OS_MAP.Tizen,version:t}}},{test:[/linux/i],describe:function(){return{name:o.OS_MAP.Linux}}},{test:[/CrOS/],describe:function(){return{name:o.OS_MAP.ChromeOS}}},{test:[/PlayStation 4/],describe:function(e){var t=i.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i,e);return{name:o.OS_MAP.PlayStation4,version:t}}}];t.default=a,e.exports=t.default},94:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n,i=(n=r(17))&&n.__esModule?n:{default:n},o=r(18),a=[{test:[/googlebot/i],describe:function(){return{type:"bot",vendor:"Google"}}},{test:[/huawei/i],describe:function(e){var t=i.default.getFirstMatch(/(can-l01)/i,e)&&"Nova",r={type:o.PLATFORMS_MAP.mobile,vendor:"Huawei"};return t&&(r.model=t),r}},{test:[/nexus\s*(?:7|8|9|10).*/i],describe:function(){return{type:o.PLATFORMS_MAP.tablet,vendor:"Nexus"}}},{test:[/ipad/i],describe:function(){return{type:o.PLATFORMS_MAP.tablet,vendor:"Apple",model:"iPad"}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe:function(){return{type:o.PLATFORMS_MAP.tablet,vendor:"Apple",model:"iPad"}}},{test:[/kftt build/i],describe:function(){return{type:o.PLATFORMS_MAP.tablet,vendor:"Amazon",model:"Kindle Fire HD 7"}}},{test:[/silk/i],describe:function(){return{type:o.PLATFORMS_MAP.tablet,vendor:"Amazon"}}},{test:[/tablet(?! pc)/i],describe:function(){return{type:o.PLATFORMS_MAP.tablet}}},{test:function(e){var t=e.test(/ipod|iphone/i),r=e.test(/like (ipod|iphone)/i);return t&&!r},describe:function(e){var t=i.default.getFirstMatch(/(ipod|iphone)/i,e);return{type:o.PLATFORMS_MAP.mobile,vendor:"Apple",model:t}}},{test:[/nexus\s*[0-6].*/i,/galaxy nexus/i],describe:function(){return{type:o.PLATFORMS_MAP.mobile,vendor:"Nexus"}}},{test:[/[^-]mobi/i],describe:function(){return{type:o.PLATFORMS_MAP.mobile}}},{test:function(e){return"blackberry"===e.getBrowserName(!0)},describe:function(){return{type:o.PLATFORMS_MAP.mobile,vendor:"BlackBerry"}}},{test:function(e){return"bada"===e.getBrowserName(!0)},describe:function(){return{type:o.PLATFORMS_MAP.mobile}}},{test:function(e){return"windows phone"===e.getBrowserName()},describe:function(){return{type:o.PLATFORMS_MAP.mobile,vendor:"Microsoft"}}},{test:function(e){var t=Number(String(e.getOSVersion()).split(".")[0]);return"android"===e.getOSName(!0)&&t>=3},describe:function(){return{type:o.PLATFORMS_MAP.tablet}}},{test:function(e){return"android"===e.getOSName(!0)},describe:function(){return{type:o.PLATFORMS_MAP.mobile}}},{test:function(e){return"macos"===e.getOSName(!0)},describe:function(){return{type:o.PLATFORMS_MAP.desktop,vendor:"Apple"}}},{test:function(e){return"windows"===e.getOSName(!0)},describe:function(){return{type:o.PLATFORMS_MAP.desktop}}},{test:function(e){return"linux"===e.getOSName(!0)},describe:function(){return{type:o.PLATFORMS_MAP.desktop}}},{test:function(e){return"playstation 4"===e.getOSName(!0)},describe:function(){return{type:o.PLATFORMS_MAP.tv}}},{test:function(e){return"roku"===e.getOSName(!0)},describe:function(){return{type:o.PLATFORMS_MAP.tv}}}];t.default=a,e.exports=t.default},95:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n,i=(n=r(17))&&n.__esModule?n:{default:n},o=r(18),a=[{test:function(e){return"microsoft edge"===e.getBrowserName(!0)},describe:function(e){if(/\sedg\//i.test(e))return{name:o.ENGINE_MAP.Blink};var t=i.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i,e);return{name:o.ENGINE_MAP.EdgeHTML,version:t}}},{test:[/trident/i],describe:function(e){var t={name:o.ENGINE_MAP.Trident},r=i.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:function(e){return e.test(/presto/i)},describe:function(e){var t={name:o.ENGINE_MAP.Presto},r=i.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:function(e){var t=e.test(/gecko/i),r=e.test(/like gecko/i);return t&&!r},describe:function(e){var t={name:o.ENGINE_MAP.Gecko},r=i.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/(apple)?webkit\/537\.36/i],describe:function(){return{name:o.ENGINE_MAP.Blink}}},{test:[/(apple)?webkit/i],describe:function(e){var t={name:o.ENGINE_MAP.WebKit},r=i.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}}];t.default=a,e.exports=t.default}})},5089:
/*!***********************************************!*\
  !*** ./node_modules/lodash.assignin/index.js ***!
  \***********************************************/e=>{var t=9007199254740991,r="[object Arguments]",n="[object Function]",i="[object GeneratorFunction]",o=/^(?:0|[1-9]\d*)$/;var a=Object.prototype,s=a.hasOwnProperty,c=a.toString,u=a.propertyIsEnumerable,l=Math.max;function f(e,t){var n=m(e)||function(e){return function(e){return function(e){return!!e&&"object"==typeof e}(e)&&v(e)}(e)&&s.call(e,"callee")&&(!u.call(e,"callee")||c.call(e)==r)}(e)?function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}(e.length,String):[],i=n.length,o=!!i;for(var a in e)!t&&!s.call(e,a)||o&&("length"==a||h(a,i))||n.push(a);return n}function d(e,t,r){var n=e[t];s.call(e,t)&&g(n,r)&&(void 0!==r||t in e)||(e[t]=r)}function p(e){if(!b(e))return function(e){var t=[];if(null!=e)for(var r in Object(e))t.push(r);return t}(e);var t,r,n,i=(r=(t=e)&&t.constructor,n="function"==typeof r&&r.prototype||a,t===n),o=[];for(var c in e)("constructor"!=c||!i&&s.call(e,c))&&o.push(c);return o}function h(e,r){return!!(r=null==r?t:r)&&("number"==typeof e||o.test(e))&&e>-1&&e%1==0&&e<r}function g(e,t){return e===t||e!=e&&t!=t}var m=Array.isArray;function v(e){return null!=e&&function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=t}(e.length)&&!function(e){var t=b(e)?c.call(e):"";return t==n||t==i}(e)}function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}var E,A,y,_=(E=function(e,t){!function(e,t,r,n){r||(r={});for(var i=-1,o=t.length;++i<o;){var a=t[i],s=n?n(r[a],e[a],a,r,e):void 0;d(r,a,void 0===s?e[a]:s)}}(t,function(e){return v(e)?f(e,!0):p(e)}(t),e)},A=function(e,t){var r=-1,n=t.length,i=n>1?t[n-1]:void 0,o=n>2?t[2]:void 0;for(i=E.length>3&&"function"==typeof i?(n--,i):void 0,o&&function(e,t,r){if(!b(r))return!1;var n=typeof t;return!!("number"==n?v(r)&&h(t,r.length):"string"==n&&t in r)&&g(r[t],e)}(t[0],t[1],o)&&(i=n<3?void 0:i,n=1),e=Object(e);++r<n;){var a=t[r];a&&E(e,a,r,i)}return e},y=l(void 0===y?A.length-1:y,0),function(){for(var e=arguments,t=-1,r=l(e.length-y,0),n=Array(r);++t<r;)n[t]=e[y+t];t=-1;for(var i=Array(y+1);++t<y;)i[t]=e[t];return i[y]=n,function(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}(A,this,i)});e.exports=_},1989:
/*!**************************************!*\
  !*** ./node_modules/lodash/_Hash.js ***!
  \**************************************/(e,t,r)=>{var n=r(/*! ./_hashClear */51789),i=r(/*! ./_hashDelete */80401),o=r(/*! ./_hashGet */57667),a=r(/*! ./_hashHas */21327),s=r(/*! ./_hashSet */81866);function c(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}c.prototype.clear=n,c.prototype.delete=i,c.prototype.get=o,c.prototype.has=a,c.prototype.set=s,e.exports=c},38407:
/*!*******************************************!*\
  !*** ./node_modules/lodash/_ListCache.js ***!
  \*******************************************/(e,t,r)=>{var n=r(/*! ./_listCacheClear */27040),i=r(/*! ./_listCacheDelete */14125),o=r(/*! ./_listCacheGet */82117),a=r(/*! ./_listCacheHas */67518),s=r(/*! ./_listCacheSet */54705);function c(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}c.prototype.clear=n,c.prototype.delete=i,c.prototype.get=o,c.prototype.has=a,c.prototype.set=s,e.exports=c},57071:
/*!*************************************!*\
  !*** ./node_modules/lodash/_Map.js ***!
  \*************************************/(e,t,r)=>{var n=r(/*! ./_getNative */10852)(r(/*! ./_root */55639),"Map");e.exports=n},83369:
/*!******************************************!*\
  !*** ./node_modules/lodash/_MapCache.js ***!
  \******************************************/(e,t,r)=>{var n=r(/*! ./_mapCacheClear */24785),i=r(/*! ./_mapCacheDelete */11285),o=r(/*! ./_mapCacheGet */96e3),a=r(/*! ./_mapCacheHas */49916),s=r(/*! ./_mapCacheSet */95265);function c(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}c.prototype.clear=n,c.prototype.delete=i,c.prototype.get=o,c.prototype.has=a,c.prototype.set=s,e.exports=c},62705:
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/(e,t,r)=>{var n=r(/*! ./_root */55639).Symbol;e.exports=n},29932:
/*!******************************************!*\
  !*** ./node_modules/lodash/_arrayMap.js ***!
  \******************************************/e=>{e.exports=function(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i}},18470:
/*!**********************************************!*\
  !*** ./node_modules/lodash/_assocIndexOf.js ***!
  \**********************************************/(e,t,r)=>{var n=r(/*! ./eq */77813);e.exports=function(e,t){for(var r=e.length;r--;)if(n(e[r][0],t))return r;return-1}},97786:
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseGet.js ***!
  \*****************************************/(e,t,r)=>{var n=r(/*! ./_castPath */71811),i=r(/*! ./_toKey */40327);e.exports=function(e,t){for(var r=0,o=(t=n(t,e)).length;null!=e&&r<o;)e=e[i(t[r++])];return r&&r==o?e:void 0}},44239:
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/(e,t,r)=>{var n=r(/*! ./_Symbol */62705),i=r(/*! ./_getRawTag */89607),o=r(/*! ./_objectToString */2333),a=n?n.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":a&&a in Object(e)?i(e):o(e)}},13:
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseHasIn.js ***!
  \*******************************************/e=>{e.exports=function(e,t){return null!=e&&t in Object(e)}},9454:
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsArguments.js ***!
  \*************************************************/(e,t,r)=>{var n=r(/*! ./_baseGetTag */44239),i=r(/*! ./isObjectLike */37005);e.exports=function(e){return i(e)&&"[object Arguments]"==n(e)}},28458:
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIsNative.js ***!
  \**********************************************/(e,t,r)=>{var n=r(/*! ./isFunction */23560),i=r(/*! ./_isMasked */15346),o=r(/*! ./isObject */13218),a=r(/*! ./_toSource */80346),s=/^\[object .+?Constructor\]$/,c=Function.prototype,u=Object.prototype,l=c.toString,f=u.hasOwnProperty,d=RegExp("^"+l.call(f).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=function(e){return!(!o(e)||i(e))&&(n(e)?d:s).test(a(e))}},80531:
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseToString.js ***!
  \**********************************************/(e,t,r)=>{var n=r(/*! ./_Symbol */62705),i=r(/*! ./_arrayMap */29932),o=r(/*! ./isArray */1469),a=r(/*! ./isSymbol */33448),s=n?n.prototype:void 0,c=s?s.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(o(t))return i(t,e)+"";if(a(t))return c?c.call(t):"";var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r}},71811:
/*!******************************************!*\
  !*** ./node_modules/lodash/_castPath.js ***!
  \******************************************/(e,t,r)=>{var n=r(/*! ./isArray */1469),i=r(/*! ./_isKey */15403),o=r(/*! ./_stringToPath */55514),a=r(/*! ./toString */79833);e.exports=function(e,t){return n(e)?e:i(e,t)?[e]:o(a(e))}},14429:
/*!********************************************!*\
  !*** ./node_modules/lodash/_coreJsData.js ***!
  \********************************************/(e,t,r)=>{var n=r(/*! ./_root */55639)["__core-js_shared__"];e.exports=n},31957:
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/(e,t,r)=>{var n="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g;e.exports=n},45050:
/*!********************************************!*\
  !*** ./node_modules/lodash/_getMapData.js ***!
  \********************************************/(e,t,r)=>{var n=r(/*! ./_isKeyable */37019);e.exports=function(e,t){var r=e.__data__;return n(t)?r["string"==typeof t?"string":"hash"]:r.map}},10852:
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getNative.js ***!
  \*******************************************/(e,t,r)=>{var n=r(/*! ./_baseIsNative */28458),i=r(/*! ./_getValue */47801);e.exports=function(e,t){var r=i(e,t);return n(r)?r:void 0}},89607:
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/(e,t,r)=>{var n=r(/*! ./_Symbol */62705),i=Object.prototype,o=i.hasOwnProperty,a=i.toString,s=n?n.toStringTag:void 0;e.exports=function(e){var t=o.call(e,s),r=e[s];try{e[s]=void 0;var n=!0}catch(e){}var i=a.call(e);return n&&(t?e[s]=r:delete e[s]),i}},47801:
/*!******************************************!*\
  !*** ./node_modules/lodash/_getValue.js ***!
  \******************************************/e=>{e.exports=function(e,t){return null==e?void 0:e[t]}},222:
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hasPath.js ***!
  \*****************************************/(e,t,r)=>{var n=r(/*! ./_castPath */71811),i=r(/*! ./isArguments */35694),o=r(/*! ./isArray */1469),a=r(/*! ./_isIndex */65776),s=r(/*! ./isLength */41780),c=r(/*! ./_toKey */40327);e.exports=function(e,t,r){for(var u=-1,l=(t=n(t,e)).length,f=!1;++u<l;){var d=c(t[u]);if(!(f=null!=e&&r(e,d)))break;e=e[d]}return f||++u!=l?f:!!(l=null==e?0:e.length)&&s(l)&&a(d,l)&&(o(e)||i(e))}},51789:
/*!*******************************************!*\
  !*** ./node_modules/lodash/_hashClear.js ***!
  \*******************************************/(e,t,r)=>{var n=r(/*! ./_nativeCreate */94536);e.exports=function(){this.__data__=n?n(null):{},this.size=0}},80401:
/*!********************************************!*\
  !*** ./node_modules/lodash/_hashDelete.js ***!
  \********************************************/e=>{e.exports=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}},57667:
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashGet.js ***!
  \*****************************************/(e,t,r)=>{var n=r(/*! ./_nativeCreate */94536),i=Object.prototype.hasOwnProperty;e.exports=function(e){var t=this.__data__;if(n){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return i.call(t,e)?t[e]:void 0}},21327:
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashHas.js ***!
  \*****************************************/(e,t,r)=>{var n=r(/*! ./_nativeCreate */94536),i=Object.prototype.hasOwnProperty;e.exports=function(e){var t=this.__data__;return n?void 0!==t[e]:i.call(t,e)}},81866:
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashSet.js ***!
  \*****************************************/(e,t,r)=>{var n=r(/*! ./_nativeCreate */94536);e.exports=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=n&&void 0===t?"__lodash_hash_undefined__":t,this}},65776:
/*!*****************************************!*\
  !*** ./node_modules/lodash/_isIndex.js ***!
  \*****************************************/e=>{var t=/^(?:0|[1-9]\d*)$/;e.exports=function(e,r){var n=typeof e;return!!(r=null==r?9007199254740991:r)&&("number"==n||"symbol"!=n&&t.test(e))&&e>-1&&e%1==0&&e<r}},15403:
/*!***************************************!*\
  !*** ./node_modules/lodash/_isKey.js ***!
  \***************************************/(e,t,r)=>{var n=r(/*! ./isArray */1469),i=r(/*! ./isSymbol */33448),o=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,a=/^\w*$/;e.exports=function(e,t){if(n(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!i(e))||(a.test(e)||!o.test(e)||null!=t&&e in Object(t))}},37019:
/*!*******************************************!*\
  !*** ./node_modules/lodash/_isKeyable.js ***!
  \*******************************************/e=>{e.exports=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}},15346:
/*!******************************************!*\
  !*** ./node_modules/lodash/_isMasked.js ***!
  \******************************************/(e,t,r)=>{var n,i=r(/*! ./_coreJsData */14429),o=(n=/[^.]+$/.exec(i&&i.keys&&i.keys.IE_PROTO||""))?"Symbol(src)_1."+n:"";e.exports=function(e){return!!o&&o in e}},27040:
/*!************************************************!*\
  !*** ./node_modules/lodash/_listCacheClear.js ***!
  \************************************************/e=>{e.exports=function(){this.__data__=[],this.size=0}},14125:
/*!*************************************************!*\
  !*** ./node_modules/lodash/_listCacheDelete.js ***!
  \*************************************************/(e,t,r)=>{var n=r(/*! ./_assocIndexOf */18470),i=Array.prototype.splice;e.exports=function(e){var t=this.__data__,r=n(t,e);return!(r<0)&&(r==t.length-1?t.pop():i.call(t,r,1),--this.size,!0)}},82117:
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheGet.js ***!
  \**********************************************/(e,t,r)=>{var n=r(/*! ./_assocIndexOf */18470);e.exports=function(e){var t=this.__data__,r=n(t,e);return r<0?void 0:t[r][1]}},67518:
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheHas.js ***!
  \**********************************************/(e,t,r)=>{var n=r(/*! ./_assocIndexOf */18470);e.exports=function(e){return n(this.__data__,e)>-1}},54705:
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheSet.js ***!
  \**********************************************/(e,t,r)=>{var n=r(/*! ./_assocIndexOf */18470);e.exports=function(e,t){var r=this.__data__,i=n(r,e);return i<0?(++this.size,r.push([e,t])):r[i][1]=t,this}},24785:
/*!***********************************************!*\
  !*** ./node_modules/lodash/_mapCacheClear.js ***!
  \***********************************************/(e,t,r)=>{var n=r(/*! ./_Hash */1989),i=r(/*! ./_ListCache */38407),o=r(/*! ./_Map */57071);e.exports=function(){this.size=0,this.__data__={hash:new n,map:new(o||i),string:new n}}},11285:
/*!************************************************!*\
  !*** ./node_modules/lodash/_mapCacheDelete.js ***!
  \************************************************/(e,t,r)=>{var n=r(/*! ./_getMapData */45050);e.exports=function(e){var t=n(this,e).delete(e);return this.size-=t?1:0,t}},96e3:
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheGet.js ***!
  \*********************************************/(e,t,r)=>{var n=r(/*! ./_getMapData */45050);e.exports=function(e){return n(this,e).get(e)}},49916:
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheHas.js ***!
  \*********************************************/(e,t,r)=>{var n=r(/*! ./_getMapData */45050);e.exports=function(e){return n(this,e).has(e)}},95265:
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheSet.js ***!
  \*********************************************/(e,t,r)=>{var n=r(/*! ./_getMapData */45050);e.exports=function(e,t){var r=n(this,e),i=r.size;return r.set(e,t),this.size+=r.size==i?0:1,this}},24523:
/*!***********************************************!*\
  !*** ./node_modules/lodash/_memoizeCapped.js ***!
  \***********************************************/(e,t,r)=>{var n=r(/*! ./memoize */88306);e.exports=function(e){var t=n(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}},94536:
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeCreate.js ***!
  \**********************************************/(e,t,r)=>{var n=r(/*! ./_getNative */10852)(Object,"create");e.exports=n},2333:
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/e=>{var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},55639:
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/(e,t,r)=>{var n=r(/*! ./_freeGlobal */31957),i="object"==typeof self&&self&&self.Object===Object&&self,o=n||i||Function("return this")();e.exports=o},55514:
/*!**********************************************!*\
  !*** ./node_modules/lodash/_stringToPath.js ***!
  \**********************************************/(e,t,r)=>{var n=r(/*! ./_memoizeCapped */24523),i=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,o=/\\(\\)?/g,a=n((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(i,(function(e,r,n,i){t.push(n?i.replace(o,"$1"):r||e)})),t}));e.exports=a},40327:
/*!***************************************!*\
  !*** ./node_modules/lodash/_toKey.js ***!
  \***************************************/(e,t,r)=>{var n=r(/*! ./isSymbol */33448);e.exports=function(e){if("string"==typeof e||n(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t}},80346:
/*!******************************************!*\
  !*** ./node_modules/lodash/_toSource.js ***!
  \******************************************/e=>{var t=Function.prototype.toString;e.exports=function(e){if(null!=e){try{return t.call(e)}catch(e){}try{return e+""}catch(e){}}return""}},77813:
/*!***********************************!*\
  !*** ./node_modules/lodash/eq.js ***!
  \***********************************/e=>{e.exports=function(e,t){return e===t||e!=e&&t!=t}},27361:
/*!************************************!*\
  !*** ./node_modules/lodash/get.js ***!
  \************************************/(e,t,r)=>{var n=r(/*! ./_baseGet */97786);e.exports=function(e,t,r){var i=null==e?void 0:n(e,t);return void 0===i?r:i}},79095:
/*!**************************************!*\
  !*** ./node_modules/lodash/hasIn.js ***!
  \**************************************/(e,t,r)=>{var n=r(/*! ./_baseHasIn */13),i=r(/*! ./_hasPath */222);e.exports=function(e,t){return null!=e&&i(e,t,n)}},35694:
/*!********************************************!*\
  !*** ./node_modules/lodash/isArguments.js ***!
  \********************************************/(e,t,r)=>{var n=r(/*! ./_baseIsArguments */9454),i=r(/*! ./isObjectLike */37005),o=Object.prototype,a=o.hasOwnProperty,s=o.propertyIsEnumerable,c=n(function(){return arguments}())?n:function(e){return i(e)&&a.call(e,"callee")&&!s.call(e,"callee")};e.exports=c},1469:
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/e=>{var t=Array.isArray;e.exports=t},23560:
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/(e,t,r)=>{var n=r(/*! ./_baseGetTag */44239),i=r(/*! ./isObject */13218);e.exports=function(e){if(!i(e))return!1;var t=n(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t}},41780:
/*!*****************************************!*\
  !*** ./node_modules/lodash/isLength.js ***!
  \*****************************************/e=>{e.exports=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}},13218:
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/e=>{e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},37005:
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/e=>{e.exports=function(e){return null!=e&&"object"==typeof e}},33448:
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/(e,t,r)=>{var n=r(/*! ./_baseGetTag */44239),i=r(/*! ./isObjectLike */37005);e.exports=function(e){return"symbol"==typeof e||i(e)&&"[object Symbol]"==n(e)}},88306:
/*!****************************************!*\
  !*** ./node_modules/lodash/memoize.js ***!
  \****************************************/(e,t,r)=>{var n=r(/*! ./_MapCache */83369);function i(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],o=r.cache;if(o.has(i))return o.get(i);var a=e.apply(this,n);return r.cache=o.set(i,a)||o,a};return r.cache=new(i.Cache||n),r}i.Cache=n,e.exports=i},79833:
/*!*****************************************!*\
  !*** ./node_modules/lodash/toString.js ***!
  \*****************************************/(e,t,r)=>{var n=r(/*! ./_baseToString */80531);e.exports=function(e){return null==e?"":n(e)}},44815:
/*!****************************************************!*\
  !*** ./node_modules/reselect/es/defaultMemoize.js ***!
  \****************************************************/(e,t,r)=>{"use strict";r.d(t,{PW:()=>o});var n="NOT_FOUND";var i=function(e,t){return e===t};function o(e,t){var r,o,a="object"==typeof t?t:{equalityCheck:t},s=a.equalityCheck,c=void 0===s?i:s,u=a.maxSize,l=void 0===u?1:u,f=a.resultEqualityCheck,d=function(e){return function(t,r){if(null===t||null===r||t.length!==r.length)return!1;for(var n=t.length,i=0;i<n;i++)if(!e(t[i],r[i]))return!1;return!0}}(c),p=1===l?(r=d,{get:function(e){return o&&r(o.key,e)?o.value:n},put:function(e,t){o={key:e,value:t}},getEntries:function(){return o?[o]:[]},clear:function(){o=void 0}}):function(e,t){var r=[];function i(e){var i=r.findIndex((function(r){return t(e,r.key)}));if(i>-1){var o=r[i];return i>0&&(r.splice(i,1),r.unshift(o)),o.value}return n}return{get:i,put:function(t,o){i(t)===n&&(r.unshift({key:t,value:o}),r.length>e&&r.pop())},getEntries:function(){return r},clear:function(){r=[]}}}(l,d);function h(){var t=p.get(arguments);if(t===n){if(t=e.apply(null,arguments),f){var r=p.getEntries().find((function(e){return f(e.value,t)}));r&&(t=r.value)}p.put(arguments,t)}return t}return h.clearCache=function(){return p.clear()},h}},22222:
/*!*******************************************!*\
  !*** ./node_modules/reselect/es/index.js ***!
  \*******************************************/(e,t,r)=>{"use strict";function n(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];var o,a=0,s={memoizeOptions:void 0},c=n.pop();if("object"==typeof c&&(s=c,c=n.pop()),"function"!=typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var u=s.memoizeOptions,l=void 0===u?r:u,f=Array.isArray(l)?l:[l],d=function(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"==typeof e}))){var r=t.map((function(e){return"function"==typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+r+"]")}return t}(n),p=e.apply(void 0,[function(){return a++,c.apply(null,arguments)}].concat(f)),h=e((function(){for(var e=[],t=d.length,r=0;r<t;r++)e.push(d[r].apply(null,arguments));return o=p.apply(null,e)}));return Object.assign(h,{resultFunc:c,memoizedResultFunc:p,dependencies:d,lastResult:function(){return o},recomputations:function(){return a},resetRecomputations:function(){return a=0}}),h}}r.d(t,{wN:()=>n,P1:()=>i,zB:()=>o});var i=n(r(/*! ./defaultMemoize */44815).PW),o=function(e,t){if(void 0===t&&(t=i),"object"!=typeof e)throw new Error("createStructuredSelector expects first argument to be an object where each property is a selector, instead received a "+typeof e);var r=Object.keys(e),n=t(r.map((function(t){return e[t]})),(function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce((function(e,t,n){return e[r[n]]=t,e}),{})}));return n}},26376:
/*!***********************************************!*\
  !*** ./node_modules/semver/classes/semver.js ***!
  \***********************************************/(e,t,r)=>{const n=r(/*! ../internal/debug */74225),{MAX_LENGTH:i,MAX_SAFE_INTEGER:o}=r(/*! ../internal/constants */83295),{safeRe:a,t:s}=r(/*! ../internal/re */55765),c=r(/*! ../internal/parse-options */12893),{compareIdentifiers:u}=r(/*! ../internal/identifiers */86742);class l{constructor(e,t){if(t=c(t),e instanceof l){if(e.loose===!!t.loose&&e.includePrerelease===!!t.includePrerelease)return e;e=e.version}else if("string"!=typeof e)throw new TypeError(`Invalid version. Must be a string. Got type "${typeof e}".`);if(e.length>i)throw new TypeError(`version is longer than ${i} characters`);n("SemVer",e,t),this.options=t,this.loose=!!t.loose,this.includePrerelease=!!t.includePrerelease;const r=e.trim().match(t.loose?a[s.LOOSE]:a[s.FULL]);if(!r)throw new TypeError(`Invalid Version: ${e}`);if(this.raw=e,this.major=+r[1],this.minor=+r[2],this.patch=+r[3],this.major>o||this.major<0)throw new TypeError("Invalid major version");if(this.minor>o||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>o||this.patch<0)throw new TypeError("Invalid patch version");r[4]?this.prerelease=r[4].split(".").map((e=>{if(/^[0-9]+$/.test(e)){const t=+e;if(t>=0&&t<o)return t}return e})):this.prerelease=[],this.build=r[5]?r[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(e){if(n("SemVer.compare",this.version,this.options,e),!(e instanceof l)){if("string"==typeof e&&e===this.version)return 0;e=new l(e,this.options)}return e.version===this.version?0:this.compareMain(e)||this.comparePre(e)}compareMain(e){return e instanceof l||(e=new l(e,this.options)),u(this.major,e.major)||u(this.minor,e.minor)||u(this.patch,e.patch)}comparePre(e){if(e instanceof l||(e=new l(e,this.options)),this.prerelease.length&&!e.prerelease.length)return-1;if(!this.prerelease.length&&e.prerelease.length)return 1;if(!this.prerelease.length&&!e.prerelease.length)return 0;let t=0;do{const r=this.prerelease[t],i=e.prerelease[t];if(n("prerelease compare",t,r,i),void 0===r&&void 0===i)return 0;if(void 0===i)return 1;if(void 0===r)return-1;if(r!==i)return u(r,i)}while(++t)}compareBuild(e){e instanceof l||(e=new l(e,this.options));let t=0;do{const r=this.build[t],i=e.build[t];if(n("prerelease compare",t,r,i),void 0===r&&void 0===i)return 0;if(void 0===i)return 1;if(void 0===r)return-1;if(r!==i)return u(r,i)}while(++t)}inc(e,t,r){switch(e){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",t,r);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",t,r);break;case"prepatch":this.prerelease.length=0,this.inc("patch",t,r),this.inc("pre",t,r);break;case"prerelease":0===this.prerelease.length&&this.inc("patch",t,r),this.inc("pre",t,r);break;case"major":0===this.minor&&0===this.patch&&0!==this.prerelease.length||this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":0===this.patch&&0!==this.prerelease.length||this.minor++,this.patch=0,this.prerelease=[];break;case"patch":0===this.prerelease.length&&this.patch++,this.prerelease=[];break;case"pre":{const e=Number(r)?1:0;if(!t&&!1===r)throw new Error("invalid increment argument: identifier is empty");if(0===this.prerelease.length)this.prerelease=[e];else{let n=this.prerelease.length;for(;--n>=0;)"number"==typeof this.prerelease[n]&&(this.prerelease[n]++,n=-2);if(-1===n){if(t===this.prerelease.join(".")&&!1===r)throw new Error("invalid increment argument: identifier already exists");this.prerelease.push(e)}}if(t){let n=[t,e];!1===r&&(n=[t]),0===u(this.prerelease[0],t)?isNaN(this.prerelease[1])&&(this.prerelease=n):this.prerelease=n}break}default:throw new Error(`invalid increment argument: ${e}`)}return this.raw=this.format(),this.build.length&&(this.raw+=`+${this.build.join(".")}`),this}}e.exports=l},46269:
/*!**************************************************!*\
  !*** ./node_modules/semver/functions/compare.js ***!
  \**************************************************/(e,t,r)=>{const n=r(/*! ../classes/semver */26376);e.exports=(e,t,r)=>new n(e,r).compare(new n(t,r))},25903:
/*!**********************************************!*\
  !*** ./node_modules/semver/functions/gte.js ***!
  \**********************************************/(e,t,r)=>{const n=r(/*! ./compare */46269);e.exports=(e,t,r)=>n(e,t,r)>=0},21544:
/*!*********************************************!*\
  !*** ./node_modules/semver/functions/lt.js ***!
  \*********************************************/(e,t,r)=>{const n=r(/*! ./compare */46269);e.exports=(e,t,r)=>n(e,t,r)<0},83295:
/*!***************************************************!*\
  !*** ./node_modules/semver/internal/constants.js ***!
  \***************************************************/e=>{const t=Number.MAX_SAFE_INTEGER||9007199254740991;e.exports={MAX_LENGTH:256,MAX_SAFE_COMPONENT_LENGTH:16,MAX_SAFE_INTEGER:t,RELEASE_TYPES:["major","premajor","minor","preminor","patch","prepatch","prerelease"],SEMVER_SPEC_VERSION:"2.0.0",FLAG_INCLUDE_PRERELEASE:1,FLAG_LOOSE:2}},74225:
/*!***********************************************!*\
  !*** ./node_modules/semver/internal/debug.js ***!
  \***********************************************/e=>{const t="object"==typeof process&&process.env&&process.env.NODE_DEBUG&&/\bsemver\b/i.test(process.env.NODE_DEBUG)?(...e)=>console.error("SEMVER",...e):()=>{};e.exports=t},86742:
/*!*****************************************************!*\
  !*** ./node_modules/semver/internal/identifiers.js ***!
  \*****************************************************/e=>{const t=/^[0-9]+$/,r=(e,r)=>{const n=t.test(e),i=t.test(r);return n&&i&&(e=+e,r=+r),e===r?0:n&&!i?-1:i&&!n?1:e<r?-1:1};e.exports={compareIdentifiers:r,rcompareIdentifiers:(e,t)=>r(t,e)}},12893:
/*!*******************************************************!*\
  !*** ./node_modules/semver/internal/parse-options.js ***!
  \*******************************************************/e=>{const t=Object.freeze({loose:!0}),r=Object.freeze({});e.exports=e=>e?"object"!=typeof e?t:e:r},55765:
/*!********************************************!*\
  !*** ./node_modules/semver/internal/re.js ***!
  \********************************************/(e,t,r)=>{const{MAX_SAFE_COMPONENT_LENGTH:n}=r(/*! ./constants */83295),i=r(/*! ./debug */74225),o=(t=e.exports={}).re=[],a=t.safeRe=[],s=t.src=[],c=t.t={};let u=0;const l=(e,t,r)=>{const n=t.split("\\s*").join("\\s{0,1}").split("\\s+").join("\\s"),l=u++;i(e,l,t),c[e]=l,s[l]=t,o[l]=new RegExp(t,r?"g":void 0),a[l]=new RegExp(n,r?"g":void 0)};l("NUMERICIDENTIFIER","0|[1-9]\\d*"),l("NUMERICIDENTIFIERLOOSE","[0-9]+"),l("NONNUMERICIDENTIFIER","\\d*[a-zA-Z-][a-zA-Z0-9-]*"),l("MAINVERSION",`(${s[c.NUMERICIDENTIFIER]})\\.(${s[c.NUMERICIDENTIFIER]})\\.(${s[c.NUMERICIDENTIFIER]})`),l("MAINVERSIONLOOSE",`(${s[c.NUMERICIDENTIFIERLOOSE]})\\.(${s[c.NUMERICIDENTIFIERLOOSE]})\\.(${s[c.NUMERICIDENTIFIERLOOSE]})`),l("PRERELEASEIDENTIFIER",`(?:${s[c.NUMERICIDENTIFIER]}|${s[c.NONNUMERICIDENTIFIER]})`),l("PRERELEASEIDENTIFIERLOOSE",`(?:${s[c.NUMERICIDENTIFIERLOOSE]}|${s[c.NONNUMERICIDENTIFIER]})`),l("PRERELEASE",`(?:-(${s[c.PRERELEASEIDENTIFIER]}(?:\\.${s[c.PRERELEASEIDENTIFIER]})*))`),l("PRERELEASELOOSE",`(?:-?(${s[c.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${s[c.PRERELEASEIDENTIFIERLOOSE]})*))`),l("BUILDIDENTIFIER","[0-9A-Za-z-]+"),l("BUILD",`(?:\\+(${s[c.BUILDIDENTIFIER]}(?:\\.${s[c.BUILDIDENTIFIER]})*))`),l("FULLPLAIN",`v?${s[c.MAINVERSION]}${s[c.PRERELEASE]}?${s[c.BUILD]}?`),l("FULL",`^${s[c.FULLPLAIN]}$`),l("LOOSEPLAIN",`[v=\\s]*${s[c.MAINVERSIONLOOSE]}${s[c.PRERELEASELOOSE]}?${s[c.BUILD]}?`),l("LOOSE",`^${s[c.LOOSEPLAIN]}$`),l("GTLT","((?:<|>)?=?)"),l("XRANGEIDENTIFIERLOOSE",`${s[c.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),l("XRANGEIDENTIFIER",`${s[c.NUMERICIDENTIFIER]}|x|X|\\*`),l("XRANGEPLAIN",`[v=\\s]*(${s[c.XRANGEIDENTIFIER]})(?:\\.(${s[c.XRANGEIDENTIFIER]})(?:\\.(${s[c.XRANGEIDENTIFIER]})(?:${s[c.PRERELEASE]})?${s[c.BUILD]}?)?)?`),l("XRANGEPLAINLOOSE",`[v=\\s]*(${s[c.XRANGEIDENTIFIERLOOSE]})(?:\\.(${s[c.XRANGEIDENTIFIERLOOSE]})(?:\\.(${s[c.XRANGEIDENTIFIERLOOSE]})(?:${s[c.PRERELEASELOOSE]})?${s[c.BUILD]}?)?)?`),l("XRANGE",`^${s[c.GTLT]}\\s*${s[c.XRANGEPLAIN]}$`),l("XRANGELOOSE",`^${s[c.GTLT]}\\s*${s[c.XRANGEPLAINLOOSE]}$`),l("COERCE",`(^|[^\\d])(\\d{1,${n}})(?:\\.(\\d{1,${n}}))?(?:\\.(\\d{1,${n}}))?(?:$|[^\\d])`),l("COERCERTL",s[c.COERCE],!0),l("LONETILDE","(?:~>?)"),l("TILDETRIM",`(\\s*)${s[c.LONETILDE]}\\s+`,!0),t.tildeTrimReplace="$1~",l("TILDE",`^${s[c.LONETILDE]}${s[c.XRANGEPLAIN]}$`),l("TILDELOOSE",`^${s[c.LONETILDE]}${s[c.XRANGEPLAINLOOSE]}$`),l("LONECARET","(?:\\^)"),l("CARETTRIM",`(\\s*)${s[c.LONECARET]}\\s+`,!0),t.caretTrimReplace="$1^",l("CARET",`^${s[c.LONECARET]}${s[c.XRANGEPLAIN]}$`),l("CARETLOOSE",`^${s[c.LONECARET]}${s[c.XRANGEPLAINLOOSE]}$`),l("COMPARATORLOOSE",`^${s[c.GTLT]}\\s*(${s[c.LOOSEPLAIN]})$|^$`),l("COMPARATOR",`^${s[c.GTLT]}\\s*(${s[c.FULLPLAIN]})$|^$`),l("COMPARATORTRIM",`(\\s*)${s[c.GTLT]}\\s*(${s[c.LOOSEPLAIN]}|${s[c.XRANGEPLAIN]})`,!0),t.comparatorTrimReplace="$1$2$3",l("HYPHENRANGE",`^\\s*(${s[c.XRANGEPLAIN]})\\s+-\\s+(${s[c.XRANGEPLAIN]})\\s*$`),l("HYPHENRANGELOOSE",`^\\s*(${s[c.XRANGEPLAINLOOSE]})\\s+-\\s+(${s[c.XRANGEPLAINLOOSE]})\\s*$`),l("STAR","(<|>)?=?\\s*\\*"),l("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$"),l("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")},89589:
/*!******************************************************!*\
  !*** ./node_modules/webext-redux/lib/alias/alias.js ***!
  \******************************************************/(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(e){return function(){return function(t){return function(r){var n=e[r.type];return t(n?n(r):r)}}}}},17910:
/*!**********************************************************!*\
  !*** ./node_modules/webext-redux/lib/constants/index.js ***!
  \**********************************************************/(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DEFAULT_PORT_NAME=t.PATCH_STATE_TYPE=t.STATE_TYPE=t.DISPATCH_TYPE=void 0;t.DISPATCH_TYPE="chromex.dispatch";t.STATE_TYPE="chromex.state";t.PATCH_STATE_TYPE="chromex.patch_state";t.DEFAULT_PORT_NAME="chromex.port_name"},17045:
/*!************************************************!*\
  !*** ./node_modules/webext-redux/lib/index.js ***!
  \************************************************/(e,t,r)=>{"use strict";var n=s(r(/*! ./store/Store */76863)),i=s(r(/*! ./store/applyMiddleware */44600)),o=s(r(/*! ./wrap-store/wrapStore */18553)),a=s(r(/*! ./alias/alias */89589));function s(e){return e&&e.__esModule?e:{default:e}}},45277:
/*!********************************************************!*\
  !*** ./node_modules/webext-redux/lib/serialization.js ***!
  \********************************************************/(e,t)=>{"use strict";function r(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(t,"__esModule",{value:!0}),t.withSerializer=t.withDeserializer=t.noop=void 0;var n=function(e){return e};t.noop=n;var i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n;return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){r(e,t,n[t])}))}return e}({},e,e.payload?{payload:t(e.payload)}:{})};t.withDeserializer=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n;return function(t){return function(r,o){return t(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n,r=arguments.length>2?arguments[2]:void 0;return r?function(n){for(var o=arguments.length,a=new Array(o>1?o-1:0),s=1;s<o;s++)a[s-1]=arguments[s];return r.apply(void 0,[n].concat(a))?e.apply(void 0,[i(n,t)].concat(a)):e.apply(void 0,[n].concat(a))}:function(r){for(var n=arguments.length,o=new Array(n>1?n-1:0),a=1;a<n;a++)o[a-1]=arguments[a];return e.apply(void 0,[i(r,t)].concat(o))}}(r,e,o))}}};t.withSerializer=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n;return function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return function(){for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];if(o.length<=r)throw new Error("Message in request could not be serialized. "+"Expected message in position ".concat(r," but only received ").concat(o.length," args."));return o[r]=i(o[r],e),t.apply(void 0,o)}}}},76863:
/*!******************************************************!*\
  !*** ./node_modules/webext-redux/lib/store/Store.js ***!
  \******************************************************/(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(r(/*! lodash.assignin */5089)),i=r(/*! ../constants */17910),o=r(/*! ../serialization */45277),a=c(r(/*! ../strategies/shallowDiff/patch */96610)),s=r(/*! ../util */96179);function c(e){return e&&e.__esModule?e:{default:e}}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var l="\nLooks like there is an error in the background page. You might want to inspect your background page for more details.\n",f={portName:i.DEFAULT_PORT_NAME,state:{},extensionId:null,serializer:o.noop,deserializer:o.noop,patchStrategy:a.default},d=function(){function e(){var t=this,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,n=r.portName,a=void 0===n?f.portName:n,c=r.state,u=void 0===c?f.state:c,l=r.extensionId,d=void 0===l?f.extensionId:l,p=r.serializer,h=void 0===p?f.serializer:p,g=r.deserializer,m=void 0===g?f.deserializer:g,v=r.patchStrategy,b=void 0===v?f.patchStrategy:v;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),!a)throw new Error("portName is required in options");if("function"!=typeof h)throw new Error("serializer must be a function");if("function"!=typeof m)throw new Error("deserializer must be a function");if("function"!=typeof b)throw new Error("patchStrategy must be one of the included patching strategies or a custom patching function");this.portName=a,this.readyResolved=!1,this.readyPromise=new Promise((function(e){return t.readyResolve=e})),this.browserAPI=(0,s.getBrowserAPI)(),this.extensionId=d,this.port=this.browserAPI.runtime.connect(this.extensionId,{name:a}),this.safetyHandler=this.safetyHandler.bind(this),this.browserAPI.runtime.onMessage&&(this.safetyMessage=this.browserAPI.runtime.onMessage.addListener(this.safetyHandler)),this.serializedPortListener=(0,o.withDeserializer)(m)((function(){var e;return(e=t.port.onMessage).addListener.apply(e,arguments)})),this.serializedMessageSender=(0,o.withSerializer)(h)((function(){var e;return(e=t.browserAPI.runtime).sendMessage.apply(e,arguments)}),1),this.listeners=[],this.state=u,this.patchStrategy=b,this.serializedPortListener((function(e){switch(e.type){case i.STATE_TYPE:t.replaceState(e.payload),t.readyResolved||(t.readyResolved=!0,t.readyResolve());break;case i.PATCH_STATE_TYPE:t.patchState(e.payload)}})),this.dispatch=this.dispatch.bind(this)}var t,r,a;return t=e,r=[{key:"ready",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null!==e?this.readyPromise.then(e):this.readyPromise}},{key:"subscribe",value:function(e){var t=this;return this.listeners.push(e),function(){t.listeners=t.listeners.filter((function(t){return t!==e}))}}},{key:"patchState",value:function(e){this.state=this.patchStrategy(this.state,e),this.listeners.forEach((function(e){return e()}))}},{key:"replaceState",value:function(e){this.state=e,this.listeners.forEach((function(e){return e()}))}},{key:"getState",value:function(){return this.state}},{key:"replaceReducer",value:function(){}},{key:"dispatch",value:function(e){var t=this;return new Promise((function(r,o){t.serializedMessageSender(t.extensionId,{type:i.DISPATCH_TYPE,portName:t.portName,payload:e},null,(function(e){if(e){var i=e.error,a=e.value;if(i){var s=new Error("".concat(l).concat(i));o((0,n.default)(s,i))}else r(a&&a.payload)}else{var c=t.browserAPI.runtime.lastError,u=new Error("".concat(l).concat(c));o((0,n.default)(u,c))}}))}))}},{key:"safetyHandler",value:function(e){"storeReady"===e.action&&e.portName===this.portName&&(this.browserAPI.runtime.onMessage.removeListener(this.safetyHandler),this.readyResolved||(this.readyResolved=!0,this.readyResolve()))}}],r&&u(t.prototype,r),a&&u(t,a),e}();t.default=d},44600:
/*!****************************************************************!*\
  !*** ./node_modules/webext-redux/lib/store/applyMiddleware.js ***!
  \****************************************************************/(e,t)=>{"use strict";function r(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce((function(e,t){return function(){return e(t.apply(void 0,arguments))}}))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];var o=function(){throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},a={getState:e.getState.bind(e),dispatch:function(){return o.apply(void 0,arguments)}};return n=(n||[]).map((function(e){return e(a)})),o=r.apply(void 0,function(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(n))(e.dispatch),e.dispatch=o,e}},79028:
/*!***************************************************************!*\
  !*** ./node_modules/webext-redux/lib/strategies/constants.js ***!
  \***************************************************************/(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DIFF_STATUS_ARRAY_UPDATED=t.DIFF_STATUS_KEYS_UPDATED=t.DIFF_STATUS_REMOVED=t.DIFF_STATUS_UPDATED=void 0;t.DIFF_STATUS_UPDATED="updated";t.DIFF_STATUS_REMOVED="removed";t.DIFF_STATUS_KEYS_UPDATED="updated_keys";t.DIFF_STATUS_ARRAY_UPDATED="updated_array"},33410:
/*!**********************************************************************!*\
  !*** ./node_modules/webext-redux/lib/strategies/shallowDiff/diff.js ***!
  \**********************************************************************/(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=[];return Object.keys(t).forEach((function(i){e[i]!==t[i]&&r.push({key:i,value:t[i],change:n.DIFF_STATUS_UPDATED})})),Object.keys(e).forEach((function(e){t.hasOwnProperty(e)||r.push({key:e,change:n.DIFF_STATUS_REMOVED})})),r};var n=r(/*! ../constants */79028)},96610:
/*!***********************************************************************!*\
  !*** ./node_modules/webext-redux/lib/strategies/shallowDiff/patch.js ***!
  \***********************************************************************/(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=Object.assign({},e);return t.forEach((function(e){var t=e.change,i=e.key,o=e.value;switch(t){case n.DIFF_STATUS_UPDATED:r[i]=o;break;case n.DIFF_STATUS_REMOVED:Reflect.deleteProperty(r,i)}})),r};var n=r(/*! ../constants */79028)},96179:
/*!***********************************************!*\
  !*** ./node_modules/webext-redux/lib/util.js ***!
  \***********************************************/(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getBrowserAPI=function(){var e;try{e=self.chrome||self.browser||browser}catch(t){e=browser}if(!e)throw new Error("Browser API is not present");return e}},18553:
/*!***************************************************************!*\
  !*** ./node_modules/webext-redux/lib/wrap-store/wrapStore.js ***!
  \***************************************************************/(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,i=r(/*! ../constants */17910),o=r(/*! ../serialization */45277),a=r(/*! ../util */96179),s=(n=r(/*! ../strategies/shallowDiff/diff */33410))&&n.__esModule?n:{default:n};var c={portName:i.DEFAULT_PORT_NAME,dispatchResponder:function(e,t){Promise.resolve(e).then((function(e){t({error:null,value:e})})).catch((function(e){console.error("error dispatching result:",e),t({error:e.message,value:null})}))},serializer:o.noop,deserializer:o.noop,diffStrategy:s.default};t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c,r=t.portName,n=void 0===r?c.portName:r,s=t.dispatchResponder,u=void 0===s?c.dispatchResponder:s,l=t.serializer,f=void 0===l?c.serializer:l,d=t.deserializer,p=void 0===d?c.deserializer:d,h=t.diffStrategy,g=void 0===h?c.diffStrategy:h;if(!n)throw new Error("portName is required in options");if("function"!=typeof f)throw new Error("serializer must be a function");if("function"!=typeof p)throw new Error("deserializer must be a function");if("function"!=typeof g)throw new Error("diffStrategy must be one of the included diffing strategies or a custom diff function");var m=(0,a.getBrowserAPI)(),v=function(t,r,o){if(t.type===i.DISPATCH_TYPE&&t.portName===n){var a=Object.assign({},t.payload,{_sender:r}),s=null;try{s=e.dispatch(a)}catch(e){s=Promise.reject(e.message),console.error(e)}return u(s,o),!0}},b=function(t){if(t.name===n){var r=(0,o.withSerializer)(f)((function(){return t.postMessage.apply(t,arguments)})),a=e.getState(),s=e.subscribe((function(){var t=e.getState(),n=g(a,t);n.length&&(a=t,r({type:i.PATCH_STATE_TYPE,payload:n}))}));t.onDisconnect.addListener(s),r({type:i.STATE_TYPE,payload:a})}},E=(0,o.withDeserializer)(p),A=function(e){return e.type===i.DISPATCH_TYPE&&e.portName===n};E((function(){var e;return(e=m.runtime.onMessage).addListener.apply(e,arguments)}))(v,A),m.runtime.onMessageExternal?E((function(){var e;return(e=m.runtime.onMessageExternal).addListener.apply(e,arguments)}))(v,A):console.warn("runtime.onMessageExternal is not supported"),m.runtime.onConnect.addListener(b),m.runtime.onConnectExternal?m.runtime.onConnectExternal.addListener(b):console.warn("runtime.onConnectExternal is not supported"),m.tabs.query({},(function(e){var t=!0,r=!1,i=void 0;try{for(var o,a=e[Symbol.iterator]();!(t=(o=a.next()).done);t=!0){var s=o.value;m.tabs.sendMessage(s.id,{action:"storeReady",portName:n},(function(){chrome.runtime.lastError}))}}catch(e){r=!0,i=e}finally{try{t||null==a.return||a.return()}finally{if(r)throw i}}}))}},93150:
/*!*********************************************************************!*\
  !*** ./node_modules/webextension-polyfill/dist/browser-polyfill.js ***!
  \*********************************************************************/function(e,t){var r,n,i;n=[e],r=function(e){"use strict";if("undefined"==typeof browser||Object.getPrototypeOf(browser)!==Object.prototype){const t="The message port closed before a response was received.",r="Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)",n=()=>{const e={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getBrowserInfo:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(0===Object.keys(e).length)throw new Error("api-metadata.json has not been included in browser-polyfill");class n extends WeakMap{constructor(e,t=void 0){super(t),this.createItem=e}get(e){return this.has(e)||this.set(e,this.createItem(e)),super.get(e)}}const i=e=>e&&"object"==typeof e&&"function"==typeof e.then,o=(e,t)=>(...r)=>{chrome.runtime.lastError?e.reject(chrome.runtime.lastError):t.singleCallbackArg||r.length<=1?e.resolve(r[0]):e.resolve(r)},a=e=>1==e?"argument":"arguments",s=(e,t)=>function(r,...n){if(n.length<t.minArgs)throw new Error(`Expected at least ${t.minArgs} ${a(t.minArgs)} for ${e}(), got ${n.length}`);if(n.length>t.maxArgs)throw new Error(`Expected at most ${t.maxArgs} ${a(t.maxArgs)} for ${e}(), got ${n.length}`);return new Promise(((i,a)=>{if(t.fallbackToNoCallback)try{r[e](...n,o({resolve:i,reject:a},t))}catch(o){console.warn(`${e} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,o),r[e](...n),t.fallbackToNoCallback=!1,t.noCallback=!0,i()}else t.noCallback?(r[e](...n),i()):r[e](...n,o({resolve:i,reject:a},t))}))},c=(e,t,r)=>new Proxy(t,{apply:(t,n,i)=>r.call(n,e,...i)});let u=Function.call.bind(Object.prototype.hasOwnProperty);const l=(e,t={},r={})=>{let n=Object.create(null),i={has:(t,r)=>r in e||r in n,get(i,o,a){if(o in n)return n[o];if(!(o in e))return;let f=e[o];if("function"==typeof f)if("function"==typeof t[o])f=c(e,e[o],t[o]);else if(u(r,o)){let t=s(o,r[o]);f=c(e,e[o],t)}else f=f.bind(e);else{if("object"!=typeof f||null===f||!u(t,o)&&!u(r,o))return Object.defineProperty(n,o,{configurable:!0,enumerable:!0,get:()=>e[o],set(t){e[o]=t}}),f;f=l(f,t[o],r[o])}return n[o]=f,f},set:(t,r,i,o)=>(r in n?n[r]=i:e[r]=i,!0),defineProperty:(e,t,r)=>Reflect.defineProperty(n,t,r),deleteProperty:(e,t)=>Reflect.deleteProperty(n,t)},o=Object.create(e);return new Proxy(o,i)},f=e=>({addListener(t,r,...n){t.addListener(e.get(r),...n)},hasListener:(t,r)=>t.hasListener(e.get(r)),removeListener(t,r){t.removeListener(e.get(r))}});let d=!1;const p=new n((e=>"function"!=typeof e?e:function(t,n,o){let a,s,c=!1,u=new Promise((e=>{a=function(t){d||(console.warn(r,(new Error).stack),d=!0),c=!0,e(t)}}));try{s=e(t,n,a)}catch(e){s=Promise.reject(e)}const l=!0!==s&&i(s);if(!0!==s&&!l&&!c)return!1;const f=e=>{e.then((e=>{o(e)}),(e=>{let t;t=e&&(e instanceof Error||"string"==typeof e.message)?e.message:"An unexpected error occurred",o({__mozWebExtensionPolyfillReject__:!0,message:t})})).catch((e=>{console.error("Failed to send onMessage rejected reply",e)}))};return f(l?s:u),!0})),h=({reject:e,resolve:r},n)=>{chrome.runtime.lastError?chrome.runtime.lastError.message===t?r():e(chrome.runtime.lastError):n&&n.__mozWebExtensionPolyfillReject__?e(new Error(n.message)):r(n)},g=(e,t,r,...n)=>{if(n.length<t.minArgs)throw new Error(`Expected at least ${t.minArgs} ${a(t.minArgs)} for ${e}(), got ${n.length}`);if(n.length>t.maxArgs)throw new Error(`Expected at most ${t.maxArgs} ${a(t.maxArgs)} for ${e}(), got ${n.length}`);return new Promise(((e,t)=>{const i=h.bind(null,{resolve:e,reject:t});n.push(i),r.sendMessage(...n)}))},m={runtime:{onMessage:f(p),onMessageExternal:f(p),sendMessage:g.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:g.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},v={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return e.privacy={network:{networkPredictionEnabled:v,webRTCIPHandlingPolicy:v},services:{passwordSavingEnabled:v},websites:{hyperlinkAuditingEnabled:v,referrersEnabled:v}},l(chrome,m,e)};e.exports=n()}else e.exports=browser},void 0===(i="function"==typeof r?r.apply(t,n):r)||(e.exports=i)},11657:
/*!**************************************************************************!*\
  !*** ./node_modules/@firebase/app/dist/esm/index.esm2017.js + 2 modules ***!
  \**************************************************************************/(e,t,r)=>{"use strict";r.d(t,{qX:()=>k,Xd:()=>x,Mq:()=>B,ZF:()=>D,KN:()=>j});var n=r(8463),i=r(53333),o=r(74444);const a=(e,t)=>t.some((t=>e instanceof t));let s,c;const u=new WeakMap,l=new WeakMap,f=new WeakMap,d=new WeakMap,p=new WeakMap;let h={get(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return l.get(e);if("objectStoreNames"===t)return e.objectStoreNames||f.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return v(e[t])},set:(e,t,r)=>(e[t]=r,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function g(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(b(this),t),v(u.get(this))}:function(...t){return v(e.apply(b(this),t))}:function(t,...r){const n=e.call(b(this),t,...r);return f.set(n,t.sort?t.sort():[t]),v(n)}}function m(e){return"function"==typeof e?g(e):(e instanceof IDBTransaction&&function(e){if(l.has(e))return;const t=new Promise(((t,r)=>{const n=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{t(),n()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)}));l.set(e,t)}(e),a(e,s||(s=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,h):e)}function v(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,r)=>{const n=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{t(v(e.result)),n()},o=()=>{r(e.error),n()};e.addEventListener("success",i),e.addEventListener("error",o)}));return t.then((t=>{t instanceof IDBCursor&&u.set(t,e)})).catch((()=>{})),p.set(t,e),t}(e);if(d.has(e))return d.get(e);const t=m(e);return t!==e&&(d.set(e,t),p.set(t,e)),t}const b=e=>p.get(e);const E=["get","getKey","getAll","getAllKeys","count"],A=["put","add","delete","clear"],y=new Map;function _(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(y.get(t))return y.get(t);const r=t.replace(/FromIndex$/,""),n=t!==r,i=A.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!i&&!E.includes(r))return;const o=async function(e,...t){const o=this.transaction(e,i?"readwrite":"readonly");let a=o.store;return n&&(a=a.index(t.shift())),(await Promise.all([a[r](...t),i&&o.done]))[0]};return y.set(t,o),o}h=(e=>({...e,get:(t,r,n)=>_(t,r)||e.get(t,r,n),has:(t,r)=>!!_(t,r)||e.has(t,r)}))(h);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class w{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const S="@firebase/app",T="0.9.13",I=new i.Yd("@firebase/app"),O="[DEFAULT]",P={[S]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},N=new Map,M=new Map;function R(e,t){try{e.container.addComponent(t)}catch(r){I.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,r)}}function x(e){const t=e.name;if(M.has(t))return I.debug(`There were multiple attempts to register component ${t}.`),!1;M.set(t,e);for(const t of N.values())R(t,e);return!0}function k(e,t){const r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const C={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},L=new o.LL("app","Firebase",C);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class F{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new n.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw L.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(e,t={}){let r=e;if("object"!=typeof t){t={name:t}}const i=Object.assign({name:O,automaticDataCollectionEnabled:!1},t),a=i.name;if("string"!=typeof a||!a)throw L.create("bad-app-name",{appName:String(a)});if(r||(r=(0,o.aH)()),!r)throw L.create("no-options");const s=N.get(a);if(s){if((0,o.vZ)(r,s.options)&&(0,o.vZ)(i,s.config))return s;throw L.create("duplicate-app",{appName:a})}const c=new n.H0(a);for(const e of M.values())c.addComponent(e);const u=new F(r,i,c);return N.set(a,u),u}function B(e=O){const t=N.get(e);if(!t&&e===O&&(0,o.aH)())return D();if(!t)throw L.create("no-app",{appName:e});return t}function j(e,t,r){var i;let o=null!==(i=P[e])&&void 0!==i?i:e;r&&(o+=`-${r}`);const a=o.match(/\s|\//),s=t.match(/\s|\//);if(a||s){const e=[`Unable to register library "${o}" with version "${t}":`];return a&&e.push(`library name "${o}" contains illegal characters (whitespace or "/")`),a&&s&&e.push("and"),s&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void I.warn(e.join(" "))}x(new n.wA(`${o}-version`,(()=>({library:o,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const U="firebase-heartbeat-database",$=1,H="firebase-heartbeat-store";let z=null;function G(){return z||(z=function(e,t,{blocked:r,upgrade:n,blocking:i,terminated:o}={}){const a=indexedDB.open(e,t),s=v(a);return n&&a.addEventListener("upgradeneeded",(e=>{n(v(a.result),e.oldVersion,e.newVersion,v(a.transaction),e)})),r&&a.addEventListener("blocked",(e=>r(e.oldVersion,e.newVersion,e))),s.then((e=>{o&&e.addEventListener("close",(()=>o())),i&&e.addEventListener("versionchange",(e=>i(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),s}(U,$,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(H)}}).catch((e=>{throw L.create("idb-open",{originalErrorMessage:e.message})}))),z}async function V(e,t){try{const r=(await G()).transaction(H,"readwrite"),n=r.objectStore(H);await n.put(t,W(e)),await r.done}catch(e){if(e instanceof o.ZR)I.warn(e.message);else{const t=L.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});I.warn(t.message)}}}function W(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new X(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=q();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=q(),{heartbeatsToSend:t,unsentEntries:r}=function(e,t=1024){const r=[];let n=e.slice();for(const i of e){const e=r.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),Y(r)>t){e.dates.pop();break}}else if(r.push({agent:i.agent,dates:[i.date]}),Y(r)>t){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}(this._heartbeatsCache.heartbeats),n=(0,o.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),n}}function q(){return(new Date).toISOString().substring(0,10)}class X{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,o.hl)()&&(0,o.eu)().then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{const t=await G();return await t.transaction(H).objectStore(H).get(W(e))}catch(e){if(e instanceof o.ZR)I.warn(e.message);else{const t=L.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});I.warn(t.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return V(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return V(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}}}function Y(e){return(0,o.L)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Z;Z="",x(new n.wA("platform-logger",(e=>new w(e)),"PRIVATE")),x(new n.wA("heartbeat",(e=>new K(e)),"PRIVATE")),j(S,T,Z),j(S,T,"esm2017"),j("fire-js","")},8463:
/*!********************************************************************!*\
  !*** ./node_modules/@firebase/component/dist/esm/index.esm2017.js ***!
  \********************************************************************/(e,t,r)=>{"use strict";r.d(t,{wA:()=>i,H0:()=>s});var n=r(/*! @firebase/util */74444);class i{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new n.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&e.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(r)&&!this.shouldAutoInitialize()){if(n)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:r})}catch(e){if(n)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:o})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});t.resolve(e)}catch(e){}}}}clearInstance(e=o){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=o){return this.instances.has(e)}getOptions(e=o){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const n=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[e,t]of this.instancesDeferred.entries()){r===this.normalizeInstanceIdentifier(e)&&t.resolve(n)}return n}onInit(e,t){var r;const n=this.normalizeInstanceIdentifier(t),i=null!==(r=this.onInitCallbacks.get(n))&&void 0!==r?r:new Set;i.add(e),this.onInitCallbacks.set(n,i);const o=this.instances.get(n);return o&&e(o,n),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const n of r)try{n(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:(n=e,n===o?void 0:n),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch(e){}var n;return r||null}normalizeInstanceIdentifier(e=o){return this.component?this.component.multipleInstances?e:o:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class s{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new a(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},53333:
/*!*****************************************************************!*\
  !*** ./node_modules/@firebase/logger/dist/esm/index.esm2017.js ***!
  \*****************************************************************/(e,t,r)=>{"use strict";r.d(t,{in:()=>i,Yd:()=>u});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const n=[];var i;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(i||(i={}));const o={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},a=i.INFO,s={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...r)=>{if(t<e.logLevel)return;const n=(new Date).toISOString(),i=s[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${n}]  ${e.name}:`,...r)};class u{constructor(e){this.name=e,this._logLevel=a,this._logHandler=c,this._userLogHandler=null,n.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?o[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}},83977:
/*!*********************************************************!*\
  !*** ./node_modules/firebase/app/dist/esm/index.esm.js ***!
  \*********************************************************/(e,t,r)=>{"use strict";r.d(t,{ZF:()=>n.ZF});var n=r(/*! @firebase/app */11657);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,n.KN)("firebase","9.23.0","app")},55038:
/*!*****************************************************************************!*\
  !*** ./node_modules/firebase/performance/dist/esm/index.esm.js + 4 modules ***!
  \*****************************************************************************/(e,t,r)=>{"use strict";r.d(t,{r:()=>St,g4:()=>Tt});var n=r(74444),i=r(53333),o=r(11657),a=r(8463);const s=(e,t)=>t.some((t=>e instanceof t));let c,u;const l=new WeakMap,f=new WeakMap,d=new WeakMap,p=new WeakMap,h=new WeakMap;let g={get(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return f.get(e);if("objectStoreNames"===t)return e.objectStoreNames||d.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return b(e[t])},set:(e,t,r)=>(e[t]=r,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function m(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(u||(u=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(E(this),t),b(l.get(this))}:function(...t){return b(e.apply(E(this),t))}:function(t,...r){const n=e.call(E(this),t,...r);return d.set(n,t.sort?t.sort():[t]),b(n)}}function v(e){return"function"==typeof e?m(e):(e instanceof IDBTransaction&&function(e){if(f.has(e))return;const t=new Promise(((t,r)=>{const n=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{t(),n()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)}));f.set(e,t)}(e),s(e,c||(c=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,g):e)}function b(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,r)=>{const n=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{t(b(e.result)),n()},o=()=>{r(e.error),n()};e.addEventListener("success",i),e.addEventListener("error",o)}));return t.then((t=>{t instanceof IDBCursor&&l.set(t,e)})).catch((()=>{})),h.set(t,e),t}(e);if(p.has(e))return p.get(e);const t=v(e);return t!==e&&(p.set(e,t),h.set(t,e)),t}const E=e=>h.get(e);const A=["get","getKey","getAll","getAllKeys","count"],y=["put","add","delete","clear"],_=new Map;function w(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(_.get(t))return _.get(t);const r=t.replace(/FromIndex$/,""),n=t!==r,i=y.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!i&&!A.includes(r))return;const o=async function(e,...t){const o=this.transaction(e,i?"readwrite":"readonly");let a=o.store;return n&&(a=a.index(t.shift())),(await Promise.all([a[r](...t),i&&o.done]))[0]};return _.set(t,o),o}g=(e=>({...e,get:(t,r,n)=>w(t,r)||e.get(t,r,n),has:(t,r)=>!!w(t,r)||e.has(t,r)}))(g);const S="@firebase/installations",T="0.6.4",I=1e4,O=`w:${T}`,P="FIS_v2",N="https://firebaseinstallations.googleapis.com/v1",M=36e5,R={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},x=new n.LL("installations","Installations",R);function k(e){return e instanceof n.ZR&&e.code.includes("request-failed")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C({projectId:e}){return`${N}/projects/${e}/installations`}function L(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}async function F(e,t){const r=(await t.json()).error;return x.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function D({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function B(e,{refreshToken:t}){const r=D(e);return r.append("Authorization",function(e){return`${P} ${e}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)),r}async function j(e){const t=await e();return t.status>=500&&t.status<600?e():t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function U(e){return new Promise((t=>{setTimeout(t,e)}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const $=/^[cdef][\w-]{21}$/,H="";function z(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const t=function(e){const t=(r=e,btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_"));var r;return t.substr(0,22)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);return $.test(t)?t:H}catch(e){return H}}function G(e){return`${e.appName}!${e.appId}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V=new Map;function W(e,t){const r=G(e);K(r,t),function(e,t){const r=X();r&&r.postMessage({key:e,fid:t});Y()}(r,t)}function K(e,t){const r=V.get(e);if(r)for(const e of r)e(t)}let q=null;function X(){return!q&&"BroadcastChannel"in self&&(q=new BroadcastChannel("[Firebase] FID Change"),q.onmessage=e=>{K(e.data.key,e.data.fid)}),q}function Y(){0===V.size&&q&&(q.close(),q=null)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z="firebase-installations-database",J=1,Q="firebase-installations-store";let ee=null;function te(){return ee||(ee=function(e,t,{blocked:r,upgrade:n,blocking:i,terminated:o}={}){const a=indexedDB.open(e,t),s=b(a);return n&&a.addEventListener("upgradeneeded",(e=>{n(b(a.result),e.oldVersion,e.newVersion,b(a.transaction))})),r&&a.addEventListener("blocked",(()=>r())),s.then((e=>{o&&e.addEventListener("close",(()=>o())),i&&e.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),s}(Z,J,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(Q)}})),ee}async function re(e,t){const r=G(e),n=(await te()).transaction(Q,"readwrite"),i=n.objectStore(Q),o=await i.get(r);return await i.put(t,r),await n.done,o&&o.fid===t.fid||W(e,t.fid),t}async function ne(e){const t=G(e),r=(await te()).transaction(Q,"readwrite");await r.objectStore(Q).delete(t),await r.done}async function ie(e,t){const r=G(e),n=(await te()).transaction(Q,"readwrite"),i=n.objectStore(Q),o=await i.get(r),a=t(o);return void 0===a?await i.delete(r):await i.put(a,r),await n.done,!a||o&&o.fid===a.fid||W(e,a.fid),a}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oe(e){let t;const r=await ie(e.appConfig,(r=>{const n=function(e){const t=e||{fid:z(),registrationStatus:0};return ce(t)}(r),i=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){return{installationEntry:t,registrationPromise:Promise.reject(x.create("app-offline"))}}const r={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},n=async function(e,t){try{const r=await async function({appConfig:e,heartbeatServiceProvider:t},{fid:r}){const n=C(e),i=D(e),o=t.getImmediate({optional:!0});if(o){const e=await o.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}const a={fid:r,authVersion:P,appId:e.appId,sdkVersion:O},s={method:"POST",headers:i,body:JSON.stringify(a)},c=await j((()=>fetch(n,s)));if(c.ok){const e=await c.json();return{fid:e.fid||r,registrationStatus:2,refreshToken:e.refreshToken,authToken:L(e.authToken)}}throw await F("Create Installation",c)}(e,t);return re(e.appConfig,r)}catch(r){throw k(r)&&409===r.customData.serverCode?await ne(e.appConfig):await re(e.appConfig,{fid:t.fid,registrationStatus:0}),r}}(e,r);return{installationEntry:r,registrationPromise:n}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:ae(e)}:{installationEntry:t}}(e,n);return t=i.registrationPromise,i.installationEntry}));return r.fid===H?{installationEntry:await t}:{installationEntry:r,registrationPromise:t}}async function ae(e){let t=await se(e.appConfig);for(;1===t.registrationStatus;)await U(100),t=await se(e.appConfig);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:r}=await oe(e);return r||t}return t}function se(e){return ie(e,(e=>{if(!e)throw x.create("installation-not-found");return ce(e)}))}function ce(e){return 1===(t=e).registrationStatus&&t.registrationTime+I<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}async function ue({appConfig:e,heartbeatServiceProvider:t},r){const n=function(e,{fid:t}){return`${C(e)}/${t}/authTokens:generate`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,r),i=B(e,r),o=t.getImmediate({optional:!0});if(o){const e=await o.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}const a={installation:{sdkVersion:O,appId:e.appId}},s={method:"POST",headers:i,body:JSON.stringify(a)},c=await j((()=>fetch(n,s)));if(c.ok){return L(await c.json())}throw await F("Generate Auth Token",c)}async function le(e,t=!1){let r;const n=await ie(e.appConfig,(n=>{if(!de(n))throw x.create("not-registered");const i=n.authToken;if(!t&&function(e){return 2===e.requestStatus&&!function(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+M}(e)}(i))return n;if(1===i.requestStatus)return r=async function(e,t){let r=await fe(e.appConfig);for(;1===r.authToken.requestStatus;)await U(100),r=await fe(e.appConfig);const n=r.authToken;return 0===n.requestStatus?le(e,t):n}(e,t),n;{if(!navigator.onLine)throw x.create("app-offline");const t=function(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(n);return r=async function(e,t){try{const r=await ue(e,t),n=Object.assign(Object.assign({},t),{authToken:r});return await re(e.appConfig,n),r}catch(r){if(!k(r)||401!==r.customData.serverCode&&404!==r.customData.serverCode){const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await re(e.appConfig,r)}else await ne(e.appConfig);throw r}}(e,t),t}}));return r?await r:n.authToken}function fe(e){return ie(e,(e=>{if(!de(e))throw x.create("not-registered");const t=e.authToken;return 1===(r=t).requestStatus&&r.requestTime+I<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e;var r;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}))}function de(e){return void 0!==e&&2===e.registrationStatus}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function pe(e,t=!1){const r=e;await async function(e){const{registrationPromise:t}=await oe(e);t&&await t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r);return(await le(r,t)).token}function he(e){return x.create("missing-app-config-values",{valueName:e})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ge="installations",me=e=>{const t=e.getProvider("app").getImmediate(),r=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){if(!e||!e.options)throw he("App Configuration");if(!e.name)throw he("App Name");const t=["projectId","apiKey","appId"];for(const r of t)if(!e.options[r])throw he(r);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:r,heartbeatServiceProvider:(0,o.qX)(t,"heartbeat"),_delete:()=>Promise.resolve()}},ve=e=>{const t=e.getProvider("app").getImmediate(),r=(0,o.qX)(t,ge).getImmediate();return{getId:()=>async function(e){const t=e,{installationEntry:r,registrationPromise:n}=await oe(t);return n?n.catch(console.error):le(t).catch(console.error),r.fid}(r),getToken:e=>pe(r,e)}};(0,o.Xd)(new a.wA(ge,me,"PUBLIC")),(0,o.Xd)(new a.wA("installations-internal",ve,"PRIVATE")),(0,o.KN)(S,T),(0,o.KN)(S,T,"esm2017");const be="@firebase/performance",Ee="0.6.4",Ae=Ee,ye="FB-PERF-TRACE-MEASURE",_e="_wt_",we="_fcp",Se="_fid",Te="@firebase/performance/config",Ie="@firebase/performance/configexpire",Oe="Performance",Pe={"trace started":"Trace {$traceName} was started before.","trace stopped":"Trace {$traceName} is not running.","nonpositive trace startTime":"Trace {$traceName} startTime should be positive.","nonpositive trace duration":"Trace {$traceName} duration should be positive.","no window":"Window is not available.","no app id":"App id is not available.","no project id":"Project id is not available.","no api key":"Api key is not available.","invalid cc log":"Attempted to queue invalid cc event","FB not default":"Performance can only start when Firebase app instance is the default one.","RC response not ok":"RC response is not ok","invalid attribute name":"Attribute name {$attributeName} is invalid.","invalid attribute value":"Attribute value {$attributeValue} is invalid.","invalid custom metric name":"Custom metric name {$customMetricName} is invalid","invalid String merger input":"Input for String merger is invalid, contact support team to resolve.","already initialized":"initializePerformance() has already been called with different options. To avoid this error, call initializePerformance() with the same options as when it was originally called, or call getPerformance() to return the already initialized instance."},Ne=new n.LL("performance",Oe,Pe),Me=new i.Yd(Oe);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Re,xe,ke,Ce;Me.logLevel=i.in.INFO;class Le{constructor(e){if(this.window=e,!e)throw Ne.create("no window");this.performance=e.performance,this.PerformanceObserver=e.PerformanceObserver,this.windowLocation=e.location,this.navigator=e.navigator,this.document=e.document,this.navigator&&this.navigator.cookieEnabled&&(this.localStorage=e.localStorage),e.perfMetrics&&e.perfMetrics.onFirstInputDelay&&(this.onFirstInputDelay=e.perfMetrics.onFirstInputDelay)}getUrl(){return this.windowLocation.href.split("?")[0]}mark(e){this.performance&&this.performance.mark&&this.performance.mark(e)}measure(e,t,r){this.performance&&this.performance.measure&&this.performance.measure(e,t,r)}getEntriesByType(e){return this.performance&&this.performance.getEntriesByType?this.performance.getEntriesByType(e):[]}getEntriesByName(e){return this.performance&&this.performance.getEntriesByName?this.performance.getEntriesByName(e):[]}getTimeOrigin(){return this.performance&&(this.performance.timeOrigin||this.performance.timing.navigationStart)}requiredApisAvailable(){return fetch&&Promise&&(0,n.zI)()?!!(0,n.hl)()||(Me.info("IndexedDB is not supported by current browswer"),!1):(Me.info("Firebase Performance cannot start if browser does not support fetch and Promise or cookie is disabled."),!1)}setupObserver(e,t){if(!this.PerformanceObserver)return;new this.PerformanceObserver((e=>{for(const r of e.getEntries())t(r)})).observe({entryTypes:[e]})}static getInstance(){return void 0===Re&&(Re=new Le(xe)),Re}}function Fe(){return ke}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function De(e,t){const r=e.length-t.length;if(r<0||r>1)throw Ne.create("invalid String merger input");const n=[];for(let r=0;r<e.length;r++)n.push(e.charAt(r)),t.length>r&&n.push(t.charAt(r));return n.join("")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(){this.instrumentationEnabled=!0,this.dataCollectionEnabled=!0,this.loggingEnabled=!1,this.tracesSamplingRate=1,this.networkRequestsSamplingRate=1,this.logEndPointUrl="https://firebaselogging.googleapis.com/v0cc/log?format=json_proto",this.flTransportEndpointUrl=De("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),this.transportKey=De("AzSC8r6ReiGqFMyfvgow","Iayx0u-XT3vksVM-pIV"),this.logSource=462,this.logTraceAfterSampling=!1,this.logNetworkAfterSampling=!1,this.configTimeToLive=12}getFlTransportFullUrl(){return this.flTransportEndpointUrl.concat("?key=",this.transportKey)}static getInstance(){return void 0===Ce&&(Ce=new Be),Ce}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var je;!function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.VISIBLE=1]="VISIBLE",e[e.HIDDEN=2]="HIDDEN"}(je||(je={}));const Ue=["firebase_","google_","ga_"],$e=new RegExp("^[a-zA-Z]\\w*$");function He(){const e=Le.getInstance().navigator;return(null==e?void 0:e.serviceWorker)?e.serviceWorker.controller?2:3:1}function ze(){switch(Le.getInstance().document.visibilityState){case"visible":return je.VISIBLE;case"hidden":return je.HIDDEN;default:return je.UNKNOWN}}function Ge(){const e=Le.getInstance().navigator.connection;switch(e&&e.effectiveType){case"slow-2g":return 1;case"2g":return 2;case"3g":return 3;case"4g":return 4;default:return 0}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ve(e){var t;const r=null===(t=e.options)||void 0===t?void 0:t.appId;if(!r)throw Ne.create("no app id");return r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const We="0.0.1",Ke={loggingEnabled:!0},qe="FIREBASE_INSTALLATIONS_AUTH";function Xe(e,t){const r=function(){const e=Le.getInstance().localStorage;if(!e)return;const t=e.getItem(Ie);if(!(t&&(r=t,Number(r)>Date.now())))return;var r;const n=e.getItem(Te);if(!n)return;try{return JSON.parse(n)}catch(e){return}}();return r?(Ze(r),Promise.resolve()):function(e,t){return function(e){const t=e.getToken();return t.then((e=>{})),t}(e.installations).then((r=>{const n=function(e){var t;const r=null===(t=e.options)||void 0===t?void 0:t.projectId;if(!r)throw Ne.create("no project id");return r}(e.app),i=function(e){var t;const r=null===(t=e.options)||void 0===t?void 0:t.apiKey;if(!r)throw Ne.create("no api key");return r}(e.app),o=new Request(`https://firebaseremoteconfig.googleapis.com/v1/projects/${n}/namespaces/fireperf:fetch?key=${i}`,{method:"POST",headers:{Authorization:`${qe} ${r}`},body:JSON.stringify({app_instance_id:t,app_instance_id_token:r,app_id:Ve(e.app),app_version:Ae,sdk_version:We})});return fetch(o).then((e=>{if(e.ok)return e.json();throw Ne.create("RC response not ok")}))})).catch((()=>{Me.info(Ye)}))}(e,t).then(Ze).then((e=>function(e){const t=Le.getInstance().localStorage;if(!e||!t)return;t.setItem(Te,JSON.stringify(e)),t.setItem(Ie,String(Date.now()+60*Be.getInstance().configTimeToLive*60*1e3))}(e)),(()=>{}))}const Ye="Could not fetch config, will use default configs";function Ze(e){if(!e)return e;const t=Be.getInstance(),r=e.entries||{};return void 0!==r.fpr_enabled?t.loggingEnabled="true"===String(r.fpr_enabled):t.loggingEnabled=Ke.loggingEnabled,r.fpr_log_source?t.logSource=Number(r.fpr_log_source):Ke.logSource&&(t.logSource=Ke.logSource),r.fpr_log_endpoint_url?t.logEndPointUrl=r.fpr_log_endpoint_url:Ke.logEndPointUrl&&(t.logEndPointUrl=Ke.logEndPointUrl),r.fpr_log_transport_key?t.transportKey=r.fpr_log_transport_key:Ke.transportKey&&(t.transportKey=Ke.transportKey),void 0!==r.fpr_vc_network_request_sampling_rate?t.networkRequestsSamplingRate=Number(r.fpr_vc_network_request_sampling_rate):void 0!==Ke.networkRequestsSamplingRate&&(t.networkRequestsSamplingRate=Ke.networkRequestsSamplingRate),void 0!==r.fpr_vc_trace_sampling_rate?t.tracesSamplingRate=Number(r.fpr_vc_trace_sampling_rate):void 0!==Ke.tracesSamplingRate&&(t.tracesSamplingRate=Ke.tracesSamplingRate),t.logTraceAfterSampling=Je(t.tracesSamplingRate),t.logNetworkAfterSampling=Je(t.networkRequestsSamplingRate),e}function Je(e){return Math.random()<=e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qe,et=1;function tt(e){return et=2,Qe=Qe||function(e){return function(){const e=Le.getInstance().document;return new Promise((t=>{if(e&&"complete"!==e.readyState){const r=()=>{"complete"===e.readyState&&(e.removeEventListener("readystatechange",r),t())};e.addEventListener("readystatechange",r)}else t()}))}().then((()=>function(e){const t=e.getId();return t.then((e=>{ke=e})),t}(e.installations))).then((t=>Xe(e,t))).then((()=>rt()),(()=>rt()))}(e),Qe}function rt(){et=3}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nt=1e4,it=3,ot=1e3;let at,st=it,ct=[],ut=!1;function lt(e){setTimeout((()=>{if(0!==st)return ct.length?void function(){const e=ct.splice(0,ot),t=e.map((e=>({source_extension_json_proto3:e.message,event_time_ms:String(e.eventTime)})));(function(e,t){return function(e){const t=Be.getInstance().getFlTransportFullUrl();return fetch(t,{method:"POST",body:JSON.stringify(e)})}(e).then((e=>(e.ok||Me.info("Call to Firebase backend failed."),e.json()))).then((e=>{const r=Number(e.nextRequestWaitMillis);let n=nt;isNaN(r)||(n=Math.max(r,n));const i=e.logResponseDetails;Array.isArray(i)&&i.length>0&&"RETRY_REQUEST_LATER"===i[0].responseAction&&(ct=[...t,...ct],Me.info("Retry transport request later.")),st=it,lt(n)}))})({request_time_ms:String(Date.now()),client_info:{client_type:1,js_client_info:{}},log_source:Be.getInstance().logSource,log_event:t},e).catch((()=>{ct=[...e,...ct],st--,Me.info(`Tries left: ${st}.`),lt(nt)}))}():lt(nt)}),e)}function ft(e){return(...t)=>{!function(e){if(!e.eventTime||!e.message)throw Ne.create("invalid cc log");ct=[...ct,e]}({message:e(...t),eventTime:Date.now()})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(e,t){at||(at=ft(gt)),at(e,t)}function pt(e){const t=Be.getInstance();!t.instrumentationEnabled&&e.isAuto||(t.dataCollectionEnabled||e.isAuto)&&Le.getInstance().requiredApisAvailable()&&(e.isAuto&&ze()!==je.VISIBLE||(3===et?ht(e):tt(e.performanceController).then((()=>ht(e)),(()=>ht(e)))))}function ht(e){if(!Fe())return;const t=Be.getInstance();t.loggingEnabled&&t.logTraceAfterSampling&&setTimeout((()=>dt(e,1)),0)}function gt(e,t){return 0===t?function(e){const t={url:e.url,http_method:e.httpMethod||0,http_response_code:200,response_payload_bytes:e.responsePayloadBytes,client_start_time_us:e.startTimeUs,time_to_response_initiated_us:e.timeToResponseInitiatedUs,time_to_response_completed_us:e.timeToResponseCompletedUs},r={application_info:mt(e.performanceController.app),network_request_metric:t};return JSON.stringify(r)}(e):function(e){const t={name:e.name,is_auto:e.isAuto,client_start_time_us:e.startTimeUs,duration_us:e.durationUs};0!==Object.keys(e.counters).length&&(t.counters=e.counters);const r=e.getAttributes();0!==Object.keys(r).length&&(t.custom_attributes=r);const n={application_info:mt(e.performanceController.app),trace_metric:t};return JSON.stringify(n)}(e)}function mt(e){return{google_app_id:Ve(e),app_instance_id:Fe(),web_app_info:{sdk_version:Ae,page_url:Le.getInstance().getUrl(),service_worker_status:He(),visibility_state:ze(),effective_connection_type:Ge()},application_process_state:0}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt=["_fp",we,Se];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bt{constructor(e,t,r=!1,n){this.performanceController=e,this.name=t,this.isAuto=r,this.state=1,this.customAttributes={},this.counters={},this.api=Le.getInstance(),this.randomId=Math.floor(1e6*Math.random()),this.isAuto||(this.traceStartMark=`FB-PERF-TRACE-START-${this.randomId}-${this.name}`,this.traceStopMark=`FB-PERF-TRACE-STOP-${this.randomId}-${this.name}`,this.traceMeasure=n||`${ye}-${this.randomId}-${this.name}`,n&&this.calculateTraceMetrics())}start(){if(1!==this.state)throw Ne.create("trace started",{traceName:this.name});this.api.mark(this.traceStartMark),this.state=2}stop(){if(2!==this.state)throw Ne.create("trace stopped",{traceName:this.name});this.state=3,this.api.mark(this.traceStopMark),this.api.measure(this.traceMeasure,this.traceStartMark,this.traceStopMark),this.calculateTraceMetrics(),pt(this)}record(e,t,r){if(e<=0)throw Ne.create("nonpositive trace startTime",{traceName:this.name});if(t<=0)throw Ne.create("nonpositive trace duration",{traceName:this.name});if(this.durationUs=Math.floor(1e3*t),this.startTimeUs=Math.floor(1e3*e),r&&r.attributes&&(this.customAttributes=Object.assign({},r.attributes)),r&&r.metrics)for(const e of Object.keys(r.metrics))isNaN(Number(r.metrics[e]))||(this.counters[e]=Math.floor(Number(r.metrics[e])));pt(this)}incrementMetric(e,t=1){void 0===this.counters[e]?this.putMetric(e,t):this.putMetric(e,this.counters[e]+t)}putMetric(e,t){if(r=e,n=this.name,0===r.length||r.length>100||!(n&&n.startsWith(_e)&&vt.indexOf(r)>-1)&&r.startsWith("_"))throw Ne.create("invalid custom metric name",{customMetricName:e});var r,n;this.counters[e]=function(e){const t=Math.floor(e);return t<e&&Me.info(`Metric value should be an Integer, setting the value as : ${t}.`),t}(null!=t?t:0)}getMetric(e){return this.counters[e]||0}putAttribute(e,t){const r=!(0===(n=e).length||n.length>40||Ue.some((e=>n.startsWith(e)))||!n.match($e));var n;const i=function(e){return 0!==e.length&&e.length<=100}(t);if(r&&i)this.customAttributes[e]=t;else{if(!r)throw Ne.create("invalid attribute name",{attributeName:e});if(!i)throw Ne.create("invalid attribute value",{attributeValue:t})}}getAttribute(e){return this.customAttributes[e]}removeAttribute(e){void 0!==this.customAttributes[e]&&delete this.customAttributes[e]}getAttributes(){return Object.assign({},this.customAttributes)}setStartTime(e){this.startTimeUs=e}setDuration(e){this.durationUs=e}calculateTraceMetrics(){const e=this.api.getEntriesByName(this.traceMeasure),t=e&&e[0];t&&(this.durationUs=Math.floor(1e3*t.duration),this.startTimeUs=Math.floor(1e3*(t.startTime+this.api.getTimeOrigin())))}static createOobTrace(e,t,r,n){const i=Le.getInstance().getUrl();if(!i)return;const o=new bt(e,_e+i,!0),a=Math.floor(1e3*Le.getInstance().getTimeOrigin());o.setStartTime(a),t&&t[0]&&(o.setDuration(Math.floor(1e3*t[0].duration)),o.putMetric("domInteractive",Math.floor(1e3*t[0].domInteractive)),o.putMetric("domContentLoadedEventEnd",Math.floor(1e3*t[0].domContentLoadedEventEnd)),o.putMetric("loadEventEnd",Math.floor(1e3*t[0].loadEventEnd)));if(r){const e=r.find((e=>"first-paint"===e.name));e&&e.startTime&&o.putMetric("_fp",Math.floor(1e3*e.startTime));const t=r.find((e=>"first-contentful-paint"===e.name));t&&t.startTime&&o.putMetric(we,Math.floor(1e3*t.startTime)),n&&o.putMetric(Se,Math.floor(1e3*n))}pt(o)}static createUserTimingTrace(e,t){pt(new bt(e,t,!1,t))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(e,t){const r=t;if(!r||void 0===r.responseStart)return;const n=Le.getInstance().getTimeOrigin(),i=Math.floor(1e3*(r.startTime+n)),o=r.responseStart?Math.floor(1e3*(r.responseStart-r.startTime)):void 0,a=Math.floor(1e3*(r.responseEnd-r.startTime));!function(e){const t=Be.getInstance();if(!t.instrumentationEnabled)return;const r=e.url,n=t.logEndPointUrl.split("?")[0],i=t.flTransportEndpointUrl.split("?")[0];r!==n&&r!==i&&t.loggingEnabled&&t.logNetworkAfterSampling&&setTimeout((()=>dt(e,0)),0)}({performanceController:e,url:r.name&&r.name.split("?")[0],responsePayloadBytes:r.transferSize,startTimeUs:i,timeToResponseInitiatedUs:o,timeToResponseCompletedUs:a})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At=5e3;function yt(e){Fe()&&(setTimeout((()=>function(e){const t=Le.getInstance(),r=t.getEntriesByType("navigation"),n=t.getEntriesByType("paint");if(t.onFirstInputDelay){let i=setTimeout((()=>{bt.createOobTrace(e,r,n),i=void 0}),At);t.onFirstInputDelay((t=>{i&&(clearTimeout(i),bt.createOobTrace(e,r,n,t))}))}else bt.createOobTrace(e,r,n)}(e)),0),setTimeout((()=>function(e){const t=Le.getInstance(),r=t.getEntriesByType("resource");for(const t of r)Et(e,t);t.setupObserver("resource",(t=>Et(e,t)))}(e)),0),setTimeout((()=>function(e){const t=Le.getInstance(),r=t.getEntriesByType("measure");for(const t of r)_t(e,t);t.setupObserver("measure",(t=>_t(e,t)))}(e)),0))}function _t(e,t){const r=t.name;r.substring(0,ye.length)!==ye&&bt.createUserTimingTrace(e,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e,t){this.app=e,this.installations=t,this.initialized=!1}_init(e){this.initialized||(void 0!==(null==e?void 0:e.dataCollectionEnabled)&&(this.dataCollectionEnabled=e.dataCollectionEnabled),void 0!==(null==e?void 0:e.instrumentationEnabled)&&(this.instrumentationEnabled=e.instrumentationEnabled),Le.getInstance().requiredApisAvailable()?(0,n.eu)().then((e=>{e&&(ut||(lt(5500),ut=!0),tt(this).then((()=>yt(this)),(()=>yt(this))),this.initialized=!0)})).catch((e=>{Me.info(`Environment doesn't support IndexedDB: ${e}`)})):Me.info('Firebase Performance cannot start if the browser does not support "Fetch" and "Promise", or cookies are disabled.'))}set instrumentationEnabled(e){Be.getInstance().instrumentationEnabled=e}get instrumentationEnabled(){return Be.getInstance().instrumentationEnabled}set dataCollectionEnabled(e){Be.getInstance().dataCollectionEnabled=e}get dataCollectionEnabled(){return Be.getInstance().dataCollectionEnabled}}function St(e=(0,o.Mq)()){e=(0,n.m9)(e);return(0,o.qX)(e,"performance").getImmediate()}function Tt(e,t){return e=(0,n.m9)(e),new bt(e,t)}const It=(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),n=e.getProvider("installations-internal").getImmediate();if("[DEFAULT]"!==r.name)throw Ne.create("FB not default");if("undefined"==typeof window)throw Ne.create("no window");!function(e){xe=e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(window);const i=new wt(r,n);return i._init(t),i};(0,o.Xd)(new a.wA("performance",It,"PUBLIC")),(0,o.KN)(be,Ee),(0,o.KN)(be,Ee,"esm2017")},47776:
/*!*****************************!*\
  !*** ./env/production.json ***!
  \*****************************/e=>{"use strict";e.exports=JSON.parse('{"URL_SIGN_UP":"/cashback-button/success-signup","URL_AFTER_INSTALL":"/shopback-button-success-install","URL_COUNTRY_CODE":"https://api.shopback.sg/whale/cc","API_HOST_XX":{"COM":"api.shopback.com","SG":"api.shopback.sg","MY":"api.shopback.my","PH":"api.shopback.ph","ID":"api.shopback.co.id","IN":"api.shopback.in","TW":"api.shopback.com.tw","AU":"api.shopback.com.au","TH":"api.shopback.co.th","KR":"api.shopback.co.kr","HK":"api.shopback.com.hk","DE":"api.shopback.de"},"SB_WEBSITE_XX":{"COM":"www.shopback.com","SG":"www.shopback.sg","MY":"www.shopback.my","PH":"www.shopback.ph","ID":"www.shopback.co.id","TW":"www.shopback.com.tw","AU":"www.shopback.com.au","TH":"www.shopback.co.th","KR":"www.shopback.co.kr","HK":"www.shopback.com.hk","DE":"www.shopback.de"},"EXTENSION_STORES":{"CHROME":"https://chrome.google.com/webstore/detail/shopback-button-cashback/djjjmdgomejlopjnccoejdhgjmiappap","FIREFOX":"https://addons.mozilla.org/en-US/firefox/addon/shopback-cashback-button","EDGE":"https://microsoftedge.microsoft.com/addons/detail/shopback-button-cashbac/mppnmimhlcolakeoadpehdjljppkmfda"},"HELP_CENTER":{"SG":"https://support.shopback.sg/hc/en-gb/articles/360046598194-Install-and-use-ShopBack-Button-browser-extension","MY":"https://support.shopback.my/hc/en-gb/articles/360046977313-Install-and-use-the-ShopBack-Button-browser-extension","PH":"https://support.shopback.ph/hc/en-us/articles/360046598234","ID":"https://support.shopback.co.id/hc/id/articles/4401999894035-Apa-itu-Tombol-ShopBack","TW":"https://support.shopback.com.tw/hc/zh-tw/articles/360046727174-%E7%8F%BE%E9%87%91%E5%9B%9E%E9%A5%8B%E5%B0%8F%E5%B9%AB%E6%89%8B","AU":"https://support.shopback.com.au/hc/en-gb/articles/360046870814-ShopBack-Button-browser-extension","TH":"https://support.shopback.co.th/hc/th/sections/360005934553-%E0%B8%A7%E0%B8%B4%E0%B8%98%E0%B8%B5%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%95%E0%B8%B4%E0%B8%94%E0%B8%95%E0%B8%B1-%E0%B8%87%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B9%83%E0%B8%8A-ShopBack-Button-ShopBack-Extension","KR":"https://support.shopback.co.kr/hc/ko/articles/4401973617299-%EC%83%B5%EB%B0%B1-%EB%B2%84%ED%8A%BC-%ED%99%95%EC%9E%A5-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%A8-%EC%84%A4%EC%B9%98-%EB%B0%8F-%EC%82%AC%EC%9A%A9-%EB%B0%A9%EB%B2%95","HK":"https://support.shopback.com.hk/hc/zh-hk/articles/7430915919891-%E5%AE%89%E8%A3%9D%E5%8F%8A%E4%BD%BF%E7%94%A8ShopBack%E5%B0%8F%E5%B9%AB%E6%89%8B","DE":"https://support.shopback.de/hc/de/articles/15928463001107-Installieren-und-verwenden-Sie-die-ShopBack-Button-Browsererweiterung"},"SAFARI_EXTENSION_HELP_CENTER_PAGE":{"SG":"https://support.shopback.sg/hc/en-gb","MY":"https://support.shopback.my/hc/en-gb","PH":"https://support.shopback.ph/hc/en-us","ID":"https://support.shopback.co.id/hc/id","TW":"https://support.shopback.com.tw/hc/zh-tw/articles/360046727174","AU":"https://support.shopback.com.au/hc/en-gb","TH":"https://support.shopback.co.th/hc/th","KR":"https://support.shopback.co.kr/hc/ko-kr","HK":"https://support.shopback.com.hk/hc/zh-hk","DE":"https://support.shopback.de/hc/de"},"POST_INSTALL_TOOLTIP_IMG_URL":{"COM":"https://cloud.shopback.com/image/upload/v1669866371/extension/Extension%20Post%20Installation%20Success-Install%20illustration%20-%20Sept2022/Post%20Installation%20GIF/EN.gif","SG":"https://cloud.shopback.com/image/upload/v1669866371/extension/Extension%20Post%20Installation%20Success-Install%20illustration%20-%20Sept2022/Post%20Installation%20GIF/EN.gif","MY":"https://cloud.shopback.com/image/upload/v1669866371/extension/Extension%20Post%20Installation%20Success-Install%20illustration%20-%20Sept2022/Post%20Installation%20GIF/EN.gif","PH":"https://cloud.shopback.com/image/upload/v1669866371/extension/Extension%20Post%20Installation%20Success-Install%20illustration%20-%20Sept2022/Post%20Installation%20GIF/EN.gif","ID":"https://cloud.shopback.com/image/upload/v1669866371/extension/Extension%20Post%20Installation%20Success-Install%20illustration%20-%20Sept2022/Post%20Installation%20GIF/ID.gif","IN":"https://cloud.shopback.com/image/upload/v1669866371/extension/Extension%20Post%20Installation%20Success-Install%20illustration%20-%20Sept2022/Post%20Installation%20GIF/EN.gif","TW":"https://cloud.shopback.com/image/upload/v1669866372/extension/Extension%20Post%20Installation%20Success-Install%20illustration%20-%20Sept2022/Post%20Installation%20GIF/TW.gif","AU":"https://cloud.shopback.com/image/upload/v1669866371/extension/Extension%20Post%20Installation%20Success-Install%20illustration%20-%20Sept2022/Post%20Installation%20GIF/EN.gif","TH":"https://cloud.shopback.com/image/upload/v1669866372/extension/Extension%20Post%20Installation%20Success-Install%20illustration%20-%20Sept2022/Post%20Installation%20GIF/TH.gif","KR":"https://cloud.shopback.com/image/upload/v1669866371/extension/Extension%20Post%20Installation%20Success-Install%20illustration%20-%20Sept2022/Post%20Installation%20GIF/KR.gif","HK":"https://cloud.shopback.com/image/upload/v1669866371/extension/Extension%20Post%20Installation%20Success-Install%20illustration%20-%20Sept2022/Post%20Installation%20GIF/HK.gif","DE":"https://cloud.shopback.com/image/upload/v1683121648/extension/%5BDE%5D%20Assets/DE_4.gif"},"ALI_EXPRESS_NAVIGATOR_QUESTION_MARK_URL":{"SG":"https://www.shopback.sg/aliexpress-button-guide","MY":"https://www.shopback.my/aliexpress-button-guide","AU":"https://www.shopback.com.au/aliexpress-button-guide","ID":"https://www.shopback.co.id/aliexpress-button-guide","TW":"https://www.shopback.com.tw/aliexpress-button-guide","TH":"https://www.shopback.co.th/aliexpress-button-guide","KR":"https://www.shopback.co.kr/aliexpress-shopback-button-guide","PH":"https://www.shopback.ph/aliexpress-button-guide","HK":"https://www.shopback.com.hk/aliexpress-button-guide","DE":"https://www.shopback.de/aliexpress-shopback-button-guide"},"POST_UNINSTALL_URL":{"SG":"https://www.shopback.sg/uninstall","MY":"https://www.shopback.my/uninstall","PH":"https://www.shopback.ph/uninstall","ID":"https://www.shopback.co.id/uninstall","TW":"https://www.shopback.com.tw/uninstall","AU":"https://www.shopback.com.au/uninstall","TH":"https://www.shopback.co.th/uninstall","KR":"https://www.shopback.co.kr/uninstall","HK":"https://www.shopback.com.hk/uninstall","DE":"https://www.shopback.de/uninstall"},"ACTIVATED_EXPIRED_MS":3600000,"ACTIVATED_EXPIRED_MS_FOR_TAOBAO":86400000,"PERMISSION_NOTIFIER_TTL":3600000,"SENTRY_DSN":"https://a7733d60656e4d3bbb5dc92afd0cc5b8@o27075.ingest.sentry.io/1189626","SENTRY_SAMPLE_RATE":0.2,"FIREBASE_CONFIG":{"authDomain":"moolah-shopback-2014.firebaseapp.com","databaseURL":"https://moolah-shopback-2014.firebaseio.com","projectId":"moolah-shopback-2014","storageBucket":"moolah-shopback-2014.appspot.com","messagingSenderId":"926511958493","appId":"1:926511958493:web:22953e5fd49907c63b0e34","measurementId":"G-DMR4BFCCCY"}}')}},e=>{var t;t=12871,e(e.s=t)}]);