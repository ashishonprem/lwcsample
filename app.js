!function(t){function e(e){for(var r,i,s=e[0],c=e[1],l=e[2],d=0,u=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&u.push(n[i][0]),n[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);for(p&&p(e);u.length;)u.shift()();return a.push.apply(a,l||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],r=!0,s=1;s<o.length;s++){var c=o[s];0!==n[c]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=o[0]))}return t}var r={},n={1:0},a=[];function i(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=r,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(o,r,function(e){return t[e]}.bind(null,r));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var p=c;a.push([1,0]),o()}([,function(t,e,o){t.exports=o(3)},function(t,e){var o;o=function(){return this}();try{o=o||new Function("return this")()}catch(t){"object"==typeof window&&(o=window)}t.exports=o},function(t,e,o){"use strict";o.r(e);var r=o(0);var n=[function(t,e,o){return[".github-corner",e,"{display:block;position:absolute;top:0;right:0;width:80px;height:80px}.github-corner:hover",e," .octo-arm",e,"{animation:octocat-wave .56s ease-in-out}@keyframes octocat-wave{0%,to{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){.github-corner:hover",e," .octo-arm",e,"{animation:none}.github-corner",e," .octo-arm",e,"{animation:octocat-wave .56s ease-in-out}}"].join("")}];function a(t,e,o,r){const{h:n}=t;return[n("a",{classMap:{"github-corner":!0},attrs:{href:e.url,target:"_blank","aria-label":"View source on GitHub"},key:4},[n("svg",{styleMap:{fill:"#151513",color:"#fff",position:"absolute",top:"0",border:"0",right:"0"},attrs:{width:"80",height:"80",viewBox:"0 0 250 250","aria-hidden":"true"},key:3},[n("path",{attrs:{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"},key:0},[]),n("path",{classMap:{"octo-arm":!0},styleMap:{transformOrigin:"130px 106px"},attrs:{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor"},key:1},[]),n("path",{classMap:{"octo-body":!0},attrs:{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor"},key:2},[])])])]}var i=Object(r.registerTemplate)(a);a.stylesheets=[],n&&a.stylesheets.push.apply(a.stylesheets,n),a.stylesheetTokens={hostAttribute:"my-githubCorner-_githubCorner-host",shadowAttribute:"my-githubCorner-_githubCorner"};class s extends r.LightningElement{constructor(...t){super(...t),this.url=void 0}}Object(r.registerDecorators)(s,{publicProps:{url:{config:0}}});var c=Object(r.registerComponent)(s,{tmpl:i});var l=[function(t,e,o){return["header",e,"{background-color:#fff;box-shadow:1px 1px 4px 0 rgba(0,0,0,.1);padding:15px}.content-wrapper",e,"{max-width:1200px;margin:0 auto;width:100%}.icon-logo",e,"{display:inline-block}.icon-logo",e," img",e,"{width:50px}.logo",e,"{display:flex;align-items:center}.logo",e," h1",e,"{display:inline-block;color:#16325c;margin:0;vertical-align:middle;font-size:22px;font-weight:300}.link",e,"{margin-left:auto}.link",e," a",e,"{border:none;padding:10px;border-radius:5px;text-decoration:none;background-color:#ff6000;color:#fff}.mobile-title",e,"{display:none}@media (max-width:1300px){header",e,"{padding-right:100px}}@media (max-width:767px){.link",e,",.logo",e," .title",e,"{display:none}.mobile-title",e,"{display:block;text-align:center;font-size:22px;margin:25px 0;color:#16325c}}"].join("")}];function p(t,e,o,r){const{h:n,t:a}=t;return[n("header",{key:7},[n("div",{classMap:{"content-wrapper":!0},key:6},[n("div",{classMap:{logo:!0},key:5},[n("div",{classMap:{"icon-logo":!0},key:1},[n("img",{attrs:{src:"/resources/lwc.png"},key:0},[])]),n("h1",{classMap:{title:!0},key:2},[a("Lightning Web Components Library")]),n("div",{classMap:{link:!0},key:4},[n("a",{classMap:{link:!0},attrs:{href:"https://lwc.dev",target:"_blank"},key:3},[a("Learn LWC")])])])])]),n("h1",{classMap:{"mobile-title":!0},key:8},[a("Lightning Web Components Library")])]}var d=Object(r.registerTemplate)(p);p.stylesheets=[],l&&p.stylesheets.push.apply(p.stylesheets,l),p.stylesheetTokens={hostAttribute:"my-header-_header-host",shadowAttribute:"my-header-_header"};class u extends r.LightningElement{}var h=Object(r.registerComponent)(u,{tmpl:d});var g=[function(t,e,o){return[".component-list",e,"{max-width:1200px;margin:50px auto;width:100%;display:grid;grid-template-columns:50% 50%}.component-card",e,"{-webkit-box-shadow:0 2px 4px 0 rgba(0,0,0,.1);box-shadow:0 -1px 4px 0 rgba(0,0,0,.1),0 2px 4px 0 rgba(0,0,0,.1);padding:15px;margin:15px}.component-card",e," .title",e,"{color:#16325c;font-weight:700;text-decoration:none;margin:5px 0;display:block}.component-card",e," .title:hover",e,"{text-decoration:underline}.component-card",e," .category",e,"{text-transform:uppercase;font-size:12px;margin:3px 0}.component-card",e," .description",e,"{font-size:13px}.component-card",e," .owner",e,"{display:flex;align-items:center}.component-card",e," .avatar",e,"{margin-right:5px;border-radius:25px;overflow:hidden}.component-card",e," .owner",e," a",e,"{margin:0;font-size:13px;text-decoration:none;font-weight:700;color:#16325c}.component-card",e," .grid",e,"{display:grid;grid-template-columns:50% 50%}.component-card",e," .grid",e," h3",e,"{font-size:13px;margin:3px 0 10px;color:#16325c}.component-card",e," .playground-url",e,"{max-width:100%;overflow:hidden}.component-card",e," .playground-url",e," a",e,"{font-size:13px}@media (max-width:1200px){.component-list",e,"{width:90%}}@media (max-width:767px){.component-list",e,"{grid-template-columns:100%}}"].join("")}];function m(t,e,o,r){const{d:n,h:a,t:i,k:s,i:c}=t;return[a("div",{classMap:{"component-list":!0},key:15},c(e.components,(function(t){return a("div",{classMap:{"component-card":!0},key:s(14,t.githubRepoUrl)},[a("a",{classMap:{title:!0},attrs:{href:t.githubRepoUrl,target:"_blank"},key:0},[n(t.name)]),a("div",{classMap:{category:!0},key:1},[n(t.category)]),a("p",{classMap:{description:!0},key:2},[n(t.description)]),a("div",{classMap:{grid:!0},key:13},[a("div",{classMap:{col:!0},key:8},[a("h3",{key:3},[i("Author")]),a("div",{classMap:{owner:!0},key:7},[a("div",{classMap:{avatar:!0},key:5},[a("img",{attrs:{src:t.owner.avatar,alt:t.owner.name},key:4},[])]),a("a",{classMap:{name:!0},attrs:{target:"_blank",href:t.owner.githubUrl},key:6},[n(t.owner.name)])])]),a("div",{classMap:{col:!0},key:12},[a("h3",{key:9},[i("Playground URL")]),a("div",{classMap:{"playground-url":!0},key:11},[a("a",{attrs:{href:t.playgroundUrl,target:"_blank"},key:10},[n(t.playgroundUrl)])])])])])})))]}var y=Object(r.registerTemplate)(m);m.stylesheets=[],g&&m.stylesheets.push.apply(m.stylesheets,g),m.stylesheetTokens={hostAttribute:"my-componentList-_componentList-host",shadowAttribute:"my-componentList-_componentList"};class b extends r.LightningElement{constructor(...t){super(...t),this.componentRecords=[{createdAt:"2020-05-31 06:31:22",name:"LWC SOQL Builder",category:"Tools",description:"Awesome SOQL execution tool developed in Lightning Web Components Open Source",githubRepoUrl:"https://github.com/LWC-Components/lwc-soql-builder",playgroundUrl:"https://lwc-soql-builder.github.io/",owner:{name:"atskimura",githubNickname:"atskimura",githubUrl:"https://github.com/atskimura",avatar:"https://github.com/atskimura.png?size=40"}},{createdAt:"2020-05-30 12:51:56",name:"LWC Stencil",category:"UI Components",description:"Lightning Web Component used for Skeleton Loading",githubRepoUrl:"https://github.com/gavignon/lwc-stencil",playgroundUrl:"https://developer.salesforce.com/docs/component-library/tools/playground/1dJhbHCv8/1/edit",owner:{name:"Gil Avignon",githubNickname:"gavignon",githubUrl:"https://github.com/gavignon",avatar:"https://github.com/gavignon.png?size=40"}}]}get components(){return this.componentRecords}}Object(r.registerDecorators)(b,{fields:["componentRecords"]});var f=Object(r.registerComponent)(b,{tmpl:y});function x(t,e,o,r){const{c:n}=t;return[n("my-github-corner",c,{props:{url:e.githubRepositoryUrl},key:0},[]),n("my-header",h,{key:1},[]),n("my-component-list",f,{key:2},[])]}var v=Object(r.registerTemplate)(x);x.stylesheets=[],x.stylesheetTokens={hostAttribute:"my-app-_app-host",shadowAttribute:"my-app-_app"};class k extends r.LightningElement{constructor(...t){super(...t),this.githubRepositoryUrl="https://github.com/lucasvalhos/salesforce-lightning-web-components-lwc-library"}}Object(r.registerDecorators)(k,{fields:["githubRepositoryUrl"]});var w=Object(r.registerComponent)(k,{tmpl:v});const C=Object(r.createElement)("my-app",{is:w});document.querySelector("#main").appendChild(C)}]);