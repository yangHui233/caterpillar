(this.webpackJsonpcaterpillar=this.webpackJsonpcaterpillar||[]).push([[10],{275:function(e,r,t){"use strict";t.d(r,"b",(function(){return u})),t.d(r,"a",(function(){return s}));var n=t(4),a=t.n(n),o=t(9),i=t(26),c=t(5),u=function(){var e=Object(o.a)(a.a.mark((function e(r,t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("tasks",r,t);case 2:return n=e.sent,c.a.setEarnInfo(n),console.log(n,"res===="),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}(),s=function(){var e=Object(o.a)(a.a.mark((function e(r){var t,n,o=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>1&&void 0!==o[1]?o[1]:{},e.next=3,i.a.post("tasks/complete",r,!1,!1,t);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},279:function(e,r,t){"use strict";t.d(r,"a",(function(){return n}));var n={title:"Boosters",list:[{field:"energyBonus",title:"Affection",icon:"affection",type:"1",hit:'Purchased "Favorability Potion" to increase the benefit of a single click.',updatedTxt:'Purchased "Favorability Boost". Now your earnings per click limit has been increased.',upDateTemplete:"+X",fieldConfig:{current:"currentBonus.coinBonus",next:"nextBonus.coinBonus"},upGradePort:"upgrade/energy-bonus"},{field:"energyCap",title:"Energy Cap",icon:"energy",type:"1",hit:'Purchased "Energy Strengthening Potion" to increase your energy capacity.',updatedTxt:'Purchased "Energy Limit Boost". Now your energy limit has been increased.',upDateTemplete:"X",fieldConfig:{current:"currentCapacity",next:"nextCapacity"},upGradePort:"upgrade/energy-cap"},{field:"energyRecovery",title:"Recharging Speed",icon:"speed",type:"1",hit:'Purchase "Recharge Potion" to increase the speed of your energy replenishment.',updatedTxt:'Purchased "Charge Speed Up". Now your charging speed has been increased.',upDateTemplete:"+X/S",fieldConfig:{current:"currentRate",next:"nextRate"},upGradePort:"upgrade/energy-recovery"},{field:"miningStorage",title:"Storage Time",icon:"time",type:"1",hit:"Purchase a Time Potion to increase your mining storage time.",updatedTxt:'Purchased "Storage Time Boost". Now your storage time has increased.',upDateTemplete:"XH",fieldConfig:{current:"currentPeriodsHour",next:"nextPeriodsHour"},upGradePort:"upgrade/mining-storage"},{field:"increaseFavor",title:"Increase Favorability",icon:"increase",type:"2",hit:"Purchase a favor potion to increase your favor level.",updatedTxt:"You have successfully purchased a favor potion, and now your favor level has increased by XXX",upDateTemplete:"X",fieldConfig:{next:"increaseFavor"},upGradePort:"upgrade/favor"}]}},286:function(e,r,t){e.exports={root:"Earn_root__1_c1p",caterpillar_dialog_hide:"Earn_caterpillar_dialog_hide__cl25m",wrapper:"Earn_wrapper__pVLO4",top_wrapper:"Earn_top_wrapper__3joel",scrolling:"Earn_scrolling__2d4LE",colorCycle:"Earn_colorCycle__3dKW7",rotate:"Earn_rotate__3_wls",run:"Earn_run__1hrwB",scaleAni:"Earn_scaleAni__QWR3X","slide-up":"Earn_slide-up__35qI4"}},291:function(e,r,t){"use strict";t.r(r);var n=t(3),a=t(4),o=t.n(a),i=t(9),c=t(1),u=t(278),s=t(30),p=(t(279),t(31)),l=t(286),d=t.n(l),f=t(275),g=t(5),h=t(81),y=t(0);r.default=Object(s.b)((function(e){return{earnInfo:e.user.earnInfo||[]}}))((function(e){var r=e.earnInfo,t=void 0===r?[]:r;Object(c.useEffect)((function(){a()}),[]),Object(c.useEffect)((function(){var e=g.a.getEarnInfo()||[];e&&e.length>0?Object(p.hideLoading)():Object(p.showLoading)()}),[t]);var a=function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.b)();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(e){var r=(e||{}).icon;["youtube"].includes(r)?Object(p.youToBeDialog)(Object(n.a)({},e)):Object(p.shareDialog)(Object(n.a)({},e))},l=function(e){return{Youtube:"youtube",Telegram:"tg",X:"x"}[e]||e};return Object(y.jsx)(h.a,{type:"earn",children:Object(y.jsxs)("div",{className:"".concat(d.a.wrapper),children:[Object(y.jsx)("div",{className:d.a.top_wrapper}),(t||[]).map((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(y.jsx)(u.a,{list:(e.tasks||[]).map((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(n.a)(Object(n.a)({},e),{},{title:e.description,icon:l(e.group.name),shareType:l(e.group.name),val:e.rewardCoins})})),title:e.description,styleType:2,handleItemCli:s},e.id)}))]})})}))}}]);