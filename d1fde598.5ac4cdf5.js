(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{136:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return b}));var a=t(3),o=t(7),i=(t(0),t(156)),r={id:"python",title:"Python"},c={unversionedId:"tools/python",id:"tools/python",isDocsHomePage:!1,title:"Python",description:"[pytorch-cuda11]: /img/docs/pytorch-cuda11.png 'Pytorch install instructions for pip with CUDA11'",source:"@site/docs/tools/python.md",slug:"/tools/python",permalink:"/docs/tools/python",version:"current",sidebar:"someSidebar",previous:{title:"Singularity and Docker",permalink:"/docs/tools/containers"},next:{title:"R and Rstudio",permalink:"/docs/tools/r"}},l=[{value:"Miniconda3",id:"miniconda3",children:[{value:"Install",id:"install",children:[]},{value:"Configure",id:"configure",children:[]},{value:"Environments",id:"environments",children:[]},{value:"pip install pytorch",id:"pip-install-pytorch",children:[]},{value:"Python Library Repositories",id:"python-library-repositories",children:[]}]},{value:"Containers",id:"containers",children:[]}],s={toc:l};function b(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Python is a scripting and general purpose programming language with a rich ecosystem of computational libraries. On HYAK it's mostly associated with Pytorch, Tensorflow, and other machine learning libraries but there are wider uses. "),Object(i.b)("p",null,"Since HYAK is a shared platform and you do not have root or administrative access, you will need to control your environment and install packages in a deliberate way. We offer either virtual environments through ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#miniconda3"}),"miniconda3")," or using ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#containers"}),"containers")," (e.g., Singularity, Docker)."),Object(i.b)("h2",{id:"miniconda3"},"Miniconda3"),Object(i.b)("p",null,"Miniconda3 is a leaner deployment of Python3 versus the more widely known Anaconda3 variant. While both are functionally equivalent, we encourage Miniconda3 vs Anaconda3 due to the reduced number of inodes (i.e., files) it creates."),Object(i.b)("p",null,"We provide a summarized version below to get started but more elaborate instructions directly from anaconda [",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.conda.io/projects/conda/en/latest/user-guide/install/linux.html"}),"www"),"]."),Object(i.b)("h3",{id:"install"},"Install"),Object(i.b)("p",null,"Download the latest miniconda3 version."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh\n")),Object(i.b)("p",null,"Install miniconda3 to your home directory. If you use large or multiple virtual environments you'll be better off specifying a lab directory or elsewhere due to the (inode and capacity) limits of home directories."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"bash Miniconda3-latest-Linux-x86_64.sh -b -p $HOME/miniconda3\n")),Object(i.b)("h3",{id:"configure"},"Configure"),Object(i.b)("p",null,"You'll need to initialize your shell. For most people (i.e., unless you actively changed it) should be using the cluster default of ",Object(i.b)("inlineCode",{parentName:"p"},"bash"),". If use ",Object(i.b)("inlineCode",{parentName:"p"},"zsh"),", ",Object(i.b)("inlineCode",{parentName:"p"},"fish"),", or any other terminal then you'll need to swap out your terminal as appropriate."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"conda init bash\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Optional"),": your terminal prompt will show ",Object(i.b)("inlineCode",{parentName:"p"},"(base)")," to indicate miniconda3 is active but it takes up a lot of screen real estate so I like to hide it until I'm actively using Python. The next command keeps miniconda3 deactivated until you call it."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"conda config --set auto_activate_base false\n")),Object(i.b)("p",null,"If you skip running the above command then miniconda3 will always be active."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"If you do use the command above then you will need to run ",Object(i.b)("inlineCode",{parentName:"p"},"conda activate")," before each use and you can unload it with ",Object(i.b)("inlineCode",{parentName:"p"},"conda deactivate"),"."))),Object(i.b)("h3",{id:"environments"},"Environments"),Object(i.b)("p",null,"We'll assume you're using miniconda3 environments here for this walk through. It's generalizable to any Python environment but we will use an install of Pytorch against CUDA11 as the example since it is one of the most popular Python libraries used on HYAK."),Object(i.b)("p",null,"First create an environment, I put it in my scrubbed directory but you can put it anywhere (preferably your lab directory if you have one). We discourage using your home directory as you will likely hit your inode (i.e., file) limits. Please alter the path in the example below to suit your unique needs. Note ",Object(i.b)("inlineCode",{parentName:"p"},"pytorch-cuda11")," in the example below will be the environment name."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"conda create -p /gscratch/scrubbed/npho/pytorch-cuda11 python=3.8 -y\n")),Object(i.b)("p",null,"You can see all the conda environments you have regardless of where they are stored."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell-session",metastring:"terminal=true",terminal:"true"}),"$ conda env list\n# conda environments:\n#\n                         /gscratch/scrubbed/npho/pytorch-cuda11\nbase                  *  /usr/lusers/npho/miniconda3\n\n$\n")),Object(i.b)("p",null,"To load the environment at this point one would run:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"conda activate /gscratch/scrubbed/npho/pytorch-cuda11\n")),Object(i.b)("p",null,"Note you have to provide the full path. If you use the ",Object(i.b)("inlineCode",{parentName:"p"},"--name")," or ",Object(i.b)("inlineCode",{parentName:"p"},"-n")," option instead of the ",Object(i.b)("inlineCode",{parentName:"p"},"--prefix")," or ",Object(i.b)("inlineCode",{parentName:"p"},"-p")," option then by default your environments will be in the same place as your miniconda3 installation, likely your home directory if you used our instructions in the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#install"}),"previous section"),". If you run only 1 environment and use only a few packages this should be fine, otherwise you'll want to use the scrubbed or your lab directories."),Object(i.b)("p",null,"If you are going to use a non-miniconda3 path regularly then you may want to run a variant of the command below to indicate an additional path that conda should search for your environments."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"conda config --append envs_dirs /gscratch/scrubbed/npho\n")),Object(i.b)("p",null,"You need to swap out my scrubbed directory with your lab folder. Now if you list all your conda environments again you should see a change."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell-session",metastring:"terminal=true",terminal:"true"}),"$ conda env list\n# conda environments:\n#\npytorch-cuda11           /gscratch/scrubbed/npho/pytorch-cuda11\nbase                  *  /usr/lusers/npho/miniconda3\n\n$\n")),Object(i.b)("p",null,"Adding a new conda environment prefix path will allow your environments to be referred to by their names alone instead of the full path, although you could still use the full path to avoid any ambiguity."),Object(i.b)("p",null,"Now (for me) loading my conda environment is a more concise command of:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"conda activate pytorch-cuda11\n")),Object(i.b)("p",null,"However, while loading environments will be a shorter command, you will still see the full path in your terminal prompt and this may annoy some folks (it annoys me) so one work around below ",Object(i.b)("em",{parentName:"p"},"in lieu")," of what you just did."),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"If you use the alternative method of making your environment references more concise below, then removing environments will be a 2 step process just as making each more concise will be a 2 step process."))),Object(i.b)("p",null,"Instead of adding a path to the ",Object(i.b)("inlineCode",{parentName:"p"},"envs_dirs")," variable as demonstrated ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#environments"}),"above")," you can create a symbolic link for each conda environment after you create it. Modify your link command below as appropriate."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"ln -s /gscratch/scrubbed/npho/pytorch-cuda10 ~/miniconda3/envs/\n")),Object(i.b)("p",null,"In this two step process you will have to create the environment using the ",Object(i.b)("inlineCode",{parentName:"p"},"--prefix")," or ",Object(i.b)("inlineCode",{parentName:"p"},"-p")," arguments as well as symbolically link it to the ",Object(i.b)("inlineCode",{parentName:"p"},"env")," sub-folder where your miniconda3 is installed."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell-session",metastring:"terminal=true",terminal:"true"}),"$ conda env list \n# conda environments:\n#\n                         /gscratch/scrubbed/npho/pytorch-cuda11\nbase                  *  /usr/lusers/npho/miniconda3\npytorch-cuda11           /usr/lusers/npho/miniconda3/envs/pytorch-cuda11\n\n$\n")),Object(i.b)("p",null,"The first and third environments above are the same and to remove both will be a two step process, first undoing the symbolic link or ",Object(i.b)("inlineCode",{parentName:"p"},"conda env remove -n pytorch-cuda11")," followed by removing the actual environment by its path reference with ",Object(i.b)("inlineCode",{parentName:"p"},"conda env remove -p /gscratch/scrubbed/npho/pytorch-cuda11"),"."),Object(i.b)("p",null,"However, I don't create / remove environments often so this extra step is nice in that I can (un)load my environments concisely and when it is loaded the screen of my terminal prompt isn't consumed. Your level of desire for command line vanity may vary :)"),Object(i.b)("h3",{id:"pip-install-pytorch"},"pip install pytorch"),Object(i.b)("p",null,"If you've followed the full page up til this point you have a blank conda environment using python3.8 and have loaded it using a variant of the following command:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"conda activate pytorch-cuda11\n")),Object(i.b)("p",null,"Pytorch has a great install guide [",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://pytorch.org/get-started/locally/"}),"www"),"] and you can see below it provides what the commands are for whichever platform you are using and which install method you prefer. We're going with ",Object(i.b)("inlineCode",{parentName:"p"},"pip")," as it's the most widely known and it demonstrates how easy it is to use in a conda environment."),Object(i.b)("p",null,"HYAK runs Linux and as of January 2021 CUDA11 is the version on all the GPUs."),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/img/docs/pytorch-cuda11.png",alt:"pytorch-cuda11",title:"Pytorch install instructions for pip with CUDA11"}))),Object(i.b)("p",null,"To use the install instructions you see above in an easy copy-and-paste format see below ",Object(i.b)("strong",{parentName:"p"},"from within an activated conda environment"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"pip install torch==1.7.1+cu110 torchvision==0.8.2+cu110 torchaudio===0.7.2 -f https://download.pytorch.org/whl/torch_stable.html\n")),Object(i.b)("p",null,"As a reminder these packages are pulled from the internet so you will need a build node or similar to do this part of the install."),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"The above ",Object(i.b)("inlineCode",{parentName:"p"},"pip install")," commands are equally valid for any other Python libraries."))),Object(i.b)("p",null,"Pytorch doesn't need a GPU to run although for most machine learning projects it's indispensible. If you have an interactive session with a GPU (run ",Object(i.b)("inlineCode",{parentName:"p"},"nvidia-smi")," to confirm) you can verify it's all working with the following test from Pytorch [",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://pytorch.org/get-started/locally/#linux-verification"}),"www"),"]:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell-session",metastring:"terminal=true",terminal:"true"}),'(pytorch-cuda11) $ python3                                                                               Python 3.8.5 (default, Sep  4 2020, 07:30:14)\n[GCC 7.3.0] :: Anaconda, Inc. on linux\nType "help", "copyright", "credits" or "license" for more information.\n>>> import torch\n>>> torch.__version__\n\'1.7.1+cu110\'\n>>> torch.cuda.is_available()\nTrue\n>>> \n')),Object(i.b)("p",null,"Now you have a computationally reproducible environment using Pytorch for machine learning. If you want to save this environment and share with others you can export the packages you've installed in it using the ",Object(i.b)("inlineCode",{parentName:"p"},"conda env export")," command and provide either the path or name prefixes. The resulting YAML file can be shared and used to create environments elsewhere that conda is installed."),Object(i.b)("h3",{id:"python-library-repositories"},"Python Library Repositories"),Object(i.b)("p",null,"There are multiple places to search for Python libraries. Whatever libraries you install are specific to whatever conda environment is loaded at the time of install."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Anaconda Cloud [",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://anaconda.org"}),"www"),"]"),Object(i.b)("li",{parentName:"ol"},"Python Package Index (PyPI) [",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://pypi.org"}),"www"),"]"),Object(i.b)("li",{parentName:"ol"},"Conda Forge [",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://conda-forge.org"}),"www"),"]")),Object(i.b)("h2",{id:"containers"},"Containers"),Object(i.b)("p",null,"TODO"))}b.isMDXComponent=!0},156:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return h}));var a=t(0),o=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),b=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=b(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},u=o.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(t),u=a,h=p["".concat(r,".").concat(u)]||p[u]||d[u]||i;return t?o.a.createElement(h,c(c({ref:n},s),{},{components:t})):o.a.createElement(h,c({ref:n},s))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var s=2;s<i;s++)r[s]=t[s];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);