if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let t={};const d=e=>i(e,o),l={module:{uri:o},exports:t,require:d};s[o]=Promise.all(r.map((e=>l[e]||d(e)))).then((e=>(n(...e),t)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-CvHbQjgG.js",revision:null},{url:"assets/index-VShsu0Rf.css",revision:null},{url:"assets/workbox-window.prod.es5-B9K5rw8f.js",revision:null},{url:"index.html",revision:"ae955a26bee48c88fee2b8d430244b82"},{url:"serviceWorker.js",revision:"2d4f22e17e09c96525d8e49dda27b882"},{url:"manifest.webmanifest",revision:"20b24d2802dbdabcfcf780bfdbc01df1"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
