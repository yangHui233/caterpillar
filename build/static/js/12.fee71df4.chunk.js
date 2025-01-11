(this.webpackJsonpcaterpillar=this.webpackJsonpcaterpillar||[]).push([[12],{215:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n={title:"Boosters",list:[{field:"energyBonus",title:"Affection",icon:"affection",type:"1",hit:'Purchased "Favorability Potion" to increase the benefit of a single click.',updatedTxt:'Purchased "Favorability Boost". Now your earnings per click limit has been increased.',upDateTemplete:"+X",fieldConfig:{current:"currentBonus.coinBonus",next:"nextBonus.coinBonus"},upGradePort:"upgrade/energy-bonus"},{field:"energyCap",title:"Energy Cap",icon:"energy",type:"1",hit:'Purchased "Energy Strengthening Potion" to increase your energy capacity.',updatedTxt:'Purchased "Energy Limit Boost". Now your energy limit has been increased.',upDateTemplete:"X",fieldConfig:{current:"currentCapacity",next:"nextCapacity"},upGradePort:"upgrade/energy-cap"},{field:"energyRecovery",title:"Recharging Speed",icon:"speed",type:"1",hit:'Purchase "Recharge Potion" to increase the speed of your energy replenishment.',updatedTxt:'Purchased "Charge Speed Up". Now your charging speed has been increased.',upDateTemplete:"+X/S",fieldConfig:{current:"currentRate",next:"nextRate"},upGradePort:"upgrade/energy-recovery"},{field:"miningStorage",title:"Storage Time",icon:"time",type:"1",hit:"Purchase a Time Potion to increase your mining storage time.",updatedTxt:'Purchased "Storage Time Boost". Now your storage time has increased.',upDateTemplete:"XH",fieldConfig:{current:"currentPeriodsHour",next:"nextPeriodsHour"},upGradePort:"upgrade/mining-storage"},{field:"increaseFavor",title:"Increase Favorability",icon:"increase",type:"2",hit:"Purchase a favor potion to increase your favor level.",updatedTxt:"You have successfully purchased a favor potion, and now your favor level has increased by XXX",upDateTemplete:"X",fieldConfig:{next:"increaseFavor"},upGradePort:"upgrade/favor"}]}},220:function(e,t,r){e.exports={root:"Boosters_root__3L437",caterpillar_dialog_hide:"Boosters_caterpillar_dialog_hide__3Xcm3",wrapper:"Boosters_wrapper__3qCjD",ani:"Boosters_ani__2KSVn",run:"Boosters_run__1d1Hd",card:"Boosters_card__1i6Lo",card_title:"Boosters_card_title__1rMcU",card_info:"Boosters_card_info__3pOiF",icon:"Boosters_icon__1R16T",num:"Boosters_num__vocMK",scrolling:"Boosters_scrolling__23p-v",colorCycle:"Boosters_colorCycle__3pvFT",rotate:"Boosters_rotate__3FW1R",scaleAni:"Boosters_scaleAni__1bV4I","slide-up":"Boosters_slide-up__4yRLU"}},232:function(e,t,r){"use strict";r.r(t);var n=r(4),a=r.n(n),o=r(9),i=r(3),c=r(1),s=r(28),u=r(220),l=r.n(u),d=r(14),p=r(214),f=r(215),g=r(27),y=r(22),v=r(68),h=r(5),b={full:"You have reached your maximum upgrade level and cannot upgrade any further.",lock:"You can't upgrade if you don't have enough points. Click and earn more gold!"},_=r(25),j=function(){var e=Object(o.a)(a.a.mark((function e(t,r){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.get("upgrade/list",t,r);case 2:return n=e.sent,h.a.setUpgradeInfo(n),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),x=function(){var e=Object(o.a)(a.a.mark((function e(t,r,n){var o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.post(t,r,n);case 2:return o=e.sent,e.abrupt("return",o);case 4:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}(),m=r(78),B=r(30),O=r(2);t.default=Object(s.b)((function(e){return{isBuying:e.behavior.isBuying,upgradeInfo:e.user.upgradeInfo||{}}}))((function(e){var t=e.upgradeInfo;Object(c.useEffect)((function(){h.a.setIsBuying(!1),j()}),[]),Object(c.useEffect)((function(){t.energyBonus?Object(g.hideLoading)():Object(g.showLoading)()}),[t]);return Object(O.jsx)(m.a,{type:"boosters",children:Object(O.jsxs)("div",{className:"".concat(l.a.wrapper),children:[Object(O.jsx)("div",{className:l.a.ani}),Object(O.jsxs)("div",{className:l.a.card,children:[Object(O.jsx)("div",{className:l.a.card_title,children:"Your Coins Balance"}),Object(O.jsxs)("div",{className:l.a.card_info,children:[Object(O.jsx)("div",{className:l.a.icon}),Object(O.jsxs)("div",{className:l.a.num,children:[Object(d.c)(t.coins)," "]})]})]}),Object(O.jsx)(p.a,{list:f.a.list.map((function(e){var r=e.fieldConfig,n=void 0===r?{}:r,a=t[e.field];if(!a)return null;var o=a.isMax,c=a.currentLevel,s=a.upgradeCost;return Object(i.a)(Object(i.a)({},e),{},{val:c,coins:s,status:o?"full":t.coins<s?"lock":"",currentVal:Object(d.a)(a,n.current),nextVal:Object(d.a)(a,n.next)})})).filter(Boolean),title:f.a.title,styleType:1,handleItemCli:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.status;["full","lock"].includes(t)?v.a.info(t,b[t]):(h.a.setIsBuying(!1),Object(g.buyToolsDialog)(Object(i.a)(Object(i.a)({},e),{},{handleConfirm:function(){var t=Object(o.a)(a.a.mark((function t(){var r,n,c,s,u,l;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!h.a.getIsBuying()){t.next=2;break}return t.abrupt("return");case 2:return h.a.setIsBuying(!0),r=function(t){j(),h.a.setIsBuying(!1),y.a.hide("dialog");var r=e.updatedTxt;"2"===e.type&&(r=r.replace("XXX",Object(d.e)(e.nextVal))),v.a.info(e.icon,r);var n=t.coins,a=t.energyCap,o=t.recoveryRate,c=t.bonus;h.a.setUserInfo(Object(i.a)(Object(i.a)({},h.a.getUserInfo()),{},{coins:n})),a&&h.a.setEnergyInfo(Object(i.a)(Object(i.a)({},h.a.getEnergyInfo()),{},{energyCap:a})),o&&h.a.setEnergyInfo(Object(i.a)(Object(i.a)({},h.a.getEnergyInfo()),{},{rate:o})),c&&(h.a.setEnergyInfo(Object(i.a)(Object(i.a)({},h.a.getEnergyInfo()),{},{energyCost:c.energyCost})),h.a.setEnergyInfo(Object(i.a)(Object(i.a)({},h.a.getEnergyInfo()),{},{favorBonus:c.favorBonus,coinBonus:c.coinBonus})))},t.prev=4,t.next=7,x(e.upGradePort);case 7:if(!(n=t.sent).levelUp||!n.levelUp.coins){t.next=12;break}return c=n.levelUp||{},s=c.coins,u=c.oldLevel,l=c.newLevel,Object(g.updateDialog)({level:u,nextLevel:{level:l,levelUpCoins:s},handleClose:function(){var e=Object(o.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h.a.setIsUpdateLoading(!0),e.prev=1,r(n),e.next=5,Object(B.c)();case 5:e.next=9;break;case 7:e.prev=7,e.t0=e.catch(1);case 9:h.a.setIsUpdateLoading(!1),y.a.hide("dialog");case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(){return e.apply(this,arguments)}}()}),t.abrupt("return");case 12:r(n),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(4),h.a.setIsBuying(!1);case 18:case"end":return t.stop()}}),t,null,[[4,15]])})));return function(){return t.apply(this,arguments)}}(),handleCancel:function(){h.a.getIsBuying()||y.a.hide("dialog")}})))}})]})})}))}}]);
//# sourceMappingURL=12.fee71df4.chunk.js.map