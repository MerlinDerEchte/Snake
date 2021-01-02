(this.webpackJsonpsnake=this.webpackJsonpsnake||[]).push([[0],{102:function(e,t,n){"use strict";n.r(t);var s=n(1),i=n(0),r=n.n(i),c=n(15),a=n.n(c),o=(n(48),n(2)),l=(n(49),n(38)),u=n.n(l),h=n(36),j=n.n(h),d=n(40),O=n.n(d),m=n(39),b=n.n(m),f=[1,2,3];var v=function(e){var t=Object(i.useState)(e.difficulty),n=Object(o.a)(t,2),r=n[0],c=n[1],a=Object(i.useState)(e.mirroring),l=Object(o.a)(a,2),h=l[0],d=l[1];return Object(s.jsx)("div",{id:"SettingsOverlay",children:Object(s.jsxs)("div",{id:"SettingsMain",children:[Object(s.jsx)("div",{id:"SettingsHeader",children:"Settings"}),Object(s.jsxs)("form",{id:"SettingsForm",onSubmit:function(t){return t.stopPropagation(),e.setDifficulty(r),e.setMirroring(h),void e.setShowSettings(!1)},children:[Object(s.jsxs)("div",{className:"settingPart",children:[Object(s.jsx)("div",{className:"settingPartDescription",children:"Navigation"}),Object(s.jsx)("div",{className:"arrowContainer",children:Object(s.jsx)(j.a,{})}),Object(s.jsxs)("div",{className:"arrowContainer",children:[Object(s.jsx)(u.a,{}),Object(s.jsx)(b.a,{}),Object(s.jsx)(O.a,{})]})]}),Object(s.jsxs)("div",{className:"settingPart",children:[Object(s.jsx)("div",{className:"settingPartDescription",children:"Difficulty"}),Object(s.jsx)("div",{className:"",children:Object(s.jsx)("select",{value:r,onChange:function(e){return c(e.target.value)},children:f.map((function(e,t){return Object(s.jsx)("option",{value:e,children:e},t)}))})})]}),Object(s.jsxs)("div",{className:"settingPart",children:[Object(s.jsx)("div",{className:"settingPartDescription",children:"Wall mirroring"}),Object(s.jsx)("div",{className:"",children:Object(s.jsxs)("select",{value:h,onChange:function(e){return function(e){switch(e){default:d(!1);break;case"true":d(!0);break;case"false":d(!1)}}(e.target.value)},children:[Object(s.jsx)("option",{value:!1,children:"false"},1),Object(s.jsx)("option",{value:!0,children:"true"},2)]})})]}),Object(s.jsx)("div",{className:"settingPart",children:Object(s.jsx)("button",{type:"submit",children:"Ok"})})]})]})})},g=n(7);var x=function(e){return Object(s.jsx)("div",{id:"gameOverOverlay",children:Object(s.jsxs)("div",{id:"gameOverOverlayCenter",children:[Object(s.jsx)("span",{id:"gameOverText",children:"GameOver"}),Object(s.jsxs)("span",{id:"scoreText",children:["Your score is: ",e.score]}),Object(s.jsx)("button",{id:"settingsButton",onClick:e.setShowSettings,children:"Settings"}),Object(s.jsx)("button",{id:"newGameButton",onClick:e.resetGame,children:"newGame"})]})})},T=n(17),y=n(41),p=Object.freeze({LEFT:"LEFT",RIGHT:"RIGHT",TOP:"TOP",BOTTOM:"BOTTOM"}),w=function e(t,n){Object(T.a)(this,e),this.x=t,this.y=n},S=function(e){switch(e){case p.BOTTOM:return p.TOP;case p.TOP:return p.BOTTOM;case p.LEFT:return p.RIGHT;case p.RIGHT:return p.LEFT;default:return null}},k=function(){function e(t,n,s){Object(T.a)(this,e),this.direction=t,this.elements=n,this.eats=s}return Object(y.a)(e,[{key:"addTailElement",value:function(e){this.elements=[].concat(Object(g.a)(this.elements),[e])}},{key:"eatElement",value:function(e){this.elements=[e].concat(Object(g.a)(this.elements))}},{key:"getElements",value:function(){this.elements.map((function(e){return e}))}},{key:"getTail",value:function(){return this.elements[this.elements.length-1]}},{key:"getHeadPosition",value:function(){return this.elements[0]}},{key:"move",value:function(){switch(this.direction){default:return;case p.RIGHT:var e=this.elements[0].x+1,t=this.elements[0].y,n=new w(e,t);this.elements.pop(),this.elements.unshift(n);break;case p.LEFT:var s=new w(this.elements[0].x-1,this.elements[0].y);this.elements.pop(),this.elements.unshift(s);break;case p.TOP:var i=new w(this.elements[0].x,this.elements[0].y-1);this.elements.pop(),this.elements.unshift(i);break;case p.BOTTOM:var r=new w(this.elements[0].x,this.elements[0].y+1);this.elements.pop(),this.elements.unshift(r)}}},{key:"mirrorMove",value:function(e,t){switch(this.direction){default:return;case p.LEFT:var n=e-1,s=this.elements[0].y,i=new w(n,s);this.elements.pop(),this.elements.unshift(i);break;case p.RIGHT:var r=this.elements[0].y,c=new w(0,r);this.elements.pop(),this.elements.unshift(c);break;case p.TOP:var a=this.elements[0].x,o=new w(a,t-1);this.elements.pop(),this.elements.unshift(o);break;case p.BOTTOM:var l=this.elements[0].x,u=new w(l,0);this.elements.pop(),this.elements.unshift(u)}}},{key:"setEats",value:function(e){this.eats=e}},{key:"setDirection",value:function(e){e!==S(this.direction)&&(this.direction=e)}}]),e}(),P=(n(55),[150,100,50]);var E=function(e){var t=Object(i.useState)(!1),n=Object(o.a)(t,2),r=n[0],c=n[1],a=Object(i.useState)(0),l=Object(o.a)(a,2),u=l[0],h=l[1],j=Object(i.useState)(0),d=Object(o.a)(j,2),O=d[0],m=d[1],b=Object(i.useState)(new k(p.RIGHT,[new w(5,5),new w(4,5)],!1)),f=Object(o.a)(b,2),v=f[0],T=f[1],y=Object(i.useState)(new w(2,2)),S=Object(o.a)(y,2),E=S[0],M=S[1],N=Object(i.useState)([]),F=Object(o.a)(N,2),H=F[0],G=F[1],C=20,L=20,B=Object(g.a)(Array(400));function I(e){for(var t=0,n=[];t<e;t++)!1===R(t,!0)&&n.push(t);var s=n[Math.floor(Math.random()*n.length)],i=new w(s%C,Math.floor(s/L));M(i)}function R(e,t){if(t){var n=!1;return v.elements.forEach((function(t){t.x===e%C&&t.y===Math.floor(e/L)&&(n=!0)})),n}var s=!1;return v.elements.forEach((function(t,n){n>0&&t.x===e%C&&t.y===Math.floor(e/L)&&(s=!0)})),s}function D(e){if(!A)switch(e.key){default:return;case"ArrowUp":A=p.TOP;break;case"ArrowDown":A=p.BOTTOM;break;case"ArrowRight":A=p.RIGHT;break;case"ArrowLeft":A=p.LEFT}}console.log(e.mirroring);var A=null;return document.addEventListener("keydown",(function(e){return function(e,t){var n=null;return function(){var s=this,i=arguments;clearTimeout(n),n=setTimeout((function(){e.apply(s,i)}),t)}}(D(e),10)})),Object(i.useEffect)((function(){if(!r)var t=setTimeout((function(){A&&v.setDirection(A),H.length>0&&H[0].x===v.getTail().x&&H[0].y===v.getTail().y&&(v.addTailElement(H[0]),H.shift(),0===H.length&&v.setEats(!1)),v.getHeadPosition().x===E.x&&v.getHeadPosition().y===E.y&&(v.setEats(!0),H.push(E),I(400),m(O+1)),console.log(e.mirroring),R(v.getHeadPosition().x+v.getHeadPosition().y*L,!1)?(console.log("hit snake"),c(!0)):0===v.elements[0].x&&v.direction===p.LEFT||19===v.elements[0].x&&v.direction===p.RIGHT||0===v.elements[0].y&&v.direction===p.TOP||19===v.elements[0].y&&v.direction===p.BOTTOM?e.mirroring?v.mirrorMove(C,L):c(!0):v.move(),h(u+1)}),P[e.difficulty-1]);return function(){clearTimeout(t),document.removeEventListener("keydown",(function(e){return D(e)}))}}),[u]),Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{className:"centerContainer",children:[Object(s.jsxs)("div",{className:"scoreContainer",children:["Score: ",O]}),Object(s.jsxs)("div",{className:"gameContainer",children:[r?Object(s.jsx)(x,{setShowSettings:e.setShowSettings,score:O,resetGame:function(){m(0),c(!1),I(400),T(new k(p.RIGHT,[new w(5,5),new w(4,5)],!1)),G([]),h(0)}}):"",B.map((function(e,t){return R(t,!0)?Object(s.jsx)("div",{className:"snakeField"},t):function(e){return E.x===e%C&&E.y===Math.floor(e/L)}(t)?Object(s.jsx)("div",{className:"elementField"},t):Object(s.jsx)("div",{className:"field"},t)}))]})]})})};n(56);var M=function(){var e=Object(i.useState)(!0),t=Object(o.a)(e,2),n=t[0],r=t[1],c=Object(i.useState)(1),a=Object(o.a)(c,2),l=a[0],u=a[1],h=Object(i.useState)(!1),j=Object(o.a)(h,2),d=j[0],O=j[1];return console.log(d),Object(s.jsx)("div",{id:"mainContainer",children:n?Object(s.jsx)(v,{difficulty:l,setDifficulty:u,mirroring:d,setMirroring:O,setShowSettings:r}):Object(s.jsx)(E,{difficulty:l,mirroring:d,setShowSettings:r})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,114)).then((function(t){var n=t.getCLS,s=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),s(e),i(e),r(e),c(e)}))};a.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(M,{})}),document.getElementById("root")),N()},48:function(e,t,n){},49:function(e,t,n){}},[[102,1,2]]]);
//# sourceMappingURL=main.f457bf15.chunk.js.map