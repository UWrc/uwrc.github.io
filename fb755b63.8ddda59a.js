(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{164:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return a})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return s}));var n=r(3),o=r(7),l=(r(0),r(173)),i={id:"compilers",title:"Compilers"},a={unversionedId:"tools/compilers",id:"tools/compilers",isDocsHomePage:!1,title:"Compilers",description:"The compilers are provided using environment modules, you can review modules here.",source:"@site/docs/tools/compilers.md",slug:"/tools/compilers",permalink:"/docs/tools/compilers",version:"current",sidebar:"someSidebar",previous:{title:"Modules",permalink:"/docs/tools/modules"},next:{title:"Singularity and Docker",permalink:"/docs/tools/containers"}},c=[{value:"GNU Compiler",id:"gnu-compiler",children:[]},{value:"Intel Compiler",id:"intel-compiler",children:[]}],p={toc:c};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"The compilers are provided using environment modules, you can review modules ",Object(l.b)("a",{parentName:"p",href:"/docs/tools/modules"},"here"),"."),Object(l.b)("p",null,"A lot of software you may want to use and compile yourself could be written in C, C++, or Fortran. We support two compiler flavors for you to try: the ",Object(l.b)("a",{parentName:"p",href:"#gnu-compiler"},"GNU compiler")," or the ",Object(l.b)("a",{parentName:"p",href:"#intel-compiler"},"Intel compiler"),". "),Object(l.b)("h2",{id:"gnu-compiler"},"GNU Compiler"),Object(l.b)("p",null,"The latest GNU compiler provided as a module is version 10.2 [",Object(l.b)("a",{parentName:"p",href:"https://gcc.gnu.org/gcc-10/"},"www"),"]. This was built with the ",Object(l.b)("inlineCode",{parentName:"p"},"--enable-languages=c,c++,fortran")," flag."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"module load gcc/10.2.0\n")),Object(l.b)("p",null,'There are older GNU compiler versions and combinations with MPI support. Additional (not listed below) modules prefixed with "contrib" are community provided and maintained.'),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell-session",metastring:"terminal=true",terminal:"true"},"$ module avail gcc\n----- /sw/klone -----\ngcc/9.3.0    \ngcc/10.2.0 (D)\n$\n")),Object(l.b)("h2",{id:"intel-compiler"},"Intel Compiler"),Object(l.b)("p",null,"The latest Intel compiler is the 2021 version, this module comes bundled with the entire oneAPI suite (e.g., Intel MPI)."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"module load intel/oneAPI/2021.1.1 \n")))}s.isMDXComponent=!0},173:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),d=n,b=u["".concat(i,".").concat(d)]||u[d]||m[d]||l;return r?o.a.createElement(b,a(a({ref:t},p),{},{components:r})):o.a.createElement(b,a({ref:t},p))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:n,i[1]=a;for(var p=2;p<l;p++)i[p]=r[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);