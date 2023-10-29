"use strict";(self.webpackChunkjimo=self.webpackChunkjimo||[]).push([[8200],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=i.createContext({}),p=function(e){var n=i.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=p(e.components);return i.createElement(o.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(t),d=r,f=m["".concat(o,".").concat(d)]||m[d]||u[d]||l;return t?i.createElement(f,a(a({ref:n},c),{},{components:t})):i.createElement(f,a({ref:n},c))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,a=new Array(l);a[0]=d;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[m]="string"==typeof e?e:r,a[1]=s;for(var p=2;p<l;p++)a[p]=t[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5544:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var i=t(7462),r=(t(7294),t(3905));const l={},a="vite",s={unversionedId:"\u524d\u7aef/\u6784\u5efa\u5de5\u5177/vite",id:"\u524d\u7aef/\u6784\u5efa\u5de5\u5177/vite",title:"vite",description:"\u5e38\u7528\u914d\u7f6evite.config.js",source:"@site/docs/\u524d\u7aef/\u6784\u5efa\u5de5\u5177/vite.md",sourceDirName:"\u524d\u7aef/\u6784\u5efa\u5de5\u5177",slug:"/\u524d\u7aef/\u6784\u5efa\u5de5\u5177/vite",permalink:"/jimo-note/docs/\u524d\u7aef/\u6784\u5efa\u5de5\u5177/vite",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u524d\u7aef/\u6784\u5efa\u5de5\u5177/vite.md",tags:[],version:"current",frontMatter:{},sidebar:"webSidebar",previous:{title:"rollup",permalink:"/jimo-note/docs/\u524d\u7aef/\u6784\u5efa\u5de5\u5177/rollup"},next:{title:"webpack5.74.0",permalink:"/jimo-note/docs/\u524d\u7aef/\u6784\u5efa\u5de5\u5177/webpack5.74.0"}},o={},p=[{value:"\u5e38\u7528\u914d\u7f6e<code>vite.config.js</code>",id:"\u5e38\u7528\u914d\u7f6eviteconfigjs",level:2},{value:"\u4f9d\u8d56\u9884\u7ea6\u6784\u5efa",id:"\u4f9d\u8d56\u9884\u7ea6\u6784\u5efa",level:2},{value:"\u5728 vite \u4e2d\u5904\u7406 css",id:"\u5728-vite-\u4e2d\u5904\u7406-css",level:2},{value:"<code>vite.config.js</code>\u4e2d css \u914d\u7f6e(cssmodule)",id:"viteconfigjs\u4e2d-css-\u914d\u7f6ecssmodule",level:3},{value:"css \u9884\u5904\u7406(sacc/less)",id:"css-\u9884\u5904\u7406saccless",level:3},{value:"postcss",id:"postcss",level:3},{value:"vite \u52a0\u8f7d\u9759\u6001\u8d44\u6e90",id:"vite-\u52a0\u8f7d\u9759\u6001\u8d44\u6e90",level:2},{value:"build",id:"build",level:2},{value:"vite \u63d2\u4ef6",id:"vite-\u63d2\u4ef6",level:2},{value:"\u624b\u5199 plugins",id:"\u624b\u5199-plugins",level:3},{value:"<code>config</code>:\u65b0\u5efa<code>plugins/ViteAliases.js</code>",id:"config\u65b0\u5efapluginsvitealiasesjs",level:3},{value:"<code>transformIndexHtml</code>:\u65b0\u5efa<code>plugins/CreateHtmlPlugin.js</code>",id:"transformindexhtml\u65b0\u5efapluginscreatehtmlpluginjs",level:3},{value:"<code>configureServer</code>:\u65b0\u5efa<code>plugins/VitePluginMock.js</code>",id:"configureserver\u65b0\u5efapluginsvitepluginmockjs",level:3},{value:"typescript",id:"typescript",level:2},{value:"\u51c6\u786e\u63d0\u793a",id:"\u51c6\u786e\u63d0\u793a",level:3},{value:"\u914d\u7f6e\u73af\u5883\u53d8\u91cf\u63d0\u793a",id:"\u914d\u7f6e\u73af\u5883\u53d8\u91cf\u63d0\u793a",level:3},{value:"\u6784\u5efa\u4f18\u5316",id:"\u6784\u5efa\u4f18\u5316",level:2},{value:"\u5206\u5305\u7b56\u7565",id:"\u5206\u5305\u7b56\u7565",level:3},{value:"gzip \u538b\u7f29",id:"gzip-\u538b\u7f29",level:3},{value:"cdn",id:"cdn",level:3}],c={toc:p},m="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(m,(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"vite"},"vite"),(0,r.kt)("h2",{id:"\u5e38\u7528\u914d\u7f6eviteconfigjs"},"\u5e38\u7528\u914d\u7f6e",(0,r.kt)("inlineCode",{parentName:"h2"},"vite.config.js")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { defineConfig, splitVendorChunkPlugin } from 'vite'//splitVendorChunkPlugin\u5206\u5305\nimport { fileURLToPath, URL } from 'node:url'\nimport viteCompression from 'vite-plugin-compression'//gzip\u538b\u7f29\n\nexport default defineConfig({\n    plugins: [splitVendorChunkPlugin(), viteCompression()],\n    resolve: {\n        alias: {\n            '@': fileURLToPath(new URL('./src', import.meta.url)),\n        },\n    },\n    css: {\n        //\u5bf9css\u7684\u884c\u4e3a\u8fdb\u884c\u914d\u7f6e\n        modules: {\n            localsConvention: 'camelCaseOnly',\n        },\n        devSourcemap: true, //css sourcemap \uff0c\u7d22\u5f15\u6587\u4ef6\n    },\n})\n")),(0,r.kt)("h2",{id:"\u4f9d\u8d56\u9884\u7ea6\u6784\u5efa"},"\u4f9d\u8d56\u9884\u7ea6\u6784\u5efa"),(0,r.kt)("p",null,"\u53d7\u9650 vite \u4f1a\u627e\u5230\u5bf9\u5e94\u7684\u4f9d\u8d56\uff0c\u7136\u540e\u8c03\u7528",(0,r.kt)("strong",{parentName:"p"},"esbuild"),"(\u5bf9 js \u8bed\u6cd5\u8fdb\u884c\u5904\u7406\u7684\u4e00\u4e2a\u5e93)\uff0c\u5c06\u5176\u4ed6\u89c4\u8303\u7684\u4ee3\u7801\u8f6c\u6362\u6210",(0,r.kt)("strong",{parentName:"p"},"esmodule"),"\u89c4\u8303\uff0c\u7136\u540e\u653e\u5230\u5f53\u524d\u76ee\u5f55\u4e0b\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules/.vite/deps"),"\uff0c\u540c\u65f6\u5bf9",(0,r.kt)("strong",{parentName:"p"},"esmodule"),"\u89c4\u8303\u7684\u5404\u4e2a\u6a21\u5757\u8fdb\u884c\u7edf\u4e00\u96c6\u6210"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u89e3\u51b3\u7684\u95ee\u9898\uff1a")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4e0d\u540c\u7684\u7b2c\u4e09\u65b9\u5305\u4f1a\u6709\u4e0d\u540c\u7684\u5bfc\u51fa\u683c\u5f0f(\u8fd9\u4e2a\u662f vite \u6ca1\u6cd5\u7ea6\u675f\u4eba\u5bb6\u7684\u4e8b\u60c5)"),(0,r.kt)("li",{parentName:"ol"},"\u5bf9\u8def\u5f84\u7684\u5904\u7406\u4e0a\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"li"},".vite/deps"),",\u65b9\u4fbf\u8def\u5f84\u91cd\u5199"),(0,r.kt)("li",{parentName:"ol"},"\u7f51\u7edc\u593a\u5b9d\u4f20\u8f93\u7684\u6027\u80fd\u95ee\u9898(\u4e5f\u662f\u539f\u751f",(0,r.kt)("strong",{parentName:"li"},"esmodule"),"\u89c4\u8303\u4e0d\u6562\u652f\u6301",(0,r.kt)("inlineCode",{parentName:"li"},"node_modules"),"\u7684\u539f\u56e0\u4e4b\u4e00)\uff0c\u6709\u4e86\u4f9d\u8d56\u9884\u6784\u5efa\u4ee5\u540e\u65e0\u8bba\u6709\u591a\u5c11\u7684\u989d\u5916",(0,r.kt)("inlineCode",{parentName:"li"},"export"),"\u548c",(0,r.kt)("inlineCode",{parentName:"li"},"import"),",vite \u90fd\u4f1a\u5c3d\u53ef\u80fd\u7684\u5c06\u4ed6\u4eec\u8fdb\u884c\u96c6\u6210\u6700\u540e\u53ea\u751f\u6210\u4e00\u4e2a\u6216\u51e0\u4e2a\u6a21\u5757")),(0,r.kt)("h2",{id:"\u5728-vite-\u4e2d\u5904\u7406-css"},"\u5728 vite \u4e2d\u5904\u7406 css"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"vite"),"\u5929\u751f\u5c31\u652f\u6301\u5bf9",(0,r.kt)("inlineCode",{parentName:"p"},"css"),"\u6587\u4ef6\u7684\u76f4\u63a5\u5904\u7406"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"vite"),"\u5728\u8bfb\u53d6\u5230",(0,r.kt)("inlineCode",{parentName:"li"},"main.js"),"\u4e2d\u5f15\u7528\u5230\u4e86",(0,r.kt)("inlineCode",{parentName:"li"},"index.css")),(0,r.kt)("li",{parentName:"ol"},"\u76f4\u63a5\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"li"},"fs"),"\u6a21\u5757\u53bb\u8bfb\u53d6",(0,r.kt)("inlineCode",{parentName:"li"},"index.css"),"\u4e2d\u6587\u4ef6\u5185\u5bb9"),(0,r.kt)("li",{parentName:"ol"},"\u76f4\u63a5\u521b\u5efa\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"li"},"style"),"\u6807\u7b7e\uff0c\u5c06",(0,r.kt)("inlineCode",{parentName:"li"},"index.css"),"\u4e2d\u6587\u4ef6\u5185\u5bb9\u76f4\u63a5 copy \u8fdb",(0,r.kt)("inlineCode",{parentName:"li"},"style"),"\u6807\u7b7e\u91cc"),(0,r.kt)("li",{parentName:"ol"},"\u5c06",(0,r.kt)("inlineCode",{parentName:"li"},"style"),"\u6807\u7b7e\u63d2\u5165\u5230",(0,r.kt)("inlineCode",{parentName:"li"},"index.html"),"\u7684",(0,r.kt)("inlineCode",{parentName:"li"},"head"),"\u4e2d"),(0,r.kt)("li",{parentName:"ol"},"\u5c06\u8be5 css \u6587\u4ef6\u4e2d\u7684\u5185\u5bb9\u76f4\u63a5\u66ff\u6362\u4e3a js \u811a\u672c(\u65b9\u4fbf\u70ed\u66f4\u65b0\u6216\u8005 css \u6a21\u5757\u5316),\u540c\u65f6\u8bbe\u7f6e",(0,r.kt)("inlineCode",{parentName:"li"},"Content-Type"),"\u4e3a js \u4ece\u800c\u8ba9\u6d4f\u89c8\u5668\u4ee5 js \u811a\u672c\u7684\u5f62\u5f0f\u6765\u6267\u884c\u8be5 css \u540e\u7f00\u7684\u6587\u4ef6\n::: warning Tip\n",(0,r.kt)("inlineCode",{parentName:"li"},"cssmodule"),"\u89e3\u51b3\u6837\u5f0f\u88ab\u8986\u76d6(\u56e0\u4e3a\u7c7b\u540d\u91cd\u590d)\n:::")),(0,r.kt)("h3",{id:"viteconfigjs\u4e2d-css-\u914d\u7f6ecssmodule"},(0,r.kt)("inlineCode",{parentName:"h3"},"vite.config.js"),"\u4e2d css \u914d\u7f6e(cssmodule)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"localsConvention"),":\u4fee\u6539\u751f\u6210\u7684\u914d\u7f6e\u5bf9\u8c61\u7684 key \u7684\u5c55\u793a\u5f62\u5f0f(\u9a7c\u5cf0\u8fd8\u662f\u4e2d\u5212\u7ebf\u5f62\u5f0f)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"scopeBehaviour"),":\u914d\u7f6e\u5f53\u524d\u7684\u6a21\u5757\u5316\u884c\u4e3a\u662f\u6a21\u5757\u5316\u8fd8\u662f\u5168\u5c40\u5316(\u6709 hash \u5c31\u662f\u5f00\u542f\u4e86\u6a21\u5757\u5316\u7684\u4e00\u4e2a\u6807\u5fd7\uff0c\u56e0\u4e3a\u4ed6\u53ef\u4ee5\u4fdd\u8bc1\u4ea7\u751f\u4e0d\u540c\u7684 hash \u503c\u6765\u63a7\u5236\u6837\u5f0f\u7c7b\u540d\u4e0d\u88ab\u8986\u76d6)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"generateScopedName"),":\u751f\u6210\u7684\u7c7b\u540d\u89c4\u5219(\u51fd\u6570\u6216\u5b57\u7b26\u4e32)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"hashPrefix"),":\u751f\u6210 hash \u4f1a\u6839\u636e\u7c7b\u540d+\u4e00\u4e9b\u5176\u4ed6\u7684\u5b57\u7b26\u4e32(\u6587\u4ef6\u540d+\u5185\u90e8\u968f\u673a\u751f\u6210\u4e00\u4e2a\u5b57\u7b26\u4e32)\u8fdb\u884c\u751f\u6210,\u5982\u679c\u60f3\u8981\u751f\u6210 hash \u66f4\u52a0\u72ec\u7279\u4e00\u70b9,\u53ef\u4ee5\u914d\u7f6e",(0,r.kt)("inlineCode",{parentName:"li"},"hashPrefix"),",\u914d\u7f6e\u7684\u8fd9\u4e2a\u5b57\u7b26\u4e32\u4f1a\u53c2\u4e0e\u5230\u6700\u7ec8 hash \u751f\u6210(hash:\u53ea\u8981\u5b57\u7b26\u4e32\u6709\u4e00\u4e2a\u5b57\u4e0d\u4e00\u6837\uff0c\u90a3\u4e48\u751f\u6210\u7684 hash \u5c31\u5b8c\u5168\u4e0d\u4e00\u6837,\u4f46\u662f\u53ea\u8981\u5b57\u7b26\u4e32\u5b8c\u5168\u4e00\u6837,\u751f\u6210\u7684 hash \u5c31\u4f1a\u4e00\u6837)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"globalModulePaths"),":\u4ee3\u8868\u4e0d\u60f3\u53c2\u4e0e\u5230 css \u6a21\u5757\u5316\u7684\u8def\u5f84\nvite.config.js")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript{4-14}"},"import { defineConfig } from \"vite\";\nexport default defineConfig({\n  css: {//\u5bf9css\u7684\u884c\u4e3a\u8fdb\u884c\u914d\u7f6e\n    modules: {\n      localsConvention: 'camelCaseOnly',\n      scopeBehaviour: 'local',\n      generateScopedName:'[name]-[local]-[hash:5]',\n      // generateScopedName: (name, fileName, css) => {\n      //   console.log(name, fileName, css);\n      //   return name+Math.random().toString().replace('.','')\n      // }\n      hashPrefix: 'hello',\n      globalModulePaths:[]\n    }\n  }\n})\n")),(0,r.kt)("h3",{id:"css-\u9884\u5904\u7406saccless"},"css \u9884\u5904\u7406(sacc/less)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript{4-12}"},"import { defineConfig } from \"vite\";\nexport default defineConfig({\n  css: {\n    preprocessorOptions: {//css\u9884\u5904\u7406\n      less: {\n        math: 'always',\n        globalVars: {\n          mainColor: 'red'\n        }\n      }\n    },\n    devSourcemap:true//css sourcemap \uff0c\u7d22\u5f15\u6587\u4ef6\n  }\n})\n")),(0,r.kt)("h3",{id:"postcss"},"postcss"),(0,r.kt)("p",null,"postcss.config.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import postcssPresetEnv from 'postcss-preset-env' //postcss\u9884\u8bbe\nimport { fileURLToPath, URL } from 'node:url'\n\nexport default {\n    plugins: [\n        postcssPresetEnv({\n            importFrom: fileURLToPath(new URL('./src/common.css', import.meta.url)),\n        }),\n    ],\n}\n")),(0,r.kt)("h2",{id:"vite-\u52a0\u8f7d\u9759\u6001\u8d44\u6e90"},"vite \u52a0\u8f7d\u9759\u6001\u8d44\u6e90"),(0,r.kt)("p",null,"vite.config.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript{2,6-8}"},"import { defineConfig } from \"vite\";\nimport { fileURLToPath, URL } from 'node:url'\n\nexport default defineConfig({\n  resolve: {\n    alias: {\n      '@': fileURLToPath(new URL('./src', import.meta.url))\n    }\n  },\n})\n")),(0,r.kt)("h2",{id:"build"},"build"),(0,r.kt)("p",null,"vite.config.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript{4-13}"},"import { defineConfig } from \"vite\";\n\nexport default defineConfig({\n  build: {\n    rollupOptions: {//\u914d\u7f6erollup\u7684\u4e00\u4e9b\u6784\u5efa\u7b56\u7565\n      output: {//\u63a7\u5236\u8f93\u51fa\n        assetFileNames:'[hash].[name].[ext]'\n      }\n    },\n    assetsInlineLimit: 4094000,//4000kb\n    outDir: 'dist',\n    assetsDir:'static'\n  }\n})\n\n")),(0,r.kt)("h2",{id:"vite-\u63d2\u4ef6"},(0,r.kt)("a",{parentName:"h2",href:"https://cn.vitejs.dev/guide/api-plugin.html#vite-specific-hooks"},"vite \u63d2\u4ef6")),(0,r.kt)("p",null,"\u6574\u4e2a\u63d2\u4ef6\u5c31\u662f\u5728 vite \u7684\u751f\u547d\u5468\u671f\u7684\u4e0d\u540c\u9636\u6bb5\u53bb\u505a\u4e0d\u540c\u7684\u4e8b\u60c5(\u5c31\u662f\u62a2\u5728 vite \u6267\u884c\u914d\u7f6e\u6587\u4ef6\u4e4b\u524d\u53bb\u6539\u5199\u914d\u7f6e\u6587\u4ef6)",(0,r.kt)("br",{parentName:"p"}),"\n","\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"vite.config.js"),"\u8fd4\u56de\u51fa\u53bb\u7684\u914d\u7f6e\u5bf9\u8c61\u4ee5\u53ca\u5728\u63d2\u4ef6\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"config"),"\u751f\u547d\u5468\u671f\u4e2d\u8fd4\u56de\u7684\u5bf9\u8c61\u90fd\u4e0d\u662f\u6700\u7ec8\u7684\u914d\u7f6e\u5bf9\u8c61,vite \u4f1a\u628a\u8fd9\u51e0\u4e2a\u914d\u7f6e\u5bf9\u8c61\u8fdb\u884c\u5408\u5e76  "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#config-%E6%96%B0%E5%BB%BAplugins-vitealiases-js"},"config")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#transformindexhtml-%E6%96%B0%E5%BB%BAplugins-createhtmlplugin-js"},"transformIndexHtml")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#configureserver-%E6%96%B0%E5%BB%BAplugins-vitepluginmock-js"},"configureServer"))),(0,r.kt)("h3",{id:"\u624b\u5199-plugins"},"\u624b\u5199 plugins"),(0,r.kt)("h3",{id:"config\u65b0\u5efapluginsvitealiasesjs"},(0,r.kt)("inlineCode",{parentName:"h3"},"config"),":\u65b0\u5efa",(0,r.kt)("inlineCode",{parentName:"h3"},"plugins/ViteAliases.js")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript{32-48}"},"import fs from 'fs'\nimport path, { dirname } from 'path'\n\nfunction diffDirAndFile(dirs = [], basePath = '') {\n    const result = {\n        dirs: [],\n        files: [],\n    }\n    dirs.forEach((name) => {\n        const currentFileStat = fs.statSync(path.resolve(__dirname, basePath + '/' + name))\n        if (currentFileStat.isDirectory()) {\n            result.dirs.push(name)\n        } else {\n            result.files.push(name)\n        }\n    })\n    return result\n}\n\nfunction getTotalSrcDir() {\n    const result = fs.readdirSync(path.resolve(__dirname, '../src'))\n    const diffResult = diffDirAndFile(result, '../src')\n    const resolveAliasesObj = {}\n    diffResult.dirs.forEach((dirname) => {\n        const key = `@${dirname}`\n        const absPath = path.resolve(__dirname, '../src/' + dirname)\n        resolveAliasesObj[key] = absPath\n    })\n    return resolveAliasesObj\n}\n\nexport default () => {\n    return {\n        config(config, env) {\n            // config:\u76ee\u524d\u7684\u4e00\u4e2a\u914d\u7f6e\u5bf9\u8c61\n            // env:mode(string),command(string)\n            // config\u51fd\u6570\u53ef\u4ee5\u8fd4\u56de\u4e00\u4e2a\u5bf9\u8c61\uff0c\u8fd9\u4e2a\u5bf9\u8c61\u662f\u90e8\u5206\u7684viteconfig\u914d\u7f6e(\u8981\u4fee\u6539\u7684\u90e8\u5206)\n            return {\n                resolve: {\n                    alias: {\n                        '@': path.resolve(__dirname, '../src'),\n                        ...getTotalSrcDir(),\n                    },\n                },\n            }\n        },\n    }\n}\n")),(0,r.kt)("p",null,"\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"vite.config.js"),"\u4f7f\u7528"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript{2,5}"},'import { defineConfig } from "vite";\nimport ViteAliases from "./plugins/ViteAliases";\n\nexport default defineConfig({\n  plugins:[ViteAliases()],\n})\n')),(0,r.kt)("h3",{id:"transformindexhtml\u65b0\u5efapluginscreatehtmlpluginjs"},(0,r.kt)("inlineCode",{parentName:"h3"},"transformIndexHtml"),":\u65b0\u5efa",(0,r.kt)("inlineCode",{parentName:"h3"},"plugins/CreateHtmlPlugin.js")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"export default (options) => {\n    return {\n        transformIndexHtml: {\n            enforce: 'pre',\n            transform: (html, ctx) => {\n                return html.replace(/<%= title %>/g, options.inject.data.title)\n            },\n        },\n    }\n}\n")),(0,r.kt)("p",null,"\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"vite.config.js"),"\u4f7f\u7528"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript{2,5}"},'import { defineConfig } from "vite";\nimport ViteAliases from "./plugins/ViteAliases";\n\nexport default defineConfig({\n  plugins:[\n    CreateHtmlPugin({\n            inject: {\n                data: {\n                    title: \'\u6d4b\u8bd5\',\n                },\n            },\n        }),\n  ],\n})\n')),(0,r.kt)("h3",{id:"configureserver\u65b0\u5efapluginsvitepluginmockjs"},(0,r.kt)("inlineCode",{parentName:"h3"},"configureServer"),":\u65b0\u5efa",(0,r.kt)("inlineCode",{parentName:"h3"},"plugins/VitePluginMock.js")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import fs from 'fs'\nimport path from 'path'\nimport { pathToFileURL } from 'url'\nasync function mockResult() {\n    const mockStat = fs.statSync('mock')\n    const isDirectory = mockStat.isDirectory()\n    if (isDirectory) {\n        const mockUrl = path.resolve(process.cwd(), 'mock/index.js')\n        const result = await import(pathToFileURL(mockUrl).toString()).then((res) => res.default)\n        return result\n    }\n}\nexport default () => {\n    return {\n        async configureServer(server) {\n            const mockResults = await mockResult()\n            server.middlewares.use((req, res, next) => {\n                if (req.url == '/api/users') {\n                    const mockItem = mockResults.find((mockItem) => mockItem.url === req.url)\n                    if (mockItem) {\n                        const resData = mockItem.response(req)\n                        res.end(JSON.stringify(resData))\n                    }\n                } else {\n                    next()\n                }\n            })\n        },\n    }\n}\n")),(0,r.kt)("p",null,"\u540c\u4e0a\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"vite.config.js"),"\u4f7f\u7528"),(0,r.kt)("h2",{id:"typescript"},(0,r.kt)("a",{parentName:"h2",href:"https://vitejs.dev/guide/features.html#typescript"},"typescript")),(0,r.kt)("h3",{id:"\u51c6\u786e\u63d0\u793a"},"\u51c6\u786e\u63d0\u793a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5f00\u53d1\u5728\u9875\u9762\u5c55\u793a ts \u62a5\u9519\u63d0\u793a",(0,r.kt)("br",{parentName:"li"}),"\u5b89\u88c5",(0,r.kt)("inlineCode",{parentName:"li"},"vite-plugin-checker"),"\u63d2\u4ef6(",(0,r.kt)("inlineCode",{parentName:"li"},"npm i vite-plugin-checker -D"),")\uff0c\u5728",(0,r.kt)("inlineCode",{parentName:"li"},"vite.config.ts"),"\u5f15\u5165\u4f7f\u7528")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts{2,4}"},"import { defineConfig } from 'vite'\nimport checker from 'vite-plugin-checker'\nexport default defineConfig({\n    plugins: [checker({ typescript: true })],\n})\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"build \u662f\u63d0\u793a\u62a5\u9519")),(0,r.kt)("p",null,"\u5728 npm \u4e2d\u8fd0\u884c",(0,r.kt)("inlineCode",{parentName:"p"},"tsc --noEmit"),"(vue \u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"vue-tsc --noEmit"),")\uff0c\u5982\u4e0b",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json{3}"},'"scripts": {\n  "dev": "vite dev",\n  "build": "tsc --noEmit && vite build",\n  "test": "echo \\"Error: no test specified\\" && exit 1"\n},\n')),(0,r.kt)("h3",{id:"\u914d\u7f6e\u73af\u5883\u53d8\u91cf\u63d0\u793a"},"\u914d\u7f6e\u73af\u5883\u53d8\u91cf\u63d0\u793a"),(0,r.kt)("p",null,"\u65b0\u5efa",(0,r.kt)("inlineCode",{parentName:"p"},"env.d.ts")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'//\u4e09\u659c\u7ebf\u6307\u4ee4\n/// <reference types="vite/client" />\ninterface ImportMetaEnv {\n    readonly VITE_PROXY_URL: string\n}\n')),(0,r.kt)("h2",{id:"\u6784\u5efa\u4f18\u5316"},"\u6784\u5efa\u4f18\u5316"),(0,r.kt)("h3",{id:"\u5206\u5305\u7b56\u7565"},"\u5206\u5305\u7b56\u7565"),(0,r.kt)("p",null,"\u5206\u5305\u5c31\u662f\u628a\u4e00\u4e9b\u4e0d\u4f1a\u5e38\u89c4\u66f4\u65b0\u7684\u6587\u4ef6\uff0c\u8fdb\u884c\u5355\u72ec\u6253\u5305\u5904\u7406"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u914d\u7f6e",(0,r.kt)("inlineCode",{parentName:"li"},"manualChunks"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript{6-14}"},"import { defineConfig } from 'vite'\n\nexport default defineConfig({\n    build: {\n        minify: false,\n        rollupOptions: {\n            output: {\n                manualChunks(id: string) {\n                    if (id.includes('node_modules')) {\n                        return 'vendor'\n                    }\n                },\n            },\n        },\n    },\n})\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528",(0,r.kt)("a",{parentName:"li",href:"https://cn.vitejs.dev/guide/build.html#chunking-strategy"},"splitVendorChunkPlugin"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { defineConfig, splitVendorChunkPlugin } from 'vite'\n\nexport default defineConfig({\n    plugins: [splitVendorChunkPlugin()],\n})\n")),(0,r.kt)("h3",{id:"gzip-\u538b\u7f29"},"gzip \u538b\u7f29"),(0,r.kt)("p",null,"\u5b89\u88c5",(0,r.kt)("a",{parentName:"p",href:"https://github.com/vbenjs/vite-plugin-compression"},"vite-plugin-compression")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript{2,5}"},"import { defineConfig } from 'vite'\nimport viteCompression from 'vite-plugin-compression'\n\nexport default defineConfig({\n  plugins:[viteCompression()],\n})\n")),(0,r.kt)("h3",{id:"cdn"},"cdn"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/vite-plugin-cdn-import"},"vite-plugin-compression")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript{2,6-14}"},"import { defineConfig, splitVendorChunkPlugin } from 'vite'\nimport importToCDN from 'vite-plugin-cdn-import'\n\nexport default defineConfig({\n    plugins: [\n        importToCDN({\n            modules: [\n                {\n                    name: 'lodash',\n                    var: '_',\n                    path: 'https://cdn.bootcdn.net/ajax/libs/lodash.js/4.17.21/lodash.core.min.js',\n                },\n            ],\n        }),\n    ],\n})\n")))}u.isMDXComponent=!0}}]);