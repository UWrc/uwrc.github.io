(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{120:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return l})),o.d(t,"metadata",(function(){return i})),o.d(t,"toc",(function(){return c})),o.d(t,"default",(function(){return s}));var r=o(3),n=o(7),a=(o(0),o(156)),l={id:"modules",title:"Modules"},i={unversionedId:"tools/modules",id:"tools/modules",isDocsHomePage:!1,title:"Modules",description:"Modules are a method of modifying your environment that are unique to some software you're trying to run. It allows you to quickly switch between different programs or different versions of the same program.",source:"@site/docs/tools/modules.md",slug:"/tools/modules",permalink:"/docs/tools/modules",version:"current",sidebar:"someSidebar",previous:{title:"Start Here",permalink:"/docs/tools/software"},next:{title:"Compilers",permalink:"/docs/tools/compilers"}},c=[{value:"MOX",id:"mox",children:[{value:"What software is available?",id:"what-software-is-available",children:[]},{value:"How to (un)load a software?",id:"how-to-unload-a-software",children:[]},{value:"How do I create my own module?",id:"how-do-i-create-my-own-module",children:[]}]},{value:"KLONE",id:"klone",children:[]}],u={toc:c};function s(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Modules are a method of modifying your environment that are unique to some software you're trying to run. It allows you to quickly switch between different programs or different versions of the same program."),Object(a.b)("h2",{id:"mox"},"MOX"),Object(a.b)("h3",{id:"what-software-is-available"},"What software is available?"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"module avail\n")),Object(a.b)("p",null,'It may take a while to return all the results. Any module with a "contrib" prefix is community generated, we can\'t provide any support if you use it and have questions. There is no record of the provenance so no guarantee it will be valid if you rely on it for your research results.'),Object(a.b)("h3",{id:"how-to-unload-a-software"},"How to (un)load a software?"),Object(a.b)("p",null,'Replace "software" below with a specific module you know exists or identified via ',Object(a.b)("inlineCode",{parentName:"p"},"module avail")," above."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"module load <software>\n")),Object(a.b)("p",null,"You can verify what is currently loaded."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"module list\n")),Object(a.b)("p",null,"Conversely, you can unload a specific module."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"module unload <software>\n")),Object(a.b)("h3",{id:"how-do-i-create-my-own-module"},"How do I create my own module?"),Object(a.b)("p",null,"TODO"),Object(a.b)("h2",{id:"klone"},"KLONE"),Object(a.b)("p",null,"TODO"))}s.isMDXComponent=!0},156:function(e,t,o){"use strict";o.d(t,"a",(function(){return d})),o.d(t,"b",(function(){return m}));var r=o(0),n=o.n(r);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var u=n.a.createContext({}),s=function(e){var t=n.a.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=s(e.components);return n.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(o),b=r,m=d["".concat(l,".").concat(b)]||d[b]||p[b]||a;return o?n.a.createElement(m,i(i({ref:t},u),{},{components:o})):n.a.createElement(m,i({ref:t},u))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,l=new Array(a);l[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<a;u++)l[u]=o[u];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,o)}b.displayName="MDXCreateElement"}}]);