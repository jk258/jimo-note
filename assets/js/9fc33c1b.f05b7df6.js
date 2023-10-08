"use strict";(self.webpackChunkjimo=self.webpackChunkjimo||[]).push([[365],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},l="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=s(n),v=a,d=l["".concat(u,".").concat(v)]||l[v]||f[v]||c;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=v;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[l]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<c;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},3933:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>f,frontMatter:()=>c,metadata:()=>i,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const c={},o="vue \u54cd\u5e94\u5f0f\u7b80\u6613\u5b9e\u73b0",i={unversionedId:"\u524d\u7aef/\u9762\u8bd5\u9898/vue/vue\u54cd\u5e94\u5f0f\u7b80\u6613\u5b9e\u73b0",id:"\u524d\u7aef/\u9762\u8bd5\u9898/vue/vue\u54cd\u5e94\u5f0f\u7b80\u6613\u5b9e\u73b0",title:"vue \u54cd\u5e94\u5f0f\u7b80\u6613\u5b9e\u73b0",description:"\u4f7f\u7528",source:"@site/docs/\u524d\u7aef/\u9762\u8bd5\u9898/vue/vue\u54cd\u5e94\u5f0f\u7b80\u6613\u5b9e\u73b0.md",sourceDirName:"\u524d\u7aef/\u9762\u8bd5\u9898/vue",slug:"/\u524d\u7aef/\u9762\u8bd5\u9898/vue/vue\u54cd\u5e94\u5f0f\u7b80\u6613\u5b9e\u73b0",permalink:"/jimo-note/docs/\u524d\u7aef/\u9762\u8bd5\u9898/vue/vue\u54cd\u5e94\u5f0f\u7b80\u6613\u5b9e\u73b0",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u524d\u7aef/\u9762\u8bd5\u9898/vue/vue\u54cd\u5e94\u5f0f\u7b80\u6613\u5b9e\u73b0.md",tags:[],version:"current",frontMatter:{},sidebar:"webSidebar",previous:{title:"js \u9762\u8bd5\u9898",permalink:"/jimo-note/docs/\u524d\u7aef/\u9762\u8bd5\u9898/JavaScript/js\u9762\u8bd5\u9898"},next:{title:"vue\u9762\u8bd5\u9898",permalink:"/jimo-note/docs/\u524d\u7aef/\u9762\u8bd5\u9898/vue/vue\u9762\u8bd5\u9898"}},u={},s=[{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2}],p={toc:s},l="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(l,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"vue-\u54cd\u5e94\u5f0f\u7b80\u6613\u5b9e\u73b0"},"vue \u54cd\u5e94\u5f0f\u7b80\u6613\u5b9e\u73b0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"let activeEffect\nclass Dep {\n    constructor(value) {\n        this.subscribers = new Set()\n    }\n    depend() {\n        if (activeEffect) {\n            this.subscribers.add(activeEffect)\n        }\n    }\n    notify() {\n        this.subscribers.forEach((effect) => {\n            effect()\n        })\n    }\n}\nfunction watchEffect(effect) {\n    activeEffect = effect\n    effect()\n    activeEffect = null\n}\nconst targetMap = new WeakMap()\nfunction getDep(target, key) {\n    let depsMap = targetMap.get(target)\n    if (!depsMap) {\n        depsMap = new Map()\n        targetMap.set(target, depsMap)\n    }\n    let dep = depsMap.get(key)\n    if (!dep) {\n        dep = new Dep()\n        depsMap.set(key, dep)\n    }\n    return dep\n}\nconst reactiveHandlers = {\n    get(target, key, receiver) {\n        const dep = getDep(target, key)\n        dep.depend()\n        return Reflect.get(target, key, receiver)\n    },\n    set(target, key, value, receiver) {\n        const dep = getDep(target, key)\n        const result = Reflect.set(target, key, value, receiver)\n        dep.notify()\n        return result\n    },\n}\nfunction reactive(raw) {\n    return new Proxy(raw, reactiveHandlers)\n}\n")),(0,a.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const state = reactive({\n    value: 0,\n})\nwatchEffect(() => {\n    console.log(state.value)\n})\nstate.value = 1\n")))}f.isMDXComponent=!0}}]);