(this["webpackJsonpfcc-markdown-preview"]=this["webpackJsonpfcc-markdown-preview"]||[]).push([[0],{10:function(e,n,t){e.exports=t(24)},15:function(e,n,t){},21:function(e,n,t){},22:function(e,n,t){},23:function(e,n,t){},24:function(e,n,t){"use strict";t.r(n);var r=t(1),a=t.n(r),c=t(9),i=t.n(c),o=(t(15),t(4)),u=t(2),l=t(3);t(21);var f=function(e){var n=e.input,t=e.setInput;return a.a.createElement("div",{className:"input-container"},a.a.createElement("textarea",{id:"editor",value:n,onChange:function(e){return t(e.target.value)},spellCheck:!1}),a.a.createElement("button",{id:"clear-btn",onClick:function(){return t("")}},a.a.createElement(u.a,{icon:l.c,size:"2x"})))},s=t(7);function v(e,n){var t,r=new RegExp("<(.*?)[>|\\s|/]","g"),a={},c=!1;if(""===e||"<"!==e.charAt(0)&&">"!==e.charAt(e.length-1))return e;for(var i=0;null!==(t=r.exec(e));){var o,u=t[1],l="</"+u+">",f=t.input,g=f.indexOf(">",i)+1,E=t.index,b=t.input.indexOf(">",E)+1,x=t.input.substring(E,b);if(o=p(x),!h(x))throw new Error("Invalid XML tag");var O=m(f,l,g);if(!1===o&&O<0)throw new Error("Invalid XML");var w=void 0;o?(w="",i=x.length+i):i=g+(w=f.substring(f.indexOf(">",i)+1,O)).length+l.length,r.lastIndex=i,a[u]?c=!0:a[u]={};var A={},j=void 0;if(n&&(j=d(x)),c&&n)A=j;else if(!c&&n)for(var k in j)a[u][k]=j[k];var I=v(w,n);if("string"===typeof I&&""!==I&&(I={$:I}),c&&!a[u].length){var y=a[u];a[u]=[y];var S={};for(var C in I)S[C]=I[C];A=Object(s.a)({},A,{},S),a[u].push(A)}else if(c){var N={};for(var R in I)N[R]=I[R];A=Object(s.a)({},A,{},N),a[u].push(A)}else for(var z in I)a[u][z]=I[z]}return a}function p(e){return e.indexOf("/>")>-1}function d(e){for(var n,t=new RegExp('(\\S*)="(.*?)"',"g"),r={};null!==(n=t.exec(e));){var a=n[1],c=n[2];r[a]=c}return r}function h(e){return"<"===e.charAt(0)&&"?"===e.charAt(1)&&">"===e.charAt(e.length-1)&&"?"===e.charAt(e.length-2)||"<"===e.charAt(0)&&(e.charAt(e.length-2)+e.charAt(e.length-1)==="/>"||">"===e.charAt(e.length-1))}function m(e,n,t){var r=n.replace("</","<").replace(">",""),a=e.indexOf(n,t),c=e.indexOf(r,t);if(a<c)return a;if(!e.substr(c,a-c).match(new RegExp(r+"\\W")))return a;for(;a>0;){var i=e.indexOf(n,a+1);if(!(i>0))break;a=i}return a}t(22);var g=function(e){var n=e.source,t=Object(r.useState)(""),c=Object(o.a)(t,2),i=c[0],u=c[1];return Object(r.useEffect)((function(){u(n.replace("{",'"').replace("}",'"').split("\n").join(""))}),[n]),a.a.createElement("div",{className:"preview-container"},a.a.createElement("textarea",{id:"preview",value:i&&JSON.stringify(v(i,!0),null,2),readOnly:!0}))};t(23);var E=function(){var e=Object(r.useState)(""),n=Object(o.a)(e,2),t=n[0],c=n[1],i=Object(r.useState)(""),s=Object(o.a)(i,2),v=s[0],p=s[1];return a.a.createElement("div",{className:"App"},a.a.createElement(f,{setInput:c,input:t}),a.a.createElement("div",{id:"menu-container"},a.a.createElement("span",{id:"app-icon"},a.a.createElement(u.a,{id:"second",icon:l.b,color:"#fff",size:"3x"})),a.a.createElement("button",{id:"confirm-button",onClick:function(){return p(t)}},a.a.createElement(u.a,{icon:l.a,color:"#fff",size:"3x"})),a.a.createElement("h1",{id:"company-icon"},"RMP")),a.a.createElement(g,{source:v}))};i.a.render(a.a.createElement(E,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.2ba61f44.chunk.js.map