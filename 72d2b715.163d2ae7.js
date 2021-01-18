(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{112:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),o=(n(0),n(156)),c={id:"first-job",title:"A First Job on Mox"},s={unversionedId:"first-job",id:"first-job",isDocsHomePage:!1,title:"A First Job on Mox",description:"In this example, we are going to use Tensorflow to train a Keras model on a MNIST dataset in a Conda environment with the following Python script:",source:"@site/docs/first-job.md",slug:"/first-job",permalink:"/docs/first-job",version:"current",sidebar:"someSidebar",previous:{title:"Account Activation",permalink:"/docs/account-activation"},next:{title:"Start Here",permalink:"/docs/storage/data"}},i=[{value:"Transfer files from your local machine to Hyak",id:"transfer-files-from-your-local-machine-to-hyak",children:[]},{value:"Login to Hyak",id:"login-to-hyak",children:[]},{value:"Request a build node",id:"request-a-build-node",children:[]},{value:"Load Miniconda and create a Conda environment",id:"load-miniconda-and-create-a-conda-environment",children:[]},{value:"Installing Dependencies",id:"installing-dependencies",children:[]},{value:"Create a Slurm script",id:"create-a-slurm-script",children:[]},{value:"Run Slurm job",id:"run-slurm-job",children:[]}],l={toc:i};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In this example, we are going to use Tensorflow to train a Keras model on a MNIST dataset in a Conda environment with the following Python script:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python",metastring:"title=tf_example.py",title:"tf_example.py"}),"import tensorflow as tf\nimport tensorflow_datasets as tfds\n\ntf._compat.enable_v2_behavior()\n\n(ds_train, ds_test), ds_info = tfds.load(\n    'mnist',\n    split=['train', 'test'],\n    shuffle_files=True,\n    as_supervised=True,\n    with_info=True\n)\n\ndef normalize_img(img, label):\n    \"\"\"Normalizes images: `uint8` -> `float32`.\"\"\"\n    return tf.cast(img, tf.float32) / 255., label\n\nds_train = ds_train.map(normalize_img, num_parallel_calls=tf.data.experimental.AUTOTUNE)\nds_train = ds_train.cache()\nds_train = ds_train.shuffle(ds_info.splits['train'].num_examples)\nds_train = ds_train.batch(128)\nds_train = ds_train.prefetch(tf.data.experimental.AUTOTUNE)\n\nds_test = ds_test.map(normalize_img, num_parallel_calls=tf.data.experimental.AUTOTUNE)\nds_test = ds_test.batch(128)\nds_test = ds_test.cache()\nds_test = ds_test.prefetch(tf.data.experimental.AUTOTUNE)\n\nmodel = tf.keras.models.Sequential([\n  tf.keras.layers.Flatten(input_shape=(28, 28, 1)),\n  tf.keras.layers.Dense(128, activation='relu'),\n  tf.keras.layers.Dense(10, activation='softmax')\n])\nmodel.compile(\n    loss='sparse_categorical_crossentropy',\n    optimizer=tf.keras.optimizers.Adam(0.001),\n    metrics=['accuracy'],\n)\n\nmodel.fit(\n    ds_train,\n    epochs=12,\n    validation_data=ds_test,\n)\n\nmodel.save('./')\n\n")),Object(o.b)("h2",{id:"transfer-files-from-your-local-machine-to-hyak"},"Transfer files from your local machine to Hyak"),Object(o.b)("p",null,"Transfer files from your local machine to Hyak using the ",Object(o.b)("inlineCode",{parentName:"p"},"scp")," command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"scp <path/to/file> <netId>@mox.hyak.uw.edu:<path/to/file>\n")),Object(o.b)("p",null,"You can also transfer entire folders with the ",Object(o.b)("inlineCode",{parentName:"p"},"-r")," (recursive) flag:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"scp -r <path/to/dir> <netId>@mox.hyak.uw.edu:<path/to/dir>\n")),Object(o.b)("h2",{id:"login-to-hyak"},"Login to Hyak"),Object(o.b)("p",null,"Login with ",Object(o.b)("inlineCode",{parentName:"p"},"ssh <netId>@mox.hyak.uw.edu")),Object(o.b)("h2",{id:"request-a-build-node"},"Request a build node"),Object(o.b)("p",null,"Get a build node with 20GB of memory for 1 hour with the command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"srun -p build --mem=20G --time=1:00:00 --pty /bin/bash\n")),Object(o.b)("h2",{id:"load-miniconda-and-create-a-conda-environment"},"Load Miniconda and create a Conda environment"),Object(o.b)("p",null,"Load Miniconda with ",Object(o.b)("inlineCode",{parentName:"p"},"module load contrib/stf-workshop/miniconda2")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"There is an inclination towards Miniconda due to its smaller size.  If you wish to use Anaconda, use ",Object(o.b)("inlineCode",{parentName:"p"},"module load anaconda3_5.3")))),Object(o.b)("p",null,"If you do not already have a work folder in ",Object(o.b)("inlineCode",{parentName:"p"},"/gscratch"),", make a folder ",Object(o.b)("inlineCode",{parentName:"p"},"/gscratch/stf/<netId>")),Object(o.b)("p",null,"Create a Conda environment in your ",Object(o.b)("inlineCode",{parentName:"p"},"gscratch")," work folder with ",Object(o.b)("inlineCode",{parentName:"p"},"conda create --prefix <path/to/workdir/path/to/env>"),".  For example, ",Object(o.b)("inlineCode",{parentName:"p"},"conda create --prefix /gscratch/stf/<netId>/env")," will create a conda environment in the ",Object(o.b)("inlineCode",{parentName:"p"},"env")," folder."),Object(o.b)("p",null,"Activate this Conda environment with ",Object(o.b)("inlineCode",{parentName:"p"},"conda activate <path/to/workdir/path/to/env>")),Object(o.b)("h2",{id:"installing-dependencies"},"Installing Dependencies"),Object(o.b)("p",null,"Install dependencies with ",Object(o.b)("inlineCode",{parentName:"p"},"conda install"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"conda install tensorflow tensorflow-datasets\n")),Object(o.b)("p",null,"Download MNIST data using ",Object(o.b)("inlineCode",{parentName:"p"},"tensorflow-datasets"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python",metastring:"load_data.py","load_data.py":!0}),'import tensorflow_datasets as tfds\ntfds.load("mnist")\n')),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Any necessary data needs to be downloaded on the build node, as the compute node the jobs run on do not have internet access"))),Object(o.b)("h2",{id:"create-a-slurm-script"},"Create a Slurm script"),Object(o.b)("p",null,"Slurm is the job scheduler used by Hyak.  A Slurm script is required to submit jobs to the cluster.  In this example, we will use the following Slurm script:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:'title="<script_name>.slurm" terminal=true',title:'"<script_name>.slurm"',terminal:"true"}),"#!/bin/bash\n#SBATCH --job-name=tf2-example      # create a short name for your job\n#SBATCH --account=stf\n#SBATCH --partition=stf-gpu\n#SBATCH --nodes=1                   # node count\n#SBATCH --ntasks=1                  # total number of tasks across all nodes\n#SBATCH --cpus-per-task=1           # cpu-cores per task (>1 if multi-threaded tasks)\n#SBATCH --mem=4G                    # total memory per node (4G per cpu-core is default)\n#SBATCH --gres=gpu:P100:1           # type:number of gpus per node\n#SBATCH --time=00:05:00             # total run time limit (HH:MM:SS)\n#SBATCH --mail-type=ALL\n#SBATCH --mail-user=<netId>@uw.edu\n#SBATCH --chdir=<path/to/workdir>   # /gscratch/stf/<netId>\n")),Object(o.b)("h2",{id:"run-slurm-job"},"Run Slurm job"),Object(o.b)("p",null,"Submit the job with ",Object(o.b)("inlineCode",{parentName:"p"},"sbatch <script_name>.slurm")),Object(o.b)("p",null,"After the job is done running, job artifacts such as ",Object(o.b)("inlineCode",{parentName:"p"},"saved_model.pb")," will be written to the working directory."),Object(o.b)("p",null,"Console output is stored in ",Object(o.b)("inlineCode",{parentName:"p"},"slurm-<jobId>.out"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-title=slurm-<jobId>.out",metastring:"terminal=true",terminal:"true"}),"2020-12-17 09:50:29.739810: I tensorflow/core/platform/cpu_feature_guard.cc:142] This TensorFlow binary is optimized with oneAPI Deep Neural Network Library (oneDNN)to use the following CPU instructions in performance-critical operations:  SSE4.1 SSE4.2 AVX AVX2 FMA\nTo enable them in other operations, rebuild TensorFlow with the appropriate compiler flags.\n2020-12-17 09:50:29.760113: I tensorflow/core/platform/profile_utils/cpu_utils.cc:104] CPU Frequency: 2399835000 Hz\n2020-12-17 09:50:29.763272: I tensorflow/compiler/xla/service/service.cc:168] XLA service 0x55d628598420 initialized for platform Host (this does not guarantee that XLA will be used). Devices:\n2020-12-17 09:50:29.763394: I tensorflow/compiler/xla/service/service.cc:176]   StreamExecutor device (0): Host, Default Version\nEpoch 1/12\n469/469 [==============================] - 2s 4ms/step - loss: 0.3524 - accuracy: 0.9023 - val_loss: 0.1892 - val_accuracy: 0.9460\nEpoch 2/12\n469/469 [==============================] - 1s 3ms/step - loss: 0.1611 - accuracy: 0.9544 - val_loss: 0.1331 - val_accuracy: 0.9610\nEpoch 3/12\n469/469 [==============================] - 1s 3ms/step - loss: 0.1142 - accuracy: 0.9672 - val_loss: 0.1082 - val_accuracy: 0.9695\nEpoch 4/12\n469/469 [==============================] - 1s 3ms/step - loss: 0.0888 - accuracy: 0.9746 - val_loss: 0.0892 - val_accuracy: 0.9729\nEpoch 5/12\n469/469 [==============================] - 1s 3ms/step - loss: 0.0715 - accuracy: 0.9793 - val_loss: 0.0850 - val_accuracy: 0.9740\nEpoch 6/12\n469/469 [==============================] - 1s 2ms/step - loss: 0.0598 - accuracy: 0.9825 - val_loss: 0.0837 - val_accuracy: 0.9749\nEpoch 7/12\n469/469 [==============================] - 1s 3ms/step - loss: 0.0495 - accuracy: 0.9855 - val_loss: 0.0739 - val_accuracy: 0.9771\nEpoch 8/12\n469/469 [==============================] - 1s 3ms/step - loss: 0.0427 - accuracy: 0.9879 - val_loss: 0.0754 - val_accuracy: 0.9772\nEpoch 9/12\n469/469 [==============================] - 1s 3ms/step - loss: 0.0353 - accuracy: 0.9903 - val_loss: 0.0752 - val_accuracy: 0.9769\nEpoch 10/12\n469/469 [==============================] - 1s 3ms/step - loss: 0.0307 - accuracy: 0.9916 - val_loss: 0.0675 - val_accuracy: 0.9797\nEpoch 11/12\n469/469 [==============================] - 1s 3ms/step - loss: 0.0272 - accuracy: 0.9924 - val_loss: 0.0808 - val_accuracy: 0.9754\nEpoch 12/12\n469/469 [==============================] - 1s 3ms/step - loss: 0.0221 - accuracy: 0.9945 - val_loss: 0.0731 - val_accuracy: 0.9783\n")))}d.isMDXComponent=!0},156:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,b=p["".concat(c,".").concat(m)]||p[m]||u[m]||o;return n?r.a.createElement(b,s(s({ref:t},l),{},{components:n})):r.a.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var l=2;l<o;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);