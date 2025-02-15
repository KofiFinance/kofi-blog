(()=>{"use strict";var e,t,r,a,o,c={},n={};function f(e){var t=n[e];if(void 0!==t)return t.exports;var r=n[e]={id:e,loaded:!1,exports:{}};return c[e].call(r.exports,r,r.exports,f),r.loaded=!0,r.exports}f.m=c,f.c=n,e=[],f.O=(t,r,a,o)=>{if(!r){var c=1/0;for(u=0;u<e.length;u++){r=e[u][0],a=e[u][1],o=e[u][2];for(var n=!0,i=0;i<r.length;i++)(!1&o||c>=o)&&Object.keys(f.O).every((e=>f.O[e](r[i])))?r.splice(i--,1):(n=!1,o<c&&(c=o));if(n){e.splice(u--,1);var d=a();void 0!==d&&(t=d)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[r,a,o]},f.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return f.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,f.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var o=Object.create(null);f.r(o);var c={};t=t||[null,r({}),r([]),r(r)];for(var n=2&a&&e;"object"==typeof n&&!~t.indexOf(n);n=r(n))Object.getOwnPropertyNames(n).forEach((t=>c[t]=()=>e[t]));return c.default=()=>e,f.d(o,c),o},f.d=(e,t)=>{for(var r in t)f.o(t,r)&&!f.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},f.f={},f.e=e=>Promise.all(Object.keys(f.f).reduce(((t,r)=>(f.f[r](e,t),t)),[])),f.u=e=>"assets/js/"+({32:"3f9ae9f6",76:"common",209:"01a85c17",212:"621db11d",249:"ccc49370",353:"e35a5555",434:"1a1424c7",452:"8acf3e27",472:"814f3328",518:"b266de79",643:"a6aa9e1f",711:"9e4087bc",813:"6875c492",847:"9c5ae715",858:"36994c47",867:"33fc5bb8",885:"c2a3e543",903:"acecf23e",905:"e371de1d"}[e]||e)+"."+{32:"bbddf8f4",76:"3db73401",209:"7bfc3543",212:"e2eee339",249:"c3832ad2",312:"179959ad",353:"53d78d51",434:"589ddb80",452:"fb5b5476",472:"5fbbf763",518:"e6efb4af",643:"8919976a",711:"ff3872ef",813:"e35a85ae",847:"56d6afc9",858:"973581b0",867:"12c77fa8",885:"4d6c3817",903:"d46d78ba",905:"78e6c675"}[e]+".js",f.miniCssF=e=>{},f.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),f.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a={},o="kofi-docs:",f.l=(e,t,r,c)=>{if(a[e])a[e].push(t);else{var n,i;if(void 0!==r)for(var d=document.getElementsByTagName("script"),u=0;u<d.length;u++){var l=d[u];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==o+r){n=l;break}}n||(i=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,f.nc&&n.setAttribute("nonce",f.nc),n.setAttribute("data-webpack",o+r),n.src=e),a[e]=[t];var b=(t,r)=>{n.onerror=n.onload=null,clearTimeout(s);var o=a[e];if(delete a[e],n.parentNode&&n.parentNode.removeChild(n),o&&o.forEach((e=>e(r))),t)return t(r)},s=setTimeout(b.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=b.bind(null,n.onerror),n.onload=b.bind(null,n.onload),i&&document.head.appendChild(n)}},f.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.p="/",f.gca=function(e){return e={"3f9ae9f6":"32",common:"76","01a85c17":"209","621db11d":"212",ccc49370:"249",e35a5555:"353","1a1424c7":"434","8acf3e27":"452","814f3328":"472",b266de79:"518",a6aa9e1f:"643","9e4087bc":"711","6875c492":"813","9c5ae715":"847","36994c47":"858","33fc5bb8":"867",c2a3e543:"885",acecf23e:"903",e371de1d:"905"}[e]||e,f.p+f.u(e)},(()=>{var e={354:0,869:0};f.f.j=(t,r)=>{var a=f.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else if(/^(354|869)$/.test(t))e[t]=0;else{var o=new Promise(((r,o)=>a=e[t]=[r,o]));r.push(a[2]=o);var c=f.p+f.u(t),n=new Error;f.l(c,(r=>{if(f.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),c=r&&r.target&&r.target.src;n.message="Loading chunk "+t+" failed.\n("+o+": "+c+")",n.name="ChunkLoadError",n.type=o,n.request=c,a[1](n)}}),"chunk-"+t,t)}},f.O.j=t=>0===e[t];var t=(t,r)=>{var a,o,c=r[0],n=r[1],i=r[2],d=0;if(c.some((t=>0!==e[t]))){for(a in n)f.o(n,a)&&(f.m[a]=n[a]);if(i)var u=i(f)}for(t&&t(r);d<c.length;d++)o=c[d],f.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return f.O(u)},r=self.webpackChunkkofi_docs=self.webpackChunkkofi_docs||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();