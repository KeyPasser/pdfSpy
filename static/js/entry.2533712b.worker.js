(()=>{var e={290:(e,t,r)=>{var n=(()=>{var e="undefined"!==typeof document&&document.currentScript?document.currentScript.src:void 0;return e||="/index.js",function(t={}){var n,a,o=t;o.ready=new Promise(((e,t)=>{n=e,a=t}));var i,s,l,u=Object.assign({},o),c="./this.program",f="object"==typeof window,g="function"==typeof importScripts,d="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,h="";if(d){var m=r(613),p=r(653);h=g?p.dirname(h)+"/":"//",i=(e,t)=>(e=j(e)?new URL(e):p.normalize(e),m.readFileSync(e,t?void 0:"utf8")),l=e=>{var t=i(e,!0);return t.buffer||(t=new Uint8Array(t)),t},s=(e,t,r,n=!0)=>{e=j(e)?new URL(e):p.normalize(e),m.readFile(e,n?void 0:"utf8",((e,a)=>{e?r(e):t(n?a.buffer:a)}))},!o.thisProgram&&process.argv.length>1&&(c=process.argv[1].replace(/\\/g,"/")),process.argv.slice(2),(e,t)=>{throw process.exitCode=e,t}}else(f||g)&&(g?h=self.location.href:"undefined"!=typeof document&&document.currentScript&&(h=document.currentScript.src),e&&(h=e),h=h.startsWith("blob:")?"":h.substr(0,h.replace(/[?#].*/,"").lastIndexOf("/")+1),i=e=>{var t=new XMLHttpRequest;return t.open("GET",e,!1),t.send(null),t.responseText},g&&(l=e=>{var t=new XMLHttpRequest;return t.open("GET",e,!1),t.responseType="arraybuffer",t.send(null),new Uint8Array(t.response)}),s=(e,t,r)=>{var n=new XMLHttpRequest;n.open("GET",e,!0),n.responseType="arraybuffer",n.onload=()=>{200==n.status||0==n.status&&n.response?t(n.response):r()},n.onerror=r,n.send(null)});var y,v,b=o.print||console.log.bind(console),w=o.printErr||console.error.bind(console);Object.assign(o,u),u=null,o.arguments&&o.arguments,o.thisProgram&&(c=o.thisProgram),o.quit&&o.quit,o.wasmBinary&&(y=o.wasmBinary),"object"!=typeof WebAssembly&&O("no native wasm support detected");var A,S,_,C,M,F=!1;function k(){var e=v.buffer;o.HEAP8=A=new Int8Array(e),o.HEAP16=new Int16Array(e),o.HEAPU8=S=new Uint8Array(e),o.HEAPU16=new Uint16Array(e),o.HEAP32=_=new Int32Array(e),o.HEAPU32=C=new Uint32Array(e),o.HEAPF32=new Float32Array(e),o.HEAPF64=M=new Float64Array(e)}var D=[],U=[],E=[];var P=0,R=null,T=null;function O(e){var t;null===(t=o.onAbort)||void 0===t||t.call(o,e),w(e="Aborted("+e+")"),F=!0,1,e+=". Build with -sASSERTIONS for more info.";var r=new WebAssembly.RuntimeError(e);throw a(r),r}var W,H,x=e=>e.startsWith("data:application/octet-stream;base64,"),j=e=>e.startsWith("file://");function J(e){if(e==W&&y)return new Uint8Array(y);if(l)return l(e);throw"both async and sync fetching of the wasm failed"}function Y(e,t,r){return function(e){if(!y&&(f||g)){if("function"==typeof fetch&&!j(e))return fetch(e,{credentials:"same-origin"}).then((t=>{if(!t.ok)throw`failed to load wasm binary file at '${e}'`;return t.arrayBuffer()})).catch((()=>J(e)));if(s)return new Promise(((t,r)=>{s(e,(e=>t(new Uint8Array(e))),r)}))}return Promise.resolve().then((()=>J(e)))}(e).then((e=>WebAssembly.instantiate(e,t))).then(r,(e=>{w(`failed to asynchronously prepare wasm: ${e}`),O(e)}))}x(W="pdfium.wasm")||(H=W,W=o.locateFile?o.locateFile(H,h):h+H);var z={201376:(e,t)=>{HandlePDFiumOutput("outputPageSizes",JSON.parse(L(e,t)))},201450:(e,t,r,n,a,o)=>{HandlePDFiumOutput("outputBitmap",{buffer:e,width:t,height:r,size:n,annots:JSON.parse(L(a,o))})},201579:(e,t)=>{HandlePDFiumOutput("outputDicts",JSON.parse(L(e,t)))},201649:e=>WASMCallbacks.getCMapSize(e),201691:(e,t,r)=>WASMCallbacks.getCMapProp(e,t,r),201739:(e,t,r,n)=>{WASMCallbacks.getCMapProp(e,t,r,n)},201783:(e,t,r)=>WASMCallbacks.getCMapProp(e,t,r),201831:(e,t,r,n)=>{WASMCallbacks.getCMapProp(e,t,r,n)},201875:(e,t,r)=>WASMCallbacks.getCMapProp(e,t,r),201923:(e,t,r)=>WASMCallbacks.getCMapProp(e,t,r),201971:e=>WASMCallbacks.getUnicodeSize(e),202016:(e,t)=>{WASMCallbacks.getUnicode(e,t)},202053:()=>WASMCallbacks.loadData("kJapan1VerticalCIDs"),202110:e=>{o._free(e)},202130:e=>WASMCallbacks.getFontSize("standard",e),202183:(e,t)=>{WASMCallbacks.getFontBuffer("sans",e,t)},202230:()=>WASMCallbacks.getFontSize("sans"),202276:e=>{WASMCallbacks.getFontBuffer("sans",e)},202320:()=>WASMCallbacks.getFontSize("serif"),202367:e=>{WASMCallbacks.getFontBuffer("serif",e)},202412:()=>WASMCallbacks.loadData("kCMYK"),202455:e=>{o._free(e)},202475:(e,t,r,n,a)=>WASMCallbacks.findFont(e,t,r,n,a),202528:e=>{WASMCallbacks.getFontBuffer(-1,e)},202567:(e,t,r,n)=>{WASMCallbacks.loadFontBuffer(L(e,t),r,n)}};var I=e=>{for(;e.length>0;)e.shift()(o)},N=(o.noExitRuntime,"undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0),B=(e,t,r)=>{for(var n=t+r,a=t;e[a]&&!(a>=n);)++a;if(a-t>16&&e.buffer&&N)return N.decode(e.subarray(t,a));for(var o="";t<a;){var i=e[t++];if(128&i){var s=63&e[t++];if(192!=(224&i)){var l=63&e[t++];if((i=224==(240&i)?(15&i)<<12|s<<6|l:(7&i)<<18|s<<12|l<<6|63&e[t++])<65536)o+=String.fromCharCode(i);else{var u=i-65536;o+=String.fromCharCode(55296|u>>10,56320|1023&u)}}else o+=String.fromCharCode((31&i)<<6|s)}else o+=String.fromCharCode(i)}return o},L=(e,t)=>e?B(S,e,t):"",G={varargs:void 0,get(){var e=_[+G.varargs>>2];return G.varargs+=4,e},getp:()=>G.get(),getStr:e=>L(e)};var K=(e,t)=>t+2097152>>>0<4194305-!!e?(e>>>0)+4294967296*t:NaN;var $=(e,t,r,n)=>{if(!(n>0))return 0;for(var a=r,o=r+n-1,i=0;i<e.length;++i){var s=e.charCodeAt(i);if(s>=55296&&s<=57343)s=65536+((1023&s)<<10)|1023&e.charCodeAt(++i);if(s<=127){if(r>=o)break;t[r++]=s}else if(s<=2047){if(r+1>=o)break;t[r++]=192|s>>6,t[r++]=128|63&s}else if(s<=65535){if(r+2>=o)break;t[r++]=224|s>>12,t[r++]=128|s>>6&63,t[r++]=128|63&s}else{if(r+3>=o)break;t[r++]=240|s>>18,t[r++]=128|s>>12&63,t[r++]=128|s>>6&63,t[r++]=128|63&s}}return t[r]=0,r-a},q=(e,t,r)=>$(e,S,t,r),X=[],V=(e,t,r)=>{var n=((e,t)=>{var r;for(X.length=0;r=S[e++];){var n=105!=r;t+=(n&=112!=r)&&t%8?4:0,X.push(112==r?C[t>>2]:105==r?_[t>>2]:M[t>>3]),t+=n?8:4}return X})(t,r);return z[e](...n)},Z=e=>{var t=(e-v.buffer.byteLength+65535)/65536;try{return v.grow(t),k(),1}catch(r){}},Q={},ee=()=>{if(!ee.strings){var e={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"==typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:c||"./this.program"};for(var t in Q)void 0===Q[t]?delete e[t]:e[t]=Q[t];var r=[];for(var t in e)r.push(`${t}=${e[t]}`);ee.strings=r}return ee.strings};var te=[null,[],[]],re=(e,t)=>{var r=te[e];0===t||10===t?((1===e?b:w)(B(r,0)),r.length=0):r.push(t)},ne=e=>e%4===0&&(e%100!==0||e%400===0),ae=[31,29,31,30,31,30,31,31,30,31,30,31],oe=[31,28,31,30,31,30,31,31,30,31,30,31];var ie,se,le=(e,t,r,n)=>{var a=C[n+40>>2],o={tm_sec:_[n>>2],tm_min:_[n+4>>2],tm_hour:_[n+8>>2],tm_mday:_[n+12>>2],tm_mon:_[n+16>>2],tm_year:_[n+20>>2],tm_wday:_[n+24>>2],tm_yday:_[n+28>>2],tm_isdst:_[n+32>>2],tm_gmtoff:_[n+36>>2],tm_zone:a?L(a):""},i=L(r),s={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var l in s)i=i.replace(new RegExp(l,"g"),s[l]);var u=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],c=["January","February","March","April","May","June","July","August","September","October","November","December"];function f(e,t,r){for(var n="number"==typeof e?e.toString():e||"";n.length<t;)n=r[0]+n;return n}function g(e,t){return f(e,t,"0")}function d(e,t){function r(e){return e<0?-1:e>0?1:0}var n;return 0===(n=r(e.getFullYear()-t.getFullYear()))&&0===(n=r(e.getMonth()-t.getMonth()))&&(n=r(e.getDate()-t.getDate())),n}function h(e){switch(e.getDay()){case 0:return new Date(e.getFullYear()-1,11,29);case 1:return e;case 2:return new Date(e.getFullYear(),0,3);case 3:return new Date(e.getFullYear(),0,2);case 4:return new Date(e.getFullYear(),0,1);case 5:return new Date(e.getFullYear()-1,11,31);case 6:return new Date(e.getFullYear()-1,11,30)}}function m(e){var t=((e,t)=>{for(var r=new Date(e.getTime());t>0;){var n=ne(r.getFullYear()),a=r.getMonth(),o=(n?ae:oe)[a];if(!(t>o-r.getDate()))return r.setDate(r.getDate()+t),r;t-=o-r.getDate()+1,r.setDate(1),a<11?r.setMonth(a+1):(r.setMonth(0),r.setFullYear(r.getFullYear()+1))}return r})(new Date(e.tm_year+1900,0,1),e.tm_yday),r=new Date(t.getFullYear(),0,4),n=new Date(t.getFullYear()+1,0,4),a=h(r),o=h(n);return d(a,t)<=0?d(o,t)<=0?t.getFullYear()+1:t.getFullYear():t.getFullYear()-1}var p={"%a":e=>u[e.tm_wday].substring(0,3),"%A":e=>u[e.tm_wday],"%b":e=>c[e.tm_mon].substring(0,3),"%B":e=>c[e.tm_mon],"%C":e=>g((e.tm_year+1900)/100|0,2),"%d":e=>g(e.tm_mday,2),"%e":e=>f(e.tm_mday,2," "),"%g":e=>m(e).toString().substring(2),"%G":m,"%H":e=>g(e.tm_hour,2),"%I":e=>{var t=e.tm_hour;return 0==t?t=12:t>12&&(t-=12),g(t,2)},"%j":e=>g(e.tm_mday+((e,t)=>{for(var r=0,n=0;n<=t;r+=e[n++]);return r})(ne(e.tm_year+1900)?ae:oe,e.tm_mon-1),3),"%m":e=>g(e.tm_mon+1,2),"%M":e=>g(e.tm_min,2),"%n":()=>"\n","%p":e=>e.tm_hour>=0&&e.tm_hour<12?"AM":"PM","%S":e=>g(e.tm_sec,2),"%t":()=>"\t","%u":e=>e.tm_wday||7,"%U":e=>{var t=e.tm_yday+7-e.tm_wday;return g(Math.floor(t/7),2)},"%V":e=>{var t=Math.floor((e.tm_yday+7-(e.tm_wday+6)%7)/7);if((e.tm_wday+371-e.tm_yday-2)%7<=2&&t++,t){if(53==t){var r=(e.tm_wday+371-e.tm_yday)%7;4==r||3==r&&ne(e.tm_year)||(t=1)}}else{t=52;var n=(e.tm_wday+7-e.tm_yday-1)%7;(4==n||5==n&&ne(e.tm_year%400-1))&&t++}return g(t,2)},"%w":e=>e.tm_wday,"%W":e=>{var t=e.tm_yday+7-(e.tm_wday+6)%7;return g(Math.floor(t/7),2)},"%y":e=>(e.tm_year+1900).toString().substring(2),"%Y":e=>e.tm_year+1900,"%z":e=>{var t=e.tm_gmtoff,r=t>=0;return t=(t=Math.abs(t)/60)/60*100+t%60,(r?"+":"-")+String("0000"+t).slice(-4)},"%Z":e=>e.tm_zone,"%%":()=>"%"};for(var l in i=i.replace(/%%/g,"\0\0"),p)i.includes(l)&&(i=i.replace(new RegExp(l,"g"),p[l](o)));var y,v,b=function(e,t,r){var n=r>0?r:(e=>{for(var t=0,r=0;r<e.length;++r){var n=e.charCodeAt(r);n<=127?t++:n<=2047?t+=2:n>=55296&&n<=57343?(t+=4,++r):t+=3}return t})(e)+1,a=new Array(n),o=$(e,a,0,a.length);return t&&(a.length=o),a}(i=i.replace(/\0\0/g,"%"),!1);return b.length>t?0:(y=b,v=e,A.set(y,v),b.length-1)},ue=e=>ie.get(e),ce={c:(e,t,r,n)=>{O(`Assertion failed: ${L(e)}, at: `+[t?L(t):"unknown filename",r,n?L(n):"unknown function"])},k:function(e,t,r){return G.varargs=r,0},z:function(e,t,r){return G.varargs=r,0},A:function(e,t,r,n){G.varargs=n},u:e=>{},v:(e,t,r)=>{},r:()=>{throw 1/0},o:function(e,t,r){var n=K(e,t),a=new Date(1e3*n);_[r>>2]=a.getUTCSeconds(),_[r+4>>2]=a.getUTCMinutes(),_[r+8>>2]=a.getUTCHours(),_[r+12>>2]=a.getUTCDate(),_[r+16>>2]=a.getUTCMonth(),_[r+20>>2]=a.getUTCFullYear()-1900,_[r+24>>2]=a.getUTCDay();var o=Date.UTC(a.getUTCFullYear(),0,1,0,0,0,0),i=(a.getTime()-o)/864e5|0;_[r+28>>2]=i},t:(e,t,r,n)=>{var a=(new Date).getFullYear(),o=new Date(a,0,1),i=new Date(a,6,1),s=o.getTimezoneOffset(),l=i.getTimezoneOffset(),u=Math.max(s,l);function c(e){var t=e.toTimeString().match(/\(([A-Za-z ]+)\)$/);return t?t[1]:"GMT"}C[e>>2]=60*u,_[t>>2]=Number(s!=l);var f=c(o),g=c(i);l<s?(q(f,r,7),q(g,n,7)):(q(f,n,7),q(g,r,7))},e:()=>{O("")},a:(e,t,r)=>V(e,t,r),B:()=>Date.now(),s:e=>{var t=S.length,r=2147483648;if((e>>>=0)>r)return!1;for(var n,a,o=1;o<=4;o*=2){var i=t*(1+.2/o);i=Math.min(i,e+100663296);var s=Math.min(r,(n=Math.max(e,i))+((a=65536)-n%a)%a);if(Z(s))return!0}return!1},w:(e,t)=>{var r=0;return ee().forEach(((n,a)=>{var o=t+r;C[e+4*a>>2]=o,((e,t)=>{for(var r=0;r<e.length;++r)A[t++]=e.charCodeAt(r);A[t]=0})(n,o),r+=n.length+1})),0},x:(e,t)=>{var r=ee();C[e>>2]=r.length;var n=0;return r.forEach((e=>n+=e.length+1)),C[t>>2]=n,0},l:e=>52,y:(e,t,r,n)=>52,p:function(e,t,r,n,a){return K(t,r),70},j:(e,t,r,n)=>{for(var a=0,o=0;o<r;o++){var i=C[t>>2],s=C[t+4>>2];t+=8;for(var l=0;l<s;l++)re(e,S[i+l]);a+=s}return C[n>>2]=a,0},n:function(e,t,r){return allocateUTF8(WASMCallbacks.getCMapProp(e,t,r))},b:function(e,t){var r=de();try{return ue(e)(t)}catch(n){if(he(r),n!==n+0)throw n;ge(1,0)}},d:function(e,t,r){var n=de();try{return ue(e)(t,r)}catch(a){if(he(n),a!==a+0)throw a;ge(1,0)}},g:function(e,t,r,n){var a=de();try{return ue(e)(t,r,n)}catch(o){if(he(a),o!==o+0)throw o;ge(1,0)}},C:function(e,t,r,n,a){var o=de();try{return ue(e)(t,r,n,a)}catch(i){if(he(o),i!==i+0)throw i;ge(1,0)}},m:function(e){var t=de();try{ue(e)()}catch(r){if(he(t),r!==r+0)throw r;ge(1,0)}},f:function(e,t){var r=de();try{ue(e)(t)}catch(n){if(he(r),n!==n+0)throw n;ge(1,0)}},i:function(e,t,r){var n=de();try{ue(e)(t,r)}catch(a){if(he(n),a!==a+0)throw a;ge(1,0)}},h:function(e,t,r,n){var a=de();try{ue(e)(t,r,n)}catch(o){if(he(a),o!==o+0)throw o;ge(1,0)}},D:function(e,t,r,n,a){var o=de();try{ue(e)(t,r,n,a)}catch(i){if(he(o),i!==i+0)throw i;ge(1,0)}},q:(e,t,r,n,a)=>le(e,t,r,n)},fe=function(){var e,t,r,n,i={a:ce};function s(e,t){var r;return fe=e.exports,v=fe.E,k(),ie=fe.J,r=fe.F,U.unshift(r),function(e){var t;if(P--,null===(t=o.monitorRunDependencies)||void 0===t||t.call(o,P),0==P&&(null!==R&&(clearInterval(R),R=null),T)){var r=T;T=null,r()}}(),fe}if(function(e){var t;P++,null===(t=o.monitorRunDependencies)||void 0===t||t.call(o,P)}(),o.instantiateWasm)try{return o.instantiateWasm(i,s)}catch(l){w(`Module.instantiateWasm callback failed with error: ${l}`),a(l)}return(e=y,t=W,r=i,n=function(e){s(e.instance)},e||"function"!=typeof WebAssembly.instantiateStreaming||x(t)||j(t)||d||"function"!=typeof fetch?Y(t,r,n):fetch(t,{credentials:"same-origin"}).then((e=>WebAssembly.instantiateStreaming(e,r).then(n,(function(e){return w(`wasm streaming compile failed: ${e}`),w("falling back to ArrayBuffer instantiation"),Y(t,r,n)}))))).catch(a),{}}(),ge=(o._JS_LoadMemDocument=(e,t,r)=>(o._JS_LoadMemDocument=fe.G)(e,t,r),o._JS_RenderPage=(e,t,r)=>(o._JS_RenderPage=fe.H)(e,t,r),o._JS_GetDicts=(e,t,r)=>(o._JS_GetDicts=fe.I)(e,t,r),o._free=e=>(o._free=fe.K)(e),o._malloc=e=>(o._malloc=fe.L)(e),(e,t)=>(ge=fe.M)(e,t)),de=()=>(de=fe.N)(),he=e=>(he=fe.O)(e);o.___start_em_js=202628,o.___stop_em_js=202723;function me(){function e(){se||(se=!0,o.calledRun=!0,F||(!0,I(U),n(o),o.onRuntimeInitialized&&o.onRuntimeInitialized(),function(){if(o.postRun)for("function"==typeof o.postRun&&(o.postRun=[o.postRun]);o.postRun.length;)e=o.postRun.shift(),E.unshift(e);var e;I(E)}()))}P>0||(!function(){if(o.preRun)for("function"==typeof o.preRun&&(o.preRun=[o.preRun]);o.preRun.length;)e=o.preRun.shift(),D.unshift(e);var e;I(D)}(),P>0||(o.setStatus?(o.setStatus("Running..."),setTimeout((function(){setTimeout((function(){o.setStatus("")}),1),e()}),1)):e()))}if(T=function e(){se||me(),se||(T=e)},o.preInit)for("function"==typeof o.preInit&&(o.preInit=[o.preInit]);o.preInit.length>0;)o.preInit.pop()();return me(),t.ready}})();e.exports=n},653:e=>{"use strict";function t(e){if("string"!==typeof e)throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}function r(e,t){for(var r,n="",a=0,o=-1,i=0,s=0;s<=e.length;++s){if(s<e.length)r=e.charCodeAt(s);else{if(47===r)break;r=47}if(47===r){if(o===s-1||1===i);else if(o!==s-1&&2===i){if(n.length<2||2!==a||46!==n.charCodeAt(n.length-1)||46!==n.charCodeAt(n.length-2))if(n.length>2){var l=n.lastIndexOf("/");if(l!==n.length-1){-1===l?(n="",a=0):a=(n=n.slice(0,l)).length-1-n.lastIndexOf("/"),o=s,i=0;continue}}else if(2===n.length||1===n.length){n="",a=0,o=s,i=0;continue}t&&(n.length>0?n+="/..":n="..",a=2)}else n.length>0?n+="/"+e.slice(o+1,s):n=e.slice(o+1,s),a=s-o-1;o=s,i=0}else 46===r&&-1!==i?++i:i=-1}return n}var n={resolve:function(){for(var e,n="",a=!1,o=arguments.length-1;o>=-1&&!a;o--){var i;o>=0?i=arguments[o]:(void 0===e&&(e=process.cwd()),i=e),t(i),0!==i.length&&(n=i+"/"+n,a=47===i.charCodeAt(0))}return n=r(n,!a),a?n.length>0?"/"+n:"/":n.length>0?n:"."},normalize:function(e){if(t(e),0===e.length)return".";var n=47===e.charCodeAt(0),a=47===e.charCodeAt(e.length-1);return 0!==(e=r(e,!n)).length||n||(e="."),e.length>0&&a&&(e+="/"),n?"/"+e:e},isAbsolute:function(e){return t(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0===arguments.length)return".";for(var e,r=0;r<arguments.length;++r){var a=arguments[r];t(a),a.length>0&&(void 0===e?e=a:e+="/"+a)}return void 0===e?".":n.normalize(e)},relative:function(e,r){if(t(e),t(r),e===r)return"";if((e=n.resolve(e))===(r=n.resolve(r)))return"";for(var a=1;a<e.length&&47===e.charCodeAt(a);++a);for(var o=e.length,i=o-a,s=1;s<r.length&&47===r.charCodeAt(s);++s);for(var l=r.length-s,u=i<l?i:l,c=-1,f=0;f<=u;++f){if(f===u){if(l>u){if(47===r.charCodeAt(s+f))return r.slice(s+f+1);if(0===f)return r.slice(s+f)}else i>u&&(47===e.charCodeAt(a+f)?c=f:0===f&&(c=0));break}var g=e.charCodeAt(a+f);if(g!==r.charCodeAt(s+f))break;47===g&&(c=f)}var d="";for(f=a+c+1;f<=o;++f)f!==o&&47!==e.charCodeAt(f)||(0===d.length?d+="..":d+="/..");return d.length>0?d+r.slice(s+c):(s+=c,47===r.charCodeAt(s)&&++s,r.slice(s))},_makeLong:function(e){return e},dirname:function(e){if(t(e),0===e.length)return".";for(var r=e.charCodeAt(0),n=47===r,a=-1,o=!0,i=e.length-1;i>=1;--i)if(47===(r=e.charCodeAt(i))){if(!o){a=i;break}}else o=!1;return-1===a?n?"/":".":n&&1===a?"//":e.slice(0,a)},basename:function(e,r){if(void 0!==r&&"string"!==typeof r)throw new TypeError('"ext" argument must be a string');t(e);var n,a=0,o=-1,i=!0;if(void 0!==r&&r.length>0&&r.length<=e.length){if(r.length===e.length&&r===e)return"";var s=r.length-1,l=-1;for(n=e.length-1;n>=0;--n){var u=e.charCodeAt(n);if(47===u){if(!i){a=n+1;break}}else-1===l&&(i=!1,l=n+1),s>=0&&(u===r.charCodeAt(s)?-1===--s&&(o=n):(s=-1,o=l))}return a===o?o=l:-1===o&&(o=e.length),e.slice(a,o)}for(n=e.length-1;n>=0;--n)if(47===e.charCodeAt(n)){if(!i){a=n+1;break}}else-1===o&&(i=!1,o=n+1);return-1===o?"":e.slice(a,o)},extname:function(e){t(e);for(var r=-1,n=0,a=-1,o=!0,i=0,s=e.length-1;s>=0;--s){var l=e.charCodeAt(s);if(47!==l)-1===a&&(o=!1,a=s+1),46===l?-1===r?r=s:1!==i&&(i=1):-1!==r&&(i=-1);else if(!o){n=s+1;break}}return-1===r||-1===a||0===i||1===i&&r===a-1&&r===n+1?"":e.slice(r,a)},format:function(e){if(null===e||"object"!==typeof e)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return function(e,t){var r=t.dir||t.root,n=t.base||(t.name||"")+(t.ext||"");return r?r===t.root?r+n:r+e+n:n}("/",e)},parse:function(e){t(e);var r={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return r;var n,a=e.charCodeAt(0),o=47===a;o?(r.root="/",n=1):n=0;for(var i=-1,s=0,l=-1,u=!0,c=e.length-1,f=0;c>=n;--c)if(47!==(a=e.charCodeAt(c)))-1===l&&(u=!1,l=c+1),46===a?-1===i?i=c:1!==f&&(f=1):-1!==i&&(f=-1);else if(!u){s=c+1;break}return-1===i||-1===l||0===f||1===f&&i===l-1&&i===s+1?-1!==l&&(r.base=r.name=0===s&&o?e.slice(1,l):e.slice(s,l)):(0===s&&o?(r.name=e.slice(1,i),r.base=e.slice(1,l)):(r.name=e.slice(s,i),r.base=e.slice(s,l)),r.ext=e.slice(i,l)),s>0?r.dir=e.slice(0,s-1):o&&(r.dir="/"),r},sep:"/",delimiter:":",win32:null,posix:null};n.posix=n,e.exports=n},613:()=>{}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=r(290),t=r.n(e);const n={},a={readFileSync:(e,t="arraybuffer")=>{if(n[e])return n[e];const r=new XMLHttpRequest;return r.open("GET",e,!1),r.responseType=t,r.send(null),n[e]=r.response}},o=a;var i,s;let l,u;r.g.HandlePDFiumOutput=(e,...t)=>{if(s=t[0],"outputBitmap"===e){const e=i.HEAPU8.slice(s.buffer,s.buffer+s.size);s.buffer=e.buffer}};let c=r.g.location.origin+"/assets";c=r.g.location.origin+"/pdfSpy/assets",r.g.WASMCallbacks={getCMapSize:e=>(u=o.readFileSync(c+"/cmaps/"+e+".json","json"),u.maps.length),getCMapProp:(e,t,r,n)=>{const a=u.maps[t];switch(r){case 0:return a.name;case 1:return a.wordMap.length;case 2:if(!a.wordMap.length)return;i.HEAPU16.set(new Uint16Array(a.wordMap),n/2);break;case 3:return a.dwordMap.length/4;case 4:if(!a.dwordMap.length)return;return void i.HEAPU16.set(new Uint16Array(a.dwordMap),n/2);case 5:return a.type;case 6:return a.offset}},getUnicodeSize:e=>u.unicode.length,getUnicode:(e,t)=>{i.HEAPU16.set(new Uint16Array(u.unicode),t/2)},getFontSize(e,t){if("standard"==e){let e=o.readFileSync(c+"/foxitFont/"+t+".ttf");l=new Uint8Array(e)}else{let t=o.readFileSync(c+"/foxitFont/"+e+".ttf");l=new Uint8Array(t)}return l.length},getFontBuffer:(e,t,r)=>(i.HEAPU8.set(l,t),t),findFont:(e,t,r,n,a)=>{let i;switch(r){case 128:case 78:i=o.readFileSync(c+"/fonts/NotoSansMonoCJKjp-Regular.otf");break;case 79:case 129:i=o.readFileSync(c+"/fonts/NotoSansMonoCJKkr-Regular.otf");break;case 134:i=o.readFileSync(c+"/fonts/NotoSansMonoCJKsc-Regular.otf");break;case 136:i=o.readFileSync(c+"/fonts/NotoSansCJKtc-Regular.otf");break;default:return 0}return l=new Uint8Array(i),i.byteLength},loadData:e=>{let t,r;if("kJapan1VerticalCIDs"===e){t=o.readFileSync(c+"/data/"+e);let n=new Uint16Array(t);return r=i._malloc(2*n.length),i.HEAPU16.set(n,r),2*r}return t=o.readFileSync(c+"/data/"+e),r=i._malloc(t.byteLength),i.HEAPU16.set(new Uint8Array(t),r),r},loadFontBuffer:(e,t,r)=>{let n;switch(e){case"MalgunGothic-Semilight":n=o.readFileSync(c+"/fonts/NotoSansMonoCJKkr-Regular.otf");break;case"SimSun":n=o.readFileSync(c+"/fonts/NotoSansMonoCJKsc-Regular.otf");break;default:return 0}const a=Math.min(r,n.byteLength);return i.HEAPU8.set(new Uint8Array(n).slice(0,a),t),a}},onmessage=e=>{if(!i)return void setTimeout((()=>{onmessage(e)}),500);const t=e.data;switch(t.fn){case"loadDoc":{const e=t.buffer,n=(t.width,e.length||e.byteLength);var r=i._malloc(n*e.BYTES_PER_ELEMENT);i.HEAPU8.set(e,r);const a=i._JS_LoadMemDocument(r,n,t.pwd);if(a){const e=s;i._JS_GetDicts(a,0,5);const r=s;postMessage({id:t.id,data:{id:a,pageData:e,dicts:r,imgs:[],scale:1,renderCount:0}})}}break;case"loadObject":{const{doc:e,objNum:r,limit:n=8}=t;if(Array.isArray(r)){const t={};for(let n=0;n<r.length;n++)i._JS_GetDicts(e,r[n],1),Object.assign(t,s);s=t}else i._JS_GetDicts(e,r,n);postMessage({id:t.id,data:s})}break;case"renderPage":const{doc:e,index:n,scale:a,id:o}=t;i._JS_RenderPage(e,n,a),s.index=n,s.scale=a,postMessage({id:o,data:s},[s.buffer])}s={}},fetch(c+"/pdfium.wasm").then((e=>e.arrayBuffer())).then((e=>t()({wasmBinary:e,onRuntimeInitialized:function(){},locateFile:e=>[".",e].join("/")+""}))).then((e=>{i=e})).catch((e=>{throw console.log(e),console.log(e.stack),e}))})()})();