/*! For license information please see 989b2281.5e348a65.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[55,15,21,24,26,27,51],{159:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var o=a.apply(null,r);o&&e.push(o)}else if("object"===i)for(var s in r)n.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},160:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(10),o=n(168),s=n(11),c=Object(r.createContext)({collectLink:function(){}}),l=n(162),u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};t.a=function(e){var t,n,f,d=e.isNavLink,m=e.to,h=e.href,p=e.activeClassName,b=e.isActive,v=e["data-noBrokenLinkCheck"],g=e.autoAddBaseUrl,y=void 0===g||g,w=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),E=Object(l.b)().withBaseUrl,x=Object(r.useContext)(c),k=m||h,C=Object(o.a)(k),T=null==k?void 0:k.replace("pathname://",""),O=void 0!==T?(n=T,y&&function(e){return e.startsWith("/")}(n)?E(n):n):void 0,j=Object(r.useRef)(!1),L=d?i.e:i.c,B=s.a.canUseIntersectionObserver;Object(r.useEffect)((function(){return!B&&C&&window.docusaurus.prefetch(O),function(){B&&f&&f.disconnect()}}),[O,B,C]);var N=null!==(t=null==O?void 0:O.startsWith("#"))&&void 0!==t&&t,R=!O||!C||N;return O&&C&&!N&&!v&&x.collectLink(O),R?a.a.createElement("a",Object.assign({href:O},k&&!C&&{target:"_blank",rel:"noopener noreferrer"},w)):a.a.createElement(L,Object.assign({},w,{onMouseEnter:function(){j.current||(window.docusaurus.preload(O),j.current=!0)},innerRef:function(e){var t,n;B&&e&&C&&(t=e,n=function(){window.docusaurus.prefetch(O)},(f=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(t),f.disconnect(),n())}))}))).observe(t))},to:O||""},d&&{isActive:b,activeClassName:p}))}},162:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var r=n(21),a=n(168);function i(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,o=i.forcePrependBaseUrl,s=void 0!==o&&o,c=i.absolute,l=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(s)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+u:u}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},168:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},56:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var r=n(0),a=n.n(r),i=n(163),o=n(159),s=n.n(o),c=n(1),l=n.n(c),u=n(53),f=n.n(u);function d(e){return a.a.createElement(i.a.g,{whileHover:{scale:1.05},whileTap:{scale:.95},animate:{x:e.xTransform||0,y:e.yTransform||0},transition:{duration:.1}},a.a.createElement("a",{className:f.a.splashTextContainer,href:e.linkTo,target:"_blank"},a.a.createElement("circle",{cx:e.cx,cy:e.cy,r:e.r,fill:e.isDarkTheme?"white":"#001b3d"}),a.a.createElement("text",{x:e.cx,y:e.cy,dominantBaseline:"middle",textAnchor:"middle",className:s()(f.a.splashText,e.isDarkTheme?f.a.splashCircleDark:f.a.splashCircleLight)},e.text)))}d.propTypes={cx:l.a.number.isRequired,cy:l.a.number.isRequired,r:l.a.number.isRequired,text:l.a.string,linkTo:l.a.string,xTransform:l.a.number,yTransform:l.a.number}},57:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return h}));var r=n(0),a=n.n(r),i=n(163),o=n(159),s=n.n(o),c=n(1),l=n.n(c),u=n(53),f=n.n(u);function d(e){var t=e.x,n=e.y,r=e.width,a=e.height;return["M"+t+" "+(n+a/4),"L"+(t+r/2)+" "+n,"L"+(t+r)+" "+(n+a/4),"L"+(t+r/2)+" "+(n+a/2),"Z"].join(" ")}function m(e){var t=e.width,n=e.height;return-1*Math.atan(n/4/(t/2))*(180/Math.PI)}function h(e){return a.a.createElement(i.a.g,{whileHover:{scale:1.05},whileTap:{scale:.95},animate:{y:e.yTransition||0},transition:{duration:.2}},a.a.createElement("a",{className:f.a.splashTextContainer,href:e.linkTo,target:"_blank"},a.a.createElement("path",{fill:e.sideColor,d:(t=e,n=t.x,r=t.y,o=t.width,c=t.height,["M"+n+" "+(r+c/4),"L"+n+" "+(r+3/4*c),"L"+(n+o/2)+" "+(r+c),"L"+(n+o)+" "+(r+3/4*c),"L"+(n+o)+" "+(r+c/4),"L"+(n+o/2)+" "+(r+c/2),"Z"].join(" "))}),a.a.createElement("path",{fill:e.topColor,d:d(e)}),a.a.createElement("text",{className:s()(f.a.splashText,f.a.splashBoxText),x:e.x+.7*e.width-e.y/5,y:e.y+e.height,dominantBaseline:"middle",textAnchor:"middle",transform:"rotate("+m(e)+")"},e.text)));var t,n,r,o,c}h.propTypes={x:l.a.number.isRequired,y:l.a.number.isRequired,width:l.a.number.isRequired,height:l.a.number.isRequired,yTransition:l.a.number,topColor:l.a.string.isRequired,sideColor:l.a.string.isRequired,linkTo:l.a.string,text:l.a.string}},58:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var r=n(0),a=n.n(r),i=n(192),o=n.n(i),s=n(53),c=n.n(s),l=(n(73),["chemical engineering","computer science","medicine","physics","civil engineering","ecology","aeronautical engineering","genomics","environmental engineering","biology","mechanical engineering","chemistry","proteomics"]);function u(e){var t=Object(r.useState)(0),n=t[0],i=t[1],s=l.map((function(e){return[a.a.createElement("span",null,e,"."),a.a.createElement(o.a.Backspace,{count:e.length+1,delay:2e3})]}));return a.a.createElement("div",{className:c.a.tagline,style:{color:e.isDarkTheme?"white":"black"}},a.a.createElement(o.a,{key:n,onTypingDone:function(){return i(n+1)}},a.a.createElement("span",null,"HYAK powers discoveries in"," "),a.a.createElement(o.a.Delay,{ms:2e3}),s))}},59:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return o}));var r=n(0),a=n.n(r),i=(n(163),n(57));n(56);function o(e){return a.a.createElement("svg",{width:"100%",height:"48%",viewBox:"0 0 1020 340",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("defs",null,a.a.createElement("radialGradient",{id:"pink-radial"},a.a.createElement("stop",{offset:"0%",stopColor:"#fff"}),a.a.createElement("stop",{offset:"5%",stopColor:"#c5b4e5"}),a.a.createElement("stop",{offset:"65%",stopColor:"#fff"})),a.a.createElement("radialGradient",{id:"dark-mode-white"},a.a.createElement("stop",{offset:"0%",stopColor:"#18191a"}),a.a.createElement("stop",{offset:"5%",stopColor:"#4b2e83"}),a.a.createElement("stop",{offset:"65%",stopColor:"#18191a"})),a.a.createElement("marker",{id:"arrowhead",markerWidth:"6",markerHeight:"6",refX:"0",refY:"3",orient:"auto",fill:"#001b3d"},a.a.createElement("polygon",{points:"0 0, 6 3, 0 6"}))),a.a.createElement("rect",{transform:"translate(0, 10)",width:1020,height:330,fill:"url(#pink-radial)"}),a.a.createElement("g",{id:"boxes",transform:"translate(320, 50)"},a.a.createElement(i.default,{x:0,y:130,width:400,height:100,yTransition:30,topColor:"#6f46be",sideColor:"#4B2E83",text:"Consulting",linkTo:"/docs/support/consulting"}),a.a.createElement(i.default,{x:0,y:80,width:400,height:100,topColor:"#d098db",sideColor:"#a541b8",text:"Storage",linkTo:"/docs/storage/data"}),a.a.createElement(i.default,{x:0,y:30,width:400,height:100,yTransition:-30,topColor:"#dbc63b",sideColor:"#c2a800",text:"Compute",linkTo:"/docs/compute/compute"})))}},60:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return m}));var r=n(159),a=n.n(r),i=n(0),o=n.n(i),s=n(160),c=n(162),l=n(1),u=n.n(l),f=n(53),d=n.n(f);function m(e){return o.a.createElement("div",{className:d.a.buttons},e.buttons&&e.buttons.map((function(t){return o.a.createElement(s.a,{key:t.label,className:a()("button button--lg",d.a.getStarted,d.a.buttons,d.a.splashButton,e.isDarkTheme?d.a.buttonDark:d.a.buttonLight),to:Object(c.a)(t.path)},t.label)})))}m.propTypes={buttons:u.a.arrayOf(u.a.exact({label:u.a.string,path:u.a.string})).isRequired}},61:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var r=n(0),a=n.n(r),i=n(193),o=n(194),s=n(163),c=n(53),l=n.n(c);function u(){return a.a.createElement(s.a.div,{animate:{y:[0,20,0],opacity:[1,.2,1]},transition:{duration:2,loop:1/0}},a.a.createElement(i.a,{className:l.a.scrollDown,icon:o.a,onClick:function(){window.scroll({top:document.body.clientHeight,behavior:"smooth"})}}))}},65:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l}));var r=n(0),a=n.n(r),i=n(53),o=n.n(i),s=n(59),c=(n(61),n(60),n(58));function l(){return a.a.createElement("div",{className:o.a.splash},a.a.createElement(s.default,null),a.a.createElement(c.default,null))}}}]);