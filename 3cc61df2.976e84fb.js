/*! For license information please see 3cc61df2.976e84fb.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[27,24,30],{135:function(e,t,a){var r;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var o=n.apply(null,r);o&&e.push(o)}else if("object"===i)for(var s in r)a.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},50:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return f}));var r=a(0),n=a.n(r),i=a(138),o=a(135),s=a.n(o),l=a(7),d=a.n(l),h=a(45),m=a.n(h);function c(e){var t=e.x,a=e.y,r=e.width,n=e.height;return["M"+t+" "+(a+n/4),"L"+(t+r/2)+" "+a,"L"+(t+r)+" "+(a+n/4),"L"+(t+r/2)+" "+(a+n/2),"Z"].join(" ")}function u(e){var t=e.width,a=e.height;return-1*Math.atan(a/4/(t/2))*(180/Math.PI)}function f(e){return n.a.createElement(i.a.g,{whileHover:{scale:1.05},whileTap:{scale:.95},animate:{y:e.yTransition||0},transition:{duration:.2}},n.a.createElement("a",{className:m.a.splashTextContainer,href:e.linkTo,target:"_blank"},n.a.createElement("path",{fill:e.sideColor,d:(t=e,a=t.x,r=t.y,o=t.width,l=t.height,["M"+a+" "+(r+l/4),"L"+a+" "+(r+3/4*l),"L"+(a+o/2)+" "+(r+l),"L"+(a+o)+" "+(r+3/4*l),"L"+(a+o)+" "+(r+l/4),"L"+(a+o/2)+" "+(r+l/2),"Z"].join(" "))}),n.a.createElement("path",{fill:e.topColor,d:c(e)}),n.a.createElement("text",{className:s()(m.a.splashText,m.a.splashBoxText),x:e.x+.7*e.width-e.y/5,y:e.y+e.height,dominantBaseline:"middle",textAnchor:"middle",transform:"rotate("+u(e)+")"},e.text)));var t,a,r,o,l}f.propTypes={x:d.a.number.isRequired,y:d.a.number.isRequired,width:d.a.number.isRequired,height:d.a.number.isRequired,yTransition:d.a.number,topColor:d.a.string.isRequired,sideColor:d.a.string.isRequired,linkTo:d.a.string,text:d.a.string}},51:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return c}));var r=a(0),n=a.n(r),i=a(138),o=a(135),s=a.n(o),l=a(7),d=a.n(l),h=a(45),m=a.n(h);function c(e){return n.a.createElement(i.a.g,{whileHover:{scale:1.05},whileTap:{scale:.95},animate:{x:e.xTransform||0,y:e.yTransform||0},transition:{duration:.1}},n.a.createElement("a",{className:m.a.splashTextContainer,href:e.linkTo,target:"_blank"},n.a.createElement("circle",{cx:e.cx,cy:e.cy,r:e.r,fill:e.isDarkTheme?"white":"#001b3d"}),n.a.createElement("text",{x:e.cx,y:e.cy,dominantBaseline:"middle",textAnchor:"middle",className:s()(m.a.splashText,e.isDarkTheme?m.a.splashCircleDark:m.a.splashCircleLight)},e.text)))}c.propTypes={cx:d.a.number.isRequired,cy:d.a.number.isRequired,r:d.a.number.isRequired,text:d.a.string,linkTo:d.a.string,xTransform:d.a.number,yTransform:d.a.number}},59:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return l}));var r=a(0),n=a.n(r),i=a(138),o=a(50),s=a(51);function l(e){var t={visible:{opacity:1},hidden:{opacity:0}};return n.a.createElement("svg",{width:"80%",height:"48%",viewBox:"0 0 1020 340",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("defs",null,n.a.createElement("radialGradient",{id:"pink-radial"},n.a.createElement("stop",{offset:"0%",stopColor:"#fff"}),n.a.createElement("stop",{offset:"5%",stopColor:"#c5b4e5"}),n.a.createElement("stop",{offset:"65%",stopColor:"#fff"})),n.a.createElement("radialGradient",{id:"dark-mode-white"},n.a.createElement("stop",{offset:"0%",stopColor:"#18191a"}),n.a.createElement("stop",{offset:"5%",stopColor:"#4b2e83"}),n.a.createElement("stop",{offset:"65%",stopColor:"#18191a"})),n.a.createElement("marker",{id:"arrowhead",markerWidth:"6",markerHeight:"6",refX:"0",refY:"3",orient:"auto",fill:"#001b3d"},n.a.createElement("polygon",{points:"0 0, 6 3, 0 6"}))),n.a.createElement("rect",{transform:"translate(0, 10)",width:1020,height:330,fill:"url(#pink-radial)"}),n.a.createElement("g",{id:"boxes",transform:"translate(370, 50)"},n.a.createElement(o.default,{x:0,y:130,width:300,height:100,yTransition:30,topColor:"#6f46be",sideColor:"#4B2E83",text:"Consulting",linkTo:"/docs/support/consulting"}),n.a.createElement(o.default,{x:0,y:80,width:300,height:100,topColor:"#d098db",sideColor:"#a541b8",text:"Storage",linkTo:"/docs/storage/data"}),n.a.createElement(o.default,{x:0,y:30,width:300,height:100,yTransition:-30,topColor:"#dbc63b",sideColor:"#c2a800",text:"Compute",linkTo:"/docs/compute/compute"})),n.a.createElement("g",{id:"left-circles",transform:"translate(50, 80)"},n.a.createElement(s.default,{cx:0,cy:100,xTransform:100,yTransform:-100,r:48,text:"ML/AI",linkTo:"http://www.washington.edu",isDarkTheme:e.isDarkTheme}),n.a.createElement(s.default,{cx:0,cy:100,r:48,text:"Data",linkTo:"http://www.washington.edu",isDarkTheme:e.isDarkTheme}),n.a.createElement(s.default,{cx:0,cy:100,xTransform:100,yTransform:100,r:48,text:"Circle3",linkTo:"http://www.washington.edu",isDarkTheme:e.isDarkTheme})),n.a.createElement(i.a.g,{id:"left-arrows",transform:"translate(120, 120)",variants:t,initial:"hidden",animate:"visible",transition:{duration:.5}},n.a.createElement("path",{fill:"none",stroke:e.isDarkTheme?"white":"#001b3d",strokeWidth:"3",markerEnd:"url(#arrowhead)",d:"M0 60 L210 60"}),n.a.createElement("path",{fill:"none",stroke:e.isDarkTheme?"white":"#001b3d",strokeWidth:"3",d:"M90 0 Q130 60 210 60"}),n.a.createElement("path",{fill:"none",stroke:e.isDarkTheme?"white":"#001b3d",strokeWidth:"3",d:"M90 120 Q130 60 210 60"})),n.a.createElement("g",{id:"right-circles",transform:"translate(890, 80)"},n.a.createElement(s.default,{cx:80,cy:100,xTransform:-80,yTransform:-100,r:48,text:"Results",linkTo:"http://www.washington.edu",isDarkTheme:e.isDarkTheme}),n.a.createElement(s.default,{cx:80,cy:100,r:48,text:"Pubs",linkTo:"/publications",isDarkTheme:e.isDarkTheme}),n.a.createElement(s.default,{cx:80,cy:100,xTransform:-80,yTransform:100,r:48,text:"Grants",linkTo:"http://www.washington.edu",isDarkTheme:e.isDarkTheme})),n.a.createElement(i.a.g,{id:"right-arrows",transform:"translate(710, 80)",variants:t,initial:"hidden",animate:"visible",transition:{duration:.5}},n.a.createElement("path",{d:"M0 0 L100 0",fill:"none",stroke:e.isDarkTheme?"white":"#001b3d",strokeWidth:"3",markerEnd:"url(#arrowhead)",strokeDasharray:"4"}),n.a.createElement("path",{d:"M0 100 L180 100",fill:"none",stroke:e.isDarkTheme?"white":"#001b3d",strokeWidth:"3",markerEnd:"url(#arrowhead)",strokeDasharray:"4"}),n.a.createElement("path",{d:"M0 200 L100 200",fill:"none",stroke:e.isDarkTheme?"white":"#001b3d",strokeWidth:"3",markerEnd:"url(#arrowhead)",strokeDasharray:"4"})))}}}]);