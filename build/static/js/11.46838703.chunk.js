(this.webpackJsonpcaterpillar=this.webpackJsonpcaterpillar||[]).push([[11],{130:function(e,t,n){e.exports={caterpillar_dialog_hide:"Invite_caterpillar_dialog_hide__MP_hn",wrapper:"Invite_wrapper__2tYlS",top_wrapper:"Invite_top_wrapper__3D8gQ",title:"Invite_title__1k2zm",nums:"Invite_nums__1ZiEq",hit:"Invite_hit__34eMF",invite_coin:"Invite_invite_coin__3XR5r",coin:"Invite_coin__3ZuSC",empty:"Invite_empty__XCDxd",icon:"Invite_icon__3vR4f",invite_btn:"Invite_invite_btn__tDY39",content:"Invite_content__2WmRY",scrolling:"Invite_scrolling__2RK09",colorCycle:"Invite_colorCycle__1BAYB",rotate:"Invite_rotate__3T3wk",run:"Invite_run__1cHiI","slide-up":"Invite_slide-up__7At8m"}},131:function(e,t,n){"use strict";var a=n(132),i={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,o,c,r,l,s,d=!1;t||(t={}),n=t.debug||!1;try{if(c=a(),r=document.createRange(),l=document.getSelection(),(s=document.createElement("span")).textContent=e,s.ariaHidden="true",s.style.all="unset",s.style.position="fixed",s.style.top=0,s.style.clip="rect(0, 0, 0, 0)",s.style.whiteSpace="pre",s.style.webkitUserSelect="text",s.style.MozUserSelect="text",s.style.msUserSelect="text",s.style.userSelect="text",s.addEventListener("copy",(function(a){if(a.stopPropagation(),t.format)if(a.preventDefault(),"undefined"===typeof a.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var o=i[t.format]||i.default;window.clipboardData.setData(o,e)}else a.clipboardData.clearData(),a.clipboardData.setData(t.format,e);t.onCopy&&(a.preventDefault(),t.onCopy(a.clipboardData))})),document.body.appendChild(s),r.selectNodeContents(s),l.addRange(r),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");d=!0}catch(p){n&&console.error("unable to copy using execCommand: ",p),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),d=!0}catch(p){n&&console.error("unable to copy using clipboardData: ",p),n&&console.error("falling back to prompt"),o=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(o,e)}}finally{l&&("function"==typeof l.removeRange?l.removeRange(r):l.removeAllRanges()),s&&document.body.removeChild(s),c()}return d}},132:function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],a=0;a<e.rangeCount;a++)n.push(e.getRangeAt(a));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},135:function(e,t,n){"use strict";n.r(t);var a=n(5),i=n(1),o=n(122),c=n(130),r=n.n(c),l=n(67),s=n(131),d=n.n(s),p=n(2);t.default=function(){var e=Object(i.useState)([{title:"Jenny",type:3,val:500,icon:"fren"}]),t=Object(a.a)(e,2),n=t[0];t[1];return Object(p.jsxs)("div",{className:r.a.wrapper,children:[Object(p.jsxs)("div",{className:r.a.top_wrapper,children:[Object(p.jsx)("div",{className:r.a.title,children:"lnvite frens!"}),Object(p.jsx)("div",{className:r.a.nums,children:"FRENS"}),Object(p.jsx)("div",{className:r.a.hit,children:"You'll get 50,000 Coins for every invite,"})]}),Object(p.jsx)(o.a,{list:n,title:"Friend list(".concat(n.length,")"),styleType:2,children:Object(p.jsxs)("div",{className:r.a.invite_coin,children:["Received:",Object(p.jsx)("div",{className:r.a.coin,children:"50,000"})]})}),n&&0===n.length?Object(p.jsxs)("div",{className:r.a.empty,children:[Object(p.jsx)("div",{className:r.a.icon}),Object(p.jsx)("div",{children:"We haven't found any users that joined the game with your invite code. Invite friends to receive bonuses!"})]}):"",Object(p.jsx)("div",{className:r.a.invite_btn,onClick:function(){l.a.info("copied","Invite link copied to clipboard. Send it to frens and receive coin rewards."),d()("https://www.baidu.com")},children:Object(p.jsx)("div",{className:r.a.content,children:"Invite a fren"})})]})}}}]);
//# sourceMappingURL=11.46838703.chunk.js.map