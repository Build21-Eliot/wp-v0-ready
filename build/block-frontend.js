(()=>{"use strict";var e={495:(e,t,n)=>{n.d(t,{K:()=>u});var r=n(609),o=n.n(r);const a=800,l=300,c=40,s=60,i=30,d=60,f=30;function u(){const e=(0,r.useRef)(null),[t,n]=(0,r.useState)(!1),[u,m]=(0,r.useState)(0),[x,p]=(0,r.useState)(0);return(0,r.useEffect)((()=>{const t=e.current;if(!t)return;const r=t.getContext("2d");if(!r)return;let o,h=l-f-s,y=0,v=[],E=!1;const w=(e,t,n,o,a)=>{r.shadowBlur=15,r.shadowColor=a,r.strokeStyle=a,r.lineWidth=2,r.strokeRect(e,t,n,o),r.fillStyle=a,r.fillRect(e,t,n,o)},b=()=>{r.clearRect(0,0,a,l);const e=r.createLinearGradient(0,0,a,l);e.addColorStop(0,"#000033"),e.addColorStop(1,"#660066"),r.fillStyle=e,r.fillRect(0,0,a,l),w(0,l-f,a,f,"#ff00ff"),w(50,h,c,s,"#ff00ff"),v.forEach((e=>{w(e.x,e.y,i,d,"#00ffff")})),r.fillStyle="#ffffff",r.font="20px Arial",r.fillText(`Score: ${u}`,10,30),r.fillText(`High Score: ${x}`,a-150,30),E&&(h+=y,y+=.8,h>l-f-s&&(h=l-f-s,E=!1)),v=v.filter((e=>e.x>-i)),v.forEach((e=>e.x-=5)),(0===v.length||v[v.length-1].x<a-200)&&v.push({x:a,y:l-f-d});const t=h,g=c,S=s;for(const e of v){const r={x:e.x,y:e.y,width:i,height:d};if(50<r.x+r.width&&50+g>r.x&&t<r.y+r.height&&t+S>r.y)return n(!0),void(u>x&&p(u))}m((e=>e+1)),o=requestAnimationFrame(b)},g=e=>{"Space"!==e.code&&"ArrowUp"!==e.code||E||(E=!0,y=-15)};return document.addEventListener("keydown",g),b(),()=>{cancelAnimationFrame(o),document.removeEventListener("keydown",g)}}),[t]),o().createElement("div",{className:"flex flex-col items-center justify-center min-h-screen bg-gray-900"},o().createElement("h1",{className:"text-4xl font-bold mb-4 text-neon-pink"},"Neon Runner"),o().createElement("canvas",{ref:e,width:a,height:l,className:"border border-neon-blue"}),t&&o().createElement("div",{className:"mt-4"},o().createElement("p",{className:"text-2xl text-neon-blue mb-2"},"Game Over!"),o().createElement("button",{onClick:()=>{n(!1),m(0)},className:"px-4 py-2 bg-neon-pink text-white rounded hover:bg-pink-600 transition-colors"},"Restart")),o().createElement("p",{className:"mt-4 text-white"},"Press Space or Up Arrow to jump"))}},338:(e,t,n)=>{var r=n(795);t.H=r.createRoot,r.hydrateRoot},609:e=>{e.exports=window.React},795:e=>{e.exports=window.ReactDOM}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var r=n(609),o=n.n(r),a=n(495),l=n(338);const c=()=>o().createElement("div",null,o().createElement(a.K,null)),s=()=>{const e=document.getElementById("neon-runner-placeholder");e&&(0,l.H)(e).render(o().createElement(c,null))};"loading"===document.readyState?document.addEventListener("DOMContentLoaded",s):s()})();
//# sourceMappingURL=block-frontend.js.map