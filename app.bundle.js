!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0);const r=new class{constructor(){this.container=null,this.borderSize=4,this.click=!1,this.result=0,this.losing=0}bindToDOM(e){if(!(e instanceof HTMLElement))throw new Error("container is not HTMLElement");this.container=e}drawField(){this.htmlTrue(),function(e,t,n){for(let r=0;r<n;r++){let n=document.createElement(e);n.classList.add("cell"),t.insertAdjacentElement("beforeend",n)}}("div",this.container,this.borderSize**2)}goblin(){this.htmlTrue();const e=this.container.querySelectorAll(".cell");e[0].classList.add("active_cell");let t=0;setInterval(()=>{let n=Math.floor(Math.random()*e.length);n!=t&&(e[t].classList.remove("active_cell"),e[n].classList.add("active_cell"),t=n,this.losing++,5===this.losing&&(alert("Вы проиграли!!!"),this.result=0,this.losing=0))},1e3)}game(){this.container.addEventListener("click",e=>{e.target.classList.contains("active_cell")&&(this.result++,this.losing=0),5===this.result&&(alert("Вы выиграли!!!"),this.result=0,this.losing=0)})}htmlTrue(){if(!(this.container instanceof HTMLElement))throw new Error("container is not HTMLElement")}};r.bindToDOM(document.querySelector(".table-game")),r.drawField(),r.goblin(),r.game();n.p}]);