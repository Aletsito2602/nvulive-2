function mC(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function z_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var U_={exports:{}},wh={},B_={exports:{}},ge={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ou=Symbol.for("react.element"),gC=Symbol.for("react.portal"),yC=Symbol.for("react.fragment"),vC=Symbol.for("react.strict_mode"),xC=Symbol.for("react.profiler"),wC=Symbol.for("react.provider"),_C=Symbol.for("react.context"),bC=Symbol.for("react.forward_ref"),EC=Symbol.for("react.suspense"),SC=Symbol.for("react.memo"),TC=Symbol.for("react.lazy"),$1=Symbol.iterator;function IC(t){return t===null||typeof t!="object"?null:(t=$1&&t[$1]||t["@@iterator"],typeof t=="function"?t:null)}var H_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},W_=Object.assign,q_={};function Da(t,e,n){this.props=t,this.context=e,this.refs=q_,this.updater=n||H_}Da.prototype.isReactComponent={};Da.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Da.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function G_(){}G_.prototype=Da.prototype;function Hg(t,e,n){this.props=t,this.context=e,this.refs=q_,this.updater=n||H_}var Wg=Hg.prototype=new G_;Wg.constructor=Hg;W_(Wg,Da.prototype);Wg.isPureReactComponent=!0;var z1=Array.isArray,K_=Object.prototype.hasOwnProperty,qg={current:null},Q_={key:!0,ref:!0,__self:!0,__source:!0};function Y_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)K_.call(e,r)&&!Q_.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ou,type:t,key:s,ref:o,props:i,_owner:qg.current}}function kC(t,e){return{$$typeof:Ou,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Gg(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ou}function CC(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var U1=/\/+/g;function Of(t,e){return typeof t=="object"&&t!==null&&t.key!=null?CC(""+t.key):e.toString(36)}function qc(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ou:case gC:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Of(o,0):r,z1(i)?(n="",t!=null&&(n=t.replace(U1,"$&/")+"/"),qc(i,e,n,"",function(c){return c})):i!=null&&(Gg(i)&&(i=kC(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(U1,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",z1(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Of(s,a);o+=qc(s,e,n,l,i)}else if(l=IC(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Of(s,a++),o+=qc(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function dc(t,e,n){if(t==null)return t;var r=[],i=0;return qc(t,r,"","",function(s){return e.call(n,s,i++)}),r}function AC(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var sn={current:null},Gc={transition:null},RC={ReactCurrentDispatcher:sn,ReactCurrentBatchConfig:Gc,ReactCurrentOwner:qg};function J_(){throw Error("act(...) is not supported in production builds of React.")}ge.Children={map:dc,forEach:function(t,e,n){dc(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return dc(t,function(){e++}),e},toArray:function(t){return dc(t,function(e){return e})||[]},only:function(t){if(!Gg(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ge.Component=Da;ge.Fragment=yC;ge.Profiler=xC;ge.PureComponent=Hg;ge.StrictMode=vC;ge.Suspense=EC;ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=RC;ge.act=J_;ge.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=W_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=qg.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)K_.call(e,l)&&!Q_.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Ou,type:t.type,key:i,ref:s,props:r,_owner:o}};ge.createContext=function(t){return t={$$typeof:_C,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:wC,_context:t},t.Consumer=t};ge.createElement=Y_;ge.createFactory=function(t){var e=Y_.bind(null,t);return e.type=t,e};ge.createRef=function(){return{current:null}};ge.forwardRef=function(t){return{$$typeof:bC,render:t}};ge.isValidElement=Gg;ge.lazy=function(t){return{$$typeof:TC,_payload:{_status:-1,_result:t},_init:AC}};ge.memo=function(t,e){return{$$typeof:SC,type:t,compare:e===void 0?null:e}};ge.startTransition=function(t){var e=Gc.transition;Gc.transition={};try{t()}finally{Gc.transition=e}};ge.unstable_act=J_;ge.useCallback=function(t,e){return sn.current.useCallback(t,e)};ge.useContext=function(t){return sn.current.useContext(t)};ge.useDebugValue=function(){};ge.useDeferredValue=function(t){return sn.current.useDeferredValue(t)};ge.useEffect=function(t,e){return sn.current.useEffect(t,e)};ge.useId=function(){return sn.current.useId()};ge.useImperativeHandle=function(t,e,n){return sn.current.useImperativeHandle(t,e,n)};ge.useInsertionEffect=function(t,e){return sn.current.useInsertionEffect(t,e)};ge.useLayoutEffect=function(t,e){return sn.current.useLayoutEffect(t,e)};ge.useMemo=function(t,e){return sn.current.useMemo(t,e)};ge.useReducer=function(t,e,n){return sn.current.useReducer(t,e,n)};ge.useRef=function(t){return sn.current.useRef(t)};ge.useState=function(t){return sn.current.useState(t)};ge.useSyncExternalStore=function(t,e,n){return sn.current.useSyncExternalStore(t,e,n)};ge.useTransition=function(){return sn.current.useTransition()};ge.version="18.3.1";B_.exports=ge;var D=B_.exports;const ve=z_(D),PC=mC({__proto__:null,default:ve},[D]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var NC=D,DC=Symbol.for("react.element"),OC=Symbol.for("react.fragment"),jC=Object.prototype.hasOwnProperty,LC=NC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,MC={key:!0,ref:!0,__self:!0,__source:!0};function Z_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)jC.call(e,r)&&!MC.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:DC,type:t,key:s,ref:o,props:i,_owner:LC.current}}wh.Fragment=OC;wh.jsx=Z_;wh.jsxs=Z_;U_.exports=wh;var d=U_.exports,Kp={},X_={exports:{}},Dn={},eb={exports:{}},tb={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,U){var G=z.length;z.push(U);e:for(;0<G;){var Z=G-1>>>1,oe=z[Z];if(0<i(oe,U))z[Z]=U,z[G]=oe,G=Z;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var U=z[0],G=z.pop();if(G!==U){z[0]=G;e:for(var Z=0,oe=z.length,Se=oe>>>1;Z<Se;){var _t=2*(Z+1)-1,pt=z[_t],mt=_t+1,st=z[mt];if(0>i(pt,G))mt<oe&&0>i(st,pt)?(z[Z]=st,z[mt]=G,Z=mt):(z[Z]=pt,z[_t]=G,Z=_t);else if(mt<oe&&0>i(st,G))z[Z]=st,z[mt]=G,Z=mt;else break e}}return U}function i(z,U){var G=z.sortIndex-U.sortIndex;return G!==0?G:z.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],h=1,f=null,p=3,g=!1,w=!1,k=!1,C=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function E(z){for(var U=n(c);U!==null;){if(U.callback===null)r(c);else if(U.startTime<=z)r(c),U.sortIndex=U.expirationTime,e(l,U);else break;U=n(c)}}function P(z){if(k=!1,E(z),!w)if(n(l)!==null)w=!0,he(j);else{var U=n(c);U!==null&&se(P,U.startTime-z)}}function j(z,U){w=!1,k&&(k=!1,x(S),S=-1),g=!0;var G=p;try{for(E(U),f=n(l);f!==null&&(!(f.expirationTime>U)||z&&!N());){var Z=f.callback;if(typeof Z=="function"){f.callback=null,p=f.priorityLevel;var oe=Z(f.expirationTime<=U);U=t.unstable_now(),typeof oe=="function"?f.callback=oe:f===n(l)&&r(l),E(U)}else r(l);f=n(l)}if(f!==null)var Se=!0;else{var _t=n(c);_t!==null&&se(P,_t.startTime-U),Se=!1}return Se}finally{f=null,p=G,g=!1}}var M=!1,b=null,S=-1,A=5,R=-1;function N(){return!(t.unstable_now()-R<A)}function O(){if(b!==null){var z=t.unstable_now();R=z;var U=!0;try{U=b(!0,z)}finally{U?I():(M=!1,b=null)}}else M=!1}var I;if(typeof v=="function")I=function(){v(O)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,te=Q.port2;Q.port1.onmessage=O,I=function(){te.postMessage(null)}}else I=function(){C(O,0)};function he(z){b=z,M||(M=!0,I())}function se(z,U){S=C(function(){z(t.unstable_now())},U)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){w||g||(w=!0,he(j))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(z){switch(p){case 1:case 2:case 3:var U=3;break;default:U=p}var G=p;p=U;try{return z()}finally{p=G}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,U){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var G=p;p=z;try{return U()}finally{p=G}},t.unstable_scheduleCallback=function(z,U,G){var Z=t.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?Z+G:Z):G=Z,z){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=G+oe,z={id:h++,callback:U,priorityLevel:z,startTime:G,expirationTime:oe,sortIndex:-1},G>Z?(z.sortIndex=G,e(c,z),n(l)===null&&z===n(c)&&(k?(x(S),S=-1):k=!0,se(P,G-Z))):(z.sortIndex=oe,e(l,z),w||g||(w=!0,he(j))),z},t.unstable_shouldYield=N,t.unstable_wrapCallback=function(z){var U=p;return function(){var G=p;p=U;try{return z.apply(this,arguments)}finally{p=G}}}})(tb);eb.exports=tb;var VC=eb.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var FC=D,Pn=VC;function B(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var nb=new Set,Zl={};function ho(t,e){da(t,e),da(t+"Capture",e)}function da(t,e){for(Zl[t]=e,t=0;t<e.length;t++)nb.add(e[t])}var pi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qp=Object.prototype.hasOwnProperty,$C=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,B1={},H1={};function zC(t){return Qp.call(H1,t)?!0:Qp.call(B1,t)?!1:$C.test(t)?H1[t]=!0:(B1[t]=!0,!1)}function UC(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function BC(t,e,n,r){if(e===null||typeof e>"u"||UC(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function on(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var $t={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){$t[t]=new on(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];$t[e]=new on(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){$t[t]=new on(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){$t[t]=new on(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){$t[t]=new on(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){$t[t]=new on(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){$t[t]=new on(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){$t[t]=new on(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){$t[t]=new on(t,5,!1,t.toLowerCase(),null,!1,!1)});var Kg=/[\-:]([a-z])/g;function Qg(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Kg,Qg);$t[e]=new on(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Kg,Qg);$t[e]=new on(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Kg,Qg);$t[e]=new on(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){$t[t]=new on(t,1,!1,t.toLowerCase(),null,!1,!1)});$t.xlinkHref=new on("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){$t[t]=new on(t,1,!1,t.toLowerCase(),null,!0,!0)});function Yg(t,e,n,r){var i=$t.hasOwnProperty(e)?$t[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(BC(e,n,i,r)&&(n=null),r||i===null?zC(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Ei=FC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,hc=Symbol.for("react.element"),zo=Symbol.for("react.portal"),Uo=Symbol.for("react.fragment"),Jg=Symbol.for("react.strict_mode"),Yp=Symbol.for("react.profiler"),rb=Symbol.for("react.provider"),ib=Symbol.for("react.context"),Zg=Symbol.for("react.forward_ref"),Jp=Symbol.for("react.suspense"),Zp=Symbol.for("react.suspense_list"),Xg=Symbol.for("react.memo"),Vi=Symbol.for("react.lazy"),sb=Symbol.for("react.offscreen"),W1=Symbol.iterator;function ll(t){return t===null||typeof t!="object"?null:(t=W1&&t[W1]||t["@@iterator"],typeof t=="function"?t:null)}var Qe=Object.assign,jf;function wl(t){if(jf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);jf=e&&e[1]||""}return`
`+jf+t}var Lf=!1;function Mf(t,e){if(!t||Lf)return"";Lf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Lf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?wl(t):""}function HC(t){switch(t.tag){case 5:return wl(t.type);case 16:return wl("Lazy");case 13:return wl("Suspense");case 19:return wl("SuspenseList");case 0:case 2:case 15:return t=Mf(t.type,!1),t;case 11:return t=Mf(t.type.render,!1),t;case 1:return t=Mf(t.type,!0),t;default:return""}}function Xp(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Uo:return"Fragment";case zo:return"Portal";case Yp:return"Profiler";case Jg:return"StrictMode";case Jp:return"Suspense";case Zp:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ib:return(t.displayName||"Context")+".Consumer";case rb:return(t._context.displayName||"Context")+".Provider";case Zg:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Xg:return e=t.displayName||null,e!==null?e:Xp(t.type)||"Memo";case Vi:e=t._payload,t=t._init;try{return Xp(t(e))}catch{}}return null}function WC(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Xp(e);case 8:return e===Jg?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function us(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ob(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function qC(t){var e=ob(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function fc(t){t._valueTracker||(t._valueTracker=qC(t))}function ab(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=ob(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function xd(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function em(t,e){var n=e.checked;return Qe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function q1(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=us(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function lb(t,e){e=e.checked,e!=null&&Yg(t,"checked",e,!1)}function tm(t,e){lb(t,e);var n=us(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?nm(t,e.type,n):e.hasOwnProperty("defaultValue")&&nm(t,e.type,us(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function G1(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function nm(t,e,n){(e!=="number"||xd(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var _l=Array.isArray;function ta(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+us(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function rm(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(B(91));return Qe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function K1(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(B(92));if(_l(n)){if(1<n.length)throw Error(B(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:us(n)}}function ub(t,e){var n=us(e.value),r=us(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Q1(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function cb(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function im(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?cb(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var pc,db=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(pc=pc||document.createElement("div"),pc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=pc.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Xl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Nl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},GC=["Webkit","ms","Moz","O"];Object.keys(Nl).forEach(function(t){GC.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Nl[e]=Nl[t]})});function hb(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Nl.hasOwnProperty(t)&&Nl[t]?(""+e).trim():e+"px"}function fb(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=hb(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var KC=Qe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function sm(t,e){if(e){if(KC[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(B(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(B(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(B(61))}if(e.style!=null&&typeof e.style!="object")throw Error(B(62))}}function om(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var am=null;function e0(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var lm=null,na=null,ra=null;function Y1(t){if(t=Mu(t)){if(typeof lm!="function")throw Error(B(280));var e=t.stateNode;e&&(e=Th(e),lm(t.stateNode,t.type,e))}}function pb(t){na?ra?ra.push(t):ra=[t]:na=t}function mb(){if(na){var t=na,e=ra;if(ra=na=null,Y1(t),e)for(t=0;t<e.length;t++)Y1(e[t])}}function gb(t,e){return t(e)}function yb(){}var Vf=!1;function vb(t,e,n){if(Vf)return t(e,n);Vf=!0;try{return gb(t,e,n)}finally{Vf=!1,(na!==null||ra!==null)&&(yb(),mb())}}function eu(t,e){var n=t.stateNode;if(n===null)return null;var r=Th(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(B(231,e,typeof n));return n}var um=!1;if(pi)try{var ul={};Object.defineProperty(ul,"passive",{get:function(){um=!0}}),window.addEventListener("test",ul,ul),window.removeEventListener("test",ul,ul)}catch{um=!1}function QC(t,e,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var Dl=!1,wd=null,_d=!1,cm=null,YC={onError:function(t){Dl=!0,wd=t}};function JC(t,e,n,r,i,s,o,a,l){Dl=!1,wd=null,QC.apply(YC,arguments)}function ZC(t,e,n,r,i,s,o,a,l){if(JC.apply(this,arguments),Dl){if(Dl){var c=wd;Dl=!1,wd=null}else throw Error(B(198));_d||(_d=!0,cm=c)}}function fo(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function xb(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function J1(t){if(fo(t)!==t)throw Error(B(188))}function XC(t){var e=t.alternate;if(!e){if(e=fo(t),e===null)throw Error(B(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return J1(i),t;if(s===r)return J1(i),e;s=s.sibling}throw Error(B(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(B(189))}}if(n.alternate!==r)throw Error(B(190))}if(n.tag!==3)throw Error(B(188));return n.stateNode.current===n?t:e}function wb(t){return t=XC(t),t!==null?_b(t):null}function _b(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=_b(t);if(e!==null)return e;t=t.sibling}return null}var bb=Pn.unstable_scheduleCallback,Z1=Pn.unstable_cancelCallback,eA=Pn.unstable_shouldYield,tA=Pn.unstable_requestPaint,rt=Pn.unstable_now,nA=Pn.unstable_getCurrentPriorityLevel,t0=Pn.unstable_ImmediatePriority,Eb=Pn.unstable_UserBlockingPriority,bd=Pn.unstable_NormalPriority,rA=Pn.unstable_LowPriority,Sb=Pn.unstable_IdlePriority,_h=null,Pr=null;function iA(t){if(Pr&&typeof Pr.onCommitFiberRoot=="function")try{Pr.onCommitFiberRoot(_h,t,void 0,(t.current.flags&128)===128)}catch{}}var lr=Math.clz32?Math.clz32:aA,sA=Math.log,oA=Math.LN2;function aA(t){return t>>>=0,t===0?32:31-(sA(t)/oA|0)|0}var mc=64,gc=4194304;function bl(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ed(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=bl(a):(s&=o,s!==0&&(r=bl(s)))}else o=n&~i,o!==0?r=bl(o):s!==0&&(r=bl(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-lr(e),i=1<<n,r|=t[n],e&=~i;return r}function lA(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function uA(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-lr(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=lA(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function dm(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Tb(){var t=mc;return mc<<=1,!(mc&4194240)&&(mc=64),t}function Ff(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ju(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-lr(e),t[e]=n}function cA(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-lr(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function n0(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-lr(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Ne=0;function Ib(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var kb,r0,Cb,Ab,Rb,hm=!1,yc=[],Qi=null,Yi=null,Ji=null,tu=new Map,nu=new Map,zi=[],dA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function X1(t,e){switch(t){case"focusin":case"focusout":Qi=null;break;case"dragenter":case"dragleave":Yi=null;break;case"mouseover":case"mouseout":Ji=null;break;case"pointerover":case"pointerout":tu.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":nu.delete(e.pointerId)}}function cl(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Mu(e),e!==null&&r0(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function hA(t,e,n,r,i){switch(e){case"focusin":return Qi=cl(Qi,t,e,n,r,i),!0;case"dragenter":return Yi=cl(Yi,t,e,n,r,i),!0;case"mouseover":return Ji=cl(Ji,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return tu.set(s,cl(tu.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,nu.set(s,cl(nu.get(s)||null,t,e,n,r,i)),!0}return!1}function Pb(t){var e=Fs(t.target);if(e!==null){var n=fo(e);if(n!==null){if(e=n.tag,e===13){if(e=xb(n),e!==null){t.blockedOn=e,Rb(t.priority,function(){Cb(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Kc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=fm(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);am=r,n.target.dispatchEvent(r),am=null}else return e=Mu(n),e!==null&&r0(e),t.blockedOn=n,!1;e.shift()}return!0}function ev(t,e,n){Kc(t)&&n.delete(e)}function fA(){hm=!1,Qi!==null&&Kc(Qi)&&(Qi=null),Yi!==null&&Kc(Yi)&&(Yi=null),Ji!==null&&Kc(Ji)&&(Ji=null),tu.forEach(ev),nu.forEach(ev)}function dl(t,e){t.blockedOn===e&&(t.blockedOn=null,hm||(hm=!0,Pn.unstable_scheduleCallback(Pn.unstable_NormalPriority,fA)))}function ru(t){function e(i){return dl(i,t)}if(0<yc.length){dl(yc[0],t);for(var n=1;n<yc.length;n++){var r=yc[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Qi!==null&&dl(Qi,t),Yi!==null&&dl(Yi,t),Ji!==null&&dl(Ji,t),tu.forEach(e),nu.forEach(e),n=0;n<zi.length;n++)r=zi[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<zi.length&&(n=zi[0],n.blockedOn===null);)Pb(n),n.blockedOn===null&&zi.shift()}var ia=Ei.ReactCurrentBatchConfig,Sd=!0;function pA(t,e,n,r){var i=Ne,s=ia.transition;ia.transition=null;try{Ne=1,i0(t,e,n,r)}finally{Ne=i,ia.transition=s}}function mA(t,e,n,r){var i=Ne,s=ia.transition;ia.transition=null;try{Ne=4,i0(t,e,n,r)}finally{Ne=i,ia.transition=s}}function i0(t,e,n,r){if(Sd){var i=fm(t,e,n,r);if(i===null)Qf(t,e,r,Td,n),X1(t,r);else if(hA(i,t,e,n,r))r.stopPropagation();else if(X1(t,r),e&4&&-1<dA.indexOf(t)){for(;i!==null;){var s=Mu(i);if(s!==null&&kb(s),s=fm(t,e,n,r),s===null&&Qf(t,e,r,Td,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Qf(t,e,r,null,n)}}var Td=null;function fm(t,e,n,r){if(Td=null,t=e0(r),t=Fs(t),t!==null)if(e=fo(t),e===null)t=null;else if(n=e.tag,n===13){if(t=xb(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Td=t,null}function Nb(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(nA()){case t0:return 1;case Eb:return 4;case bd:case rA:return 16;case Sb:return 536870912;default:return 16}default:return 16}}var Wi=null,s0=null,Qc=null;function Db(){if(Qc)return Qc;var t,e=s0,n=e.length,r,i="value"in Wi?Wi.value:Wi.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Qc=i.slice(t,1<r?1-r:void 0)}function Yc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function vc(){return!0}function tv(){return!1}function On(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?vc:tv,this.isPropagationStopped=tv,this}return Qe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=vc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=vc)},persist:function(){},isPersistent:vc}),e}var Oa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},o0=On(Oa),Lu=Qe({},Oa,{view:0,detail:0}),gA=On(Lu),$f,zf,hl,bh=Qe({},Lu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:a0,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==hl&&(hl&&t.type==="mousemove"?($f=t.screenX-hl.screenX,zf=t.screenY-hl.screenY):zf=$f=0,hl=t),$f)},movementY:function(t){return"movementY"in t?t.movementY:zf}}),nv=On(bh),yA=Qe({},bh,{dataTransfer:0}),vA=On(yA),xA=Qe({},Lu,{relatedTarget:0}),Uf=On(xA),wA=Qe({},Oa,{animationName:0,elapsedTime:0,pseudoElement:0}),_A=On(wA),bA=Qe({},Oa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),EA=On(bA),SA=Qe({},Oa,{data:0}),rv=On(SA),TA={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},IA={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kA={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function CA(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=kA[t])?!!e[t]:!1}function a0(){return CA}var AA=Qe({},Lu,{key:function(t){if(t.key){var e=TA[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Yc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?IA[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:a0,charCode:function(t){return t.type==="keypress"?Yc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Yc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),RA=On(AA),PA=Qe({},bh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),iv=On(PA),NA=Qe({},Lu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:a0}),DA=On(NA),OA=Qe({},Oa,{propertyName:0,elapsedTime:0,pseudoElement:0}),jA=On(OA),LA=Qe({},bh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),MA=On(LA),VA=[9,13,27,32],l0=pi&&"CompositionEvent"in window,Ol=null;pi&&"documentMode"in document&&(Ol=document.documentMode);var FA=pi&&"TextEvent"in window&&!Ol,Ob=pi&&(!l0||Ol&&8<Ol&&11>=Ol),sv=" ",ov=!1;function jb(t,e){switch(t){case"keyup":return VA.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lb(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Bo=!1;function $A(t,e){switch(t){case"compositionend":return Lb(e);case"keypress":return e.which!==32?null:(ov=!0,sv);case"textInput":return t=e.data,t===sv&&ov?null:t;default:return null}}function zA(t,e){if(Bo)return t==="compositionend"||!l0&&jb(t,e)?(t=Db(),Qc=s0=Wi=null,Bo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ob&&e.locale!=="ko"?null:e.data;default:return null}}var UA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function av(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!UA[t.type]:e==="textarea"}function Mb(t,e,n,r){pb(r),e=Id(e,"onChange"),0<e.length&&(n=new o0("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var jl=null,iu=null;function BA(t){Kb(t,0)}function Eh(t){var e=qo(t);if(ab(e))return t}function HA(t,e){if(t==="change")return e}var Vb=!1;if(pi){var Bf;if(pi){var Hf="oninput"in document;if(!Hf){var lv=document.createElement("div");lv.setAttribute("oninput","return;"),Hf=typeof lv.oninput=="function"}Bf=Hf}else Bf=!1;Vb=Bf&&(!document.documentMode||9<document.documentMode)}function uv(){jl&&(jl.detachEvent("onpropertychange",Fb),iu=jl=null)}function Fb(t){if(t.propertyName==="value"&&Eh(iu)){var e=[];Mb(e,iu,t,e0(t)),vb(BA,e)}}function WA(t,e,n){t==="focusin"?(uv(),jl=e,iu=n,jl.attachEvent("onpropertychange",Fb)):t==="focusout"&&uv()}function qA(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Eh(iu)}function GA(t,e){if(t==="click")return Eh(e)}function KA(t,e){if(t==="input"||t==="change")return Eh(e)}function QA(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var pr=typeof Object.is=="function"?Object.is:QA;function su(t,e){if(pr(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Qp.call(e,i)||!pr(t[i],e[i]))return!1}return!0}function cv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function dv(t,e){var n=cv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=cv(n)}}function $b(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?$b(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function zb(){for(var t=window,e=xd();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=xd(t.document)}return e}function u0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function YA(t){var e=zb(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&$b(n.ownerDocument.documentElement,n)){if(r!==null&&u0(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=dv(n,s);var o=dv(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var JA=pi&&"documentMode"in document&&11>=document.documentMode,Ho=null,pm=null,Ll=null,mm=!1;function hv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;mm||Ho==null||Ho!==xd(r)||(r=Ho,"selectionStart"in r&&u0(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ll&&su(Ll,r)||(Ll=r,r=Id(pm,"onSelect"),0<r.length&&(e=new o0("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ho)))}function xc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Wo={animationend:xc("Animation","AnimationEnd"),animationiteration:xc("Animation","AnimationIteration"),animationstart:xc("Animation","AnimationStart"),transitionend:xc("Transition","TransitionEnd")},Wf={},Ub={};pi&&(Ub=document.createElement("div").style,"AnimationEvent"in window||(delete Wo.animationend.animation,delete Wo.animationiteration.animation,delete Wo.animationstart.animation),"TransitionEvent"in window||delete Wo.transitionend.transition);function Sh(t){if(Wf[t])return Wf[t];if(!Wo[t])return t;var e=Wo[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Ub)return Wf[t]=e[n];return t}var Bb=Sh("animationend"),Hb=Sh("animationiteration"),Wb=Sh("animationstart"),qb=Sh("transitionend"),Gb=new Map,fv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xs(t,e){Gb.set(t,e),ho(e,[t])}for(var qf=0;qf<fv.length;qf++){var Gf=fv[qf],ZA=Gf.toLowerCase(),XA=Gf[0].toUpperCase()+Gf.slice(1);xs(ZA,"on"+XA)}xs(Bb,"onAnimationEnd");xs(Hb,"onAnimationIteration");xs(Wb,"onAnimationStart");xs("dblclick","onDoubleClick");xs("focusin","onFocus");xs("focusout","onBlur");xs(qb,"onTransitionEnd");da("onMouseEnter",["mouseout","mouseover"]);da("onMouseLeave",["mouseout","mouseover"]);da("onPointerEnter",["pointerout","pointerover"]);da("onPointerLeave",["pointerout","pointerover"]);ho("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ho("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ho("onBeforeInput",["compositionend","keypress","textInput","paste"]);ho("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ho("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ho("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var El="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),e6=new Set("cancel close invalid load scroll toggle".split(" ").concat(El));function pv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,ZC(r,e,void 0,t),t.currentTarget=null}function Kb(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;pv(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;pv(i,a,c),s=l}}}if(_d)throw t=cm,_d=!1,cm=null,t}function $e(t,e){var n=e[wm];n===void 0&&(n=e[wm]=new Set);var r=t+"__bubble";n.has(r)||(Qb(e,t,2,!1),n.add(r))}function Kf(t,e,n){var r=0;e&&(r|=4),Qb(n,t,r,e)}var wc="_reactListening"+Math.random().toString(36).slice(2);function ou(t){if(!t[wc]){t[wc]=!0,nb.forEach(function(n){n!=="selectionchange"&&(e6.has(n)||Kf(n,!1,t),Kf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[wc]||(e[wc]=!0,Kf("selectionchange",!1,e))}}function Qb(t,e,n,r){switch(Nb(e)){case 1:var i=pA;break;case 4:i=mA;break;default:i=i0}n=i.bind(null,e,n,t),i=void 0,!um||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Qf(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Fs(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}vb(function(){var c=s,h=e0(n),f=[];e:{var p=Gb.get(t);if(p!==void 0){var g=o0,w=t;switch(t){case"keypress":if(Yc(n)===0)break e;case"keydown":case"keyup":g=RA;break;case"focusin":w="focus",g=Uf;break;case"focusout":w="blur",g=Uf;break;case"beforeblur":case"afterblur":g=Uf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=nv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=vA;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=DA;break;case Bb:case Hb:case Wb:g=_A;break;case qb:g=jA;break;case"scroll":g=gA;break;case"wheel":g=MA;break;case"copy":case"cut":case"paste":g=EA;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=iv}var k=(e&4)!==0,C=!k&&t==="scroll",x=k?p!==null?p+"Capture":null:p;k=[];for(var v=c,E;v!==null;){E=v;var P=E.stateNode;if(E.tag===5&&P!==null&&(E=P,x!==null&&(P=eu(v,x),P!=null&&k.push(au(v,P,E)))),C)break;v=v.return}0<k.length&&(p=new g(p,w,null,n,h),f.push({event:p,listeners:k}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",p&&n!==am&&(w=n.relatedTarget||n.fromElement)&&(Fs(w)||w[mi]))break e;if((g||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,g?(w=n.relatedTarget||n.toElement,g=c,w=w?Fs(w):null,w!==null&&(C=fo(w),w!==C||w.tag!==5&&w.tag!==6)&&(w=null)):(g=null,w=c),g!==w)){if(k=nv,P="onMouseLeave",x="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(k=iv,P="onPointerLeave",x="onPointerEnter",v="pointer"),C=g==null?p:qo(g),E=w==null?p:qo(w),p=new k(P,v+"leave",g,n,h),p.target=C,p.relatedTarget=E,P=null,Fs(h)===c&&(k=new k(x,v+"enter",w,n,h),k.target=E,k.relatedTarget=C,P=k),C=P,g&&w)t:{for(k=g,x=w,v=0,E=k;E;E=So(E))v++;for(E=0,P=x;P;P=So(P))E++;for(;0<v-E;)k=So(k),v--;for(;0<E-v;)x=So(x),E--;for(;v--;){if(k===x||x!==null&&k===x.alternate)break t;k=So(k),x=So(x)}k=null}else k=null;g!==null&&mv(f,p,g,k,!1),w!==null&&C!==null&&mv(f,C,w,k,!0)}}e:{if(p=c?qo(c):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var j=HA;else if(av(p))if(Vb)j=KA;else{j=qA;var M=WA}else(g=p.nodeName)&&g.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(j=GA);if(j&&(j=j(t,c))){Mb(f,j,n,h);break e}M&&M(t,p,c),t==="focusout"&&(M=p._wrapperState)&&M.controlled&&p.type==="number"&&nm(p,"number",p.value)}switch(M=c?qo(c):window,t){case"focusin":(av(M)||M.contentEditable==="true")&&(Ho=M,pm=c,Ll=null);break;case"focusout":Ll=pm=Ho=null;break;case"mousedown":mm=!0;break;case"contextmenu":case"mouseup":case"dragend":mm=!1,hv(f,n,h);break;case"selectionchange":if(JA)break;case"keydown":case"keyup":hv(f,n,h)}var b;if(l0)e:{switch(t){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else Bo?jb(t,n)&&(S="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(S="onCompositionStart");S&&(Ob&&n.locale!=="ko"&&(Bo||S!=="onCompositionStart"?S==="onCompositionEnd"&&Bo&&(b=Db()):(Wi=h,s0="value"in Wi?Wi.value:Wi.textContent,Bo=!0)),M=Id(c,S),0<M.length&&(S=new rv(S,t,null,n,h),f.push({event:S,listeners:M}),b?S.data=b:(b=Lb(n),b!==null&&(S.data=b)))),(b=FA?$A(t,n):zA(t,n))&&(c=Id(c,"onBeforeInput"),0<c.length&&(h=new rv("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:c}),h.data=b))}Kb(f,e)})}function au(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Id(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=eu(t,n),s!=null&&r.unshift(au(t,s,i)),s=eu(t,e),s!=null&&r.push(au(t,s,i))),t=t.return}return r}function So(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function mv(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=eu(n,s),l!=null&&o.unshift(au(n,l,a))):i||(l=eu(n,s),l!=null&&o.push(au(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var t6=/\r\n?/g,n6=/\u0000|\uFFFD/g;function gv(t){return(typeof t=="string"?t:""+t).replace(t6,`
`).replace(n6,"")}function _c(t,e,n){if(e=gv(e),gv(t)!==e&&n)throw Error(B(425))}function kd(){}var gm=null,ym=null;function vm(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var xm=typeof setTimeout=="function"?setTimeout:void 0,r6=typeof clearTimeout=="function"?clearTimeout:void 0,yv=typeof Promise=="function"?Promise:void 0,i6=typeof queueMicrotask=="function"?queueMicrotask:typeof yv<"u"?function(t){return yv.resolve(null).then(t).catch(s6)}:xm;function s6(t){setTimeout(function(){throw t})}function Yf(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ru(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ru(e)}function Zi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function vv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ja=Math.random().toString(36).slice(2),Cr="__reactFiber$"+ja,lu="__reactProps$"+ja,mi="__reactContainer$"+ja,wm="__reactEvents$"+ja,o6="__reactListeners$"+ja,a6="__reactHandles$"+ja;function Fs(t){var e=t[Cr];if(e)return e;for(var n=t.parentNode;n;){if(e=n[mi]||n[Cr]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=vv(t);t!==null;){if(n=t[Cr])return n;t=vv(t)}return e}t=n,n=t.parentNode}return null}function Mu(t){return t=t[Cr]||t[mi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function qo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(B(33))}function Th(t){return t[lu]||null}var _m=[],Go=-1;function ws(t){return{current:t}}function Be(t){0>Go||(t.current=_m[Go],_m[Go]=null,Go--)}function Le(t,e){Go++,_m[Go]=t.current,t.current=e}var cs={},Xt=ws(cs),mn=ws(!1),Xs=cs;function ha(t,e){var n=t.type.contextTypes;if(!n)return cs;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function gn(t){return t=t.childContextTypes,t!=null}function Cd(){Be(mn),Be(Xt)}function xv(t,e,n){if(Xt.current!==cs)throw Error(B(168));Le(Xt,e),Le(mn,n)}function Yb(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(B(108,WC(t)||"Unknown",i));return Qe({},n,r)}function Ad(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||cs,Xs=Xt.current,Le(Xt,t),Le(mn,mn.current),!0}function wv(t,e,n){var r=t.stateNode;if(!r)throw Error(B(169));n?(t=Yb(t,e,Xs),r.__reactInternalMemoizedMergedChildContext=t,Be(mn),Be(Xt),Le(Xt,t)):Be(mn),Le(mn,n)}var ui=null,Ih=!1,Jf=!1;function Jb(t){ui===null?ui=[t]:ui.push(t)}function l6(t){Ih=!0,Jb(t)}function _s(){if(!Jf&&ui!==null){Jf=!0;var t=0,e=Ne;try{var n=ui;for(Ne=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}ui=null,Ih=!1}catch(i){throw ui!==null&&(ui=ui.slice(t+1)),bb(t0,_s),i}finally{Ne=e,Jf=!1}}return null}var Ko=[],Qo=0,Rd=null,Pd=0,Un=[],Bn=0,eo=null,ci=1,di="";function Ls(t,e){Ko[Qo++]=Pd,Ko[Qo++]=Rd,Rd=t,Pd=e}function Zb(t,e,n){Un[Bn++]=ci,Un[Bn++]=di,Un[Bn++]=eo,eo=t;var r=ci;t=di;var i=32-lr(r)-1;r&=~(1<<i),n+=1;var s=32-lr(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ci=1<<32-lr(e)+i|n<<i|r,di=s+t}else ci=1<<s|n<<i|r,di=t}function c0(t){t.return!==null&&(Ls(t,1),Zb(t,1,0))}function d0(t){for(;t===Rd;)Rd=Ko[--Qo],Ko[Qo]=null,Pd=Ko[--Qo],Ko[Qo]=null;for(;t===eo;)eo=Un[--Bn],Un[Bn]=null,di=Un[--Bn],Un[Bn]=null,ci=Un[--Bn],Un[Bn]=null}var kn=null,Tn=null,He=!1,sr=null;function Xb(t,e){var n=Hn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function _v(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,kn=t,Tn=Zi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,kn=t,Tn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=eo!==null?{id:ci,overflow:di}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Hn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,kn=t,Tn=null,!0):!1;default:return!1}}function bm(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Em(t){if(He){var e=Tn;if(e){var n=e;if(!_v(t,e)){if(bm(t))throw Error(B(418));e=Zi(n.nextSibling);var r=kn;e&&_v(t,e)?Xb(r,n):(t.flags=t.flags&-4097|2,He=!1,kn=t)}}else{if(bm(t))throw Error(B(418));t.flags=t.flags&-4097|2,He=!1,kn=t}}}function bv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;kn=t}function bc(t){if(t!==kn)return!1;if(!He)return bv(t),He=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!vm(t.type,t.memoizedProps)),e&&(e=Tn)){if(bm(t))throw eE(),Error(B(418));for(;e;)Xb(t,e),e=Zi(e.nextSibling)}if(bv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(B(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Tn=Zi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Tn=null}}else Tn=kn?Zi(t.stateNode.nextSibling):null;return!0}function eE(){for(var t=Tn;t;)t=Zi(t.nextSibling)}function fa(){Tn=kn=null,He=!1}function h0(t){sr===null?sr=[t]:sr.push(t)}var u6=Ei.ReactCurrentBatchConfig;function fl(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(B(309));var r=n.stateNode}if(!r)throw Error(B(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(B(284));if(!n._owner)throw Error(B(290,t))}return t}function Ec(t,e){throw t=Object.prototype.toString.call(e),Error(B(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ev(t){var e=t._init;return e(t._payload)}function tE(t){function e(x,v){if(t){var E=x.deletions;E===null?(x.deletions=[v],x.flags|=16):E.push(v)}}function n(x,v){if(!t)return null;for(;v!==null;)e(x,v),v=v.sibling;return null}function r(x,v){for(x=new Map;v!==null;)v.key!==null?x.set(v.key,v):x.set(v.index,v),v=v.sibling;return x}function i(x,v){return x=ns(x,v),x.index=0,x.sibling=null,x}function s(x,v,E){return x.index=E,t?(E=x.alternate,E!==null?(E=E.index,E<v?(x.flags|=2,v):E):(x.flags|=2,v)):(x.flags|=1048576,v)}function o(x){return t&&x.alternate===null&&(x.flags|=2),x}function a(x,v,E,P){return v===null||v.tag!==6?(v=ip(E,x.mode,P),v.return=x,v):(v=i(v,E),v.return=x,v)}function l(x,v,E,P){var j=E.type;return j===Uo?h(x,v,E.props.children,P,E.key):v!==null&&(v.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Vi&&Ev(j)===v.type)?(P=i(v,E.props),P.ref=fl(x,v,E),P.return=x,P):(P=rd(E.type,E.key,E.props,null,x.mode,P),P.ref=fl(x,v,E),P.return=x,P)}function c(x,v,E,P){return v===null||v.tag!==4||v.stateNode.containerInfo!==E.containerInfo||v.stateNode.implementation!==E.implementation?(v=sp(E,x.mode,P),v.return=x,v):(v=i(v,E.children||[]),v.return=x,v)}function h(x,v,E,P,j){return v===null||v.tag!==7?(v=Gs(E,x.mode,P,j),v.return=x,v):(v=i(v,E),v.return=x,v)}function f(x,v,E){if(typeof v=="string"&&v!==""||typeof v=="number")return v=ip(""+v,x.mode,E),v.return=x,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case hc:return E=rd(v.type,v.key,v.props,null,x.mode,E),E.ref=fl(x,null,v),E.return=x,E;case zo:return v=sp(v,x.mode,E),v.return=x,v;case Vi:var P=v._init;return f(x,P(v._payload),E)}if(_l(v)||ll(v))return v=Gs(v,x.mode,E,null),v.return=x,v;Ec(x,v)}return null}function p(x,v,E,P){var j=v!==null?v.key:null;if(typeof E=="string"&&E!==""||typeof E=="number")return j!==null?null:a(x,v,""+E,P);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case hc:return E.key===j?l(x,v,E,P):null;case zo:return E.key===j?c(x,v,E,P):null;case Vi:return j=E._init,p(x,v,j(E._payload),P)}if(_l(E)||ll(E))return j!==null?null:h(x,v,E,P,null);Ec(x,E)}return null}function g(x,v,E,P,j){if(typeof P=="string"&&P!==""||typeof P=="number")return x=x.get(E)||null,a(v,x,""+P,j);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case hc:return x=x.get(P.key===null?E:P.key)||null,l(v,x,P,j);case zo:return x=x.get(P.key===null?E:P.key)||null,c(v,x,P,j);case Vi:var M=P._init;return g(x,v,E,M(P._payload),j)}if(_l(P)||ll(P))return x=x.get(E)||null,h(v,x,P,j,null);Ec(v,P)}return null}function w(x,v,E,P){for(var j=null,M=null,b=v,S=v=0,A=null;b!==null&&S<E.length;S++){b.index>S?(A=b,b=null):A=b.sibling;var R=p(x,b,E[S],P);if(R===null){b===null&&(b=A);break}t&&b&&R.alternate===null&&e(x,b),v=s(R,v,S),M===null?j=R:M.sibling=R,M=R,b=A}if(S===E.length)return n(x,b),He&&Ls(x,S),j;if(b===null){for(;S<E.length;S++)b=f(x,E[S],P),b!==null&&(v=s(b,v,S),M===null?j=b:M.sibling=b,M=b);return He&&Ls(x,S),j}for(b=r(x,b);S<E.length;S++)A=g(b,x,S,E[S],P),A!==null&&(t&&A.alternate!==null&&b.delete(A.key===null?S:A.key),v=s(A,v,S),M===null?j=A:M.sibling=A,M=A);return t&&b.forEach(function(N){return e(x,N)}),He&&Ls(x,S),j}function k(x,v,E,P){var j=ll(E);if(typeof j!="function")throw Error(B(150));if(E=j.call(E),E==null)throw Error(B(151));for(var M=j=null,b=v,S=v=0,A=null,R=E.next();b!==null&&!R.done;S++,R=E.next()){b.index>S?(A=b,b=null):A=b.sibling;var N=p(x,b,R.value,P);if(N===null){b===null&&(b=A);break}t&&b&&N.alternate===null&&e(x,b),v=s(N,v,S),M===null?j=N:M.sibling=N,M=N,b=A}if(R.done)return n(x,b),He&&Ls(x,S),j;if(b===null){for(;!R.done;S++,R=E.next())R=f(x,R.value,P),R!==null&&(v=s(R,v,S),M===null?j=R:M.sibling=R,M=R);return He&&Ls(x,S),j}for(b=r(x,b);!R.done;S++,R=E.next())R=g(b,x,S,R.value,P),R!==null&&(t&&R.alternate!==null&&b.delete(R.key===null?S:R.key),v=s(R,v,S),M===null?j=R:M.sibling=R,M=R);return t&&b.forEach(function(O){return e(x,O)}),He&&Ls(x,S),j}function C(x,v,E,P){if(typeof E=="object"&&E!==null&&E.type===Uo&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case hc:e:{for(var j=E.key,M=v;M!==null;){if(M.key===j){if(j=E.type,j===Uo){if(M.tag===7){n(x,M.sibling),v=i(M,E.props.children),v.return=x,x=v;break e}}else if(M.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Vi&&Ev(j)===M.type){n(x,M.sibling),v=i(M,E.props),v.ref=fl(x,M,E),v.return=x,x=v;break e}n(x,M);break}else e(x,M);M=M.sibling}E.type===Uo?(v=Gs(E.props.children,x.mode,P,E.key),v.return=x,x=v):(P=rd(E.type,E.key,E.props,null,x.mode,P),P.ref=fl(x,v,E),P.return=x,x=P)}return o(x);case zo:e:{for(M=E.key;v!==null;){if(v.key===M)if(v.tag===4&&v.stateNode.containerInfo===E.containerInfo&&v.stateNode.implementation===E.implementation){n(x,v.sibling),v=i(v,E.children||[]),v.return=x,x=v;break e}else{n(x,v);break}else e(x,v);v=v.sibling}v=sp(E,x.mode,P),v.return=x,x=v}return o(x);case Vi:return M=E._init,C(x,v,M(E._payload),P)}if(_l(E))return w(x,v,E,P);if(ll(E))return k(x,v,E,P);Ec(x,E)}return typeof E=="string"&&E!==""||typeof E=="number"?(E=""+E,v!==null&&v.tag===6?(n(x,v.sibling),v=i(v,E),v.return=x,x=v):(n(x,v),v=ip(E,x.mode,P),v.return=x,x=v),o(x)):n(x,v)}return C}var pa=tE(!0),nE=tE(!1),Nd=ws(null),Dd=null,Yo=null,f0=null;function p0(){f0=Yo=Dd=null}function m0(t){var e=Nd.current;Be(Nd),t._currentValue=e}function Sm(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function sa(t,e){Dd=t,f0=Yo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(fn=!0),t.firstContext=null)}function Qn(t){var e=t._currentValue;if(f0!==t)if(t={context:t,memoizedValue:e,next:null},Yo===null){if(Dd===null)throw Error(B(308));Yo=t,Dd.dependencies={lanes:0,firstContext:t}}else Yo=Yo.next=t;return e}var $s=null;function g0(t){$s===null?$s=[t]:$s.push(t)}function rE(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,g0(e)):(n.next=i.next,i.next=n),e.interleaved=n,gi(t,r)}function gi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Fi=!1;function y0(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function iE(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function hi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Xi(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Ee&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,gi(t,n)}return i=r.interleaved,i===null?(e.next=e,g0(r)):(e.next=i.next,i.next=e),r.interleaved=e,gi(t,n)}function Jc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,n0(t,n)}}function Sv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Od(t,e,n,r){var i=t.updateQueue;Fi=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;o=0,h=c=l=null,a=s;do{var p=a.lane,g=a.eventTime;if((r&p)===p){h!==null&&(h=h.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=t,k=a;switch(p=e,g=n,k.tag){case 1:if(w=k.payload,typeof w=="function"){f=w.call(g,f,p);break e}f=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=k.payload,p=typeof w=="function"?w.call(g,f,p):w,p==null)break e;f=Qe({},f,p);break e;case 2:Fi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else g={eventTime:g,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=g,l=f):h=h.next=g,o|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(h===null&&(l=f),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);no|=o,t.lanes=o,t.memoizedState=f}}function Tv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(B(191,i));i.call(r)}}}var Vu={},Nr=ws(Vu),uu=ws(Vu),cu=ws(Vu);function zs(t){if(t===Vu)throw Error(B(174));return t}function v0(t,e){switch(Le(cu,e),Le(uu,t),Le(Nr,Vu),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:im(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=im(e,t)}Be(Nr),Le(Nr,e)}function ma(){Be(Nr),Be(uu),Be(cu)}function sE(t){zs(cu.current);var e=zs(Nr.current),n=im(e,t.type);e!==n&&(Le(uu,t),Le(Nr,n))}function x0(t){uu.current===t&&(Be(Nr),Be(uu))}var Ge=ws(0);function jd(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Zf=[];function w0(){for(var t=0;t<Zf.length;t++)Zf[t]._workInProgressVersionPrimary=null;Zf.length=0}var Zc=Ei.ReactCurrentDispatcher,Xf=Ei.ReactCurrentBatchConfig,to=0,Ke=null,yt=null,It=null,Ld=!1,Ml=!1,du=0,c6=0;function Wt(){throw Error(B(321))}function _0(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!pr(t[n],e[n]))return!1;return!0}function b0(t,e,n,r,i,s){if(to=s,Ke=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Zc.current=t===null||t.memoizedState===null?p6:m6,t=n(r,i),Ml){s=0;do{if(Ml=!1,du=0,25<=s)throw Error(B(301));s+=1,It=yt=null,e.updateQueue=null,Zc.current=g6,t=n(r,i)}while(Ml)}if(Zc.current=Md,e=yt!==null&&yt.next!==null,to=0,It=yt=Ke=null,Ld=!1,e)throw Error(B(300));return t}function E0(){var t=du!==0;return du=0,t}function Tr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return It===null?Ke.memoizedState=It=t:It=It.next=t,It}function Yn(){if(yt===null){var t=Ke.alternate;t=t!==null?t.memoizedState:null}else t=yt.next;var e=It===null?Ke.memoizedState:It.next;if(e!==null)It=e,yt=t;else{if(t===null)throw Error(B(310));yt=t,t={memoizedState:yt.memoizedState,baseState:yt.baseState,baseQueue:yt.baseQueue,queue:yt.queue,next:null},It===null?Ke.memoizedState=It=t:It=It.next=t}return It}function hu(t,e){return typeof e=="function"?e(t):e}function ep(t){var e=Yn(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=yt,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var h=c.lane;if((to&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=r):l=l.next=f,Ke.lanes|=h,no|=h}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,pr(r,e.memoizedState)||(fn=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ke.lanes|=s,no|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function tp(t){var e=Yn(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);pr(s,e.memoizedState)||(fn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function oE(){}function aE(t,e){var n=Ke,r=Yn(),i=e(),s=!pr(r.memoizedState,i);if(s&&(r.memoizedState=i,fn=!0),r=r.queue,S0(cE.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||It!==null&&It.memoizedState.tag&1){if(n.flags|=2048,fu(9,uE.bind(null,n,r,i,e),void 0,null),Ct===null)throw Error(B(349));to&30||lE(n,e,i)}return i}function lE(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ke.updateQueue,e===null?(e={lastEffect:null,stores:null},Ke.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function uE(t,e,n,r){e.value=n,e.getSnapshot=r,dE(e)&&hE(t)}function cE(t,e,n){return n(function(){dE(e)&&hE(t)})}function dE(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!pr(t,n)}catch{return!0}}function hE(t){var e=gi(t,1);e!==null&&ur(e,t,1,-1)}function Iv(t){var e=Tr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:hu,lastRenderedState:t},e.queue=t,t=t.dispatch=f6.bind(null,Ke,t),[e.memoizedState,t]}function fu(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ke.updateQueue,e===null?(e={lastEffect:null,stores:null},Ke.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function fE(){return Yn().memoizedState}function Xc(t,e,n,r){var i=Tr();Ke.flags|=t,i.memoizedState=fu(1|e,n,void 0,r===void 0?null:r)}function kh(t,e,n,r){var i=Yn();r=r===void 0?null:r;var s=void 0;if(yt!==null){var o=yt.memoizedState;if(s=o.destroy,r!==null&&_0(r,o.deps)){i.memoizedState=fu(e,n,s,r);return}}Ke.flags|=t,i.memoizedState=fu(1|e,n,s,r)}function kv(t,e){return Xc(8390656,8,t,e)}function S0(t,e){return kh(2048,8,t,e)}function pE(t,e){return kh(4,2,t,e)}function mE(t,e){return kh(4,4,t,e)}function gE(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function yE(t,e,n){return n=n!=null?n.concat([t]):null,kh(4,4,gE.bind(null,e,t),n)}function T0(){}function vE(t,e){var n=Yn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&_0(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function xE(t,e){var n=Yn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&_0(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function wE(t,e,n){return to&21?(pr(n,e)||(n=Tb(),Ke.lanes|=n,no|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,fn=!0),t.memoizedState=n)}function d6(t,e){var n=Ne;Ne=n!==0&&4>n?n:4,t(!0);var r=Xf.transition;Xf.transition={};try{t(!1),e()}finally{Ne=n,Xf.transition=r}}function _E(){return Yn().memoizedState}function h6(t,e,n){var r=ts(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},bE(t))EE(e,n);else if(n=rE(t,e,n,r),n!==null){var i=rn();ur(n,t,r,i),SE(n,e,r)}}function f6(t,e,n){var r=ts(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(bE(t))EE(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,pr(a,o)){var l=e.interleaved;l===null?(i.next=i,g0(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=rE(t,e,i,r),n!==null&&(i=rn(),ur(n,t,r,i),SE(n,e,r))}}function bE(t){var e=t.alternate;return t===Ke||e!==null&&e===Ke}function EE(t,e){Ml=Ld=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function SE(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,n0(t,n)}}var Md={readContext:Qn,useCallback:Wt,useContext:Wt,useEffect:Wt,useImperativeHandle:Wt,useInsertionEffect:Wt,useLayoutEffect:Wt,useMemo:Wt,useReducer:Wt,useRef:Wt,useState:Wt,useDebugValue:Wt,useDeferredValue:Wt,useTransition:Wt,useMutableSource:Wt,useSyncExternalStore:Wt,useId:Wt,unstable_isNewReconciler:!1},p6={readContext:Qn,useCallback:function(t,e){return Tr().memoizedState=[t,e===void 0?null:e],t},useContext:Qn,useEffect:kv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Xc(4194308,4,gE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Xc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Xc(4,2,t,e)},useMemo:function(t,e){var n=Tr();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Tr();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=h6.bind(null,Ke,t),[r.memoizedState,t]},useRef:function(t){var e=Tr();return t={current:t},e.memoizedState=t},useState:Iv,useDebugValue:T0,useDeferredValue:function(t){return Tr().memoizedState=t},useTransition:function(){var t=Iv(!1),e=t[0];return t=d6.bind(null,t[1]),Tr().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ke,i=Tr();if(He){if(n===void 0)throw Error(B(407));n=n()}else{if(n=e(),Ct===null)throw Error(B(349));to&30||lE(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,kv(cE.bind(null,r,s,t),[t]),r.flags|=2048,fu(9,uE.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Tr(),e=Ct.identifierPrefix;if(He){var n=di,r=ci;n=(r&~(1<<32-lr(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=du++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=c6++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},m6={readContext:Qn,useCallback:vE,useContext:Qn,useEffect:S0,useImperativeHandle:yE,useInsertionEffect:pE,useLayoutEffect:mE,useMemo:xE,useReducer:ep,useRef:fE,useState:function(){return ep(hu)},useDebugValue:T0,useDeferredValue:function(t){var e=Yn();return wE(e,yt.memoizedState,t)},useTransition:function(){var t=ep(hu)[0],e=Yn().memoizedState;return[t,e]},useMutableSource:oE,useSyncExternalStore:aE,useId:_E,unstable_isNewReconciler:!1},g6={readContext:Qn,useCallback:vE,useContext:Qn,useEffect:S0,useImperativeHandle:yE,useInsertionEffect:pE,useLayoutEffect:mE,useMemo:xE,useReducer:tp,useRef:fE,useState:function(){return tp(hu)},useDebugValue:T0,useDeferredValue:function(t){var e=Yn();return yt===null?e.memoizedState=t:wE(e,yt.memoizedState,t)},useTransition:function(){var t=tp(hu)[0],e=Yn().memoizedState;return[t,e]},useMutableSource:oE,useSyncExternalStore:aE,useId:_E,unstable_isNewReconciler:!1};function rr(t,e){if(t&&t.defaultProps){e=Qe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Tm(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Qe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ch={isMounted:function(t){return(t=t._reactInternals)?fo(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=rn(),i=ts(t),s=hi(r,i);s.payload=e,n!=null&&(s.callback=n),e=Xi(t,s,i),e!==null&&(ur(e,t,i,r),Jc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=rn(),i=ts(t),s=hi(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Xi(t,s,i),e!==null&&(ur(e,t,i,r),Jc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=rn(),r=ts(t),i=hi(n,r);i.tag=2,e!=null&&(i.callback=e),e=Xi(t,i,r),e!==null&&(ur(e,t,r,n),Jc(e,t,r))}};function Cv(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!su(n,r)||!su(i,s):!0}function TE(t,e,n){var r=!1,i=cs,s=e.contextType;return typeof s=="object"&&s!==null?s=Qn(s):(i=gn(e)?Xs:Xt.current,r=e.contextTypes,s=(r=r!=null)?ha(t,i):cs),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ch,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Av(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ch.enqueueReplaceState(e,e.state,null)}function Im(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},y0(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Qn(s):(s=gn(e)?Xs:Xt.current,i.context=ha(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Tm(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ch.enqueueReplaceState(i,i.state,null),Od(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ga(t,e){try{var n="",r=e;do n+=HC(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function np(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function km(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var y6=typeof WeakMap=="function"?WeakMap:Map;function IE(t,e,n){n=hi(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Fd||(Fd=!0,Mm=r),km(t,e)},n}function kE(t,e,n){n=hi(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){km(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){km(t,e),typeof r!="function"&&(es===null?es=new Set([this]):es.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Rv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new y6;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=P6.bind(null,t,e,n),e.then(t,t))}function Pv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Nv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=hi(-1,1),e.tag=2,Xi(n,e,1))),n.lanes|=1),t)}var v6=Ei.ReactCurrentOwner,fn=!1;function tn(t,e,n,r){e.child=t===null?nE(e,null,n,r):pa(e,t.child,n,r)}function Dv(t,e,n,r,i){n=n.render;var s=e.ref;return sa(e,i),r=b0(t,e,n,r,s,i),n=E0(),t!==null&&!fn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,yi(t,e,i)):(He&&n&&c0(e),e.flags|=1,tn(t,e,r,i),e.child)}function Ov(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!D0(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,CE(t,e,s,r,i)):(t=rd(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:su,n(o,r)&&t.ref===e.ref)return yi(t,e,i)}return e.flags|=1,t=ns(s,r),t.ref=e.ref,t.return=e,e.child=t}function CE(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(su(s,r)&&t.ref===e.ref)if(fn=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(fn=!0);else return e.lanes=t.lanes,yi(t,e,i)}return Cm(t,e,n,r,i)}function AE(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Le(Zo,Sn),Sn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Le(Zo,Sn),Sn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Le(Zo,Sn),Sn|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Le(Zo,Sn),Sn|=r;return tn(t,e,i,n),e.child}function RE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Cm(t,e,n,r,i){var s=gn(n)?Xs:Xt.current;return s=ha(e,s),sa(e,i),n=b0(t,e,n,r,s,i),r=E0(),t!==null&&!fn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,yi(t,e,i)):(He&&r&&c0(e),e.flags|=1,tn(t,e,n,i),e.child)}function jv(t,e,n,r,i){if(gn(n)){var s=!0;Ad(e)}else s=!1;if(sa(e,i),e.stateNode===null)ed(t,e),TE(e,n,r),Im(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Qn(c):(c=gn(n)?Xs:Xt.current,c=ha(e,c));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&Av(e,o,r,c),Fi=!1;var p=e.memoizedState;o.state=p,Od(e,r,o,i),l=e.memoizedState,a!==r||p!==l||mn.current||Fi?(typeof h=="function"&&(Tm(e,n,h,r),l=e.memoizedState),(a=Fi||Cv(e,n,a,r,p,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,iE(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:rr(e.type,a),o.props=c,f=e.pendingProps,p=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Qn(l):(l=gn(n)?Xs:Xt.current,l=ha(e,l));var g=n.getDerivedStateFromProps;(h=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||p!==l)&&Av(e,o,r,l),Fi=!1,p=e.memoizedState,o.state=p,Od(e,r,o,i);var w=e.memoizedState;a!==f||p!==w||mn.current||Fi?(typeof g=="function"&&(Tm(e,n,g,r),w=e.memoizedState),(c=Fi||Cv(e,n,c,r,p,w,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=w),o.props=r,o.state=w,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),r=!1)}return Am(t,e,n,r,s,i)}function Am(t,e,n,r,i,s){RE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&wv(e,n,!1),yi(t,e,s);r=e.stateNode,v6.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=pa(e,t.child,null,s),e.child=pa(e,null,a,s)):tn(t,e,a,s),e.memoizedState=r.state,i&&wv(e,n,!0),e.child}function PE(t){var e=t.stateNode;e.pendingContext?xv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&xv(t,e.context,!1),v0(t,e.containerInfo)}function Lv(t,e,n,r,i){return fa(),h0(i),e.flags|=256,tn(t,e,n,r),e.child}var Rm={dehydrated:null,treeContext:null,retryLane:0};function Pm(t){return{baseLanes:t,cachePool:null,transitions:null}}function NE(t,e,n){var r=e.pendingProps,i=Ge.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Le(Ge,i&1),t===null)return Em(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ph(o,r,0,null),t=Gs(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Pm(n),e.memoizedState=Rm,t):I0(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return x6(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=ns(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=ns(a,s):(s=Gs(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Pm(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Rm,r}return s=t.child,t=s.sibling,r=ns(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function I0(t,e){return e=Ph({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Sc(t,e,n,r){return r!==null&&h0(r),pa(e,t.child,null,n),t=I0(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function x6(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=np(Error(B(422))),Sc(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Ph({mode:"visible",children:r.children},i,0,null),s=Gs(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&pa(e,t.child,null,o),e.child.memoizedState=Pm(o),e.memoizedState=Rm,s);if(!(e.mode&1))return Sc(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(B(419)),r=np(s,r,void 0),Sc(t,e,o,r)}if(a=(o&t.childLanes)!==0,fn||a){if(r=Ct,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,gi(t,i),ur(r,t,i,-1))}return N0(),r=np(Error(B(421))),Sc(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=N6.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Tn=Zi(i.nextSibling),kn=e,He=!0,sr=null,t!==null&&(Un[Bn++]=ci,Un[Bn++]=di,Un[Bn++]=eo,ci=t.id,di=t.overflow,eo=e),e=I0(e,r.children),e.flags|=4096,e)}function Mv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Sm(t.return,e,n)}function rp(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function DE(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(tn(t,e,r.children,n),r=Ge.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Mv(t,n,e);else if(t.tag===19)Mv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Le(Ge,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&jd(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),rp(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&jd(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}rp(e,!0,n,null,s);break;case"together":rp(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ed(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function yi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),no|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(B(153));if(e.child!==null){for(t=e.child,n=ns(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ns(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function w6(t,e,n){switch(e.tag){case 3:PE(e),fa();break;case 5:sE(e);break;case 1:gn(e.type)&&Ad(e);break;case 4:v0(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Le(Nd,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Le(Ge,Ge.current&1),e.flags|=128,null):n&e.child.childLanes?NE(t,e,n):(Le(Ge,Ge.current&1),t=yi(t,e,n),t!==null?t.sibling:null);Le(Ge,Ge.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return DE(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Le(Ge,Ge.current),r)break;return null;case 22:case 23:return e.lanes=0,AE(t,e,n)}return yi(t,e,n)}var OE,Nm,jE,LE;OE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Nm=function(){};jE=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,zs(Nr.current);var s=null;switch(n){case"input":i=em(t,i),r=em(t,r),s=[];break;case"select":i=Qe({},i,{value:void 0}),r=Qe({},r,{value:void 0}),s=[];break;case"textarea":i=rm(t,i),r=rm(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=kd)}sm(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Zl.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Zl.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&$e("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};LE=function(t,e,n,r){n!==r&&(e.flags|=4)};function pl(t,e){if(!He)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function qt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function _6(t,e,n){var r=e.pendingProps;switch(d0(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qt(e),null;case 1:return gn(e.type)&&Cd(),qt(e),null;case 3:return r=e.stateNode,ma(),Be(mn),Be(Xt),w0(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(bc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,sr!==null&&($m(sr),sr=null))),Nm(t,e),qt(e),null;case 5:x0(e);var i=zs(cu.current);if(n=e.type,t!==null&&e.stateNode!=null)jE(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(B(166));return qt(e),null}if(t=zs(Nr.current),bc(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Cr]=e,r[lu]=s,t=(e.mode&1)!==0,n){case"dialog":$e("cancel",r),$e("close",r);break;case"iframe":case"object":case"embed":$e("load",r);break;case"video":case"audio":for(i=0;i<El.length;i++)$e(El[i],r);break;case"source":$e("error",r);break;case"img":case"image":case"link":$e("error",r),$e("load",r);break;case"details":$e("toggle",r);break;case"input":q1(r,s),$e("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},$e("invalid",r);break;case"textarea":K1(r,s),$e("invalid",r)}sm(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&_c(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&_c(r.textContent,a,t),i=["children",""+a]):Zl.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&$e("scroll",r)}switch(n){case"input":fc(r),G1(r,s,!0);break;case"textarea":fc(r),Q1(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=kd)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=cb(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Cr]=e,t[lu]=r,OE(t,e,!1,!1),e.stateNode=t;e:{switch(o=om(n,r),n){case"dialog":$e("cancel",t),$e("close",t),i=r;break;case"iframe":case"object":case"embed":$e("load",t),i=r;break;case"video":case"audio":for(i=0;i<El.length;i++)$e(El[i],t);i=r;break;case"source":$e("error",t),i=r;break;case"img":case"image":case"link":$e("error",t),$e("load",t),i=r;break;case"details":$e("toggle",t),i=r;break;case"input":q1(t,r),i=em(t,r),$e("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Qe({},r,{value:void 0}),$e("invalid",t);break;case"textarea":K1(t,r),i=rm(t,r),$e("invalid",t);break;default:i=r}sm(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?fb(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&db(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Xl(t,l):typeof l=="number"&&Xl(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Zl.hasOwnProperty(s)?l!=null&&s==="onScroll"&&$e("scroll",t):l!=null&&Yg(t,s,l,o))}switch(n){case"input":fc(t),G1(t,r,!1);break;case"textarea":fc(t),Q1(t);break;case"option":r.value!=null&&t.setAttribute("value",""+us(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ta(t,!!r.multiple,s,!1):r.defaultValue!=null&&ta(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=kd)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return qt(e),null;case 6:if(t&&e.stateNode!=null)LE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(B(166));if(n=zs(cu.current),zs(Nr.current),bc(e)){if(r=e.stateNode,n=e.memoizedProps,r[Cr]=e,(s=r.nodeValue!==n)&&(t=kn,t!==null))switch(t.tag){case 3:_c(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&_c(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Cr]=e,e.stateNode=r}return qt(e),null;case 13:if(Be(Ge),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(He&&Tn!==null&&e.mode&1&&!(e.flags&128))eE(),fa(),e.flags|=98560,s=!1;else if(s=bc(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(B(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(B(317));s[Cr]=e}else fa(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;qt(e),s=!1}else sr!==null&&($m(sr),sr=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ge.current&1?vt===0&&(vt=3):N0())),e.updateQueue!==null&&(e.flags|=4),qt(e),null);case 4:return ma(),Nm(t,e),t===null&&ou(e.stateNode.containerInfo),qt(e),null;case 10:return m0(e.type._context),qt(e),null;case 17:return gn(e.type)&&Cd(),qt(e),null;case 19:if(Be(Ge),s=e.memoizedState,s===null)return qt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)pl(s,!1);else{if(vt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=jd(t),o!==null){for(e.flags|=128,pl(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Le(Ge,Ge.current&1|2),e.child}t=t.sibling}s.tail!==null&&rt()>ya&&(e.flags|=128,r=!0,pl(s,!1),e.lanes=4194304)}else{if(!r)if(t=jd(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),pl(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!He)return qt(e),null}else 2*rt()-s.renderingStartTime>ya&&n!==1073741824&&(e.flags|=128,r=!0,pl(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=rt(),e.sibling=null,n=Ge.current,Le(Ge,r?n&1|2:n&1),e):(qt(e),null);case 22:case 23:return P0(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Sn&1073741824&&(qt(e),e.subtreeFlags&6&&(e.flags|=8192)):qt(e),null;case 24:return null;case 25:return null}throw Error(B(156,e.tag))}function b6(t,e){switch(d0(e),e.tag){case 1:return gn(e.type)&&Cd(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ma(),Be(mn),Be(Xt),w0(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return x0(e),null;case 13:if(Be(Ge),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(B(340));fa()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Be(Ge),null;case 4:return ma(),null;case 10:return m0(e.type._context),null;case 22:case 23:return P0(),null;case 24:return null;default:return null}}var Tc=!1,Yt=!1,E6=typeof WeakSet=="function"?WeakSet:Set,Y=null;function Jo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){et(t,e,r)}else n.current=null}function Dm(t,e,n){try{n()}catch(r){et(t,e,r)}}var Vv=!1;function S6(t,e){if(gm=Sd,t=zb(),u0(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,h=0,f=t,p=null;t:for(;;){for(var g;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(g=f.firstChild)!==null;)p=f,f=g;for(;;){if(f===t)break t;if(p===n&&++c===i&&(a=o),p===s&&++h===r&&(l=o),(g=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ym={focusedElem:t,selectionRange:n},Sd=!1,Y=e;Y!==null;)if(e=Y,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Y=t;else for(;Y!==null;){e=Y;try{var w=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var k=w.memoizedProps,C=w.memoizedState,x=e.stateNode,v=x.getSnapshotBeforeUpdate(e.elementType===e.type?k:rr(e.type,k),C);x.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var E=e.stateNode.containerInfo;E.nodeType===1?E.textContent="":E.nodeType===9&&E.documentElement&&E.removeChild(E.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(P){et(e,e.return,P)}if(t=e.sibling,t!==null){t.return=e.return,Y=t;break}Y=e.return}return w=Vv,Vv=!1,w}function Vl(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Dm(e,n,s)}i=i.next}while(i!==r)}}function Ah(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Om(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function ME(t){var e=t.alternate;e!==null&&(t.alternate=null,ME(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Cr],delete e[lu],delete e[wm],delete e[o6],delete e[a6])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function VE(t){return t.tag===5||t.tag===3||t.tag===4}function Fv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||VE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function jm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=kd));else if(r!==4&&(t=t.child,t!==null))for(jm(t,e,n),t=t.sibling;t!==null;)jm(t,e,n),t=t.sibling}function Lm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Lm(t,e,n),t=t.sibling;t!==null;)Lm(t,e,n),t=t.sibling}var jt=null,ir=!1;function Oi(t,e,n){for(n=n.child;n!==null;)FE(t,e,n),n=n.sibling}function FE(t,e,n){if(Pr&&typeof Pr.onCommitFiberUnmount=="function")try{Pr.onCommitFiberUnmount(_h,n)}catch{}switch(n.tag){case 5:Yt||Jo(n,e);case 6:var r=jt,i=ir;jt=null,Oi(t,e,n),jt=r,ir=i,jt!==null&&(ir?(t=jt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):jt.removeChild(n.stateNode));break;case 18:jt!==null&&(ir?(t=jt,n=n.stateNode,t.nodeType===8?Yf(t.parentNode,n):t.nodeType===1&&Yf(t,n),ru(t)):Yf(jt,n.stateNode));break;case 4:r=jt,i=ir,jt=n.stateNode.containerInfo,ir=!0,Oi(t,e,n),jt=r,ir=i;break;case 0:case 11:case 14:case 15:if(!Yt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Dm(n,e,o),i=i.next}while(i!==r)}Oi(t,e,n);break;case 1:if(!Yt&&(Jo(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){et(n,e,a)}Oi(t,e,n);break;case 21:Oi(t,e,n);break;case 22:n.mode&1?(Yt=(r=Yt)||n.memoizedState!==null,Oi(t,e,n),Yt=r):Oi(t,e,n);break;default:Oi(t,e,n)}}function $v(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new E6),e.forEach(function(r){var i=D6.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function er(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:jt=a.stateNode,ir=!1;break e;case 3:jt=a.stateNode.containerInfo,ir=!0;break e;case 4:jt=a.stateNode.containerInfo,ir=!0;break e}a=a.return}if(jt===null)throw Error(B(160));FE(s,o,i),jt=null,ir=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){et(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)$E(e,t),e=e.sibling}function $E(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(er(e,t),_r(t),r&4){try{Vl(3,t,t.return),Ah(3,t)}catch(k){et(t,t.return,k)}try{Vl(5,t,t.return)}catch(k){et(t,t.return,k)}}break;case 1:er(e,t),_r(t),r&512&&n!==null&&Jo(n,n.return);break;case 5:if(er(e,t),_r(t),r&512&&n!==null&&Jo(n,n.return),t.flags&32){var i=t.stateNode;try{Xl(i,"")}catch(k){et(t,t.return,k)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&lb(i,s),om(a,o);var c=om(a,s);for(o=0;o<l.length;o+=2){var h=l[o],f=l[o+1];h==="style"?fb(i,f):h==="dangerouslySetInnerHTML"?db(i,f):h==="children"?Xl(i,f):Yg(i,h,f,c)}switch(a){case"input":tm(i,s);break;case"textarea":ub(i,s);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?ta(i,!!s.multiple,g,!1):p!==!!s.multiple&&(s.defaultValue!=null?ta(i,!!s.multiple,s.defaultValue,!0):ta(i,!!s.multiple,s.multiple?[]:"",!1))}i[lu]=s}catch(k){et(t,t.return,k)}}break;case 6:if(er(e,t),_r(t),r&4){if(t.stateNode===null)throw Error(B(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(k){et(t,t.return,k)}}break;case 3:if(er(e,t),_r(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ru(e.containerInfo)}catch(k){et(t,t.return,k)}break;case 4:er(e,t),_r(t);break;case 13:er(e,t),_r(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(A0=rt())),r&4&&$v(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Yt=(c=Yt)||h,er(e,t),Yt=c):er(e,t),_r(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(Y=t,h=t.child;h!==null;){for(f=Y=h;Y!==null;){switch(p=Y,g=p.child,p.tag){case 0:case 11:case 14:case 15:Vl(4,p,p.return);break;case 1:Jo(p,p.return);var w=p.stateNode;if(typeof w.componentWillUnmount=="function"){r=p,n=p.return;try{e=r,w.props=e.memoizedProps,w.state=e.memoizedState,w.componentWillUnmount()}catch(k){et(r,n,k)}}break;case 5:Jo(p,p.return);break;case 22:if(p.memoizedState!==null){Uv(f);continue}}g!==null?(g.return=p,Y=g):Uv(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=hb("display",o))}catch(k){et(t,t.return,k)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(k){et(t,t.return,k)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:er(e,t),_r(t),r&4&&$v(t);break;case 21:break;default:er(e,t),_r(t)}}function _r(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(VE(n)){var r=n;break e}n=n.return}throw Error(B(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Xl(i,""),r.flags&=-33);var s=Fv(t);Lm(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Fv(t);jm(t,a,o);break;default:throw Error(B(161))}}catch(l){et(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function T6(t,e,n){Y=t,zE(t)}function zE(t,e,n){for(var r=(t.mode&1)!==0;Y!==null;){var i=Y,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Tc;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Yt;a=Tc;var c=Yt;if(Tc=o,(Yt=l)&&!c)for(Y=i;Y!==null;)o=Y,l=o.child,o.tag===22&&o.memoizedState!==null?Bv(i):l!==null?(l.return=o,Y=l):Bv(i);for(;s!==null;)Y=s,zE(s),s=s.sibling;Y=i,Tc=a,Yt=c}zv(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,Y=s):zv(t)}}function zv(t){for(;Y!==null;){var e=Y;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Yt||Ah(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Yt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:rr(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Tv(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Tv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&ru(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}Yt||e.flags&512&&Om(e)}catch(p){et(e,e.return,p)}}if(e===t){Y=null;break}if(n=e.sibling,n!==null){n.return=e.return,Y=n;break}Y=e.return}}function Uv(t){for(;Y!==null;){var e=Y;if(e===t){Y=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Y=n;break}Y=e.return}}function Bv(t){for(;Y!==null;){var e=Y;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ah(4,e)}catch(l){et(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){et(e,i,l)}}var s=e.return;try{Om(e)}catch(l){et(e,s,l)}break;case 5:var o=e.return;try{Om(e)}catch(l){et(e,o,l)}}}catch(l){et(e,e.return,l)}if(e===t){Y=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Y=a;break}Y=e.return}}var I6=Math.ceil,Vd=Ei.ReactCurrentDispatcher,k0=Ei.ReactCurrentOwner,Gn=Ei.ReactCurrentBatchConfig,Ee=0,Ct=null,dt=null,Ft=0,Sn=0,Zo=ws(0),vt=0,pu=null,no=0,Rh=0,C0=0,Fl=null,dn=null,A0=0,ya=1/0,ai=null,Fd=!1,Mm=null,es=null,Ic=!1,qi=null,$d=0,$l=0,Vm=null,td=-1,nd=0;function rn(){return Ee&6?rt():td!==-1?td:td=rt()}function ts(t){return t.mode&1?Ee&2&&Ft!==0?Ft&-Ft:u6.transition!==null?(nd===0&&(nd=Tb()),nd):(t=Ne,t!==0||(t=window.event,t=t===void 0?16:Nb(t.type)),t):1}function ur(t,e,n,r){if(50<$l)throw $l=0,Vm=null,Error(B(185));ju(t,n,r),(!(Ee&2)||t!==Ct)&&(t===Ct&&(!(Ee&2)&&(Rh|=n),vt===4&&Ui(t,Ft)),yn(t,r),n===1&&Ee===0&&!(e.mode&1)&&(ya=rt()+500,Ih&&_s()))}function yn(t,e){var n=t.callbackNode;uA(t,e);var r=Ed(t,t===Ct?Ft:0);if(r===0)n!==null&&Z1(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Z1(n),e===1)t.tag===0?l6(Hv.bind(null,t)):Jb(Hv.bind(null,t)),i6(function(){!(Ee&6)&&_s()}),n=null;else{switch(Ib(r)){case 1:n=t0;break;case 4:n=Eb;break;case 16:n=bd;break;case 536870912:n=Sb;break;default:n=bd}n=QE(n,UE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function UE(t,e){if(td=-1,nd=0,Ee&6)throw Error(B(327));var n=t.callbackNode;if(oa()&&t.callbackNode!==n)return null;var r=Ed(t,t===Ct?Ft:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=zd(t,r);else{e=r;var i=Ee;Ee|=2;var s=HE();(Ct!==t||Ft!==e)&&(ai=null,ya=rt()+500,qs(t,e));do try{A6();break}catch(a){BE(t,a)}while(!0);p0(),Vd.current=s,Ee=i,dt!==null?e=0:(Ct=null,Ft=0,e=vt)}if(e!==0){if(e===2&&(i=dm(t),i!==0&&(r=i,e=Fm(t,i))),e===1)throw n=pu,qs(t,0),Ui(t,r),yn(t,rt()),n;if(e===6)Ui(t,r);else{if(i=t.current.alternate,!(r&30)&&!k6(i)&&(e=zd(t,r),e===2&&(s=dm(t),s!==0&&(r=s,e=Fm(t,s))),e===1))throw n=pu,qs(t,0),Ui(t,r),yn(t,rt()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(B(345));case 2:Ms(t,dn,ai);break;case 3:if(Ui(t,r),(r&130023424)===r&&(e=A0+500-rt(),10<e)){if(Ed(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){rn(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=xm(Ms.bind(null,t,dn,ai),e);break}Ms(t,dn,ai);break;case 4:if(Ui(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-lr(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=rt()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*I6(r/1960))-r,10<r){t.timeoutHandle=xm(Ms.bind(null,t,dn,ai),r);break}Ms(t,dn,ai);break;case 5:Ms(t,dn,ai);break;default:throw Error(B(329))}}}return yn(t,rt()),t.callbackNode===n?UE.bind(null,t):null}function Fm(t,e){var n=Fl;return t.current.memoizedState.isDehydrated&&(qs(t,e).flags|=256),t=zd(t,e),t!==2&&(e=dn,dn=n,e!==null&&$m(e)),t}function $m(t){dn===null?dn=t:dn.push.apply(dn,t)}function k6(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!pr(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ui(t,e){for(e&=~C0,e&=~Rh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-lr(e),r=1<<n;t[n]=-1,e&=~r}}function Hv(t){if(Ee&6)throw Error(B(327));oa();var e=Ed(t,0);if(!(e&1))return yn(t,rt()),null;var n=zd(t,e);if(t.tag!==0&&n===2){var r=dm(t);r!==0&&(e=r,n=Fm(t,r))}if(n===1)throw n=pu,qs(t,0),Ui(t,e),yn(t,rt()),n;if(n===6)throw Error(B(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ms(t,dn,ai),yn(t,rt()),null}function R0(t,e){var n=Ee;Ee|=1;try{return t(e)}finally{Ee=n,Ee===0&&(ya=rt()+500,Ih&&_s())}}function ro(t){qi!==null&&qi.tag===0&&!(Ee&6)&&oa();var e=Ee;Ee|=1;var n=Gn.transition,r=Ne;try{if(Gn.transition=null,Ne=1,t)return t()}finally{Ne=r,Gn.transition=n,Ee=e,!(Ee&6)&&_s()}}function P0(){Sn=Zo.current,Be(Zo)}function qs(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,r6(n)),dt!==null)for(n=dt.return;n!==null;){var r=n;switch(d0(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Cd();break;case 3:ma(),Be(mn),Be(Xt),w0();break;case 5:x0(r);break;case 4:ma();break;case 13:Be(Ge);break;case 19:Be(Ge);break;case 10:m0(r.type._context);break;case 22:case 23:P0()}n=n.return}if(Ct=t,dt=t=ns(t.current,null),Ft=Sn=e,vt=0,pu=null,C0=Rh=no=0,dn=Fl=null,$s!==null){for(e=0;e<$s.length;e++)if(n=$s[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}$s=null}return t}function BE(t,e){do{var n=dt;try{if(p0(),Zc.current=Md,Ld){for(var r=Ke.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ld=!1}if(to=0,It=yt=Ke=null,Ml=!1,du=0,k0.current=null,n===null||n.return===null){vt=1,pu=e,dt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ft,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=a,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var g=Pv(o);if(g!==null){g.flags&=-257,Nv(g,o,a,s,e),g.mode&1&&Rv(s,c,e),e=g,l=c;var w=e.updateQueue;if(w===null){var k=new Set;k.add(l),e.updateQueue=k}else w.add(l);break e}else{if(!(e&1)){Rv(s,c,e),N0();break e}l=Error(B(426))}}else if(He&&a.mode&1){var C=Pv(o);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Nv(C,o,a,s,e),h0(ga(l,a));break e}}s=l=ga(l,a),vt!==4&&(vt=2),Fl===null?Fl=[s]:Fl.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var x=IE(s,l,e);Sv(s,x);break e;case 1:a=l;var v=s.type,E=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||E!==null&&typeof E.componentDidCatch=="function"&&(es===null||!es.has(E)))){s.flags|=65536,e&=-e,s.lanes|=e;var P=kE(s,a,e);Sv(s,P);break e}}s=s.return}while(s!==null)}qE(n)}catch(j){e=j,dt===n&&n!==null&&(dt=n=n.return);continue}break}while(!0)}function HE(){var t=Vd.current;return Vd.current=Md,t===null?Md:t}function N0(){(vt===0||vt===3||vt===2)&&(vt=4),Ct===null||!(no&268435455)&&!(Rh&268435455)||Ui(Ct,Ft)}function zd(t,e){var n=Ee;Ee|=2;var r=HE();(Ct!==t||Ft!==e)&&(ai=null,qs(t,e));do try{C6();break}catch(i){BE(t,i)}while(!0);if(p0(),Ee=n,Vd.current=r,dt!==null)throw Error(B(261));return Ct=null,Ft=0,vt}function C6(){for(;dt!==null;)WE(dt)}function A6(){for(;dt!==null&&!eA();)WE(dt)}function WE(t){var e=KE(t.alternate,t,Sn);t.memoizedProps=t.pendingProps,e===null?qE(t):dt=e,k0.current=null}function qE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=b6(n,e),n!==null){n.flags&=32767,dt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{vt=6,dt=null;return}}else if(n=_6(n,e,Sn),n!==null){dt=n;return}if(e=e.sibling,e!==null){dt=e;return}dt=e=t}while(e!==null);vt===0&&(vt=5)}function Ms(t,e,n){var r=Ne,i=Gn.transition;try{Gn.transition=null,Ne=1,R6(t,e,n,r)}finally{Gn.transition=i,Ne=r}return null}function R6(t,e,n,r){do oa();while(qi!==null);if(Ee&6)throw Error(B(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(B(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(cA(t,s),t===Ct&&(dt=Ct=null,Ft=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ic||(Ic=!0,QE(bd,function(){return oa(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Gn.transition,Gn.transition=null;var o=Ne;Ne=1;var a=Ee;Ee|=4,k0.current=null,S6(t,n),$E(n,t),YA(ym),Sd=!!gm,ym=gm=null,t.current=n,T6(n),tA(),Ee=a,Ne=o,Gn.transition=s}else t.current=n;if(Ic&&(Ic=!1,qi=t,$d=i),s=t.pendingLanes,s===0&&(es=null),iA(n.stateNode),yn(t,rt()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Fd)throw Fd=!1,t=Mm,Mm=null,t;return $d&1&&t.tag!==0&&oa(),s=t.pendingLanes,s&1?t===Vm?$l++:($l=0,Vm=t):$l=0,_s(),null}function oa(){if(qi!==null){var t=Ib($d),e=Gn.transition,n=Ne;try{if(Gn.transition=null,Ne=16>t?16:t,qi===null)var r=!1;else{if(t=qi,qi=null,$d=0,Ee&6)throw Error(B(331));var i=Ee;for(Ee|=4,Y=t.current;Y!==null;){var s=Y,o=s.child;if(Y.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Y=c;Y!==null;){var h=Y;switch(h.tag){case 0:case 11:case 15:Vl(8,h,s)}var f=h.child;if(f!==null)f.return=h,Y=f;else for(;Y!==null;){h=Y;var p=h.sibling,g=h.return;if(ME(h),h===c){Y=null;break}if(p!==null){p.return=g,Y=p;break}Y=g}}}var w=s.alternate;if(w!==null){var k=w.child;if(k!==null){w.child=null;do{var C=k.sibling;k.sibling=null,k=C}while(k!==null)}}Y=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Y=o;else e:for(;Y!==null;){if(s=Y,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Vl(9,s,s.return)}var x=s.sibling;if(x!==null){x.return=s.return,Y=x;break e}Y=s.return}}var v=t.current;for(Y=v;Y!==null;){o=Y;var E=o.child;if(o.subtreeFlags&2064&&E!==null)E.return=o,Y=E;else e:for(o=v;Y!==null;){if(a=Y,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ah(9,a)}}catch(j){et(a,a.return,j)}if(a===o){Y=null;break e}var P=a.sibling;if(P!==null){P.return=a.return,Y=P;break e}Y=a.return}}if(Ee=i,_s(),Pr&&typeof Pr.onPostCommitFiberRoot=="function")try{Pr.onPostCommitFiberRoot(_h,t)}catch{}r=!0}return r}finally{Ne=n,Gn.transition=e}}return!1}function Wv(t,e,n){e=ga(n,e),e=IE(t,e,1),t=Xi(t,e,1),e=rn(),t!==null&&(ju(t,1,e),yn(t,e))}function et(t,e,n){if(t.tag===3)Wv(t,t,n);else for(;e!==null;){if(e.tag===3){Wv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(es===null||!es.has(r))){t=ga(n,t),t=kE(e,t,1),e=Xi(e,t,1),t=rn(),e!==null&&(ju(e,1,t),yn(e,t));break}}e=e.return}}function P6(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=rn(),t.pingedLanes|=t.suspendedLanes&n,Ct===t&&(Ft&n)===n&&(vt===4||vt===3&&(Ft&130023424)===Ft&&500>rt()-A0?qs(t,0):C0|=n),yn(t,e)}function GE(t,e){e===0&&(t.mode&1?(e=gc,gc<<=1,!(gc&130023424)&&(gc=4194304)):e=1);var n=rn();t=gi(t,e),t!==null&&(ju(t,e,n),yn(t,n))}function N6(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),GE(t,n)}function D6(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(B(314))}r!==null&&r.delete(e),GE(t,n)}var KE;KE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||mn.current)fn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return fn=!1,w6(t,e,n);fn=!!(t.flags&131072)}else fn=!1,He&&e.flags&1048576&&Zb(e,Pd,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ed(t,e),t=e.pendingProps;var i=ha(e,Xt.current);sa(e,n),i=b0(null,e,r,t,i,n);var s=E0();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,gn(r)?(s=!0,Ad(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,y0(e),i.updater=Ch,e.stateNode=i,i._reactInternals=e,Im(e,r,t,n),e=Am(null,e,r,!0,s,n)):(e.tag=0,He&&s&&c0(e),tn(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ed(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=j6(r),t=rr(r,t),i){case 0:e=Cm(null,e,r,t,n);break e;case 1:e=jv(null,e,r,t,n);break e;case 11:e=Dv(null,e,r,t,n);break e;case 14:e=Ov(null,e,r,rr(r.type,t),n);break e}throw Error(B(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:rr(r,i),Cm(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:rr(r,i),jv(t,e,r,i,n);case 3:e:{if(PE(e),t===null)throw Error(B(387));r=e.pendingProps,s=e.memoizedState,i=s.element,iE(t,e),Od(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ga(Error(B(423)),e),e=Lv(t,e,r,n,i);break e}else if(r!==i){i=ga(Error(B(424)),e),e=Lv(t,e,r,n,i);break e}else for(Tn=Zi(e.stateNode.containerInfo.firstChild),kn=e,He=!0,sr=null,n=nE(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(fa(),r===i){e=yi(t,e,n);break e}tn(t,e,r,n)}e=e.child}return e;case 5:return sE(e),t===null&&Em(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,vm(r,i)?o=null:s!==null&&vm(r,s)&&(e.flags|=32),RE(t,e),tn(t,e,o,n),e.child;case 6:return t===null&&Em(e),null;case 13:return NE(t,e,n);case 4:return v0(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=pa(e,null,r,n):tn(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:rr(r,i),Dv(t,e,r,i,n);case 7:return tn(t,e,e.pendingProps,n),e.child;case 8:return tn(t,e,e.pendingProps.children,n),e.child;case 12:return tn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Le(Nd,r._currentValue),r._currentValue=o,s!==null)if(pr(s.value,o)){if(s.children===i.children&&!mn.current){e=yi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=hi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Sm(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(B(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Sm(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}tn(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,sa(e,n),i=Qn(i),r=r(i),e.flags|=1,tn(t,e,r,n),e.child;case 14:return r=e.type,i=rr(r,e.pendingProps),i=rr(r.type,i),Ov(t,e,r,i,n);case 15:return CE(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:rr(r,i),ed(t,e),e.tag=1,gn(r)?(t=!0,Ad(e)):t=!1,sa(e,n),TE(e,r,i),Im(e,r,i,n),Am(null,e,r,!0,t,n);case 19:return DE(t,e,n);case 22:return AE(t,e,n)}throw Error(B(156,e.tag))};function QE(t,e){return bb(t,e)}function O6(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Hn(t,e,n,r){return new O6(t,e,n,r)}function D0(t){return t=t.prototype,!(!t||!t.isReactComponent)}function j6(t){if(typeof t=="function")return D0(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Zg)return 11;if(t===Xg)return 14}return 2}function ns(t,e){var n=t.alternate;return n===null?(n=Hn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function rd(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")D0(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Uo:return Gs(n.children,i,s,e);case Jg:o=8,i|=8;break;case Yp:return t=Hn(12,n,e,i|2),t.elementType=Yp,t.lanes=s,t;case Jp:return t=Hn(13,n,e,i),t.elementType=Jp,t.lanes=s,t;case Zp:return t=Hn(19,n,e,i),t.elementType=Zp,t.lanes=s,t;case sb:return Ph(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case rb:o=10;break e;case ib:o=9;break e;case Zg:o=11;break e;case Xg:o=14;break e;case Vi:o=16,r=null;break e}throw Error(B(130,t==null?t:typeof t,""))}return e=Hn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Gs(t,e,n,r){return t=Hn(7,t,r,e),t.lanes=n,t}function Ph(t,e,n,r){return t=Hn(22,t,r,e),t.elementType=sb,t.lanes=n,t.stateNode={isHidden:!1},t}function ip(t,e,n){return t=Hn(6,t,null,e),t.lanes=n,t}function sp(t,e,n){return e=Hn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function L6(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ff(0),this.expirationTimes=Ff(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ff(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function O0(t,e,n,r,i,s,o,a,l){return t=new L6(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Hn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},y0(s),t}function M6(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:zo,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function YE(t){if(!t)return cs;t=t._reactInternals;e:{if(fo(t)!==t||t.tag!==1)throw Error(B(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(gn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(B(171))}if(t.tag===1){var n=t.type;if(gn(n))return Yb(t,n,e)}return e}function JE(t,e,n,r,i,s,o,a,l){return t=O0(n,r,!0,t,i,s,o,a,l),t.context=YE(null),n=t.current,r=rn(),i=ts(n),s=hi(r,i),s.callback=e??null,Xi(n,s,i),t.current.lanes=i,ju(t,i,r),yn(t,r),t}function Nh(t,e,n,r){var i=e.current,s=rn(),o=ts(i);return n=YE(n),e.context===null?e.context=n:e.pendingContext=n,e=hi(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Xi(i,e,o),t!==null&&(ur(t,i,o,s),Jc(t,i,o)),o}function Ud(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function qv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function j0(t,e){qv(t,e),(t=t.alternate)&&qv(t,e)}function V6(){return null}var ZE=typeof reportError=="function"?reportError:function(t){console.error(t)};function L0(t){this._internalRoot=t}Dh.prototype.render=L0.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(B(409));Nh(t,e,null,null)};Dh.prototype.unmount=L0.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ro(function(){Nh(null,t,null,null)}),e[mi]=null}};function Dh(t){this._internalRoot=t}Dh.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ab();t={blockedOn:null,target:t,priority:e};for(var n=0;n<zi.length&&e!==0&&e<zi[n].priority;n++);zi.splice(n,0,t),n===0&&Pb(t)}};function M0(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Oh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Gv(){}function F6(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Ud(o);s.call(c)}}var o=JE(e,r,t,0,null,!1,!1,"",Gv);return t._reactRootContainer=o,t[mi]=o.current,ou(t.nodeType===8?t.parentNode:t),ro(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Ud(l);a.call(c)}}var l=O0(t,0,!1,null,null,!1,!1,"",Gv);return t._reactRootContainer=l,t[mi]=l.current,ou(t.nodeType===8?t.parentNode:t),ro(function(){Nh(e,l,n,r)}),l}function jh(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Ud(o);a.call(l)}}Nh(e,o,t,i)}else o=F6(n,e,t,i,r);return Ud(o)}kb=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=bl(e.pendingLanes);n!==0&&(n0(e,n|1),yn(e,rt()),!(Ee&6)&&(ya=rt()+500,_s()))}break;case 13:ro(function(){var r=gi(t,1);if(r!==null){var i=rn();ur(r,t,1,i)}}),j0(t,1)}};r0=function(t){if(t.tag===13){var e=gi(t,134217728);if(e!==null){var n=rn();ur(e,t,134217728,n)}j0(t,134217728)}};Cb=function(t){if(t.tag===13){var e=ts(t),n=gi(t,e);if(n!==null){var r=rn();ur(n,t,e,r)}j0(t,e)}};Ab=function(){return Ne};Rb=function(t,e){var n=Ne;try{return Ne=t,e()}finally{Ne=n}};lm=function(t,e,n){switch(e){case"input":if(tm(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Th(r);if(!i)throw Error(B(90));ab(r),tm(r,i)}}}break;case"textarea":ub(t,n);break;case"select":e=n.value,e!=null&&ta(t,!!n.multiple,e,!1)}};gb=R0;yb=ro;var $6={usingClientEntryPoint:!1,Events:[Mu,qo,Th,pb,mb,R0]},ml={findFiberByHostInstance:Fs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},z6={bundleType:ml.bundleType,version:ml.version,rendererPackageName:ml.rendererPackageName,rendererConfig:ml.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ei.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=wb(t),t===null?null:t.stateNode},findFiberByHostInstance:ml.findFiberByHostInstance||V6,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var kc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!kc.isDisabled&&kc.supportsFiber)try{_h=kc.inject(z6),Pr=kc}catch{}}Dn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$6;Dn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!M0(e))throw Error(B(200));return M6(t,e,null,n)};Dn.createRoot=function(t,e){if(!M0(t))throw Error(B(299));var n=!1,r="",i=ZE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=O0(t,1,!1,null,null,n,!1,r,i),t[mi]=e.current,ou(t.nodeType===8?t.parentNode:t),new L0(e)};Dn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(B(188)):(t=Object.keys(t).join(","),Error(B(268,t)));return t=wb(e),t=t===null?null:t.stateNode,t};Dn.flushSync=function(t){return ro(t)};Dn.hydrate=function(t,e,n){if(!Oh(e))throw Error(B(200));return jh(null,t,e,!0,n)};Dn.hydrateRoot=function(t,e,n){if(!M0(t))throw Error(B(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=ZE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=JE(e,null,t,1,n??null,i,!1,s,o),t[mi]=e.current,ou(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Dh(e)};Dn.render=function(t,e,n){if(!Oh(e))throw Error(B(200));return jh(null,t,e,!1,n)};Dn.unmountComponentAtNode=function(t){if(!Oh(t))throw Error(B(40));return t._reactRootContainer?(ro(function(){jh(null,null,t,!1,function(){t._reactRootContainer=null,t[mi]=null})}),!0):!1};Dn.unstable_batchedUpdates=R0;Dn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Oh(n))throw Error(B(200));if(t==null||t._reactInternals===void 0)throw Error(B(38));return jh(t,e,n,!1,r)};Dn.version="18.3.1-next-f1338f8080-20240426";function XE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(XE)}catch(t){console.error(t)}}XE(),X_.exports=Dn;var U6=X_.exports,Kv=U6;Kp.createRoot=Kv.createRoot,Kp.hydrateRoot=Kv.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function mu(){return mu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},mu.apply(this,arguments)}var Gi;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Gi||(Gi={}));const Qv="popstate";function B6(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return zm("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Bd(i)}return W6(e,n,null,t)}function it(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function eS(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function H6(){return Math.random().toString(36).substr(2,8)}function Yv(t,e){return{usr:t.state,key:t.key,idx:e}}function zm(t,e,n,r){return n===void 0&&(n=null),mu({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?La(e):e,{state:n,key:e&&e.key||r||H6()})}function Bd(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function La(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function W6(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Gi.Pop,l=null,c=h();c==null&&(c=0,o.replaceState(mu({},o.state,{idx:c}),""));function h(){return(o.state||{idx:null}).idx}function f(){a=Gi.Pop;let C=h(),x=C==null?null:C-c;c=C,l&&l({action:a,location:k.location,delta:x})}function p(C,x){a=Gi.Push;let v=zm(k.location,C,x);c=h()+1;let E=Yv(v,c),P=k.createHref(v);try{o.pushState(E,"",P)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;i.location.assign(P)}s&&l&&l({action:a,location:k.location,delta:1})}function g(C,x){a=Gi.Replace;let v=zm(k.location,C,x);c=h();let E=Yv(v,c),P=k.createHref(v);o.replaceState(E,"",P),s&&l&&l({action:a,location:k.location,delta:0})}function w(C){let x=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof C=="string"?C:Bd(C);return v=v.replace(/ $/,"%20"),it(x,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,x)}let k={get action(){return a},get location(){return t(i,o)},listen(C){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Qv,f),l=C,()=>{i.removeEventListener(Qv,f),l=null}},createHref(C){return e(i,C)},createURL:w,encodeLocation(C){let x=w(C);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:p,replace:g,go(C){return o.go(C)}};return k}var Jv;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Jv||(Jv={}));function q6(t,e,n){return n===void 0&&(n="/"),G6(t,e,n)}function G6(t,e,n,r){let i=typeof e=="string"?La(e):e,s=V0(i.pathname||"/",n);if(s==null)return null;let o=tS(t);K6(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let c=o5(s);a=r5(o[l],c)}return a}function tS(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(it(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=rs([r,l.relativePath]),h=n.concat(l);s.children&&s.children.length>0&&(it(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),tS(s.children,e,h,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:t5(c,s.index),routesMeta:h})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of nS(s.path))i(s,o,l)}),e}function nS(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=nS(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function K6(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:n5(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Q6=/^:[\w-]+$/,Y6=3,J6=2,Z6=1,X6=10,e5=-2,Zv=t=>t==="*";function t5(t,e){let n=t.split("/"),r=n.length;return n.some(Zv)&&(r+=e5),e&&(r+=J6),n.filter(i=>!Zv(i)).reduce((i,s)=>i+(Q6.test(s)?Y6:s===""?Z6:X6),r)}function n5(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function r5(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],c=a===r.length-1,h=s==="/"?e:e.slice(s.length)||"/",f=i5({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},h),p=l.route;if(!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:rs([s,f.pathname]),pathnameBase:c5(rs([s,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(s=rs([s,f.pathnameBase]))}return o}function i5(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=s5(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,h,f)=>{let{paramName:p,isOptional:g}=h;if(p==="*"){let k=a[f]||"";o=s.slice(0,s.length-k.length).replace(/(.)\/+$/,"$1")}const w=a[f];return g&&!w?c[p]=void 0:c[p]=(w||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function s5(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),eS(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function o5(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return eS(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function V0(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function a5(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?La(t):t;return{pathname:n?n.startsWith("/")?n:l5(n,e):e,search:d5(r),hash:h5(i)}}function l5(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function op(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function u5(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function F0(t,e){let n=u5(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function $0(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=La(t):(i=mu({},t),it(!i.pathname||!i.pathname.includes("?"),op("?","pathname","search",i)),it(!i.pathname||!i.pathname.includes("#"),op("#","pathname","hash",i)),it(!i.search||!i.search.includes("#"),op("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),f-=1;i.pathname=p.join("/")}a=f>=0?e[f]:"/"}let l=a5(i,a),c=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||h)&&(l.pathname+="/"),l}const rs=t=>t.join("/").replace(/\/\/+/g,"/"),c5=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),d5=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,h5=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function f5(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const rS=["post","put","patch","delete"];new Set(rS);const p5=["get",...rS];new Set(p5);/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function gu(){return gu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},gu.apply(this,arguments)}const z0=D.createContext(null),m5=D.createContext(null),bs=D.createContext(null),Lh=D.createContext(null),Si=D.createContext({outlet:null,matches:[],isDataRoute:!1}),iS=D.createContext(null);function g5(t,e){let{relative:n}=e===void 0?{}:e;Ma()||it(!1);let{basename:r,navigator:i}=D.useContext(bs),{hash:s,pathname:o,search:a}=aS(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:rs([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Ma(){return D.useContext(Lh)!=null}function Ur(){return Ma()||it(!1),D.useContext(Lh).location}function sS(t){D.useContext(bs).static||D.useLayoutEffect(t)}function Br(){let{isDataRoute:t}=D.useContext(Si);return t?A5():y5()}function y5(){Ma()||it(!1);let t=D.useContext(z0),{basename:e,future:n,navigator:r}=D.useContext(bs),{matches:i}=D.useContext(Si),{pathname:s}=Ur(),o=JSON.stringify(F0(i,n.v7_relativeSplatPath)),a=D.useRef(!1);return sS(()=>{a.current=!0}),D.useCallback(function(c,h){if(h===void 0&&(h={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let f=$0(c,JSON.parse(o),s,h.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:rs([e,f.pathname])),(h.replace?r.replace:r.push)(f,h.state,h)},[e,r,o,s,t])}function oS(){let{matches:t}=D.useContext(Si),e=t[t.length-1];return e?e.params:{}}function aS(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=D.useContext(bs),{matches:i}=D.useContext(Si),{pathname:s}=Ur(),o=JSON.stringify(F0(i,r.v7_relativeSplatPath));return D.useMemo(()=>$0(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function v5(t,e){return x5(t,e)}function x5(t,e,n,r){Ma()||it(!1);let{navigator:i,static:s}=D.useContext(bs),{matches:o}=D.useContext(Si),a=o[o.length-1],l=a?a.params:{};a&&a.pathname;let c=a?a.pathnameBase:"/";a&&a.route;let h=Ur(),f;if(e){var p;let x=typeof e=="string"?La(e):e;c==="/"||(p=x.pathname)!=null&&p.startsWith(c)||it(!1),f=x}else f=h;let g=f.pathname||"/",w=g;if(c!=="/"){let x=c.replace(/^\//,"").split("/");w="/"+g.replace(/^\//,"").split("/").slice(x.length).join("/")}let k=q6(t,{pathname:w}),C=S5(k&&k.map(x=>Object.assign({},x,{params:Object.assign({},l,x.params),pathname:rs([c,i.encodeLocation?i.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?c:rs([c,i.encodeLocation?i.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),o,n,r);return e&&C?D.createElement(Lh.Provider,{value:{location:gu({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:Gi.Pop}},C):C}function w5(){let t=C5(),e=f5(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return D.createElement(D.Fragment,null,D.createElement("h2",null,"Unexpected Application Error!"),D.createElement("h3",{style:{fontStyle:"italic"}},e),n?D.createElement("pre",{style:i},n):null,null)}const _5=D.createElement(w5,null);class b5 extends D.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?D.createElement(Si.Provider,{value:this.props.routeContext},D.createElement(iS.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function E5(t){let{routeContext:e,match:n,children:r}=t,i=D.useContext(z0);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),D.createElement(Si.Provider,{value:e},r)}function S5(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let h=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);h>=0||it(!1),o=o.slice(0,Math.min(o.length,h+1))}let l=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<o.length;h++){let f=o[h];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=h),f.route.id){let{loaderData:p,errors:g}=n,w=f.route.loader&&p[f.route.id]===void 0&&(!g||g[f.route.id]===void 0);if(f.route.lazy||w){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((h,f,p)=>{let g,w=!1,k=null,C=null;n&&(g=a&&f.route.id?a[f.route.id]:void 0,k=f.route.errorElement||_5,l&&(c<0&&p===0?(R5("route-fallback"),w=!0,C=null):c===p&&(w=!0,C=f.route.hydrateFallbackElement||null)));let x=e.concat(o.slice(0,p+1)),v=()=>{let E;return g?E=k:w?E=C:f.route.Component?E=D.createElement(f.route.Component,null):f.route.element?E=f.route.element:E=h,D.createElement(E5,{match:f,routeContext:{outlet:h,matches:x,isDataRoute:n!=null},children:E})};return n&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?D.createElement(b5,{location:n.location,revalidation:n.revalidation,component:k,error:g,children:v(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):v()},null)}var lS=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(lS||{}),uS=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(uS||{});function T5(t){let e=D.useContext(z0);return e||it(!1),e}function I5(t){let e=D.useContext(m5);return e||it(!1),e}function k5(t){let e=D.useContext(Si);return e||it(!1),e}function cS(t){let e=k5(),n=e.matches[e.matches.length-1];return n.route.id||it(!1),n.route.id}function C5(){var t;let e=D.useContext(iS),n=I5(),r=cS();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function A5(){let{router:t}=T5(lS.UseNavigateStable),e=cS(uS.UseNavigateStable),n=D.useRef(!1);return sS(()=>{n.current=!0}),D.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,gu({fromRouteId:e},s)))},[t,e])}const Xv={};function R5(t,e,n){Xv[t]||(Xv[t]=!0)}function P5(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function N5(t){let{to:e,replace:n,state:r,relative:i}=t;Ma()||it(!1);let{future:s,static:o}=D.useContext(bs),{matches:a}=D.useContext(Si),{pathname:l}=Ur(),c=Br(),h=$0(e,F0(a,s.v7_relativeSplatPath),l,i==="path"),f=JSON.stringify(h);return D.useEffect(()=>c(JSON.parse(f),{replace:n,state:r,relative:i}),[c,f,i,n,r]),null}function Ot(t){it(!1)}function D5(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Gi.Pop,navigator:s,static:o=!1,future:a}=t;Ma()&&it(!1);let l=e.replace(/^\/*/,"/"),c=D.useMemo(()=>({basename:l,navigator:s,static:o,future:gu({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=La(r));let{pathname:h="/",search:f="",hash:p="",state:g=null,key:w="default"}=r,k=D.useMemo(()=>{let C=V0(h,l);return C==null?null:{location:{pathname:C,search:f,hash:p,state:g,key:w},navigationType:i}},[l,h,f,p,g,w,i]);return k==null?null:D.createElement(bs.Provider,{value:c},D.createElement(Lh.Provider,{children:n,value:k}))}function O5(t){let{children:e,location:n}=t;return v5(Um(e),n)}new Promise(()=>{});function Um(t,e){e===void 0&&(e=[]);let n=[];return D.Children.forEach(t,(r,i)=>{if(!D.isValidElement(r))return;let s=[...e,i];if(r.type===D.Fragment){n.push.apply(n,Um(r.props.children,s));return}r.type!==Ot&&it(!1),!r.props.index||!r.props.children||it(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Um(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Bm(){return Bm=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Bm.apply(this,arguments)}function j5(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function L5(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function M5(t,e){return t.button===0&&(!e||e==="_self")&&!L5(t)}const V5=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],F5="6";try{window.__reactRouterVersion=F5}catch{}const $5="startTransition",ex=PC[$5];function z5(t){let{basename:e,children:n,future:r,window:i}=t,s=D.useRef();s.current==null&&(s.current=B6({window:i,v5Compat:!0}));let o=s.current,[a,l]=D.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},h=D.useCallback(f=>{c&&ex?ex(()=>l(f)):l(f)},[l,c]);return D.useLayoutEffect(()=>o.listen(h),[o,h]),D.useEffect(()=>P5(r),[r]),D.createElement(D5,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const U5=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",B5=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,cr=D.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:c,preventScrollReset:h,viewTransition:f}=e,p=j5(e,V5),{basename:g}=D.useContext(bs),w,k=!1;if(typeof c=="string"&&B5.test(c)&&(w=c,U5))try{let E=new URL(window.location.href),P=c.startsWith("//")?new URL(E.protocol+c):new URL(c),j=V0(P.pathname,g);P.origin===E.origin&&j!=null?c=j+P.search+P.hash:k=!0}catch{}let C=g5(c,{relative:i}),x=H5(c,{replace:o,state:a,target:l,preventScrollReset:h,relative:i,viewTransition:f});function v(E){r&&r(E),E.defaultPrevented||x(E)}return D.createElement("a",Bm({},p,{href:w||C,onClick:k||s?r:v,ref:n,target:l}))});var tx;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(tx||(tx={}));var nx;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(nx||(nx={}));function H5(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:a}=e===void 0?{}:e,l=Br(),c=Ur(),h=aS(t,{relative:o});return D.useCallback(f=>{if(M5(f,n)){f.preventDefault();let p=r!==void 0?r:Bd(c)===Bd(h);l(t,{replace:p,state:i,preventScrollReset:s,relative:o,viewTransition:a})}},[c,l,h,r,i,n,t,s,o,a])}var pn=function(){return pn=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},pn.apply(this,arguments)};function yu(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}var ze="-ms-",zl="-moz-",Ae="-webkit-",dS="comm",Mh="rule",U0="decl",W5="@import",hS="@keyframes",q5="@layer",fS=Math.abs,B0=String.fromCharCode,Hm=Object.assign;function G5(t,e){return kt(t,0)^45?(((e<<2^kt(t,0))<<2^kt(t,1))<<2^kt(t,2))<<2^kt(t,3):0}function pS(t){return t.trim()}function li(t,e){return(t=e.exec(t))?t[0]:t}function fe(t,e,n){return t.replace(e,n)}function id(t,e,n){return t.indexOf(e,n)}function kt(t,e){return t.charCodeAt(e)|0}function va(t,e,n){return t.slice(e,n)}function kr(t){return t.length}function mS(t){return t.length}function Sl(t,e){return e.push(t),t}function K5(t,e){return t.map(e).join("")}function rx(t,e){return t.filter(function(n){return!li(n,e)})}var Vh=1,xa=1,gS=0,Jn=0,ct=0,Va="";function Fh(t,e,n,r,i,s,o,a){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:Vh,column:xa,length:o,return:"",siblings:a}}function Mi(t,e){return Hm(Fh("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function To(t){for(;t.root;)t=Mi(t.root,{children:[t]});Sl(t,t.siblings)}function Q5(){return ct}function Y5(){return ct=Jn>0?kt(Va,--Jn):0,xa--,ct===10&&(xa=1,Vh--),ct}function dr(){return ct=Jn<gS?kt(Va,Jn++):0,xa++,ct===10&&(xa=1,Vh++),ct}function Ks(){return kt(Va,Jn)}function sd(){return Jn}function $h(t,e){return va(Va,t,e)}function Wm(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function J5(t){return Vh=xa=1,gS=kr(Va=t),Jn=0,[]}function Z5(t){return Va="",t}function ap(t){return pS($h(Jn-1,qm(t===91?t+2:t===40?t+1:t)))}function X5(t){for(;(ct=Ks())&&ct<33;)dr();return Wm(t)>2||Wm(ct)>3?"":" "}function eR(t,e){for(;--e&&dr()&&!(ct<48||ct>102||ct>57&&ct<65||ct>70&&ct<97););return $h(t,sd()+(e<6&&Ks()==32&&dr()==32))}function qm(t){for(;dr();)switch(ct){case t:return Jn;case 34:case 39:t!==34&&t!==39&&qm(ct);break;case 40:t===41&&qm(t);break;case 92:dr();break}return Jn}function tR(t,e){for(;dr()&&t+ct!==57;)if(t+ct===84&&Ks()===47)break;return"/*"+$h(e,Jn-1)+"*"+B0(t===47?t:dr())}function nR(t){for(;!Wm(Ks());)dr();return $h(t,Jn)}function rR(t){return Z5(od("",null,null,null,[""],t=J5(t),0,[0],t))}function od(t,e,n,r,i,s,o,a,l){for(var c=0,h=0,f=o,p=0,g=0,w=0,k=1,C=1,x=1,v=0,E="",P=i,j=s,M=r,b=E;C;)switch(w=v,v=dr()){case 40:if(w!=108&&kt(b,f-1)==58){id(b+=fe(ap(v),"&","&\f"),"&\f",fS(c?a[c-1]:0))!=-1&&(x=-1);break}case 34:case 39:case 91:b+=ap(v);break;case 9:case 10:case 13:case 32:b+=X5(w);break;case 92:b+=eR(sd()-1,7);continue;case 47:switch(Ks()){case 42:case 47:Sl(iR(tR(dr(),sd()),e,n,l),l);break;default:b+="/"}break;case 123*k:a[c++]=kr(b)*x;case 125*k:case 59:case 0:switch(v){case 0:case 125:C=0;case 59+h:x==-1&&(b=fe(b,/\f/g,"")),g>0&&kr(b)-f&&Sl(g>32?sx(b+";",r,n,f-1,l):sx(fe(b," ","")+";",r,n,f-2,l),l);break;case 59:b+=";";default:if(Sl(M=ix(b,e,n,c,h,i,a,E,P=[],j=[],f,s),s),v===123)if(h===0)od(b,e,M,M,P,s,f,a,j);else switch(p===99&&kt(b,3)===110?100:p){case 100:case 108:case 109:case 115:od(t,M,M,r&&Sl(ix(t,M,M,0,0,i,a,E,i,P=[],f,j),j),i,j,f,a,r?P:j);break;default:od(b,M,M,M,[""],j,0,a,j)}}c=h=g=0,k=x=1,E=b="",f=o;break;case 58:f=1+kr(b),g=w;default:if(k<1){if(v==123)--k;else if(v==125&&k++==0&&Y5()==125)continue}switch(b+=B0(v),v*k){case 38:x=h>0?1:(b+="\f",-1);break;case 44:a[c++]=(kr(b)-1)*x,x=1;break;case 64:Ks()===45&&(b+=ap(dr())),p=Ks(),h=f=kr(E=b+=nR(sd())),v++;break;case 45:w===45&&kr(b)==2&&(k=0)}}return s}function ix(t,e,n,r,i,s,o,a,l,c,h,f){for(var p=i-1,g=i===0?s:[""],w=mS(g),k=0,C=0,x=0;k<r;++k)for(var v=0,E=va(t,p+1,p=fS(C=o[k])),P=t;v<w;++v)(P=pS(C>0?g[v]+" "+E:fe(E,/&\f/g,g[v])))&&(l[x++]=P);return Fh(t,e,n,i===0?Mh:a,l,c,h,f)}function iR(t,e,n,r){return Fh(t,e,n,dS,B0(Q5()),va(t,2,-2),0,r)}function sx(t,e,n,r,i){return Fh(t,e,n,U0,va(t,0,r),va(t,r+1,-1),r,i)}function yS(t,e,n){switch(G5(t,e)){case 5103:return Ae+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ae+t+t;case 4789:return zl+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return Ae+t+zl+t+ze+t+t;case 5936:switch(kt(t,e+11)){case 114:return Ae+t+ze+fe(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return Ae+t+ze+fe(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return Ae+t+ze+fe(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return Ae+t+ze+t+t;case 6165:return Ae+t+ze+"flex-"+t+t;case 5187:return Ae+t+fe(t,/(\w+).+(:[^]+)/,Ae+"box-$1$2"+ze+"flex-$1$2")+t;case 5443:return Ae+t+ze+"flex-item-"+fe(t,/flex-|-self/g,"")+(li(t,/flex-|baseline/)?"":ze+"grid-row-"+fe(t,/flex-|-self/g,""))+t;case 4675:return Ae+t+ze+"flex-line-pack"+fe(t,/align-content|flex-|-self/g,"")+t;case 5548:return Ae+t+ze+fe(t,"shrink","negative")+t;case 5292:return Ae+t+ze+fe(t,"basis","preferred-size")+t;case 6060:return Ae+"box-"+fe(t,"-grow","")+Ae+t+ze+fe(t,"grow","positive")+t;case 4554:return Ae+fe(t,/([^-])(transform)/g,"$1"+Ae+"$2")+t;case 6187:return fe(fe(fe(t,/(zoom-|grab)/,Ae+"$1"),/(image-set)/,Ae+"$1"),t,"")+t;case 5495:case 3959:return fe(t,/(image-set\([^]*)/,Ae+"$1$`$1");case 4968:return fe(fe(t,/(.+:)(flex-)?(.*)/,Ae+"box-pack:$3"+ze+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ae+t+t;case 4200:if(!li(t,/flex-|baseline/))return ze+"grid-column-align"+va(t,e)+t;break;case 2592:case 3360:return ze+fe(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,li(r.props,/grid-\w+-end/)})?~id(t+(n=n[e].value),"span",0)?t:ze+fe(t,"-start","")+t+ze+"grid-row-span:"+(~id(n,"span",0)?li(n,/\d+/):+li(n,/\d+/)-+li(t,/\d+/))+";":ze+fe(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return li(r.props,/grid-\w+-start/)})?t:ze+fe(fe(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return fe(t,/(.+)-inline(.+)/,Ae+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(kr(t)-1-e>6)switch(kt(t,e+1)){case 109:if(kt(t,e+4)!==45)break;case 102:return fe(t,/(.+:)(.+)-([^]+)/,"$1"+Ae+"$2-$3$1"+zl+(kt(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~id(t,"stretch",0)?yS(fe(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return fe(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,a,l,c){return ze+i+":"+s+c+(o?ze+i+"-span:"+(a?l:+l-+s)+c:"")+t});case 4949:if(kt(t,e+6)===121)return fe(t,":",":"+Ae)+t;break;case 6444:switch(kt(t,kt(t,14)===45?18:11)){case 120:return fe(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ae+(kt(t,14)===45?"inline-":"")+"box$3$1"+Ae+"$2$3$1"+ze+"$2box$3")+t;case 100:return fe(t,":",":"+ze)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return fe(t,"scroll-","scroll-snap-")+t}return t}function Hd(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function sR(t,e,n,r){switch(t.type){case q5:if(t.children.length)break;case W5:case U0:return t.return=t.return||t.value;case dS:return"";case hS:return t.return=t.value+"{"+Hd(t.children,r)+"}";case Mh:if(!kr(t.value=t.props.join(",")))return""}return kr(n=Hd(t.children,r))?t.return=t.value+"{"+n+"}":""}function oR(t){var e=mS(t);return function(n,r,i,s){for(var o="",a=0;a<e;a++)o+=t[a](n,r,i,s)||"";return o}}function aR(t){return function(e){e.root||(e=e.return)&&t(e)}}function lR(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case U0:t.return=yS(t.value,t.length,n);return;case hS:return Hd([Mi(t,{value:fe(t.value,"@","@"+Ae)})],r);case Mh:if(t.length)return K5(n=t.props,function(i){switch(li(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":To(Mi(t,{props:[fe(i,/:(read-\w+)/,":"+zl+"$1")]})),To(Mi(t,{props:[i]})),Hm(t,{props:rx(n,r)});break;case"::placeholder":To(Mi(t,{props:[fe(i,/:(plac\w+)/,":"+Ae+"input-$1")]})),To(Mi(t,{props:[fe(i,/:(plac\w+)/,":"+zl+"$1")]})),To(Mi(t,{props:[fe(i,/:(plac\w+)/,ze+"input-$1")]})),To(Mi(t,{props:[i]})),Hm(t,{props:rx(n,r)});break}return""})}}var uR={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},En={},wa=typeof process<"u"&&En!==void 0&&(En.REACT_APP_SC_ATTR||En.SC_ATTR)||"data-styled",vS="active",xS="data-styled-version",zh="6.1.17",H0=`/*!sc*/
`,Wd=typeof window<"u"&&"HTMLElement"in window,cR=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&En!==void 0&&En.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&En.REACT_APP_SC_DISABLE_SPEEDY!==""?En.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&En.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&En!==void 0&&En.SC_DISABLE_SPEEDY!==void 0&&En.SC_DISABLE_SPEEDY!==""&&En.SC_DISABLE_SPEEDY!=="false"&&En.SC_DISABLE_SPEEDY),Uh=Object.freeze([]),_a=Object.freeze({});function dR(t,e,n){return n===void 0&&(n=_a),t.theme!==n.theme&&t.theme||e||n.theme}var wS=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),hR=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,fR=/(^-|-$)/g;function ox(t){return t.replace(hR,"-").replace(fR,"")}var pR=/(a)(d)/gi,Cc=52,ax=function(t){return String.fromCharCode(t+(t>25?39:97))};function Gm(t){var e,n="";for(e=Math.abs(t);e>Cc;e=e/Cc|0)n=ax(e%Cc)+n;return(ax(e%Cc)+n).replace(pR,"$1-$2")}var lp,_S=5381,Xo=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},bS=function(t){return Xo(_S,t)};function ES(t){return Gm(bS(t)>>>0)}function mR(t){return t.displayName||t.name||"Component"}function up(t){return typeof t=="string"&&!0}var SS=typeof Symbol=="function"&&Symbol.for,TS=SS?Symbol.for("react.memo"):60115,gR=SS?Symbol.for("react.forward_ref"):60112,yR={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},vR={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},IS={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},xR=((lp={})[gR]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},lp[TS]=IS,lp);function lx(t){return("type"in(e=t)&&e.type.$$typeof)===TS?IS:"$$typeof"in t?xR[t.$$typeof]:yR;var e}var wR=Object.defineProperty,_R=Object.getOwnPropertyNames,ux=Object.getOwnPropertySymbols,bR=Object.getOwnPropertyDescriptor,ER=Object.getPrototypeOf,cx=Object.prototype;function kS(t,e,n){if(typeof e!="string"){if(cx){var r=ER(e);r&&r!==cx&&kS(t,r,n)}var i=_R(e);ux&&(i=i.concat(ux(e)));for(var s=lx(t),o=lx(e),a=0;a<i.length;++a){var l=i[a];if(!(l in vR||n&&n[l]||o&&l in o||s&&l in s)){var c=bR(e,l);try{wR(t,l,c)}catch{}}}}return t}function ba(t){return typeof t=="function"}function W0(t){return typeof t=="object"&&"styledComponentId"in t}function Us(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function Km(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=t[r];return n}function vu(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Qm(t,e,n){if(n===void 0&&(n=!1),!n&&!vu(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=Qm(t[r],e[r]);else if(vu(e))for(var r in e)t[r]=Qm(t[r],e[r]);return t}function q0(t,e){Object.defineProperty(t,"toString",{value:e})}function Fu(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var SR=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;e>=s;)if((s<<=1)<0)throw Fu(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(H0);return n},t}(),ad=new Map,qd=new Map,ld=1,Ac=function(t){if(ad.has(t))return ad.get(t);for(;qd.has(ld);)ld++;var e=ld++;return ad.set(t,e),qd.set(e,t),e},TR=function(t,e){ld=e+1,ad.set(t,e),qd.set(e,t)},IR="style[".concat(wa,"][").concat(xS,'="').concat(zh,'"]'),kR=new RegExp("^".concat(wa,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),CR=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},AR=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(H0),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var l=a.match(kR);if(l){var c=0|parseInt(l[1],10),h=l[2];c!==0&&(TR(h,c),CR(t,h,l[3]),t.getTag().insertRules(c,i)),i.length=0}else i.push(a)}}},dx=function(t){for(var e=document.querySelectorAll(IR),n=0,r=e.length;n<r;n++){var i=e[n];i&&i.getAttribute(wa)!==vS&&(AR(t,i),i.parentNode&&i.parentNode.removeChild(i))}};function RR(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var CS=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(wa,"]")));return l[l.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(wa,vS),r.setAttribute(xS,zh);var o=RR();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},PR=function(){function t(e){this.element=CS(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw Fu(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),NR=function(){function t(e){this.element=CS(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),DR=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),hx=Wd,OR={isServer:!Wd,useCSSOMInjection:!cR},AS=function(){function t(e,n,r){e===void 0&&(e=_a),n===void 0&&(n={});var i=this;this.options=pn(pn({},OR),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&Wd&&hx&&(hx=!1,dx(this)),q0(this,function(){return function(s){for(var o=s.getTag(),a=o.length,l="",c=function(f){var p=function(x){return qd.get(x)}(f);if(p===void 0)return"continue";var g=s.names.get(p),w=o.getGroup(f);if(g===void 0||!g.size||w.length===0)return"continue";var k="".concat(wa,".g").concat(f,'[id="').concat(p,'"]'),C="";g!==void 0&&g.forEach(function(x){x.length>0&&(C+="".concat(x,","))}),l+="".concat(w).concat(k,'{content:"').concat(C,'"}').concat(H0)},h=0;h<a;h++)c(h);return l}(i)})}return t.registerId=function(e){return Ac(e)},t.prototype.rehydrate=function(){!this.server&&Wd&&dx(this)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(pn(pn({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new DR(i):r?new PR(i):new NR(i)}(this.options),new SR(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(Ac(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(Ac(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(Ac(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),jR=/&/g,LR=/^\s*\/\/.*$/gm;function RS(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=RS(n.children,e)),n})}function MR(t){var e,n,r,i=_a,s=i.options,o=s===void 0?_a:s,a=i.plugins,l=a===void 0?Uh:a,c=function(p,g,w){return w.startsWith(n)&&w.endsWith(n)&&w.replaceAll(n,"").length>0?".".concat(e):p},h=l.slice();h.push(function(p){p.type===Mh&&p.value.includes("&")&&(p.props[0]=p.props[0].replace(jR,n).replace(r,c))}),o.prefix&&h.push(lR),h.push(sR);var f=function(p,g,w,k){g===void 0&&(g=""),w===void 0&&(w=""),k===void 0&&(k="&"),e=k,n=g,r=new RegExp("\\".concat(n,"\\b"),"g");var C=p.replace(LR,""),x=rR(w||g?"".concat(w," ").concat(g," { ").concat(C," }"):C);o.namespace&&(x=RS(x,o.namespace));var v=[];return Hd(x,oR(h.concat(aR(function(E){return v.push(E)})))),v};return f.hash=l.length?l.reduce(function(p,g){return g.name||Fu(15),Xo(p,g.name)},_S).toString():"",f}var VR=new AS,Ym=MR(),PS=ve.createContext({shouldForwardProp:void 0,styleSheet:VR,stylis:Ym});PS.Consumer;ve.createContext(void 0);function fx(){return D.useContext(PS)}var NS=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=Ym);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,q0(this,function(){throw Fu(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=Ym),this.name+e.hash},t}(),FR=function(t){return t>="A"&&t<="Z"};function px(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;FR(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var DS=function(t){return t==null||t===!1||t===""},OS=function(t){var e,n,r=[];for(var i in t){var s=t[i];t.hasOwnProperty(i)&&!DS(s)&&(Array.isArray(s)&&s.isCss||ba(s)?r.push("".concat(px(i),":"),s,";"):vu(s)?r.push.apply(r,yu(yu(["".concat(i," {")],OS(s),!1),["}"],!1)):r.push("".concat(px(i),": ").concat((e=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in uR||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Qs(t,e,n,r){if(DS(t))return[];if(W0(t))return[".".concat(t.styledComponentId)];if(ba(t)){if(!ba(s=t)||s.prototype&&s.prototype.isReactComponent||!e)return[t];var i=t(e);return Qs(i,e,n,r)}var s;return t instanceof NS?n?(t.inject(n,r),[t.getName(r)]):[t]:vu(t)?OS(t):Array.isArray(t)?Array.prototype.concat.apply(Uh,t.map(function(o){return Qs(o,e,n,r)})):[t.toString()]}function $R(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(ba(n)&&!W0(n))return!1}return!0}var zR=bS(zh),UR=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&$R(e),this.componentId=n,this.baseHash=Xo(zR,n),this.baseStyle=r,AS.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Us(i,this.staticRulesId);else{var s=Km(Qs(this.rules,e,n,r)),o=Gm(Xo(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=Us(i,o),this.staticRulesId=o}else{for(var l=Xo(this.baseHash,r.hash),c="",h=0;h<this.rules.length;h++){var f=this.rules[h];if(typeof f=="string")c+=f;else if(f){var p=Km(Qs(f,e,n,r));l=Xo(l,p+h),c+=p}}if(c){var g=Gm(l>>>0);n.hasNameForId(this.componentId,g)||n.insertRules(this.componentId,g,r(c,".".concat(g),void 0,this.componentId)),i=Us(i,g)}}return i},t}(),jS=ve.createContext(void 0);jS.Consumer;var cp={};function BR(t,e,n){var r=W0(t),i=t,s=!up(t),o=e.attrs,a=o===void 0?Uh:o,l=e.componentId,c=l===void 0?function(P,j){var M=typeof P!="string"?"sc":ox(P);cp[M]=(cp[M]||0)+1;var b="".concat(M,"-").concat(ES(zh+M+cp[M]));return j?"".concat(j,"-").concat(b):b}(e.displayName,e.parentComponentId):l,h=e.displayName,f=h===void 0?function(P){return up(P)?"styled.".concat(P):"Styled(".concat(mR(P),")")}(t):h,p=e.displayName&&e.componentId?"".concat(ox(e.displayName),"-").concat(e.componentId):e.componentId||c,g=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,w=e.shouldForwardProp;if(r&&i.shouldForwardProp){var k=i.shouldForwardProp;if(e.shouldForwardProp){var C=e.shouldForwardProp;w=function(P,j){return k(P,j)&&C(P,j)}}else w=k}var x=new UR(n,p,r?i.componentStyle:void 0);function v(P,j){return function(M,b,S){var A=M.attrs,R=M.componentStyle,N=M.defaultProps,O=M.foldedComponentIds,I=M.styledComponentId,Q=M.target,te=ve.useContext(jS),he=fx(),se=M.shouldForwardProp||he.shouldForwardProp,z=dR(b,te,N)||_a,U=function(pt,mt,st){for(var We,Ut=pn(pn({},mt),{className:void 0,theme:st}),ot=0;ot<pt.length;ot+=1){var bt=ba(We=pt[ot])?We(Ut):We;for(var Et in bt)Ut[Et]=Et==="className"?Us(Ut[Et],bt[Et]):Et==="style"?pn(pn({},Ut[Et]),bt[Et]):bt[Et]}return mt.className&&(Ut.className=Us(Ut.className,mt.className)),Ut}(A,b,z),G=U.as||Q,Z={};for(var oe in U)U[oe]===void 0||oe[0]==="$"||oe==="as"||oe==="theme"&&U.theme===z||(oe==="forwardedAs"?Z.as=U.forwardedAs:se&&!se(oe,G)||(Z[oe]=U[oe]));var Se=function(pt,mt){var st=fx(),We=pt.generateAndInjectStyles(mt,st.styleSheet,st.stylis);return We}(R,U),_t=Us(O,I);return Se&&(_t+=" "+Se),U.className&&(_t+=" "+U.className),Z[up(G)&&!wS.has(G)?"class":"className"]=_t,S&&(Z.ref=S),D.createElement(G,Z)}(E,P,j)}v.displayName=f;var E=ve.forwardRef(v);return E.attrs=g,E.componentStyle=x,E.displayName=f,E.shouldForwardProp=w,E.foldedComponentIds=r?Us(i.foldedComponentIds,i.styledComponentId):"",E.styledComponentId=p,E.target=r?i.target:t,Object.defineProperty(E,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(P){this._foldedDefaultProps=r?function(j){for(var M=[],b=1;b<arguments.length;b++)M[b-1]=arguments[b];for(var S=0,A=M;S<A.length;S++)Qm(j,A[S],!0);return j}({},i.defaultProps,P):P}}),q0(E,function(){return".".concat(E.styledComponentId)}),s&&kS(E,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),E}function mx(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var gx=function(t){return Object.assign(t,{isCss:!0})};function G0(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(ba(t)||vu(t))return gx(Qs(mx(Uh,yu([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?Qs(r):gx(Qs(mx(r,e)))}function Jm(t,e,n){if(n===void 0&&(n=_a),!e)throw Fu(1,e);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return t(e,n,G0.apply(void 0,yu([i],s,!1)))};return r.attrs=function(i){return Jm(t,e,pn(pn({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Jm(t,e,pn(pn({},n),i))},r}var LS=function(t){return Jm(BR,t)},_=LS;wS.forEach(function(t){_[t]=LS(t)});function HR(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=Km(G0.apply(void 0,yu([t],e,!1))),i=ES(r);return new NS(i,r)}var MS={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},yx=ve.createContext&&ve.createContext(MS),WR=["attr","size","title"];function qR(t,e){if(t==null)return{};var n=GR(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function GR(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function Gd(){return Gd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Gd.apply(this,arguments)}function vx(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Kd(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?vx(Object(n),!0).forEach(function(r){KR(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):vx(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function KR(t,e,n){return e=QR(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function QR(t){var e=YR(t,"string");return typeof e=="symbol"?e:e+""}function YR(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function VS(t){return t&&t.map((e,n)=>ve.createElement(e.tag,Kd({key:n},e.attr),VS(e.child)))}function _e(t){return e=>ve.createElement(JR,Gd({attr:Kd({},t.attr)},e),VS(t.child))}function JR(t){var e=n=>{var{attr:r,size:i,title:s}=t,o=qR(t,WR),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),ve.createElement("svg",Gd({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:Kd(Kd({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&ve.createElement("title",null,s),t.children)};return yx!==void 0?ve.createElement(yx.Consumer,null,n=>e(n)):e(MS)}function ZR(t){return _e({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"},child:[]}]})(t)}function FS(t){return _e({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(t)}function XR(t){return _e({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(t)}function e3(t){return _e({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"},child:[]}]})(t)}function t3(t){return _e({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(t)}function n3(t){return _e({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"},child:[]}]})(t)}function r3(t){return _e({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"},child:[]}]})(t)}function i3(t){return _e({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M208 352c-2.39 0-4.78.35-7.06 1.09C187.98 357.3 174.35 360 160 360c-14.35 0-27.98-2.7-40.95-6.91-2.28-.74-4.66-1.09-7.05-1.09C49.94 352-.33 402.48 0 464.62.14 490.88 21.73 512 48 512h224c26.27 0 47.86-21.12 48-47.38.33-62.14-49.94-112.62-112-112.62zm-48-32c53.02 0 96-42.98 96-96s-42.98-96-96-96-96 42.98-96 96 42.98 96 96 96zM592 0H208c-26.47 0-48 22.25-48 49.59V96c23.42 0 45.1 6.78 64 17.8V64h352v288h-64v-64H384v64h-76.24c19.1 16.69 33.12 38.73 39.69 64H592c26.47 0 48-22.25 48-49.59V49.59C640 22.25 618.47 0 592 0z"},child:[]}]})(t)}function s3(t){return _e({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z"},child:[]}]})(t)}function o3(t){return _e({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M464 128H272l-64-64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48z"},child:[]}]})(t)}function a3(t){return _e({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"},child:[]}]})(t)}function l3(t){return _e({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"},child:[]}]})(t)}function u3(t){return _e({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M552 64H88c-13.255 0-24 10.745-24 24v8H24c-13.255 0-24 10.745-24 24v272c0 30.928 25.072 56 56 56h472c26.51 0 48-21.49 48-48V88c0-13.255-10.745-24-24-24zM56 400a8 8 0 0 1-8-8V144h16v248a8 8 0 0 1-8 8zm236-16H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm-208-96H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm0-96H140c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h360c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12z"},child:[]}]})(t)}function c3(t){return _e({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"},child:[]}]})(t)}function xx(t){return _e({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"},child:[]}]})(t)}function d3(t){return _e({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 224h192V32H0v192zM64 96h64v64H64V96zm192-64v192h192V32H256zm128 128h-64V96h64v64zM0 480h192V288H0v192zm64-128h64v64H64v-64zm352-64h32v128h-96v-32h-32v96h-64V288h96v32h64v-32zm0 160h32v32h-32v-32zm-64 0h32v32h-32v-32z"},child:[]}]})(t)}function h3(t){return _e({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"},child:[]}]})(t)}function f3(t){return _e({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M496 224c-79.6 0-144 64.4-144 144s64.4 144 144 144 144-64.4 144-144-64.4-144-144-144zm64 150.3c0 5.3-4.4 9.7-9.7 9.7h-60.6c-5.3 0-9.7-4.4-9.7-9.7v-76.6c0-5.3 4.4-9.7 9.7-9.7h12.6c5.3 0 9.7 4.4 9.7 9.7V352h38.3c5.3 0 9.7 4.4 9.7 9.7v12.6zM320 368c0-27.8 6.7-54.1 18.2-77.5-8-1.5-16.2-2.5-24.6-2.5h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h347.1c-45.3-31.9-75.1-84.5-75.1-144zm-96-112c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128z"},child:[]}]})(t)}function p3(t){return _e({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M336.2 64H47.8C21.4 64 0 85.4 0 111.8v288.4C0 426.6 21.4 448 47.8 448h288.4c26.4 0 47.8-21.4 47.8-47.8V111.8c0-26.4-21.4-47.8-47.8-47.8zm189.4 37.7L416 177.3v157.4l109.6 75.5c21.2 14.6 50.4-.3 50.4-25.8V127.5c0-25.4-29.1-40.4-50.4-25.8z"},child:[]}]})(t)}function m3(t){return _e({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M634.91 154.88C457.74-8.99 182.19-8.93 5.09 154.88c-6.66 6.16-6.79 16.59-.35 22.98l34.24 33.97c6.14 6.1 16.02 6.23 22.4.38 145.92-133.68 371.3-133.71 517.25 0 6.38 5.85 16.26 5.71 22.4-.38l34.24-33.97c6.43-6.39 6.3-16.82-.36-22.98zM320 352c-35.35 0-64 28.65-64 64s28.65 64 64 64 64-28.65 64-64-28.65-64-64-64zm202.67-83.59c-115.26-101.93-290.21-101.82-405.34 0-6.9 6.1-7.12 16.69-.57 23.15l34.44 33.99c6 5.92 15.66 6.32 22.05.8 83.95-72.57 209.74-72.41 293.49 0 6.39 5.52 16.05 5.13 22.05-.8l34.44-33.99c6.56-6.46 6.33-17.06-.56-23.15z"},child:[]}]})(t)}function g3(t){return _e({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"},child:[]}]})(t)}function wx(t){return _e({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"},child:[]}]})(t)}function _x(t){return _e({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"},child:[]}]})(t)}function y3(t){return _e({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"},child:[]}]})(t)}function Bh(t){return _e({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"},child:[]}]})(t)}function dp(t){return _e({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"},child:[]}]})(t)}function v3(t){return _e({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"},child:[]}]})(t)}function $S(t){return _e({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"},child:[]}]})(t)}function x3(t){return _e({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"},child:[]}]})(t)}function w3(t){return _e({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"},child:[]}]})(t)}function _3(t){return _e({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"},child:[]}]})(t)}function bx(t){return _e({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"},child:[]}]})(t)}function b3(t){return _e({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"},child:[]}]})(t)}function hp(t){return _e({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3 1 9l11 6 9-4.91V17h2V9L12 3z"},child:[]}]})(t)}const E3=(t,e,n,r)=>{var s,o,a,l;const i=[n,{code:e,...r||{}}];if((o=(s=t==null?void 0:t.services)==null?void 0:s.logger)!=null&&o.forward)return t.services.logger.forward(i,"warn","react-i18next::",!0);Ys(i[0])&&(i[0]=`react-i18next:: ${i[0]}`),(l=(a=t==null?void 0:t.services)==null?void 0:a.logger)!=null&&l.warn?t.services.logger.warn(...i):console!=null&&console.warn&&console.warn(...i)},Ex={},Zm=(t,e,n,r)=>{Ys(n)&&Ex[n]||(Ys(n)&&(Ex[n]=new Date),E3(t,e,n,r))},zS=(t,e)=>()=>{if(t.isInitialized)e();else{const n=()=>{setTimeout(()=>{t.off("initialized",n)},0),e()};t.on("initialized",n)}},Xm=(t,e,n)=>{t.loadNamespaces(e,zS(t,n))},Sx=(t,e,n,r)=>{if(Ys(n)&&(n=[n]),t.options.preload&&t.options.preload.indexOf(e)>-1)return Xm(t,n,r);n.forEach(i=>{t.options.ns.indexOf(i)<0&&t.options.ns.push(i)}),t.loadLanguages(e,zS(t,r))},S3=(t,e,n={})=>!e.languages||!e.languages.length?(Zm(e,"NO_LANGUAGES","i18n.languages were undefined or empty",{languages:e.languages}),!0):e.hasLoadedNamespace(t,{lng:n.lng,precheck:(r,i)=>{var s;if(((s=n.bindI18n)==null?void 0:s.indexOf("languageChanging"))>-1&&r.services.backendConnector.backend&&r.isLanguageChangingTo&&!i(r.isLanguageChangingTo,t))return!1}}),Ys=t=>typeof t=="string",T3=t=>typeof t=="object"&&t!==null,I3=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,k3={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},C3=t=>k3[t],A3=t=>t.replace(I3,C3);let eg={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:A3};const R3=(t={})=>{eg={...eg,...t}},P3=()=>eg;let US;const N3=t=>{US=t},D3=()=>US,O3={type:"3rdParty",init(t){R3(t.options.react),N3(t)}},j3=D.createContext();class L3{constructor(){this.usedNamespaces={}}addUsedNamespaces(e){e.forEach(n=>{this.usedNamespaces[n]||(this.usedNamespaces[n]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const M3=(t,e)=>{const n=D.useRef();return D.useEffect(()=>{n.current=t},[t,e]),n.current},BS=(t,e,n,r)=>t.getFixedT(e,n,r),V3=(t,e,n,r)=>D.useCallback(BS(t,e,n,r),[t,e,n,r]),ft=(t,e={})=>{var P,j,M,b;const{i18n:n}=e,{i18n:r,defaultNS:i}=D.useContext(j3)||{},s=n||r||D3();if(s&&!s.reportNamespaces&&(s.reportNamespaces=new L3),!s){Zm(s,"NO_I18NEXT_INSTANCE","useTranslation: You will need to pass in an i18next instance by using initReactI18next");const S=(R,N)=>Ys(N)?N:T3(N)&&Ys(N.defaultValue)?N.defaultValue:Array.isArray(R)?R[R.length-1]:R,A=[S,{},!1];return A.t=S,A.i18n={},A.ready=!1,A}(P=s.options.react)!=null&&P.wait&&Zm(s,"DEPRECATED_OPTION","useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const o={...P3(),...s.options.react,...e},{useSuspense:a,keyPrefix:l}=o;let c=i||((j=s.options)==null?void 0:j.defaultNS);c=Ys(c)?[c]:c||["translation"],(b=(M=s.reportNamespaces).addUsedNamespaces)==null||b.call(M,c);const h=(s.isInitialized||s.initializedStoreOnce)&&c.every(S=>S3(S,s,o)),f=V3(s,e.lng||null,o.nsMode==="fallback"?c:c[0],l),p=()=>f,g=()=>BS(s,e.lng||null,o.nsMode==="fallback"?c:c[0],l),[w,k]=D.useState(p);let C=c.join();e.lng&&(C=`${e.lng}${C}`);const x=M3(C),v=D.useRef(!0);D.useEffect(()=>{const{bindI18n:S,bindI18nStore:A}=o;v.current=!0,!h&&!a&&(e.lng?Sx(s,e.lng,c,()=>{v.current&&k(g)}):Xm(s,c,()=>{v.current&&k(g)})),h&&x&&x!==C&&v.current&&k(g);const R=()=>{v.current&&k(g)};return S&&(s==null||s.on(S,R)),A&&(s==null||s.store.on(A,R)),()=>{v.current=!1,s&&(S==null||S.split(" ").forEach(N=>s.off(N,R))),A&&s&&A.split(" ").forEach(N=>s.store.off(N,R))}},[s,C]),D.useEffect(()=>{v.current&&h&&k(p)},[s,l,h]);const E=[w,s,h];if(E.t=w,E.i18n=s,E.ready=h,h||!h&&!a)return E;throw new Promise(S=>{e.lng?Sx(s,e.lng,c,()=>S()):Xm(s,c,()=>S())})},F3="64px",$3=_.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${F3};
  background-color: rgb(0,0,0);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  z-index: 1000;
  box-shadow: 0 1px 0 rgba(0,150,136,0.2);
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(to right, 
      rgba(0,150,136,0.2),
      rgba(0,150,136,0.1) 50%,
      rgba(0,150,136,0.05) 100%
    );
    box-shadow: 0 1px 2px rgba(0,150,136,0.1);
  }

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`,z3=_.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: rgb(0,150,136); /* Cian */
  cursor: pointer;
  padding: 0.5rem;
  margin-right: 0.5rem;

  @media (max-width: 992px) {
    display: block;
  }
`,U3=_.div`
  a {
    display: block;
  }
  img {
    height: 40px;
    display: block;
    filter: brightness(0) invert(1); /* Logo blanco si es posible */
  }
  @media (max-width: 768px) {
    img { height: 35px; }
  }
`,B3=_.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  @media (max-width: 768px) {
    gap: 0.8rem;
  }
`,H3=_.div`
  position: relative;
`,W3=_.div`
  position: absolute;
  top: 110%;
  right: 0;
  background: rgb(30,30,30);
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.25);
  padding: 8px 0;
  z-index: 30;
  min-width: 150px;
`,Tx=_.div`
  padding: 10px 20px;
  font-size: 15px;
  cursor: pointer;
  color: #fff;
  transition: background 0.18s, color 0.18s;
  &:hover {
    background: rgb(0,150,136,0.18);
    color: #00bcd4;
  }
`,q3=_.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  position: relative;
  padding: 4px;
  border-radius: 6px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgb(0,150,136,0.1); /* Sutil cian */
  }
`,G3=_.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #222; /* Fondo oscuro para avatar */
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,K3=_.div`
  font-size: 0.85rem;
  color: rgb(255,255,255);
  @media (max-width: 992px) {
    display: none;
  }
`,Q3=_.div`
  font-weight: 500;
  color: rgb(255,255,255);
`,Y3=_.div`
  color: rgb(158,158,158);
  font-size: 0.75rem;
`,J3=_.div`
  position: relative;
`,Z3=_.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  cursor: pointer;
  user-select: none;
  color: rgb(255,255,255);
  border: 1px solid rgb(0,255,247);
  border-radius: 8px;
  padding: 8px 18px;
  background: rgb(18,18,18);
  transition: border-color 0.2s;
  font-size: 1rem;
  &:hover {
    border-color: rgb(0,150,136);
  }
`,X3=_.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: rgb(30,30,30); /* Fondo oscuro */
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.25);
  padding: 8px 0;
  margin-top: 4px;
  z-index: 20;
  min-width: 100px;
`,fp=_.div`
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  color: rgb(255,255,255);
  &:hover {
    background-color: rgb(0,150,136,0.2);
    color: rgb(0,150,136);
  }
`,HS=({onToggleSidebar:t,isSidebarOpen:e})=>{const{i18n:n}=ft(),[r,i]=D.useState(!1),[s,o]=D.useState(!1),a=D.useRef(null),l=D.useRef(null),c=Br(),[h,f]=D.useState({name:"Usuario",id:""});D.useEffect(()=>{const x=localStorage.getItem("nvuUserData");if(x)try{f(JSON.parse(x))}catch(v){console.error("Error parsing user data from localStorage:",v),localStorage.removeItem("nvuUserData")}},[]);const p=x=>{n.changeLanguage(x),i(!1)},g=()=>{c("/perfil"),o(!1)},w=()=>{localStorage.removeItem("nvuUserData"),c("/login")};D.useEffect(()=>{function x(v){a.current&&!a.current.contains(v.target)&&i(!1),l.current&&!l.current.contains(v.target)&&o(!1)}return document.addEventListener("mousedown",x),()=>{document.removeEventListener("mousedown",x)}},[a,l]);const C={es:"Español",en:"English",fr:"Français"}[n.language.split("-")[0]]||"Idioma";return d.jsxs($3,{children:[d.jsx(z3,{onClick:t,children:e?d.jsx(w3,{}):d.jsx(t3,{})}),d.jsx(U3,{children:d.jsx(cr,{to:"/",children:d.jsx("img",{src:"/logo%20login.png",alt:"NVU Logo"})})}),d.jsxs(B3,{children:[d.jsxs(H3,{ref:l,children:[d.jsxs(q3,{onClick:()=>o(x=>!x),children:[d.jsx(G3,{children:d.jsx("img",{src:h.avatar||"/images/stock-user.png",alt:"User Avatar"})}),d.jsxs(K3,{children:[d.jsx(Q3,{children:h.name}),h.email&&d.jsx(Y3,{children:h.email})]})]}),s&&d.jsxs(W3,{children:[d.jsx(Tx,{onClick:g,children:"Perfil"}),d.jsx(Tx,{onClick:w,children:"Cerrar sesión"})]})]}),d.jsxs(J3,{ref:a,children:[d.jsxs(Z3,{onClick:()=>i(!r),children:[C," ",d.jsx(v3,{})]}),r&&d.jsxs(X3,{children:[d.jsx(fp,{onClick:()=>p("es"),children:"Español"}),d.jsx(fp,{onClick:()=>p("en"),children:"English"}),d.jsx(fp,{onClick:()=>p("fr"),children:"Français"})]})]})]})]})},eP=_(cr)`
  display: flex;
  align-items: center;
  padding: 15px 20px;
  color: ${t=>t.$isActive?"rgb(0,150,136)":"rgb(255,255,255)"};
  text-decoration: none;
  font-weight: ${t=>t.$isActive?"600":"400"};
  transition: all 0.2s ease;
  border-left: 3px solid ${t=>t.$isActive?"rgb(0,150,136)":"transparent"};
  background-color: ${t=>t.$isActive?"rgba(0,150,136,0.08)":"transparent"};
  
  &:hover {
    background-color: rgba(0,150,136,0.12);
    color: rgb(0,150,136);
    border-left-color: rgb(0,150,136);
  }
`,tP=_.div`
  margin-right: ${t=>t.$isCollapsed?"0":"12px"};
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  min-width: 24px;
  transition: margin-right 0.3s ease;
`,nP=_.span`
  opacity: ${t=>t.$isCollapsed?"0":"1"};
  transition: opacity 0.2s ease 0.1s;
  white-space: nowrap;
  color: rgb(158,158,158);
`,rP=({to:t,icon:e,label:n,isActive:r,isCollapsed:i,onClick:s})=>d.jsxs(eP,{to:t,$isActive:r,title:n,onClick:s,children:[d.jsx(tP,{$isCollapsed:i,children:e}),d.jsx(nP,{$isCollapsed:i,children:n})]}),Ix=250,iP=70,sP=_.aside`
  position: fixed;
  top: 64px;
  left: 0;
  width: ${Ix}px;
  height: calc(100vh - 64px);
  background: rgb(0,0,0);
  box-shadow: 1px 0 3px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  z-index: 900;
  transition: transform 0.3s ease, width 0.3s ease;
  overflow-y: auto;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 1px;
    background: linear-gradient(to bottom, 
      rgba(0,150,136,0.2),
      rgba(0,150,136,0.1) 50%,
      rgba(0,150,136,0.05) 100%
    );
    box-shadow: 1px 0 2px rgba(0,150,136,0.1);
  }

  transform: translateX(0);
  
  ${t=>t.$isCollapsed&&G0`
    width: ${iP}px;
  `}

  @media (max-width: 991px) {
    width: ${Ix}px;
    transform: translateX(${t=>t.$isOpen?"0":"-100%"});
    top: 64px;
    height: calc(100vh - 64px);
    position: fixed;
  }
`,oP=_.button`
  position: absolute;
  top: 15px;
  right: 10px;
  background: none;
  border: none;
  color: rgb(0,150,136);
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  transition: all 0.3s ease;
  
  &:hover {
    color: rgb(0,200,180);
  }
  
  @media (max-width: 991px) {
    display: none;
  }
`,aP=_.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  margin-top: 10px;
`,lP=_.div`
  margin-top: auto;
  padding: 20px;
  border-top: 1px solid rgb(30,30,30);
  opacity: ${t=>t.$isCollapsed?"0":"1"};
  visibility: ${t=>t.$isCollapsed?"hidden":"visible"};
  transition: opacity 0.3s ease, visibility 0.3s ease;

  @media (max-width: 991px) {
    opacity: 1;
    visibility: visible;
  }
`,uP=_.ul`
  list-style: none;
  padding: 0;
  margin: 10px 0 0 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
`,kx=_.li`
  a {
    display: flex;
    align-items: center;
    gap: 12px;
    color: rgb(158,158,158);
    text-decoration: none;
    font-size: 14px;
    
    &:hover {
      color: rgb(0,150,136);
    }

    svg {
      font-size: 1.5rem;
      min-width: 24px;
    }
  }
`,WS=({isOpen:t,isCollapsed:e,onClose:n,onToggleCollapse:r})=>{const i=Ur(),{t:s,i18n:o}=ft(),a=[{path:"/",icon:d.jsx(l3,{}),label:s("sidebar.home")},{path:"/academia",icon:d.jsx(a3,{}),label:s("sidebar.academy")},{path:"/educadores",icon:d.jsx(i3,{}),label:s("sidebar.educators")},{path:"/calendario",icon:d.jsx(r3,{}),label:s("sidebar.calendar")},{path:"/beyond-charts",icon:d.jsx(p3,{}),label:s("sidebar.beyondCharts")},{path:"/news",icon:d.jsx(u3,{}),label:s("sidebar.news")},{path:"/markups",icon:d.jsx(s3,{}),label:s("sidebar.markups")},{path:"/scanner",icon:d.jsx(d3,{}),label:s("sidebar.scanner")},{path:"/trading-journal",icon:d.jsx(n3,{}),label:s("sidebar.tradingJournal")}],l=e&&window.innerWidth>=992;return d.jsxs(sP,{$isOpen:t,$isCollapsed:l,children:[d.jsx(oP,{onClick:r,style:{position:"absolute",top:"10px",right:"10px"},children:l?d.jsx(_3,{}):d.jsx(x3,{})}),d.jsx(aP,{children:a.map(c=>d.jsx(rP,{to:c.path,icon:c.icon,label:c.label,isActive:i.pathname===c.path,isCollapsed:l,onClick:n},c.path))}),d.jsx(lP,{$isCollapsed:l,children:d.jsxs(uP,{children:[d.jsx(kx,{children:d.jsxs("a",{href:"https://instagram.com",target:"_blank",rel:"noopener noreferrer",children:[d.jsx(FS,{style:{color:"#E1306C"}}),d.jsx("span",{children:s("sidebar.social.instagram")})]})}),d.jsx(kx,{children:d.jsxs("a",{href:"https://telegram.org",target:"_blank",rel:"noopener noreferrer",children:[d.jsx(e3,{style:{color:"#0088cc"}}),d.jsx("span",{children:s("sidebar.social.telegram")})]})})]})})]})},cP="64px",ud="991px",dP=_.div`
  display: flex;
  flex-direction: column; 
  min-height: 100vh;
`,hP=_.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 800; // Debajo del sidebar (sidebar tiene 900)
  opacity: ${t=>t.$isOpen?1:0};
  visibility: ${t=>t.$isOpen?"visible":"hidden"};
  transition: opacity 0.3s ease, visibility 0.3s ease;
  display: none; // Oculto por defecto

  @media (max-width: ${ud}) {
    display: block; // Visible solo en móvil cuando está abierto
  }
`,fP=_.div`
  display: flex;
  flex: 1;
  min-width: 0;
  transition: margin-left 0.3s ease;
  position: relative;
  margin-left: ${t=>t.$isSidebarCollapsed?"70px":"250px"};
  @media (max-width: 991px) {
    margin-left: 0;
  }
`,pP=_.main`
  flex: 1;
  padding: 0 16px 16px 0;
  background-color: rgb(0,0,0);
  overflow-y: auto;
  min-width: 0;
  margin-top: ${cP};
  position: relative;
  @media (max-width: 768px) {
    padding: 0 12px 12px 0;
  }
  @media (max-width: 480px) {
    padding: 0 8px 8px 0;
  }
`,mP=_.div`
  display: flex;
  flex: 1;
  min-width: 0;
  flex-direction: row;
`,bn=({children:t})=>{const[e,n]=D.useState(!0),[r,i]=D.useState(!1),s=Ur();Br();const o=()=>{window.innerWidth<=parseInt(ud)?n(c=>!c):(i(c=>!c),n(!0))},a=()=>{window.innerWidth<=parseInt(ud)&&n(!1)};return D.useEffect(()=>{a()},[s.pathname]),D.useEffect(()=>{const l=()=>{window.innerWidth<=parseInt(ud)||n(!0)};return window.addEventListener("resize",l),l(),()=>window.removeEventListener("resize",l)},[]),s.pathname==="/login"?d.jsx(d.Fragment,{children:t}):d.jsxs(dP,{children:[d.jsx(HS,{onToggleSidebar:o,isSidebarOpen:e}),d.jsxs(mP,{children:[d.jsx(WS,{isOpen:e,isCollapsed:r,onClose:a,onToggleCollapse:o}),d.jsx(fP,{$isSidebarCollapsed:r,children:d.jsx(pP,{children:t})})]}),d.jsx(hP,{$isOpen:e,onClick:a})]})},gP=()=>{const t=D.useRef(null);return D.useEffect(()=>{if(!t.current)return;t.current.innerHTML="";const e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js",e.innerHTML=`{
      "colorTheme": "dark",
      "dateRange": "1D",
      "showChart": true,
      "locale": "en",
      "largeChartUrl": "",
      "isTransparent": true,
      "showSymbolLogo": false,
      "showFloatingTooltip": false,
      "width": "400",
      "height": "550",
      "plotLineColorGrowing": "rgba(41, 98, 255, 1)",
      "plotLineColorFalling": "rgba(41, 98, 255, 1)",
      "gridLineColor": "rgba(42, 46, 57, 0)",
      "scaleFontColor": "rgba(219, 219, 219, 1)",
      "belowLineFillColorGrowing": "rgba(41, 98, 255, 0.12)",
      "belowLineFillColorFalling": "rgba(41, 98, 255, 0.12)",
      "belowLineFillColorGrowingBottom": "rgba(41, 98, 255, 0)",
      "belowLineFillColorFallingBottom": "rgba(41, 98, 255, 0)",
      "symbolActiveColor": "rgba(41, 98, 255, 0.12)",
      "tabs": [
        {
          "title": "Forex",
          "symbols": [
            { "s": "FX:EURUSD", "d": "EUR to USD" },
            { "s": "FX:GBPUSD", "d": "GBP to USD" },
            { "s": "FX:USDJPY", "d": "USD to JPY" },
            { "s": "FX:USDCHF", "d": "USD to CHF" },
            { "s": "FX:AUDUSD", "d": "AUD to USD" },
            { "s": "FX:USDCAD", "d": "USD to CAD" }
          ],
          "originalTitle": "Forex"
        },
        {
          "title": "Crypto",
          "symbols": [
            { "s": "BINANCE:BTCUSDT" },
            { "s": "COINBASE:ETHUSD" },
            { "s": "BINANCE:XRPUSDT" },
            { "s": "COINBASE:SOLUSD" },
            { "s": "BINANCE:BNBUSDT" }
          ]
        }
      ]
    }`,t.current.appendChild(e)},[]),d.jsxs("div",{className:"tradingview-widget-container",style:{minWidth:400,minHeight:550},children:[d.jsx("div",{ref:t,className:"tradingview-widget-container__widget"}),d.jsx("div",{className:"tradingview-widget-copyright",children:d.jsx("a",{href:"https://www.tradingview.com/",rel:"noopener nofollow",target:"_blank",children:d.jsx("span",{className:"blue-text",children:"Track all markets on TradingView"})})})]})},gl="Educador experto en su campo, comprometido con el éxito de los estudiantes.",at={instagram:"#",linkedin:"#",facebook:"#"},Dr={forex:[{id:"seb-garcia",name:"Sebastian Garcia",title:"Educador en finanzas",status:"Ausente",img:"https://picsum.photos/seed/forex1/400/300",profileImageFilename:"Sebastian.jpg",coverImageFilename:"Sebastian García.jpg",description:"Soy un educador con más de 10 años de experiencia en el trading, habiendo guiado a más de 1,000 estudiantes a transformar sus resultados en los gráficos y en sus vidas. Mi enfoque combina estrategias efectivas de Smart Money con herramientas avanzadas de PNL (Programación Neurolingüística), permitiendo a mis estudiantes duplicar sus resultados en 90 días.",language:"es",socialLinks:at,vimeoLiveEmbed:"https://vimeo.com/event/4650284/embed/interaction",vimeoUserId:"221550365",vimeoFolderId:"22599057"},{id:"abi-belity",name:"Abi Belilty",title:"Educador en finanzas",status:"En vivo",viewers:4200,img:"https://picsum.photos/seed/forex2/400/300",profileImageFilename:"Abi.jpg",coverImageFilename:"Abi Belilty.jpg",description:`Abi Belilty es un trader profesional con más de 7 años de experiencia en los mercados financieros. Con una pasión innata por el trading, Abi ha dedicado años de su vida a perfeccionar sus habilidades y conocimientos en el mundo de las inversiones.

Con una visión única y perspicaz, Abi invita a personas de todo el mundo a conectarse a sus sesiones, donde comparte sus estrategias favoritas y consejos clave para llevar el trading a un nivel superior. Su enfoque práctico y su capacidad para simplificar conceptos complejos hacen que sus sesiones sean accesibles y valiosas para traders de todos los niveles.`,language:"es",socialLinks:{instagram:"https://instagram.com/abibelity",linkedin:"https://linkedin.com/in/abibelity",facebook:"https://facebook.com/abibelity"},vimeoLiveEmbed:"https://vimeo.com/event/4650278/embed/interaction",vimeoUserId:"221550365",vimeoFolderId:"22599055"},{id:"frank-araujo",name:"Franklin Araujo",title:"Educador en finanzas",status:"Ausente",img:"https://picsum.photos/seed/forex3/400/300",profileImageFilename:"Franklin.jpg",coverImageFilename:"Franklin Araujo.jpg",description:"Trader con más de 5 años de experiencia en los mercados financieros, especializado en el par EUR/USD. Como swing trader, te brindaré las herramientas correctas para que aprendas trading desde lo más básico hasta lo más avanzado, con un enfoque claro en dominar las gráficas y entender el comportamiento del mercado de forma profesional.",language:"es",socialLinks:at,vimeoLiveEmbed:"https://vimeo.com/event/4827795/embed/interaction",vimeoUserId:"221550365",vimeoFolderId:"25090053"},{id:"maur-gaytan",name:"Mauricio Gaytán",title:"Educador en finanzas",status:"Ausente",img:"https://picsum.photos/seed/forex4/400/300",profileImageFilename:"Mauricio.jpg",coverImageFilename:"Mauricio Gaytan.jpg",description:"Ingeniero de Profesión, Coach de Liderazgo Certificado, 4 años como Trader, especializado en operar el XAU y los JPY con estrategia propia, casado con dos hijas.",language:"es",socialLinks:at,vimeoLiveEmbed:"https://vimeo.com/event/5033739/embed",vimeoUserId:"221550365",vimeoFolderId:"24795411"},{id:"aring-long-fx",name:"Aring Long",title:"Educador Forex",status:"Ausente",img:"https://picsum.photos/seed/aringlong/400/300",profileImageFilename:"Arin.jpg",coverImageFilename:"Arin Long.jpg",description:"Arin Long has a true passion for education and a strong foundation in problem-solving and process optimization, which she developed during her career as a mechanical engineer. With a natural affinity for technical analysis, she transitioned into trading five years ago and quickly developed a deep passion for the markets. Arin's trading approach is grounded in her technical mindset and meticulous attention to detail, skills she further refined through mentorship with Richard Hall (aka Market Bully). By mastering simple yet powerful strategies, Arin remains committed to continuous learning, constantly refining her techniques and expanding her market knowledge.",language:"en",socialLinks:at,vimeoLiveEmbed:"https://vimeo.com/event/4865934/embed",vimeoUserId:"221550365",vimeoFolderId:"23714506"},{id:"marcelo-t-fx",name:"Marcelo Trullen",title:"Educador Forex",status:"Ausente",img:"https://picsum.photos/seed/marcelot/400/300",profileImageFilename:"Marcelo.jpg",coverImageFilename:"Marcelo Trullen.jpg",description:"Soy Marcelo Trullen, experto en E-commerce y Marketing Digital. Mi pasión por el crecimiento digital y la búsqueda continua de soluciones efectivas me ha permitido ayudar a los equipos a llevar sus negocios al siguiente nivel. Estoy comprometido con el aprendizaje continuo y la implementación de soluciones de vanguardia en el mundo del comercio electrónico.",language:"es",socialLinks:at,vimeoLiveEmbed:"https://vimeo.com/event/4778572/embed",vimeoUserId:"221550365",vimeoFolderId:"23181251"},{id:"richard-p-fx",name:"Richard Hall Pops",title:"Educador Forex",status:"Ausente",img:"https://picsum.photos/seed/richardp/400/300",profileImageFilename:"Richard Pops.jpg",coverImageFilename:"Richard Hall.jpg",description:gl,language:"en",socialLinks:at,vimeoLiveEmbed:"https://vimeo.com/event/4650337/embed/interaction",vimeoUserId:"221550365",vimeoFolderId:"22598297"},{id:"about-nikki-fx",name:"Nikki Sutherland",title:"Educador Forex",status:"Ausente",img:"https://picsum.photos/seed/aboutnikki/400/300",profileImageFilename:"Nikki S.jpg",coverImageFilename:"Nikki Sutherland.jpg",description:gl,language:"en",socialLinks:at,vimeoLiveEmbed:"https://vimeo.com/event/4759785/embed",vimeoUserId:"221550365",vimeoFolderId:"23029602"},{id:"jorge-damelines",name:"Jorge Damelines",title:"Educador Forex",status:"Ausente",img:"https://picsum.photos/seed/jorged/400/300",profileImageFilename:"Jorge.jpg",coverImageFilename:"Jorge D.jpg",description:"Experto en desarrollo y evolución humana, guía de experiencias transformadoras, Acompañando procesos de autoconocimiento, poder interior y acción consciente",language:"es",socialLinks:at,vimeoLiveEmbed:"https://vimeo.com/event/5032569/embed",vimeoUserId:"221550365",vimeoFolderId:"24795326"},{id:"paulina",name:"Ana Paulina",title:"Educadora Forex",status:"Ausente",img:"https://picsum.photos/seed/estate2/400/300",profileImageFilename:"Ana Paulina.jpg",coverImageFilename:"Ana Paulina.jpg",description:gl,language:"en",socialLinks:at,vimeoLiveEmbed:"https://vimeo.com/event/4650299/embed",vimeoUserId:"221550365",vimeoFolderId:"22599101"},{id:"henry-tyson",name:"Andre Tyson",title:"Educador Forex",status:"Ausente",img:"https://picsum.photos/seed/estate5/400/300",profileImageFilename:"Andre.jpg",coverImageFilename:"Andre Tyson.jpg",description:"I am strong and passionate person about what I do. As long as I put my mind to it I can achieve it. I put god first into everything I do",language:"en",socialLinks:at,vimeoLiveEmbed:"https://vimeo.com/event/4932282/embed/interaction",vimeoUserId:"221550365",vimeoFolderId:"24263935"},{id:"javier-perez",name:"Javier Perez",title:"Educador Forex",status:"Ausente",img:"https://picsum.photos/seed/javierperez/400/300",profileImageFilename:"Javier P.jpg",coverImageFilename:"Javier P.jpg",sessionsBanner:"Javier P.jpg",description:"Educador especializado en Forex.",language:"es",socialLinks:at,vimeoLiveEmbed:"https://vimeo.com/event/5106116/embed/interaction",vimeoUserId:"221550365",vimeoFolderId:"25165856"},{id:"andre-tyson",name:"Andre Tyson",title:"Educador Forex",status:"Ausente",img:"https://picsum.photos/seed/andretyson/400/300",profileImageFilename:"Andre.jpg",coverImageFilename:"Andre Tyson.jpg",description:"Forex educator.",language:"en",socialLinks:at,vimeoLiveEmbed:"",vimeoUserId:"",vimeoFolderId:""},{id:"raphael-msica",name:"Raphael Msica",title:"Educador Forex",status:"Ausente",img:"https://picsum.photos/seed/raphaelmsica/400/300",profileImageFilename:"Raphael M (2).jpg",coverImageFilename:"Raphael Msica copy.jpg",sessionsBanner:"Raphael Msica copy.jpg",description:"Éducateur spécialisé en Forex.",language:"fr",socialLinks:at,vimeoLiveEmbed:"https://vimeo.com/event/5104251/embed/interaction",vimeoUserId:"221550365",vimeoFolderId:"25156807"},{id:"arin-long",name:"Arin Long",title:"Educador Forex",status:"Ausente",img:"https://picsum.photos/seed/aringlong/400/300",profileImageFilename:"Arin.jpg",coverImageFilename:"Arin Long.jpg",description:"Forex educator.",language:"en",socialLinks:at,vimeoLiveEmbed:"",vimeoUserId:"",vimeoFolderId:""},{id:"richard-hall-pops",name:"Richard Hall Pops",title:"Educador Forex",status:"Ausente",img:"https://picsum.photos/seed/richardhall/400/300",profileImageFilename:"Richard Pops.jpg",coverImageFilename:"Richard Hall.jpg",description:"Forex educator.",language:"en",socialLinks:at,vimeoLiveEmbed:"https://vimeo.com/event/4650337/embed/interaction",vimeoUserId:"",vimeoFolderId:""},{id:"nikki-sutherland",name:"Nikki Sutherland",title:"Educador Forex",status:"Ausente",img:"https://picsum.photos/seed/nikkisutherland/400/300",profileImageFilename:"Nikki S.jpg",coverImageFilename:"Nikki Sutherland.jpg",description:"Forex educator.",language:"en",socialLinks:at,vimeoLiveEmbed:"",vimeoUserId:"",vimeoFolderId:""}],crypto:[{id:"corey-williams",name:"Corey Williams",title:"Educador Crypto",status:"Ausente",img:"https://picsum.photos/seed/crypto1/400/300",profileImageFilename:"Corey.jpg",coverImageFilename:"Corey Williams.jpg",description:gl,language:"en",socialLinks:at,vimeoLiveEmbed:"https://vimeo.com/event/4839566/embed",vimeoUserId:"221550365",vimeoFolderId:"23714510"}],"financial-literacy":[{id:"dani-curtis",name:"Raquel Curtis",title:"Educadora Finanzas",status:"En vivo",viewers:1500,img:"https://picsum.photos/seed/finlit1/400/300",profileImageFilename:"Raquel.jpg",coverImageFilename:"Raquel Curtis.jpg",description:"Raquel Curtis, MBA, is a financial educator, entrepreneur, and international best-selling author dedicated to helping women take control of their finances and build wealth. A Georgia native and mother of three, Raquel turned personal setbacks into success through budgeting and investing, inspiring the creation of The Boujee Banker brand. She teaches women how to budget, save, invest, and grow online businesses. Raquel is the author of Mastering Your Money Mindset and co-author of the Amazon best-seller MoneyTalk$, featuring a foreword by Les Brown. A dynamic speaker and doctoral candidate, she has impacted thousands globally, guiding individuals toward lasting financial empowerment.",language:"en",socialLinks:at,vimeoLiveEmbed:"https://vimeo.com/event/4839563/embed",vimeoUserId:"221550365",vimeoFolderId:"23714509"},{id:"annie-toney",name:"Angie Toney",title:"Educadora Finanzas",status:"Ausente",img:"https://picsum.photos/seed/finlit2/400/300",profileImageFilename:"Angie.jpg",coverImageFilename:"Angie Toney.jpg",description:gl,language:"en",socialLinks:at,vimeoLiveEmbed:"https://vimeo.com/event/4650197/embed",vimeoUserId:"221550365",vimeoFolderId:"22599084"}],"marketing-digital":[{id:"steph-royal",name:"Stephon Royal",title:"Educador Marketing",status:"Ausente",img:"https://picsum.photos/seed/marketing1/400/300",profileImageFilename:"Stephon.jpg",coverImageFilename:"Stephon R.jpg",description:`Stephon Royal is a passionate and dynamic social media educator dedicated to empowering individuals and businesses to master the art of digital storytelling and online influence. With years of experience in creating viral-worthy content and building impactful online brands, Stephon combines creativity with strategy to help students unlock the full potential of social media platforms

Specializing in content creation, audience engagement, and monetization strategies, Stephon has developed a reputation for delivering practical insights, innovative techniques, and actionable solutions. Whether you're a beginner influencer, a small business owner, or a seasoned marketer, Stephon's approachable teaching style ensures every student walks away with the skills and confidence to thrive in the ever-evolving world of social media.

Known for his energetic workshops and personalized coaching, Stephon's mission is simple: to help you build a brand that not only stands out but also connects, converts, and creates lasting impact.`,language:"en",socialLinks:at,vimeoLiveEmbed:"https://vimeo.com/event/4849959/embed",vimeoUserId:"221550365",vimeoFolderId:"23782095"}]},ue=t=>typeof t=="string",yl=()=>{let t,e;const n=new Promise((r,i)=>{t=r,e=i});return n.resolve=t,n.reject=e,n},Cx=t=>t==null?"":""+t,yP=(t,e,n)=>{t.forEach(r=>{e[r]&&(n[r]=e[r])})},vP=/###/g,Ax=t=>t&&t.indexOf("###")>-1?t.replace(vP,"."):t,Rx=t=>!t||ue(t),Ul=(t,e,n)=>{const r=ue(e)?e.split("."):e;let i=0;for(;i<r.length-1;){if(Rx(t))return{};const s=Ax(r[i]);!t[s]&&n&&(t[s]=new n),Object.prototype.hasOwnProperty.call(t,s)?t=t[s]:t={},++i}return Rx(t)?{}:{obj:t,k:Ax(r[i])}},Px=(t,e,n)=>{const{obj:r,k:i}=Ul(t,e,Object);if(r!==void 0||e.length===1){r[i]=n;return}let s=e[e.length-1],o=e.slice(0,e.length-1),a=Ul(t,o,Object);for(;a.obj===void 0&&o.length;)s=`${o[o.length-1]}.${s}`,o=o.slice(0,o.length-1),a=Ul(t,o,Object),a!=null&&a.obj&&typeof a.obj[`${a.k}.${s}`]<"u"&&(a.obj=void 0);a.obj[`${a.k}.${s}`]=n},xP=(t,e,n,r)=>{const{obj:i,k:s}=Ul(t,e,Object);i[s]=i[s]||[],i[s].push(n)},Qd=(t,e)=>{const{obj:n,k:r}=Ul(t,e);if(n&&Object.prototype.hasOwnProperty.call(n,r))return n[r]},wP=(t,e,n)=>{const r=Qd(t,n);return r!==void 0?r:Qd(e,n)},qS=(t,e,n)=>{for(const r in e)r!=="__proto__"&&r!=="constructor"&&(r in t?ue(t[r])||t[r]instanceof String||ue(e[r])||e[r]instanceof String?n&&(t[r]=e[r]):qS(t[r],e[r],n):t[r]=e[r]);return t},Io=t=>t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var _P={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const bP=t=>ue(t)?t.replace(/[&<>"'\/]/g,e=>_P[e]):t;class EP{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const n=this.regExpMap.get(e);if(n!==void 0)return n;const r=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,r),this.regExpQueue.push(e),r}}const SP=[" ",",","?","!",";"],TP=new EP(20),IP=(t,e,n)=>{e=e||"",n=n||"";const r=SP.filter(o=>e.indexOf(o)<0&&n.indexOf(o)<0);if(r.length===0)return!0;const i=TP.getRegExp(`(${r.map(o=>o==="?"?"\\?":o).join("|")})`);let s=!i.test(t);if(!s){const o=t.indexOf(n);o>0&&!i.test(t.substring(0,o))&&(s=!0)}return s},tg=function(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!t)return;if(t[e])return Object.prototype.hasOwnProperty.call(t,e)?t[e]:void 0;const r=e.split(n);let i=t;for(let s=0;s<r.length;){if(!i||typeof i!="object")return;let o,a="";for(let l=s;l<r.length;++l)if(l!==s&&(a+=n),a+=r[l],o=i[a],o!==void 0){if(["string","number","boolean"].indexOf(typeof o)>-1&&l<r.length-1)continue;s+=l-s+1;break}i=o}return i},Yd=t=>t==null?void 0:t.replace("_","-"),kP={type:"logger",log(t){this.output("log",t)},warn(t){this.output("warn",t)},error(t){this.output("error",t)},output(t,e){var n,r;(r=(n=console==null?void 0:console[t])==null?void 0:n.apply)==null||r.call(n,console,e)}};let CP=class ng{constructor(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(e,n)}init(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=n.prefix||"i18next:",this.logger=e||kP,this.options=n,this.debug=n.debug}log(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return this.forward(n,"log","",!0)}warn(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return this.forward(n,"warn","",!0)}error(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return this.forward(n,"error","")}deprecate(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return this.forward(n,"warn","WARNING DEPRECATED: ",!0)}forward(e,n,r,i){return i&&!this.debug?null:(ue(e[0])&&(e[0]=`${r}${this.prefix} ${e[0]}`),this.logger[n](e))}create(e){return new ng(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return e=e||this.options,e.prefix=e.prefix||this.prefix,new ng(this.logger,e)}};var Rr=new CP;class Hh{constructor(){this.observers={}}on(e,n){return e.split(" ").forEach(r=>{this.observers[r]||(this.observers[r]=new Map);const i=this.observers[r].get(n)||0;this.observers[r].set(n,i+1)}),this}off(e,n){if(this.observers[e]){if(!n){delete this.observers[e];return}this.observers[e].delete(n)}}emit(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];this.observers[e]&&Array.from(this.observers[e].entries()).forEach(o=>{let[a,l]=o;for(let c=0;c<l;c++)a(...r)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(o=>{let[a,l]=o;for(let c=0;c<l;c++)a.apply(a,[e,...r])})}}class Nx extends Hh{constructor(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=e||{},this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const n=this.options.ns.indexOf(e);n>-1&&this.options.ns.splice(n,1)}getResource(e,n,r){var c,h;let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const s=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator,o=i.ignoreJSONStructure!==void 0?i.ignoreJSONStructure:this.options.ignoreJSONStructure;let a;e.indexOf(".")>-1?a=e.split("."):(a=[e,n],r&&(Array.isArray(r)?a.push(...r):ue(r)&&s?a.push(...r.split(s)):a.push(r)));const l=Qd(this.data,a);return!l&&!n&&!r&&e.indexOf(".")>-1&&(e=a[0],n=a[1],r=a.slice(2).join(".")),l||!o||!ue(r)?l:tg((h=(c=this.data)==null?void 0:c[e])==null?void 0:h[n],r,s)}addResource(e,n,r,i){let s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const o=s.keySeparator!==void 0?s.keySeparator:this.options.keySeparator;let a=[e,n];r&&(a=a.concat(o?r.split(o):r)),e.indexOf(".")>-1&&(a=e.split("."),i=n,n=a[1]),this.addNamespaces(n),Px(this.data,a,i),s.silent||this.emit("added",e,n,r,i)}addResources(e,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const s in r)(ue(r[s])||Array.isArray(r[s]))&&this.addResource(e,n,s,r[s],{silent:!0});i.silent||this.emit("added",e,n,r)}addResourceBundle(e,n,r,i,s){let o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},a=[e,n];e.indexOf(".")>-1&&(a=e.split("."),i=r,r=n,n=a[1]),this.addNamespaces(n);let l=Qd(this.data,a)||{};o.skipCopy||(r=JSON.parse(JSON.stringify(r))),i?qS(l,r,s):l={...l,...r},Px(this.data,a,l),o.silent||this.emit("added",e,n,r)}removeResourceBundle(e,n){this.hasResourceBundle(e,n)&&delete this.data[e][n],this.removeNamespaces(n),this.emit("removed",e,n)}hasResourceBundle(e,n){return this.getResource(e,n)!==void 0}getResourceBundle(e,n){return n||(n=this.options.defaultNS),this.getResource(e,n)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const n=this.getDataByLanguage(e);return!!(n&&Object.keys(n)||[]).find(i=>n[i]&&Object.keys(n[i]).length>0)}toJSON(){return this.data}}var GS={processors:{},addPostProcessor(t){this.processors[t.name]=t},handle(t,e,n,r,i){return t.forEach(s=>{var o;e=((o=this.processors[s])==null?void 0:o.process(e,n,r,i))??e}),e}};const Dx={},Ox=t=>!ue(t)&&typeof t!="boolean"&&typeof t!="number";class Jd extends Hh{constructor(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),yP(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=Rr.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(e==null)return!1;const r=this.resolve(e,n);return(r==null?void 0:r.res)!==void 0}extractFromKey(e,n){let r=n.nsSeparator!==void 0?n.nsSeparator:this.options.nsSeparator;r===void 0&&(r=":");const i=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator;let s=n.ns||this.options.defaultNS||[];const o=r&&e.indexOf(r)>-1,a=!this.options.userDefinedKeySeparator&&!n.keySeparator&&!this.options.userDefinedNsSeparator&&!n.nsSeparator&&!IP(e,r,i);if(o&&!a){const l=e.match(this.interpolator.nestingRegexp);if(l&&l.length>0)return{key:e,namespaces:ue(s)?[s]:s};const c=e.split(r);(r!==i||r===i&&this.options.ns.indexOf(c[0])>-1)&&(s=c.shift()),e=c.join(i)}return{key:e,namespaces:ue(s)?[s]:s}}translate(e,n,r){if(typeof n!="object"&&this.options.overloadTranslationOptionHandler&&(n=this.options.overloadTranslationOptionHandler(arguments)),typeof options=="object"&&(n={...n}),n||(n={}),e==null)return"";Array.isArray(e)||(e=[String(e)]);const i=n.returnDetails!==void 0?n.returnDetails:this.options.returnDetails,s=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator,{key:o,namespaces:a}=this.extractFromKey(e[e.length-1],n),l=a[a.length-1],c=n.lng||this.language,h=n.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if((c==null?void 0:c.toLowerCase())==="cimode"){if(h){const N=n.nsSeparator||this.options.nsSeparator;return i?{res:`${l}${N}${o}`,usedKey:o,exactUsedKey:o,usedLng:c,usedNS:l,usedParams:this.getUsedParamsDetails(n)}:`${l}${N}${o}`}return i?{res:o,usedKey:o,exactUsedKey:o,usedLng:c,usedNS:l,usedParams:this.getUsedParamsDetails(n)}:o}const f=this.resolve(e,n);let p=f==null?void 0:f.res;const g=(f==null?void 0:f.usedKey)||o,w=(f==null?void 0:f.exactUsedKey)||o,k=["[object Number]","[object Function]","[object RegExp]"],C=n.joinArrays!==void 0?n.joinArrays:this.options.joinArrays,x=!this.i18nFormat||this.i18nFormat.handleAsObject,v=n.count!==void 0&&!ue(n.count),E=Jd.hasDefaultValue(n),P=v?this.pluralResolver.getSuffix(c,n.count,n):"",j=n.ordinal&&v?this.pluralResolver.getSuffix(c,n.count,{ordinal:!1}):"",M=v&&!n.ordinal&&n.count===0,b=M&&n[`defaultValue${this.options.pluralSeparator}zero`]||n[`defaultValue${P}`]||n[`defaultValue${j}`]||n.defaultValue;let S=p;x&&!p&&E&&(S=b);const A=Ox(S),R=Object.prototype.toString.apply(S);if(x&&S&&A&&k.indexOf(R)<0&&!(ue(C)&&Array.isArray(S))){if(!n.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const N=this.options.returnedObjectHandler?this.options.returnedObjectHandler(g,S,{...n,ns:a}):`key '${o} (${this.language})' returned an object instead of string.`;return i?(f.res=N,f.usedParams=this.getUsedParamsDetails(n),f):N}if(s){const N=Array.isArray(S),O=N?[]:{},I=N?w:g;for(const Q in S)if(Object.prototype.hasOwnProperty.call(S,Q)){const te=`${I}${s}${Q}`;E&&!p?O[Q]=this.translate(te,{...n,defaultValue:Ox(b)?b[Q]:void 0,joinArrays:!1,ns:a}):O[Q]=this.translate(te,{...n,joinArrays:!1,ns:a}),O[Q]===te&&(O[Q]=S[Q])}p=O}}else if(x&&ue(C)&&Array.isArray(p))p=p.join(C),p&&(p=this.extendTranslation(p,e,n,r));else{let N=!1,O=!1;!this.isValidLookup(p)&&E&&(N=!0,p=b),this.isValidLookup(p)||(O=!0,p=o);const Q=(n.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&O?void 0:p,te=E&&b!==p&&this.options.updateMissing;if(O||N||te){if(this.logger.log(te?"updateKey":"missingKey",c,l,o,te?b:p),s){const U=this.resolve(o,{...n,keySeparator:!1});U&&U.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let he=[];const se=this.languageUtils.getFallbackCodes(this.options.fallbackLng,n.lng||this.language);if(this.options.saveMissingTo==="fallback"&&se&&se[0])for(let U=0;U<se.length;U++)he.push(se[U]);else this.options.saveMissingTo==="all"?he=this.languageUtils.toResolveHierarchy(n.lng||this.language):he.push(n.lng||this.language);const z=(U,G,Z)=>{var Se;const oe=E&&Z!==p?Z:Q;this.options.missingKeyHandler?this.options.missingKeyHandler(U,l,G,oe,te,n):(Se=this.backendConnector)!=null&&Se.saveMissing&&this.backendConnector.saveMissing(U,l,G,oe,te,n),this.emit("missingKey",U,l,G,p)};this.options.saveMissing&&(this.options.saveMissingPlurals&&v?he.forEach(U=>{const G=this.pluralResolver.getSuffixes(U,n);M&&n[`defaultValue${this.options.pluralSeparator}zero`]&&G.indexOf(`${this.options.pluralSeparator}zero`)<0&&G.push(`${this.options.pluralSeparator}zero`),G.forEach(Z=>{z([U],o+Z,n[`defaultValue${Z}`]||b)})}):z(he,o,b))}p=this.extendTranslation(p,e,n,f,r),O&&p===o&&this.options.appendNamespaceToMissingKey&&(p=`${l}:${o}`),(O||N)&&this.options.parseMissingKeyHandler&&(p=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}:${o}`:o,N?p:void 0))}return i?(f.res=p,f.usedParams=this.getUsedParamsDetails(n),f):p}extendTranslation(e,n,r,i,s){var c,h;var o=this;if((c=this.i18nFormat)!=null&&c.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...r},r.lng||this.language||i.usedLng,i.usedNS,i.usedKey,{resolved:i});else if(!r.skipInterpolation){r.interpolation&&this.interpolator.init({...r,interpolation:{...this.options.interpolation,...r.interpolation}});const f=ue(e)&&(((h=r==null?void 0:r.interpolation)==null?void 0:h.skipOnVariables)!==void 0?r.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let p;if(f){const w=e.match(this.interpolator.nestingRegexp);p=w&&w.length}let g=r.replace&&!ue(r.replace)?r.replace:r;if(this.options.interpolation.defaultVariables&&(g={...this.options.interpolation.defaultVariables,...g}),e=this.interpolator.interpolate(e,g,r.lng||this.language||i.usedLng,r),f){const w=e.match(this.interpolator.nestingRegexp),k=w&&w.length;p<k&&(r.nest=!1)}!r.lng&&i&&i.res&&(r.lng=this.language||i.usedLng),r.nest!==!1&&(e=this.interpolator.nest(e,function(){for(var w=arguments.length,k=new Array(w),C=0;C<w;C++)k[C]=arguments[C];return(s==null?void 0:s[0])===k[0]&&!r.context?(o.logger.warn(`It seems you are nesting recursively key: ${k[0]} in key: ${n[0]}`),null):o.translate(...k,n)},r)),r.interpolation&&this.interpolator.reset()}const a=r.postProcess||this.options.postProcess,l=ue(a)?[a]:a;return e!=null&&(l!=null&&l.length)&&r.applyPostProcessor!==!1&&(e=GS.handle(l,e,n,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...i,usedParams:this.getUsedParamsDetails(r)},...r}:r,this)),e}resolve(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r,i,s,o,a;return ue(e)&&(e=[e]),e.forEach(l=>{if(this.isValidLookup(r))return;const c=this.extractFromKey(l,n),h=c.key;i=h;let f=c.namespaces;this.options.fallbackNS&&(f=f.concat(this.options.fallbackNS));const p=n.count!==void 0&&!ue(n.count),g=p&&!n.ordinal&&n.count===0,w=n.context!==void 0&&(ue(n.context)||typeof n.context=="number")&&n.context!=="",k=n.lngs?n.lngs:this.languageUtils.toResolveHierarchy(n.lng||this.language,n.fallbackLng);f.forEach(C=>{var x,v;this.isValidLookup(r)||(a=C,!Dx[`${k[0]}-${C}`]&&((x=this.utils)!=null&&x.hasLoadedNamespace)&&!((v=this.utils)!=null&&v.hasLoadedNamespace(a))&&(Dx[`${k[0]}-${C}`]=!0,this.logger.warn(`key "${i}" for languages "${k.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),k.forEach(E=>{var M;if(this.isValidLookup(r))return;o=E;const P=[h];if((M=this.i18nFormat)!=null&&M.addLookupKeys)this.i18nFormat.addLookupKeys(P,h,E,C,n);else{let b;p&&(b=this.pluralResolver.getSuffix(E,n.count,n));const S=`${this.options.pluralSeparator}zero`,A=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(p&&(P.push(h+b),n.ordinal&&b.indexOf(A)===0&&P.push(h+b.replace(A,this.options.pluralSeparator)),g&&P.push(h+S)),w){const R=`${h}${this.options.contextSeparator}${n.context}`;P.push(R),p&&(P.push(R+b),n.ordinal&&b.indexOf(A)===0&&P.push(R+b.replace(A,this.options.pluralSeparator)),g&&P.push(R+S))}}let j;for(;j=P.pop();)this.isValidLookup(r)||(s=j,r=this.getResource(E,C,j,n))}))})}),{res:r,usedKey:i,exactUsedKey:s,usedLng:o,usedNS:a}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e==="")}getResource(e,n,r){var s;let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return(s=this.i18nFormat)!=null&&s.getResource?this.i18nFormat.getResource(e,n,r,i):this.resourceStore.getResource(e,n,r,i)}getUsedParamsDetails(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const n=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],r=e.replace&&!ue(e.replace);let i=r?e.replace:e;if(r&&typeof e.count<"u"&&(i.count=e.count),this.options.interpolation.defaultVariables&&(i={...this.options.interpolation.defaultVariables,...i}),!r){i={...i};for(const s of n)delete i[s]}return i}static hasDefaultValue(e){const n="defaultValue";for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&n===r.substring(0,n.length)&&e[r]!==void 0)return!0;return!1}}class jx{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Rr.create("languageUtils")}getScriptPartFromCode(e){if(e=Yd(e),!e||e.indexOf("-")<0)return null;const n=e.split("-");return n.length===2||(n.pop(),n[n.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(n.join("-"))}getLanguagePartFromCode(e){if(e=Yd(e),!e||e.indexOf("-")<0)return e;const n=e.split("-");return this.formatLanguageCode(n[0])}formatLanguageCode(e){if(ue(e)&&e.indexOf("-")>-1){let n;try{n=Intl.getCanonicalLocales(e)[0]}catch{}return n&&this.options.lowerCaseLng&&(n=n.toLowerCase()),n||(this.options.lowerCaseLng?e.toLowerCase():e)}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let n;return e.forEach(r=>{if(n)return;const i=this.formatLanguageCode(r);(!this.options.supportedLngs||this.isSupportedCode(i))&&(n=i)}),!n&&this.options.supportedLngs&&e.forEach(r=>{if(n)return;const i=this.getScriptPartFromCode(r);if(this.isSupportedCode(i))return n=i;const s=this.getLanguagePartFromCode(r);if(this.isSupportedCode(s))return n=s;n=this.options.supportedLngs.find(o=>{if(o===s)return o;if(!(o.indexOf("-")<0&&s.indexOf("-")<0)&&(o.indexOf("-")>0&&s.indexOf("-")<0&&o.substring(0,o.indexOf("-"))===s||o.indexOf(s)===0&&s.length>1))return o})}),n||(n=this.getFallbackCodes(this.options.fallbackLng)[0]),n}getFallbackCodes(e,n){if(!e)return[];if(typeof e=="function"&&(e=e(n)),ue(e)&&(e=[e]),Array.isArray(e))return e;if(!n)return e.default||[];let r=e[n];return r||(r=e[this.getScriptPartFromCode(n)]),r||(r=e[this.formatLanguageCode(n)]),r||(r=e[this.getLanguagePartFromCode(n)]),r||(r=e.default),r||[]}toResolveHierarchy(e,n){const r=this.getFallbackCodes(n||this.options.fallbackLng||[],e),i=[],s=o=>{o&&(this.isSupportedCode(o)?i.push(o):this.logger.warn(`rejecting language code not found in supportedLngs: ${o}`))};return ue(e)&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&s(this.formatLanguageCode(e)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&s(this.getScriptPartFromCode(e)),this.options.load!=="currentOnly"&&s(this.getLanguagePartFromCode(e))):ue(e)&&s(this.formatLanguageCode(e)),r.forEach(o=>{i.indexOf(o)<0&&s(this.formatLanguageCode(o))}),i}}const Lx={zero:0,one:1,two:2,few:3,many:4,other:5},Mx={select:t=>t===1?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class AP{constructor(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=e,this.options=n,this.logger=Rr.create("pluralResolver"),this.pluralRulesCache={}}addRule(e,n){this.rules[e]=n}clearCache(){this.pluralRulesCache={}}getRule(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=Yd(e==="dev"?"en":e),i=n.ordinal?"ordinal":"cardinal",s=JSON.stringify({cleanedCode:r,type:i});if(s in this.pluralRulesCache)return this.pluralRulesCache[s];let o;try{o=new Intl.PluralRules(r,{type:i})}catch{if(!Intl)return this.logger.error("No Intl support, please use an Intl polyfill!"),Mx;if(!e.match(/-|_/))return Mx;const l=this.languageUtils.getLanguagePartFromCode(e);o=this.getRule(l,n)}return this.pluralRulesCache[s]=o,o}needsPlural(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=this.getRule(e,n);return r||(r=this.getRule("dev",n)),(r==null?void 0:r.resolvedOptions().pluralCategories.length)>1}getPluralFormsOfKey(e,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(e,r).map(i=>`${n}${i}`)}getSuffixes(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=this.getRule(e,n);return r||(r=this.getRule("dev",n)),r?r.resolvedOptions().pluralCategories.sort((i,s)=>Lx[i]-Lx[s]).map(i=>`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:""}${i}`):[]}getSuffix(e,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const i=this.getRule(e,r);return i?`${this.options.prepend}${r.ordinal?`ordinal${this.options.prepend}`:""}${i.select(n)}`:(this.logger.warn(`no plural rule found for: ${e}`),this.getSuffix("dev",n,r))}}const Vx=function(t,e,n){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,s=wP(t,e,n);return!s&&i&&ue(n)&&(s=tg(t,n,r),s===void 0&&(s=tg(e,n,r))),s},pp=t=>t.replace(/\$/g,"$$$$");class RP{constructor(){var n;let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Rr.create("interpolator"),this.options=e,this.format=((n=e==null?void 0:e.interpolation)==null?void 0:n.format)||(r=>r),this.init(e)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});const{escape:n,escapeValue:r,useRawValueToEscape:i,prefix:s,prefixEscaped:o,suffix:a,suffixEscaped:l,formatSeparator:c,unescapeSuffix:h,unescapePrefix:f,nestingPrefix:p,nestingPrefixEscaped:g,nestingSuffix:w,nestingSuffixEscaped:k,nestingOptionsSeparator:C,maxReplaces:x,alwaysFormat:v}=e.interpolation;this.escape=n!==void 0?n:bP,this.escapeValue=r!==void 0?r:!0,this.useRawValueToEscape=i!==void 0?i:!1,this.prefix=s?Io(s):o||"{{",this.suffix=a?Io(a):l||"}}",this.formatSeparator=c||",",this.unescapePrefix=h?"":f||"-",this.unescapeSuffix=this.unescapePrefix?"":h||"",this.nestingPrefix=p?Io(p):g||Io("$t("),this.nestingSuffix=w?Io(w):k||Io(")"),this.nestingOptionsSeparator=C||",",this.maxReplaces=x||1e3,this.alwaysFormat=v!==void 0?v:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(n,r)=>(n==null?void 0:n.source)===r?(n.lastIndex=0,n):new RegExp(r,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(e,n,r,i){var g;let s,o,a;const l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},c=w=>{if(w.indexOf(this.formatSeparator)<0){const v=Vx(n,l,w,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(v,void 0,r,{...i,...n,interpolationkey:w}):v}const k=w.split(this.formatSeparator),C=k.shift().trim(),x=k.join(this.formatSeparator).trim();return this.format(Vx(n,l,C,this.options.keySeparator,this.options.ignoreJSONStructure),x,r,{...i,...n,interpolationkey:C})};this.resetRegExp();const h=(i==null?void 0:i.missingInterpolationHandler)||this.options.missingInterpolationHandler,f=((g=i==null?void 0:i.interpolation)==null?void 0:g.skipOnVariables)!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:w=>pp(w)},{regex:this.regexp,safeValue:w=>this.escapeValue?pp(this.escape(w)):pp(w)}].forEach(w=>{for(a=0;s=w.regex.exec(e);){const k=s[1].trim();if(o=c(k),o===void 0)if(typeof h=="function"){const x=h(e,s,i);o=ue(x)?x:""}else if(i&&Object.prototype.hasOwnProperty.call(i,k))o="";else if(f){o=s[0];continue}else this.logger.warn(`missed to pass in variable ${k} for interpolating ${e}`),o="";else!ue(o)&&!this.useRawValueToEscape&&(o=Cx(o));const C=w.safeValue(o);if(e=e.replace(s[0],C),f?(w.regex.lastIndex+=o.length,w.regex.lastIndex-=s[0].length):w.regex.lastIndex=0,a++,a>=this.maxReplaces)break}}),e}nest(e,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i,s,o;const a=(l,c)=>{const h=this.nestingOptionsSeparator;if(l.indexOf(h)<0)return l;const f=l.split(new RegExp(`${h}[ ]*{`));let p=`{${f[1]}`;l=f[0],p=this.interpolate(p,o);const g=p.match(/'/g),w=p.match(/"/g);(((g==null?void 0:g.length)??0)%2===0&&!w||w.length%2!==0)&&(p=p.replace(/'/g,'"'));try{o=JSON.parse(p),c&&(o={...c,...o})}catch(k){return this.logger.warn(`failed parsing options string in nesting for key ${l}`,k),`${l}${h}${p}`}return o.defaultValue&&o.defaultValue.indexOf(this.prefix)>-1&&delete o.defaultValue,l};for(;i=this.nestingRegexp.exec(e);){let l=[];o={...r},o=o.replace&&!ue(o.replace)?o.replace:o,o.applyPostProcessor=!1,delete o.defaultValue;let c=!1;if(i[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(i[1])){const h=i[1].split(this.formatSeparator).map(f=>f.trim());i[1]=h.shift(),l=h,c=!0}if(s=n(a.call(this,i[1].trim(),o),o),s&&i[0]===e&&!ue(s))return s;ue(s)||(s=Cx(s)),s||(this.logger.warn(`missed to resolve ${i[1]} for nesting ${e}`),s=""),c&&(s=l.reduce((h,f)=>this.format(h,f,r.lng,{...r,interpolationkey:i[1].trim()}),s.trim())),e=e.replace(i[0],s),this.regexp.lastIndex=0}return e}}const PP=t=>{let e=t.toLowerCase().trim();const n={};if(t.indexOf("(")>-1){const r=t.split("(");e=r[0].toLowerCase().trim();const i=r[1].substring(0,r[1].length-1);e==="currency"&&i.indexOf(":")<0?n.currency||(n.currency=i.trim()):e==="relativetime"&&i.indexOf(":")<0?n.range||(n.range=i.trim()):i.split(";").forEach(o=>{if(o){const[a,...l]=o.split(":"),c=l.join(":").trim().replace(/^'+|'+$/g,""),h=a.trim();n[h]||(n[h]=c),c==="false"&&(n[h]=!1),c==="true"&&(n[h]=!0),isNaN(c)||(n[h]=parseInt(c,10))}})}return{formatName:e,formatOptions:n}},ko=t=>{const e={};return(n,r,i)=>{let s=i;i&&i.interpolationkey&&i.formatParams&&i.formatParams[i.interpolationkey]&&i[i.interpolationkey]&&(s={...s,[i.interpolationkey]:void 0});const o=r+JSON.stringify(s);let a=e[o];return a||(a=t(Yd(r),i),e[o]=a),a(n)}};let NP=class{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Rr.create("formatter"),this.options=e,this.formats={number:ko((n,r)=>{const i=new Intl.NumberFormat(n,{...r});return s=>i.format(s)}),currency:ko((n,r)=>{const i=new Intl.NumberFormat(n,{...r,style:"currency"});return s=>i.format(s)}),datetime:ko((n,r)=>{const i=new Intl.DateTimeFormat(n,{...r});return s=>i.format(s)}),relativetime:ko((n,r)=>{const i=new Intl.RelativeTimeFormat(n,{...r});return s=>i.format(s,r.range||"day")}),list:ko((n,r)=>{const i=new Intl.ListFormat(n,{...r});return s=>i.format(s)})},this.init(e)}init(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=n.interpolation.formatSeparator||","}add(e,n){this.formats[e.toLowerCase().trim()]=n}addCached(e,n){this.formats[e.toLowerCase().trim()]=ko(n)}format(e,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const s=n.split(this.formatSeparator);if(s.length>1&&s[0].indexOf("(")>1&&s[0].indexOf(")")<0&&s.find(a=>a.indexOf(")")>-1)){const a=s.findIndex(l=>l.indexOf(")")>-1);s[0]=[s[0],...s.splice(1,a)].join(this.formatSeparator)}return s.reduce((a,l)=>{var f;const{formatName:c,formatOptions:h}=PP(l);if(this.formats[c]){let p=a;try{const g=((f=i==null?void 0:i.formatParams)==null?void 0:f[i.interpolationkey])||{},w=g.locale||g.lng||i.locale||i.lng||r;p=this.formats[c](a,w,{...h,...i,...g})}catch(g){this.logger.warn(g)}return p}else this.logger.warn(`there was no format function for ${c}`);return a},e)}};const DP=(t,e)=>{t.pending[e]!==void 0&&(delete t.pending[e],t.pendingCount--)};class OP extends Hh{constructor(e,n,r){var s,o;let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=e,this.store=n,this.services=r,this.languageUtils=r.languageUtils,this.options=i,this.logger=Rr.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=i.maxParallelReads||10,this.readingCalls=0,this.maxRetries=i.maxRetries>=0?i.maxRetries:5,this.retryTimeout=i.retryTimeout>=1?i.retryTimeout:350,this.state={},this.queue=[],(o=(s=this.backend)==null?void 0:s.init)==null||o.call(s,r,i.backend,i)}queueLoad(e,n,r,i){const s={},o={},a={},l={};return e.forEach(c=>{let h=!0;n.forEach(f=>{const p=`${c}|${f}`;!r.reload&&this.store.hasResourceBundle(c,f)?this.state[p]=2:this.state[p]<0||(this.state[p]===1?o[p]===void 0&&(o[p]=!0):(this.state[p]=1,h=!1,o[p]===void 0&&(o[p]=!0),s[p]===void 0&&(s[p]=!0),l[f]===void 0&&(l[f]=!0)))}),h||(a[c]=!0)}),(Object.keys(s).length||Object.keys(o).length)&&this.queue.push({pending:o,pendingCount:Object.keys(o).length,loaded:{},errors:[],callback:i}),{toLoad:Object.keys(s),pending:Object.keys(o),toLoadLanguages:Object.keys(a),toLoadNamespaces:Object.keys(l)}}loaded(e,n,r){const i=e.split("|"),s=i[0],o=i[1];n&&this.emit("failedLoading",s,o,n),!n&&r&&this.store.addResourceBundle(s,o,r,void 0,void 0,{skipCopy:!0}),this.state[e]=n?-1:2,n&&r&&(this.state[e]=0);const a={};this.queue.forEach(l=>{xP(l.loaded,[s],o),DP(l,e),n&&l.errors.push(n),l.pendingCount===0&&!l.done&&(Object.keys(l.loaded).forEach(c=>{a[c]||(a[c]={});const h=l.loaded[c];h.length&&h.forEach(f=>{a[c][f]===void 0&&(a[c][f]=!0)})}),l.done=!0,l.errors.length?l.callback(l.errors):l.callback())}),this.emit("loaded",a),this.queue=this.queue.filter(l=>!l.done)}read(e,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,o=arguments.length>5?arguments[5]:void 0;if(!e.length)return o(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:n,fcName:r,tried:i,wait:s,callback:o});return}this.readingCalls++;const a=(c,h)=>{if(this.readingCalls--,this.waitingReads.length>0){const f=this.waitingReads.shift();this.read(f.lng,f.ns,f.fcName,f.tried,f.wait,f.callback)}if(c&&h&&i<this.maxRetries){setTimeout(()=>{this.read.call(this,e,n,r,i+1,s*2,o)},s);return}o(c,h)},l=this.backend[r].bind(this.backend);if(l.length===2){try{const c=l(e,n);c&&typeof c.then=="function"?c.then(h=>a(null,h)).catch(a):a(null,c)}catch(c){a(c)}return}return l(e,n,a)}prepareLoading(e,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),i&&i();ue(e)&&(e=this.languageUtils.toResolveHierarchy(e)),ue(n)&&(n=[n]);const s=this.queueLoad(e,n,r,i);if(!s.toLoad.length)return s.pending.length||i(),null;s.toLoad.forEach(o=>{this.loadOne(o)})}load(e,n,r){this.prepareLoading(e,n,{},r)}reload(e,n,r){this.prepareLoading(e,n,{reload:!0},r)}loadOne(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const r=e.split("|"),i=r[0],s=r[1];this.read(i,s,"read",void 0,void 0,(o,a)=>{o&&this.logger.warn(`${n}loading namespace ${s} for language ${i} failed`,o),!o&&a&&this.logger.log(`${n}loaded namespace ${s} for language ${i}`,a),this.loaded(e,o,a)})}saveMissing(e,n,r,i,s){var l,c,h,f,p;let o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},a=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if((c=(l=this.services)==null?void 0:l.utils)!=null&&c.hasLoadedNamespace&&!((f=(h=this.services)==null?void 0:h.utils)!=null&&f.hasLoadedNamespace(n))){this.logger.warn(`did not save key "${r}" as the namespace "${n}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(r==null||r==="")){if((p=this.backend)!=null&&p.create){const g={...o,isUpdate:s},w=this.backend.create.bind(this.backend);if(w.length<6)try{let k;w.length===5?k=w(e,n,r,i,g):k=w(e,n,r,i),k&&typeof k.then=="function"?k.then(C=>a(null,C)).catch(a):a(null,k)}catch(k){a(k)}else w(e,n,r,i,a,g)}!e||!e[0]||this.store.addResource(e[0],n,r,i)}}}const Fx=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:t=>{let e={};if(typeof t[1]=="object"&&(e=t[1]),ue(t[1])&&(e.defaultValue=t[1]),ue(t[2])&&(e.tDescription=t[2]),typeof t[2]=="object"||typeof t[3]=="object"){const n=t[3]||t[2];Object.keys(n).forEach(r=>{e[r]=n[r]})}return e},interpolation:{escapeValue:!0,format:t=>t,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),$x=t=>{var e,n;return ue(t.ns)&&(t.ns=[t.ns]),ue(t.fallbackLng)&&(t.fallbackLng=[t.fallbackLng]),ue(t.fallbackNS)&&(t.fallbackNS=[t.fallbackNS]),((n=(e=t.supportedLngs)==null?void 0:e.indexOf)==null?void 0:n.call(e,"cimode"))<0&&(t.supportedLngs=t.supportedLngs.concat(["cimode"])),typeof t.initImmediate=="boolean"&&(t.initAsync=t.initImmediate),t},Rc=()=>{},jP=t=>{Object.getOwnPropertyNames(Object.getPrototypeOf(t)).forEach(n=>{typeof t[n]=="function"&&(t[n]=t[n].bind(t))})};class xu extends Hh{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;if(super(),this.options=$x(e),this.services={},this.logger=Rr,this.modules={external:[]},jP(this),n&&!this.isInitialized&&!e.isClone){if(!this.options.initAsync)return this.init(e,n),this;setTimeout(()=>{this.init(e,n)},0)}}init(){var e=this;let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof n=="function"&&(r=n,n={}),n.defaultNS==null&&n.ns&&(ue(n.ns)?n.defaultNS=n.ns:n.ns.indexOf("translation")<0&&(n.defaultNS=n.ns[0]));const i=Fx();this.options={...i,...this.options,...$x(n)},this.options.interpolation={...i.interpolation,...this.options.interpolation},n.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=n.keySeparator),n.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=n.nsSeparator);const s=h=>h?typeof h=="function"?new h:h:null;if(!this.options.isClone){this.modules.logger?Rr.init(s(this.modules.logger),this.options):Rr.init(null,this.options);let h;this.modules.formatter?h=this.modules.formatter:h=NP;const f=new jx(this.options);this.store=new Nx(this.options.resources,this.options);const p=this.services;p.logger=Rr,p.resourceStore=this.store,p.languageUtils=f,p.pluralResolver=new AP(f,{prepend:this.options.pluralSeparator,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),h&&(!this.options.interpolation.format||this.options.interpolation.format===i.interpolation.format)&&(p.formatter=s(h),p.formatter.init(p,this.options),this.options.interpolation.format=p.formatter.format.bind(p.formatter)),p.interpolator=new RP(this.options),p.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},p.backendConnector=new OP(s(this.modules.backend),p.resourceStore,p,this.options),p.backendConnector.on("*",function(g){for(var w=arguments.length,k=new Array(w>1?w-1:0),C=1;C<w;C++)k[C-1]=arguments[C];e.emit(g,...k)}),this.modules.languageDetector&&(p.languageDetector=s(this.modules.languageDetector),p.languageDetector.init&&p.languageDetector.init(p,this.options.detection,this.options)),this.modules.i18nFormat&&(p.i18nFormat=s(this.modules.i18nFormat),p.i18nFormat.init&&p.i18nFormat.init(this)),this.translator=new Jd(this.services,this.options),this.translator.on("*",function(g){for(var w=arguments.length,k=new Array(w>1?w-1:0),C=1;C<w;C++)k[C-1]=arguments[C];e.emit(g,...k)}),this.modules.external.forEach(g=>{g.init&&g.init(this)})}if(this.format=this.options.interpolation.format,r||(r=Rc),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const h=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);h.length>0&&h[0]!=="dev"&&(this.options.lng=h[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(h=>{this[h]=function(){return e.store[h](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(h=>{this[h]=function(){return e.store[h](...arguments),e}});const l=yl(),c=()=>{const h=(f,p)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),l.resolve(p),r(f,p)};if(this.languages&&!this.isInitialized)return h(null,this.t.bind(this));this.changeLanguage(this.options.lng,h)};return this.options.resources||!this.options.initAsync?c():setTimeout(c,0),l}loadResources(e){var s,o;let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Rc;const i=ue(e)?e:this.language;if(typeof e=="function"&&(r=e),!this.options.resources||this.options.partialBundledLanguages){if((i==null?void 0:i.toLowerCase())==="cimode"&&(!this.options.preload||this.options.preload.length===0))return r();const a=[],l=c=>{if(!c||c==="cimode")return;this.services.languageUtils.toResolveHierarchy(c).forEach(f=>{f!=="cimode"&&a.indexOf(f)<0&&a.push(f)})};i?l(i):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(h=>l(h)),(o=(s=this.options.preload)==null?void 0:s.forEach)==null||o.call(s,c=>l(c)),this.services.backendConnector.load(a,this.options.ns,c=>{!c&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),r(c)})}else r(null)}reloadResources(e,n,r){const i=yl();return typeof e=="function"&&(r=e,e=void 0),typeof n=="function"&&(r=n,n=void 0),e||(e=this.languages),n||(n=this.options.ns),r||(r=Rc),this.services.backendConnector.reload(e,n,s=>{i.resolve(),r(s)}),i}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return e.type==="backend"&&(this.modules.backend=e),(e.type==="logger"||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type==="languageDetector"&&(this.modules.languageDetector=e),e.type==="i18nFormat"&&(this.modules.i18nFormat=e),e.type==="postProcessor"&&GS.addPostProcessor(e),e.type==="formatter"&&(this.modules.formatter=e),e.type==="3rdParty"&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!(["cimode","dev"].indexOf(e)>-1)){for(let n=0;n<this.languages.length;n++){const r=this.languages[n];if(!(["cimode","dev"].indexOf(r)>-1)&&this.store.hasLanguageSomeTranslations(r)){this.resolvedLanguage=r;break}}!this.resolvedLanguage&&this.languages.indexOf(e)<0&&this.store.hasLanguageSomeTranslations(e)&&(this.resolvedLanguage=e,this.languages.indexOf(e)<0&&this.languages.unshift(e))}}changeLanguage(e,n){var r=this;this.isLanguageChangingTo=e;const i=yl();this.emit("languageChanging",e);const s=l=>{this.language=l,this.languages=this.services.languageUtils.toResolveHierarchy(l),this.resolvedLanguage=void 0,this.setResolvedLanguage(l)},o=(l,c)=>{c?this.isLanguageChangingTo===e&&(s(c),this.translator.changeLanguage(c),this.isLanguageChangingTo=void 0,this.emit("languageChanged",c),this.logger.log("languageChanged",c)):this.isLanguageChangingTo=void 0,i.resolve(function(){return r.t(...arguments)}),n&&n(l,function(){return r.t(...arguments)})},a=l=>{var f,p;!e&&!l&&this.services.languageDetector&&(l=[]);const c=ue(l)?l:l&&l[0],h=this.store.hasLanguageSomeTranslations(c)?c:this.services.languageUtils.getBestMatchFromCodes(ue(l)?[l]:l);h&&(this.language||s(h),this.translator.language||this.translator.changeLanguage(h),(p=(f=this.services.languageDetector)==null?void 0:f.cacheUserLanguage)==null||p.call(f,h)),this.loadResources(h,g=>{o(g,h)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?a(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(a):this.services.languageDetector.detect(a):a(e),i}getFixedT(e,n,r){var i=this;const s=function(o,a){let l;if(typeof a!="object"){for(var c=arguments.length,h=new Array(c>2?c-2:0),f=2;f<c;f++)h[f-2]=arguments[f];l=i.options.overloadTranslationOptionHandler([o,a].concat(h))}else l={...a};l.lng=l.lng||s.lng,l.lngs=l.lngs||s.lngs,l.ns=l.ns||s.ns,l.keyPrefix!==""&&(l.keyPrefix=l.keyPrefix||r||s.keyPrefix);const p=i.options.keySeparator||".";let g;return l.keyPrefix&&Array.isArray(o)?g=o.map(w=>`${l.keyPrefix}${p}${w}`):g=l.keyPrefix?`${l.keyPrefix}${p}${o}`:o,i.t(g,l)};return ue(e)?s.lng=e:s.lngs=e,s.ns=n,s.keyPrefix=r,s}t(){var i;for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return(i=this.translator)==null?void 0:i.translate(...n)}exists(){var i;for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return(i=this.translator)==null?void 0:i.exists(...n)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const r=n.lng||this.resolvedLanguage||this.languages[0],i=this.options?this.options.fallbackLng:!1,s=this.languages[this.languages.length-1];if(r.toLowerCase()==="cimode")return!0;const o=(a,l)=>{const c=this.services.backendConnector.state[`${a}|${l}`];return c===-1||c===0||c===2};if(n.precheck){const a=n.precheck(this,o);if(a!==void 0)return a}return!!(this.hasResourceBundle(r,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||o(r,e)&&(!i||o(s,e)))}loadNamespaces(e,n){const r=yl();return this.options.ns?(ue(e)&&(e=[e]),e.forEach(i=>{this.options.ns.indexOf(i)<0&&this.options.ns.push(i)}),this.loadResources(i=>{r.resolve(),n&&n(i)}),r):(n&&n(),Promise.resolve())}loadLanguages(e,n){const r=yl();ue(e)&&(e=[e]);const i=this.options.preload||[],s=e.filter(o=>i.indexOf(o)<0&&this.services.languageUtils.isSupportedCode(o));return s.length?(this.options.preload=i.concat(s),this.loadResources(o=>{r.resolve(),n&&n(o)}),r):(n&&n(),Promise.resolve())}dir(e){var i,s;if(e||(e=this.resolvedLanguage||(((i=this.languages)==null?void 0:i.length)>0?this.languages[0]:this.language)),!e)return"rtl";const n=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],r=((s=this.services)==null?void 0:s.languageUtils)||new jx(Fx());return n.indexOf(r.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return new xu(e,n)}cloneInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Rc;const r=e.forkResourceStore;r&&delete e.forkResourceStore;const i={...this.options,...e,isClone:!0},s=new xu(i);if((e.debug!==void 0||e.prefix!==void 0)&&(s.logger=s.logger.clone(e)),["store","services","language"].forEach(a=>{s[a]=this[a]}),s.services={...this.services},s.services.utils={hasLoadedNamespace:s.hasLoadedNamespace.bind(s)},r){const a=Object.keys(this.store.data).reduce((l,c)=>(l[c]={...this.store.data[c]},Object.keys(l[c]).reduce((h,f)=>(h[f]={...l[c][f]},h),{})),{});s.store=new Nx(a,i),s.services.resourceStore=s.store}return s.translator=new Jd(s.services,i),s.translator.on("*",function(a){for(var l=arguments.length,c=new Array(l>1?l-1:0),h=1;h<l;h++)c[h-1]=arguments[h];s.emit(a,...c)}),s.init(i,n),s.translator.options=i,s.translator.backendConnector.services.utils={hasLoadedNamespace:s.hasLoadedNamespace.bind(s)},s}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const At=xu.createInstance();At.createInstance=xu.createInstance;At.createInstance;At.dir;At.init;At.loadResources;At.reloadResources;At.use;At.changeLanguage;At.getFixedT;At.t;At.exists;At.setDefaultNamespace;At.hasLoadedNamespace;At.loadNamespaces;At.loadLanguages;const LP=(t,e)=>{const n=[];if(!t||typeof t!="object")return console.error("[getFirstNEducators] educatorsData no es un objeto válido:",t),[];for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(Array.isArray(t[r])?n.push(...t[r]):console.warn(`[getFirstNEducators] La categoría "${r}" no es un array.`));return Array.isArray(n)?n.slice(0,e):(console.error("[getFirstNEducators] Error interno, allEducators no es un array.",n),[])},MP=(t,e,n)=>{const r=[];for(const i in t)Array.isArray(t[i])&&r.push(...t[i].filter(s=>s.language&&s.language.startsWith(n)));return r.slice(0,e)},VP=_.div`
  padding: 15px 24px 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  background-color: rgb(0,0,0);
  @media (max-width: 768px) {
    padding: 15px 16px 16px 16px;
    gap: 20px;
  }
`,FP=_.div`
  display: flex;
  gap: 24px;
  align-items: stretch;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`,K0=_.div`
  background: ${t=>t.bgColor||"rgb(0,0,0)"};
  color: rgb(255,255,255);
  border-radius: 24px;
  text-align: center;
  background-size: cover;
  background-position: left center;
  background-image: url('${t=>t.imageUrl}');
  width: 0;
  flex: 2 1 0%;
  max-width: 1000px;
  aspect-ratio: 2146 / 700;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-left: 0;
  margin-right: 0;
  
  @media (max-width: 768px) {
    border-radius: 16px;
    aspect-ratio: 2146 / 966;
    width: 100%;
    flex: unset;
  }
  h1 {
    margin: 0;
    font-size: 4rem;
    text-shadow: 1px 1px 3px rgba(0,0,0,0.3);
    color: rgb(0,150,136);
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }
  }
`;_(K0)`
  aspect-ratio: 2146 / 338;
  @media (max-width: 768px) {
    aspect-ratio: 2146 / 966;
  }
`;const $P=_.div`
  flex: 1 1 0%;
  min-width: 100px;
  max-width: 200px;
  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    flex: unset;
  }
`,zx=_.section`
  background: rgb(24,24,24);
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);
  min-width: 0;
  overflow: hidden;
  width: 100%;
  margin-left: 0;
  margin-right: 0;
  @media (max-width: 768px) {
    padding: 16px;
  }
`,Ux=_.h2`
  font-size: 20px;
  margin-bottom: 16px;
  color: rgb(255,255,255); /* Texto blanco */
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    font-size: 14px;
    color: rgb(0,150,136);
    text-decoration: none;
    &:hover { text-decoration: underline; color: rgb(0,200,180); }
  }
  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 12px;
    a { font-size: 13px; }
  }
`;_.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
  width: 100%;
  margin-left: 0;
  margin-right: 0;

  @media (max-width: 768px) { // Solo un breakpoint principal
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 16px;
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr; // Mantener este para muy pequeños
  }
`;const zP=_.div`
  display: flex;
  gap: 20px;
  overflow-x: auto;
  flex-wrap: nowrap;
  padding-bottom: 15px;
  width: 100%;
  margin-left: 0;
  margin-right: 0;

  /* Estilos de scrollbar opcionales */
  &::-webkit-scrollbar {
    height: 8px; 
  }
  &::-webkit-scrollbar-thumb {
    background: #ccc; 
    border-radius: 4px;
  }

  @media (min-width: 992px) {
    overflow-x: hidden;
    justify-content: space-around;
    /* flex-wrap: wrap; // Consider if needed if space-around isn't enough */
  }
`,UP=_.div` 
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex-shrink: 0;
  min-width: 80px;

  img {
    width: 65px;
    height: 65px;
    border-radius: 50%;
    margin-bottom: 6px;
    object-fit: cover;
    border: 2px solid #eee;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  }
  span {
    font-size: 12px;
    color: rgb(200,200,200);
    font-weight: 500;
    white-space: nowrap;
  }

  @media (min-width: 992px) {
    min-width: 120px; /* Adjusted min-width for larger content */
    img {
      width: 90px;
      height: 90px;
      margin-bottom: 8px; /* Slightly more margin */
    }
    span {
      font-size: 14px;
      white-space: normal; /* Allow text to wrap if names are long */
    }
  }
`;_.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px; // Menos gap
  margin-bottom: 16px;
`;_.button`
  padding: 7px 14px;
  border-radius: 20px;
  border: 1px solid ${t=>t.active?"transparent":"#ddd"};
  background-color: ${t=>t.active?"#333":"white"};
  color: ${t=>t.active?"white":"#333"};
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    background-color: ${t=>t.active?"#555":"#f0f0f0"};
  }
`;const BP=_(cr)` 
  text-decoration: none;
  color: inherit;
  background-color: rgb(24,24,24);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.18);
  position: relative; 
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 10px rgba(0, 150, 136, 0.18);
  }
`,HP=_.img`
  width: 100%;
  height: 190px;
  object-fit: cover;
  object-position: top center;
  display: block;
`,WP=_.div`
  padding: 12px;
  flex-grow: 1;
`,qP=_.h3`
  font-size: 15px;
  font-weight: 600;
  margin: 0 0 4px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,GP=_.p`
  font-size: 12px;
  color: rgb(158,158,158);
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;_.div`
  position: absolute;
  top: 8px;
  right: 8px;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 3px 7px;
  border-radius: 12px;
  font-size: 10px;
  font-weight: 500;
  color: white;
  background-color: ${t=>t.live?"rgb(0,150,136)":"rgb(158,158,158)"}; 
  z-index: 1;
  
  svg {
      font-size: 11px;
  }
`;const KP=_(cr)`
  display: block;
  width: max-content;
  margin: 0 auto; 
  padding: 10px 25px;
  background-color: rgb(0,150,136); 
  color: white;
  border: none;
  border-radius: 20px;
  font-weight: 500;
  text-decoration: none;
  text-align: center;
  transition: background-color 0.2s ease;

  &:hover {
      background-color: rgb(0,180,160);
  }
`,QP=_.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr); 
  gap: 20px;
  margin-bottom: 24px; 
  width: 100%;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,YP=_.div`
  width: 100%;
  max-width: 100%;
  margin: 0 auto 24px auto;
  border-radius: 24px;
  background: url('/images/beyondnewlogo.jpg') center/cover no-repeat;
  aspect-ratio: 4455 / 846;
  min-height: 120px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @media (max-width: 768px) {
    border-radius: 16px;
    aspect-ratio: 4455 / 1200;
    min-height: 30px;
  }
`,JP=_(K0)`
  @media (max-width: 768px) {
    display: none;
  }
`,ZP=()=>{const{t,i18n:e}=ft(),n=e.language.split("-")[0],r=Br();console.log("Home Component Rendered"),console.log("Datos Educadores Importados:",Dr);const i=MP(Dr,5,n),s=LP(Dr,5);console.log("Top Educators Derivados:",i),console.log("Preview Educators Derivados:",s);const o=n==="es"?"/images/Bienvenido.jpg":"/images/Welcome (2).jpg",a=n==="es"?"/images/Únete a Telegram.jpg":"/images/Join Our Telegram.jpg";return d.jsxs(VP,{children:[d.jsxs(FP,{children:[d.jsx(K0,{imageUrl:o}),d.jsx($P,{children:d.jsx(gP,{})})]}),d.jsxs(zx,{children:[d.jsxs(Ux,{children:[t("home.topEducators"),d.jsxs(cr,{to:"/educadores",children:[t("home.viewAll")," ",">"]})]}),d.jsx(zP,{children:Array.isArray(i)&&i.length>0?i.map((l,c)=>!l||typeof l!="object"?(console.warn(`Elemento inválido en topEducators en índice ${c}:`,l),null):d.jsx(cr,{to:`/educadores/${l.id}`,style:{textDecoration:"none",color:"inherit"},children:d.jsxs(UP,{children:[d.jsx("img",{src:l.profileImageFilename?`/images/perfil/${l.profileImageFilename}`:"/images/placeholder.jpg",alt:l.name||t("common.nameNotAvailable"),onError:h=>{h.target.onerror=null,h.target.src="/images/placeholder.jpg"}}),d.jsx("span",{children:l.name||t("common.nameNotAvailable")})]})},l.id||`top-edu-${c}`)):d.jsx("p",{children:t("home.noTopEducators")})})]}),d.jsx(YP,{onClick:()=>r("/beyond-charts"),title:"Go to Beyond the Charts"}),d.jsxs(zx,{children:[d.jsxs(Ux,{children:[t("home.ourEducators"),d.jsxs(cr,{to:"/educadores",children:[t("home.viewAll")," ",">"]})]}),d.jsx(QP,{children:Array.isArray(s)&&s.length>0?s.map((l,c)=>!l||typeof l!="object"?(console.warn(`Elemento inválido en previewEducators en índice ${c}:`,l),null):d.jsxs(BP,{to:`/educadores/${l.id}`,children:[d.jsx(HP,{src:l.profileImageFilename?`/images/perfil/${l.profileImageFilename}`:"/images/placeholder.jpg",alt:l.name||t("common.nameNotAvailable"),onError:h=>{h.target.onerror=null,h.target.src="/images/placeholder.jpg"}}),d.jsxs(WP,{children:[d.jsx(qP,{children:l.name||t("common.nameNotAvailable")}),d.jsx(GP,{children:l.title||t("common.specialist")})]})]},l.id||`prev-edu-${c}`)):d.jsx("p",{children:t("home.noEducatorsPreview")})}),d.jsx(KP,{to:"/educadores",children:"Ver más"})]}),d.jsx(JP,{imageUrl:a})]})};class po extends Error{}class XP extends po{constructor(e){super(`Invalid DateTime: ${e.toMessage()}`)}}class eN extends po{constructor(e){super(`Invalid Interval: ${e.toMessage()}`)}}class tN extends po{constructor(e){super(`Invalid Duration: ${e.toMessage()}`)}}class ea extends po{}class KS extends po{constructor(e){super(`Invalid unit ${e}`)}}class Kt extends po{}class ji extends po{constructor(){super("Zone is an abstract class")}}const q="numeric",mr="short",Cn="long",Zd={year:q,month:q,day:q},QS={year:q,month:mr,day:q},nN={year:q,month:mr,day:q,weekday:mr},YS={year:q,month:Cn,day:q},JS={year:q,month:Cn,day:q,weekday:Cn},ZS={hour:q,minute:q},XS={hour:q,minute:q,second:q},eT={hour:q,minute:q,second:q,timeZoneName:mr},tT={hour:q,minute:q,second:q,timeZoneName:Cn},nT={hour:q,minute:q,hourCycle:"h23"},rT={hour:q,minute:q,second:q,hourCycle:"h23"},iT={hour:q,minute:q,second:q,hourCycle:"h23",timeZoneName:mr},sT={hour:q,minute:q,second:q,hourCycle:"h23",timeZoneName:Cn},oT={year:q,month:q,day:q,hour:q,minute:q},aT={year:q,month:q,day:q,hour:q,minute:q,second:q},lT={year:q,month:mr,day:q,hour:q,minute:q},uT={year:q,month:mr,day:q,hour:q,minute:q,second:q},rN={year:q,month:mr,day:q,weekday:mr,hour:q,minute:q},cT={year:q,month:Cn,day:q,hour:q,minute:q,timeZoneName:mr},dT={year:q,month:Cn,day:q,hour:q,minute:q,second:q,timeZoneName:mr},hT={year:q,month:Cn,day:q,weekday:Cn,hour:q,minute:q,timeZoneName:Cn},fT={year:q,month:Cn,day:q,weekday:Cn,hour:q,minute:q,second:q,timeZoneName:Cn};class $u{get type(){throw new ji}get name(){throw new ji}get ianaName(){return this.name}get isUniversal(){throw new ji}offsetName(e,n){throw new ji}formatOffset(e,n){throw new ji}offset(e){throw new ji}equals(e){throw new ji}get isValid(){throw new ji}}let mp=null;class Wh extends $u{static get instance(){return mp===null&&(mp=new Wh),mp}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(e,{format:n,locale:r}){return ST(e,n,r)}formatOffset(e,n){return Bl(this.offset(e),n)}offset(e){return-new Date(e).getTimezoneOffset()}equals(e){return e.type==="system"}get isValid(){return!0}}const rg=new Map;function iN(t){let e=rg.get(t);return e===void 0&&(e=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:t,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"}),rg.set(t,e)),e}const sN={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function oN(t,e){const n=t.format(e).replace(/\u200E/g,""),r=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(n),[,i,s,o,a,l,c,h]=r;return[o,i,s,a,l,c,h]}function aN(t,e){const n=t.formatToParts(e),r=[];for(let i=0;i<n.length;i++){const{type:s,value:o}=n[i],a=sN[s];s==="era"?r[a]=o:le(a)||(r[a]=parseInt(o,10))}return r}const gp=new Map;class vi extends $u{static create(e){let n=gp.get(e);return n===void 0&&gp.set(e,n=new vi(e)),n}static resetCache(){gp.clear(),rg.clear()}static isValidSpecifier(e){return this.isValidZone(e)}static isValidZone(e){if(!e)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:e}).format(),!0}catch{return!1}}constructor(e){super(),this.zoneName=e,this.valid=vi.isValidZone(e)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(e,{format:n,locale:r}){return ST(e,n,r,this.name)}formatOffset(e,n){return Bl(this.offset(e),n)}offset(e){if(!this.valid)return NaN;const n=new Date(e);if(isNaN(n))return NaN;const r=iN(this.name);let[i,s,o,a,l,c,h]=r.formatToParts?aN(r,n):oN(r,n);a==="BC"&&(i=-Math.abs(i)+1);const p=Gh({year:i,month:s,day:o,hour:l===24?0:l,minute:c,second:h,millisecond:0});let g=+n;const w=g%1e3;return g-=w>=0?w:1e3+w,(p-g)/(60*1e3)}equals(e){return e.type==="iana"&&e.name===this.name}get isValid(){return this.valid}}let Bx={};function lN(t,e={}){const n=JSON.stringify([t,e]);let r=Bx[n];return r||(r=new Intl.ListFormat(t,e),Bx[n]=r),r}const ig=new Map;function sg(t,e={}){const n=JSON.stringify([t,e]);let r=ig.get(n);return r===void 0&&(r=new Intl.DateTimeFormat(t,e),ig.set(n,r)),r}const og=new Map;function uN(t,e={}){const n=JSON.stringify([t,e]);let r=og.get(n);return r===void 0&&(r=new Intl.NumberFormat(t,e),og.set(n,r)),r}const ag=new Map;function cN(t,e={}){const{base:n,...r}=e,i=JSON.stringify([t,r]);let s=ag.get(i);return s===void 0&&(s=new Intl.RelativeTimeFormat(t,e),ag.set(i,s)),s}let Tl=null;function dN(){return Tl||(Tl=new Intl.DateTimeFormat().resolvedOptions().locale,Tl)}const lg=new Map;function pT(t){let e=lg.get(t);return e===void 0&&(e=new Intl.DateTimeFormat(t).resolvedOptions(),lg.set(t,e)),e}const ug=new Map;function hN(t){let e=ug.get(t);if(!e){const n=new Intl.Locale(t);e="getWeekInfo"in n?n.getWeekInfo():n.weekInfo,"minimalDays"in e||(e={...mT,...e}),ug.set(t,e)}return e}function fN(t){const e=t.indexOf("-x-");e!==-1&&(t=t.substring(0,e));const n=t.indexOf("-u-");if(n===-1)return[t];{let r,i;try{r=sg(t).resolvedOptions(),i=t}catch{const l=t.substring(0,n);r=sg(l).resolvedOptions(),i=l}const{numberingSystem:s,calendar:o}=r;return[i,s,o]}}function pN(t,e,n){return(n||e)&&(t.includes("-u-")||(t+="-u"),n&&(t+=`-ca-${n}`),e&&(t+=`-nu-${e}`)),t}function mN(t){const e=[];for(let n=1;n<=12;n++){const r=ae.utc(2009,n,1);e.push(t(r))}return e}function gN(t){const e=[];for(let n=1;n<=7;n++){const r=ae.utc(2016,11,13+n);e.push(t(r))}return e}function Pc(t,e,n,r){const i=t.listingMode();return i==="error"?null:i==="en"?n(e):r(e)}function yN(t){return t.numberingSystem&&t.numberingSystem!=="latn"?!1:t.numberingSystem==="latn"||!t.locale||t.locale.startsWith("en")||pT(t.locale).numberingSystem==="latn"}class vN{constructor(e,n,r){this.padTo=r.padTo||0,this.floor=r.floor||!1;const{padTo:i,floor:s,...o}=r;if(!n||Object.keys(o).length>0){const a={useGrouping:!1,...r};r.padTo>0&&(a.minimumIntegerDigits=r.padTo),this.inf=uN(e,a)}}format(e){if(this.inf){const n=this.floor?Math.floor(e):e;return this.inf.format(n)}else{const n=this.floor?Math.floor(e):X0(e,3);return ut(n,this.padTo)}}}class xN{constructor(e,n,r){this.opts=r,this.originalZone=void 0;let i;if(this.opts.timeZone)this.dt=e;else if(e.zone.type==="fixed"){const o=-1*(e.offset/60),a=o>=0?`Etc/GMT+${o}`:`Etc/GMT${o}`;e.offset!==0&&vi.create(a).valid?(i=a,this.dt=e):(i="UTC",this.dt=e.offset===0?e:e.setZone("UTC").plus({minutes:e.offset}),this.originalZone=e.zone)}else e.zone.type==="system"?this.dt=e:e.zone.type==="iana"?(this.dt=e,i=e.zone.name):(i="UTC",this.dt=e.setZone("UTC").plus({minutes:e.offset}),this.originalZone=e.zone);const s={...this.opts};s.timeZone=s.timeZone||i,this.dtf=sg(n,s)}format(){return this.originalZone?this.formatToParts().map(({value:e})=>e).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){const e=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?e.map(n=>{if(n.type==="timeZoneName"){const r=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return{...n,value:r}}else return n}):e}resolvedOptions(){return this.dtf.resolvedOptions()}}class wN{constructor(e,n,r){this.opts={style:"long",...r},!n&&bT()&&(this.rtf=cN(e,r))}format(e,n){return this.rtf?this.rtf.format(e,n):UN(n,e,this.opts.numeric,this.opts.style!=="long")}formatToParts(e,n){return this.rtf?this.rtf.formatToParts(e,n):[]}}const mT={firstDay:1,minimalDays:4,weekend:[6,7]};class Re{static fromOpts(e){return Re.create(e.locale,e.numberingSystem,e.outputCalendar,e.weekSettings,e.defaultToEN)}static create(e,n,r,i,s=!1){const o=e||Xe.defaultLocale,a=o||(s?"en-US":dN()),l=n||Xe.defaultNumberingSystem,c=r||Xe.defaultOutputCalendar,h=dg(i)||Xe.defaultWeekSettings;return new Re(a,l,c,h,o)}static resetCache(){Tl=null,ig.clear(),og.clear(),ag.clear(),lg.clear(),ug.clear()}static fromObject({locale:e,numberingSystem:n,outputCalendar:r,weekSettings:i}={}){return Re.create(e,n,r,i)}constructor(e,n,r,i,s){const[o,a,l]=fN(e);this.locale=o,this.numberingSystem=n||a||null,this.outputCalendar=r||l||null,this.weekSettings=i,this.intl=pN(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=s,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached==null&&(this.fastNumbersCached=yN(this)),this.fastNumbersCached}listingMode(){const e=this.isEnglish(),n=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return e&&n?"en":"intl"}clone(e){return!e||Object.getOwnPropertyNames(e).length===0?this:Re.create(e.locale||this.specifiedLocale,e.numberingSystem||this.numberingSystem,e.outputCalendar||this.outputCalendar,dg(e.weekSettings)||this.weekSettings,e.defaultToEN||!1)}redefaultToEN(e={}){return this.clone({...e,defaultToEN:!0})}redefaultToSystem(e={}){return this.clone({...e,defaultToEN:!1})}months(e,n=!1){return Pc(this,e,kT,()=>{const r=n?{month:e,day:"numeric"}:{month:e},i=n?"format":"standalone";return this.monthsCache[i][e]||(this.monthsCache[i][e]=mN(s=>this.extract(s,r,"month"))),this.monthsCache[i][e]})}weekdays(e,n=!1){return Pc(this,e,RT,()=>{const r=n?{weekday:e,year:"numeric",month:"long",day:"numeric"}:{weekday:e},i=n?"format":"standalone";return this.weekdaysCache[i][e]||(this.weekdaysCache[i][e]=gN(s=>this.extract(s,r,"weekday"))),this.weekdaysCache[i][e]})}meridiems(){return Pc(this,void 0,()=>PT,()=>{if(!this.meridiemCache){const e={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[ae.utc(2016,11,13,9),ae.utc(2016,11,13,19)].map(n=>this.extract(n,e,"dayperiod"))}return this.meridiemCache})}eras(e){return Pc(this,e,NT,()=>{const n={era:e};return this.eraCache[e]||(this.eraCache[e]=[ae.utc(-40,1,1),ae.utc(2017,1,1)].map(r=>this.extract(r,n,"era"))),this.eraCache[e]})}extract(e,n,r){const i=this.dtFormatter(e,n),s=i.formatToParts(),o=s.find(a=>a.type.toLowerCase()===r);return o?o.value:null}numberFormatter(e={}){return new vN(this.intl,e.forceSimple||this.fastNumbers,e)}dtFormatter(e,n={}){return new xN(e,this.intl,n)}relFormatter(e={}){return new wN(this.intl,this.isEnglish(),e)}listFormatter(e={}){return lN(this.intl,e)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||pT(this.intl).locale.startsWith("en-us")}getWeekSettings(){return this.weekSettings?this.weekSettings:ET()?hN(this.locale):mT}getStartOfWeek(){return this.getWeekSettings().firstDay}getMinDaysInFirstWeek(){return this.getWeekSettings().minimalDays}getWeekendDays(){return this.getWeekSettings().weekend}equals(e){return this.locale===e.locale&&this.numberingSystem===e.numberingSystem&&this.outputCalendar===e.outputCalendar}toString(){return`Locale(${this.locale}, ${this.numberingSystem}, ${this.outputCalendar})`}}let yp=null;class nn extends $u{static get utcInstance(){return yp===null&&(yp=new nn(0)),yp}static instance(e){return e===0?nn.utcInstance:new nn(e)}static parseSpecifier(e){if(e){const n=e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(n)return new nn(Kh(n[1],n[2]))}return null}constructor(e){super(),this.fixed=e}get type(){return"fixed"}get name(){return this.fixed===0?"UTC":`UTC${Bl(this.fixed,"narrow")}`}get ianaName(){return this.fixed===0?"Etc/UTC":`Etc/GMT${Bl(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(e,n){return Bl(this.fixed,n)}get isUniversal(){return!0}offset(){return this.fixed}equals(e){return e.type==="fixed"&&e.fixed===this.fixed}get isValid(){return!0}}class _N extends $u{constructor(e){super(),this.zoneName=e}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}}function Bi(t,e){if(le(t)||t===null)return e;if(t instanceof $u)return t;if(kN(t)){const n=t.toLowerCase();return n==="default"?e:n==="local"||n==="system"?Wh.instance:n==="utc"||n==="gmt"?nn.utcInstance:nn.parseSpecifier(n)||vi.create(t)}else return is(t)?nn.instance(t):typeof t=="object"&&"offset"in t&&typeof t.offset=="function"?t:new _N(t)}const Q0={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},Hx={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},bN=Q0.hanidec.replace(/[\[|\]]/g,"").split("");function EN(t){let e=parseInt(t,10);if(isNaN(e)){e="";for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);if(t[n].search(Q0.hanidec)!==-1)e+=bN.indexOf(t[n]);else for(const i in Hx){const[s,o]=Hx[i];r>=s&&r<=o&&(e+=r-s)}}return parseInt(e,10)}else return e}const cg=new Map;function SN(){cg.clear()}function tr({numberingSystem:t},e=""){const n=t||"latn";let r=cg.get(n);r===void 0&&(r=new Map,cg.set(n,r));let i=r.get(e);return i===void 0&&(i=new RegExp(`${Q0[n]}${e}`),r.set(e,i)),i}let Wx=()=>Date.now(),qx="system",Gx=null,Kx=null,Qx=null,Yx=60,Jx,Zx=null;class Xe{static get now(){return Wx}static set now(e){Wx=e}static set defaultZone(e){qx=e}static get defaultZone(){return Bi(qx,Wh.instance)}static get defaultLocale(){return Gx}static set defaultLocale(e){Gx=e}static get defaultNumberingSystem(){return Kx}static set defaultNumberingSystem(e){Kx=e}static get defaultOutputCalendar(){return Qx}static set defaultOutputCalendar(e){Qx=e}static get defaultWeekSettings(){return Zx}static set defaultWeekSettings(e){Zx=dg(e)}static get twoDigitCutoffYear(){return Yx}static set twoDigitCutoffYear(e){Yx=e%100}static get throwOnInvalid(){return Jx}static set throwOnInvalid(e){Jx=e}static resetCaches(){Re.resetCache(),vi.resetCache(),ae.resetCache(),SN()}}class or{constructor(e,n){this.reason=e,this.explanation=n}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}}const gT=[0,31,59,90,120,151,181,212,243,273,304,334],yT=[0,31,60,91,121,152,182,213,244,274,305,335];function Wn(t,e){return new or("unit out of range",`you specified ${e} (of type ${typeof e}) as a ${t}, which is invalid`)}function Y0(t,e,n){const r=new Date(Date.UTC(t,e-1,n));t<100&&t>=0&&r.setUTCFullYear(r.getUTCFullYear()-1900);const i=r.getUTCDay();return i===0?7:i}function vT(t,e,n){return n+(zu(t)?yT:gT)[e-1]}function xT(t,e){const n=zu(t)?yT:gT,r=n.findIndex(s=>s<e),i=e-n[r];return{month:r+1,day:i}}function J0(t,e){return(t-e+7)%7+1}function Xd(t,e=4,n=1){const{year:r,month:i,day:s}=t,o=vT(r,i,s),a=J0(Y0(r,i,s),n);let l=Math.floor((o-a+14-e)/7),c;return l<1?(c=r-1,l=wu(c,e,n)):l>wu(r,e,n)?(c=r+1,l=1):c=r,{weekYear:c,weekNumber:l,weekday:a,...Qh(t)}}function Xx(t,e=4,n=1){const{weekYear:r,weekNumber:i,weekday:s}=t,o=J0(Y0(r,1,e),n),a=aa(r);let l=i*7+s-o-7+e,c;l<1?(c=r-1,l+=aa(c)):l>a?(c=r+1,l-=aa(r)):c=r;const{month:h,day:f}=xT(c,l);return{year:c,month:h,day:f,...Qh(t)}}function vp(t){const{year:e,month:n,day:r}=t,i=vT(e,n,r);return{year:e,ordinal:i,...Qh(t)}}function ew(t){const{year:e,ordinal:n}=t,{month:r,day:i}=xT(e,n);return{year:e,month:r,day:i,...Qh(t)}}function tw(t,e){if(!le(t.localWeekday)||!le(t.localWeekNumber)||!le(t.localWeekYear)){if(!le(t.weekday)||!le(t.weekNumber)||!le(t.weekYear))throw new ea("Cannot mix locale-based week fields with ISO-based week fields");return le(t.localWeekday)||(t.weekday=t.localWeekday),le(t.localWeekNumber)||(t.weekNumber=t.localWeekNumber),le(t.localWeekYear)||(t.weekYear=t.localWeekYear),delete t.localWeekday,delete t.localWeekNumber,delete t.localWeekYear,{minDaysInFirstWeek:e.getMinDaysInFirstWeek(),startOfWeek:e.getStartOfWeek()}}else return{minDaysInFirstWeek:4,startOfWeek:1}}function TN(t,e=4,n=1){const r=qh(t.weekYear),i=qn(t.weekNumber,1,wu(t.weekYear,e,n)),s=qn(t.weekday,1,7);return r?i?s?!1:Wn("weekday",t.weekday):Wn("week",t.weekNumber):Wn("weekYear",t.weekYear)}function IN(t){const e=qh(t.year),n=qn(t.ordinal,1,aa(t.year));return e?n?!1:Wn("ordinal",t.ordinal):Wn("year",t.year)}function wT(t){const e=qh(t.year),n=qn(t.month,1,12),r=qn(t.day,1,eh(t.year,t.month));return e?n?r?!1:Wn("day",t.day):Wn("month",t.month):Wn("year",t.year)}function _T(t){const{hour:e,minute:n,second:r,millisecond:i}=t,s=qn(e,0,23)||e===24&&n===0&&r===0&&i===0,o=qn(n,0,59),a=qn(r,0,59),l=qn(i,0,999);return s?o?a?l?!1:Wn("millisecond",i):Wn("second",r):Wn("minute",n):Wn("hour",e)}function le(t){return typeof t>"u"}function is(t){return typeof t=="number"}function qh(t){return typeof t=="number"&&t%1===0}function kN(t){return typeof t=="string"}function CN(t){return Object.prototype.toString.call(t)==="[object Date]"}function bT(){try{return typeof Intl<"u"&&!!Intl.RelativeTimeFormat}catch{return!1}}function ET(){try{return typeof Intl<"u"&&!!Intl.Locale&&("weekInfo"in Intl.Locale.prototype||"getWeekInfo"in Intl.Locale.prototype)}catch{return!1}}function AN(t){return Array.isArray(t)?t:[t]}function nw(t,e,n){if(t.length!==0)return t.reduce((r,i)=>{const s=[e(i),i];return r&&n(r[0],s[0])===r[0]?r:s},null)[1]}function RN(t,e){return e.reduce((n,r)=>(n[r]=t[r],n),{})}function Ea(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function dg(t){if(t==null)return null;if(typeof t!="object")throw new Kt("Week settings must be an object");if(!qn(t.firstDay,1,7)||!qn(t.minimalDays,1,7)||!Array.isArray(t.weekend)||t.weekend.some(e=>!qn(e,1,7)))throw new Kt("Invalid week settings");return{firstDay:t.firstDay,minimalDays:t.minimalDays,weekend:Array.from(t.weekend)}}function qn(t,e,n){return qh(t)&&t>=e&&t<=n}function PN(t,e){return t-e*Math.floor(t/e)}function ut(t,e=2){const n=t<0;let r;return n?r="-"+(""+-t).padStart(e,"0"):r=(""+t).padStart(e,"0"),r}function $i(t){if(!(le(t)||t===null||t===""))return parseInt(t,10)}function Os(t){if(!(le(t)||t===null||t===""))return parseFloat(t)}function Z0(t){if(!(le(t)||t===null||t==="")){const e=parseFloat("0."+t)*1e3;return Math.floor(e)}}function X0(t,e,n=!1){const r=10**e;return(n?Math.trunc:Math.round)(t*r)/r}function zu(t){return t%4===0&&(t%100!==0||t%400===0)}function aa(t){return zu(t)?366:365}function eh(t,e){const n=PN(e-1,12)+1,r=t+(e-n)/12;return n===2?zu(r)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][n-1]}function Gh(t){let e=Date.UTC(t.year,t.month-1,t.day,t.hour,t.minute,t.second,t.millisecond);return t.year<100&&t.year>=0&&(e=new Date(e),e.setUTCFullYear(t.year,t.month-1,t.day)),+e}function rw(t,e,n){return-J0(Y0(t,1,e),n)+e-1}function wu(t,e=4,n=1){const r=rw(t,e,n),i=rw(t+1,e,n);return(aa(t)-r+i)/7}function hg(t){return t>99?t:t>Xe.twoDigitCutoffYear?1900+t:2e3+t}function ST(t,e,n,r=null){const i=new Date(t),s={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};r&&(s.timeZone=r);const o={timeZoneName:e,...s},a=new Intl.DateTimeFormat(n,o).formatToParts(i).find(l=>l.type.toLowerCase()==="timezonename");return a?a.value:null}function Kh(t,e){let n=parseInt(t,10);Number.isNaN(n)&&(n=0);const r=parseInt(e,10)||0,i=n<0||Object.is(n,-0)?-r:r;return n*60+i}function TT(t){const e=Number(t);if(typeof t=="boolean"||t===""||Number.isNaN(e))throw new Kt(`Invalid unit value ${t}`);return e}function th(t,e){const n={};for(const r in t)if(Ea(t,r)){const i=t[r];if(i==null)continue;n[e(r)]=TT(i)}return n}function Bl(t,e){const n=Math.trunc(Math.abs(t/60)),r=Math.trunc(Math.abs(t%60)),i=t>=0?"+":"-";switch(e){case"short":return`${i}${ut(n,2)}:${ut(r,2)}`;case"narrow":return`${i}${n}${r>0?`:${r}`:""}`;case"techie":return`${i}${ut(n,2)}${ut(r,2)}`;default:throw new RangeError(`Value format ${e} is out of range for property format`)}}function Qh(t){return RN(t,["hour","minute","second","millisecond"])}const NN=["January","February","March","April","May","June","July","August","September","October","November","December"],IT=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],DN=["J","F","M","A","M","J","J","A","S","O","N","D"];function kT(t){switch(t){case"narrow":return[...DN];case"short":return[...IT];case"long":return[...NN];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}const CT=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],AT=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],ON=["M","T","W","T","F","S","S"];function RT(t){switch(t){case"narrow":return[...ON];case"short":return[...AT];case"long":return[...CT];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}const PT=["AM","PM"],jN=["Before Christ","Anno Domini"],LN=["BC","AD"],MN=["B","A"];function NT(t){switch(t){case"narrow":return[...MN];case"short":return[...LN];case"long":return[...jN];default:return null}}function VN(t){return PT[t.hour<12?0:1]}function FN(t,e){return RT(e)[t.weekday-1]}function $N(t,e){return kT(e)[t.month-1]}function zN(t,e){return NT(e)[t.year<0?0:1]}function UN(t,e,n="always",r=!1){const i={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},s=["hours","minutes","seconds"].indexOf(t)===-1;if(n==="auto"&&s){const f=t==="days";switch(e){case 1:return f?"tomorrow":`next ${i[t][0]}`;case-1:return f?"yesterday":`last ${i[t][0]}`;case 0:return f?"today":`this ${i[t][0]}`}}const o=Object.is(e,-0)||e<0,a=Math.abs(e),l=a===1,c=i[t],h=r?l?c[1]:c[2]||c[1]:l?i[t][0]:t;return o?`${a} ${h} ago`:`in ${a} ${h}`}function iw(t,e){let n="";for(const r of t)r.literal?n+=r.val:n+=e(r.val);return n}const BN={D:Zd,DD:QS,DDD:YS,DDDD:JS,t:ZS,tt:XS,ttt:eT,tttt:tT,T:nT,TT:rT,TTT:iT,TTTT:sT,f:oT,ff:lT,fff:cT,ffff:hT,F:aT,FF:uT,FFF:dT,FFFF:fT};class Zt{static create(e,n={}){return new Zt(e,n)}static parseFormat(e){let n=null,r="",i=!1;const s=[];for(let o=0;o<e.length;o++){const a=e.charAt(o);a==="'"?(r.length>0&&s.push({literal:i||/^\s+$/.test(r),val:r}),n=null,r="",i=!i):i||a===n?r+=a:(r.length>0&&s.push({literal:/^\s+$/.test(r),val:r}),r=a,n=a)}return r.length>0&&s.push({literal:i||/^\s+$/.test(r),val:r}),s}static macroTokenToFormatOpts(e){return BN[e]}constructor(e,n){this.opts=n,this.loc=e,this.systemLoc=null}formatWithSystemDefault(e,n){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(e,{...this.opts,...n}).format()}dtFormatter(e,n={}){return this.loc.dtFormatter(e,{...this.opts,...n})}formatDateTime(e,n){return this.dtFormatter(e,n).format()}formatDateTimeParts(e,n){return this.dtFormatter(e,n).formatToParts()}formatInterval(e,n){return this.dtFormatter(e.start,n).dtf.formatRange(e.start.toJSDate(),e.end.toJSDate())}resolvedOptions(e,n){return this.dtFormatter(e,n).resolvedOptions()}num(e,n=0){if(this.opts.forceSimple)return ut(e,n);const r={...this.opts};return n>0&&(r.padTo=n),this.loc.numberFormatter(r).format(e)}formatDateTimeFromString(e,n){const r=this.loc.listingMode()==="en",i=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",s=(g,w)=>this.loc.extract(e,g,w),o=g=>e.isOffsetFixed&&e.offset===0&&g.allowZ?"Z":e.isValid?e.zone.formatOffset(e.ts,g.format):"",a=()=>r?VN(e):s({hour:"numeric",hourCycle:"h12"},"dayperiod"),l=(g,w)=>r?$N(e,g):s(w?{month:g}:{month:g,day:"numeric"},"month"),c=(g,w)=>r?FN(e,g):s(w?{weekday:g}:{weekday:g,month:"long",day:"numeric"},"weekday"),h=g=>{const w=Zt.macroTokenToFormatOpts(g);return w?this.formatWithSystemDefault(e,w):g},f=g=>r?zN(e,g):s({era:g},"era"),p=g=>{switch(g){case"S":return this.num(e.millisecond);case"u":case"SSS":return this.num(e.millisecond,3);case"s":return this.num(e.second);case"ss":return this.num(e.second,2);case"uu":return this.num(Math.floor(e.millisecond/10),2);case"uuu":return this.num(Math.floor(e.millisecond/100));case"m":return this.num(e.minute);case"mm":return this.num(e.minute,2);case"h":return this.num(e.hour%12===0?12:e.hour%12);case"hh":return this.num(e.hour%12===0?12:e.hour%12,2);case"H":return this.num(e.hour);case"HH":return this.num(e.hour,2);case"Z":return o({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return o({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return o({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return e.zone.offsetName(e.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return e.zone.offsetName(e.ts,{format:"long",locale:this.loc.locale});case"z":return e.zoneName;case"a":return a();case"d":return i?s({day:"numeric"},"day"):this.num(e.day);case"dd":return i?s({day:"2-digit"},"day"):this.num(e.day,2);case"c":return this.num(e.weekday);case"ccc":return c("short",!0);case"cccc":return c("long",!0);case"ccccc":return c("narrow",!0);case"E":return this.num(e.weekday);case"EEE":return c("short",!1);case"EEEE":return c("long",!1);case"EEEEE":return c("narrow",!1);case"L":return i?s({month:"numeric",day:"numeric"},"month"):this.num(e.month);case"LL":return i?s({month:"2-digit",day:"numeric"},"month"):this.num(e.month,2);case"LLL":return l("short",!0);case"LLLL":return l("long",!0);case"LLLLL":return l("narrow",!0);case"M":return i?s({month:"numeric"},"month"):this.num(e.month);case"MM":return i?s({month:"2-digit"},"month"):this.num(e.month,2);case"MMM":return l("short",!1);case"MMMM":return l("long",!1);case"MMMMM":return l("narrow",!1);case"y":return i?s({year:"numeric"},"year"):this.num(e.year);case"yy":return i?s({year:"2-digit"},"year"):this.num(e.year.toString().slice(-2),2);case"yyyy":return i?s({year:"numeric"},"year"):this.num(e.year,4);case"yyyyyy":return i?s({year:"numeric"},"year"):this.num(e.year,6);case"G":return f("short");case"GG":return f("long");case"GGGGG":return f("narrow");case"kk":return this.num(e.weekYear.toString().slice(-2),2);case"kkkk":return this.num(e.weekYear,4);case"W":return this.num(e.weekNumber);case"WW":return this.num(e.weekNumber,2);case"n":return this.num(e.localWeekNumber);case"nn":return this.num(e.localWeekNumber,2);case"ii":return this.num(e.localWeekYear.toString().slice(-2),2);case"iiii":return this.num(e.localWeekYear,4);case"o":return this.num(e.ordinal);case"ooo":return this.num(e.ordinal,3);case"q":return this.num(e.quarter);case"qq":return this.num(e.quarter,2);case"X":return this.num(Math.floor(e.ts/1e3));case"x":return this.num(e.ts);default:return h(g)}};return iw(Zt.parseFormat(n),p)}formatDurationFromString(e,n){const r=l=>{switch(l[0]){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":return"hour";case"d":return"day";case"w":return"week";case"M":return"month";case"y":return"year";default:return null}},i=l=>c=>{const h=r(c);return h?this.num(l.get(h),c.length):c},s=Zt.parseFormat(n),o=s.reduce((l,{literal:c,val:h})=>c?l:l.concat(h),[]),a=e.shiftTo(...o.map(r).filter(l=>l));return iw(s,i(a))}}const DT=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function Fa(...t){const e=t.reduce((n,r)=>n+r.source,"");return RegExp(`^${e}$`)}function $a(...t){return e=>t.reduce(([n,r,i],s)=>{const[o,a,l]=s(e,i);return[{...n,...o},a||r,l]},[{},null,1]).slice(0,2)}function za(t,...e){if(t==null)return[null,null];for(const[n,r]of e){const i=n.exec(t);if(i)return r(i)}return[null,null]}function OT(...t){return(e,n)=>{const r={};let i;for(i=0;i<t.length;i++)r[t[i]]=$i(e[n+i]);return[r,null,n+i]}}const jT=/(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,HN=`(?:${jT.source}?(?:\\[(${DT.source})\\])?)?`,ey=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,LT=RegExp(`${ey.source}${HN}`),ty=RegExp(`(?:T${LT.source})?`),WN=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,qN=/(\d{4})-?W(\d\d)(?:-?(\d))?/,GN=/(\d{4})-?(\d{3})/,KN=OT("weekYear","weekNumber","weekDay"),QN=OT("year","ordinal"),YN=/(\d{4})-(\d\d)-(\d\d)/,MT=RegExp(`${ey.source} ?(?:${jT.source}|(${DT.source}))?`),JN=RegExp(`(?: ${MT.source})?`);function la(t,e,n){const r=t[e];return le(r)?n:$i(r)}function ZN(t,e){return[{year:la(t,e),month:la(t,e+1,1),day:la(t,e+2,1)},null,e+3]}function Ua(t,e){return[{hours:la(t,e,0),minutes:la(t,e+1,0),seconds:la(t,e+2,0),milliseconds:Z0(t[e+3])},null,e+4]}function Uu(t,e){const n=!t[e]&&!t[e+1],r=Kh(t[e+1],t[e+2]),i=n?null:nn.instance(r);return[{},i,e+3]}function Bu(t,e){const n=t[e]?vi.create(t[e]):null;return[{},n,e+1]}const XN=RegExp(`^T?${ey.source}$`),eD=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function tD(t){const[e,n,r,i,s,o,a,l,c]=t,h=e[0]==="-",f=l&&l[0]==="-",p=(g,w=!1)=>g!==void 0&&(w||g&&h)?-g:g;return[{years:p(Os(n)),months:p(Os(r)),weeks:p(Os(i)),days:p(Os(s)),hours:p(Os(o)),minutes:p(Os(a)),seconds:p(Os(l),l==="-0"),milliseconds:p(Z0(c),f)}]}const nD={GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function ny(t,e,n,r,i,s,o){const a={year:e.length===2?hg($i(e)):$i(e),month:IT.indexOf(n)+1,day:$i(r),hour:$i(i),minute:$i(s)};return o&&(a.second=$i(o)),t&&(a.weekday=t.length>3?CT.indexOf(t)+1:AT.indexOf(t)+1),a}const rD=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function iD(t){const[,e,n,r,i,s,o,a,l,c,h,f]=t,p=ny(e,i,r,n,s,o,a);let g;return l?g=nD[l]:c?g=0:g=Kh(h,f),[p,new nn(g)]}function sD(t){return t.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}const oD=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,aD=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,lD=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function sw(t){const[,e,n,r,i,s,o,a]=t;return[ny(e,i,r,n,s,o,a),nn.utcInstance]}function uD(t){const[,e,n,r,i,s,o,a]=t;return[ny(e,a,n,r,i,s,o),nn.utcInstance]}const cD=Fa(WN,ty),dD=Fa(qN,ty),hD=Fa(GN,ty),fD=Fa(LT),VT=$a(ZN,Ua,Uu,Bu),pD=$a(KN,Ua,Uu,Bu),mD=$a(QN,Ua,Uu,Bu),gD=$a(Ua,Uu,Bu);function yD(t){return za(t,[cD,VT],[dD,pD],[hD,mD],[fD,gD])}function vD(t){return za(sD(t),[rD,iD])}function xD(t){return za(t,[oD,sw],[aD,sw],[lD,uD])}function wD(t){return za(t,[eD,tD])}const _D=$a(Ua);function bD(t){return za(t,[XN,_D])}const ED=Fa(YN,JN),SD=Fa(MT),TD=$a(Ua,Uu,Bu);function ID(t){return za(t,[ED,VT],[SD,TD])}const ow="Invalid Duration",FT={weeks:{days:7,hours:7*24,minutes:7*24*60,seconds:7*24*60*60,milliseconds:7*24*60*60*1e3},days:{hours:24,minutes:24*60,seconds:24*60*60,milliseconds:24*60*60*1e3},hours:{minutes:60,seconds:60*60,milliseconds:60*60*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},kD={years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:91*24,minutes:91*24*60,seconds:91*24*60*60,milliseconds:91*24*60*60*1e3},months:{weeks:4,days:30,hours:30*24,minutes:30*24*60,seconds:30*24*60*60,milliseconds:30*24*60*60*1e3},...FT},$n=146097/400,Co=146097/4800,CD={years:{quarters:4,months:12,weeks:$n/7,days:$n,hours:$n*24,minutes:$n*24*60,seconds:$n*24*60*60,milliseconds:$n*24*60*60*1e3},quarters:{months:3,weeks:$n/28,days:$n/4,hours:$n*24/4,minutes:$n*24*60/4,seconds:$n*24*60*60/4,milliseconds:$n*24*60*60*1e3/4},months:{weeks:Co/7,days:Co,hours:Co*24,minutes:Co*24*60,seconds:Co*24*60*60,milliseconds:Co*24*60*60*1e3},...FT},Bs=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],AD=Bs.slice(0).reverse();function Li(t,e,n=!1){const r={values:n?e.values:{...t.values,...e.values||{}},loc:t.loc.clone(e.loc),conversionAccuracy:e.conversionAccuracy||t.conversionAccuracy,matrix:e.matrix||t.matrix};return new be(r)}function $T(t,e){let n=e.milliseconds??0;for(const r of AD.slice(1))e[r]&&(n+=e[r]*t[r].milliseconds);return n}function aw(t,e){const n=$T(t,e)<0?-1:1;Bs.reduceRight((r,i)=>{if(le(e[i]))return r;if(r){const s=e[r]*n,o=t[i][r],a=Math.floor(s/o);e[i]+=a*n,e[r]-=a*o*n}return i},null),Bs.reduce((r,i)=>{if(le(e[i]))return r;if(r){const s=e[r]%1;e[r]-=s,e[i]+=s*t[r][i]}return i},null)}function RD(t){const e={};for(const[n,r]of Object.entries(t))r!==0&&(e[n]=r);return e}class be{constructor(e){const n=e.conversionAccuracy==="longterm"||!1;let r=n?CD:kD;e.matrix&&(r=e.matrix),this.values=e.values,this.loc=e.loc||Re.create(),this.conversionAccuracy=n?"longterm":"casual",this.invalid=e.invalid||null,this.matrix=r,this.isLuxonDuration=!0}static fromMillis(e,n){return be.fromObject({milliseconds:e},n)}static fromObject(e,n={}){if(e==null||typeof e!="object")throw new Kt(`Duration.fromObject: argument expected to be an object, got ${e===null?"null":typeof e}`);return new be({values:th(e,be.normalizeUnit),loc:Re.fromObject(n),conversionAccuracy:n.conversionAccuracy,matrix:n.matrix})}static fromDurationLike(e){if(is(e))return be.fromMillis(e);if(be.isDuration(e))return e;if(typeof e=="object")return be.fromObject(e);throw new Kt(`Unknown duration argument ${e} of type ${typeof e}`)}static fromISO(e,n){const[r]=wD(e);return r?be.fromObject(r,n):be.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static fromISOTime(e,n){const[r]=bD(e);return r?be.fromObject(r,n):be.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static invalid(e,n=null){if(!e)throw new Kt("need to specify a reason the Duration is invalid");const r=e instanceof or?e:new or(e,n);if(Xe.throwOnInvalid)throw new tN(r);return new be({invalid:r})}static normalizeUnit(e){const n={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[e&&e.toLowerCase()];if(!n)throw new KS(e);return n}static isDuration(e){return e&&e.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(e,n={}){const r={...n,floor:n.round!==!1&&n.floor!==!1};return this.isValid?Zt.create(this.loc,r).formatDurationFromString(this,e):ow}toHuman(e={}){if(!this.isValid)return ow;const n=Bs.map(r=>{const i=this.values[r];return le(i)?null:this.loc.numberFormatter({style:"unit",unitDisplay:"long",...e,unit:r.slice(0,-1)}).format(i)}).filter(r=>r);return this.loc.listFormatter({type:"conjunction",style:e.listStyle||"narrow",...e}).format(n)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null;let e="P";return this.years!==0&&(e+=this.years+"Y"),(this.months!==0||this.quarters!==0)&&(e+=this.months+this.quarters*3+"M"),this.weeks!==0&&(e+=this.weeks+"W"),this.days!==0&&(e+=this.days+"D"),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(e+="T"),this.hours!==0&&(e+=this.hours+"H"),this.minutes!==0&&(e+=this.minutes+"M"),(this.seconds!==0||this.milliseconds!==0)&&(e+=X0(this.seconds+this.milliseconds/1e3,3)+"S"),e==="P"&&(e+="T0S"),e}toISOTime(e={}){if(!this.isValid)return null;const n=this.toMillis();return n<0||n>=864e5?null:(e={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended",...e,includeOffset:!1},ae.fromMillis(n,{zone:"UTC"}).toISOTime(e))}toJSON(){return this.toISO()}toString(){return this.toISO()}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Duration { values: ${JSON.stringify(this.values)} }`:`Duration { Invalid, reason: ${this.invalidReason} }`}toMillis(){return this.isValid?$T(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(e){if(!this.isValid)return this;const n=be.fromDurationLike(e),r={};for(const i of Bs)(Ea(n.values,i)||Ea(this.values,i))&&(r[i]=n.get(i)+this.get(i));return Li(this,{values:r},!0)}minus(e){if(!this.isValid)return this;const n=be.fromDurationLike(e);return this.plus(n.negate())}mapUnits(e){if(!this.isValid)return this;const n={};for(const r of Object.keys(this.values))n[r]=TT(e(this.values[r],r));return Li(this,{values:n},!0)}get(e){return this[be.normalizeUnit(e)]}set(e){if(!this.isValid)return this;const n={...this.values,...th(e,be.normalizeUnit)};return Li(this,{values:n})}reconfigure({locale:e,numberingSystem:n,conversionAccuracy:r,matrix:i}={}){const o={loc:this.loc.clone({locale:e,numberingSystem:n}),matrix:i,conversionAccuracy:r};return Li(this,o)}as(e){return this.isValid?this.shiftTo(e).get(e):NaN}normalize(){if(!this.isValid)return this;const e=this.toObject();return aw(this.matrix,e),Li(this,{values:e},!0)}rescale(){if(!this.isValid)return this;const e=RD(this.normalize().shiftToAll().toObject());return Li(this,{values:e},!0)}shiftTo(...e){if(!this.isValid)return this;if(e.length===0)return this;e=e.map(o=>be.normalizeUnit(o));const n={},r={},i=this.toObject();let s;for(const o of Bs)if(e.indexOf(o)>=0){s=o;let a=0;for(const c in r)a+=this.matrix[c][o]*r[c],r[c]=0;is(i[o])&&(a+=i[o]);const l=Math.trunc(a);n[o]=l,r[o]=(a*1e3-l*1e3)/1e3}else is(i[o])&&(r[o]=i[o]);for(const o in r)r[o]!==0&&(n[s]+=o===s?r[o]:r[o]/this.matrix[s][o]);return aw(this.matrix,n),Li(this,{values:n},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;const e={};for(const n of Object.keys(this.values))e[n]=this.values[n]===0?0:-this.values[n];return Li(this,{values:e},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(e){if(!this.isValid||!e.isValid||!this.loc.equals(e.loc))return!1;function n(r,i){return r===void 0||r===0?i===void 0||i===0:r===i}for(const r of Bs)if(!n(this.values[r],e.values[r]))return!1;return!0}}const Ao="Invalid Interval";function PD(t,e){return!t||!t.isValid?Ze.invalid("missing or invalid start"):!e||!e.isValid?Ze.invalid("missing or invalid end"):e<t?Ze.invalid("end before start",`The end of an interval must be after its start, but you had start=${t.toISO()} and end=${e.toISO()}`):null}class Ze{constructor(e){this.s=e.start,this.e=e.end,this.invalid=e.invalid||null,this.isLuxonInterval=!0}static invalid(e,n=null){if(!e)throw new Kt("need to specify a reason the Interval is invalid");const r=e instanceof or?e:new or(e,n);if(Xe.throwOnInvalid)throw new eN(r);return new Ze({invalid:r})}static fromDateTimes(e,n){const r=vl(e),i=vl(n),s=PD(r,i);return s??new Ze({start:r,end:i})}static after(e,n){const r=be.fromDurationLike(n),i=vl(e);return Ze.fromDateTimes(i,i.plus(r))}static before(e,n){const r=be.fromDurationLike(n),i=vl(e);return Ze.fromDateTimes(i.minus(r),i)}static fromISO(e,n){const[r,i]=(e||"").split("/",2);if(r&&i){let s,o;try{s=ae.fromISO(r,n),o=s.isValid}catch{o=!1}let a,l;try{a=ae.fromISO(i,n),l=a.isValid}catch{l=!1}if(o&&l)return Ze.fromDateTimes(s,a);if(o){const c=be.fromISO(i,n);if(c.isValid)return Ze.after(s,c)}else if(l){const c=be.fromISO(r,n);if(c.isValid)return Ze.before(a,c)}}return Ze.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static isInterval(e){return e&&e.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get lastDateTime(){return this.isValid&&this.e?this.e.minus(1):null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(e="milliseconds"){return this.isValid?this.toDuration(e).get(e):NaN}count(e="milliseconds",n){if(!this.isValid)return NaN;const r=this.start.startOf(e,n);let i;return n!=null&&n.useLocaleWeeks?i=this.end.reconfigure({locale:r.locale}):i=this.end,i=i.startOf(e,n),Math.floor(i.diff(r,e).get(e))+(i.valueOf()!==this.end.valueOf())}hasSame(e){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,e):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(e){return this.isValid?this.s>e:!1}isBefore(e){return this.isValid?this.e<=e:!1}contains(e){return this.isValid?this.s<=e&&this.e>e:!1}set({start:e,end:n}={}){return this.isValid?Ze.fromDateTimes(e||this.s,n||this.e):this}splitAt(...e){if(!this.isValid)return[];const n=e.map(vl).filter(o=>this.contains(o)).sort((o,a)=>o.toMillis()-a.toMillis()),r=[];let{s:i}=this,s=0;for(;i<this.e;){const o=n[s]||this.e,a=+o>+this.e?this.e:o;r.push(Ze.fromDateTimes(i,a)),i=a,s+=1}return r}splitBy(e){const n=be.fromDurationLike(e);if(!this.isValid||!n.isValid||n.as("milliseconds")===0)return[];let{s:r}=this,i=1,s;const o=[];for(;r<this.e;){const a=this.start.plus(n.mapUnits(l=>l*i));s=+a>+this.e?this.e:a,o.push(Ze.fromDateTimes(r,s)),r=s,i+=1}return o}divideEqually(e){return this.isValid?this.splitBy(this.length()/e).slice(0,e):[]}overlaps(e){return this.e>e.s&&this.s<e.e}abutsStart(e){return this.isValid?+this.e==+e.s:!1}abutsEnd(e){return this.isValid?+e.e==+this.s:!1}engulfs(e){return this.isValid?this.s<=e.s&&this.e>=e.e:!1}equals(e){return!this.isValid||!e.isValid?!1:this.s.equals(e.s)&&this.e.equals(e.e)}intersection(e){if(!this.isValid)return this;const n=this.s>e.s?this.s:e.s,r=this.e<e.e?this.e:e.e;return n>=r?null:Ze.fromDateTimes(n,r)}union(e){if(!this.isValid)return this;const n=this.s<e.s?this.s:e.s,r=this.e>e.e?this.e:e.e;return Ze.fromDateTimes(n,r)}static merge(e){const[n,r]=e.sort((i,s)=>i.s-s.s).reduce(([i,s],o)=>s?s.overlaps(o)||s.abutsStart(o)?[i,s.union(o)]:[i.concat([s]),o]:[i,o],[[],null]);return r&&n.push(r),n}static xor(e){let n=null,r=0;const i=[],s=e.map(l=>[{time:l.s,type:"s"},{time:l.e,type:"e"}]),o=Array.prototype.concat(...s),a=o.sort((l,c)=>l.time-c.time);for(const l of a)r+=l.type==="s"?1:-1,r===1?n=l.time:(n&&+n!=+l.time&&i.push(Ze.fromDateTimes(n,l.time)),n=null);return Ze.merge(i)}difference(...e){return Ze.xor([this].concat(e)).map(n=>this.intersection(n)).filter(n=>n&&!n.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:Ao}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }`:`Interval { Invalid, reason: ${this.invalidReason} }`}toLocaleString(e=Zd,n={}){return this.isValid?Zt.create(this.s.loc.clone(n),e).formatInterval(this):Ao}toISO(e){return this.isValid?`${this.s.toISO(e)}/${this.e.toISO(e)}`:Ao}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:Ao}toISOTime(e){return this.isValid?`${this.s.toISOTime(e)}/${this.e.toISOTime(e)}`:Ao}toFormat(e,{separator:n=" – "}={}){return this.isValid?`${this.s.toFormat(e)}${n}${this.e.toFormat(e)}`:Ao}toDuration(e,n){return this.isValid?this.e.diff(this.s,e,n):be.invalid(this.invalidReason)}mapEndpoints(e){return Ze.fromDateTimes(e(this.s),e(this.e))}}class Nc{static hasDST(e=Xe.defaultZone){const n=ae.now().setZone(e).set({month:12});return!e.isUniversal&&n.offset!==n.set({month:6}).offset}static isValidIANAZone(e){return vi.isValidZone(e)}static normalizeZone(e){return Bi(e,Xe.defaultZone)}static getStartOfWeek({locale:e=null,locObj:n=null}={}){return(n||Re.create(e)).getStartOfWeek()}static getMinimumDaysInFirstWeek({locale:e=null,locObj:n=null}={}){return(n||Re.create(e)).getMinDaysInFirstWeek()}static getWeekendWeekdays({locale:e=null,locObj:n=null}={}){return(n||Re.create(e)).getWeekendDays().slice()}static months(e="long",{locale:n=null,numberingSystem:r=null,locObj:i=null,outputCalendar:s="gregory"}={}){return(i||Re.create(n,r,s)).months(e)}static monthsFormat(e="long",{locale:n=null,numberingSystem:r=null,locObj:i=null,outputCalendar:s="gregory"}={}){return(i||Re.create(n,r,s)).months(e,!0)}static weekdays(e="long",{locale:n=null,numberingSystem:r=null,locObj:i=null}={}){return(i||Re.create(n,r,null)).weekdays(e)}static weekdaysFormat(e="long",{locale:n=null,numberingSystem:r=null,locObj:i=null}={}){return(i||Re.create(n,r,null)).weekdays(e,!0)}static meridiems({locale:e=null}={}){return Re.create(e).meridiems()}static eras(e="short",{locale:n=null}={}){return Re.create(n,null,"gregory").eras(e)}static features(){return{relative:bT(),localeWeek:ET()}}}function lw(t,e){const n=i=>i.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),r=n(e)-n(t);return Math.floor(be.fromMillis(r).as("days"))}function ND(t,e,n){const r=[["years",(l,c)=>c.year-l.year],["quarters",(l,c)=>c.quarter-l.quarter+(c.year-l.year)*4],["months",(l,c)=>c.month-l.month+(c.year-l.year)*12],["weeks",(l,c)=>{const h=lw(l,c);return(h-h%7)/7}],["days",lw]],i={},s=t;let o,a;for(const[l,c]of r)n.indexOf(l)>=0&&(o=l,i[l]=c(t,e),a=s.plus(i),a>e?(i[l]--,t=s.plus(i),t>e&&(a=t,i[l]--,t=s.plus(i))):t=a);return[t,i,a,o]}function DD(t,e,n,r){let[i,s,o,a]=ND(t,e,n);const l=e-i,c=n.filter(f=>["hours","minutes","seconds","milliseconds"].indexOf(f)>=0);c.length===0&&(o<e&&(o=i.plus({[a]:1})),o!==i&&(s[a]=(s[a]||0)+l/(o-i)));const h=be.fromObject(s,r);return c.length>0?be.fromMillis(l,r).shiftTo(...c).plus(h):h}const OD="missing Intl.DateTimeFormat.formatToParts support";function ke(t,e=n=>n){return{regex:t,deser:([n])=>e(EN(n))}}const jD=" ",zT=`[ ${jD}]`,UT=new RegExp(zT,"g");function LD(t){return t.replace(/\./g,"\\.?").replace(UT,zT)}function uw(t){return t.replace(/\./g,"").replace(UT," ").toLowerCase()}function nr(t,e){return t===null?null:{regex:RegExp(t.map(LD).join("|")),deser:([n])=>t.findIndex(r=>uw(n)===uw(r))+e}}function cw(t,e){return{regex:t,deser:([,n,r])=>Kh(n,r),groups:e}}function Dc(t){return{regex:t,deser:([e])=>e}}function MD(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function VD(t,e){const n=tr(e),r=tr(e,"{2}"),i=tr(e,"{3}"),s=tr(e,"{4}"),o=tr(e,"{6}"),a=tr(e,"{1,2}"),l=tr(e,"{1,3}"),c=tr(e,"{1,6}"),h=tr(e,"{1,9}"),f=tr(e,"{2,4}"),p=tr(e,"{4,6}"),g=C=>({regex:RegExp(MD(C.val)),deser:([x])=>x,literal:!0}),k=(C=>{if(t.literal)return g(C);switch(C.val){case"G":return nr(e.eras("short"),0);case"GG":return nr(e.eras("long"),0);case"y":return ke(c);case"yy":return ke(f,hg);case"yyyy":return ke(s);case"yyyyy":return ke(p);case"yyyyyy":return ke(o);case"M":return ke(a);case"MM":return ke(r);case"MMM":return nr(e.months("short",!0),1);case"MMMM":return nr(e.months("long",!0),1);case"L":return ke(a);case"LL":return ke(r);case"LLL":return nr(e.months("short",!1),1);case"LLLL":return nr(e.months("long",!1),1);case"d":return ke(a);case"dd":return ke(r);case"o":return ke(l);case"ooo":return ke(i);case"HH":return ke(r);case"H":return ke(a);case"hh":return ke(r);case"h":return ke(a);case"mm":return ke(r);case"m":return ke(a);case"q":return ke(a);case"qq":return ke(r);case"s":return ke(a);case"ss":return ke(r);case"S":return ke(l);case"SSS":return ke(i);case"u":return Dc(h);case"uu":return Dc(a);case"uuu":return ke(n);case"a":return nr(e.meridiems(),0);case"kkkk":return ke(s);case"kk":return ke(f,hg);case"W":return ke(a);case"WW":return ke(r);case"E":case"c":return ke(n);case"EEE":return nr(e.weekdays("short",!1),1);case"EEEE":return nr(e.weekdays("long",!1),1);case"ccc":return nr(e.weekdays("short",!0),1);case"cccc":return nr(e.weekdays("long",!0),1);case"Z":case"ZZ":return cw(new RegExp(`([+-]${a.source})(?::(${r.source}))?`),2);case"ZZZ":return cw(new RegExp(`([+-]${a.source})(${r.source})?`),2);case"z":return Dc(/[a-z_+-/]{1,256}?/i);case" ":return Dc(/[^\S\n\r]/);default:return g(C)}})(t)||{invalidReason:OD};return k.token=t,k}const FD={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function $D(t,e,n){const{type:r,value:i}=t;if(r==="literal"){const l=/^\s+$/.test(i);return{literal:!l,val:l?" ":i}}const s=e[r];let o=r;r==="hour"&&(e.hour12!=null?o=e.hour12?"hour12":"hour24":e.hourCycle!=null?e.hourCycle==="h11"||e.hourCycle==="h12"?o="hour12":o="hour24":o=n.hour12?"hour12":"hour24");let a=FD[o];if(typeof a=="object"&&(a=a[s]),a)return{literal:!1,val:a}}function zD(t){return[`^${t.map(n=>n.regex).reduce((n,r)=>`${n}(${r.source})`,"")}$`,t]}function UD(t,e,n){const r=t.match(e);if(r){const i={};let s=1;for(const o in n)if(Ea(n,o)){const a=n[o],l=a.groups?a.groups+1:1;!a.literal&&a.token&&(i[a.token.val[0]]=a.deser(r.slice(s,s+l))),s+=l}return[r,i]}else return[r,{}]}function BD(t){const e=s=>{switch(s){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}};let n=null,r;return le(t.z)||(n=vi.create(t.z)),le(t.Z)||(n||(n=new nn(t.Z)),r=t.Z),le(t.q)||(t.M=(t.q-1)*3+1),le(t.h)||(t.h<12&&t.a===1?t.h+=12:t.h===12&&t.a===0&&(t.h=0)),t.G===0&&t.y&&(t.y=-t.y),le(t.u)||(t.S=Z0(t.u)),[Object.keys(t).reduce((s,o)=>{const a=e(o);return a&&(s[a]=t[o]),s},{}),n,r]}let xp=null;function HD(){return xp||(xp=ae.fromMillis(1555555555555)),xp}function WD(t,e){if(t.literal)return t;const n=Zt.macroTokenToFormatOpts(t.val),r=qT(n,e);return r==null||r.includes(void 0)?t:r}function BT(t,e){return Array.prototype.concat(...t.map(n=>WD(n,e)))}class HT{constructor(e,n){if(this.locale=e,this.format=n,this.tokens=BT(Zt.parseFormat(n),e),this.units=this.tokens.map(r=>VD(r,e)),this.disqualifyingUnit=this.units.find(r=>r.invalidReason),!this.disqualifyingUnit){const[r,i]=zD(this.units);this.regex=RegExp(r,"i"),this.handlers=i}}explainFromTokens(e){if(this.isValid){const[n,r]=UD(e,this.regex,this.handlers),[i,s,o]=r?BD(r):[null,null,void 0];if(Ea(r,"a")&&Ea(r,"H"))throw new ea("Can't include meridiem when specifying 24-hour format");return{input:e,tokens:this.tokens,regex:this.regex,rawMatches:n,matches:r,result:i,zone:s,specificOffset:o}}else return{input:e,tokens:this.tokens,invalidReason:this.invalidReason}}get isValid(){return!this.disqualifyingUnit}get invalidReason(){return this.disqualifyingUnit?this.disqualifyingUnit.invalidReason:null}}function WT(t,e,n){return new HT(t,n).explainFromTokens(e)}function qD(t,e,n){const{result:r,zone:i,specificOffset:s,invalidReason:o}=WT(t,e,n);return[r,i,s,o]}function qT(t,e){if(!t)return null;const r=Zt.create(e,t).dtFormatter(HD()),i=r.formatToParts(),s=r.resolvedOptions();return i.map(o=>$D(o,t,s))}const wp="Invalid DateTime",GD=864e13;function Il(t){return new or("unsupported zone",`the zone "${t.name}" is not supported`)}function _p(t){return t.weekData===null&&(t.weekData=Xd(t.c)),t.weekData}function bp(t){return t.localWeekData===null&&(t.localWeekData=Xd(t.c,t.loc.getMinDaysInFirstWeek(),t.loc.getStartOfWeek())),t.localWeekData}function js(t,e){const n={ts:t.ts,zone:t.zone,c:t.c,o:t.o,loc:t.loc,invalid:t.invalid};return new ae({...n,...e,old:n})}function GT(t,e,n){let r=t-e*60*1e3;const i=n.offset(r);if(e===i)return[r,e];r-=(i-e)*60*1e3;const s=n.offset(r);return i===s?[r,i]:[t-Math.min(i,s)*60*1e3,Math.max(i,s)]}function Oc(t,e){t+=e*60*1e3;const n=new Date(t);return{year:n.getUTCFullYear(),month:n.getUTCMonth()+1,day:n.getUTCDate(),hour:n.getUTCHours(),minute:n.getUTCMinutes(),second:n.getUTCSeconds(),millisecond:n.getUTCMilliseconds()}}function cd(t,e,n){return GT(Gh(t),e,n)}function dw(t,e){const n=t.o,r=t.c.year+Math.trunc(e.years),i=t.c.month+Math.trunc(e.months)+Math.trunc(e.quarters)*3,s={...t.c,year:r,month:i,day:Math.min(t.c.day,eh(r,i))+Math.trunc(e.days)+Math.trunc(e.weeks)*7},o=be.fromObject({years:e.years-Math.trunc(e.years),quarters:e.quarters-Math.trunc(e.quarters),months:e.months-Math.trunc(e.months),weeks:e.weeks-Math.trunc(e.weeks),days:e.days-Math.trunc(e.days),hours:e.hours,minutes:e.minutes,seconds:e.seconds,milliseconds:e.milliseconds}).as("milliseconds"),a=Gh(s);let[l,c]=GT(a,n,t.zone);return o!==0&&(l+=o,c=t.zone.offset(l)),{ts:l,o:c}}function Ro(t,e,n,r,i,s){const{setZone:o,zone:a}=n;if(t&&Object.keys(t).length!==0||e){const l=e||a,c=ae.fromObject(t,{...n,zone:l,specificOffset:s});return o?c:c.setZone(a)}else return ae.invalid(new or("unparsable",`the input "${i}" can't be parsed as ${r}`))}function jc(t,e,n=!0){return t.isValid?Zt.create(Re.create("en-US"),{allowZ:n,forceSimple:!0}).formatDateTimeFromString(t,e):null}function Ep(t,e){const n=t.c.year>9999||t.c.year<0;let r="";return n&&t.c.year>=0&&(r+="+"),r+=ut(t.c.year,n?6:4),e?(r+="-",r+=ut(t.c.month),r+="-",r+=ut(t.c.day)):(r+=ut(t.c.month),r+=ut(t.c.day)),r}function hw(t,e,n,r,i,s){let o=ut(t.c.hour);return e?(o+=":",o+=ut(t.c.minute),(t.c.millisecond!==0||t.c.second!==0||!n)&&(o+=":")):o+=ut(t.c.minute),(t.c.millisecond!==0||t.c.second!==0||!n)&&(o+=ut(t.c.second),(t.c.millisecond!==0||!r)&&(o+=".",o+=ut(t.c.millisecond,3))),i&&(t.isOffsetFixed&&t.offset===0&&!s?o+="Z":t.o<0?(o+="-",o+=ut(Math.trunc(-t.o/60)),o+=":",o+=ut(Math.trunc(-t.o%60))):(o+="+",o+=ut(Math.trunc(t.o/60)),o+=":",o+=ut(Math.trunc(t.o%60)))),s&&(o+="["+t.zone.ianaName+"]"),o}const KT={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},KD={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},QD={ordinal:1,hour:0,minute:0,second:0,millisecond:0},QT=["year","month","day","hour","minute","second","millisecond"],YD=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],JD=["year","ordinal","hour","minute","second","millisecond"];function ZD(t){const e={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[t.toLowerCase()];if(!e)throw new KS(t);return e}function fw(t){switch(t.toLowerCase()){case"localweekday":case"localweekdays":return"localWeekday";case"localweeknumber":case"localweeknumbers":return"localWeekNumber";case"localweekyear":case"localweekyears":return"localWeekYear";default:return ZD(t)}}function XD(t){if(kl===void 0&&(kl=Xe.now()),t.type!=="iana")return t.offset(kl);const e=t.name;let n=fg.get(e);return n===void 0&&(n=t.offset(kl),fg.set(e,n)),n}function pw(t,e){const n=Bi(e.zone,Xe.defaultZone);if(!n.isValid)return ae.invalid(Il(n));const r=Re.fromObject(e);let i,s;if(le(t.year))i=Xe.now();else{for(const l of QT)le(t[l])&&(t[l]=KT[l]);const o=wT(t)||_T(t);if(o)return ae.invalid(o);const a=XD(n);[i,s]=cd(t,a,n)}return new ae({ts:i,zone:n,loc:r,o:s})}function mw(t,e,n){const r=le(n.round)?!0:n.round,i=(o,a)=>(o=X0(o,r||n.calendary?0:2,!0),e.loc.clone(n).relFormatter(n).format(o,a)),s=o=>n.calendary?e.hasSame(t,o)?0:e.startOf(o).diff(t.startOf(o),o).get(o):e.diff(t,o).get(o);if(n.unit)return i(s(n.unit),n.unit);for(const o of n.units){const a=s(o);if(Math.abs(a)>=1)return i(a,o)}return i(t>e?-0:0,n.units[n.units.length-1])}function gw(t){let e={},n;return t.length>0&&typeof t[t.length-1]=="object"?(e=t[t.length-1],n=Array.from(t).slice(0,t.length-1)):n=Array.from(t),[e,n]}let kl;const fg=new Map;class ae{constructor(e){const n=e.zone||Xe.defaultZone;let r=e.invalid||(Number.isNaN(e.ts)?new or("invalid input"):null)||(n.isValid?null:Il(n));this.ts=le(e.ts)?Xe.now():e.ts;let i=null,s=null;if(!r)if(e.old&&e.old.ts===this.ts&&e.old.zone.equals(n))[i,s]=[e.old.c,e.old.o];else{const a=is(e.o)&&!e.old?e.o:n.offset(this.ts);i=Oc(this.ts,a),r=Number.isNaN(i.year)?new or("invalid input"):null,i=r?null:i,s=r?null:a}this._zone=n,this.loc=e.loc||Re.create(),this.invalid=r,this.weekData=null,this.localWeekData=null,this.c=i,this.o=s,this.isLuxonDateTime=!0}static now(){return new ae({})}static local(){const[e,n]=gw(arguments),[r,i,s,o,a,l,c]=n;return pw({year:r,month:i,day:s,hour:o,minute:a,second:l,millisecond:c},e)}static utc(){const[e,n]=gw(arguments),[r,i,s,o,a,l,c]=n;return e.zone=nn.utcInstance,pw({year:r,month:i,day:s,hour:o,minute:a,second:l,millisecond:c},e)}static fromJSDate(e,n={}){const r=CN(e)?e.valueOf():NaN;if(Number.isNaN(r))return ae.invalid("invalid input");const i=Bi(n.zone,Xe.defaultZone);return i.isValid?new ae({ts:r,zone:i,loc:Re.fromObject(n)}):ae.invalid(Il(i))}static fromMillis(e,n={}){if(is(e))return e<-864e13||e>GD?ae.invalid("Timestamp out of range"):new ae({ts:e,zone:Bi(n.zone,Xe.defaultZone),loc:Re.fromObject(n)});throw new Kt(`fromMillis requires a numerical input, but received a ${typeof e} with value ${e}`)}static fromSeconds(e,n={}){if(is(e))return new ae({ts:e*1e3,zone:Bi(n.zone,Xe.defaultZone),loc:Re.fromObject(n)});throw new Kt("fromSeconds requires a numerical input")}static fromObject(e,n={}){e=e||{};const r=Bi(n.zone,Xe.defaultZone);if(!r.isValid)return ae.invalid(Il(r));const i=Re.fromObject(n),s=th(e,fw),{minDaysInFirstWeek:o,startOfWeek:a}=tw(s,i),l=Xe.now(),c=le(n.specificOffset)?r.offset(l):n.specificOffset,h=!le(s.ordinal),f=!le(s.year),p=!le(s.month)||!le(s.day),g=f||p,w=s.weekYear||s.weekNumber;if((g||h)&&w)throw new ea("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(p&&h)throw new ea("Can't mix ordinal dates with month/day");const k=w||s.weekday&&!g;let C,x,v=Oc(l,c);k?(C=YD,x=KD,v=Xd(v,o,a)):h?(C=JD,x=QD,v=vp(v)):(C=QT,x=KT);let E=!1;for(const R of C){const N=s[R];le(N)?E?s[R]=x[R]:s[R]=v[R]:E=!0}const P=k?TN(s,o,a):h?IN(s):wT(s),j=P||_T(s);if(j)return ae.invalid(j);const M=k?Xx(s,o,a):h?ew(s):s,[b,S]=cd(M,c,r),A=new ae({ts:b,zone:r,o:S,loc:i});return s.weekday&&g&&e.weekday!==A.weekday?ae.invalid("mismatched weekday",`you can't specify both a weekday of ${s.weekday} and a date of ${A.toISO()}`):A.isValid?A:ae.invalid(A.invalid)}static fromISO(e,n={}){const[r,i]=yD(e);return Ro(r,i,n,"ISO 8601",e)}static fromRFC2822(e,n={}){const[r,i]=vD(e);return Ro(r,i,n,"RFC 2822",e)}static fromHTTP(e,n={}){const[r,i]=xD(e);return Ro(r,i,n,"HTTP",n)}static fromFormat(e,n,r={}){if(le(e)||le(n))throw new Kt("fromFormat requires an input string and a format");const{locale:i=null,numberingSystem:s=null}=r,o=Re.fromOpts({locale:i,numberingSystem:s,defaultToEN:!0}),[a,l,c,h]=qD(o,e,n);return h?ae.invalid(h):Ro(a,l,r,`format ${n}`,e,c)}static fromString(e,n,r={}){return ae.fromFormat(e,n,r)}static fromSQL(e,n={}){const[r,i]=ID(e);return Ro(r,i,n,"SQL",e)}static invalid(e,n=null){if(!e)throw new Kt("need to specify a reason the DateTime is invalid");const r=e instanceof or?e:new or(e,n);if(Xe.throwOnInvalid)throw new XP(r);return new ae({invalid:r})}static isDateTime(e){return e&&e.isLuxonDateTime||!1}static parseFormatForOpts(e,n={}){const r=qT(e,Re.fromObject(n));return r?r.map(i=>i?i.val:null).join(""):null}static expandFormat(e,n={}){return BT(Zt.parseFormat(e),Re.fromObject(n)).map(i=>i.val).join("")}static resetCache(){kl=void 0,fg.clear()}get(e){return this[e]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?_p(this).weekYear:NaN}get weekNumber(){return this.isValid?_p(this).weekNumber:NaN}get weekday(){return this.isValid?_p(this).weekday:NaN}get isWeekend(){return this.isValid&&this.loc.getWeekendDays().includes(this.weekday)}get localWeekday(){return this.isValid?bp(this).weekday:NaN}get localWeekNumber(){return this.isValid?bp(this).weekNumber:NaN}get localWeekYear(){return this.isValid?bp(this).weekYear:NaN}get ordinal(){return this.isValid?vp(this.c).ordinal:NaN}get monthShort(){return this.isValid?Nc.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?Nc.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?Nc.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?Nc.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];const e=864e5,n=6e4,r=Gh(this.c),i=this.zone.offset(r-e),s=this.zone.offset(r+e),o=this.zone.offset(r-i*n),a=this.zone.offset(r-s*n);if(o===a)return[this];const l=r-o*n,c=r-a*n,h=Oc(l,o),f=Oc(c,a);return h.hour===f.hour&&h.minute===f.minute&&h.second===f.second&&h.millisecond===f.millisecond?[js(this,{ts:l}),js(this,{ts:c})]:[this]}get isInLeapYear(){return zu(this.year)}get daysInMonth(){return eh(this.year,this.month)}get daysInYear(){return this.isValid?aa(this.year):NaN}get weeksInWeekYear(){return this.isValid?wu(this.weekYear):NaN}get weeksInLocalWeekYear(){return this.isValid?wu(this.localWeekYear,this.loc.getMinDaysInFirstWeek(),this.loc.getStartOfWeek()):NaN}resolvedLocaleOptions(e={}){const{locale:n,numberingSystem:r,calendar:i}=Zt.create(this.loc.clone(e),e).resolvedOptions(this);return{locale:n,numberingSystem:r,outputCalendar:i}}toUTC(e=0,n={}){return this.setZone(nn.instance(e),n)}toLocal(){return this.setZone(Xe.defaultZone)}setZone(e,{keepLocalTime:n=!1,keepCalendarTime:r=!1}={}){if(e=Bi(e,Xe.defaultZone),e.equals(this.zone))return this;if(e.isValid){let i=this.ts;if(n||r){const s=e.offset(this.ts),o=this.toObject();[i]=cd(o,s,e)}return js(this,{ts:i,zone:e})}else return ae.invalid(Il(e))}reconfigure({locale:e,numberingSystem:n,outputCalendar:r}={}){const i=this.loc.clone({locale:e,numberingSystem:n,outputCalendar:r});return js(this,{loc:i})}setLocale(e){return this.reconfigure({locale:e})}set(e){if(!this.isValid)return this;const n=th(e,fw),{minDaysInFirstWeek:r,startOfWeek:i}=tw(n,this.loc),s=!le(n.weekYear)||!le(n.weekNumber)||!le(n.weekday),o=!le(n.ordinal),a=!le(n.year),l=!le(n.month)||!le(n.day),c=a||l,h=n.weekYear||n.weekNumber;if((c||o)&&h)throw new ea("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(l&&o)throw new ea("Can't mix ordinal dates with month/day");let f;s?f=Xx({...Xd(this.c,r,i),...n},r,i):le(n.ordinal)?(f={...this.toObject(),...n},le(n.day)&&(f.day=Math.min(eh(f.year,f.month),f.day))):f=ew({...vp(this.c),...n});const[p,g]=cd(f,this.o,this.zone);return js(this,{ts:p,o:g})}plus(e){if(!this.isValid)return this;const n=be.fromDurationLike(e);return js(this,dw(this,n))}minus(e){if(!this.isValid)return this;const n=be.fromDurationLike(e).negate();return js(this,dw(this,n))}startOf(e,{useLocaleWeeks:n=!1}={}){if(!this.isValid)return this;const r={},i=be.normalizeUnit(e);switch(i){case"years":r.month=1;case"quarters":case"months":r.day=1;case"weeks":case"days":r.hour=0;case"hours":r.minute=0;case"minutes":r.second=0;case"seconds":r.millisecond=0;break}if(i==="weeks")if(n){const s=this.loc.getStartOfWeek(),{weekday:o}=this;o<s&&(r.weekNumber=this.weekNumber-1),r.weekday=s}else r.weekday=1;if(i==="quarters"){const s=Math.ceil(this.month/3);r.month=(s-1)*3+1}return this.set(r)}endOf(e,n){return this.isValid?this.plus({[e]:1}).startOf(e,n).minus(1):this}toFormat(e,n={}){return this.isValid?Zt.create(this.loc.redefaultToEN(n)).formatDateTimeFromString(this,e):wp}toLocaleString(e=Zd,n={}){return this.isValid?Zt.create(this.loc.clone(n),e).formatDateTime(this):wp}toLocaleParts(e={}){return this.isValid?Zt.create(this.loc.clone(e),e).formatDateTimeParts(this):[]}toISO({format:e="extended",suppressSeconds:n=!1,suppressMilliseconds:r=!1,includeOffset:i=!0,extendedZone:s=!1}={}){if(!this.isValid)return null;const o=e==="extended";let a=Ep(this,o);return a+="T",a+=hw(this,o,n,r,i,s),a}toISODate({format:e="extended"}={}){return this.isValid?Ep(this,e==="extended"):null}toISOWeekDate(){return jc(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:e=!1,suppressSeconds:n=!1,includeOffset:r=!0,includePrefix:i=!1,extendedZone:s=!1,format:o="extended"}={}){return this.isValid?(i?"T":"")+hw(this,o==="extended",n,e,r,s):null}toRFC2822(){return jc(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return jc(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?Ep(this,!0):null}toSQLTime({includeOffset:e=!0,includeZone:n=!1,includeOffsetSpace:r=!0}={}){let i="HH:mm:ss.SSS";return(n||e)&&(r&&(i+=" "),n?i+="z":e&&(i+="ZZ")),jc(this,i,!0)}toSQL(e={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(e)}`:null}toString(){return this.isValid?this.toISO():wp}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }`:`DateTime { Invalid, reason: ${this.invalidReason} }`}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(e={}){if(!this.isValid)return{};const n={...this.c};return e.includeConfig&&(n.outputCalendar=this.outputCalendar,n.numberingSystem=this.loc.numberingSystem,n.locale=this.loc.locale),n}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(e,n="milliseconds",r={}){if(!this.isValid||!e.isValid)return be.invalid("created by diffing an invalid DateTime");const i={locale:this.locale,numberingSystem:this.numberingSystem,...r},s=AN(n).map(be.normalizeUnit),o=e.valueOf()>this.valueOf(),a=o?this:e,l=o?e:this,c=DD(a,l,s,i);return o?c.negate():c}diffNow(e="milliseconds",n={}){return this.diff(ae.now(),e,n)}until(e){return this.isValid?Ze.fromDateTimes(this,e):this}hasSame(e,n,r){if(!this.isValid)return!1;const i=e.valueOf(),s=this.setZone(e.zone,{keepLocalTime:!0});return s.startOf(n,r)<=i&&i<=s.endOf(n,r)}equals(e){return this.isValid&&e.isValid&&this.valueOf()===e.valueOf()&&this.zone.equals(e.zone)&&this.loc.equals(e.loc)}toRelative(e={}){if(!this.isValid)return null;const n=e.base||ae.fromObject({},{zone:this.zone}),r=e.padding?this<n?-e.padding:e.padding:0;let i=["years","months","days","hours","minutes","seconds"],s=e.unit;return Array.isArray(e.unit)&&(i=e.unit,s=void 0),mw(n,this.plus(r),{...e,numeric:"always",units:i,unit:s})}toRelativeCalendar(e={}){return this.isValid?mw(e.base||ae.fromObject({},{zone:this.zone}),this,{...e,numeric:"auto",units:["years","months","days"],calendary:!0}):null}static min(...e){if(!e.every(ae.isDateTime))throw new Kt("min requires all arguments be DateTimes");return nw(e,n=>n.valueOf(),Math.min)}static max(...e){if(!e.every(ae.isDateTime))throw new Kt("max requires all arguments be DateTimes");return nw(e,n=>n.valueOf(),Math.max)}static fromFormatExplain(e,n,r={}){const{locale:i=null,numberingSystem:s=null}=r,o=Re.fromOpts({locale:i,numberingSystem:s,defaultToEN:!0});return WT(o,e,n)}static fromStringExplain(e,n,r={}){return ae.fromFormatExplain(e,n,r)}static buildFormatParser(e,n={}){const{locale:r=null,numberingSystem:i=null}=n,s=Re.fromOpts({locale:r,numberingSystem:i,defaultToEN:!0});return new HT(s,e)}static fromFormatParser(e,n,r={}){if(le(e)||le(n))throw new Kt("fromFormatParser requires an input string and a format parser");const{locale:i=null,numberingSystem:s=null}=r,o=Re.fromOpts({locale:i,numberingSystem:s,defaultToEN:!0});if(!o.equals(n.locale))throw new Kt(`fromFormatParser called with a locale of ${o}, but the format parser was created for ${n.locale}`);const{result:a,zone:l,specificOffset:c,invalidReason:h}=n.explainFromTokens(e);return h?ae.invalid(h):Ro(a,l,r,`format ${n.format}`,e,c)}static get DATE_SHORT(){return Zd}static get DATE_MED(){return QS}static get DATE_MED_WITH_WEEKDAY(){return nN}static get DATE_FULL(){return YS}static get DATE_HUGE(){return JS}static get TIME_SIMPLE(){return ZS}static get TIME_WITH_SECONDS(){return XS}static get TIME_WITH_SHORT_OFFSET(){return eT}static get TIME_WITH_LONG_OFFSET(){return tT}static get TIME_24_SIMPLE(){return nT}static get TIME_24_WITH_SECONDS(){return rT}static get TIME_24_WITH_SHORT_OFFSET(){return iT}static get TIME_24_WITH_LONG_OFFSET(){return sT}static get DATETIME_SHORT(){return oT}static get DATETIME_SHORT_WITH_SECONDS(){return aT}static get DATETIME_MED(){return lT}static get DATETIME_MED_WITH_SECONDS(){return uT}static get DATETIME_MED_WITH_WEEKDAY(){return rN}static get DATETIME_FULL(){return cT}static get DATETIME_FULL_WITH_SECONDS(){return dT}static get DATETIME_HUGE(){return hT}static get DATETIME_HUGE_WITH_SECONDS(){return fT}}function vl(t){if(ae.isDateTime(t))return t;if(t&&t.valueOf&&is(t.valueOf()))return ae.fromJSDate(t);if(t&&typeof t=="object")return ae.fromObject(t);throw new Kt(`Unknown datetime argument: ${t}, of type ${typeof t}`)}const ry="1400px";_.div`
  width: 100%;
  max-width: ${ry};
  height: 180px;
  background: url('/images/PORTADAS/Banner TNT.jpg') center/cover no-repeat;
  display: block;
  margin: 0 auto 24px auto;
  border-radius: 18px 18px 0 0;
  overflow: hidden;
`;const yw=_.div`
  background: #181a1b;
  border-radius: 20px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.10);
  overflow: hidden;
  max-width: ${ry};
  margin: 0 auto;
  border: 1px solid rgba(0,188,212,0.18);
  @media (max-width: 600px) { display: none; }
`,eO=_.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  background: #181a1b;
  border-bottom: 1px solid #23272a;
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`,tO=_.div`
  padding: 18px 0 12px 0;
  text-align: center;
  font-size: 1.08rem;
  font-weight: 600;
  color: ${t=>t.$sunday?"#e53935":"#f5f6fa"};
  letter-spacing: 0.5px;
  background: #181a1b;
`,nO=_.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  min-height: 500px;
  background: #181a1b;
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`,rO=_.div`
  border-right: 1px solid #23272a;
  min-height: 500px;
  padding: 0 8px;
  &:last-child {
    border-right: none;
  }
  @media (max-width: 900px) {
    min-height: 350px;
    padding: 0 4px;
  }
`,iO=_.div`
  padding: 18px 0 0 0;
`,sO=_.div`
  margin-bottom: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 600px) {
    margin-bottom: 12px;
  }
`,Sp=_.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #23272a;
  border: 2px solid #23272a;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 6px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 600px) {
    width: 36px;
    height: 36px;
  }
`,oO=_.div`
  background: #23272a;
  border-radius: 6px;
  padding: 6px 10px;
  color: #f5f6fa;
  font-size: 0.97rem;
  text-align: center;
  width: 100%;
`,vw=_.div`
  color: #00bcd4;
  font-size: 13px;
  font-weight: 700;
  margin-bottom: 2px;
`,xw=_.div`
  font-size: 14px;
  font-weight: 600;
  color: #f5f6fa;
`,aO=_.div`
  width: 100%;
  max-width: ${ry};
  margin: 0 auto 12px auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
`,lO=_.button`
  background: #181a1b;
  color: #00bcd4;
  border: 1px solid #23272a;
  padding: 6px 18px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  height: 38px;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: background 0.2s, color 0.2s, border 0.2s;
  &:hover {
    background: #23272a;
    color: #fff;
    border: 1px solid #00bcd4;
  }
  @media (max-width: 600px) {
    display: none;
  }
`,Po=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],Tp={"Abi Belilty":"abi-belity","Franklin Araujo":"frank-araujo","Richard Hall Pops":"richard-hall-pops","Nikki Sutherland":"nikki-sutherland","Ana Paulina":"paulina","Stephon Royal":"stephon-royal","Raquel Curtis":"raquel-curtis","Mauricio Gaytán":"maur-gaytan","Angie Toney":"angie-toney","Jorge Damelines":"jorge-damelines","Sebastian Garcia":"seb-garcia","Javier Perez":"javier-perez","Raphael Msica":"raphael-msica","Andre Tyson":"andre-tyson","Arin Long":"arin-long","Corey Williams":"corey-williams"},si={Sunday:[{time:"21:00",educator:"Andre Tyson",title:"",lang:"English"},{time:"20:00",educator:"Sebastian Garcia",title:"",lang:"Español"}],Monday:[{time:"14:00",educator:"Ana Paulina",title:"",lang:"English"},{time:"11:00",educator:"Franklin Araujo",title:"",lang:"Español"},{time:"20:00",educator:"Mauricio Gaytán",title:"",lang:"Español"}],Tuesday:[{time:"14:00",educator:"Ana Paulina",title:"",lang:"English"},{time:"17:00",educator:"Nikki Sutherland",title:"",lang:"English"},{time:"19:00",educator:"Angie Toney",title:"",lang:"English"},{time:"20:00",educator:"Arin Long",title:"",lang:"English"},{time:"23:00",educator:"Richard Hall Pops",title:"",lang:"English"},{time:"09:00",educator:"Javier Perez",title:"",lang:"Español"},{time:"10:00",educator:"Jorge Damelines",title:"",lang:"Español"},{time:"20:00",educator:"Sebastian Garcia",title:"",lang:"Español"}],Wednesday:[{time:"10:00",educator:"Richard Hall Pops",title:"",lang:"English"},{time:"16:00",educator:"Raphael Msica",title:"",lang:"Français"},{time:"19:00",educator:"Arin Long",title:"",lang:"English"},{time:"20:00",educator:"Corey Williams",title:"",lang:"English"},{time:"21:00",educator:"Stephon Royal",title:"",lang:"English"},{time:"10:00",educator:"Abi Belilty",title:"",lang:"Español"},{time:"20:00",educator:"Mauricio Gaytán",title:"",lang:"Español"}],Thursday:[{time:"17:00",educator:"Nikki Sutherland",title:"",lang:"English"},{time:"19:00",educator:"Raquel Curtis",title:"",lang:"English"},{time:"20:00",educator:"Andre Tyson",title:"",lang:"English"},{time:"23:00",educator:"Richard Hall Pops",title:"",lang:"English"},{time:"09:00",educator:"Javier Perez",title:"",lang:"Español"},{time:"11:00",educator:"Franklin Araujo",title:"",lang:"Español"},{time:"22:00",educator:"Abi Belilty",title:"",lang:"Español"}],Friday:[{time:"16:00",educator:"Raphael Msica",title:"",lang:"Français"}],Saturday:[]};function Ip(t){for(const e in Dr){const n=Dr[e].find(r=>r.id===t);if(n)return n}return null}const YT=[{label:"New York (EST)",value:"America/New_York"},{label:"London",value:"Europe/London"},{label:"Madrid",value:"Europe/Madrid"},{label:"Buenos Aires",value:"America/Argentina/Buenos_Aires"},{label:"Mexico City",value:"America/Mexico_City"},{label:"Los Angeles",value:"America/Los_Angeles"},{label:"Tokyo",value:"Asia/Tokyo"}],uO=YT.map(t=>t.value),cO=_.div`
  display: none;
  @media (max-width: 600px) {
    display: block;
    padding: 0 6px 24px 6px;
  }
`,dO=_.div`
  background: #181a1b;
  border-radius: 14px;
  margin-bottom: 18px;
  box-shadow: 0 1px 6px rgba(0,0,0,0.10);
  padding: 10px 10px 6px 10px;
`,hO=_.h3`
  color: #00bcd4;
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0 0 10px 0;
  letter-spacing: 0.5px;
`,fO=_.div`
  background: #23272a;
  border-radius: 8px;
  margin-bottom: 10px;
  padding: 8px 10px;
  display: flex;
  align-items: center;
  gap: 10px;
`,pO=_.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,mO=_.div`
  color: #00bcd4;
  font-size: 13px;
  font-weight: 700;
`,gO=_.div`
  font-size: 14px;
  font-weight: 600;
  color: #f5f6fa;
`,yO=_.div`
  font-size: 13px;
  color: #00fff7;
`,vO=_.div`
  font-size: 12px;
  color: #b0b0b0;
`,xO=()=>{const{t,i18n:e}=ft(),[n,r]=ve.useState("America/New_York"),[i,s]=ve.useState(!1),[o,a]=ve.useState("all"),[l,c]=ve.useState(0);ve.useEffect(()=>{c(x=>x+1)},[e.language]);const h=[{value:"all",label:t("calendar.filterAll")},{value:"Español",label:t("calendar.filterSpanish")},{value:"English",label:t("calendar.filterEnglish")},{value:"Français",label:t("calendar.filterFrench")}],f=x=>{try{const[v,E]=x.split(":"),P=ae.fromObject({year:2024,month:1,day:1,hour:parseInt(v,10),minute:parseInt(E,10)},{zone:"America/New_York"}),j=uO.includes(n)?n:"America/New_York";return P.setZone(j).toFormat("h:mm a")}catch(v){return console.error("Error converting time:",v),x}},p=e.language.startsWith("es")?"/images/PORTADAS/Banner TNT.jpg":"/images/Download our new TNT app.jpg",g=[];Object.values(si).forEach(x=>{x.forEach(v=>{v.educator!=="Jeff Beausoleil"&&!g.includes(v.educator)&&g.push(v.educator)})});const w=x=>o==="all"?x:x.filter(v=>v.lang===o),k=()=>d.jsxs(yw,{style:{overflowX:"auto"},children:[d.jsx("div",{style:{width:"100%",overflowX:"auto"},children:d.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",minWidth:"900px",fontSize:"1rem"},children:[d.jsx("thead",{children:d.jsxs("tr",{children:[d.jsx("th",{style:{background:"#181a1b",color:"#00bcd4",padding:"14px",fontWeight:700,borderBottom:"1px solid rgba(0,188,212,0.10)",fontSize:"1rem"},children:"Educador"}),Po.map(x=>d.jsx("th",{style:{background:"#181a1b",color:"#f5f6fa",padding:"14px",fontWeight:600,borderBottom:"1px solid rgba(0,188,212,0.10)",fontSize:"1rem"},children:t(`calendar.${x.toLowerCase()}`)},x))]})}),d.jsx("tbody",{children:g.map(x=>{const v=Tp[x],E=Ip(v);return Po.some(j=>w(si[j]||[]).some(M=>M.educator===x))?d.jsxs("tr",{children:[d.jsx("td",{style:{background:"#23272a",color:"#fff",padding:"12px",textAlign:"center",minWidth:120,borderBottom:"1px solid rgba(0,188,212,0.10)",fontSize:"1rem"},children:d.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",cursor:"pointer"},onClick:()=>window.location.href=`/educadores/${v}`,children:[d.jsx(Sp,{children:d.jsx("img",{src:E!=null&&E.profileImageFilename?`/images/perfil/${E.profileImageFilename}`:(E==null?void 0:E.img)||"/images/placeholder.jpg",alt:(E==null?void 0:E.name)||x,onError:j=>{j.target.onerror=null,j.target.src="/images/placeholder.jpg"}})}),d.jsx("div",{style:{fontWeight:600,fontSize:15,marginTop:2},children:x})]})}),Po.map(j=>{const M=w(si[j]||[]).find(b=>b.educator===x);return d.jsx("td",{style:{background:"#23272a",color:"#fff",padding:"12px",minWidth:90,textAlign:"center",borderBottom:"1px solid rgba(0,188,212,0.10)",fontSize:"1rem"},children:M?d.jsxs("div",{children:[d.jsx(vw,{children:f(M.time)}),d.jsx(xw,{children:M.title}),d.jsx("div",{style:{fontSize:13,color:"#00fff7",marginTop:2},children:M.lang})]}):null},j)})]},x):null})})]})}),d.jsx("style",{children:`
        @media (max-width: 900px) {
          table { font-size: 0.92rem; }
          th, td { padding: 8px !important; }
        }
        @media (max-width: 600px) {
          table { font-size: 0.85rem; }
          th, td { padding: 5px !important; }
        }
      `})]}),C=()=>d.jsx(cO,{children:Po.map(x=>d.jsxs(dO,{children:[d.jsx(hO,{children:t(`calendar.${x.toLowerCase()}`)}),w(si[x])&&w(si[x]).length>0?w(si[x]).map((v,E)=>{if(v.educator==="Jeff Beausoleil")return null;const P=Tp[v.educator],j=Ip(P);return d.jsxs(fO,{onClick:()=>window.location.href=`/educadores/${P}`,style:{cursor:"pointer"},children:[d.jsx(Sp,{style:{width:32,height:32,minWidth:32},children:d.jsx("img",{src:j!=null&&j.profileImageFilename?`/images/perfil/${j.profileImageFilename}`:(j==null?void 0:j.img)||"/images/placeholder.jpg",alt:(j==null?void 0:j.name)||v.educator,onError:M=>{M.target.onerror=null,M.target.src="/images/placeholder.jpg"}})}),d.jsxs(pO,{children:[d.jsx(mO,{children:f(v.time)}),d.jsx(gO,{children:v.title}),d.jsx(yO,{children:v.educator}),d.jsx(vO,{children:v.lang})]})]},E)}):d.jsx("div",{style:{color:"#888",fontSize:"0.95rem",marginBottom:8},children:t("calendar.noEvents","No hay eventos programados para este día.")})]},x))});return d.jsxs(d.Fragment,{children:[d.jsx("div",{style:{width:"100vw",minWidth:"100%",height:240,background:`url('${p}') center/cover no-repeat`,display:"block",margin:"0 0 24px 0",borderRadius:0,overflow:"hidden",position:"relative",left:"50%",right:"50%",transform:"translateX(-50%)",maxWidth:"100vw"}}),d.jsxs(aO,{children:[d.jsx("select",{value:o,onChange:x=>a(x.target.value),style:{padding:"6px 12px",borderRadius:8,border:"1px solid #23272a",background:"#181a1b",color:"#fff",fontWeight:500,height:38,marginRight:12},children:h.map(x=>d.jsx("option",{value:x.value,children:x.label},x.value))}),d.jsx("span",{style:{color:"#00bcd4",fontWeight:600,marginRight:8},children:"Timezone:"}),d.jsx("select",{value:n,onChange:x=>r(x.target.value),style:{padding:"6px 12px",borderRadius:8,border:"1px solid #23272a",background:"#181a1b",color:"#fff",fontWeight:500,height:38},children:YT.map(x=>d.jsx("option",{value:x.value,children:x.label},x.value))}),d.jsx(lO,{onClick:()=>s(x=>!x),children:i?t("calendar.traditionalView","Traditional view"):t("calendar.horizontalView","Educator x Days view")})]}),i?k():d.jsxs(d.Fragment,{children:[d.jsxs(yw,{className:"hide-on-mobile",children:[d.jsx(eO,{children:Po.map((x,v)=>d.jsx(tO,{$sunday:x==="Sunday",children:t(`calendar.${x.toLowerCase()}`)},x))}),d.jsx(nO,{children:Po.map(x=>d.jsx(rO,{children:d.jsx(iO,{children:w(si[x])&&w(si[x]).length>0?w(si[x]).map((v,E)=>{if(v.educator==="Jeff Beausoleil")return null;const P=Tp[v.educator],j=Ip(P);return j?d.jsxs(sO,{onClick:()=>window.location.href=`/educadores/${P}`,style:{cursor:"pointer"},children:[d.jsx(Sp,{children:d.jsx("img",{src:j.profileImageFilename?`/images/perfil/${j.profileImageFilename}`:j.img||"/images/placeholder.jpg",alt:j.name,onError:M=>{M.target.onerror=null,M.target.src="/images/placeholder.jpg"}})}),d.jsxs(oO,{children:[d.jsx(vw,{children:f(v.time)}),d.jsx(xw,{children:v.title}),d.jsx("div",{style:{fontSize:"13px",color:"#00fff7",marginTop:2},children:v.educator}),d.jsx("div",{style:{fontSize:"12px",color:"#b0b0b0",marginTop:2},children:v.lang})]})]},E):null}):null})},x))})]}),C()]})]})},wO=_.div`
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
  flex-wrap: wrap; // Para que bajen en pantallas pequeñas
  padding-top: 15px;
`,_O=_.button`
  padding: 8px 20px;
  border-radius: 20px;
  border: 1px solid transparent;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: background-color 0.2s, color 0.2s, border-color 0.2s;
  background-color: ${t=>t.active?"rgb(0,150,136)":"rgb(24,24,24)"};
  color: ${t=>t.active?"white":"rgb(200,200,200)"};
  border-color: ${t=>t.active?"rgb(0,150,136)":"rgb(40,40,40)"};

  &:hover {
    background-color: ${t=>t.active?"rgb(0,200,180)":"rgb(40,40,40)"};
    border-color: ${t=>t.active?"rgb(0,200,180)":"rgb(60,60,60)"};
    color: white;
  }
`,JT=({tabs:t,activeTab:e,onTabClick:n})=>d.jsx(wO,{children:t.map(r=>d.jsx(_O,{active:r.key===e,onClick:()=>n(r.key),children:r.label},r.key))}),bO=_(cr)`
  display: block;
  text-decoration: none;
  color: inherit;
`,EO=_.div`
  background: rgb(24,24,24);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  position: relative;
  padding-bottom: 16px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 150, 136, 0.2);
  }
`,SO=_.div`
  position: relative;
`,TO=_.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
  display: block;
  border-radius: 10px 10px 0 0;
`,IO=_.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: rgb(24,24,24);
  border: 3px solid rgb(24,24,24);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  position: absolute;
  bottom: -35px;
  right: 16px;
  z-index: 2;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,kO=_.div`
  padding: 16px;
  padding-top: 45px;
`,CO=_.h3`
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 4px 0;
  padding-right: 40px;
  color: rgb(255,255,255);
`,AO=_.p`
  font-size: 13px;
  color: rgb(158,158,158);
  margin: 0 0 12px 0;
`,RO=_.div`
  margin-top: 8px;
`,PO=_.div`
  display: inline-flex; 
  align-items: center;
  gap: 6px;
  padding: 5px 10px;
  border-radius: 6px;
  font-size: 11px;
  font-weight: 600;
  color: rgb(255,255,255);
  background-color: rgb(0,150,136);
  text-transform: uppercase;
`,NO=({educator:t})=>{const{t:e}=ft(),n=t.profileImageFilename?`/images/perfil/${t.profileImageFilename}`:t.img,r="/images/Banner 2.jpg";let i="";return t.category?t.category==="forex"?i=e("categories.forex"):t.category==="crypto"?i=e("categories.crypto"):t.category==="financial-literacy"?i=e("categories.financial_literacy"):t.category==="marketing-digital"?i=e("categories.marketing_digital"):i=t.category:i=t.title||"",d.jsx(bO,{to:`/educadores/${t.id}`,children:d.jsxs(EO,{children:[d.jsxs(SO,{children:[d.jsx(TO,{src:r,alt:"NVU Banner"}),d.jsx(IO,{children:d.jsx("img",{src:n,alt:`${t.name} avatar`,onError:s=>{s.target.onerror=null,s.target.src="/images/placeholder.jpg"}})})]}),d.jsxs(kO,{children:[d.jsx(CO,{children:t.name}),d.jsx(AO,{children:i}),d.jsx(RO,{children:d.jsx(PO,{children:t.language||"N/A"})})]})]})})},DO=_.div`
  padding: 24px;
  background-color: rgb(0,0,0);
`,OO=_.h2`
  font-size: 24px;
  color: rgb(255,255,255);
  margin-bottom: 24px;
`,jO=_.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 16px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,LO=_.p`
  color: rgb(158,158,158);
  text-align: center;
  padding: 20px;
  font-size: 16px;
`,MO=({educators:t,title:e})=>{const{t:n}=ft();return d.jsxs(DO,{children:[e&&d.jsx(OO,{children:e}),d.jsx(jO,{children:t&&t.length>0?t.map(r=>d.jsx(NO,{educator:r},r.id)):d.jsx(LO,{children:n("educators.noEducatorsAvailable")})})]})},VO=_.div`
  background-color: rgb(0,0,0);
`,FO=_.h1`
  font-size: 28px;
  color: rgb(255,255,255);
  margin: 0;
  padding: 24px 24px 0 24px;
`,$O=_.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  margin-bottom: 24px;
  flex-wrap: wrap;
`,zO=_.div`
  margin-left: 16px;
`,UO=_.select`
  padding: 8px 16px;
  border-radius: 6px;
  border: 1.5px solid #009688;
  background-color: #181818;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
  box-shadow: 0 2px 8px rgba(0,150,136,0.08);

  &:focus {
    border-color: #00bfae;
    box-shadow: 0 0 0 2px rgba(0,191,174,0.15);
  }

  option {
    background: #23272a;
    color: #fff;
  }
`,ww=["forex","crypto","financial-literacy","marketing-digital"],BO=()=>{const{t}=ft(),[e,n]=D.useState(ww[0]),[r,i]=D.useState("all"),s=ww.map(c=>({key:c,label:t(`categories.${c.replace("-","_")}`)})),o=Dr[e]||[],a=r==="all"?o:o.filter(c=>c.language===r),l=e;return d.jsxs(VO,{children:[d.jsx(FO,{children:t("educators.pageTitle")}),d.jsxs($O,{children:[d.jsx(JT,{tabs:s,activeTab:e,onTabClick:n}),d.jsx(zO,{children:d.jsxs(UO,{value:r,onChange:c=>i(c.target.value),children:[d.jsx("option",{value:"all",children:t("filterAllLanguages","Todos los idiomas")}),d.jsx("option",{value:"es",children:t("academy.tabbar.es","Español")}),d.jsx("option",{value:"en",children:t("academy.tabbar.en","Inglés")}),d.jsx("option",{value:"fr",children:t("academy.tabbar.fr","Francés")})]})})]}),d.jsx(MO,{educators:a.map(c=>({...c,category:l}))})]})},HO=_.div`
  /* Estilos del contenedor si son necesarios */
  padding-bottom: 30px; 
`;_.div`
  padding: 0 24px 16px 24px; // Añadir padding lateral
  margin-bottom: 16px;
  border-bottom: 1px solid #e9ecef;
`;_(cr)`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: #666;
    text-decoration: none;
    font-size: 14px;
    &:hover { color: #333; }
`;const _w=_.div`
    padding: 20px 24px 0 24px; // 20px arriba, 24px laterales, 0 abajo
`,WO=_.div`
  position: relative;
  padding-bottom: 56.25%; // 16:9
  height: 0;
  overflow: hidden;
  background-color: #000;
  border-radius: 8px;
  margin-bottom: 24px; // Espacio antes del link a favoritas

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;_.div`
    background-color: white;
    padding: 24px;
    margin-top: 24px; 
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
`;const qO=_.h1`
    font-size: 24px;
    margin: 0 0 8px 0; 
`;_.p`
    font-size: 16px;
    color: #666;
    margin: 0; 
`;const GO=_(cr)`
  display: block;
  margin-bottom: 24px;
  padding: 24px 20px;
  background: rgb(0,150,136); /* Cyan principal */
  color: rgb(255,255,255);
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 16px rgba(0,150,136,0.15);
  text-decoration: none;
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 0.5px;
  transition: background 0.2s, color 0.2s, box-shadow 0.2s, transform 0.1s;

  &:hover {
    background: rgb(0,200,180);
    color: rgb(0,0,0);
    box-shadow: 0 6px 20px rgba(0,200,180,0.18);
    transform: translateY(-2px);
  }
`,KO=_.h2`
  font-size: 22px;
  margin: 0;
  font-weight: 700;
  color: inherit;
`,QO=_.div`
  display: flex;
  gap: 24px;
  background-color: rgb(24,24,24);
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.12);
`,YO=_.div`
  flex: 0 0 auto; 
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  background-color: rgb(18,18,18);
  padding: 20px 15px;
  border-radius: 8px;
`,kp=_.a`
  color: rgb(0,150,136); 
  font-size: 20px;
  transition: color 0.2s ease;

  &:hover {
    color: rgb(0,200,180); 
  }
`,JO=_.div`
  flex: 1; 
`,ZO=_.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  gap: 12px;
`,XO=_.div`
  display: inline-flex; 
  align-items: center;
  gap: 5px;
  padding: 5px 10px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
  color: rgb(255,255,255);
  background-color: rgb(0,150,136);
  border: none;
  text-transform: uppercase;
`,ej=_.p`
  font-size: 14px;
  color: rgb(158,158,158);
  line-height: 1.6;
  margin: 0;
  white-space: pre-wrap;
`,tj=t=>{for(const e in Dr){const n=Dr[e].find(r=>r.id===t);if(n)return n}return null},nj=()=>{var s,o,a;const{educatorId:t}=oS(),{t:e}=ft(),n=tj(t);if(!n)return d.jsx("div",{children:d.jsx(_w,{children:d.jsx("p",{children:e("educatorDetail.notFound")})})});const r=n.vimeoLiveEmbed||"https://player.vimeo.com/video/821637631",i=`educatorsBio.${n.id}`;return d.jsx(HO,{children:d.jsxs(_w,{children:[d.jsx(WO,{children:d.jsx("iframe",{src:r,frameBorder:"0",allow:"autoplay; fullscreen",allowFullScreen:!0,title:"Live Stream"})}),d.jsx(GO,{to:`/educadores/${t}/sesiones`,children:d.jsx(KO,{children:e("educatorDetail.favoriteSessions")})}),d.jsxs(QO,{children:[d.jsxs(YO,{children:[((s=n.socialLinks)==null?void 0:s.instagram)&&n.socialLinks.instagram!=="#"&&d.jsx(kp,{href:n.socialLinks.instagram,target:"_blank",rel:"noopener noreferrer",children:d.jsx(FS,{})}),((o=n.socialLinks)==null?void 0:o.linkedin)&&n.socialLinks.linkedin!=="#"&&d.jsx(kp,{href:n.socialLinks.linkedin,target:"_blank",rel:"noopener noreferrer",children:d.jsx(XR,{})}),((a=n.socialLinks)==null?void 0:a.facebook)&&n.socialLinks.facebook!=="#"&&d.jsx(kp,{href:n.socialLinks.facebook,target:"_blank",rel:"noopener noreferrer",children:d.jsx(ZR,{})}),(!n.socialLinks||n.socialLinks.instagram==="#"&&n.socialLinks.linkedin==="#"&&n.socialLinks.facebook==="#")&&d.jsx("span",{style:{fontSize:"12px",color:"#6c757d"},children:"N/A"})]}),d.jsxs(JO,{children:[d.jsxs(ZO,{children:[d.jsx(qO,{children:n.name}),d.jsx(XO,{children:n.language||"N/A"})]}),d.jsx(ej,{children:e(i,n.description||e("common.bioNotAvailable"))})]})]})]})})},bw=_.div`
  padding-left: 0;
  padding-right: 0;
  padding-bottom: 30px;
`,rj=_.img`
  width: 100%;
  height: 360px;
  object-fit: cover;
  display: block;
  margin-bottom: -20px;
  position: relative; 
  z-index: 0;
  @media (max-width: 600px) {
    height: 90px;
  }
`,ij=_.div`
    padding: 0;
    position: relative;
    z-index: 1; 
`,sj=_.div`
  display: flex;
  gap: 24px;
  background-color: rgb(24,24,24);
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.12);
  margin: 0 24px 32px 24px;
`;_.div`
  flex: 0 0 auto; 
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  background-color: rgb(18,18,18);
  padding: 20px 15px;
  border-radius: 8px;
`;_.a`
  color: rgb(0,150,136); 
  font-size: 20px;
  transition: color 0.2s ease;
  &:hover { color: rgb(0,200,180); }
`;const oj=_.div`
  flex: 1; 
`,aj=_.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  gap: 12px;
`,lj=_.h2`
  font-size: 22px;
  font-weight: 600;
  margin: 0;
  color: rgb(255,255,255);
`,uj=_.div`
  display: inline-flex; 
  align-items: center;
  gap: 5px;
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
  color: rgb(255,255,255);
  background-color: ${t=>t.$isLive?"rgb(0,150,136)":"rgb(48,48,48)"};
`,cj=_.p`
  font-size: 14px;
  color: rgb(158,158,158);
  line-height: 1.6;
  margin: 0;
`,dj=_.div`
  padding: 0 24px;
`,hj=_.h2`
  font-size: 20px;
  font-weight: 600;
  color: rgb(0,150,136);
  margin-bottom: 20px;
`,fj=_.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 20px;
`,pj=_.div`
  background-color: rgb(24,24,24);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,150,136,0.08);
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  &:hover {
      transform: translateY(-4px);
      box-shadow: 0 4px 16px rgba(0, 150, 136, 0.18);
  }
`,mj=_.img`
  width: 100%;
  height: 140px;
  object-fit: cover;
  display: block;
`,gj=_.div`
  padding: 12px;
`,yj=_.h3`
  font-size: 15px;
  font-weight: 600;
  margin: 0 0 6px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: rgb(255,255,255);
`,vj=_.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: rgb(158,158,158);
`,xj=_.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
`,wj=_.p`
  color: rgb(158,158,158);
  text-align: center;
  padding: 20px;
`,Ew=_.p`
  color: red;
  text-align: center;
  padding: 20px;
`,_j=_.p`
  color: rgb(158,158,158);
  text-align: center;
  padding: 20px;
`,bj=t=>{for(const e in Dr){const n=Dr[e].find(r=>r.id===t);if(n)return n}return null},Ej=()=>{const{educatorId:t}=oS(),e=bj(t),[n,r]=D.useState([]),[i,s]=D.useState(null),[o,a]=D.useState(!0),[l,c]=D.useState(null);if(e&&e.name,D.useEffect(()=>{if(!e||!e.vimeoUserId||!e.vimeoFolderId){console.log("Educador no encontrado o sin configuración de Vimeo (userId/folderId)."),c("Este educador no tiene sesiones configuradas."),a(!1);return}(async()=>{a(!0),c(null);const k=e.vimeoUserId,C=e.vimeoFolderId,x=`/.netlify/functions/vimeo-sessions?userId=${k}&folderId=${C}`;try{console.log(`Fetching sessions from backend: ${x}`);const v=await fetch(x);if(!v.ok){let P="Error desconocido del servidor";try{const j=await v.json();P=j.details||j.error||`Status: ${v.status}`}catch{P=`Status: ${v.status}`}throw new Error(`Error al cargar sesiones: ${P}`)}const E=await v.json();r(E),E.length}catch(v){console.error("Error fetching sessions from backend:",v),c(v.message||"No se pudieron cargar las sesiones.")}finally{a(!1)}})()},[e]),!e&&!o)return d.jsxs(bw,{children:[d.jsx(Ew,{children:"Educador no encontrado."}),d.jsx(cr,{to:"/educadores",children:"Volver"})]});const h=e.status==="En vivo",f=n,p=e.coverImageFilename?`/images/PORTADAS/${e.coverImageFilename}`:"/images/banner.png",g=w=>{console.error("Error loading banner image:",w),console.log("Attempted to load:",p),w.target.src="/images/banner.png"};return D.useEffect(()=>{if(e.coverImageFilename){const w=new Image;w.src=p,w.onload=()=>{console.log("Banner image loaded successfully:",p)},w.onerror=()=>{console.error("Failed to load banner image:",p)}}},[e.coverImageFilename]),d.jsxs(bw,{children:[d.jsx(rj,{src:p,alt:`${e.name} banner`,onError:g,crossOrigin:"anonymous"}),d.jsxs(ij,{children:[d.jsx(sj,{children:d.jsxs(oj,{children:[d.jsxs(aj,{children:[d.jsx(lj,{children:e.name}),d.jsxs(uj,{$isLive:h,children:[h?d.jsx(m3,{}):d.jsx(f3,{}),e.status]})]}),d.jsx(cj,{children:e.description||"Biografía no disponible."})]})}),d.jsxs(dj,{children:[d.jsx(hj,{children:"Sesiones"}),i&&d.jsx("div",{style:{marginBottom:"30px",position:"relative",paddingBottom:"56.25%",height:0,overflow:"hidden",backgroundColor:"#000",borderRadius:"8px"},children:d.jsx("iframe",{src:`https://player.vimeo.com/video/${i}?autoplay=1`,frameBorder:"0",allow:"autoplay; fullscreen; picture-in-picture",allowFullScreen:!0,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"},title:"Vimeo video player"})}),o&&d.jsx(wj,{children:"Cargando sesiones..."}),l&&l!=="Este educador no tiene sesiones configuradas."&&d.jsx(Ew,{children:l}),!o&&d.jsx(fj,{children:f.length>0?f.map(w=>d.jsxs(pj,{onClick:()=>s(w.vimeoId),children:[d.jsx(mj,{src:w.thumbnailUrl||`https://vumbnail.com/${w.vimeoId}.jpg`,alt:w.title}),d.jsxs(gj,{children:[d.jsx(yj,{children:w.title||"Video sin título"}),d.jsxs(vj,{children:[d.jsx(xj,{src:e.profileImageFilename?`/images/perfil/${e.profileImageFilename}`:"/images/placeholder.jpg",alt:e.name}),e.name," NVU"]})]})]},w.id)):d.jsx(_j,{children:l==="Este educador no tiene sesiones configuradas."?l:"No hay sesiones disponibles."})})]})]})]})},Sw={es:{name:"Español",educatorId:"abi-belilty",folderId:"23622182"},en:{name:"Inglés",educatorId:"richard-p-fx",folderId:"23621754"},fr:{name:"Francés",educatorId:"jeff-beausoleil",folderId:"23621558"}},Sj="221550365",Tj=_.div`
  padding: 24px;
  background-color: rgb(0,0,0);
`,Ij=_.h1`
  font-size: 28px;
  margin-bottom: 0;
  color: rgb(255,255,255);
  font-weight: 600;
`,kj=_.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
`,Cj=_.div`
  background: rgb(24,24,24);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  transition: transform 0.2s, box-shadow 0.2s;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 16px rgba(0, 150, 136, 0.09);
  }
`,Aj=_.div`
  position: relative;
  height: 160px;
`,Rj=_.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,Pj=_.div`
  padding: 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`,Nj=_.h3`
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  color: rgb(255,255,255) !important;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;  
  overflow: hidden;
  text-overflow: ellipsis;
  min-height: 48px;
`,Dj=_.p` color: #666; text-align: center; padding: 20px; `,Oj=_.p` color: red; text-align: center; padding: 20px; `,jj=_.p` color: #666; text-align: center; padding: 20px; `,Lj=()=>{var g;const{t}=ft(),[e,n]=D.useState("es"),[r,i]=D.useState([]),[s,o]=D.useState(!0),[a,l]=D.useState(null),[c,h]=D.useState(null),f=Sw[e],p=Object.keys(Sw).map(w=>({key:w,label:t(`academy.tabbar.${w}`)}));return D.useEffect(()=>{if(!f)return;(async()=>{o(!0),l(null),h(null),i([]);const k=f.folderId,C=`/.netlify/functions/vimeo-sessions?userId=${Sj}&folderId=${k}`;try{console.log(`Fetching academy sessions from: ${C}`);const x=await fetch(C);if(!x.ok){let E="Error desconocido";try{const P=await x.json();E=P.details||P.error||`Status: ${x.status}`}catch{E=`Status: ${x.status}`}throw new Error(`Error al cargar sesiones de academia: ${E}`)}const v=await x.json();i(v.reverse())}catch(x){console.error("Error fetching academy sessions:",x),l(x.message||"No se pudieron cargar las sesiones.")}finally{o(!1)}})()},[e,f]),d.jsxs(Tj,{children:[d.jsx(Ij,{children:t("academy.pageTitle","Academia")}),d.jsx(JT,{tabs:p,activeTab:e,onTabClick:n}),c&&d.jsx("div",{style:{marginBottom:"30px",position:"relative",paddingBottom:"56.25%",height:0,overflow:"hidden",backgroundColor:"#000",borderRadius:"8px"},children:d.jsx("iframe",{src:`https://player.vimeo.com/video/${c}?autoplay=1`,frameBorder:"0",allow:"autoplay; fullscreen; picture-in-picture",allowFullScreen:!0,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"},title:"Vimeo video player"})}),c&&d.jsx("div",{style:{marginBottom:"24px",textAlign:"center"},children:d.jsx("h2",{style:{color:"white",fontSize:"22px",fontWeight:600},children:((g=r.find(w=>w.vimeoId===c))==null?void 0:g.title)||t("academy.selectedClass","Clase seleccionada")})}),s&&d.jsx(Dj,{children:t("academy.loading","Cargando sesiones...")}),a&&d.jsx(Oj,{children:t("academy.error",a||"No se pudieron cargar las sesiones.")}),!s&&!a&&d.jsx(kj,{children:r.length>0?r.map(w=>d.jsxs(Cj,{onClick:()=>h(w.vimeoId),children:[d.jsx(Aj,{children:d.jsx(Rj,{src:w.thumbnailUrl||"/images/placeholder_course.jpg",alt:w.title})}),d.jsx(Pj,{children:d.jsx(Nj,{children:w.title||t("academy.noTitle","Video sin título")})})]},w.vimeoId||w.id)):d.jsx(jj,{children:t("academy.noSessions","No hay sesiones disponibles para este idioma.")})})]})},Mj=()=>{};var Tw={};/**
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
 */const ZT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Vj=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},XT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,h=s>>2,f=(s&3)<<4|a>>4;let p=(a&15)<<2|c>>6,g=c&63;l||(g=64,o||(p=64)),r.push(n[h],n[f],n[p],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ZT(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Vj(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw new Fj;const p=s<<2|a>>4;if(r.push(p),c!==64){const g=a<<4&240|c>>2;if(r.push(g),f!==64){const w=c<<6&192|f;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Fj extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $j=function(t){const e=ZT(t);return XT.encodeByteArray(e,!0)},nh=function(t){return $j(t).replace(/\./g,"")},zj=function(t){try{return XT.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Uj(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Bj=()=>Uj().__FIREBASE_DEFAULTS__,Hj=()=>{if(typeof process>"u"||typeof Tw>"u")return;const t=Tw.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Wj=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&zj(t[1]);return e&&JSON.parse(e)},iy=()=>{try{return Mj()||Bj()||Hj()||Wj()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},qj=t=>{var e,n;return(n=(e=iy())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},eI=t=>{const e=qj(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},tI=()=>{var t;return(t=iy())===null||t===void 0?void 0:t.config};/**
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
 */class Gj{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function Yh(t){return t.endsWith(".cloudworkstations.dev")}async function nI(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function rI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[nh(JSON.stringify(n)),nh(JSON.stringify(o)),""].join(".")}const Hl={};function Kj(){const t={prod:[],emulator:[]};for(const e of Object.keys(Hl))Hl[e]?t.emulator.push(e):t.prod.push(e);return t}function Qj(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Iw=!1;function Jh(t,e){if(typeof window>"u"||typeof document>"u"||!Yh(window.location.host)||Hl[t]===e||Hl[t]||Iw)return;Hl[t]=e;function n(p){return`__firebase__banner__${p}`}const r="__firebase__banner",s=Kj().prod.length>0;function o(){const p=document.getElementById(r);p&&p.remove()}function a(p){p.style.display="flex",p.style.background="#7faaf0",p.style.position="fixed",p.style.bottom="5px",p.style.left="5px",p.style.padding=".5em",p.style.borderRadius="5px",p.style.alignItems="center"}function l(p,g){p.setAttribute("width","24"),p.setAttribute("id",g),p.setAttribute("height","24"),p.setAttribute("viewBox","0 0 24 24"),p.setAttribute("fill","none"),p.style.marginLeft="-6px"}function c(){const p=document.createElement("span");return p.style.cursor="pointer",p.style.marginLeft="16px",p.style.fontSize="24px",p.innerHTML=" &times;",p.onclick=()=>{Iw=!0,o()},p}function h(p,g){p.setAttribute("id",g),p.innerText="Learn more",p.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",p.setAttribute("target","__blank"),p.style.paddingLeft="5px",p.style.textDecoration="underline"}function f(){const p=Qj(r),g=n("text"),w=document.getElementById(g)||document.createElement("span"),k=n("learnmore"),C=document.getElementById(k)||document.createElement("a"),x=n("preprendIcon"),v=document.getElementById(x)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(p.created){const E=p.element;a(E),h(C,k);const P=c();l(v,x),E.append(v,w,C,P),document.body.appendChild(E)}s?(w.innerText="Preview backend disconnected.",v.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(v.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,w.innerText="Preview backend running in this workspace."),w.setAttribute("id",g)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",f):f()}/**
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
 */function Yj(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Jj(){var t;const e=(t=iy())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Zj(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Xj(){return!Jj()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function iI(){try{return typeof indexedDB=="object"}catch{return!1}}function sI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function eL(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const tL="FirebaseError";class Ti extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=tL,Object.setPrototypeOf(this,Ti.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zh.prototype.create)}}class Zh{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?nL(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Ti(i,a,r)}}function nL(t,e){return t.replace(rL,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const rL=/\{\$([^}]+)}/g;function _u(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(kw(s)&&kw(o)){if(!_u(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function kw(t){return t!==null&&typeof t=="object"}/**
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
 */const iL=1e3,sL=2,oL=4*60*60*1e3,aL=.5;function Cw(t,e=iL,n=sL){const r=e*Math.pow(n,t),i=Math.round(aL*r*(Math.random()-.5)*2);return Math.min(oL,r+i)}/**
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
 */function Nn(t){return t&&t._delegate?t._delegate:t}class Vr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Vs="[DEFAULT]";/**
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
 */class lL{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Gj;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(cL(e))try{this.getOrInitializeService({instanceIdentifier:Vs})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Vs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Vs){return this.instances.has(e)}getOptions(e=Vs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:uL(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Vs){return this.component?this.component.multipleInstances?e:Vs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function uL(t){return t===Vs?void 0:t}function cL(t){return t.instantiationMode==="EAGER"}/**
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
 */class dL{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new lL(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var we;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(we||(we={}));const hL={debug:we.DEBUG,verbose:we.VERBOSE,info:we.INFO,warn:we.WARN,error:we.ERROR,silent:we.SILENT},fL=we.INFO,pL={[we.DEBUG]:"log",[we.VERBOSE]:"log",[we.INFO]:"info",[we.WARN]:"warn",[we.ERROR]:"error"},mL=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=pL[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class sy{constructor(e){this.name=e,this._logLevel=fL,this._logHandler=mL,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in we))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?hL[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,we.DEBUG,...e),this._logHandler(this,we.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,we.VERBOSE,...e),this._logHandler(this,we.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,we.INFO,...e),this._logHandler(this,we.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,we.WARN,...e),this._logHandler(this,we.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,we.ERROR,...e),this._logHandler(this,we.ERROR,...e)}}const gL=(t,e)=>e.some(n=>t instanceof n);let Aw,Rw;function yL(){return Aw||(Aw=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vL(){return Rw||(Rw=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const oI=new WeakMap,pg=new WeakMap,aI=new WeakMap,Cp=new WeakMap,oy=new WeakMap;function xL(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ss(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&oI.set(n,t)}).catch(()=>{}),oy.set(e,t),e}function wL(t){if(pg.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});pg.set(t,e)}let mg={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return pg.get(t);if(e==="objectStoreNames")return t.objectStoreNames||aI.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ss(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function _L(t){mg=t(mg)}function bL(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ap(this),e,...n);return aI.set(r,e.sort?e.sort():[e]),ss(r)}:vL().includes(t)?function(...e){return t.apply(Ap(this),e),ss(oI.get(this))}:function(...e){return ss(t.apply(Ap(this),e))}}function EL(t){return typeof t=="function"?bL(t):(t instanceof IDBTransaction&&wL(t),gL(t,yL())?new Proxy(t,mg):t)}function ss(t){if(t instanceof IDBRequest)return xL(t);if(Cp.has(t))return Cp.get(t);const e=EL(t);return e!==t&&(Cp.set(t,e),oy.set(e,t)),e}const Ap=t=>oy.get(t);function lI(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=ss(o);return r&&o.addEventListener("upgradeneeded",l=>{r(ss(o.result),l.oldVersion,l.newVersion,ss(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const SL=["get","getKey","getAll","getAllKeys","count"],TL=["put","add","delete","clear"],Rp=new Map;function Pw(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Rp.get(e))return Rp.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=TL.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||SL.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Rp.set(e,s),s}_L(t=>({...t,get:(e,n,r)=>Pw(e,n)||t.get(e,n,r),has:(e,n)=>!!Pw(e,n)||t.has(e,n)}));/**
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
 */class IL{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(kL(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function kL(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const gg="@firebase/app",Nw="0.12.3";/**
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
 */const xi=new sy("@firebase/app"),CL="@firebase/app-compat",AL="@firebase/analytics-compat",RL="@firebase/analytics",PL="@firebase/app-check-compat",NL="@firebase/app-check",DL="@firebase/auth",OL="@firebase/auth-compat",jL="@firebase/database",LL="@firebase/data-connect",ML="@firebase/database-compat",VL="@firebase/functions",FL="@firebase/functions-compat",$L="@firebase/installations",zL="@firebase/installations-compat",UL="@firebase/messaging",BL="@firebase/messaging-compat",HL="@firebase/performance",WL="@firebase/performance-compat",qL="@firebase/remote-config",GL="@firebase/remote-config-compat",KL="@firebase/storage",QL="@firebase/storage-compat",YL="@firebase/firestore",JL="@firebase/vertexai",ZL="@firebase/firestore-compat",XL="firebase",e8="11.7.3";/**
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
 */const yg="[DEFAULT]",t8={[gg]:"fire-core",[CL]:"fire-core-compat",[RL]:"fire-analytics",[AL]:"fire-analytics-compat",[NL]:"fire-app-check",[PL]:"fire-app-check-compat",[DL]:"fire-auth",[OL]:"fire-auth-compat",[jL]:"fire-rtdb",[LL]:"fire-data-connect",[ML]:"fire-rtdb-compat",[VL]:"fire-fn",[FL]:"fire-fn-compat",[$L]:"fire-iid",[zL]:"fire-iid-compat",[UL]:"fire-fcm",[BL]:"fire-fcm-compat",[HL]:"fire-perf",[WL]:"fire-perf-compat",[qL]:"fire-rc",[GL]:"fire-rc-compat",[KL]:"fire-gcs",[QL]:"fire-gcs-compat",[YL]:"fire-fst",[ZL]:"fire-fst-compat",[JL]:"fire-vertex","fire-js":"fire-js",[XL]:"fire-js-all"};/**
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
 */const bu=new Map,n8=new Map,vg=new Map;function Dw(t,e){try{t.container.addComponent(e)}catch(n){xi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function wi(t){const e=t.name;if(vg.has(e))return xi.debug(`There were multiple attempts to register component ${e}.`),!1;vg.set(e,t);for(const n of bu.values())Dw(n,t);for(const n of n8.values())Dw(n,t);return!0}function Ba(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function uI(t){return t==null?!1:t.settings!==void 0}/**
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
 */const r8={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},os=new Zh("app","Firebase",r8);/**
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
 */class i8{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Vr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw os.create("app-deleted",{appName:this._name})}}/**
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
 */const cI=e8;function ay(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:yg,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw os.create("bad-app-name",{appName:String(i)});if(n||(n=tI()),!n)throw os.create("no-options");const s=bu.get(i);if(s){if(_u(n,s.options)&&_u(r,s.config))return s;throw os.create("duplicate-app",{appName:i})}const o=new dL(i);for(const l of vg.values())o.addComponent(l);const a=new i8(n,r,o);return bu.set(i,a),a}function Xh(t=yg){const e=bu.get(t);if(!e&&t===yg&&tI())return ay();if(!e)throw os.create("no-app",{appName:t});return e}function s8(){return Array.from(bu.values())}function Kn(t,e,n){var r;let i=(r=t8[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),xi.warn(a.join(" "));return}wi(new Vr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const o8="firebase-heartbeat-database",a8=1,Eu="firebase-heartbeat-store";let Pp=null;function dI(){return Pp||(Pp=lI(o8,a8,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Eu)}catch(n){console.warn(n)}}}}).catch(t=>{throw os.create("idb-open",{originalErrorMessage:t.message})})),Pp}async function l8(t){try{const n=(await dI()).transaction(Eu),r=await n.objectStore(Eu).get(hI(t));return await n.done,r}catch(e){if(e instanceof Ti)xi.warn(e.message);else{const n=os.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});xi.warn(n.message)}}}async function Ow(t,e){try{const r=(await dI()).transaction(Eu,"readwrite");await r.objectStore(Eu).put(e,hI(t)),await r.done}catch(n){if(n instanceof Ti)xi.warn(n.message);else{const r=os.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});xi.warn(r.message)}}}function hI(t){return`${t.name}!${t.options.appId}`}/**
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
 */const u8=1024,c8=30;class d8{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new f8(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=jw();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>c8){const o=p8(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){xi.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=jw(),{heartbeatsToSend:r,unsentEntries:i}=h8(this._heartbeatsCache.heartbeats),s=nh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return xi.warn(n),""}}}function jw(){return new Date().toISOString().substring(0,10)}function h8(t,e=u8){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Lw(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Lw(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class f8{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return iI()?sI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await l8(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ow(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ow(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Lw(t){return nh(JSON.stringify({version:2,heartbeats:t})).length}function p8(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function m8(t){wi(new Vr("platform-logger",e=>new IL(e),"PRIVATE")),wi(new Vr("heartbeat",e=>new d8(e),"PRIVATE")),Kn(gg,Nw,t),Kn(gg,Nw,"esm2017"),Kn("fire-js","")}m8("");var g8="firebase",y8="11.7.3";/**
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
 */Kn(g8,y8,"app");const fI="@firebase/installations",ly="0.6.16";/**
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
 */const pI=1e4,mI=`w:${ly}`,gI="FIS_v2",v8="https://firebaseinstallations.googleapis.com/v1",x8=60*60*1e3,w8="installations",_8="Installations";/**
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
 */const b8={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},io=new Zh(w8,_8,b8);function yI(t){return t instanceof Ti&&t.code.includes("request-failed")}/**
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
 */function vI({projectId:t}){return`${v8}/projects/${t}/installations`}function xI(t){return{token:t.token,requestStatus:2,expiresIn:S8(t.expiresIn),creationTime:Date.now()}}async function wI(t,e){const r=(await e.json()).error;return io.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function _I({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function E8(t,{refreshToken:e}){const n=_I(t);return n.append("Authorization",T8(e)),n}async function bI(t){const e=await t();return e.status>=500&&e.status<600?t():e}function S8(t){return Number(t.replace("s","000"))}function T8(t){return`${gI} ${t}`}/**
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
 */async function I8({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=vI(t),i=_I(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:gI,appId:t.appId,sdkVersion:mI},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await bI(()=>fetch(r,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:xI(c.authToken)}}else throw await wI("Create Installation",l)}/**
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
 */function EI(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function k8(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const C8=/^[cdef][\w-]{21}$/,xg="";function A8(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=R8(t);return C8.test(n)?n:xg}catch{return xg}}function R8(t){return k8(t).substr(0,22)}/**
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
 */function ef(t){return`${t.appName}!${t.appId}`}/**
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
 */const SI=new Map;function TI(t,e){const n=ef(t);II(n,e),P8(n,e)}function II(t,e){const n=SI.get(t);if(n)for(const r of n)r(e)}function P8(t,e){const n=N8();n&&n.postMessage({key:t,fid:e}),D8()}let Hs=null;function N8(){return!Hs&&"BroadcastChannel"in self&&(Hs=new BroadcastChannel("[Firebase] FID Change"),Hs.onmessage=t=>{II(t.data.key,t.data.fid)}),Hs}function D8(){SI.size===0&&Hs&&(Hs.close(),Hs=null)}/**
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
 */const O8="firebase-installations-database",j8=1,so="firebase-installations-store";let Np=null;function uy(){return Np||(Np=lI(O8,j8,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(so)}}})),Np}async function rh(t,e){const n=ef(t),i=(await uy()).transaction(so,"readwrite"),s=i.objectStore(so),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&TI(t,e.fid),e}async function kI(t){const e=ef(t),r=(await uy()).transaction(so,"readwrite");await r.objectStore(so).delete(e),await r.done}async function tf(t,e){const n=ef(t),i=(await uy()).transaction(so,"readwrite"),s=i.objectStore(so),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&TI(t,a.fid),a}/**
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
 */async function cy(t){let e;const n=await tf(t.appConfig,r=>{const i=L8(r),s=M8(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===xg?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function L8(t){const e=t||{fid:A8(),registrationStatus:0};return CI(e)}function M8(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(io.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=V8(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:F8(t)}:{installationEntry:e}}async function V8(t,e){try{const n=await I8(t,e);return rh(t.appConfig,n)}catch(n){throw yI(n)&&n.customData.serverCode===409?await kI(t.appConfig):await rh(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function F8(t){let e=await Mw(t.appConfig);for(;e.registrationStatus===1;)await EI(100),e=await Mw(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await cy(t);return r||n}return e}function Mw(t){return tf(t,e=>{if(!e)throw io.create("installation-not-found");return CI(e)})}function CI(t){return $8(t)?{fid:t.fid,registrationStatus:0}:t}function $8(t){return t.registrationStatus===1&&t.registrationTime+pI<Date.now()}/**
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
 */async function z8({appConfig:t,heartbeatServiceProvider:e},n){const r=U8(t,n),i=E8(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:mI,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await bI(()=>fetch(r,a));if(l.ok){const c=await l.json();return xI(c)}else throw await wI("Generate Auth Token",l)}function U8(t,{fid:e}){return`${vI(t)}/${e}/authTokens:generate`}/**
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
 */async function dy(t,e=!1){let n;const r=await tf(t.appConfig,s=>{if(!AI(s))throw io.create("not-registered");const o=s.authToken;if(!e&&W8(o))return s;if(o.requestStatus===1)return n=B8(t,e),s;{if(!navigator.onLine)throw io.create("app-offline");const a=G8(s);return n=H8(t,a),a}});return n?await n:r.authToken}async function B8(t,e){let n=await Vw(t.appConfig);for(;n.authToken.requestStatus===1;)await EI(100),n=await Vw(t.appConfig);const r=n.authToken;return r.requestStatus===0?dy(t,e):r}function Vw(t){return tf(t,e=>{if(!AI(e))throw io.create("not-registered");const n=e.authToken;return K8(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function H8(t,e){try{const n=await z8(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await rh(t.appConfig,r),n}catch(n){if(yI(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await kI(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await rh(t.appConfig,r)}throw n}}function AI(t){return t!==void 0&&t.registrationStatus===2}function W8(t){return t.requestStatus===2&&!q8(t)}function q8(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+x8}function G8(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function K8(t){return t.requestStatus===1&&t.requestTime+pI<Date.now()}/**
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
 */async function Q8(t){const e=t,{installationEntry:n,registrationPromise:r}=await cy(e);return r?r.catch(console.error):dy(e).catch(console.error),n.fid}/**
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
 */async function Y8(t,e=!1){const n=t;return await J8(n),(await dy(n,e)).token}async function J8(t){const{registrationPromise:e}=await cy(t);e&&await e}/**
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
 */function Z8(t){if(!t||!t.options)throw Dp("App Configuration");if(!t.name)throw Dp("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Dp(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Dp(t){return io.create("missing-app-config-values",{valueName:t})}/**
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
 */const RI="installations",X8="installations-internal",e9=t=>{const e=t.getProvider("app").getImmediate(),n=Z8(e),r=Ba(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},t9=t=>{const e=t.getProvider("app").getImmediate(),n=Ba(e,RI).getImmediate();return{getId:()=>Q8(n),getToken:i=>Y8(n,i)}};function n9(){wi(new Vr(RI,e9,"PUBLIC")),wi(new Vr(X8,t9,"PRIVATE"))}n9();Kn(fI,ly);Kn(fI,ly,"esm2017");/**
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
 */const ih="analytics",r9="firebase_id",i9="origin",s9=60*1e3,o9="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",hy="https://www.googletagmanager.com/gtag/js";/**
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
 */const vn=new sy("@firebase/analytics");/**
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
 */const a9={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},An=new Zh("analytics","Analytics",a9);/**
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
 */function l9(t){if(!t.startsWith(hy)){const e=An.create("invalid-gtag-resource",{gtagURL:t});return vn.warn(e.message),""}return t}function PI(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function u9(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function c9(t,e){const n=u9("firebase-js-sdk-policy",{createScriptURL:l9}),r=document.createElement("script"),i=`${hy}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function d9(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function h9(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const l=(await PI(n)).find(c=>c.measurementId===i);l&&await e[l.appId]}}catch(a){vn.error(a)}t("config",i,s)}async function f9(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await PI(n);for(const l of o){const c=a.find(f=>f.measurementId===l),h=c&&e[c.appId];if(h)s.push(h);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){vn.error(s)}}function p9(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,l]=o;await f9(t,e,n,a,l)}else if(s==="config"){const[a,l]=o;await h9(t,e,n,r,a,l)}else if(s==="consent"){const[a,l]=o;t("consent",a,l)}else if(s==="get"){const[a,l,c]=o;t("get",a,l,c)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){vn.error(a)}}return i}function m9(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=p9(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function g9(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(hy)&&n.src.includes(t))return n;return null}/**
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
 */const y9=30,v9=1e3;class x9{constructor(e={},n=v9){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const NI=new x9;function w9(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function _9(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:w9(r)},s=o9.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw An.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function b9(t,e=NI,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw An.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw An.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new T9;return setTimeout(async()=>{a.abort()},s9),DI({appId:r,apiKey:i,measurementId:s},o,a,e)}async function DI(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=NI){var s;const{appId:o,measurementId:a}=t;try{await E9(r,e)}catch(l){if(a)return vn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await _9(t);return i.deleteThrottleMetadata(o),l}catch(l){const c=l;if(!S9(c)){if(i.deleteThrottleMetadata(o),a)return vn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw l}const h=Number((s=c==null?void 0:c.customData)===null||s===void 0?void 0:s.httpStatus)===503?Cw(n,i.intervalMillis,y9):Cw(n,i.intervalMillis),f={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return i.setThrottleMetadata(o,f),vn.debug(`Calling attemptFetch again in ${h} millis`),DI(t,f,r,i)}}function E9(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(An.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function S9(t){if(!(t instanceof Ti)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class T9{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function I9(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
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
 */async function k9(){if(iI())try{await sI()}catch(t){return vn.warn(An.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return vn.warn(An.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function C9(t,e,n,r,i,s,o){var a;const l=b9(t);l.then(g=>{n[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&vn.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>vn.error(g)),e.push(l);const c=k9().then(g=>{if(g)return r.getId()}),[h,f]=await Promise.all([l,c]);g9(s)||c9(s,h.measurementId),i("js",new Date);const p=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return p[i9]="firebase",p.update=!0,f!=null&&(p[r9]=f),i("config",h.measurementId,p),h.measurementId}/**
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
 */class A9{constructor(e){this.app=e}_delete(){return delete Wl[this.app.options.appId],Promise.resolve()}}let Wl={},Fw=[];const $w={};let Op="dataLayer",R9="gtag",zw,OI,Uw=!1;function P9(){const t=[];if(Zj()&&t.push("This is a browser extension environment."),eL()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=An.create("invalid-analytics-context",{errorInfo:e});vn.warn(n.message)}}function N9(t,e,n){P9();const r=t.options.appId;if(!r)throw An.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)vn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw An.create("no-api-key");if(Wl[r]!=null)throw An.create("already-exists",{id:r});if(!Uw){d9(Op);const{wrappedGtag:s,gtagCore:o}=m9(Wl,Fw,$w,Op,R9);OI=s,zw=o,Uw=!0}return Wl[r]=C9(t,Fw,$w,e,zw,Op,n),new A9(t)}function D9(t=Xh()){t=Nn(t);const e=Ba(t,ih);return e.isInitialized()?e.getImmediate():O9(t)}function O9(t,e={}){const n=Ba(t,ih);if(n.isInitialized()){const i=n.getImmediate();if(_u(e,n.getOptions()))return i;throw An.create("already-initialized")}return n.initialize({options:e})}function j9(t,e,n,r){t=Nn(t),I9(OI,Wl[t.app.options.appId],e,n,r).catch(i=>vn.error(i))}const Bw="@firebase/analytics",Hw="0.10.15";function L9(){wi(new Vr(ih,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return N9(r,i,n)},"PUBLIC")),wi(new Vr("analytics-internal",t,"PRIVATE")),Kn(Bw,Hw),Kn(Bw,Hw,"esm2017");function t(e){try{const n=e.getProvider(ih).getImmediate();return{logEvent:(r,i,s)=>j9(n,r,i,s)}}catch(n){throw An.create("interop-component-reg-failed",{reason:n})}}}L9();var Ww=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var as,jI;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,S){function A(){}A.prototype=S.prototype,b.D=S.prototype,b.prototype=new A,b.prototype.constructor=b,b.C=function(R,N,O){for(var I=Array(arguments.length-2),Q=2;Q<arguments.length;Q++)I[Q-2]=arguments[Q];return S.prototype[N].apply(R,I)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(b,S,A){A||(A=0);var R=Array(16);if(typeof S=="string")for(var N=0;16>N;++N)R[N]=S.charCodeAt(A++)|S.charCodeAt(A++)<<8|S.charCodeAt(A++)<<16|S.charCodeAt(A++)<<24;else for(N=0;16>N;++N)R[N]=S[A++]|S[A++]<<8|S[A++]<<16|S[A++]<<24;S=b.g[0],A=b.g[1],N=b.g[2];var O=b.g[3],I=S+(O^A&(N^O))+R[0]+3614090360&4294967295;S=A+(I<<7&4294967295|I>>>25),I=O+(N^S&(A^N))+R[1]+3905402710&4294967295,O=S+(I<<12&4294967295|I>>>20),I=N+(A^O&(S^A))+R[2]+606105819&4294967295,N=O+(I<<17&4294967295|I>>>15),I=A+(S^N&(O^S))+R[3]+3250441966&4294967295,A=N+(I<<22&4294967295|I>>>10),I=S+(O^A&(N^O))+R[4]+4118548399&4294967295,S=A+(I<<7&4294967295|I>>>25),I=O+(N^S&(A^N))+R[5]+1200080426&4294967295,O=S+(I<<12&4294967295|I>>>20),I=N+(A^O&(S^A))+R[6]+2821735955&4294967295,N=O+(I<<17&4294967295|I>>>15),I=A+(S^N&(O^S))+R[7]+4249261313&4294967295,A=N+(I<<22&4294967295|I>>>10),I=S+(O^A&(N^O))+R[8]+1770035416&4294967295,S=A+(I<<7&4294967295|I>>>25),I=O+(N^S&(A^N))+R[9]+2336552879&4294967295,O=S+(I<<12&4294967295|I>>>20),I=N+(A^O&(S^A))+R[10]+4294925233&4294967295,N=O+(I<<17&4294967295|I>>>15),I=A+(S^N&(O^S))+R[11]+2304563134&4294967295,A=N+(I<<22&4294967295|I>>>10),I=S+(O^A&(N^O))+R[12]+1804603682&4294967295,S=A+(I<<7&4294967295|I>>>25),I=O+(N^S&(A^N))+R[13]+4254626195&4294967295,O=S+(I<<12&4294967295|I>>>20),I=N+(A^O&(S^A))+R[14]+2792965006&4294967295,N=O+(I<<17&4294967295|I>>>15),I=A+(S^N&(O^S))+R[15]+1236535329&4294967295,A=N+(I<<22&4294967295|I>>>10),I=S+(N^O&(A^N))+R[1]+4129170786&4294967295,S=A+(I<<5&4294967295|I>>>27),I=O+(A^N&(S^A))+R[6]+3225465664&4294967295,O=S+(I<<9&4294967295|I>>>23),I=N+(S^A&(O^S))+R[11]+643717713&4294967295,N=O+(I<<14&4294967295|I>>>18),I=A+(O^S&(N^O))+R[0]+3921069994&4294967295,A=N+(I<<20&4294967295|I>>>12),I=S+(N^O&(A^N))+R[5]+3593408605&4294967295,S=A+(I<<5&4294967295|I>>>27),I=O+(A^N&(S^A))+R[10]+38016083&4294967295,O=S+(I<<9&4294967295|I>>>23),I=N+(S^A&(O^S))+R[15]+3634488961&4294967295,N=O+(I<<14&4294967295|I>>>18),I=A+(O^S&(N^O))+R[4]+3889429448&4294967295,A=N+(I<<20&4294967295|I>>>12),I=S+(N^O&(A^N))+R[9]+568446438&4294967295,S=A+(I<<5&4294967295|I>>>27),I=O+(A^N&(S^A))+R[14]+3275163606&4294967295,O=S+(I<<9&4294967295|I>>>23),I=N+(S^A&(O^S))+R[3]+4107603335&4294967295,N=O+(I<<14&4294967295|I>>>18),I=A+(O^S&(N^O))+R[8]+1163531501&4294967295,A=N+(I<<20&4294967295|I>>>12),I=S+(N^O&(A^N))+R[13]+2850285829&4294967295,S=A+(I<<5&4294967295|I>>>27),I=O+(A^N&(S^A))+R[2]+4243563512&4294967295,O=S+(I<<9&4294967295|I>>>23),I=N+(S^A&(O^S))+R[7]+1735328473&4294967295,N=O+(I<<14&4294967295|I>>>18),I=A+(O^S&(N^O))+R[12]+2368359562&4294967295,A=N+(I<<20&4294967295|I>>>12),I=S+(A^N^O)+R[5]+4294588738&4294967295,S=A+(I<<4&4294967295|I>>>28),I=O+(S^A^N)+R[8]+2272392833&4294967295,O=S+(I<<11&4294967295|I>>>21),I=N+(O^S^A)+R[11]+1839030562&4294967295,N=O+(I<<16&4294967295|I>>>16),I=A+(N^O^S)+R[14]+4259657740&4294967295,A=N+(I<<23&4294967295|I>>>9),I=S+(A^N^O)+R[1]+2763975236&4294967295,S=A+(I<<4&4294967295|I>>>28),I=O+(S^A^N)+R[4]+1272893353&4294967295,O=S+(I<<11&4294967295|I>>>21),I=N+(O^S^A)+R[7]+4139469664&4294967295,N=O+(I<<16&4294967295|I>>>16),I=A+(N^O^S)+R[10]+3200236656&4294967295,A=N+(I<<23&4294967295|I>>>9),I=S+(A^N^O)+R[13]+681279174&4294967295,S=A+(I<<4&4294967295|I>>>28),I=O+(S^A^N)+R[0]+3936430074&4294967295,O=S+(I<<11&4294967295|I>>>21),I=N+(O^S^A)+R[3]+3572445317&4294967295,N=O+(I<<16&4294967295|I>>>16),I=A+(N^O^S)+R[6]+76029189&4294967295,A=N+(I<<23&4294967295|I>>>9),I=S+(A^N^O)+R[9]+3654602809&4294967295,S=A+(I<<4&4294967295|I>>>28),I=O+(S^A^N)+R[12]+3873151461&4294967295,O=S+(I<<11&4294967295|I>>>21),I=N+(O^S^A)+R[15]+530742520&4294967295,N=O+(I<<16&4294967295|I>>>16),I=A+(N^O^S)+R[2]+3299628645&4294967295,A=N+(I<<23&4294967295|I>>>9),I=S+(N^(A|~O))+R[0]+4096336452&4294967295,S=A+(I<<6&4294967295|I>>>26),I=O+(A^(S|~N))+R[7]+1126891415&4294967295,O=S+(I<<10&4294967295|I>>>22),I=N+(S^(O|~A))+R[14]+2878612391&4294967295,N=O+(I<<15&4294967295|I>>>17),I=A+(O^(N|~S))+R[5]+4237533241&4294967295,A=N+(I<<21&4294967295|I>>>11),I=S+(N^(A|~O))+R[12]+1700485571&4294967295,S=A+(I<<6&4294967295|I>>>26),I=O+(A^(S|~N))+R[3]+2399980690&4294967295,O=S+(I<<10&4294967295|I>>>22),I=N+(S^(O|~A))+R[10]+4293915773&4294967295,N=O+(I<<15&4294967295|I>>>17),I=A+(O^(N|~S))+R[1]+2240044497&4294967295,A=N+(I<<21&4294967295|I>>>11),I=S+(N^(A|~O))+R[8]+1873313359&4294967295,S=A+(I<<6&4294967295|I>>>26),I=O+(A^(S|~N))+R[15]+4264355552&4294967295,O=S+(I<<10&4294967295|I>>>22),I=N+(S^(O|~A))+R[6]+2734768916&4294967295,N=O+(I<<15&4294967295|I>>>17),I=A+(O^(N|~S))+R[13]+1309151649&4294967295,A=N+(I<<21&4294967295|I>>>11),I=S+(N^(A|~O))+R[4]+4149444226&4294967295,S=A+(I<<6&4294967295|I>>>26),I=O+(A^(S|~N))+R[11]+3174756917&4294967295,O=S+(I<<10&4294967295|I>>>22),I=N+(S^(O|~A))+R[2]+718787259&4294967295,N=O+(I<<15&4294967295|I>>>17),I=A+(O^(N|~S))+R[9]+3951481745&4294967295,b.g[0]=b.g[0]+S&4294967295,b.g[1]=b.g[1]+(N+(I<<21&4294967295|I>>>11))&4294967295,b.g[2]=b.g[2]+N&4294967295,b.g[3]=b.g[3]+O&4294967295}r.prototype.u=function(b,S){S===void 0&&(S=b.length);for(var A=S-this.blockSize,R=this.B,N=this.h,O=0;O<S;){if(N==0)for(;O<=A;)i(this,b,O),O+=this.blockSize;if(typeof b=="string"){for(;O<S;)if(R[N++]=b.charCodeAt(O++),N==this.blockSize){i(this,R),N=0;break}}else for(;O<S;)if(R[N++]=b[O++],N==this.blockSize){i(this,R),N=0;break}}this.h=N,this.o+=S},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var S=1;S<b.length-8;++S)b[S]=0;var A=8*this.o;for(S=b.length-8;S<b.length;++S)b[S]=A&255,A/=256;for(this.u(b),b=Array(16),S=A=0;4>S;++S)for(var R=0;32>R;R+=8)b[A++]=this.g[S]>>>R&255;return b};function s(b,S){var A=a;return Object.prototype.hasOwnProperty.call(A,b)?A[b]:A[b]=S(b)}function o(b,S){this.h=S;for(var A=[],R=!0,N=b.length-1;0<=N;N--){var O=b[N]|0;R&&O==S||(A[N]=O,R=!1)}this.g=A}var a={};function l(b){return-128<=b&&128>b?s(b,function(S){return new o([S|0],0>S?-1:0)}):new o([b|0],0>b?-1:0)}function c(b){if(isNaN(b)||!isFinite(b))return f;if(0>b)return C(c(-b));for(var S=[],A=1,R=0;b>=A;R++)S[R]=b/A|0,A*=4294967296;return new o(S,0)}function h(b,S){if(b.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(b.charAt(0)=="-")return C(h(b.substring(1),S));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=c(Math.pow(S,8)),R=f,N=0;N<b.length;N+=8){var O=Math.min(8,b.length-N),I=parseInt(b.substring(N,N+O),S);8>O?(O=c(Math.pow(S,O)),R=R.j(O).add(c(I))):(R=R.j(A),R=R.add(c(I)))}return R}var f=l(0),p=l(1),g=l(16777216);t=o.prototype,t.m=function(){if(k(this))return-C(this).m();for(var b=0,S=1,A=0;A<this.g.length;A++){var R=this.i(A);b+=(0<=R?R:4294967296+R)*S,S*=4294967296}return b},t.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(w(this))return"0";if(k(this))return"-"+C(this).toString(b);for(var S=c(Math.pow(b,6)),A=this,R="";;){var N=P(A,S).g;A=x(A,N.j(S));var O=((0<A.g.length?A.g[0]:A.h)>>>0).toString(b);if(A=N,w(A))return O+R;for(;6>O.length;)O="0"+O;R=O+R}},t.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function w(b){if(b.h!=0)return!1;for(var S=0;S<b.g.length;S++)if(b.g[S]!=0)return!1;return!0}function k(b){return b.h==-1}t.l=function(b){return b=x(this,b),k(b)?-1:w(b)?0:1};function C(b){for(var S=b.g.length,A=[],R=0;R<S;R++)A[R]=~b.g[R];return new o(A,~b.h).add(p)}t.abs=function(){return k(this)?C(this):this},t.add=function(b){for(var S=Math.max(this.g.length,b.g.length),A=[],R=0,N=0;N<=S;N++){var O=R+(this.i(N)&65535)+(b.i(N)&65535),I=(O>>>16)+(this.i(N)>>>16)+(b.i(N)>>>16);R=I>>>16,O&=65535,I&=65535,A[N]=I<<16|O}return new o(A,A[A.length-1]&-2147483648?-1:0)};function x(b,S){return b.add(C(S))}t.j=function(b){if(w(this)||w(b))return f;if(k(this))return k(b)?C(this).j(C(b)):C(C(this).j(b));if(k(b))return C(this.j(C(b)));if(0>this.l(g)&&0>b.l(g))return c(this.m()*b.m());for(var S=this.g.length+b.g.length,A=[],R=0;R<2*S;R++)A[R]=0;for(R=0;R<this.g.length;R++)for(var N=0;N<b.g.length;N++){var O=this.i(R)>>>16,I=this.i(R)&65535,Q=b.i(N)>>>16,te=b.i(N)&65535;A[2*R+2*N]+=I*te,v(A,2*R+2*N),A[2*R+2*N+1]+=O*te,v(A,2*R+2*N+1),A[2*R+2*N+1]+=I*Q,v(A,2*R+2*N+1),A[2*R+2*N+2]+=O*Q,v(A,2*R+2*N+2)}for(R=0;R<S;R++)A[R]=A[2*R+1]<<16|A[2*R];for(R=S;R<2*S;R++)A[R]=0;return new o(A,0)};function v(b,S){for(;(b[S]&65535)!=b[S];)b[S+1]+=b[S]>>>16,b[S]&=65535,S++}function E(b,S){this.g=b,this.h=S}function P(b,S){if(w(S))throw Error("division by zero");if(w(b))return new E(f,f);if(k(b))return S=P(C(b),S),new E(C(S.g),C(S.h));if(k(S))return S=P(b,C(S)),new E(C(S.g),S.h);if(30<b.g.length){if(k(b)||k(S))throw Error("slowDivide_ only works with positive integers.");for(var A=p,R=S;0>=R.l(b);)A=j(A),R=j(R);var N=M(A,1),O=M(R,1);for(R=M(R,2),A=M(A,2);!w(R);){var I=O.add(R);0>=I.l(b)&&(N=N.add(A),O=I),R=M(R,1),A=M(A,1)}return S=x(b,N.j(S)),new E(N,S)}for(N=f;0<=b.l(S);){for(A=Math.max(1,Math.floor(b.m()/S.m())),R=Math.ceil(Math.log(A)/Math.LN2),R=48>=R?1:Math.pow(2,R-48),O=c(A),I=O.j(S);k(I)||0<I.l(b);)A-=R,O=c(A),I=O.j(S);w(O)&&(O=p),N=N.add(O),b=x(b,I)}return new E(N,b)}t.A=function(b){return P(this,b).h},t.and=function(b){for(var S=Math.max(this.g.length,b.g.length),A=[],R=0;R<S;R++)A[R]=this.i(R)&b.i(R);return new o(A,this.h&b.h)},t.or=function(b){for(var S=Math.max(this.g.length,b.g.length),A=[],R=0;R<S;R++)A[R]=this.i(R)|b.i(R);return new o(A,this.h|b.h)},t.xor=function(b){for(var S=Math.max(this.g.length,b.g.length),A=[],R=0;R<S;R++)A[R]=this.i(R)^b.i(R);return new o(A,this.h^b.h)};function j(b){for(var S=b.g.length+1,A=[],R=0;R<S;R++)A[R]=b.i(R)<<1|b.i(R-1)>>>31;return new o(A,b.h)}function M(b,S){var A=S>>5;S%=32;for(var R=b.g.length-A,N=[],O=0;O<R;O++)N[O]=0<S?b.i(O+A)>>>S|b.i(O+A+1)<<32-S:b.i(O+A);return new o(N,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,jI=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=h,as=o}).apply(typeof Ww<"u"?Ww:typeof self<"u"?self:typeof window<"u"?window:{});var Lc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var LI,Cl,MI,dd,wg,VI,FI,$I;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,m,y){return u==Array.prototype||u==Object.prototype||(u[m]=y.value),u};function n(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Lc=="object"&&Lc];for(var m=0;m<u.length;++m){var y=u[m];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var r=n(this);function i(u,m){if(m)e:{var y=r;u=u.split(".");for(var T=0;T<u.length-1;T++){var L=u[T];if(!(L in y))break e;y=y[L]}u=u[u.length-1],T=y[u],m=m(T),m!=T&&m!=null&&e(y,u,{configurable:!0,writable:!0,value:m})}}function s(u,m){u instanceof String&&(u+="");var y=0,T=!1,L={next:function(){if(!T&&y<u.length){var V=y++;return{value:m(V,u[V]),done:!1}}return T=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}i("Array.prototype.values",function(u){return u||function(){return s(this,function(m,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(u){var m=typeof u;return m=m!="object"?m:u?Array.isArray(u)?"array":m:"null",m=="array"||m=="object"&&typeof u.length=="number"}function c(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function h(u,m,y){return u.call.apply(u.bind,arguments)}function f(u,m,y){if(!u)throw Error();if(2<arguments.length){var T=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,T),u.apply(m,L)}}return function(){return u.apply(m,arguments)}}function p(u,m,y){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:f,p.apply(null,arguments)}function g(u,m){var y=Array.prototype.slice.call(arguments,1);return function(){var T=y.slice();return T.push.apply(T,arguments),u.apply(this,T)}}function w(u,m){function y(){}y.prototype=m.prototype,u.aa=m.prototype,u.prototype=new y,u.prototype.constructor=u,u.Qb=function(T,L,V){for(var W=Array(arguments.length-2),De=2;De<arguments.length;De++)W[De-2]=arguments[De];return m.prototype[L].apply(T,W)}}function k(u){const m=u.length;if(0<m){const y=Array(m);for(let T=0;T<m;T++)y[T]=u[T];return y}return[]}function C(u,m){for(let y=1;y<arguments.length;y++){const T=arguments[y];if(l(T)){const L=u.length||0,V=T.length||0;u.length=L+V;for(let W=0;W<V;W++)u[L+W]=T[W]}else u.push(T)}}class x{constructor(m,y){this.i=m,this.j=y,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function v(u){return/^[\s\xa0]*$/.test(u)}function E(){var u=a.navigator;return u&&(u=u.userAgent)?u:""}function P(u){return P[" "](u),u}P[" "]=function(){};var j=E().indexOf("Gecko")!=-1&&!(E().toLowerCase().indexOf("webkit")!=-1&&E().indexOf("Edge")==-1)&&!(E().indexOf("Trident")!=-1||E().indexOf("MSIE")!=-1)&&E().indexOf("Edge")==-1;function M(u,m,y){for(const T in u)m.call(y,u[T],T,u)}function b(u,m){for(const y in u)m.call(void 0,u[y],y,u)}function S(u){const m={};for(const y in u)m[y]=u[y];return m}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function R(u,m){let y,T;for(let L=1;L<arguments.length;L++){T=arguments[L];for(y in T)u[y]=T[y];for(let V=0;V<A.length;V++)y=A[V],Object.prototype.hasOwnProperty.call(T,y)&&(u[y]=T[y])}}function N(u){var m=1;u=u.split(":");const y=[];for(;0<m&&u.length;)y.push(u.shift()),m--;return u.length&&y.push(u.join(":")),y}function O(u){a.setTimeout(()=>{throw u},0)}function I(){var u=U;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class Q{constructor(){this.h=this.g=null}add(m,y){const T=te.get();T.set(m,y),this.h?this.h.next=T:this.g=T,this.h=T}}var te=new x(()=>new he,u=>u.reset());class he{constructor(){this.next=this.g=this.h=null}set(m,y){this.h=m,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let se,z=!1,U=new Q,G=()=>{const u=a.Promise.resolve(void 0);se=()=>{u.then(Z)}};var Z=()=>{for(var u;u=I();){try{u.h.call(u.g)}catch(y){O(y)}var m=te;m.j(u),100>m.h&&(m.h++,u.next=m.g,m.g=u)}z=!1};function oe(){this.s=this.s,this.C=this.C}oe.prototype.s=!1,oe.prototype.ma=function(){this.s||(this.s=!0,this.N())},oe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Se(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}Se.prototype.h=function(){this.defaultPrevented=!0};var _t=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const y=()=>{};a.addEventListener("test",y,m),a.removeEventListener("test",y,m)}catch{}return u}();function pt(u,m){if(Se.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var y=this.type=u.type,T=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget){if(j){e:{try{P(m.nodeName);var L=!0;break e}catch{}L=!1}L||(m=null)}}else y=="mouseover"?m=u.fromElement:y=="mouseout"&&(m=u.toElement);this.relatedTarget=m,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:mt[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&pt.aa.h.call(this)}}w(pt,Se);var mt={2:"touch",3:"pen",4:"mouse"};pt.prototype.h=function(){pt.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var st="closure_listenable_"+(1e6*Math.random()|0),We=0;function Ut(u,m,y,T,L){this.listener=u,this.proxy=null,this.src=m,this.type=y,this.capture=!!T,this.ha=L,this.key=++We,this.da=this.fa=!1}function ot(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function bt(u){this.src=u,this.g={},this.h=0}bt.prototype.add=function(u,m,y,T,L){var V=u.toString();u=this.g[V],u||(u=this.g[V]=[],this.h++);var W=jn(u,m,T,L);return-1<W?(m=u[W],y||(m.fa=!1)):(m=new Ut(m,this.src,V,!!T,L),m.fa=y,u.push(m)),m};function Et(u,m){var y=m.type;if(y in u.g){var T=u.g[y],L=Array.prototype.indexOf.call(T,m,void 0),V;(V=0<=L)&&Array.prototype.splice.call(T,L,1),V&&(ot(m),u.g[y].length==0&&(delete u.g[y],u.h--))}}function jn(u,m,y,T){for(var L=0;L<u.length;++L){var V=u[L];if(!V.da&&V.listener==m&&V.capture==!!y&&V.ha==T)return L}return-1}var Is="closure_lm_"+(1e6*Math.random()|0),Rt={};function ks(u,m,y,T,L){if(Array.isArray(m)){for(var V=0;V<m.length;V++)ks(u,m[V],y,T,L);return null}return y=Yr(y),u&&u[st]?u.K(m,y,c(T)?!!T.capture:!1,L):qr(u,m,y,!1,T,L)}function qr(u,m,y,T,L,V){if(!m)throw Error("Invalid event type");var W=c(L)?!!L.capture:!!L,De=Qr(u);if(De||(u[Is]=De=new bt(u)),y=De.add(m,y,T,W,V),y.proxy)return y;if(T=Gr(),y.proxy=T,T.src=u,T.listener=y,u.addEventListener)_t||(L=W),L===void 0&&(L=!1),u.addEventListener(m.toString(),T,L);else if(u.attachEvent)u.attachEvent(Ii(m.toString()),T);else if(u.addListener&&u.removeListener)u.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return y}function Gr(){function u(y){return m.call(u.src,u.listener,y)}const m=Cs;return u}function Oe(u,m,y,T,L){if(Array.isArray(m))for(var V=0;V<m.length;V++)Oe(u,m[V],y,T,L);else T=c(T)?!!T.capture:!!T,y=Yr(y),u&&u[st]?(u=u.i,m=String(m).toString(),m in u.g&&(V=u.g[m],y=jn(V,y,T,L),-1<y&&(ot(V[y]),Array.prototype.splice.call(V,y,1),V.length==0&&(delete u.g[m],u.h--)))):u&&(u=Qr(u))&&(m=u.g[m.toString()],u=-1,m&&(u=jn(m,y,T,L)),(y=-1<u?m[u]:null)&&Kr(y))}function Kr(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[st])Et(m.i,u);else{var y=u.type,T=u.proxy;m.removeEventListener?m.removeEventListener(y,T,u.capture):m.detachEvent?m.detachEvent(Ii(y),T):m.addListener&&m.removeListener&&m.removeListener(T),(y=Qr(m))?(Et(y,u),y.h==0&&(y.src=null,m[Is]=null)):ot(u)}}}function Ii(u){return u in Rt?Rt[u]:Rt[u]="on"+u}function Cs(u,m){if(u.da)u=!0;else{m=new pt(m,this);var y=u.listener,T=u.ha||u.src;u.fa&&Kr(u),u=y.call(T,m)}return u}function Qr(u){return u=u[Is],u instanceof bt?u:null}var ki="__closure_events_fn_"+(1e9*Math.random()>>>0);function Yr(u){return typeof u=="function"?u:(u[ki]||(u[ki]=function(m){return u.handleEvent(m)}),u[ki])}function Me(){oe.call(this),this.i=new bt(this),this.M=this,this.F=null}w(Me,oe),Me.prototype[st]=!0,Me.prototype.removeEventListener=function(u,m,y,T){Oe(this,u,m,y,T)};function tt(u,m){var y,T=u.F;if(T)for(y=[];T;T=T.F)y.push(T);if(u=u.M,T=m.type||m,typeof m=="string")m=new Se(m,u);else if(m instanceof Se)m.target=m.target||u;else{var L=m;m=new Se(T,u),R(m,L)}if(L=!0,y)for(var V=y.length-1;0<=V;V--){var W=m.g=y[V];L=Ln(W,T,!0,m)&&L}if(W=m.g=u,L=Ln(W,T,!0,m)&&L,L=Ln(W,T,!1,m)&&L,y)for(V=0;V<y.length;V++)W=m.g=y[V],L=Ln(W,T,!1,m)&&L}Me.prototype.N=function(){if(Me.aa.N.call(this),this.i){var u=this.i,m;for(m in u.g){for(var y=u.g[m],T=0;T<y.length;T++)ot(y[T]);delete u.g[m],u.h--}}this.F=null},Me.prototype.K=function(u,m,y,T){return this.i.add(String(u),m,!1,y,T)},Me.prototype.L=function(u,m,y,T){return this.i.add(String(u),m,!0,y,T)};function Ln(u,m,y,T){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();for(var L=!0,V=0;V<m.length;++V){var W=m[V];if(W&&!W.da&&W.capture==y){var De=W.listener,Dt=W.ha||W.src;W.fa&&Et(u.i,W),L=De.call(Dt,T)!==!1&&L}}return L&&!T.defaultPrevented}function Jr(u,m,y){if(typeof u=="function")y&&(u=p(u,y));else if(u&&typeof u.handleEvent=="function")u=p(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:a.setTimeout(u,m||0)}function yo(u){u.g=Jr(()=>{u.g=null,u.i&&(u.i=!1,yo(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class Ci extends oe{constructor(m,y){super(),this.m=m,this.l=y,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:yo(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function wn(u){oe.call(this),this.h=u,this.g={}}w(wn,oe);var an=[];function qe(u){M(u.g,function(m,y){this.g.hasOwnProperty(y)&&Kr(m)},u),u.g={}}wn.prototype.N=function(){wn.aa.N.call(this),qe(this)},wn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ai=a.JSON.stringify,As=a.JSON.parse,Ri=class{stringify(u){return a.JSON.stringify(u,void 0)}parse(u){return a.JSON.parse(u,void 0)}};function Zr(){}Zr.prototype.h=null;function Xr(u){return u.h||(u.h=u.i())}function ei(){}var Mn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ti(){Se.call(this,"d")}w(ti,Se);function Pi(){Se.call(this,"c")}w(Pi,Se);var je={},en=null;function X(){return en=en||new Me}je.La="serverreachability";function me(u){Se.call(this,je.La,u)}w(me,Se);function gt(u){const m=X();tt(m,new me(m))}je.STAT_EVENT="statevent";function xr(u,m){Se.call(this,je.STAT_EVENT,u),this.stat=m}w(xr,Se);function H(u){const m=X();tt(m,new xr(m,u))}je.Ma="timingevent";function ne(u,m){Se.call(this,je.Ma,u),this.size=m}w(ne,Se);function re(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){u()},m)}function Ve(){this.g=!0}Ve.prototype.xa=function(){this.g=!1};function St(u,m,y,T,L,V){u.info(function(){if(u.g)if(V)for(var W="",De=V.split("&"),Dt=0;Dt<De.length;Dt++){var Ie=De[Dt].split("=");if(1<Ie.length){var Bt=Ie[0];Ie=Ie[1];var Ht=Bt.split("_");W=2<=Ht.length&&Ht[1]=="type"?W+(Bt+"="+Ie+"&"):W+(Bt+"=redacted&")}}else W=null;else W=V;return"XMLHTTP REQ ("+T+") [attempt "+L+"]: "+m+`
`+y+`
`+W})}function Vn(u,m,y,T,L,V,W){u.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+L+"]: "+m+`
`+y+`
`+V+" "+W})}function Pt(u,m,y,T){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+ln(u,y)+(T?" "+T:"")})}function Nt(u,m){u.info(function(){return"TIMEOUT: "+m})}Ve.prototype.info=function(){};function ln(u,m){if(!u.g)return m;if(!m)return null;try{var y=JSON.parse(m);if(y){for(u=0;u<y.length;u++)if(Array.isArray(y[u])){var T=y[u];if(!(2>T.length)){var L=T[1];if(Array.isArray(L)&&!(1>L.length)){var V=L[0];if(V!="noop"&&V!="stop"&&V!="close")for(var W=1;W<L.length;W++)L[W]=""}}}}return Ai(y)}catch{return m}}var Pe={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ni={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ya;function vo(){}w(vo,Zr),vo.prototype.g=function(){return new XMLHttpRequest},vo.prototype.i=function(){return{}},Ya=new vo;function Zn(u,m,y,T){this.j=u,this.i=m,this.l=y,this.R=T||1,this.U=new wn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ja}function Ja(){this.i=null,this.g="",this.h=!1}var Za={},xo={};function wo(u,m,y){u.L=1,u.v=nc(ri(m)),u.m=y,u.P=!0,Te(u,null)}function Te(u,m){u.F=Date.now(),wr(u),u.A=ri(u.v);var y=u.A,T=u.R;Array.isArray(T)||(T=[String(T)]),v1(y.i,"t",T),u.C=0,y=u.j.J,u.h=new Ja,u.g=L1(u.j,y?m:null,!u.m),0<u.O&&(u.M=new Ci(p(u.Y,u,u.g),u.O)),m=u.U,y=u.g,T=u.ca;var L="readystatechange";Array.isArray(L)||(L&&(an[0]=L.toString()),L=an);for(var V=0;V<L.length;V++){var W=ks(y,L[V],T||m.handleEvent,!1,m.h||m);if(!W)break;m.g[W.key]=W}m=u.H?S(u.H):{},u.m?(u.u||(u.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,m)):(u.u="GET",u.g.ea(u.A,u.u,null,m)),gt(),St(u.i,u.u,u.A,u.l,u.R,u.m)}Zn.prototype.ca=function(u){u=u.target;const m=this.M;m&&ii(u)==3?m.j():this.Y(u)},Zn.prototype.Y=function(u){try{if(u==this.g)e:{const Ht=ii(this.g);var m=this.g.Ba();const Eo=this.g.Z();if(!(3>Ht)&&(Ht!=3||this.g&&(this.h.h||this.g.oa()||T1(this.g)))){this.J||Ht!=4||m==7||(m==8||0>=Eo?gt(3):gt(2)),Rs(this);var y=this.g.Z();this.X=y;t:if(Fn(this)){var T=T1(this.g);u="";var L=T.length,V=ii(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ps(this),el(this);var W="";break t}this.h.i=new a.TextDecoder}for(m=0;m<L;m++)this.h.h=!0,u+=this.h.i.decode(T[m],{stream:!(V&&m==L-1)});T.length=0,this.h.g+=u,this.C=0,W=this.h.g}else W=this.g.oa();if(this.o=y==200,Vn(this.i,this.u,this.A,this.l,this.R,Ht,y),this.o){if(this.T&&!this.K){t:{if(this.g){var De,Dt=this.g;if((De=Dt.g?Dt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(De)){var Ie=De;break t}}Ie=null}if(y=Ie)Pt(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,If(this,y);else{this.o=!1,this.s=3,H(12),Ps(this),el(this);break e}}if(this.P){y=!0;let Xn;for(;!this.J&&this.C<W.length;)if(Xn=Xa(this,W),Xn==xo){Ht==4&&(this.s=4,H(14),y=!1),Pt(this.i,this.l,null,"[Incomplete Response]");break}else if(Xn==Za){this.s=4,H(15),Pt(this.i,this.l,W,"[Invalid Chunk]"),y=!1;break}else Pt(this.i,this.l,Xn,null),If(this,Xn);if(Fn(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ht!=4||W.length!=0||this.h.h||(this.s=1,H(16),y=!1),this.o=this.o&&y,!y)Pt(this.i,this.l,W,"[Invalid Chunked Response]"),Ps(this),el(this);else if(0<W.length&&!this.W){this.W=!0;var Bt=this.j;Bt.g==this&&Bt.ba&&!Bt.M&&(Bt.j.info("Great, no buffering proxy detected. Bytes received: "+W.length),Nf(Bt),Bt.M=!0,H(11))}}else Pt(this.i,this.l,W,null),If(this,W);Ht==4&&Ps(this),this.o&&!this.J&&(Ht==4?N1(this.j,this):(this.o=!1,wr(this)))}else fC(this.g),y==400&&0<W.indexOf("Unknown SID")?(this.s=3,H(12)):(this.s=0,H(13)),Ps(this),el(this)}}}catch{}finally{}};function Fn(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function Xa(u,m){var y=u.C,T=m.indexOf(`
`,y);return T==-1?xo:(y=Number(m.substring(y,T)),isNaN(y)?Za:(T+=1,T+y>m.length?xo:(m=m.slice(T,T+y),u.C=T+y,m)))}Zn.prototype.cancel=function(){this.J=!0,Ps(this)};function wr(u){u.S=Date.now()+u.I,Xu(u,u.I)}function Xu(u,m){if(u.B!=null)throw Error("WatchDog timer not null");u.B=re(p(u.ba,u),m)}function Rs(u){u.B&&(a.clearTimeout(u.B),u.B=null)}Zn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(Nt(this.i,this.A),this.L!=2&&(gt(),H(17)),Ps(this),this.s=2,el(this)):Xu(this,this.S-u)};function el(u){u.j.G==0||u.J||N1(u.j,u)}function Ps(u){Rs(u);var m=u.M;m&&typeof m.ma=="function"&&m.ma(),u.M=null,qe(u.U),u.g&&(m=u.g,u.g=null,m.abort(),m.ma())}function If(u,m){try{var y=u.j;if(y.G!=0&&(y.g==u||kf(y.h,u))){if(!u.K&&kf(y.h,u)&&y.G==3){try{var T=y.Da.g.parse(m)}catch{T=null}if(Array.isArray(T)&&T.length==3){var L=T;if(L[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<u.F)lc(y),oc(y);else break e;Pf(y),H(18)}}else y.za=L[1],0<y.za-y.T&&37500>L[2]&&y.F&&y.v==0&&!y.C&&(y.C=re(p(y.Za,y),6e3));if(1>=u1(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else Ds(y,11)}else if((u.K||y.g==u)&&lc(y),!v(m))for(L=y.Da.g.parse(m),m=0;m<L.length;m++){let Ie=L[m];if(y.T=Ie[0],Ie=Ie[1],y.G==2)if(Ie[0]=="c"){y.K=Ie[1],y.ia=Ie[2];const Bt=Ie[3];Bt!=null&&(y.la=Bt,y.j.info("VER="+y.la));const Ht=Ie[4];Ht!=null&&(y.Aa=Ht,y.j.info("SVER="+y.Aa));const Eo=Ie[5];Eo!=null&&typeof Eo=="number"&&0<Eo&&(T=1.5*Eo,y.L=T,y.j.info("backChannelRequestTimeoutMs_="+T)),T=y;const Xn=u.g;if(Xn){const cc=Xn.g?Xn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(cc){var V=T.h;V.g||cc.indexOf("spdy")==-1&&cc.indexOf("quic")==-1&&cc.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(Cf(V,V.h),V.h=null))}if(T.D){const Df=Xn.g?Xn.g.getResponseHeader("X-HTTP-Session-Id"):null;Df&&(T.ya=Df,Fe(T.I,T.D,Df))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-u.F,y.j.info("Handshake RTT: "+y.R+"ms")),T=y;var W=u;if(T.qa=j1(T,T.J?T.ia:null,T.W),W.K){c1(T.h,W);var De=W,Dt=T.L;Dt&&(De.I=Dt),De.B&&(Rs(De),wr(De)),T.g=W}else R1(T);0<y.i.length&&ac(y)}else Ie[0]!="stop"&&Ie[0]!="close"||Ds(y,7);else y.G==3&&(Ie[0]=="stop"||Ie[0]=="close"?Ie[0]=="stop"?Ds(y,7):Rf(y):Ie[0]!="noop"&&y.l&&y.l.ta(Ie),y.v=0)}}gt(4)}catch{}}var J4=class{constructor(u,m){this.g=u,this.map=m}};function a1(u){this.l=u||10,a.PerformanceNavigationTiming?(u=a.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function l1(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function u1(u){return u.h?1:u.g?u.g.size:0}function kf(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function Cf(u,m){u.g?u.g.add(m):u.h=m}function c1(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}a1.prototype.cancel=function(){if(this.i=d1(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function d1(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const y of u.g.values())m=m.concat(y.D);return m}return k(u.i)}function Z4(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(l(u)){for(var m=[],y=u.length,T=0;T<y;T++)m.push(u[T]);return m}m=[],y=0;for(T in u)m[y++]=u[T];return m}function X4(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(l(u)||typeof u=="string"){var m=[];u=u.length;for(var y=0;y<u;y++)m.push(y);return m}m=[],y=0;for(const T in u)m[y++]=T;return m}}}function h1(u,m){if(u.forEach&&typeof u.forEach=="function")u.forEach(m,void 0);else if(l(u)||typeof u=="string")Array.prototype.forEach.call(u,m,void 0);else for(var y=X4(u),T=Z4(u),L=T.length,V=0;V<L;V++)m.call(void 0,T[V],y&&y[V],u)}var f1=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function eC(u,m){if(u){u=u.split("&");for(var y=0;y<u.length;y++){var T=u[y].indexOf("="),L=null;if(0<=T){var V=u[y].substring(0,T);L=u[y].substring(T+1)}else V=u[y];m(V,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function Ns(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof Ns){this.h=u.h,ec(this,u.j),this.o=u.o,this.g=u.g,tc(this,u.s),this.l=u.l;var m=u.i,y=new rl;y.i=m.i,m.g&&(y.g=new Map(m.g),y.h=m.h),p1(this,y),this.m=u.m}else u&&(m=String(u).match(f1))?(this.h=!1,ec(this,m[1]||"",!0),this.o=tl(m[2]||""),this.g=tl(m[3]||"",!0),tc(this,m[4]),this.l=tl(m[5]||"",!0),p1(this,m[6]||"",!0),this.m=tl(m[7]||"")):(this.h=!1,this.i=new rl(null,this.h))}Ns.prototype.toString=function(){var u=[],m=this.j;m&&u.push(nl(m,m1,!0),":");var y=this.g;return(y||m=="file")&&(u.push("//"),(m=this.o)&&u.push(nl(m,m1,!0),"@"),u.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&u.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&u.push("/"),u.push(nl(y,y.charAt(0)=="/"?rC:nC,!0))),(y=this.i.toString())&&u.push("?",y),(y=this.m)&&u.push("#",nl(y,sC)),u.join("")};function ri(u){return new Ns(u)}function ec(u,m,y){u.j=y?tl(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function tc(u,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);u.s=m}else u.s=null}function p1(u,m,y){m instanceof rl?(u.i=m,oC(u.i,u.h)):(y||(m=nl(m,iC)),u.i=new rl(m,u.h))}function Fe(u,m,y){u.i.set(m,y)}function nc(u){return Fe(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function tl(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function nl(u,m,y){return typeof u=="string"?(u=encodeURI(u).replace(m,tC),y&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function tC(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var m1=/[#\/\?@]/g,nC=/[#\?:]/g,rC=/[#\?]/g,iC=/[#\?@]/g,sC=/#/g;function rl(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function Ni(u){u.g||(u.g=new Map,u.h=0,u.i&&eC(u.i,function(m,y){u.add(decodeURIComponent(m.replace(/\+/g," ")),y)}))}t=rl.prototype,t.add=function(u,m){Ni(this),this.i=null,u=_o(this,u);var y=this.g.get(u);return y||this.g.set(u,y=[]),y.push(m),this.h+=1,this};function g1(u,m){Ni(u),m=_o(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function y1(u,m){return Ni(u),m=_o(u,m),u.g.has(m)}t.forEach=function(u,m){Ni(this),this.g.forEach(function(y,T){y.forEach(function(L){u.call(m,L,T,this)},this)},this)},t.na=function(){Ni(this);const u=Array.from(this.g.values()),m=Array.from(this.g.keys()),y=[];for(let T=0;T<m.length;T++){const L=u[T];for(let V=0;V<L.length;V++)y.push(m[T])}return y},t.V=function(u){Ni(this);let m=[];if(typeof u=="string")y1(this,u)&&(m=m.concat(this.g.get(_o(this,u))));else{u=Array.from(this.g.values());for(let y=0;y<u.length;y++)m=m.concat(u[y])}return m},t.set=function(u,m){return Ni(this),this.i=null,u=_o(this,u),y1(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},t.get=function(u,m){return u?(u=this.V(u),0<u.length?String(u[0]):m):m};function v1(u,m,y){g1(u,m),0<y.length&&(u.i=null,u.g.set(_o(u,m),k(y)),u.h+=y.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(var y=0;y<m.length;y++){var T=m[y];const V=encodeURIComponent(String(T)),W=this.V(T);for(T=0;T<W.length;T++){var L=V;W[T]!==""&&(L+="="+encodeURIComponent(String(W[T]))),u.push(L)}}return this.i=u.join("&")};function _o(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function oC(u,m){m&&!u.j&&(Ni(u),u.i=null,u.g.forEach(function(y,T){var L=T.toLowerCase();T!=L&&(g1(this,T),v1(this,L,y))},u)),u.j=m}function aC(u,m){const y=new Ve;if(a.Image){const T=new Image;T.onload=g(Di,y,"TestLoadImage: loaded",!0,m,T),T.onerror=g(Di,y,"TestLoadImage: error",!1,m,T),T.onabort=g(Di,y,"TestLoadImage: abort",!1,m,T),T.ontimeout=g(Di,y,"TestLoadImage: timeout",!1,m,T),a.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=u}else m(!1)}function lC(u,m){const y=new Ve,T=new AbortController,L=setTimeout(()=>{T.abort(),Di(y,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:T.signal}).then(V=>{clearTimeout(L),V.ok?Di(y,"TestPingServer: ok",!0,m):Di(y,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(L),Di(y,"TestPingServer: error",!1,m)})}function Di(u,m,y,T,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),T(y)}catch{}}function uC(){this.g=new Ri}function cC(u,m,y){const T=y||"";try{h1(u,function(L,V){let W=L;c(L)&&(W=Ai(L)),m.push(T+V+"="+encodeURIComponent(W))})}catch(L){throw m.push(T+"type="+encodeURIComponent("_badmap")),L}}function rc(u){this.l=u.Ub||null,this.j=u.eb||!1}w(rc,Zr),rc.prototype.g=function(){return new ic(this.l,this.j)},rc.prototype.i=function(u){return function(){return u}}({});function ic(u,m){Me.call(this),this.D=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}w(ic,Me),t=ic.prototype,t.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=m,this.readyState=1,sl(this)},t.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(m.body=u),(this.D||a).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,il(this)),this.readyState=0},t.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,sl(this)),this.g&&(this.readyState=3,sl(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;x1(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function x1(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}t.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?il(this):sl(this),this.readyState==3&&x1(this)}},t.Ra=function(u){this.g&&(this.response=this.responseText=u,il(this))},t.Qa=function(u){this.g&&(this.response=u,il(this))},t.ga=function(){this.g&&il(this)};function il(u){u.readyState=4,u.l=null,u.j=null,u.v=null,sl(u)}t.setRequestHeader=function(u,m){this.u.append(u,m)},t.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var y=m.next();!y.done;)y=y.value,u.push(y[0]+": "+y[1]),y=m.next();return u.join(`\r
`)};function sl(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(ic.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function w1(u){let m="";return M(u,function(y,T){m+=T,m+=":",m+=y,m+=`\r
`}),m}function Af(u,m,y){e:{for(T in y){var T=!1;break e}T=!0}T||(y=w1(y),typeof u=="string"?y!=null&&encodeURIComponent(String(y)):Fe(u,m,y))}function Je(u){Me.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}w(Je,Me);var dC=/^https?$/i,hC=["POST","PUT"];t=Je.prototype,t.Ha=function(u){this.J=u},t.ea=function(u,m,y,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ya.g(),this.v=this.o?Xr(this.o):Xr(Ya),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch(V){_1(this,V);return}if(u=y||"",y=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var L in T)y.set(L,T[L]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const V of T.keys())y.set(V,T.get(V));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(y.keys()).find(V=>V.toLowerCase()=="content-type"),L=a.FormData&&u instanceof a.FormData,!(0<=Array.prototype.indexOf.call(hC,m,void 0))||T||L||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,W]of y)this.g.setRequestHeader(V,W);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{S1(this),this.u=!0,this.g.send(u),this.u=!1}catch(V){_1(this,V)}};function _1(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.m=5,b1(u),sc(u)}function b1(u){u.A||(u.A=!0,tt(u,"complete"),tt(u,"error"))}t.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,tt(this,"complete"),tt(this,"abort"),sc(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),sc(this,!0)),Je.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?E1(this):this.bb())},t.bb=function(){E1(this)};function E1(u){if(u.h&&typeof o<"u"&&(!u.v[1]||ii(u)!=4||u.Z()!=2)){if(u.u&&ii(u)==4)Jr(u.Ea,0,u);else if(tt(u,"readystatechange"),ii(u)==4){u.h=!1;try{const W=u.Z();e:switch(W){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var y;if(!(y=m)){var T;if(T=W===0){var L=String(u.D).match(f1)[1]||null;!L&&a.self&&a.self.location&&(L=a.self.location.protocol.slice(0,-1)),T=!dC.test(L?L.toLowerCase():"")}y=T}if(y)tt(u,"complete"),tt(u,"success");else{u.m=6;try{var V=2<ii(u)?u.g.statusText:""}catch{V=""}u.l=V+" ["+u.Z()+"]",b1(u)}}finally{sc(u)}}}}function sc(u,m){if(u.g){S1(u);const y=u.g,T=u.v[0]?()=>{}:null;u.g=null,u.v=null,m||tt(u,"ready");try{y.onreadystatechange=T}catch{}}}function S1(u){u.I&&(a.clearTimeout(u.I),u.I=null)}t.isActive=function(){return!!this.g};function ii(u){return u.g?u.g.readyState:0}t.Z=function(){try{return 2<ii(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),As(m)}};function T1(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function fC(u){const m={};u=(u.g&&2<=ii(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<u.length;T++){if(v(u[T]))continue;var y=N(u[T]);const L=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const V=m[L]||[];m[L]=V,V.push(y)}b(m,function(T){return T.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ol(u,m,y){return y&&y.internalChannelParams&&y.internalChannelParams[u]||m}function I1(u){this.Aa=0,this.i=[],this.j=new Ve,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ol("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ol("baseRetryDelayMs",5e3,u),this.cb=ol("retryDelaySeedMs",1e4,u),this.Wa=ol("forwardChannelMaxRetries",2,u),this.wa=ol("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new a1(u&&u.concurrentRequestLimit),this.Da=new uC,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=I1.prototype,t.la=8,t.G=1,t.connect=function(u,m,y,T){H(0),this.W=u,this.H=m||{},y&&T!==void 0&&(this.H.OSID=y,this.H.OAID=T),this.F=this.X,this.I=j1(this,null,this.W),ac(this)};function Rf(u){if(k1(u),u.G==3){var m=u.U++,y=ri(u.I);if(Fe(y,"SID",u.K),Fe(y,"RID",m),Fe(y,"TYPE","terminate"),al(u,y),m=new Zn(u,u.j,m),m.L=2,m.v=nc(ri(y)),y=!1,a.navigator&&a.navigator.sendBeacon)try{y=a.navigator.sendBeacon(m.v.toString(),"")}catch{}!y&&a.Image&&(new Image().src=m.v,y=!0),y||(m.g=L1(m.j,null),m.g.ea(m.v)),m.F=Date.now(),wr(m)}O1(u)}function oc(u){u.g&&(Nf(u),u.g.cancel(),u.g=null)}function k1(u){oc(u),u.u&&(a.clearTimeout(u.u),u.u=null),lc(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&a.clearTimeout(u.s),u.s=null)}function ac(u){if(!l1(u.h)&&!u.s){u.s=!0;var m=u.Ga;se||G(),z||(se(),z=!0),U.add(m,u),u.B=0}}function pC(u,m){return u1(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=m.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=re(p(u.Ga,u,m),D1(u,u.B)),u.B++,!0)}t.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const L=new Zn(this,this.j,u);let V=this.o;if(this.S&&(V?(V=S(V),R(V,this.S)):V=this.S),this.m!==null||this.O||(L.H=V,V=null),this.P)e:{for(var m=0,y=0;y<this.i.length;y++){t:{var T=this.i[y];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break t}T=void 0}if(T===void 0)break;if(m+=T,4096<m){m=y;break e}if(m===4096||y===this.i.length-1){m=y+1;break e}}m=1e3}else m=1e3;m=A1(this,L,m),y=ri(this.I),Fe(y,"RID",u),Fe(y,"CVER",22),this.D&&Fe(y,"X-HTTP-Session-Id",this.D),al(this,y),V&&(this.O?m="headers="+encodeURIComponent(String(w1(V)))+"&"+m:this.m&&Af(y,this.m,V)),Cf(this.h,L),this.Ua&&Fe(y,"TYPE","init"),this.P?(Fe(y,"$req",m),Fe(y,"SID","null"),L.T=!0,wo(L,y,null)):wo(L,y,m),this.G=2}}else this.G==3&&(u?C1(this,u):this.i.length==0||l1(this.h)||C1(this))};function C1(u,m){var y;m?y=m.l:y=u.U++;const T=ri(u.I);Fe(T,"SID",u.K),Fe(T,"RID",y),Fe(T,"AID",u.T),al(u,T),u.m&&u.o&&Af(T,u.m,u.o),y=new Zn(u,u.j,y,u.B+1),u.m===null&&(y.H=u.o),m&&(u.i=m.D.concat(u.i)),m=A1(u,y,1e3),y.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),Cf(u.h,y),wo(y,T,m)}function al(u,m){u.H&&M(u.H,function(y,T){Fe(m,T,y)}),u.l&&h1({},function(y,T){Fe(m,T,y)})}function A1(u,m,y){y=Math.min(u.i.length,y);var T=u.l?p(u.l.Na,u.l,u):null;e:{var L=u.i;let V=-1;for(;;){const W=["count="+y];V==-1?0<y?(V=L[0].g,W.push("ofs="+V)):V=0:W.push("ofs="+V);let De=!0;for(let Dt=0;Dt<y;Dt++){let Ie=L[Dt].g;const Bt=L[Dt].map;if(Ie-=V,0>Ie)V=Math.max(0,L[Dt].g-100),De=!1;else try{cC(Bt,W,"req"+Ie+"_")}catch{T&&T(Bt)}}if(De){T=W.join("&");break e}}}return u=u.i.splice(0,y),m.D=u,T}function R1(u){if(!u.g&&!u.u){u.Y=1;var m=u.Fa;se||G(),z||(se(),z=!0),U.add(m,u),u.v=0}}function Pf(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=re(p(u.Fa,u),D1(u,u.v)),u.v++,!0)}t.Fa=function(){if(this.u=null,P1(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=re(p(this.ab,this),u)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,H(10),oc(this),P1(this))};function Nf(u){u.A!=null&&(a.clearTimeout(u.A),u.A=null)}function P1(u){u.g=new Zn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var m=ri(u.qa);Fe(m,"RID","rpc"),Fe(m,"SID",u.K),Fe(m,"AID",u.T),Fe(m,"CI",u.F?"0":"1"),!u.F&&u.ja&&Fe(m,"TO",u.ja),Fe(m,"TYPE","xmlhttp"),al(u,m),u.m&&u.o&&Af(m,u.m,u.o),u.L&&(u.g.I=u.L);var y=u.g;u=u.ia,y.L=1,y.v=nc(ri(m)),y.m=null,y.P=!0,Te(y,u)}t.Za=function(){this.C!=null&&(this.C=null,oc(this),Pf(this),H(19))};function lc(u){u.C!=null&&(a.clearTimeout(u.C),u.C=null)}function N1(u,m){var y=null;if(u.g==m){lc(u),Nf(u),u.g=null;var T=2}else if(kf(u.h,m))y=m.D,c1(u.h,m),T=1;else return;if(u.G!=0){if(m.o)if(T==1){y=m.m?m.m.length:0,m=Date.now()-m.F;var L=u.B;T=X(),tt(T,new ne(T,y)),ac(u)}else R1(u);else if(L=m.s,L==3||L==0&&0<m.X||!(T==1&&pC(u,m)||T==2&&Pf(u)))switch(y&&0<y.length&&(m=u.h,m.i=m.i.concat(y)),L){case 1:Ds(u,5);break;case 4:Ds(u,10);break;case 3:Ds(u,6);break;default:Ds(u,2)}}}function D1(u,m){let y=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(y*=2),y*m}function Ds(u,m){if(u.j.info("Error code "+m),m==2){var y=p(u.fb,u),T=u.Xa;const L=!T;T=new Ns(T||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||ec(T,"https"),nc(T),L?aC(T.toString(),y):lC(T.toString(),y)}else H(2);u.G=0,u.l&&u.l.sa(m),O1(u),k1(u)}t.fb=function(u){u?(this.j.info("Successfully pinged google.com"),H(2)):(this.j.info("Failed to ping google.com"),H(1))};function O1(u){if(u.G=0,u.ka=[],u.l){const m=d1(u.h);(m.length!=0||u.i.length!=0)&&(C(u.ka,m),C(u.ka,u.i),u.h.i.length=0,k(u.i),u.i.length=0),u.l.ra()}}function j1(u,m,y){var T=y instanceof Ns?ri(y):new Ns(y);if(T.g!="")m&&(T.g=m+"."+T.g),tc(T,T.s);else{var L=a.location;T=L.protocol,m=m?m+"."+L.hostname:L.hostname,L=+L.port;var V=new Ns(null);T&&ec(V,T),m&&(V.g=m),L&&tc(V,L),y&&(V.l=y),T=V}return y=u.D,m=u.ya,y&&m&&Fe(T,y,m),Fe(T,"VER",u.la),al(u,T),T}function L1(u,m,y){if(m&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Ca&&!u.pa?new Je(new rc({eb:y})):new Je(u.pa),m.Ha(u.J),m}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function M1(){}t=M1.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function uc(){}uc.prototype.g=function(u,m){return new _n(u,m)};function _n(u,m){Me.call(this),this.g=new I1(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(u?u["X-WebChannel-Client-Profile"]=m.va:u={"X-WebChannel-Client-Profile":m.va}),this.g.S=u,(u=m&&m.Sb)&&!v(u)&&(this.g.m=u),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!v(m)&&(this.g.D=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new bo(this)}w(_n,Me),_n.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},_n.prototype.close=function(){Rf(this.g)},_n.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var y={};y.__data__=u,u=y}else this.u&&(y={},y.__data__=Ai(u),u=y);m.i.push(new J4(m.Ya++,u)),m.G==3&&ac(m)},_n.prototype.N=function(){this.g.l=null,delete this.j,Rf(this.g),delete this.g,_n.aa.N.call(this)};function V1(u){ti.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){e:{for(const y in m){u=y;break e}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}w(V1,ti);function F1(){Pi.call(this),this.status=1}w(F1,Pi);function bo(u){this.g=u}w(bo,M1),bo.prototype.ua=function(){tt(this.g,"a")},bo.prototype.ta=function(u){tt(this.g,new V1(u))},bo.prototype.sa=function(u){tt(this.g,new F1)},bo.prototype.ra=function(){tt(this.g,"b")},uc.prototype.createWebChannel=uc.prototype.g,_n.prototype.send=_n.prototype.o,_n.prototype.open=_n.prototype.m,_n.prototype.close=_n.prototype.close,$I=function(){return new uc},FI=function(){return X()},VI=je,wg={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Pe.NO_ERROR=0,Pe.TIMEOUT=8,Pe.HTTP_ERROR=6,dd=Pe,ni.COMPLETE="complete",MI=ni,ei.EventType=Mn,Mn.OPEN="a",Mn.CLOSE="b",Mn.ERROR="c",Mn.MESSAGE="d",Me.prototype.listen=Me.prototype.K,Cl=ei,Je.prototype.listenOnce=Je.prototype.L,Je.prototype.getLastError=Je.prototype.Ka,Je.prototype.getLastErrorCode=Je.prototype.Ba,Je.prototype.getStatus=Je.prototype.Z,Je.prototype.getResponseJson=Je.prototype.Oa,Je.prototype.getResponseText=Je.prototype.oa,Je.prototype.send=Je.prototype.ea,Je.prototype.setWithCredentials=Je.prototype.Ha,LI=Je}).apply(typeof Lc<"u"?Lc:typeof self<"u"?self:typeof window<"u"?window:{});const qw="@firebase/firestore",Gw="4.7.14";/**
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
 */class Qt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Qt.UNAUTHENTICATED=new Qt(null),Qt.GOOGLE_CREDENTIALS=new Qt("google-credentials-uid"),Qt.FIRST_PARTY=new Qt("first-party-uid"),Qt.MOCK_USER=new Qt("mock-user");/**
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
 */let Ha="11.7.3";/**
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
 */const oo=new sy("@firebase/firestore");function Vo(){return oo.logLevel}function K(t,...e){if(oo.logLevel<=we.DEBUG){const n=e.map(fy);oo.debug(`Firestore (${Ha}): ${t}`,...n)}}function _i(t,...e){if(oo.logLevel<=we.ERROR){const n=e.map(fy);oo.error(`Firestore (${Ha}): ${t}`,...n)}}function Sa(t,...e){if(oo.logLevel<=we.WARN){const n=e.map(fy);oo.warn(`Firestore (${Ha}): ${t}`,...n)}}function fy(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function ie(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,zI(t,r,n)}function zI(t,e,n){let r=`FIRESTORE (${Ha}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw _i(r),new Error(r)}function Ce(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||zI(e,i,r)}function ce(t,e){return t}/**
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
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class J extends Ti{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class fi{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class UI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class M9{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Qt.UNAUTHENTICATED))}shutdown(){}}class V9{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class F9{constructor(e){this.t=e,this.currentUser=Qt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ce(this.o===void 0,42304);let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new fi;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new fi,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{K("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(K("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new fi)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(K("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ce(typeof r.accessToken=="string",31837,{l:r}),new UI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ce(e===null||typeof e=="string",2055,{h:e}),new Qt(e)}}class $9{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Qt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class z9{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new $9(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Qt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Kw{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class U9{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,uI(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Ce(this.o===void 0,3512);const r=s=>{s.error!=null&&K("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,K("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{K("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):K("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Kw(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ce(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Kw(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function B9(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function BI(){return new TextEncoder}/**
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
 */class HI{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=B9(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function pe(t,e){return t<e?-1:t>e?1:0}function _g(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),i=e.codePointAt(n);if(r!==i){if(r<128&&i<128)return pe(r,i);{const s=BI(),o=H9(s.encode(Qw(t,n)),s.encode(Qw(e,n)));return o!==0?o:pe(r,i)}}n+=r>65535?2:1}return pe(t.length,e.length)}function Qw(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function H9(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return pe(t[n],e[n]);return pe(t.length,e.length)}function Ta(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */const Yw=-62135596800,Jw=1e6;class xt{static now(){return xt.fromMillis(Date.now())}static fromDate(e){return xt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Jw);return new xt(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new J($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new J($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Yw)throw new J($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new J($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Jw}_compareTo(e){return this.seconds===e.seconds?pe(this.nanoseconds,e.nanoseconds):pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Yw;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class de{static fromTimestamp(e){return new de(e)}static min(){return new de(new xt(0,0))}static max(){return new de(new xt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Zw="__name__";class Ir{constructor(e,n,r){n===void 0?n=0:n>e.length&&ie(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ie(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ir.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ir?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=Ir.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return pe(e.length,n.length)}static compareSegments(e,n){const r=Ir.isNumericId(e),i=Ir.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?Ir.extractNumericId(e).compare(Ir.extractNumericId(n)):_g(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return as.fromString(e.substring(4,e.length-2))}}class Ue extends Ir{construct(e,n,r){return new Ue(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new J($.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ue(n)}static emptyPath(){return new Ue([])}}const W9=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Vt extends Ir{construct(e,n,r){return new Vt(e,n,r)}static isValidIdentifier(e){return W9.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Vt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Zw}static keyField(){return new Vt([Zw])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new J($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new J($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new J($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new J($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Vt(n)}static emptyPath(){return new Vt([])}}/**
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
 */class ee{constructor(e){this.path=e}static fromPath(e){return new ee(Ue.fromString(e))}static fromName(e){return new ee(Ue.fromString(e).popFirst(5))}static empty(){return new ee(Ue.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ue.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ue.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ee(new Ue(e.slice()))}}/**
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
 */const Su=-1;function q9(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=de.fromTimestamp(r===1e9?new xt(n+1,0):new xt(n,r));return new ds(i,ee.empty(),e)}function G9(t){return new ds(t.readTime,t.key,Su)}class ds{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ds(de.min(),ee.empty(),Su)}static max(){return new ds(de.max(),ee.empty(),Su)}}function K9(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ee.comparator(t.documentKey,e.documentKey),n!==0?n:pe(t.largestBatchId,e.largestBatchId))}/**
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
 */const Q9="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Y9{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Wa(t){if(t.code!==$.FAILED_PRECONDITION||t.message!==Q9)throw t;K("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ie(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):F.reject(n)}static resolve(e){return new F((n,r)=>{n(e)})}static reject(e){return new F((n,r)=>{r(e)})}static waitFor(e){return new F((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next(i=>i?F.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new F((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const c=l;n(e[c]).next(h=>{o[c]=h,++a,a===s&&r(o)},h=>i(h))}})}static doWhile(e,n){return new F((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function J9(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function qa(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class nf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ue(r),this.ce=r=>n.writeSequenceNumber(r))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}nf.le=-1;/**
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
 */const py=-1;function rf(t){return t==null}function sh(t){return t===0&&1/t==-1/0}function Z9(t){return typeof t=="number"&&Number.isInteger(t)&&!sh(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const WI="";function X9(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Xw(e)),e=eM(t.get(n),e);return Xw(e)}function eM(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case WI:n+="";break;default:n+=s}}return n}function Xw(t){return t+WI+""}/**
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
 */function e2(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Es(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function tM(t,e){const n=[];for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.push(e(t[r],r,t));return n}function qI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ye{constructor(e,n){this.comparator=e,this.root=n||Lt.EMPTY}insert(e,n){return new Ye(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Lt.BLACK,null,null))}remove(e){return new Ye(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Lt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Mc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Mc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Mc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Mc(this.root,e,this.comparator,!0)}}class Mc{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Lt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Lt.RED,this.left=i??Lt.EMPTY,this.right=s??Lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Lt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Lt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Lt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ie(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ie(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ie(27949);return e+(this.isRed()?0:1)}}Lt.EMPTY=null,Lt.RED=!0,Lt.BLACK=!1;Lt.EMPTY=new class{constructor(){this.size=0}get key(){throw ie(57766)}get value(){throw ie(16141)}get color(){throw ie(16727)}get left(){throw ie(29726)}get right(){throw ie(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new Lt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class wt{constructor(e){this.comparator=e,this.data=new Ye(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new t2(this.data.getIterator())}getIteratorFrom(e){return new t2(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof wt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new wt(this.comparator);return n.data=e,n}}class t2{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class In{constructor(e){this.fields=e,e.sort(Vt.comparator)}static empty(){return new In([])}unionWith(e){let n=new wt(Vt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new In(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ta(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class GI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class zt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new GI("Invalid base64 string: "+s):s}}(e);return new zt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new zt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}zt.EMPTY_BYTE_STRING=new zt("");const nM=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function hs(t){if(Ce(!!t,39018),typeof t=="string"){let e=0;const n=nM.exec(t);if(Ce(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:nt(t.seconds),nanos:nt(t.nanos)}}function nt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function fs(t){return typeof t=="string"?zt.fromBase64String(t):zt.fromUint8Array(t)}/**
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
 */const KI="server_timestamp",QI="__type__",YI="__previous_value__",JI="__local_write_time__";function my(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[QI])===null||n===void 0?void 0:n.stringValue)===KI}function sf(t){const e=t.mapValue.fields[YI];return my(e)?sf(e):e}function Tu(t){const e=hs(t.mapValue.fields[JI].timestampValue);return new xt(e.seconds,e.nanos)}/**
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
 */class rM{constructor(e,n,r,i,s,o,a,l,c,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c,this.isUsingEmulator=h}}const oh="(default)";class Iu{constructor(e,n){this.projectId=e,this.database=n||oh}static empty(){return new Iu("","")}get isDefaultDatabase(){return this.database===oh}isEqual(e){return e instanceof Iu&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const ZI="__type__",iM="__max__",Vc={mapValue:{}},XI="__vector__",ah="value";function ps(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?my(t)?4:oM(t)?9007199254740991:sM(t)?10:11:ie(28295,{value:t})}function Fr(t,e){if(t===e)return!0;const n=ps(t);if(n!==ps(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Tu(t).isEqual(Tu(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=hs(i.timestampValue),a=hs(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return fs(i.bytesValue).isEqual(fs(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return nt(i.geoPointValue.latitude)===nt(s.geoPointValue.latitude)&&nt(i.geoPointValue.longitude)===nt(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return nt(i.integerValue)===nt(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=nt(i.doubleValue),a=nt(s.doubleValue);return o===a?sh(o)===sh(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Ta(t.arrayValue.values||[],e.arrayValue.values||[],Fr);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(e2(o)!==e2(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Fr(o[l],a[l])))return!1;return!0}(t,e);default:return ie(52216,{left:t})}}function ku(t,e){return(t.values||[]).find(n=>Fr(n,e))!==void 0}function Ia(t,e){if(t===e)return 0;const n=ps(t),r=ps(e);if(n!==r)return pe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return pe(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=nt(s.integerValue||s.doubleValue),l=nt(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return n2(t.timestampValue,e.timestampValue);case 4:return n2(Tu(t),Tu(e));case 5:return _g(t.stringValue,e.stringValue);case 6:return function(s,o){const a=fs(s),l=fs(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const h=pe(a[c],l[c]);if(h!==0)return h}return pe(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=pe(nt(s.latitude),nt(o.latitude));return a!==0?a:pe(nt(s.longitude),nt(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return r2(t.arrayValue,e.arrayValue);case 10:return function(s,o){var a,l,c,h;const f=s.fields||{},p=o.fields||{},g=(a=f[ah])===null||a===void 0?void 0:a.arrayValue,w=(l=p[ah])===null||l===void 0?void 0:l.arrayValue,k=pe(((c=g==null?void 0:g.values)===null||c===void 0?void 0:c.length)||0,((h=w==null?void 0:w.values)===null||h===void 0?void 0:h.length)||0);return k!==0?k:r2(g,w)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Vc.mapValue&&o===Vc.mapValue)return 0;if(s===Vc.mapValue)return 1;if(o===Vc.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),c=o.fields||{},h=Object.keys(c);l.sort(),h.sort();for(let f=0;f<l.length&&f<h.length;++f){const p=_g(l[f],h[f]);if(p!==0)return p;const g=Ia(a[l[f]],c[h[f]]);if(g!==0)return g}return pe(l.length,h.length)}(t.mapValue,e.mapValue);default:throw ie(23264,{Pe:n})}}function n2(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return pe(t,e);const n=hs(t),r=hs(e),i=pe(n.seconds,r.seconds);return i!==0?i:pe(n.nanos,r.nanos)}function r2(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Ia(n[i],r[i]);if(s)return s}return pe(n.length,r.length)}function ka(t){return bg(t)}function bg(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=hs(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return fs(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ee.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=bg(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${bg(n.fields[o])}`;return i+"}"}(t.mapValue):ie(61005,{value:t})}function hd(t){switch(ps(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=sf(t);return e?16+hd(e):16;case 5:return 2*t.stringValue.length;case 6:return fs(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+hd(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return Es(r.fields,(s,o)=>{i+=s.length+hd(o)}),i}(t.mapValue);default:throw ie(13486,{value:t})}}function i2(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Eg(t){return!!t&&"integerValue"in t}function gy(t){return!!t&&"arrayValue"in t}function s2(t){return!!t&&"nullValue"in t}function o2(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function fd(t){return!!t&&"mapValue"in t}function sM(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[ZI])===null||n===void 0?void 0:n.stringValue)===XI}function ql(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Es(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ql(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ql(t.arrayValue.values[n]);return e}return Object.assign({},t)}function oM(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===iM}/**
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
 */class hn{constructor(e){this.value=e}static empty(){return new hn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!fd(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ql(n)}setAll(e){let n=Vt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=ql(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());fd(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Fr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];fd(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Es(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new hn(ql(this.value))}}function ek(t){const e=[];return Es(t.fields,(n,r)=>{const i=new Vt([n]);if(fd(r)){const s=ek(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new In(e)}/**
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
 */class Jt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Jt(e,0,de.min(),de.min(),de.min(),hn.empty(),0)}static newFoundDocument(e,n,r,i){return new Jt(e,1,n,de.min(),r,i,0)}static newNoDocument(e,n){return new Jt(e,2,n,de.min(),de.min(),hn.empty(),0)}static newUnknownDocument(e,n){return new Jt(e,3,n,de.min(),de.min(),hn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(de.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=hn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=hn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=de.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Jt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Jt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class lh{constructor(e,n){this.position=e,this.inclusive=n}}function a2(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=ee.comparator(ee.fromName(o.referenceValue),n.key):r=Ia(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function l2(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Fr(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Cu{constructor(e,n="asc"){this.field=e,this.dir=n}}function aM(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class tk{}class ht extends tk{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new uM(e,n,r):n==="array-contains"?new hM(e,r):n==="in"?new fM(e,r):n==="not-in"?new pM(e,r):n==="array-contains-any"?new mM(e,r):new ht(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new cM(e,r):new dM(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Ia(n,this.value)):n!==null&&ps(this.value)===ps(n)&&this.matchesComparison(Ia(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ie(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class gr extends tk{constructor(e,n){super(),this.filters=e,this.op=n,this.Te=null}static create(e,n){return new gr(e,n)}matches(e){return nk(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function nk(t){return t.op==="and"}function rk(t){return lM(t)&&nk(t)}function lM(t){for(const e of t.filters)if(e instanceof gr)return!1;return!0}function Sg(t){if(t instanceof ht)return t.field.canonicalString()+t.op.toString()+ka(t.value);if(rk(t))return t.filters.map(e=>Sg(e)).join(",");{const e=t.filters.map(n=>Sg(n)).join(",");return`${t.op}(${e})`}}function ik(t,e){return t instanceof ht?function(r,i){return i instanceof ht&&r.op===i.op&&r.field.isEqual(i.field)&&Fr(r.value,i.value)}(t,e):t instanceof gr?function(r,i){return i instanceof gr&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&ik(o,i.filters[a]),!0):!1}(t,e):void ie(19439)}function sk(t){return t instanceof ht?function(n){return`${n.field.canonicalString()} ${n.op} ${ka(n.value)}`}(t):t instanceof gr?function(n){return n.op.toString()+" {"+n.getFilters().map(sk).join(" ,")+"}"}(t):"Filter"}class uM extends ht{constructor(e,n,r){super(e,n,r),this.key=ee.fromName(r.referenceValue)}matches(e){const n=ee.comparator(e.key,this.key);return this.matchesComparison(n)}}class cM extends ht{constructor(e,n){super(e,"in",n),this.keys=ok("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class dM extends ht{constructor(e,n){super(e,"not-in",n),this.keys=ok("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function ok(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ee.fromName(r.referenceValue))}class hM extends ht{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return gy(n)&&ku(n.arrayValue,this.value)}}class fM extends ht{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ku(this.value.arrayValue,n)}}class pM extends ht{constructor(e,n){super(e,"not-in",n)}matches(e){if(ku(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!ku(this.value.arrayValue,n)}}class mM extends ht{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!gy(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ku(this.value.arrayValue,r))}}/**
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
 */class gM{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.Ie=null}}function u2(t,e=null,n=[],r=[],i=null,s=null,o=null){return new gM(t,e,n,r,i,s,o)}function yy(t){const e=ce(t);if(e.Ie===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Sg(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),rf(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ka(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ka(r)).join(",")),e.Ie=n}return e.Ie}function vy(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!aM(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ik(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!l2(t.startAt,e.startAt)&&l2(t.endAt,e.endAt)}function Tg(t){return ee.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Ga{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function yM(t,e,n,r,i,s,o,a){return new Ga(t,e,n,r,i,s,o,a)}function xy(t){return new Ga(t)}function c2(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function ak(t){return t.collectionGroup!==null}function Gl(t){const e=ce(t);if(e.Ee===null){e.Ee=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ee.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new wt(Vt.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ee.push(new Cu(s,r))}),n.has(Vt.keyField().canonicalString())||e.Ee.push(new Cu(Vt.keyField(),r))}return e.Ee}function Or(t){const e=ce(t);return e.de||(e.de=lk(e,Gl(t))),e.de}function vM(t){const e=ce(t);return e.Ae||(e.Ae=lk(e,t.explicitOrderBy)),e.Ae}function lk(t,e){if(t.limitType==="F")return u2(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Cu(i.field,s)});const n=t.endAt?new lh(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new lh(t.startAt.position,t.startAt.inclusive):null;return u2(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Ig(t,e){const n=t.filters.concat([e]);return new Ga(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function kg(t,e,n){return new Ga(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function of(t,e){return vy(Or(t),Or(e))&&t.limitType===e.limitType}function uk(t){return`${yy(Or(t))}|lt:${t.limitType}`}function Fo(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>sk(i)).join(", ")}]`),rf(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>ka(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>ka(i)).join(",")),`Target(${r})`}(Or(t))}; limitType=${t.limitType})`}function af(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):ee.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Gl(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const c=a2(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,Gl(r),i)||r.endAt&&!function(o,a,l){const c=a2(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,Gl(r),i))}(t,e)}function xM(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function ck(t){return(e,n)=>{let r=!1;for(const i of Gl(t)){const s=wM(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function wM(t,e,n){const r=t.field.isKeyField()?ee.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),c=a.data.field(s);return l!==null&&c!==null?Ia(l,c):ie(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ie(19790,{direction:t.dir})}}/**
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
 */class mo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Es(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return qI(this.inner)}size(){return this.innerSize}}/**
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
 */const _M=new Ye(ee.comparator);function bi(){return _M}const dk=new Ye(ee.comparator);function Al(...t){let e=dk;for(const n of t)e=e.insert(n.key,n);return e}function hk(t){let e=dk;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ws(){return Kl()}function fk(){return Kl()}function Kl(){return new mo(t=>t.toString(),(t,e)=>t.isEqual(e))}const bM=new Ye(ee.comparator),EM=new wt(ee.comparator);function ye(...t){let e=EM;for(const n of t)e=e.add(n);return e}const SM=new wt(pe);function TM(){return SM}/**
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
 */function wy(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:sh(e)?"-0":e}}function pk(t){return{integerValue:""+t}}function IM(t,e){return Z9(e)?pk(e):wy(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class lf{constructor(){this._=void 0}}function kM(t,e,n){return t instanceof Au?function(i,s){const o={fields:{[QI]:{stringValue:KI},[JI]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&my(s)&&(s=sf(s)),s&&(o.fields[YI]=s),{mapValue:o}}(n,e):t instanceof Ru?gk(t,e):t instanceof Pu?yk(t,e):function(i,s){const o=mk(i,s),a=d2(o)+d2(i.Re);return Eg(o)&&Eg(i.Re)?pk(a):wy(i.serializer,a)}(t,e)}function CM(t,e,n){return t instanceof Ru?gk(t,e):t instanceof Pu?yk(t,e):n}function mk(t,e){return t instanceof uh?function(r){return Eg(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Au extends lf{}class Ru extends lf{constructor(e){super(),this.elements=e}}function gk(t,e){const n=vk(e);for(const r of t.elements)n.some(i=>Fr(i,r))||n.push(r);return{arrayValue:{values:n}}}class Pu extends lf{constructor(e){super(),this.elements=e}}function yk(t,e){let n=vk(e);for(const r of t.elements)n=n.filter(i=>!Fr(i,r));return{arrayValue:{values:n}}}class uh extends lf{constructor(e,n){super(),this.serializer=e,this.Re=n}}function d2(t){return nt(t.integerValue||t.doubleValue)}function vk(t){return gy(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class AM{constructor(e,n){this.field=e,this.transform=n}}function RM(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Ru&&i instanceof Ru||r instanceof Pu&&i instanceof Pu?Ta(r.elements,i.elements,Fr):r instanceof uh&&i instanceof uh?Fr(r.Re,i.Re):r instanceof Au&&i instanceof Au}(t.transform,e.transform)}class PM{constructor(e,n){this.version=e,this.transformResults=n}}class hr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new hr}static exists(e){return new hr(void 0,e)}static updateTime(e){return new hr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function pd(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class uf{}function xk(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new _y(t.key,hr.none()):new Hu(t.key,t.data,hr.none());{const n=t.data,r=hn.empty();let i=new wt(Vt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ss(t.key,r,new In(i.toArray()),hr.none())}}function NM(t,e,n){t instanceof Hu?function(i,s,o){const a=i.value.clone(),l=f2(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Ss?function(i,s,o){if(!pd(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=f2(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(wk(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ql(t,e,n,r){return t instanceof Hu?function(s,o,a,l){if(!pd(s.precondition,o))return a;const c=s.value.clone(),h=p2(s.fieldTransforms,l,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ss?function(s,o,a,l){if(!pd(s.precondition,o))return a;const c=p2(s.fieldTransforms,l,o),h=o.data;return h.setAll(wk(s)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return pd(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function DM(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=mk(r.transform,i||null);s!=null&&(n===null&&(n=hn.empty()),n.set(r.field,s))}return n||null}function h2(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ta(r,i,(s,o)=>RM(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Hu extends uf{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ss extends uf{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function wk(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function f2(t,e,n){const r=new Map;Ce(t.length===n.length,32656,{Ve:n.length,me:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,CM(o,a,n[i]))}return r}function p2(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,kM(s,o,e))}return r}class _y extends uf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class OM extends uf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class jM{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&NM(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ql(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ql(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=fk();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=xk(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(de.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ye())}isEqual(e){return this.batchId===e.batchId&&Ta(this.mutations,e.mutations,(n,r)=>h2(n,r))&&Ta(this.baseMutations,e.baseMutations,(n,r)=>h2(n,r))}}class by{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Ce(e.mutations.length===r.length,58842,{fe:e.mutations.length,ge:r.length});let i=function(){return bM}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new by(e,n,r,i)}}/**
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
 */class LM{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class MM{constructor(e,n,r){this.alias=e,this.aggregateType=n,this.fieldPath=r}}/**
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
 */class VM{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var lt,xe;function FM(t){switch(t){case $.OK:return ie(64938);case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0;default:return ie(15467,{code:t})}}function _k(t){if(t===void 0)return _i("GRPC error has no .code"),$.UNKNOWN;switch(t){case lt.OK:return $.OK;case lt.CANCELLED:return $.CANCELLED;case lt.UNKNOWN:return $.UNKNOWN;case lt.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case lt.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case lt.INTERNAL:return $.INTERNAL;case lt.UNAVAILABLE:return $.UNAVAILABLE;case lt.UNAUTHENTICATED:return $.UNAUTHENTICATED;case lt.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case lt.NOT_FOUND:return $.NOT_FOUND;case lt.ALREADY_EXISTS:return $.ALREADY_EXISTS;case lt.PERMISSION_DENIED:return $.PERMISSION_DENIED;case lt.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case lt.ABORTED:return $.ABORTED;case lt.OUT_OF_RANGE:return $.OUT_OF_RANGE;case lt.UNIMPLEMENTED:return $.UNIMPLEMENTED;case lt.DATA_LOSS:return $.DATA_LOSS;default:return ie(39323,{code:t})}}(xe=lt||(lt={}))[xe.OK=0]="OK",xe[xe.CANCELLED=1]="CANCELLED",xe[xe.UNKNOWN=2]="UNKNOWN",xe[xe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",xe[xe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",xe[xe.NOT_FOUND=5]="NOT_FOUND",xe[xe.ALREADY_EXISTS=6]="ALREADY_EXISTS",xe[xe.PERMISSION_DENIED=7]="PERMISSION_DENIED",xe[xe.UNAUTHENTICATED=16]="UNAUTHENTICATED",xe[xe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",xe[xe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",xe[xe.ABORTED=10]="ABORTED",xe[xe.OUT_OF_RANGE=11]="OUT_OF_RANGE",xe[xe.UNIMPLEMENTED=12]="UNIMPLEMENTED",xe[xe.INTERNAL=13]="INTERNAL",xe[xe.UNAVAILABLE=14]="UNAVAILABLE",xe[xe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const $M=new as([4294967295,4294967295],0);function m2(t){const e=BI().encode(t),n=new jI;return n.update(e),new Uint8Array(n.digest())}function g2(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new as([n,r],0),new as([i,s],0)]}class Ey{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Rl(`Invalid padding: ${n}`);if(r<0)throw new Rl(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Rl(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Rl(`Invalid padding when bitmap length is 0: ${n}`);this.pe=8*e.length-n,this.ye=as.fromNumber(this.pe)}we(e,n,r){let i=e.add(n.multiply(as.fromNumber(r)));return i.compare($M)===1&&(i=new as([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ye).toNumber()}be(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const n=m2(e),[r,i]=g2(n);for(let s=0;s<this.hashCount;s++){const o=this.we(r,i,s);if(!this.be(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Ey(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.pe===0)return;const n=m2(e),[r,i]=g2(n);for(let s=0;s<this.hashCount;s++){const o=this.we(r,i,s);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Rl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class cf{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Wu.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new cf(de.min(),i,new Ye(pe),bi(),ye())}}class Wu{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Wu(r,n,ye(),ye(),ye())}}/**
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
 */class md{constructor(e,n,r,i){this.De=e,this.removedTargetIds=n,this.key=r,this.ve=i}}class bk{constructor(e,n){this.targetId=e,this.Ce=n}}class Ek{constructor(e,n,r=zt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class y2{constructor(){this.Fe=0,this.Me=v2(),this.xe=zt.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=ye(),n=ye(),r=ye();return this.Me.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:ie(38017,{changeType:s})}}),new Wu(this.xe,this.Oe,e,n,r)}Qe(){this.Ne=!1,this.Me=v2()}$e(e,n){this.Ne=!0,this.Me=this.Me.insert(e,n)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,Ce(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class zM{constructor(e){this.ze=e,this.je=new Map,this.He=bi(),this.Je=Fc(),this.Ye=Fc(),this.Ze=new Ye(pe)}Xe(e){for(const n of e.De)e.ve&&e.ve.isFoundDocument()?this.et(n,e.ve):this.tt(n,e.key,e.ve);for(const n of e.removedTargetIds)this.tt(n,e.key,e.ve)}nt(e){this.forEachTarget(e,n=>{const r=this.rt(n);switch(e.state){case 0:this.it(n)&&r.ke(e.resumeToken);break;case 1:r.We(),r.Be||r.Qe(),r.ke(e.resumeToken);break;case 2:r.We(),r.Be||this.removeTarget(n);break;case 3:this.it(n)&&(r.Ge(),r.ke(e.resumeToken));break;case 4:this.it(n)&&(this.st(n),r.ke(e.resumeToken));break;default:ie(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.je.forEach((r,i)=>{this.it(i)&&n(i)})}ot(e){const n=e.targetId,r=e.Ce.count,i=this._t(n);if(i){const s=i.target;if(Tg(s))if(r===0){const o=new ee(s.path);this.tt(n,o,Jt.newNoDocument(o,de.min()))}else Ce(r===1,20013,{expectedCount:r});else{const o=this.ut(n);if(o!==r){const a=this.ct(e),l=a?this.lt(a,e,o):1;if(l!==0){this.st(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,c)}}}}}ct(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=fs(r).toUint8Array()}catch(l){if(l instanceof GI)return Sa("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Ey(o,i,s)}catch(l){return Sa(l instanceof Rl?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.pe===0?null:a}lt(e,n,r){return n.Ce.count===r-this.Tt(e,n.targetId)?0:2}Tt(e,n){const r=this.ze.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.ze.Pt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.tt(n,s,null),i++)}),i}It(e){const n=new Map;this.je.forEach((s,o)=>{const a=this._t(o);if(a){if(s.current&&Tg(a.target)){const l=new ee(a.target.path);this.Et(l).has(o)||this.dt(o,l)||this.tt(o,l,Jt.newNoDocument(l,e))}s.Le&&(n.set(o,s.qe()),s.Qe())}});let r=ye();this.Ye.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const c=this._t(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.He.forEach((s,o)=>o.setReadTime(e));const i=new cf(e,n,this.Ze,this.He,r);return this.He=bi(),this.Je=Fc(),this.Ye=Fc(),this.Ze=new Ye(pe),i}et(e,n){if(!this.it(e))return;const r=this.dt(e,n.key)?2:0;this.rt(e).$e(n.key,r),this.He=this.He.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(e)),this.Ye=this.Ye.insert(n.key,this.At(n.key).add(e))}tt(e,n,r){if(!this.it(e))return;const i=this.rt(e);this.dt(e,n)?i.$e(n,1):i.Ue(n),this.Ye=this.Ye.insert(n,this.At(n).delete(e)),this.Ye=this.Ye.insert(n,this.At(n).add(e)),r&&(this.He=this.He.insert(n,r))}removeTarget(e){this.je.delete(e)}ut(e){const n=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let n=this.je.get(e);return n||(n=new y2,this.je.set(e,n)),n}At(e){let n=this.Ye.get(e);return n||(n=new wt(pe),this.Ye=this.Ye.insert(e,n)),n}Et(e){let n=this.Je.get(e);return n||(n=new wt(pe),this.Je=this.Je.insert(e,n)),n}it(e){const n=this._t(e)!==null;return n||K("WatchChangeAggregator","Detected inactive target",e),n}_t(e){const n=this.je.get(e);return n&&n.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new y2),this.ze.getRemoteKeysForTarget(e).forEach(n=>{this.tt(e,n,null)})}dt(e,n){return this.ze.getRemoteKeysForTarget(e).has(n)}}function Fc(){return new Ye(ee.comparator)}function v2(){return new Ye(ee.comparator)}const UM={asc:"ASCENDING",desc:"DESCENDING"},BM={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},HM={and:"AND",or:"OR"};class WM{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Cg(t,e){return t.useProto3Json||rf(e)?e:{value:e}}function ch(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Sk(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function qM(t,e){return ch(t,e.toTimestamp())}function jr(t){return Ce(!!t,49232),de.fromTimestamp(function(n){const r=hs(n);return new xt(r.seconds,r.nanos)}(t))}function Sy(t,e){return Ag(t,e).canonicalString()}function Ag(t,e){const n=function(i){return new Ue(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Tk(t){const e=Ue.fromString(t);return Ce(Pk(e),10190,{key:e.toString()}),e}function Rg(t,e){return Sy(t.databaseId,e.path)}function jp(t,e){const n=Tk(e);if(n.get(1)!==t.databaseId.projectId)throw new J($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new J($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ee(kk(n))}function Ik(t,e){return Sy(t.databaseId,e)}function GM(t){const e=Tk(t);return e.length===4?Ue.emptyPath():kk(e)}function Pg(t){return new Ue(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function kk(t){return Ce(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function x2(t,e,n){return{name:Rg(t,e),fields:n.value.mapValue.fields}}function KM(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:ie(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,h){return c.useProto3Json?(Ce(h===void 0||typeof h=="string",58123),zt.fromBase64String(h||"")):(Ce(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),zt.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const h=c.code===void 0?$.UNKNOWN:_k(c.code);return new J(h,c.message||"")}(o);n=new Ek(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=jp(t,r.document.name),s=jr(r.document.updateTime),o=r.document.createTime?jr(r.document.createTime):de.min(),a=new hn({mapValue:{fields:r.document.fields}}),l=Jt.newFoundDocument(i,s,o,a),c=r.targetIds||[],h=r.removedTargetIds||[];n=new md(c,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=jp(t,r.document),s=r.readTime?jr(r.readTime):de.min(),o=Jt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new md([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=jp(t,r.document),s=r.removedTargetIds||[];n=new md([],s,i,null)}else{if(!("filter"in e))return ie(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new VM(i,s),a=r.targetId;n=new bk(a,o)}}return n}function QM(t,e){let n;if(e instanceof Hu)n={update:x2(t,e.key,e.value)};else if(e instanceof _y)n={delete:Rg(t,e.key)};else if(e instanceof Ss)n={update:x2(t,e.key,e.data),updateMask:iV(e.fieldMask)};else{if(!(e instanceof OM))return ie(16599,{ft:e.type});n={verify:Rg(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Au)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ru)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Pu)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof uh)return{fieldPath:o.field.canonicalString(),increment:a.Re};throw ie(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:qM(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ie(27497)}(t,e.precondition)),n}function YM(t,e){return t&&t.length>0?(Ce(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?jr(i.updateTime):jr(s);return o.isEqual(de.min())&&(o=jr(s)),new PM(o,i.transformResults||[])}(n,e))):[]}function JM(t,e){return{documents:[Ik(t,e.path)]}}function Ck(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Ik(t,i);const s=function(c){if(c.length!==0)return Rk(gr.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(h=>function(p){return{field:Hi(p.field),direction:tV(p.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Cg(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{gt:n,parent:i}}function ZM(t,e,n,r){const{gt:i,parent:s}=Ck(t,e),o={},a=[];let l=0;return n.forEach(c=>{const h="aggregate_"+l++;o[h]=c.alias,c.aggregateType==="count"?a.push({alias:h,count:{}}):c.aggregateType==="avg"?a.push({alias:h,avg:{field:Hi(c.fieldPath)}}):c.aggregateType==="sum"&&a.push({alias:h,sum:{field:Hi(c.fieldPath)}})}),{request:{structuredAggregationQuery:{aggregations:a,structuredQuery:i.structuredQuery},parent:i.parent},yt:o,parent:s}}function XM(t){let e=GM(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Ce(r===1,65062);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=function(f){const p=Ak(f);return p instanceof gr&&rk(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(p=>function(w){return new Cu($o(w.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(w.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(f){let p;return p=typeof f=="object"?f.value:f,rf(p)?null:p}(n.limit));let l=null;n.startAt&&(l=function(f){const p=!!f.before,g=f.values||[];return new lh(g,p)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const p=!f.before,g=f.values||[];return new lh(g,p)}(n.endAt)),yM(e,i,o,s,a,"F",l,c)}function eV(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ie(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Ak(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=$o(n.unaryFilter.field);return ht.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=$o(n.unaryFilter.field);return ht.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=$o(n.unaryFilter.field);return ht.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=$o(n.unaryFilter.field);return ht.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ie(61313);default:return ie(60726)}}(t):t.fieldFilter!==void 0?function(n){return ht.create($o(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ie(58110);default:return ie(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return gr.create(n.compositeFilter.filters.map(r=>Ak(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ie(1026)}}(n.compositeFilter.op))}(t):ie(30097,{filter:t})}function tV(t){return UM[t]}function nV(t){return BM[t]}function rV(t){return HM[t]}function Hi(t){return{fieldPath:t.canonicalString()}}function $o(t){return Vt.fromServerFormat(t.fieldPath)}function Rk(t){return t instanceof ht?function(n){if(n.op==="=="){if(o2(n.value))return{unaryFilter:{field:Hi(n.field),op:"IS_NAN"}};if(s2(n.value))return{unaryFilter:{field:Hi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(o2(n.value))return{unaryFilter:{field:Hi(n.field),op:"IS_NOT_NAN"}};if(s2(n.value))return{unaryFilter:{field:Hi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Hi(n.field),op:nV(n.op),value:n.value}}}(t):t instanceof gr?function(n){const r=n.getFilters().map(i=>Rk(i));return r.length===1?r[0]:{compositeFilter:{op:rV(n.op),filters:r}}}(t):ie(54877,{filter:t})}function iV(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Pk(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Ki{constructor(e,n,r,i,s=de.min(),o=de.min(),a=zt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Ki(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Ki(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ki(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ki(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class sV{constructor(e){this.wt=e}}function oV(t){const e=XM({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?kg(e,e.limit,"L"):e}/**
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
 */class aV{constructor(){this.yn=new lV}addToCollectionParentIndex(e,n){return this.yn.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.yn.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(ds.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(ds.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class lV{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new wt(Ue.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new wt(Ue.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const w2={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Nk=41943040;class cn{static withCacheSize(e){return new cn(e,cn.DEFAULT_COLLECTION_PERCENTILE,cn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */cn.DEFAULT_COLLECTION_PERCENTILE=10,cn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,cn.DEFAULT=new cn(Nk,cn.DEFAULT_COLLECTION_PERCENTILE,cn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),cn.DISABLED=new cn(-1,0,0);/**
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
 */class Ca{constructor(e){this.nr=e}next(){return this.nr+=2,this.nr}static rr(){return new Ca(0)}static ir(){return new Ca(-1)}}/**
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
 */const _2="LruGarbageCollector",uV=1048576;function b2([t,e],[n,r]){const i=pe(t,n);return i===0?pe(e,r):i}class cV{constructor(e){this.cr=e,this.buffer=new wt(b2),this.lr=0}hr(){return++this.lr}Pr(e){const n=[e,this.hr()];if(this.buffer.size<this.cr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();b2(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class dV{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Tr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ir(6e4)}stop(){this.Tr&&(this.Tr.cancel(),this.Tr=null)}get started(){return this.Tr!==null}Ir(e){K(_2,`Garbage collection scheduled in ${e}ms`),this.Tr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Tr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){qa(n)?K(_2,"Ignoring IndexedDB error during garbage collection: ",n):await Wa(n)}await this.Ir(3e5)})}}class hV{constructor(e,n){this.Er=e,this.params=n}calculateTargetCount(e,n){return this.Er.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return F.resolve(nf.le);const r=new cV(n);return this.Er.forEachTarget(e,i=>r.Pr(i.sequenceNumber)).next(()=>this.Er.Ar(e,i=>r.Pr(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Er.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Er.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(K("LruGarbageCollector","Garbage collection skipped; disabled"),F.resolve(w2)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(K("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),w2):this.Rr(e,n))}getCacheSize(e){return this.Er.getCacheSize(e)}Rr(e,n){let r,i,s,o,a,l,c;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(K("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),i=this.params.maximumSequenceNumbersToCollect):i=f,o=Date.now(),this.nthSequenceNumber(e,i))).next(f=>(r=f,a=Date.now(),this.removeTargets(e,r,n))).next(f=>(s=f,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(c=Date.now(),Vo()<=we.DEBUG&&K("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(l-a)+`ms
	Removed ${f} documents in `+(c-l)+`ms
Total Duration: ${c-h}ms`),F.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:f})))}}function fV(t,e){return new hV(t,e)}/**
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
 */class pV{constructor(){this.changes=new mo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Jt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class mV{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class gV{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ql(r.mutation,i,In.empty(),xt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ye()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ye()){const i=Ws();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Al();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Ws();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ye()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=bi();const o=Kl(),a=function(){return Kl()}();return n.forEach((l,c)=>{const h=r.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof Ss)?s=s.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),Ql(h.mutation,c,h.mutation.getFieldMask(),xt.now())):o.set(c.key,In.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var f;return a.set(c,new mV(h,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Kl();let i=new Ye((o,a)=>o-a),s=ye();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let h=r.get(l)||In.empty();h=a.applyToLocalView(c,h),r.set(l,h);const f=(i.get(a.batchId)||ye()).add(l);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,h=l.value,f=fk();h.forEach(p=>{if(!s.has(p)){const g=xk(n.get(p),r.get(p));g!==null&&f.set(p,g),s=s.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return F.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return ee.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):ak(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):F.resolve(Ws());let a=Su,l=s;return o.next(c=>F.forEach(c,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(h)?F.resolve():this.remoteDocumentCache.getEntry(e,h).next(p=>{l=l.insert(h,p)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,l,c,ye())).next(h=>({batchId:a,changes:hk(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ee(n)).next(r=>{let i=Al();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Al();return this.indexManager.getCollectionParents(e,s).next(a=>F.forEach(a,l=>{const c=function(f,p){return new Ga(p,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(h=>{h.forEach((f,p)=>{o=o.insert(f,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,c)=>{const h=c.getKey();o.get(h)===null&&(o=o.insert(h,Jt.newInvalidDocument(h)))});let a=Al();return o.forEach((l,c)=>{const h=s.get(l);h!==void 0&&Ql(h.mutation,c,In.empty(),xt.now()),af(n,c)&&(a=a.insert(l,c))}),a})}}/**
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
 */class yV{constructor(e){this.serializer=e,this.Fr=new Map,this.Mr=new Map}getBundleMetadata(e,n){return F.resolve(this.Fr.get(n))}saveBundleMetadata(e,n){return this.Fr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:jr(i.createTime)}}(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.Mr.get(n))}saveNamedQuery(e,n){return this.Mr.set(n.name,function(i){return{name:i.name,query:oV(i.bundledQuery),readTime:jr(i.readTime)}}(n)),F.resolve()}}/**
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
 */class vV{constructor(){this.overlays=new Ye(ee.comparator),this.Or=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ws();return F.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.St(e,n,s)}),F.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Or.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Or.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const i=Ws(),s=n.length+1,o=new ee(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return F.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ye((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let h=s.get(c.largestBatchId);h===null&&(h=Ws(),s=s.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=Ws(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=i)););return F.resolve(a)}St(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Or.get(i.largestBatchId).delete(r.key);this.Or.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new LM(n,r));let s=this.Or.get(n);s===void 0&&(s=ye(),this.Or.set(n,s)),this.Or.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class xV{constructor(){this.sessionToken=zt.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,F.resolve()}}/**
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
 */class Ty{constructor(){this.Nr=new wt(Tt.Br),this.Lr=new wt(Tt.kr)}isEmpty(){return this.Nr.isEmpty()}addReference(e,n){const r=new Tt(e,n);this.Nr=this.Nr.add(r),this.Lr=this.Lr.add(r)}qr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Qr(new Tt(e,n))}$r(e,n){e.forEach(r=>this.removeReference(r,n))}Ur(e){const n=new ee(new Ue([])),r=new Tt(n,e),i=new Tt(n,e+1),s=[];return this.Lr.forEachInRange([r,i],o=>{this.Qr(o),s.push(o.key)}),s}Kr(){this.Nr.forEach(e=>this.Qr(e))}Qr(e){this.Nr=this.Nr.delete(e),this.Lr=this.Lr.delete(e)}Wr(e){const n=new ee(new Ue([])),r=new Tt(n,e),i=new Tt(n,e+1);let s=ye();return this.Lr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Tt(e,0),r=this.Nr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Tt{constructor(e,n){this.key=e,this.Gr=n}static Br(e,n){return ee.comparator(e.key,n.key)||pe(e.Gr,n.Gr)}static kr(e,n){return pe(e.Gr,n.Gr)||ee.comparator(e.key,n.key)}}/**
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
 */class wV{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Jn=1,this.zr=new wt(Tt.Br)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Jn;this.Jn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new jM(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.zr=this.zr.add(new Tt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,n){return F.resolve(this.jr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Hr(r),s=i<0?0:i;return F.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?py:this.Jn-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Tt(n,0),i=new Tt(n,Number.POSITIVE_INFINITY),s=[];return this.zr.forEachInRange([r,i],o=>{const a=this.jr(o.Gr);s.push(a)}),F.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new wt(pe);return n.forEach(i=>{const s=new Tt(i,0),o=new Tt(i,Number.POSITIVE_INFINITY);this.zr.forEachInRange([s,o],a=>{r=r.add(a.Gr)})}),F.resolve(this.Jr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;ee.isDocumentKey(s)||(s=s.child(""));const o=new Tt(new ee(s),0);let a=new wt(pe);return this.zr.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.Gr)),!0)},o),F.resolve(this.Jr(a))}Jr(e){const n=[];return e.forEach(r=>{const i=this.jr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Ce(this.Yr(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.zr;return F.forEach(n.mutations,i=>{const s=new Tt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.zr=r})}Xn(e){}containsKey(e,n){const r=new Tt(n,0),i=this.zr.firstAfterOrEqual(r);return F.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}Yr(e,n){return this.Hr(e)}Hr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}jr(e){const n=this.Hr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class _V{constructor(e){this.Zr=e,this.docs=function(){return new Ye(ee.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Zr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():Jt.newInvalidDocument(n))}getEntries(e,n){let r=bi();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Jt.newInvalidDocument(i))}),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=bi();const o=n.path,a=new ee(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:h}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||K9(G9(h),r)<=0||(i.has(h.key)||af(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return F.resolve(s)}getAllFromCollectionGroup(e,n,r,i){ie(9500)}Xr(e,n){return F.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new bV(this)}getSize(e){return F.resolve(this.size)}}class bV extends pV{constructor(e){super(),this.vr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.vr.addEntry(e,i)):this.vr.removeEntry(r)}),F.waitFor(n)}getFromCache(e,n){return this.vr.getEntry(e,n)}getAllFromCache(e,n){return this.vr.getEntries(e,n)}}/**
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
 */class EV{constructor(e){this.persistence=e,this.ei=new mo(n=>yy(n),vy),this.lastRemoteSnapshotVersion=de.min(),this.highestTargetId=0,this.ti=0,this.ni=new Ty,this.targetCount=0,this.ri=Ca.rr()}forEachTarget(e,n){return this.ei.forEach((r,i)=>n(i)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.ti)}allocateTargetId(e){return this.highestTargetId=this.ri.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ti&&(this.ti=n),F.resolve()}ar(e){this.ei.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ri=new Ca(n),this.highestTargetId=n),e.sequenceNumber>this.ti&&(this.ti=e.sequenceNumber)}addTargetData(e,n){return this.ar(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.ar(n),F.resolve()}removeTargetData(e,n){return this.ei.delete(n.target),this.ni.Ur(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.ei.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.ei.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),F.waitFor(s).next(()=>i)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.ei.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this.ni.qr(n,r),F.resolve()}removeMatchingKeys(e,n,r){this.ni.$r(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),F.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.ni.Ur(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ni.Wr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this.ni.containsKey(n))}}/**
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
 */class Dk{constructor(e,n){this.ii={},this.overlays={},this.si=new nf(0),this.oi=!1,this.oi=!0,this._i=new xV,this.referenceDelegate=e(this),this.ai=new EV(this),this.indexManager=new aV,this.remoteDocumentCache=function(i){return new _V(i)}(r=>this.referenceDelegate.ui(r)),this.serializer=new sV(n),this.ci=new yV(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.oi=!1,Promise.resolve()}get started(){return this.oi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new vV,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ii[e.toKey()];return r||(r=new wV(n,this.referenceDelegate),this.ii[e.toKey()]=r),r}getGlobalsCache(){return this._i}getTargetCache(){return this.ai}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.ci}runTransaction(e,n,r){K("MemoryPersistence","Starting transaction:",e);const i=new SV(this.si.next());return this.referenceDelegate.li(),r(i).next(s=>this.referenceDelegate.hi(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Pi(e,n){return F.or(Object.values(this.ii).map(r=>()=>r.containsKey(e,n)))}}class SV extends Y9{constructor(e){super(),this.currentSequenceNumber=e}}class Iy{constructor(e){this.persistence=e,this.Ti=new Ty,this.Ii=null}static Ei(e){return new Iy(e)}get di(){if(this.Ii)return this.Ii;throw ie(60996)}addReference(e,n,r){return this.Ti.addReference(r,n),this.di.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.Ti.removeReference(r,n),this.di.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),F.resolve()}removeTarget(e,n){this.Ti.Ur(n.targetId).forEach(i=>this.di.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.di.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}li(){this.Ii=new Set}hi(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.di,r=>{const i=ee.fromPath(r);return this.Ai(e,i).next(s=>{s||n.removeEntry(i,de.min())})}).next(()=>(this.Ii=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ai(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}ui(e){return 0}Ai(e,n){return F.or([()=>F.resolve(this.Ti.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Pi(e,n)])}}class dh{constructor(e,n){this.persistence=e,this.Ri=new mo(r=>X9(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=fV(this,n)}static Ei(e,n){return new dh(e,n)}li(){}hi(e){return F.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.Vr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}Vr(e){let n=0;return this.Ar(e,r=>{n++}).next(()=>n)}Ar(e,n){return F.forEach(this.Ri,(r,i)=>this.gr(e,r,i).next(s=>s?F.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.Xr(e,o=>this.gr(e,o,n).next(a=>{a||(r++,s.removeEntry(o,de.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.Ri.set(n,e.currentSequenceNumber),F.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.Ri.set(r,e.currentSequenceNumber),F.resolve()}removeReference(e,n,r){return this.Ri.set(r,e.currentSequenceNumber),F.resolve()}updateLimboDocument(e,n){return this.Ri.set(n,e.currentSequenceNumber),F.resolve()}ui(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=hd(e.data.value)),n}gr(e,n,r){return F.or([()=>this.persistence.Pi(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.Ri.get(n);return F.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class ky{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.ls=r,this.hs=i}static Ps(e,n){let r=ye(),i=ye();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new ky(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class TV{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class IV{constructor(){this.Ts=!1,this.Is=!1,this.Es=100,this.ds=function(){return Xj()?8:J9(Yj())>0?6:4}()}initialize(e,n){this.As=e,this.indexManager=n,this.Ts=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Rs(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Vs(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new TV;return this.fs(e,n,o).next(a=>{if(s.result=a,this.Is)return this.gs(e,n,o,a.size)})}).next(()=>s.result)}gs(e,n,r,i){return r.documentReadCount<this.Es?(Vo()<=we.DEBUG&&K("QueryEngine","SDK will not create cache indexes for query:",Fo(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Es,"documents"),F.resolve()):(Vo()<=we.DEBUG&&K("QueryEngine","Query:",Fo(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ds*i?(Vo()<=we.DEBUG&&K("QueryEngine","The SDK decides to create cache indexes for query:",Fo(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Or(n))):F.resolve())}Rs(e,n){if(c2(n))return F.resolve(null);let r=Or(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=kg(n,null,"F"),r=Or(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ye(...s);return this.As.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.ps(n,a);return this.ys(n,c,o,l.readTime)?this.Rs(e,kg(n,null,"F")):this.ws(e,c,n,l)}))})))}Vs(e,n,r,i){return c2(n)||i.isEqual(de.min())?F.resolve(null):this.As.getDocuments(e,r).next(s=>{const o=this.ps(n,s);return this.ys(n,o,r,i)?F.resolve(null):(Vo()<=we.DEBUG&&K("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Fo(n)),this.ws(e,o,n,q9(i,Su)).next(a=>a))})}ps(e,n){let r=new wt(ck(e));return n.forEach((i,s)=>{af(e,s)&&(r=r.add(s))}),r}ys(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}fs(e,n,r){return Vo()<=we.DEBUG&&K("QueryEngine","Using full collection scan to execute query:",Fo(n)),this.As.getDocumentsMatchingQuery(e,n,ds.min(),r)}ws(e,n,r,i){return this.As.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */const Cy="LocalStore",kV=3e8;class CV{constructor(e,n,r,i){this.persistence=e,this.bs=n,this.serializer=i,this.Ss=new Ye(pe),this.Ds=new mo(s=>yy(s),vy),this.vs=new Map,this.Cs=e.getRemoteDocumentCache(),this.ai=e.getTargetCache(),this.ci=e.getBundleCache(),this.Fs(r)}Fs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new gV(this.Cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Cs.setIndexManager(this.indexManager),this.bs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ss))}}function AV(t,e,n,r){return new CV(t,e,n,r)}async function Ok(t,e){const n=ce(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Fs(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=ye();for(const c of i){o.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}for(const c of s){a.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(r,l).next(c=>({Ms:c,removedBatchIds:o,addedBatchIds:a}))})})}function RV(t,e){const n=ce(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Cs.newChangeBuffer({trackRemovals:!0});return function(a,l,c,h){const f=c.batch,p=f.keys();let g=F.resolve();return p.forEach(w=>{g=g.next(()=>h.getEntry(l,w)).next(k=>{const C=c.docVersions.get(w);Ce(C!==null,48541),k.version.compareTo(C)<0&&(f.applyToRemoteDocument(k,c),k.isValidDocument()&&(k.setReadTime(c.commitVersion),h.addEntry(k)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(l,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=ye();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function jk(t){const e=ce(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.ai.getLastRemoteSnapshotVersion(n))}function PV(t,e){const n=ce(t),r=e.snapshotVersion;let i=n.Ss;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Cs.newChangeBuffer({trackRemovals:!0});i=n.Ss;const a=[];e.targetChanges.forEach((h,f)=>{const p=i.get(f);if(!p)return;a.push(n.ai.removeMatchingKeys(s,h.removedDocuments,f).next(()=>n.ai.addMatchingKeys(s,h.addedDocuments,f)));let g=p.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?g=g.withResumeToken(zt.EMPTY_BYTE_STRING,de.min()).withLastLimboFreeSnapshotVersion(de.min()):h.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(h.resumeToken,r)),i=i.insert(f,g),function(k,C,x){return k.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=kV?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(p,g,h)&&a.push(n.ai.updateTargetData(s,g))});let l=bi(),c=ye();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(NV(s,o,e.documentUpdates).next(h=>{l=h.xs,c=h.Os})),!r.isEqual(de.min())){const h=n.ai.getLastRemoteSnapshotVersion(s).next(f=>n.ai.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return F.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,c)).next(()=>l)}).then(s=>(n.Ss=i,s))}function NV(t,e,n){let r=ye(),i=ye();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=bi();return n.forEach((a,l)=>{const c=s.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(de.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):K(Cy,"Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{xs:o,Os:i}})}function DV(t,e){const n=ce(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=py),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function OV(t,e){const n=ce(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.ai.getTargetData(r,e).next(s=>s?(i=s,F.resolve(i)):n.ai.allocateTargetId(r).next(o=>(i=new Ki(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.ai.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ss.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ss=n.Ss.insert(r.targetId,r),n.Ds.set(e,r.targetId)),r})}async function Ng(t,e,n){const r=ce(t),i=r.Ss.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!qa(o))throw o;K(Cy,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ss=r.Ss.remove(e),r.Ds.delete(i.target)}function E2(t,e,n){const r=ce(t);let i=de.min(),s=ye();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,h){const f=ce(l),p=f.Ds.get(h);return p!==void 0?F.resolve(f.Ss.get(p)):f.ai.getTargetData(c,h)}(r,o,Or(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.ai.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.bs.getDocumentsMatchingQuery(o,e,n?i:de.min(),n?s:ye())).next(a=>(jV(r,xM(e),a),{documents:a,Ns:s})))}function jV(t,e,n){let r=t.vs.get(e)||de.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.vs.set(e,r)}class S2{constructor(){this.activeTargetIds=TM()}$s(e){this.activeTargetIds=this.activeTargetIds.add(e)}Us(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Qs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class LV{constructor(){this.So=new S2,this.Do={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.So.$s(e),this.Do[e]||"not-current"}updateQueryState(e,n,r){this.Do[e]=n}removeLocalQueryTarget(e){this.So.Us(e)}isLocalQueryTarget(e){return this.So.activeTargetIds.has(e)}clearQueryState(e){delete this.Do[e]}getAllActiveQueryTargets(){return this.So.activeTargetIds}isActiveQueryTarget(e){return this.So.activeTargetIds.has(e)}start(){return this.So=new S2,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class MV{vo(e){}shutdown(){}}/**
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
 */const T2="ConnectivityMonitor";class I2{constructor(){this.Co=()=>this.Fo(),this.Mo=()=>this.xo(),this.Oo=[],this.No()}vo(e){this.Oo.push(e)}shutdown(){window.removeEventListener("online",this.Co),window.removeEventListener("offline",this.Mo)}No(){window.addEventListener("online",this.Co),window.addEventListener("offline",this.Mo)}Fo(){K(T2,"Network connectivity changed: AVAILABLE");for(const e of this.Oo)e(0)}xo(){K(T2,"Network connectivity changed: UNAVAILABLE");for(const e of this.Oo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let $c=null;function Dg(){return $c===null?$c=function(){return 268435456+Math.round(2147483648*Math.random())}():$c++,"0x"+$c.toString(16)}/**
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
 */const Lp="RestConnection",VV={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class FV{get Bo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Lo=n+"://"+e.host,this.ko=`projects/${r}/databases/${i}`,this.qo=this.databaseId.database===oh?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Qo(e,n,r,i,s){const o=Dg(),a=this.$o(e,n.toUriEncodedString());K(Lp,`Sending RPC '${e}' ${o}:`,a,r);const l={"google-cloud-resource-prefix":this.ko,"x-goog-request-params":this.qo};this.Uo(l,i,s);const{host:c}=new URL(a),h=Yh(c);return this.Ko(e,a,l,r,h).then(f=>(K(Lp,`Received RPC '${e}' ${o}: `,f),f),f=>{throw Sa(Lp,`RPC '${e}' ${o} failed with error: `,f,"url: ",a,"request:",r),f})}Wo(e,n,r,i,s,o){return this.Qo(e,n,r,i,s)}Uo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ha}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}$o(e,n){const r=VV[e];return`${this.Lo}/v1/${n}:${r}`}terminate(){}}/**
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
 */class $V{constructor(e){this.Go=e.Go,this.zo=e.zo}jo(e){this.Ho=e}Jo(e){this.Yo=e}Zo(e){this.Xo=e}onMessage(e){this.e_=e}close(){this.zo()}send(e){this.Go(e)}t_(){this.Ho()}n_(){this.Yo()}r_(e){this.Xo(e)}i_(e){this.e_(e)}}/**
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
 */const Gt="WebChannelConnection";class zV extends FV{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ko(e,n,r,i,s){const o=Dg();return new Promise((a,l)=>{const c=new LI;c.setWithCredentials(!0),c.listenOnce(MI.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case dd.NO_ERROR:const f=c.getResponseJson();K(Gt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(f)),a(f);break;case dd.TIMEOUT:K(Gt,`RPC '${e}' ${o} timed out`),l(new J($.DEADLINE_EXCEEDED,"Request time out"));break;case dd.HTTP_ERROR:const p=c.getStatus();if(K(Gt,`RPC '${e}' ${o} failed with status:`,p,"response text:",c.getResponseText()),p>0){let g=c.getResponseJson();Array.isArray(g)&&(g=g[0]);const w=g==null?void 0:g.error;if(w&&w.status&&w.message){const k=function(x){const v=x.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(v)>=0?v:$.UNKNOWN}(w.status);l(new J(k,w.message))}else l(new J($.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new J($.UNAVAILABLE,"Connection failed."));break;default:ie(9055,{s_:e,streamId:o,o_:c.getLastErrorCode(),__:c.getLastError()})}}finally{K(Gt,`RPC '${e}' ${o} completed.`)}});const h=JSON.stringify(i);K(Gt,`RPC '${e}' ${o} sending request:`,i),c.send(n,"POST",h,r,15)})}a_(e,n,r){const i=Dg(),s=[this.Lo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=$I(),a=FI(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Uo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=s.join("");K(Gt,`Creating RPC '${e}' stream ${i}: ${h}`,l);const f=o.createWebChannel(h,l);let p=!1,g=!1;const w=new $V({Go:C=>{g?K(Gt,`Not sending because RPC '${e}' stream ${i} is closed:`,C):(p||(K(Gt,`Opening RPC '${e}' stream ${i} transport.`),f.open(),p=!0),K(Gt,`RPC '${e}' stream ${i} sending:`,C),f.send(C))},zo:()=>f.close()}),k=(C,x,v)=>{C.listen(x,E=>{try{v(E)}catch(P){setTimeout(()=>{throw P},0)}})};return k(f,Cl.EventType.OPEN,()=>{g||(K(Gt,`RPC '${e}' stream ${i} transport opened.`),w.t_())}),k(f,Cl.EventType.CLOSE,()=>{g||(g=!0,K(Gt,`RPC '${e}' stream ${i} transport closed`),w.r_())}),k(f,Cl.EventType.ERROR,C=>{g||(g=!0,Sa(Gt,`RPC '${e}' stream ${i} transport errored. Name:`,C.name,"Message:",C.message),w.r_(new J($.UNAVAILABLE,"The operation could not be completed")))}),k(f,Cl.EventType.MESSAGE,C=>{var x;if(!g){const v=C.data[0];Ce(!!v,16349);const E=v,P=(E==null?void 0:E.error)||((x=E[0])===null||x===void 0?void 0:x.error);if(P){K(Gt,`RPC '${e}' stream ${i} received error:`,P);const j=P.status;let M=function(A){const R=lt[A];if(R!==void 0)return _k(R)}(j),b=P.message;M===void 0&&(M=$.INTERNAL,b="Unknown error status: "+j+" with message "+P.message),g=!0,w.r_(new J(M,b)),f.close()}else K(Gt,`RPC '${e}' stream ${i} received:`,v),w.i_(v)}}),k(a,VI.STAT_EVENT,C=>{C.stat===wg.PROXY?K(Gt,`RPC '${e}' stream ${i} detected buffering proxy`):C.stat===wg.NOPROXY&&K(Gt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{w.n_()},0),w}}function Mp(){return typeof document<"u"?document:null}/**
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
 */function df(t){return new WM(t,!0)}/**
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
 */class Lk{constructor(e,n,r=1e3,i=1.5,s=6e4){this.bi=e,this.timerId=n,this.u_=r,this.c_=i,this.l_=s,this.h_=0,this.P_=null,this.T_=Date.now(),this.reset()}reset(){this.h_=0}I_(){this.h_=this.l_}E_(e){this.cancel();const n=Math.floor(this.h_+this.d_()),r=Math.max(0,Date.now()-this.T_),i=Math.max(0,n-r);i>0&&K("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.h_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.P_=this.bi.enqueueAfterDelay(this.timerId,i,()=>(this.T_=Date.now(),e())),this.h_*=this.c_,this.h_<this.u_&&(this.h_=this.u_),this.h_>this.l_&&(this.h_=this.l_)}A_(){this.P_!==null&&(this.P_.skipDelay(),this.P_=null)}cancel(){this.P_!==null&&(this.P_.cancel(),this.P_=null)}d_(){return(Math.random()-.5)*this.h_}}/**
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
 */const k2="PersistentStream";class Mk{constructor(e,n,r,i,s,o,a,l){this.bi=e,this.R_=r,this.V_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.m_=0,this.f_=null,this.g_=null,this.stream=null,this.p_=0,this.y_=new Lk(e,n)}w_(){return this.state===1||this.state===5||this.b_()}b_(){return this.state===2||this.state===3}start(){this.p_=0,this.state!==4?this.auth():this.S_()}async stop(){this.w_()&&await this.close(0)}D_(){this.state=0,this.y_.reset()}v_(){this.b_()&&this.f_===null&&(this.f_=this.bi.enqueueAfterDelay(this.R_,6e4,()=>this.C_()))}F_(e){this.M_(),this.stream.send(e)}async C_(){if(this.b_())return this.close(0)}M_(){this.f_&&(this.f_.cancel(),this.f_=null)}x_(){this.g_&&(this.g_.cancel(),this.g_=null)}async close(e,n){this.M_(),this.x_(),this.y_.cancel(),this.m_++,e!==4?this.y_.reset():n&&n.code===$.RESOURCE_EXHAUSTED?(_i(n.toString()),_i("Using maximum backoff delay to prevent overloading the backend."),this.y_.I_()):n&&n.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.O_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zo(n)}O_(){}auth(){this.state=1;const e=this.N_(this.m_),n=this.m_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.m_===n&&this.B_(r,i)},r=>{e(()=>{const i=new J($.UNKNOWN,"Fetching auth token failed: "+r.message);return this.L_(i)})})}B_(e,n){const r=this.N_(this.m_);this.stream=this.k_(e,n),this.stream.jo(()=>{r(()=>this.listener.jo())}),this.stream.Jo(()=>{r(()=>(this.state=2,this.g_=this.bi.enqueueAfterDelay(this.V_,1e4,()=>(this.b_()&&(this.state=3),Promise.resolve())),this.listener.Jo()))}),this.stream.Zo(i=>{r(()=>this.L_(i))}),this.stream.onMessage(i=>{r(()=>++this.p_==1?this.q_(i):this.onNext(i))})}S_(){this.state=5,this.y_.E_(async()=>{this.state=0,this.start()})}L_(e){return K(k2,`close with error: ${e}`),this.stream=null,this.close(4,e)}N_(e){return n=>{this.bi.enqueueAndForget(()=>this.m_===e?n():(K(k2,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class UV extends Mk{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}k_(e,n){return this.connection.a_("Listen",e,n)}q_(e){return this.onNext(e)}onNext(e){this.y_.reset();const n=KM(this.serializer,e),r=function(s){if(!("targetChange"in s))return de.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?de.min():o.readTime?jr(o.readTime):de.min()}(e);return this.listener.Q_(n,r)}U_(e){const n={};n.database=Pg(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=Tg(l)?{documents:JM(s,l)}:{query:Ck(s,l).gt},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Sk(s,o.resumeToken);const c=Cg(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(de.min())>0){a.readTime=ch(s,o.snapshotVersion.toTimestamp());const c=Cg(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=eV(this.serializer,e);r&&(n.labels=r),this.F_(n)}K_(e){const n={};n.database=Pg(this.serializer),n.removeTarget=e,this.F_(n)}}class BV extends Mk{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get W_(){return this.p_>0}start(){this.lastStreamToken=void 0,super.start()}O_(){this.W_&&this.G_([])}k_(e,n){return this.connection.a_("Write",e,n)}q_(e){return Ce(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ce(!e.writeResults||e.writeResults.length===0,55816),this.listener.z_()}onNext(e){Ce(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.y_.reset();const n=YM(e.writeResults,e.commitTime),r=jr(e.commitTime);return this.listener.j_(r,n)}H_(){const e={};e.database=Pg(this.serializer),this.F_(e)}G_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>QM(this.serializer,r))};this.F_(n)}}/**
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
 */class HV{}class WV extends HV{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.J_=!1}Y_(){if(this.J_)throw new J($.FAILED_PRECONDITION,"The client has already been terminated.")}Qo(e,n,r,i){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Qo(e,Ag(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new J($.UNKNOWN,s.toString())})}Wo(e,n,r,i,s){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Wo(e,Ag(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new J($.UNKNOWN,o.toString())})}terminate(){this.J_=!0,this.connection.terminate()}}class qV{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.Z_=0,this.X_=null,this.ea=!0}ta(){this.Z_===0&&(this.na("Unknown"),this.X_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.X_=null,this.ra("Backend didn't respond within 10 seconds."),this.na("Offline"),Promise.resolve())))}ia(e){this.state==="Online"?this.na("Unknown"):(this.Z_++,this.Z_>=1&&(this.sa(),this.ra(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.na("Offline")))}set(e){this.sa(),this.Z_=0,e==="Online"&&(this.ea=!1),this.na(e)}na(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ra(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ea?(_i(n),this.ea=!1):K("OnlineStateTracker",n)}sa(){this.X_!==null&&(this.X_.cancel(),this.X_=null)}}/**
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
 */const ao="RemoteStore";class GV{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.oa=[],this._a=new Map,this.aa=new Set,this.ua=[],this.ca=s,this.ca.vo(o=>{r.enqueueAndForget(async()=>{go(this)&&(K(ao,"Restarting streams for network reachability change."),await async function(l){const c=ce(l);c.aa.add(4),await qu(c),c.la.set("Unknown"),c.aa.delete(4),await hf(c)}(this))})}),this.la=new qV(r,i)}}async function hf(t){if(go(t))for(const e of t.ua)await e(!0)}async function qu(t){for(const e of t.ua)await e(!1)}function Vk(t,e){const n=ce(t);n._a.has(e.targetId)||(n._a.set(e.targetId,e),Ny(n)?Py(n):Ka(n).b_()&&Ry(n,e))}function Ay(t,e){const n=ce(t),r=Ka(n);n._a.delete(e),r.b_()&&Fk(n,e),n._a.size===0&&(r.b_()?r.v_():go(n)&&n.la.set("Unknown"))}function Ry(t,e){if(t.ha.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(de.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ka(t).U_(e)}function Fk(t,e){t.ha.Ke(e),Ka(t).K_(e)}function Py(t){t.ha=new zM({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>t._a.get(e)||null,Pt:()=>t.datastore.serializer.databaseId}),Ka(t).start(),t.la.ta()}function Ny(t){return go(t)&&!Ka(t).w_()&&t._a.size>0}function go(t){return ce(t).aa.size===0}function $k(t){t.ha=void 0}async function KV(t){t.la.set("Online")}async function QV(t){t._a.forEach((e,n)=>{Ry(t,e)})}async function YV(t,e){$k(t),Ny(t)?(t.la.ia(e),Py(t)):t.la.set("Unknown")}async function JV(t,e,n){if(t.la.set("Online"),e instanceof Ek&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i._a.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i._a.delete(a),i.ha.removeTarget(a))}(t,e)}catch(r){K(ao,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await hh(t,r)}else if(e instanceof md?t.ha.Xe(e):e instanceof bk?t.ha.ot(e):t.ha.nt(e),!n.isEqual(de.min()))try{const r=await jk(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.ha.It(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const h=s._a.get(c);h&&s._a.set(c,h.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const h=s._a.get(l);if(!h)return;s._a.set(l,h.withResumeToken(zt.EMPTY_BYTE_STRING,h.snapshotVersion)),Fk(s,l);const f=new Ki(h.target,l,c,h.sequenceNumber);Ry(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){K(ao,"Failed to raise snapshot:",r),await hh(t,r)}}async function hh(t,e,n){if(!qa(e))throw e;t.aa.add(1),await qu(t),t.la.set("Offline"),n||(n=()=>jk(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{K(ao,"Retrying IndexedDB access"),await n(),t.aa.delete(1),await hf(t)})}function zk(t,e){return e().catch(n=>hh(t,n,e))}async function ff(t){const e=ce(t),n=ms(e);let r=e.oa.length>0?e.oa[e.oa.length-1].batchId:py;for(;ZV(e);)try{const i=await DV(e.localStore,r);if(i===null){e.oa.length===0&&n.v_();break}r=i.batchId,XV(e,i)}catch(i){await hh(e,i)}Uk(e)&&Bk(e)}function ZV(t){return go(t)&&t.oa.length<10}function XV(t,e){t.oa.push(e);const n=ms(t);n.b_()&&n.W_&&n.G_(e.mutations)}function Uk(t){return go(t)&&!ms(t).w_()&&t.oa.length>0}function Bk(t){ms(t).start()}async function eF(t){ms(t).H_()}async function tF(t){const e=ms(t);for(const n of t.oa)e.G_(n.mutations)}async function nF(t,e,n){const r=t.oa.shift(),i=by.from(r,e,n);await zk(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await ff(t)}async function rF(t,e){e&&ms(t).W_&&await async function(r,i){if(function(o){return FM(o)&&o!==$.ABORTED}(i.code)){const s=r.oa.shift();ms(r).D_(),await zk(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await ff(r)}}(t,e),Uk(t)&&Bk(t)}async function C2(t,e){const n=ce(t);n.asyncQueue.verifyOperationInProgress(),K(ao,"RemoteStore received new credentials");const r=go(n);n.aa.add(3),await qu(n),r&&n.la.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.aa.delete(3),await hf(n)}async function iF(t,e){const n=ce(t);e?(n.aa.delete(2),await hf(n)):e||(n.aa.add(2),await qu(n),n.la.set("Unknown"))}function Ka(t){return t.Pa||(t.Pa=function(n,r,i){const s=ce(n);return s.Y_(),new UV(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{jo:KV.bind(null,t),Jo:QV.bind(null,t),Zo:YV.bind(null,t),Q_:JV.bind(null,t)}),t.ua.push(async e=>{e?(t.Pa.D_(),Ny(t)?Py(t):t.la.set("Unknown")):(await t.Pa.stop(),$k(t))})),t.Pa}function ms(t){return t.Ta||(t.Ta=function(n,r,i){const s=ce(n);return s.Y_(),new BV(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{jo:()=>Promise.resolve(),Jo:eF.bind(null,t),Zo:rF.bind(null,t),z_:tF.bind(null,t),j_:nF.bind(null,t)}),t.ua.push(async e=>{e?(t.Ta.D_(),await ff(t)):(await t.Ta.stop(),t.oa.length>0&&(K(ao,`Stopping write stream with ${t.oa.length} pending writes`),t.oa=[]))})),t.Ta}/**
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
 */class Dy{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new fi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Dy(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new J($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Oy(t,e){if(_i("AsyncQueue",`${e}: ${t}`),qa(t))return new J($.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ua{static emptySet(e){return new ua(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||ee.comparator(n.key,r.key):(n,r)=>ee.comparator(n.key,r.key),this.keyedMap=Al(),this.sortedSet=new Ye(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ua)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ua;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class A2{constructor(){this.Ia=new Ye(ee.comparator)}track(e){const n=e.doc.key,r=this.Ia.get(n);r?e.type!==0&&r.type===3?this.Ia=this.Ia.insert(n,e):e.type===3&&r.type!==1?this.Ia=this.Ia.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Ia=this.Ia.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Ia=this.Ia.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Ia=this.Ia.remove(n):e.type===1&&r.type===2?this.Ia=this.Ia.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Ia=this.Ia.insert(n,{type:2,doc:e.doc}):ie(63341,{Vt:e,Ea:r}):this.Ia=this.Ia.insert(n,e)}da(){const e=[];return this.Ia.inorderTraversal((n,r)=>{e.push(r)}),e}}class Aa{constructor(e,n,r,i,s,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Aa(e,n,ua.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&of(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class sF{constructor(){this.Aa=void 0,this.Ra=[]}Va(){return this.Ra.some(e=>e.ma())}}class oF{constructor(){this.queries=R2(),this.onlineState="Unknown",this.fa=new Set}terminate(){(function(n,r){const i=ce(n),s=i.queries;i.queries=R2(),s.forEach((o,a)=>{for(const l of a.Ra)l.onError(r)})})(this,new J($.ABORTED,"Firestore shutting down"))}}function R2(){return new mo(t=>uk(t),of)}async function Hk(t,e){const n=ce(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.Va()&&e.ma()&&(r=2):(s=new sF,r=e.ma()?0:1);try{switch(r){case 0:s.Aa=await n.onListen(i,!0);break;case 1:s.Aa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=Oy(o,`Initialization of query '${Fo(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.Ra.push(e),e.ga(n.onlineState),s.Aa&&e.pa(s.Aa)&&jy(n)}async function Wk(t,e){const n=ce(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.Ra.indexOf(e);o>=0&&(s.Ra.splice(o,1),s.Ra.length===0?i=e.ma()?0:1:!s.Va()&&e.ma()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function aF(t,e){const n=ce(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.Ra)a.pa(i)&&(r=!0);o.Aa=i}}r&&jy(n)}function lF(t,e,n){const r=ce(t),i=r.queries.get(e);if(i)for(const s of i.Ra)s.onError(n);r.queries.delete(e)}function jy(t){t.fa.forEach(e=>{e.next()})}var Og,P2;(P2=Og||(Og={})).ya="default",P2.Cache="cache";class qk{constructor(e,n,r){this.query=e,this.wa=n,this.ba=!1,this.Sa=null,this.onlineState="Unknown",this.options=r||{}}pa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Aa(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ba?this.Da(e)&&(this.wa.next(e),n=!0):this.va(e,this.onlineState)&&(this.Ca(e),n=!0),this.Sa=e,n}onError(e){this.wa.error(e)}ga(e){this.onlineState=e;let n=!1;return this.Sa&&!this.ba&&this.va(this.Sa,e)&&(this.Ca(this.Sa),n=!0),n}va(e,n){if(!e.fromCache||!this.ma())return!0;const r=n!=="Offline";return(!this.options.Fa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Da(e){if(e.docChanges.length>0)return!0;const n=this.Sa&&this.Sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Ca(e){e=Aa.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ba=!0,this.wa.next(e)}ma(){return this.options.source!==Og.Cache}}/**
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
 */class Gk{constructor(e){this.key=e}}class Kk{constructor(e){this.key=e}}class uF{constructor(e,n){this.query=e,this.qa=n,this.Qa=null,this.hasCachedResults=!1,this.current=!1,this.$a=ye(),this.mutatedKeys=ye(),this.Ua=ck(e),this.Ka=new ua(this.Ua)}get Wa(){return this.qa}Ga(e,n){const r=n?n.za:new A2,i=n?n.Ka:this.Ka;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,f)=>{const p=i.get(h),g=af(this.query,f)?f:null,w=!!p&&this.mutatedKeys.has(p.key),k=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let C=!1;p&&g?p.data.isEqual(g.data)?w!==k&&(r.track({type:3,doc:g}),C=!0):this.ja(p,g)||(r.track({type:2,doc:g}),C=!0,(l&&this.Ua(g,l)>0||c&&this.Ua(g,c)<0)&&(a=!0)):!p&&g?(r.track({type:0,doc:g}),C=!0):p&&!g&&(r.track({type:1,doc:p}),C=!0,(l||c)&&(a=!0)),C&&(g?(o=o.add(g),s=k?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{Ka:o,za:r,ys:a,mutatedKeys:s}}ja(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ka;this.Ka=e.Ka,this.mutatedKeys=e.mutatedKeys;const o=e.za.da();o.sort((h,f)=>function(g,w){const k=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ie(20277,{Vt:C})}};return k(g)-k(w)}(h.type,f.type)||this.Ua(h.doc,f.doc)),this.Ha(r),i=i!=null&&i;const a=n&&!i?this.Ja():[],l=this.$a.size===0&&this.current&&!i?1:0,c=l!==this.Qa;return this.Qa=l,o.length!==0||c?{snapshot:new Aa(this.query,e.Ka,s,o,e.mutatedKeys,l===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ya:a}:{Ya:a}}ga(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ka:this.Ka,za:new A2,mutatedKeys:this.mutatedKeys,ys:!1},!1)):{Ya:[]}}Za(e){return!this.qa.has(e)&&!!this.Ka.has(e)&&!this.Ka.get(e).hasLocalMutations}Ha(e){e&&(e.addedDocuments.forEach(n=>this.qa=this.qa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.qa=this.qa.delete(n)),this.current=e.current)}Ja(){if(!this.current)return[];const e=this.$a;this.$a=ye(),this.Ka.forEach(r=>{this.Za(r.key)&&(this.$a=this.$a.add(r.key))});const n=[];return e.forEach(r=>{this.$a.has(r)||n.push(new Kk(r))}),this.$a.forEach(r=>{e.has(r)||n.push(new Gk(r))}),n}Xa(e){this.qa=e.Ns,this.$a=ye();const n=this.Ga(e.documents);return this.applyChanges(n,!0)}eu(){return Aa.fromInitialDocuments(this.query,this.Ka,this.mutatedKeys,this.Qa===0,this.hasCachedResults)}}const Ly="SyncEngine";class cF{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class dF{constructor(e){this.key=e,this.tu=!1}}class hF{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.nu={},this.ru=new mo(a=>uk(a),of),this.iu=new Map,this.su=new Set,this.ou=new Ye(ee.comparator),this._u=new Map,this.au=new Ty,this.uu={},this.cu=new Map,this.lu=Ca.ir(),this.onlineState="Unknown",this.hu=void 0}get isPrimaryClient(){return this.hu===!0}}async function fF(t,e,n=!0){const r=e4(t);let i;const s=r.ru.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.eu()):i=await Qk(r,e,n,!0),i}async function pF(t,e){const n=e4(t);await Qk(n,e,!0,!1)}async function Qk(t,e,n,r){const i=await OV(t.localStore,Or(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await mF(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&Vk(t.remoteStore,i),a}async function mF(t,e,n,r,i){t.Pu=(f,p,g)=>async function(k,C,x,v){let E=C.view.Ga(x);E.ys&&(E=await E2(k.localStore,C.query,!1).then(({documents:b})=>C.view.Ga(b,E)));const P=v&&v.targetChanges.get(C.targetId),j=v&&v.targetMismatches.get(C.targetId)!=null,M=C.view.applyChanges(E,k.isPrimaryClient,P,j);return D2(k,C.targetId,M.Ya),M.snapshot}(t,f,p,g);const s=await E2(t.localStore,e,!0),o=new uF(e,s.Ns),a=o.Ga(s.documents),l=Wu.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);D2(t,n,c.Ya);const h=new cF(e,n,o);return t.ru.set(e,h),t.iu.has(n)?t.iu.get(n).push(e):t.iu.set(n,[e]),c.snapshot}async function gF(t,e,n){const r=ce(t),i=r.ru.get(e),s=r.iu.get(i.targetId);if(s.length>1)return r.iu.set(i.targetId,s.filter(o=>!of(o,e))),void r.ru.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Ng(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Ay(r.remoteStore,i.targetId),jg(r,i.targetId)}).catch(Wa)):(jg(r,i.targetId),await Ng(r.localStore,i.targetId,!0))}async function yF(t,e){const n=ce(t),r=n.ru.get(e),i=n.iu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Ay(n.remoteStore,r.targetId))}async function vF(t,e,n){const r=TF(t);try{const i=await function(o,a){const l=ce(o),c=xt.now(),h=a.reduce((g,w)=>g.add(w.key),ye());let f,p;return l.persistence.runTransaction("Locally write mutations","readwrite",g=>{let w=bi(),k=ye();return l.Cs.getEntries(g,h).next(C=>{w=C,w.forEach((x,v)=>{v.isValidDocument()||(k=k.add(x))})}).next(()=>l.localDocuments.getOverlayedDocuments(g,w)).next(C=>{f=C;const x=[];for(const v of a){const E=DM(v,f.get(v.key).overlayedDocument);E!=null&&x.push(new Ss(v.key,E,ek(E.value.mapValue),hr.exists(!0)))}return l.mutationQueue.addMutationBatch(g,c,x,a)}).next(C=>{p=C;const x=C.applyToLocalDocumentSet(f,k);return l.documentOverlayCache.saveOverlays(g,C.batchId,x)})}).then(()=>({batchId:p.batchId,changes:hk(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let c=o.uu[o.currentUser.toKey()];c||(c=new Ye(pe)),c=c.insert(a,l),o.uu[o.currentUser.toKey()]=c}(r,i.batchId,n),await Gu(r,i.changes),await ff(r.remoteStore)}catch(i){const s=Oy(i,"Failed to persist write");n.reject(s)}}async function Yk(t,e){const n=ce(t);try{const r=await PV(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n._u.get(s);o&&(Ce(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.tu=!0:i.modifiedDocuments.size>0?Ce(o.tu,14607):i.removedDocuments.size>0&&(Ce(o.tu,42227),o.tu=!1))}),await Gu(n,r,e)}catch(r){await Wa(r)}}function N2(t,e,n){const r=ce(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ru.forEach((s,o)=>{const a=o.view.ga(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=ce(o);l.onlineState=a;let c=!1;l.queries.forEach((h,f)=>{for(const p of f.Ra)p.ga(a)&&(c=!0)}),c&&jy(l)}(r.eventManager,e),i.length&&r.nu.Q_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function xF(t,e,n){const r=ce(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r._u.get(e),s=i&&i.key;if(s){let o=new Ye(ee.comparator);o=o.insert(s,Jt.newNoDocument(s,de.min()));const a=ye().add(s),l=new cf(de.min(),new Map,new Ye(pe),o,a);await Yk(r,l),r.ou=r.ou.remove(s),r._u.delete(e),My(r)}else await Ng(r.localStore,e,!1).then(()=>jg(r,e,n)).catch(Wa)}async function wF(t,e){const n=ce(t),r=e.batch.batchId;try{const i=await RV(n.localStore,e);Zk(n,r,null),Jk(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Gu(n,i)}catch(i){await Wa(i)}}async function _F(t,e,n){const r=ce(t);try{const i=await function(o,a){const l=ce(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return l.mutationQueue.lookupMutationBatch(c,a).next(f=>(Ce(f!==null,37113),h=f.keys(),l.mutationQueue.removeMutationBatch(c,f))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,h,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>l.localDocuments.getDocuments(c,h))})}(r.localStore,e);Zk(r,e,n),Jk(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Gu(r,i)}catch(i){await Wa(i)}}function Jk(t,e){(t.cu.get(e)||[]).forEach(n=>{n.resolve()}),t.cu.delete(e)}function Zk(t,e,n){const r=ce(t);let i=r.uu[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.uu[r.currentUser.toKey()]=i}}function jg(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.iu.get(e))t.ru.delete(r),n&&t.nu.Tu(r,n);t.iu.delete(e),t.isPrimaryClient&&t.au.Ur(e).forEach(r=>{t.au.containsKey(r)||Xk(t,r)})}function Xk(t,e){t.su.delete(e.path.canonicalString());const n=t.ou.get(e);n!==null&&(Ay(t.remoteStore,n),t.ou=t.ou.remove(e),t._u.delete(n),My(t))}function D2(t,e,n){for(const r of n)r instanceof Gk?(t.au.addReference(r.key,e),bF(t,r)):r instanceof Kk?(K(Ly,"Document no longer in limbo: "+r.key),t.au.removeReference(r.key,e),t.au.containsKey(r.key)||Xk(t,r.key)):ie(19791,{Iu:r})}function bF(t,e){const n=e.key,r=n.path.canonicalString();t.ou.get(n)||t.su.has(r)||(K(Ly,"New document in limbo: "+n),t.su.add(r),My(t))}function My(t){for(;t.su.size>0&&t.ou.size<t.maxConcurrentLimboResolutions;){const e=t.su.values().next().value;t.su.delete(e);const n=new ee(Ue.fromString(e)),r=t.lu.next();t._u.set(r,new dF(n)),t.ou=t.ou.insert(n,r),Vk(t.remoteStore,new Ki(Or(xy(n.path)),r,"TargetPurposeLimboResolution",nf.le))}}async function Gu(t,e,n){const r=ce(t),i=[],s=[],o=[];r.ru.isEmpty()||(r.ru.forEach((a,l)=>{o.push(r.Pu(l,e,n).then(c=>{var h;if((c||n)&&r.isPrimaryClient){const f=c?!c.fromCache:(h=n==null?void 0:n.targetChanges.get(l.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(l.targetId,f?"current":"not-current")}if(c){i.push(c);const f=ky.Ps(l.targetId,c);s.push(f)}}))}),await Promise.all(o),r.nu.Q_(i),await async function(l,c){const h=ce(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>F.forEach(c,p=>F.forEach(p.ls,g=>h.persistence.referenceDelegate.addReference(f,p.targetId,g)).next(()=>F.forEach(p.hs,g=>h.persistence.referenceDelegate.removeReference(f,p.targetId,g)))))}catch(f){if(!qa(f))throw f;K(Cy,"Failed to update sequence numbers: "+f)}for(const f of c){const p=f.targetId;if(!f.fromCache){const g=h.Ss.get(p),w=g.snapshotVersion,k=g.withLastLimboFreeSnapshotVersion(w);h.Ss=h.Ss.insert(p,k)}}}(r.localStore,s))}async function EF(t,e){const n=ce(t);if(!n.currentUser.isEqual(e)){K(Ly,"User change. New user:",e.toKey());const r=await Ok(n.localStore,e);n.currentUser=e,function(s,o){s.cu.forEach(a=>{a.forEach(l=>{l.reject(new J($.CANCELLED,o))})}),s.cu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Gu(n,r.Ms)}}function SF(t,e){const n=ce(t),r=n._u.get(e);if(r&&r.tu)return ye().add(r.key);{let i=ye();const s=n.iu.get(e);if(!s)return i;for(const o of s){const a=n.ru.get(o);i=i.unionWith(a.view.Wa)}return i}}function e4(t){const e=ce(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Yk.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=SF.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=xF.bind(null,e),e.nu.Q_=aF.bind(null,e.eventManager),e.nu.Tu=lF.bind(null,e.eventManager),e}function TF(t){const e=ce(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=wF.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=_F.bind(null,e),e}class fh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=df(e.databaseInfo.databaseId),this.sharedClientState=this.Au(e),this.persistence=this.Ru(e),await this.persistence.start(),this.localStore=this.Vu(e),this.gcScheduler=this.mu(e,this.localStore),this.indexBackfillerScheduler=this.fu(e,this.localStore)}mu(e,n){return null}fu(e,n){return null}Vu(e){return AV(this.persistence,new IV,e.initialUser,this.serializer)}Ru(e){return new Dk(Iy.Ei,this.serializer)}Au(e){return new LV}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}fh.provider={build:()=>new fh};class IF extends fh{constructor(e){super(),this.cacheSizeBytes=e}mu(e,n){Ce(this.persistence.referenceDelegate instanceof dh,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new dV(r,e.asyncQueue,n)}Ru(e){const n=this.cacheSizeBytes!==void 0?cn.withCacheSize(this.cacheSizeBytes):cn.DEFAULT;return new Dk(r=>dh.Ei(r,n),this.serializer)}}class Lg{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>N2(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=EF.bind(null,this.syncEngine),await iF(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new oF}()}createDatastore(e){const n=df(e.databaseInfo.databaseId),r=function(s){return new zV(s)}(e.databaseInfo);return function(s,o,a,l){return new WV(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new GV(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>N2(this.syncEngine,n,0),function(){return I2.C()?new I2:new MV}())}createSyncEngine(e,n){return function(i,s,o,a,l,c,h){const f=new hF(i,s,o,a,l,c);return h&&(f.hu=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=ce(i);K(ao,"RemoteStore shutting down."),s.aa.add(5),await qu(s),s.ca.shutdown(),s.la.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Lg.provider={build:()=>new Lg};/**
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
 *//**
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
 */class t4{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.pu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.pu(this.observer.error,e):_i("Uncaught Error in snapshot listener:",e.toString()))}yu(){this.muted=!0}pu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const gs="FirestoreClient";class kF{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Qt.UNAUTHENTICATED,this.clientId=HI.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{K(gs,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(K(gs,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new fi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Oy(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Vp(t,e){t.asyncQueue.verifyOperationInProgress(),K(gs,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Ok(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function O2(t,e){t.asyncQueue.verifyOperationInProgress();const n=await CF(t);K(gs,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>C2(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>C2(e.remoteStore,i)),t._onlineComponents=e}async function CF(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){K(gs,"Using user provided OfflineComponentProvider");try{await Vp(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===$.FAILED_PRECONDITION||i.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Sa("Error using user provided cache. Falling back to memory cache: "+n),await Vp(t,new fh)}}else K(gs,"Using default OfflineComponentProvider"),await Vp(t,new IF(void 0));return t._offlineComponents}async function Vy(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(K(gs,"Using user provided OnlineComponentProvider"),await O2(t,t._uninitializedComponentsProvider._online)):(K(gs,"Using default OnlineComponentProvider"),await O2(t,new Lg))),t._onlineComponents}function AF(t){return Vy(t).then(e=>e.syncEngine)}function RF(t){return Vy(t).then(e=>e.datastore)}async function Mg(t){const e=await Vy(t),n=e.eventManager;return n.onListen=fF.bind(null,e.syncEngine),n.onUnlisten=gF.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=pF.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=yF.bind(null,e.syncEngine),n}function PF(t,e,n={}){const r=new fi;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,c){const h=new t4({next:p=>{h.yu(),o.enqueueAndForget(()=>Wk(s,f)),p.fromCache&&l.source==="server"?c.reject(new J($.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(p)},error:p=>c.reject(p)}),f=new qk(a,h,{includeMetadataChanges:!0,Fa:!0});return Hk(s,f)}(await Mg(t),t.asyncQueue,e,n,r)),r.promise}function NF(t,e,n){const r=new fi;return t.asyncQueue.enqueueAndForget(async()=>{try{const i=await RF(t);r.resolve(async function(o,a,l){var c;const h=ce(o),{request:f,yt:p,parent:g}=ZM(h.serializer,vM(a),l);h.connection.Bo||delete f.parent;const w=(await h.Wo("RunAggregationQuery",h.serializer.databaseId,g,f,1)).filter(C=>!!C.result);Ce(w.length===1,64727);const k=(c=w[0].result)===null||c===void 0?void 0:c.aggregateFields;return Object.keys(k).reduce((C,x)=>(C[p[x]]=k[x],C),{})}(i,e,n))}catch(i){r.reject(i)}}),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function n4(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const j2=new Map;/**
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
 */function r4(t,e,n){if(!n)throw new J($.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function DF(t,e,n,r){if(e===!0&&r===!0)throw new J($.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function L2(t){if(!ee.isDocumentKey(t))throw new J($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function M2(t){if(ee.isDocumentKey(t))throw new J($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function pf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ie(12329,{type:typeof t})}function fr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new J($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=pf(t);throw new J($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */const i4="firestore.googleapis.com",V2=!0;class F2{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new J($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=i4,this.ssl=V2}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:V2;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Nk;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<uV)throw new J($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}DF("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=n4((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new J($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new J($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new J($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class mf{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new F2({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new J($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new J($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new F2(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new M9;switch(r.type){case"firstParty":return new z9(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new J($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,Jh("Firestore",this._settings.isUsingEmulator),this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=j2.get(n);r&&(K("ComponentProvider","Removing Datastore"),j2.delete(n),r.terminate())}(this),Promise.resolve()}}function OF(t,e,n,r={}){var i;t=fr(t,mf);const s=Yh(e),o=t._getSettings(),a=Object.assign(Object.assign({},o),{emulatorOptions:t._getEmulatorOptions()}),l=`${e}:${n}`;o.host!==i4&&o.host!==l&&Sa("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c=Object.assign(Object.assign({},o),{host:l,ssl:s,emulatorOptions:r});if(!_u(c,a)&&(t._setSettings(c),s&&(nI(`https://${l}`),Jh("Firestore",!0)),r.mockUserToken)){let h,f;if(typeof r.mockUserToken=="string")h=r.mockUserToken,f=Qt.MOCK_USER;else{h=rI(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new J($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new Qt(p)}t._authCredentials=new V9(new UI(h,f))}}/**
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
 */class Ts{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ts(this.firestore,e,this._query)}}class xn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ls(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new xn(this.firestore,e,this._key)}}class ls extends Ts{constructor(e,n,r){super(e,n,xy(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new xn(this.firestore,null,new ee(e))}withConverter(e){return new ls(this.firestore,e,this._path)}}function Mt(t,e,...n){if(t=Nn(t),r4("collection","path",e),t instanceof mf){const r=Ue.fromString(e,...n);return M2(r),new ls(t,null,r)}{if(!(t instanceof xn||t instanceof ls))throw new J($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ue.fromString(e,...n));return M2(r),new ls(t.firestore,null,r)}}function Yl(t,e,...n){if(t=Nn(t),arguments.length===1&&(e=HI.newId()),r4("doc","path",e),t instanceof mf){const r=Ue.fromString(e,...n);return L2(r),new xn(t,null,new ee(r))}{if(!(t instanceof xn||t instanceof ls))throw new J($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ue.fromString(e,...n));return L2(r),new xn(t.firestore,t instanceof ls?t.converter:null,new ee(r))}}/**
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
 */const $2="AsyncQueue";class z2{constructor(e=Promise.resolve()){this.Qu=[],this.$u=!1,this.Uu=[],this.Ku=null,this.Wu=!1,this.Gu=!1,this.zu=[],this.y_=new Lk(this,"async_queue_retry"),this.ju=()=>{const r=Mp();r&&K($2,"Visibility state changed to "+r.visibilityState),this.y_.A_()},this.Hu=e;const n=Mp();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.ju)}get isShuttingDown(){return this.$u}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ju(),this.Yu(e)}enterRestrictedMode(e){if(!this.$u){this.$u=!0,this.Gu=e||!1;const n=Mp();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.ju)}}enqueue(e){if(this.Ju(),this.$u)return new Promise(()=>{});const n=new fi;return this.Yu(()=>this.$u&&this.Gu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qu.push(e),this.Zu()))}async Zu(){if(this.Qu.length!==0){try{await this.Qu[0](),this.Qu.shift(),this.y_.reset()}catch(e){if(!qa(e))throw e;K($2,"Operation failed with retryable error: "+e)}this.Qu.length>0&&this.y_.E_(()=>this.Zu())}}Yu(e){const n=this.Hu.then(()=>(this.Wu=!0,e().catch(r=>{throw this.Ku=r,this.Wu=!1,_i("INTERNAL UNHANDLED ERROR: ",U2(r)),r}).then(r=>(this.Wu=!1,r))));return this.Hu=n,n}enqueueAfterDelay(e,n,r){this.Ju(),this.zu.indexOf(e)>-1&&(n=0);const i=Dy.createAndSchedule(this,e,n,r,s=>this.Xu(s));return this.Uu.push(i),i}Ju(){this.Ku&&ie(47125,{ec:U2(this.Ku)})}verifyOperationInProgress(){}async tc(){let e;do e=this.Hu,await e;while(e!==this.Hu)}nc(e){for(const n of this.Uu)if(n.timerId===e)return!0;return!1}rc(e){return this.tc().then(()=>{this.Uu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Uu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.tc()})}sc(e){this.zu.push(e)}Xu(e){const n=this.Uu.indexOf(e);this.Uu.splice(n,1)}}function U2(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}/**
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
 */function B2(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class ys extends mf{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new z2,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new z2(e),this._firestoreClient=void 0,await e}}}function s4(t,e){const n=typeof t=="object"?t:Xh(),r=typeof t=="string"?t:oh,i=Ba(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=eI("firestore");s&&OF(i,...s)}return i}function gf(t){if(t._terminated)throw new J($.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||jF(t),t._firestoreClient}function jF(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,c,h){return new rM(a,l,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,n4(h.experimentalLongPollingOptions),h.useFetchStreams,h.isUsingEmulator)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new kF(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(a){const l=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(l),_online:l}}(t._componentsProvider))}/**
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
 *//**
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
 */class LF{constructor(e="count",n){this._internalFieldPath=n,this.type="AggregateField",this.aggregateType=e}}class MF{constructor(e,n,r){this._userDataWriter=n,this._data=r,this.type="AggregateQuerySnapshot",this.query=e}data(){return this._userDataWriter.convertObjectMap(this._data)}}/**
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
 */class Ra{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ra(zt.fromBase64String(e))}catch(n){throw new J($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ra(zt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class yf{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new J($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Vt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class vf{constructor(e){this._methodName=e}}/**
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
 */class Fy{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new J($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new J($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return pe(this._lat,e._lat)||pe(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class $y{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const VF=/^__.*__$/;class FF{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ss(e,this.data,this.fieldMask,n,this.fieldTransforms):new Hu(e,this.data,n,this.fieldTransforms)}}class o4{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Ss(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function a4(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ie(40011,{oc:t})}}class zy{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this._c(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get oc(){return this.settings.oc}ac(e){return new zy(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}uc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ac({path:r,cc:!1});return i.lc(e),i}hc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ac({path:r,cc:!1});return i._c(),i}Pc(e){return this.ac({path:void 0,cc:!0})}Tc(e){return ph(e,this.settings.methodName,this.settings.Ic||!1,this.path,this.settings.Ec)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}_c(){if(this.path)for(let e=0;e<this.path.length;e++)this.lc(this.path.get(e))}lc(e){if(e.length===0)throw this.Tc("Document fields must not be empty");if(a4(this.oc)&&VF.test(e))throw this.Tc('Document fields cannot begin and end with "__"')}}class $F{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||df(e)}dc(e,n,r,i=!1){return new zy({oc:e,methodName:n,Ec:r,path:Vt.emptyPath(),cc:!1,Ic:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Uy(t){const e=t._freezeSettings(),n=df(t._databaseId);return new $F(t._databaseId,!!e.ignoreUndefinedProperties,n)}function zF(t,e,n,r,i,s={}){const o=t.dc(s.merge||s.mergeFields?2:0,e,n,i);Hy("Data must be an object, but it was:",o,r);const a=l4(r,o);let l,c;if(s.merge)l=new In(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const f of s.mergeFields){const p=Vg(e,f,n);if(!o.contains(p))throw new J($.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);c4(h,p)||h.push(p)}l=new In(h),c=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,c=o.fieldTransforms;return new FF(new hn(a),l,c)}class xf extends vf{_toFieldTransform(e){if(e.oc!==2)throw e.oc===1?e.Tc(`${this._methodName}() can only appear at the top level of your update data`):e.Tc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof xf}}class By extends vf{_toFieldTransform(e){return new AM(e.path,new Au)}isEqual(e){return e instanceof By}}function UF(t,e,n,r){const i=t.dc(1,e,n);Hy("Data must be an object, but it was:",i,r);const s=[],o=hn.empty();Es(r,(l,c)=>{const h=Wy(e,l,n);c=Nn(c);const f=i.hc(h);if(c instanceof xf)s.push(h);else{const p=Ku(c,f);p!=null&&(s.push(h),o.set(h,p))}});const a=new In(s);return new o4(o,a,i.fieldTransforms)}function BF(t,e,n,r,i,s){const o=t.dc(1,e,n),a=[Vg(e,r,n)],l=[i];if(s.length%2!=0)throw new J($.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<s.length;p+=2)a.push(Vg(e,s[p])),l.push(s[p+1]);const c=[],h=hn.empty();for(let p=a.length-1;p>=0;--p)if(!c4(c,a[p])){const g=a[p];let w=l[p];w=Nn(w);const k=o.hc(g);if(w instanceof xf)c.push(g);else{const C=Ku(w,k);C!=null&&(c.push(g),h.set(g,C))}}const f=new In(c);return new o4(h,f,o.fieldTransforms)}function HF(t,e,n,r=!1){return Ku(n,t.dc(r?4:3,e))}function Ku(t,e){if(u4(t=Nn(t)))return Hy("Unsupported field value:",e,t),l4(t,e);if(t instanceof vf)return function(r,i){if(!a4(i.oc))throw i.Tc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Tc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.cc&&e.oc!==4)throw e.Tc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=Ku(a,i.Pc(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Nn(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return IM(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=xt.fromDate(r);return{timestampValue:ch(i.serializer,s)}}if(r instanceof xt){const s=new xt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ch(i.serializer,s)}}if(r instanceof Fy)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ra)return{bytesValue:Sk(i.serializer,r._byteString)};if(r instanceof xn){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Tc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Sy(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof $y)return function(o,a){return{mapValue:{fields:{[ZI]:{stringValue:XI},[ah]:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw a.Tc("VectorValues must only contain numeric values.");return wy(a.serializer,c)})}}}}}}(r,i);throw i.Tc(`Unsupported field value: ${pf(r)}`)}(t,e)}function l4(t,e){const n={};return qI(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Es(t,(r,i)=>{const s=Ku(i,e.uc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function u4(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof xt||t instanceof Fy||t instanceof Ra||t instanceof xn||t instanceof vf||t instanceof $y)}function Hy(t,e,n){if(!u4(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=pf(n);throw r==="an object"?e.Tc(t+" a custom object"):e.Tc(t+" "+r)}}function Vg(t,e,n){if((e=Nn(e))instanceof yf)return e._internalPath;if(typeof e=="string")return Wy(t,e);throw ph("Field path arguments must be of type string or ",t,!1,void 0,n)}const WF=new RegExp("[~\\*/\\[\\]]");function Wy(t,e,n){if(e.search(WF)>=0)throw ph(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new yf(...e.split("."))._internalPath}catch{throw ph(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ph(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new J($.INVALID_ARGUMENT,a+t+l)}function c4(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class d4{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new xn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new qF(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(wf("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class qF extends d4{data(){return super.data()}}function wf(t,e){return typeof e=="string"?Wy(t,e):e instanceof yf?e._internalPath:e._delegate._internalPath}/**
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
 */function h4(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new J($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class qy{}class f4 extends qy{}function Ar(t,e,...n){let r=[];e instanceof qy&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof Gy).length,a=s.filter(l=>l instanceof _f).length;if(o>1||o>0&&a>0)throw new J($.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class _f extends f4{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new _f(e,n,r)}_apply(e){const n=this._parse(e);return p4(e._query,n),new Ts(e.firestore,e.converter,Ig(e._query,n))}_parse(e){const n=Uy(e.firestore);return function(s,o,a,l,c,h,f){let p;if(c.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new J($.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){W2(f,h);const w=[];for(const k of f)w.push(H2(l,s,k));p={arrayValue:{values:w}}}else p=H2(l,s,f)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||W2(f,h),p=HF(a,o,f,h==="in"||h==="not-in");return ht.create(c,h,p)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function No(t,e,n){const r=e,i=wf("where",t);return _f._create(i,r,n)}class Gy extends qy{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Gy(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:gr.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)p4(o,l),o=Ig(o,l)}(e._query,n),new Ts(e.firestore,e.converter,Ig(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ky extends f4{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Ky(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new J($.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new J($.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Cu(s,o)}(e._query,this._field,this._direction);return new Ts(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Ga(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function lo(t,e="asc"){const n=e,r=wf("orderBy",t);return Ky._create(r,n)}function H2(t,e,n){if(typeof(n=Nn(n))=="string"){if(n==="")throw new J($.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ak(e)&&n.indexOf("/")!==-1)throw new J($.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ue.fromString(n));if(!ee.isDocumentKey(r))throw new J($.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return i2(t,new ee(r))}if(n instanceof xn)return i2(t,n._key);throw new J($.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${pf(n)}.`)}function W2(t,e){if(!Array.isArray(t)||t.length===0)throw new J($.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function p4(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new J($.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new J($.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class GF{convertValue(e,n="none"){switch(ps(e)){case 0:return null;case 1:return e.booleanValue;case 2:return nt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(fs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ie(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Es(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n[ah].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>nt(o.doubleValue));return new $y(s)}convertGeoPoint(e){return new Fy(nt(e.latitude),nt(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=sf(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Tu(e));default:return null}}convertTimestamp(e){const n=hs(e);return new xt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ue.fromString(e);Ce(Pk(r),9688,{name:e});const i=new Iu(r.get(1),r.get(3)),s=new ee(r.popFirst(5));return i.isEqual(n)||_i(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function KF(t,e,n){let r;return r=t?t.toFirestore(e):e,r}function QF(){return new LF("count")}/**
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
 */class Pl{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class m4 extends d4{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new gd(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(wf("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class gd extends m4{data(e={}){return super.data(e)}}class g4{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Pl(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new gd(this._firestore,this._userDataWriter,r.key,r,new Pl(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new J($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new gd(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Pl(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new gd(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Pl(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,h=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:YF(a.type),doc:l,oldIndex:c,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function YF(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ie(61501,{type:t})}}class bf extends GF{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ra(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new xn(this.firestore,null,n)}}function zc(t){t=fr(t,Ts);const e=fr(t.firestore,ys),n=gf(e),r=new bf(e);return h4(t._query),PF(n,t._query).then(i=>new g4(e,r,t,i))}function JF(t,e,n,...r){t=fr(t,xn);const i=fr(t.firestore,ys),s=Uy(i);let o;return o=typeof(e=Nn(e))=="string"||e instanceof yf?BF(s,"updateDoc",t._key,e,n,r):UF(s,"updateDoc",t._key,e),Qy(i,[o.toMutation(t._key,hr.exists(!0))])}function yd(t){return Qy(fr(t.firestore,ys),[new _y(t._key,hr.none())])}function Nu(t,e){const n=fr(t.firestore,ys),r=Yl(t),i=KF(t.converter,e);return Qy(n,[zF(Uy(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,hr.exists(!1))]).then(()=>r)}function Qu(t,...e){var n,r,i;t=Nn(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||B2(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(B2(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),e[o+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let l,c,h;if(t instanceof xn)c=fr(t.firestore,ys),h=xy(t._key.path),l={next:f=>{e[o]&&e[o](ZF(c,t,f))},error:e[o+1],complete:e[o+2]};else{const f=fr(t,Ts);c=fr(f.firestore,ys),h=f._query;const p=new bf(c);l={next:g=>{e[o]&&e[o](new g4(c,p,f,g))},error:e[o+1],complete:e[o+2]},h4(t._query)}return function(p,g,w,k){const C=new t4(k),x=new qk(g,C,w);return p.asyncQueue.enqueueAndForget(async()=>Hk(await Mg(p),x)),()=>{C.yu(),p.asyncQueue.enqueueAndForget(async()=>Wk(await Mg(p),x))}}(gf(c),h,a,l)}function Qy(t,e){return function(r,i){const s=new fi;return r.asyncQueue.enqueueAndForget(async()=>vF(await AF(r),i,s)),s.promise}(gf(t),e)}function ZF(t,e,n){const r=n.docs.get(e._key),i=new bf(t);return new m4(t,i,e._key,r,new Pl(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */function XF(t){return e$(t,{count:QF()})}function e$(t,e){const n=fr(t.firestore,ys),r=gf(n),i=tM(e,(s,o)=>new MM(o,s.aggregateType,s._internalFieldPath));return NF(r,t._query,i).then(s=>function(a,l,c){const h=new bf(a);return new MF(l,h,c)}(n,t,s))}function Yy(){return new By("serverTimestamp")}(function(e,n=!0){(function(i){Ha=i})(cI),wi(new Vr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new ys(new F9(r.getProvider("auth-internal")),new U9(o,r.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new J($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Iu(c.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Kn(qw,Gw,e),Kn(qw,Gw,"esm2017")})();/**
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
 */const y4="firebasestorage.googleapis.com",t$="storageBucket",n$=2*60*1e3,r$=10*60*1e3;/**
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
 */class Hr extends Ti{constructor(e,n,r=0){super(Fp(e),`Firebase Storage: ${n} (${Fp(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Hr.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Fp(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var $r;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})($r||($r={}));function Fp(t){return"storage/"+t}function i$(){const t="An unknown error occurred, please check the error payload for server response.";return new Hr($r.UNKNOWN,t)}function s$(){return new Hr($r.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function o$(){return new Hr($r.CANCELED,"User canceled the upload/download.")}function a$(t){return new Hr($r.INVALID_URL,"Invalid URL '"+t+"'.")}function l$(t){return new Hr($r.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function q2(t){return new Hr($r.INVALID_ARGUMENT,t)}function v4(){return new Hr($r.APP_DELETED,"The Firebase app was deleted.")}function u$(t){return new Hr($r.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class ar{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=ar.makeFromUrl(e,n)}catch{return new ar(e,"")}if(r.path==="")return r;throw l$(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(P){P.path.charAt(P.path.length-1)==="/"&&(P.path_=P.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(P){P.path_=decodeURIComponent(P.path)}const h="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",g=new RegExp(`^https?://${f}/${h}/b/${i}/o${p}`,"i"),w={bucket:1,path:3},k=n===y4?"(?:storage.googleapis.com|storage.cloud.google.com)":n,C="([^?#]*)",x=new RegExp(`^https?://${k}/${i}/${C}`,"i"),E=[{regex:a,indices:l,postModify:s},{regex:g,indices:w,postModify:c},{regex:x,indices:{bucket:1,path:2},postModify:c}];for(let P=0;P<E.length;P++){const j=E[P],M=j.regex.exec(e);if(M){const b=M[j.indices.bucket];let S=M[j.indices.path];S||(S=""),r=new ar(b,S),j.postModify(r);break}}if(r==null)throw a$(e);return r}}class c${constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function d$(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let c=!1;function h(...C){c||(c=!0,e.apply(null,C))}function f(C){i=setTimeout(()=>{i=null,t(g,l())},C)}function p(){s&&clearTimeout(s)}function g(C,...x){if(c){p();return}if(C){p(),h.call(null,C,...x);return}if(l()||o){p(),h.call(null,C,...x);return}r<64&&(r*=2);let E;a===1?(a=2,E=0):E=(r+Math.random())*1e3,f(E)}let w=!1;function k(C){w||(w=!0,p(),!c&&(i!==null?(C||(a=2),clearTimeout(i),f(0)):C||(a=1)))}return f(0),s=setTimeout(()=>{o=!0,k(!0)},n),k}function h$(t){t(!1)}/**
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
 */function f$(t){return t!==void 0}function G2(t,e,n,r){if(r<e)throw q2(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw q2(`Invalid value for '${t}'. Expected ${n} or less.`)}function p$(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var mh;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(mh||(mh={}));/**
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
 */function m$(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class g${constructor(e,n,r,i,s,o,a,l,c,h,f,p=!0,g=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=h,this.connectionFactory_=f,this.retry=p,this.isUsingEmulator=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((w,k)=>{this.resolve_=w,this.reject_=k,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Uc(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===mh.NO_ERROR,l=s.getStatus();if(!a||m$(l,this.additionalRetryCodes_)&&this.retry){const h=s.getErrorCode()===mh.ABORT;r(!1,new Uc(!1,null,h));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new Uc(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());f$(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=i$();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?v4():o$();o(l)}else{const l=s$();o(l)}};this.canceled_?n(!1,new Uc(!1,null,!0)):this.backoffId_=d$(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&h$(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Uc{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function y$(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function v$(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function x$(t,e){e&&(t["X-Firebase-GMPID"]=e)}function w$(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function _$(t,e,n,r,i,s,o=!0,a=!1){const l=p$(t.urlParams),c=t.url+l,h=Object.assign({},t.headers);return x$(h,e),y$(h,n),v$(h,s),w$(h,r),new g$(c,t.method,h,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o,a)}/**
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
 */function b$(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function E$(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class gh{constructor(e,n){this._service=e,n instanceof ar?this._location=n:this._location=ar.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new gh(e,n)}get root(){const e=new ar(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return E$(this._location.path)}get storage(){return this._service}get parent(){const e=b$(this._location.path);if(e===null)return null;const n=new ar(this._location.bucket,e);return new gh(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw u$(e)}}function K2(t,e){const n=e==null?void 0:e[t$];return n==null?null:ar.makeFromBucketSpec(n,t)}function S$(t,e,n,r={}){t.host=`${e}:${n}`;const i=Yh(e);i&&(nI(`https://${t.host}`),Jh("Storage",!0)),t._isUsingEmulator=!0,t._protocol=i?"https":"http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:rI(s,t.app.options.projectId))}class T${constructor(e,n,r,i,s,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._isUsingEmulator=o,this._bucket=null,this._host=y4,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=n$,this._maxUploadRetryTime=r$,this._requests=new Set,i!=null?this._bucket=ar.makeFromBucketSpec(i,this._host):this._bucket=K2(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=ar.makeFromBucketSpec(this._url,e):this._bucket=K2(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){G2("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){G2("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(uI(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new gh(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new c$(v4());{const o=_$(e,this._appId,r,i,n,this._firebaseVersion,s,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Q2="@firebase/storage",Y2="0.13.10";/**
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
 */const x4="storage";function I$(t=Xh(),e){t=Nn(t),Jh("Storage",!1);const r=Ba(t,x4).getImmediate({identifier:e}),i=eI("storage");return i&&k$(r,...i),r}function k$(t,e,n,r={}){S$(t,e,n,r)}function C$(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new T$(n,r,i,e,cI)}function A$(){wi(new Vr(x4,C$,"PUBLIC").setMultipleInstances(!0)),Kn(Q2,Y2,""),Kn(Q2,Y2,"esm2017")}A$();const R$={apiKey:"AIzaSyAp5Uw4nrLUi6-TfynGqdkADafVJPuenLM",authDomain:"nvu-live.firebaseapp.com",projectId:"nvu-live",storageBucket:"nvu-live.appspot.com",messagingSenderId:"85674592536",appId:"1:85674592536:web:cfa826e7629be68e7e766d",measurementId:"G-8F9KHEZS6N"},Jy=ay(R$);D9(Jy);const Lr=s4(Jy);I$(Jy);const P$=_.div`
  padding: 28px 24px 24px 24px;
  background-color: #111;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 255, 255, 0.04);
  margin-bottom: 32px;
  border: 1.5px solid rgba(0,255,255,0.08);
`,N$=_.h3`
  font-size: 22px;
  color: #fff;
  margin-bottom: 22px;
  font-weight: 700;
  letter-spacing: 0.01em;
`,$p=_.label`
  display: block;
  font-size: 15px;
  color: #b0b0b0;
  margin-bottom: 7px;
  font-weight: 500;
`,Zy=`
  width: 100%;
  padding: 13px 16px;
  margin-bottom: 18px;
  border: 1.5px solid #23272a;
  border-radius: 10px;
  box-sizing: border-box;
  font-size: 16px;
  color: #fff;
  background: #181a1b;
  transition: border-color 0.2s, box-shadow 0.2s;

  &::placeholder {
    color: #888;
    opacity: 1;
  }

  &:focus {
    outline: none;
    border-color: #00fff7;
    box-shadow: 0 0 0 2px rgba(0,255,255,0.12);
  }
`,D$=_.input`
  ${Zy}
`,O$=_.textarea`
  ${Zy}
  min-height: 120px;
  resize: vertical;
`,j$=_.button`
  padding: 13px 28px;
  background: linear-gradient(90deg, #00fff7 0%, #00bcd4 100%);
  color: #111;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 17px;
  font-weight: 700;
  margin-top: 6px;
  box-shadow: 0 2px 8px rgba(0,255,255,0.08);
  transition: background 0.2s, color 0.2s, transform 0.1s;

  &:hover {
    background: linear-gradient(90deg, #00e6e0 0%, #00acc1 100%);
    color: #000;
  }
  &:active {
    background: #00bcd4;
    color: #000;
    transform: translateY(1px);
  }
  &:disabled {
    background: #222;
    color: #888;
    cursor: not-allowed;
    opacity: 0.7;
    transform: none;
  }
`,L$=_.p`
  color: #ff4d4f;
  font-size: 15px;
  margin-top: -8px;
  margin-bottom: 14px;
`,M$=_.input`
  ${Zy}
`,Xy=()=>{const{t}=ft(),[e,n]=D.useState(""),[r,i]=D.useState(""),[s,o]=D.useState(""),[a,l]=D.useState(!1),[c,h]=D.useState(""),f=async p=>{p.preventDefault(),h("");const g=localStorage.getItem("userName")||"";if(!e.trim()||!r.trim()||!g.trim()){h(t("forum.createPost.errorEmptyFields","Por favor completa todos los campos requeridos"));return}if(s.trim()&&!s.trim().match(/^https?:\/\/.+\.(jpg|jpeg|png|gif)(\?.*)?$/i)){h(t("forum.createPost.errorInvalidImageUrl","La URL de la imagen no es válida. Debe ser un enlace directo a una imagen (JPG, PNG o GIF)"));return}l(!0);try{await Nu(Mt(Lr,"posts"),{title:e.trim(),content:r.trim(),author:g.trim(),imageUrl:s.trim(),createdAt:Yy()}),n(""),i(""),o(""),alert(t("forum.createPost.success","¡Post publicado exitosamente!"))}catch(w){console.error("Error creating post: ",w),h(t("forum.createPost.errorGeneral","Hubo un error al publicar el post. Por favor intenta nuevamente."))}finally{l(!1)}};return d.jsxs(P$,{children:[d.jsx(N$,{children:t("forum.createPost.title","Crear Nueva Publicación")}),d.jsxs("form",{onSubmit:f,children:[d.jsxs("div",{children:[d.jsx($p,{htmlFor:"postTitle",children:t("forum.createPost.titleLabel","Título de la Publicación")}),d.jsx(D$,{id:"postTitle",type:"text",placeholder:t("forum.createPost.titlePlaceholder","Escribe un título llamativo para tu publicación..."),value:e,onChange:p=>n(p.target.value),disabled:a})]}),d.jsxs("div",{children:[d.jsx($p,{htmlFor:"postContent",children:t("forum.createPost.contentLabel","Contenido de la Publicación")}),d.jsx(O$,{id:"postContent",placeholder:t("forum.createPost.contentPlaceholder","Comparte tus ideas, análisis, preguntas o experiencias sobre trading..."),value:r,onChange:p=>i(p.target.value),disabled:a})]}),d.jsxs("div",{children:[d.jsx($p,{htmlFor:"postImageUrl",children:t("forum.createPost.imageUrlLabel","Imagen de la Publicación (opcional)")}),d.jsx(M$,{id:"postImageUrl",type:"url",placeholder:t("forum.createPost.imageUrlPlaceholder","Pega aquí la URL de una imagen (gráficos, capturas, etc.)"),value:s,onChange:p=>o(p.target.value),disabled:a})]}),c&&d.jsx(L$,{children:c}),d.jsx(j$,{type:"submit",disabled:a,children:a?t("forum.createPost.creating","Publicando..."):t("forum.createPost.submit","Publicar")})]})]})},Bc=_.div`
  padding: 15px 20px 20px 20px;
  background-color: rgb(0,0,0);
  min-height: calc(100vh - 64px);
`,V$=_.div`
  display: flex;
  gap: 20px;
  
  @media (max-width: 992px) {
    flex-direction: column;
  }
`,F$=_.div`
  flex: 1;
`,$$=_.div`
  width: 350px;
  flex-shrink: 0;
  
  @media (max-width: 992px) {
    width: 100%;
  }
`,J2=_.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  background: none;
`,Z2=_.h1`
  font-size: 2rem;
  font-weight: 700;
  color: rgb(255,255,255);
  margin: 0;
`;_.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 15px;
  margin-bottom: 20px;
`;_.input`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 14px;
  outline: none;
  
  &::placeholder {
    color: #666;
  }
  
  &:focus {
    border-color: #0088cc;
  }
`;_.button`
  padding: 8px 16px;
  background-color: #1a1a2e;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  float: right;
  margin-top: 10px;
  cursor: pointer;
  
  &:hover {
    background-color: #0d0d1a;
  }
`;const z$=_.div`
  display: flex;
  flex-direction: column;
  gap: 24px; /* Aumentado el gap para más espacio entre cards */
`,w4=_.div`
  background: rgb(24,24,24);
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.10);
  padding: 20px;
  margin-bottom: 20px;
  color: rgb(255,255,255);
  border: 1px solid rgba(0,150,136,0.08);
`,_4=_.div`
  padding: 20px 24px; /* Aumentado padding */
`,b4=_.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px; /* Ajustado margen */
`,E4=_.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: #e9ecef; /* Color de fondo más neutro */
  margin-right: 12px; /* Ajustado margen */
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600; /* Letra un poco más marcada */
  color: #495057;   /* Color de letra más oscuro */
  font-size: 18px;
  border: 2px solid #f8f9fa; /* Borde sutil */
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,S4=_.div`
  display: flex;
  flex-direction: column;
`,T4=_.span`
  font-weight: 600;
  font-size: 1em;
  color: rgb(0,150,136);
  line-height: 1.3;
`,I4=_.span`
  font-size: 0.85em;
  color: rgb(158,158,158);
`,k4=_.h2`
  font-size: 20px;
  margin-bottom: 12px;
  font-weight: 600;
  color: rgb(255,255,255);
  line-height: 1.4;
`,C4=_.div`
  width: 100%;
  max-height: 450px;
  background-color: rgb(24,24,24);
  margin-top: 8px;
  margin-bottom: 16px;
  overflow: hidden;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  img {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    object-fit: cover;
    display: block;
    border-radius: 8px;
  }
`,A4=_.p`
  font-size: 1em;
  color: rgb(158,158,158);
  margin-bottom: 0.5em;
`,R4=_.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
  background-color: rgb(24,24,24);
  border-top: 1px solid rgb(30,30,30);
`,P4=_.div`
  display: flex;
  align-items: center;
  gap: 6px; /* Espacio entre icono y texto */
  color: #6c757d;
  font-size: 0.9em;

  svg {
    vertical-align: middle; /* Mejor alineación del icono */
    font-size: 1.1em; /* Icono ligeramente más grande */
  }
`;_.button`
  padding: 8px 16px; /* Padding ajustado */
  font-size: 0.9em;
  color: #007bff;
  background-color: transparent;
  border: 1px solid #007bff;
  border-radius: 6px; /* Bordes más redondeados */
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.2s ease, color 0.2s ease, transform 0.1s ease;

  &:hover {
    background-color: #007bff;
    color: white;
    border-color: #007bff;
  }
  
  &:active {
    transform: translateY(1px);
    background-color: #0056b3;
    border-color: #0056b3;
  }
`;const U$=_.div`
  background-color: rgb(24,24,24);
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.18);
  padding: 15px;
  margin-bottom: 20px;
`,B$=_.h2`
  font-size: 18px;
  margin-bottom: 15px;
  font-weight: 600;
  color: rgb(0,150,136);
`;_.div`
  margin-bottom: 15px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;_.div`
  width: 100%;
  height: 120px;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 10px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;_.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 5px;
  color: rgb(255,255,255);
`;_.p`
  font-size: 14px;
  color: rgb(158,158,158);
  line-height: 1.4;
`;_.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: rgb(158,158,158);
  margin-top: 5px;
`;const H$=_.button`
  display: flex;
  align-items: center;
  gap: 5px;
  background: none;
  border: none;
  color: #6c757d; /* Color ajustado */
  font-size: 1em; /* Tamaño ajustado */
  cursor: pointer;
  padding: 8px 0; /* Añadido padding para mejor click target */
  margin-bottom: 20px; /* Espacio aumentado */
  
  &:hover {
    color: #007bff;
  }

  svg {
    font-size: 1.2em;
  }
`,W$=_(w4)`
  cursor: pointer;
  &:hover {
    box-shadow: 0 4px 16px rgba(0,150,136,0.18);
    border-color: rgb(0,150,136,0.18);
  }
`,q$=_.div`
  background: rgb(24,24,24);
  border-radius: 10px;
  margin-top: 24px;
  padding: 20px;
`,G$=_.h3`
  color: rgb(0,150,136);
  font-size: 18px;
  margin-bottom: 16px;
`,K$=_.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,Q$=_.div`
  background: rgb(18,18,18);
  border-radius: 8px;
  padding: 12px 14px;
  color: rgb(255,255,255);
  font-size: 15px;
`,Y$=_.form`
  display: flex;
  gap: 10px;
  margin-top: 16px;
`,J$=_.input`
  flex: 1;
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid rgb(40,40,40);
  background: rgb(24,24,24);
  color: rgb(255,255,255);
  font-size: 15px;
  outline: none;
`,Z$=_.button`
  background: rgb(0,150,136);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 18px;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  transition: background 0.2s;
  &:hover { background: rgb(0,200,180); color: rgb(0,0,0); }
`,X$=_.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.85);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
`,e7=_.img`
  max-width: 90vw;
  max-height: 80vh;
  border-radius: 12px;
  box-shadow: 0 4px 32px rgba(0,0,0,0.4);
`,t7=_.button`
  position: absolute;
  top: 32px;
  right: 32px;
  background: rgb(0,0,0,0.7);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 1.7rem;
  cursor: pointer;
  z-index: 2100;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
  &:hover { background: rgb(0,150,136,0.8); color: rgb(0,0,0); }
`,n7=({post:t,onBack:e})=>{const{t:n}=ft(),[r,i]=ve.useState([]),[s,o]=ve.useState(""),[a,l]=ve.useState(!1),[c,h]=ve.useState(!1);ve.useEffect(()=>{if(!(t!=null&&t.id))return;const g=Mt(Lr,"posts",t.id,"comments"),w=Ar(g,lo("createdAt","asc")),k=Qu(w,C=>{i(C.docs.map(x=>({id:x.id,...x.data()})))});return()=>k()},[t==null?void 0:t.id]);const f=async g=>{if(g.preventDefault(),!!s.trim()){l(!0);try{const w=Mt(Lr,"posts",t.id,"comments");await Nu(w,{text:s,author:"Usuario",createdAt:Yy()}),o("")}catch{alert("Error al enviar el comentario")}l(!1)}},p=g=>g&&g.toDate?g.toDate().toLocaleString():n("forum.post.dateUnavailable");return t?d.jsxs(w4,{children:[d.jsxs(_4,{children:[d.jsxs(H$,{onClick:e,children:[d.jsx($S,{})," ",n("forum.backButton","Volver al foro")]}),d.jsx(k4,{children:t.title}),d.jsxs(b4,{children:[d.jsx(E4,{children:t.author?t.author.charAt(0).toUpperCase():"U"}),d.jsxs(S4,{children:[d.jsx(T4,{children:t.author||n("forum.post.anonymous")}),d.jsx(I4,{children:p(t.createdAt)})]})]}),d.jsx(A4,{children:t.content}),t.imageUrl&&d.jsx(C4,{children:d.jsx("img",{src:t.imageUrl,alt:t.title||n("forum.post.imageAlt","Imagen del post"),style:{cursor:"zoom-in"},onClick:()=>h(!0)})})]}),d.jsx(R4,{children:d.jsxs(P4,{children:[d.jsx(Bh,{})," ",r.length," ",n("forum.post.comments")]})}),d.jsxs(q$,{children:[d.jsx(G$,{children:n("forum.commentsTitle","Comentarios")}),d.jsxs(K$,{children:[r.length===0&&d.jsx("span",{style:{color:"rgb(158,158,158)"},children:n("forum.noComments","Sin comentarios aún.")}),r.map(g=>d.jsxs(Q$,{children:[d.jsxs("b",{style:{color:"rgb(0,150,136)"},children:[g.author||"Usuario",":"]})," ",g.text,d.jsx("div",{style:{fontSize:"12px",color:"rgb(158,158,158)",marginTop:"2px"},children:p(g.createdAt)})]},g.id))]}),d.jsxs(Y$,{onSubmit:f,children:[d.jsx(J$,{type:"text",placeholder:n("forum.addComment","Escribe un comentario..."),value:s,onChange:g=>o(g.target.value),disabled:a}),d.jsx(Z$,{type:"submit",disabled:a||!s.trim(),children:n("forum.send","Enviar")})]})]}),c&&d.jsxs(X$,{onClick:()=>h(!1),children:[d.jsx(t7,{onClick:g=>{g.stopPropagation(),h(!1)},title:"Cerrar",children:"×"}),d.jsx(e7,{src:t.imageUrl,alt:t.title||n("forum.post.imageAlt","Imagen del post")})]})]}):null},r7=()=>{const{t}=ft(),[e,n]=D.useState([]),[r,i]=D.useState(!0),[s,o]=D.useState(null),[a,l]=D.useState(null);D.useEffect(()=>{const g=Mt(Lr,"posts"),w=Ar(g,lo("createdAt","desc")),k=Qu(w,C=>{const x=C.docs.map(v=>({id:v.id,...v.data()}));n(x),i(!1)},C=>{console.error("Error fetching posts: ",C),o(t("forum.loadError")),i(!1)});return()=>k()},[t]);const c=g=>{l(g)},h=()=>{l(null)},f=g=>g&&g.toDate?g.toDate().toLocaleDateString(void 0,{year:"numeric",month:"long",day:"numeric"}):t("forum.post.dateUnavailable");if(r)return d.jsx(Bc,{children:d.jsx("p",{children:t("forum.loadingPosts")})});if(s)return d.jsx(Bc,{children:d.jsx("p",{children:s})});if(a)return d.jsxs(Bc,{children:[d.jsx(J2,{children:d.jsx(Z2,{children:t("forum.postDetailTitle","Detalle del Post")})}),d.jsx(n7,{post:a,onBack:h})]});const p=["Estrategias de Trading","Análisis Técnico","Gestión de Riesgo","Psicología del Trading","Noticias del Mercado"];return d.jsxs(Bc,{children:[d.jsx(J2,{children:d.jsx(Z2,{children:"NVU Forex News"})}),d.jsxs(V$,{children:[d.jsxs(F$,{children:[d.jsx(Xy,{}),d.jsx(z$,{children:e.length===0&&!r?d.jsx("p",{children:t("forum.noPosts")}):e.map(g=>d.jsxs(W$,{onClick:()=>c(g),children:[d.jsxs(_4,{children:[d.jsx(k4,{children:g.title}),d.jsxs(b4,{children:[d.jsx(E4,{children:g.author?g.author.charAt(0).toUpperCase():"U"}),d.jsxs(S4,{children:[d.jsx(T4,{children:g.author||t("forum.post.anonymous")}),d.jsx(I4,{children:f(g.createdAt)})]})]}),d.jsxs(A4,{children:[g.content.substring(0,250),g.content.length>250?"...":""]}),g.imageUrl&&d.jsx(C4,{children:d.jsx("img",{src:g.imageUrl,alt:g.title||t("forum.post.imageAlt","Imagen del post")})})]}),d.jsx(R4,{children:d.jsxs(P4,{children:[d.jsx(Bh,{})," ",g.commentsCount||0," Comentarios"]})})]},g.id))})]}),d.jsx($$,{children:d.jsxs(U$,{children:[d.jsx(B$,{children:"Tendencias del Foro"}),d.jsx("ul",{style:{paddingLeft:18,color:"rgb(200,200,200)",margin:0},children:p.map((g,w)=>d.jsx("li",{style:{marginBottom:8},children:g},w))})]})})]})]})},i7=_.div`
  position: fixed;
  inset: 0;
  z-index: -1;
  background: linear-gradient(120deg, #0f2027 0%, #2c5364 100%);
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 20% 30%, rgba(0,255,255,0.08) 0, transparent 60%),
                radial-gradient(circle at 80% 70%, rgba(255,0,255,0.08) 0, transparent 60%);
    z-index: 1;
    pointer-events: none;
  }
`,s7=_.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0;
`,vd=_.div`
  padding: 32px 0 0 0;
  max-width: 100%;
  @media (max-width: 900px) {
    padding: 18px 0 0 0;
  }
  @media (max-width: 768px) {
    padding-left: 15px;
    padding-right: 15px;
  }
`;_.aside`
  position: sticky;
  top: 100px;
  height: fit-content;
  background: rgba(24,28,36,0.7);
  border-radius: 18px;
  padding: 32px 24px;
  color: #fff;
  margin-top: 32px;
  box-shadow: 0 0 24px 2px #00fff7a0;
  border: 1.5px solid #00fff7;
  backdrop-filter: blur(8px);
  @media (max-width: 1200px) {
    display: none;
  }
  @media (max-width: 900px) {
    display: block;
    position: static;
    margin-top: 0;
    margin-bottom: 24px;
    padding: 18px 10px;
  }
`;_.h3`
  background: linear-gradient(90deg, #00fff7 0%, #a259ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.3em;
  margin-bottom: 24px;
  font-weight: 700;
  letter-spacing: 1px;
`;_.ul`
  padding-left: 18px;
  margin: 0 0 32px 0;
  list-style-type: none;
  li {
    margin-bottom: 12px;
    color: #b2fefa;
    font-size: 1em;
    transition: color 0.2s;
    text-shadow: 0 0 6px #00fff7a0;
    &:hover {
      color: #fff;
      text-shadow: 0 0 12px #00fff7;
    }
  }
`;const o7=_.div`
  display: flex;
  align-items: stretch;
  background: #23272a;
  border-radius: 24px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  margin-bottom: 32px;
  overflow: hidden;
  cursor: pointer;
  transition: box-shadow 0.2s, transform 0.2s;
  height: 180px;
  min-height: 180px;
  max-height: 180px;
  &:hover {
    box-shadow: 0 4px 24px rgba(0,0,0,0.18);
    transform: translateY(-2px) scale(1.01);
  }
  @media (max-width: 900px) {
    flex-direction: column;
    border-radius: 18px;
    height: auto;
    min-height: unset;
    max-height: unset;
    margin-bottom: 18px;
  }
`,a7=_.div`
  min-width: 320px;
  max-width: 320px;
  background: #fff;
  position: relative;
  display: flex;
  align-items: stretch;
  justify-content: center;
  padding: 0;
  height: 100%;
  overflow: hidden;
  @media (max-width: 900px) {
    min-width: 100%;
    max-width: 100%;
    height: 180px;
    aspect-ratio: unset;
  }
`,X2=_.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0;
  background: #f5f5f5;
  @media (max-width: 900px) {
    height: 180px;
    min-height: 120px;
    max-height: 220px;
  }
`,l7=_.div`
  flex: 1;
  padding: 10px 8px 8px 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: 900px) {
    padding: 8px 4px 4px 4px;
  }
`,u7=_.h2`
  font-size: 1.05rem;
  font-weight: 700;
  color: #fff;
  margin: 0 0 8px 0;
`,c7=_.div`
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
`,d7=_.span`
  background: #e0e0e0;
  color: #23272a;
  font-size: 0.85rem;
  font-weight: 500;
  border-radius: 18px;
  padding: 4px 12px;
  display: inline-block;
`,h7=_.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 8px;
`,f7=_.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #d8d8d8;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: 700;
  color: #23272a;
`,p7=_.div`
  display: flex;
  flex-direction: column;
`,m7=_.span`
  color: #fff;
  font-size: 0.95rem;
  font-weight: 500;
`,g7=_.span`
  color: #b0b0b0;
  font-size: 0.85rem;
`,y7=_.div`
  min-width: 100px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 0 16px 16px 0;
  @media (max-width: 900px) {
    min-width: 100%;
    justify-content: flex-start;
    padding: 0 0 12px 12px;
  }
`,v7=_.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: #23272a;
  background: #fff;
  border-radius: 18px;
  padding: 6px 12px;
  font-size: 0.95rem;
  font-weight: 500;
`;_.div`
  margin-top: 32px;
  border-top: 1px solid rgba(255,255,255,0.1);
  padding-top: 32px;
`;_.h3`
  color: #00e6e6;
  font-size: 1.2em;
  margin-bottom: 24px;
  font-weight: 600;
  text-align: center;
`;_.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;_.div`
  background: rgb(24,24,24);
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }
`;_.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
  @media (max-width: 900px) {
    height: 120px;
  }
`;_.div`
  padding: 20px;
  text-align: center;
`;_.p`
  color: rgb(255,255,255);
  font-size: 1.1em;
  margin: 0;
  line-height: 1.4;
  font-weight: 500;
`;_.div`
  margin-top: 32px;
  border-top: 1px solid rgba(255,255,255,0.1);
  padding-top: 32px;
`;_.h3`
  color: #00e6e6;
  font-size: 1.2em;
  margin-bottom: 16px;
  font-weight: 600;
`;_.p`
  color: rgb(158,158,158);
  font-size: 0.95em;
  margin-bottom: 20px;
  line-height: 1.5;
`;_.button`
  background: linear-gradient(90deg, #00fff7 0%, #a259ff 100%);
  color: #181c1b;
  border: none;
  padding: 14px 28px;
  border-radius: 12px;
  font-weight: 700;
  font-size: 1.1em;
  cursor: pointer;
  width: 100%;
  box-shadow: 0 0 16px 2px #00fff7a0;
  transition: background 0.2s, color 0.2s, box-shadow 0.2s;
  &:hover {
    background: linear-gradient(90deg, #a259ff 0%, #00fff7 100%);
    color: #fff;
    box-shadow: 0 0 32px 4px #a259ffb0;
  }
`;const x7=_.div`
  background: #fff;
  color: #23272a;
  border-radius: 18px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.10);
  padding: 32px 24px;
  margin: 32px auto;
  max-width: 700px;
`,w7=_.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
`,_7=_.button`
  background: none;
  border: none;
  color: rgb(0,150,136);
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 50%;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(0,150,136,0.1);
    transform: scale(1.1);
  }
`,b7=_.h1`
  color: #fff;
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0;
`,E7=_.div`
  color: rgb(200,200,200);
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 32px;
`,S7=_.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 24px;
`,T7=_.div`
  background: #f5f5f5;
  border-radius: 12px;
  margin-top: 32px;
  padding: 24px 18px;
  color: #23272a;
`,I7=_.h3`
  color: #00bcd4;
  font-size: 1.15rem;
  margin-bottom: 16px;
  font-weight: 700;
`,k7=_.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,C7=_.div`
  background: #fff;
  border-radius: 8px;
  padding: 12px 14px;
  color: #23272a;
  font-size: 15px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.04);
`,A7=_.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 13px;
  margin-bottom: 4px;
`,e_=_.input`
  flex: 1;
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid #b0b0b0;
  background: #f5f5f5;
  color: #23272a;
  font-size: 15px;
  outline: none;
`,xl=_.button`
  background: #00bcd4;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  margin-left: 8px;
  transition: background 0.2s;
  &:hover { background: #0097a7; color: #fff; }
`,R7=_.div`
  display: flex;
  gap: 8px;
  margin-top: 6px;
`;function N4(t,e){if(!t)return"";const r=Math.floor((new Date-t)/1e3);let i=Math.floor(r/31536e3);return i>=1?e("common.timeAgo",{time:i+" año"+(i>1?"s":"")}):(i=Math.floor(r/2592e3),i>=1?e("common.timeAgo",{time:i+" mes"+(i>1?"es":"")}):(i=Math.floor(r/86400),i>=1?e("common.timeAgo",{time:i+" día"+(i>1?"s":"")}):(i=Math.floor(r/3600),i>=1?e("common.timeAgo",{time:i+" hora"+(i>1?"s":"")}):(i=Math.floor(r/60),i>=1?e("common.timeAgo",{time:i+" minuto"+(i>1?"s":"")}):e("common.timeAgo",{time:"unos segundos"})))))}const P7=({post:t,onBack:e,t:n,ads:r})=>{const[i,s]=D.useState([]),[o,a]=D.useState(""),[l,c]=D.useState(null),[h,f]=D.useState({}),p=ve.useMemo(()=>{try{return JSON.parse(localStorage.getItem("nvuUserData"))||{}}catch{return{}}},[]);ve.useEffect(()=>{if(!(t!=null&&t.id))return;const v=Mt(Lr,"posts",t.id,"comments"),E=Ar(v,lo("createdAt","asc")),P=Qu(E,j=>{s(j.docs.map(M=>({id:M.id,...M.data()})))});return()=>P()},[t==null?void 0:t.id]);const g=async v=>{if(v.preventDefault(),!!o.trim())try{const E=Mt(Lr,"posts",t.id,"comments");await Nu(E,{text:o,author:p.name||"Usuario",authorId:p.id||"",createdAt:Yy()}),a("")}catch{alert("Error al enviar el comentario")}},w=v=>{c(v.id)},k=async v=>{o.trim()&&(c(null),a(""))},C=async v=>{if(window.confirm("¿Eliminar este comentario?"))try{const E=Mt(Lr,"posts",t.id,"comments");await yd(Yl(E,v))}catch{alert("Error al eliminar el comentario")}},x=v=>v&&v.toDate?N4(v.toDate(),n):"";return!t||!t.title?d.jsx(vd,{children:d.jsxs("div",{style:{color:"white",padding:40,textAlign:"center"},children:[n("news.errorPostData","No se pudo cargar la información del post."),d.jsx("br",{}),d.jsx("button",{onClick:e,style:{marginTop:24,background:"#181c1b",color:"#fff",border:"none",borderRadius:8,padding:"10px 24px",fontWeight:600,cursor:"pointer"},children:n("news.backButton")})]})}):d.jsx("div",{children:d.jsxs(x7,{children:[d.jsxs(w7,{children:[d.jsx(_7,{onClick:e,children:d.jsx($S,{})}),d.jsx(b7,{children:t.title})]}),t.imageUrl&&d.jsx(S7,{src:t.imageUrl,alt:t.title}),d.jsx(E7,{children:t.content}),d.jsxs(T7,{children:[d.jsx(I7,{children:n("forum.commentsTitle","Comentarios")}),d.jsxs(k7,{children:[i.length===0&&d.jsx("span",{style:{color:"#b0b0b0"},children:n("forum.noComments","Sin comentarios aún.")}),i.map(v=>d.jsxs(C7,{children:[d.jsxs(A7,{children:[d.jsxs("b",{style:{color:"#00fff7"},children:[v.author||"Usuario",":"]}),d.jsx("span",{children:x(v.createdAt)}),v.editedAt&&d.jsx("span",{style:{fontStyle:"italic",color:"#a259ff"},children:n("forum.edited","editado")})]}),l===v.id?d.jsxs(d.Fragment,{children:[d.jsx(e_,{type:"text",value:o,onChange:E=>a(E.target.value),disabled:!1}),d.jsx(xl,{type:"button",onClick:()=>k(),disabled:!1,children:n("forum.save","Guardar")}),d.jsx(xl,{type:"button",onClick:()=>{c(null),a("")},children:n("forum.cancel","Cancelar")})]}):d.jsx("span",{children:v.text}),v.authorId===p.id&&l!==v.id&&d.jsxs(R7,{children:[d.jsx(xl,{type:"button",onClick:()=>w(v),children:n("forum.edit","Editar")}),d.jsx(xl,{type:"button",onClick:()=>C(v.id),children:n("forum.delete","Eliminar")})]})]},v.id))]}),d.jsxs(CommentForm,{onSubmit:g,children:[d.jsx(e_,{type:"text",placeholder:n("forum.addComment","Escribe un comentario..."),value:o,onChange:v=>a(v.target.value),disabled:!1,required:!0}),d.jsx(xl,{type:"submit",disabled:!1,children:n("forum.send","Enviar")})]})]})]})})},N7="1400px";_.div`
  width: 100%;
  max-width: ${N7};
  height: 180px;
  background: url(${t=>t.$bannerUrl}) center/cover no-repeat;
  display: block;
  margin: 0 auto 0 auto;
  border-radius: 18px;
  overflow: hidden;
`;const D7=_.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 0;
`,O7=_.div`
  width: 100%;
  max-width: 1400px;
  height: 180px;
  background: url('${t=>t.image}') center/cover no-repeat;
  display: block;
  margin: 0 auto 24px auto;
  border-radius: 18px;
  overflow: hidden;
  @media (max-width: 768px) {
    height: 90px;
    border-radius: 12px;
    margin-bottom: 14px;
  }
`,j7=()=>{const{t,i18n:e}=ft(),[n,r]=D.useState([]),[i,s]=D.useState(!0),[o,a]=D.useState(null),[l,c]=D.useState(null),[h,f]=D.useState(!1),[p,g]=D.useState({}),w=ve.useMemo(()=>{try{return JSON.parse(localStorage.getItem("nvuUserData"))||null}catch{return null}},[]),k=w==null?void 0:w.id,C=e.language.startsWith("es")?"/images/Banner 4.jpg":"/images/Banner 4 English.jpg",x=[{id:1,image:"https://picsum.photos/seed/news1/400/300",text:t("news.ads.news")},{id:2,image:"https://picsum.photos/seed/news2/400/300",text:t("news.ads.analysis")},{id:3,image:"https://picsum.photos/seed/news3/400/300",text:t("news.ads.strategies")}];D.useEffect(()=>{const b=Mt(Lr,"posts"),S=Ar(b,lo("createdAt","desc")),A=Qu(S,R=>{const N=R.docs.map(O=>({id:O.id,...O.data()}));r(N),s(!1)},R=>{a(t("forum.loadError")),s(!1)});return()=>A()},[t]),D.useEffect(()=>{if(n.length===0)return;(async()=>{const S={};for(const A of n){if(!A.id)continue;const R=Mt(Lr,"posts",A.id,"comments"),N=await XF(R);S[A.id]=N.data().count||0}g(S)})()},[n]);const v=b=>c(b),E=()=>c(null),P=()=>f(!0),j=()=>f(!1),M=b=>b&&b.toDate?N4(b.toDate(),t):t("forum.post.dateUnavailable");return i?d.jsx(vd,{children:t("common.loading")}):o?d.jsx(vd,{children:o}):l?d.jsx(P7,{post:l,onBack:E,t,ads:x}):d.jsxs(d.Fragment,{children:[d.jsx(i7,{}),d.jsxs(s7,{children:[d.jsx(O7,{image:C}),d.jsx(D7,{children:d.jsxs(vd,{style:{paddingTop:0},children:[d.jsx("h1",{children:t("news.title")}),k===1029917&&d.jsx("button",{onClick:P,children:t("news.createPostButton")}),k===1029917&&h&&d.jsx(Xy,{onClose:j}),n.map(b=>d.jsxs(o7,{onClick:()=>v(b),children:[d.jsx(a7,{children:b.imageUrl?d.jsx(X2,{src:b.imageUrl,alt:b.title||"Imagen del post"}):d.jsx(X2,{src:"/images/placeholder.jpg",alt:"placeholder"})}),d.jsxs(l7,{children:[d.jsx(u7,{children:b.title}),d.jsx(c7,{children:(b.tags&&b.tags.length>0?b.tags:["General"]).map((S,A)=>d.jsx(d7,{children:S},A))}),d.jsxs(h7,{children:[d.jsx(f7,{children:b.author?b.author.charAt(0).toUpperCase():"U"}),d.jsxs(p7,{children:[d.jsx(m7,{children:b.author||t("forum.post.anonymous")}),d.jsx(g7,{children:b.createdAt?M(b.createdAt):""})]})]})]}),d.jsx(y7,{children:d.jsxs(v7,{children:[d.jsx(Bh,{style:{fontSize:"1.3em"}}),p[b.id]!==void 0?`${p[b.id]} comentario${p[b.id]===1?"":"s"}`:"-"]})})]},b.id))]})})]})]})};function L7({scannerType:t="gold"}){const e=D.useRef(),n=()=>{switch(t){case"gold":return"OANDA:XAUUSD";case"abi":return"CMCMARKETS:EURUSD";case"pops":return"FXCM:EURUSD";default:return"OANDA:XAUUSD"}},r=()=>{switch(t){case"gold":return"5";case"abi":return"5";case"pops":return"5";default:return"5"}},i=()=>{switch(t){case"gold":return[{id:"siK56X3D@tv-scripting-101",options:{}}];case"abi":return[];case"pops":return[{id:"pn1VHTbz",options:{}}];default:return[]}};return D.useEffect(()=>{if(e.current){e.current.innerHTML="";const s=document.createElement("script");s.src="https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js",s.type="text/javascript",s.async=!0;const o={autosize:!0,symbol:n(),interval:r(),timezone:"Etc/UTC",theme:"dark",style:"1",locale:"es",enable_publishing:!1,allow_symbol_change:!0,studies:i(),support_host:"https://www.tradingview.com",width:"100%",height:"100%",save_image:!0,hideideas:!1,show_popup_button:!0,popup_width:"1000",popup_height:"650"};s.innerHTML=JSON.stringify(o),e.current.appendChild(s)}},[t]),d.jsx("div",{className:"tradingview-widget-container",ref:e,style:{height:"100%",width:"100%",position:"relative"}})}const M7=D.memo(L7),V7=_.div`
  padding: 24px;
  min-height: calc(100vh - 64px);
  background: linear-gradient(135deg, #0f2027 0%, #2c5364 100%);
  position: relative;
  overflow: hidden;
`,F7=_.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background: radial-gradient(ellipse at 20% 30%, rgba(0,188,212,0.12) 0%, transparent 70%),
              radial-gradient(ellipse at 80% 70%, rgba(0,255,247,0.10) 0%, transparent 70%),
              linear-gradient(120deg, rgba(0,150,136,0.08) 0%, transparent 100%);
  animation: bgMove 12s linear infinite alternate;
  @keyframes bgMove {
    0% { background-position: 0% 0%, 100% 100%, 0% 100%; }
    100% { background-position: 100% 100%, 0% 0%, 100% 0%; }
  }
`,$7=_.h1`
  font-size: 2rem;
  font-weight: 700;
  color: rgb(255,255,255);
  margin-bottom: 10px;
`,z7=_.div`
  display: flex;
  gap: 20px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,U7=_.div`
  background-color: rgb(24,24,24);
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 0;
  width: 160px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: row;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 16px;
    min-height: 160px;
  }
`,B7=_.div`
  background-color: rgb(24,24,24);
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  flex-grow: 1;
  height: calc(100vh - 150px);
  overflow: hidden;
`,H7=_.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  margin-top: 24px;
  @media (max-width: 768px) {
    flex-direction: row;
    gap: 32px;
    margin-top: 0;
  }
`,W7=_.img`
  width: 120px;
  height: 120px;
  object-fit: contain;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  background: #181818;
  cursor: pointer;
  border: 2px solid transparent;
  transition: border-color 0.2s, transform 0.2s, opacity 0.2s;
  outline: none;
  opacity: 0.6;
  &:hover, &:focus {
    border-color: #00bcd4;
    transform: scale(1.07);
    opacity: 1;
  }
  &.active {
    border-color: #00bcd4;
    box-shadow: 0 4px 16px rgba(0,188,212,0.15);
    opacity: 1;
  }
  @media (max-width: 768px) {
    width: 90px;
    height: 90px;
  }
`;_.h3`
  font-size: 16px;
  font-weight: 600;
  color: rgb(255,255,255);
  margin-bottom: 15px;
`;_.div`
  padding: 0 24px;
  margin-bottom: 24px;
`;const q7=_.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(8px) brightness(0.7);
  background: rgba(0,0,0,0.35);
  pointer-events: none;
`,G7=_.h2`
  color: #fff;
  font-size: 2.5rem;
  font-weight: 800;
  letter-spacing: 2px;
  text-shadow: 0 4px 24px #00fff7, 0 1px 8px #000;
  margin-bottom: 12px;
  background: linear-gradient(90deg, #00fff7 0%, #a259ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,K7=[{key:"gold",src:"/images/scanner/Helios.png",alt:"Helios Scanner",label:"Helios"},{key:"abi",src:"/images/scanner/Cronos.png",alt:"Cronos Scanner",label:"Cronos"},{key:"pops",src:"/images/scanner/olympus.png",alt:"Olympus Scanner",label:"Olympus"}],Q7=()=>{const{t}=ft(),[e,n]=D.useState("gold"),r=i=>{n(i)};return d.jsxs(V7,{children:[d.jsx(F7,{}),d.jsx($7,{children:t("sidebar.scanner")}),d.jsxs(z7,{children:[d.jsx(U7,{children:d.jsx(H7,{children:K7.map(i=>d.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[d.jsx(W7,{src:i.src,alt:i.alt,className:e===i.key?"active":"",tabIndex:0,onClick:()=>r(i.key),onKeyPress:s=>{s.key==="Enter"&&r(i.key)}}),d.jsx("span",{style:{color:"#fff",marginTop:8,fontSize:15,fontWeight:500},children:i.label})]},i.key))})}),d.jsxs(B7,{style:{position:"relative"},children:[d.jsx(q7,{children:d.jsx(G7,{children:"Coming Soon"})}),d.jsx(M7,{scannerType:e})]})]})]})},Y7=_.div`
  padding: 24px;
`,J7=_.h1`
  font-size: 28px;
  margin-bottom: 20px;
  color: #333;
`,Z7=_.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 24px;
`,X7=_.div`
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  transition: transform 0.2s;
  
  &:hover {
    transform: translateY(-5px);
  }
`,ez=_.div`
  background-color: ${t=>t.color||"#0088cc"};
  color: white;
  width: 48px;
  height: 48px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  
  svg {
    font-size: 24px;
  }
`,tz=_.div`
  flex: 1;
`,nz=_.div`
  font-size: 24px;
  font-weight: 600;
  color: #333;
  margin-bottom: 4px;
`,rz=_.div`
  font-size: 14px;
  color: #666;
`,iz=_.h2`
  font-size: 20px;
  margin: 24px 0 16px;
  color: #333;
`,sz=_.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 24px;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`,t_=_.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  overflow: hidden;
`,n_=_.div`
  padding: 16px;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,r_=_.h3`
  font-size: 18px;
  color: #333;
  margin: 0;
`,i_=_.a`
  font-size: 14px;
  color: #0088cc;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`,oz=_.div`
  display: flex;
  padding: 12px 16px;
  border-bottom: 1px solid #f0f0f0;
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background-color: #f9f9f9;
  }
`,az=_.div`
  width: 32px;
  height: 32px;
  background-color: ${t=>t.color||"#e6f7ff"};
  color: ${t=>t.iconColor||"#0088cc"};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  
  svg {
    font-size: 16px;
  }
`,lz=_.div`
  flex: 1;
`,uz=_.div`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 4px;
`,cz=_.div`
  font-size: 12px;
  color: #666;
`,dz=_.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  border-bottom: 1px solid #f0f0f0;
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background-color: #f9f9f9;
  }
`,hz=_.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f0f0f0;
  margin-right: 12px;
  
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`,fz=_.div`
  flex: 1;
`,pz=_.div`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 2px;
`,mz=_.div`
  font-size: 12px;
  color: #666;
`,gz=_.div`
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 12px;
  background-color: ${t=>t.isActive?"#e6ffec":"#fff0f0"};
  color: ${t=>t.isActive?"#1d9a48":"#e53935"};
  margin-left: 8px;
`,yz=_.div`
  padding: 16px;
`,vz=_.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 16px;
`,xz=_.div`
  background-color: white;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: #0088cc;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  }
`,wz=_.div`
  width: 48px;
  height: 48px;
  background-color: #f5f5f5;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
  color: #0088cc;
  
  svg {
    font-size: 24px;
  }
`,_z=_.div`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 4px;
`,bz=_.div`
  font-size: 12px;
  color: #666;
`,Ez=()=>{const[t,e]=D.useState("dashboard"),n=[{id:1,value:"245",label:"Usuarios activos",icon:d.jsx(bx,{}),color:"#0088cc"},{id:2,value:"12",label:"Cursos publicados",icon:d.jsx(hp,{}),color:"#4caf50"},{id:3,value:"8",label:"Eventos próximos",icon:d.jsx(wx,{}),color:"#ff9800"},{id:4,value:"156",label:"Temas en el foro",icon:d.jsx(dp,{}),color:"#9c27b0"}],r=[{id:1,title:"Nuevo usuario registrado",time:"Hace 10 minutos",icon:d.jsx(b3,{}),color:"#e3f2fd",iconColor:"#2196f3"},{id:2,title:"Nuevo comentario en el foro",time:"Hace 25 minutos",icon:d.jsx(dp,{}),color:"#e8f5e9",iconColor:"#4caf50"},{id:3,title:"Actualización del sistema completada",time:"Hace 1 hora",icon:d.jsx(_x,{}),color:"#fff8e1",iconColor:"#ffc107"},{id:4,title:"Nuevo curso disponible",time:"Hace 3 horas",icon:d.jsx(hp,{}),color:"#f3e5f5",iconColor:"#9c27b0"}],i=[{id:1,name:"María García",role:"Administrador",isActive:!0},{id:2,name:"Carlos Rodríguez",role:"Educador",isActive:!0},{id:3,name:"Laura Martínez",role:"Educador",isActive:!1},{id:4,name:"Javier López",role:"Moderador",isActive:!0},{id:5,name:"Ana Fernández",role:"Usuario",isActive:!1}],s=[{id:"dashboard",name:"Dashboard",icon:d.jsx(g3,{}),description:"Resumen general"},{id:"users",name:"Usuarios",icon:d.jsx(bx,{}),description:"Gestión de usuarios"},{id:"courses",name:"Cursos",icon:d.jsx(hp,{}),description:"Administrar cursos"},{id:"events",name:"Eventos",icon:d.jsx(wx,{}),description:"Programar eventos"},{id:"forum",name:"Foro",icon:d.jsx(dp,{}),description:"Moderar foro"},{id:"settings",name:"Ajustes",icon:d.jsx(_x,{}),description:"Configuración"}];return d.jsxs(Y7,{children:[d.jsx(J7,{children:"Back Office"}),d.jsx(Z7,{children:n.map(o=>d.jsxs(X7,{children:[d.jsx(ez,{color:o.color,children:o.icon}),d.jsxs(tz,{children:[d.jsx(nz,{children:o.value}),d.jsx(rz,{children:o.label})]})]},o.id))}),d.jsx(iz,{children:"Módulos"}),d.jsx(yz,{children:d.jsx(vz,{children:s.map(o=>d.jsxs(xz,{onClick:()=>e(o.id),children:[d.jsx(wz,{children:o.icon}),d.jsx(_z,{children:o.name}),d.jsx(bz,{children:o.description})]},o.id))})}),d.jsxs(sz,{children:[d.jsxs(t_,{children:[d.jsxs(n_,{children:[d.jsx(r_,{children:"Notificaciones recientes"}),d.jsx(i_,{href:"#/back-office/notifications",children:"Ver todas"})]}),r.map(o=>d.jsxs(oz,{children:[d.jsx(az,{color:o.color,iconColor:o.iconColor,children:o.icon}),d.jsxs(lz,{children:[d.jsx(uz,{children:o.title}),d.jsx(cz,{children:o.time})]})]},o.id))]}),d.jsxs(t_,{children:[d.jsxs(n_,{children:[d.jsx(r_,{children:"Usuarios activos"}),d.jsx(i_,{href:"#/back-office/users",children:"Ver todos"})]}),i.map(o=>d.jsxs(dz,{children:[d.jsx(hz,{children:d.jsx("img",{src:"/api/placeholder/40/40",alt:o.name})}),d.jsxs(fz,{children:[d.jsx(pz,{children:o.name}),d.jsx(mz,{children:o.role})]}),d.jsx(gz,{isActive:o.isActive,children:o.isActive?"Activo":"Inactivo"})]},o.id))]})]})]})},{slice:Sz,forEach:Tz}=[];function Iz(t){return Tz.call(Sz.call(arguments,1),e=>{if(e)for(const n in e)t[n]===void 0&&(t[n]=e[n])}),t}function kz(t){return typeof t!="string"?!1:[/<\s*script.*?>/i,/<\s*\/\s*script\s*>/i,/<\s*img.*?on\w+\s*=/i,/<\s*\w+\s*on\w+\s*=.*?>/i,/javascript\s*:/i,/vbscript\s*:/i,/expression\s*\(/i,/eval\s*\(/i,/alert\s*\(/i,/document\.cookie/i,/document\.write\s*\(/i,/window\.location/i,/innerHTML/i].some(n=>n.test(t))}const s_=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,Cz=function(t,e){const r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{path:"/"},i=encodeURIComponent(e);let s=`${t}=${i}`;if(r.maxAge>0){const o=r.maxAge-0;if(Number.isNaN(o))throw new Error("maxAge should be a Number");s+=`; Max-Age=${Math.floor(o)}`}if(r.domain){if(!s_.test(r.domain))throw new TypeError("option domain is invalid");s+=`; Domain=${r.domain}`}if(r.path){if(!s_.test(r.path))throw new TypeError("option path is invalid");s+=`; Path=${r.path}`}if(r.expires){if(typeof r.expires.toUTCString!="function")throw new TypeError("option expires is invalid");s+=`; Expires=${r.expires.toUTCString()}`}if(r.httpOnly&&(s+="; HttpOnly"),r.secure&&(s+="; Secure"),r.sameSite)switch(typeof r.sameSite=="string"?r.sameSite.toLowerCase():r.sameSite){case!0:s+="; SameSite=Strict";break;case"lax":s+="; SameSite=Lax";break;case"strict":s+="; SameSite=Strict";break;case"none":s+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return s},o_={create(t,e,n,r){let i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{path:"/",sameSite:"strict"};n&&(i.expires=new Date,i.expires.setTime(i.expires.getTime()+n*60*1e3)),r&&(i.domain=r),document.cookie=Cz(t,encodeURIComponent(e),i)},read(t){const e=`${t}=`,n=document.cookie.split(";");for(let r=0;r<n.length;r++){let i=n[r];for(;i.charAt(0)===" ";)i=i.substring(1,i.length);if(i.indexOf(e)===0)return i.substring(e.length,i.length)}return null},remove(t){this.create(t,"",-1)}};var Az={name:"cookie",lookup(t){let{lookupCookie:e}=t;if(e&&typeof document<"u")return o_.read(e)||void 0},cacheUserLanguage(t,e){let{lookupCookie:n,cookieMinutes:r,cookieDomain:i,cookieOptions:s}=e;n&&typeof document<"u"&&o_.create(n,t,r,i,s)}},Rz={name:"querystring",lookup(t){var r;let{lookupQuerystring:e}=t,n;if(typeof window<"u"){let{search:i}=window.location;!window.location.search&&((r=window.location.hash)==null?void 0:r.indexOf("?"))>-1&&(i=window.location.hash.substring(window.location.hash.indexOf("?")));const o=i.substring(1).split("&");for(let a=0;a<o.length;a++){const l=o[a].indexOf("=");l>0&&o[a].substring(0,l)===e&&(n=o[a].substring(l+1))}}return n}};let Do=null;const a_=()=>{if(Do!==null)return Do;try{if(Do=typeof window<"u"&&window.localStorage!==null,!Do)return!1;const t="i18next.translate.boo";window.localStorage.setItem(t,"foo"),window.localStorage.removeItem(t)}catch{Do=!1}return Do};var Pz={name:"localStorage",lookup(t){let{lookupLocalStorage:e}=t;if(e&&a_())return window.localStorage.getItem(e)||void 0},cacheUserLanguage(t,e){let{lookupLocalStorage:n}=e;n&&a_()&&window.localStorage.setItem(n,t)}};let Oo=null;const l_=()=>{if(Oo!==null)return Oo;try{if(Oo=typeof window<"u"&&window.sessionStorage!==null,!Oo)return!1;const t="i18next.translate.boo";window.sessionStorage.setItem(t,"foo"),window.sessionStorage.removeItem(t)}catch{Oo=!1}return Oo};var Nz={name:"sessionStorage",lookup(t){let{lookupSessionStorage:e}=t;if(e&&l_())return window.sessionStorage.getItem(e)||void 0},cacheUserLanguage(t,e){let{lookupSessionStorage:n}=e;n&&l_()&&window.sessionStorage.setItem(n,t)}},Dz={name:"navigator",lookup(t){const e=[];if(typeof navigator<"u"){const{languages:n,userLanguage:r,language:i}=navigator;if(n)for(let s=0;s<n.length;s++)e.push(n[s]);r&&e.push(r),i&&e.push(i)}return e.length>0?e:void 0}},Oz={name:"htmlTag",lookup(t){let{htmlTag:e}=t,n;const r=e||(typeof document<"u"?document.documentElement:null);return r&&typeof r.getAttribute=="function"&&(n=r.getAttribute("lang")),n}},jz={name:"path",lookup(t){var i;let{lookupFromPathIndex:e}=t;if(typeof window>"u")return;const n=window.location.pathname.match(/\/([a-zA-Z-]*)/g);return Array.isArray(n)?(i=n[typeof e=="number"?e:0])==null?void 0:i.replace("/",""):void 0}},Lz={name:"subdomain",lookup(t){var i,s;let{lookupFromSubdomainIndex:e}=t;const n=typeof e=="number"?e+1:1,r=typeof window<"u"&&((s=(i=window.location)==null?void 0:i.hostname)==null?void 0:s.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i));if(r)return r[n]}};let D4=!1;try{document.cookie,D4=!0}catch{}const O4=["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"];D4||O4.splice(1,1);const Mz=()=>({order:O4,lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"],convertDetectedLanguage:t=>t});class j4{constructor(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.type="languageDetector",this.detectors={},this.init(e,n)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{languageUtils:{}},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.services=e,this.options=Iz(n,this.options||{},Mz()),typeof this.options.convertDetectedLanguage=="string"&&this.options.convertDetectedLanguage.indexOf("15897")>-1&&(this.options.convertDetectedLanguage=i=>i.replace("-","_")),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=r,this.addDetector(Az),this.addDetector(Rz),this.addDetector(Pz),this.addDetector(Nz),this.addDetector(Dz),this.addDetector(Oz),this.addDetector(jz),this.addDetector(Lz)}addDetector(e){return this.detectors[e.name]=e,this}detect(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.options.order,n=[];return e.forEach(r=>{if(this.detectors[r]){let i=this.detectors[r].lookup(this.options);i&&typeof i=="string"&&(i=[i]),i&&(n=n.concat(i))}}),n=n.filter(r=>r!=null&&!kz(r)).map(r=>this.options.convertDetectedLanguage(r)),this.services&&this.services.languageUtils&&this.services.languageUtils.getBestMatchFromCodes?n:n.length>0?n[0]:null}cacheUserLanguage(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.options.caches;n&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(e)>-1||n.forEach(r=>{this.detectors[r]&&this.detectors[r].cacheUserLanguage(e,this.options)}))}}j4.type="languageDetector";const Vz={home:"Home",calendar:"Calendar",educators:"Educators",academy:"Academy",forum:"Forum",backoffice:"Back Office",scanner:"Scanner",menu:"Menu",liveMarkups:"Live Markups",beyondCharts:"Beyond the Charts",news:"News",markups:"Markups",tradingJournal:"Trading Journal",social:{instagram:"Instagram",telegram:"Telegram"}},Fz={title:"Scanners",gold:"GOLD SCANNER",abi:"ABI SCANNER",pops:"POPS SCANNER"},$z={welcome:"Welcome",topEducators:"Featured Educators",viewAll:"View All",educationDay:"NVU EDUCATION DAY",categories:"Categories",joinTelegram:"Join Our Telegram",ourEducators:"Our Educators",noTopEducators:"No featured educators available at the moment.",noEducatorsPreview:"No educators to display at this time."},zz={viewMore:"View More",nameNotAvailable:"Name not available",specialist:"Specialist",bioNotAvailable:"Biography not available",loading:"Loading...",timeAgo:"{{time}} ago"},Uz={back:"Back to Educators",notFound:"Educator not found",liveStreamTitle:"Live Stream by",streamNotAvailable:"Live stream is currently unavailable",favoriteSessions:"Featured Sessions"},Bz={"seb-garcia":"I am an educator with over 10 years of trading experience, having guided more than 1,000 students to transform their results on the charts and in their lives. My approach combines effective Smart Money strategies with advanced NLP (Neuro-Linguistic Programming) tools, allowing my students to double their results in 90 days.","abi-belity":`Abi Belilty is a professional trader with over 7 years of experience in the financial markets. With an innate passion for trading, Abi has dedicated years of his life to perfecting his skills and knowledge in the world of investments.

With a unique and insightful vision, Abi invites people from all over the world to connect to his sessions, where he shares his favorite strategies and key tips to take trading to the next level. His practical approach and ability to simplify complex concepts make his sessions accessible and valuable for traders of all levels.`,"frank-araujo":"Trader with over 5 years of experience in financial markets, specializing in the EUR/USD pair. As a swing trader, I will provide you with the right tools to learn trading from the basics to the advanced, with a clear focus on mastering the charts and understanding market behavior professionally.","maur-gaytan":"Engineer by profession, Certified Leadership Coach, 4 years as a Trader, specializing in trading XAU and JPY pairs with his own strategy, married with two daughters.","aring-long-fx":"Arin Long has a true passion for education and a strong foundation in problem-solving and process optimization, which she developed during her career as a mechanical engineer. With a natural affinity for technical analysis, she transitioned into trading five years ago and quickly developed a deep passion for the markets. Arin's trading approach is grounded in her technical mindset and meticulous attention to detail, skills she further refined through mentorship with Richard Hall (aka Market Bully). By mastering simple yet powerful strategies, Arin remains committed to continuous learning, constantly refining her techniques and expanding her market knowledge.","marcelo-t-fx":"I am Marcelo Trullen, an expert in E-commerce and Digital Marketing. My passion for digital growth and continuous search for effective solutions has allowed me to help teams take their businesses to the next level. I am committed to continuous learning and implementing cutting-edge solutions in the world of e-commerce.","richard-p-fx":"Expert educator in their field, committed to student success.","about-nikki-fx":"Expert educator in their field, committed to student success.","jorge-damelines":"Expert in human development and evolution, guide of transformative experiences, accompanying processes of self-knowledge, inner power and conscious action.",paulina:"Expert educator in their field, committed to student success.","henry-tyson":"I am a strong and passionate person about what I do. As long as I put my mind to it, I can achieve it. I put God first in everything I do.","corey-williams":"Expert educator in their field, committed to student success.","dani-curtis":"Raquel Curtis, MBA, is a financial educator, entrepreneur, and international best-selling author dedicated to helping women take control of their finances and build wealth. A Georgia native and mother of three, Raquel turned personal setbacks into success through budgeting and investing, inspiring the creation of The Boujee Banker brand. She teaches women how to budget, save, invest, and grow online businesses. Raquel is the author of Mastering Your Money Mindset and co-author of the Amazon best-seller MoneyTalk$, featuring a foreword by Les Brown. A dynamic speaker and doctoral candidate, she has impacted thousands globally, guiding individuals toward lasting financial empowerment.","annie-toney":"Expert educator in their field, committed to student success.","al-blue":"Dr. A.L.Blue, Sr. is a bestselling Author, Wealth Evangelist & Private Equity Investor serving as Senior Partner & Managing Director of Blue Wealth Solutions Consolidated LLC, a better life financial empowerment, Wealth Building, & Educational Company focused on true wealth creation and asset accumulation in Precious Metals as well as generational wealth and trust fund creation solutions. He also serves as a Wealth Evangelist teaching biblical principles on wealth creation and better living from a spiritual perspective as a Kingdom Financier.","steph-royal":`Stephon Royal is a passionate and dynamic social media educator dedicated to empowering individuals and businesses to master the art of digital storytelling and online influence. With years of experience in creating viral-worthy content and building impactful online brands, Stephon combines creativity with strategy to help students unlock the full potential of social media platforms.

Specializing in content creation, audience engagement, and monetization strategies, Stephon has developed a reputation for delivering practical insights, innovative techniques, and actionable solutions. Whether you're a beginner influencer, a small business owner, or a seasoned marketer, Stephon's approachable teaching style ensures every student walks away with the skills and confidence to thrive in the ever-evolving world of social media.

Known for his energetic workshops and personalized coaching, Stephon's mission is simple: to help you build a brand that not only stands out but also connects, converts, and creates lasting impact.`},Hz={title:"Login",emailPlaceholder:"Email",passwordPlaceholder:"Password",loadingButton:"Logging in...",loginButton:"Login",resetPasswordPrompt:"Having trouble logging in?",resetPasswordLink:"Reset your password",error:{generic:"Login failed. Please try again.",expired:"Your membership has expired.",invalidCredentials:"Invalid credentials.",connection:"Connection error. Please try again."}},Wz={pageTitle:"Educators",noEducatorsInCategory:"No educators available in this category."},qz={forex:"Forex",crypto:"Crypto",financial_literacy:"Financial Literacy",marketing_digital:"Digital Marketing"},Gz={pageTitle:"Calendar",timeHeader:"Time",educatorHeader:"Educator",noEvents:"No events scheduled for this day.",month:"Month",week:"Week",day:"Day",today:"Today",previous:"Previous",next:"Next",sunday:"Sunday",monday:"Monday",tuesday:"Tuesday",wednesday:"Wednesday",thursday:"Thursday",friday:"Friday",saturday:"Saturday",filterAll:"All",filterSpanish:"Spanish",filterEnglish:"English",filterFrench:"French"},Kz={editButton:"Edit Profile",saveButton:"Save Changes",cancelButton:"Cancel",logoutButton:"Logout",journalTitle:"My Trading Journal",journalDescription:"Access your trading journal to record and analyze your trades.",journalButton:"Go to Journal"},Qz={title:"Market News",trendsTitle:"Market Trends",adsTitle:"Featured Ads",backButton:"Back",createPostButton:"Create Post",trends:{fundamental:"Fundamental Analysis",economic:"Economic News",technical:"Technical Indicators",events:"Market Events",perspectives:"Global Perspectives"},ads:{news:"Stay up to date with the latest market news",analysis:"Technical and fundamental analysis in real time",strategies:"Trading strategies based on news"}},Yz={pageTitle:"Academy",tabbar:{es:"Spanish",en:"English",fr:"French"},loading:"Loading sessions...",error:"Could not load sessions.",noSessions:"No sessions available for this language.",selectedClass:"Selected Class",noTitle:"Untitled Video"},Jz="All languages",Zz={sidebar:Vz,scanner:Fz,home:$z,common:zz,educatorDetail:Uz,educatorsBio:Bz,login:Hz,educators:Wz,categories:qz,calendar:Gz,profile:Kz,news:Qz,academy:Yz,filterAllLanguages:Jz},Xz={home:"Accueil",calendar:"Calendrier",educators:"Éducateurs",academy:"Académie",forum:"Forum",backoffice:"Back Office",scanner:"Scanner",menu:"Menu",liveMarkups:"Live Markups",beyondCharts:"Beyond the Charts",news:"Actualités",markups:"Markups",tradingJournal:"Journal de Trading"},eU={title:"Scanners",gold:"GOLD SCANNER",abi:"ABI SCANNER",pops:"POPS SCANNER"},tU={welcome:"Bienvenue",topEducators:"Éducateurs en Vedette",viewAll:"Voir Tout",educationDay:"NVU EDUCATION DAY",categories:"Catégories",joinTelegram:"Rejoindre Notre Telegram",ourEducators:"Nos Éducateurs",noTopEducators:"Aucun éducateur en vedette disponible pour le moment.",noEducatorsPreview:"Aucun éducateur à afficher pour le moment."},nU={viewMore:"Voir Plus",nameNotAvailable:"Nom non disponible",specialist:"Spécialiste",bioNotAvailable:"Biographie non disponible"},rU={instagram:"Instagram",telegram:"Telegram"},iU={back:"Retour aux Éducateurs",notFound:"Éducateur non trouvé",liveStreamTitle:"Stream en Direct par",streamNotAvailable:"Le stream en direct est actuellement indisponible",favoriteSessions:"Sessions en Vedette"},sU={"seb-garcia":"Je suis un éducateur avec plus de 10 ans d'expérience en trading, ayant guidé plus de 1 000 étudiants à transformer leurs résultats sur les graphiques et dans leur vie. Mon approche combine des stratégies efficaces de Smart Money avec des outils avancés de PNL (Programmation Neuro-Linguistique), permettant à mes étudiants de doubler leurs résultats en 90 jours.","abi-belity":`Abi Belilty est un trader professionnel avec plus de 7 ans d'expérience sur les marchés financiers. Avec une passion innée pour le trading, Abi a consacré des années de sa vie à perfectionner ses compétences et ses connaissances dans le monde des investissements.

Avec une vision unique et perspicace, Abi invite les personnes du monde entier à se connecter à ses sessions, où il partage ses stratégies préférées et des conseils clés pour amener le trading à un niveau supérieur. Son approche pratique et sa capacité à simplifier des concepts complexes rendent ses sessions accessibles et précieuses pour les traders de tous niveaux.`,"frank-araujo":"Trader avec plus de 5 ans d'expérience sur les marchés financiers, spécialisé sur la paire EUR/USD. En tant que swing trader, je vous fournirai les bons outils pour apprendre le trading des bases à l'avancé, avec un accent clair sur la maîtrise des graphiques et la compréhension professionnelle du comportement du marché.","maur-gaytan":"Ingénieur de profession, Coach en Leadership Certifié, 4 ans en tant que Trader, spécialisé dans le trading du XAU et des paires JPY avec sa propre stratégie, marié et père de deux filles.","aring-long-fx":"Arin Long a une véritable passion pour l'éducation et une solide base en résolution de problèmes et optimisation des processus, qu'elle a développée pendant sa carrière d'ingénieure mécanique. Avec une affinité naturelle pour l'analyse technique, elle s'est tournée vers le trading il y a cinq ans et a rapidement développé une passion profonde pour les marchés. L'approche de trading d'Arin est ancrée dans sa mentalité technique et son attention méticuleuse aux détails, des compétences qu'elle a encore affinées grâce au mentorat de Richard Hall (alias Market Bully). En maîtrisant des stratégies simples mais puissantes, Arin reste engagée dans l'apprentissage continu, affinant constamment ses techniques et élargissant ses connaissances du marché.","marcelo-t-fx":"Je suis Marcelo Trullen, expert en E-commerce et Marketing Digital. Ma passion pour la croissance numérique et la recherche continue de solutions efficaces m'a permis d'aider les équipes à faire passer leurs entreprises au niveau supérieur. Je m'engage dans l'apprentissage continu et la mise en œuvre de solutions de pointe dans le monde du commerce électronique.","richard-p-fx":"Éducateur expert dans son domaine, engagé dans la réussite des étudiants.","about-nikki-fx":"Éducatrice experte dans son domaine, engagée dans la réussite des étudiants.","jorge-damelines":"Expert en développement et évolution humaine, guide d'expériences transformatrices, accompagnant des processus de connaissance de soi, de pouvoir intérieur et d'action consciente.",paulina:"Éducatrice experte dans son domaine, engagée dans la réussite des étudiants.","henry-tyson":"Je suis une personne forte et passionnée par ce que je fais. Tant que je m'y applique, je peux y arriver. Je mets Dieu en premier dans tout ce que je fais.","corey-williams":"Éducateur expert dans son domaine, engagé dans la réussite des étudiants.","dani-curtis":"Raquel Curtis, MBA, est une éducatrice financière, entrepreneure et auteure de best-sellers internationaux dédiée à aider les femmes à prendre le contrôle de leurs finances et à bâtir leur richesse. Originaire de Géorgie et mère de trois enfants, Raquel a transformé les revers personnels en succès grâce à la budgétisation et à l'investissement, inspirant la création de la marque The Boujee Banker. Elle enseigne aux femmes comment budgétiser, épargner, investir et développer des entreprises en ligne. Raquel est l'auteure de Mastering Your Money Mindset et co-auteure du best-seller Amazon MoneyTalk$, avec une préface de Les Brown. Conférencière dynamique et doctorante, elle a eu un impact sur des milliers de personnes dans le monde, guidant les individus vers une autonomisation financière durable.","annie-toney":"Éducatrice experte dans son domaine, engagée dans la réussite des étudiants.","al-blue":"Dr. A.L.Blue, Sr. est un auteur de best-sellers, Évangéliste de la Richesse et Investisseur en Capital Privé, agissant en tant que Partenaire Senior et Directeur Général de Blue Wealth Solutions Consolidated LLC, une société d'autonomisation financière, de création de richesse et d'éducation pour une vie meilleure, axée sur la véritable création de richesse et l'accumulation d'actifs en métaux précieux, ainsi que sur les solutions de création de richesse générationnelle et de fonds fiduciaires. Il agit également en tant qu'Évangéliste de la Richesse enseignant les principes bibliques sur la création de richesse et une vie meilleure d'un point de vue spirituel en tant que Financier du Royaume.","steph-royal":`Stephon Royal est un éducateur de médias sociaux passionné et dynamique dédié à autonomiser les individus et les entreprises à maîtriser l'art du storytelling numérique et de l'influence en ligne. Avec des années d'expérience dans la création de contenu viral et la construction de marques en ligne percutantes, Stephon combine créativité et stratégie pour aider les étudiants à libérer tout le potentiel des plateformes de médias sociaux.

Spécialisé dans la création de contenu, l'engagement du public et les stratégies de monétisation, Stephon s'est forgé une réputation pour fournir des informations pratiques, des techniques innovantes et des solutions concrètes. Que vous soyez un influenceur débutant, un propriétaire de petite entreprise ou un marketeur expérimenté, le style d'enseignement accessible de Stephon garantit que chaque étudiant repart avec les compétences et la confiance nécessaires pour prospérer dans le monde en constante évolution des médias sociaux.

Connu pour ses ateliers énergiques et son coaching personnalisé, la mission de Stephon est simple : vous aider à construire une marque qui non seulement se démarque, mais qui connecte, convertit et crée un impact durable.`},oU={title:"Connexion",emailPlaceholder:"E-mail",passwordPlaceholder:"Mot de passe",loadingButton:"Connexion en cours...",loginButton:"Se connecter",resetPasswordPrompt:"Problèmes de connexion ?",resetPasswordLink:"Réinitialiser votre mot de passe",error:{generic:"Échec de la connexion. Veuillez réessayer.",expired:"Votre adhésion a expiré.",invalidCredentials:"Identifiants invalides.",connection:"Erreur de connexion. Veuillez réessayer."}},aU={pageTitle:"Éducateurs",noEducatorsInCategory:"Aucun éducateur disponible dans cette catégorie."},lU={forex:"Forex",crypto:"Crypto",financial_literacy:"Littératie Financière",marketing_digital:"Marketing Numérique"},uU={pageTitle:"Calendrier",timeHeader:"Heure",educatorHeader:"Éducateur",noEvents:"Aucun événement prévu pour ce jour.",month:"Mois",week:"Semaine",day:"Jour",today:"Aujourd'hui",previous:"Précédent",next:"Suivant",sunday:"Dimanche",monday:"Lundi",tuesday:"Mardi",wednesday:"Mercredi",thursday:"Jeudi",friday:"Vendredi",saturday:"Samedi",filterAll:"Tous",filterSpanish:"Espagnol",filterEnglish:"Anglais",filterFrench:"Français"},cU={editButton:"Modifier le Profil",saveButton:"Enregistrer les Modifications",cancelButton:"Annuler",logoutButton:"Déconnexion",journalTitle:"Mon Journal de Trading",journalDescription:"Accédez à votre journal de trading pour enregistrer et analyser vos trades.",journalButton:"Aller au Journal"},dU={title:"Actualités du Marché",trendsTitle:"Tendances du Marché",adsTitle:"Annonces en Vedette",backButton:"Retour",createPostButton:"Créer un Post",trends:{fundamental:"Analyse Fondamentale",economic:"Actualités Économiques",technical:"Indicateurs Techniques",events:"Événements du Marché",perspectives:"Perspectives Mondiales"},ads:{news:"Restez à jour avec les dernières actualités du marché",analysis:"Analyse technique et fondamentale en temps réel",strategies:"Stratégies de trading basées sur l'actualité"}},hU={pageTitle:"Académie",tabbar:{es:"Espagnol",en:"Anglais",fr:"Français"},loading:"Chargement des sessions...",error:"Impossible de charger les sessions.",noSessions:"Aucune session disponible pour cette langue.",selectedClass:"Cours sélectionné",noTitle:"Vidéo sans titre"},fU={title:"Mon Journal de Trading",loginRequired:"Veuillez vous connecter pour utiliser votre journal de trading.",folders:"Dossiers",newFolder:"Nom du nouveau dossier",createFolder:"Créer un Dossier",newTrade:"Nouvelle Opération",createTrade:"Enregistrer l'Opération",trades:"Opérations",totalTrades:"Opérations Totales",winRate:"Taux de Réussite",totalProfitLoss:"Gain/Perte Total(e)"},pU="Toutes les langues",mU={sidebar:Xz,scanner:eU,home:tU,common:nU,social:rU,educatorDetail:iU,educatorsBio:sU,login:oU,educators:aU,categories:lU,calendar:uU,profile:cU,news:dU,academy:hU,journal:fU,filterAllLanguages:pU},gU={home:"Inicio",calendar:"Calendario",educators:"Educadores",academy:"Academia",forum:"Foro",backoffice:"Back Office",scanner:"Scanner",menu:"Menú",liveMarkups:"Live Markups",beyondCharts:"Beyond the Charts",news:"Noticias",markups:"Markups",tradingJournal:"Diario de Trading",social:{instagram:"Instagram",telegram:"Telegram"}},yU={title:"Scanners",gold:"GOLD SCANNER",abi:"ABI SCANNER",pops:"POPS SCANNER"},vU={welcome:"Bienvenido",topEducators:"Educadores Destacados",viewAll:"Ver Todo",educationDay:"NVU EDUCATION DAY",categories:"Categorías",joinTelegram:"Únete a Nuestro Telegram",ourEducators:"Nuestros Educadores",noTopEducators:"No hay educadores destacados disponibles en este momento.",noEducatorsPreview:"No hay educadores para mostrar en este momento."},xU={viewMore:"Ver Más",nameNotAvailable:"Nombre no disponible",specialist:"Especialista",bioNotAvailable:"Biografía no disponible",loading:"Cargando...",timeAgo:"hace {{time}}"},wU={back:"Volver a Educadores",notFound:"Educador no encontrado",liveStreamTitle:"Transmisión en vivo por",streamNotAvailable:"La transmisión en vivo no está disponible actualmente",favoriteSessions:"Sesiones Destacadas"},_U={title:"Iniciar Sesión",emailPlaceholder:"Correo electrónico",passwordPlaceholder:"Contraseña",loadingButton:"Iniciando sesión...",loginButton:"Iniciar Sesión",resetPasswordPrompt:"¿Problemas para iniciar sesión?",resetPasswordLink:"Restablecer contraseña",error:{generic:"Error al iniciar sesión. Por favor, intenta de nuevo.",expired:"Tu membresía ha expirado.",invalidCredentials:"Credenciales inválidas.",connection:"Error de conexión. Por favor, intenta de nuevo."}},bU={pageTitle:"Educadores",noEducatorsInCategory:"No hay educadores disponibles en esta categoría."},EU={forex:"Forex",crypto:"Cripto",financial_literacy:"Educación Financiera",marketing_digital:"Marketing Digital"},SU={pageTitle:"Calendario",timeHeader:"Hora",educatorHeader:"Educador",noEvents:"No hay eventos programados para este día.",month:"Mes",week:"Semana",day:"Día",today:"Hoy",previous:"Anterior",next:"Siguiente",sunday:"Domingo",monday:"Lunes",tuesday:"Martes",wednesday:"Miércoles",thursday:"Jueves",friday:"Viernes",saturday:"Sábado",filterAll:"Todos",filterSpanish:"Español",filterEnglish:"Inglés",filterFrench:"Francés"},TU={editButton:"Editar Perfil",saveButton:"Guardar Cambios",cancelButton:"Cancelar",logoutButton:"Cerrar Sesión",journalTitle:"Mi Diario de Trading",journalDescription:"Accede a tu diario de trading para registrar y analizar tus operaciones.",journalButton:"Ir al Diario"},IU={title:"Noticias del Mercado",trendsTitle:"Tendencias del Mercado",adsTitle:"Anuncios Destacados",backButton:"Volver",createPostButton:"Crear Publicación",trends:{fundamental:"Análisis Fundamental",economic:"Noticias Económicas",technical:"Indicadores Técnicos",events:"Eventos del Mercado",perspectives:"Perspectivas Globales"},ads:{news:"Mantente al día con las últimas noticias del mercado",analysis:"Análisis técnico y fundamental en tiempo real",strategies:"Estrategias de trading basadas en noticias"}},kU={pageTitle:"Academia",tabbar:{es:"Español",en:"Inglés",fr:"Francés"},loading:"Cargando sesiones...",error:"No se pudieron cargar las sesiones.",noSessions:"No hay sesiones disponibles para este idioma.",selectedClass:"Clase seleccionada",noTitle:"Video sin título"},CU={title:"Mi Diario de Trading",loginRequired:"Por favor, inicia sesión para usar tu diario de trading.",folders:"Carpetas",newFolder:"Nombre de nueva carpeta",createFolder:"Crear Carpeta",newTrade:"Nueva Operación",createTrade:"Registrar Operación",trades:"Operaciones",totalTrades:"Operaciones Totales",winRate:"Porcentaje de Éxito",totalProfitLoss:"Ganancia/Pérdida Total"},AU="Todos los idiomas",RU={sidebar:gU,scanner:yU,home:vU,common:xU,educatorDetail:wU,login:_U,educators:bU,categories:EU,calendar:SU,profile:TU,news:IU,academy:kU,journal:CU,filterAllLanguages:AU};At.use(j4).use(O3).init({debug:!0,fallbackLng:"en",supportedLngs:["en","es","fr"],interpolation:{escapeValue:!1},resources:{en:{translation:Zz},fr:{translation:mU},es:{translation:RU}},detection:{order:["querystring","localStorage","navigator","htmlTag"],lookupQuerystring:"lng",lookupLocalStorage:"i18nextLng",caches:["localStorage"]}});const PU=HR`
  0% { background-position-y: 0; }
  100% { background-position-y: 20px; }
`,NU=_.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  background: repeating-linear-gradient(
    to bottom,
    rgba(0,255,255,0.08) 0px,
    rgba(0,255,255,0.08) 1px,
    transparent 1px,
    transparent 20px
  );
  animation: ${PU} 2s linear infinite;
`,DU=()=>d.jsx(NU,{}),OU=_.div`
  display: flex;
  min-height: 100vh;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`,jU=_.div`
  flex: 1.2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  min-width: 320px;
  background: linear-gradient(120deg, #00fff7 0%, #00bcd4 50%, #000 100%);
  animation: gradientMove 8s ease-in-out infinite alternate;

  @keyframes gradientMove {
    0% { background-position: 0% 50%; }
    100% { background-position: 100% 50%; }
  }
`,LU=_.div`
  width: 320px;
  height: 320px;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;_.h2`
  color: #fff;
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 0;
  z-index: 2;
  text-shadow: 0 2px 16px rgba(0,0,0,0.18);
`;const MU=_.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(0,0,0);
  min-width: 320px;
`,VU=_.div`
  padding: 40px 32px 32px 32px;
  background: rgb(18,18,18);
  border-radius: 18px;
  box-shadow: 0 6px 32px rgba(0,255,255,0.08);
  width: 100%;
  max-width: 400px;
  text-align: center;
  position: relative;
  z-index: 1;
  border: 1.5px solid rgba(0,255,255,0.10);
`,FU=_.h1`
  margin-bottom: 30px;
  color: #fff;
  font-size: 2rem;
  font-weight: 700;
`,$U=_.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,u_=_.input`
  padding: 15px;
  border: 1.5px solid rgb(40,40,40);
  border-radius: 10px;
  font-size: 16px;
  color: #fff;
  background: rgb(24,24,24);
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: #00fff7;
  }
`,zU=_.button`
  padding: 15px;
  border: none;
  border-radius: 10px;
  background: linear-gradient(90deg, #00fff7 0%, #00bcd4 100%);
  color: #000;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: linear-gradient(90deg, #00e6e0 0%, #00acc1 100%);
  }

  &:disabled {
    background: rgb(40,40,40);
    color: rgb(158,158,158);
    cursor: not-allowed;
  }
`,UU=_.p`
  color: #ff5252;
  margin-top: 15px;
  font-size: 14px;
`,BU=_.p`
  margin-top: 20px;
  font-size: 14px;
  color: #aaa;
  a {
    color: #00fff7;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`,HU=_.select`
  margin-top: 32px;
  padding: 10px 16px;
  border-radius: 8px;
  border: 1.5px solid rgb(40,40,40);
  background: rgb(24,24,24);
  color: #fff;
  font-size: 15px;
  outline: none;
  transition: border-color 0.2s;
  width: 100%;
  max-width: 220px;
  align-self: center;
  &:focus {
    border-color: #00fff7;
  }
`,WU=()=>{const[t,e]=D.useState(""),[n,r]=D.useState(""),[i,s]=D.useState(!1),[o,a]=D.useState(""),l=Br(),{t:c}=ft(),h=async p=>{var k;p.preventDefault(),s(!0),a("");const g="https://api.nvu-integrations.com/v1/auth/nvu-live/sign-in",w={email:t,password:n};try{const C=await fetch(g,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(w)}),x=await C.json();if(C.ok&&((k=x==null?void 0:x.nvulive)==null?void 0:k.status)==="Active"){console.log("Login successful:",x);const v=x.nvulive;localStorage.setItem("nvuUserData",JSON.stringify({name:v.customerName,id:v.customerID,status:v.status})),localStorage.setItem("userName",v.customerName),l("/")}else{const v=(x==null?void 0:x.message)||"Invalid credentials or inactive membership.";console.error("Login failed:",v,x);let E=c("login.error.generic");v==="FL2 membership expired."?E=c("login.error.expired"):v.includes("Invalid credentials")&&(E=c("login.error.invalidCredentials")),a(E)}}catch(C){console.error("API connection error:",C),a(c("login.error.connection"))}finally{s(!1)}},f=p=>{At.changeLanguage(p.target.value)};return d.jsx(d.Fragment,{children:d.jsxs(OU,{children:[d.jsxs(jU,{children:[d.jsx(DU,{}),d.jsx(LU,{style:{zIndex:1,position:"relative"},children:d.jsx("img",{src:"/logo%20login.png",alt:"NVU Login Logo",style:{width:"100%",height:"100%",objectFit:"contain"}})})]}),d.jsx(MU,{children:d.jsxs(VU,{children:[d.jsx(FU,{children:c("login.title")}),d.jsxs($U,{onSubmit:h,children:[d.jsx(u_,{type:"email",placeholder:c("login.emailPlaceholder"),value:t,onChange:p=>e(p.target.value),required:!0,autoComplete:"email"}),d.jsx(u_,{type:"password",placeholder:c("login.passwordPlaceholder"),value:n,onChange:p=>r(p.target.value),required:!0,autoComplete:"current-password"}),d.jsx(zU,{type:"submit",disabled:i,children:c(i?"login.loadingButton":"login.loginButton")}),o&&d.jsx(UU,{children:o})]}),d.jsxs(BU,{children:[c("login.resetPasswordPrompt")," ",d.jsx("a",{href:"https://nvisionu.com/en-us/forgot-password",target:"_blank",rel:"noopener noreferrer",children:c("login.resetPasswordLink")})]}),d.jsxs(HU,{value:At.language,onChange:f,children:[d.jsx("option",{value:"es",children:"Español"}),d.jsx("option",{value:"en",children:"English"}),d.jsx("option",{value:"fr",children:"Français"})]})]})})]})})},qU=_.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  padding: 20px;

  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    background-image: url('/images/banner.png'); // Mismo fondo
    background-size: cover;
    background-position: center;
    filter: blur(8px);
    z-index: 0; // Detrás del contenido pero visible
  }
`,GU=_.div`
  padding: 40px 50px;
  background: rgba(255, 255, 255, 0.9); // Ligeramente más opaco que el login
  border-radius: 15px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  text-align: center;
  position: relative;
  z-index: 1; // Encima del fondo blur
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.2);
`,KU=_.h1`
  margin-bottom: 35px;
  color: #333;
  font-size: 24px;
  font-weight: 600;
`,QU=_.div`
  display: flex;
  justify-content: center;
  gap: 30px; // Más espacio entre banderas
`,zp=_.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 15px; // Añadir algo de padding para el área de clic
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  transition: transform 0.2s ease;
  border-radius: 10px; // Redondear botón para hover

  &:hover {
    transform: scale(1.1);
    background-color: rgba(0,0,0,0.05); // Feedback visual ligero
  }
`,Up=_.span`
  font-size: 50px; // Tamaño del emoji
  line-height: 1;
  // Sombra opcional para dar profundidad
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`,Bp=_.span`
  font-size: 16px;
  font-weight: 500;
  color: #444;
`,YU=()=>{const{i18n:t}=ft(),e=Br(),n=i=>{t.changeLanguage(i),e("/login-form")};return d.jsx(qU,{children:d.jsxs(GU,{children:[d.jsx(KU,{children:"Selecciona tu idioma / Select your language / Sélectionnez votre langue"}),d.jsxs(QU,{children:[d.jsxs(zp,{onClick:()=>n("es"),children:[d.jsx(Up,{role:"img","aria-label":"Español",children:"🇪🇸"}),d.jsx(Bp,{children:"Español"})]}),d.jsxs(zp,{onClick:()=>n("en"),children:[d.jsx(Up,{role:"img","aria-label":"English",children:"🇬🇧"}),d.jsx(Bp,{children:"English"})]}),d.jsxs(zp,{onClick:()=>n("fr"),children:[d.jsx(Up,{role:"img","aria-label":"Français",children:"🇫🇷"}),d.jsx(Bp,{children:"Français"})]})]})]})})},JU=_.div`
  padding: 24px;
  max-width: 800px;
  margin: 20px auto;
  background-color: rgb(0,0,0);
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 255, 255, 0.04);
  border: 1.5px solid rgba(0,255,255,0.08);
`,ZU=_.h1`
  font-size: 28px;
  color: rgb(255,255,255);
  font-weight: 700;
  margin-bottom: 24px;
  letter-spacing: 0.01em;
`,c_=_.section`
  margin-bottom: 30px;
  background: rgb(24,24,24);
  border-radius: 12px;
  padding: 24px;
  border: 1px solid rgba(0,255,255,0.08);
`,d_=_.h2`
  font-size: 20px;
  color: rgb(0,150,136);
  font-weight: 600;
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(0,255,255,0.08);
`,h_=_.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-size: 16px;
`,f_=_.span`
  font-weight: 500;
  color: rgb(255,255,255);
  width: 120px;
  flex-shrink: 0;
`,p_=_.span`
  color: rgb(158,158,158);
  flex-grow: 1;
  word-break: break-all;
`,XU=_.input`
  padding: 12px 16px;
  border: 1.5px solid rgb(40,40,40);
  border-radius: 10px;
  font-size: 16px;
  color: rgb(255,255,255);
  background: rgb(18,18,18);
  flex-grow: 1;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus {
    outline: none;
    border-color: rgb(0,150,136);
    box-shadow: 0 0 0 2px rgba(0,255,255,0.12);
  }
`;_.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  margin-top: 24px;
`;const e1=_.button`
  padding: 12px 24px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;

  &:active {
    transform: translateY(1px);
  }
`,eB=_(e1)`
  background: linear-gradient(90deg, #00fff7 0%, #00bcd4 100%);
  color: rgb(0,0,0);

  &:hover {
    background: linear-gradient(90deg, #00e6e0 0%, #00acc1 100%);
  }

  &:disabled {
    background: rgb(40,40,40);
    color: rgb(158,158,158);
    cursor: not-allowed;
    transform: none;
  }
`;_(e1)`
  background: rgb(40,40,40);
  color: rgb(255,255,255);

  &:hover {
    background: rgb(50,50,50);
  }
`;const tB=_(e1)`
  background: rgb(255,59,48);
  color: rgb(255,255,255);
  padding: 16px 36px;

  &:hover {
    background: rgb(255,69,58);
  }
`,nB=_.div`
  padding: 24px;
  background: rgb(18,18,18);
  border: 1px dashed rgba(0,255,255,0.2);
  border-radius: 12px;
  text-align: center;
  color: rgb(158,158,158);
  margin-top: 16px;
`,rB=_.div`
  display: flex;
  justify-content: flex-start;
  gap: 16px;
  margin-top: 24px;
`,iB=_.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 32px;
  padding-bottom: 32px;
`,sB=()=>{const{t}=ft(),e=Br(),[n,r]=D.useState(!1),[i,s]=D.useState({id:"N/A",name:"Usuario Ejemplo",email:"usuario@ejemplo.com"}),[o,a]=D.useState({});D.useEffect(()=>{const f=localStorage.getItem("nvuUserData");if(f)try{const p=JSON.parse(f);s({id:p.id||"N/A",name:p.name||"Usuario",email:p.email||""})}catch(p){console.error("Error parsing user data:",p)}},[]);const l=f=>{const{name:p,value:g}=f.target;a(w=>({...w,[p]:g}))},c=()=>{e("/trading-journal")},h=()=>{localStorage.removeItem("nvuUserData"),e("/login")};return d.jsxs(JU,{children:[d.jsx(ZU,{children:t("profile.title","Mi Perfil")}),d.jsxs(c_,{children:[d.jsx(d_,{children:t("profile.personalInfo","Información Personal")}),d.jsxs(h_,{children:[d.jsx(f_,{children:t("profile.userIdLabel","ID Usuario:")}),d.jsx(p_,{children:i.id})]}),d.jsxs(h_,{children:[d.jsx(f_,{children:t("profile.nameLabel","Nombre:")}),n?d.jsx(XU,{type:"text",name:"name",value:o.name||"",onChange:l}):d.jsx(p_,{children:i.name})]})]}),d.jsx(rB,{}),d.jsx(iB,{children:d.jsx(tB,{onClick:h,children:t("profile.logoutButton","Cerrar Sesión")})}),d.jsxs(c_,{children:[d.jsx(d_,{children:t("profile.journalTitle","Mi Diario de Trading")}),d.jsxs(nB,{children:[d.jsx("p",{children:t("profile.journalDescription","Accede a tu diario de trading para registrar y analizar tus operaciones.")}),d.jsx(eB,{onClick:c,style:{marginTop:"16px"},children:t("profile.journalButton","Ir al Journal")})]})]})]})},oB=250,aB=70,lB="64px",Jl="991px",uB=_.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`,cB=_.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 800;
  opacity: ${t=>t.$isOpen?1:0};
  visibility: ${t=>t.$isOpen?"visible":"hidden"};
  transition: opacity 0.3s ease, visibility 0.3s ease;
  display: none;
  @media (max-width: ${Jl}) {
    display: block;
  }
`,dB=_.div`
  display: flex;
  flex: 1;
  min-width: 0;
  padding-top: 0;
  margin-left: ${t=>t.$isSidebarCollapsed?aB:oB}px;
  transition: margin-left 0.3s ease;
  @media (max-width: ${Jl}) {
    margin-left: 0;
  }
`,hB=_.main`
  flex: 1;
  padding: 0; // Sin padding lateral
  background-color: rgb(0,0,0);
  overflow-y: auto;
  min-width: 0;
  margin-top: ${lB};
`,fB=({children:t})=>{const[e,n]=D.useState(!0),[r,i]=D.useState(!1),s=Ur(),o=()=>{window.innerWidth<=parseInt(Jl)?n(c=>!c):(i(c=>!c),n(!0))},a=()=>{window.innerWidth<=parseInt(Jl)&&n(!1)};return D.useEffect(()=>{a()},[s.pathname]),D.useEffect(()=>{const l=()=>{window.innerWidth<=parseInt(Jl)||n(!0)};return window.addEventListener("resize",l),l(),()=>window.removeEventListener("resize",l)},[]),d.jsxs(uB,{children:[d.jsx(HS,{onToggleSidebar:o,isSidebarOpen:e}),d.jsx(WS,{isOpen:e,isCollapsed:r,onClose:a,onToggleCollapse:o}),d.jsx(cB,{$isOpen:e,onClick:a}),d.jsx(dB,{$isSidebarCollapsed:r,children:d.jsx(hB,{children:t})})]})},m_=_.div`
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: 40px;
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 32px;
  position: relative;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 24px;
    padding: 0 8px;
  }
`,Hc=_.div`
  padding: 32px 0;
  max-width: 100%;
  @media (max-width: 900px) {
    padding: 18px 0;
  }
`;_.aside`
  position: sticky;
  top: 100px;
  height: fit-content;
  background: #181c1b;
  border-radius: 12px;
  padding: 32px 24px;
  color: #fff;
  margin-top: 32px;
  @media (max-width: 1200px) {
    display: none;
  }
  @media (max-width: 900px) {
    display: block;
    position: static;
    margin-top: 0;
    margin-bottom: 24px;
    padding: 18px 10px;
  }
`;_.h3`
  color: #00e6e6;
  font-size: 1.2em;
  margin-bottom: 24px;
  font-weight: 600;
`;_.ul`
  padding-left: 18px;
  margin: 0 0 32px 0;
  list-style-type: none;
  
  li {
    margin-bottom: 12px;
    color: rgb(200,200,200);
    font-size: 0.95em;
    transition: color 0.2s;
    
    &:hover {
      color: rgb(0,150,136);
    }
  }
`;const g_=_.div`
  background: rgb(24,24,24);
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.10);
  padding: 24px;
  margin-bottom: 32px;
  color: rgb(255,255,255);
  border: 1px solid rgba(0,150,136,0.08);
  transition: transform 0.2s, box-shadow 0.2s;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }
  @media (max-width: 900px) {
    padding: 14px;
    margin-bottom: 18px;
  }
`,y_=_.div`
  padding: 24px 32px;
  @media (max-width: 900px) {
    padding: 10px 4px;
  }
`,v_=_.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`,x_=_.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: #e9ecef;
  margin-right: 12px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: #495057;
  font-size: 18px;
  border: 2px solid #f8f9fa;
`,w_=_.div`
  display: flex;
  flex-direction: column;
`,__=_.span`
  font-weight: 600;
  font-size: 1em;
  color: rgb(0,150,136);
  line-height: 1.3;
`,b_=_.span`
  font-size: 0.85em;
  color: rgb(158,158,158);
`,E_=_.h2`
  font-size: 20px;
  margin-bottom: 12px;
  font-weight: 600;
  color: rgb(255,255,255);
  line-height: 1.4;
`,S_=_.p`
  font-size: 1em;
  color: rgb(158,158,158);
  margin-bottom: 0.5em;
`,T_=_.div`
  width: 100%;
  max-height: 450px;
  background-color: rgb(24,24,24);
  margin-top: 8px;
  margin-bottom: 16px;
  overflow: hidden;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    object-fit: cover;
    display: block;
    border-radius: 8px;
  }
  @media (max-width: 900px) {
    max-height: 220px;
    img { max-height: 220px; }
  }
`;_.div`
  margin-top: 32px;
  border-top: 1px solid rgba(255,255,255,0.1);
  padding-top: 32px;
`;_.h3`
  color: #00e6e6;
  font-size: 1.2em;
  margin-bottom: 24px;
  font-weight: 600;
  text-align: center;
`;_.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;_.div`
  background: rgb(24,24,24);
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }
`;_.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
  @media (max-width: 900px) {
    height: 120px;
  }
`;_.div`
  padding: 20px;
  text-align: center;
`;_.p`
  color: rgb(255,255,255);
  font-size: 1.1em;
  margin: 0;
  line-height: 1.4;
  font-weight: 500;
`;const pB=()=>{const{t}=ft(),[e,n]=D.useState([]),[r,i]=D.useState(!0),[s,o]=D.useState(null),[a,l]=D.useState(null),[c,h]=D.useState(!1),f=ve.useMemo(()=>{try{return JSON.parse(localStorage.getItem("nvuUserData"))||null}catch{return null}},[]),p=f==null?void 0:f.id;D.useEffect(()=>{const v=Mt(Lr,"posts"),E=Ar(v,lo("createdAt","desc")),P=Qu(E,j=>{const M=j.docs.map(b=>({id:b.id,...b.data()}));n(M),i(!1)},j=>{o(t("forum.loadError")),i(!1)});return()=>P()},[t]);const g=v=>l(v),w=()=>l(null),k=()=>h(!0),C=()=>h(!1),x=v=>v&&v.toDate?v.toDate().toLocaleDateString(void 0,{year:"numeric",month:"long",day:"numeric"}):t("forum.post.dateUnavailable");return r?d.jsx(Hc,{children:"Cargando..."}):s?d.jsx(Hc,{children:s}):a?d.jsx(m_,{children:d.jsxs(Hc,{children:[d.jsx("h1",{children:"Markups"}),d.jsx(g_,{children:d.jsxs(y_,{children:[d.jsx(E_,{children:a.title}),d.jsxs(v_,{children:[d.jsx(x_,{children:a.author?a.author.charAt(0).toUpperCase():"U"}),d.jsxs(w_,{children:[d.jsx(__,{children:a.author||t("forum.post.anonymous")}),d.jsx(b_,{children:x(a.createdAt)})]})]}),d.jsx(S_,{children:a.content}),a.imageUrl&&d.jsx(T_,{children:d.jsx("img",{src:a.imageUrl,alt:a.title||"Imagen del post"})})]})}),d.jsx("button",{onClick:w,children:"Volver"})]})}):d.jsx(m_,{children:d.jsxs(Hc,{children:[d.jsx("h1",{children:"Markups"}),p===1029917&&d.jsx("button",{onClick:k,children:"Crear Post"}),p===1029917&&c&&d.jsx(Xy,{onClose:C}),e.map(v=>d.jsxs(g_,{onClick:()=>g(v),style:{cursor:"pointer"},children:[d.jsxs(y_,{children:[d.jsx(E_,{children:v.title}),d.jsxs(v_,{children:[d.jsx(x_,{children:v.author?v.author.charAt(0).toUpperCase():"U"}),d.jsxs(w_,{children:[d.jsx(__,{children:v.author||t("forum.post.anonymous")}),d.jsx(b_,{children:x(v.createdAt)})]})]}),d.jsxs(S_,{children:[v.content.substring(0,250),v.content.length>250?"...":""]}),v.imageUrl&&d.jsx(T_,{children:d.jsx("img",{src:v.imageUrl,alt:v.title||"Imagen del post"})})]}),d.jsxs("div",{style:{display:"flex",gap:24,alignItems:"center",padding:"0 32px 16px 32px"},children:[d.jsxs("span",{style:{display:"flex",alignItems:"center",gap:6,color:"#6c757d",fontSize:"1.1em"},children:[d.jsx(y3,{})," 0"]}),d.jsxs("span",{style:{display:"flex",alignItems:"center",gap:6,color:"#6c757d",fontSize:"1.1em"},children:[d.jsx(Bh,{})," 0"]})]})]},v.id))]})})},mB={apiKey:void 0,authDomain:void 0,projectId:void 0,storageBucket:void 0,messagingSenderId:void 0,appId:void 0},gB=s8().length?Xh():ay(mB),br=s4(gB),Pa=Math.min,Js=Math.max,yh=Math.round,Wc=Math.floor,Mr=t=>({x:t,y:t}),yB={left:"right",right:"left",bottom:"top",top:"bottom"},vB={start:"end",end:"start"};function Fg(t,e,n){return Js(t,Pa(e,n))}function Yu(t,e){return typeof t=="function"?t(e):t}function uo(t){return t.split("-")[0]}function Ju(t){return t.split("-")[1]}function L4(t){return t==="x"?"y":"x"}function t1(t){return t==="y"?"height":"width"}function Zs(t){return["top","bottom"].includes(uo(t))?"y":"x"}function n1(t){return L4(Zs(t))}function xB(t,e,n){n===void 0&&(n=!1);const r=Ju(t),i=n1(t),s=t1(i);let o=i==="x"?r===(n?"end":"start")?"right":"left":r==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(o=vh(o)),[o,vh(o)]}function wB(t){const e=vh(t);return[$g(t),e,$g(e)]}function $g(t){return t.replace(/start|end/g,e=>vB[e])}function _B(t,e,n){const r=["left","right"],i=["right","left"],s=["top","bottom"],o=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:r:e?r:i;case"left":case"right":return e?s:o;default:return[]}}function bB(t,e,n,r){const i=Ju(t);let s=_B(uo(t),n==="start",r);return i&&(s=s.map(o=>o+"-"+i),e&&(s=s.concat(s.map($g)))),s}function vh(t){return t.replace(/left|right|bottom|top/g,e=>yB[e])}function EB(t){return{top:0,right:0,bottom:0,left:0,...t}}function M4(t){return typeof t!="number"?EB(t):{top:t,right:t,bottom:t,left:t}}function xh(t){const{x:e,y:n,width:r,height:i}=t;return{width:r,height:i,top:n,left:e,right:e+r,bottom:n+i,x:e,y:n}}function I_(t,e,n){let{reference:r,floating:i}=t;const s=Zs(e),o=n1(e),a=t1(o),l=uo(e),c=s==="y",h=r.x+r.width/2-i.width/2,f=r.y+r.height/2-i.height/2,p=r[a]/2-i[a]/2;let g;switch(l){case"top":g={x:h,y:r.y-i.height};break;case"bottom":g={x:h,y:r.y+r.height};break;case"right":g={x:r.x+r.width,y:f};break;case"left":g={x:r.x-i.width,y:f};break;default:g={x:r.x,y:r.y}}switch(Ju(e)){case"start":g[o]-=p*(n&&c?-1:1);break;case"end":g[o]+=p*(n&&c?-1:1);break}return g}const SB=async(t,e,n)=>{const{placement:r="bottom",strategy:i="absolute",middleware:s=[],platform:o}=n,a=s.filter(Boolean),l=await(o.isRTL==null?void 0:o.isRTL(e));let c=await o.getElementRects({reference:t,floating:e,strategy:i}),{x:h,y:f}=I_(c,r,l),p=r,g={},w=0;for(let k=0;k<a.length;k++){const{name:C,fn:x}=a[k],{x:v,y:E,data:P,reset:j}=await x({x:h,y:f,initialPlacement:r,placement:p,strategy:i,middlewareData:g,rects:c,platform:o,elements:{reference:t,floating:e}});h=v??h,f=E??f,g={...g,[C]:{...g[C],...P}},j&&w<=50&&(w++,typeof j=="object"&&(j.placement&&(p=j.placement),j.rects&&(c=j.rects===!0?await o.getElementRects({reference:t,floating:e,strategy:i}):j.rects),{x:h,y:f}=I_(c,p,l)),k=-1)}return{x:h,y:f,placement:p,strategy:i,middlewareData:g}};async function V4(t,e){var n;e===void 0&&(e={});const{x:r,y:i,platform:s,rects:o,elements:a,strategy:l}=t,{boundary:c="clippingAncestors",rootBoundary:h="viewport",elementContext:f="floating",altBoundary:p=!1,padding:g=0}=Yu(e,t),w=M4(g),C=a[p?f==="floating"?"reference":"floating":f],x=xh(await s.getClippingRect({element:(n=await(s.isElement==null?void 0:s.isElement(C)))==null||n?C:C.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(a.floating)),boundary:c,rootBoundary:h,strategy:l})),v=f==="floating"?{x:r,y:i,width:o.floating.width,height:o.floating.height}:o.reference,E=await(s.getOffsetParent==null?void 0:s.getOffsetParent(a.floating)),P=await(s.isElement==null?void 0:s.isElement(E))?await(s.getScale==null?void 0:s.getScale(E))||{x:1,y:1}:{x:1,y:1},j=xh(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:v,offsetParent:E,strategy:l}):v);return{top:(x.top-j.top+w.top)/P.y,bottom:(j.bottom-x.bottom+w.bottom)/P.y,left:(x.left-j.left+w.left)/P.x,right:(j.right-x.right+w.right)/P.x}}const TB=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:r,placement:i,rects:s,platform:o,elements:a,middlewareData:l}=e,{element:c,padding:h=0}=Yu(t,e)||{};if(c==null)return{};const f=M4(h),p={x:n,y:r},g=n1(i),w=t1(g),k=await o.getDimensions(c),C=g==="y",x=C?"top":"left",v=C?"bottom":"right",E=C?"clientHeight":"clientWidth",P=s.reference[w]+s.reference[g]-p[g]-s.floating[w],j=p[g]-s.reference[g],M=await(o.getOffsetParent==null?void 0:o.getOffsetParent(c));let b=M?M[E]:0;(!b||!await(o.isElement==null?void 0:o.isElement(M)))&&(b=a.floating[E]||s.floating[w]);const S=P/2-j/2,A=b/2-k[w]/2-1,R=Pa(f[x],A),N=Pa(f[v],A),O=R,I=b-k[w]-N,Q=b/2-k[w]/2+S,te=Fg(O,Q,I),he=!l.arrow&&Ju(i)!=null&&Q!==te&&s.reference[w]/2-(Q<O?R:N)-k[w]/2<0,se=he?Q<O?Q-O:Q-I:0;return{[g]:p[g]+se,data:{[g]:te,centerOffset:Q-te-se,...he&&{alignmentOffset:se}},reset:he}}}),IB=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,r;const{placement:i,middlewareData:s,rects:o,initialPlacement:a,platform:l,elements:c}=e,{mainAxis:h=!0,crossAxis:f=!0,fallbackPlacements:p,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:w="none",flipAlignment:k=!0,...C}=Yu(t,e);if((n=s.arrow)!=null&&n.alignmentOffset)return{};const x=uo(i),v=Zs(a),E=uo(a)===a,P=await(l.isRTL==null?void 0:l.isRTL(c.floating)),j=p||(E||!k?[vh(a)]:wB(a)),M=w!=="none";!p&&M&&j.push(...bB(a,k,w,P));const b=[a,...j],S=await V4(e,C),A=[];let R=((r=s.flip)==null?void 0:r.overflows)||[];if(h&&A.push(S[x]),f){const te=xB(i,o,P);A.push(S[te[0]],S[te[1]])}if(R=[...R,{placement:i,overflows:A}],!A.every(te=>te<=0)){var N,O;const te=(((N=s.flip)==null?void 0:N.index)||0)+1,he=b[te];if(he){var I;const z=f==="alignment"?v!==Zs(he):!1,U=((I=R[0])==null?void 0:I.overflows[0])>0;if(!z||U)return{data:{index:te,overflows:R},reset:{placement:he}}}let se=(O=R.filter(z=>z.overflows[0]<=0).sort((z,U)=>z.overflows[1]-U.overflows[1])[0])==null?void 0:O.placement;if(!se)switch(g){case"bestFit":{var Q;const z=(Q=R.filter(U=>{if(M){const G=Zs(U.placement);return G===v||G==="y"}return!0}).map(U=>[U.placement,U.overflows.filter(G=>G>0).reduce((G,Z)=>G+Z,0)]).sort((U,G)=>U[1]-G[1])[0])==null?void 0:Q[0];z&&(se=z);break}case"initialPlacement":se=a;break}if(i!==se)return{reset:{placement:se}}}return{}}}};async function kB(t,e){const{placement:n,platform:r,elements:i}=t,s=await(r.isRTL==null?void 0:r.isRTL(i.floating)),o=uo(n),a=Ju(n),l=Zs(n)==="y",c=["left","top"].includes(o)?-1:1,h=s&&l?-1:1,f=Yu(e,t);let{mainAxis:p,crossAxis:g,alignmentAxis:w}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:f.mainAxis||0,crossAxis:f.crossAxis||0,alignmentAxis:f.alignmentAxis};return a&&typeof w=="number"&&(g=a==="end"?w*-1:w),l?{x:g*h,y:p*c}:{x:p*c,y:g*h}}const CB=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,r;const{x:i,y:s,placement:o,middlewareData:a}=e,l=await kB(e,t);return o===((n=a.offset)==null?void 0:n.placement)&&(r=a.arrow)!=null&&r.alignmentOffset?{}:{x:i+l.x,y:s+l.y,data:{...l,placement:o}}}}},AB=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:r,placement:i}=e,{mainAxis:s=!0,crossAxis:o=!1,limiter:a={fn:C=>{let{x,y:v}=C;return{x,y:v}}},...l}=Yu(t,e),c={x:n,y:r},h=await V4(e,l),f=Zs(uo(i)),p=L4(f);let g=c[p],w=c[f];if(s){const C=p==="y"?"top":"left",x=p==="y"?"bottom":"right",v=g+h[C],E=g-h[x];g=Fg(v,g,E)}if(o){const C=f==="y"?"top":"left",x=f==="y"?"bottom":"right",v=w+h[C],E=w-h[x];w=Fg(v,w,E)}const k=a.fn({...e,[p]:g,[f]:w});return{...k,data:{x:k.x-n,y:k.y-r,enabled:{[p]:s,[f]:o}}}}}};function Ef(){return typeof window<"u"}function Qa(t){return F4(t)?(t.nodeName||"").toLowerCase():"#document"}function Rn(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function Wr(t){var e;return(e=(F4(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function F4(t){return Ef()?t instanceof Node||t instanceof Rn(t).Node:!1}function yr(t){return Ef()?t instanceof Element||t instanceof Rn(t).Element:!1}function zr(t){return Ef()?t instanceof HTMLElement||t instanceof Rn(t).HTMLElement:!1}function k_(t){return!Ef()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof Rn(t).ShadowRoot}function Zu(t){const{overflow:e,overflowX:n,overflowY:r,display:i}=vr(t);return/auto|scroll|overlay|hidden|clip/.test(e+r+n)&&!["inline","contents"].includes(i)}function RB(t){return["table","td","th"].includes(Qa(t))}function Sf(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function r1(t){const e=i1(),n=yr(t)?vr(t):t;return["transform","translate","scale","rotate","perspective"].some(r=>n[r]?n[r]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(r=>(n.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(n.contain||"").includes(r))}function PB(t){let e=vs(t);for(;zr(e)&&!Na(e);){if(r1(e))return e;if(Sf(e))return null;e=vs(e)}return null}function i1(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Na(t){return["html","body","#document"].includes(Qa(t))}function vr(t){return Rn(t).getComputedStyle(t)}function Tf(t){return yr(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function vs(t){if(Qa(t)==="html")return t;const e=t.assignedSlot||t.parentNode||k_(t)&&t.host||Wr(t);return k_(e)?e.host:e}function $4(t){const e=vs(t);return Na(e)?t.ownerDocument?t.ownerDocument.body:t.body:zr(e)&&Zu(e)?e:$4(e)}function Du(t,e,n){var r;e===void 0&&(e=[]),n===void 0&&(n=!0);const i=$4(t),s=i===((r=t.ownerDocument)==null?void 0:r.body),o=Rn(i);if(s){const a=zg(o);return e.concat(o,o.visualViewport||[],Zu(i)?i:[],a&&n?Du(a):[])}return e.concat(i,Du(i,[],n))}function zg(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function z4(t){const e=vr(t);let n=parseFloat(e.width)||0,r=parseFloat(e.height)||0;const i=zr(t),s=i?t.offsetWidth:n,o=i?t.offsetHeight:r,a=yh(n)!==s||yh(r)!==o;return a&&(n=s,r=o),{width:n,height:r,$:a}}function s1(t){return yr(t)?t:t.contextElement}function ca(t){const e=s1(t);if(!zr(e))return Mr(1);const n=e.getBoundingClientRect(),{width:r,height:i,$:s}=z4(e);let o=(s?yh(n.width):n.width)/r,a=(s?yh(n.height):n.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!a||!Number.isFinite(a))&&(a=1),{x:o,y:a}}const NB=Mr(0);function U4(t){const e=Rn(t);return!i1()||!e.visualViewport?NB:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function DB(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==Rn(t)?!1:e}function co(t,e,n,r){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),s=s1(t);let o=Mr(1);e&&(r?yr(r)&&(o=ca(r)):o=ca(t));const a=DB(s,n,r)?U4(s):Mr(0);let l=(i.left+a.x)/o.x,c=(i.top+a.y)/o.y,h=i.width/o.x,f=i.height/o.y;if(s){const p=Rn(s),g=r&&yr(r)?Rn(r):r;let w=p,k=zg(w);for(;k&&r&&g!==w;){const C=ca(k),x=k.getBoundingClientRect(),v=vr(k),E=x.left+(k.clientLeft+parseFloat(v.paddingLeft))*C.x,P=x.top+(k.clientTop+parseFloat(v.paddingTop))*C.y;l*=C.x,c*=C.y,h*=C.x,f*=C.y,l+=E,c+=P,w=Rn(k),k=zg(w)}}return xh({width:h,height:f,x:l,y:c})}function o1(t,e){const n=Tf(t).scrollLeft;return e?e.left+n:co(Wr(t)).left+n}function B4(t,e,n){n===void 0&&(n=!1);const r=t.getBoundingClientRect(),i=r.left+e.scrollLeft-(n?0:o1(t,r)),s=r.top+e.scrollTop;return{x:i,y:s}}function OB(t){let{elements:e,rect:n,offsetParent:r,strategy:i}=t;const s=i==="fixed",o=Wr(r),a=e?Sf(e.floating):!1;if(r===o||a&&s)return n;let l={scrollLeft:0,scrollTop:0},c=Mr(1);const h=Mr(0),f=zr(r);if((f||!f&&!s)&&((Qa(r)!=="body"||Zu(o))&&(l=Tf(r)),zr(r))){const g=co(r);c=ca(r),h.x=g.x+r.clientLeft,h.y=g.y+r.clientTop}const p=o&&!f&&!s?B4(o,l,!0):Mr(0);return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-l.scrollLeft*c.x+h.x+p.x,y:n.y*c.y-l.scrollTop*c.y+h.y+p.y}}function jB(t){return Array.from(t.getClientRects())}function LB(t){const e=Wr(t),n=Tf(t),r=t.ownerDocument.body,i=Js(e.scrollWidth,e.clientWidth,r.scrollWidth,r.clientWidth),s=Js(e.scrollHeight,e.clientHeight,r.scrollHeight,r.clientHeight);let o=-n.scrollLeft+o1(t);const a=-n.scrollTop;return vr(r).direction==="rtl"&&(o+=Js(e.clientWidth,r.clientWidth)-i),{width:i,height:s,x:o,y:a}}function MB(t,e){const n=Rn(t),r=Wr(t),i=n.visualViewport;let s=r.clientWidth,o=r.clientHeight,a=0,l=0;if(i){s=i.width,o=i.height;const c=i1();(!c||c&&e==="fixed")&&(a=i.offsetLeft,l=i.offsetTop)}return{width:s,height:o,x:a,y:l}}function VB(t,e){const n=co(t,!0,e==="fixed"),r=n.top+t.clientTop,i=n.left+t.clientLeft,s=zr(t)?ca(t):Mr(1),o=t.clientWidth*s.x,a=t.clientHeight*s.y,l=i*s.x,c=r*s.y;return{width:o,height:a,x:l,y:c}}function C_(t,e,n){let r;if(e==="viewport")r=MB(t,n);else if(e==="document")r=LB(Wr(t));else if(yr(e))r=VB(e,n);else{const i=U4(t);r={x:e.x-i.x,y:e.y-i.y,width:e.width,height:e.height}}return xh(r)}function H4(t,e){const n=vs(t);return n===e||!yr(n)||Na(n)?!1:vr(n).position==="fixed"||H4(n,e)}function FB(t,e){const n=e.get(t);if(n)return n;let r=Du(t,[],!1).filter(a=>yr(a)&&Qa(a)!=="body"),i=null;const s=vr(t).position==="fixed";let o=s?vs(t):t;for(;yr(o)&&!Na(o);){const a=vr(o),l=r1(o);!l&&a.position==="fixed"&&(i=null),(s?!l&&!i:!l&&a.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||Zu(o)&&!l&&H4(t,o))?r=r.filter(h=>h!==o):i=a,o=vs(o)}return e.set(t,r),r}function $B(t){let{element:e,boundary:n,rootBoundary:r,strategy:i}=t;const o=[...n==="clippingAncestors"?Sf(e)?[]:FB(e,this._c):[].concat(n),r],a=o[0],l=o.reduce((c,h)=>{const f=C_(e,h,i);return c.top=Js(f.top,c.top),c.right=Pa(f.right,c.right),c.bottom=Pa(f.bottom,c.bottom),c.left=Js(f.left,c.left),c},C_(e,a,i));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function zB(t){const{width:e,height:n}=z4(t);return{width:e,height:n}}function UB(t,e,n){const r=zr(e),i=Wr(e),s=n==="fixed",o=co(t,!0,s,e);let a={scrollLeft:0,scrollTop:0};const l=Mr(0);function c(){l.x=o1(i)}if(r||!r&&!s)if((Qa(e)!=="body"||Zu(i))&&(a=Tf(e)),r){const g=co(e,!0,s,e);l.x=g.x+e.clientLeft,l.y=g.y+e.clientTop}else i&&c();s&&!r&&i&&c();const h=i&&!r&&!s?B4(i,a):Mr(0),f=o.left+a.scrollLeft-l.x-h.x,p=o.top+a.scrollTop-l.y-h.y;return{x:f,y:p,width:o.width,height:o.height}}function Hp(t){return vr(t).position==="static"}function A_(t,e){if(!zr(t)||vr(t).position==="fixed")return null;if(e)return e(t);let n=t.offsetParent;return Wr(t)===n&&(n=n.ownerDocument.body),n}function W4(t,e){const n=Rn(t);if(Sf(t))return n;if(!zr(t)){let i=vs(t);for(;i&&!Na(i);){if(yr(i)&&!Hp(i))return i;i=vs(i)}return n}let r=A_(t,e);for(;r&&RB(r)&&Hp(r);)r=A_(r,e);return r&&Na(r)&&Hp(r)&&!r1(r)?n:r||PB(t)||n}const BB=async function(t){const e=this.getOffsetParent||W4,n=this.getDimensions,r=await n(t.floating);return{reference:UB(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function HB(t){return vr(t).direction==="rtl"}const WB={convertOffsetParentRelativeRectToViewportRelativeRect:OB,getDocumentElement:Wr,getClippingRect:$B,getOffsetParent:W4,getElementRects:BB,getClientRects:jB,getDimensions:zB,getScale:ca,isElement:yr,isRTL:HB};function q4(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function qB(t,e){let n=null,r;const i=Wr(t);function s(){var a;clearTimeout(r),(a=n)==null||a.disconnect(),n=null}function o(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),s();const c=t.getBoundingClientRect(),{left:h,top:f,width:p,height:g}=c;if(a||e(),!p||!g)return;const w=Wc(f),k=Wc(i.clientWidth-(h+p)),C=Wc(i.clientHeight-(f+g)),x=Wc(h),E={rootMargin:-w+"px "+-k+"px "+-C+"px "+-x+"px",threshold:Js(0,Pa(1,l))||1};let P=!0;function j(M){const b=M[0].intersectionRatio;if(b!==l){if(!P)return o();b?o(!1,b):r=setTimeout(()=>{o(!1,1e-7)},1e3)}b===1&&!q4(c,t.getBoundingClientRect())&&o(),P=!1}try{n=new IntersectionObserver(j,{...E,root:i.ownerDocument})}catch{n=new IntersectionObserver(j,E)}n.observe(t)}return o(!0),s}function GB(t,e,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:s=!0,elementResize:o=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=r,c=s1(t),h=i||s?[...c?Du(c):[],...Du(e)]:[];h.forEach(x=>{i&&x.addEventListener("scroll",n,{passive:!0}),s&&x.addEventListener("resize",n)});const f=c&&a?qB(c,n):null;let p=-1,g=null;o&&(g=new ResizeObserver(x=>{let[v]=x;v&&v.target===c&&g&&(g.unobserve(e),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var E;(E=g)==null||E.observe(e)})),n()}),c&&!l&&g.observe(c),g.observe(e));let w,k=l?co(t):null;l&&C();function C(){const x=co(t);k&&!q4(k,x)&&n(),k=x,w=requestAnimationFrame(C)}return n(),()=>{var x;h.forEach(v=>{i&&v.removeEventListener("scroll",n),s&&v.removeEventListener("resize",n)}),f==null||f(),(x=g)==null||x.disconnect(),g=null,l&&cancelAnimationFrame(w)}}const KB=CB,QB=AB,YB=IB,JB=TB,R_=(t,e,n)=>{const r=new Map,i={platform:WB,...n},s={...i.platform,_c:r};return SB(t,e,{...i,platform:s})};var G4={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var s="",o=0;o<arguments.length;o++){var a=arguments[o];a&&(s=i(s,r(a)))}return s}function r(s){if(typeof s=="string"||typeof s=="number")return s;if(typeof s!="object")return"";if(Array.isArray(s))return n.apply(null,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var o="";for(var a in s)e.call(s,a)&&s[a]&&(o=i(o,a));return o}function i(s,o){return o?s?s+" "+o:s+o:s}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(G4);var ZB=G4.exports;const Ug=z_(ZB);var P_={};const XB="react-tooltip-core-styles",eH="react-tooltip-base-styles",N_={core:!1,base:!1};function D_({css:t,id:e=eH,type:n="base",ref:r}){var i,s;if(!t||typeof document>"u"||N_[n]||n==="core"&&typeof process<"u"&&(!((i=process==null?void 0:P_)===null||i===void 0)&&i.REACT_TOOLTIP_DISABLE_CORE_STYLES)||n!=="base"&&typeof process<"u"&&(!((s=process==null?void 0:P_)===null||s===void 0)&&s.REACT_TOOLTIP_DISABLE_BASE_STYLES))return;n==="core"&&(e=XB),r||(r={});const{insertAt:o}=r;if(document.getElementById(e))return;const a=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.id=e,l.type="text/css",o==="top"&&a.firstChild?a.insertBefore(l,a.firstChild):a.appendChild(l),l.styleSheet?l.styleSheet.cssText=t:l.appendChild(document.createTextNode(t)),N_[n]=!0}const O_=async({elementReference:t=null,tooltipReference:e=null,tooltipArrowReference:n=null,place:r="top",offset:i=10,strategy:s="absolute",middlewares:o=[KB(Number(i)),YB({fallbackAxisSideDirection:"start"}),QB({padding:5})],border:a})=>{if(!t)return{tooltipStyles:{},tooltipArrowStyles:{},place:r};if(e===null)return{tooltipStyles:{},tooltipArrowStyles:{},place:r};const l=o;return n?(l.push(JB({element:n,padding:5})),R_(t,e,{placement:r,strategy:s,middleware:l}).then(({x:c,y:h,placement:f,middlewareData:p})=>{var g,w;const k={left:`${c}px`,top:`${h}px`,border:a},{x:C,y:x}=(g=p.arrow)!==null&&g!==void 0?g:{x:0,y:0},v=(w={top:"bottom",right:"left",bottom:"top",left:"right"}[f.split("-")[0]])!==null&&w!==void 0?w:"bottom",E=a&&{borderBottom:a,borderRight:a};let P=0;if(a){const j=`${a}`.match(/(\d+)px/);P=j!=null&&j[1]?Number(j[1]):1}return{tooltipStyles:k,tooltipArrowStyles:{left:C!=null?`${C}px`:"",top:x!=null?`${x}px`:"",right:"",bottom:"",...E,[v]:`-${4+P}px`},place:f}})):R_(t,e,{placement:"bottom",strategy:s,middleware:l}).then(({x:c,y:h,placement:f})=>({tooltipStyles:{left:`${c}px`,top:`${h}px`},tooltipArrowStyles:{},place:f}))},j_=(t,e)=>!("CSS"in window&&"supports"in window.CSS)||window.CSS.supports(t,e),L_=(t,e,n)=>{let r=null;const i=function(...s){const o=()=>{r=null};!r&&(t.apply(this,s),r=setTimeout(o,e))};return i.cancel=()=>{r&&(clearTimeout(r),r=null)},i},M_=t=>t!==null&&!Array.isArray(t)&&typeof t=="object",Bg=(t,e)=>{if(t===e)return!0;if(Array.isArray(t)&&Array.isArray(e))return t.length===e.length&&t.every((i,s)=>Bg(i,e[s]));if(Array.isArray(t)!==Array.isArray(e))return!1;if(!M_(t)||!M_(e))return t===e;const n=Object.keys(t),r=Object.keys(e);return n.length===r.length&&n.every(i=>Bg(t[i],e[i]))},tH=t=>{if(!(t instanceof HTMLElement||t instanceof SVGElement))return!1;const e=getComputedStyle(t);return["overflow","overflow-x","overflow-y"].some(n=>{const r=e.getPropertyValue(n);return r==="auto"||r==="scroll"})},V_=t=>{if(!t)return null;let e=t.parentElement;for(;e;){if(tH(e))return e;e=e.parentElement}return document.scrollingElement||document.documentElement},nH=typeof window<"u"?D.useLayoutEffect:D.useEffect,zn=t=>{t.current&&(clearTimeout(t.current),t.current=null)},rH="DEFAULT_TOOLTIP_ID",iH={anchorRefs:new Set,activeAnchor:{current:null},attach:()=>{},detach:()=>{},setActiveAnchor:()=>{}},sH=D.createContext({getTooltipData:()=>iH});function K4(t=rH){return D.useContext(sH).getTooltipData(t)}var jo={tooltip:"core-styles-module_tooltip__3vRRp",fixed:"core-styles-module_fixed__pcSol",arrow:"core-styles-module_arrow__cvMwQ",noArrow:"core-styles-module_noArrow__xock6",clickable:"core-styles-module_clickable__ZuTTB",show:"core-styles-module_show__Nt9eE",closing:"core-styles-module_closing__sGnxF"},Wp={tooltip:"styles-module_tooltip__mnnfp",arrow:"styles-module_arrow__K0L3T",dark:"styles-module_dark__xNqje",light:"styles-module_light__Z6W-X",success:"styles-module_success__A2AKt",warning:"styles-module_warning__SCK0X",error:"styles-module_error__JvumD",info:"styles-module_info__BWdHW"};const oH=({forwardRef:t,id:e,className:n,classNameArrow:r,variant:i="dark",anchorId:s,anchorSelect:o,place:a="top",offset:l=10,events:c=["hover"],openOnClick:h=!1,positionStrategy:f="absolute",middlewares:p,wrapper:g,delayShow:w=0,delayHide:k=0,float:C=!1,hidden:x=!1,noArrow:v=!1,clickable:E=!1,closeOnEsc:P=!1,closeOnScroll:j=!1,closeOnResize:M=!1,openEvents:b,closeEvents:S,globalCloseEvents:A,imperativeModeOnly:R,style:N,position:O,afterShow:I,afterHide:Q,disableTooltip:te,content:he,contentWrapperRef:se,isOpen:z,defaultIsOpen:U=!1,setIsOpen:G,activeAnchor:Z,setActiveAnchor:oe,border:Se,opacity:_t,arrowColor:pt,role:mt="tooltip"})=>{var st;const We=D.useRef(null),Ut=D.useRef(null),ot=D.useRef(null),bt=D.useRef(null),Et=D.useRef(null),[jn,Is]=D.useState({tooltipStyles:{},tooltipArrowStyles:{},place:a}),[Rt,ks]=D.useState(!1),[qr,Gr]=D.useState(!1),[Oe,Kr]=D.useState(null),Ii=D.useRef(!1),Cs=D.useRef(null),{anchorRefs:Qr,setActiveAnchor:ki}=K4(e),Yr=D.useRef(!1),[Me,tt]=D.useState([]),Ln=D.useRef(!1),Jr=h||c.includes("click"),yo=Jr||(b==null?void 0:b.click)||(b==null?void 0:b.dblclick)||(b==null?void 0:b.mousedown),Ci=b?{...b}:{mouseover:!0,focus:!0,mouseenter:!1,click:!1,dblclick:!1,mousedown:!1};!b&&Jr&&Object.assign(Ci,{mouseenter:!1,focus:!1,mouseover:!1,click:!0});const wn=S?{...S}:{mouseout:!0,blur:!0,mouseleave:!1,click:!1,dblclick:!1,mouseup:!1};!S&&Jr&&Object.assign(wn,{mouseleave:!1,blur:!1,mouseout:!1});const an=A?{...A}:{escape:P||!1,scroll:j||!1,resize:M||!1,clickOutsideAnchor:yo||!1};R&&(Object.assign(Ci,{mouseover:!1,focus:!1,mouseenter:!1,click:!1,dblclick:!1,mousedown:!1}),Object.assign(wn,{mouseout:!1,blur:!1,mouseleave:!1,click:!1,dblclick:!1,mouseup:!1}),Object.assign(an,{escape:!1,scroll:!1,resize:!1,clickOutsideAnchor:!1})),nH(()=>(Ln.current=!0,()=>{Ln.current=!1}),[]);const qe=H=>{Ln.current&&(H&&Gr(!0),setTimeout(()=>{Ln.current&&(G==null||G(H),z===void 0&&ks(H))},10))};D.useEffect(()=>{if(z===void 0)return()=>null;z&&Gr(!0);const H=setTimeout(()=>{ks(z)},10);return()=>{clearTimeout(H)}},[z]),D.useEffect(()=>{if(Rt!==Ii.current)if(zn(Et),Ii.current=Rt,Rt)I==null||I();else{const H=(ne=>{const re=ne.match(/^([\d.]+)(ms|s)$/);if(!re)return 0;const[,Ve,St]=re;return Number(Ve)*(St==="ms"?1:1e3)})(getComputedStyle(document.body).getPropertyValue("--rt-transition-show-delay"));Et.current=setTimeout(()=>{Gr(!1),Kr(null),Q==null||Q()},H+25)}},[Rt]);const Ai=H=>{Is(ne=>Bg(ne,H)?ne:H)},As=(H=w)=>{zn(ot),qr?qe(!0):ot.current=setTimeout(()=>{qe(!0)},H)},Ri=(H=k)=>{zn(bt),bt.current=setTimeout(()=>{Yr.current||qe(!1)},H)},Zr=H=>{var ne;if(!H)return;const re=(ne=H.currentTarget)!==null&&ne!==void 0?ne:H.target;if(!(re!=null&&re.isConnected))return oe(null),void ki({current:null});w?As():qe(!0),oe(re),ki({current:re}),zn(bt)},Xr=()=>{E?Ri(k||100):k?Ri():qe(!1),zn(ot)},ei=({x:H,y:ne})=>{var re;const Ve={getBoundingClientRect:()=>({x:H,y:ne,width:0,height:0,top:ne,left:H,right:H,bottom:ne})};O_({place:(re=Oe==null?void 0:Oe.place)!==null&&re!==void 0?re:a,offset:l,elementReference:Ve,tooltipReference:We.current,tooltipArrowReference:Ut.current,strategy:f,middlewares:p,border:Se}).then(St=>{Ai(St)})},Mn=H=>{if(!H)return;const ne=H,re={x:ne.clientX,y:ne.clientY};ei(re),Cs.current=re},ti=H=>{var ne;if(!Rt)return;const re=H.target;re.isConnected&&(!((ne=We.current)===null||ne===void 0)&&ne.contains(re)||[document.querySelector(`[id='${s}']`),...Me].some(Ve=>Ve==null?void 0:Ve.contains(re))||(qe(!1),zn(ot)))},Pi=L_(Zr,50),je=L_(Xr,50),en=H=>{je.cancel(),Pi(H)},X=()=>{Pi.cancel(),je()},me=D.useCallback(()=>{var H,ne;const re=(H=Oe==null?void 0:Oe.position)!==null&&H!==void 0?H:O;re?ei(re):C?Cs.current&&ei(Cs.current):Z!=null&&Z.isConnected&&O_({place:(ne=Oe==null?void 0:Oe.place)!==null&&ne!==void 0?ne:a,offset:l,elementReference:Z,tooltipReference:We.current,tooltipArrowReference:Ut.current,strategy:f,middlewares:p,border:Se}).then(Ve=>{Ln.current&&Ai(Ve)})},[Rt,Z,he,N,a,Oe==null?void 0:Oe.place,l,f,O,Oe==null?void 0:Oe.position,C]);D.useEffect(()=>{var H,ne;const re=new Set(Qr);Me.forEach(Te=>{te!=null&&te(Te)||re.add({current:Te})});const Ve=document.querySelector(`[id='${s}']`);Ve&&!(te!=null&&te(Ve))&&re.add({current:Ve});const St=()=>{qe(!1)},Vn=V_(Z),Pt=V_(We.current);an.scroll&&(window.addEventListener("scroll",St),Vn==null||Vn.addEventListener("scroll",St),Pt==null||Pt.addEventListener("scroll",St));let Nt=null;an.resize?window.addEventListener("resize",St):Z&&We.current&&(Nt=GB(Z,We.current,me,{ancestorResize:!0,elementResize:!0,layoutShift:!0}));const ln=Te=>{Te.key==="Escape"&&qe(!1)};an.escape&&window.addEventListener("keydown",ln),an.clickOutsideAnchor&&window.addEventListener("click",ti);const Pe=[],ni=Te=>!!(Te!=null&&Te.target&&(Z!=null&&Z.contains(Te.target))),Ya=Te=>{Rt&&ni(Te)||Zr(Te)},vo=Te=>{Rt&&ni(Te)&&Xr()},Zn=["mouseover","mouseout","mouseenter","mouseleave","focus","blur"],Ja=["click","dblclick","mousedown","mouseup"];Object.entries(Ci).forEach(([Te,Fn])=>{Fn&&(Zn.includes(Te)?Pe.push({event:Te,listener:en}):Ja.includes(Te)&&Pe.push({event:Te,listener:Ya}))}),Object.entries(wn).forEach(([Te,Fn])=>{Fn&&(Zn.includes(Te)?Pe.push({event:Te,listener:X}):Ja.includes(Te)&&Pe.push({event:Te,listener:vo}))}),C&&Pe.push({event:"pointermove",listener:Mn});const Za=()=>{Yr.current=!0},xo=()=>{Yr.current=!1,Xr()},wo=E&&(wn.mouseout||wn.mouseleave);return wo&&((H=We.current)===null||H===void 0||H.addEventListener("mouseover",Za),(ne=We.current)===null||ne===void 0||ne.addEventListener("mouseout",xo)),Pe.forEach(({event:Te,listener:Fn})=>{re.forEach(Xa=>{var wr;(wr=Xa.current)===null||wr===void 0||wr.addEventListener(Te,Fn)})}),()=>{var Te,Fn;an.scroll&&(window.removeEventListener("scroll",St),Vn==null||Vn.removeEventListener("scroll",St),Pt==null||Pt.removeEventListener("scroll",St)),an.resize?window.removeEventListener("resize",St):Nt==null||Nt(),an.clickOutsideAnchor&&window.removeEventListener("click",ti),an.escape&&window.removeEventListener("keydown",ln),wo&&((Te=We.current)===null||Te===void 0||Te.removeEventListener("mouseover",Za),(Fn=We.current)===null||Fn===void 0||Fn.removeEventListener("mouseout",xo)),Pe.forEach(({event:Xa,listener:wr})=>{re.forEach(Xu=>{var Rs;(Rs=Xu.current)===null||Rs===void 0||Rs.removeEventListener(Xa,wr)})})}},[Z,me,qr,Qr,Me,b,S,A,Jr,w,k]),D.useEffect(()=>{var H,ne;let re=(ne=(H=Oe==null?void 0:Oe.anchorSelect)!==null&&H!==void 0?H:o)!==null&&ne!==void 0?ne:"";!re&&e&&(re=`[data-tooltip-id='${e.replace(/'/g,"\\'")}']`);const Ve=new MutationObserver(St=>{const Vn=[],Pt=[];St.forEach(Nt=>{if(Nt.type==="attributes"&&Nt.attributeName==="data-tooltip-id"&&(Nt.target.getAttribute("data-tooltip-id")===e?Vn.push(Nt.target):Nt.oldValue===e&&Pt.push(Nt.target)),Nt.type==="childList"){if(Z){const ln=[...Nt.removedNodes].filter(Pe=>Pe.nodeType===1);if(re)try{Pt.push(...ln.filter(Pe=>Pe.matches(re))),Pt.push(...ln.flatMap(Pe=>[...Pe.querySelectorAll(re)]))}catch{}ln.some(Pe=>{var ni;return!!(!((ni=Pe==null?void 0:Pe.contains)===null||ni===void 0)&&ni.call(Pe,Z))&&(Gr(!1),qe(!1),oe(null),zn(ot),zn(bt),!0)})}if(re)try{const ln=[...Nt.addedNodes].filter(Pe=>Pe.nodeType===1);Vn.push(...ln.filter(Pe=>Pe.matches(re))),Vn.push(...ln.flatMap(Pe=>[...Pe.querySelectorAll(re)]))}catch{}}}),(Vn.length||Pt.length)&&tt(Nt=>[...Nt.filter(ln=>!Pt.includes(ln)),...Vn])});return Ve.observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["data-tooltip-id"],attributeOldValue:!0}),()=>{Ve.disconnect()}},[e,o,Oe==null?void 0:Oe.anchorSelect,Z]),D.useEffect(()=>{me()},[me]),D.useEffect(()=>{if(!(se!=null&&se.current))return()=>null;const H=new ResizeObserver(()=>{setTimeout(()=>me())});return H.observe(se.current),()=>{H.disconnect()}},[he,se==null?void 0:se.current]),D.useEffect(()=>{var H;const ne=document.querySelector(`[id='${s}']`),re=[...Me,ne];Z&&re.includes(Z)||oe((H=Me[0])!==null&&H!==void 0?H:ne)},[s,Me,Z]),D.useEffect(()=>(U&&qe(!0),()=>{zn(ot),zn(bt)}),[]),D.useEffect(()=>{var H;let ne=(H=Oe==null?void 0:Oe.anchorSelect)!==null&&H!==void 0?H:o;if(!ne&&e&&(ne=`[data-tooltip-id='${e.replace(/'/g,"\\'")}']`),ne)try{const re=Array.from(document.querySelectorAll(ne));tt(re)}catch{tt([])}},[e,o,Oe==null?void 0:Oe.anchorSelect]),D.useEffect(()=>{ot.current&&(zn(ot),As(w))},[w]);const gt=(st=Oe==null?void 0:Oe.content)!==null&&st!==void 0?st:he,xr=Rt&&Object.keys(jn.tooltipStyles).length>0;return D.useImperativeHandle(t,()=>({open:H=>{if(H!=null&&H.anchorSelect)try{document.querySelector(H.anchorSelect)}catch{return void console.warn(`[react-tooltip] "${H.anchorSelect}" is not a valid CSS selector`)}Kr(H??null),H!=null&&H.delay?As(H.delay):qe(!0)},close:H=>{H!=null&&H.delay?Ri(H.delay):qe(!1)},activeAnchor:Z,place:jn.place,isOpen:!!(qr&&!x&&gt&&xr)})),qr&&!x&&gt?ve.createElement(g,{id:e,role:mt,className:Ug("react-tooltip",jo.tooltip,Wp.tooltip,Wp[i],n,`react-tooltip__place-${jn.place}`,jo[xr?"show":"closing"],xr?"react-tooltip__show":"react-tooltip__closing",f==="fixed"&&jo.fixed,E&&jo.clickable),onTransitionEnd:H=>{zn(Et),Rt||H.propertyName!=="opacity"||(Gr(!1),Kr(null),Q==null||Q())},style:{...N,...jn.tooltipStyles,opacity:_t!==void 0&&xr?_t:void 0},ref:We},gt,ve.createElement(g,{className:Ug("react-tooltip-arrow",jo.arrow,Wp.arrow,r,v&&jo.noArrow),style:{...jn.tooltipArrowStyles,background:pt?`linear-gradient(to right bottom, transparent 50%, ${pt} 50%)`:void 0},ref:Ut})):null},aH=({content:t})=>ve.createElement("span",{dangerouslySetInnerHTML:{__html:t}}),Lo=ve.forwardRef(({id:t,anchorId:e,anchorSelect:n,content:r,html:i,render:s,className:o,classNameArrow:a,variant:l="dark",place:c="top",offset:h=10,wrapper:f="div",children:p=null,events:g=["hover"],openOnClick:w=!1,positionStrategy:k="absolute",middlewares:C,delayShow:x=0,delayHide:v=0,float:E=!1,hidden:P=!1,noArrow:j=!1,clickable:M=!1,closeOnEsc:b=!1,closeOnScroll:S=!1,closeOnResize:A=!1,openEvents:R,closeEvents:N,globalCloseEvents:O,imperativeModeOnly:I=!1,style:Q,position:te,isOpen:he,defaultIsOpen:se=!1,disableStyleInjection:z=!1,border:U,opacity:G,arrowColor:Z,setIsOpen:oe,afterShow:Se,afterHide:_t,disableTooltip:pt,role:mt="tooltip"},st)=>{const[We,Ut]=D.useState(r),[ot,bt]=D.useState(i),[Et,jn]=D.useState(c),[Is,Rt]=D.useState(l),[ks,qr]=D.useState(h),[Gr,Oe]=D.useState(x),[Kr,Ii]=D.useState(v),[Cs,Qr]=D.useState(E),[ki,Yr]=D.useState(P),[Me,tt]=D.useState(f),[Ln,Jr]=D.useState(g),[yo,Ci]=D.useState(k),[wn,an]=D.useState(null),[qe,Ai]=D.useState(null),As=D.useRef(z),{anchorRefs:Ri,activeAnchor:Zr}=K4(t),Xr=je=>je==null?void 0:je.getAttributeNames().reduce((en,X)=>{var me;return X.startsWith("data-tooltip-")&&(en[X.replace(/^data-tooltip-/,"")]=(me=je==null?void 0:je.getAttribute(X))!==null&&me!==void 0?me:null),en},{}),ei=je=>{const en={place:X=>{var me;jn((me=X)!==null&&me!==void 0?me:c)},content:X=>{Ut(X??r)},html:X=>{bt(X??i)},variant:X=>{var me;Rt((me=X)!==null&&me!==void 0?me:l)},offset:X=>{qr(X===null?h:Number(X))},wrapper:X=>{var me;tt((me=X)!==null&&me!==void 0?me:f)},events:X=>{const me=X==null?void 0:X.split(" ");Jr(me??g)},"position-strategy":X=>{var me;Ci((me=X)!==null&&me!==void 0?me:k)},"delay-show":X=>{Oe(X===null?x:Number(X))},"delay-hide":X=>{Ii(X===null?v:Number(X))},float:X=>{Qr(X===null?E:X==="true")},hidden:X=>{Yr(X===null?P:X==="true")},"class-name":X=>{an(X)}};Object.values(en).forEach(X=>X(null)),Object.entries(je).forEach(([X,me])=>{var gt;(gt=en[X])===null||gt===void 0||gt.call(en,me)})};D.useEffect(()=>{Ut(r)},[r]),D.useEffect(()=>{bt(i)},[i]),D.useEffect(()=>{jn(c)},[c]),D.useEffect(()=>{Rt(l)},[l]),D.useEffect(()=>{qr(h)},[h]),D.useEffect(()=>{Oe(x)},[x]),D.useEffect(()=>{Ii(v)},[v]),D.useEffect(()=>{Qr(E)},[E]),D.useEffect(()=>{Yr(P)},[P]),D.useEffect(()=>{Ci(k)},[k]),D.useEffect(()=>{As.current!==z&&console.warn("[react-tooltip] Do not change `disableStyleInjection` dynamically.")},[z]),D.useEffect(()=>{typeof window<"u"&&window.dispatchEvent(new CustomEvent("react-tooltip-inject-styles",{detail:{disableCore:z==="core",disableBase:z}}))},[]),D.useEffect(()=>{var je;const en=new Set(Ri);let X=n;if(!X&&t&&(X=`[data-tooltip-id='${t.replace(/'/g,"\\'")}']`),X)try{document.querySelectorAll(X).forEach(ne=>{en.add({current:ne})})}catch{console.warn(`[react-tooltip] "${X}" is not a valid CSS selector`)}const me=document.querySelector(`[id='${e}']`);if(me&&en.add({current:me}),!en.size)return()=>null;const gt=(je=qe??me)!==null&&je!==void 0?je:Zr.current,xr=new MutationObserver(ne=>{ne.forEach(re=>{var Ve;if(!gt||re.type!=="attributes"||!(!((Ve=re.attributeName)===null||Ve===void 0)&&Ve.startsWith("data-tooltip-")))return;const St=Xr(gt);ei(St)})}),H={attributes:!0,childList:!1,subtree:!1};if(gt){const ne=Xr(gt);ei(ne),xr.observe(gt,H)}return()=>{xr.disconnect()}},[Ri,Zr,qe,e,n]),D.useEffect(()=>{Q!=null&&Q.border&&console.warn("[react-tooltip] Do not set `style.border`. Use `border` prop instead."),U&&!j_("border",`${U}`)&&console.warn(`[react-tooltip] "${U}" is not a valid \`border\`.`),Q!=null&&Q.opacity&&console.warn("[react-tooltip] Do not set `style.opacity`. Use `opacity` prop instead."),G&&!j_("opacity",`${G}`)&&console.warn(`[react-tooltip] "${G}" is not a valid \`opacity\`.`)},[]);let Mn=p;const ti=D.useRef(null);if(s){const je=s({content:(qe==null?void 0:qe.getAttribute("data-tooltip-content"))||We||null,activeAnchor:qe});Mn=je?ve.createElement("div",{ref:ti,className:"react-tooltip-content-wrapper"},je):null}else We&&(Mn=We);ot&&(Mn=ve.createElement(aH,{content:ot}));const Pi={forwardRef:st,id:t,anchorId:e,anchorSelect:n,className:Ug(o,wn),classNameArrow:a,content:Mn,contentWrapperRef:ti,place:Et,variant:Is,offset:ks,wrapper:Me,events:Ln,openOnClick:w,positionStrategy:yo,middlewares:C,delayShow:Gr,delayHide:Kr,float:Cs,hidden:ki,noArrow:j,clickable:M,closeOnEsc:b,closeOnScroll:S,closeOnResize:A,openEvents:R,closeEvents:N,globalCloseEvents:O,imperativeModeOnly:I,style:Q,position:te,isOpen:he,defaultIsOpen:se,border:U,opacity:G,arrowColor:Z,setIsOpen:oe,afterShow:Se,afterHide:_t,disableTooltip:pt,activeAnchor:qe,setActiveAnchor:je=>Ai(je),role:mt};return ve.createElement(oH,{...Pi})});typeof window<"u"&&window.addEventListener("react-tooltip-inject-styles",t=>{t.detail.disableCore||D_({css:":root{--rt-color-white:#fff;--rt-color-dark:#222;--rt-color-success:#8dc572;--rt-color-error:#be6464;--rt-color-warning:#f0ad4e;--rt-color-info:#337ab7;--rt-opacity:0.9;--rt-transition-show-delay:0.15s;--rt-transition-closing-delay:0.15s}.core-styles-module_tooltip__3vRRp{position:absolute;top:0;left:0;pointer-events:none;opacity:0;will-change:opacity}.core-styles-module_fixed__pcSol{position:fixed}.core-styles-module_arrow__cvMwQ{position:absolute;background:inherit}.core-styles-module_noArrow__xock6{display:none}.core-styles-module_clickable__ZuTTB{pointer-events:auto}.core-styles-module_show__Nt9eE{opacity:var(--rt-opacity);transition:opacity var(--rt-transition-show-delay)ease-out}.core-styles-module_closing__sGnxF{opacity:0;transition:opacity var(--rt-transition-closing-delay)ease-in}",type:"core"}),t.detail.disableBase||D_({css:`
.styles-module_tooltip__mnnfp{padding:8px 16px;border-radius:3px;font-size:90%;width:max-content}.styles-module_arrow__K0L3T{width:8px;height:8px}[class*='react-tooltip__place-top']>.styles-module_arrow__K0L3T{transform:rotate(45deg)}[class*='react-tooltip__place-right']>.styles-module_arrow__K0L3T{transform:rotate(135deg)}[class*='react-tooltip__place-bottom']>.styles-module_arrow__K0L3T{transform:rotate(225deg)}[class*='react-tooltip__place-left']>.styles-module_arrow__K0L3T{transform:rotate(315deg)}.styles-module_dark__xNqje{background:var(--rt-color-dark);color:var(--rt-color-white)}.styles-module_light__Z6W-X{background-color:var(--rt-color-white);color:var(--rt-color-dark)}.styles-module_success__A2AKt{background-color:var(--rt-color-success);color:var(--rt-color-white)}.styles-module_warning__SCK0X{background-color:var(--rt-color-warning);color:var(--rt-color-white)}.styles-module_error__JvumD{background-color:var(--rt-color-error);color:var(--rt-color-white)}.styles-module_info__BWdHW{background-color:var(--rt-color-info);color:var(--rt-color-white)}`,type:"base"})});const F_=_.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`,$_=_.h1`
  color: white;
  margin-bottom: 30px;
  font-size: 28px;
  font-weight: 600;
`,lH=_.div`
  display: flex;
  gap: 20px;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 12px;
  }
`,uH=_.div`
  width: 250px;
  background: #1a1a1a;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid rgba(255,255,255,0.1);
  @media (max-width: 900px) {
    width: 100%;
    margin-bottom: 12px;
  }
`,cH=_.div`
  flex: 1;
  background: #1a1a1a;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid rgba(255,255,255,0.1);
  @media (max-width: 900px) {
    width: 100%;
    padding: 12px;
  }
`,dH=_.div`
  margin-bottom: 20px;
`;_.div`
  display: flex;
  align-items: center;
  padding: 10px;
  color: white;
  cursor: pointer;
  border-radius: 4px;
  margin-bottom: 5px;
  &:hover {
    background: #2a2a2a;
  }
  &.active {
    background: #2a2a2a;
    border-left: 3px solid #00bcd4;
  }
`;const hH=_.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`,fH=_.div`
  background: #2a2a2a;
  padding: 20px;
  border-radius: 8px;
  color: white;
  border: 1px solid rgba(255,255,255,0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  }
`,qp=_.button`
  background: linear-gradient(90deg, #00bcd4 0%, #009688 100%);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(90deg, #00acc1 0%, #00897b 100%);
    transform: translateY(-1px);
  }

  &:disabled {
    background: #666;
    cursor: not-allowed;
  }
`,oi=_.input`
  background: #2a2a2a;
  border: 1px solid rgba(255,255,255,0.1);
  padding: 10px;
  border-radius: 6px;
  color: white;
  width: 100%;
  margin-bottom: 15px;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #00bcd4;
  }
`,pH=_.textarea`
  background: #2a2a2a;
  border: 1px solid rgba(255,255,255,0.1);
  padding: 10px;
  border-radius: 6px;
  color: white;
  width: 100%;
  min-height: 100px;
  margin-bottom: 15px;
  font-size: 14px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #00bcd4;
  }
`,mH=_.select`
  background: #2a2a2a;
  border: 1px solid rgba(255,255,255,0.1);
  padding: 10px;
  border-radius: 6px;
  color: white;
  width: 100%;
  margin-bottom: 15px;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #00bcd4;
  }
`,gH=_.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  margin-bottom: 20px;
`,Er=_.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`,Sr=_.label`
  color: #888;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,yH=_.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 30px;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`,Gp=_.div`
  background: #2a2a2a;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  border: 1px solid rgba(255,255,255,0.1);

  h3 {
    color: #888;
    font-size: 14px;
    margin-bottom: 10px;
  }

  p {
    color: white;
    font-size: 24px;
    font-weight: 600;
  }
`,Mo=_.span`
  display: inline-block;
  margin-left: 8px;
  color: #00bcd4;
  font-size: 1.1em;
  cursor: pointer;
`,vH=()=>{const{t}=ft(),[e,n]=D.useState([]),[r,i]=D.useState([]),[s,o]=D.useState(null),[a,l]=D.useState(null),[c,h]=D.useState(""),[f,p]=D.useState(!1),[g,w]=D.useState({title:"",pair:"",type:"buy",entryPrice:"",exitPrice:"",lotSize:"",profitLoss:"",strategy:"",notes:"",date:new Date().toISOString().split("T")[0]}),[k,C]=D.useState(""),[x,v]=D.useState({totalTrades:0,winRate:0,totalProfit:0}),E=ve.useMemo(()=>{try{return JSON.parse(localStorage.getItem("nvuUserData"))||null}catch{return null}},[]),P=E==null?void 0:E.id;D.useEffect(()=>{P&&(M(),b())},[s,P]),D.useEffect(()=>{j()},[r]);const j=()=>{const I=r.length,Q=r.filter(he=>parseFloat(he.profitLoss)>0).length,te=r.reduce((he,se)=>he+parseFloat(se.profitLoss||0),0);v({totalTrades:I,winRate:I>0?Q/I*100:0,totalProfit:te})},M=async()=>{if(!P)return;const I=Ar(Mt(br,"folders"),No("userId","==",P)),te=(await zc(I)).docs.map(he=>({id:he.id,...he.data()}));n(te)},b=async()=>{try{if(!P)return;let I;try{s?I=Ar(Mt(br,"notes"),No("userId","==",P),No("folderId","==",s),lo("date","desc")):I=Ar(Mt(br,"notes"),No("userId","==",P),lo("date","desc"));const te=(await zc(I)).docs.map(he=>({id:he.id,...he.data()}));i(te)}catch(Q){if(Q.code==="failed-precondition"){console.warn("Using fallback query due to missing indexes");const te=Ar(Mt(br,"notes"),No("userId","==",P));let se=(await zc(te)).docs.map(U=>({id:U.id,...U.data()}));s&&(se=se.filter(U=>U.folderId===s)),se.sort((U,G)=>new Date(G.date)-new Date(U.date)),i(se);const z={simple:"https://console.firebase.google.com/v1/r/project/nvu-live/firestore/indexes?create_composite=CkZwcm9qZWN0cy9udnUtbGl2ZS9kYXRhYmFzZXMvKGRlZmF1bHQpL2NvbGxlY3Rpb25Hcm91cHMvbm90ZXMvaW5kZXhlcy9fEAEaCgoGdXNlcklkEAEaCAoEZGF0ZRACGgwKCF9fbmFtZV9fEAI",folder:"https://console.firebase.google.com/v1/r/project/nvu-live/firestore/indexes?create_composite=CkZwcm9qZWN0cy9udnUtbGl2ZS9kYXRhYmFzZXMvKGRlZmF1bHQpL2NvbGxlY3Rpb25Hcm91cHMvbm90ZXMvaW5kZXhlcy9fEAEaDAoIZm9sZGVySWQQARoKCgZ1c2VySWQQARoICgRkYXRlEAIaDAoIX19uYW1lX18QAg"};console.log("Please create the following indexes in Firebase Console:"),console.log("1. For simple queries:",z.simple),console.log("2. For folder queries:",z.folder)}else throw Q}}catch(I){console.error("Error loading notes:",I),alert("Error loading trades. Please refresh the page.")}},S=async()=>{!k.trim()||!P||(await Nu(Mt(br,"folders"),{name:k,userId:P,createdAt:new Date}),C(""),M())},A=async()=>{try{if(!P){alert("Please log in to create trades");return}if(!s){alert("Please select a folder first to organize your trade");return}if(!g.title.trim()){alert("Please enter a title for your trade");return}if(!g.pair.trim()){alert("Please enter a trading pair (e.g., EUR/USD)");return}const I={...g,folderId:s,userId:P,createdAt:new Date,entryPrice:parseFloat(g.entryPrice)||0,exitPrice:parseFloat(g.exitPrice)||0,lotSize:parseFloat(g.lotSize)||0,profitLoss:parseFloat(g.profitLoss)||0},Q=await Nu(Mt(br,"notes"),I);console.log("Trade saved with ID:",Q.id),w({title:"",pair:"",type:"buy",entryPrice:"",exitPrice:"",lotSize:"",profitLoss:"",strategy:"",notes:"",date:new Date().toISOString().split("T")[0]}),await b(),alert("Trade saved successfully!")}catch(I){console.error("Error saving trade:",I),alert("Error saving trade. Please try again.")}},R=async I=>{await yd(Yl(br,"notes",I)),b()},N=async(I,Q)=>{try{const te=Yl(br,"folders",I);await JF(te,{name:Q}),n(e.map(he=>he.id===I?{...he,name:Q}:he)),l(null)}catch(te){console.error("Error editing folder:",te)}},O=async I=>{if(window.confirm("¿Estás seguro de que quieres eliminar esta carpeta? Se eliminarán todas las notas dentro de ella."))try{const Q=Ar(Mt(br,"notes"),No("folderId","==",I)),he=(await zc(Q)).docs.map(se=>yd(se.ref));await Promise.all(he),await yd(Yl(br,"folders",I)),n(e.filter(se=>se.id!==I)),s===I&&o(null)}catch(Q){console.error("Error deleting folder:",Q)}};return P?d.jsxs(F_,{children:[d.jsx($_,{children:t("journal.title","My Trading Journal")}),d.jsxs(yH,{children:[d.jsxs(Gp,{children:[d.jsxs("h3",{children:["Total Trades",d.jsx(Mo,{"data-tooltip-id":"tt-total-trades",children:"ⓘ"}),d.jsx(Lo,{id:"tt-total-trades",place:"top",children:"Número total de operaciones registradas en tu diario."})]}),d.jsx("p",{children:x.totalTrades})]}),d.jsxs(Gp,{children:[d.jsxs("h3",{children:["Win Rate",d.jsx(Mo,{"data-tooltip-id":"tt-win-rate",children:"ⓘ"}),d.jsx(Lo,{id:"tt-win-rate",place:"top",children:"Porcentaje de operaciones ganadoras sobre el total."})]}),d.jsxs("p",{children:[x.winRate.toFixed(1),"%"]})]}),d.jsxs(Gp,{children:[d.jsxs("h3",{children:["Total Profit/Loss",d.jsx(Mo,{"data-tooltip-id":"tt-profit-loss",children:"ⓘ"}),d.jsx(Lo,{id:"tt-profit-loss",place:"top",children:"Suma total de ganancias y pérdidas de todas tus operaciones."})]}),d.jsxs("p",{style:{color:x.totalProfit>=0?"#4caf50":"#f44336"},children:["$",x.totalProfit.toFixed(2)]})]})]}),d.jsxs(lH,{children:[d.jsxs(uH,{children:[d.jsxs("h3",{children:[t("journal.folders","Folders"),d.jsx(Mo,{"data-tooltip-id":"tt-folders",children:"ⓘ"}),d.jsx(Lo,{id:"tt-folders",place:"top",children:"Organiza tus operaciones en carpetas temáticas o por estrategia."})]}),d.jsx(oi,{placeholder:t("journal.newFolder","New folder name"),value:k,onChange:I=>C(I.target.value)}),d.jsxs(qp,{onClick:S,children:[d.jsx(xx,{})," ",t("journal.createFolder","Create Folder")]}),d.jsx(dH,{children:e.map(I=>d.jsx("div",{className:"folder-item",children:a===I.id?d.jsxs("div",{className:"edit-folder",children:[d.jsx("input",{type:"text",value:c,onChange:Q=>h(Q.target.value),onKeyPress:Q=>{Q.key==="Enter"&&N(I.id,c)}}),d.jsx("button",{onClick:()=>N(I.id,c),children:"✓"}),d.jsx("button",{onClick:()=>l(null),children:"✕"})]}):d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:`folder ${s===I.id?"selected":""}`,onClick:()=>o(I.id),children:[d.jsx(o3,{style:{marginRight:"8px"}}),I.name]}),d.jsxs("div",{className:"folder-actions",children:[d.jsx("button",{onClick:()=>{l(I.id),h(I.name)},children:"✎"}),d.jsx("button",{onClick:()=>O(I.id),children:"🗑"})]})]})},I.id))})]}),d.jsxs(cH,{children:[d.jsxs("div",{className:"form-header",children:[d.jsxs("h3",{children:[t("journal.newTrade","New Trade"),d.jsx(Mo,{"data-tooltip-id":"tt-new-trade",children:"ⓘ"}),d.jsx(Lo,{id:"tt-new-trade",place:"top",children:"Completa este formulario para registrar una nueva operación en tu diario."})]}),d.jsx("button",{className:"minimize-button",onClick:()=>p(!f),children:f?"▼":"▲"})]}),!f&&d.jsxs(d.Fragment,{children:[d.jsxs(gH,{children:[d.jsxs(Er,{children:[d.jsx(Sr,{children:"Date"}),d.jsx(oi,{type:"date",value:g.date,onChange:I=>w({...g,date:I.target.value})})]}),d.jsxs(Er,{children:[d.jsx(Sr,{children:"Title"}),d.jsx(oi,{placeholder:"Trade title",value:g.title,onChange:I=>w({...g,title:I.target.value})})]}),d.jsxs(Er,{children:[d.jsx(Sr,{children:"Pair"}),d.jsx(oi,{placeholder:"EUR/USD",value:g.pair,onChange:I=>w({...g,pair:I.target.value})})]}),d.jsxs(Er,{children:[d.jsx(Sr,{children:"Type"}),d.jsxs(mH,{value:g.type,onChange:I=>w({...g,type:I.target.value}),children:[d.jsx("option",{value:"buy",children:"Buy"}),d.jsx("option",{value:"sell",children:"Sell"})]})]}),d.jsxs(Er,{children:[d.jsx(Sr,{children:"Entry Price"}),d.jsx(oi,{type:"number",step:"any",placeholder:"1.2345",value:g.entryPrice,onChange:I=>w({...g,entryPrice:I.target.value})})]}),d.jsxs(Er,{children:[d.jsx(Sr,{children:"Exit Price"}),d.jsx(oi,{type:"number",step:"any",placeholder:"1.2345",value:g.exitPrice,onChange:I=>w({...g,exitPrice:I.target.value})})]}),d.jsxs(Er,{children:[d.jsx(Sr,{children:"Lot Size"}),d.jsx(oi,{type:"number",step:"any",placeholder:"0.1",value:g.lotSize,onChange:I=>w({...g,lotSize:I.target.value})})]}),d.jsxs(Er,{children:[d.jsx(Sr,{children:"Profit/Loss"}),d.jsx(oi,{type:"number",step:"any",placeholder:"100",value:g.profitLoss,onChange:I=>w({...g,profitLoss:I.target.value})})]})]}),d.jsxs(Er,{children:[d.jsx(Sr,{children:"Strategy"}),d.jsx(oi,{placeholder:"Strategy used",value:g.strategy,onChange:I=>w({...g,strategy:I.target.value})})]}),d.jsxs(Er,{children:[d.jsx(Sr,{children:"Notes"}),d.jsx(pH,{placeholder:"Additional notes about the trade...",value:g.notes,onChange:I=>w({...g,notes:I.target.value})})]}),d.jsxs(qp,{onClick:A,style:{opacity:s?1:.7,cursor:s?"pointer":"not-allowed"},children:[d.jsx(xx,{})," ",t("journal.createTrade","Create Trade")]})]}),d.jsxs("h3",{style:{marginTop:"30px"},children:[t("journal.trades","Trades"),d.jsx(Mo,{"data-tooltip-id":"tt-trades-list",children:"ⓘ"}),d.jsx(Lo,{id:"tt-trades-list",place:"top",children:"Aquí verás el historial de todas tus operaciones guardadas."})]}),d.jsx(hH,{children:r.map(I=>d.jsxs(fH,{children:[d.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"10px"},children:[d.jsx("h4",{children:I.title}),d.jsx("span",{style:{color:I.type==="buy"?"#4caf50":"#f44336",fontWeight:"500"},children:I.type.toUpperCase()})]}),d.jsx("p",{style:{color:"#888",fontSize:"14px",marginBottom:"10px"},children:new Date(I.date).toLocaleDateString()}),d.jsxs("div",{style:{marginBottom:"10px"},children:[d.jsx("strong",{children:"Pair:"})," ",I.pair]}),d.jsxs("div",{style:{marginBottom:"10px"},children:[d.jsx("strong",{children:"Entry:"})," ",I.entryPrice]}),d.jsxs("div",{style:{marginBottom:"10px"},children:[d.jsx("strong",{children:"Exit:"})," ",I.exitPrice]}),d.jsxs("div",{style:{marginBottom:"10px"},children:[d.jsx("strong",{children:"Lot Size:"})," ",I.lotSize]}),d.jsxs("div",{style:{marginBottom:"10px",color:parseFloat(I.profitLoss)>=0?"#4caf50":"#f44336"},children:[d.jsx("strong",{children:"P/L:"})," $",I.profitLoss]}),I.strategy&&d.jsxs("div",{style:{marginBottom:"10px"},children:[d.jsx("strong",{children:"Strategy:"})," ",I.strategy]}),I.notes&&d.jsxs("div",{style:{marginBottom:"10px"},children:[d.jsx("strong",{children:"Notes:"})," ",I.notes]}),d.jsxs(qp,{onClick:()=>R(I.id),style:{background:"#f44336",marginTop:"10px",padding:"8px 16px"},children:[d.jsx(h3,{})," Delete"]})]},I.id))})]})]})]}):d.jsxs(F_,{children:[d.jsx($_,{children:t("journal.title","My Trading Journal")}),d.jsx("p",{style:{color:"white"},children:t("journal.loginRequired","Please log in to use your trading journal.")})]})},xH=`
  .folder-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
    padding: 8px;
    border-radius: 4px;
    transition: all 0.2s ease;
  }

  .folder {
    display: flex;
    align-items: center;
    padding: 8px 12px;
    border-radius: 4px;
    cursor: pointer;
    flex: 1;
    transition: all 0.2s ease;
  }

  .folder:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  .folder.selected {
    background: #00bcd4;
    color: white;
  }

  .folder-actions {
    display: flex;
    gap: 8px;
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  .folder-item:hover .folder-actions {
    opacity: 1;
  }

  .folder-actions button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 16px;
    padding: 4px;
    color: #666;
  }

  .folder-actions button:hover {
    color: #333;
  }

  .edit-folder {
    display: flex;
    gap: 8px;
    align-items: center;
    width: 100%;
  }

  .edit-folder input {
    padding: 4px 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    flex: 1;
  }

  .edit-folder button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 16px;
    padding: 4px;
  }

  .form-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  .minimize-button {
    background: none;
    border: none;
    color: #666;
    cursor: pointer;
    font-size: 16px;
    padding: 4px 8px;
    border-radius: 4px;
  }

  .minimize-button:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`,Q4=document.createElement("style");Q4.innerText=xH;document.head.appendChild(Q4);const wH=_.div`
  padding: 0;
  max-width: 100%;
  margin: 0 auto;
  min-height: 100vh;
  background: #000;
`,_H=_.div`
  position: relative;
  width: 100%;
  height: 250px;
  background: url('/images/beyondnewlogo.jpg') center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0;
  padding: 0;
  @media (max-width: 768px) {
    height: 90px;
  }
`;_.button`
  position: absolute;
  top: 20px;
  left: 20px;
  background: rgba(0,0,0,0.5);
  border: none;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0,0,0,0.8);
  }
`;_.div`
  text-align: center;
  color: white;
  padding: 20px;
  max-width: 800px;
`;_.h1`
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 15px;
  background: linear-gradient(90deg, #00bcd4 0%, #009688 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;_.p`
  font-size: 18px;
  max-width: 600px;
  margin: 0 auto;
  color: #ccc;
  line-height: 1.6;
`;const bH=_.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 0px;
  padding-right: 0;
  @media (max-width: 768px) {
    padding: 0 12px;
  }
`;_.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 40px;
`;_.div`
  background: #1a1a1a;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  border: 1px solid rgba(255,255,255,0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(0,150,136,0.3);
  }

  h3 {
    color: #888;
    font-size: 14px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  p {
    color: white;
    font-size: 24px;
    font-weight: 600;
  }
`;const EH=_.h2`
  color: white;
  font-size: 24px;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid rgba(0,150,136,0.2);
  padding-top: 24px;
  @media (max-width: 768px) {
    padding-top: 16px;
  }
`,SH=_.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
`,Y4=_.div`
  background: #1a1a1a;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid rgba(255,255,255,0.1);
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 20px rgba(0,0,0,0.3);
    border-color: rgba(0,150,136,0.3);
  }
`,TH=_.div`
  position: relative;
  padding-top: 56.25%;
  background: #000;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.3);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::after {
    opacity: 1;
  }
`,IH=_.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 48px;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 2;

  ${Y4}:hover & {
    opacity: 1;
  }
`,kH=_.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`,CH=_.div`
  padding: 15px;
`,AH=_.h3`
  color: white;
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.4;
`,RH=_.p`
  color: #888;
  font-size: 14px;
  margin: 5px 0 0 0;
`,PH=_.div`
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  background: #000;
  border-radius: 8px;
  margin-bottom: 20px;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
`,NH=_.div`
  color: white;
  text-align: center;
  padding: 20px;
  font-size: 18px;
`,DH=_.div`
  color: #f44336;
  text-align: center;
  padding: 20px;
  font-size: 18px;
`,OH=_.div`
  color: #888;
  text-align: center;
  padding: 20px;
  font-size: 16px;
`;_.div`
  width: 100%;
  background: #111;
  color: #fff;
  padding: 32px 0 16px 0;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: 0.5px;
`;const jH=()=>{const{t}=ft();Br();const[e,n]=D.useState([]),[r,i]=D.useState(!0),[s,o]=D.useState(null),[a,l]=D.useState(null),c="221550365",h="24833856";D.useEffect(()=>{f()},[]);const f=async()=>{try{i(!0);const p=await fetch(`/.netlify/functions/vimeo-sessions?userId=${c}&folderId=${h}`);if(!p.ok)throw new Error("Failed to load sessions");const g=await p.json();n(g)}catch(p){o(p.message)}finally{i(!1)}};return d.jsxs(wH,{children:[d.jsx(_H,{}),d.jsxs(bH,{children:[a&&d.jsx(PH,{children:d.jsx("iframe",{src:`https://player.vimeo.com/video/${a}?autoplay=1`,frameBorder:"0",allow:"autoplay; fullscreen; picture-in-picture",allowFullScreen:!0,title:"Vimeo video player"})}),d.jsx(EH,{children:"Últimas Sesiones"}),r&&d.jsx(NH,{children:t("beyondCharts.loading","Cargando sesiones...")}),s&&d.jsx(DH,{children:t("beyondCharts.error",s||"No se pudieron cargar las sesiones.")}),!r&&!s&&d.jsx(SH,{children:e.length>0?e.map(p=>d.jsxs(Y4,{onClick:()=>l(p.vimeoId),children:[d.jsxs(TH,{children:[d.jsx(kH,{src:p.thumbnailUrl||"/images/placeholder_course.jpg",alt:p.title}),d.jsx(IH,{children:d.jsx(c3,{})})]}),d.jsxs(CH,{children:[d.jsx(AH,{children:p.title||t("beyondCharts.noTitle","Video sin título")}),d.jsx(RH,{children:p.createdAt?new Date(p.createdAt).toLocaleDateString():"Fecha no disponible"})]})]},p.vimeoId||p.id)):d.jsx(OH,{children:t("beyondCharts.noSessions","No hay sesiones disponibles.")})})]})]})};function un({children:t}){const e=Br(),n=Ur();return D.useEffect(()=>{localStorage.getItem("nvuUserData")||e("/login",{replace:!0,state:{from:n}})},[e,n]),localStorage.getItem("nvuUserData")?t:null}function LH(){const{pathname:t}=Ur();return D.useEffect(()=>{window.scrollTo(0,0)},[t]),null}function MH(){return d.jsxs("div",{className:"App",children:[d.jsx(LH,{}),d.jsxs(O5,{children:[d.jsx(Ot,{path:"/login",element:localStorage.getItem("nvuUserData")?d.jsx(N5,{to:"/",replace:!0}):d.jsx(WU,{})}),d.jsx(Ot,{path:"/language",element:d.jsx(YU,{})}),d.jsx(Ot,{path:"/",element:d.jsx(un,{children:d.jsx(bn,{children:d.jsx(ZP,{})})})}),d.jsx(Ot,{path:"/calendario",element:d.jsx(un,{children:d.jsx(bn,{children:d.jsx(xO,{})})})}),d.jsx(Ot,{path:"/educadores",element:d.jsx(un,{children:d.jsx(bn,{children:d.jsx(BO,{})})})}),d.jsx(Ot,{path:"/educadores/:educatorId",element:d.jsx(un,{children:d.jsx(bn,{children:d.jsx(nj,{})})})}),d.jsx(Ot,{path:"/educadores/:educatorId/sesiones",element:d.jsx(un,{children:d.jsx(fB,{children:d.jsx(Ej,{})})})}),d.jsx(Ot,{path:"/academia",element:d.jsx(un,{children:d.jsx(bn,{children:d.jsx(Lj,{})})})}),d.jsx(Ot,{path:"/foro",element:d.jsx(un,{children:d.jsx(bn,{children:d.jsx(r7,{})})})}),d.jsx(Ot,{path:"/scanner",element:d.jsx(un,{children:d.jsx(bn,{children:d.jsx(Q7,{})})})}),d.jsx(Ot,{path:"/back-office",element:d.jsx(un,{children:d.jsx(bn,{children:d.jsx(Ez,{})})})}),d.jsx(Ot,{path:"/perfil",element:d.jsx(un,{children:d.jsx(bn,{children:d.jsx(sB,{})})})})," ",d.jsx(Ot,{path:"/news",element:d.jsx(un,{children:d.jsx(bn,{children:d.jsx(j7,{})})})}),d.jsx(Ot,{path:"/markups",element:d.jsx(un,{children:d.jsx(bn,{children:d.jsx(pB,{})})})}),d.jsx(Ot,{path:"/trading-journal",element:d.jsx(un,{children:d.jsx(bn,{children:d.jsx(vH,{})})})}),d.jsx(Ot,{path:"/beyond-charts",element:d.jsx(un,{children:d.jsx(bn,{children:d.jsx(jH,{})})})})]})]})}const VH=Kp.createRoot(document.getElementById("root"));VH.render(d.jsx(ve.StrictMode,{children:d.jsx(z5,{children:d.jsx(MH,{})})}));
