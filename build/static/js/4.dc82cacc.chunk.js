(this.webpackJsonpcaterpillar=this.webpackJsonpcaterpillar||[]).push([[4,16],{264:function(t,e,a){t.exports={root:"signInDialog_root__3CJsW",caterpillar_dialog_hide:"signInDialog_caterpillar_dialog_hide__3a_kx","paint-order-supported":"signInDialog_paint-order-supported__nNarV",wrapper:"signInDialog_wrapper__1kHQ8",icon:"signInDialog_icon__1Zkta",title:"signInDialog_title__nRxdu",hit:"signInDialog_hit__193Ay",list_wrapper:"signInDialog_list_wrapper__3z7t7",item:"signInDialog_item__3H3mv",active:"signInDialog_active__1N8-m",label:"signInDialog_label__3yJAL",ani:"signInDialog_ani__2UfNL",checkmark:"signInDialog_checkmark__3bxaR",item_text:"signInDialog_item_text__VNp43",item_icon:"signInDialog_item_icon__1gwKw",coin:"signInDialog_coin__13Zbw",scrolling:"signInDialog_scrolling__3Bmrd",colorCycle:"signInDialog_colorCycle__28qmJ",rotate:"signInDialog_rotate__3hI0a",run:"signInDialog_run__v0eyK",scaleAni:"signInDialog_scaleAni__2Pgbp","slide-up":"signInDialog_slide-up__2jLsB"}},278:function(t,e,a){"use strict";var n={};!function t(e,a,n,i){var r=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),o="function"===typeof Path2D&&"function"===typeof DOMMatrix,s=function(){if(!e.OffscreenCanvas)return!1;var t=new OffscreenCanvas(1,1),a=t.getContext("2d");a.fillRect(0,0,1,1);var n=t.transferToImageBitmap();try{a.createPattern(n,"no-repeat")}catch(i){return!1}return!0}();function c(){}function l(t){var n=a.exports.Promise,i=void 0!==n?n:e.Promise;return"function"===typeof i?new i(t):(t(c,c),null)}var h,f,u,d=(h=s,f=new Map,{transform:function(t){if(h)return t;if(f.has(t))return f.get(t);var e=new OffscreenCanvas(t.width,t.height);return e.getContext("2d").drawImage(t,0,0),f.set(t,e),e},clear:function(){f.clear()}}),g=function(){var t,e,a=Math.floor(1e3/60),n={},i=0;return"function"===typeof requestAnimationFrame&&"function"===typeof cancelAnimationFrame?(t=function(t){var e=Math.random();return n[e]=requestAnimationFrame((function r(o){i===o||i+a-1<o?(i=o,delete n[e],t()):n[e]=requestAnimationFrame(r)})),e},e=function(t){n[t]&&cancelAnimationFrame(n[t])}):(t=function(t){return setTimeout(t,a)},e=function(t){return clearTimeout(t)}),{frame:t,cancel:e}}(),m=function(){var e,a,i={};return function(){if(e)return e;if(!n&&r){var o=["var CONFETTI, SIZE = {}, module = {};","("+t.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join("\n");try{e=new Worker(URL.createObjectURL(new Blob([o])))}catch(s){return void 0!==typeof console&&"function"===typeof console.warn&&console.warn("\ud83c\udf8a Could not load worker",s),null}!function(t){function e(e,a){t.postMessage({options:e||{},callback:a})}t.init=function(e){var a=e.transferControlToOffscreen();t.postMessage({canvas:a},[a])},t.fire=function(n,r,o){if(a)return e(n,null),a;var s=Math.random().toString(36).slice(2);return a=l((function(r){function c(e){e.data.callback===s&&(delete i[s],t.removeEventListener("message",c),a=null,d.clear(),o(),r())}t.addEventListener("message",c),e(n,s),i[s]=c.bind(null,{data:{callback:s}})}))},t.reset=function(){for(var e in t.postMessage({reset:!0}),i)i[e](),delete i[e]}}(e)}return e}}(),p={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function b(t,e,a){return function(t,e){return e?e(t):t}(t&&(null!==(n=t[e])&&void 0!==n)?t[e]:p[e],a);var n}function v(t){return t<0?0:Math.floor(t)}function y(t){return parseInt(t,16)}function M(t){return t.map(w)}function w(t){var e=String(t).replace(/[^0-9a-f]/gi,"");return e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),{r:y(e.substring(0,2)),g:y(e.substring(2,4)),b:y(e.substring(4,6))}}function x(t){t.width=document.documentElement.clientWidth,t.height=document.documentElement.clientHeight}function _(t){var e=t.getBoundingClientRect();t.width=e.width,t.height=e.height}function I(t){var e=t.angle*(Math.PI/180),a=t.spread*(Math.PI/180);return{x:t.x,y:t.y,wobble:10*Math.random(),wobbleSpeed:Math.min(.11,.1*Math.random()+.05),velocity:.5*t.startVelocity+Math.random()*t.startVelocity,angle2D:-e+(.5*a-Math.random()*a),tiltAngle:(.5*Math.random()+.25)*Math.PI,color:t.color,shape:t.shape,tick:0,totalTicks:t.ticks,decay:t.decay,drift:t.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:3*t.gravity,ovalScalar:.6,scalar:t.scalar,flat:t.flat}}function j(t,e){e.x+=Math.cos(e.angle2D)*e.velocity+e.drift,e.y+=Math.sin(e.angle2D)*e.velocity+e.gravity,e.velocity*=e.decay,e.flat?(e.wobble=0,e.wobbleX=e.x+10*e.scalar,e.wobbleY=e.y+10*e.scalar,e.tiltSin=0,e.tiltCos=0,e.random=1):(e.wobble+=e.wobbleSpeed,e.wobbleX=e.x+10*e.scalar*Math.cos(e.wobble),e.wobbleY=e.y+10*e.scalar*Math.sin(e.wobble),e.tiltAngle+=.1,e.tiltSin=Math.sin(e.tiltAngle),e.tiltCos=Math.cos(e.tiltAngle),e.random=Math.random()+2);var a=e.tick++/e.totalTicks,n=e.x+e.random*e.tiltCos,i=e.y+e.random*e.tiltSin,r=e.wobbleX+e.random*e.tiltCos,s=e.wobbleY+e.random*e.tiltSin;if(t.fillStyle="rgba("+e.color.r+", "+e.color.g+", "+e.color.b+", "+(1-a)+")",t.beginPath(),o&&"path"===e.shape.type&&"string"===typeof e.shape.path&&Array.isArray(e.shape.matrix))t.fill(function(t,e,a,n,i,r,o){var s=new Path2D(t),c=new Path2D;c.addPath(s,new DOMMatrix(e));var l=new Path2D;return l.addPath(c,new DOMMatrix([Math.cos(o)*i,Math.sin(o)*i,-Math.sin(o)*r,Math.cos(o)*r,a,n])),l}(e.shape.path,e.shape.matrix,e.x,e.y,.1*Math.abs(r-n),.1*Math.abs(s-i),Math.PI/10*e.wobble));else if("bitmap"===e.shape.type){var c=Math.PI/10*e.wobble,l=.1*Math.abs(r-n),h=.1*Math.abs(s-i),f=e.shape.bitmap.width*e.scalar,u=e.shape.bitmap.height*e.scalar,g=new DOMMatrix([Math.cos(c)*l,Math.sin(c)*l,-Math.sin(c)*h,Math.cos(c)*h,e.x,e.y]);g.multiplySelf(new DOMMatrix(e.shape.matrix));var m=t.createPattern(d.transform(e.shape.bitmap),"no-repeat");m.setTransform(g),t.globalAlpha=1-a,t.fillStyle=m,t.fillRect(e.x-f/2,e.y-u/2,f,u),t.globalAlpha=1}else if("circle"===e.shape)t.ellipse?t.ellipse(e.x,e.y,Math.abs(r-n)*e.ovalScalar,Math.abs(s-i)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI):function(t,e,a,n,i,r,o,s,c){t.save(),t.translate(e,a),t.rotate(r),t.scale(n,i),t.arc(0,0,1,o,s,c),t.restore()}(t,e.x,e.y,Math.abs(r-n)*e.ovalScalar,Math.abs(s-i)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI);else if("star"===e.shape)for(var p=Math.PI/2*3,b=4*e.scalar,v=8*e.scalar,y=e.x,M=e.y,w=5,x=Math.PI/w;w--;)y=e.x+Math.cos(p)*v,M=e.y+Math.sin(p)*v,t.lineTo(y,M),p+=x,y=e.x+Math.cos(p)*b,M=e.y+Math.sin(p)*b,t.lineTo(y,M),p+=x;else t.moveTo(Math.floor(e.x),Math.floor(e.y)),t.lineTo(Math.floor(e.wobbleX),Math.floor(i)),t.lineTo(Math.floor(r),Math.floor(s)),t.lineTo(Math.floor(n),Math.floor(e.wobbleY));return t.closePath(),t.fill(),e.tick<e.totalTicks}function O(t,a){var o,s=!t,c=!!b(a||{},"resize"),h=!1,f=b(a,"disableForReducedMotion",Boolean),u=r&&!!b(a||{},"useWorker")?m():null,p=s?x:_,y=!(!t||!u)&&!!t.__confetti_initialized,w="function"===typeof matchMedia&&matchMedia("(prefers-reduced-motion)").matches;function O(e,a,r){for(var s,c,h=b(e,"particleCount",v),f=b(e,"angle",Number),u=b(e,"spread",Number),m=b(e,"startVelocity",Number),y=b(e,"decay",Number),w=b(e,"gravity",Number),x=b(e,"drift",Number),_=b(e,"colors",M),O=b(e,"ticks",Number),C=b(e,"shapes"),D=b(e,"scalar"),T=!!b(e,"flat"),k=function(t){var e=b(t,"origin",Object);return e.x=b(e,"x",Number),e.y=b(e,"y",Number),e}(e),N=h,S=[],E=t.width*k.x,P=t.height*k.y;N--;)S.push(I({x:E,y:P,angle:f,spread:u,startVelocity:m,color:_[N%_.length],shape:C[(s=0,c=C.length,Math.floor(Math.random()*(c-s))+s)],ticks:O,decay:y,gravity:w,drift:x,scalar:D,flat:T}));return o?o.addFettis(S):(o=function(t,e,a,r,o){var s,c,h=e.slice(),f=t.getContext("2d"),u=l((function(e){function l(){s=c=null,f.clearRect(0,0,r.width,r.height),d.clear(),o(),e()}s=g.frame((function e(){!n||r.width===i.width&&r.height===i.height||(r.width=t.width=i.width,r.height=t.height=i.height),r.width||r.height||(a(t),r.width=t.width,r.height=t.height),f.clearRect(0,0,r.width,r.height),(h=h.filter((function(t){return j(f,t)}))).length?s=g.frame(e):l()})),c=l}));return{addFettis:function(t){return h=h.concat(t),u},canvas:t,promise:u,reset:function(){s&&g.cancel(s),c&&c()}}}(t,S,p,a,r)).promise}function C(a){var n=f||b(a,"disableForReducedMotion",Boolean),i=b(a,"zIndex",Number);if(n&&w)return l((function(t){t()}));s&&o?t=o.canvas:s&&!t&&(t=function(t){var e=document.createElement("canvas");return e.style.position="fixed",e.style.top="0px",e.style.left="0px",e.style.pointerEvents="none",e.style.zIndex=t,e}(i),document.body.appendChild(t)),c&&!y&&p(t);var r={width:t.width,height:t.height};function d(){if(u){var e={getBoundingClientRect:function(){if(!s)return t.getBoundingClientRect()}};return p(e),void u.postMessage({resize:{width:e.width,height:e.height}})}r.width=r.height=null}function g(){o=null,c&&(h=!1,e.removeEventListener("resize",d)),s&&t&&(document.body.contains(t)&&document.body.removeChild(t),t=null,y=!1)}return u&&!y&&u.init(t),y=!0,u&&(t.__confetti_initialized=!0),c&&!h&&(h=!0,e.addEventListener("resize",d,!1)),u?u.fire(a,r,g):O(a,r,g)}return C.reset=function(){u&&u.reset(),o&&o.reset()},C}function C(){return u||(u=O(null,{useWorker:!0,resize:!0})),u}a.exports=function(){return C().apply(this,arguments)},a.exports.reset=function(){C().reset()},a.exports.create=O,a.exports.shapeFromPath=function(t){if(!o)throw new Error("path confetti are not supported in this browser");var e,a;"string"===typeof t?e=t:(e=t.path,a=t.matrix);var n=new Path2D(e),i=document.createElement("canvas").getContext("2d");if(!a){for(var r,s,c=1e3,l=c,h=c,f=0,u=0,d=0;d<c;d+=2)for(var g=0;g<c;g+=2)i.isPointInPath(n,d,g,"nonzero")&&(l=Math.min(l,d),h=Math.min(h,g),f=Math.max(f,d),u=Math.max(u,g));r=f-l,s=u-h;var m=Math.min(10/r,10/s);a=[m,0,0,m,-Math.round(r/2+l)*m,-Math.round(s/2+h)*m]}return{type:"path",path:e,matrix:a}},a.exports.shapeFromText=function(t){var e,a=1,n="#000000",i='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';"string"===typeof t?e=t:(e=t.text,a="scalar"in t?t.scalar:a,i="fontFamily"in t?t.fontFamily:i,n="color"in t?t.color:n);var r=10*a,o=r+"px "+i,s=new OffscreenCanvas(r,r),c=s.getContext("2d");c.font=o;var l=c.measureText(e),h=Math.ceil(l.actualBoundingBoxRight+l.actualBoundingBoxLeft),f=Math.ceil(l.actualBoundingBoxAscent+l.actualBoundingBoxDescent),u=l.actualBoundingBoxLeft+2,d=l.actualBoundingBoxAscent+2;h+=4,f+=4,(c=(s=new OffscreenCanvas(h,f)).getContext("2d")).font=o,c.fillStyle=n,c.fillText(e,u,d);var g=1/a;return{type:"bitmap",bitmap:s.transferToImageBitmap(),matrix:[g,0,0,g,-h*g/2,-f*g/2]}}}(function(){return"undefined"!==typeof window?window:"undefined"!==typeof self?self:this||{}}(),n,!1),e.a=n.exports;n.exports.create},68:function(t,e,a){"use strict";a.r(e);var n=a(4),i=a.n(n),r=a(3),o=a(9),s=a(6),c=a(0),l=a(29),h=a(264),f=a.n(h),u=a(14),d=a(31),g=a(278),m=a(5),p=a(2);e.default=Object(l.b)((function(t){return{userInfo:t.user.userInfo||{}}}))((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.userInfo||{},a=e.hasSignedToday,n=e.signinDays,l=e.signinConf,h=void 0===l?{}:l,b=Object(c.useState)(!1),v=Object(s.a)(b,2),y=v[0],M=v[1],w=Object(c.useRef)(null);Object(c.useEffect)((function(){x()}),[a]);var x=function(){var t=Object(o.a)(i.a.mark((function t(){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a){t.next=7;break}return t.next=3,Object(d.d)();case 3:e=t.sent,m.a.setUserInfo(Object(r.a)(Object(r.a)({},m.a.getUserInfo()),{},{hasSignedToday:!0,signinDays:m.a.getUserInfo().signinDays+1,coins:e.coins})),M(!0),setTimeout((function(){try{var t=w.current;t.confetti=t.confetti||g.a.create(t,{resize:!0}),t.confetti({particleCount:500,angle:90,spread:180,origin:{y:1.5,x:.5},zIndex:100,ticks:500,scalar:.7})}catch(e){}}),500);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:f.a.wrapper,children:[Object(p.jsx)("div",{className:"".concat(f.a.icon)}),Object(p.jsx)("div",{className:f.a.title,children:"Daily reward"}),Object(p.jsx)("div",{className:f.a.hit,children:"Accrue coins for logging into the game daily without skipping"}),Object(p.jsx)("div",{className:f.a.list_wrapper,children:Array.from({length:7}).map((function(t,e){return Object(p.jsxs)("div",{className:"".concat(f.a.item," ").concat(e<n?f.a.active:""," ").concat(e==n-1&&y?f.a.ani:""),children:[e<n?Object(p.jsx)("div",{className:f.a.label,children:Object(p.jsx)("div",{className:f.a.icon})}):"",e==n-1&&y?Object(p.jsx)("canvas",{width:"100%",height:"100%",ref:w}):"",Object(p.jsxs)("div",{className:f.a.item_text,children:["Day ",e+1]}),Object(p.jsx)("div",{className:f.a.item_icon}),Object(p.jsx)("div",{className:f.a.coin,children:Object(u.c)((h.rewards||{})[e+1]||0)})]},e)}))})]})}))}}]);
//# sourceMappingURL=4.dc82cacc.chunk.js.map