if(!self.define){let e,s={};const o=(o,r)=>(o=new URL(o+".js",r).href,s[o]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=o,e.onload=s,document.head.appendChild(e)}else e=o,importScripts(o),s()})).then((()=>{let e=s[o];if(!e)throw new Error(`Module ${o} didn’t register its module`);return e})));self.define=(r,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let c={};const d=e=>o(e,n),l={module:{uri:n},exports:c,require:d};s[n]=Promise.all(r.map((e=>l[e]||d(e)))).then((e=>(i(...e),c)))}}define(["./workbox-79ffe3e0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"demo2"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/demo2/css/about.ecba8ccf.css",revision:null},{url:"/demo2/css/app.a1fe83ce.css",revision:null},{url:"/demo2/index.html",revision:"d56e6d5d8483d2dfe857e0a72616c8e7"},{url:"/demo2/js/about.b75dbaf1.js",revision:null},{url:"/demo2/js/app.068ba9c4.js",revision:null},{url:"/demo2/js/chunk-vendors.045d7dc9.js",revision:null},{url:"/demo2/manifest.json",revision:"076251330278aa7c04233c7845d704fd"},{url:"/demo2/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
