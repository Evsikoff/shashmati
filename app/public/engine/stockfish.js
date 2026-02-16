/*!
 * Stockfish.js __VERSION__ (c) __YEAR__, Chess.com, LLC
 * https://github.com/nmrugg/stockfish.js
 * License: GPLv3
 *
 * Based on Stockfish (c) T. Romstad, M. Costalba, J. Kiiski, G. Linscott and other contributors.
 * https://github.com/official-stockfish/Stockfish
 */

(function () {
var Stockfish;
function INIT_ENGINE() {

var Stockfish = (() => {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  if (typeof __filename !== 'undefined') _scriptDir = _scriptDir || __filename;
  return (
function(Stockfish) {
  Stockfish = Stockfish || {};


function d(){k.buffer!=l&&n(k.buffer);return aa}function u(){k.buffer!=l&&n(k.buffer);return ba}function w(){k.buffer!=l&&n(k.buffer);return ca}function da(){k.buffer!=l&&n(k.buffer);return ea}var x;x||(x=typeof Stockfish !== 'undefined' ? Stockfish : {});var ha,ia;x.ready=new Promise(function(a,b){ha=a;ia=b});
"undefined"!==typeof global&&"[object process]"===Object.prototype.toString.call(global.process)&&"undefined"!==typeof fetch&&("undefined"===typeof XMLHttpRequest&&(global.XMLHttpRequest=function(){var a,b={open:function(c,e){a=e},send:function(){require("fs").readFile(a,function(c,e){b.readyState=4;c?(console.error(c),b.status=404,b.onerror(c)):(b.status=200,b.response=e,b.onreadystatechange(),b.onload())})}};return b}),fetch=null);x.print=function(a){x.listener?x.listener(a):console.log(a)};
x.printErr=function(a){x.listener?x.listener(a):console.error(a)};x.terminate=function(){"undefined"!==typeof y&&y.wa()};var ja=Object.assign({},x),ka=[],z="./this.program",A=(a,b)=>{throw b;},la="object"==typeof window,B="function"==typeof importScripts,D="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,E=x.ENVIRONMENT_IS_PTHREAD||!1,F="";function ma(a){return x.locateFile?x.locateFile(a,F):F+a}var na,G,fs,oa,pa;
if(D){F=B?require("path").dirname(F)+"/":__dirname+"/";pa=()=>{oa||(fs=require("fs"),oa=require("path"))};na=function(b,c){pa();b=oa.normalize(b);return fs.readFileSync(b,c?void 0:"utf8")};G=b=>{b=na(b,!0);b.buffer||(b=new Uint8Array(b));return b};1<process.argv.length&&(z=process.argv[1].replace(/\\/g,"/"));ka=process.argv.slice(2);process.on("uncaughtException",function(b){if(!(b instanceof I))throw b;});process.on("unhandledRejection",function(b){throw b;});A=(b,c)=>{if(J())throw process.exitCode=
b,c;c instanceof I||K("exiting due to exception: "+c);process.exit(b)};x.inspect=function(){return"[Emscripten Module object]"};let a;try{a=require("worker_threads")}catch(b){throw console.error('The "worker_threads" module is not supported in this node.js build - perhaps a newer version is needed?'),b;}global.Worker=a.Worker}else if(la||B)B?F=self.location.href:"undefined"!=typeof document&&document.currentScript&&(F=document.currentScript.src),_scriptDir&&(F=_scriptDir),0!==F.indexOf("blob:")?F=
F.substr(0,F.replace(/[?#].*/,"").lastIndexOf("/")+1):F="",D||(na=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},B&&(G=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}));D&&"undefined"==typeof performance&&(global.performance=require("perf_hooks").performance);var qa=console.log.bind(console),ra=console.warn.bind(console);D&&(pa(),qa=a=>fs.writeSync(1,a+"\n"),ra=a=>fs.writeSync(2,a+"\n"));
var sa=x.print||qa,K=x.printErr||ra;Object.assign(x,ja);ja=null;x.arguments&&(ka=x.arguments);x.thisProgram&&(z=x.thisProgram);x.quit&&(A=x.quit);var L,M;x.wasmBinary&&(M=x.wasmBinary);var noExitRuntime=x.noExitRuntime||!0;"object"!=typeof WebAssembly&&N("no native wasm support detected");var k,ta,ua=!1;function va(a){var b=new TextDecoder(a);this.decode=c=>{c.buffer instanceof SharedArrayBuffer&&(c=new Uint8Array(c));return b.decode.call(b,c)}}
var wa="undefined"!=typeof TextDecoder?new va("utf8"):void 0;
function xa(a,b,c){var e=b+c;for(c=b;a[c]&&!(c>=e);)++c;if(16<c-b&&a.subarray&&wa)return wa.decode(a.subarray(b,c));for(e="";b<c;){var g=a[b++];if(g&128){var h=a[b++]&63;if(192==(g&224))e+=String.fromCharCode((g&31)<<6|h);else{var m=a[b++]&63;g=224==(g&240)?(g&15)<<12|h<<6|m:(g&7)<<18|h<<12|m<<6|a[b++]&63;65536>g?e+=String.fromCharCode(g):(g-=65536,e+=String.fromCharCode(55296|g>>10,56320|g&1023))}}else e+=String.fromCharCode(g)}return e}function P(a){return a?xa(u(),a,void 0):""}
function Q(a,b,c,e){if(0<e){e=c+e-1;for(var g=0;g<a.length;++g){var h=a.charCodeAt(g);if(55296<=h&&57343>=h){var m=a.charCodeAt(++g);h=65536+((h&1023)<<10)|m&1023}if(127>=h){if(c>=e)break;b[c++]=h}else{if(2047>=h){if(c+1>=e)break;b[c++]=192|h>>6}else{if(65535>=h){if(c+2>=e)break;b[c++]=224|h>>12}else{if(c+3>=e)break;b[c++]=240|h>>18;b[c++]=128|h>>12&63}b[c++]=128|h>>6&63}b[c++]=128|h&63}}b[c]=0}}
function ya(a){for(var b=0,c=0;c<a.length;++c){var e=a.charCodeAt(c);55296<=e&&57343>=e&&(e=65536+((e&1023)<<10)|a.charCodeAt(++c)&1023);127>=e?++b:b=2047>=e?b+2:65535>=e?b+3:b+4}return b}"undefined"!=typeof TextDecoder&&new va("utf-16le");function za(a){var b=ya(a)+1,c=R(b);Q(a,d(),c,b);return c}function Aa(a,b){d().set(a,b)}var l,aa,ba,ca,ea;E&&(l=x.buffer);
function n(a){l=a;x.HEAP8=aa=new Int8Array(a);x.HEAP16=new Int16Array(a);x.HEAP32=ca=new Int32Array(a);x.HEAPU8=ba=new Uint8Array(a);x.HEAPU16=new Uint16Array(a);x.HEAPU32=new Uint32Array(a);x.HEAPF32=new Float32Array(a);x.HEAPF64=ea=new Float64Array(a)}var Ba=x.INITIAL_MEMORY||134217728;
if(E)k=x.wasmMemory,l=x.buffer;else if(x.wasmMemory)k=x.wasmMemory;else if(k=new WebAssembly.Memory({initial:Ba/65536,maximum:32768,shared:!0}),!(k.buffer instanceof SharedArrayBuffer))throw K("requested a shared WebAssembly.Memory but the returned buffer is not a SharedArrayBuffer, indicating that while the browser has SharedArrayBuffer it does not have WebAssembly threads support - you may need to set a flag"),D&&console.log("(on node you may need: --experimental-wasm-threads --experimental-wasm-bulk-memory and also use a recent version)"),
Error("bad memory");k&&(l=k.buffer);Ba=l.byteLength;n(l);var Ca,Da=[],Ea=[],Fa=[],Ga=[],Ha=0;function J(){return noExitRuntime||0<Ha}function Ia(){var a=x.preRun.shift();Da.unshift(a)}var S=0,Ja=null,T=null;x.preloadedImages={};x.preloadedAudios={};function N(a){if(E)postMessage({cmd:"onAbort",arg:a});else if(x.onAbort)x.onAbort(a);a="Aborted("+a+")";K(a);ua=!0;a=new WebAssembly.RuntimeError(a+". Build with -s ASSERTIONS=1 for more info.");ia(a);throw a;}
function Ka(){return U.startsWith("data:application/octet-stream;base64,")}var U;U="stockfish.wasm";Ka()||(U=ma(U));function La(){var a=U;try{if(a==U&&M)return new Uint8Array(M);if(G)return G(a);throw"both async and sync fetching of the wasm failed";}catch(b){N(b)}}
function Ma(){return M||!la&&!B||"function"!=typeof fetch?Promise.resolve().then(function(){return La()}):fetch(U,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+U+"'";return a.arrayBuffer()}).catch(function(){return La()})}var Na={134528:function(){try{x.onDoneSearching()}catch(a){}}};
function V(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(x);else{var c=b.Za;"number"==typeof c?void 0===b.ka?Oa(c)():Oa(c)(b.ka):c(void 0===b.ka?null:b.ka)}}}function Pa(a){var b=Qa();a=a();W(b);return a}function Ra(a){var b=y.ga[a];b&&(w()[a>>2]=0,y.Ba(b.worker))}
var y={ha:[],ma:[],ra:[],Ha:function(){E&&y.Ja()},bb:function(){},Ja:function(){y.receiveObjectTransfer=y.Ma;y.threadInit=y.Ca;y.setExitStatus=y.Oa;noExitRuntime=!1},ga:{},Oa:function(){},wa:function(){for(var a in y.ga){var b=y.ga[a];b&&b.worker&&y.Ba(b.worker)}for(a=0;a<y.ha.length;++a)y.ha[a].terminate();y.ha=[]},Ba:function(a){y.Na(function(){delete y.ga[a.ia.xa];y.ha.push(a);y.ma.splice(y.ma.indexOf(a),1);Sa(a.ia.xa);a.ia=void 0})},Na:function(a){w()[Ta>>2]=0;try{a()}finally{w()[Ta>>2]=1}},Ma:function(){},
Ca:function(){for(var a in y.ra)if(y.ra.hasOwnProperty(a))y.ra[a]()},Ka:function(a,b){a.onmessage=c=>{c=c.data;var e=c.cmd;a.ia&&(y.Ea=a.ia.xa);if(c.targetThread&&c.targetThread!=X()){var g=y.ga[c.hb];g?g.worker.postMessage(c,c.transferList):K('Internal error! Worker sent a message "'+e+'" to target pthread '+c.targetThread+", but that thread no longer exists!")}else if("processQueuedMainThreadWork"===e)Ua();else if("spawnThread"===e)Va(c);else if("cleanupThread"===e)Ra(c.thread);else if("killThread"===
e)c=c.thread,w()[c>>2]=0,e=y.ga[c],delete y.ga[c],e.worker.terminate(),Sa(c),y.ma.splice(y.ma.indexOf(e.worker),1),e.worker.ia=void 0;else if("cancelThread"===e)y.ga[c.thread].worker.postMessage({cmd:"cancel"});else if("loaded"===e)a.loaded=!0,b&&b(a),a.la&&(a.la(),delete a.la);else if("print"===e)sa("Thread "+c.threadId+": "+c.text);else if("printErr"===e)K("Thread "+c.threadId+": "+c.text);else if("alert"===e)alert("Thread "+c.threadId+": "+c.text);else if("setimmediate"===c.target)a.postMessage(c);
else if("onAbort"===e){if(x.onAbort)x.onAbort(c.arg)}else K("worker sent an unknown command "+e);y.Ea=void 0};a.onerror=c=>{K("worker sent an error! "+c.filename+":"+c.lineno+": "+c.message);throw c;};D&&(a.on("message",function(c){a.onmessage({data:c})}),a.on("error",function(c){a.onerror(c)}),a.on("detachedExit",function(){}));a.postMessage({cmd:"load",urlOrBlob:x.mainScriptUrlOrBlob||_scriptDir,wasmMemory:k,wasmModule:ta})},Da:function(){var a=ma("stockfish.worker.js");y.ha.push(new Worker(a))},
Ga:function(){0==y.ha.length&&(y.Da(),y.Ka(y.ha[0]));return y.ha.pop()}};x.establishStackSpace=function(){var a=X(),b=w()[a+44>>2];a=w()[a+48>>2];Wa(b,b-a);W(b)};function Xa(a){if(E)return Y(1,0,a);try{Ya(a)}catch(b){b instanceof I||"unwind"==b||A(1,b)}}var Z=[];function Oa(a){var b=Z[a];b||(a>=Z.length&&(Z.length=a+1),Z[a]=b=Ca.get(a));return b}x.invokeEntryPoint=function(a,b){return Oa(a)(b)};var Za;
Za=D?()=>{var a=process.hrtime();return 1E3*a[0]+a[1]/1E6}:E?()=>performance.now()-x.__performance_now_clock_drift:()=>performance.now();function Va(a){var b=y.Ga();if(!b)return 6;y.ma.push(b);var c=y.ga[a.va]={worker:b,xa:a.va};b.ia=c;var e={cmd:"run",start_routine:a.Pa,arg:a.ka,threadInfoStruct:a.va};b.la=()=>{e.time=performance.now();b.postMessage(e,a.Ua)};b.loaded&&(b.la(),delete b.la);return 0}var $a=[null,[],[]],ab={};function bb(a,b,c){return E?Y(2,1,a,b,c):0}
function cb(a,b){if(E)return Y(3,1,a,b)}function db(a,b){if(E)return Y(4,1,a,b)}function eb(a,b,c){return E?Y(5,1,a,b,c):0}function fb(a,b,c){if(E)return Y(6,1,a,b,c)}function gb(a,b,c,e,g,h,m,v){return E?Y(7,1,a,b,c,e,g,h,m,v):-52}function hb(a,b,c,e,g,h){if(E)return Y(8,1,a,b,c,e,g,h)}var ib=[];function Y(a,b){var c=arguments.length-2,e=arguments;return Pa(function(){for(var g=R(8*c),h=g>>3,m=0;m<c;m++){var v=e[2+m];da()[h+m]=v}return jb(a,c,g,b)})}var kb=[];
function lb(a,b,c,e){Pa(function(){var g=R(12),h=0;if(b){h=ya(b)+1;var m=mb(h);Q(b,u(),m,h);h=m}w()[g>>2]=h;w()[g+4>>2]=c;w()[g+8>>2]=e;nb(a,657457152,0,h,g)})}var ob=[0,"undefined"!=typeof document?document:0,"undefined"!=typeof window?window:0];function pb(a){a=2<a?P(a):a;return ob[a]||("undefined"!=typeof document?document.querySelector(a):void 0)}
function qb(a,b,c){var e=pb(a);if(!e)return-4;e.qa&&(w()[e.qa>>2]=b,w()[e.qa+4>>2]=c);if(e.Aa||!e.Wa)e.Aa&&(e=e.Aa),a=!1,e.pa&&e.pa.oa&&(a=e.pa.oa.getParameter(2978),a=0===a[0]&&0===a[1]&&a[2]===e.width&&a[3]===e.height),e.width=b,e.height=c,a&&e.pa.oa.viewport(0,0,b,c);else return e.qa?(e=w()[e.qa+8>>2],a=a?P(a):"",lb(e,a,b,c),1):-4;return 0}function rb(a,b,c){return E?Y(9,1,a,b,c):qb(a,b,c)}
function sb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,e){b.vertexAttribDivisorANGLE(c,e)},a.drawArraysInstanced=function(c,e,g,h){b.drawArraysInstancedANGLE(c,e,g,h)},a.drawElementsInstanced=function(c,e,g,h,m){b.drawElementsInstancedANGLE(c,e,g,h,m)})}
function tb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function ub(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,e){b.drawBuffersWEBGL(c,e)})}
function vb(a,b){a.za||(a.za=a.getContext,a.getContext=function(e,g){g=a.za(e,g);return"webgl"==e==g instanceof WebGLRenderingContext?g:null});var c=a.getContext("webgl",b);return c?wb(c,b):0}function wb(a,b){var c=mb(8);w()[c+4>>2]=X();var e={ab:c,attributes:b,version:b.La,oa:a};a.canvas&&(a.canvas.pa=e);("undefined"==typeof b.ya||b.ya)&&xb(e);return c}
function xb(a){a||(a=yb);if(!a.Ia){a.Ia=!0;var b=a.oa;sb(b);tb(b);ub(b);b.Xa=b.getExtension("EXT_disjoint_timer_query");b.eb=b.getExtension("WEBGL_multi_draw");(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var yb,zb=["default","low-power","high-performance"],Ab={};
function Cb(){if(!Db){var a={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"==typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:z||"./this.program"},b;for(b in Ab)void 0===Ab[b]?delete a[b]:a[b]=Ab[b];var c=[];for(b in a)c.push(b+"="+a[b]);Db=c}return Db}var Db;
function Eb(a,b){if(E)return Y(10,1,a,b);var c=0;Cb().forEach(function(e,g){var h=b+c;g=w()[a+4*g>>2]=h;for(h=0;h<e.length;++h)d()[g++>>0]=e.charCodeAt(h);d()[g>>0]=0;c+=e.length+1});return 0}function Fb(a,b){if(E)return Y(11,1,a,b);var c=Cb();w()[a>>2]=c.length;var e=0;c.forEach(function(g){e+=g.length+1});w()[b>>2]=e;return 0}function Gb(a){return E?Y(12,1,a):0}function Hb(a,b,c,e){if(E)return Y(13,1,a,b,c,e);a=ab.$a(a);b=ab.Ya(a,b,c);w()[e>>2]=b;return 0}
function Ib(a,b,c,e,g){if(E)return Y(14,1,a,b,c,e,g)}function Jb(a,b,c,e){if(E)return Y(15,1,a,b,c,e);for(var g=0,h=0;h<c;h++){var m=w()[b>>2],v=w()[b+4>>2];b+=8;for(var C=0;C<v;C++){var q=u()[m+C],r=$a[a];0===q||10===q?((1===a?sa:K)(xa(r,0)),r.length=0):r.push(q)}g+=v}w()[e>>2]=g;return 0}function Kb(a){return 0===a%4&&(0!==a%100||0===a%400)}function Lb(a,b){for(var c=0,e=0;e<=b;c+=a[e++]);return c}var Mb=[31,29,31,30,31,30,31,31,30,31,30,31],Nb=[31,28,31,30,31,30,31,31,30,31,30,31];
function Ob(a,b){for(a=new Date(a.getTime());0<b;){var c=a.getMonth(),e=(Kb(a.getFullYear())?Mb:Nb)[c];if(b>e-a.getDate())b-=e-a.getDate()+1,a.setDate(1),11>c?a.setMonth(c+1):(a.setMonth(0),a.setFullYear(a.getFullYear()+1));else{a.setDate(a.getDate()+b);break}}return a}
function Pb(a,b,c,e){function g(f,p,t){for(f="number"==typeof f?f.toString():f||"";f.length<p;)f=t[0]+f;return f}function h(f,p){return g(f,p,"0")}function m(f,p){function t(Bb){return 0>Bb?-1:0<Bb?1:0}var H;0===(H=t(f.getFullYear()-p.getFullYear()))&&0===(H=t(f.getMonth()-p.getMonth()))&&(H=t(f.getDate()-p.getDate()));return H}function v(f){switch(f.getDay()){case 0:return new Date(f.getFullYear()-1,11,29);case 1:return f;case 2:return new Date(f.getFullYear(),0,3);case 3:return new Date(f.getFullYear(),
0,2);case 4:return new Date(f.getFullYear(),0,1);case 5:return new Date(f.getFullYear()-1,11,31);case 6:return new Date(f.getFullYear()-1,11,30)}}function C(f){f=Ob(new Date(f.fa+1900,0,1),f.ua);var p=new Date(f.getFullYear()+1,0,4),t=v(new Date(f.getFullYear(),0,4));p=v(p);return 0>=m(t,f)?0>=m(p,f)?f.getFullYear()+1:f.getFullYear():f.getFullYear()-1}var q=w()[e+40>>2];e={Sa:w()[e>>2],Ra:w()[e+4>>2],sa:w()[e+8>>2],na:w()[e+12>>2],ja:w()[e+16>>2],fa:w()[e+20>>2],ta:w()[e+24>>2],ua:w()[e+28>>2],ib:w()[e+
32>>2],Qa:w()[e+36>>2],Ta:q?P(q):""};c=P(c);q={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var r in q)c=c.replace(new RegExp(r,"g"),q[r]);var O="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
fa="January February March April May June July August September October November December".split(" ");q={"%a":function(f){return O[f.ta].substring(0,3)},"%A":function(f){return O[f.ta]},"%b":function(f){return fa[f.ja].substring(0,3)},"%B":function(f){return fa[f.ja]},"%C":function(f){return h((f.fa+1900)/100|0,2)},"%d":function(f){return h(f.na,2)},"%e":function(f){return g(f.na,2," ")},"%g":function(f){return C(f).toString().substring(2)},"%G":function(f){return C(f)},"%H":function(f){return h(f.sa,
2)},"%I":function(f){f=f.sa;0==f?f=12:12<f&&(f-=12);return h(f,2)},"%j":function(f){return h(f.na+Lb(Kb(f.fa+1900)?Mb:Nb,f.ja-1),3)},"%m":function(f){return h(f.ja+1,2)},"%M":function(f){return h(f.Ra,2)},"%n":function(){return"\n"},"%p":function(f){return 0<=f.sa&&12>f.sa?"AM":"PM"},"%S":function(f){return h(f.Sa,2)},"%t":function(){return"\t"},"%u":function(f){return f.ta||7},"%U":function(f){var p=new Date(f.fa+1900,0,1),t=0===p.getDay()?p:Ob(p,7-p.getDay());f=new Date(f.fa+1900,f.ja,f.na);return 0>
m(t,f)?h(Math.ceil((31-t.getDate()+(Lb(Kb(f.getFullYear())?Mb:Nb,f.getMonth()-1)-31)+f.getDate())/7),2):0===m(t,p)?"01":"00"},"%V":function(f){var p=new Date(f.fa+1901,0,4),t=v(new Date(f.fa+1900,0,4));p=v(p);var H=Ob(new Date(f.fa+1900,0,1),f.ua);return 0>m(H,t)?"53":0>=m(p,H)?"01":h(Math.ceil((t.getFullYear()<f.fa+1900?f.ua+32-t.getDate():f.ua+1-t.getDate())/7),2)},"%w":function(f){return f.ta},"%W":function(f){var p=new Date(f.fa,0,1),t=1===p.getDay()?p:Ob(p,0===p.getDay()?1:7-p.getDay()+1);f=
new Date(f.fa+1900,f.ja,f.na);return 0>m(t,f)?h(Math.ceil((31-t.getDate()+(Lb(Kb(f.getFullYear())?Mb:Nb,f.getMonth()-1)-31)+f.getDate())/7),2):0===m(t,p)?"01":"00"},"%y":function(f){return(f.fa+1900).toString().substring(2)},"%Y":function(f){return f.fa+1900},"%z":function(f){f=f.Qa;var p=0<=f;f=Math.abs(f)/60;return(p?"+":"-")+String("0000"+(f/60*100+f%60)).slice(-4)},"%Z":function(f){return f.Ta},"%%":function(){return"%"}};c=c.replace(/%%/g,"\x00\x00");for(r in q)c.includes(r)&&(c=c.replace(new RegExp(r,
"g"),q[r](e)));c=c.replace(/\0\0/g,"%");r=Qb(c);if(r.length>b)return 0;Aa(r,a);return r.length-1}y.Ha();var Rb=[null,Xa,bb,cb,db,eb,fb,gb,hb,rb,Eb,Fb,Gb,Hb,Ib,Jb];function Qb(a){var b=Array(ya(a)+1);Q(a,b,0,b.length);return b}
var Wb={q:function(a,b){Sb(a,b)},k:function(a){Tb(a,!B,1,!la);y.Ca()},h:function(a){E?postMessage({cmd:"cleanupThread",thread:a}):Ra(a)},j:function(a,b,c,e){if("undefined"==typeof SharedArrayBuffer)return K("Current environment does not support SharedArrayBuffer, pthreads are not available!"),6;var g=[];if(E&&0===g.length)return Ub(687865856,a,b,c,e);a={Pa:c,va:a,ka:e,Ua:g};return E?(a.Va="spawnThread",postMessage(a,g),0):Va(a)},f:bb,o:cb,n:db,w:eb,i:fb,C:function(){return 2097152},l:function(a,b){if(a==
b)postMessage({cmd:"processQueuedMainThreadWork"});else if(E)postMessage({targetThread:a,cmd:"processThreadQueue"});else{a=(a=y.ga[a])&&a.worker;if(!a)return;a.postMessage({cmd:"processThreadQueue"})}return 1},D:gb,E:hb,b:function(){N("")},x:function(a,b){if(0===a)a=Date.now();else if(1===a||4===a)a=Za();else return w()[Vb()>>2]=28,-1;w()[b>>2]=a/1E3|0;w()[b+4>>2]=a%1E3*1E6|0;return 0},B:function(a,b,c){ib.length=0;var e;for(c>>=2;e=u()[b++];)(e=105>e)&&c&1&&c++,ib.push(e?da()[c++>>1]:w()[c]),++c;
return E?Y.apply(null,[-1-a,0].concat(ib)):Na[a].apply(null,ib)},g:function(){D||B||(L||(L={}),L["Blocking on the main thread is very dangerous, see https://emscripten.org/docs/porting/pthreads.html#blocking-on-the-main-browser-thread"]||(L["Blocking on the main thread is very dangerous, see https://emscripten.org/docs/porting/pthreads.html#blocking-on-the-main-browser-thread"]=1,K("Blocking on the main thread is very dangerous, see https://emscripten.org/docs/porting/pthreads.html#blocking-on-the-main-browser-thread")))},
d:Za,A:function(a,b,c){u().copyWithin(a,b,b+c)},r:function(){return D?require("os").cpus().length:navigator.hardwareConcurrency},F:function(a,b,c){kb.length=b;c>>=3;for(var e=0;e<b;e++)kb[e]=da()[c+e];return(0>a?Na[-a-1]:Rb[a]).apply(null,kb)},z:function(a){var b=u().length;a>>>=0;if(a<=b||2147483648<a)return!1;for(var c=1;4>=c;c*=2){var e=b*(1+.2/c);e=Math.min(e,a+100663296);var g=Math;e=Math.max(a,e);g=g.min.call(g,2147483648,e+(65536-e%65536)%65536);a:{try{k.grow(g-l.byteLength+65535>>>16);n(k.buffer);
var h=1;break a}catch(m){}h=void 0}if(h)return!0}return!1},G:function(a,b,c){return pb(a)?qb(a,b,c):rb(a,b,c)},m:function(){throw"unwind";},H:function(a,b){b>>=2;var c=w()[b+6];b={alpha:!!w()[b],depth:!!w()[b+1],stencil:!!w()[b+2],antialias:!!w()[b+3],premultipliedAlpha:!!w()[b+4],preserveDrawingBuffer:!!w()[b+5],powerPreference:zb[c],failIfMajorPerformanceCaveat:!!w()[b+7],La:w()[b+8],cb:w()[b+9],ya:w()[b+10],Fa:w()[b+11],fb:w()[b+12],gb:w()[b+13]};a=pb(a);return!a||b.Fa?0:vb(a,b)},t:Eb,u:Fb,c:function(a){Ya(a)},
e:Gb,v:Hb,p:Ib,y:Jb,a:k||x.wasmMemory,s:function(a,b,c,e){return Pb(a,b,c,e)}};
(function(){function a(g,h){x.asm=g.exports;y.ra.push(x.asm.O);Ca=x.asm.aa;Ea.unshift(x.asm.I);ta=h;E||(S--,x.monitorRunDependencies&&x.monitorRunDependencies(S),0==S&&(null!==Ja&&(clearInterval(Ja),Ja=null),T&&(g=T,T=null,g())))}function b(g){a(g.instance,g.module)}function c(g){return Ma().then(function(h){return WebAssembly.instantiate(h,e)}).then(function(h){return h}).then(g,function(h){K("failed to asynchronously prepare wasm: "+h);N(h)})}var e={a:Wb};E||(S++,x.monitorRunDependencies&&x.monitorRunDependencies(S));
if(x.instantiateWasm)try{return x.instantiateWasm(e,a)}catch(g){return K("Module.instantiateWasm callback failed with error: "+g),!1}(function(){return M||"function"!=typeof WebAssembly.instantiateStreaming||Ka()||"function"!=typeof fetch?c(b):fetch(U,{credentials:"same-origin"}).then(function(g){return WebAssembly.instantiateStreaming(g,e).then(b,function(h){K("wasm streaming compile failed: "+h);K("falling back to ArrayBuffer instantiation");return c(b)})})})().catch(ia);return{}})();
x.___wasm_call_ctors=function(){return(x.___wasm_call_ctors=x.asm.I).apply(null,arguments)};var Sb=x._main=function(){return(Sb=x._main=x.asm.J).apply(null,arguments)};x._command=function(){return(x._command=x.asm.K).apply(null,arguments)};x._isReady=function(){return(x._isReady=x.asm.L).apply(null,arguments)};x._isSearching=function(){return(x._isSearching=x.asm.M).apply(null,arguments)};x._free=function(){return(x._free=x.asm.N).apply(null,arguments)};
x._emscripten_tls_init=function(){return(x._emscripten_tls_init=x.asm.O).apply(null,arguments)};var Vb=x.___errno_location=function(){return(Vb=x.___errno_location=x.asm.P).apply(null,arguments)};x.__emscripten_thread_crashed=function(){return(x.__emscripten_thread_crashed=x.asm.Q).apply(null,arguments)};x._emscripten_proxy_main=function(){return(x._emscripten_proxy_main=x.asm.R).apply(null,arguments)};
var Tb=x.__emscripten_thread_init=function(){return(Tb=x.__emscripten_thread_init=x.asm.S).apply(null,arguments)};x._emscripten_current_thread_process_queued_calls=function(){return(x._emscripten_current_thread_process_queued_calls=x.asm.T).apply(null,arguments)};
var Ub=x._emscripten_sync_run_in_main_thread_4=function(){return(Ub=x._emscripten_sync_run_in_main_thread_4=x.asm.U).apply(null,arguments)},Ua=x._emscripten_main_thread_process_queued_calls=function(){return(Ua=x._emscripten_main_thread_process_queued_calls=x.asm.V).apply(null,arguments)},jb=x._emscripten_run_in_main_runtime_thread_js=function(){return(jb=x._emscripten_run_in_main_runtime_thread_js=x.asm.W).apply(null,arguments)},nb=x._emscripten_dispatch_to_thread_=function(){return(nb=x._emscripten_dispatch_to_thread_=
x.asm.X).apply(null,arguments)},X=x._pthread_self=function(){return(X=x._pthread_self=x.asm.Y).apply(null,arguments)},mb=x._malloc=function(){return(mb=x._malloc=x.asm.Z).apply(null,arguments)},Sa=x.__emscripten_thread_free_data=function(){return(Sa=x.__emscripten_thread_free_data=x.asm._).apply(null,arguments)};x.__emscripten_thread_exit=function(){return(x.__emscripten_thread_exit=x.asm.$).apply(null,arguments)};
var Wa=x._emscripten_stack_set_limits=function(){return(Wa=x._emscripten_stack_set_limits=x.asm.ba).apply(null,arguments)},Qa=x.stackSave=function(){return(Qa=x.stackSave=x.asm.ca).apply(null,arguments)},W=x.stackRestore=function(){return(W=x.stackRestore=x.asm.da).apply(null,arguments)},R=x.stackAlloc=function(){return(R=x.stackAlloc=x.asm.ea).apply(null,arguments)},Ta=x.__emscripten_allow_main_runtime_queued_calls=134064;
x.ccall=function(a,b,c,e){var g={string:function(q){var r=0;if(null!==q&&void 0!==q&&0!==q){var O=(q.length<<2)+1,fa=r=R(O);Q(q,u(),fa,O)}return r},array:function(q){var r=R(q.length);Aa(q,r);return r}};a=x["_"+a];var h=[],m=0;if(e)for(var v=0;v<e.length;v++){var C=g[c[v]];C?(0===m&&(m=Qa()),h[v]=C(e[v])):h[v]=e[v]}c=a.apply(null,h);return c=function(q){0!==m&&W(m);return"string"===b?P(q):"boolean"===b?!!q:q}(c)};x.keepRuntimeAlive=J;x.PThread=y;x.PThread=y;x.wasmMemory=k;x.ExitStatus=I;var Xb;
function I(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}T=function Yb(){Xb||Zb();Xb||(T=Yb)};
function Zb(a){function b(){if(!Xb&&(Xb=!0,x.calledRun=!0,!ua)){E||V(Ea);E||V(Fa);ha(x);if(x.onRuntimeInitialized)x.onRuntimeInitialized();if($b){var c=a,e=x._emscripten_proxy_main;c=c||[];var g=c.length+1,h=R(4*(g+1));w()[h>>2]=za(z);for(var m=1;m<g;m++)w()[(h>>2)+m]=za(c[m-1]);w()[(h>>2)+g]=0;e(g,h)}if(!E){if(x.postRun)for("function"==typeof x.postRun&&(x.postRun=[x.postRun]);x.postRun.length;)c=x.postRun.shift(),Ga.unshift(c);V(Ga)}}}a=a||ka;if(!(0<S))if(E)ha(x),E||V(Ea),postMessage({cmd:"loaded"});
else{if(x.preRun)for("function"==typeof x.preRun&&(x.preRun=[x.preRun]);x.preRun.length;)Ia();V(Da);0<S||(x.setStatus?(x.setStatus("Running..."),setTimeout(function(){setTimeout(function(){x.setStatus("")},1);b()},1)):b())}}x.run=Zb;function Ya(a){if(E)throw Xa(a),"unwind";J()||E||y.wa();if(!J()){y.wa();if(x.onExit)x.onExit(a);ua=!0}A(a,new I(a))}if(x.preInit)for("function"==typeof x.preInit&&(x.preInit=[x.preInit]);0<x.preInit.length;)x.preInit.pop()();var $b=!0;x.noInitialRun&&($b=!1);Zb();


  return Stockfish.ready
}
);
})();
if (typeof exports === 'object' && typeof module === 'object')
  module.exports = Stockfish;
else if (typeof define === 'function' && define['amd'])
  define([], function() { return Stockfish; });
else if (typeof exports === 'object')
  exports["Stockfish"] = Stockfish;
return Stockfish;
}

if (typeof self !== "undefined" && self.location.hash.split(",")[1] === "worker" || typeof global !== "undefined" && Object.prototype.toString.call(global.process) === "[object process]" && !require("worker_threads").isMainThread) {
    (function() {
        /// Insert worker here
    })();
/// Is it a web worker?
} else if (typeof onmessage !== "undefined" && (typeof window === "undefined" || typeof window.document === "undefined") || typeof global !== "undefined" && Object.prototype.toString.call(global.process) === "[object process]") {
    (function ()
    {
        var isNode = typeof global !== "undefined" && Object.prototype.toString.call(global.process) === "[object process]";
        var engine = {};
        var startUpQueue = [];
        var queue = [];
        var wasmPath;
        var queueTimer;

        function completer(line)
        {
            var completions = [
                "compiler",
                "d",
                "eval",
                "flip",
                "go ",
                "isready",
                "ponderhit",
                "position fen ",
                "position startpos",
                "position startpos moves ",
                "quit",
                "setoption name Clear Hash value true",
                "setoption name Hash value ",
                "setoption name Minimum Thinking Time value ",
                "setoption name Move Overhead value ",
                "setoption name MultiPV value ",
                "setoption name Ponder value ",
                "setoption name Skill Level value ",
                "setoption name Slow Mover value ",
                "setoption name Threads value ",
                "setoption name UCI_Chess960 value false",
                "setoption name UCI_Chess960 value true",
                "setoption name UCI_LimitStrength value true",
                "setoption name UCI_LimitStrength value false",
                "setoption name UCI_Elo value ",
                "setoption name UCI_ShowWDL value true",
                "setoption name UCI_ShowWDL value false",
                "setoption name nodestime value ",
                "stop",
                "uci",
                "ucinewgame"
            ];
            var completionsMid = [
                "binc ",
                "btime ",
                "confidence ",
                "depth ",
                "infinite ",
                "mate ",
                "maxdepth ",
                "maxtime ",
                "mindepth ",
                "mintime ",
                "moves ", /// for position fen ... moves
                "movestogo ",
                "movetime ",
                "ponder ",
                "searchmoves ",
                "shallow ",
                "winc ",
                "wtime "
            ];

            function filter(c)
            {
                return c.toLowerCase().indexOf(line.toLowerCase()) === 0;
            }

            /// This looks for completions starting at the very beginning of the line.
            /// If the user has typed nothing, it will match everything.
            var hits = completions.filter(filter);

            if (!hits.length) {
                /// Just get the last word.
                line = line.replace(/^.*\s/, "");
                if (line) {
                    /// Find completion mid line too.
                    hits = completionsMid.filter(filter);
                } else {
                    /// If no word has been typed, show all options.
                    hits = completionsMid;
                }
            }

            return [hits, line];
        }

        function sendCommand(cmd)
        {
            ///NOTE: The single-threaded engine needs to specifiy async for "go" commands to prevent memory leaks and other errors.
            engine.ccall("command", null, ["string"], [cmd], {async: typeof IS_ASYNCIFY !== "undefined" && /^go\b/.test(cmd)});
            ///NOTE: The engine must be fully initialized before we can close the Pthreads. so we have to check this here, not in onmessage.sendCommand
            if (cmd === "quit") {
                /// Close the Pthreads.
                try {
                    engine.terminate();
                } catch (e) {}
                try {
                    self.close();
                } catch (e) {}
                try {
                    process.exit();
                } catch (e) {}
            }
            return true;
        }

        function processQueue()
        {
            while (queue.length && (!engine._isSearching || !engine._isSearching())) {
                sendCommand(queue.shift());
            }
        }

        function processCommand(cmd)
        {
            cmd = cmd.trim();
            /// Certain commands need to be blocked.
            if (cmd.substring(0, 2) === "go" || cmd.substring(0, 9) === "setoption") {
                queue.push(cmd);
            } else {
                sendCommand(cmd);
            }
            processQueue();
        }

        function processStartUpQueue()
        {
            var i = 0;
            (function loop()
            {
                var cmd;
                while (i < startUpQueue.length) {
                    cmd = startUpQueue[i++];
                    if (cmd.startsWith("sleep ")) {
                        return setTimeout(loop, cmd.slice(6));
                    } else {
                        processCommand(cmd);
                    }
                }
            }());
        }

        function checkIfReady()
        {
            if (engine._isReady && !engine._isReady()) {
                return setTimeout(checkIfReady, 10);
            }

            if (typeof IS_ASYNCIFY === "undefined") {
                engine.onDoneSearching = processQueue;
            } else {
                engine.onDoneSearching = function ()
                {
                    /// The delay is only necessary for the single-threaded engine.
                    setTimeout(processQueue, 1);
                };
            }
            engine.processCommand = processCommand;
            if (startUpQueue.length) {
                processStartUpQueue();
            }
        }

        if (isNode) {
            /// Was it called directly?
            ///NOTE: Node.js v14-19 needs --experimental-wasm-threads --experimental-wasm-simd
            if (require.main === module) {
                (function ()
                {
                    var p = require("path");

                    function assembleWASM(count)
                    {
                        var fs = require("fs");
                        var ext = p.extname(wasmPath);
                        var basename = wasmPath.slice(0, -ext.length);
                        var i;
                        var buffers = [];

                        for (i = 0; i < count; ++i) {
                            buffers.push(fs.readFileSync(basename + "-part-" + i + ".wasm"));
                        }

                        return Buffer.concat(buffers);
                    }
                    wasmPath = p.join(__dirname, p.basename(__filename, p.extname(__filename)) + ".wasm");
                    engine = {
                        locateFile: function (path)
                        {
                            if (path.indexOf(".wasm") > -1) {
                                if (path.indexOf(".wasm.map") > -1) {
                                    /// Set the path to the wasm map.
                                    return wasmPath + ".map"
                                }
                                /// Set the path to the wasm binary.
                                return wasmPath;
                            }
                            /// Set path to worker

                            return __filename;
                        },
                        listener: function onMessage(line)
                        {
                            process.stdout.write(line + "\n");
                        },
                    };

                    if (typeof enginePartsCount === "number") {
                        /// Prepare the wasm data because it is in parts.
                        engine.wasmBinary = assembleWASM(enginePartsCount);
                    }
                }());

                startUpQueue = process.argv.slice(2);

                Stockfish = INIT_ENGINE();
                Stockfish(engine).then(checkIfReady);

                require("readline").createInterface({
                    input: process.stdin,
                    output: process.stdout,
                    completer: completer,
                    historySize: 100,
                }).on("line", function online(cmd)
                {
                    if (cmd) {
                        if (engine.processCommand) {
                            engine.processCommand(cmd);
                        } else {
                            startUpQueue.push(cmd);
                        }
                        if (cmd === "quit") {
                            process.exit();
                        }
                    }
                }).on("close", function onend()
                {
                    process.exit();
                }).setPrompt("");

            /// Is this a node module?
            } else {
                module.exports = INIT_ENGINE;
            }
        } else {
            (function ()
            {
                var wasmBlob;

                function loadBinary(onLoaded)
                {
                    function fetchBinary(path, cb)
                    {
                        fetch(new Request(path)).then(function (response)
                        {
                            return response.blob();
                        }).then(function (wasmData)
                        {
                            cb(wasmData);
                        });
                    }
                    function loadParts(total)
                    {
                        var doneCount = 0;
                        var i;
                        var parts = [];
                        var ext = wasmPath.slice((wasmPath.lastIndexOf(".") - 1 >>> 0) + 1);
                        var basename = wasmPath.slice(0, -ext.length);

                        function createOnDownload(num)
                        {
                            return function onDownload(data)
                            {
                                var wasmBlob;
                                ++doneCount;
                                parts[num] = data;
                                if (doneCount === total) {
                                    wasmBlob = URL.createObjectURL(new Blob(parts, {type: "application/wasm"}));
                                    onLoaded(wasmBlob);
                                }
                            };
                        }
                        for (i = 0; i < total; ++i) {
                            fetchBinary(basename + "-part-" + i + ext, createOnDownload(i));
                        }
                    }
                    if (typeof enginePartsCount === "number") {
                        loadParts(enginePartsCount);
                    } else {
                        onLoaded();
                    }
                }

                var args = self.location.hash.substr(1).split(",");
                wasmPath = decodeURIComponent(args[0] || location.origin + location.pathname.replace(/\.js$/i, ".wasm"));

                loadBinary(function (wasmBlob)
                {
                    engine = {
                        locateFile: function (path)
                        {
                            if (path.indexOf(".wasm") > -1) {
                                if (path.indexOf(".wasm.map") > -1) {
                                    /// Set the path to the wasm map.
                                    return wasmPath + ".map"
                                }
                                /// Set the path to the wasm binary.
                                return wasmBlob || wasmPath;
                            }
                            /// Set path to worker (self + the worker hash)
                            return self.location.origin + self.location.pathname + "#" + wasmPath + ",worker";
                        },
                        listener: function onMessage(line)
                        {
                            postMessage(line);
                        },
                    }
                    Stockfish = INIT_ENGINE();

                    Stockfish(engine).then(checkIfReady).catch(function (e)
                    {
                        /// Sadly, Web Workers will not trigger the error event when errors occur in promises, so we need to create a new context and throw an error there.
                        setTimeout(function throwError()
                        {
                            throw e;
                        }, 1);
                    });
                });

                /// Make sure that this is only added once.
                if (!onmessage) {
                    onmessage = function (event)
                    {
                        if (engine.processCommand) {
                            engine.processCommand(event.data);
                        } else {
                            startUpQueue.push(event.data);
                        }
                        ///NOTE: We check this here, not just in engine.processCommand, because the engine might never finish loading.
                        if (event.data === "quit") {
                            /// Exit the Web Worker.
                            try {
                                self.close();
                            } catch (e) {}
                        }
                    };
                }
            }());
        }
    }());
} else {
    ///NOTE: If it's a normal browser, the client can use the engine without polluting the global scope.
    if (typeof document === "object" && document.currentScript) {
        document.currentScript._exports = INIT_ENGINE();
    } else {
        Stockfish = INIT_ENGINE();
    }
}
}());
