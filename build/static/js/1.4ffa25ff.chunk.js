(this.webpackJsonpcaterpillar=this.webpackJsonpcaterpillar||[]).push([[1,18],{266:function(e,t,a){e.exports={root:"youToBeDialog_root__2kFmH",caterpillar_dialog_hide:"youToBeDialog_caterpillar_dialog_hide__2t5pB","paint-order-supported":"youToBeDialog_paint-order-supported__3-Pj1",wrapper:"youToBeDialog_wrapper__2XcE5",icon:"youToBeDialog_icon__1Qf4Z",title:"youToBeDialog_title__3f8Us",hit:"youToBeDialog_hit__9Itqb",hit_item:"youToBeDialog_hit_item__2RmiL",hit_num:"youToBeDialog_hit_num__3oN65",hit_wrapper:"youToBeDialog_hit_wrapper__23ecf",hit_wrapper1:"youToBeDialog_hit_wrapper1__3RhuE",hit_wrapper_title:"youToBeDialog_hit_wrapper_title__37lK9",hit_wrapper_l:"youToBeDialog_hit_wrapper_l__1Npph",hit_wrapper_hit:"youToBeDialog_hit_wrapper_hit__1pOhr",hit_wrapper_icon:"youToBeDialog_hit_wrapper_icon__2_Clr",tip:"youToBeDialog_tip__YgNZq","input-wrapper":"youToBeDialog_input-wrapper__2w63h",inputs:"youToBeDialog_inputs__39A8b","input-wrapper-cover":"youToBeDialog_input-wrapper-cover__1AcQ8",coin_wrapper:"youToBeDialog_coin_wrapper__3kst8",success:"youToBeDialog_success__1hAQR",success_txt:"youToBeDialog_success_txt__1qaBe",success_icon:"youToBeDialog_success_icon__2nRQy",scrolling:"youToBeDialog_scrolling__3uIA7",colorCycle:"youToBeDialog_colorCycle__1B-Rk",rotate:"youToBeDialog_rotate__2CI69",run:"youToBeDialog_run___J6Dr",scaleAni:"youToBeDialog_scaleAni__8kTLD","slide-up":"youToBeDialog_slide-up__131pS"}},273:function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"a",(function(){return _}));var i=a(4),c=a.n(i),r=a(9),n=a(26),o=a(5),s=function(){var e=Object(r.a)(c.a.mark((function e(t,a){var i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.a.get("tasks",t,a);case 2:return i=e.sent,o.a.setEarnInfo(i),console.log(i,"res===="),e.abrupt("return",i);case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),_=function(){var e=Object(r.a)(c.a.mark((function e(t){var a,i,r=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.length>1&&void 0!==r[1]?r[1]:{},e.next=3,n.a.post("tasks/complete",t,!1,!1,a);case 3:return i=e.sent,e.abrupt("return",i);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},274:function(e,t,a){"use strict";a(0);var i=a(275),c=a.n(i),r=a(2);t.a=function(e){var t=e.isLoading,a=e.onClick,i=void 0===a?function(){}:a,n=e.disabled,o=e.txt,s=e.className,_=void 0===s?"":s;return Object(r.jsx)("div",{className:"".concat(c.a.btn," ").concat(n?c.a.disabled:""," ").concat(t?c.a.loading:""," ").concat(_),onClick:function(){n||t||i()},children:t?Object(r.jsx)("div",{className:c.a.loading_icon}):o})}},275:function(e,t,a){e.exports={root:"Button_root__3r4Gs",caterpillar_dialog_hide:"Button_caterpillar_dialog_hide__2tq6j","paint-order-supported":"Button_paint-order-supported__3e4Wf",btn:"Button_btn__aebND",loading_icon:"Button_loading_icon__129-v",rotate:"Button_rotate__1jiyn",disabled:"Button_disabled__3cERt",scrolling:"Button_scrolling__2XRNT",colorCycle:"Button_colorCycle__3nug0",run:"Button_run__3iO9P",scaleAni:"Button_scaleAni__b2YtP","slide-up":"Button_slide-up__2p_wO"}},279:function(e,t,a){"use strict";a(0);var i=a(280),c=a.n(i),r=a(2);t.a=function(e){var t=e.txt,a=void 0===t?"The task is completed! Your coin reward isalready paid out.":t;return Object(r.jsxs)("div",{className:c.a.received,children:[Object(r.jsx)("div",{className:c.a.copied_icon}),Object(r.jsx)("div",{className:c.a.received_txt,children:a})]})}},280:function(e,t,a){e.exports={root:"Received_root__3el9K",caterpillar_dialog_hide:"Received_caterpillar_dialog_hide__397al","paint-order-supported":"Received_paint-order-supported__vVOfu",received:"Received_received__1Ilog",copied_icon:"Received_copied_icon__1SqkM",received_txt:"Received_received_txt__5k6DP",scrolling:"Received_scrolling__3kNIc",colorCycle:"Received_colorCycle__1-yWG",rotate:"Received_rotate__1hKa7",run:"Received_run__PFkf1",scaleAni:"Received_scaleAni__ljq-S","slide-up":"Received_slide-up__2007O"}},281:function(e,t,a){"use strict";var i=a(35),c=a(6),r=a(7),n=a(0);t.a=function(e){var t=e.changeArr,a=e.isStop,o=void 0===a?function(){return!0}:a,s=e.isStart,_=void 0===s?function(){return!1}:s,l=e.clickTime,u=void 0===l?"":l,d=e.delayTime,p=void 0===d?30:d,j=Object(n.useRef)(null),h=Object(n.useState)(!1),b=Object(c.a)(h,2),v=b[0],f=b[1],O=Object(n.useState)(!1),g=Object(c.a)(O,2),m=g[0],T=g[1],x=Object(n.useState)(0),B=Object(c.a)(x,2),w=B[0],y=B[1],k=function(){var e=_();if(T(e),!e)return clearInterval(j.current);var t=o();if(t)clearInterval(j.current),y(0);else{var a=Math.ceil(Object(r.d)(p,Object(r.b)(Object(r.d)((new Date).getTime(),u),1e3)));y("00:".concat(a<10?"0".concat(a):a))}f(t)};return Object(n.useEffect)((function(){return j.current&&clearInterval(j.current),k(),j.current=setInterval((function(){k()}),1e3),function(){clearInterval(j.current)}}),Object(i.a)(t)),{isFinished:v,startFlag:m,leftTime:w}}},70:function(e,t,a){"use strict";a.r(t);var i=a(34),c=a(3),r=a(4),n=a.n(r),o=a(9),s=a(6),_=a(0),l=a(29),u=a(266),d=a.n(u),p=a(279),j=a(5),h=a(281),b=a(274),v=a(273),f=a(28),O=a(14),g=a(45),m=a(2),T="You've written an incorrect code",x="youtobe";t.default=Object(l.b)((function(e){return{shareClickTime:e.behavior.shareClickTime}}))((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.rewardCoins,a=e.id,r=e.link,l=Object(_.useState)(e.completed),u=Object(s.a)(l,2),B=u[0],w=u[1],y=Object(_.useState)(!1),k=Object(s.a)(y,2),D=k[0],N=k[1],C=Object(_.useState)(!1),S=Object(s.a)(C,2),R=S[0],E=S[1],I=Object(_.useState)(""),A=Object(s.a)(I,2),F=A[0],L=A[1],U=Object(_.useState)(""),Y=Object(s.a)(U,2),q=Y[0],K=Y[1],P=Object(_.useRef)(null),H=function(){var e=Object(o.a)(n.a.mark((function e(){var t,i;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(F){e.next=3;break}return K(T),e.abrupt("return");case 3:if(G){e.next=5;break}return e.abrupt("return");case 5:return N(!0),e.prev=6,e.next=9,Object(v.a)({taskId:a,code:F},{isHideErrorToast:!0});case 9:w(!0),E(!0),Object(v.b)(),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(6),t=e.t0||T,i=t.msg,K(i);case 18:N(!1);case 19:case"end":return e.stop()}}),e,null,[[6,14]])})));return function(){return e.apply(this,arguments)}}(),Q=function(){j.a.getShareClickTime()[x+a]||j.a.setShareClickTime(Object(c.a)(Object(c.a)({},j.a.getShareClickTime()),{},Object(i.a)({},x+a,(new Date).getTime()))),Object(f.f)(r)},z=Object(h.a)({changeArr:[(e.shareClickTime||{})[x+a]],clickTime:(e.shareClickTime||{})[x+a],delayTime:30,isStop:function(){var e=(j.a.getShareClickTime()||{})[x+a];return e&&(new Date).getTime()-e>3e4},isStart:function(){return!!(j.a.getShareClickTime()||{})[x+a]}}),G=z.isFinished,J=z.startFlag,M=z.leftTime;return Object(_.useEffect)((function(){var e=P.current;if(e){var t=function(){setTimeout((function(){e.scrollIntoView({behavior:"smooth",block:"start"})}),300)};return e.addEventListener("focus",t),function(){e.removeEventListener("focus",t)}}}),[]),Object(m.jsxs)("div",{className:d.a.wrapper,children:[Object(m.jsx)("div",{className:"".concat(d.a.icon)}),Object(m.jsx)("div",{className:d.a.coin_wrapper,children:Object(m.jsx)(g.a,{text:Object(O.c)(t),fontSize:36})}),Object(m.jsx)("div",{className:d.a.title,children:"Financial Stories That Teach BUY SELL"}),B?R?Object(m.jsx)(p.a,{}):Object(m.jsxs)("div",{className:d.a.success,children:[Object(m.jsx)("div",{className:d.a.success_txt,onClick:Q,children:Object(m.jsx)(g.a,{text:"YOUTUBE SUBSCRIBE",fontSize:32})}),Object(m.jsx)("div",{className:d.a.success_icon})]}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:d.a.hit,children:[Object(m.jsxs)("div",{className:d.a.hit_item,children:[Object(m.jsx)("div",{className:d.a.hit_num,children:"1"}),Object(m.jsxs)("div",{className:d.a.hit_wrapper,onClick:Q,children:[Object(m.jsxs)("div",{className:d.a.hit_wrapper_l,children:[Object(m.jsx)("div",{className:d.a.hit_wrapper_title,children:"Complete the task via link"}),Object(m.jsx)("div",{className:d.a.hit_wrapper_hit,children:Object(m.jsx)(g.a,{text:"YOUTUBE SUBSCRIBE",fontSize:28})})]}),Object(m.jsx)("div",{className:d.a.hit_wrapper_icon})]})]}),Object(m.jsxs)("div",{className:d.a.hit_item,children:[Object(m.jsx)("div",{className:d.a.hit_num,children:"2"}),Object(m.jsx)("div",{className:"".concat(d.a.hit_wrapper," ").concat(d.a.hit_wrapper1),children:"Find the secret code in the video and paste it below for task verification"})]})]}),Object(m.jsxs)("div",{className:d.a["input-wrapper"],children:[J?"":Object(m.jsx)("div",{className:d.a["input-wrapper-cover"],onClick:function(){Q()}}),Object(m.jsx)("input",{disabled:!J,className:"".concat(d.a.inputs),value:F,onChange:function(e){return L(e.target.value)},placeholder:J?"Enter the code":"Get the code",ref:P})]}),q?Object(m.jsx)("div",{className:d.a.tip,children:q}):"",Object(m.jsx)(b.a,{onClick:H,isLoading:D,disabled:!G,txt:G||!J?"CHECK THE TASK":M})]})]})}))}}]);
//# sourceMappingURL=1.4ffa25ff.chunk.js.map