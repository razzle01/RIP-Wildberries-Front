if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const d=e=>i(e,t),c={module:{uri:t},exports:o,require:d};s[t]=Promise.all(r.map((e=>c[e]||d(e)))).then((e=>(n(...e),o)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-BJSDUpbb.css",revision:null},{url:"assets/index-DzATyJ-q.js",revision:null},{url:"index.html",revision:"9d632111ddb521bba2778f269d3997a6"},{url:"registerSW.js",revision:"0a763054662ca03024fc7c6e4558e48d"},{url:"serviceWorker.js",revision:"2d4f22e17e09c96525d8e49dda27b882"},{url:"manifest.webmanifest",revision:"babc8401deb593dc3c4ec1eb517cd6e5"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
