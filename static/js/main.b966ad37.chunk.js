(this.webpackJsonpxml2js=this.webpackJsonpxml2js||[]).push([[0],{10:function(e,t,n){e.exports=n(24)},15:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(9),i=n.n(c),l=(n(15),n(4)),o=n(2),u=n(3);n(21);var f=function(e){var t=e.input,n=e.setInput;return a.a.createElement("div",{className:"input-container"},a.a.createElement("textarea",{id:"editor",value:t,onChange:function(e){return n(e.target.value)},spellCheck:!1}),a.a.createElement("button",{id:"clear-btn",onClick:function(){return n("")}},a.a.createElement(o.a,{icon:u.c,size:"2x"})))},s=n(7);function v(e,t){var n,r=new RegExp("<(.*?)[>|\\s|/]","g"),a={},c=!1;if(""===e||"<"!==e.charAt(0)&&">"!==e.charAt(e.length-1))return e;for(var i=0;null!==(n=r.exec(e));){var l,o=n[1],u="</"+o+">",f=n.input,m=f.indexOf(">",i)+1,E=n.index,x=n.input.indexOf(">",E)+1,b=n.input.substring(E,x);if(l=p(b),!h(b))throw new Error("Invalid XML tag");var O=g(f,u,m);if(!1===l&&O<0)throw new Error("Invalid XML");var j=void 0;l?(j="",i=b.length+i):i=m+(j=f.substring(f.indexOf(">",i)+1,O)).length+u.length,r.lastIndex=i,a[o]?c=!0:a[o]={};var w={},A=void 0;if(t&&(A=d(b)),c&&t)w=A;else if(!c&&t)for(var k in A)a[o][k]=A[k];var I=v(j,t);if("string"===typeof I&&""!==I&&(I={$:I}),c&&!a[o].length){var y=a[o];a[o]=[y];var S={};for(var C in I)S[C]=I[C];w=Object(s.a)({},w,{},S),a[o].push(w)}else if(c){var N={};for(var R in I)N[R]=I[R];w=Object(s.a)({},w,{},N),a[o].push(w)}else for(var z in I)a[o][z]=I[z]}return a}function p(e){return e.indexOf("/>")>-1}function d(e){for(var t,n=new RegExp('(\\S*)="(.*?)"',"g"),r={};null!==(t=n.exec(e));){var a=t[1],c=t[2];r[a]=c}return r}function h(e){return"<"===e.charAt(0)&&"?"===e.charAt(1)&&">"===e.charAt(e.length-1)&&"?"===e.charAt(e.length-2)||"<"===e.charAt(0)&&(e.charAt(e.length-2)+e.charAt(e.length-1)==="/>"||">"===e.charAt(e.length-1))}function g(e,t,n){var r=t.replace("</","<").replace(">",""),a=e.indexOf(t,n),c=e.indexOf(r,n);if(a<c)return a;if(!e.substr(c,a-c).match(new RegExp(r+"\\W")))return a;for(;a>0;){var i=e.indexOf(t,a+1);if(!(i>0))break;a=i}return a}n(22);var m=function(e){var t=e.source,n=Object(r.useState)(""),c=Object(l.a)(n,2),i=c[0],o=c[1];return Object(r.useEffect)((function(){o(t.replace(/{/g,'"').replace(/}/g,'"').replace(/\t/g,"").replace(/\n/g,"")),console.log(i)}),[i,t]),a.a.createElement("div",{className:"preview-container"},a.a.createElement("textarea",{id:"preview",value:i&&JSON.stringify(v(i,!0),null,2),readOnly:!0}))};n(23);var E=function(){var e=Object(r.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1],i=Object(r.useState)(""),s=Object(l.a)(i,2),v=s[0],p=s[1];return a.a.createElement("div",{className:"App"},a.a.createElement(f,{setInput:c,input:n}),a.a.createElement("div",{id:"menu-container"},a.a.createElement("span",{id:"app-icon"},a.a.createElement(o.a,{id:"second",icon:u.b,color:"#fff",size:"3x"})),a.a.createElement("button",{id:"confirm-button",onClick:function(){return p(n)}},a.a.createElement(o.a,{icon:u.a,color:"#fff",size:"3x"})),a.a.createElement("h1",{id:"company-icon"},"RMP")),a.a.createElement(m,{source:v}))};i.a.render(a.a.createElement(E,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.b966ad37.chunk.js.map