import*as D from"http://localhost:4201/remoteEntry.mjs";var z={449:(o,v,i)=>{Promise.all([i.e(849),i.e(902),i.e(592),i.e(607)]).then(i.bind(i,4607)).catch(s=>console.error(s))},8272:o=>{o.exports=D}},U={};function n(o){var v=U[o];if(void 0!==v)return v.exports;var i=U[o]={exports:{}};return z[o](i,i.exports,n),i.exports}n.m=z,n.c=U,(()=>{var v,o=Object.getPrototypeOf?i=>Object.getPrototypeOf(i):i=>i.__proto__;n.t=function(i,s){if(1&s&&(i=this(i)),8&s||"object"==typeof i&&i&&(4&s&&i.__esModule||16&s&&"function"==typeof i.then))return i;var d=Object.create(null);n.r(d);var h={};v=v||[null,o({}),o([]),o(o)];for(var f=2&s&&i;"object"==typeof f&&!~v.indexOf(f);f=o(f))Object.getOwnPropertyNames(f).forEach(S=>h[S]=()=>i[S]);return h.default=()=>i,n.d(d,h),d}})(),n.d=(o,v)=>{for(var i in v)n.o(v,i)&&!n.o(o,i)&&Object.defineProperty(o,i,{enumerable:!0,get:v[i]})},n.f={},n.e=o=>Promise.all(Object.keys(n.f).reduce((v,i)=>(n.f[i](o,v),v),[])),n.u=o=>(592===o?"common":o)+"."+{367:"3bbbe0e2b21f6e68",505:"973b67d20313a56d",592:"154ae2f3ccb40512",607:"d83509fa8970b808",814:"4d9181164c4b75fa",849:"4ba34bb37a57cf2f",902:"580da7f82f14355a"}[o]+".js",n.miniCssF=o=>{},n.o=(o,v)=>Object.prototype.hasOwnProperty.call(o,v),(()=>{var o={},v="shell:";n.l=(i,s,d,h)=>{if(o[i])o[i].push(s);else{var f,S;if(void 0!==d)for(var m=document.getElementsByTagName("script"),y=0;y<m.length;y++){var b=m[y];if(b.getAttribute("src")==i||b.getAttribute("data-webpack")==v+d){f=b;break}}f||(S=!0,(f=document.createElement("script")).type="module",f.charset="utf-8",f.timeout=120,n.nc&&f.setAttribute("nonce",n.nc),f.setAttribute("data-webpack",v+d),f.src=n.tu(i)),o[i]=[s];var w=(E,_)=>{f.onerror=f.onload=null,clearTimeout(c);var P=o[i];if(delete o[i],f.parentNode&&f.parentNode.removeChild(f),P&&P.forEach(g=>g(_)),E)return E(_)},c=setTimeout(w.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=w.bind(null,f.onerror),f.onload=w.bind(null,f.onload),S&&document.head.appendChild(f)}}})(),n.r=o=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},(()=>{var o={505:[2505]},v={2505:["default","./Routes",8272]};n.f.remotes=(i,s)=>{n.o(o,i)&&o[i].forEach(d=>{var h=n.R;h||(h=[]);var f=v[d];if(!(h.indexOf(f)>=0)){if(h.push(f),f.p)return s.push(f.p);var S=c=>{c||(c=new Error("Container missing")),"string"==typeof c.message&&(c.message+='\nwhile loading "'+f[1]+'" from '+f[2]),n.m[d]=()=>{throw c},f.p=0},m=(c,E,_,P,g,O)=>{try{var x=c(E,_);if(!x||!x.then)return g(x,P,O);var L=x.then(T=>g(T,P),S);if(!O)return L;s.push(f.p=L)}catch(T){S(T)}},b=(c,E,_)=>m(E.get,f[1],h,0,w,_),w=c=>{f.p=1,n.m[d]=E=>{E.exports=c()}};m(n,f[2],0,0,(c,E,_)=>c?m(n.I,f[0],0,c,b,_):S(),1)}})}})(),n.j=179,(()=>{n.S={};var o={},v={};n.I=(i,s)=>{s||(s=[]);var d=v[i];if(d||(d=v[i]={}),!(s.indexOf(d)>=0)){if(s.push(d),o[i])return o[i];n.o(n.S,i)||(n.S[i]={});var h=n.S[i],S="shell",m=(w,c,E,_)=>{var P=h[w]=h[w]||{},g=P[c];(!g||!g.loaded&&(!_!=!g.eager?_:S>g.from))&&(P[c]={get:E,from:S,eager:!!_})},b=[];return"default"===i&&(m("@angular/common/http","17.0.4",()=>Promise.all([n.e(849),n.e(367),n.e(902),n.e(592)]).then(()=>()=>n(9367))),m("@angular/common","17.0.4",()=>Promise.all([n.e(849),n.e(814)]).then(()=>()=>n(6814))),(w=>{var c=g=>(w=>{typeof console<"u"&&console.warn&&console.warn(w)})("Initialization of sharing external failed: "+g);try{var E=n(8272);if(!E)return;var _=g=>g&&g.init&&g.init(n.S[i],s);if(E.then)return b.push(E.then(_,c));var P=_(E);if(P&&P.then)return b.push(P.catch(c))}catch(g){c(g)}})()),o[i]=b.length?Promise.all(b).then(()=>o[i]=1):1}}})(),(()=>{var o;n.tt=()=>(void 0===o&&(o={createScriptURL:v=>v},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(o=trustedTypes.createPolicy("angular#bundler",o))),o)})(),n.tu=o=>n.tt().createScriptURL(o),(()=>{var o;if("string"==typeof import.meta.url&&(o=import.meta.url),!o)throw new Error("Automatic publicPath is not supported in this browser");o=o.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=o})(),(()=>{var o=e=>{var t=l=>l.split(".").map(u=>+u==u?+u:u),r=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),a=r[1]?t(r[1]):[];return r[2]&&(a.length++,a.push.apply(a,t(r[2]))),r[3]&&(a.push([]),a.push.apply(a,t(r[3]))),a},i=e=>{var t=e[0],r="";if(1===e.length)return"*";if(t+.5){r+=0==t?">=":-1==t?"<":1==t?"^":2==t?"~":t>0?"=":"!=";for(var a=1,l=1;l<e.length;l++)a--,r+="u"==(typeof(p=e[l]))[0]?"-":(a>0?".":"")+(a=2,p);return r}var u=[];for(l=1;l<e.length;l++){var p=e[l];u.push(0===p?"not("+j()+")":1===p?"("+j()+" || "+j()+")":2===p?u.pop()+" "+u.pop():i(p))}return j();function j(){return u.pop().replace(/^\((.+)\)$/,"$1")}},s=(e,t)=>{if(0 in e){t=o(t);var r=e[0],a=r<0;a&&(r=-r-1);for(var l=0,u=1,p=!0;;u++,l++){var j,A,C=u<e.length?(typeof e[u])[0]:"";if(l>=t.length||"o"==(A=(typeof(j=t[l]))[0]))return!p||("u"==C?u>r&&!a:""==C!=a);if("u"==A){if(!p||"u"!=C)return!1}else if(p)if(C==A)if(u<=r){if(j!=e[u])return!1}else{if(a?j>e[u]:j<e[u])return!1;j!=e[u]&&(p=!1)}else if("s"!=C&&"n"!=C){if(a||u<=r)return!1;p=!1,u--}else{if(u<=r||A<C!=a)return!1;p=!1}else"s"!=C&&"n"!=C&&(p=!1,u--)}}var $=[],V=$.pop.bind($);for(l=1;l<e.length;l++){var F=e[l];$.push(1==F?V()|V():2==F?V()&V():F?s(F,t):!V())}return!!V()},f=(e,t)=>{var r=e[t];return Object.keys(r).reduce((a,l)=>!a||!r[a].loaded&&((e,t)=>{e=o(e),t=o(t);for(var r=0;;){if(r>=e.length)return r<t.length&&"u"!=(typeof t[r])[0];var a=e[r],l=(typeof a)[0];if(r>=t.length)return"u"==l;var u=t[r],p=(typeof u)[0];if(l!=p)return"o"==l&&"n"==p||"s"==p||"u"==l;if("o"!=l&&"u"!=l&&a!=u)return a<u;r++}})(a,l)?l:a,0)},b=(e,t,r,a)=>{var l=f(e,r);if(!s(a,l))throw new Error(((e,t,r,a)=>"Unsatisfied version "+r+" from "+(r&&e[t][r].from)+" of shared singleton module "+t+" (required "+i(a)+")")(e,r,l,a));return g(e[r][l])},g=e=>(e.loaded=1,e.get()),N=(e=>function(t,r,a,l){var u=n.I(t);return u&&u.then?u.then(e.bind(e,t,n.S[t],r,a,l)):e(t,n.S[t],r,a,l)})((e,t,r,a,l)=>t&&n.o(t,r)?b(t,0,r,a):l()),M={},B={1902:()=>N("default","@angular/common",[2,17,0,0],()=>n.e(814).then(()=>()=>n(6814))),6055:()=>N("default","@angular/common/http",[2,17,0,0],()=>n.e(367).then(()=>()=>n(9367)))},R={607:[6055],902:[1902]};n.f.consumes=(e,t)=>{n.o(R,e)&&R[e].forEach(r=>{if(n.o(M,r))return t.push(M[r]);var a=p=>{M[r]=0,n.m[r]=j=>{delete n.c[r],j.exports=p()}},l=p=>{delete M[r],n.m[r]=j=>{throw delete n.c[r],p}};try{var u=B[r]();u.then?t.push(M[r]=u.then(a).catch(l)):a(u)}catch(p){l(p)}})}})(),(()=>{var o={179:0};n.f.j=(s,d)=>{var h=n.o(o,s)?o[s]:void 0;if(0!==h)if(h)d.push(h[2]);else if(/^(505|902)$/.test(s))o[s]=0;else{var f=new Promise((b,w)=>h=o[s]=[b,w]);d.push(h[2]=f);var S=n.p+n.u(s),m=new Error;n.l(S,b=>{if(n.o(o,s)&&(0!==(h=o[s])&&(o[s]=void 0),h)){var w=b&&("load"===b.type?"missing":b.type),c=b&&b.target&&b.target.src;m.message="Loading chunk "+s+" failed.\n("+w+": "+c+")",m.name="ChunkLoadError",m.type=w,m.request=c,h[1](m)}},"chunk-"+s,s)}};var v=(s,d)=>{var m,y,[h,f,S]=d,b=0;if(h.some(c=>0!==o[c])){for(m in f)n.o(f,m)&&(n.m[m]=f[m]);S&&S(n)}for(s&&s(d);b<h.length;b++)n.o(o,y=h[b])&&o[y]&&o[y][0](),o[y]=0},i=self.webpackChunkshell=self.webpackChunkshell||[];i.forEach(v.bind(null,0)),i.push=v.bind(null,i.push.bind(i))})();var Y=n(449);