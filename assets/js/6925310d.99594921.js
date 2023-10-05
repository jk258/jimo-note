"use strict";(self.webpackChunkjimo=self.webpackChunkjimo||[]).push([[1315],{3905:(e,t,l)=>{l.d(t,{Zo:()=>f,kt:()=>m});var n=l(7294);function i(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function a(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){i(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function o(e,t){if(null==e)return{};var l,n,i=function(e,t){if(null==e)return{};var l,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||(i[l]=e[l]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(i[l]=e[l])}return i}var p=n.createContext({}),u=function(e){var t=n.useContext(p),l=t;return e&&(l="function"==typeof e?e(t):a(a({},t),e)),l},f=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var l=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,f=o(e,["components","mdxType","originalType","parentName"]),d=u(l),k=i,m=d["".concat(p,".").concat(k)]||d[k]||s[k]||r;return l?n.createElement(m,a(a({ref:t},f),{},{components:l})):n.createElement(m,a({ref:t},f))}));function m(e,t){var l=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=l.length,a=new Array(r);a[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:i,a[1]=o;for(var u=2;u<r;u++)a[u]=l[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,l)}k.displayName="MDXCreateElement"},3718:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>s,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var n=l(7462),i=(l(7294),l(3905));const r={},a="file(\u6587\u4ef6)\u65b9\u6cd5",o={unversionedId:"python/\u57fa\u7840\u6559\u7a0b/1.6file",id:"python/\u57fa\u7840\u6559\u7a0b/1.6file",title:"file(\u6587\u4ef6)\u65b9\u6cd5",description:"open() \u65b9\u6cd5",source:"@site/docs/python/\u57fa\u7840\u6559\u7a0b/1.6file.md",sourceDirName:"python/\u57fa\u7840\u6559\u7a0b",slug:"/python/\u57fa\u7840\u6559\u7a0b/1.6file",permalink:"/jimo-note/docs/python/\u57fa\u7840\u6559\u7a0b/1.6file",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/python/\u57fa\u7840\u6559\u7a0b/1.6file.md",tags:[],version:"current",frontMatter:{},sidebar:"pythonSidebar",previous:{title:"\u6a21\u5757",permalink:"/jimo-note/docs/python/\u57fa\u7840\u6559\u7a0b/1.5\u6a21\u5757"},next:{title:"os \u6587\u4ef6/\u76ee\u5f55\u65b9\u6cd5",permalink:"/jimo-note/docs/python/\u57fa\u7840\u6559\u7a0b/1.7os"}},p={},u=[{value:"open() \u65b9\u6cd5",id:"open-\u65b9\u6cd5",level:2},{value:"file \u5bf9\u8c61",id:"file-\u5bf9\u8c61",level:2},{value:"file.close()",id:"fileclose",level:3},{value:"file.flush()",id:"fileflush",level:3},{value:"file.fileno()",id:"filefileno",level:3},{value:"file.isatty()",id:"fileisatty",level:3},{value:"file.isatty()",id:"fileisatty-1",level:3},{value:"file.read(size)",id:"filereadsize",level:3},{value:"file.readline(size)",id:"filereadlinesize",level:3},{value:"file.readlines(sizeint)",id:"filereadlinessizeint",level:3},{value:"*\u4ecefile\u4e2d\u8bfb\u53d6\u5230\u6bcf\u4e00\u884c\u6570\u636e\uff0c\u5faa\u73affile",id:"\u4ecefile\u4e2d\u8bfb\u53d6\u5230\u6bcf\u4e00\u884c\u6570\u636e\u5faa\u73affile",level:3},{value:"file.seek(offset, whence)",id:"fileseekoffset-whence",level:3},{value:"file.tell()",id:"filetell",level:3},{value:"file.truncate(size)",id:"filetruncatesize",level:3},{value:"file.write(str)",id:"filewritestr",level:3},{value:"file.writelines(sequence)",id:"filewritelinessequence",level:3},{value:"with",id:"with",level:2},{value:"\u6587\u4ef6\u590d\u5236",id:"\u6587\u4ef6\u590d\u5236",level:2},{value:"\u6587\u4ef6\u4fee\u6539",id:"\u6587\u4ef6\u4fee\u6539",level:2}],f={toc:u},d="wrapper";function s(e){let{components:t,...l}=e;return(0,i.kt)(d,(0,n.Z)({},f,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"file\u6587\u4ef6\u65b9\u6cd5"},"file(\u6587\u4ef6)\u65b9\u6cd5"),(0,i.kt)("h2",{id:"open-\u65b9\u6cd5"},"open() \u65b9\u6cd5"),(0,i.kt)("p",null,"Python open() \u65b9\u6cd5\u7528\u4e8e\u6253\u5f00\u4e00\u4e2a\u6587\u4ef6\uff0c\u5e76\u8fd4\u56de\u6587\u4ef6\u5bf9\u8c61\u3002"),(0,i.kt)("p",null,"\u5728\u5bf9\u6587\u4ef6\u8fdb\u884c\u5904\u7406\u8fc7\u7a0b\u90fd\u9700\u8981\u4f7f\u7528\u5230\u8fd9\u4e2a\u51fd\u6570\uff0c\u5982\u679c\u8be5\u6587\u4ef6\u65e0\u6cd5\u88ab\u6253\u5f00\uff0c\u4f1a\u629b\u51fa OSError\u3002"),(0,i.kt)("p",null,"\u6ce8\u610f\uff1a\u4f7f\u7528 open() \u65b9\u6cd5\u4e00\u5b9a\u8981\u4fdd\u8bc1\u5173\u95ed\u6587\u4ef6\u5bf9\u8c61\uff0c\u5373\u8c03\u7528 close() \u65b9\u6cd5\u3002"),(0,i.kt)("p",null,"open() \u51fd\u6570\u5e38\u7528\u5f62\u5f0f\u662f\u63a5\u6536\u4e24\u4e2a\u53c2\u6570\uff1a\u6587\u4ef6\u540d(file)\u548c\u6a21\u5f0f(mode)\u3002"),(0,i.kt)("p",null,"\u5b8c\u6574\u7684\u8bed\u6cd5\u683c\u5f0f\u4e3a\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"open('file', mode='r', buffering=-1, encoding=None, errors=None, newline=None, closefd=True, opener=None)\n")),(0,i.kt)("p",null,"\u53c2\u6570\u8bf4\u660e:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"file: \u5fc5\u9700\uff0c\u6587\u4ef6\u8def\u5f84\uff08\u76f8\u5bf9\u6216\u8005\u7edd\u5bf9\u8def\u5f84\uff09\u3002"),(0,i.kt)("li",{parentName:"ul"},"mode: \u53ef\u9009\uff0c\u6587\u4ef6\u6253\u5f00\u6a21\u5f0f"),(0,i.kt)("li",{parentName:"ul"},"buffering: \u8bbe\u7f6e\u7f13\u51b2"),(0,i.kt)("li",{parentName:"ul"},"encoding: \u4e00\u822c\u4f7f\u7528 utf8"),(0,i.kt)("li",{parentName:"ul"},"errors: \u62a5\u9519\u7ea7\u522b"),(0,i.kt)("li",{parentName:"ul"},"newline: \u533a\u5206\u6362\u884c\u7b26"),(0,i.kt)("li",{parentName:"ul"},"closefd: \u4f20\u5165\u7684 file \u53c2\u6570\u7c7b\u578b"),(0,i.kt)("li",{parentName:"ul"},"opener: \u8bbe\u7f6e\u81ea\u5b9a\u4e49\u5f00\u542f\u5668\uff0c\u5f00\u542f\u5668\u7684\u8fd4\u56de\u503c\u5fc5\u987b\u662f\u4e00\u4e2a\u6253\u5f00\u7684\u6587\u4ef6\u63cf\u8ff0\u7b26\u3002")),(0,i.kt)("p",null,"mode \u53c2\u6570\u6709\uff1a"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u6a21\u5f0f"),(0,i.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"t"),(0,i.kt)("td",{parentName:"tr",align:null},"\u6587\u672c\u6a21\u5f0f (\u9ed8\u8ba4)\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"x"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5199\u6a21\u5f0f\uff0c\u65b0\u5efa\u4e00\u4e2a\u6587\u4ef6\uff0c\u5982\u679c\u8be5\u6587\u4ef6\u5df2\u5b58\u5728\u5219\u4f1a\u62a5\u9519\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"b"),(0,i.kt)("td",{parentName:"tr",align:null},"\u4e8c\u8fdb\u5236\u6a21\u5f0f\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"+"),(0,i.kt)("td",{parentName:"tr",align:null},"\u6253\u5f00\u4e00\u4e2a\u6587\u4ef6\u8fdb\u884c\u66f4\u65b0(\u53ef\u8bfb\u53ef\u5199)\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"r"),(0,i.kt)("td",{parentName:"tr",align:null},"\u4ee5\u53ea\u8bfb\u65b9\u5f0f\u6253\u5f00\u6587\u4ef6\u3002\u6587\u4ef6\u7684\u6307\u9488\u5c06\u4f1a\u653e\u5728\u6587\u4ef6\u7684\u5f00\u5934\u3002\u8fd9\u662f\u9ed8\u8ba4\u6a21\u5f0f\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"rb"),(0,i.kt)("td",{parentName:"tr",align:null},"\u4ee5\u4e8c\u8fdb\u5236\u683c\u5f0f\u6253\u5f00\u4e00\u4e2a\u6587\u4ef6\u7528\u4e8e\u53ea\u8bfb\u3002\u6587\u4ef6\u6307\u9488\u5c06\u4f1a\u653e\u5728\u6587\u4ef6\u7684\u5f00\u5934\u3002\u8fd9\u662f\u9ed8\u8ba4\u6a21\u5f0f\u3002\u4e00\u822c\u7528\u4e8e\u975e\u6587\u672c\u6587\u4ef6\u5982\u56fe\u7247\u7b49\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"r+"),(0,i.kt)("td",{parentName:"tr",align:null},"\u6253\u5f00\u4e00\u4e2a\u6587\u4ef6\u7528\u4e8e\u8bfb\u5199\u3002\u6587\u4ef6\u6307\u9488\u5c06\u4f1a\u653e\u5728\u6587\u4ef6\u7684\u5f00\u5934\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"rb+"),(0,i.kt)("td",{parentName:"tr",align:null},"\u4ee5\u4e8c\u8fdb\u5236\u683c\u5f0f\u6253\u5f00\u4e00\u4e2a\u6587\u4ef6\u7528\u4e8e\u8bfb\u5199\u3002\u6587\u4ef6\u6307\u9488\u5c06\u4f1a\u653e\u5728\u6587\u4ef6\u7684\u5f00\u5934\u3002\u4e00\u822c\u7528\u4e8e\u975e\u6587\u672c\u6587\u4ef6\u5982\u56fe\u7247\u7b49\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"w"),(0,i.kt)("td",{parentName:"tr",align:null},"\u6253\u5f00\u4e00\u4e2a\u6587\u4ef6\u53ea\u7528\u4e8e\u5199\u5165\u3002\u5982\u679c\u8be5\u6587\u4ef6\u5df2\u5b58\u5728\u5219\u6253\u5f00\u6587\u4ef6\uff0c\u5e76\u4ece\u5f00\u5934\u5f00\u59cb\u7f16\u8f91\uff0c\u5373\u539f\u6709\u5185\u5bb9\u4f1a\u88ab\u5220\u9664\u3002\u5982\u679c\u8be5\u6587\u4ef6\u4e0d\u5b58\u5728\uff0c\u521b\u5efa\u65b0\u6587\u4ef6\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"wb"),(0,i.kt)("td",{parentName:"tr",align:null},"\u4ee5\u4e8c\u8fdb\u5236\u683c\u5f0f\u6253\u5f00\u4e00\u4e2a\u6587\u4ef6\u53ea\u7528\u4e8e\u5199\u5165\u3002\u5982\u679c\u8be5\u6587\u4ef6\u5df2\u5b58\u5728\u5219\u6253\u5f00\u6587\u4ef6\uff0c\u5e76\u4ece\u5f00\u5934\u5f00\u59cb\u7f16\u8f91\uff0c\u5373\u539f\u6709\u5185\u5bb9\u4f1a\u88ab\u5220\u9664\u3002\u5982\u679c\u8be5\u6587\u4ef6\u4e0d\u5b58\u5728\uff0c\u521b\u5efa\u65b0\u6587\u4ef6\u3002\u4e00\u822c\u7528\u4e8e\u975e\u6587\u672c\u6587\u4ef6\u5982\u56fe\u7247\u7b49\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"w+"),(0,i.kt)("td",{parentName:"tr",align:null},"\u6253\u5f00\u4e00\u4e2a\u6587\u4ef6\u7528\u4e8e\u8bfb\u5199\u3002\u5982\u679c\u8be5\u6587\u4ef6\u5df2\u5b58\u5728\u5219\u6253\u5f00\u6587\u4ef6\uff0c\u5e76\u4ece\u5f00\u5934\u5f00\u59cb\u7f16\u8f91\uff0c\u5373\u539f\u6709\u5185\u5bb9\u4f1a\u88ab\u5220\u9664\u3002\u5982\u679c\u8be5\u6587\u4ef6\u4e0d\u5b58\u5728\uff0c\u521b\u5efa\u65b0\u6587\u4ef6\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"wb+"),(0,i.kt)("td",{parentName:"tr",align:null},"\u4ee5\u4e8c\u8fdb\u5236\u683c\u5f0f\u6253\u5f00\u4e00\u4e2a\u6587\u4ef6\u7528\u4e8e\u8bfb\u5199\u3002\u5982\u679c\u8be5\u6587\u4ef6\u5df2\u5b58\u5728\u5219\u6253\u5f00\u6587\u4ef6\uff0c\u5e76\u4ece\u5f00\u5934\u5f00\u59cb\u7f16\u8f91\uff0c\u5373\u539f\u6709\u5185\u5bb9\u4f1a\u88ab\u5220\u9664\u3002\u5982\u679c\u8be5\u6587\u4ef6\u4e0d\u5b58\u5728\uff0c\u521b\u5efa\u65b0\u6587\u4ef6\u3002\u4e00\u822c\u7528\u4e8e\u975e\u6587\u672c\u6587\u4ef6\u5982\u56fe\u7247\u7b49\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"a"),(0,i.kt)("td",{parentName:"tr",align:null},"\u6253\u5f00\u4e00\u4e2a\u6587\u4ef6\u7528\u4e8e\u8ffd\u52a0\u3002\u5982\u679c\u8be5\u6587\u4ef6\u5df2\u5b58\u5728\uff0c\u6587\u4ef6\u6307\u9488\u5c06\u4f1a\u653e\u5728\u6587\u4ef6\u7684\u7ed3\u5c3e\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u65b0\u7684\u5185\u5bb9\u5c06\u4f1a\u88ab\u5199\u5165\u5230\u5df2\u6709\u5185\u5bb9\u4e4b\u540e\u3002\u5982\u679c\u8be5\u6587\u4ef6\u4e0d\u5b58\u5728\uff0c\u521b\u5efa\u65b0\u6587\u4ef6\u8fdb\u884c\u5199\u5165\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ab"),(0,i.kt)("td",{parentName:"tr",align:null},"\u4ee5\u4e8c\u8fdb\u5236\u683c\u5f0f\u6253\u5f00\u4e00\u4e2a\u6587\u4ef6\u7528\u4e8e\u8ffd\u52a0\u3002\u5982\u679c\u8be5\u6587\u4ef6\u5df2\u5b58\u5728\uff0c\u6587\u4ef6\u6307\u9488\u5c06\u4f1a\u653e\u5728\u6587\u4ef6\u7684\u7ed3\u5c3e\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u65b0\u7684\u5185\u5bb9\u5c06\u4f1a\u88ab\u5199\u5165\u5230\u5df2\u6709\u5185\u5bb9\u4e4b\u540e\u3002\u5982\u679c\u8be5\u6587\u4ef6\u4e0d\u5b58\u5728\uff0c\u521b\u5efa\u65b0\u6587\u4ef6\u8fdb\u884c\u5199\u5165\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"a+"),(0,i.kt)("td",{parentName:"tr",align:null},"\u6253\u5f00\u4e00\u4e2a\u6587\u4ef6\u7528\u4e8e\u8bfb\u5199\u3002\u5982\u679c\u8be5\u6587\u4ef6\u5df2\u5b58\u5728\uff0c\u6587\u4ef6\u6307\u9488\u5c06\u4f1a\u653e\u5728\u6587\u4ef6\u7684\u7ed3\u5c3e\u3002\u6587\u4ef6\u6253\u5f00\u65f6\u4f1a\u662f\u8ffd\u52a0\u6a21\u5f0f\u3002\u5982\u679c\u8be5\u6587\u4ef6\u4e0d\u5b58\u5728\uff0c\u521b\u5efa\u65b0\u6587\u4ef6\u7528\u4e8e\u8bfb\u5199\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ab+"),(0,i.kt)("td",{parentName:"tr",align:null},"\u4ee5\u4e8c\u8fdb\u5236\u683c\u5f0f\u6253\u5f00\u4e00\u4e2a\u6587\u4ef6\u7528\u4e8e\u8ffd\u52a0\u3002\u5982\u679c\u8be5\u6587\u4ef6\u5df2\u5b58\u5728\uff0c\u6587\u4ef6\u6307\u9488\u5c06\u4f1a\u653e\u5728\u6587\u4ef6\u7684\u7ed3\u5c3e\u3002\u5982\u679c\u8be5\u6587\u4ef6\u4e0d\u5b58\u5728\uff0c\u521b\u5efa\u65b0\u6587\u4ef6\u7528\u4e8e\u8bfb\u5199\u3002")))),(0,i.kt)("h2",{id:"file-\u5bf9\u8c61"},"file \u5bf9\u8c61"),(0,i.kt)("p",null,"file \u5bf9\u8c61\u4f7f\u7528 open \u51fd\u6570\u6765\u521b\u5efa\uff0c\u4e0b\u8868\u5217\u51fa\u4e86 file \u5bf9\u8c61\u5e38\u7528\u7684\u51fd\u6570\uff1a"),(0,i.kt)("h3",{id:"fileclose"},"file.close()"),(0,i.kt)("p",null,"\u5173\u95ed\u6587\u4ef6,\u5173\u95ed\u540e\u6587\u4ef6\u4e0d\u80fd\u518d\u8fdb\u884c\u8bfb\u5199\u64cd\u4f5c\u3002"),(0,i.kt)("h3",{id:"fileflush"},"file.flush()"),(0,i.kt)("p",null,"\u5237\u65b0\u6587\u4ef6\u5185\u90e8\u7f13\u51b2\uff0c\u76f4\u63a5\u628a\u5185\u90e8\u7f13\u51b2\u533a\u7684\u6570\u636e\u7acb\u523b\u5199\u5165\u6587\u4ef6, \u800c\u4e0d\u662f\u88ab\u52a8\u7684\u7b49\u5f85\u8f93\u51fa\u7f13\u51b2\u533a\u5199\u5165"),(0,i.kt)("h3",{id:"filefileno"},"file.fileno()"),(0,i.kt)("p",null,"\u8fd4\u56de\u4e00\u4e2a\u6574\u578b\u7684\u6587\u4ef6\u63cf\u8ff0\u7b26(file descriptor FD \u6574\u578b), \u53ef\u4ee5\u7528\u5728\u5982 os \u6a21\u5757\u7684 read \u65b9\u6cd5\u7b49\u4e00\u4e9b\u5e95\u5c42\u64cd\u4f5c\u4e0a"),(0,i.kt)("h3",{id:"fileisatty"},"file.isatty()"),(0,i.kt)("p",null,"\u8fd4\u56de\u4e00\u4e2a\u6574\u578b\u7684\u6587\u4ef6\u63cf\u8ff0\u7b26(file descriptor FD \u6574\u578b), \u53ef\u4ee5\u7528\u5728\u5982 os \u6a21\u5757\u7684 read \u65b9\u6cd5\u7b49\u4e00\u4e9b\u5e95\u5c42\u64cd\u4f5c\u4e0a"),(0,i.kt)("h3",{id:"fileisatty-1"},"file.isatty()"),(0,i.kt)("p",null,"\u5982\u679c\u6587\u4ef6\u8fde\u63a5\u5230\u4e00\u4e2a\u7ec8\u7aef\u8bbe\u5907\u8fd4\u56de True\uff0c\u5426\u5219\u8fd4\u56de False"),(0,i.kt)("h3",{id:"filereadsize"},"file.read(","[size]",")"),(0,i.kt)("p",null,"\u4ece\u6587\u4ef6\u8bfb\u53d6\u6307\u5b9a\u7684\u5b57\u8282\u6570\uff0c\u5982\u679c\u672a\u7ed9\u5b9a\u6216\u4e3a\u8d1f\u5219\u8bfb\u53d6\u6240\u6709\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"file = open('./test.txt', mode='r', encoding='utf-8')\ncontent = file.read()\n")),(0,i.kt)("h3",{id:"filereadlinesize"},"file.readline(","[size]",")"),(0,i.kt)("p",null,'\u8bfb\u53d6\u6574\u884c\uff0c\u5305\u62ec "\\n" \u5b57\u7b26\u3002'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"file = open('./test.txt', mode='r', encoding='utf-8')\nline = file.readline().strip()  # \u53bb\u6389\u7a7a\u767d\u7b26\nprint(line)\nline = file.readline()\nprint(line)\n")),(0,i.kt)("h3",{id:"filereadlinessizeint"},"file.readlines(","[sizeint]",")"),(0,i.kt)("p",null,"\u8bfb\u53d6\u6240\u6709\u884c\u5e76\u8fd4\u56de\u5217\u8868\uff0c\u82e5\u7ed9\u5b9a sizeint>0\uff0c\u8fd4\u56de\u603b\u548c\u5927\u7ea6\u4e3a sizeint \u5b57\u8282\u7684\u884c, \u5b9e\u9645\u8bfb\u53d6\u503c\u53ef\u80fd\u6bd4 sizeint \u8f83\u5927, \u56e0\u4e3a\u9700\u8981\u586b\u5145\u7f13\u51b2\u533a\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"file = open('./test.txt', mode='r', encoding='utf-8')\nlines=file.readlines()#['\u8fd9\u662f\u6d4b\u8bd5\u6587\u4ef6\\n', '....\\n', '\u6d4b\u8bd5\u4e00\u4e0b\\n',]\n")),(0,i.kt)("h3",{id:"\u4ecefile\u4e2d\u8bfb\u53d6\u5230\u6bcf\u4e00\u884c\u6570\u636e\u5faa\u73affile"},"*\u4ecefile\u4e2d\u8bfb\u53d6\u5230\u6bcf\u4e00\u884c\u6570\u636e\uff0c\u5faa\u73affile"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"file = open('./test.txt', mode='r', encoding='utf-8')\nfor line in file:\n    print(line.strip())\n")),(0,i.kt)("h3",{id:"fileseekoffset-whence"},"file.seek(offset","[, whence]",")"),(0,i.kt)("p",null,"\u79fb\u52a8\u6587\u4ef6\u8bfb\u53d6\u6307\u9488\u5230\u6307\u5b9a\u4f4d\u7f6e"),(0,i.kt)("h3",{id:"filetell"},"file.tell()"),(0,i.kt)("p",null,"\u8fd4\u56de\u6587\u4ef6\u5f53\u524d\u4f4d\u7f6e\u3002"),(0,i.kt)("h3",{id:"filetruncatesize"},"file.truncate(","[size]",")"),(0,i.kt)("p",null,"\u4ece\u6587\u4ef6\u7684\u9996\u884c\u9996\u5b57\u7b26\u5f00\u59cb\u622a\u65ad\uff0c\u622a\u65ad\u6587\u4ef6\u4e3a size \u4e2a\u5b57\u7b26\uff0c\u65e0 size \u8868\u793a\u4ece\u5f53\u524d\u4f4d\u7f6e\u622a\u65ad\uff1b\u622a\u65ad\u4e4b\u540e\u540e\u9762\u7684\u6240\u6709\u5b57\u7b26\u88ab\u5220\u9664\uff0c\u5176\u4e2d windows\n\u7cfb\u7edf\u4e0b\u7684\u6362\u884c\u4ee3\u8868 2 \u4e2a\u5b57\u7b26\u5927\u5c0f\u3002"),(0,i.kt)("h3",{id:"filewritestr"},"file.write(str)"),(0,i.kt)("p",null,"\u5c06\u5b57\u7b26\u4e32\u5199\u5165\u6587\u4ef6\uff0c\u8fd4\u56de\u7684\u662f\u5199\u5165\u7684\u5b57\u7b26\u957f\u5ea6"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"file = open('./hello_write.txt', mode=\"w\", encoding='utf-8')\nfile.write('hello write')\n")),(0,i.kt)("p",null,"\u5982\u679c\u6587\u4ef6\u6253\u5f00\u6a21\u5f0f\u5e26 b\uff0c\u90a3\u5199\u5165\u6587\u4ef6\u5185\u5bb9\u65f6\uff0cstr (\u53c2\u6570)\u8981\u7528 encode \u65b9\u6cd5\u8f6c\u4e3a bytes \u5f62\u5f0f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'file = open("./test.txt", "rb+")\nfile.write("hello\u6d4b\u8bd5write".encode("utf-8"))\n')),(0,i.kt)("p",null,"\u518d\u5199\u5165\u4e2d\u6587\u65f6\u51fa\u73b0\u4e71\u7801\uff0c\u8bbe\u7f6e",(0,i.kt)("inlineCode",{parentName:"p"},"utf-8")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'file = open("./test.txt", "r+", encoding="utf-8")\nfile.write("hello\u6d4b\u8bd5write")\n')),(0,i.kt)("h3",{id:"filewritelinessequence"},"file.writelines(sequence)"),(0,i.kt)("p",null,"\u5411\u6587\u4ef6\u5199\u5165\u4e00\u4e2a\u5e8f\u5217\u5b57\u7b26\u4e32\u5217\u8868\uff0c\u5982\u679c\u9700\u8981\u6362\u884c\u5219\u8981\u81ea\u5df1\u52a0\u5165\u6bcf\u884c\u7684\u6362\u884c\u7b26\u3002"),(0,i.kt)("h2",{id:"with"},"with"),(0,i.kt)("p",null,"\u4e0a\u4e0b\u6587\uff0c\u4e0d\u9700\u8981\u624b\u52a8\u53bb\u5173\u95ed\u4e00\u4e2a\u6587\u4ef6"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"with open('./test.txt',mode='r',encoding='utf-8') as file:\n    for line in file:\n        print(line)\n")),(0,i.kt)("h2",{id:"\u6587\u4ef6\u590d\u5236"},"\u6587\u4ef6\u590d\u5236"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"with open('./01.png', mode=\"rb\") as file1, \\\n        open('./02.png', mode='wb') as file2:\n    for line in file1:\n        file2.write(line)\n")),(0,i.kt)("h2",{id:"\u6587\u4ef6\u4fee\u6539"},"\u6587\u4ef6\u4fee\u6539"),(0,i.kt)("p",null,"\u6253\u5f00\u6587\u4ef6\uff0c\u4fee\u6539\u5185\u5bb9\uff0c\u628a\u6587\u4ef6\u5185\u5bb9\u5907\u4efd\u5230\u65b0\u7684\u526f\u672c\u6587\u4ef6\uff0c\u4fee\u6539\u5b8c\u6bd5\u4ee5\u540e\uff0c\u5220\u9664\u6e90\u6587\u4ef6\uff0c\u628a\u526f\u672c\u6587\u4ef6\u540d\u5b57\u6539\u4e3a\u539f\u6587\u4ef6"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import os\n\nwith open('./\u4eba\u540d\u5355.txt', mode='r', encoding='utf-8') as file1, \\\n        open('./\u4eba\u540d\u5355_\u526f\u672c.txt', mode='w', encoding='utf-8') as file2:\n    for line in file1:\n        if (line.startswith('\u5468')):\n            line = line.replace('\u5468', '\u5f20')\n        file2.write(line)\nos.remove('./\u4eba\u540d\u5355.txt')\nos.rename('./\u4eba\u540d\u5355_\u526f\u672c.txt','./\u4eba\u540d\u5355.txt')\n")))}s.isMDXComponent=!0}}]);