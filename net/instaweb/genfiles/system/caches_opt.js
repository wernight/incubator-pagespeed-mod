(function(){var k,l=l||{},m=this;function aa(a,b){var c=a.split("."),d=m;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]?d=d[e]:d=d[e]={}:d[e]=b}function ba(){}
function n(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function p(a){var b=n(a);return"array"==b||"object"==b&&"number"==typeof a.length}function q(a){return"string"==typeof a}function r(a){return"function"==n(a)}var ca="closure_uid_"+(1E9*Math.random()>>>0),da=0;function ea(a,b,c){return a.call.apply(a.bind,arguments)}
function fa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function t(a,b,c){t=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ea:fa;return t.apply(null,arguments)}var ga=Date.now||function(){return+new Date};
function u(a,b){function c(){}c.prototype=b.prototype;a.S=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.X=function(a,c,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[c].apply(a,g)}};function v(){0!=ha&&(this[ca]||(this[ca]=++da));this.u=this.u;this.T=this.T}var ha=0;v.prototype.u=!1;function w(a){w[" "](a);return a}w[" "]=ba;function ia(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}function ja(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}var ka="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function la(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ka.length;f++)c=ka[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};function y(a){if(Error.captureStackTrace)Error.captureStackTrace(this,y);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}u(y,Error);y.prototype.name="CustomError";function z(a,b,c,d,e){this.reset(a,b,c,d,e)}z.prototype.a=null;var ma=0;z.prototype.reset=function(a,b,c,d,e){"number"==typeof e||ma++;d||ga();this.b=b;delete this.a};function na(){}na.prototype.a=null;function oa(a){var b;(b=a.a)||(b={},pa(a)&&(b[0]=!0,b[1]=!0),b=a.a=b);return b};function qa(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")}var ra=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};function sa(a,b){return a<b?-1:a>b?1:0};var A;a:{var ta=m.navigator;if(ta){var ua=ta.userAgent;if(ua){A=ua;break a}}A=""};function va(a,b){b.unshift(a);y.call(this,qa.apply(null,b));b.shift()}u(va,y);va.prototype.name="AssertionError";function wa(a,b){throw new va("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};var xa;function ya(){}u(ya,na);function za(a){return(a=pa(a))?new ActiveXObject(a):new XMLHttpRequest}function pa(a){if(!a.b&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.b=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.b}xa=new ya;var B=Array.prototype,Aa=B.indexOf?function(a,b,c){return B.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(q(a))return q(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Ba=B.forEach?function(a,b,c){B.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=q(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};
function Ca(a){var b;a:{b=Da;for(var c=a.length,d=q(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:q(a)?a.charAt(b):a[b]};var Ea=-1!=A.indexOf("Opera")||-1!=A.indexOf("OPR"),C=-1!=A.indexOf("Trident")||-1!=A.indexOf("MSIE"),D=-1!=A.indexOf("Gecko")&&-1==A.toLowerCase().indexOf("webkit")&&!(-1!=A.indexOf("Trident")||-1!=A.indexOf("MSIE")),E=-1!=A.toLowerCase().indexOf("webkit");function Fa(){var a=m.document;return a?a.documentMode:void 0}
var Ga=function(){var a="",b;if(Ea&&m.opera)return a=m.opera.version,r(a)?a():a;D?b=/rv\:([^\);]+)(\)|;)/:C?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:E&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(A))?a[1]:"");return C&&(b=Fa(),b>parseFloat(a))?String(b):a}(),Ha={};
function H(a){var b;if(!(b=Ha[a])){b=0;for(var c=ra(String(Ga)).split("."),d=ra(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"",x=RegExp("(\\d*)(\\D*)","g"),xb=RegExp("(\\d*)(\\D*)","g");do{var F=x.exec(g)||["","",""],G=xb.exec(h)||["","",""];if(0==F[0].length&&0==G[0].length)break;b=sa(0==F[1].length?0:parseInt(F[1],10),0==G[1].length?0:parseInt(G[1],10))||sa(0==F[2].length,0==G[2].length)||sa(F[2],G[2])}while(0==b)}b=Ha[a]=0<=b}return b}
var Ia=m.document,Ja=Ia&&C?Fa()||("CSS1Compat"==Ia.compatMode?parseInt(Ga,10):5):void 0;function Ka(a){if("function"==typeof a.p)return a.p();if(q(a))return a.split("");if(p(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return ia(a)}function La(a,b){if("function"==typeof a.forEach)a.forEach(b,void 0);else if(p(a)||q(a))Ba(a,b,void 0);else{var c;if("function"==typeof a.j)c=a.j();else if("function"!=typeof a.p)if(p(a)||q(a)){c=[];for(var d=a.length,e=0;e<d;e++)c.push(e)}else c=ja(a);else c=void 0;for(var d=Ka(a),e=d.length,f=0;f<e;f++)b.call(void 0,d[f],c&&c[f],a)}};var Ma=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;function Na(a){if(Oa){Oa=!1;var b=m.location;if(b){var c=b.href;if(c&&(c=(c=Na(c)[3]||null)?decodeURI(c):c)&&c!=b.hostname)throw Oa=!0,Error();}}return a.match(Ma)}var Oa=E;var I="closure_listenable_"+(1E6*Math.random()|0),Pa=0;function Qa(a,b,c,d,e){this.g=a;this.a=null;this.src=b;this.type=c;this.l=!!d;this.r=e;++Pa;this.h=this.k=!1}function Ra(a){a.h=!0;a.g=null;a.a=null;a.src=null;a.r=null};function Sa(a){this.src=a;this.a={};this.b=0}function Ta(a,b,c,d,e){var f=b.toString();b=a.a[f];b||(b=a.a[f]=[],a.b++);var g=Ua(b,c,d,e);-1<g?(a=b[g],a.k=!1):(a=new Qa(c,a.src,f,!!d,e),a.k=!1,b.push(a));return a}function Va(a,b){var c=b.type;if(c in a.a){var d=a.a[c],e=Aa(d,b),f;(f=0<=e)&&B.splice.call(d,e,1);f&&(Ra(b),0==a.a[c].length&&(delete a.a[c],a.b--))}}function Ua(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.h&&f.g==b&&f.l==!!c&&f.r==d)return e}return-1};function J(a,b){this.type=a;this.a=this.target=b}J.prototype.b=function(){};var Wa;(Wa=!C)||(Wa=C&&9<=Ja);var Xa=Wa,Ya=C&&!H("9");!E||H("528");D&&H("1.9b")||C&&H("8")||Ea&&H("9.5")||E&&H("528");D&&!H("8")||C&&H("9");function K(a,b){J.call(this,a?a.type:"");this.d=this.state=this.a=this.target=null;if(a){this.type=a.type;this.target=a.target||a.srcElement;this.a=b;var c=a.relatedTarget;if(c&&D)try{w(c.nodeName)}catch(d){}this.state=a.state;this.d=a;a.defaultPrevented&&this.b()}}u(K,J);K.prototype.b=function(){K.S.b.call(this);var a=this.d;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Ya)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var Za="closure_lm_"+(1E6*Math.random()|0),$a={},ab=0;function L(a,b,c,d,e){if("array"==n(b))for(var f=0;f<b.length;f++)L(a,b[f],c,d,e);else if(c=bb(c),a&&a[I])Ta(a.i,String(b),c,d,e);else{if(!b)throw Error("Invalid event type");var f=!!d,g=M(a);g||(a[Za]=g=new Sa(a));c=Ta(g,b,c,d,e);c.a||(d=cb(),c.a=d,d.src=a,d.g=c,a.addEventListener?a.addEventListener(b.toString(),d,f):a.attachEvent(db(b.toString()),d),ab++)}}
function cb(){var a=eb,b=Xa?function(c){return a.call(b.src,b.g,c)}:function(c){c=a.call(b.src,b.g,c);if(!c)return c};return b}function fb(a,b,c,d,e){if("array"==n(b))for(var f=0;f<b.length;f++)fb(a,b[f],c,d,e);else(c=bb(c),a&&a[I])?(a=a.i,b=String(b).toString(),b in a.a&&(f=a.a[b],c=Ua(f,c,d,e),-1<c&&(Ra(f[c]),B.splice.call(f,c,1),0==f.length&&(delete a.a[b],a.b--)))):a&&(a=M(a))&&(b=a.a[b.toString()],a=-1,b&&(a=Ua(b,c,!!d,e)),(c=-1<a?b[a]:null)&&gb(c))}
function gb(a){if("number"!=typeof a&&a&&!a.h){var b=a.src;if(b&&b[I])Va(b.i,a);else{var c=a.type,d=a.a;b.removeEventListener?b.removeEventListener(c,d,a.l):b.detachEvent&&b.detachEvent(db(c),d);ab--;(c=M(b))?(Va(c,a),0==c.b&&(c.src=null,b[Za]=null)):Ra(a)}}}function db(a){return a in $a?$a[a]:$a[a]="on"+a}function hb(a,b,c,d){var e=!0;if(a=M(a))if(b=a.a[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.l==c&&!f.h&&(f=ib(f,d),e=e&&!1!==f)}return e}
function ib(a,b){var c=a.g,d=a.r||a.src;a.k&&gb(a);return c.call(d,b)}
function eb(a,b){if(a.h)return!0;if(!Xa){var c;if(!(c=b))a:{c=["window","event"];for(var d=m,e;e=c.shift();)if(null!=d[e])d=d[e];else{c=null;break a}c=d}e=c;c=new K(e,this);d=!0;if(!(0>e.keyCode||void 0!=e.returnValue)){a:{var f=!1;if(0==e.keyCode)try{e.keyCode=-1;break a}catch(g){f=!0}if(f||void 0==e.returnValue)e.returnValue=!0}e=[];for(f=c.a;f;f=f.parentNode)e.push(f);for(var f=a.type,h=e.length-1;0<=h;h--){c.a=e[h];var x=hb(e[h],f,!0,c),d=d&&x}for(h=0;h<e.length;h++)c.a=e[h],x=hb(e[h],f,!1,c),
d=d&&x}return d}return ib(a,new K(b,this))}function M(a){a=a[Za];return a instanceof Sa?a:null}var jb="__closure_events_fn_"+(1E9*Math.random()>>>0);function bb(a){if(r(a))return a;a[jb]||(a[jb]=function(b){return a.handleEvent(b)});return a[jb]};function N(){v.call(this);this.i=new Sa(this);this.M=this}u(N,v);N.prototype[I]=!0;N.prototype.addEventListener=function(a,b,c,d){L(this,a,b,c,d)};N.prototype.removeEventListener=function(a,b,c,d){fb(this,a,b,c,d)};function O(a,b){var c=a.M,d=b,e=d.type||d;if(q(d))d=new J(d,c);else if(d instanceof J)d.target=d.target||c;else{var f=d,d=new J(e,c);la(d,f)}c=d.a=c;kb(c,e,!0,d);kb(c,e,!1,d)}
function kb(a,b,c,d){if(b=a.i.a[String(b)]){b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.h&&g.l==c){var h=g.g,x=g.r||g.src;g.k&&Va(a.i,g);e=!1!==h.call(x,d)&&e}}}};function P(a,b){this.b={};this.a=[];this.f=this.d=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)Q(this,arguments[d],arguments[d+1])}else if(a){a instanceof P?(c=a.j(),d=a.p()):(c=ja(a),d=ia(a));for(var e=0;e<c.length;e++)Q(this,c[e],d[e])}}k=P.prototype;k.p=function(){lb(this);for(var a=[],b=0;b<this.a.length;b++)a.push(this.b[this.a[b]]);return a};k.j=function(){lb(this);return this.a.concat()};
k.clear=function(){this.b={};this.f=this.d=this.a.length=0};function lb(a){if(a.d!=a.a.length){for(var b=0,c=0;b<a.a.length;){var d=a.a[b];Object.prototype.hasOwnProperty.call(a.b,d)&&(a.a[c++]=d);b++}a.a.length=c}if(a.d!=a.a.length){for(var e={},c=b=0;b<a.a.length;)d=a.a[b],Object.prototype.hasOwnProperty.call(e,d)||(a.a[c++]=d,e[d]=1),b++;a.a.length=c}}function Q(a,b,c){Object.prototype.hasOwnProperty.call(a.b,b)||(a.d++,a.a.push(b),a.f++);a.b[b]=c}
k.forEach=function(a,b){for(var c=this.j(),d=0;d<c.length;d++){var e=c[d];a.call(b,Object.prototype.hasOwnProperty.call(this.b,e)?this.b[e]:void 0,e,this)}};k.clone=function(){return new P(this)};function mb(a){this.f=a;this.b=this.d=this.a=null}function R(a,b){this.name=a;this.value=b}R.prototype.toString=function(){return this.name};var nb=new R("SEVERE",1E3),ob=new R("CONFIG",700),pb=new R("FINE",500);function qb(a){if(a.d)return a.d;if(a.a)return qb(a.a);wa("Root logger has no level set.");return null}
mb.prototype.log=function(a,b,c){if(a.value>=qb(this).value)for(r(b)&&(b=b()),a=new z(a,String(b),this.f),c&&(a.a=c),c="log:"+a.b,m.console&&(m.console.timeStamp?m.console.timeStamp(c):m.console.markTimeline&&m.console.markTimeline(c)),m.msWriteProfilerMark&&m.msWriteProfilerMark(c),c=this;c;)c=c.a};var rb={},S=null;
function sb(a){S||(S=new mb(""),rb[""]=S,S.d=ob);var b;if(!(b=rb[a])){b=new mb(a);var c=a.lastIndexOf("."),d=a.substr(c+1),c=sb(a.substr(0,c));c.b||(c.b={});c.b[d]=b;b.a=c;rb[a]=b}return b};function T(a,b){a&&a.log(pb,b,void 0)};function tb(a,b,c){if(r(a))c&&(a=t(a,c));else if(a&&"function"==typeof a.handleEvent)a=t(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<b?-1:m.setTimeout(a,b||0)};function U(a){N.call(this);this.N=new P;this.t=a||null;this.b=!1;this.s=this.c=null;this.a=this.C=this.n="";this.d=this.w=this.m=this.v=!1;this.f=0;this.o=null;this.F=ub;this.q=this.W=!1}u(U,N);var ub="",vb=U.prototype,wb=sb("goog.net.XhrIo");vb.e=wb;var yb=/^https?$/i,zb=["POST","PUT"];
U.prototype.send=function(a,b,c,d){if(this.c)throw Error("[goog.net.XhrIo] Object is active with another request="+this.n+"; newUri="+a);b=b?b.toUpperCase():"GET";this.n=a;this.a="";this.C=b;this.v=!1;this.b=!0;this.c=this.t?za(this.t):za(xa);this.s=this.t?oa(this.t):oa(xa);this.c.onreadystatechange=t(this.D,this);try{T(this.e,V(this,"Opening Xhr")),this.w=!0,this.c.open(b,String(a),!0),this.w=!1}catch(e){T(this.e,V(this,"Error opening Xhr: "+e.message));Ab(this,e);return}a=c||"";var f=this.N.clone();
d&&La(d,function(a,b){Q(f,b,a)});d=Ca(f.j());c=m.FormData&&a instanceof m.FormData;!(0<=Aa(zb,b))||d||c||Q(f,"Content-Type","application/x-www-form-urlencoded;charset=utf-8");f.forEach(function(a,b){this.c.setRequestHeader(b,a)},this);this.F&&(this.c.responseType=this.F);"withCredentials"in this.c&&(this.c.withCredentials=this.W);try{Bb(this),0<this.f&&(this.q=Cb(this.c),T(this.e,V(this,"Will abort after "+this.f+"ms if incomplete, xhr2 "+this.q)),this.q?(this.c.timeout=this.f,this.c.ontimeout=t(this.H,
this)):this.o=tb(this.H,this.f,this)),T(this.e,V(this,"Sending request")),this.m=!0,this.c.send(a),this.m=!1}catch(g){T(this.e,V(this,"Send error: "+g.message)),Ab(this,g)}};function Cb(a){return C&&H(9)&&"number"==typeof a.timeout&&void 0!==a.ontimeout}function Da(a){return"content-type"==a.toLowerCase()}
U.prototype.H=function(){"undefined"!=typeof l&&this.c&&(this.a="Timed out after "+this.f+"ms, aborting",T(this.e,V(this,this.a)),O(this,"timeout"),this.c&&this.b&&(T(this.e,V(this,"Aborting")),this.b=!1,this.d=!0,this.c.abort(),this.d=!1,O(this,"complete"),O(this,"abort"),Db(this)))};function Ab(a,b){a.b=!1;a.c&&(a.d=!0,a.c.abort(),a.d=!1);a.a=b;Eb(a);Db(a)}function Eb(a){a.v||(a.v=!0,O(a,"complete"),O(a,"error"))}U.prototype.D=function(){this.u||(this.w||this.m||this.d?Fb(this):this.V())};
U.prototype.V=function(){Fb(this)};function Fb(a){if(a.b&&"undefined"!=typeof l)if(a.s[1]&&4==W(a)&&2==X(a))T(a.e,V(a,"Local request error detected and ignored"));else if(a.m&&4==W(a))tb(a.D,0,a);else if(O(a,"readystatechange"),4==W(a)){T(a.e,V(a,"Request complete"));a.b=!1;try{if(Gb(a))O(a,"complete"),O(a,"success");else{var b;try{b=2<W(a)?a.c.statusText:""}catch(c){T(a.e,"Can not get status: "+c.message),b=""}a.a=b+" ["+X(a)+"]";Eb(a)}}finally{Db(a)}}}
function Db(a){if(a.c){Bb(a);var b=a.c,c=a.s[0]?ba:null;a.c=null;a.s=null;O(a,"ready");try{b.onreadystatechange=c}catch(d){(a=a.e)&&a.log(nb,"Problem encountered resetting onreadystatechange: "+d.message,void 0)}}}function Bb(a){a.c&&a.q&&(a.c.ontimeout=null);"number"==typeof a.o&&(m.clearTimeout(a.o),a.o=null)}
function Gb(a){var b=X(a),c;a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:c=!0;break a;default:c=!1}if(!c){if(b=0===b)a=Na(String(a.n))[1]||null,!a&&self.location&&(a=self.location.protocol,a=a.substr(0,a.length-1)),b=!yb.test(a?a.toLowerCase():"");c=b}return c}function W(a){return a.c?a.c.readyState:0}function X(a){try{return 2<W(a)?a.c.status:-1}catch(b){return-1}}function V(a,b){return b+" ["+a.C+" "+a.n+" "+X(a)+"]"};function Hb(a){this.a=a||new U;this.b="";this.d=!1;a=document.createElement("table");a.id="nav-bar";a.className="pagespeed-sub-tabs";a.innerHTML='<tr><td><a id="'+Ib+'" href="javascript:void(0);">Show Metadata Cache</a> - </td><td><a id="'+Jb+'" href="javascript:void(0);">Show Cache Structure</a> - </td><td><a id="'+Kb+'" href="javascript:void(0);">Physical Caches</a> - </td><td><a id="'+Lb+'" href="javascript:void(0);">Purge Cache</a></td></tr>';document.body.insertBefore(a,document.getElementById(Y));
a=document.createElement("pre");a.id=Mb;a.className="pagespeed-caches-result";document.getElementById(Y).appendChild(a);a=document.createElement("div");a.id=Nb;a.className="pagespeed-caches-result";var b=document.getElementById(Ob);b.insertBefore(a,b.firstChild)}
aa("pagespeed.Caches.toggleDetail",function(a){var b=document.getElementById(a+"_summary"),c=document.getElementById(a+"_detail");document.getElementById(a+"_toggle").checked?(b.style.display="none",c.style.display="block"):(b.style.display="block",c.style.display="none")});
var Ib="show_metadata_mode",Jb="cache_struct_mode",Kb="physical_cache_mode",Lb="purge_cache_mode",Pb={J:Ib,I:Jb,K:Kb,L:Lb},Y="show_metadata",Ob="purge_cache",Z={J:Y,I:"cache_struct",K:"physical_cache",L:Ob},Mb="metadata_result",Nb="purge_result";k=Hb.prototype;k.G=function(){var a=location.hash.substr(1);if(""==a)this.A(Y);else{var b;a:{for(b in Z)if(Z[b]==a){b=!0;break a}b=!1}b&&this.A(a)}};
k.A=function(a){for(var b in Z){var c=Z[b];document.getElementById(c).className=c==a?"":"pagespeed-hidden-offscreen"}c=document.getElementById(a+"_mode");for(b in Pb){var d=document.getElementById(Pb[b]);d.className=d==c?"pagespeed-underline-link":""}location.href=location.href.split("#")[0]+"#"+a};k.Q=function(){if(!this.a.c){var a=encodeURIComponent(document.getElementById("purge_text").value.trim());this.b="*"==a?"purge_all":"purge_text";this.a.send("?purge="+a)}};
k.P=function(){this.a.c||(this.b="purge_all",this.a.send("?purge=*"))};k.B=function(){this.a.c||(this.b="purge_table",this.a.send("?new_set="))};k.O=function(a){this.a.c||(a.preventDefault(),a="?url="+encodeURIComponent(document.getElementById("metadata_text").value.trim())+"&user_agent="+encodeURIComponent(document.getElementById("user_agent").value.trim())+"&json=1",this.b=Mb,this.a.send(a))};k.U=function(){this.d=!this.d;this.B()};
k.R=function(){if(Gb(this.a)){var a;var b=this.a;try{a=b.c?b.c.responseText:""}catch(c){T(b.e,"Can not get responseText: "+c.message),a=""}if(this.b==Mb)a=JSON.parse(a.substring(4)).value,document.getElementById(this.b).textContent=a;else if("purge_table"==this.b){if(a=a.split("\n"),b=a.shift(),document.getElementById("purge_global").textContent="Everything before this time stamp is invalid: "+b.split("@")[1],b=document.getElementById("purge_table"),b.innerHTML="",0<a.length){b.appendChild(document.createElement("hr"));
var d=document.createElement("table");this.d&&a.reverse();for(var e=0;e<a.length;++e){var f=a[e].lastIndexOf("@"),g=a[e].substring(0,f),h=a[e].substring(f+1),f=d.insertRow(-1);f.insertCell(0).textContent=h;h=document.createElement("code");h.className="pagespeed-caches-purge-url";h.textContent=g;f.insertCell(1).appendChild(h)}e=d.createTHead().insertRow(0);g=e.insertCell(0);g.className="pagespeed-caches-date-column";1==a.length?g.textContent="Invalidation Time":(a=document.createElement("input"),a.setAttribute("type",
"checkbox"),a.id="sort",a.checked=this.d?!0:!1,a.title="Change sort order.",g.textContent=this.d?"Invalidation Time (Descending)":"Invalidation Time (Ascending)",g.appendChild(a),L(a,"change",t(this.U,this)));g=e.insertCell(1);g.textContent="URL";g.className="pagespeed-stats-url-column";b.appendChild(d)}}else window.setTimeout(t(this.B,this),0),b=document.getElementById(Nb),"Purge successful"==a&&"purge_text"==this.b?b.textContent="Added to Purge Set":-1!=a.indexOf("Purging not enabled")?b.innerHTML=
a:b.textContent=a}else a=this.a,console.log(q(a.a)?a.a:String(a.a))};
aa("pagespeed.Caches.Start",function(){L(window,"load",function(){var a=new Hb,b=document.createElement("table");b.innerHTML='URL: <input id="purge_text" type="text" name="purge" size="110"/><br><input id="purge_submit" type="button" value="Purge Individual URL"/><input id="purge_all" type="button" value="Purge Entire Cache"/>';var c=document.getElementById(Ob);c.insertBefore(b,c.firstChild);a.G();for(var d in Z)L(document.getElementById(Pb[d]),"click",t(a.A,a,Z[d]));L(window,"hashchange",t(a.G,a));
L(document.getElementById("purge_submit"),"click",t(a.Q,a));L(document.getElementById("purge_all"),"click",t(a.P,a));L(document.getElementById("metadata_submit"),"click",t(a.O,a));L(a.a,"complete",t(a.R,a));L(document.getElementById("metadata_clear"),"click",t(location.reload,location));a.B()})});})();