!function(t){"use strict";
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */function e(t,e,i,s){var n,r=arguments.length,o=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(o=(r<3?n(o):r>3?n(e,i,o):n(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o
/**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */}const i=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),n=new Map;class r{constructor(t,e){if(this._$cssResult$=!0,e!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=n.get(this.cssText);return i&&void 0===t&&(n.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const o=t=>new r("string"==typeof t?t:t+"",s),l=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return o(e)})(t):t
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */;var a;const h=window.reactiveElementPolyfillSupport,c={toAttribute(t,e){switch(e){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},d=(t,e)=>e!==t&&(e==e||t==t),u={attribute:!0,type:String,converter:c,reflect:!1,hasChanged:d};class p extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Eh(i,e);void 0!==s&&(this._$Eu.set(s,i),t.push(s))})),t}static createProperty(t,e=u){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const n=this[t];this[e]=s,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||u}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(l(t))}else void 0!==t&&e.push(l(t));return e}static _$Eh(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ev=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Ep(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$Em)&&void 0!==e?e:this._$Em=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$Em)||void 0===e||e.splice(this._$Em.indexOf(t)>>>0,1)}_$Ep(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{i?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const i=document.createElement("style"),s=window.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=e.cssText,t.appendChild(i)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$Eg(t,e,i=u){var s,n;const r=this.constructor._$Eh(t,i);if(void 0!==r&&!0===i.reflect){const o=(null!==(n=null===(s=i.converter)||void 0===s?void 0:s.toAttribute)&&void 0!==n?n:c.toAttribute)(e,i.type);this._$Ei=t,null==o?this.removeAttribute(r):this.setAttribute(r,o),this._$Ei=null}}_$AK(t,e){var i,s,n;const r=this.constructor,o=r._$Eu.get(t);if(void 0!==o&&this._$Ei!==o){const t=r.getPropertyOptions(o),l=t.converter,a=null!==(n=null!==(s=null===(i=l)||void 0===i?void 0:i.fromAttribute)&&void 0!==s?s:"function"==typeof l?l:null)&&void 0!==n?n:c.fromAttribute;this._$Ei=o,this[o]=a(e,t.type),this._$Ei=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||d)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Ei!==t&&(void 0===this._$ES&&(this._$ES=new Map),this._$ES.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$Ev=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ev}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Em)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ev}shouldUpdate(t){return!0}update(t){void 0!==this._$ES&&(this._$ES.forEach(((t,e)=>this._$Eg(e,this[e],t))),this._$ES=void 0),this._$EU()}updated(t){}firstUpdated(t){}}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
var v;p.finalized=!0,p.elementProperties=new Map,p.elementStyles=[],p.shadowRootOptions={mode:"open"},null==h||h({ReactiveElement:p}),(null!==(a=globalThis.reactiveElementVersions)&&void 0!==a?a:globalThis.reactiveElementVersions=[]).push("1.0.1");const $=globalThis.trustedTypes,f=$?$.createPolicy("lit-html",{createHTML:t=>t}):void 0,m=`lit$${(Math.random()+"").slice(9)}$`,_="?"+m,g=`<${_}>`,y=document,A=(t="")=>y.createComment(t),b=t=>null===t||"object"!=typeof t&&"function"!=typeof t,S=Array.isArray,E=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,w=/-->/g,C=/>/g,x=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,P=/'/g,U=/"/g,O=/^(?:script|style|textarea)$/i,T=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),M=Symbol.for("lit-noChange"),H=Symbol.for("lit-nothing"),k=new WeakMap,N=(t,e,i)=>{var s,n;const r=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let o=r._$litPart$;if(void 0===o){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;r._$litPart$=o=new B(e.insertBefore(A(),t),t,void 0,null!=i?i:{})}return o._$AI(t),o},z=y.createTreeWalker(y,129,null,!1),R=(t,e)=>{const i=t.length-1,s=[];let n,r=2===e?"<svg>":"",o=E;for(let e=0;e<i;e++){const i=t[e];let l,a,h=-1,c=0;for(;c<i.length&&(o.lastIndex=c,a=o.exec(i),null!==a);)c=o.lastIndex,o===E?"!--"===a[1]?o=w:void 0!==a[1]?o=C:void 0!==a[2]?(O.test(a[2])&&(n=RegExp("</"+a[2],"g")),o=x):void 0!==a[3]&&(o=x):o===x?">"===a[0]?(o=null!=n?n:E,h=-1):void 0===a[1]?h=-2:(h=o.lastIndex-a[2].length,l=a[1],o=void 0===a[3]?x:'"'===a[3]?U:P):o===U||o===P?o=x:o===w||o===C?o=E:(o=x,n=void 0);const d=o===x&&t[e+1].startsWith("/>")?" ":"";r+=o===E?i+g:h>=0?(s.push(l),i.slice(0,h)+"$lit$"+i.slice(h)+m+d):i+m+(-2===h?(s.push(void 0),e):d)}const l=r+(t[i]||"<?>")+(2===e?"</svg>":"");return[void 0!==f?f.createHTML(l):l,s]};class I{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,r=0;const o=t.length-1,l=this.parts,[a,h]=R(t,e);if(this.el=I.createElement(a,i),z.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=z.nextNode())&&l.length<o;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(m)){const i=h[r++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split(m),e=/([.?@])?(.*)/.exec(i);l.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?Z:"?"===e[1]?V:"@"===e[1]?W:D})}else l.push({type:6,index:n})}for(const e of t)s.removeAttribute(e)}if(O.test(s.tagName)){const t=s.textContent.split(m),e=t.length-1;if(e>0){s.textContent=$?$.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],A()),z.nextNode(),l.push({type:2,index:++n});s.append(t[e],A())}}}else if(8===s.nodeType)if(s.data===_)l.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(m,t+1));)l.push({type:7,index:n}),t+=m.length-1}n++}}static createElement(t,e){const i=y.createElement("template");return i.innerHTML=t,i}}function L(t,e,i=t,s){var n,r,o,l;if(e===M)return e;let a=void 0!==s?null===(n=i._$Cl)||void 0===n?void 0:n[s]:i._$Cu;const h=b(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==h&&(null===(r=null==a?void 0:a._$AO)||void 0===r||r.call(a,!1),void 0===h?a=void 0:(a=new h(t),a._$AT(t,i,s)),void 0!==s?(null!==(o=(l=i)._$Cl)&&void 0!==o?o:l._$Cl=[])[s]=a:i._$Cu=a),void 0!==a&&(e=L(t,a._$AS(t,e.values),a,s)),e}class j{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:s}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:y).importNode(i,!0);z.currentNode=n;let r=z.nextNode(),o=0,l=0,a=s[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new B(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new q(r,this,t)),this.v.push(e),a=s[++l]}o!==(null==a?void 0:a.index)&&(r=z.nextNode(),o++)}return n}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class B{constructor(t,e,i,s){var n;this.type=2,this._$AH=H,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cg=null===(n=null==s?void 0:s.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=L(this,t,e),b(t)?t===H||null==t||""===t?(this._$AH!==H&&this._$AR(),this._$AH=H):t!==this._$AH&&t!==M&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):(t=>{var e;return S(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.M(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==H&&b(this._$AH)?this._$AA.nextSibling.data=t:this.S(y.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:s}=t,n="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=I.createElement(s.h,this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.m(i);else{const t=new j(n,this),e=t.p(this.options);t.m(i),this.S(e),this._$AH=t}}_$AC(t){let e=k.get(t.strings);return void 0===e&&k.set(t.strings,e=new I(t)),e}M(t){S(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new B(this.A(A()),this.A(A()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class D{constructor(t,e,i,s,n){this.type=1,this._$AH=H,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=H}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const n=this.strings;let r=!1;if(void 0===n)t=L(this,t,e,0),r=!b(t)||t!==this._$AH&&t!==M,r&&(this._$AH=t);else{const s=t;let o,l;for(t=n[0],o=0;o<n.length-1;o++)l=L(this,s[i+o],e,o),l===M&&(l=this._$AH[o]),r||(r=!b(l)||l!==this._$AH[o]),l===H?t=H:t!==H&&(t+=(null!=l?l:"")+n[o+1]),this._$AH[o]=l}r&&!s&&this.k(t)}k(t){t===H?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class Z extends D{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===H?void 0:t}}class V extends D{constructor(){super(...arguments),this.type=4}k(t){t&&t!==H?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class W extends D{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=L(this,t,e,0))&&void 0!==i?i:H)===M)return;const s=this._$AH,n=t===H&&s!==H||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==H&&(s===H||n);n&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class q{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){L(this,t)}}const K=window.litHtmlPolyfillSupport;
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
var J,F;null==K||K(I,B),(null!==(v=globalThis.litHtmlVersions)&&void 0!==v?v:globalThis.litHtmlVersions=[]).push("2.0.1");class G extends p{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=N(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return M}}G.finalized=!0,G._$litElement$=!0,null===(J=globalThis.litElementHydrateSupport)||void 0===J||J.call(globalThis,{LitElement:G});const Q=globalThis.litElementPolyfillSupport;null==Q||Q({LitElement:G}),(null!==(F=globalThis.litElementVersions)&&void 0!==F?F:globalThis.litElementVersions=[]).push("3.0.1");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const X=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */function Y(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):X(t,e)}const tt="",et="material",it="material-outlined",st="material-round",nt="material-sharp",rt="material-two-tone",ot="gravatar",lt="libravatar";t.ZincIcon=class extends G{constructor(){super(...arguments),this.gravatarOptions="",this.src="",this.size=24,this.library=tt,this.round=!1}connectedCallback(){if(super.connectedCallback(),N(T`
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Round|Material+Icons+Sharp|Material+Icons+Two+Tone"
            rel="stylesheet">`,document.head),this.src.includes("@")){if(""==this.library){const t=this.src.split("@");t[1].includes(".")?this.library=ot:(this.library=t[1],this.src=t[0])}this.library!=ot&&this.library!=lt||(this.ravatarOptions(),this.src=function(t){function e(t,e){return t<<e|t>>>32-e}function i(t,e){var i,s,n,r,o;return n=2147483648&t,r=2147483648&e,o=(1073741823&t)+(1073741823&e),(i=1073741824&t)&(s=1073741824&e)?2147483648^o^n^r:i|s?1073741824&o?3221225472^o^n^r:1073741824^o^n^r:o^n^r}function s(t,s,n,r,o,l,a){return t=i(t,i(i(function(t,e,i){return t&e|~t&i}(s,n,r),o),a)),i(e(t,l),s)}function n(t,s,n,r,o,l,a){return t=i(t,i(i(function(t,e,i){return t&i|e&~i}(s,n,r),o),a)),i(e(t,l),s)}function r(t,s,n,r,o,l,a){return t=i(t,i(i(function(t,e,i){return t^e^i}(s,n,r),o),a)),i(e(t,l),s)}function o(t,s,n,r,o,l,a){return t=i(t,i(i(function(t,e,i){return e^(t|~i)}(s,n,r),o),a)),i(e(t,l),s)}function l(t){var e,i="",s="";for(e=0;e<=3;e++)i+=(s="0"+(t>>>8*e&255).toString(16)).substr(s.length-2,2);return i}var a,h,c,d,u,p,v,$,f,m=Array();for(t=function(t){t=t.replace(/\r\n/g,"\n");for(var e="",i=0;i<t.length;i++){var s=t.charCodeAt(i);s<128?e+=String.fromCharCode(s):s>127&&s<2048?(e+=String.fromCharCode(s>>6|192),e+=String.fromCharCode(63&s|128)):(e+=String.fromCharCode(s>>12|224),e+=String.fromCharCode(s>>6&63|128),e+=String.fromCharCode(63&s|128))}return e}(t),m=function(t){for(var e,i=t.length,s=i+8,n=16*((s-s%64)/64+1),r=Array(n-1),o=0,l=0;l<i;)o=l%4*8,r[e=(l-l%4)/4]=r[e]|t.charCodeAt(l)<<o,l++;return o=l%4*8,r[e=(l-l%4)/4]=r[e]|128<<o,r[n-2]=i<<3,r[n-1]=i>>>29,r}(t),p=1732584193,v=4023233417,$=2562383102,f=271733878,a=0;a<m.length;a+=16)h=p,c=v,d=$,u=f,p=s(p,v,$,f,m[a+0],7,3614090360),f=s(f,p,v,$,m[a+1],12,3905402710),$=s($,f,p,v,m[a+2],17,606105819),v=s(v,$,f,p,m[a+3],22,3250441966),p=s(p,v,$,f,m[a+4],7,4118548399),f=s(f,p,v,$,m[a+5],12,1200080426),$=s($,f,p,v,m[a+6],17,2821735955),v=s(v,$,f,p,m[a+7],22,4249261313),p=s(p,v,$,f,m[a+8],7,1770035416),f=s(f,p,v,$,m[a+9],12,2336552879),$=s($,f,p,v,m[a+10],17,4294925233),v=s(v,$,f,p,m[a+11],22,2304563134),p=s(p,v,$,f,m[a+12],7,1804603682),f=s(f,p,v,$,m[a+13],12,4254626195),$=s($,f,p,v,m[a+14],17,2792965006),p=n(p,v=s(v,$,f,p,m[a+15],22,1236535329),$,f,m[a+1],5,4129170786),f=n(f,p,v,$,m[a+6],9,3225465664),$=n($,f,p,v,m[a+11],14,643717713),v=n(v,$,f,p,m[a+0],20,3921069994),p=n(p,v,$,f,m[a+5],5,3593408605),f=n(f,p,v,$,m[a+10],9,38016083),$=n($,f,p,v,m[a+15],14,3634488961),v=n(v,$,f,p,m[a+4],20,3889429448),p=n(p,v,$,f,m[a+9],5,568446438),f=n(f,p,v,$,m[a+14],9,3275163606),$=n($,f,p,v,m[a+3],14,4107603335),v=n(v,$,f,p,m[a+8],20,1163531501),p=n(p,v,$,f,m[a+13],5,2850285829),f=n(f,p,v,$,m[a+2],9,4243563512),$=n($,f,p,v,m[a+7],14,1735328473),p=r(p,v=n(v,$,f,p,m[a+12],20,2368359562),$,f,m[a+5],4,4294588738),f=r(f,p,v,$,m[a+8],11,2272392833),$=r($,f,p,v,m[a+11],16,1839030562),v=r(v,$,f,p,m[a+14],23,4259657740),p=r(p,v,$,f,m[a+1],4,2763975236),f=r(f,p,v,$,m[a+4],11,1272893353),$=r($,f,p,v,m[a+7],16,4139469664),v=r(v,$,f,p,m[a+10],23,3200236656),p=r(p,v,$,f,m[a+13],4,681279174),f=r(f,p,v,$,m[a+0],11,3936430074),$=r($,f,p,v,m[a+3],16,3572445317),v=r(v,$,f,p,m[a+6],23,76029189),p=r(p,v,$,f,m[a+9],4,3654602809),f=r(f,p,v,$,m[a+12],11,3873151461),$=r($,f,p,v,m[a+15],16,530742520),p=o(p,v=r(v,$,f,p,m[a+2],23,3299628645),$,f,m[a+0],6,4096336452),f=o(f,p,v,$,m[a+7],10,1126891415),$=o($,f,p,v,m[a+14],15,2878612391),v=o(v,$,f,p,m[a+5],21,4237533241),p=o(p,v,$,f,m[a+12],6,1700485571),f=o(f,p,v,$,m[a+3],10,2399980690),$=o($,f,p,v,m[a+10],15,4293915773),v=o(v,$,f,p,m[a+1],21,2240044497),p=o(p,v,$,f,m[a+8],6,1873313359),f=o(f,p,v,$,m[a+15],10,4264355552),$=o($,f,p,v,m[a+6],15,2734768916),v=o(v,$,f,p,m[a+13],21,1309151649),p=o(p,v,$,f,m[a+4],6,4149444226),f=o(f,p,v,$,m[a+11],10,3174756917),$=o($,f,p,v,m[a+2],15,718787259),v=o(v,$,f,p,m[a+9],21,3951481745),p=i(p,h),v=i(v,c),$=i($,d),f=i(f,u);return(l(p)+l(v)+l($)+l(f)).toLowerCase()}(this.src))}this.ravatarOptions()}ravatarOptions(){if((this.library==ot||this.library==lt)&&this.src.includes("#")){const t=this.src.split("#");this.gravatarOptions="&d="+t[1],this.src=t[0]}}attributeChangedCallback(t,e,i){super.attributeChangedCallback(t,e,i),"size"==t&&(this.size=Number(i)-Number(i)%8,this.style.setProperty("--icon-size",this.size+"px"))}render(){switch(this.library){case et:return T`<i class="mi mi">${this.src}</i>`;case it:return T`<i class="mi mi--outlined">${this.src}</i>`;case st:return T`<i class="mi mi--round">${this.src}</i>`;case nt:return T`<i class="mi mi--sharp">${this.src}</i>`;case rt:return T`<i class="mi mi--two-tone">${this.src}</i>`;case ot:return T`<img
                  src="https://www.gravatar.com/avatar/${this.src}?s=${this.size}${this.gravatarOptions}"/>`;case lt:return T`<img
                  src="https://seccdn.libravatar.org/avatar/${this.src}?s=${this.size}${this.gravatarOptions}"/>`}return""!=this.src?T`
              <img src="${this.src}" class="${this.library}/">`:T`
          <slot></slot>`}},t.ZincIcon.styles=o(':root{--icon-size:24}:host{align-items:center;display:inline-flex;font-family:sans-serif;height:var(--icon-size);justify-content:center;margin:0;overflow:hidden;padding:0;text-align:center;user-select:none;width:var(--icon-size)}:host,:host i{font-size:var(--icon-size)}:host([round]){border-radius:50%}img{height:100%;width:100%}.mi{word-wrap:normal;-webkit-font-feature-settings:"liga";-webkit-font-smoothing:antialiased;direction:ltr;display:inline-block;font-family:Material Icons;font-size:inherit;font-style:normal;font-weight:400;letter-spacing:normal;line-height:1;text-transform:none;white-space:nowrap}.mi--outlined{font-family:Material Icons Outlined}.mi--round{font-family:Material Icons Round}.mi--sharp{font-family:Material Icons Sharp}.mi--two-tone{font-family:Material Icons Two Tone}'),e([Y({reflect:!0})],t.ZincIcon.prototype,"src",void 0),e([Y({reflect:!0})],t.ZincIcon.prototype,"size",void 0),e([Y({reflect:!0})],t.ZincIcon.prototype,"library",void 0),e([Y()],t.ZincIcon.prototype,"round",void 0),t.ZincIcon=e([(t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){window.customElements.define(t,e)}}})(t,e))("zn-icon")],t.ZincIcon),Object.defineProperty(t,"__esModule",{value:!0})}({});
