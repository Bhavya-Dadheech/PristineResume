(self.webpackChunkpristine_resume=self.webpackChunkpristine_resume||[]).push([[82],{1082:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>A});var s=r(5043),n=r(3216),o=r(3003),i=r(3892),a=r(899),c=r(9281);const u=e=>({type:c.U,payload:e});var m=r(1725),l=r.n(m),d=/[A-Z]/g,p=/^ms-/,h={};function f(e){return"-"+e.toLowerCase()}const x=function(e){if(h.hasOwnProperty(e))return h[e];var t=e.replace(d,f);return h[e]=p.test(t)?"-"+t:t};function b(e,t){if(e===t)return!0;if(!e||!t)return!1;const r=Object.keys(e),s=Object.keys(t),n=r.length;if(s.length!==n)return!1;for(let o=0;o<n;o++){const s=r[o];if(e[s]!==t[s]||!Object.prototype.hasOwnProperty.call(t,s))return!1}return!0}var v=r(5173),g=r.n(v);const y=g().oneOfType([g().string,g().number]),w={all:g().bool,grid:g().bool,aural:g().bool,braille:g().bool,handheld:g().bool,print:g().bool,projection:g().bool,screen:g().bool,tty:g().bool,tv:g().bool,embossed:g().bool},j={orientation:g().oneOf(["portrait","landscape"]),scan:g().oneOf(["progressive","interlace"]),aspectRatio:g().string,deviceAspectRatio:g().string,height:y,deviceHeight:y,width:y,deviceWidth:y,color:g().bool,colorIndex:g().bool,monochrome:g().bool,resolution:y,type:Object.keys(w)},{type:k,...O}=j,C={minAspectRatio:g().string,maxAspectRatio:g().string,minDeviceAspectRatio:g().string,maxDeviceAspectRatio:g().string,minHeight:y,maxHeight:y,minDeviceHeight:y,maxDeviceHeight:y,minWidth:y,maxWidth:y,minDeviceWidth:y,maxDeviceWidth:y,minColor:g().number,maxColor:g().number,minColorIndex:g().number,maxColorIndex:g().number,minMonochrome:g().number,maxMonochrome:g().number,minResolution:y,maxResolution:y,...O};var L={all:{...w,...C},types:w,matchers:j,features:C};const N=e=>{const t=[];return Object.keys(L.all).forEach((r=>{const s=e[r];null!=s&&t.push(((e,t)=>{const r=x(e);return"number"===typeof t&&(t="".concat(t,"px")),!0===t?r:!1===t?"not ".concat(r):"(".concat(r,": ").concat(t,")")})(r,s))})),t.join(" and ")},E=(0,s.createContext)(void 0),R=e=>{if(!e)return;return Object.keys(e).reduce(((t,r)=>(t[x(r)]=e[r],t)),{})},S=()=>{const e=(0,s.useRef)(!1);return(0,s.useEffect)((()=>{e.current=!0}),[]),e.current},I=e=>{const t=()=>(e=>e.query||N(e))(e),[r,n]=(0,s.useState)(t);return(0,s.useEffect)((()=>{const e=t();r!==e&&n(e)}),[e]),r},T=(e,t,r)=>{const n=(e=>{const t=(0,s.useContext)(E),r=()=>R(e)||R(t),[n,o]=(0,s.useState)(r);return(0,s.useEffect)((()=>{const e=r();b(n,e)||o(e)}),[e,t]),n})(t),o=I(e);if(!o)throw new Error("Invalid or missing MediaQuery!");const i=((e,t)=>{const r=()=>l()(e,t||{},!!t),[n,o]=(0,s.useState)(r),i=S();return(0,s.useEffect)((()=>{if(i){const e=r();return o(e),()=>{e&&e.dispose()}}}),[e,t]),n})(o,n),a=(e=>{const[t,r]=(0,s.useState)(e.matches);return(0,s.useEffect)((()=>{const t=e=>{r(e.matches)};return e.addListener(t),r(e.matches),()=>{e.removeListener(t)}}),[e]),t})(i),c=S();return(0,s.useEffect)((()=>{c&&r&&r(a)}),[a]),(0,s.useEffect)((()=>()=>{i&&i.dispose()}),[]),a};var _=r(579);function A(e){let{setProgress:t}=e;const r=(0,n.Zp)(),s=(0,o.wA)(),c=(0,o.d4)((e=>e.summary)),m=T({query:"(max-width: 768px)"}),l=a.Ik({summary:a.Yj().required("Summary is required")});return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("span",{className:"roboto-bold sm:text-3xl text-2xl",children:"Almost done! Let\u2019s finish with a strong summary"}),(0,_.jsx)(i.l1,{initialValues:c,validationSchema:l,onSubmit:e=>{s(u(e)),t(),r("/structure")},className:"mt-5",children:(0,_.jsxs)(i.lV,{children:[(0,_.jsx)("div",{className:"space-y-12",children:(0,_.jsx)("div",{className:"border-b border-gray-900/10 pb-12",children:(0,_.jsx)("div",{className:"mt-5 grid sm:grid-cols-3 grid-cols-1 gap-x-6 sm:gap-y-8 gap-y-4",children:(0,_.jsxs)("div",{className:"col-span-2",children:[(0,_.jsxs)("label",{htmlFor:"summary",className:"block text-sm font-medium leading-6 text-gray-900",children:["Summary",(0,_.jsx)("span",{className:"mx-1 text-red-600",children:"*"})]}),(0,_.jsx)("div",{className:"mt-2",children:(0,_.jsx)(i.D0,{as:"textarea",name:"summary",rows:m?12:6,className:"hover:shadow-md block w-full border-[0.5px] border-indigo-400 rounded bg-slate-50 p-2 text-indigo-600 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-none focus:indigo-600 focus:ring-1 focus:ring-indigo-600"})}),(0,_.jsx)(i.Kw,{component:"div",className:"text-xs text-red-500",name:"summary"})]})})})}),(0,_.jsxs)("div",{className:"mt-6 flex items-center justify-end gap-x-6",children:[(0,_.jsx)("button",{type:"button",className:"rounded-md hover:bg-slate-200 px-3 py-2 text-sm font-semibold leading-6 text-gray-600",onClick:()=>{r("/projects")},children:"Back"}),(0,_.jsx)("button",{type:"submit",className:"px-4 rounded-md bg-indigo-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:"Next"})]})]})})]})}},1238:(e,t)=>{"use strict";t.Y=function(e,t){return a(e).some((function(e){var r=e.inverse,s="all"===e.type||t.type===e.type;if(s&&r||!s&&!r)return!1;var n=e.expressions.every((function(e){var r=e.feature,s=e.modifier,n=e.value,o=t[r];if(!o)return!1;switch(r){case"orientation":case"scan":return o.toLowerCase()===n.toLowerCase();case"width":case"height":case"device-width":case"device-height":n=m(n),o=m(o);break;case"resolution":n=u(n),o=u(o);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":n=c(n),o=c(o);break;case"grid":case"color":case"color-index":case"monochrome":n=parseInt(n,10)||1,o=parseInt(o,10)||0}switch(s){case"min":return o>=n;case"max":return o<=n;default:return o===n}}));return n&&!r||!n&&r}))};var r=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,s=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,n=/^(?:(min|max)-)?(.+)/,o=/(em|rem|px|cm|mm|in|pt|pc)?$/,i=/(dpi|dpcm|dppx)?$/;function a(e){return e.split(",").map((function(e){var t=(e=e.trim()).match(r),o=t[1],i=t[2],a=t[3]||"",c={};return c.inverse=!!o&&"not"===o.toLowerCase(),c.type=i?i.toLowerCase():"all",a=a.match(/\([^\)]+\)/g)||[],c.expressions=a.map((function(e){var t=e.match(s),r=t[1].toLowerCase().match(n);return{modifier:r[1],feature:r[2],value:t[2]}})),c}))}function c(e){var t,r=Number(e);return r||(r=(t=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/t[2]),r}function u(e){var t=parseFloat(e);switch(String(e).match(i)[1]){case"dpcm":return t/2.54;case"dppx":return 96*t;default:return t}}function m(e){var t=parseFloat(e);switch(String(e).match(o)[1]){case"em":case"rem":return 16*t;case"cm":return 96*t/2.54;case"mm":return 96*t/2.54/10;case"in":return 96*t;case"pt":return 72*t;case"pc":return 72*t/12;default:return t}}},1725:(e,t,r)=>{"use strict";var s=r(1238).Y,n="undefined"!==typeof window?window.matchMedia:null;function o(e,t,r){var o,i=this;function a(e){i.matches=e.matches,i.media=e.media}n&&!r&&(o=n.call(window,e)),o?(this.matches=o.matches,this.media=o.media,o.addListener(a)):(this.matches=s(e,t),this.media=e),this.addListener=function(e){o&&o.addListener(e)},this.removeListener=function(e){o&&o.removeListener(e)},this.dispose=function(){o&&o.removeListener(a)}}e.exports=function(e,t,r){return new o(e,t,r)}},1497:(e,t,r)=>{"use strict";var s=r(3218);function n(){}function o(){}o.resetWarningCache=n,e.exports=function(){function e(e,t,r,n,o,i){if(i!==s){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:n};return r.PropTypes=r,r}},5173:(e,t,r)=>{e.exports=r(1497)()},3218:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=82.566b165a.chunk.js.map