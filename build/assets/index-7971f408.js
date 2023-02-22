(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function NE(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ta={},AE={get exports(){return Ta},set exports(t){Ta=t}},wl={},U={},DE={get exports(){return U},set exports(t){U=t}},q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gs=Symbol.for("react.element"),RE=Symbol.for("react.portal"),xE=Symbol.for("react.fragment"),OE=Symbol.for("react.strict_mode"),PE=Symbol.for("react.profiler"),LE=Symbol.for("react.provider"),bE=Symbol.for("react.context"),ME=Symbol.for("react.forward_ref"),$E=Symbol.for("react.suspense"),FE=Symbol.for("react.memo"),UE=Symbol.for("react.lazy"),ep=Symbol.iterator;function VE(t){return t===null||typeof t!="object"?null:(t=ep&&t[ep]||t["@@iterator"],typeof t=="function"?t:null)}var Lg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},bg=Object.assign,Mg={};function ki(t,e,n){this.props=t,this.context=e,this.refs=Mg,this.updater=n||Lg}ki.prototype.isReactComponent={};ki.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ki.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function $g(){}$g.prototype=ki.prototype;function Hh(t,e,n){this.props=t,this.context=e,this.refs=Mg,this.updater=n||Lg}var qh=Hh.prototype=new $g;qh.constructor=Hh;bg(qh,ki.prototype);qh.isPureReactComponent=!0;var tp=Array.isArray,Fg=Object.prototype.hasOwnProperty,Kh={current:null},Ug={key:!0,ref:!0,__self:!0,__source:!0};function Vg(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Fg.call(e,r)&&!Ug.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Gs,type:t,key:s,ref:o,props:i,_owner:Kh.current}}function jE(t,e){return{$$typeof:Gs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Wh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Gs}function zE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var np=/\/+/g;function Eu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?zE(""+t.key):e.toString(36)}function ea(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Gs:case RE:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Eu(o,0):r,tp(i)?(n="",t!=null&&(n=t.replace(np,"$&/")+"/"),ea(i,e,n,"",function(u){return u})):i!=null&&(Wh(i)&&(i=jE(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(np,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",tp(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Eu(s,a);o+=ea(s,e,n,l,i)}else if(l=VE(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Eu(s,a++),o+=ea(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ao(t,e,n){if(t==null)return t;var r=[],i=0;return ea(t,r,"","",function(s){return e.call(n,s,i++)}),r}function BE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ye={current:null},ta={transition:null},HE={ReactCurrentDispatcher:Ye,ReactCurrentBatchConfig:ta,ReactCurrentOwner:Kh};q.Children={map:Ao,forEach:function(t,e,n){Ao(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ao(t,function(){e++}),e},toArray:function(t){return Ao(t,function(e){return e})||[]},only:function(t){if(!Wh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};q.Component=ki;q.Fragment=xE;q.Profiler=PE;q.PureComponent=Hh;q.StrictMode=OE;q.Suspense=$E;q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=HE;q.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=bg({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Kh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Fg.call(e,l)&&!Ug.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Gs,type:t.type,key:i,ref:s,props:r,_owner:o}};q.createContext=function(t){return t={$$typeof:bE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:LE,_context:t},t.Consumer=t};q.createElement=Vg;q.createFactory=function(t){var e=Vg.bind(null,t);return e.type=t,e};q.createRef=function(){return{current:null}};q.forwardRef=function(t){return{$$typeof:ME,render:t}};q.isValidElement=Wh;q.lazy=function(t){return{$$typeof:UE,_payload:{_status:-1,_result:t},_init:BE}};q.memo=function(t,e){return{$$typeof:FE,type:t,compare:e===void 0?null:e}};q.startTransition=function(t){var e=ta.transition;ta.transition={};try{t()}finally{ta.transition=e}};q.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};q.useCallback=function(t,e){return Ye.current.useCallback(t,e)};q.useContext=function(t){return Ye.current.useContext(t)};q.useDebugValue=function(){};q.useDeferredValue=function(t){return Ye.current.useDeferredValue(t)};q.useEffect=function(t,e){return Ye.current.useEffect(t,e)};q.useId=function(){return Ye.current.useId()};q.useImperativeHandle=function(t,e,n){return Ye.current.useImperativeHandle(t,e,n)};q.useInsertionEffect=function(t,e){return Ye.current.useInsertionEffect(t,e)};q.useLayoutEffect=function(t,e){return Ye.current.useLayoutEffect(t,e)};q.useMemo=function(t,e){return Ye.current.useMemo(t,e)};q.useReducer=function(t,e,n){return Ye.current.useReducer(t,e,n)};q.useRef=function(t){return Ye.current.useRef(t)};q.useState=function(t){return Ye.current.useState(t)};q.useSyncExternalStore=function(t,e,n){return Ye.current.useSyncExternalStore(t,e,n)};q.useTransition=function(){return Ye.current.useTransition()};q.version="18.2.0";(function(t){t.exports=q})(DE);const Cn=NE(U);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qE=U,KE=Symbol.for("react.element"),WE=Symbol.for("react.fragment"),GE=Object.prototype.hasOwnProperty,QE=qE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,YE={key:!0,ref:!0,__self:!0,__source:!0};function jg(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)GE.call(e,r)&&!YE.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:KE,type:t,key:s,ref:o,props:i,_owner:QE.current}}wl.Fragment=WE;wl.jsx=jg;wl.jsxs=jg;(function(t){t.exports=wl})(AE);const L=Ta.jsx,Fe=Ta.jsxs;var mc={},gc={},XE={get exports(){return gc},set exports(t){gc=t}},lt={},yc={},JE={get exports(){return yc},set exports(t){yc=t}},zg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,j){var z=I.length;I.push(j);e:for(;0<z;){var ce=z-1>>>1,Se=I[ce];if(0<i(Se,j))I[ce]=j,I[z]=Se,z=ce;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var j=I[0],z=I.pop();if(z!==j){I[0]=z;e:for(var ce=0,Se=I.length,Co=Se>>>1;ce<Co;){var Yn=2*(ce+1)-1,wu=I[Yn],Xn=Yn+1,No=I[Xn];if(0>i(wu,z))Xn<Se&&0>i(No,wu)?(I[ce]=No,I[Xn]=z,ce=Xn):(I[ce]=wu,I[Yn]=z,ce=Yn);else if(Xn<Se&&0>i(No,z))I[ce]=No,I[Xn]=z,ce=Xn;else break e}}return j}function i(I,j){var z=I.sortIndex-j.sortIndex;return z!==0?z:I.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,g=!1,y=!1,v=!1,x=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(I){for(var j=n(u);j!==null;){if(j.callback===null)r(u);else if(j.startTime<=I)r(u),j.sortIndex=j.expirationTime,e(l,j);else break;j=n(u)}}function w(I){if(v=!1,m(I),!y)if(n(l)!==null)y=!0,yu(T);else{var j=n(u);j!==null&&vu(w,j.startTime-I)}}function T(I,j){y=!1,v&&(v=!1,p(R),R=-1),g=!0;var z=d;try{for(m(j),h=n(l);h!==null&&(!(h.expirationTime>j)||I&&!Et());){var ce=h.callback;if(typeof ce=="function"){h.callback=null,d=h.priorityLevel;var Se=ce(h.expirationTime<=j);j=t.unstable_now(),typeof Se=="function"?h.callback=Se:h===n(l)&&r(l),m(j)}else r(l);h=n(l)}if(h!==null)var Co=!0;else{var Yn=n(u);Yn!==null&&vu(w,Yn.startTime-j),Co=!1}return Co}finally{h=null,d=z,g=!1}}var C=!1,N=null,R=-1,Z=5,B=-1;function Et(){return!(t.unstable_now()-B<Z)}function Li(){if(N!==null){var I=t.unstable_now();B=I;var j=!0;try{j=N(!0,I)}finally{j?bi():(C=!1,N=null)}}else C=!1}var bi;if(typeof f=="function")bi=function(){f(Li)};else if(typeof MessageChannel<"u"){var Zf=new MessageChannel,CE=Zf.port2;Zf.port1.onmessage=Li,bi=function(){CE.postMessage(null)}}else bi=function(){x(Li,0)};function yu(I){N=I,C||(C=!0,bi())}function vu(I,j){R=x(function(){I(t.unstable_now())},j)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){y||g||(y=!0,yu(T))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(d){case 1:case 2:case 3:var j=3;break;default:j=d}var z=d;d=j;try{return I()}finally{d=z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,j){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var z=d;d=I;try{return j()}finally{d=z}},t.unstable_scheduleCallback=function(I,j,z){var ce=t.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?ce+z:ce):z=ce,I){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=z+Se,I={id:c++,callback:j,priorityLevel:I,startTime:z,expirationTime:Se,sortIndex:-1},z>ce?(I.sortIndex=z,e(u,I),n(l)===null&&I===n(u)&&(v?(p(R),R=-1):v=!0,vu(w,z-ce))):(I.sortIndex=Se,e(l,I),y||g||(y=!0,yu(T))),I},t.unstable_shouldYield=Et,t.unstable_wrapCallback=function(I){var j=d;return function(){var z=d;d=j;try{return I.apply(this,arguments)}finally{d=z}}}})(zg);(function(t){t.exports=zg})(JE);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bg=U,ot=yc;function E(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Hg=new Set,ms={};function Ar(t,e){ai(t,e),ai(t+"Capture",e)}function ai(t,e){for(ms[t]=e,t=0;t<e.length;t++)Hg.add(e[t])}var nn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vc=Object.prototype.hasOwnProperty,ZE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,rp={},ip={};function eS(t){return vc.call(ip,t)?!0:vc.call(rp,t)?!1:ZE.test(t)?ip[t]=!0:(rp[t]=!0,!1)}function tS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function nS(t,e,n,r){if(e===null||typeof e>"u"||tS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Xe(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Re[t]=new Xe(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Re[e]=new Xe(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Re[t]=new Xe(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Re[t]=new Xe(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Re[t]=new Xe(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Re[t]=new Xe(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Re[t]=new Xe(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Re[t]=new Xe(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Re[t]=new Xe(t,5,!1,t.toLowerCase(),null,!1,!1)});var Gh=/[\-:]([a-z])/g;function Qh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Gh,Qh);Re[e]=new Xe(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Gh,Qh);Re[e]=new Xe(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Gh,Qh);Re[e]=new Xe(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Re[t]=new Xe(t,1,!1,t.toLowerCase(),null,!1,!1)});Re.xlinkHref=new Xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Re[t]=new Xe(t,1,!1,t.toLowerCase(),null,!0,!0)});function Yh(t,e,n,r){var i=Re.hasOwnProperty(e)?Re[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(nS(e,n,i,r)&&(n=null),r||i===null?eS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var fn=Bg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Do=Symbol.for("react.element"),Fr=Symbol.for("react.portal"),Ur=Symbol.for("react.fragment"),Xh=Symbol.for("react.strict_mode"),wc=Symbol.for("react.profiler"),qg=Symbol.for("react.provider"),Kg=Symbol.for("react.context"),Jh=Symbol.for("react.forward_ref"),Ec=Symbol.for("react.suspense"),Sc=Symbol.for("react.suspense_list"),Zh=Symbol.for("react.memo"),gn=Symbol.for("react.lazy"),Wg=Symbol.for("react.offscreen"),sp=Symbol.iterator;function Mi(t){return t===null||typeof t!="object"?null:(t=sp&&t[sp]||t["@@iterator"],typeof t=="function"?t:null)}var ae=Object.assign,Su;function qi(t){if(Su===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Su=e&&e[1]||""}return`
`+Su+t}var ku=!1;function Tu(t,e){if(!t||ku)return"";ku=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{ku=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?qi(t):""}function rS(t){switch(t.tag){case 5:return qi(t.type);case 16:return qi("Lazy");case 13:return qi("Suspense");case 19:return qi("SuspenseList");case 0:case 2:case 15:return t=Tu(t.type,!1),t;case 11:return t=Tu(t.type.render,!1),t;case 1:return t=Tu(t.type,!0),t;default:return""}}function kc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ur:return"Fragment";case Fr:return"Portal";case wc:return"Profiler";case Xh:return"StrictMode";case Ec:return"Suspense";case Sc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Kg:return(t.displayName||"Context")+".Consumer";case qg:return(t._context.displayName||"Context")+".Provider";case Jh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Zh:return e=t.displayName||null,e!==null?e:kc(t.type)||"Memo";case gn:e=t._payload,t=t._init;try{return kc(t(e))}catch{}}return null}function iS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return kc(e);case 8:return e===Xh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Un(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Gg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function sS(t){var e=Gg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ro(t){t._valueTracker||(t._valueTracker=sS(t))}function Qg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Gg(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function _a(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Tc(t,e){var n=e.checked;return ae({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function op(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Un(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Yg(t,e){e=e.checked,e!=null&&Yh(t,"checked",e,!1)}function _c(t,e){Yg(t,e);var n=Un(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ic(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ic(t,e.type,Un(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ap(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ic(t,e,n){(e!=="number"||_a(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ki=Array.isArray;function Xr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Un(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Cc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(E(91));return ae({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function lp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(E(92));if(Ki(n)){if(1<n.length)throw Error(E(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Un(n)}}function Xg(t,e){var n=Un(e.value),r=Un(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function up(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Jg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Nc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Jg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var xo,Zg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(xo=xo||document.createElement("div"),xo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=xo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function gs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var es={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},oS=["Webkit","ms","Moz","O"];Object.keys(es).forEach(function(t){oS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),es[e]=es[t]})});function ey(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||es.hasOwnProperty(t)&&es[t]?(""+e).trim():e+"px"}function ty(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ey(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var aS=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ac(t,e){if(e){if(aS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(E(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(E(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(E(61))}if(e.style!=null&&typeof e.style!="object")throw Error(E(62))}}function Dc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rc=null;function ed(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var xc=null,Jr=null,Zr=null;function cp(t){if(t=Xs(t)){if(typeof xc!="function")throw Error(E(280));var e=t.stateNode;e&&(e=_l(e),xc(t.stateNode,t.type,e))}}function ny(t){Jr?Zr?Zr.push(t):Zr=[t]:Jr=t}function ry(){if(Jr){var t=Jr,e=Zr;if(Zr=Jr=null,cp(t),e)for(t=0;t<e.length;t++)cp(e[t])}}function iy(t,e){return t(e)}function sy(){}var _u=!1;function oy(t,e,n){if(_u)return t(e,n);_u=!0;try{return iy(t,e,n)}finally{_u=!1,(Jr!==null||Zr!==null)&&(sy(),ry())}}function ys(t,e){var n=t.stateNode;if(n===null)return null;var r=_l(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(E(231,e,typeof n));return n}var Oc=!1;if(nn)try{var $i={};Object.defineProperty($i,"passive",{get:function(){Oc=!0}}),window.addEventListener("test",$i,$i),window.removeEventListener("test",$i,$i)}catch{Oc=!1}function lS(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var ts=!1,Ia=null,Ca=!1,Pc=null,uS={onError:function(t){ts=!0,Ia=t}};function cS(t,e,n,r,i,s,o,a,l){ts=!1,Ia=null,lS.apply(uS,arguments)}function hS(t,e,n,r,i,s,o,a,l){if(cS.apply(this,arguments),ts){if(ts){var u=Ia;ts=!1,Ia=null}else throw Error(E(198));Ca||(Ca=!0,Pc=u)}}function Dr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function ay(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function hp(t){if(Dr(t)!==t)throw Error(E(188))}function dS(t){var e=t.alternate;if(!e){if(e=Dr(t),e===null)throw Error(E(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return hp(i),t;if(s===r)return hp(i),e;s=s.sibling}throw Error(E(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?t:e}function ly(t){return t=dS(t),t!==null?uy(t):null}function uy(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=uy(t);if(e!==null)return e;t=t.sibling}return null}var cy=ot.unstable_scheduleCallback,dp=ot.unstable_cancelCallback,fS=ot.unstable_shouldYield,pS=ot.unstable_requestPaint,he=ot.unstable_now,mS=ot.unstable_getCurrentPriorityLevel,td=ot.unstable_ImmediatePriority,hy=ot.unstable_UserBlockingPriority,Na=ot.unstable_NormalPriority,gS=ot.unstable_LowPriority,dy=ot.unstable_IdlePriority,El=null,Mt=null;function yS(t){if(Mt&&typeof Mt.onCommitFiberRoot=="function")try{Mt.onCommitFiberRoot(El,t,void 0,(t.current.flags&128)===128)}catch{}}var Nt=Math.clz32?Math.clz32:ES,vS=Math.log,wS=Math.LN2;function ES(t){return t>>>=0,t===0?32:31-(vS(t)/wS|0)|0}var Oo=64,Po=4194304;function Wi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Aa(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Wi(a):(s&=o,s!==0&&(r=Wi(s)))}else o=n&~i,o!==0?r=Wi(o):s!==0&&(r=Wi(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Nt(e),i=1<<n,r|=t[n],e&=~i;return r}function SS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Nt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=SS(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Lc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function fy(){var t=Oo;return Oo<<=1,!(Oo&4194240)&&(Oo=64),t}function Iu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Qs(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Nt(e),t[e]=n}function TS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Nt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function nd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Nt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Y=0;function py(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var my,rd,gy,yy,vy,bc=!1,Lo=[],Nn=null,An=null,Dn=null,vs=new Map,ws=new Map,vn=[],_S="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fp(t,e){switch(t){case"focusin":case"focusout":Nn=null;break;case"dragenter":case"dragleave":An=null;break;case"mouseover":case"mouseout":Dn=null;break;case"pointerover":case"pointerout":vs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ws.delete(e.pointerId)}}function Fi(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Xs(e),e!==null&&rd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function IS(t,e,n,r,i){switch(e){case"focusin":return Nn=Fi(Nn,t,e,n,r,i),!0;case"dragenter":return An=Fi(An,t,e,n,r,i),!0;case"mouseover":return Dn=Fi(Dn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return vs.set(s,Fi(vs.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ws.set(s,Fi(ws.get(s)||null,t,e,n,r,i)),!0}return!1}function wy(t){var e=tr(t.target);if(e!==null){var n=Dr(e);if(n!==null){if(e=n.tag,e===13){if(e=ay(n),e!==null){t.blockedOn=e,vy(t.priority,function(){gy(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function na(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Mc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Rc=r,n.target.dispatchEvent(r),Rc=null}else return e=Xs(n),e!==null&&rd(e),t.blockedOn=n,!1;e.shift()}return!0}function pp(t,e,n){na(t)&&n.delete(e)}function CS(){bc=!1,Nn!==null&&na(Nn)&&(Nn=null),An!==null&&na(An)&&(An=null),Dn!==null&&na(Dn)&&(Dn=null),vs.forEach(pp),ws.forEach(pp)}function Ui(t,e){t.blockedOn===e&&(t.blockedOn=null,bc||(bc=!0,ot.unstable_scheduleCallback(ot.unstable_NormalPriority,CS)))}function Es(t){function e(i){return Ui(i,t)}if(0<Lo.length){Ui(Lo[0],t);for(var n=1;n<Lo.length;n++){var r=Lo[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Nn!==null&&Ui(Nn,t),An!==null&&Ui(An,t),Dn!==null&&Ui(Dn,t),vs.forEach(e),ws.forEach(e),n=0;n<vn.length;n++)r=vn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<vn.length&&(n=vn[0],n.blockedOn===null);)wy(n),n.blockedOn===null&&vn.shift()}var ei=fn.ReactCurrentBatchConfig,Da=!0;function NS(t,e,n,r){var i=Y,s=ei.transition;ei.transition=null;try{Y=1,id(t,e,n,r)}finally{Y=i,ei.transition=s}}function AS(t,e,n,r){var i=Y,s=ei.transition;ei.transition=null;try{Y=4,id(t,e,n,r)}finally{Y=i,ei.transition=s}}function id(t,e,n,r){if(Da){var i=Mc(t,e,n,r);if(i===null)bu(t,e,r,Ra,n),fp(t,r);else if(IS(i,t,e,n,r))r.stopPropagation();else if(fp(t,r),e&4&&-1<_S.indexOf(t)){for(;i!==null;){var s=Xs(i);if(s!==null&&my(s),s=Mc(t,e,n,r),s===null&&bu(t,e,r,Ra,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else bu(t,e,r,null,n)}}var Ra=null;function Mc(t,e,n,r){if(Ra=null,t=ed(r),t=tr(t),t!==null)if(e=Dr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=ay(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ra=t,null}function Ey(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(mS()){case td:return 1;case hy:return 4;case Na:case gS:return 16;case dy:return 536870912;default:return 16}default:return 16}}var _n=null,sd=null,ra=null;function Sy(){if(ra)return ra;var t,e=sd,n=e.length,r,i="value"in _n?_n.value:_n.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return ra=i.slice(t,1<r?1-r:void 0)}function ia(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function bo(){return!0}function mp(){return!1}function ut(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?bo:mp,this.isPropagationStopped=mp,this}return ae(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=bo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=bo)},persist:function(){},isPersistent:bo}),e}var Ti={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},od=ut(Ti),Ys=ae({},Ti,{view:0,detail:0}),DS=ut(Ys),Cu,Nu,Vi,Sl=ae({},Ys,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ad,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Vi&&(Vi&&t.type==="mousemove"?(Cu=t.screenX-Vi.screenX,Nu=t.screenY-Vi.screenY):Nu=Cu=0,Vi=t),Cu)},movementY:function(t){return"movementY"in t?t.movementY:Nu}}),gp=ut(Sl),RS=ae({},Sl,{dataTransfer:0}),xS=ut(RS),OS=ae({},Ys,{relatedTarget:0}),Au=ut(OS),PS=ae({},Ti,{animationName:0,elapsedTime:0,pseudoElement:0}),LS=ut(PS),bS=ae({},Ti,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),MS=ut(bS),$S=ae({},Ti,{data:0}),yp=ut($S),FS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},US={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},VS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=VS[t])?!!e[t]:!1}function ad(){return jS}var zS=ae({},Ys,{key:function(t){if(t.key){var e=FS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ia(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?US[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ad,charCode:function(t){return t.type==="keypress"?ia(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ia(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),BS=ut(zS),HS=ae({},Sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vp=ut(HS),qS=ae({},Ys,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ad}),KS=ut(qS),WS=ae({},Ti,{propertyName:0,elapsedTime:0,pseudoElement:0}),GS=ut(WS),QS=ae({},Sl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),YS=ut(QS),XS=[9,13,27,32],ld=nn&&"CompositionEvent"in window,ns=null;nn&&"documentMode"in document&&(ns=document.documentMode);var JS=nn&&"TextEvent"in window&&!ns,ky=nn&&(!ld||ns&&8<ns&&11>=ns),wp=String.fromCharCode(32),Ep=!1;function Ty(t,e){switch(t){case"keyup":return XS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _y(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Vr=!1;function ZS(t,e){switch(t){case"compositionend":return _y(e);case"keypress":return e.which!==32?null:(Ep=!0,wp);case"textInput":return t=e.data,t===wp&&Ep?null:t;default:return null}}function ek(t,e){if(Vr)return t==="compositionend"||!ld&&Ty(t,e)?(t=Sy(),ra=sd=_n=null,Vr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ky&&e.locale!=="ko"?null:e.data;default:return null}}var tk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!tk[t.type]:e==="textarea"}function Iy(t,e,n,r){ny(r),e=xa(e,"onChange"),0<e.length&&(n=new od("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var rs=null,Ss=null;function nk(t){My(t,0)}function kl(t){var e=Br(t);if(Qg(e))return t}function rk(t,e){if(t==="change")return e}var Cy=!1;if(nn){var Du;if(nn){var Ru="oninput"in document;if(!Ru){var kp=document.createElement("div");kp.setAttribute("oninput","return;"),Ru=typeof kp.oninput=="function"}Du=Ru}else Du=!1;Cy=Du&&(!document.documentMode||9<document.documentMode)}function Tp(){rs&&(rs.detachEvent("onpropertychange",Ny),Ss=rs=null)}function Ny(t){if(t.propertyName==="value"&&kl(Ss)){var e=[];Iy(e,Ss,t,ed(t)),oy(nk,e)}}function ik(t,e,n){t==="focusin"?(Tp(),rs=e,Ss=n,rs.attachEvent("onpropertychange",Ny)):t==="focusout"&&Tp()}function sk(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return kl(Ss)}function ok(t,e){if(t==="click")return kl(e)}function ak(t,e){if(t==="input"||t==="change")return kl(e)}function lk(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Rt=typeof Object.is=="function"?Object.is:lk;function ks(t,e){if(Rt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!vc.call(e,i)||!Rt(t[i],e[i]))return!1}return!0}function _p(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ip(t,e){var n=_p(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=_p(n)}}function Ay(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ay(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Dy(){for(var t=window,e=_a();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=_a(t.document)}return e}function ud(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function uk(t){var e=Dy(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Ay(n.ownerDocument.documentElement,n)){if(r!==null&&ud(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Ip(n,s);var o=Ip(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ck=nn&&"documentMode"in document&&11>=document.documentMode,jr=null,$c=null,is=null,Fc=!1;function Cp(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Fc||jr==null||jr!==_a(r)||(r=jr,"selectionStart"in r&&ud(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),is&&ks(is,r)||(is=r,r=xa($c,"onSelect"),0<r.length&&(e=new od("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=jr)))}function Mo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var zr={animationend:Mo("Animation","AnimationEnd"),animationiteration:Mo("Animation","AnimationIteration"),animationstart:Mo("Animation","AnimationStart"),transitionend:Mo("Transition","TransitionEnd")},xu={},Ry={};nn&&(Ry=document.createElement("div").style,"AnimationEvent"in window||(delete zr.animationend.animation,delete zr.animationiteration.animation,delete zr.animationstart.animation),"TransitionEvent"in window||delete zr.transitionend.transition);function Tl(t){if(xu[t])return xu[t];if(!zr[t])return t;var e=zr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Ry)return xu[t]=e[n];return t}var xy=Tl("animationend"),Oy=Tl("animationiteration"),Py=Tl("animationstart"),Ly=Tl("transitionend"),by=new Map,Np="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Hn(t,e){by.set(t,e),Ar(e,[t])}for(var Ou=0;Ou<Np.length;Ou++){var Pu=Np[Ou],hk=Pu.toLowerCase(),dk=Pu[0].toUpperCase()+Pu.slice(1);Hn(hk,"on"+dk)}Hn(xy,"onAnimationEnd");Hn(Oy,"onAnimationIteration");Hn(Py,"onAnimationStart");Hn("dblclick","onDoubleClick");Hn("focusin","onFocus");Hn("focusout","onBlur");Hn(Ly,"onTransitionEnd");ai("onMouseEnter",["mouseout","mouseover"]);ai("onMouseLeave",["mouseout","mouseover"]);ai("onPointerEnter",["pointerout","pointerover"]);ai("onPointerLeave",["pointerout","pointerover"]);Ar("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ar("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ar("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ar("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ar("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ar("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fk=new Set("cancel close invalid load scroll toggle".split(" ").concat(Gi));function Ap(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,hS(r,e,void 0,t),t.currentTarget=null}function My(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Ap(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Ap(i,a,u),s=l}}}if(Ca)throw t=Pc,Ca=!1,Pc=null,t}function ee(t,e){var n=e[Bc];n===void 0&&(n=e[Bc]=new Set);var r=t+"__bubble";n.has(r)||($y(e,t,2,!1),n.add(r))}function Lu(t,e,n){var r=0;e&&(r|=4),$y(n,t,r,e)}var $o="_reactListening"+Math.random().toString(36).slice(2);function Ts(t){if(!t[$o]){t[$o]=!0,Hg.forEach(function(n){n!=="selectionchange"&&(fk.has(n)||Lu(n,!1,t),Lu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[$o]||(e[$o]=!0,Lu("selectionchange",!1,e))}}function $y(t,e,n,r){switch(Ey(e)){case 1:var i=NS;break;case 4:i=AS;break;default:i=id}n=i.bind(null,e,n,t),i=void 0,!Oc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function bu(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=tr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}oy(function(){var u=s,c=ed(n),h=[];e:{var d=by.get(t);if(d!==void 0){var g=od,y=t;switch(t){case"keypress":if(ia(n)===0)break e;case"keydown":case"keyup":g=BS;break;case"focusin":y="focus",g=Au;break;case"focusout":y="blur",g=Au;break;case"beforeblur":case"afterblur":g=Au;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=gp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=xS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=KS;break;case xy:case Oy:case Py:g=LS;break;case Ly:g=GS;break;case"scroll":g=DS;break;case"wheel":g=YS;break;case"copy":case"cut":case"paste":g=MS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=vp}var v=(e&4)!==0,x=!v&&t==="scroll",p=v?d!==null?d+"Capture":null:d;v=[];for(var f=u,m;f!==null;){m=f;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,p!==null&&(w=ys(f,p),w!=null&&v.push(_s(f,w,m)))),x)break;f=f.return}0<v.length&&(d=new g(d,y,null,n,c),h.push({event:d,listeners:v}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",d&&n!==Rc&&(y=n.relatedTarget||n.fromElement)&&(tr(y)||y[rn]))break e;if((g||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=u,y=y?tr(y):null,y!==null&&(x=Dr(y),y!==x||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(v=gp,w="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(v=vp,w="onPointerLeave",p="onPointerEnter",f="pointer"),x=g==null?d:Br(g),m=y==null?d:Br(y),d=new v(w,f+"leave",g,n,c),d.target=x,d.relatedTarget=m,w=null,tr(c)===u&&(v=new v(p,f+"enter",y,n,c),v.target=m,v.relatedTarget=x,w=v),x=w,g&&y)t:{for(v=g,p=y,f=0,m=v;m;m=br(m))f++;for(m=0,w=p;w;w=br(w))m++;for(;0<f-m;)v=br(v),f--;for(;0<m-f;)p=br(p),m--;for(;f--;){if(v===p||p!==null&&v===p.alternate)break t;v=br(v),p=br(p)}v=null}else v=null;g!==null&&Dp(h,d,g,v,!1),y!==null&&x!==null&&Dp(h,x,y,v,!0)}}e:{if(d=u?Br(u):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var T=rk;else if(Sp(d))if(Cy)T=ak;else{T=sk;var C=ik}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(T=ok);if(T&&(T=T(t,u))){Iy(h,T,n,c);break e}C&&C(t,d,u),t==="focusout"&&(C=d._wrapperState)&&C.controlled&&d.type==="number"&&Ic(d,"number",d.value)}switch(C=u?Br(u):window,t){case"focusin":(Sp(C)||C.contentEditable==="true")&&(jr=C,$c=u,is=null);break;case"focusout":is=$c=jr=null;break;case"mousedown":Fc=!0;break;case"contextmenu":case"mouseup":case"dragend":Fc=!1,Cp(h,n,c);break;case"selectionchange":if(ck)break;case"keydown":case"keyup":Cp(h,n,c)}var N;if(ld)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Vr?Ty(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(ky&&n.locale!=="ko"&&(Vr||R!=="onCompositionStart"?R==="onCompositionEnd"&&Vr&&(N=Sy()):(_n=c,sd="value"in _n?_n.value:_n.textContent,Vr=!0)),C=xa(u,R),0<C.length&&(R=new yp(R,t,null,n,c),h.push({event:R,listeners:C}),N?R.data=N:(N=_y(n),N!==null&&(R.data=N)))),(N=JS?ZS(t,n):ek(t,n))&&(u=xa(u,"onBeforeInput"),0<u.length&&(c=new yp("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=N))}My(h,e)})}function _s(t,e,n){return{instance:t,listener:e,currentTarget:n}}function xa(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ys(t,n),s!=null&&r.unshift(_s(t,s,i)),s=ys(t,e),s!=null&&r.push(_s(t,s,i))),t=t.return}return r}function br(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Dp(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=ys(n,s),l!=null&&o.unshift(_s(n,l,a))):i||(l=ys(n,s),l!=null&&o.push(_s(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var pk=/\r\n?/g,mk=/\u0000|\uFFFD/g;function Rp(t){return(typeof t=="string"?t:""+t).replace(pk,`
`).replace(mk,"")}function Fo(t,e,n){if(e=Rp(e),Rp(t)!==e&&n)throw Error(E(425))}function Oa(){}var Uc=null,Vc=null;function jc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var zc=typeof setTimeout=="function"?setTimeout:void 0,gk=typeof clearTimeout=="function"?clearTimeout:void 0,xp=typeof Promise=="function"?Promise:void 0,yk=typeof queueMicrotask=="function"?queueMicrotask:typeof xp<"u"?function(t){return xp.resolve(null).then(t).catch(vk)}:zc;function vk(t){setTimeout(function(){throw t})}function Mu(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Es(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Es(e)}function Rn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Op(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var _i=Math.random().toString(36).slice(2),Lt="__reactFiber$"+_i,Is="__reactProps$"+_i,rn="__reactContainer$"+_i,Bc="__reactEvents$"+_i,wk="__reactListeners$"+_i,Ek="__reactHandles$"+_i;function tr(t){var e=t[Lt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[rn]||n[Lt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Op(t);t!==null;){if(n=t[Lt])return n;t=Op(t)}return e}t=n,n=t.parentNode}return null}function Xs(t){return t=t[Lt]||t[rn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Br(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(E(33))}function _l(t){return t[Is]||null}var Hc=[],Hr=-1;function qn(t){return{current:t}}function te(t){0>Hr||(t.current=Hc[Hr],Hc[Hr]=null,Hr--)}function X(t,e){Hr++,Hc[Hr]=t.current,t.current=e}var Vn={},Be=qn(Vn),et=qn(!1),pr=Vn;function li(t,e){var n=t.type.contextTypes;if(!n)return Vn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function tt(t){return t=t.childContextTypes,t!=null}function Pa(){te(et),te(Be)}function Pp(t,e,n){if(Be.current!==Vn)throw Error(E(168));X(Be,e),X(et,n)}function Fy(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(E(108,iS(t)||"Unknown",i));return ae({},n,r)}function La(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Vn,pr=Be.current,X(Be,t),X(et,et.current),!0}function Lp(t,e,n){var r=t.stateNode;if(!r)throw Error(E(169));n?(t=Fy(t,e,pr),r.__reactInternalMemoizedMergedChildContext=t,te(et),te(Be),X(Be,t)):te(et),X(et,n)}var Gt=null,Il=!1,$u=!1;function Uy(t){Gt===null?Gt=[t]:Gt.push(t)}function Sk(t){Il=!0,Uy(t)}function Kn(){if(!$u&&Gt!==null){$u=!0;var t=0,e=Y;try{var n=Gt;for(Y=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Gt=null,Il=!1}catch(i){throw Gt!==null&&(Gt=Gt.slice(t+1)),cy(td,Kn),i}finally{Y=e,$u=!1}}return null}var qr=[],Kr=0,ba=null,Ma=0,ct=[],ht=0,mr=null,Qt=1,Yt="";function Jn(t,e){qr[Kr++]=Ma,qr[Kr++]=ba,ba=t,Ma=e}function Vy(t,e,n){ct[ht++]=Qt,ct[ht++]=Yt,ct[ht++]=mr,mr=t;var r=Qt;t=Yt;var i=32-Nt(r)-1;r&=~(1<<i),n+=1;var s=32-Nt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Qt=1<<32-Nt(e)+i|n<<i|r,Yt=s+t}else Qt=1<<s|n<<i|r,Yt=t}function cd(t){t.return!==null&&(Jn(t,1),Vy(t,1,0))}function hd(t){for(;t===ba;)ba=qr[--Kr],qr[Kr]=null,Ma=qr[--Kr],qr[Kr]=null;for(;t===mr;)mr=ct[--ht],ct[ht]=null,Yt=ct[--ht],ct[ht]=null,Qt=ct[--ht],ct[ht]=null}var st=null,it=null,ne=!1,_t=null;function jy(t,e){var n=ft(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function bp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,st=t,it=Rn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,st=t,it=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=mr!==null?{id:Qt,overflow:Yt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=ft(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,st=t,it=null,!0):!1;default:return!1}}function qc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Kc(t){if(ne){var e=it;if(e){var n=e;if(!bp(t,e)){if(qc(t))throw Error(E(418));e=Rn(n.nextSibling);var r=st;e&&bp(t,e)?jy(r,n):(t.flags=t.flags&-4097|2,ne=!1,st=t)}}else{if(qc(t))throw Error(E(418));t.flags=t.flags&-4097|2,ne=!1,st=t}}}function Mp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;st=t}function Uo(t){if(t!==st)return!1;if(!ne)return Mp(t),ne=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!jc(t.type,t.memoizedProps)),e&&(e=it)){if(qc(t))throw zy(),Error(E(418));for(;e;)jy(t,e),e=Rn(e.nextSibling)}if(Mp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(E(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){it=Rn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}it=null}}else it=st?Rn(t.stateNode.nextSibling):null;return!0}function zy(){for(var t=it;t;)t=Rn(t.nextSibling)}function ui(){it=st=null,ne=!1}function dd(t){_t===null?_t=[t]:_t.push(t)}var kk=fn.ReactCurrentBatchConfig;function kt(t,e){if(t&&t.defaultProps){e=ae({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var $a=qn(null),Fa=null,Wr=null,fd=null;function pd(){fd=Wr=Fa=null}function md(t){var e=$a.current;te($a),t._currentValue=e}function Wc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ti(t,e){Fa=t,fd=Wr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ze=!0),t.firstContext=null)}function yt(t){var e=t._currentValue;if(fd!==t)if(t={context:t,memoizedValue:e,next:null},Wr===null){if(Fa===null)throw Error(E(308));Wr=t,Fa.dependencies={lanes:0,firstContext:t}}else Wr=Wr.next=t;return e}var nr=null;function gd(t){nr===null?nr=[t]:nr.push(t)}function By(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,gd(e)):(n.next=i.next,i.next=n),e.interleaved=n,sn(t,r)}function sn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var yn=!1;function yd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Hy(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function en(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function xn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,sn(t,n)}return i=r.interleaved,i===null?(e.next=e,gd(r)):(e.next=i.next,i.next=e),r.interleaved=e,sn(t,n)}function sa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,nd(t,n)}}function $p(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ua(t,e,n,r){var i=t.updateQueue;yn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,g=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,v=a;switch(d=e,g=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){h=y.call(g,h,d);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,d=typeof y=="function"?y.call(g,h,d):y,d==null)break e;h=ae({},h,d);break e;case 2:yn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else g={eventTime:g,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=h):c=c.next=g,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);yr|=o,t.lanes=o,t.memoizedState=h}}function Fp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(E(191,i));i.call(r)}}}var qy=new Bg.Component().refs;function Gc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ae({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Cl={isMounted:function(t){return(t=t._reactInternals)?Dr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Qe(),i=Pn(t),s=en(r,i);s.payload=e,n!=null&&(s.callback=n),e=xn(t,s,i),e!==null&&(At(e,t,i,r),sa(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Qe(),i=Pn(t),s=en(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=xn(t,s,i),e!==null&&(At(e,t,i,r),sa(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Qe(),r=Pn(t),i=en(n,r);i.tag=2,e!=null&&(i.callback=e),e=xn(t,i,r),e!==null&&(At(e,t,r,n),sa(e,t,r))}};function Up(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ks(n,r)||!ks(i,s):!0}function Ky(t,e,n){var r=!1,i=Vn,s=e.contextType;return typeof s=="object"&&s!==null?s=yt(s):(i=tt(e)?pr:Be.current,r=e.contextTypes,s=(r=r!=null)?li(t,i):Vn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Cl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Vp(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Cl.enqueueReplaceState(e,e.state,null)}function Qc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=qy,yd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=yt(s):(s=tt(e)?pr:Be.current,i.context=li(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Gc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Cl.enqueueReplaceState(i,i.state,null),Ua(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ji(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===qy&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,t))}return t}function Vo(t,e){throw t=Object.prototype.toString.call(e),Error(E(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function jp(t){var e=t._init;return e(t._payload)}function Wy(t){function e(p,f){if(t){var m=p.deletions;m===null?(p.deletions=[f],p.flags|=16):m.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=Ln(p,f),p.index=0,p.sibling=null,p}function s(p,f,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<f?(p.flags|=2,f):m):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,f,m,w){return f===null||f.tag!==6?(f=Hu(m,p.mode,w),f.return=p,f):(f=i(f,m),f.return=p,f)}function l(p,f,m,w){var T=m.type;return T===Ur?c(p,f,m.props.children,w,m.key):f!==null&&(f.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===gn&&jp(T)===f.type)?(w=i(f,m.props),w.ref=ji(p,f,m),w.return=p,w):(w=ha(m.type,m.key,m.props,null,p.mode,w),w.ref=ji(p,f,m),w.return=p,w)}function u(p,f,m,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=qu(m,p.mode,w),f.return=p,f):(f=i(f,m.children||[]),f.return=p,f)}function c(p,f,m,w,T){return f===null||f.tag!==7?(f=cr(m,p.mode,w,T),f.return=p,f):(f=i(f,m),f.return=p,f)}function h(p,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Hu(""+f,p.mode,m),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Do:return m=ha(f.type,f.key,f.props,null,p.mode,m),m.ref=ji(p,null,f),m.return=p,m;case Fr:return f=qu(f,p.mode,m),f.return=p,f;case gn:var w=f._init;return h(p,w(f._payload),m)}if(Ki(f)||Mi(f))return f=cr(f,p.mode,m,null),f.return=p,f;Vo(p,f)}return null}function d(p,f,m,w){var T=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return T!==null?null:a(p,f,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Do:return m.key===T?l(p,f,m,w):null;case Fr:return m.key===T?u(p,f,m,w):null;case gn:return T=m._init,d(p,f,T(m._payload),w)}if(Ki(m)||Mi(m))return T!==null?null:c(p,f,m,w,null);Vo(p,m)}return null}function g(p,f,m,w,T){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(m)||null,a(f,p,""+w,T);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Do:return p=p.get(w.key===null?m:w.key)||null,l(f,p,w,T);case Fr:return p=p.get(w.key===null?m:w.key)||null,u(f,p,w,T);case gn:var C=w._init;return g(p,f,m,C(w._payload),T)}if(Ki(w)||Mi(w))return p=p.get(m)||null,c(f,p,w,T,null);Vo(f,w)}return null}function y(p,f,m,w){for(var T=null,C=null,N=f,R=f=0,Z=null;N!==null&&R<m.length;R++){N.index>R?(Z=N,N=null):Z=N.sibling;var B=d(p,N,m[R],w);if(B===null){N===null&&(N=Z);break}t&&N&&B.alternate===null&&e(p,N),f=s(B,f,R),C===null?T=B:C.sibling=B,C=B,N=Z}if(R===m.length)return n(p,N),ne&&Jn(p,R),T;if(N===null){for(;R<m.length;R++)N=h(p,m[R],w),N!==null&&(f=s(N,f,R),C===null?T=N:C.sibling=N,C=N);return ne&&Jn(p,R),T}for(N=r(p,N);R<m.length;R++)Z=g(N,p,R,m[R],w),Z!==null&&(t&&Z.alternate!==null&&N.delete(Z.key===null?R:Z.key),f=s(Z,f,R),C===null?T=Z:C.sibling=Z,C=Z);return t&&N.forEach(function(Et){return e(p,Et)}),ne&&Jn(p,R),T}function v(p,f,m,w){var T=Mi(m);if(typeof T!="function")throw Error(E(150));if(m=T.call(m),m==null)throw Error(E(151));for(var C=T=null,N=f,R=f=0,Z=null,B=m.next();N!==null&&!B.done;R++,B=m.next()){N.index>R?(Z=N,N=null):Z=N.sibling;var Et=d(p,N,B.value,w);if(Et===null){N===null&&(N=Z);break}t&&N&&Et.alternate===null&&e(p,N),f=s(Et,f,R),C===null?T=Et:C.sibling=Et,C=Et,N=Z}if(B.done)return n(p,N),ne&&Jn(p,R),T;if(N===null){for(;!B.done;R++,B=m.next())B=h(p,B.value,w),B!==null&&(f=s(B,f,R),C===null?T=B:C.sibling=B,C=B);return ne&&Jn(p,R),T}for(N=r(p,N);!B.done;R++,B=m.next())B=g(N,p,R,B.value,w),B!==null&&(t&&B.alternate!==null&&N.delete(B.key===null?R:B.key),f=s(B,f,R),C===null?T=B:C.sibling=B,C=B);return t&&N.forEach(function(Li){return e(p,Li)}),ne&&Jn(p,R),T}function x(p,f,m,w){if(typeof m=="object"&&m!==null&&m.type===Ur&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Do:e:{for(var T=m.key,C=f;C!==null;){if(C.key===T){if(T=m.type,T===Ur){if(C.tag===7){n(p,C.sibling),f=i(C,m.props.children),f.return=p,p=f;break e}}else if(C.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===gn&&jp(T)===C.type){n(p,C.sibling),f=i(C,m.props),f.ref=ji(p,C,m),f.return=p,p=f;break e}n(p,C);break}else e(p,C);C=C.sibling}m.type===Ur?(f=cr(m.props.children,p.mode,w,m.key),f.return=p,p=f):(w=ha(m.type,m.key,m.props,null,p.mode,w),w.ref=ji(p,f,m),w.return=p,p=w)}return o(p);case Fr:e:{for(C=m.key;f!==null;){if(f.key===C)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(p,f.sibling),f=i(f,m.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=qu(m,p.mode,w),f.return=p,p=f}return o(p);case gn:return C=m._init,x(p,f,C(m._payload),w)}if(Ki(m))return y(p,f,m,w);if(Mi(m))return v(p,f,m,w);Vo(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,m),f.return=p,p=f):(n(p,f),f=Hu(m,p.mode,w),f.return=p,p=f),o(p)):n(p,f)}return x}var ci=Wy(!0),Gy=Wy(!1),Js={},$t=qn(Js),Cs=qn(Js),Ns=qn(Js);function rr(t){if(t===Js)throw Error(E(174));return t}function vd(t,e){switch(X(Ns,e),X(Cs,t),X($t,Js),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Nc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Nc(e,t)}te($t),X($t,e)}function hi(){te($t),te(Cs),te(Ns)}function Qy(t){rr(Ns.current);var e=rr($t.current),n=Nc(e,t.type);e!==n&&(X(Cs,t),X($t,n))}function wd(t){Cs.current===t&&(te($t),te(Cs))}var se=qn(0);function Va(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Fu=[];function Ed(){for(var t=0;t<Fu.length;t++)Fu[t]._workInProgressVersionPrimary=null;Fu.length=0}var oa=fn.ReactCurrentDispatcher,Uu=fn.ReactCurrentBatchConfig,gr=0,oe=null,me=null,Te=null,ja=!1,ss=!1,As=0,Tk=0;function Oe(){throw Error(E(321))}function Sd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Rt(t[n],e[n]))return!1;return!0}function kd(t,e,n,r,i,s){if(gr=s,oe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,oa.current=t===null||t.memoizedState===null?Nk:Ak,t=n(r,i),ss){s=0;do{if(ss=!1,As=0,25<=s)throw Error(E(301));s+=1,Te=me=null,e.updateQueue=null,oa.current=Dk,t=n(r,i)}while(ss)}if(oa.current=za,e=me!==null&&me.next!==null,gr=0,Te=me=oe=null,ja=!1,e)throw Error(E(300));return t}function Td(){var t=As!==0;return As=0,t}function Pt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Te===null?oe.memoizedState=Te=t:Te=Te.next=t,Te}function vt(){if(me===null){var t=oe.alternate;t=t!==null?t.memoizedState:null}else t=me.next;var e=Te===null?oe.memoizedState:Te.next;if(e!==null)Te=e,me=t;else{if(t===null)throw Error(E(310));me=t,t={memoizedState:me.memoizedState,baseState:me.baseState,baseQueue:me.baseQueue,queue:me.queue,next:null},Te===null?oe.memoizedState=Te=t:Te=Te.next=t}return Te}function Ds(t,e){return typeof e=="function"?e(t):e}function Vu(t){var e=vt(),n=e.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=t;var r=me,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((gr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,oe.lanes|=c,yr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Rt(r,e.memoizedState)||(Ze=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,oe.lanes|=s,yr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ju(t){var e=vt(),n=e.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Rt(s,e.memoizedState)||(Ze=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Yy(){}function Xy(t,e){var n=oe,r=vt(),i=e(),s=!Rt(r.memoizedState,i);if(s&&(r.memoizedState=i,Ze=!0),r=r.queue,_d(ev.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Te!==null&&Te.memoizedState.tag&1){if(n.flags|=2048,Rs(9,Zy.bind(null,n,r,i,e),void 0,null),_e===null)throw Error(E(349));gr&30||Jy(n,e,i)}return i}function Jy(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=oe.updateQueue,e===null?(e={lastEffect:null,stores:null},oe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Zy(t,e,n,r){e.value=n,e.getSnapshot=r,tv(e)&&nv(t)}function ev(t,e,n){return n(function(){tv(e)&&nv(t)})}function tv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Rt(t,n)}catch{return!0}}function nv(t){var e=sn(t,1);e!==null&&At(e,t,1,-1)}function zp(t){var e=Pt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ds,lastRenderedState:t},e.queue=t,t=t.dispatch=Ck.bind(null,oe,t),[e.memoizedState,t]}function Rs(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=oe.updateQueue,e===null?(e={lastEffect:null,stores:null},oe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function rv(){return vt().memoizedState}function aa(t,e,n,r){var i=Pt();oe.flags|=t,i.memoizedState=Rs(1|e,n,void 0,r===void 0?null:r)}function Nl(t,e,n,r){var i=vt();r=r===void 0?null:r;var s=void 0;if(me!==null){var o=me.memoizedState;if(s=o.destroy,r!==null&&Sd(r,o.deps)){i.memoizedState=Rs(e,n,s,r);return}}oe.flags|=t,i.memoizedState=Rs(1|e,n,s,r)}function Bp(t,e){return aa(8390656,8,t,e)}function _d(t,e){return Nl(2048,8,t,e)}function iv(t,e){return Nl(4,2,t,e)}function sv(t,e){return Nl(4,4,t,e)}function ov(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function av(t,e,n){return n=n!=null?n.concat([t]):null,Nl(4,4,ov.bind(null,e,t),n)}function Id(){}function lv(t,e){var n=vt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Sd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function uv(t,e){var n=vt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Sd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function cv(t,e,n){return gr&21?(Rt(n,e)||(n=fy(),oe.lanes|=n,yr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ze=!0),t.memoizedState=n)}function _k(t,e){var n=Y;Y=n!==0&&4>n?n:4,t(!0);var r=Uu.transition;Uu.transition={};try{t(!1),e()}finally{Y=n,Uu.transition=r}}function hv(){return vt().memoizedState}function Ik(t,e,n){var r=Pn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},dv(t))fv(e,n);else if(n=By(t,e,n,r),n!==null){var i=Qe();At(n,t,r,i),pv(n,e,r)}}function Ck(t,e,n){var r=Pn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(dv(t))fv(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Rt(a,o)){var l=e.interleaved;l===null?(i.next=i,gd(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=By(t,e,i,r),n!==null&&(i=Qe(),At(n,t,r,i),pv(n,e,r))}}function dv(t){var e=t.alternate;return t===oe||e!==null&&e===oe}function fv(t,e){ss=ja=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function pv(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,nd(t,n)}}var za={readContext:yt,useCallback:Oe,useContext:Oe,useEffect:Oe,useImperativeHandle:Oe,useInsertionEffect:Oe,useLayoutEffect:Oe,useMemo:Oe,useReducer:Oe,useRef:Oe,useState:Oe,useDebugValue:Oe,useDeferredValue:Oe,useTransition:Oe,useMutableSource:Oe,useSyncExternalStore:Oe,useId:Oe,unstable_isNewReconciler:!1},Nk={readContext:yt,useCallback:function(t,e){return Pt().memoizedState=[t,e===void 0?null:e],t},useContext:yt,useEffect:Bp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,aa(4194308,4,ov.bind(null,e,t),n)},useLayoutEffect:function(t,e){return aa(4194308,4,t,e)},useInsertionEffect:function(t,e){return aa(4,2,t,e)},useMemo:function(t,e){var n=Pt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Pt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Ik.bind(null,oe,t),[r.memoizedState,t]},useRef:function(t){var e=Pt();return t={current:t},e.memoizedState=t},useState:zp,useDebugValue:Id,useDeferredValue:function(t){return Pt().memoizedState=t},useTransition:function(){var t=zp(!1),e=t[0];return t=_k.bind(null,t[1]),Pt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=oe,i=Pt();if(ne){if(n===void 0)throw Error(E(407));n=n()}else{if(n=e(),_e===null)throw Error(E(349));gr&30||Jy(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Bp(ev.bind(null,r,s,t),[t]),r.flags|=2048,Rs(9,Zy.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Pt(),e=_e.identifierPrefix;if(ne){var n=Yt,r=Qt;n=(r&~(1<<32-Nt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=As++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Tk++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Ak={readContext:yt,useCallback:lv,useContext:yt,useEffect:_d,useImperativeHandle:av,useInsertionEffect:iv,useLayoutEffect:sv,useMemo:uv,useReducer:Vu,useRef:rv,useState:function(){return Vu(Ds)},useDebugValue:Id,useDeferredValue:function(t){var e=vt();return cv(e,me.memoizedState,t)},useTransition:function(){var t=Vu(Ds)[0],e=vt().memoizedState;return[t,e]},useMutableSource:Yy,useSyncExternalStore:Xy,useId:hv,unstable_isNewReconciler:!1},Dk={readContext:yt,useCallback:lv,useContext:yt,useEffect:_d,useImperativeHandle:av,useInsertionEffect:iv,useLayoutEffect:sv,useMemo:uv,useReducer:ju,useRef:rv,useState:function(){return ju(Ds)},useDebugValue:Id,useDeferredValue:function(t){var e=vt();return me===null?e.memoizedState=t:cv(e,me.memoizedState,t)},useTransition:function(){var t=ju(Ds)[0],e=vt().memoizedState;return[t,e]},useMutableSource:Yy,useSyncExternalStore:Xy,useId:hv,unstable_isNewReconciler:!1};function di(t,e){try{var n="",r=e;do n+=rS(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function zu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Yc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Rk=typeof WeakMap=="function"?WeakMap:Map;function mv(t,e,n){n=en(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ha||(Ha=!0,oh=r),Yc(t,e)},n}function gv(t,e,n){n=en(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Yc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Yc(t,e),typeof r!="function"&&(On===null?On=new Set([this]):On.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Hp(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Rk;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Hk.bind(null,t,e,n),e.then(t,t))}function qp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Kp(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=en(-1,1),e.tag=2,xn(n,e,1))),n.lanes|=1),t)}var xk=fn.ReactCurrentOwner,Ze=!1;function We(t,e,n,r){e.child=t===null?Gy(e,null,n,r):ci(e,t.child,n,r)}function Wp(t,e,n,r,i){n=n.render;var s=e.ref;return ti(e,i),r=kd(t,e,n,r,s,i),n=Td(),t!==null&&!Ze?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,on(t,e,i)):(ne&&n&&cd(e),e.flags|=1,We(t,e,r,i),e.child)}function Gp(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Pd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,yv(t,e,s,r,i)):(t=ha(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ks,n(o,r)&&t.ref===e.ref)return on(t,e,i)}return e.flags|=1,t=Ln(s,r),t.ref=e.ref,t.return=e,e.child=t}function yv(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ks(s,r)&&t.ref===e.ref)if(Ze=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ze=!0);else return e.lanes=t.lanes,on(t,e,i)}return Xc(t,e,n,r,i)}function vv(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},X(Qr,rt),rt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,X(Qr,rt),rt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,X(Qr,rt),rt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,X(Qr,rt),rt|=r;return We(t,e,i,n),e.child}function wv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Xc(t,e,n,r,i){var s=tt(n)?pr:Be.current;return s=li(e,s),ti(e,i),n=kd(t,e,n,r,s,i),r=Td(),t!==null&&!Ze?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,on(t,e,i)):(ne&&r&&cd(e),e.flags|=1,We(t,e,n,i),e.child)}function Qp(t,e,n,r,i){if(tt(n)){var s=!0;La(e)}else s=!1;if(ti(e,i),e.stateNode===null)la(t,e),Ky(e,n,r),Qc(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=yt(u):(u=tt(n)?pr:Be.current,u=li(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Vp(e,o,r,u),yn=!1;var d=e.memoizedState;o.state=d,Ua(e,r,o,i),l=e.memoizedState,a!==r||d!==l||et.current||yn?(typeof c=="function"&&(Gc(e,n,c,r),l=e.memoizedState),(a=yn||Up(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Hy(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:kt(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=yt(l):(l=tt(n)?pr:Be.current,l=li(e,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&Vp(e,o,r,l),yn=!1,d=e.memoizedState,o.state=d,Ua(e,r,o,i);var y=e.memoizedState;a!==h||d!==y||et.current||yn?(typeof g=="function"&&(Gc(e,n,g,r),y=e.memoizedState),(u=yn||Up(e,n,u,r,d,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Jc(t,e,n,r,s,i)}function Jc(t,e,n,r,i,s){wv(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Lp(e,n,!1),on(t,e,s);r=e.stateNode,xk.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ci(e,t.child,null,s),e.child=ci(e,null,a,s)):We(t,e,a,s),e.memoizedState=r.state,i&&Lp(e,n,!0),e.child}function Ev(t){var e=t.stateNode;e.pendingContext?Pp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Pp(t,e.context,!1),vd(t,e.containerInfo)}function Yp(t,e,n,r,i){return ui(),dd(i),e.flags|=256,We(t,e,n,r),e.child}var Zc={dehydrated:null,treeContext:null,retryLane:0};function eh(t){return{baseLanes:t,cachePool:null,transitions:null}}function Sv(t,e,n){var r=e.pendingProps,i=se.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),X(se,i&1),t===null)return Kc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Rl(o,r,0,null),t=cr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=eh(n),e.memoizedState=Zc,t):Cd(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Ok(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Ln(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Ln(a,s):(s=cr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?eh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Zc,r}return s=t.child,t=s.sibling,r=Ln(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Cd(t,e){return e=Rl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function jo(t,e,n,r){return r!==null&&dd(r),ci(e,t.child,null,n),t=Cd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Ok(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=zu(Error(E(422))),jo(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Rl({mode:"visible",children:r.children},i,0,null),s=cr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ci(e,t.child,null,o),e.child.memoizedState=eh(o),e.memoizedState=Zc,s);if(!(e.mode&1))return jo(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(E(419)),r=zu(s,r,void 0),jo(t,e,o,r)}if(a=(o&t.childLanes)!==0,Ze||a){if(r=_e,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,sn(t,i),At(r,t,i,-1))}return Od(),r=zu(Error(E(421))),jo(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=qk.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,it=Rn(i.nextSibling),st=e,ne=!0,_t=null,t!==null&&(ct[ht++]=Qt,ct[ht++]=Yt,ct[ht++]=mr,Qt=t.id,Yt=t.overflow,mr=e),e=Cd(e,r.children),e.flags|=4096,e)}function Xp(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Wc(t.return,e,n)}function Bu(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function kv(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(We(t,e,r.children,n),r=se.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Xp(t,n,e);else if(t.tag===19)Xp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(X(se,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Va(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Bu(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Va(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Bu(e,!0,n,null,s);break;case"together":Bu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function la(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function on(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),yr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(E(153));if(e.child!==null){for(t=e.child,n=Ln(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ln(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Pk(t,e,n){switch(e.tag){case 3:Ev(e),ui();break;case 5:Qy(e);break;case 1:tt(e.type)&&La(e);break;case 4:vd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;X($a,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(X(se,se.current&1),e.flags|=128,null):n&e.child.childLanes?Sv(t,e,n):(X(se,se.current&1),t=on(t,e,n),t!==null?t.sibling:null);X(se,se.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return kv(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),X(se,se.current),r)break;return null;case 22:case 23:return e.lanes=0,vv(t,e,n)}return on(t,e,n)}var Tv,th,_v,Iv;Tv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};th=function(){};_v=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,rr($t.current);var s=null;switch(n){case"input":i=Tc(t,i),r=Tc(t,r),s=[];break;case"select":i=ae({},i,{value:void 0}),r=ae({},r,{value:void 0}),s=[];break;case"textarea":i=Cc(t,i),r=Cc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Oa)}Ac(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ms.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ms.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ee("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Iv=function(t,e,n,r){n!==r&&(e.flags|=4)};function zi(t,e){if(!ne)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Pe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Lk(t,e,n){var r=e.pendingProps;switch(hd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pe(e),null;case 1:return tt(e.type)&&Pa(),Pe(e),null;case 3:return r=e.stateNode,hi(),te(et),te(Be),Ed(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Uo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,_t!==null&&(uh(_t),_t=null))),th(t,e),Pe(e),null;case 5:wd(e);var i=rr(Ns.current);if(n=e.type,t!==null&&e.stateNode!=null)_v(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(E(166));return Pe(e),null}if(t=rr($t.current),Uo(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Lt]=e,r[Is]=s,t=(e.mode&1)!==0,n){case"dialog":ee("cancel",r),ee("close",r);break;case"iframe":case"object":case"embed":ee("load",r);break;case"video":case"audio":for(i=0;i<Gi.length;i++)ee(Gi[i],r);break;case"source":ee("error",r);break;case"img":case"image":case"link":ee("error",r),ee("load",r);break;case"details":ee("toggle",r);break;case"input":op(r,s),ee("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ee("invalid",r);break;case"textarea":lp(r,s),ee("invalid",r)}Ac(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Fo(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Fo(r.textContent,a,t),i=["children",""+a]):ms.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ee("scroll",r)}switch(n){case"input":Ro(r),ap(r,s,!0);break;case"textarea":Ro(r),up(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Oa)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Jg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Lt]=e,t[Is]=r,Tv(t,e,!1,!1),e.stateNode=t;e:{switch(o=Dc(n,r),n){case"dialog":ee("cancel",t),ee("close",t),i=r;break;case"iframe":case"object":case"embed":ee("load",t),i=r;break;case"video":case"audio":for(i=0;i<Gi.length;i++)ee(Gi[i],t);i=r;break;case"source":ee("error",t),i=r;break;case"img":case"image":case"link":ee("error",t),ee("load",t),i=r;break;case"details":ee("toggle",t),i=r;break;case"input":op(t,r),i=Tc(t,r),ee("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ae({},r,{value:void 0}),ee("invalid",t);break;case"textarea":lp(t,r),i=Cc(t,r),ee("invalid",t);break;default:i=r}Ac(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?ty(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Zg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&gs(t,l):typeof l=="number"&&gs(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ms.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ee("scroll",t):l!=null&&Yh(t,s,l,o))}switch(n){case"input":Ro(t),ap(t,r,!1);break;case"textarea":Ro(t),up(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Un(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Xr(t,!!r.multiple,s,!1):r.defaultValue!=null&&Xr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Oa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Pe(e),null;case 6:if(t&&e.stateNode!=null)Iv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(E(166));if(n=rr(Ns.current),rr($t.current),Uo(e)){if(r=e.stateNode,n=e.memoizedProps,r[Lt]=e,(s=r.nodeValue!==n)&&(t=st,t!==null))switch(t.tag){case 3:Fo(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Fo(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Lt]=e,e.stateNode=r}return Pe(e),null;case 13:if(te(se),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ne&&it!==null&&e.mode&1&&!(e.flags&128))zy(),ui(),e.flags|=98560,s=!1;else if(s=Uo(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(E(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(E(317));s[Lt]=e}else ui(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Pe(e),s=!1}else _t!==null&&(uh(_t),_t=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||se.current&1?ye===0&&(ye=3):Od())),e.updateQueue!==null&&(e.flags|=4),Pe(e),null);case 4:return hi(),th(t,e),t===null&&Ts(e.stateNode.containerInfo),Pe(e),null;case 10:return md(e.type._context),Pe(e),null;case 17:return tt(e.type)&&Pa(),Pe(e),null;case 19:if(te(se),s=e.memoizedState,s===null)return Pe(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)zi(s,!1);else{if(ye!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Va(t),o!==null){for(e.flags|=128,zi(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return X(se,se.current&1|2),e.child}t=t.sibling}s.tail!==null&&he()>fi&&(e.flags|=128,r=!0,zi(s,!1),e.lanes=4194304)}else{if(!r)if(t=Va(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),zi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ne)return Pe(e),null}else 2*he()-s.renderingStartTime>fi&&n!==1073741824&&(e.flags|=128,r=!0,zi(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=he(),e.sibling=null,n=se.current,X(se,r?n&1|2:n&1),e):(Pe(e),null);case 22:case 23:return xd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?rt&1073741824&&(Pe(e),e.subtreeFlags&6&&(e.flags|=8192)):Pe(e),null;case 24:return null;case 25:return null}throw Error(E(156,e.tag))}function bk(t,e){switch(hd(e),e.tag){case 1:return tt(e.type)&&Pa(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return hi(),te(et),te(Be),Ed(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return wd(e),null;case 13:if(te(se),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(E(340));ui()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return te(se),null;case 4:return hi(),null;case 10:return md(e.type._context),null;case 22:case 23:return xd(),null;case 24:return null;default:return null}}var zo=!1,be=!1,Mk=typeof WeakSet=="function"?WeakSet:Set,_=null;function Gr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){le(t,e,r)}else n.current=null}function nh(t,e,n){try{n()}catch(r){le(t,e,r)}}var Jp=!1;function $k(t,e){if(Uc=Da,t=Dy(),ud(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var g;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(g=h.firstChild)!==null;)d=h,h=g;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(g=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Vc={focusedElem:t,selectionRange:n},Da=!1,_=e;_!==null;)if(e=_,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,_=t;else for(;_!==null;){e=_;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,x=y.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?v:kt(e.type,v),x);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(w){le(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,_=t;break}_=e.return}return y=Jp,Jp=!1,y}function os(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&nh(e,n,s)}i=i.next}while(i!==r)}}function Al(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function rh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Cv(t){var e=t.alternate;e!==null&&(t.alternate=null,Cv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Lt],delete e[Is],delete e[Bc],delete e[wk],delete e[Ek])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Nv(t){return t.tag===5||t.tag===3||t.tag===4}function Zp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Nv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ih(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Oa));else if(r!==4&&(t=t.child,t!==null))for(ih(t,e,n),t=t.sibling;t!==null;)ih(t,e,n),t=t.sibling}function sh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(sh(t,e,n),t=t.sibling;t!==null;)sh(t,e,n),t=t.sibling}var Ce=null,Tt=!1;function pn(t,e,n){for(n=n.child;n!==null;)Av(t,e,n),n=n.sibling}function Av(t,e,n){if(Mt&&typeof Mt.onCommitFiberUnmount=="function")try{Mt.onCommitFiberUnmount(El,n)}catch{}switch(n.tag){case 5:be||Gr(n,e);case 6:var r=Ce,i=Tt;Ce=null,pn(t,e,n),Ce=r,Tt=i,Ce!==null&&(Tt?(t=Ce,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ce.removeChild(n.stateNode));break;case 18:Ce!==null&&(Tt?(t=Ce,n=n.stateNode,t.nodeType===8?Mu(t.parentNode,n):t.nodeType===1&&Mu(t,n),Es(t)):Mu(Ce,n.stateNode));break;case 4:r=Ce,i=Tt,Ce=n.stateNode.containerInfo,Tt=!0,pn(t,e,n),Ce=r,Tt=i;break;case 0:case 11:case 14:case 15:if(!be&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&nh(n,e,o),i=i.next}while(i!==r)}pn(t,e,n);break;case 1:if(!be&&(Gr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){le(n,e,a)}pn(t,e,n);break;case 21:pn(t,e,n);break;case 22:n.mode&1?(be=(r=be)||n.memoizedState!==null,pn(t,e,n),be=r):pn(t,e,n);break;default:pn(t,e,n)}}function em(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Mk),e.forEach(function(r){var i=Kk.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function St(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ce=a.stateNode,Tt=!1;break e;case 3:Ce=a.stateNode.containerInfo,Tt=!0;break e;case 4:Ce=a.stateNode.containerInfo,Tt=!0;break e}a=a.return}if(Ce===null)throw Error(E(160));Av(s,o,i),Ce=null,Tt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){le(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Dv(e,t),e=e.sibling}function Dv(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(St(e,t),Ot(t),r&4){try{os(3,t,t.return),Al(3,t)}catch(v){le(t,t.return,v)}try{os(5,t,t.return)}catch(v){le(t,t.return,v)}}break;case 1:St(e,t),Ot(t),r&512&&n!==null&&Gr(n,n.return);break;case 5:if(St(e,t),Ot(t),r&512&&n!==null&&Gr(n,n.return),t.flags&32){var i=t.stateNode;try{gs(i,"")}catch(v){le(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Yg(i,s),Dc(a,o);var u=Dc(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?ty(i,h):c==="dangerouslySetInnerHTML"?Zg(i,h):c==="children"?gs(i,h):Yh(i,c,h,u)}switch(a){case"input":_c(i,s);break;case"textarea":Xg(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Xr(i,!!s.multiple,g,!1):d!==!!s.multiple&&(s.defaultValue!=null?Xr(i,!!s.multiple,s.defaultValue,!0):Xr(i,!!s.multiple,s.multiple?[]:"",!1))}i[Is]=s}catch(v){le(t,t.return,v)}}break;case 6:if(St(e,t),Ot(t),r&4){if(t.stateNode===null)throw Error(E(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){le(t,t.return,v)}}break;case 3:if(St(e,t),Ot(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Es(e.containerInfo)}catch(v){le(t,t.return,v)}break;case 4:St(e,t),Ot(t);break;case 13:St(e,t),Ot(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Dd=he())),r&4&&em(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(be=(u=be)||c,St(e,t),be=u):St(e,t),Ot(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(_=t,c=t.child;c!==null;){for(h=_=c;_!==null;){switch(d=_,g=d.child,d.tag){case 0:case 11:case 14:case 15:os(4,d,d.return);break;case 1:Gr(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(v){le(r,n,v)}}break;case 5:Gr(d,d.return);break;case 22:if(d.memoizedState!==null){nm(h);continue}}g!==null?(g.return=d,_=g):nm(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=ey("display",o))}catch(v){le(t,t.return,v)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){le(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:St(e,t),Ot(t),r&4&&em(t);break;case 21:break;default:St(e,t),Ot(t)}}function Ot(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Nv(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(gs(i,""),r.flags&=-33);var s=Zp(t);sh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Zp(t);ih(t,a,o);break;default:throw Error(E(161))}}catch(l){le(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Fk(t,e,n){_=t,Rv(t)}function Rv(t,e,n){for(var r=(t.mode&1)!==0;_!==null;){var i=_,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||zo;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||be;a=zo;var u=be;if(zo=o,(be=l)&&!u)for(_=i;_!==null;)o=_,l=o.child,o.tag===22&&o.memoizedState!==null?rm(i):l!==null?(l.return=o,_=l):rm(i);for(;s!==null;)_=s,Rv(s),s=s.sibling;_=i,zo=a,be=u}tm(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,_=s):tm(t)}}function tm(t){for(;_!==null;){var e=_;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:be||Al(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!be)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:kt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Fp(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Fp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&Es(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}be||e.flags&512&&rh(e)}catch(d){le(e,e.return,d)}}if(e===t){_=null;break}if(n=e.sibling,n!==null){n.return=e.return,_=n;break}_=e.return}}function nm(t){for(;_!==null;){var e=_;if(e===t){_=null;break}var n=e.sibling;if(n!==null){n.return=e.return,_=n;break}_=e.return}}function rm(t){for(;_!==null;){var e=_;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Al(4,e)}catch(l){le(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){le(e,i,l)}}var s=e.return;try{rh(e)}catch(l){le(e,s,l)}break;case 5:var o=e.return;try{rh(e)}catch(l){le(e,o,l)}}}catch(l){le(e,e.return,l)}if(e===t){_=null;break}var a=e.sibling;if(a!==null){a.return=e.return,_=a;break}_=e.return}}var Uk=Math.ceil,Ba=fn.ReactCurrentDispatcher,Nd=fn.ReactCurrentOwner,pt=fn.ReactCurrentBatchConfig,W=0,_e=null,pe=null,Ae=0,rt=0,Qr=qn(0),ye=0,xs=null,yr=0,Dl=0,Ad=0,as=null,Je=null,Dd=0,fi=1/0,Kt=null,Ha=!1,oh=null,On=null,Bo=!1,In=null,qa=0,ls=0,ah=null,ua=-1,ca=0;function Qe(){return W&6?he():ua!==-1?ua:ua=he()}function Pn(t){return t.mode&1?W&2&&Ae!==0?Ae&-Ae:kk.transition!==null?(ca===0&&(ca=fy()),ca):(t=Y,t!==0||(t=window.event,t=t===void 0?16:Ey(t.type)),t):1}function At(t,e,n,r){if(50<ls)throw ls=0,ah=null,Error(E(185));Qs(t,n,r),(!(W&2)||t!==_e)&&(t===_e&&(!(W&2)&&(Dl|=n),ye===4&&wn(t,Ae)),nt(t,r),n===1&&W===0&&!(e.mode&1)&&(fi=he()+500,Il&&Kn()))}function nt(t,e){var n=t.callbackNode;kS(t,e);var r=Aa(t,t===_e?Ae:0);if(r===0)n!==null&&dp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&dp(n),e===1)t.tag===0?Sk(im.bind(null,t)):Uy(im.bind(null,t)),yk(function(){!(W&6)&&Kn()}),n=null;else{switch(py(r)){case 1:n=td;break;case 4:n=hy;break;case 16:n=Na;break;case 536870912:n=dy;break;default:n=Na}n=Fv(n,xv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function xv(t,e){if(ua=-1,ca=0,W&6)throw Error(E(327));var n=t.callbackNode;if(ni()&&t.callbackNode!==n)return null;var r=Aa(t,t===_e?Ae:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ka(t,r);else{e=r;var i=W;W|=2;var s=Pv();(_e!==t||Ae!==e)&&(Kt=null,fi=he()+500,ur(t,e));do try{zk();break}catch(a){Ov(t,a)}while(1);pd(),Ba.current=s,W=i,pe!==null?e=0:(_e=null,Ae=0,e=ye)}if(e!==0){if(e===2&&(i=Lc(t),i!==0&&(r=i,e=lh(t,i))),e===1)throw n=xs,ur(t,0),wn(t,r),nt(t,he()),n;if(e===6)wn(t,r);else{if(i=t.current.alternate,!(r&30)&&!Vk(i)&&(e=Ka(t,r),e===2&&(s=Lc(t),s!==0&&(r=s,e=lh(t,s))),e===1))throw n=xs,ur(t,0),wn(t,r),nt(t,he()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(E(345));case 2:Zn(t,Je,Kt);break;case 3:if(wn(t,r),(r&130023424)===r&&(e=Dd+500-he(),10<e)){if(Aa(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Qe(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=zc(Zn.bind(null,t,Je,Kt),e);break}Zn(t,Je,Kt);break;case 4:if(wn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Nt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=he()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Uk(r/1960))-r,10<r){t.timeoutHandle=zc(Zn.bind(null,t,Je,Kt),r);break}Zn(t,Je,Kt);break;case 5:Zn(t,Je,Kt);break;default:throw Error(E(329))}}}return nt(t,he()),t.callbackNode===n?xv.bind(null,t):null}function lh(t,e){var n=as;return t.current.memoizedState.isDehydrated&&(ur(t,e).flags|=256),t=Ka(t,e),t!==2&&(e=Je,Je=n,e!==null&&uh(e)),t}function uh(t){Je===null?Je=t:Je.push.apply(Je,t)}function Vk(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Rt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function wn(t,e){for(e&=~Ad,e&=~Dl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Nt(e),r=1<<n;t[n]=-1,e&=~r}}function im(t){if(W&6)throw Error(E(327));ni();var e=Aa(t,0);if(!(e&1))return nt(t,he()),null;var n=Ka(t,e);if(t.tag!==0&&n===2){var r=Lc(t);r!==0&&(e=r,n=lh(t,r))}if(n===1)throw n=xs,ur(t,0),wn(t,e),nt(t,he()),n;if(n===6)throw Error(E(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Zn(t,Je,Kt),nt(t,he()),null}function Rd(t,e){var n=W;W|=1;try{return t(e)}finally{W=n,W===0&&(fi=he()+500,Il&&Kn())}}function vr(t){In!==null&&In.tag===0&&!(W&6)&&ni();var e=W;W|=1;var n=pt.transition,r=Y;try{if(pt.transition=null,Y=1,t)return t()}finally{Y=r,pt.transition=n,W=e,!(W&6)&&Kn()}}function xd(){rt=Qr.current,te(Qr)}function ur(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,gk(n)),pe!==null)for(n=pe.return;n!==null;){var r=n;switch(hd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Pa();break;case 3:hi(),te(et),te(Be),Ed();break;case 5:wd(r);break;case 4:hi();break;case 13:te(se);break;case 19:te(se);break;case 10:md(r.type._context);break;case 22:case 23:xd()}n=n.return}if(_e=t,pe=t=Ln(t.current,null),Ae=rt=e,ye=0,xs=null,Ad=Dl=yr=0,Je=as=null,nr!==null){for(e=0;e<nr.length;e++)if(n=nr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}nr=null}return t}function Ov(t,e){do{var n=pe;try{if(pd(),oa.current=za,ja){for(var r=oe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ja=!1}if(gr=0,Te=me=oe=null,ss=!1,As=0,Nd.current=null,n===null||n.return===null){ye=1,xs=e,pe=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ae,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=qp(o);if(g!==null){g.flags&=-257,Kp(g,o,a,s,e),g.mode&1&&Hp(s,u,e),e=g,l=u;var y=e.updateQueue;if(y===null){var v=new Set;v.add(l),e.updateQueue=v}else y.add(l);break e}else{if(!(e&1)){Hp(s,u,e),Od();break e}l=Error(E(426))}}else if(ne&&a.mode&1){var x=qp(o);if(x!==null){!(x.flags&65536)&&(x.flags|=256),Kp(x,o,a,s,e),dd(di(l,a));break e}}s=l=di(l,a),ye!==4&&(ye=2),as===null?as=[s]:as.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=mv(s,l,e);$p(s,p);break e;case 1:a=l;var f=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(On===null||!On.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=gv(s,a,e);$p(s,w);break e}}s=s.return}while(s!==null)}bv(n)}catch(T){e=T,pe===n&&n!==null&&(pe=n=n.return);continue}break}while(1)}function Pv(){var t=Ba.current;return Ba.current=za,t===null?za:t}function Od(){(ye===0||ye===3||ye===2)&&(ye=4),_e===null||!(yr&268435455)&&!(Dl&268435455)||wn(_e,Ae)}function Ka(t,e){var n=W;W|=2;var r=Pv();(_e!==t||Ae!==e)&&(Kt=null,ur(t,e));do try{jk();break}catch(i){Ov(t,i)}while(1);if(pd(),W=n,Ba.current=r,pe!==null)throw Error(E(261));return _e=null,Ae=0,ye}function jk(){for(;pe!==null;)Lv(pe)}function zk(){for(;pe!==null&&!fS();)Lv(pe)}function Lv(t){var e=$v(t.alternate,t,rt);t.memoizedProps=t.pendingProps,e===null?bv(t):pe=e,Nd.current=null}function bv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=bk(n,e),n!==null){n.flags&=32767,pe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ye=6,pe=null;return}}else if(n=Lk(n,e,rt),n!==null){pe=n;return}if(e=e.sibling,e!==null){pe=e;return}pe=e=t}while(e!==null);ye===0&&(ye=5)}function Zn(t,e,n){var r=Y,i=pt.transition;try{pt.transition=null,Y=1,Bk(t,e,n,r)}finally{pt.transition=i,Y=r}return null}function Bk(t,e,n,r){do ni();while(In!==null);if(W&6)throw Error(E(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(E(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(TS(t,s),t===_e&&(pe=_e=null,Ae=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Bo||(Bo=!0,Fv(Na,function(){return ni(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=pt.transition,pt.transition=null;var o=Y;Y=1;var a=W;W|=4,Nd.current=null,$k(t,n),Dv(n,t),uk(Vc),Da=!!Uc,Vc=Uc=null,t.current=n,Fk(n),pS(),W=a,Y=o,pt.transition=s}else t.current=n;if(Bo&&(Bo=!1,In=t,qa=i),s=t.pendingLanes,s===0&&(On=null),yS(n.stateNode),nt(t,he()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ha)throw Ha=!1,t=oh,oh=null,t;return qa&1&&t.tag!==0&&ni(),s=t.pendingLanes,s&1?t===ah?ls++:(ls=0,ah=t):ls=0,Kn(),null}function ni(){if(In!==null){var t=py(qa),e=pt.transition,n=Y;try{if(pt.transition=null,Y=16>t?16:t,In===null)var r=!1;else{if(t=In,In=null,qa=0,W&6)throw Error(E(331));var i=W;for(W|=4,_=t.current;_!==null;){var s=_,o=s.child;if(_.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(_=u;_!==null;){var c=_;switch(c.tag){case 0:case 11:case 15:os(8,c,s)}var h=c.child;if(h!==null)h.return=c,_=h;else for(;_!==null;){c=_;var d=c.sibling,g=c.return;if(Cv(c),c===u){_=null;break}if(d!==null){d.return=g,_=d;break}_=g}}}var y=s.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var x=v.sibling;v.sibling=null,v=x}while(v!==null)}}_=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,_=o;else e:for(;_!==null;){if(s=_,s.flags&2048)switch(s.tag){case 0:case 11:case 15:os(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,_=p;break e}_=s.return}}var f=t.current;for(_=f;_!==null;){o=_;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,_=m;else e:for(o=f;_!==null;){if(a=_,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Al(9,a)}}catch(T){le(a,a.return,T)}if(a===o){_=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,_=w;break e}_=a.return}}if(W=i,Kn(),Mt&&typeof Mt.onPostCommitFiberRoot=="function")try{Mt.onPostCommitFiberRoot(El,t)}catch{}r=!0}return r}finally{Y=n,pt.transition=e}}return!1}function sm(t,e,n){e=di(n,e),e=mv(t,e,1),t=xn(t,e,1),e=Qe(),t!==null&&(Qs(t,1,e),nt(t,e))}function le(t,e,n){if(t.tag===3)sm(t,t,n);else for(;e!==null;){if(e.tag===3){sm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(On===null||!On.has(r))){t=di(n,t),t=gv(e,t,1),e=xn(e,t,1),t=Qe(),e!==null&&(Qs(e,1,t),nt(e,t));break}}e=e.return}}function Hk(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Qe(),t.pingedLanes|=t.suspendedLanes&n,_e===t&&(Ae&n)===n&&(ye===4||ye===3&&(Ae&130023424)===Ae&&500>he()-Dd?ur(t,0):Ad|=n),nt(t,e)}function Mv(t,e){e===0&&(t.mode&1?(e=Po,Po<<=1,!(Po&130023424)&&(Po=4194304)):e=1);var n=Qe();t=sn(t,e),t!==null&&(Qs(t,e,n),nt(t,n))}function qk(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Mv(t,n)}function Kk(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(e),Mv(t,n)}var $v;$v=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||et.current)Ze=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ze=!1,Pk(t,e,n);Ze=!!(t.flags&131072)}else Ze=!1,ne&&e.flags&1048576&&Vy(e,Ma,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;la(t,e),t=e.pendingProps;var i=li(e,Be.current);ti(e,n),i=kd(null,e,r,t,i,n);var s=Td();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,tt(r)?(s=!0,La(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,yd(e),i.updater=Cl,e.stateNode=i,i._reactInternals=e,Qc(e,r,t,n),e=Jc(null,e,r,!0,s,n)):(e.tag=0,ne&&s&&cd(e),We(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(la(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Gk(r),t=kt(r,t),i){case 0:e=Xc(null,e,r,t,n);break e;case 1:e=Qp(null,e,r,t,n);break e;case 11:e=Wp(null,e,r,t,n);break e;case 14:e=Gp(null,e,r,kt(r.type,t),n);break e}throw Error(E(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:kt(r,i),Xc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:kt(r,i),Qp(t,e,r,i,n);case 3:e:{if(Ev(e),t===null)throw Error(E(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Hy(t,e),Ua(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=di(Error(E(423)),e),e=Yp(t,e,r,n,i);break e}else if(r!==i){i=di(Error(E(424)),e),e=Yp(t,e,r,n,i);break e}else for(it=Rn(e.stateNode.containerInfo.firstChild),st=e,ne=!0,_t=null,n=Gy(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ui(),r===i){e=on(t,e,n);break e}We(t,e,r,n)}e=e.child}return e;case 5:return Qy(e),t===null&&Kc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,jc(r,i)?o=null:s!==null&&jc(r,s)&&(e.flags|=32),wv(t,e),We(t,e,o,n),e.child;case 6:return t===null&&Kc(e),null;case 13:return Sv(t,e,n);case 4:return vd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ci(e,null,r,n):We(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:kt(r,i),Wp(t,e,r,i,n);case 7:return We(t,e,e.pendingProps,n),e.child;case 8:return We(t,e,e.pendingProps.children,n),e.child;case 12:return We(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,X($a,r._currentValue),r._currentValue=o,s!==null)if(Rt(s.value,o)){if(s.children===i.children&&!et.current){e=on(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=en(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Wc(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(E(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Wc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}We(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ti(e,n),i=yt(i),r=r(i),e.flags|=1,We(t,e,r,n),e.child;case 14:return r=e.type,i=kt(r,e.pendingProps),i=kt(r.type,i),Gp(t,e,r,i,n);case 15:return yv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:kt(r,i),la(t,e),e.tag=1,tt(r)?(t=!0,La(e)):t=!1,ti(e,n),Ky(e,r,i),Qc(e,r,i,n),Jc(null,e,r,!0,t,n);case 19:return kv(t,e,n);case 22:return vv(t,e,n)}throw Error(E(156,e.tag))};function Fv(t,e){return cy(t,e)}function Wk(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ft(t,e,n,r){return new Wk(t,e,n,r)}function Pd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Gk(t){if(typeof t=="function")return Pd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Jh)return 11;if(t===Zh)return 14}return 2}function Ln(t,e){var n=t.alternate;return n===null?(n=ft(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ha(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Pd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ur:return cr(n.children,i,s,e);case Xh:o=8,i|=8;break;case wc:return t=ft(12,n,e,i|2),t.elementType=wc,t.lanes=s,t;case Ec:return t=ft(13,n,e,i),t.elementType=Ec,t.lanes=s,t;case Sc:return t=ft(19,n,e,i),t.elementType=Sc,t.lanes=s,t;case Wg:return Rl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case qg:o=10;break e;case Kg:o=9;break e;case Jh:o=11;break e;case Zh:o=14;break e;case gn:o=16,r=null;break e}throw Error(E(130,t==null?t:typeof t,""))}return e=ft(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function cr(t,e,n,r){return t=ft(7,t,r,e),t.lanes=n,t}function Rl(t,e,n,r){return t=ft(22,t,r,e),t.elementType=Wg,t.lanes=n,t.stateNode={isHidden:!1},t}function Hu(t,e,n){return t=ft(6,t,null,e),t.lanes=n,t}function qu(t,e,n){return e=ft(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Qk(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Iu(0),this.expirationTimes=Iu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Iu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ld(t,e,n,r,i,s,o,a,l){return t=new Qk(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ft(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},yd(s),t}function Yk(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Fr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Uv(t){if(!t)return Vn;t=t._reactInternals;e:{if(Dr(t)!==t||t.tag!==1)throw Error(E(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(tt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(E(171))}if(t.tag===1){var n=t.type;if(tt(n))return Fy(t,n,e)}return e}function Vv(t,e,n,r,i,s,o,a,l){return t=Ld(n,r,!0,t,i,s,o,a,l),t.context=Uv(null),n=t.current,r=Qe(),i=Pn(n),s=en(r,i),s.callback=e??null,xn(n,s,i),t.current.lanes=i,Qs(t,i,r),nt(t,r),t}function xl(t,e,n,r){var i=e.current,s=Qe(),o=Pn(i);return n=Uv(n),e.context===null?e.context=n:e.pendingContext=n,e=en(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=xn(i,e,o),t!==null&&(At(t,i,o,s),sa(t,i,o)),o}function Wa(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function om(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function bd(t,e){om(t,e),(t=t.alternate)&&om(t,e)}function Xk(){return null}var jv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Md(t){this._internalRoot=t}Ol.prototype.render=Md.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(E(409));xl(t,e,null,null)};Ol.prototype.unmount=Md.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;vr(function(){xl(null,t,null,null)}),e[rn]=null}};function Ol(t){this._internalRoot=t}Ol.prototype.unstable_scheduleHydration=function(t){if(t){var e=yy();t={blockedOn:null,target:t,priority:e};for(var n=0;n<vn.length&&e!==0&&e<vn[n].priority;n++);vn.splice(n,0,t),n===0&&wy(t)}};function $d(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Pl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function am(){}function Jk(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Wa(o);s.call(u)}}var o=Vv(e,r,t,0,null,!1,!1,"",am);return t._reactRootContainer=o,t[rn]=o.current,Ts(t.nodeType===8?t.parentNode:t),vr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Wa(l);a.call(u)}}var l=Ld(t,0,!1,null,null,!1,!1,"",am);return t._reactRootContainer=l,t[rn]=l.current,Ts(t.nodeType===8?t.parentNode:t),vr(function(){xl(e,l,n,r)}),l}function Ll(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Wa(o);a.call(l)}}xl(e,o,t,i)}else o=Jk(n,e,t,i,r);return Wa(o)}my=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Wi(e.pendingLanes);n!==0&&(nd(e,n|1),nt(e,he()),!(W&6)&&(fi=he()+500,Kn()))}break;case 13:vr(function(){var r=sn(t,1);if(r!==null){var i=Qe();At(r,t,1,i)}}),bd(t,1)}};rd=function(t){if(t.tag===13){var e=sn(t,134217728);if(e!==null){var n=Qe();At(e,t,134217728,n)}bd(t,134217728)}};gy=function(t){if(t.tag===13){var e=Pn(t),n=sn(t,e);if(n!==null){var r=Qe();At(n,t,e,r)}bd(t,e)}};yy=function(){return Y};vy=function(t,e){var n=Y;try{return Y=t,e()}finally{Y=n}};xc=function(t,e,n){switch(e){case"input":if(_c(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=_l(r);if(!i)throw Error(E(90));Qg(r),_c(r,i)}}}break;case"textarea":Xg(t,n);break;case"select":e=n.value,e!=null&&Xr(t,!!n.multiple,e,!1)}};iy=Rd;sy=vr;var Zk={usingClientEntryPoint:!1,Events:[Xs,Br,_l,ny,ry,Rd]},Bi={findFiberByHostInstance:tr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},eT={bundleType:Bi.bundleType,version:Bi.version,rendererPackageName:Bi.rendererPackageName,rendererConfig:Bi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:fn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ly(t),t===null?null:t.stateNode},findFiberByHostInstance:Bi.findFiberByHostInstance||Xk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ho=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ho.isDisabled&&Ho.supportsFiber)try{El=Ho.inject(eT),Mt=Ho}catch{}}lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zk;lt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!$d(e))throw Error(E(200));return Yk(t,e,null,n)};lt.createRoot=function(t,e){if(!$d(t))throw Error(E(299));var n=!1,r="",i=jv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Ld(t,1,!1,null,null,n,!1,r,i),t[rn]=e.current,Ts(t.nodeType===8?t.parentNode:t),new Md(e)};lt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(E(188)):(t=Object.keys(t).join(","),Error(E(268,t)));return t=ly(e),t=t===null?null:t.stateNode,t};lt.flushSync=function(t){return vr(t)};lt.hydrate=function(t,e,n){if(!Pl(e))throw Error(E(200));return Ll(null,t,e,!0,n)};lt.hydrateRoot=function(t,e,n){if(!$d(t))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=jv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Vv(e,null,t,1,n??null,i,!1,s,o),t[rn]=e.current,Ts(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Ol(e)};lt.render=function(t,e,n){if(!Pl(e))throw Error(E(200));return Ll(null,t,e,!1,n)};lt.unmountComponentAtNode=function(t){if(!Pl(t))throw Error(E(40));return t._reactRootContainer?(vr(function(){Ll(null,null,t,!1,function(){t._reactRootContainer=null,t[rn]=null})}),!0):!1};lt.unstable_batchedUpdates=Rd;lt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Pl(n))throw Error(E(200));if(t==null||t._reactInternals===void 0)throw Error(E(38));return Ll(t,e,n,!1,r)};lt.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=lt})(XE);var lm=gc;mc.createRoot=lm.createRoot,mc.hydrateRoot=lm.hydrateRoot;/**
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
 */const zv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},tT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Bv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(d=64)),r.push(n[c],n[h],n[d],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(zv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):tT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw Error();const d=s<<2|a>>4;if(r.push(d),u!==64){const g=a<<4&240|u>>2;if(r.push(g),h!==64){const y=u<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},nT=function(t){const e=zv(t);return Bv.encodeByteArray(e,!0)},Ga=function(t){return nT(t).replace(/\./g,"")},Hv=function(t){try{return Bv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function rT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const iT=()=>rT().__FIREBASE_DEFAULTS__,sT=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},oT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Hv(t[1]);return e&&JSON.parse(e)},Fd=()=>{try{return iT()||sT()||oT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},qv=t=>{var e,n;return(n=(e=Fd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},aT=t=>{const e=qv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},lT=()=>{var t;return(t=Fd())===null||t===void 0?void 0:t.config},Kv=t=>{var e;return(e=Fd())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class uT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function cT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Ga(JSON.stringify(n)),Ga(JSON.stringify(o)),a].join(".")}/**
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
 */function He(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(He())}function dT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function fT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function pT(){const t=He();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Wv(){try{return typeof indexedDB=="object"}catch{return!1}}function Gv(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function mT(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const gT="FirebaseError";class Ht extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=gT,Object.setPrototypeOf(this,Ht.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Rr.prototype.create)}}class Rr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?yT(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Ht(i,a,r)}}function yT(t,e){return t.replace(vT,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const vT=/\{\$([^}]+)}/g;function wT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Qa(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(um(s)&&um(o)){if(!Qa(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function um(t){return t!==null&&typeof t=="object"}/**
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
 */function Zs(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Qi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Yi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function ET(t,e){const n=new ST(t,e);return n.subscribe.bind(n)}class ST{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");kT(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ku),i.error===void 0&&(i.error=Ku),i.complete===void 0&&(i.complete=Ku);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function kT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ku(){}/**
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
 */function qe(t){return t&&t._delegate?t._delegate:t}class xt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const er="[DEFAULT]";/**
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
 */class TT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new uT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(IT(e))try{this.getOrInitializeService({instanceIdentifier:er})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=er){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=er){return this.instances.has(e)}getOptions(e=er){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:_T(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=er){return this.component?this.component.multipleInstances?e:er:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _T(t){return t===er?void 0:t}function IT(t){return t.instantiationMode==="EAGER"}/**
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
 */class CT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new TT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var G;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(G||(G={}));const NT={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},AT=G.INFO,DT={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},RT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=DT[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ud{constructor(e){this.name=e,this._logLevel=AT,this._logHandler=RT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in G))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?NT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...e),this._logHandler(this,G.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...e),this._logHandler(this,G.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,G.INFO,...e),this._logHandler(this,G.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,G.WARN,...e),this._logHandler(this,G.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...e),this._logHandler(this,G.ERROR,...e)}}const xT=(t,e)=>e.some(n=>t instanceof n);let cm,hm;function OT(){return cm||(cm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function PT(){return hm||(hm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Qv=new WeakMap,ch=new WeakMap,Yv=new WeakMap,Wu=new WeakMap,Vd=new WeakMap;function LT(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(tn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Qv.set(n,t)}).catch(()=>{}),Vd.set(e,t),e}function bT(t){if(ch.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});ch.set(t,e)}let hh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ch.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Yv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return tn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function MT(t){hh=t(hh)}function $T(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Gu(this),e,...n);return Yv.set(r,e.sort?e.sort():[e]),tn(r)}:PT().includes(t)?function(...e){return t.apply(Gu(this),e),tn(Qv.get(this))}:function(...e){return tn(t.apply(Gu(this),e))}}function FT(t){return typeof t=="function"?$T(t):(t instanceof IDBTransaction&&bT(t),xT(t,OT())?new Proxy(t,hh):t)}function tn(t){if(t instanceof IDBRequest)return LT(t);if(Wu.has(t))return Wu.get(t);const e=FT(t);return e!==t&&(Wu.set(t,e),Vd.set(e,t)),e}const Gu=t=>Vd.get(t);function bl(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=tn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(tn(o.result),l.oldVersion,l.newVersion,tn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}function Qu(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",()=>e()),tn(n).then(()=>{})}const UT=["get","getKey","getAll","getAllKeys","count"],VT=["put","add","delete","clear"],Yu=new Map;function dm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Yu.get(e))return Yu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=VT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||UT.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Yu.set(e,s),s}MT(t=>({...t,get:(e,n,r)=>dm(e,n)||t.get(e,n,r),has:(e,n)=>!!dm(e,n)||t.has(e,n)}));/**
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
 */class jT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(zT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function zT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const dh="@firebase/app",fm="0.9.3";/**
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
 */const wr=new Ud("@firebase/app"),BT="@firebase/app-compat",HT="@firebase/analytics-compat",qT="@firebase/analytics",KT="@firebase/app-check-compat",WT="@firebase/app-check",GT="@firebase/auth",QT="@firebase/auth-compat",YT="@firebase/database",XT="@firebase/database-compat",JT="@firebase/functions",ZT="@firebase/functions-compat",e_="@firebase/installations",t_="@firebase/installations-compat",n_="@firebase/messaging",r_="@firebase/messaging-compat",i_="@firebase/performance",s_="@firebase/performance-compat",o_="@firebase/remote-config",a_="@firebase/remote-config-compat",l_="@firebase/storage",u_="@firebase/storage-compat",c_="@firebase/firestore",h_="@firebase/firestore-compat",d_="firebase",f_="9.17.1";/**
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
 */const fh="[DEFAULT]",p_={[dh]:"fire-core",[BT]:"fire-core-compat",[qT]:"fire-analytics",[HT]:"fire-analytics-compat",[WT]:"fire-app-check",[KT]:"fire-app-check-compat",[GT]:"fire-auth",[QT]:"fire-auth-compat",[YT]:"fire-rtdb",[XT]:"fire-rtdb-compat",[JT]:"fire-fn",[ZT]:"fire-fn-compat",[e_]:"fire-iid",[t_]:"fire-iid-compat",[n_]:"fire-fcm",[r_]:"fire-fcm-compat",[i_]:"fire-perf",[s_]:"fire-perf-compat",[o_]:"fire-rc",[a_]:"fire-rc-compat",[l_]:"fire-gcs",[u_]:"fire-gcs-compat",[c_]:"fire-fst",[h_]:"fire-fst-compat","fire-js":"fire-js",[d_]:"fire-js-all"};/**
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
 */const Ya=new Map,ph=new Map;function m_(t,e){try{t.container.addComponent(e)}catch(n){wr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function jt(t){const e=t.name;if(ph.has(e))return wr.debug(`There were multiple attempts to register component ${e}.`),!1;ph.set(e,t);for(const n of Ya.values())m_(n,t);return!0}function Ii(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const g_={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},bn=new Rr("app","Firebase",g_);/**
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
 */class y_{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new xt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw bn.create("app-deleted",{appName:this._name})}}/**
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
 */const eo=f_;function Xv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:fh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw bn.create("bad-app-name",{appName:String(i)});if(n||(n=lT()),!n)throw bn.create("no-options");const s=Ya.get(i);if(s){if(Qa(n,s.options)&&Qa(r,s.config))return s;throw bn.create("duplicate-app",{appName:i})}const o=new CT(i);for(const l of ph.values())o.addComponent(l);const a=new y_(n,r,o);return Ya.set(i,a),a}function jd(t=fh){const e=Ya.get(t);if(!e&&t===fh)return Xv();if(!e)throw bn.create("no-app",{appName:t});return e}function mt(t,e,n){var r;let i=(r=p_[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),wr.warn(a.join(" "));return}jt(new xt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const v_="firebase-heartbeat-database",w_=1,Os="firebase-heartbeat-store";let Xu=null;function Jv(){return Xu||(Xu=bl(v_,w_,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Os)}}}).catch(t=>{throw bn.create("idb-open",{originalErrorMessage:t.message})})),Xu}async function E_(t){try{return(await Jv()).transaction(Os).objectStore(Os).get(Zv(t))}catch(e){if(e instanceof Ht)wr.warn(e.message);else{const n=bn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});wr.warn(n.message)}}}async function pm(t,e){try{const r=(await Jv()).transaction(Os,"readwrite");return await r.objectStore(Os).put(e,Zv(t)),r.done}catch(n){if(n instanceof Ht)wr.warn(n.message);else{const r=bn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});wr.warn(r.message)}}}function Zv(t){return`${t.name}!${t.options.appId}`}/**
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
 */const S_=1024,k_=30*24*60*60*1e3;class T_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new I_(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=mm();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=k_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=mm(),{heartbeatsToSend:n,unsentEntries:r}=__(this._heartbeatsCache.heartbeats),i=Ga(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function mm(){return new Date().toISOString().substring(0,10)}function __(t,e=S_){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),gm(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),gm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class I_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Wv()?Gv().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await E_(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return pm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return pm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function gm(t){return Ga(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function C_(t){jt(new xt("platform-logger",e=>new jT(e),"PRIVATE")),jt(new xt("heartbeat",e=>new T_(e),"PRIVATE")),mt(dh,fm,t),mt(dh,fm,"esm2017"),mt("fire-js","")}C_("");const e0="@firebase/installations",zd="0.6.3";/**
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
 */const t0=1e4,n0=`w:${zd}`,r0="FIS_v2",N_="https://firebaseinstallations.googleapis.com/v1",A_=60*60*1e3,D_="installations",R_="Installations";/**
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
 */const x_={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Er=new Rr(D_,R_,x_);function i0(t){return t instanceof Ht&&t.code.includes("request-failed")}/**
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
 */function s0({projectId:t}){return`${N_}/projects/${t}/installations`}function o0(t){return{token:t.token,requestStatus:2,expiresIn:P_(t.expiresIn),creationTime:Date.now()}}async function a0(t,e){const r=(await e.json()).error;return Er.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function l0({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function O_(t,{refreshToken:e}){const n=l0(t);return n.append("Authorization",L_(e)),n}async function u0(t){const e=await t();return e.status>=500&&e.status<600?t():e}function P_(t){return Number(t.replace("s","000"))}function L_(t){return`${r0} ${t}`}/**
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
 */async function b_({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=s0(t),i=l0(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:r0,appId:t.appId,sdkVersion:n0},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await u0(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:o0(u.authToken)}}else throw await a0("Create Installation",l)}/**
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
 */function c0(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function M_(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const $_=/^[cdef][\w-]{21}$/,mh="";function F_(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=U_(t);return $_.test(n)?n:mh}catch{return mh}}function U_(t){return M_(t).substr(0,22)}/**
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
 */function Ml(t){return`${t.appName}!${t.appId}`}/**
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
 */const h0=new Map;function d0(t,e){const n=Ml(t);f0(n,e),V_(n,e)}function f0(t,e){const n=h0.get(t);if(n)for(const r of n)r(e)}function V_(t,e){const n=j_();n&&n.postMessage({key:t,fid:e}),z_()}let ir=null;function j_(){return!ir&&"BroadcastChannel"in self&&(ir=new BroadcastChannel("[Firebase] FID Change"),ir.onmessage=t=>{f0(t.data.key,t.data.fid)}),ir}function z_(){h0.size===0&&ir&&(ir.close(),ir=null)}/**
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
 */const B_="firebase-installations-database",H_=1,Sr="firebase-installations-store";let Ju=null;function Bd(){return Ju||(Ju=bl(B_,H_,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Sr)}}})),Ju}async function Xa(t,e){const n=Ml(t),i=(await Bd()).transaction(Sr,"readwrite"),s=i.objectStore(Sr),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&d0(t,e.fid),e}async function p0(t){const e=Ml(t),r=(await Bd()).transaction(Sr,"readwrite");await r.objectStore(Sr).delete(e),await r.done}async function $l(t,e){const n=Ml(t),i=(await Bd()).transaction(Sr,"readwrite"),s=i.objectStore(Sr),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&d0(t,a.fid),a}/**
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
 */async function Hd(t){let e;const n=await $l(t.appConfig,r=>{const i=q_(r),s=K_(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===mh?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function q_(t){const e=t||{fid:F_(),registrationStatus:0};return m0(e)}function K_(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Er.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=W_(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:G_(t)}:{installationEntry:e}}async function W_(t,e){try{const n=await b_(t,e);return Xa(t.appConfig,n)}catch(n){throw i0(n)&&n.customData.serverCode===409?await p0(t.appConfig):await Xa(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function G_(t){let e=await ym(t.appConfig);for(;e.registrationStatus===1;)await c0(100),e=await ym(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Hd(t);return r||n}return e}function ym(t){return $l(t,e=>{if(!e)throw Er.create("installation-not-found");return m0(e)})}function m0(t){return Q_(t)?{fid:t.fid,registrationStatus:0}:t}function Q_(t){return t.registrationStatus===1&&t.registrationTime+t0<Date.now()}/**
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
 */async function Y_({appConfig:t,heartbeatServiceProvider:e},n){const r=X_(t,n),i=O_(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:n0,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await u0(()=>fetch(r,a));if(l.ok){const u=await l.json();return o0(u)}else throw await a0("Generate Auth Token",l)}function X_(t,{fid:e}){return`${s0(t)}/${e}/authTokens:generate`}/**
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
 */async function qd(t,e=!1){let n;const r=await $l(t.appConfig,s=>{if(!g0(s))throw Er.create("not-registered");const o=s.authToken;if(!e&&eI(o))return s;if(o.requestStatus===1)return n=J_(t,e),s;{if(!navigator.onLine)throw Er.create("app-offline");const a=nI(s);return n=Z_(t,a),a}});return n?await n:r.authToken}async function J_(t,e){let n=await vm(t.appConfig);for(;n.authToken.requestStatus===1;)await c0(100),n=await vm(t.appConfig);const r=n.authToken;return r.requestStatus===0?qd(t,e):r}function vm(t){return $l(t,e=>{if(!g0(e))throw Er.create("not-registered");const n=e.authToken;return rI(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Z_(t,e){try{const n=await Y_(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Xa(t.appConfig,r),n}catch(n){if(i0(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await p0(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Xa(t.appConfig,r)}throw n}}function g0(t){return t!==void 0&&t.registrationStatus===2}function eI(t){return t.requestStatus===2&&!tI(t)}function tI(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+A_}function nI(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function rI(t){return t.requestStatus===1&&t.requestTime+t0<Date.now()}/**
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
 */async function iI(t){const e=t,{installationEntry:n,registrationPromise:r}=await Hd(e);return r?r.catch(console.error):qd(e).catch(console.error),n.fid}/**
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
 */async function sI(t,e=!1){const n=t;return await oI(n),(await qd(n,e)).token}async function oI(t){const{registrationPromise:e}=await Hd(t);e&&await e}/**
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
 */function aI(t){if(!t||!t.options)throw Zu("App Configuration");if(!t.name)throw Zu("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Zu(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Zu(t){return Er.create("missing-app-config-values",{valueName:t})}/**
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
 */const y0="installations",lI="installations-internal",uI=t=>{const e=t.getProvider("app").getImmediate(),n=aI(e),r=Ii(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},cI=t=>{const e=t.getProvider("app").getImmediate(),n=Ii(e,y0).getImmediate();return{getId:()=>iI(n),getToken:i=>sI(n,i)}};function hI(){jt(new xt(y0,uI,"PUBLIC")),jt(new xt(lI,cI,"PRIVATE"))}hI();mt(e0,zd);mt(e0,zd,"esm2017");/**
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
 */const dI="/firebase-messaging-sw.js",fI="/firebase-cloud-messaging-push-scope",v0="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",pI="https://fcmregistrations.googleapis.com/v1",w0="google.c.a.c_id",mI="google.c.a.c_l",gI="google.c.a.ts",yI="google.c.a.e";var wm;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(wm||(wm={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var Ps;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(Ps||(Ps={}));/**
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
 */function Wt(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function vI(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),i=new Uint8Array(r.length);for(let s=0;s<r.length;++s)i[s]=r.charCodeAt(s);return i}/**
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
 */const ec="fcm_token_details_db",wI=5,Em="fcm_token_object_Store";async function EI(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(s=>s.name).includes(ec))return null;let e=null;return(await bl(ec,wI,{upgrade:async(r,i,s,o)=>{var a;if(i<2||!r.objectStoreNames.contains(Em))return;const l=o.objectStore(Em),u=await l.index("fcmSenderId").get(t);if(await l.clear(),!!u){if(i===2){const c=u;if(!c.auth||!c.p256dh||!c.endpoint)return;e={token:c.fcmToken,createTime:(a=c.createTime)!==null&&a!==void 0?a:Date.now(),subscriptionOptions:{auth:c.auth,p256dh:c.p256dh,endpoint:c.endpoint,swScope:c.swScope,vapidKey:typeof c.vapidKey=="string"?c.vapidKey:Wt(c.vapidKey)}}}else if(i===3){const c=u;e={token:c.fcmToken,createTime:c.createTime,subscriptionOptions:{auth:Wt(c.auth),p256dh:Wt(c.p256dh),endpoint:c.endpoint,swScope:c.swScope,vapidKey:Wt(c.vapidKey)}}}else if(i===4){const c=u;e={token:c.fcmToken,createTime:c.createTime,subscriptionOptions:{auth:Wt(c.auth),p256dh:Wt(c.p256dh),endpoint:c.endpoint,swScope:c.swScope,vapidKey:Wt(c.vapidKey)}}}}}})).close(),await Qu(ec),await Qu("fcm_vapid_details_db"),await Qu("undefined"),SI(e)?e:null}function SI(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const kI="firebase-messaging-database",TI=1,kr="firebase-messaging-store";let tc=null;function Kd(){return tc||(tc=bl(kI,TI,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(kr)}}})),tc}async function E0(t){const e=Gd(t),r=await(await Kd()).transaction(kr).objectStore(kr).get(e);if(r)return r;{const i=await EI(t.appConfig.senderId);if(i)return await Wd(t,i),i}}async function Wd(t,e){const n=Gd(t),i=(await Kd()).transaction(kr,"readwrite");return await i.objectStore(kr).put(e,n),await i.done,e}async function _I(t){const e=Gd(t),r=(await Kd()).transaction(kr,"readwrite");await r.objectStore(kr).delete(e),await r.done}function Gd({appConfig:t}){return t.appId}/**
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
 */const II={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["only-available-in-window"]:"This method is available in a Window context.",["only-available-in-sw"]:"This method is available in a service worker context.",["permission-default"]:"The notification permission was not granted and dismissed instead.",["permission-blocked"]:"The notification permission was not granted and blocked instead.",["unsupported-browser"]:"This browser doesn't support the API's required to use the Firebase SDK.",["indexed-db-unsupported"]:"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)",["failed-service-worker-registration"]:"We are unable to register the default service worker. {$browserErrorMessage}",["token-subscribe-failed"]:"A problem occurred while subscribing the user to FCM: {$errorInfo}",["token-subscribe-no-token"]:"FCM returned no token when subscribing the user to push.",["token-unsubscribe-failed"]:"A problem occurred while unsubscribing the user from FCM: {$errorInfo}",["token-update-failed"]:"A problem occurred while updating the user from FCM: {$errorInfo}",["token-update-no-token"]:"FCM returned no token when updating the user to push.",["use-sw-after-get-token"]:"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",["invalid-sw-registration"]:"The input to useServiceWorker() must be a ServiceWorkerRegistration.",["invalid-bg-handler"]:"The input to setBackgroundMessageHandler() must be a function.",["invalid-vapid-key"]:"The public VAPID key must be a string.",["use-vapid-key-after-get-token"]:"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},Ve=new Rr("messaging","Messaging",II);/**
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
 */async function CI(t,e){const n=await Yd(t),r=k0(e),i={method:"POST",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(Qd(t.appConfig),i)).json()}catch(o){throw Ve.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw Ve.create("token-subscribe-failed",{errorInfo:o})}if(!s.token)throw Ve.create("token-subscribe-no-token");return s.token}async function NI(t,e){const n=await Yd(t),r=k0(e.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(`${Qd(t.appConfig)}/${e.token}`,i)).json()}catch(o){throw Ve.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw Ve.create("token-update-failed",{errorInfo:o})}if(!s.token)throw Ve.create("token-update-no-token");return s.token}async function S0(t,e){const r={method:"DELETE",headers:await Yd(t)};try{const s=await(await fetch(`${Qd(t.appConfig)}/${e}`,r)).json();if(s.error){const o=s.error.message;throw Ve.create("token-unsubscribe-failed",{errorInfo:o})}}catch(i){throw Ve.create("token-unsubscribe-failed",{errorInfo:i==null?void 0:i.toString()})}}function Qd({projectId:t}){return`${pI}/projects/${t}/registrations`}async function Yd({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function k0({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const i={web:{endpoint:n,auth:e,p256dh:t}};return r!==v0&&(i.web.applicationPubKey=r),i}/**
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
 */const AI=7*24*60*60*1e3;async function DI(t){const e=await OI(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:Wt(e.getKey("auth")),p256dh:Wt(e.getKey("p256dh"))},r=await E0(t.firebaseDependencies);if(r){if(PI(r.subscriptionOptions,n))return Date.now()>=r.createTime+AI?xI(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await S0(t.firebaseDependencies,r.token)}catch(i){console.warn(i)}return Sm(t.firebaseDependencies,n)}else return Sm(t.firebaseDependencies,n)}async function RI(t){const e=await E0(t.firebaseDependencies);e&&(await S0(t.firebaseDependencies,e.token),await _I(t.firebaseDependencies));const n=await t.swRegistration.pushManager.getSubscription();return n?n.unsubscribe():!0}async function xI(t,e){try{const n=await NI(t.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await Wd(t.firebaseDependencies,r),n}catch(n){throw await RI(t),n}}async function Sm(t,e){const r={token:await CI(t,e),createTime:Date.now(),subscriptionOptions:e};return await Wd(t,r),r.token}async function OI(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:vI(e)})}function PI(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,i=e.auth===t.auth,s=e.p256dh===t.p256dh;return n&&r&&i&&s}/**
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
 */function km(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return LI(e,t),bI(e,t),MI(e,t),e}function LI(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const i=e.notification.image;i&&(t.notification.image=i);const s=e.notification.icon;s&&(t.notification.icon=s)}function bI(t,e){e.data&&(t.data=e.data)}function MI(t,e){var n,r,i,s,o;if(!e.fcmOptions&&!(!((n=e.notification)===null||n===void 0)&&n.click_action))return;t.fcmOptions={};const a=(i=(r=e.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&i!==void 0?i:(s=e.notification)===null||s===void 0?void 0:s.click_action;a&&(t.fcmOptions.link=a);const l=(o=e.fcmOptions)===null||o===void 0?void 0:o.analytics_label;l&&(t.fcmOptions.analyticsLabel=l)}/**
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
 */function $I(t){return typeof t=="object"&&!!t&&w0 in t}/**
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
 */T0("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o");T0("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function T0(t,e){const n=[];for(let r=0;r<t.length;r++)n.push(t.charAt(r)),r<e.length&&n.push(e.charAt(r));return n.join("")}/**
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
 */function FI(t){if(!t||!t.options)throw nc("App Configuration Object");if(!t.name)throw nc("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw nc(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function nc(t){return Ve.create("missing-app-config-values",{valueName:t})}/**
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
 */class UI{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=FI(e);this.firebaseDependencies={app:e,appConfig:i,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
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
 */async function VI(t){try{t.swRegistration=await navigator.serviceWorker.register(dI,{scope:fI}),t.swRegistration.update().catch(()=>{})}catch(e){throw Ve.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}/**
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
 */async function jI(t,e){if(!e&&!t.swRegistration&&await VI(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw Ve.create("invalid-sw-registration");t.swRegistration=e}}/**
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
 */async function zI(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=v0)}/**
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
 */async function _0(t,e){if(!navigator)throw Ve.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw Ve.create("permission-blocked");return await zI(t,e==null?void 0:e.vapidKey),await jI(t,e==null?void 0:e.serviceWorkerRegistration),DI(t)}/**
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
 */async function BI(t,e,n){const r=HI(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[w0],message_name:n[mI],message_time:n[gI],message_device_time:Math.floor(Date.now()/1e3)})}function HI(t){switch(t){case Ps.NOTIFICATION_CLICKED:return"notification_open";case Ps.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function qI(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===Ps.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(km(n)):t.onMessageHandler.next(km(n)));const r=n.data;$I(r)&&r[yI]==="1"&&await BI(t,n.messageType,r)}const Tm="@firebase/messaging",_m="0.12.3";/**
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
 */const KI=t=>{const e=new UI(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>qI(e,n)),e},WI=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:r=>_0(e,r)}};function GI(){jt(new xt("messaging",KI,"PUBLIC")),jt(new xt("messaging-internal",WI,"PRIVATE")),mt(Tm,_m),mt(Tm,_m,"esm2017")}/**
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
 */async function QI(){try{await Gv()}catch{return!1}return typeof window<"u"&&Wv()&&mT()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function YI(t,e){if(!navigator)throw Ve.create("only-available-in-window");return t.onMessageHandler=e,()=>{t.onMessageHandler=null}}/**
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
 */function XI(t=jd()){return QI().then(e=>{if(!e)throw Ve.create("unsupported-browser")},e=>{throw Ve.create("indexed-db-unsupported")}),Ii(qe(t),"messaging").getImmediate()}async function JI(t,e){return t=qe(t),_0(t,e)}function ZI(t,e){return t=qe(t),YI(t,e)}GI();let eC={data:""},tC=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||eC,nC=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,rC=/\/\*[^]*?\*\/|  +/g,Im=/\n+/g,En=(t,e)=>{let n="",r="",i="";for(let s in t){let o=t[s];s[0]=="@"?s[1]=="i"?n=s+" "+o+";":r+=s[1]=="f"?En(o,s):s+"{"+En(o,s[1]=="k"?"":e)+"}":typeof o=="object"?r+=En(o,e?e.replace(/([^,])+/g,a=>s.replace(/(^:.*)|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,a):a?a+" "+l:l)):s):o!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=En.p?En.p(s,o):s+":"+o+";")}return n+(e&&i?e+"{"+i+"}":i)+r},qt={},I0=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+I0(t[n]);return e}return t},iC=(t,e,n,r,i)=>{let s=I0(t),o=qt[s]||(qt[s]=(l=>{let u=0,c=11;for(;u<l.length;)c=101*c+l.charCodeAt(u++)>>>0;return"go"+c})(s));if(!qt[o]){let l=s!==t?t:(u=>{let c,h,d=[{}];for(;c=nC.exec(u.replace(rC,""));)c[4]?d.shift():c[3]?(h=c[3].replace(Im," ").trim(),d.unshift(d[0][h]=d[0][h]||{})):d[0][c[1]]=c[2].replace(Im," ").trim();return d[0]})(t);qt[o]=En(i?{["@keyframes "+o]:l}:l,n?"":"."+o)}let a=n&&qt.g?qt.g:null;return n&&(qt.g=qt[o]),((l,u,c,h)=>{h?u.data=u.data.replace(h,l):u.data.indexOf(l)===-1&&(u.data=c?l+u.data:u.data+l)})(qt[o],e,r,a),o},sC=(t,e,n)=>t.reduce((r,i,s)=>{let o=e[s];if(o&&o.call){let a=o(n),l=a&&a.props&&a.props.className||/^go/.test(a)&&a;o=l?"."+l:a&&typeof a=="object"?a.props?"":En(a,""):a===!1?"":a}return r+i+(o??"")},"");function Fl(t){let e=this||{},n=t.call?t(e.p):t;return iC(n.unshift?n.raw?sC(n,[].slice.call(arguments,1),e.p):n.reduce((r,i)=>Object.assign(r,i&&i.call?i(e.p):i),{}):n,tC(e.target),e.g,e.o,e.k)}let C0,gh,yh;Fl.bind({g:1});let an=Fl.bind({k:1});function oC(t,e,n,r){En.p=e,C0=t,gh=n,yh=r}function Wn(t,e){let n=this||{};return function(){let r=arguments;function i(s,o){let a=Object.assign({},s),l=a.className||i.className;n.p=Object.assign({theme:gh&&gh()},a),n.o=/ *go\d+/.test(l),a.className=Fl.apply(n,r)+(l?" "+l:""),e&&(a.ref=o);let u=t;return t[0]&&(u=a.as||t,delete a.as),yh&&u[0]&&yh(a),C0(u,a)}return e?e(i):i}}var aC=t=>typeof t=="function",Ja=(t,e)=>aC(t)?t(e):t,lC=(()=>{let t=0;return()=>(++t).toString()})(),N0=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),uC=20,da=new Map,cC=1e3,Cm=t=>{if(da.has(t))return;let e=setTimeout(()=>{da.delete(t),xr({type:4,toastId:t})},cC);da.set(t,e)},hC=t=>{let e=da.get(t);e&&clearTimeout(e)},vh=(t,e)=>{switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,uC)};case 1:return e.toast.id&&hC(e.toast.id),{...t,toasts:t.toasts.map(s=>s.id===e.toast.id?{...s,...e.toast}:s)};case 2:let{toast:n}=e;return t.toasts.find(s=>s.id===n.id)?vh(t,{type:1,toast:n}):vh(t,{type:0,toast:n});case 3:let{toastId:r}=e;return r?Cm(r):t.toasts.forEach(s=>{Cm(s.id)}),{...t,toasts:t.toasts.map(s=>s.id===r||r===void 0?{...s,visible:!1}:s)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(s=>s.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let i=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(s=>({...s,pauseDuration:s.pauseDuration+i}))}}},fa=[],pa={toasts:[],pausedAt:void 0},xr=t=>{pa=vh(pa,t),fa.forEach(e=>{e(pa)})},dC={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},fC=(t={})=>{let[e,n]=U.useState(pa);U.useEffect(()=>(fa.push(n),()=>{let i=fa.indexOf(n);i>-1&&fa.splice(i,1)}),[e]);let r=e.toasts.map(i=>{var s,o;return{...t,...t[i.type],...i,duration:i.duration||((s=t[i.type])==null?void 0:s.duration)||(t==null?void 0:t.duration)||dC[i.type],style:{...t.style,...(o=t[i.type])==null?void 0:o.style,...i.style}}});return{...e,toasts:r}},pC=(t,e="blank",n)=>({createdAt:Date.now(),visible:!0,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...n,id:(n==null?void 0:n.id)||lC()}),to=t=>(e,n)=>{let r=pC(e,t,n);return xr({type:2,toast:r}),r.id},Ue=(t,e)=>to("blank")(t,e);Ue.error=to("error");Ue.success=to("success");Ue.loading=to("loading");Ue.custom=to("custom");Ue.dismiss=t=>{xr({type:3,toastId:t})};Ue.remove=t=>xr({type:4,toastId:t});Ue.promise=(t,e,n)=>{let r=Ue.loading(e.loading,{...n,...n==null?void 0:n.loading});return t.then(i=>(Ue.success(Ja(e.success,i),{id:r,...n,...n==null?void 0:n.success}),i)).catch(i=>{Ue.error(Ja(e.error,i),{id:r,...n,...n==null?void 0:n.error})}),t};var mC=(t,e)=>{xr({type:1,toast:{id:t,height:e}})},gC=()=>{xr({type:5,time:Date.now()})},yC=t=>{let{toasts:e,pausedAt:n}=fC(t);U.useEffect(()=>{if(n)return;let s=Date.now(),o=e.map(a=>{if(a.duration===1/0)return;let l=(a.duration||0)+a.pauseDuration-(s-a.createdAt);if(l<0){a.visible&&Ue.dismiss(a.id);return}return setTimeout(()=>Ue.dismiss(a.id),l)});return()=>{o.forEach(a=>a&&clearTimeout(a))}},[e,n]);let r=U.useCallback(()=>{n&&xr({type:6,time:Date.now()})},[n]),i=U.useCallback((s,o)=>{let{reverseOrder:a=!1,gutter:l=8,defaultPosition:u}=o||{},c=e.filter(g=>(g.position||u)===(s.position||u)&&g.height),h=c.findIndex(g=>g.id===s.id),d=c.filter((g,y)=>y<h&&g.visible).length;return c.filter(g=>g.visible).slice(...a?[d+1]:[0,d]).reduce((g,y)=>g+(y.height||0)+l,0)},[e]);return{toasts:e,handlers:{updateHeight:mC,startPause:gC,endPause:r,calculateOffset:i}}},vC=an`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,wC=an`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,EC=an`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,SC=Wn("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${vC} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${wC} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${EC} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,kC=an`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,TC=Wn("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${kC} 1s linear infinite;
`,_C=an`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,IC=an`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,CC=Wn("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${_C} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${IC} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,NC=Wn("div")`
  position: absolute;
`,AC=Wn("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,DC=an`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,RC=Wn("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${DC} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,xC=({toast:t})=>{let{icon:e,type:n,iconTheme:r}=t;return e!==void 0?typeof e=="string"?U.createElement(RC,null,e):e:n==="blank"?null:U.createElement(AC,null,U.createElement(TC,{...r}),n!=="loading"&&U.createElement(NC,null,n==="error"?U.createElement(SC,{...r}):U.createElement(CC,{...r})))},OC=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,PC=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,LC="0%{opacity:0;} 100%{opacity:1;}",bC="0%{opacity:1;} 100%{opacity:0;}",MC=Wn("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,$C=Wn("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,FC=(t,e)=>{let n=t.includes("top")?1:-1,[r,i]=N0()?[LC,bC]:[OC(n),PC(n)];return{animation:e?`${an(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${an(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},UC=U.memo(({toast:t,position:e,style:n,children:r})=>{let i=t.height?FC(t.position||e||"top-center",t.visible):{opacity:0},s=U.createElement(xC,{toast:t}),o=U.createElement($C,{...t.ariaProps},Ja(t.message,t));return U.createElement(MC,{className:t.className,style:{...i,...n,...t.style}},typeof r=="function"?r({icon:s,message:o}):U.createElement(U.Fragment,null,s,o))});oC(U.createElement);var VC=({id:t,className:e,style:n,onHeightUpdate:r,children:i})=>{let s=U.useCallback(o=>{if(o){let a=()=>{let l=o.getBoundingClientRect().height;r(t,l)};a(),new MutationObserver(a).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[t,r]);return U.createElement("div",{ref:s,className:e,style:n},i)},jC=(t,e)=>{let n=t.includes("top"),r=n?{top:0}:{bottom:0},i=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:N0()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(n?1:-1)}px)`,...r,...i}},zC=Fl`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,qo=16,BC=({reverseOrder:t,position:e="top-center",toastOptions:n,gutter:r,children:i,containerStyle:s,containerClassName:o})=>{let{toasts:a,handlers:l}=yC(n);return U.createElement("div",{style:{position:"fixed",zIndex:9999,top:qo,left:qo,right:qo,bottom:qo,pointerEvents:"none",...s},className:o,onMouseEnter:l.startPause,onMouseLeave:l.endPause},a.map(u=>{let c=u.position||e,h=l.calculateOffset(u,{reverseOrder:t,gutter:r,defaultPosition:e}),d=jC(c,h);return U.createElement(VC,{id:u.id,key:u.id,onHeightUpdate:l.updateHeight,className:u.visible?zC:"",style:d},u.type==="custom"?Ja(u.message,u):i?i(u):U.createElement(UC,{toast:u,position:c}))}))},A0={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Nm=Cn.createContext&&Cn.createContext(A0),Mn=globalThis&&globalThis.__assign||function(){return Mn=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},Mn.apply(this,arguments)},HC=globalThis&&globalThis.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};function D0(t){return t&&t.map(function(e,n){return Cn.createElement(e.tag,Mn({key:n},e.attr),D0(e.child))})}function Ul(t){return function(e){return Cn.createElement(qC,Mn({attr:Mn({},t.attr)},e),D0(t.child))}}function qC(t){var e=function(n){var r=t.attr,i=t.size,s=t.title,o=HC(t,["attr","size","title"]),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),Cn.createElement("svg",Mn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:Mn(Mn({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&Cn.createElement("title",null,s),t.children)};return Nm!==void 0?Cn.createElement(Nm.Consumer,null,function(n){return e(n)}):e(A0)}function KC(t){return Ul({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M16 9.226l-8-6.21-8 6.21v-2.532l8-6.21 8 6.21zM14 9v6h-4v-4h-4v4h-4v-6l6-4.5z"}}]})(t)}function WC(t){return Ul({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 0 0-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 1 0 0 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 0 0-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 0 0-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6z"}}]})(t)}function GC(t){return Ul({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"}}]})(t)}const QC=()=>{const{setRoute:t}=U.useContext(Io);return Fe("footer",{className:"fixed h-16 w-full bg-sky-400 bottom-0 flex justify-evenly items-center",children:[L("div",{className:"bg-sky-200 p-2 text-3xl rounded-full text-pink-500 cursor-pointer hover:bg-sky-100 transition",onClick:()=>t("home"),children:L(KC,{})}),L("div",{className:"bg-sky-200 p-2 text-3xl rounded-full text-pink-500 cursor-pointer hover:bg-sky-100 transition",onClick:()=>t("shopping"),children:L(WC,{})}),L("div",{className:"bg-sky-200 p-2 text-3xl rounded-full text-pink-500 cursor-pointer hover:bg-sky-100 transition",onClick:()=>t("tasklist"),children:L(GC,{})})]})};function Xd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function R0(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const YC=R0,x0=new Rr("auth","Firebase",R0());/**
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
 */const Am=new Ud("@firebase/auth");function ma(t,...e){Am.logLevel<=G.ERROR&&Am.error(`Auth (${eo}): ${t}`,...e)}/**
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
 */function wt(t,...e){throw Jd(t,...e)}function Ft(t,...e){return Jd(t,...e)}function O0(t,e,n){const r=Object.assign(Object.assign({},YC()),{[e]:n});return new Rr("auth","Firebase",r).create(e,{appName:t.name})}function XC(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&wt(t,"argument-error"),O0(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Jd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return x0.create(t,...e)}function b(t,e,...n){if(!t)throw Jd(e,...n)}function Xt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ma(e),new Error(e)}function ln(t,e){t||Xt(e)}/**
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
 */const Dm=new Map;function Jt(t){ln(t instanceof Function,"Expected a class definition");let e=Dm.get(t);return e?(ln(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Dm.set(t,e),e)}/**
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
 */function JC(t,e){const n=Ii(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Qa(s,e??{}))return i;wt(i,"already-initialized")}return n.initialize({options:e})}function ZC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Jt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function wh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function eN(){return Rm()==="http:"||Rm()==="https:"}function Rm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function tN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(eN()||dT()||"connection"in navigator)?navigator.onLine:!0}function nN(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class no{constructor(e,n){this.shortDelay=e,this.longDelay=n,ln(n>e,"Short delay should be less than long delay!"),this.isMobile=hT()||fT()}get(){return tN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Zd(t,e){ln(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class P0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Xt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Xt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Xt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const rN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const iN=new no(3e4,6e4);function ro(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function io(t,e,n,r,i={}){return L0(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Zs(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),P0.fetch()(b0(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function L0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},rN),e);try{const i=new sN(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ko(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ko(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ko(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ko(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw O0(t,c,u);wt(t,c)}}catch(i){if(i instanceof Ht)throw i;wt(t,"network-request-failed")}}async function so(t,e,n,r,i={}){const s=await io(t,e,n,r,i);return"mfaPendingCredential"in s&&wt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function b0(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Zd(t.config,i):`${t.config.apiScheme}://${i}`}class sN{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ft(this.auth,"network-request-failed")),iN.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ko(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ft(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function oN(t,e){return io(t,"POST","/v1/accounts:delete",e)}async function aN(t,e){return io(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function us(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function lN(t,e=!1){const n=qe(t),r=await n.getIdToken(e),i=ef(r);b(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:us(rc(i.auth_time)),issuedAtTime:us(rc(i.iat)),expirationTime:us(rc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function rc(t){return Number(t)*1e3}function ef(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ma("JWT malformed, contained fewer than 3 sections"),null;try{const i=Hv(n);return i?JSON.parse(i):(ma("Failed to decode base64 JWT payload"),null)}catch(i){return ma("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function uN(t){const e=ef(t);return b(e,"internal-error"),b(typeof e.exp<"u","internal-error"),b(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ls(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ht&&cN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function cN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class hN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class M0{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=us(this.lastLoginAt),this.creationTime=us(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Za(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ls(t,aN(n,{idToken:r}));b(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?pN(s.providerUserInfo):[],a=fN(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new M0(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function dN(t){const e=qe(t);await Za(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function fN(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function pN(t){return t.map(e=>{var{providerId:n}=e,r=Xd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function mN(t,e){const n=await L0(t,{},async()=>{const r=Zs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=b0(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",P0.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class bs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){b(e.idToken,"internal-error"),b(typeof e.idToken<"u","internal-error"),b(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):uN(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return b(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await mN(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new bs;return r&&(b(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(b(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(b(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new bs,this.toJSON())}_performRefresh(){return Xt("not implemented")}}/**
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
 */function mn(t,e){b(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class hr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Xd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new hN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new M0(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ls(this,this.stsTokenManager.getToken(this.auth,e));return b(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return lN(this,e)}reload(){return dN(this)}_assign(e){this!==e&&(b(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new hr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){b(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Za(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ls(this,oN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,x=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:w,isAnonymous:T,providerData:C,stsTokenManager:N}=n;b(m&&N,e,"internal-error");const R=bs.fromJSON(this.name,N);b(typeof m=="string",e,"internal-error"),mn(h,e.name),mn(d,e.name),b(typeof w=="boolean",e,"internal-error"),b(typeof T=="boolean",e,"internal-error"),mn(g,e.name),mn(y,e.name),mn(v,e.name),mn(x,e.name),mn(p,e.name),mn(f,e.name);const Z=new hr({uid:m,auth:e,email:d,emailVerified:w,displayName:h,isAnonymous:T,photoURL:y,phoneNumber:g,tenantId:v,stsTokenManager:R,createdAt:p,lastLoginAt:f});return C&&Array.isArray(C)&&(Z.providerData=C.map(B=>Object.assign({},B))),x&&(Z._redirectEventId=x),Z}static async _fromIdTokenResponse(e,n,r=!1){const i=new bs;i.updateFromServerResponse(n);const s=new hr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Za(s),s}}/**
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
 */class $0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}$0.type="NONE";const xm=$0;/**
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
 */function ga(t,e,n){return`firebase:${t}:${e}:${n}`}class ri{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ga(this.userKey,i.apiKey,s),this.fullPersistenceKey=ga("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?hr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ri(Jt(xm),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Jt(xm);const o=ga(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=hr._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ri(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new ri(s,e,r))}}/**
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
 */function Om(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(V0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(F0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(z0(e))return"Blackberry";if(B0(e))return"Webos";if(tf(e))return"Safari";if((e.includes("chrome/")||U0(e))&&!e.includes("edge/"))return"Chrome";if(j0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function F0(t=He()){return/firefox\//i.test(t)}function tf(t=He()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function U0(t=He()){return/crios\//i.test(t)}function V0(t=He()){return/iemobile/i.test(t)}function j0(t=He()){return/android/i.test(t)}function z0(t=He()){return/blackberry/i.test(t)}function B0(t=He()){return/webos/i.test(t)}function Vl(t=He()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function gN(t=He()){var e;return Vl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function yN(){return pT()&&document.documentMode===10}function H0(t=He()){return Vl(t)||j0(t)||B0(t)||z0(t)||/windows phone/i.test(t)||V0(t)}function vN(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function q0(t,e=[]){let n;switch(t){case"Browser":n=Om(He());break;case"Worker":n=`${Om(He())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${eo}/${r}`}/**
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
 */class wN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class EN{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Pm(this),this.idTokenSubscription=new Pm(this),this.beforeStateQueue=new wN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=x0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Jt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ri.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return b(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Za(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=nN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?qe(e):null;return n&&b(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&b(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Jt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Rr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Jt(e)||this._popupRedirectResolver;b(n,this,"argument-error"),this.redirectPersistenceManager=await ri.create(this,[Jt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return b(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return b(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=q0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Ci(t){return qe(t)}class Pm{constructor(e){this.auth=e,this.observer=null,this.addObserver=ET(n=>this.observer=n)}get next(){return b(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function SN(t,e,n){const r=Ci(t);b(r._canInitEmulator,r,"emulator-config-failed"),b(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=K0(e),{host:o,port:a}=kN(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||TN()}function K0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function kN(t){const e=K0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Lm(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Lm(o)}}}function Lm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function TN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class nf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Xt("not implemented")}_getIdTokenResponse(e){return Xt("not implemented")}_linkToIdToken(e,n){return Xt("not implemented")}_getReauthenticationResolver(e){return Xt("not implemented")}}async function _N(t,e){return io(t,"POST","/v1/accounts:update",e)}/**
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
 */async function IN(t,e){return so(t,"POST","/v1/accounts:signInWithPassword",ro(t,e))}/**
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
 */async function CN(t,e){return so(t,"POST","/v1/accounts:signInWithEmailLink",ro(t,e))}async function NN(t,e){return so(t,"POST","/v1/accounts:signInWithEmailLink",ro(t,e))}/**
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
 */class Ms extends nf{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ms(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ms(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return IN(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return CN(e,{email:this._email,oobCode:this._password});default:wt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return _N(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return NN(e,{idToken:n,email:this._email,oobCode:this._password});default:wt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ii(t,e){return so(t,"POST","/v1/accounts:signInWithIdp",ro(t,e))}/**
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
 */const AN="http://localhost";class Tr extends nf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Tr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):wt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Xd(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Tr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ii(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ii(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ii(e,n)}buildRequest(){const e={requestUri:AN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Zs(n)}return e}}/**
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
 */function DN(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function RN(t){const e=Qi(Yi(t)).link,n=e?Qi(Yi(e)).deep_link_id:null,r=Qi(Yi(t)).deep_link_id;return(r?Qi(Yi(r)).link:null)||r||n||e||t}class rf{constructor(e){var n,r,i,s,o,a;const l=Qi(Yi(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=DN((i=l.mode)!==null&&i!==void 0?i:null);b(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=RN(e);try{return new rf(n)}catch{return null}}}/**
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
 */class Ni{constructor(){this.providerId=Ni.PROVIDER_ID}static credential(e,n){return Ms._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=rf.parseLink(n);return b(r,"argument-error"),Ms._fromEmailAndCode(e,r.code,r.tenantId)}}Ni.PROVIDER_ID="password";Ni.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ni.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class sf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class oo extends sf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Sn extends oo{constructor(){super("facebook.com")}static credential(e){return Tr._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Sn.credentialFromTaggedObject(e)}static credentialFromError(e){return Sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Sn.credential(e.oauthAccessToken)}catch{return null}}}Sn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Sn.PROVIDER_ID="facebook.com";/**
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
 */class It extends oo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Tr._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return It.credentialFromTaggedObject(e)}static credentialFromError(e){return It.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return It.credential(n,r)}catch{return null}}}It.GOOGLE_SIGN_IN_METHOD="google.com";It.PROVIDER_ID="google.com";/**
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
 */class kn extends oo{constructor(){super("github.com")}static credential(e){return Tr._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kn.credential(e.oauthAccessToken)}catch{return null}}}kn.GITHUB_SIGN_IN_METHOD="github.com";kn.PROVIDER_ID="github.com";/**
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
 */class Tn extends oo{constructor(){super("twitter.com")}static credential(e,n){return Tr._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Tn.credentialFromTaggedObject(e)}static credentialFromError(e){return Tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Tn.credential(n,r)}catch{return null}}}Tn.TWITTER_SIGN_IN_METHOD="twitter.com";Tn.PROVIDER_ID="twitter.com";/**
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
 */async function xN(t,e){return so(t,"POST","/v1/accounts:signUp",ro(t,e))}/**
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
 */class _r{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await hr._fromIdTokenResponse(e,r,i),o=bm(r);return new _r({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=bm(r);return new _r({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function bm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class el extends Ht{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,el.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new el(e,n,r,i)}}function W0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?el._fromErrorAndOperation(t,s,e,r):s})}async function ON(t,e,n=!1){const r=await Ls(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return _r._forOperation(t,"link",r)}/**
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
 */async function PN(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Ls(t,W0(r,i,e,t),n);b(s.idToken,r,"internal-error");const o=ef(s.idToken);b(o,r,"internal-error");const{sub:a}=o;return b(t.uid===a,r,"user-mismatch"),_r._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&wt(r,"user-mismatch"),s}}/**
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
 */async function G0(t,e,n=!1){const r="signIn",i=await W0(t,r,e),s=await _r._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function LN(t,e){return G0(Ci(t),e)}async function bN(t,e,n){const r=Ci(t),i=await xN(r,{returnSecureToken:!0,email:e,password:n}),s=await _r._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function MN(t,e,n){return LN(qe(t),Ni.credential(e,n))}function $N(t,e,n,r){return qe(t).onIdTokenChanged(e,n,r)}function FN(t,e,n){return qe(t).beforeAuthStateChanged(e,n)}function UN(t){return qe(t).signOut()}const tl="__sak";/**
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
 */class Q0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(tl,"1"),this.storage.removeItem(tl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function VN(){const t=He();return tf(t)||Vl(t)}const jN=1e3,zN=10;class Y0 extends Q0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=VN()&&vN(),this.fallbackToPolling=H0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);yN()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,zN):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},jN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Y0.type="LOCAL";const BN=Y0;/**
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
 */class X0 extends Q0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}X0.type="SESSION";const J0=X0;/**
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
 */function HN(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class jl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new jl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await HN(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}jl.receivers=[];/**
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
 */function of(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class qN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=of("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ut(){return window}function KN(t){Ut().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function Z0(){return typeof Ut().WorkerGlobalScope<"u"&&typeof Ut().importScripts=="function"}async function WN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function GN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function QN(){return Z0()?self:null}/**
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
 */const ew="firebaseLocalStorageDb",YN=1,nl="firebaseLocalStorage",tw="fbase_key";class ao{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function zl(t,e){return t.transaction([nl],e?"readwrite":"readonly").objectStore(nl)}function XN(){const t=indexedDB.deleteDatabase(ew);return new ao(t).toPromise()}function Eh(){const t=indexedDB.open(ew,YN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(nl,{keyPath:tw})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(nl)?e(r):(r.close(),await XN(),e(await Eh()))})})}async function Mm(t,e,n){const r=zl(t,!0).put({[tw]:e,value:n});return new ao(r).toPromise()}async function JN(t,e){const n=zl(t,!1).get(e),r=await new ao(n).toPromise();return r===void 0?null:r.value}function $m(t,e){const n=zl(t,!0).delete(e);return new ao(n).toPromise()}const ZN=800,eA=3;class nw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Eh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>eA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Z0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=jl._getInstance(QN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await WN(),!this.activeServiceWorker)return;this.sender=new qN(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||GN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Eh();return await Mm(e,tl,"1"),await $m(e,tl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Mm(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>JN(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>$m(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=zl(i,!1).getAll();return new ao(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ZN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}nw.type="LOCAL";const tA=nw;/**
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
 */function nA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function rA(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Ft("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",nA().appendChild(r)})}function iA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new no(3e4,6e4);/**
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
 */function rw(t,e){return e?Jt(e):(b(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class af extends nf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ii(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ii(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ii(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function sA(t){return G0(t.auth,new af(t),t.bypassAuthState)}function oA(t){const{auth:e,user:n}=t;return b(n,e,"internal-error"),PN(n,new af(t),t.bypassAuthState)}async function aA(t){const{auth:e,user:n}=t;return b(n,e,"internal-error"),ON(n,new af(t),t.bypassAuthState)}/**
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
 */class iw{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return sA;case"linkViaPopup":case"linkViaRedirect":return aA;case"reauthViaPopup":case"reauthViaRedirect":return oA;default:wt(this.auth,"internal-error")}}resolve(e){ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const lA=new no(2e3,1e4);async function uA(t,e,n){const r=Ci(t);XC(t,e,sf);const i=rw(r,n);return new sr(r,"signInViaPopup",e,i).executeNotNull()}class sr extends iw{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,sr.currentPopupAction&&sr.currentPopupAction.cancel(),sr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return b(e,this.auth,"internal-error"),e}async onExecution(){ln(this.filter.length===1,"Popup operations only handle one event");const e=of();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ft(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ft(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,sr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ft(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,lA.get())};e()}}sr.currentPopupAction=null;/**
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
 */const cA="pendingRedirect",ya=new Map;class hA extends iw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ya.get(this.auth._key());if(!e){try{const r=await dA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ya.set(this.auth._key(),e)}return this.bypassAuthState||ya.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function dA(t,e){const n=mA(e),r=pA(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function fA(t,e){ya.set(t._key(),e)}function pA(t){return Jt(t._redirectPersistence)}function mA(t){return ga(cA,t.config.apiKey,t.name)}async function gA(t,e,n=!1){const r=Ci(t),i=rw(r,e),o=await new hA(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const yA=10*60*1e3;class vA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!wA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!sw(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ft(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=yA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Fm(e))}saveEventToCache(e){this.cachedEventUids.add(Fm(e)),this.lastProcessedEventTime=Date.now()}}function Fm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function sw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function wA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return sw(t);default:return!1}}/**
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
 */async function EA(t,e={}){return io(t,"GET","/v1/projects",e)}/**
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
 */const SA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,kA=/^https?/;async function TA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await EA(t);for(const n of e)try{if(_A(n))return}catch{}wt(t,"unauthorized-domain")}function _A(t){const e=wh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!kA.test(n))return!1;if(SA.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const IA=new no(3e4,6e4);function Um(){const t=Ut().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function CA(t){return new Promise((e,n)=>{var r,i,s;function o(){Um(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Um(),n(Ft(t,"network-request-failed"))},timeout:IA.get()})}if(!((i=(r=Ut().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Ut().gapi)===null||s===void 0)&&s.load)o();else{const a=iA("iframefcb");return Ut()[a]=()=>{gapi.load?o():n(Ft(t,"network-request-failed"))},rA(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw va=null,e})}let va=null;function NA(t){return va=va||CA(t),va}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const AA=new no(5e3,15e3),DA="__/auth/iframe",RA="emulator/auth/iframe",xA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},OA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function PA(t){const e=t.config;b(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Zd(e,RA):`https://${t.config.authDomain}/${DA}`,r={apiKey:e.apiKey,appName:t.name,v:eo},i=OA.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Zs(r).slice(1)}`}async function LA(t){const e=await NA(t),n=Ut().gapi;return b(n,t,"internal-error"),e.open({where:document.body,url:PA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:xA,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ft(t,"network-request-failed"),a=Ut().setTimeout(()=>{s(o)},AA.get());function l(){Ut().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const bA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},MA=500,$A=600,FA="_blank",UA="http://localhost";class Vm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function VA(t,e,n,r=MA,i=$A){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},bA),{width:r.toString(),height:i.toString(),top:s,left:o}),u=He().toLowerCase();n&&(a=U0(u)?FA:n),F0(u)&&(e=e||UA,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[g,y])=>`${d}${g}=${y},`,"");if(gN(u)&&a!=="_self")return jA(e||"",a),new Vm(null);const h=window.open(e||"",a,c);b(h,t,"popup-blocked");try{h.focus()}catch{}return new Vm(h)}function jA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const zA="__/auth/handler",BA="emulator/auth/handler";function jm(t,e,n,r,i,s){b(t.config.authDomain,t,"auth-domain-config-required"),b(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:eo,eventId:i};if(e instanceof sf){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",wT(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(s||{}))o[l]=u}if(e instanceof oo){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${HA(t)}?${Zs(a).slice(1)}`}function HA({config:t}){return t.emulator?Zd(t,BA):`https://${t.authDomain}/${zA}`}/**
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
 */const ic="webStorageSupport";class qA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=J0,this._completeRedirectFn=gA,this._overrideRedirectResult=fA}async _openPopup(e,n,r,i){var s;ln((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=jm(e,n,r,wh(),i);return VA(e,o,of())}async _openRedirect(e,n,r,i){return await this._originValidation(e),KN(jm(e,n,r,wh(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(ln(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await LA(e),r=new vA(e);return n.register("authEvent",i=>(b(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ic,{type:ic},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[ic];o!==void 0&&n(!!o),wt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=TA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return H0()||tf()||Vl()}}const KA=qA;var zm="@firebase/auth",Bm="0.21.3";/**
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
 */class WA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){b(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function GA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function QA(t){jt(new xt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{b(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),b(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:q0(t)},c=new EN(a,l,u);return ZC(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),jt(new xt("auth-internal",e=>{const n=Ci(e.getProvider("auth").getImmediate());return(r=>new WA(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),mt(zm,Bm,GA(t)),mt(zm,Bm,"esm2017")}/**
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
 */const YA=5*60,XA=Kv("authIdTokenMaxAge")||YA;let Hm=null;const JA=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>XA)return;const i=n==null?void 0:n.token;Hm!==i&&(Hm=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function ZA(t=jd()){const e=Ii(t,"auth");if(e.isInitialized())return e.getImmediate();const n=JC(t,{popupRedirectResolver:KA,persistence:[tA,BN,J0]}),r=Kv("authTokenSyncURL");if(r){const s=JA(r);FN(n,s,()=>s(n.currentUser)),$N(n,o=>s(o))}const i=qv("auth");return i&&SN(n,`http://${i}`),n}QA("Browser");function eD(t){return Ul({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M3.89 15.672L6.255.461A.542.542 0 017.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 00-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 001.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 00-.96 0L3.53 17.984z"}}]})(t)}var tD="firebase",nD="9.17.1";/**
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
 */mt(tD,nD,"app");var rD=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},A,lf=lf||{},$=rD||self;function rl(){}function Bl(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function lo(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function iD(t){return Object.prototype.hasOwnProperty.call(t,sc)&&t[sc]||(t[sc]=++sD)}var sc="closure_uid_"+(1e9*Math.random()>>>0),sD=0;function oD(t,e,n){return t.call.apply(t.bind,arguments)}function aD(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function je(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?je=oD:je=aD,je.apply(null,arguments)}function Wo(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function xe(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Gn(){this.s=this.s,this.o=this.o}var lD=0;Gn.prototype.s=!1;Gn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),lD!=0)&&iD(this)};Gn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ow=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function uf(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function qm(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Bl(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function ze(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ze.prototype.h=function(){this.defaultPrevented=!0};var uD=function(){if(!$.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{$.addEventListener("test",rl,e),$.removeEventListener("test",rl,e)}catch{}return t}();function il(t){return/^[\s\xa0]*$/.test(t)}var Km=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function oc(t,e){return t<e?-1:t>e?1:0}function Hl(){var t=$.navigator;return t&&(t=t.userAgent)?t:""}function bt(t){return Hl().indexOf(t)!=-1}function cf(t){return cf[" "](t),t}cf[" "]=rl;function cD(t){var e=fD;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var hD=bt("Opera"),pi=bt("Trident")||bt("MSIE"),aw=bt("Edge"),Sh=aw||pi,lw=bt("Gecko")&&!(Hl().toLowerCase().indexOf("webkit")!=-1&&!bt("Edge"))&&!(bt("Trident")||bt("MSIE"))&&!bt("Edge"),dD=Hl().toLowerCase().indexOf("webkit")!=-1&&!bt("Edge");function uw(){var t=$.document;return t?t.documentMode:void 0}var sl;e:{var ac="",lc=function(){var t=Hl();if(lw)return/rv:([^\);]+)(\)|;)/.exec(t);if(aw)return/Edge\/([\d\.]+)/.exec(t);if(pi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(dD)return/WebKit\/(\S+)/.exec(t);if(hD)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(lc&&(ac=lc?lc[1]:""),pi){var uc=uw();if(uc!=null&&uc>parseFloat(ac)){sl=String(uc);break e}}sl=ac}var fD={};function pD(){return cD(function(){let t=0;const e=Km(String(sl)).split("."),n=Km("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=oc(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||oc(i[2].length==0,s[2].length==0)||oc(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var kh;if($.document&&pi){var Wm=uw();kh=Wm||parseInt(sl,10)||void 0}else kh=void 0;var mD=kh;function $s(t,e){if(ze.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(lw){e:{try{cf(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:gD[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&$s.X.h.call(this)}}xe($s,ze);var gD={2:"touch",3:"pen",4:"mouse"};$s.prototype.h=function(){$s.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var uo="closure_listenable_"+(1e6*Math.random()|0),yD=0;function vD(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++yD,this.ba=this.ea=!1}function ql(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function hf(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function cw(t){const e={};for(const n in t)e[n]=t[n];return e}const Gm="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function hw(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Gm.length;s++)n=Gm[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Kl(t){this.src=t,this.g={},this.h=0}Kl.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=_h(t,e,r,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new vD(e,this.src,s,!!r,i),e.ea=n,t.push(e)),e};function Th(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=ow(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(ql(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function _h(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}var df="closure_lm_"+(1e6*Math.random()|0),cc={};function dw(t,e,n,r,i){if(r&&r.once)return pw(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)dw(t,e[s],n,r,i);return null}return n=mf(n),t&&t[uo]?t.N(e,n,lo(r)?!!r.capture:!!r,i):fw(t,e,n,!1,r,i)}function fw(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=lo(i)?!!i.capture:!!i,a=pf(t);if(a||(t[df]=a=new Kl(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=wD(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)uD||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(gw(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function wD(){function t(n){return e.call(t.src,t.listener,n)}const e=ED;return t}function pw(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)pw(t,e[s],n,r,i);return null}return n=mf(n),t&&t[uo]?t.O(e,n,lo(r)?!!r.capture:!!r,i):fw(t,e,n,!0,r,i)}function mw(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)mw(t,e[s],n,r,i);else r=lo(r)?!!r.capture:!!r,n=mf(n),t&&t[uo]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=_h(s,n,r,i),-1<n&&(ql(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=pf(t))&&(e=t.g[e.toString()],t=-1,e&&(t=_h(e,n,r,i)),(n=-1<t?e[t]:null)&&ff(n))}function ff(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[uo])Th(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(gw(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=pf(e))?(Th(n,t),n.h==0&&(n.src=null,e[df]=null)):ql(t)}}}function gw(t){return t in cc?cc[t]:cc[t]="on"+t}function ED(t,e){if(t.ba)t=!0;else{e=new $s(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&ff(t),t=n.call(r,e)}return t}function pf(t){return t=t[df],t instanceof Kl?t:null}var hc="__closure_events_fn_"+(1e9*Math.random()>>>0);function mf(t){return typeof t=="function"?t:(t[hc]||(t[hc]=function(e){return t.handleEvent(e)}),t[hc])}function Ie(){Gn.call(this),this.i=new Kl(this),this.P=this,this.I=null}xe(Ie,Gn);Ie.prototype[uo]=!0;Ie.prototype.removeEventListener=function(t,e,n,r){mw(this,t,e,n,r)};function De(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new ze(e,t);else if(e instanceof ze)e.target=e.target||t;else{var i=e;e=new ze(r,t),hw(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Go(o,r,!0,e)&&i}if(o=e.g=t,i=Go(o,r,!0,e)&&i,i=Go(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Go(o,r,!1,e)&&i}Ie.prototype.M=function(){if(Ie.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)ql(n[r]);delete t.g[e],t.h--}}this.I=null};Ie.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ie.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Go(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&Th(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var gf=$.JSON.stringify;function SD(){var t=ww;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class kD{constructor(){this.h=this.g=null}add(e,n){const r=yw.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var yw=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new TD,t=>t.reset());class TD{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function _D(t){$.setTimeout(()=>{throw t},0)}function vw(t,e){Ih||ID(),Ch||(Ih(),Ch=!0),ww.add(t,e)}var Ih;function ID(){var t=$.Promise.resolve(void 0);Ih=function(){t.then(CD)}}var Ch=!1,ww=new kD;function CD(){for(var t;t=SD();){try{t.h.call(t.g)}catch(n){_D(n)}var e=yw;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ch=!1}function Wl(t,e){Ie.call(this),this.h=t||1,this.g=e||$,this.j=je(this.lb,this),this.l=Date.now()}xe(Wl,Ie);A=Wl.prototype;A.ca=!1;A.R=null;A.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),De(this,"tick"),this.ca&&(yf(this),this.start()))}};A.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function yf(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}A.M=function(){Wl.X.M.call(this),yf(this),delete this.g};function vf(t,e,n){if(typeof t=="function")n&&(t=je(t,n));else if(t&&typeof t.handleEvent=="function")t=je(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:$.setTimeout(t,e||0)}function Ew(t){t.g=vf(()=>{t.g=null,t.i&&(t.i=!1,Ew(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class ND extends Gn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Ew(this)}M(){super.M(),this.g&&($.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Fs(t){Gn.call(this),this.h=t,this.g={}}xe(Fs,Gn);var Qm=[];function Sw(t,e,n,r){Array.isArray(n)||(n&&(Qm[0]=n.toString()),n=Qm);for(var i=0;i<n.length;i++){var s=dw(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function kw(t){hf(t.g,function(e,n){this.g.hasOwnProperty(n)&&ff(e)},t),t.g={}}Fs.prototype.M=function(){Fs.X.M.call(this),kw(this)};Fs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Gl(){this.g=!0}Gl.prototype.Aa=function(){this.g=!1};function AD(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function DD(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Yr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+xD(t,n)+(r?" "+r:"")})}function RD(t,e){t.info(function(){return"TIMEOUT: "+e})}Gl.prototype.info=function(){};function xD(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return gf(n)}catch{return e}}var Or={},Ym=null;function Ql(){return Ym=Ym||new Ie}Or.Pa="serverreachability";function Tw(t){ze.call(this,Or.Pa,t)}xe(Tw,ze);function Us(t){const e=Ql();De(e,new Tw(e))}Or.STAT_EVENT="statevent";function _w(t,e){ze.call(this,Or.STAT_EVENT,t),this.stat=e}xe(_w,ze);function Ge(t){const e=Ql();De(e,new _w(e,t))}Or.Qa="timingevent";function Iw(t,e){ze.call(this,Or.Qa,t),this.size=e}xe(Iw,ze);function co(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return $.setTimeout(function(){t()},e)}var Yl={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Cw={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function wf(){}wf.prototype.h=null;function Xm(t){return t.h||(t.h=t.i())}function Nw(){}var ho={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Ef(){ze.call(this,"d")}xe(Ef,ze);function Sf(){ze.call(this,"c")}xe(Sf,ze);var Nh;function Xl(){}xe(Xl,wf);Xl.prototype.g=function(){return new XMLHttpRequest};Xl.prototype.i=function(){return{}};Nh=new Xl;function fo(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new Fs(this),this.O=OD,t=Sh?125:void 0,this.T=new Wl(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Aw}function Aw(){this.i=null,this.g="",this.h=!1}var OD=45e3,Ah={},ol={};A=fo.prototype;A.setTimeout=function(t){this.O=t};function Dh(t,e,n){t.K=1,t.v=Zl(un(e)),t.s=n,t.P=!0,Dw(t,null)}function Dw(t,e){t.F=Date.now(),po(t),t.A=un(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),$w(n.i,"t",r),t.C=0,n=t.l.H,t.h=new Aw,t.g=i1(t.l,n?e:null,!t.s),0<t.N&&(t.L=new ND(je(t.La,t,t.g),t.N)),Sw(t.S,t.g,"readystatechange",t.ib),e=t.H?cw(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Us(),AD(t.j,t.u,t.A,t.m,t.U,t.s)}A.ib=function(t){t=t.target;const e=this.L;e&&Zt(t)==3?e.l():this.La(t)};A.La=function(t){try{if(t==this.g)e:{const c=Zt(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>c)&&(c!=3||Sh||this.g&&(this.h.h||this.g.fa()||tg(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?Us(3):Us(2)),Jl(this);var n=this.g.aa();this.Y=n;t:if(Rw(this)){var r=tg(this.g);t="";var i=r.length,s=Zt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){or(this),cs(this);var o="";break t}this.h.i=new $.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,DD(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!il(a)){var u=a;break t}}u=null}if(n=u)Yr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Rh(this,n);else{this.i=!1,this.o=3,Ge(12),or(this),cs(this);break e}}this.P?(xw(this,c,o),Sh&&this.i&&c==3&&(Sw(this.S,this.T,"tick",this.hb),this.T.start())):(Yr(this.j,this.m,o,null),Rh(this,o)),c==4&&or(this),this.i&&!this.I&&(c==4?e1(this.l,this):(this.i=!1,po(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ge(12)):(this.o=0,Ge(13)),or(this),cs(this)}}}catch{}finally{}};function Rw(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function xw(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=PD(t,n),i==ol){e==4&&(t.o=4,Ge(14),r=!1),Yr(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Ah){t.o=4,Ge(15),Yr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Yr(t.j,t.m,i,null),Rh(t,i);Rw(t)&&i!=ol&&i!=Ah&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Ge(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Af(e),e.K=!0,Ge(11))):(Yr(t.j,t.m,n,"[Invalid Chunked Response]"),or(t),cs(t))}A.hb=function(){if(this.g){var t=Zt(this.g),e=this.g.fa();this.C<e.length&&(Jl(this),xw(this,t,e),this.i&&t!=4&&po(this))}};function PD(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?ol:(n=Number(e.substring(n,r)),isNaN(n)?Ah:(r+=1,r+n>e.length?ol:(e=e.substr(r,n),t.C=r+n,e)))}A.cancel=function(){this.I=!0,or(this)};function po(t){t.V=Date.now()+t.O,Ow(t,t.O)}function Ow(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=co(je(t.gb,t),e)}function Jl(t){t.B&&($.clearTimeout(t.B),t.B=null)}A.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(RD(this.j,this.A),this.K!=2&&(Us(),Ge(17)),or(this),this.o=2,cs(this)):Ow(this,this.V-t)};function cs(t){t.l.G==0||t.I||e1(t.l,t)}function or(t){Jl(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,yf(t.T),kw(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Rh(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||xh(n.h,t))){if(!t.J&&xh(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)ul(n),nu(n);else break e;Nf(n),Ge(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=co(je(n.cb,n),6e3));if(1>=Vw(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else ar(n,11)}else if((t.J||n.g==t)&&ul(n),!il(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const c=u[3];c!=null&&(n.ma=c,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const y=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.h;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(kf(s,s.h),s.h=null))}if(r.D){const v=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.za=v,re(r.F,r.D,v))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=r1(r,r.H?r.ka:null,r.V),o.J){jw(r.h,o);var a=o,l=r.J;l&&a.setTimeout(l),a.B&&(Jl(a),po(a)),r.g=o}else Jw(r);0<n.i.length&&ru(n)}else u[0]!="stop"&&u[0]!="close"||ar(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?ar(n,7):Cf(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}Us(4)}catch{}}function LD(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Bl(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function bD(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Bl(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Pw(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Bl(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=bD(t),r=LD(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var Lw=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function MD(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function dr(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof dr){this.h=e!==void 0?e:t.h,al(this,t.j),this.s=t.s,this.g=t.g,ll(this,t.m),this.l=t.l,e=t.i;var n=new Vs;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Jm(this,n),this.o=t.o}else t&&(n=String(t).match(Lw))?(this.h=!!e,al(this,n[1]||"",!0),this.s=Xi(n[2]||""),this.g=Xi(n[3]||"",!0),ll(this,n[4]),this.l=Xi(n[5]||"",!0),Jm(this,n[6]||"",!0),this.o=Xi(n[7]||"")):(this.h=!!e,this.i=new Vs(null,this.h))}dr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ji(e,Zm,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ji(e,Zm,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ji(n,n.charAt(0)=="/"?UD:FD,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ji(n,jD)),t.join("")};function un(t){return new dr(t)}function al(t,e,n){t.j=n?Xi(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ll(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Jm(t,e,n){e instanceof Vs?(t.i=e,zD(t.i,t.h)):(n||(e=Ji(e,VD)),t.i=new Vs(e,t.h))}function re(t,e,n){t.i.set(e,n)}function Zl(t){return re(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Xi(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ji(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,$D),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function $D(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Zm=/[#\/\?@]/g,FD=/[#\?:]/g,UD=/[#\?]/g,VD=/[#\?@]/g,jD=/#/g;function Vs(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Qn(t){t.g||(t.g=new Map,t.h=0,t.i&&MD(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}A=Vs.prototype;A.add=function(t,e){Qn(this),this.i=null,t=Ai(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function bw(t,e){Qn(t),e=Ai(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Mw(t,e){return Qn(t),e=Ai(t,e),t.g.has(e)}A.forEach=function(t,e){Qn(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};A.oa=function(){Qn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};A.W=function(t){Qn(this);let e=[];if(typeof t=="string")Mw(this,t)&&(e=e.concat(this.g.get(Ai(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};A.set=function(t,e){return Qn(this),this.i=null,t=Ai(this,t),Mw(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};A.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function $w(t,e,n){bw(t,e),0<n.length&&(t.i=null,t.g.set(Ai(t,e),uf(n)),t.h+=n.length)}A.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Ai(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function zD(t,e){e&&!t.j&&(Qn(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(bw(this,r),$w(this,i,n))},t)),t.j=e}var BD=class{constructor(e,n){this.h=e,this.g=n}};function Fw(t){this.l=t||HD,$.PerformanceNavigationTiming?(t=$.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!($.g&&$.g.Ga&&$.g.Ga()&&$.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var HD=10;function Uw(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Vw(t){return t.h?1:t.g?t.g.size:0}function xh(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function kf(t,e){t.g?t.g.add(e):t.h=e}function jw(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Fw.prototype.cancel=function(){if(this.i=zw(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function zw(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return uf(t.i)}function Tf(){}Tf.prototype.stringify=function(t){return $.JSON.stringify(t,void 0)};Tf.prototype.parse=function(t){return $.JSON.parse(t,void 0)};function qD(){this.g=new Tf}function KD(t,e,n){const r=n||"";try{Pw(t,function(i,s){let o=i;lo(i)&&(o=gf(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function WD(t,e){const n=new Gl;if($.Image){const r=new Image;r.onload=Wo(Qo,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Wo(Qo,n,r,"TestLoadImage: error",!1,e),r.onabort=Wo(Qo,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Wo(Qo,n,r,"TestLoadImage: timeout",!1,e),$.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Qo(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function mo(t){this.l=t.ac||null,this.j=t.jb||!1}xe(mo,wf);mo.prototype.g=function(){return new eu(this.l,this.j)};mo.prototype.i=function(t){return function(){return t}}({});function eu(t,e){Ie.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=_f,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}xe(eu,Ie);var _f=0;A=eu.prototype;A.open=function(t,e){if(this.readyState!=_f)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,js(this)};A.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||$).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};A.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,go(this)),this.readyState=_f};A.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,js(this)),this.g&&(this.readyState=3,js(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof $.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Bw(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function Bw(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}A.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?go(this):js(this),this.readyState==3&&Bw(this)}};A.Va=function(t){this.g&&(this.response=this.responseText=t,go(this))};A.Ua=function(t){this.g&&(this.response=t,go(this))};A.ga=function(){this.g&&go(this)};function go(t){t.readyState=4,t.l=null,t.j=null,t.A=null,js(t)}A.setRequestHeader=function(t,e){this.v.append(t,e)};A.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};A.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function js(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(eu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var GD=$.JSON.parse;function ue(t){Ie.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Hw,this.K=this.L=!1}xe(ue,Ie);var Hw="",QD=/^https?$/i,YD=["POST","PUT"];A=ue.prototype;A.Ka=function(t){this.L=t};A.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Nh.g(),this.C=this.u?Xm(this.u):Xm(Nh),this.g.onreadystatechange=je(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){eg(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=$.FormData&&t instanceof $.FormData,!(0<=ow(YD,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Ww(this),0<this.B&&((this.K=XD(this.g))?(this.g.timeout=this.B,this.g.ontimeout=je(this.qa,this)):this.A=vf(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){eg(this,s)}};function XD(t){return pi&&pD()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}A.qa=function(){typeof lf<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,De(this,"timeout"),this.abort(8))};function eg(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,qw(t),tu(t)}function qw(t){t.D||(t.D=!0,De(t,"complete"),De(t,"error"))}A.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,De(this,"complete"),De(this,"abort"),tu(this))};A.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),tu(this,!0)),ue.X.M.call(this)};A.Ha=function(){this.s||(this.F||this.v||this.l?Kw(this):this.fb())};A.fb=function(){Kw(this)};function Kw(t){if(t.h&&typeof lf<"u"&&(!t.C[1]||Zt(t)!=4||t.aa()!=2)){if(t.v&&Zt(t)==4)vf(t.Ha,0,t);else if(De(t,"readystatechange"),Zt(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(Lw)[1]||null;if(!i&&$.self&&$.self.location){var s=$.self.location.protocol;i=s.substr(0,s.length-1)}r=!QD.test(i?i.toLowerCase():"")}n=r}if(n)De(t,"complete"),De(t,"success");else{t.m=6;try{var o=2<Zt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",qw(t)}}finally{tu(t)}}}}function tu(t,e){if(t.g){Ww(t);const n=t.g,r=t.C[0]?rl:null;t.g=null,t.C=null,e||De(t,"ready");try{n.onreadystatechange=r}catch{}}}function Ww(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&($.clearTimeout(t.A),t.A=null)}function Zt(t){return t.g?t.g.readyState:0}A.aa=function(){try{return 2<Zt(this)?this.g.status:-1}catch{return-1}};A.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};A.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),GD(e)}};function tg(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Hw:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}A.Ea=function(){return this.m};A.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Gw(t){let e="";return hf(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function If(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Gw(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):re(t,e,n))}function Hi(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Qw(t){this.Ca=0,this.i=[],this.j=new Gl,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Hi("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Hi("baseRetryDelayMs",5e3,t),this.bb=Hi("retryDelaySeedMs",1e4,t),this.$a=Hi("forwardChannelMaxRetries",2,t),this.ta=Hi("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Fw(t&&t.concurrentRequestLimit),this.Fa=new qD,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}A=Qw.prototype;A.ma=8;A.G=1;function Cf(t){if(Yw(t),t.G==3){var e=t.U++,n=un(t.F);re(n,"SID",t.I),re(n,"RID",e),re(n,"TYPE","terminate"),yo(t,n),e=new fo(t,t.j,e,void 0),e.K=2,e.v=Zl(un(n)),n=!1,$.navigator&&$.navigator.sendBeacon&&(n=$.navigator.sendBeacon(e.v.toString(),"")),!n&&$.Image&&(new Image().src=e.v,n=!0),n||(e.g=i1(e.l,null),e.g.da(e.v)),e.F=Date.now(),po(e)}n1(t)}function nu(t){t.g&&(Af(t),t.g.cancel(),t.g=null)}function Yw(t){nu(t),t.u&&($.clearTimeout(t.u),t.u=null),ul(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&$.clearTimeout(t.m),t.m=null)}function ru(t){Uw(t.h)||t.m||(t.m=!0,vw(t.Ja,t),t.C=0)}function JD(t,e){return Vw(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=co(je(t.Ja,t,e),t1(t,t.C)),t.C++,!0)}A.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new fo(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=cw(s),hw(s,this.S)):s=this.S),this.o!==null||this.N||(i.H=s,s=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Xw(this,i,e),n=un(this.F),re(n,"RID",t),re(n,"CVER",22),this.D&&re(n,"X-HTTP-Session-Id",this.D),yo(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(Gw(s)))+"&"+e:this.o&&If(n,this.o,s)),kf(this.h,i),this.Ya&&re(n,"TYPE","init"),this.O?(re(n,"$req",e),re(n,"SID","null"),i.Z=!0,Dh(i,n,null)):Dh(i,n,e),this.G=2}}else this.G==3&&(t?ng(this,t):this.i.length==0||Uw(this.h)||ng(this))};function ng(t,e){var n;e?n=e.m:n=t.U++;const r=un(t.F);re(r,"SID",t.I),re(r,"RID",n),re(r,"AID",t.T),yo(t,r),t.o&&t.s&&If(r,t.o,t.s),n=new fo(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Xw(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),kf(t.h,n),Dh(n,r,e)}function yo(t,e){t.ia&&hf(t.ia,function(n,r){re(e,r,n)}),t.l&&Pw({},function(n,r){re(e,r,n)})}function Xw(t,e,n){n=Math.min(t.i.length,n);var r=t.l?je(t.l.Ra,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{KD(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function Jw(t){t.g||t.u||(t.Z=1,vw(t.Ia,t),t.A=0)}function Nf(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=co(je(t.Ia,t),t1(t,t.A)),t.A++,!0)}A.Ia=function(){if(this.u=null,Zw(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=co(je(this.eb,this),t)}};A.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Ge(10),nu(this),Zw(this))};function Af(t){t.B!=null&&($.clearTimeout(t.B),t.B=null)}function Zw(t){t.g=new fo(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=un(t.sa);re(e,"RID","rpc"),re(e,"SID",t.I),re(e,"CI",t.L?"0":"1"),re(e,"AID",t.T),re(e,"TYPE","xmlhttp"),yo(t,e),t.o&&t.s&&If(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Zl(un(e)),n.s=null,n.P=!0,Dw(n,t)}A.cb=function(){this.v!=null&&(this.v=null,nu(this),Nf(this),Ge(19))};function ul(t){t.v!=null&&($.clearTimeout(t.v),t.v=null)}function e1(t,e){var n=null;if(t.g==e){ul(t),Af(t),t.g=null;var r=2}else if(xh(t.h,e))n=e.D,jw(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=Ql(),De(r,new Iw(r,n)),ru(t)}else Jw(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(r==1&&JD(t,e)||r==2&&Nf(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:ar(t,5);break;case 4:ar(t,10);break;case 3:ar(t,6);break;default:ar(t,2)}}}function t1(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function ar(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=je(t.kb,t);n||(n=new dr("//www.google.com/images/cleardot.gif"),$.location&&$.location.protocol=="http"||al(n,"https"),Zl(n)),WD(n.toString(),r)}else Ge(2);t.G=0,t.l&&t.l.va(e),n1(t),Yw(t)}A.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Ge(2)):(this.j.info("Failed to ping google.com"),Ge(1))};function n1(t){if(t.G=0,t.la=[],t.l){const e=zw(t.h);(e.length!=0||t.i.length!=0)&&(qm(t.la,e),qm(t.la,t.i),t.h.i.length=0,uf(t.i),t.i.length=0),t.l.ua()}}function r1(t,e,n){var r=n instanceof dr?un(n):new dr(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),ll(r,r.m);else{var i=$.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new dr(null,void 0);r&&al(s,r),e&&(s.g=e),i&&ll(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.za,n&&e&&re(r,n,e),re(r,"VER",t.ma),yo(t,r),r}function i1(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new ue(new mo({jb:!0})):new ue(t.ra),e.Ka(t.H),e}function s1(){}A=s1.prototype;A.xa=function(){};A.wa=function(){};A.va=function(){};A.ua=function(){};A.Ra=function(){};function cl(){if(pi&&!(10<=Number(mD)))throw Error("Environmental error: no available transport.")}cl.prototype.g=function(t,e){return new at(t,e)};function at(t,e){Ie.call(this),this.g=new Qw(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!il(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!il(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Di(this)}xe(at,Ie);at.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Ge(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=r1(t,null,t.V),ru(t)};at.prototype.close=function(){Cf(this.g)};at.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=gf(t),t=n);e.i.push(new BD(e.ab++,t)),e.G==3&&ru(e)};at.prototype.M=function(){this.g.l=null,delete this.j,Cf(this.g),delete this.g,at.X.M.call(this)};function o1(t){Ef.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}xe(o1,Ef);function a1(){Sf.call(this),this.status=1}xe(a1,Sf);function Di(t){this.g=t}xe(Di,s1);Di.prototype.xa=function(){De(this.g,"a")};Di.prototype.wa=function(t){De(this.g,new o1(t))};Di.prototype.va=function(t){De(this.g,new a1)};Di.prototype.ua=function(){De(this.g,"b")};cl.prototype.createWebChannel=cl.prototype.g;at.prototype.send=at.prototype.u;at.prototype.open=at.prototype.m;at.prototype.close=at.prototype.close;Yl.NO_ERROR=0;Yl.TIMEOUT=8;Yl.HTTP_ERROR=6;Cw.COMPLETE="complete";Nw.EventType=ho;ho.OPEN="a";ho.CLOSE="b";ho.ERROR="c";ho.MESSAGE="d";Ie.prototype.listen=Ie.prototype.N;ue.prototype.listenOnce=ue.prototype.O;ue.prototype.getLastError=ue.prototype.Oa;ue.prototype.getLastErrorCode=ue.prototype.Ea;ue.prototype.getStatus=ue.prototype.aa;ue.prototype.getResponseJson=ue.prototype.Sa;ue.prototype.getResponseText=ue.prototype.fa;ue.prototype.send=ue.prototype.da;ue.prototype.setWithCredentials=ue.prototype.Ka;var ZD=function(){return new cl},eR=function(){return Ql()},dc=Yl,tR=Cw,nR=Or,rg={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},rR=mo,Yo=Nw,iR=ue;const ig="@firebase/firestore";/**
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
 */class Le{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Le.UNAUTHENTICATED=new Le(null),Le.GOOGLE_CREDENTIALS=new Le("google-credentials-uid"),Le.FIRST_PARTY=new Le("first-party-uid"),Le.MOCK_USER=new Le("mock-user");/**
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
 */let Ri="9.17.1";/**
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
 */const Ir=new Ud("@firebase/firestore");function sg(){return Ir.logLevel}function D(t,...e){if(Ir.logLevel<=G.DEBUG){const n=e.map(Df);Ir.debug(`Firestore (${Ri}): ${t}`,...n)}}function cn(t,...e){if(Ir.logLevel<=G.ERROR){const n=e.map(Df);Ir.error(`Firestore (${Ri}): ${t}`,...n)}}function Oh(t,...e){if(Ir.logLevel<=G.WARN){const n=e.map(Df);Ir.warn(`Firestore (${Ri}): ${t}`,...n)}}function Df(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function M(t="Unexpected state"){const e=`FIRESTORE (${Ri}) INTERNAL ASSERTION FAILED: `+t;throw cn(e),new Error(e)}function J(t,e){t||M()}function V(t,e){return t}/**
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
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class P extends Ht{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class $n{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class l1{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class sR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Le.UNAUTHENTICATED))}shutdown(){}}class oR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class aR{constructor(e){this.t=e,this.currentUser=Le.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new $n;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new $n,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new $n)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(J(typeof r.accessToken=="string"),new l1(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return J(e===null||typeof e=="string"),new Le(e)}}class lR{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i,this.type="FirstParty",this.user=Le.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(J(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class uR{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i}getToken(){return Promise.resolve(new lR(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Le.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class cR{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class hR{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const r=s=>{s.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.A;return this.A=s.token,D("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.T.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.T.getImmediate({optional:!0});s?i(s):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(J(typeof n.token=="string"),this.A=n.token,new cR(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function dR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class u1{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=dR(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Q(t,e){return t<e?-1:t>e?1:0}function mi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class ve{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new P(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new P(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new P(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new P(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ve.fromMillis(Date.now())}static fromDate(e){return ve.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ve(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Q(this.nanoseconds,e.nanoseconds):Q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class F{constructor(e){this.timestamp=e}static fromTimestamp(e){return new F(e)}static min(){return new F(new ve(0,0))}static max(){return new F(new ve(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class zs{constructor(e,n,r){n===void 0?n=0:n>e.length&&M(),r===void 0?r=e.length-n:r>e.length-n&&M(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return zs.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof zs?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ie extends zs{construct(e,n,r){return new ie(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new P(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ie(n)}static emptyPath(){return new ie([])}}const fR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class $e extends zs{construct(e,n,r){return new $e(e,n,r)}static isValidIdentifier(e){return fR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$e.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new $e(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new P(S.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new P(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new P(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new P(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new $e(n)}static emptyPath(){return new $e([])}}/**
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
 */class O{constructor(e){this.path=e}static fromPath(e){return new O(ie.fromString(e))}static fromName(e){return new O(ie.fromString(e).popFirst(5))}static empty(){return new O(ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ie.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new O(new ie(e.slice()))}}function pR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=F.fromTimestamp(r===1e9?new ve(n+1,0):new ve(n,r));return new jn(i,O.empty(),e)}function mR(t){return new jn(t.readTime,t.key,-1)}class jn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new jn(F.min(),O.empty(),-1)}static max(){return new jn(F.max(),O.empty(),-1)}}function gR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=O.comparator(t.documentKey,e.documentKey),n!==0?n:Q(t.largestBatchId,e.largestBatchId))}/**
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
 */const yR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class vR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function vo(t){if(t.code!==S.FAILED_PRECONDITION||t.message!==yR)throw t;D("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&M(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new k((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof k?n:k.resolve(n)}catch(n){return k.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):k.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):k.reject(n)}static resolve(e){return new k((n,r)=>{n(e)})}static reject(e){return new k((n,r)=>{r(e)})}static waitFor(e){return new k((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=k.resolve(!1);for(const r of e)n=n.next(i=>i?k.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new k((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new k((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function wo(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Rf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>n.writeSequenceNumber(r))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}Rf.at=-1;/**
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
 */class wR{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Bs{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Bs("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Bs&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */function og(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function xi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function c1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */function iu(t){return t==null}function hl(t){return t===0&&1/t==-1/0}function ER(t){return typeof t=="number"&&Number.isInteger(t)&&!hl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */class Ke{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Ke(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Ke(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ke.EMPTY_BYTE_STRING=new Ke("");const SR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function zn(t){if(J(!!t),typeof t=="string"){let e=0;const n=SR.exec(t);if(J(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:fe(t.seconds),nanos:fe(t.nanos)}}function fe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function gi(t){return typeof t=="string"?Ke.fromBase64String(t):Ke.fromUint8Array(t)}/**
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
 */function h1(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function d1(t){const e=t.mapValue.fields.__previous_value__;return h1(e)?d1(e):e}function Hs(t){const e=zn(t.mapValue.fields.__local_write_time__.timestampValue);return new ve(e.seconds,e.nanos)}/**
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
 */const Xo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Cr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?h1(t)?4:kR(t)?9007199254740991:10:M()}function zt(t,e){if(t===e)return!0;const n=Cr(t);if(n!==Cr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Hs(t).isEqual(Hs(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=zn(r.timestampValue),o=zn(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return gi(r.bytesValue).isEqual(gi(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return fe(r.geoPointValue.latitude)===fe(i.geoPointValue.latitude)&&fe(r.geoPointValue.longitude)===fe(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return fe(r.integerValue)===fe(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=fe(r.doubleValue),o=fe(i.doubleValue);return s===o?hl(s)===hl(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return mi(t.arrayValue.values||[],e.arrayValue.values||[],zt);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(og(s)!==og(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!zt(s[a],o[a])))return!1;return!0}(t,e);default:return M()}}function qs(t,e){return(t.values||[]).find(n=>zt(n,e))!==void 0}function yi(t,e){if(t===e)return 0;const n=Cr(t),r=Cr(e);if(n!==r)return Q(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Q(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=fe(i.integerValue||i.doubleValue),a=fe(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return ag(t.timestampValue,e.timestampValue);case 4:return ag(Hs(t),Hs(e));case 5:return Q(t.stringValue,e.stringValue);case 6:return function(i,s){const o=gi(i),a=gi(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=Q(o[l],a[l]);if(u!==0)return u}return Q(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=Q(fe(i.latitude),fe(s.latitude));return o!==0?o:Q(fe(i.longitude),fe(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=yi(o[l],a[l]);if(u)return u}return Q(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===Xo.mapValue&&s===Xo.mapValue)return 0;if(i===Xo.mapValue)return 1;if(s===Xo.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=Q(a[c],u[c]);if(h!==0)return h;const d=yi(o[a[c]],l[u[c]]);if(d!==0)return d}return Q(a.length,u.length)}(t.mapValue,e.mapValue);default:throw M()}}function ag(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Q(t,e);const n=zn(t),r=zn(e),i=Q(n.seconds,r.seconds);return i!==0?i:Q(n.nanos,r.nanos)}function vi(t){return Ph(t)}function Ph(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=zn(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?gi(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,O.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Ph(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Ph(r.fields[a])}`;return s+"}"}(t.mapValue):M();var e,n}function Lh(t){return!!t&&"integerValue"in t}function xf(t){return!!t&&"arrayValue"in t}function lg(t){return!!t&&"nullValue"in t}function ug(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function wa(t){return!!t&&"mapValue"in t}function hs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return xi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=hs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=hs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function kR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class dl{constructor(e,n){this.position=e,this.inclusive=n}}function cg(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=O.comparator(O.fromName(o.referenceValue),n.key):r=yi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function hg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!zt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class f1{}class ge extends f1{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new _R(e,n,r):n==="array-contains"?new NR(e,r):n==="in"?new AR(e,r):n==="not-in"?new DR(e,r):n==="array-contains-any"?new RR(e,r):new ge(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new IR(e,r):new CR(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(yi(n,this.value)):n!==null&&Cr(this.value)===Cr(n)&&this.matchesComparison(yi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return M()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Bt extends f1{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new Bt(e,n)}matches(e){return p1(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function p1(t){return t.op==="and"}function m1(t){return TR(t)&&p1(t)}function TR(t){for(const e of t.filters)if(e instanceof Bt)return!1;return!0}function bh(t){if(t instanceof ge)return t.field.canonicalString()+t.op.toString()+vi(t.value);if(m1(t))return t.filters.map(e=>bh(e)).join(",");{const e=t.filters.map(n=>bh(n)).join(",");return`${t.op}(${e})`}}function g1(t,e){return t instanceof ge?function(n,r){return r instanceof ge&&n.op===r.op&&n.field.isEqual(r.field)&&zt(n.value,r.value)}(t,e):t instanceof Bt?function(n,r){return r instanceof Bt&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&g1(s,r.filters[o]),!0):!1}(t,e):void M()}function y1(t){return t instanceof ge?function(e){return`${e.field.canonicalString()} ${e.op} ${vi(e.value)}`}(t):t instanceof Bt?function(e){return e.op.toString()+" {"+e.getFilters().map(y1).join(" ,")+"}"}(t):"Filter"}class _R extends ge{constructor(e,n,r){super(e,n,r),this.key=O.fromName(r.referenceValue)}matches(e){const n=O.comparator(e.key,this.key);return this.matchesComparison(n)}}class IR extends ge{constructor(e,n){super(e,"in",n),this.keys=v1("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class CR extends ge{constructor(e,n){super(e,"not-in",n),this.keys=v1("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function v1(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>O.fromName(r.referenceValue))}class NR extends ge{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return xf(n)&&qs(n.arrayValue,this.value)}}class AR extends ge{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&qs(this.value.arrayValue,n)}}class DR extends ge{constructor(e,n){super(e,"not-in",n)}matches(e){if(qs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!qs(this.value.arrayValue,n)}}class RR extends ge{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!xf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>qs(this.value.arrayValue,r))}}/**
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
 */class ds{constructor(e,n="asc"){this.field=e,this.dir=n}}function xR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Ee{constructor(e,n){this.comparator=e,this.root=n||Ne.EMPTY}insert(e,n){return new Ee(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ne.BLACK,null,null))}remove(e){return new Ee(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ne.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Jo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Jo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Jo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Jo(this.root,e,this.comparator,!0)}}class Jo{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ne{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ne.RED,this.left=i??Ne.EMPTY,this.right=s??Ne.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ne(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ne.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ne.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ne.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ne.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw M();const e=this.left.check();if(e!==this.right.check())throw M();return e+(this.isRed()?0:1)}}Ne.EMPTY=null,Ne.RED=!0,Ne.BLACK=!1;Ne.EMPTY=new class{constructor(){this.size=0}get key(){throw M()}get value(){throw M()}get color(){throw M()}get left(){throw M()}get right(){throw M()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Ne(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class we{constructor(e){this.comparator=e,this.data=new Ee(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new dg(this.data.getIterator())}getIteratorFrom(e){return new dg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof we)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new we(this.comparator);return n.data=e,n}}class dg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ct{constructor(e){this.fields=e,e.sort($e.comparator)}static empty(){return new Ct([])}unionWith(e){let n=new we($e.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ct(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return mi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class dt{constructor(e){this.value=e}static empty(){return new dt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!wa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=hs(n)}setAll(e){let n=$e.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=hs(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());wa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return zt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];wa(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){xi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new dt(hs(this.value))}}function w1(t){const e=[];return xi(t.fields,(n,r)=>{const i=new $e([n]);if(wa(r)){const s=w1(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Ct(e)}/**
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
 */class Me{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Me(e,0,F.min(),F.min(),F.min(),dt.empty(),0)}static newFoundDocument(e,n,r,i){return new Me(e,1,n,F.min(),r,i,0)}static newNoDocument(e,n){return new Me(e,2,n,F.min(),F.min(),dt.empty(),0)}static newUnknownDocument(e,n){return new Me(e,3,n,F.min(),F.min(),dt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(F.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=dt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=F.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Me&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Me(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class OR{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ft=null}}function fg(t,e=null,n=[],r=[],i=null,s=null,o=null){return new OR(t,e,n,r,i,s,o)}function Of(t){const e=V(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>bh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),iu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>vi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>vi(r)).join(",")),e.ft=n}return e.ft}function Pf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!xR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!g1(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!hg(t.startAt,e.startAt)&&hg(t.endAt,e.endAt)}function Mh(t){return O.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class su{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.dt=null,this._t=null,this.startAt,this.endAt}}function PR(t,e,n,r,i,s,o,a){return new su(t,e,n,r,i,s,o,a)}function E1(t){return new su(t)}function pg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function LR(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function bR(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function MR(t){return t.collectionGroup!==null}function si(t){const e=V(t);if(e.dt===null){e.dt=[];const n=bR(e),r=LR(e);if(n!==null&&r===null)n.isKeyField()||e.dt.push(new ds(n)),e.dt.push(new ds($e.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.dt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new ds($e.keyField(),s))}}}return e.dt}function hn(t){const e=V(t);if(!e._t)if(e.limitType==="F")e._t=fg(e.path,e.collectionGroup,si(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of si(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new ds(s.field,o))}const r=e.endAt?new dl(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new dl(e.startAt.position,e.startAt.inclusive):null;e._t=fg(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e._t}function $h(t,e,n){return new su(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ou(t,e){return Pf(hn(t),hn(e))&&t.limitType===e.limitType}function S1(t){return`${Of(hn(t))}|lt:${t.limitType}`}function Fh(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>y1(r)).join(", ")}]`),iu(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>vi(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>vi(r)).join(",")),`Target(${n})`}(hn(t))}; limitType=${t.limitType})`}function au(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):O.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of si(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=cg(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,si(n),r)||n.endAt&&!function(i,s,o){const a=cg(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,si(n),r))}(t,e)}function $R(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function k1(t){return(e,n)=>{let r=!1;for(const i of si(t)){const s=FR(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function FR(t,e,n){const r=t.field.isKeyField()?O.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?yi(a,l):M()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return M()}}/**
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
 */function T1(t,e){if(t.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:hl(e)?"-0":e}}function _1(t){return{integerValue:""+t}}function UR(t,e){return ER(e)?_1(e):T1(t,e)}/**
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
 */class lu{constructor(){this._=void 0}}function VR(t,e,n){return t instanceof fl?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Ks?C1(t,e):t instanceof Ws?N1(t,e):function(r,i){const s=I1(r,i),o=mg(s)+mg(r.gt);return Lh(s)&&Lh(r.gt)?_1(o):T1(r.yt,o)}(t,e)}function jR(t,e,n){return t instanceof Ks?C1(t,e):t instanceof Ws?N1(t,e):n}function I1(t,e){return t instanceof pl?Lh(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class fl extends lu{}class Ks extends lu{constructor(e){super(),this.elements=e}}function C1(t,e){const n=A1(e);for(const r of t.elements)n.some(i=>zt(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ws extends lu{constructor(e){super(),this.elements=e}}function N1(t,e){let n=A1(e);for(const r of t.elements)n=n.filter(i=>!zt(i,r));return{arrayValue:{values:n}}}class pl extends lu{constructor(e,n){super(),this.yt=e,this.gt=n}}function mg(t){return fe(t.integerValue||t.doubleValue)}function A1(t){return xf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function zR(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Ks&&r instanceof Ks||n instanceof Ws&&r instanceof Ws?mi(n.elements,r.elements,zt):n instanceof pl&&r instanceof pl?zt(n.gt,r.gt):n instanceof fl&&r instanceof fl}(t.transform,e.transform)}class BR{constructor(e,n){this.version=e,this.transformResults=n}}class Dt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Dt}static exists(e){return new Dt(void 0,e)}static updateTime(e){return new Dt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ea(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class uu{}function D1(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Lf(t.key,Dt.none()):new Eo(t.key,t.data,Dt.none());{const n=t.data,r=dt.empty();let i=new we($e.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Pr(t.key,r,new Ct(i.toArray()),Dt.none())}}function HR(t,e,n){t instanceof Eo?function(r,i,s){const o=r.value.clone(),a=yg(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Pr?function(r,i,s){if(!Ea(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=yg(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(R1(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function fs(t,e,n,r){return t instanceof Eo?function(i,s,o,a){if(!Ea(i.precondition,s))return o;const l=i.value.clone(),u=vg(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Pr?function(i,s,o,a){if(!Ea(i.precondition,s))return o;const l=vg(i.fieldTransforms,a,s),u=s.data;return u.setAll(R1(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return Ea(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function qR(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=I1(r.transform,i||null);s!=null&&(n===null&&(n=dt.empty()),n.set(r.field,s))}return n||null}function gg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&mi(n,r,(i,s)=>zR(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Eo extends uu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Pr extends uu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function R1(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function yg(t,e,n){const r=new Map;J(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,jR(o,a,n[i]))}return r}function vg(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,VR(s,o,e))}return r}class Lf extends uu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class KR extends uu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class WR{constructor(e){this.count=e}}/**
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
 */var de,K;function GR(t){switch(t){default:return M();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0}}function x1(t){if(t===void 0)return cn("GRPC error has no .code"),S.UNKNOWN;switch(t){case de.OK:return S.OK;case de.CANCELLED:return S.CANCELLED;case de.UNKNOWN:return S.UNKNOWN;case de.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case de.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case de.INTERNAL:return S.INTERNAL;case de.UNAVAILABLE:return S.UNAVAILABLE;case de.UNAUTHENTICATED:return S.UNAUTHENTICATED;case de.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case de.NOT_FOUND:return S.NOT_FOUND;case de.ALREADY_EXISTS:return S.ALREADY_EXISTS;case de.PERMISSION_DENIED:return S.PERMISSION_DENIED;case de.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case de.ABORTED:return S.ABORTED;case de.OUT_OF_RANGE:return S.OUT_OF_RANGE;case de.UNIMPLEMENTED:return S.UNIMPLEMENTED;case de.DATA_LOSS:return S.DATA_LOSS;default:return M()}}(K=de||(de={}))[K.OK=0]="OK",K[K.CANCELLED=1]="CANCELLED",K[K.UNKNOWN=2]="UNKNOWN",K[K.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",K[K.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",K[K.NOT_FOUND=5]="NOT_FOUND",K[K.ALREADY_EXISTS=6]="ALREADY_EXISTS",K[K.PERMISSION_DENIED=7]="PERMISSION_DENIED",K[K.UNAUTHENTICATED=16]="UNAUTHENTICATED",K[K.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",K[K.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",K[K.ABORTED=10]="ABORTED",K[K.OUT_OF_RANGE=11]="OUT_OF_RANGE",K[K.UNIMPLEMENTED=12]="UNIMPLEMENTED",K[K.INTERNAL=13]="INTERNAL",K[K.UNAVAILABLE=14]="UNAVAILABLE",K[K.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Oi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){xi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return c1(this.inner)}size(){return this.innerSize}}/**
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
 */const QR=new Ee(O.comparator);function dn(){return QR}const O1=new Ee(O.comparator);function Zi(...t){let e=O1;for(const n of t)e=e.insert(n.key,n);return e}function P1(t){let e=O1;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function lr(){return ps()}function L1(){return ps()}function ps(){return new Oi(t=>t.toString(),(t,e)=>t.isEqual(e))}const YR=new Ee(O.comparator),XR=new we(O.comparator);function H(...t){let e=XR;for(const n of t)e=e.add(n);return e}const JR=new we(Q);function b1(){return JR}/**
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
 */class cu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,So.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new cu(F.min(),i,b1(),dn(),H())}}class So{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new So(r,n,H(),H(),H())}}/**
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
 */class Sa{constructor(e,n,r,i){this.It=e,this.removedTargetIds=n,this.key=r,this.Tt=i}}class M1{constructor(e,n){this.targetId=e,this.Et=n}}class $1{constructor(e,n,r=Ke.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class wg{constructor(){this.At=0,this.Rt=Sg(),this.bt=Ke.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=H(),n=H(),r=H();return this.Rt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:M()}}),new So(this.bt,this.Pt,e,n,r)}xt(){this.vt=!1,this.Rt=Sg()}Nt(e,n){this.vt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class ZR{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=dn(),this.qt=Eg(),this.Ut=new we(Q)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}jt(e){this.forEachTarget(e,n=>{const r=this.Wt(n);switch(e.state){case 0:this.zt(n)&&r.Dt(e.resumeToken);break;case 1:r.Mt(),r.Vt||r.xt(),r.Dt(e.resumeToken);break;case 2:r.Mt(),r.Vt||this.removeTarget(n);break;case 3:this.zt(n)&&(r.Ft(),r.Dt(e.resumeToken));break;case 4:this.zt(n)&&(this.Ht(n),r.Dt(e.resumeToken));break;default:M()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((r,i)=>{this.zt(i)&&n(i)})}Jt(e){const n=e.targetId,r=e.Et.count,i=this.Yt(n);if(i){const s=i.target;if(Mh(s))if(r===0){const o=new O(s.path);this.Qt(n,o,Me.newNoDocument(o,F.min()))}else J(r===1);else this.Xt(n)!==r&&(this.Ht(n),this.Ut=this.Ut.add(n))}}Zt(e){const n=new Map;this.Bt.forEach((s,o)=>{const a=this.Yt(o);if(a){if(s.current&&Mh(a.target)){const l=new O(a.target.path);this.Lt.get(l)!==null||this.te(o,l)||this.Qt(o,l,Me.newNoDocument(l,e))}s.St&&(n.set(o,s.Ct()),s.xt())}});let r=H();this.qt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Yt(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Lt.forEach((s,o)=>o.setReadTime(e));const i=new cu(e,n,this.Ut,this.Lt,r);return this.Lt=dn(),this.qt=Eg(),this.Ut=new we(Q),i}Gt(e,n){if(!this.zt(e))return;const r=this.te(e,n.key)?2:0;this.Wt(e).Nt(n.key,r),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,r){if(!this.zt(e))return;const i=this.Wt(e);this.te(e,n)?i.Nt(n,1):i.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),r&&(this.Lt=this.Lt.insert(n,r))}removeTarget(e){this.Bt.delete(e)}Xt(e){const n=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let n=this.Bt.get(e);return n||(n=new wg,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new we(Q),this.qt=this.qt.insert(e,n)),n}zt(e){const n=this.Yt(e)!==null;return n||D("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new wg),this.$t.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.$t.getRemoteKeysForTarget(e).has(n)}}function Eg(){return new Ee(O.comparator)}function Sg(){return new Ee(O.comparator)}/**
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
 */const ex=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),tx=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),nx=(()=>({and:"AND",or:"OR"}))();class rx{constructor(e,n){this.databaseId=e,this.wt=n}}function ml(t,e){return t.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function F1(t,e){return t.wt?e.toBase64():e.toUint8Array()}function ix(t,e){return ml(t,e.toTimestamp())}function Vt(t){return J(!!t),F.fromTimestamp(function(e){const n=zn(e);return new ve(n.seconds,n.nanos)}(t))}function bf(t,e){return function(n){return new ie(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function U1(t){const e=ie.fromString(t);return J(B1(e)),e}function Uh(t,e){return bf(t.databaseId,e.path)}function fc(t,e){const n=U1(e);if(n.get(1)!==t.databaseId.projectId)throw new P(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new P(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new O(V1(n))}function Vh(t,e){return bf(t.databaseId,e)}function sx(t){const e=U1(t);return e.length===4?ie.emptyPath():V1(e)}function jh(t){return new ie(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function V1(t){return J(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function kg(t,e,n){return{name:Uh(t,e),fields:n.value.mapValue.fields}}function ox(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:M()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.wt?(J(u===void 0||typeof u=="string"),Ke.fromBase64String(u||"")):(J(u===void 0||u instanceof Uint8Array),Ke.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?S.UNKNOWN:x1(l.code);return new P(u,l.message||"")}(o);n=new $1(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=fc(t,r.document.name),s=Vt(r.document.updateTime),o=r.document.createTime?Vt(r.document.createTime):F.min(),a=new dt({mapValue:{fields:r.document.fields}}),l=Me.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Sa(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=fc(t,r.document),s=r.readTime?Vt(r.readTime):F.min(),o=Me.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Sa([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=fc(t,r.document),s=r.removedTargetIds||[];n=new Sa([],s,i,null)}else{if(!("filter"in e))return M();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new WR(i),o=r.targetId;n=new M1(o,s)}}return n}function ax(t,e){let n;if(e instanceof Eo)n={update:kg(t,e.key,e.value)};else if(e instanceof Lf)n={delete:Uh(t,e.key)};else if(e instanceof Pr)n={update:kg(t,e.key,e.data),updateMask:gx(e.fieldMask)};else{if(!(e instanceof KR))return M();n={verify:Uh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof fl)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Ks)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ws)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof pl)return{fieldPath:s.field.canonicalString(),increment:o.gt};throw M()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:ix(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:M()}(t,e.precondition)),n}function lx(t,e){return t&&t.length>0?(J(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?Vt(r.updateTime):Vt(i);return s.isEqual(F.min())&&(s=Vt(i)),new BR(s,r.transformResults||[])}(n,e))):[]}function ux(t,e){return{documents:[Vh(t,e.path)]}}function cx(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Vh(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Vh(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return z1(Bt.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:Mr(c.field),direction:fx(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,u){return l.wt||iu(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function hx(t){let e=sx(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){J(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(c){const h=j1(c);return h instanceof Bt&&m1(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new ds($r(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,iu(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,d=c.values||[];return new dl(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,d=c.values||[];return new dl(d,h)}(n.endAt)),PR(e,i,o,s,a,"F",l,u)}function dx(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return M()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function j1(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=$r(e.unaryFilter.field);return ge.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=$r(e.unaryFilter.field);return ge.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=$r(e.unaryFilter.field);return ge.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=$r(e.unaryFilter.field);return ge.create(s,"!=",{nullValue:"NULL_VALUE"});default:return M()}}(t):t.fieldFilter!==void 0?function(e){return ge.create($r(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return M()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Bt.create(e.compositeFilter.filters.map(n=>j1(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return M()}}(e.compositeFilter.op))}(t):M()}function fx(t){return ex[t]}function px(t){return tx[t]}function mx(t){return nx[t]}function Mr(t){return{fieldPath:t.canonicalString()}}function $r(t){return $e.fromServerFormat(t.fieldPath)}function z1(t){return t instanceof ge?function(e){if(e.op==="=="){if(ug(e.value))return{unaryFilter:{field:Mr(e.field),op:"IS_NAN"}};if(lg(e.value))return{unaryFilter:{field:Mr(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(ug(e.value))return{unaryFilter:{field:Mr(e.field),op:"IS_NOT_NAN"}};if(lg(e.value))return{unaryFilter:{field:Mr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Mr(e.field),op:px(e.op),value:e.value}}}(t):t instanceof Bt?function(e){const n=e.getFilters().map(r=>z1(r));return n.length===1?n[0]:{compositeFilter:{op:mx(e.op),filters:n}}}(t):M()}function gx(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function B1(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class yx{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&HR(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=fs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=fs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=L1();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=D1(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(F.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),H())}isEqual(e){return this.batchId===e.batchId&&mi(this.mutations,e.mutations,(n,r)=>gg(n,r))&&mi(this.baseMutations,e.baseMutations,(n,r)=>gg(n,r))}}class Mf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){J(e.mutations.length===r.length);let i=YR;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Mf(e,n,r,i)}}/**
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
 */class vx{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class fr{constructor(e,n,r,i,s=F.min(),o=F.min(),a=Ke.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new fr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new fr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new fr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class wx{constructor(e){this.ie=e}}function Ex(t){const e=hx({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?$h(e,e.limit,"L"):e}/**
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
 */class Sx{constructor(){this.Je=new kx}addToCollectionParentIndex(e,n){return this.Je.add(n),k.resolve()}getCollectionParents(e,n){return k.resolve(this.Je.getEntries(n))}addFieldIndex(e,n){return k.resolve()}deleteFieldIndex(e,n){return k.resolve()}getDocumentsMatchingTarget(e,n){return k.resolve(null)}getIndexType(e,n){return k.resolve(0)}getFieldIndexes(e,n){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}getMinOffset(e,n){return k.resolve(jn.min())}getMinOffsetFromCollectionGroup(e,n){return k.resolve(jn.min())}updateCollectionGroup(e,n,r){return k.resolve()}updateIndexEntries(e,n){return k.resolve()}}class kx{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new we(ie.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new we(ie.comparator)).toArray()}}/**
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
 */class wi{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new wi(0)}static vn(){return new wi(-1)}}/**
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
 */class Tx{constructor(){this.changes=new Oi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Me.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?k.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class _x{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class Ix{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&fs(r.mutation,i,Ct.empty(),ve.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,H()).next(()=>r))}getLocalViewOfDocuments(e,n,r=H()){const i=lr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Zi();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=lr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,H()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=dn();const o=ps(),a=ps();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Pr)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),fs(c.mutation,u,c.mutation.getFieldMask(),ve.now())):o.set(u.key,Ct.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new _x(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=ps();let i=new Ee((o,a)=>o-a),s=H();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Ct.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||H()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=L1();c.forEach(d=>{if(!s.has(d)){const g=D1(n.get(d),r.get(d));g!==null&&h.set(d,g),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return k.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return O.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):MR(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):k.resolve(lr());let a=-1,l=s;return o.next(u=>k.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?k.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,H())).next(c=>({batchId:a,changes:P1(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new O(n)).next(r=>{let i=Zi();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=Zi();return this.indexManager.getCollectionParents(e,i).next(o=>k.forEach(o,a=>{const l=function(u,c){return new su(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,Me.newInvalidDocument(u)))});let o=Zi();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&fs(u.mutation,l,Ct.empty(),ve.now()),au(n,l)&&(o=o.insert(a,l))}),o})}}/**
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
 */class Cx{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return k.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:Vt(r.createTime)}),k.resolve()}getNamedQuery(e,n){return k.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(r){return{name:r.name,query:Ex(r.bundledQuery),readTime:Vt(r.readTime)}}(n)),k.resolve()}}/**
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
 */class Nx{constructor(){this.overlays=new Ee(O.comparator),this.es=new Map}getOverlay(e,n){return k.resolve(this.overlays.get(n))}getOverlays(e,n){const r=lr();return k.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.oe(e,n,s)}),k.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.es.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.es.delete(r)),k.resolve()}getOverlaysForCollection(e,n,r){const i=lr(),s=n.length+1,o=new O(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return k.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ee((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=lr(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=lr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return k.resolve(a)}oe(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(r.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new vx(n,r));let s=this.es.get(n);s===void 0&&(s=H(),this.es.set(n,s)),this.es.set(n,s.add(r.key))}}/**
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
 */class $f{constructor(){this.ns=new we(ke.ss),this.rs=new we(ke.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const r=new ke(e,n);this.ns=this.ns.add(r),this.rs=this.rs.add(r)}us(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.cs(new ke(e,n))}hs(e,n){e.forEach(r=>this.removeReference(r,n))}ls(e){const n=new O(new ie([])),r=new ke(n,e),i=new ke(n,e+1),s=[];return this.rs.forEachInRange([r,i],o=>{this.cs(o),s.push(o.key)}),s}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new O(new ie([])),r=new ke(n,e),i=new ke(n,e+1);let s=H();return this.rs.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new ke(e,0),r=this.ns.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ke{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return O.comparator(e.key,n.key)||Q(e._s,n._s)}static os(e,n){return Q(e._s,n._s)||O.comparator(e.key,n.key)}}/**
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
 */class Ax{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new we(ke.ss)}checkEmpty(e){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new yx(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new ke(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return k.resolve(o)}lookupMutationBatch(e,n){return k.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ps(r),s=i<0?0:i;return k.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ke(n,0),i=new ke(n,Number.POSITIVE_INFINITY),s=[];return this.gs.forEachInRange([r,i],o=>{const a=this.ys(o._s);s.push(a)}),k.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new we(Q);return n.forEach(i=>{const s=new ke(i,0),o=new ke(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([s,o],a=>{r=r.add(a._s)})}),k.resolve(this.Is(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;O.isDocumentKey(s)||(s=s.child(""));const o=new ke(new O(s),0);let a=new we(Q);return this.gs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l._s)),!0)},o),k.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(r=>{const i=this.ys(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){J(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.gs;return k.forEach(n.mutations,i=>{const s=new ke(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=r})}An(e){}containsKey(e,n){const r=new ke(n,0),i=this.gs.firstAfterOrEqual(r);return k.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,k.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Dx{constructor(e){this.Es=e,this.docs=new Ee(O.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return k.resolve(r?r.document.mutableCopy():Me.newInvalidDocument(n))}getEntries(e,n){let r=dn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Me.newInvalidDocument(i))}),k.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=dn();const o=n.path,a=new O(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||gR(mR(c),r)<=0||(i.has(c.key)||au(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return k.resolve(s)}getAllFromCollectionGroup(e,n,r,i){M()}As(e,n){return k.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Rx(this)}getSize(e){return k.resolve(this.size)}}class Rx extends Tx{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(r)}),k.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
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
 */class xx{constructor(e){this.persistence=e,this.Rs=new Oi(n=>Of(n),Pf),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.bs=0,this.Ps=new $f,this.targetCount=0,this.vs=wi.Pn()}forEachTarget(e,n){return this.Rs.forEach((r,i)=>n(i)),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.bs&&(this.bs=n),k.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new wi(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,k.resolve()}updateTargetData(e,n){return this.Dn(n),k.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Rs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),k.waitFor(s).next(()=>i)}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,n){const r=this.Rs.get(n)||null;return k.resolve(r)}addMatchingKeys(e,n,r){return this.Ps.us(n,r),k.resolve()}removeMatchingKeys(e,n,r){this.Ps.hs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),k.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),k.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ps.ds(n);return k.resolve(r)}containsKey(e,n){return k.resolve(this.Ps.containsKey(n))}}/**
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
 */class Ox{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new Rf(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new xx(this),this.indexManager=new Sx,this.remoteDocumentCache=function(r){return new Dx(r)}(r=>this.referenceDelegate.xs(r)),this.yt=new wx(n),this.Ns=new Cx(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Nx,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Vs[e.toKey()];return r||(r=new Ax(n,this.referenceDelegate),this.Vs[e.toKey()]=r),r}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,r){D("MemoryPersistence","Starting transaction:",e);const i=new Px(this.Ss.next());return this.referenceDelegate.ks(),r(i).next(s=>this.referenceDelegate.Os(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ms(e,n){return k.or(Object.values(this.Vs).map(r=>()=>r.containsKey(e,n)))}}class Px extends vR{constructor(e){super(),this.currentSequenceNumber=e}}class Ff{constructor(e){this.persistence=e,this.Fs=new $f,this.$s=null}static Bs(e){return new Ff(e)}get Ls(){if(this.$s)return this.$s;throw M()}addReference(e,n,r){return this.Fs.addReference(r,n),this.Ls.delete(r.toString()),k.resolve()}removeReference(e,n,r){return this.Fs.removeReference(r,n),this.Ls.add(r.toString()),k.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),k.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ls.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.Ls,r=>{const i=O.fromPath(r);return this.qs(e,i).next(s=>{s||n.removeEntry(i,F.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.qs(e,n).next(r=>{r?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}qs(e,n){return k.or([()=>k.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
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
 */class Uf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Si=r,this.Di=i}static Ci(e,n){let r=H(),i=H();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Uf(e,n.fromCache,r,i)}}/**
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
 */class Lx{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.ki(e,n).next(s=>s||this.Oi(e,n,i,r)).next(s=>s||this.Mi(e,n))}ki(e,n){if(pg(n))return k.resolve(null);let r=hn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=$h(n,null,"F"),r=hn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=H(...s);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Fi(n,a);return this.$i(n,u,o,l.readTime)?this.ki(e,$h(n,null,"F")):this.Bi(e,u,n,l)}))})))}Oi(e,n,r,i){return pg(n)||i.isEqual(F.min())?this.Mi(e,n):this.Ni.getDocuments(e,r).next(s=>{const o=this.Fi(n,s);return this.$i(n,o,r,i)?this.Mi(e,n):(sg()<=G.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Fh(n)),this.Bi(e,o,n,pR(i,-1)))})}Fi(e,n){let r=new we(k1(e));return n.forEach((i,s)=>{au(e,s)&&(r=r.add(s))}),r}$i(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Mi(e,n){return sg()<=G.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",Fh(n)),this.Ni.getDocumentsMatchingQuery(e,n,jn.min())}Bi(e,n,r,i){return this.Ni.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class bx{constructor(e,n,r,i){this.persistence=e,this.Li=n,this.yt=i,this.qi=new Ee(Q),this.Ui=new Oi(s=>Of(s),Pf),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(r)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Ix(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.qi))}}function Mx(t,e,n,r){return new bx(t,e,n,r)}async function H1(t,e){const n=V(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Qi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=H();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function $x(t,e){const n=V(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let d=k.resolve();return h.forEach(g=>{d=d.next(()=>u.getEntry(a,g)).next(y=>{const v=l.docVersions.get(g);J(v!==null),y.version.compareTo(v)<0&&(c.applyToRemoteDocument(y,l),y.isValidDocument()&&(y.setReadTime(l.commitVersion),u.addEntry(y)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=H();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function q1(t){const e=V(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function Fx(t,e){const n=V(t),r=e.snapshotVersion;let i=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.qi;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(s,c.addedDocuments,h)));let g=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?g=g.withResumeToken(Ke.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):c.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(c.resumeToken,r)),i=i.insert(h,g),function(y,v,x){return y.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(d,g,c)&&a.push(n.Cs.updateTargetData(s,g))});let l=dn(),u=H();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(Ux(s,o,e.documentUpdates).next(c=>{l=c.Wi,u=c.zi})),!r.isEqual(F.min())){const c=n.Cs.getLastRemoteSnapshotVersion(s).next(h=>n.Cs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return k.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.qi=i,s))}function Ux(t,e,n){let r=H(),i=H();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=dn();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(F.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):D("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Wi:o,zi:i}})}function Vx(t,e){const n=V(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function jx(t,e){const n=V(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Cs.getTargetData(r,e).next(s=>s?(i=s,k.resolve(i)):n.Cs.allocateTargetId(r).next(o=>(i=new fr(e,o,0,r.currentSequenceNumber),n.Cs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.qi.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.qi=n.qi.insert(r.targetId,r),n.Ui.set(e,r.targetId)),r})}async function zh(t,e,n){const r=V(t),i=r.qi.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!wo(o))throw o;D("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.qi=r.qi.remove(e),r.Ui.delete(i.target)}function Tg(t,e,n){const r=V(t);let i=F.min(),s=H();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=V(a),h=c.Ui.get(u);return h!==void 0?k.resolve(c.qi.get(h)):c.Cs.getTargetData(l,u)}(r,o,hn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Li.getDocumentsMatchingQuery(o,e,n?i:F.min(),n?s:H())).next(a=>(zx(r,$R(e),a),{documents:a,Hi:s})))}function zx(t,e,n){let r=t.Ki.get(e)||F.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ki.set(e,r)}class _g{constructor(){this.activeTargetIds=b1()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Bx{constructor(){this.Lr=new _g,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,n,r){this.qr[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new _g,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Hx{Ur(e){}shutdown(){}}/**
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
 */class Ig{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){D("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){D("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const qx={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Kx{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
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
 */class Wx extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,r,i,s){const o=this.ho(e,n);D("RestConnection","Sending: ",o,r);const a={};return this.lo(a,i,s),this.fo(e,o,a,r).then(l=>(D("RestConnection","Received: ",l),l),l=>{throw Oh("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",r),l})}_o(e,n,r,i,s,o){return this.ao(e,n,r,i,s)}lo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ri,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}ho(e,n){const r=qx[e];return`${this.oo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,r,i){return new Promise((s,o)=>{const a=new iR;a.setWithCredentials(!0),a.listenOnce(tR.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case dc.NO_ERROR:const u=a.getResponseJson();D("Connection","XHR received:",JSON.stringify(u)),s(u);break;case dc.TIMEOUT:D("Connection",'RPC "'+e+'" timed out'),o(new P(S.DEADLINE_EXCEEDED,"Request time out"));break;case dc.HTTP_ERROR:const c=a.getStatus();if(D("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const d=h==null?void 0:h.error;if(d&&d.status&&d.message){const g=function(y){const v=y.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(v)>=0?v:S.UNKNOWN}(d.status);o(new P(g,d.message))}else o(new P(S.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new P(S.UNAVAILABLE,"Connection failed."));break;default:M()}}finally{D("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,r,15)})}wo(e,n,r){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=ZD(),o=eR(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new rR({})),this.lo(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const l=i.join("");D("Connection","Creating WebChannel: "+l,a);const u=s.createWebChannel(l,a);let c=!1,h=!1;const d=new Kx({Hr:y=>{h?D("Connection","Not sending because WebChannel is closed:",y):(c||(D("Connection","Opening WebChannel transport."),u.open(),c=!0),D("Connection","WebChannel sending:",y),u.send(y))},Jr:()=>u.close()}),g=(y,v,x)=>{y.listen(v,p=>{try{x(p)}catch(f){setTimeout(()=>{throw f},0)}})};return g(u,Yo.EventType.OPEN,()=>{h||D("Connection","WebChannel transport opened.")}),g(u,Yo.EventType.CLOSE,()=>{h||(h=!0,D("Connection","WebChannel transport closed"),d.io())}),g(u,Yo.EventType.ERROR,y=>{h||(h=!0,Oh("Connection","WebChannel transport errored:",y),d.io(new P(S.UNAVAILABLE,"The operation could not be completed")))}),g(u,Yo.EventType.MESSAGE,y=>{var v;if(!h){const x=y.data[0];J(!!x);const p=x,f=p.error||((v=p[0])===null||v===void 0?void 0:v.error);if(f){D("Connection","WebChannel received error:",f);const m=f.status;let w=function(C){const N=de[C];if(N!==void 0)return x1(N)}(m),T=f.message;w===void 0&&(w=S.INTERNAL,T="Unknown error status: "+m+" with message "+f.message),h=!0,d.io(new P(w,T)),u.close()}else D("Connection","WebChannel received:",x),d.ro(x)}}),g(o,nR.STAT_EVENT,y=>{y.stat===rg.PROXY?D("Connection","Detected buffering proxy"):y.stat===rg.NOPROXY&&D("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function pc(){return typeof document<"u"?document:null}/**
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
 */function hu(t){return new rx(t,!0)}class K1{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Hs=e,this.timerId=n,this.mo=r,this.yo=i,this.po=s,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-r);i>0&&D("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class W1{constructor(e,n,r,i,s,o,a,l){this.Hs=e,this.vo=r,this.Vo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new K1(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.qo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===S.RESOURCE_EXHAUSTED?(cn(n.toString()),cn("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.So===n&&this.Go(r,i)},r=>{e(()=>{const i=new P(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Qo(i)})})}Go(e,n){const r=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{r(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{r(()=>this.Qo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return D("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(D("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Gx extends W1{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.yt=s}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=ox(this.yt,e),r=function(i){if(!("targetChange"in i))return F.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?F.min():s.readTime?Vt(s.readTime):F.min()}(e);return this.listener.Wo(n,r)}zo(e){const n={};n.database=jh(this.yt),n.addTarget=function(i,s){let o;const a=s.target;return o=Mh(a)?{documents:ux(i,a)}:{query:cx(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=F1(i,s.resumeToken):s.snapshotVersion.compareTo(F.min())>0&&(o.readTime=ml(i,s.snapshotVersion.toTimestamp())),o}(this.yt,e);const r=dx(this.yt,e);r&&(n.labels=r),this.Bo(n)}Ho(e){const n={};n.database=jh(this.yt),n.removeTarget=e,this.Bo(n)}}class Qx extends W1{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.yt=s,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(J(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=lx(e.writeResults,e.commitTime),r=Vt(e.commitTime);return this.listener.Zo(r,n)}return J(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=jh(this.yt),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>ax(this.yt,r))};this.Bo(n)}}/**
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
 */class Yx extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.yt=i,this.nu=!1}su(){if(this.nu)throw new P(S.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.ao(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new P(S.UNKNOWN,i.toString())})}_o(e,n,r,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection._o(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new P(S.UNKNOWN,s.toString())})}terminate(){this.nu=!0}}class Xx{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(cn(n),this.ou=!1):D("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
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
 */class Jx{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=s,this.mu.Ur(o=>{r.enqueueAndForget(async()=>{Lr(this)&&(D("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=V(a);l._u.add(4),await ko(l),l.gu.set("Unknown"),l._u.delete(4),await du(l)}(this))})}),this.gu=new Xx(r,i)}}async function du(t){if(Lr(t))for(const e of t.wu)await e(!0)}async function ko(t){for(const e of t.wu)await e(!1)}function G1(t,e){const n=V(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),zf(n)?jf(n):Pi(n).ko()&&Vf(n,e))}function Q1(t,e){const n=V(t),r=Pi(n);n.du.delete(e),r.ko()&&Y1(n,e),n.du.size===0&&(r.ko()?r.Fo():Lr(n)&&n.gu.set("Unknown"))}function Vf(t,e){t.yu.Ot(e.targetId),Pi(t).zo(e)}function Y1(t,e){t.yu.Ot(e),Pi(t).Ho(e)}function jf(t){t.yu=new ZR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.du.get(e)||null}),Pi(t).start(),t.gu.uu()}function zf(t){return Lr(t)&&!Pi(t).No()&&t.du.size>0}function Lr(t){return V(t)._u.size===0}function X1(t){t.yu=void 0}async function Zx(t){t.du.forEach((e,n)=>{Vf(t,e)})}async function eO(t,e){X1(t),zf(t)?(t.gu.hu(e),jf(t)):t.gu.set("Unknown")}async function tO(t,e,n){if(t.gu.set("Online"),e instanceof $1&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.du.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.du.delete(o),r.yu.removeTarget(o))}(t,e)}catch(r){D("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await gl(t,r)}else if(e instanceof Sa?t.yu.Kt(e):e instanceof M1?t.yu.Jt(e):t.yu.jt(e),!n.isEqual(F.min()))try{const r=await q1(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.yu.Zt(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.du.get(l);u&&i.du.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=i.du.get(a);if(!l)return;i.du.set(a,l.withResumeToken(Ke.EMPTY_BYTE_STRING,l.snapshotVersion)),Y1(i,a);const u=new fr(l.target,a,1,l.sequenceNumber);Vf(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){D("RemoteStore","Failed to raise snapshot:",r),await gl(t,r)}}async function gl(t,e,n){if(!wo(e))throw e;t._u.add(1),await ko(t),t.gu.set("Offline"),n||(n=()=>q1(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{D("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await du(t)})}function J1(t,e){return e().catch(n=>gl(t,n,e))}async function fu(t){const e=V(t),n=Bn(e);let r=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;nO(e);)try{const i=await Vx(e.localStore,r);if(i===null){e.fu.length===0&&n.Fo();break}r=i.batchId,rO(e,i)}catch(i){await gl(e,i)}Z1(e)&&eE(e)}function nO(t){return Lr(t)&&t.fu.length<10}function rO(t,e){t.fu.push(e);const n=Bn(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function Z1(t){return Lr(t)&&!Bn(t).No()&&t.fu.length>0}function eE(t){Bn(t).start()}async function iO(t){Bn(t).eu()}async function sO(t){const e=Bn(t);for(const n of t.fu)e.Xo(n.mutations)}async function oO(t,e,n){const r=t.fu.shift(),i=Mf.from(r,e,n);await J1(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await fu(t)}async function aO(t,e){e&&Bn(t).Yo&&await async function(n,r){if(i=r.code,GR(i)&&i!==S.ABORTED){const s=n.fu.shift();Bn(n).Mo(),await J1(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await fu(n)}var i}(t,e),Z1(t)&&eE(t)}async function Cg(t,e){const n=V(t);n.asyncQueue.verifyOperationInProgress(),D("RemoteStore","RemoteStore received new credentials");const r=Lr(n);n._u.add(3),await ko(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await du(n)}async function lO(t,e){const n=V(t);e?(n._u.delete(2),await du(n)):e||(n._u.add(2),await ko(n),n.gu.set("Unknown"))}function Pi(t){return t.pu||(t.pu=function(e,n,r){const i=V(e);return i.su(),new Gx(n,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,r)}(t.datastore,t.asyncQueue,{Yr:Zx.bind(null,t),Zr:eO.bind(null,t),Wo:tO.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),zf(t)?jf(t):t.gu.set("Unknown")):(await t.pu.stop(),X1(t))})),t.pu}function Bn(t){return t.Iu||(t.Iu=function(e,n,r){const i=V(e);return i.su(),new Qx(n,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,r)}(t.datastore,t.asyncQueue,{Yr:iO.bind(null,t),Zr:aO.bind(null,t),tu:sO.bind(null,t),Zo:oO.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await fu(t)):(await t.Iu.stop(),t.fu.length>0&&(D("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
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
 */class Bf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new $n,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Bf(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new P(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Hf(t,e){if(cn("AsyncQueue",`${e}: ${t}`),wo(t))return new P(S.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class oi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||O.comparator(n.key,r.key):(n,r)=>O.comparator(n.key,r.key),this.keyedMap=Zi(),this.sortedSet=new Ee(this.comparator)}static emptySet(e){return new oi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof oi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new oi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Ng{constructor(){this.Tu=new Ee(O.comparator)}track(e){const n=e.doc.key,r=this.Tu.get(n);r?e.type!==0&&r.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&r.type!==1?this.Tu=this.Tu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Tu=this.Tu.remove(n):e.type===1&&r.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):M():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ei{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ei(e,n,oi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ou(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class uO{constructor(){this.Au=void 0,this.listeners=[]}}class cO{constructor(){this.queries=new Oi(e=>S1(e),ou),this.onlineState="Unknown",this.Ru=new Set}}async function hO(t,e){const n=V(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new uO),i)try{s.Au=await n.onListen(r)}catch(o){const a=Hf(o,`Initialization of query '${Fh(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.bu(n.onlineState),s.Au&&e.Pu(s.Au)&&qf(n)}async function dO(t,e){const n=V(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function fO(t,e){const n=V(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Pu(i)&&(r=!0);o.Au=i}}r&&qf(n)}function pO(t,e,n){const r=V(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function qf(t){t.Ru.forEach(e=>{e.next()})}class mO{constructor(e,n,r){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=r||{}}Pu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ei(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Nu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=Ei.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
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
 */class tE{constructor(e){this.key=e}}class nE{constructor(e){this.key=e}}class gO{constructor(e,n){this.query=e,this.qu=n,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=H(),this.mutatedKeys=H(),this.Gu=k1(e),this.Qu=new oi(this.Gu)}get ju(){return this.qu}Wu(e,n){const r=n?n.zu:new Ng,i=n?n.Qu:this.Qu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),g=au(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),v=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let x=!1;d&&g?d.data.isEqual(g.data)?y!==v&&(r.track({type:3,doc:g}),x=!0):this.Hu(d,g)||(r.track({type:2,doc:g}),x=!0,(l&&this.Gu(g,l)>0||u&&this.Gu(g,u)<0)&&(a=!0)):!d&&g?(r.track({type:0,doc:g}),x=!0):d&&!g&&(r.track({type:1,doc:d}),x=!0,(l||u)&&(a=!0)),x&&(g?(o=o.add(g),s=v?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Qu:o,zu:r,$i:a,mutatedKeys:s}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const s=e.zu.Eu();s.sort((u,c)=>function(h,d){const g=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M()}};return g(h)-g(d)}(u.type,c.type)||this.Gu(u.doc,c.doc)),this.Ju(r);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,l=a!==this.Uu;return this.Uu=a,s.length!==0||l?{snapshot:new Ei(this.query,e.Qu,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Ng,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.qu=this.qu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.qu=this.qu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=H(),this.Qu.forEach(r=>{this.Zu(r.key)&&(this.Ku=this.Ku.add(r.key))});const n=[];return e.forEach(r=>{this.Ku.has(r)||n.push(new nE(r))}),this.Ku.forEach(r=>{e.has(r)||n.push(new tE(r))}),n}tc(e){this.qu=e.Hi,this.Ku=H();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return Ei.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class yO{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class vO{constructor(e){this.key=e,this.nc=!1}}class wO{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new Oi(a=>S1(a),ou),this.rc=new Map,this.oc=new Set,this.uc=new Ee(O.comparator),this.cc=new Map,this.ac=new $f,this.hc={},this.lc=new Map,this.fc=wi.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function EO(t,e){const n=RO(t);let r,i;const s=n.ic.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.ec();else{const o=await jx(n.localStore,hn(e));n.isPrimaryClient&&G1(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await SO(n,e,r,a==="current",o.resumeToken)}return i}async function SO(t,e,n,r,i){t._c=(h,d,g)=>async function(y,v,x,p){let f=v.view.Wu(x);f.$i&&(f=await Tg(y.localStore,v.query,!1).then(({documents:T})=>v.view.Wu(T,f)));const m=p&&p.targetChanges.get(v.targetId),w=v.view.applyChanges(f,y.isPrimaryClient,m);return Dg(y,v.targetId,w.Xu),w.snapshot}(t,h,d,g);const s=await Tg(t.localStore,e,!0),o=new gO(e,s.Hi),a=o.Wu(s.documents),l=So.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);Dg(t,n,u.Xu);const c=new yO(e,n,o);return t.ic.set(e,c),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),u.snapshot}async function kO(t,e){const n=V(t),r=n.ic.get(e),i=n.rc.get(r.targetId);if(i.length>1)return n.rc.set(r.targetId,i.filter(s=>!ou(s,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await zh(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Q1(n.remoteStore,r.targetId),Bh(n,r.targetId)}).catch(vo)):(Bh(n,r.targetId),await zh(n.localStore,r.targetId,!0))}async function TO(t,e,n){const r=xO(t);try{const i=await function(s,o){const a=V(s),l=ve.now(),u=o.reduce((d,g)=>d.add(g.key),H());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let g=dn(),y=H();return a.Gi.getEntries(d,u).next(v=>{g=v,g.forEach((x,p)=>{p.isValidDocument()||(y=y.add(x))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,g)).next(v=>{c=v;const x=[];for(const p of o){const f=qR(p,c.get(p.key).overlayedDocument);f!=null&&x.push(new Pr(p.key,f,w1(f.value.mapValue),Dt.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,x,o)}).next(v=>{h=v;const x=v.applyToLocalDocumentSet(c,y);return a.documentOverlayCache.saveOverlays(d,v.batchId,x)})}).then(()=>({batchId:h.batchId,changes:P1(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.hc[s.currentUser.toKey()];l||(l=new Ee(Q)),l=l.insert(o,a),s.hc[s.currentUser.toKey()]=l}(r,i.batchId,n),await To(r,i.changes),await fu(r.remoteStore)}catch(i){const s=Hf(i,"Failed to persist write");n.reject(s)}}async function rE(t,e){const n=V(t);try{const r=await Fx(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.cc.get(s);o&&(J(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.nc=!0:i.modifiedDocuments.size>0?J(o.nc):i.removedDocuments.size>0&&(J(o.nc),o.nc=!1))}),await To(n,r,e)}catch(r){await vo(r)}}function Ag(t,e,n){const r=V(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ic.forEach((s,o)=>{const a=o.view.bu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=V(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.bu(o)&&(l=!0)}),l&&qf(a)}(r.eventManager,e),i.length&&r.sc.Wo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function _O(t,e,n){const r=V(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.cc.get(e),s=i&&i.key;if(s){let o=new Ee(O.comparator);o=o.insert(s,Me.newNoDocument(s,F.min()));const a=H().add(s),l=new cu(F.min(),new Map,new we(Q),o,a);await rE(r,l),r.uc=r.uc.remove(s),r.cc.delete(e),Kf(r)}else await zh(r.localStore,e,!1).then(()=>Bh(r,e,n)).catch(vo)}async function IO(t,e){const n=V(t),r=e.batch.batchId;try{const i=await $x(n.localStore,e);sE(n,r,null),iE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await To(n,i)}catch(i){await vo(i)}}async function CO(t,e,n){const r=V(t);try{const i=await function(s,o){const a=V(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(J(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);sE(r,e,n),iE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await To(r,i)}catch(i){await vo(i)}}function iE(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function sE(t,e,n){const r=V(t);let i=r.hc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.hc[r.currentUser.toKey()]=i}}function Bh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.rc.get(e))t.ic.delete(r),n&&t.sc.wc(r,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(r=>{t.ac.containsKey(r)||oE(t,r)})}function oE(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(Q1(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),Kf(t))}function Dg(t,e,n){for(const r of n)r instanceof tE?(t.ac.addReference(r.key,e),NO(t,r)):r instanceof nE?(D("SyncEngine","Document no longer in limbo: "+r.key),t.ac.removeReference(r.key,e),t.ac.containsKey(r.key)||oE(t,r.key)):M()}function NO(t,e){const n=e.key,r=n.path.canonicalString();t.uc.get(n)||t.oc.has(r)||(D("SyncEngine","New document in limbo: "+n),t.oc.add(r),Kf(t))}function Kf(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new O(ie.fromString(e)),r=t.fc.next();t.cc.set(r,new vO(n)),t.uc=t.uc.insert(n,r),G1(t.remoteStore,new fr(hn(E1(n.path)),r,2,Rf.at))}}async function To(t,e,n){const r=V(t),i=[],s=[],o=[];r.ic.isEmpty()||(r.ic.forEach((a,l)=>{o.push(r._c(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=Uf.Ci(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.sc.Wo(i),await async function(a,l){const u=V(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>k.forEach(l,h=>k.forEach(h.Si,d=>u.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>k.forEach(h.Di,d=>u.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!wo(c))throw c;D("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const d=u.qi.get(h),g=d.snapshotVersion,y=d.withLastLimboFreeSnapshotVersion(g);u.qi=u.qi.insert(h,y)}}}(r.localStore,s))}async function AO(t,e){const n=V(t);if(!n.currentUser.isEqual(e)){D("SyncEngine","User change. New user:",e.toKey());const r=await H1(n.localStore,e);n.currentUser=e,function(i,s){i.lc.forEach(o=>{o.forEach(a=>{a.reject(new P(S.CANCELLED,s))})}),i.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await To(n,r.ji)}}function DO(t,e){const n=V(t),r=n.cc.get(e);if(r&&r.nc)return H().add(r.key);{let i=H();const s=n.rc.get(e);if(!s)return i;for(const o of s){const a=n.ic.get(o);i=i.unionWith(a.view.ju)}return i}}function RO(t){const e=V(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=rE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=DO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=_O.bind(null,e),e.sc.Wo=fO.bind(null,e.eventManager),e.sc.wc=pO.bind(null,e.eventManager),e}function xO(t){const e=V(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=IO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=CO.bind(null,e),e}class OO{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=hu(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return Mx(this.persistence,new Lx,e.initialUser,this.yt)}yc(e){return new Ox(Ff.Bs,this.yt)}gc(e){return new Bx}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class PO{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ag(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=AO.bind(null,this.syncEngine),await lO(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new cO}createDatastore(e){const n=hu(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new Wx(i));var i;return function(s,o,a,l){return new Yx(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>Ag(this.syncEngine,a,0),o=Ig.C()?new Ig:new Hx,new Jx(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new wO(r,i,s,o,a,l);return u&&(c.dc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=V(e);D("RemoteStore","RemoteStore shutting down."),n._u.add(5),await ko(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
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
 */function aE(t,e,n){if(!n)throw new P(S.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function LO(t,e,n,r){if(e===!0&&r===!0)throw new P(S.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Rg(t){if(!O.isDocumentKey(t))throw new P(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function xg(t){if(O.isDocumentKey(t))throw new P(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Wf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":M()}function Nr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new P(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Wf(t);throw new P(S.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */const Og=new Map;class Pg{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new P(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new P(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,LO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class pu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Pg({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new P(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new P(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Pg(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new sR;switch(n.type){case"gapi":const r=n.client;return new uR(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new P(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Og.get(e);n&&(D("ComponentProvider","Removing Datastore"),Og.delete(e),n.terminate())}(this),Promise.resolve()}}function bO(t,e,n,r={}){var i;const s=(t=Nr(t,pu))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&Oh("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=Le.MOCK_USER;else{o=cT(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new P(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Le(l)}t._authCredentials=new oR(new l1(o,a))}}/**
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
 */class gt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Fn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new gt(this.firestore,e,this._key)}}class mu{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new mu(this.firestore,e,this._query)}}class Fn extends mu{constructor(e,n,r){super(e,n,E1(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new gt(this.firestore,null,new O(e))}withConverter(e){return new Fn(this.firestore,e,this._path)}}function lE(t,e,...n){if(t=qe(t),aE("collection","path",e),t instanceof pu){const r=ie.fromString(e,...n);return xg(r),new Fn(t,null,r)}{if(!(t instanceof gt||t instanceof Fn))throw new P(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ie.fromString(e,...n));return xg(r),new Fn(t.firestore,null,r)}}function Gf(t,e,...n){if(t=qe(t),arguments.length===1&&(e=u1.R()),aE("doc","path",e),t instanceof pu){const r=ie.fromString(e,...n);return Rg(r),new gt(t,null,new O(r))}{if(!(t instanceof gt||t instanceof Fn))throw new P(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ie.fromString(e,...n));return Rg(r),new gt(t.firestore,t instanceof Fn?t.converter:null,new O(r))}}/**
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
 */class MO{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):cn("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class $O{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Le.UNAUTHENTICATED,this.clientId=u1.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{D("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(D("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new P(S.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new $n;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Hf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function FO(t,e){t.asyncQueue.verifyOperationInProgress(),D("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await H1(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function UO(t,e){t.asyncQueue.verifyOperationInProgress();const n=await VO(t);D("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>Cg(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>Cg(e.remoteStore,s)),t.onlineComponents=e}async function VO(t){return t.offlineComponents||(D("FirestoreClient","Using default OfflineComponentProvider"),await FO(t,new OO)),t.offlineComponents}async function uE(t){return t.onlineComponents||(D("FirestoreClient","Using default OnlineComponentProvider"),await UO(t,new PO)),t.onlineComponents}function jO(t){return uE(t).then(e=>e.syncEngine)}async function zO(t){const e=await uE(t),n=e.eventManager;return n.onListen=EO.bind(null,e.syncEngine),n.onUnlisten=kO.bind(null,e.syncEngine),n}function BO(t,e,n={}){const r=new $n;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new MO({next:h=>{s.enqueueAndForget(()=>dO(i,c)),h.fromCache&&a.source==="server"?l.reject(new P(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new mO(o,u,{includeMetadataChanges:!0,Nu:!0});return hO(i,c)}(await zO(t),t.asyncQueue,e,n,r)),r.promise}class HO{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new K1(this,"async_queue_retry"),this.Wc=()=>{const n=pc();n&&D("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=pc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const n=pc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const n=new $n;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!wo(e))throw e;D("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(r=>{this.Kc=r,this.Gc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw cn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Gc=!1,r))));return this.Bc=n,n}enqueueAfterDelay(e,n,r){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const i=Bf.createAndSchedule(this,e,n,r,s=>this.Yc(s));return this.Uc.push(i),i}zc(){this.Kc&&M()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}class _o extends pu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new HO,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||hE(this),this._firestoreClient.terminate()}}function qO(t,e){const n=typeof t=="object"?t:jd(),r=typeof t=="string"?t:e||"(default)",i=Ii(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=aT("firestore");s&&bO(i,...s)}return i}function cE(t){return t._firestoreClient||hE(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function hE(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new wR(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new $O(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
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
 */class Si{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Si(Ke.fromBase64String(e))}catch(n){throw new P(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Si(Ke.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Qf{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new P(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new $e(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class dE{constructor(e){this._methodName=e}}/**
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
 */class Yf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new P(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new P(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Q(this._lat,e._lat)||Q(this._long,e._long)}}/**
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
 */const KO=/^__.*__$/;class WO{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Pr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Eo(e,this.data,n,this.fieldTransforms)}}function fE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M()}}class Xf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.yt=r,this.ignoreUndefinedProperties=i,s===void 0&&this.na(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new Xf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:r,oa:!1});return i.ua(e),i}ca(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:r,oa:!1});return i.na(),i}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return yl(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(fE(this.sa)&&KO.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class GO{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.yt=r||hu(e)}da(e,n,r,i=!1){return new Xf({sa:e,methodName:n,fa:r,path:$e.emptyPath(),oa:!1,la:i},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function pE(t){const e=t._freezeSettings(),n=hu(t._databaseId);return new GO(t._databaseId,!!e.ignoreUndefinedProperties,n)}function mE(t,e,n,r,i,s={}){const o=t.da(s.merge||s.mergeFields?2:0,e,n,i);wE("Data must be an object, but it was:",o,r);const a=yE(r,o);let l,u;if(s.merge)l=new Ct(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=QO(e,h,n);if(!o.contains(d))throw new P(S.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);XO(c,d)||c.push(d)}l=new Ct(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new WO(new dt(a),l,u)}function gE(t,e){if(vE(t=qe(t)))return wE("Unsupported field value:",e,t),yE(t,e);if(t instanceof dE)return function(n,r){if(!fE(r.sa))throw r.ha(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ha(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=gE(o,r.aa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=qe(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return UR(r.yt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=ve.fromDate(n);return{timestampValue:ml(r.yt,i)}}if(n instanceof ve){const i=new ve(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ml(r.yt,i)}}if(n instanceof Yf)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Si)return{bytesValue:F1(r.yt,n._byteString)};if(n instanceof gt){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.ha(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:bf(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ha(`Unsupported field value: ${Wf(n)}`)}(t,e)}function yE(t,e){const n={};return c1(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):xi(t,(r,i)=>{const s=gE(i,e.ra(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function vE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ve||t instanceof Yf||t instanceof Si||t instanceof gt||t instanceof dE)}function wE(t,e,n){if(!vE(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Wf(n);throw r==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+r)}}function QO(t,e,n){if((e=qe(e))instanceof Qf)return e._internalPath;if(typeof e=="string")return EE(t,e);throw yl("Field path arguments must be of type string or ",t,!1,void 0,n)}const YO=new RegExp("[~\\*/\\[\\]]");function EE(t,e,n){if(e.search(YO)>=0)throw yl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Qf(...e.split("."))._internalPath}catch{throw yl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function yl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new P(S.INVALID_ARGUMENT,a+t+l)}function XO(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class SE{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new gt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new JO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(kE("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class JO extends SE{data(){return super.data()}}function kE(t,e){return typeof e=="string"?EE(t,e):e instanceof Qf?e._internalPath:e._delegate._internalPath}/**
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
 */function ZO(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new P(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class eP{convertValue(e,n="none"){switch(Cr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return fe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(gi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw M()}}convertObject(e,n){const r={};return xi(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Yf(fe(e.latitude),fe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=d1(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Hs(e));default:return null}}convertTimestamp(e){const n=zn(e);return new ve(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ie.fromString(e);J(B1(r));const i=new Bs(r.get(1),r.get(3)),s=new O(r.popFirst(5));return i.isEqual(n)||cn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function TE(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class Zo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class tP extends SE{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ka(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(kE("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class ka extends tP{data(e={}){return super.data(e)}}class nP{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Zo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ka(this._firestore,this._userDataWriter,r.key,r,new Zo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new P(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new ka(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Zo(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new ka(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Zo(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:rP(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function rP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M()}}class iP extends eP{constructor(e){super(),this.firestore=e}convertBytes(e){return new Si(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new gt(this.firestore,null,n)}}function sP(t){t=Nr(t,mu);const e=Nr(t.firestore,_o),n=cE(e),r=new iP(e);return ZO(t._query),BO(n,t._query).then(i=>new nP(e,r,t,i))}function oP(t,e,n){t=Nr(t,gt);const r=Nr(t.firestore,_o),i=TE(t.converter,e,n);return Jf(r,[mE(pE(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Dt.none())])}function aP(t){return Jf(Nr(t.firestore,_o),[new Lf(t._key,Dt.none())])}function lP(t,e){const n=Nr(t.firestore,_o),r=Gf(t),i=TE(t.converter,e);return Jf(n,[mE(pE(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Dt.exists(!1))]).then(()=>r)}function Jf(t,e){return function(n,r){const i=new $n;return n.asyncQueue.enqueueAndForget(async()=>TO(await jO(n),r,i)),i.promise}(cE(t),e)}(function(t,e=!0){(function(n){Ri=n})(eo),jt(new xt("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new _o(new aR(n.getProvider("auth-internal")),new hR(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new P(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Bs(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),mt(ig,"3.8.3",t),mt(ig,"3.8.3","esm2017")})();const uP={apiKey:"AIzaSyDVO4lqmtyhH1kRTcEq_NzwjV2_HN4blFY",authDomain:"fir-shoping-3ab6a.firebaseapp.com",projectId:"fir-shoping-3ab6a",storageBucket:"fir-shoping-3ab6a.appspot.com",messagingSenderId:"696803573496",appId:"1:696803573496:web:4529467cf7af66fe89450d"},_E=Xv(uP),vl=ZA(_E),IE=XI();JI(IE,{vapidKey:"BFwOoOHxsMUHgVl3SjgRb-bUI0GqWAt7Ul0l56ivAM9UOAI30pDQlCAV4npSZt2F4s6C9WNSmCT1ngmARCNvv2k"}).then(t=>{t?cP():console.log("No registration token available. Request permission to generate one.")}).catch(t=>{console.log("An error occurred while retrieving token. ",t)});const cP=t=>{localStorage.getItem("tokenSentToServer")||(console.log("Ha almacenado el token"),localStorage.setItem("tokenSentToServer","1"))},gu=qO(_E),hP=()=>{const{setRoute:t,user:e,setUser:n}=U.useContext(Io);return Fe("header",{className:"h-20 w-full bg-gray-100 shadow-lg flex items-center justify-between px-8 fixed top-0",children:[Fe("div",{className:"flex items-center gap-2 cursor-pointer",onClick:()=>t("home"),children:[L(eD,{className:"text-2xl text-pink-600"}),L("span",{className:"text-2xl text-pink-600",children:"FireShopping"})]}),L("button",{className:"bg-sky-500 text-white py-1 px-3 rounded-full hover:bg-sky-700 transition",onClick:()=>t("shopping"),children:"Shopping"}),e?L("button",{onClick:()=>{UN(vl).then(()=>{t("login"),n(null),Ue("Usuario ha hecho log out")}).catch(i=>{console.log(i)})},children:"Log out"}):L("button",{className:"bg-sky-500 text-white py-1 px-3 rounded-full hover:bg-sky-700 transition",onClick:()=>t("login"),children:"Logifn"}),L("button",{className:"bg-sky-500 text-white py-1 px-3 rounded-full hover:bg-sky-700 transition",onClick:()=>t("register"),children:"Registrate"})]})},dP=async t=>{try{await lP(lE(gu,"tasks"),t)}catch(e){console.error("Error adding document: ",e)}},fP=async()=>(await sP(lE(gu,"tasks"))).docs.map(n=>({...n.data(),id:n.id})),pP=async t=>{await oP(Gf(gu,"tasks",t.id),{title:t.title,description:t.description})},mP=async t=>{await aP(Gf(gu,"tasks",t))},gP=()=>{const[t,e]=U.useState({title:"",description:""}),[n,r]=U.useState([]),[i,s]=U.useState("add");async function o(){await dP(t),a()}const a=async()=>{fP().then(h=>{r([...h])})};function l(h){mP(h),a()}async function u(){await pP(t),e({title:"",description:""}),a(),s("add")}function c(h){s("update");const d=n.find(g=>h===g.id);e({...d})}return U.useEffect(()=>{a()},[]),Fe("div",{children:[L("h1",{className:"text-sky-700 font-semibold text-lg",children:"Estás en la taslist"}),Fe("div",{className:"flex flex-col gap-4",children:[L("h2",{children:"Introduce una nueva tarea"}),L("input",{className:"border shadow outline-none focus:ring ring-sky-200 rounded px-2 w-1/5",type:"text",value:t.title,name:"title",placeholder:"Titulo",onChange:h=>e({...t,[h.target.name]:h.target.value})}),L("textarea",{className:"border shadow outline-none focus:ring ring-sky-200 rounded px-2 w-1/5",rows:3,type:"text",value:t.description,name:"description",placeholder:"Descripcion",onChange:h=>e({...t,[h.target.name]:h.target.value})}),L("button",{className:"bg-sky-400 text-white rounded shadow py-1 w-1/5 hover:bg-sky-300 transition",onClick:()=>i==="update"?u():o(),children:i==="add"?"Añadir":"Actualizar"})]}),L("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 mt-4",children:n.map((h,d)=>Fe("div",{className:"rounded-lg border border-sky-300 p-4 flex flex-col gap-2 py-2",children:[L("h1",{className:"font-semibold",children:h.title}),L("div",{className:"border-t border-sky-300"}),L("p",{children:h.description}),Fe("div",{className:"flex flex-row justify-between",children:[L("button",{className:"bg-sky-400 text-white py-1 px-2 rounded",onClick:()=>{c(h.id)},children:"Editar"}),L("button",{className:"bg-red-600 text-white py-1 px-2 rounded",onClick:()=>{confirm("¿Seguro que quieres eliminar esta tarea?")&&l(h.id)},children:"Eliminar"})]})]},d))})]})},yP=()=>L("div",{children:L("div",{className:"home",children:"Bienvenido a firebase shopping!"})}),vP=new It,wP=()=>{const[t,e]=U.useState(""),[n,r]=U.useState(""),{setUser:i}=U.useContext(Io);return Fe("div",{className:"flex flex-col gap-4 items-center",children:[L("h1",{className:"text-sky-700 font-semibold text-center",children:"Inicia sesion"}),Fe("div",{className:"flex flex-col",children:[Fe("form",{onSubmit:a=>{a.preventDefault(),MN(vl,t,n).then(l=>{const u=l.user;Ue("Inicio de sesión es valido"),i(u)}).catch(l=>{l.code,l.message})},className:"flex flex-col gap-2 max-w-sm",children:[L("input",{className:"border border-gray-500 rounded py-1 px-2 outline-none",type:"email",value:t,onChange:a=>e(a.target.value)}),L("input",{className:"border border-gray-500 rounded py-1 px-2 outline-none",type:"password",value:n,onChange:a=>r(a.target.value)}),L("button",{className:"bg-sky-400 py-1 text-white rounded shadow",children:"Log in"})]}),L("button",{onClick:()=>{uA(vl,vP).then(a=>{const u=It.credentialFromResult(a).accessToken,c=a.user;console.log("token",u),console.log("user",c),i(c)}).catch(a=>{a.code,a.message,a.customData.email,It.credentialFromError(a)})},children:"...o haz login con Google"})]})]})},EP=()=>{const[t,e]=U.useState(""),[n,r]=U.useState(""),{setRoute:i,setUser:s}=U.useContext(Io),o=()=>{bN(vl,t,n).then(l=>{const u=l.user;console.log(u),Ue(`Usuario ${t} registrado correctamente!`),s(u),i("home")}).catch(l=>{l.code,l.message})};return Fe("div",{className:"flex flex-col gap-4 items-center",children:[L("h1",{className:"text-sky-700 font-semibold text-center",children:"Registrate go!"}),Fe("form",{onSubmit:l=>{l.preventDefault(),o()},className:"flex flex-col gap-2 max-w-sm",children:[L("input",{className:"border border-gray-500 rounded py-1 px-2 outline-none",type:"email",value:t,onChange:l=>e(l.target.value)}),L("input",{className:"border border-gray-500 rounded py-1 px-2 outline-none",type:"password",value:n,onChange:l=>r(l.target.value)}),L("button",{className:"bg-sky-400 py-1 text-white rounded shadow",children:"Registrate"})]})]})},SP=()=>L("div",{}),Io=U.createContext(null);ZI(IE,t=>{console.log("Nueva notificación en directo",t),Ue.custom(e=>Fe("div",{className:"bg-sky-300 p-4 rounded-lg shadow-lg",children:[L("h1",{className:"text-lg text-sky-700 font-semibold",children:t.notification.title}),L("p",{className:"text-sm text-sky-500",children:t.notification.body})]}))});function kP(){const[t,e]=U.useState("home"),[n,r]=U.useState(null);return L(Io.Provider,{value:{route:t,setRoute:e,user:n,setUser:r},children:Fe("div",{className:"h-screen",children:[L(BC,{}),L(hP,{}),Fe("main",{className:"px-6 my-20",children:[t==="home"&&L(yP,{}),t==="login"&&L(wP,{}),t==="register"&&L(EP,{}),n&&Fe("p",{children:["Usuario logeado: ",n.email]}),t==="shopping"&&L(SP,{}),t==="tasklist"&&L(gP,{})]}),L(QC,{})]})})}mc.createRoot(document.getElementById("root")).render(L(Cn.StrictMode,{children:L(kP,{})}));
