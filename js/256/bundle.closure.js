(function(){function v(a,c){return a.ga?b(c).ka():c}function m(a){return"\\"+X[a]}function k(a){function c(c){return a[c]}var d="(?:"+b.a(a).join("|")+")",e=RegExp(d),f=RegExp(d,"g");return function(a){a=null==a?"":""+a;return e.test(a)?a.replace(f,c):a}}function n(a,c,b){return c in b}function p(a,c){return function(b){var e=arguments.length;if(2>e||null==b)return b;for(var f=1;f<e;f++)for(var g=arguments[f],h=a(g),l=h.length,F=0;F<l;F++){var k=h[F];c&&void 0!==b[k]||(b[k]=g[k])}return b}}function K(a,
c){var d=L.length,e=a.constructor,e=b.b(e)&&e.prototype||G,f="constructor";for(b.i(a,f)&&!b.g(c,f)&&c.push(f);d--;)f=L[d],f in a&&a[f]!==e[f]&&!b.g(c,f)&&c.push(f)}function M(a,c,d,e,f){if(!(e instanceof c))return a.apply(d,f);c=N(a.prototype);a=a.apply(c,f);return b.l(a)?a:c}function O(a,c,d){return function(e,f,g){var h=0,l=u(e);if("number"==typeof g)0<a?h=0<=g?g:Math.max(g+l,h):l=0<=g?Math.min(g+1,l):g+l+1;else if(d&&g&&l)return g=d(e,f),e[g]===f?g:-1;if(f!==f)return g=c(z.call(e,h,l),b.Y),0<=
g?g+h:-1;for(g=0<a?h:l-1;0<=g&&g<l;g+=a)if(e[g]===f)return g;return-1}}function P(a){return function(c,b,e){b=q(b,e);e=u(c);for(var f=0<a?0:e-1;0<=f&&f<e;f+=a)if(b(c[f],f,c))return f;return-1}}function w(a,c,d,e){e=e||[];for(var f=e.length,g=0,h=u(a);g<h;g++){var l=a[g];if(r(l)&&(b.o(l)||b.u(l)))if(c)for(var k=0,m=l.length;k<m;)e[f++]=l[k++];else w(l,c,d,e),f=e.length;else d||(e[f++]=l)}return e}function A(a,c){return function(d,e,f){var g=c?[[],[]]:{};e=q(e,f);b.f(d,function(c,b){var f=e(c,b,d);
a(g,c,f)});return g}}function Q(a){return function(c,d,e,f){var g=y(d,f,4),h=e,l=3<=arguments.length,k=!r(c)&&b.a(c),m=(k||c).length,n=0<a?0:m-1;l||(h=c[k?k[n]:n],n+=a);for(;0<=n&&n<m;n+=a)l=k?k[n]:n,h=g(h,c[l],l,c);return h}}function r(a){a=u(a);return"number"==typeof a&&0<=a&&a<=Y}function R(a){return function(c){return null==c?void 0:c[a]}}function N(a){if(!b.l(a))return{};if(S)return S(a);H.prototype=a;a=new H;H.prototype=null;return a}function t(a,c){c=null==c?a.length-1:+c;return function(){var b=
Math.max(arguments.length-c,0),e=Array(b),f;for(f=0;f<b;f++)e[f]=arguments[f+c];switch(c){case 0:return a.call(this,e);case 1:return a.call(this,arguments[0],e);case 2:return a.call(this,arguments[0],arguments[1],e)}b=Array(c+1);for(f=0;f<c;f++)b[f]=arguments[f];b[c]=e;return a.apply(this,b)}}function q(a,c,d){return null==a?b.B:b.b(a)?y(a,c,d):b.l(a)?b.C(a):b.H(a)}function y(a,c,b){if(void 0===c)return a;switch(null==b?3:b){case 1:return function(b){return a.call(c,b)};case 2:return function(b,d){return a.call(c,
b,d)};case 3:return function(b,d,g){return a.call(c,b,d,g)};case 4:return function(b,d,g,h){return a.call(c,b,d,g,h)}}return function(){return a.apply(c,arguments)}}function b(a){if(a instanceof b)return a;if(!(this instanceof b))return new b(a);this.h=a}function H(){}var I="object"===typeof self&&self.self===self&&self||"object"===typeof global&&global.global===global&&global,Z=I.v,B=Array.prototype,G=Object.prototype,aa=B.push,z=B.slice,x=G.toString,ba=G.hasOwnProperty,C=Array.isArray,T=Object.keys,
S=Object.create;"undefined"!==typeof exports?("undefined"!==typeof module&&module.ma&&(exports=module.ma=b),exports.v=b):I.v=b;b.Ab="1.8.3";b.Za=function(a,c){return q(a,c,Infinity)};var Y=Math.pow(2,53)-1,u=R("length");b.f=b.Rb=function(a,c,d){c=y(c,d);var e;if(r(a))for(d=0,e=a.length;d<e;d++)c(a[d],d,a);else{var f=b.a(a);d=0;for(e=f.length;d<e;d++)c(a[f[d]],f[d],a)}return a};b.map=b.gb=function(a,c,d){c=q(c,d);d=!r(a)&&b.a(a);for(var e=(d||a).length,f=Array(e),g=0;g<e;g++){var h=d?d[g]:g;f[g]=c(a[h],
h,a)}console.log(f);return f};b.Da=b.wb=b.Qa=Q(1);b.Ea=b.yb=Q(-1);b.W=b.qb=function(a,c,d){c=r(a)?b.D(a,c,d):b.S(a,c,d);if(void 0!==c&&-1!==c)return a[c]};b.filter=b.Ha=function(a,c,d){var e=[];c=q(c,d);b.f(a,function(a,b,d){c(a,b,d)&&e.push(a)});return e};b.Fa=function(a,c,d){return b.filter(a,b.F(q(c)),d)};b.Nb=b.Cb=function(a,c,d){c=q(c,d);d=!r(a)&&b.a(a);for(var e=(d||a).length,f=0;f<e;f++){var g=d?d[f]:f;if(!c(a[g],g,a))return!1}return!0};b.Ja=b.bb=function(a,c,d){c=q(c,d);d=!r(a)&&b.a(a);for(var e=
(d||a).length,f=0;f<e;f++){var g=d?d[f]:f;if(c(a[g],g,a))return!0}return!1};b.g=b.Oa=b.Na=function(a,c,d,e){r(a)||(a=b.j(a));if("number"!=typeof d||e)d=0;return 0<=b.X(a,c,d)};b.Sa=t(function(a,c,d){var e=b.b(c);return b.map(a,function(a){var b=e?c:a[c];return null==b?b:b.apply(a,d)})});b.G=function(a,c){return b.map(a,b.H(c))};b.va=function(a,c){return b.filter(a,b.C(c))};b.ub=function(a,c){return b.W(a,b.C(c))};b.max=function(a,c,d){var e=-Infinity,f=-Infinity,g;if(null==c&&null!=a){a=r(a)?a:b.j(a);
for(var h=0,l=a.length;h<l;h++)d=a[h],d>e&&(e=d)}else c=q(c,d),b.f(a,function(a,b,d){g=c(a,b,d);if(g>f||-Infinity===g&&-Infinity===e)e=a,f=g});return e};b.min=function(a,c,d){var e=Infinity,f=Infinity,g;if(null==c&&null!=a){a=r(a)?a:b.j(a);for(var h=0,l=a.length;h<l;h++)d=a[h],d<e&&(e=d)}else c=q(c,d),b.f(a,function(a,b,d){g=c(a,b,d);if(g<f||Infinity===g&&Infinity===e)e=a,f=g});return e};b.zb=function(a){return b.L(a)};b.L=function(a){var c=Infinity;if(null==c)return r(a)||(a=b.j(a)),a[b.random(a.length-
1)];a=r(a)?b.U(a):b.j(a);for(var d=u(a),c=Math.max(Math.min(c,d),0),d=d-1,e=0;e<c;e++){var f=b.random(e,d),g=a[e];a[e]=a[f];a[f]=g}return a.slice(0,c)};b.Bb=function(a,c,d){c=q(c,d);return b.G(b.map(a,function(a,b,d){return{value:a,index:b,I:c(a,b,d)}}).sort(function(a,c){var b=a.I,d=c.I;if(b!==d){if(b>d||void 0===b)return 1;if(b<d||void 0===d)return-1}return a.index-c.index}),"value")};b.Ma=A(function(a,c,d){b.i(a,d)?a[d].push(c):a[d]=[c]});b.Pa=A(function(a,c,b){a[b]=c});b.mb=A(function(a,c,d){b.i(a,
d)?a[d]++:a[d]=1});b.Qb=function(a){return a?b.o(a)?z.call(a):r(a)?b.map(a,b.B):b.j(a):[]};b.Ia=function(a){return null==a?0:r(a)?a.length:b.a(a).length};b.rb=A(function(a,c,b){a[b?0:1].push(c)},!0);b.Pb=b.sa=b.Fb=function(a,c,d){return null==a?void 0:null==c||d?a[0]:b.$(a,a.length-c)};b.$=function(a,c){return z.call(a,0,Math.max(0,a.length-(null==c?1:c)))};b.ab=function(a,c,d){return null==a?void 0:null==c||d?a[a.length-1]:b.fa(a,Math.max(0,a.length-c))};b.fa=b.Db=b.sb=function(a,c,b){return z.call(a,
null==c||b?1:c)};b.Hb=function(a){return b.filter(a,b.B)};b.na=function(a){return w(a,void 0,!1)};b.xa=t(function(a,c){return b.R(a,c)});b.ja=b.La=function(a,c,d,e){b.ba(c)||(e=d,d=c,c=!1);null!=d&&(d=q(d,e));e=[];for(var f=[],g=0,h=u(a);g<h;g++){var l=a[g],k=d?d(l,g,a):l;c?(g&&f===k||e.push(l),f=k):d?b.g(f,k)||(f.push(k),e.push(l)):b.g(e,l)||e.push(l)}return e};b.Sb=t(function(a){return b.ja(w(a,!0,!0))});b.Ra=function(a){for(var c=[],d=arguments.length,e=0,f=u(a);e<f;e++){var g=a[e];if(!b.g(c,g)){var h;
for(h=1;h<d&&b.g(arguments[h],g);h++);h===d&&c.push(g)}}return c};b.R=t(function(a,c){c=w(c,!0,!0);return b.filter(a,function(a){return!b.g(c,a)})});b.la=function(a){for(var c=a&&b.max(a,u).length||0,d=Array(c),e=0;e<c;e++)d[e]=b.G(a,e);return d};b.qa=t(b.la);b.Ca=function(a,b){for(var d={},e=0,f=u(a);e<f;e++)b?d[a[e]]=b[e]:d[a[e][0]]=a[e][1];return d};b.D=P(1);b.T=P(-1);b.ha=function(a,b,d,e){d=q(d,e,1);b=d(b);e=0;for(var f=u(a);e<f;){var g=Math.floor((e+f)/2);d(a[g])<b?e=g+1:f=g}return e};b.X=O(1,
b.D,b.ha);b.ya=O(-1,b.T);b.vb=function(a,b,d){null==b&&(b=a||0,a=0);d=d||1;b=Math.max(Math.ceil((b-a)/d),0);for(var e=Array(b),f=0;f<b;f++,a+=d)e[f]=a;return e};b.bind=t(function(a,c,d){if(!b.b(a))throw new TypeError("Bind must be called on a function");var e=t(function(b){return M(a,e,c,this,d.concat(b))});return e});b.m=t(function(a,c){function d(){for(var b=0,g=c.length,h=Array(g),l=0;l<g;l++)h[l]=c[l]===e?arguments[b++]:c[l];for(;b<arguments.length;)h.push(arguments[b++]);return M(a,d,this,this,
h)}var e=b.m.placeholder;return d});b.m.placeholder=b;b.eb=t(function(a,c){c=w(c,!1,!1);var d=c.length;if(1>d)throw Error("bindAll must be passed function names");for(;d--;){var e=c[d];a[e]=b.bind(a[e],a)}});b.fb=function(a,c){function d(e){var f=d.N,g=""+(c?c.apply(this,arguments):e);b.i(f,g)||(f[g]=a.apply(this,arguments));return f[g]}d.N={};return d};b.P=t(function(a,b,d){return setTimeout(function(){return a.apply(null,d)},b)});b.Lb=b.m(b.P,b,1);b.Mb=function(a,c,d){function e(){k=!1===d.pa?0:
b.s();l=null;h=a.apply(f,g);l||(f=g=null)}var f,g,h,l=null,k=0;d||(d={});return function(){var n=b.s();k||!1!==d.pa||(k=n);var m=c-(n-k);f=this;g=arguments;0>=m||m>c?(l&&(clearTimeout(l),l=null),k=n,h=a.apply(f,g),l||(f=g=null)):l||!1===d.Gb||(l=setTimeout(e,m));return h}};b.ob=function(a,c,d){function e(){var m=b.s()-k;m<c&&0<=m?f=setTimeout(e,c-m):(f=null,d||(n=a.apply(h,g),f||(h=g=null)))}var f,g,h,k,n;return function(){h=this;g=arguments;k=b.s();var m=d&&!f;f||(f=setTimeout(e,c));m&&(n=a.apply(h,
g),h=g=null);return n}};b.za=function(a,c){return b.m(c,a)};b.F=function(a){return function(){return!a.apply(this,arguments)}};b.ib=function(){var a=arguments,b=a.length-1;return function(){for(var d=b,e=a[b].apply(this,arguments);d--;)e=a[d].call(this,e);return e}};b.$a=function(a,b){return function(){if(1>--a)return b.apply(this,arguments)}};b.M=function(a,b){var d;return function(){0<--a&&(d=b.apply(this,arguments));1>=a&&(b=null);return d}};b.nb=b.m(b.M,2);b.xb=t;var U=!{toString:null}.propertyIsEnumerable("toString"),
L="valueOf isPrototypeOf toString propertyIsEnumerable hasOwnProperty toLocaleString".split(" ");b.a=function(a){if(!b.l(a))return[];if(T)return T(a);var c=[],d;for(d in a)b.i(a,d)&&c.push(d);U&&K(a,c);return c};b.w=function(a){if(!b.l(a))return[];var c=[],d;for(d in a)c.push(d);U&&K(a,c);return c};b.j=function(a){for(var c=b.a(a),d=c.length,e=Array(d),f=0;f<d;f++)e[f]=a[c[f]];return e};b.cb=function(a,c,d){c=q(c,d);d=b.a(a);for(var e=d.length,f={},g=0;g<e;g++){var h=d[g];f[h]=c(a[h],h,a)}return f};
b.pb=function(a){for(var c=b.a(a),d=c.length,e=Array(d),f=0;f<d;f++)e[f]=[c[f],a[c[f]]];return e};b.aa=function(a){for(var c={},d=b.a(a),e=0,f=d.length;e<f;e++)c[a[d[e]]]=d[e];return c};b.Z=b.Ba=function(a){var c=[],d;for(d in a)b.b(a[d])&&c.push(d);return c.sort()};b.V=p(b.w);b.K=b.Eb=p(b.a);b.S=function(a,c,d){c=q(c,d);d=b.a(a);for(var e,f=0,g=d.length;f<g;f++)if(e=d[f],c(a[e],e,a))return e};b.ea=t(function(a,c){var d={},e=c[0];if(null==a)return d;b.b(e)?(1<c.length&&(e=y(e,c[1])),c=b.w(a)):(e=
n,c=w(c,!1,!1),a=Object(a));for(var f=0,g=c.length;f<g;f++){var h=c[f],k=a[h];e(k,h,a)&&(d[h]=k)}return d});b.lb=t(function(a,c){var d=c[0],e;b.b(d)?(d=b.F(d),1<c.length&&(e=c[1])):(c=b.map(w(c,!1,!1),String),d=function(a,d){return!b.g(c,d)});return b.ea(a,d,e)});b.O=p(b.w,!0);b.Jb=function(a,c){var d=N(a);c&&b.K(d,c);return d};b.U=function(a){return b.l(a)?b.o(a)?a.slice():b.V({},a):a};b.Ib=function(a,b){b(a);return a};b.ca=function(a,c){var d=b.a(c),e=d.length;if(null==a)return!e;for(var f=Object(a),
g=0;g<e;g++){var h=d[g];if(c[h]!==f[h]||!(h in f))return!1}return!0};var D,V;D=function(a,b,d,e){if(a===b)return 0!==a||1/a===1/b;if(null==a||null==b)return a===b;if(a!==a)return b!==b;var f=typeof a;return"function"!==f&&"object"!==f&&"object"!==typeof b?!1:V(a,b,d,e)};V=function(a,c,d,e){a instanceof b&&(a=a.h);c instanceof b&&(c=c.h);var f=x.call(a);if(f!==x.call(c))return!1;switch(f){case "[object RegExp]":case "[object String]":return""+a===""+c;case "[object Number]":return+a!==+a?+c!==+c:0===
+a?1/+a===1/c:+a===+c;case "[object Date]":case "[object Boolean]":return+a===+c}f="[object Array]"===f;if(!f){if("object"!=typeof a||"object"!=typeof c)return!1;var g=a.constructor,h=c.constructor;if(g!==h&&!(b.b(g)&&g instanceof g&&b.b(h)&&h instanceof h)&&"constructor"in a&&"constructor"in c)return!1}d=d||[];e=e||[];for(g=d.length;g--;)if(d[g]===a)return e[g]===c;d.push(a);e.push(c);if(f){g=a.length;if(g!==c.length)return!1;for(;g--;)if(!D(a[g],c[g],d,e))return!1}else{f=b.a(a);g=f.length;if(b.a(c).length!==
g)return!1;for(;g--;)if(h=f[g],!b.i(c,h)||!D(a[h],c[h],d,e))return!1}d.pop();e.pop();return!0};b.ua=function(a,b){return D(a,b)};b.Ua=function(a){return null==a?!0:r(a)&&(b.o(a)||b.Wa(a)||b.u(a))?0===a.length:0===b.a(a).length};b.Ta=function(a){return!(!a||1!==a.nodeType)};b.o=C||function(a){return"[object Array]"===x.call(a)};b.l=function(a){var b=typeof a;return"function"===b||"object"===b&&!!a};b.f("Arguments Function String Number Date RegExp Error".split(" "),function(a){b["is"+a]=function(b){return x.call(b)===
"[object "+a+"]"}});b.u=function(a){return x.call(a)==="[object "+name+"]"};b.u(arguments)||(b.u=function(a){return b.i(a,"callee")});"function"!=typeof/./&&"object"!=typeof Int8Array&&(b.b=function(a){return"function"==typeof a||!1});b.wa=function(a){return isFinite(a)&&!isNaN(parseFloat(a))};b.Y=function(a){return b.ra(a)&&a!==+a};b.ba=function(a){return!0===a||!1===a||"[object Boolean]"===x.call(a)};b.Va=function(a){return null===a};b.Ya=function(a){return void 0===a};b.i=function(a,b){return null!=
a&&ba.call(a,b)};b.hb=function(){I.v=Z;return this};b.B=function(a){return a};b.kb=function(a){return function(){return a}};b.jb=function(){};b.H=R;b.tb=function(a){return null==a?function(){}:function(b){return a[b]}};b.C=b.Aa=function(a){a=b.K({},a);return function(c){return b.ca(c,a)}};b.Ob=function(a,b,d){var e=Array(Math.max(0,a));b=y(b,d,1);for(d=0;d<a;d++)e[d]=b(d);return e};b.random=function(a,b){null==b&&(b=a,a=0);return a+Math.floor(Math.random()*(b-a+1))};b.s=Date.now||function(){return(new Date).getTime()};
var C={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},ca=b.aa(C);b.escape=k(C);b.Ka=k(ca);b.Ga=function(a,c,d){c=null==a?void 0:a[c];void 0===c&&(c=d);return b.b(c)?c.call(a):c};var da=0;b.ta=function(a){var b=++da+"";return a?a+b:b};b.ia={evaluate:/<%([\s\S]+?)%>/g,oa:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var J=/(.)^/,X={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},ea=/\\|'|\r|\n|\u2028|\u2029/g;b.Kb=function(a,c,d){function e(a){return h.call(this,
a,b)}!c&&d&&(c=d);c=b.O({},c,b.ia);var f=0,g="__p+='";a.replace(RegExp([(c.escape||J).source,(c.oa||J).source,(c.evaluate||J).source].join("|")+"|$","g"),function(b,c,d,e,h){g+=a.slice(f,h).replace(ea,m);f=h+b.length;c?g+="'+\n((__t=("+c+"))==null?'':_.escape(__t))+\n'":d?g+="'+\n((__t=("+d+"))==null?'':__t)+\n'":e&&(g+="';\n"+e+"\n__p+='");return b});g+="';\n";c.J||(g="with(obj||{}){\n"+g+"}\n");var g="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+g+"return __p;\n",
h;try{h=new Function(c.J||"obj","_",g)}catch(k){throw k.source=g,k;}e.source="function("+(c.J||"obj")+"){\n"+g+"}";return e};b.ka=function(){var a=b(void 0);a.ga=!0;return a};b.da=function(a){b.f(b.Z(a),function(c){var d=b[c]=a[c];b.prototype[c]=function(){var a=[this.h];aa.apply(a,arguments);return v(this,d.apply(b,a))}})};b.da(b);b.f("pop push reverse shift sort splice unshift".split(" "),function(a){var c=B[a];b.prototype[a]=function(){var b=this.h;c.apply(b,arguments);"shift"!==a&&"splice"!==
a||0!==b.length||delete b[0];return v(this,b)}});b.f(["concat","join","slice"],function(a){var c=B[a];b.prototype[a]=function(){return v(this,c.apply(this.h,arguments))}});b.prototype.value=function(){return this.h};b.prototype.valueOf=b.prototype.toJSON=b.prototype.value;b.prototype.toString=function(){return""+this.h};"function"===typeof define&&define.Xa&&define("underscore",[],function(){return b});window._=b})();var E=function(){function v(m){void 0===m&&(m="0000202000000000");this.c=_.map(m.split(""),function(k){return parseInt(k)})}v.prototype.toString=function(){for(var m="",k=0;k<this.c.length;k+=4)m+=this.c.slice(k,k+4).toString().split(",").join(""),m+="\n";return m};v.prototype.move=function(m){var k;if("up"===m||"down"===m){console.log("move(): up and down");k=[[],[],[],[]];for(var n=0;n<this.c.length;n++)k[n%4].push(this.c[n]),console.log("move(): up and down forloop");console.log(k)}else if("right"===
m||"left"===m){console.log("move(): right and left");n=this.c;n=_.map(n,function(k){return k});for(k=[];n.length;)k.push(n.splice(0,4));console.log(k)}for(n=0;n<k.length;n++)for(var p=0;p<k[n].length-1;p++)if(k[n][p]===k[n][p+1]||0===k[n][p+1])k[n][p+1]+=k[n][p],k[n][p]=0;if("up"===m||"down"===m)k=_.qa.apply(_,k),"up"===m&&(k=_.map(k,function(k){return k.reverse()}));k=_.na(k);"up"!==m&&"left"!==m||k.reverse();this.c=k;this.A()};v.prototype.A=function(){var m=[],k;_.filter(this.c,function(k,p){0===
k&&m.push(p)});1>m.length||(k=m[_.random(m.length-1)],this.c[k]=2)};return v}(),W=new E;console.log(W.toString());window.game=W;window.game.move=E.prototype.move;window.game.A=E.prototype.A;window.game.toString=E.prototype.toString;