(this.webpackJsonpcaterpillar=this.webpackJsonpcaterpillar||[]).push([[1,18],{204:function(e,t,i){e.exports={root:"youToBeDialog_root__DBdib",caterpillar_dialog_hide:"youToBeDialog_caterpillar_dialog_hide__TT6Pv",wrapper:"youToBeDialog_wrapper__1s6Ck",icon:"youToBeDialog_icon__OeBst",title:"youToBeDialog_title__g0gYS",hit:"youToBeDialog_hit__2NYYE",hit_item:"youToBeDialog_hit_item__ZRN0-",hit_num:"youToBeDialog_hit_num__pOBZw",hit_wrapper:"youToBeDialog_hit_wrapper__2k0BN",hit_wrapper1:"youToBeDialog_hit_wrapper1__36eTw",hit_wrapper_title:"youToBeDialog_hit_wrapper_title__1QV61",hit_wrapper_l:"youToBeDialog_hit_wrapper_l__3JTSw",hit_wrapper_hit:"youToBeDialog_hit_wrapper_hit__ogqLo",hit_wrapper_icon:"youToBeDialog_hit_wrapper_icon__xHerG",tip:"youToBeDialog_tip__MDtdR",inputs:"youToBeDialog_inputs__1uj__",coin_wrapper:"youToBeDialog_coin_wrapper__esOKx",success:"youToBeDialog_success__2G6nM",success_txt:"youToBeDialog_success_txt__1STYz",success_icon:"youToBeDialog_success_icon__qZq6Q",scrolling:"youToBeDialog_scrolling__1X37s",colorCycle:"youToBeDialog_colorCycle__3_UrD",rotate:"youToBeDialog_rotate__85nJY",run:"youToBeDialog_run__2-Qc0",scaleAni:"youToBeDialog_scaleAni__U6h6T","slide-up":"youToBeDialog_slide-up__308-B"}},211:function(e,t,i){"use strict";i.d(t,"b",(function(){return s})),i.d(t,"a",(function(){return _}));var a=i(4),c=i.n(a),r=i(9),n=i(25),o=i(5),s=function(){var e=Object(r.a)(c.a.mark((function e(t,i){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.a.get("tasks",t,i);case 2:return a=e.sent,o.a.setEarnInfo(a),console.log(a,"res===="),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t,i){return e.apply(this,arguments)}}(),_=function(){var e=Object(r.a)(c.a.mark((function e(t){var i,a,r=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=r.length>1&&void 0!==r[1]?r[1]:{},e.next=3,n.a.post("tasks/complete",t,!1,!1,i);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},212:function(e,t,i){"use strict";i(1);var a=i(213),c=i.n(a),r=i(2);t.a=function(e){var t=e.isLoading,i=e.onClick,a=void 0===i?function(){}:i,n=e.disabled,o=e.txt,s=e.className,_=void 0===s?"":s;return Object(r.jsx)("div",{className:"".concat(c.a.btn," ").concat(n?c.a.disabled:""," ").concat(t?c.a.loading:""," ").concat(_),onClick:function(){n||t||a()},children:t?Object(r.jsx)("div",{className:c.a.loading_icon}):o})}},213:function(e,t,i){e.exports={root:"Button_root__2qdki",caterpillar_dialog_hide:"Button_caterpillar_dialog_hide__2TgKO",btn:"Button_btn__17eJW",loading_icon:"Button_loading_icon__3JKEg",rotate:"Button_rotate__2NYf5",disabled:"Button_disabled__1bkys",scrolling:"Button_scrolling__3fuaa",colorCycle:"Button_colorCycle__1b4Vb",run:"Button_run__38xbQ",scaleAni:"Button_scaleAni__2gahT","slide-up":"Button_slide-up__1g_tb"}},217:function(e,t,i){"use strict";i(1);var a=i(218),c=i.n(a),r=i(2);t.a=function(e){var t=e.txt,i=void 0===t?"The task is completed! Your coin reward isalready paid out.":t;return Object(r.jsxs)("div",{className:c.a.received,children:[Object(r.jsx)("div",{className:c.a.copied_icon}),Object(r.jsx)("div",{className:c.a.received_txt,children:i})]})}},218:function(e,t,i){e.exports={root:"Received_root__1i1yK",caterpillar_dialog_hide:"Received_caterpillar_dialog_hide__rc16s",received:"Received_received__176aM",copied_icon:"Received_copied_icon__1WGJH",received_txt:"Received_received_txt__3e3sr",scrolling:"Received_scrolling__1GTRL",colorCycle:"Received_colorCycle__2cQNP",rotate:"Received_rotate__fywHG",run:"Received_run__2Y7kP",scaleAni:"Received_scaleAni__4pYYX","slide-up":"Received_slide-up__2GJco"}},219:function(e,t,i){"use strict";var a=i(35),c=i(6),r=i(8),n=i(1);t.a=function(e){var t=e.changeArr,i=e.isStop,o=void 0===i?function(){return!0}:i,s=e.isStart,_=void 0===s?function(){return!1}:s,l=e.clickTime,u=void 0===l?"":l,d=e.delayTime,p=void 0===d?30:d,h=Object(n.useRef)(null),b=Object(n.useState)(!1),v=Object(c.a)(b,2),j=v[0],f=v[1],g=Object(n.useState)(!1),O=Object(c.a)(g,2),m=O[0],T=O[1],x=Object(n.useState)(0),B=Object(c.a)(x,2),w=B[0],y=B[1],k=function(){var e=_();if(T(e),!e)return clearInterval(h.current);var t=o();if(t)clearInterval(h.current),y(0);else{var i=Math.ceil(Object(r.d)(p,Object(r.b)(Object(r.d)((new Date).getTime(),u),1e3)));y("00:".concat(i<10?"0".concat(i):i))}f(t)};return Object(n.useEffect)((function(){return h.current&&clearInterval(h.current),k(),h.current=setInterval((function(){k()}),1e3),function(){clearInterval(h.current)}}),Object(a.a)(t)),{isFinished:j,startFlag:m,leftTime:w}}},67:function(e,t,i){"use strict";i.r(t);var a=i(34),c=i(3),r=i(4),n=i.n(r),o=i(9),s=i(6),_=i(1),l=i(28),u=i(204),d=i.n(u),p=i(217),h=i(5),b=i(219),v=i(212),j=i(211),f=i(29),g=i(2),O="You've written an incorrect code",m="youtobe";t.default=Object(l.b)((function(e){return{shareClickTime:e.behavior.shareClickTime}}))((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.rewardCoins,i=e.id,r=e.link,l=Object(_.useState)(e.completed),u=Object(s.a)(l,2),T=u[0],x=u[1],B=Object(_.useState)(!1),w=Object(s.a)(B,2),y=w[0],k=w[1],D=Object(_.useState)(!1),N=Object(s.a)(D,2),C=N[0],S=N[1],R=Object(_.useState)(""),E=Object(s.a)(R,2),Y=E[0],I=E[1],A=Object(_.useState)(""),U=Object(s.a)(A,2),J=U[0],L=U[1],F=Object(_.useRef)(null),G=function(){var e=Object(o.a)(n.a.mark((function e(){var t,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Y){e.next=3;break}return L(O),e.abrupt("return");case 3:if(Q){e.next=5;break}return e.abrupt("return");case 5:return k(!0),e.prev=6,e.next=9,Object(j.a)({taskId:i,code:Y},{isHideErrorToast:!0});case 9:x(!0),S(!0),Object(j.b)(),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(6),t=e.t0||O,a=t.msg,L(a);case 18:k(!1);case 19:case"end":return e.stop()}}),e,null,[[6,14]])})));return function(){return e.apply(this,arguments)}}(),H=function(){h.a.getShareClickTime()[m+i]||h.a.setShareClickTime(Object(c.a)(Object(c.a)({},h.a.getShareClickTime()),{},Object(a.a)({},m+i,(new Date).getTime()))),Object(f.f)(r)},K=Object(b.a)({changeArr:[(e.shareClickTime||{})[m+i]],clickTime:(e.shareClickTime||{})[m+i],delayTime:30,isStop:function(){var e=(h.a.getShareClickTime()||{})[m+i];return e&&(new Date).getTime()-e>3e4},isStart:function(){return!!(h.a.getShareClickTime()||{})[m+i]}}),Q=K.isFinished,q=K.startFlag,M=K.leftTime;return Object(_.useEffect)((function(){var e=F.current;if(e){var t=function(){setTimeout((function(){e.scrollIntoView({behavior:"smooth",block:"start"})}),300)};return e.addEventListener("focus",t),function(){e.removeEventListener("focus",t)}}}),[]),Object(g.jsxs)("div",{className:d.a.wrapper,children:[Object(g.jsx)("div",{className:"".concat(d.a.icon)}),Object(g.jsx)("div",{className:d.a.coin_wrapper,children:t}),Object(g.jsx)("div",{className:d.a.title,children:"Financial Stories That Teach BUY SELL"}),T?C?Object(g.jsx)(p.a,{}):Object(g.jsxs)("div",{className:d.a.success,children:[Object(g.jsx)("div",{className:d.a.success_txt,onClick:H,children:"YOUTUBE SUBSCRIBE"}),Object(g.jsx)("div",{className:d.a.success_icon})]}):Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("div",{className:d.a.hit,children:[Object(g.jsxs)("div",{className:d.a.hit_item,children:[Object(g.jsx)("div",{className:d.a.hit_num,children:"1"}),Object(g.jsxs)("div",{className:d.a.hit_wrapper,onClick:H,children:[Object(g.jsxs)("div",{className:d.a.hit_wrapper_l,children:[Object(g.jsx)("div",{className:d.a.hit_wrapper_title,children:"Complete the task via link"}),Object(g.jsx)("div",{className:d.a.hit_wrapper_hit,children:"YOUTUBE SUBSCRIBE"})]}),Object(g.jsx)("div",{className:d.a.hit_wrapper_icon})]})]}),Object(g.jsxs)("div",{className:d.a.hit_item,children:[Object(g.jsx)("div",{className:d.a.hit_num,children:"2"}),Object(g.jsx)("div",{className:"".concat(d.a.hit_wrapper," ").concat(d.a.hit_wrapper1),children:"Find the secret code in the video and paste it below for task verification"})]})]}),Object(g.jsx)("input",{className:"".concat(d.a.inputs),value:Y,onChange:function(e){return I(e.target.value)},placeholder:q?"Enter the code":"Get the code",ref:F,onClick:function(){q||H()}}),J?Object(g.jsx)("div",{className:d.a.tip,children:J}):"",Object(g.jsx)(v.a,{onClick:G,isLoading:y,disabled:!Q,txt:Q||!q?"CHECK THE TASK":M})]})]})}))}}]);
//# sourceMappingURL=1.f7fe2628.chunk.js.map