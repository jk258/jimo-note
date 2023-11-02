"use strict";(self.webpackChunkjimo=self.webpackChunkjimo||[]).push([[8200],{5193:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var s=t(5893),i=t(1151);const r={},l="vite",c={id:"\u524d\u7aef/\u6784\u5efa\u5de5\u5177/vite",title:"vite",description:"\u5e38\u7528\u914d\u7f6evite.config.js",source:"@site/docs/\u524d\u7aef/\u6784\u5efa\u5de5\u5177/vite.md",sourceDirName:"\u524d\u7aef/\u6784\u5efa\u5de5\u5177",slug:"/\u524d\u7aef/\u6784\u5efa\u5de5\u5177/vite",permalink:"/jimo-note/docs/\u524d\u7aef/\u6784\u5efa\u5de5\u5177/vite",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u524d\u7aef/\u6784\u5efa\u5de5\u5177/vite.md",tags:[],version:"current",frontMatter:{},sidebar:"webSidebar",previous:{title:"rollup",permalink:"/jimo-note/docs/\u524d\u7aef/\u6784\u5efa\u5de5\u5177/rollup"},next:{title:"webpack5.74.0",permalink:"/jimo-note/docs/\u524d\u7aef/\u6784\u5efa\u5de5\u5177/webpack5.74.0"}},o={},d=[{value:"\u5e38\u7528\u914d\u7f6e<code>vite.config.js</code>",id:"\u5e38\u7528\u914d\u7f6eviteconfigjs",level:2},{value:"\u4f9d\u8d56\u9884\u7ea6\u6784\u5efa",id:"\u4f9d\u8d56\u9884\u7ea6\u6784\u5efa",level:2},{value:"\u5728 vite \u4e2d\u5904\u7406 css",id:"\u5728-vite-\u4e2d\u5904\u7406-css",level:2},{value:"<code>vite.config.js</code>\u4e2d css \u914d\u7f6e(cssmodule)",id:"viteconfigjs\u4e2d-css-\u914d\u7f6ecssmodule",level:3},{value:"css \u9884\u5904\u7406(sacc/less)",id:"css-\u9884\u5904\u7406saccless",level:3},{value:"postcss",id:"postcss",level:3},{value:"vite \u52a0\u8f7d\u9759\u6001\u8d44\u6e90",id:"vite-\u52a0\u8f7d\u9759\u6001\u8d44\u6e90",level:2},{value:"build",id:"build",level:2},{value:"vite \u63d2\u4ef6",id:"vite-\u63d2\u4ef6",level:2},{value:"\u624b\u5199 plugins",id:"\u624b\u5199-plugins",level:3},{value:"<code>config</code>:\u65b0\u5efa<code>plugins/ViteAliases.js</code>",id:"config\u65b0\u5efapluginsvitealiasesjs",level:3},{value:"<code>transformIndexHtml</code>:\u65b0\u5efa<code>plugins/CreateHtmlPlugin.js</code>",id:"transformindexhtml\u65b0\u5efapluginscreatehtmlpluginjs",level:3},{value:"<code>configureServer</code>:\u65b0\u5efa<code>plugins/VitePluginMock.js</code>",id:"configureserver\u65b0\u5efapluginsvitepluginmockjs",level:3},{value:"typescript",id:"typescript",level:2},{value:"\u51c6\u786e\u63d0\u793a",id:"\u51c6\u786e\u63d0\u793a",level:3},{value:"\u914d\u7f6e\u73af\u5883\u53d8\u91cf\u63d0\u793a",id:"\u914d\u7f6e\u73af\u5883\u53d8\u91cf\u63d0\u793a",level:3},{value:"\u6784\u5efa\u4f18\u5316",id:"\u6784\u5efa\u4f18\u5316",level:2},{value:"\u5206\u5305\u7b56\u7565",id:"\u5206\u5305\u7b56\u7565",level:3},{value:"gzip \u538b\u7f29",id:"gzip-\u538b\u7f29",level:3},{value:"cdn",id:"cdn",level:3}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"vite",children:"vite"}),"\n",(0,s.jsxs)(n.h2,{id:"\u5e38\u7528\u914d\u7f6eviteconfigjs",children:["\u5e38\u7528\u914d\u7f6e",(0,s.jsx)(n.code,{children:"vite.config.js"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"import { defineConfig, splitVendorChunkPlugin } from 'vite'//splitVendorChunkPlugin\u5206\u5305\nimport { fileURLToPath, URL } from 'node:url'\nimport viteCompression from 'vite-plugin-compression'//gzip\u538b\u7f29\n\nexport default defineConfig({\n\tplugins: [splitVendorChunkPlugin(), viteCompression()],\n\tresolve: {\n\t\talias: {\n\t\t\t'@': fileURLToPath(new URL('./src', import.meta.url)),\n\t\t},\n\t},\n\tcss: {\n\t\t//\u5bf9css\u7684\u884c\u4e3a\u8fdb\u884c\u914d\u7f6e\n\t\tmodules: {\n\t\t\tlocalsConvention: 'camelCaseOnly',\n\t\t},\n\t\tdevSourcemap: true, //css sourcemap \uff0c\u7d22\u5f15\u6587\u4ef6\n\t},\n})\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u4f9d\u8d56\u9884\u7ea6\u6784\u5efa",children:"\u4f9d\u8d56\u9884\u7ea6\u6784\u5efa"}),"\n",(0,s.jsxs)(n.p,{children:["\u53d7\u9650 vite \u4f1a\u627e\u5230\u5bf9\u5e94\u7684\u4f9d\u8d56\uff0c\u7136\u540e\u8c03\u7528",(0,s.jsx)(n.strong,{children:"esbuild"}),"(\u5bf9 js \u8bed\u6cd5\u8fdb\u884c\u5904\u7406\u7684\u4e00\u4e2a\u5e93)\uff0c\u5c06\u5176\u4ed6\u89c4\u8303\u7684\u4ee3\u7801\u8f6c\u6362\u6210",(0,s.jsx)(n.strong,{children:"esmodule"}),"\u89c4\u8303\uff0c\u7136\u540e\u653e\u5230\u5f53\u524d\u76ee\u5f55\u4e0b\u7684",(0,s.jsx)(n.code,{children:"node_modules/.vite/deps"}),"\uff0c\u540c\u65f6\u5bf9",(0,s.jsx)(n.strong,{children:"esmodule"}),"\u89c4\u8303\u7684\u5404\u4e2a\u6a21\u5757\u8fdb\u884c\u7edf\u4e00\u96c6\u6210"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u89e3\u51b3\u7684\u95ee\u9898\uff1a"}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u4e0d\u540c\u7684\u7b2c\u4e09\u65b9\u5305\u4f1a\u6709\u4e0d\u540c\u7684\u5bfc\u51fa\u683c\u5f0f(\u8fd9\u4e2a\u662f vite \u6ca1\u6cd5\u7ea6\u675f\u4eba\u5bb6\u7684\u4e8b\u60c5)"}),"\n",(0,s.jsxs)(n.li,{children:["\u5bf9\u8def\u5f84\u7684\u5904\u7406\u4e0a\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528",(0,s.jsx)(n.code,{children:".vite/deps"}),",\u65b9\u4fbf\u8def\u5f84\u91cd\u5199"]}),"\n",(0,s.jsxs)(n.li,{children:["\u7f51\u7edc\u593a\u5b9d\u4f20\u8f93\u7684\u6027\u80fd\u95ee\u9898(\u4e5f\u662f\u539f\u751f",(0,s.jsx)(n.strong,{children:"esmodule"}),"\u89c4\u8303\u4e0d\u6562\u652f\u6301",(0,s.jsx)(n.code,{children:"node_modules"}),"\u7684\u539f\u56e0\u4e4b\u4e00)\uff0c\u6709\u4e86\u4f9d\u8d56\u9884\u6784\u5efa\u4ee5\u540e\u65e0\u8bba\u6709\u591a\u5c11\u7684\u989d\u5916",(0,s.jsx)(n.code,{children:"export"}),"\u548c",(0,s.jsx)(n.code,{children:"import"}),",vite \u90fd\u4f1a\u5c3d\u53ef\u80fd\u7684\u5c06\u4ed6\u4eec\u8fdb\u884c\u96c6\u6210\u6700\u540e\u53ea\u751f\u6210\u4e00\u4e2a\u6216\u51e0\u4e2a\u6a21\u5757"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u5728-vite-\u4e2d\u5904\u7406-css",children:"\u5728 vite \u4e2d\u5904\u7406 css"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"vite"}),"\u5929\u751f\u5c31\u652f\u6301\u5bf9",(0,s.jsx)(n.code,{children:"css"}),"\u6587\u4ef6\u7684\u76f4\u63a5\u5904\u7406"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"vite"}),"\u5728\u8bfb\u53d6\u5230",(0,s.jsx)(n.code,{children:"main.js"}),"\u4e2d\u5f15\u7528\u5230\u4e86",(0,s.jsx)(n.code,{children:"index.css"})]}),"\n",(0,s.jsxs)(n.li,{children:["\u76f4\u63a5\u4f7f\u7528",(0,s.jsx)(n.code,{children:"fs"}),"\u6a21\u5757\u53bb\u8bfb\u53d6",(0,s.jsx)(n.code,{children:"index.css"}),"\u4e2d\u6587\u4ef6\u5185\u5bb9"]}),"\n",(0,s.jsxs)(n.li,{children:["\u76f4\u63a5\u521b\u5efa\u4e00\u4e2a",(0,s.jsx)(n.code,{children:"style"}),"\u6807\u7b7e\uff0c\u5c06",(0,s.jsx)(n.code,{children:"index.css"}),"\u4e2d\u6587\u4ef6\u5185\u5bb9\u76f4\u63a5 copy \u8fdb",(0,s.jsx)(n.code,{children:"style"}),"\u6807\u7b7e\u91cc"]}),"\n",(0,s.jsxs)(n.li,{children:["\u5c06",(0,s.jsx)(n.code,{children:"style"}),"\u6807\u7b7e\u63d2\u5165\u5230",(0,s.jsx)(n.code,{children:"index.html"}),"\u7684",(0,s.jsx)(n.code,{children:"head"}),"\u4e2d"]}),"\n",(0,s.jsxs)(n.li,{children:["\u5c06\u8be5 css \u6587\u4ef6\u4e2d\u7684\u5185\u5bb9\u76f4\u63a5\u66ff\u6362\u4e3a js \u811a\u672c(\u65b9\u4fbf\u70ed\u66f4\u65b0\u6216\u8005 css \u6a21\u5757\u5316),\u540c\u65f6\u8bbe\u7f6e",(0,s.jsx)(n.code,{children:"Content-Type"}),"\u4e3a js \u4ece\u800c\u8ba9\u6d4f\u89c8\u5668\u4ee5 js \u811a\u672c\u7684\u5f62\u5f0f\u6765\u6267\u884c\u8be5 css \u540e\u7f00\u7684\u6587\u4ef6\n::: warning Tip\n",(0,s.jsx)(n.code,{children:"cssmodule"}),"\u89e3\u51b3\u6837\u5f0f\u88ab\u8986\u76d6(\u56e0\u4e3a\u7c7b\u540d\u91cd\u590d)\n:::"]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"viteconfigjs\u4e2d-css-\u914d\u7f6ecssmodule",children:[(0,s.jsx)(n.code,{children:"vite.config.js"}),"\u4e2d css \u914d\u7f6e(cssmodule)"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"localsConvention"}),":\u4fee\u6539\u751f\u6210\u7684\u914d\u7f6e\u5bf9\u8c61\u7684 key \u7684\u5c55\u793a\u5f62\u5f0f(\u9a7c\u5cf0\u8fd8\u662f\u4e2d\u5212\u7ebf\u5f62\u5f0f)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"scopeBehaviour"}),":\u914d\u7f6e\u5f53\u524d\u7684\u6a21\u5757\u5316\u884c\u4e3a\u662f\u6a21\u5757\u5316\u8fd8\u662f\u5168\u5c40\u5316(\u6709 hash \u5c31\u662f\u5f00\u542f\u4e86\u6a21\u5757\u5316\u7684\u4e00\u4e2a\u6807\u5fd7\uff0c\u56e0\u4e3a\u4ed6\u53ef\u4ee5\u4fdd\u8bc1\u4ea7\u751f\u4e0d\u540c\u7684 hash \u503c\u6765\u63a7\u5236\u6837\u5f0f\u7c7b\u540d\u4e0d\u88ab\u8986\u76d6)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"generateScopedName"}),":\u751f\u6210\u7684\u7c7b\u540d\u89c4\u5219(\u51fd\u6570\u6216\u5b57\u7b26\u4e32)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"hashPrefix"}),":\u751f\u6210 hash \u4f1a\u6839\u636e\u7c7b\u540d+\u4e00\u4e9b\u5176\u4ed6\u7684\u5b57\u7b26\u4e32(\u6587\u4ef6\u540d+\u5185\u90e8\u968f\u673a\u751f\u6210\u4e00\u4e2a\u5b57\u7b26\u4e32)\u8fdb\u884c\u751f\u6210,\u5982\u679c\u60f3\u8981\u751f\u6210 hash \u66f4\u52a0\u72ec\u7279\u4e00\u70b9,\u53ef\u4ee5\u914d\u7f6e",(0,s.jsx)(n.code,{children:"hashPrefix"}),",\u914d\u7f6e\u7684\u8fd9\u4e2a\u5b57\u7b26\u4e32\u4f1a\u53c2\u4e0e\u5230\u6700\u7ec8 hash \u751f\u6210(hash:\u53ea\u8981\u5b57\u7b26\u4e32\u6709\u4e00\u4e2a\u5b57\u4e0d\u4e00\u6837\uff0c\u90a3\u4e48\u751f\u6210\u7684 hash \u5c31\u5b8c\u5168\u4e0d\u4e00\u6837,\u4f46\u662f\u53ea\u8981\u5b57\u7b26\u4e32\u5b8c\u5168\u4e00\u6837,\u751f\u6210\u7684 hash \u5c31\u4f1a\u4e00\u6837)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"globalModulePaths"}),":\u4ee3\u8868\u4e0d\u60f3\u53c2\u4e0e\u5230 css \u6a21\u5757\u5316\u7684\u8def\u5f84\nvite.config.js"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript{4-14}",children:"import { defineConfig } from \"vite\";\nexport default defineConfig({\n  css: {//\u5bf9css\u7684\u884c\u4e3a\u8fdb\u884c\u914d\u7f6e\n    modules: {\n      localsConvention: 'camelCaseOnly',\n      scopeBehaviour: 'local',\n      generateScopedName:'[name]-[local]-[hash:5]',\n      // generateScopedName: (name, fileName, css) => {\n      //   console.log(name, fileName, css);\n      //   return name+Math.random().toString().replace('.','')\n      // }\n      hashPrefix: 'hello',\n      globalModulePaths:[]\n    }\n  }\n})\n"})}),"\n",(0,s.jsx)(n.h3,{id:"css-\u9884\u5904\u7406saccless",children:"css \u9884\u5904\u7406(sacc/less)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript{4-12}",children:"import { defineConfig } from \"vite\";\nexport default defineConfig({\n  css: {\n    preprocessorOptions: {//css\u9884\u5904\u7406\n      less: {\n        math: 'always',\n        globalVars: {\n          mainColor: 'red'\n        }\n      }\n    },\n    devSourcemap:true//css sourcemap \uff0c\u7d22\u5f15\u6587\u4ef6\n  }\n})\n"})}),"\n",(0,s.jsx)(n.h3,{id:"postcss",children:"postcss"}),"\n",(0,s.jsx)(n.p,{children:"postcss.config.js"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"import postcssPresetEnv from 'postcss-preset-env' //postcss\u9884\u8bbe\nimport { fileURLToPath, URL } from 'node:url'\n\nexport default {\n\tplugins: [\n\t\tpostcssPresetEnv({\n\t\t\timportFrom: fileURLToPath(new URL('./src/common.css', import.meta.url)),\n\t\t}),\n\t],\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"vite-\u52a0\u8f7d\u9759\u6001\u8d44\u6e90",children:"vite \u52a0\u8f7d\u9759\u6001\u8d44\u6e90"}),"\n",(0,s.jsx)(n.p,{children:"vite.config.js"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript{2,6-8}",children:"import { defineConfig } from \"vite\";\nimport { fileURLToPath, URL } from 'node:url'\n\nexport default defineConfig({\n  resolve: {\n    alias: {\n      '@': fileURLToPath(new URL('./src', import.meta.url))\n    }\n  },\n})\n"})}),"\n",(0,s.jsx)(n.h2,{id:"build",children:"build"}),"\n",(0,s.jsx)(n.p,{children:"vite.config.js"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript{4-13}",children:"import { defineConfig } from \"vite\";\n\nexport default defineConfig({\n  build: {\n    rollupOptions: {//\u914d\u7f6erollup\u7684\u4e00\u4e9b\u6784\u5efa\u7b56\u7565\n      output: {//\u63a7\u5236\u8f93\u51fa\n        assetFileNames:'[hash].[name].[ext]'\n      }\n    },\n    assetsInlineLimit: 4094000,//4000kb\n    outDir: 'dist',\n    assetsDir:'static'\n  }\n})\n\n"})}),"\n",(0,s.jsx)(n.h2,{id:"vite-\u63d2\u4ef6",children:(0,s.jsx)(n.a,{href:"https://cn.vitejs.dev/guide/api-plugin.html#vite-specific-hooks",children:"vite \u63d2\u4ef6"})}),"\n",(0,s.jsxs)(n.p,{children:["\u6574\u4e2a\u63d2\u4ef6\u5c31\u662f\u5728 vite \u7684\u751f\u547d\u5468\u671f\u7684\u4e0d\u540c\u9636\u6bb5\u53bb\u505a\u4e0d\u540c\u7684\u4e8b\u60c5(\u5c31\u662f\u62a2\u5728 vite \u6267\u884c\u914d\u7f6e\u6587\u4ef6\u4e4b\u524d\u53bb\u6539\u5199\u914d\u7f6e\u6587\u4ef6)",(0,s.jsx)(n.br,{}),"\n","\u901a\u8fc7",(0,s.jsx)(n.code,{children:"vite.config.js"}),"\u8fd4\u56de\u51fa\u53bb\u7684\u914d\u7f6e\u5bf9\u8c61\u4ee5\u53ca\u5728\u63d2\u4ef6\u7684",(0,s.jsx)(n.code,{children:"config"}),"\u751f\u547d\u5468\u671f\u4e2d\u8fd4\u56de\u7684\u5bf9\u8c61\u90fd\u4e0d\u662f\u6700\u7ec8\u7684\u914d\u7f6e\u5bf9\u8c61,vite \u4f1a\u628a\u8fd9\u51e0\u4e2a\u914d\u7f6e\u5bf9\u8c61\u8fdb\u884c\u5408\u5e76"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#config-%E6%96%B0%E5%BB%BAplugins-vitealiases-js",children:"config"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#transformindexhtml-%E6%96%B0%E5%BB%BAplugins-createhtmlplugin-js",children:"transformIndexHtml"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#configureserver-%E6%96%B0%E5%BB%BAplugins-vitepluginmock-js",children:"configureServer"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u624b\u5199-plugins",children:"\u624b\u5199 plugins"}),"\n",(0,s.jsxs)(n.h3,{id:"config\u65b0\u5efapluginsvitealiasesjs",children:[(0,s.jsx)(n.code,{children:"config"}),":\u65b0\u5efa",(0,s.jsx)(n.code,{children:"plugins/ViteAliases.js"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript{32-48}",children:"import fs from 'fs'\nimport path, { dirname } from 'path'\n\nfunction diffDirAndFile(dirs = [], basePath = '') {\n\tconst result = {\n\t\tdirs: [],\n\t\tfiles: [],\n\t}\n\tdirs.forEach((name) => {\n\t\tconst currentFileStat = fs.statSync(path.resolve(__dirname, basePath + '/' + name))\n\t\tif (currentFileStat.isDirectory()) {\n\t\t\tresult.dirs.push(name)\n\t\t} else {\n\t\t\tresult.files.push(name)\n\t\t}\n\t})\n\treturn result\n}\n\nfunction getTotalSrcDir() {\n\tconst result = fs.readdirSync(path.resolve(__dirname, '../src'))\n\tconst diffResult = diffDirAndFile(result, '../src')\n\tconst resolveAliasesObj = {}\n\tdiffResult.dirs.forEach((dirname) => {\n\t\tconst key = `@${dirname}`\n\t\tconst absPath = path.resolve(__dirname, '../src/' + dirname)\n\t\tresolveAliasesObj[key] = absPath\n\t})\n\treturn resolveAliasesObj\n}\n\nexport default () => {\n\treturn {\n\t\tconfig(config, env) {\n\t\t\t// config:\u76ee\u524d\u7684\u4e00\u4e2a\u914d\u7f6e\u5bf9\u8c61\n\t\t\t// env:mode(string),command(string)\n\t\t\t// config\u51fd\u6570\u53ef\u4ee5\u8fd4\u56de\u4e00\u4e2a\u5bf9\u8c61\uff0c\u8fd9\u4e2a\u5bf9\u8c61\u662f\u90e8\u5206\u7684viteconfig\u914d\u7f6e(\u8981\u4fee\u6539\u7684\u90e8\u5206)\n\t\t\treturn {\n\t\t\t\tresolve: {\n\t\t\t\t\talias: {\n\t\t\t\t\t\t'@': path.resolve(__dirname, '../src'),\n\t\t\t\t\t\t...getTotalSrcDir(),\n\t\t\t\t\t},\n\t\t\t\t},\n\t\t\t}\n\t\t},\n\t}\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5728",(0,s.jsx)(n.code,{children:"vite.config.js"}),"\u4f7f\u7528"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript{2,5}",children:'import { defineConfig } from "vite";\nimport ViteAliases from "./plugins/ViteAliases";\n\nexport default defineConfig({\n  plugins:[ViteAliases()],\n})\n'})}),"\n",(0,s.jsxs)(n.h3,{id:"transformindexhtml\u65b0\u5efapluginscreatehtmlpluginjs",children:[(0,s.jsx)(n.code,{children:"transformIndexHtml"}),":\u65b0\u5efa",(0,s.jsx)(n.code,{children:"plugins/CreateHtmlPlugin.js"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"export default (options) => {\n\treturn {\n\t\ttransformIndexHtml: {\n\t\t\tenforce: 'pre',\n\t\t\ttransform: (html, ctx) => {\n\t\t\t\treturn html.replace(/<%= title %>/g, options.inject.data.title)\n\t\t\t},\n\t\t},\n\t}\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5728",(0,s.jsx)(n.code,{children:"vite.config.js"}),"\u4f7f\u7528"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript{2,5}",children:'import { defineConfig } from "vite";\nimport ViteAliases from "./plugins/ViteAliases";\n\nexport default defineConfig({\n  plugins:[\n    CreateHtmlPugin({\n\t\t\tinject: {\n\t\t\t\tdata: {\n\t\t\t\t\ttitle: \'\u6d4b\u8bd5\',\n\t\t\t\t},\n\t\t\t},\n\t\t}),\n  ],\n})\n'})}),"\n",(0,s.jsxs)(n.h3,{id:"configureserver\u65b0\u5efapluginsvitepluginmockjs",children:[(0,s.jsx)(n.code,{children:"configureServer"}),":\u65b0\u5efa",(0,s.jsx)(n.code,{children:"plugins/VitePluginMock.js"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"import fs from 'fs'\nimport path from 'path'\nimport { pathToFileURL } from 'url'\nasync function mockResult() {\n\tconst mockStat = fs.statSync('mock')\n\tconst isDirectory = mockStat.isDirectory()\n\tif (isDirectory) {\n\t\tconst mockUrl = path.resolve(process.cwd(), 'mock/index.js')\n\t\tconst result = await import(pathToFileURL(mockUrl).toString()).then((res) => res.default)\n\t\treturn result\n\t}\n}\nexport default () => {\n\treturn {\n\t\tasync configureServer(server) {\n\t\t\tconst mockResults = await mockResult()\n\t\t\tserver.middlewares.use((req, res, next) => {\n\t\t\t\tif (req.url == '/api/users') {\n\t\t\t\t\tconst mockItem = mockResults.find((mockItem) => mockItem.url === req.url)\n\t\t\t\t\tif (mockItem) {\n\t\t\t\t\t\tconst resData = mockItem.response(req)\n\t\t\t\t\t\tres.end(JSON.stringify(resData))\n\t\t\t\t\t}\n\t\t\t\t} else {\n\t\t\t\t\tnext()\n\t\t\t\t}\n\t\t\t})\n\t\t},\n\t}\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u540c\u4e0a\u5728",(0,s.jsx)(n.code,{children:"vite.config.js"}),"\u4f7f\u7528"]}),"\n",(0,s.jsx)(n.h2,{id:"typescript",children:(0,s.jsx)(n.a,{href:"https://vitejs.dev/guide/features.html#typescript",children:"typescript"})}),"\n",(0,s.jsx)(n.h3,{id:"\u51c6\u786e\u63d0\u793a",children:"\u51c6\u786e\u63d0\u793a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u5f00\u53d1\u5728\u9875\u9762\u5c55\u793a ts \u62a5\u9519\u63d0\u793a",(0,s.jsx)(n.br,{}),"\n","\u5b89\u88c5",(0,s.jsx)(n.code,{children:"vite-plugin-checker"}),"\u63d2\u4ef6(",(0,s.jsx)(n.code,{children:"npm i vite-plugin-checker -D"}),")\uff0c\u5728",(0,s.jsx)(n.code,{children:"vite.config.ts"}),"\u5f15\u5165\u4f7f\u7528"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts{2,4}",children:"import { defineConfig } from 'vite'\nimport checker from 'vite-plugin-checker'\nexport default defineConfig({\n\tplugins: [checker({ typescript: true })],\n})\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"build \u662f\u63d0\u793a\u62a5\u9519"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5728 npm \u4e2d\u8fd0\u884c",(0,s.jsx)(n.code,{children:"tsc --noEmit"}),"(vue \u4e3a",(0,s.jsx)(n.code,{children:"vue-tsc --noEmit"}),")\uff0c\u5982\u4e0b",(0,s.jsx)(n.code,{children:"package.json"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json{3}",children:'"scripts": {\n  "dev": "vite dev",\n  "build": "tsc --noEmit && vite build",\n  "test": "echo \\"Error: no test specified\\" && exit 1"\n},\n'})}),"\n",(0,s.jsx)(n.h3,{id:"\u914d\u7f6e\u73af\u5883\u53d8\u91cf\u63d0\u793a",children:"\u914d\u7f6e\u73af\u5883\u53d8\u91cf\u63d0\u793a"}),"\n",(0,s.jsxs)(n.p,{children:["\u65b0\u5efa",(0,s.jsx)(n.code,{children:"env.d.ts"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'//\u4e09\u659c\u7ebf\u6307\u4ee4\n/// <reference types="vite/client" />\ninterface ImportMetaEnv {\n\treadonly VITE_PROXY_URL: string\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u6784\u5efa\u4f18\u5316",children:"\u6784\u5efa\u4f18\u5316"}),"\n",(0,s.jsx)(n.h3,{id:"\u5206\u5305\u7b56\u7565",children:"\u5206\u5305\u7b56\u7565"}),"\n",(0,s.jsx)(n.p,{children:"\u5206\u5305\u5c31\u662f\u628a\u4e00\u4e9b\u4e0d\u4f1a\u5e38\u89c4\u66f4\u65b0\u7684\u6587\u4ef6\uff0c\u8fdb\u884c\u5355\u72ec\u6253\u5305\u5904\u7406"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u914d\u7f6e",(0,s.jsx)(n.code,{children:"manualChunks"})]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript{6-14}",children:"import { defineConfig } from 'vite'\n\nexport default defineConfig({\n\tbuild: {\n\t\tminify: false,\n\t\trollupOptions: {\n\t\t\toutput: {\n\t\t\t\tmanualChunks(id: string) {\n\t\t\t\t\tif (id.includes('node_modules')) {\n\t\t\t\t\t\treturn 'vendor'\n\t\t\t\t\t}\n\t\t\t\t},\n\t\t\t},\n\t\t},\n\t},\n})\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u4f7f\u7528",(0,s.jsx)(n.a,{href:"https://cn.vitejs.dev/guide/build.html#chunking-strategy",children:"splitVendorChunkPlugin"})]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { defineConfig, splitVendorChunkPlugin } from 'vite'\n\nexport default defineConfig({\n\tplugins: [splitVendorChunkPlugin()],\n})\n"})}),"\n",(0,s.jsx)(n.h3,{id:"gzip-\u538b\u7f29",children:"gzip \u538b\u7f29"}),"\n",(0,s.jsxs)(n.p,{children:["\u5b89\u88c5",(0,s.jsx)(n.a,{href:"https://github.com/vbenjs/vite-plugin-compression",children:"vite-plugin-compression"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript{2,5}",children:"import { defineConfig } from 'vite'\nimport viteCompression from 'vite-plugin-compression'\n\nexport default defineConfig({\n  plugins:[viteCompression()],\n})\n"})}),"\n",(0,s.jsx)(n.h3,{id:"cdn",children:"cdn"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/vite-plugin-cdn-import",children:"vite-plugin-compression"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript{2,6-14}",children:"import { defineConfig, splitVendorChunkPlugin } from 'vite'\nimport importToCDN from 'vite-plugin-cdn-import'\n\nexport default defineConfig({\n\tplugins: [\n\t\timportToCDN({\n\t\t\tmodules: [\n\t\t\t\t{\n\t\t\t\t\tname: 'lodash',\n\t\t\t\t\tvar: '_',\n\t\t\t\t\tpath: 'https://cdn.bootcdn.net/ajax/libs/lodash.js/4.17.21/lodash.core.min.js',\n\t\t\t\t},\n\t\t\t],\n\t\t}),\n\t],\n})\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>l});var s=t(7294);const i={},r=s.createContext(i);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);