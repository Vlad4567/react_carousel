(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(6),a=n.n(c),i=n(3),r=n(4),s=n(2),o=n(1),u=n.n(o),j=(n(11),n(12),n(0)),l=function(e){var t=e.images,n=e.itemWidth,c=e.frameSize,a=e.step,i=e.animationDuration,r=e.infinity,u=Object(o.useState)(0),l=Object(s.a)(u,2),m=l[0],b=l[1],h=t.length-c,p={width:"".concat(n,"px"),height:"".concat(n,"px")},d={width:"".concat(n*c,"px")},g={transform:"translateX(".concat(-m*n,"px)"),transition:"transform ".concat(i,"ms")},O=!r&&m<=0,f=!r&&m>=h;return Object(j.jsxs)("div",{className:"Carousel",children:[Object(j.jsx)("ul",{style:d,className:"Carousel__list",children:t.map((function(e,t){return Object(j.jsx)("li",{className:"Carousel__item",style:g,children:Object(j.jsx)("img",{style:p,src:e,alt:"".concat(t+1)})},e)}))}),Object(j.jsxs)("div",{className:"Carousel__btns",children:[Object(j.jsx)("button",{type:"button",disabled:O,onClick:function(){b(r&&m<=0?h:function(e){return Math.max(e-a,0)})},children:"Prev"}),Object(j.jsx)("button",{type:"button","data-cy":"next",disabled:f,onClick:function(){b(r&&m>=h?0:function(e){return Math.min(e+a,h)})},children:"Next"})]})]})},m=["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],b={itemWidth:130,frameSize:3,step:3,animationDuration:1e3,infinity:!1},h=function(){var e=Object(o.useState)(b),t=Object(s.a)(e,2),n=t[0],c=t[1],a=Object(o.useState)(Object.keys(n)[0]||null),h=Object(s.a)(a,2),p=h[0],d=h[1],g=n.itemWidth,O=n.frameSize,f=n.step,x=n.animationDuration,y=n.infinity;function v(e){var t=e.target,n=t.name,a=t.value,s=t.type,o=t.checked;switch(s){case"number":c((function(e){return Object(r.a)(Object(r.a)({},e),{},Object(i.a)({},n,+a))}));break;case"checkbox":c((function(e){return Object(r.a)(Object(r.a)({},e),{},Object(i.a)({},n,o))}))}}function C(e){return e.replace(/([A-Z])/g," $1").toLowerCase().replace(/^./,(function(e){return e.toUpperCase()}))}return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{"data-cy":"title",children:"Carousel with ".concat(m.length," images")}),p&&Object(j.jsxs)("div",{className:"options",children:[Object(j.jsx)("select",{name:"input",value:p,onChange:function(e){var t=e.target.value;d(t)},children:Object.keys(n).map((function(e){return Object(j.jsx)("option",{value:e,children:C(e)},e)}))}),Object.entries(n).map((function(e){var t=Object(s.a)(e,2),n=t[0],c=t[1];if(n!==p)return!1;switch(typeof c){case"number":return Object(j.jsxs)(u.a.Fragment,{children:[Object(j.jsx)("h3",{children:"".concat(C(n),":")}),Object(j.jsx)("input",{type:"number",name:"".concat(n),value:c,min:"0",onChange:v})]},n);case"boolean":return Object(j.jsxs)(u.a.Fragment,{children:[Object(j.jsx)("h3",{children:"".concat(C(n),":")}),Object(j.jsx)("input",{type:"checkbox",name:"".concat(n),checked:c,onChange:v})]},n);default:return!1}}))]}),Object(j.jsx)(l,{images:m,step:f,frameSize:O,itemWidth:g,animationDuration:x,infinity:y})]})};a.a.render(Object(j.jsx)(h,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.45d9e9b6.chunk.js.map