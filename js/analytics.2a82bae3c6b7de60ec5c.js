!function(t){var n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,function(n){return t[n]}.bind(null,o));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="",r(r.s=153)}([function(t,n,r){var e=r(1),o=r(16),i=r(34),u=r(58),c=e.Symbol,a=o("wks");t.exports=function(t){return a[t]||(a[t]=u&&c[t]||(u?c:i)("Symbol."+t))}},function(t,n,r){(function(n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n&&n)||Function("return this")()}).call(this,r(89))},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,r){var e=r(4);t.exports=function(t){if(!e(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)}},function(t,n,r){var e=r(8),o=r(7),i=r(19);t.exports=e?function(t,n,r){return o.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},function(t,n,r){var e=r(8),o=r(50),i=r(3),u=r(23),c=Object.defineProperty;n.f=e?c:function(t,n,r){if(i(t),n=u(n,!0),i(r),o)try{return c(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},function(t,n,r){var e=r(2);t.exports=!e((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,n,r){var e=r(1),o=r(26).f,i=r(6),u=r(10),c=r(33),a=r(52),f=r(57);t.exports=function(t,n){var r,s,l,p,v,y=t.target,g=t.global,d=t.stat;if(r=g?e:d?e[y]||c(y,{}):(e[y]||{}).prototype)for(s in n){if(p=n[s],l=t.noTargetGet?(v=o(r,s))&&v.value:r[s],!f(g?s:y+(d?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;a(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),u(r,s,p,t)}}},function(t,n,r){var e=r(1),o=r(16),i=r(6),u=r(5),c=r(33),a=r(51),f=r(22),s=f.get,l=f.enforce,p=String(a).split("toString");o("inspectSource",(function(t){return a.call(t)})),(t.exports=function(t,n,r,o){var a=!!o&&!!o.unsafe,f=!!o&&!!o.enumerable,s=!!o&&!!o.noTargetGet;"function"==typeof r&&("string"!=typeof n||u(r,"name")||i(r,"name",n),l(r).source=p.join("string"==typeof n?n:"")),t!==e?(a?!s&&t[n]&&(f=!0):delete t[n],f?t[n]=r:i(t,n,r)):f?t[n]=r:c(n,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&s(this).source||a.call(this)}))},function(t,n,r){var e=r(38),o=r(18);t.exports=function(t){return e(o(t))}},function(t,n,r){var e=r(27),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},function(t,n,r){"use strict";r.d(n,"g",(function(){return e})),r.d(n,"c",(function(){return o})),r.d(n,"d",(function(){return i})),r.d(n,"b",(function(){return u})),r.d(n,"a",(function(){return c})),r.d(n,"f",(function(){return a})),r.d(n,"e",(function(){return f}));var e={nesessaryField:"Введите ключевое слово",validationLength:"Должно быть от 2 до 30 символов",text:"Должно содержать текст"},o=["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"],i=6048e5,u=["вс","пн","вт","ср","чт","пт","сб"],c="1ba3c67f762c470a985974c9866763fa",a="token 20e8681bb1fdda2d035897183307e867a598ca63",f={text:/(?=^[\w\sа-яёА-ЯЁ-]{2,30}$)(?=.*[a-zA-Zа-яёА-ЯЁ])/,dateDigits:/((\d{4})-(\d{2})-(\d{2}))/,dateString:/(\d{4})-([а-я]{3,8})-(\d{2})/}},function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,n,r){var e=r(53),o=r(1),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(e[t])||i(o[t]):e[t]&&e[t][n]||o[t]&&o[t][n]}},function(t,n,r){var e=r(20),o=r(90);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.4.1",mode:e?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,n,r){var e=r(18);t.exports=function(t){return Object(e(t))}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n){t.exports=!1},function(t,n){t.exports={}},function(t,n,r){var e,o,i,u=r(91),c=r(1),a=r(4),f=r(6),s=r(5),l=r(24),p=r(25),v=c.WeakMap;if(u){var y=new v,g=y.get,d=y.has,h=y.set;e=function(t,n){return h.call(y,t,n),n},o=function(t){return g.call(y,t)||{}},i=function(t){return d.call(y,t)}}else{var m=l("state");p[m]=!0,e=function(t,n){return f(t,m,n),n},o=function(t){return s(t,m)?t[m]:{}},i=function(t){return s(t,m)}}t.exports={set:e,get:o,has:i,enforce:function(t){return i(t)?o(t):e(t,{})},getterFor:function(t){return function(n){var r;if(!a(n)||(r=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}}},function(t,n,r){var e=r(4);t.exports=function(t,n){if(!e(t))return t;var r,o;if(n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!e(o=r.call(t)))return o;if(!n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,r){var e=r(16),o=r(34),i=e("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,n){t.exports={}},function(t,n,r){var e=r(8),o=r(49),i=r(19),u=r(11),c=r(23),a=r(5),f=r(50),s=Object.getOwnPropertyDescriptor;n.f=e?s:function(t,n){if(t=u(t),n=c(n,!0),f)try{return s(t,n)}catch(t){}if(a(t,n))return i(!o.f.call(t,n),t[n])}},function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},function(t,n,r){var e=r(14);t.exports=Array.isArray||function(t){return"Array"==e(t)}},function(t,n,r){var e=r(7).f,o=r(5),i=r(0)("toStringTag");t.exports=function(t,n,r){t&&!o(t=r?t:t.prototype,i)&&e(t,i,{configurable:!0,value:n})}},function(t,n,r){"use strict";var e,o,i=r(45),u=RegExp.prototype.exec,c=String.prototype.replace,a=u,f=(e=/a/,o=/b*/g,u.call(e,"a"),u.call(o,"a"),0!==e.lastIndex||0!==o.lastIndex),s=void 0!==/()??/.exec("")[1];(f||s)&&(a=function(t){var n,r,e,o,a=this;return s&&(r=new RegExp("^"+a.source+"$(?!\\s)",i.call(a))),f&&(n=a.lastIndex),e=u.call(a,t),f&&e&&(a.lastIndex=a.global?e.index+e[0].length:n),s&&e&&e.length>1&&c.call(e[0],r,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(e[o]=void 0)})),e}),t.exports=a},function(t,n,r){var e=r(54),o=r(35).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return e(t,o)}},function(t,n,r){var e=r(37);t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 0:return function(){return t.call(n)};case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,o){return t.call(n,r,e,o)}}return function(){return t.apply(n,arguments)}}},function(t,n,r){var e=r(1),o=r(6);t.exports=function(t,n){try{o(e,t,n)}catch(r){e[t]=n}return n}},function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++r+e).toString(36)}},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n,r){var e=r(3),o=r(94),i=r(35),u=r(25),c=r(69),a=r(39),f=r(24)("IE_PROTO"),s=function(){},l=function(){var t,n=a("iframe"),r=i.length;for(n.style.display="none",c.appendChild(n),n.src=String("javascript:"),(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),l=t.F;r--;)delete l.prototype[i[r]];return l()};t.exports=Object.create||function(t,n){var r;return null!==t?(s.prototype=e(t),r=new s,s.prototype=null,r[f]=t):r=l(),void 0===n?r:o(r,n)},u[f]=!0},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,n,r){var e=r(2),o=r(14),i="".split;t.exports=e((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,n,r){var e=r(1),o=r(4),i=e.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},function(t,n,r){"use strict";var e=r(23),o=r(7),i=r(19);t.exports=function(t,n,r){var u=e(n);u in t?o.f(t,u,i(0,r)):t[u]=r}},function(t,n,r){var e=r(54),o=r(35);t.exports=Object.keys||function(t){return e(t,o)}},function(t,n,r){var e,o,i=r(1),u=r(73),c=i.process,a=c&&c.versions,f=a&&a.v8;f?o=(e=f.split("."))[0]+e[1]:u&&(!(e=u.match(/Edge\/(\d+)/))||e[1]>=74)&&(e=u.match(/Chrome\/(\d+)/))&&(o=e[1]),t.exports=o&&+o},function(t,n,r){"use strict";var e=r(11),o=r(98),i=r(21),u=r(22),c=r(63),a=u.set,f=u.getterFor("Array Iterator");t.exports=c(Array,"Array",(function(t,n){a(this,{type:"Array Iterator",target:e(t),index:0,kind:n})}),(function(){var t=f(this),n=t.target,r=t.kind,e=t.index++;return!n||e>=n.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==r?{value:e,done:!1}:"values"==r?{value:n[e],done:!1}:{value:[e,n[e]],done:!1}}),"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},function(t,n,r){var e=r(10),o=r(102),i=Object.prototype;o!==i.toString&&e(i,"toString",o,{unsafe:!0})},function(t,n,r){"use strict";var e=r(3);t.exports=function(){var t=e(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.dotAll&&(n+="s"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},function(t,n,r){"use strict";var e=r(6),o=r(10),i=r(2),u=r(0),c=r(30),a=u("species"),f=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),s=!i((function(){var t=/(?:)/,n=t.exec;t.exec=function(){return n.apply(this,arguments)};var r="ab".split(t);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));t.exports=function(t,n,r,l){var p=u(t),v=!i((function(){var n={};return n[p]=function(){return 7},7!=""[t](n)})),y=v&&!i((function(){var n=!1,r=/a/;return"split"===t&&((r={}).constructor={},r.constructor[a]=function(){return r},r.flags="",r[p]=/./[p]),r.exec=function(){return n=!0,null},r[p](""),!n}));if(!v||!y||"replace"===t&&!f||"split"===t&&!s){var g=/./[p],d=r(p,""[t],(function(t,n,r,e,o){return n.exec===c?v&&!o?{done:!0,value:g.call(n,r,e)}:{done:!0,value:t.call(r,n,e)}:{done:!1}})),h=d[0],m=d[1];o(String.prototype,t,h),o(RegExp.prototype,p,2==n?function(t,n){return m.call(t,this,n)}:function(t){return m.call(t,this)}),l&&e(RegExp.prototype[p],"sham",!0)}}},function(t,n,r){"use strict";var e=r(66).charAt;t.exports=function(t,n,r){return n+(r?e(t,n).length:1)}},function(t,n,r){var e=r(14),o=r(30);t.exports=function(t,n){var r=t.exec;if("function"==typeof r){var i=r.call(t,n);if("object"!=typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==e(t))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(t,n)}},function(t,n,r){"use strict";var e={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!e.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:e},function(t,n,r){var e=r(8),o=r(2),i=r(39);t.exports=!e&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,n,r){var e=r(16);t.exports=e("native-function-to-string",Function.toString)},function(t,n,r){var e=r(5),o=r(92),i=r(26),u=r(7);t.exports=function(t,n){for(var r=o(n),c=u.f,a=i.f,f=0;f<r.length;f++){var s=r[f];e(t,s)||c(t,s,a(n,s))}}},function(t,n,r){t.exports=r(1)},function(t,n,r){var e=r(5),o=r(11),i=r(93).indexOf,u=r(25);t.exports=function(t,n){var r,c=o(t),a=0,f=[];for(r in c)!e(u,r)&&e(c,r)&&f.push(r);for(;n.length>a;)e(c,r=n[a++])&&(~i(f,r)||f.push(r));return f}},function(t,n,r){var e=r(27),o=Math.max,i=Math.min;t.exports=function(t,n){var r=e(t);return r<0?o(r+n,0):i(r,n)}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,r){var e=r(2),o=/#|\.prototype\./,i=function(t,n){var r=c[u(t)];return r==f||r!=a&&("function"==typeof n?e(n):!!n)},u=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=i.data={},a=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},function(t,n,r){var e=r(2);t.exports=!!Object.getOwnPropertySymbols&&!e((function(){return!String(Symbol())}))},function(t,n,r){n.f=r(0)},function(t,n,r){var e=r(53),o=r(5),i=r(59),u=r(7).f;t.exports=function(t){var n=e.Symbol||(e.Symbol={});o(n,t)||u(n,t,{value:i.f(t)})}},function(t,n,r){var e=r(8),o=r(7).f,i=Function.prototype,u=i.toString,c=/^\s*function ([^ (]*)/;e&&!("name"in i)&&o(i,"name",{configurable:!0,get:function(){try{return u.call(this).match(c)[1]}catch(t){return""}}})},function(t,n,r){var e=r(14),o=r(0)("toStringTag"),i="Arguments"==e(function(){return arguments}());t.exports=function(t){var n,r,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),o))?r:i?e(n):"Object"==(u=e(n))&&"function"==typeof n.callee?"Arguments":u}},function(t,n,r){"use strict";var e=r(9),o=r(99),i=r(65),u=r(84),c=r(29),a=r(6),f=r(10),s=r(0),l=r(20),p=r(21),v=r(64),y=v.IteratorPrototype,g=v.BUGGY_SAFARI_ITERATORS,d=s("iterator"),h=function(){return this};t.exports=function(t,n,r,s,v,m,b){o(r,n,s);var x,S,w,O=function(t){if(t===v&&T)return T;if(!g&&t in _)return _[t];switch(t){case"keys":case"values":case"entries":return function(){return new r(this,t)}}return function(){return new r(this)}},j=n+" Iterator",A=!1,_=t.prototype,E=_[d]||_["@@iterator"]||v&&_[v],T=!g&&E||O(v),P="Array"==n&&_.entries||E;if(P&&(x=i(P.call(new t)),y!==Object.prototype&&x.next&&(l||i(x)===y||(u?u(x,y):"function"!=typeof x[d]&&a(x,d,h)),c(x,j,!0,!0),l&&(p[j]=h))),"values"==v&&E&&"values"!==E.name&&(A=!0,T=function(){return E.call(this)}),l&&!b||_[d]===T||a(_,d,T),p[n]=T,v)if(S={values:O("values"),keys:m?T:O("keys"),entries:O("entries")},b)for(w in S)(g||A||!(w in _))&&f(_,w,S[w]);else e({target:n,proto:!0,forced:g||A},S);return S}},function(t,n,r){"use strict";var e,o,i,u=r(65),c=r(6),a=r(5),f=r(0),s=r(20),l=f("iterator"),p=!1;[].keys&&("next"in(i=[].keys())?(o=u(u(i)))!==Object.prototype&&(e=o):p=!0),null==e&&(e={}),s||a(e,l)||c(e,l,(function(){return this})),t.exports={IteratorPrototype:e,BUGGY_SAFARI_ITERATORS:p}},function(t,n,r){var e=r(5),o=r(17),i=r(24),u=r(100),c=i("IE_PROTO"),a=Object.prototype;t.exports=u?Object.getPrototypeOf:function(t){return t=o(t),e(t,c)?t[c]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},function(t,n,r){var e=r(27),o=r(18),i=function(t){return function(n,r){var i,u,c=String(o(n)),a=e(r),f=c.length;return a<0||a>=f?t?"":void 0:(i=c.charCodeAt(a))<55296||i>56319||a+1===f||(u=c.charCodeAt(a+1))<56320||u>57343?t?c.charAt(a):i:t?c.slice(a,a+2):u-56320+(i-55296<<10)+65536}};t.exports={codeAt:i(!1),charAt:i(!0)}},,function(t,n,r){"use strict";var e=r(9),o=r(1),i=r(15),u=r(20),c=r(8),a=r(58),f=r(2),s=r(5),l=r(28),p=r(4),v=r(3),y=r(17),g=r(11),d=r(23),h=r(19),m=r(36),b=r(41),x=r(31),S=r(95),w=r(56),O=r(26),j=r(7),A=r(49),_=r(6),E=r(10),T=r(16),P=r(24),I=r(25),R=r(34),L=r(0),k=r(59),M=r(60),C=r(29),N=r(22),q=r(82).forEach,D=P("hidden"),F=L("toPrimitive"),G=N.set,V=N.getterFor("Symbol"),$=Object.prototype,z=o.Symbol,J=i("JSON","stringify"),W=O.f,H=j.f,U=S.f,B=A.f,Y=T("symbols"),K=T("op-symbols"),Q=T("string-to-symbol-registry"),Z=T("symbol-to-string-registry"),X=T("wks"),tt=o.QObject,nt=!tt||!tt.prototype||!tt.prototype.findChild,rt=c&&f((function(){return 7!=m(H({},"a",{get:function(){return H(this,"a",{value:7}).a}})).a}))?function(t,n,r){var e=W($,n);e&&delete $[n],H(t,n,r),e&&t!==$&&H($,n,e)}:H,et=function(t,n){var r=Y[t]=m(z.prototype);return G(r,{type:"Symbol",tag:t,description:n}),c||(r.description=n),r},ot=a&&"symbol"==typeof z.iterator?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof z},it=function(t,n,r){t===$&&it(K,n,r),v(t);var e=d(n,!0);return v(r),s(Y,e)?(r.enumerable?(s(t,D)&&t[D][e]&&(t[D][e]=!1),r=m(r,{enumerable:h(0,!1)})):(s(t,D)||H(t,D,h(1,{})),t[D][e]=!0),rt(t,e,r)):H(t,e,r)},ut=function(t,n){v(t);var r=g(n),e=b(r).concat(st(r));return q(e,(function(n){c&&!ct.call(r,n)||it(t,n,r[n])})),t},ct=function(t){var n=d(t,!0),r=B.call(this,n);return!(this===$&&s(Y,n)&&!s(K,n))&&(!(r||!s(this,n)||!s(Y,n)||s(this,D)&&this[D][n])||r)},at=function(t,n){var r=g(t),e=d(n,!0);if(r!==$||!s(Y,e)||s(K,e)){var o=W(r,e);return!o||!s(Y,e)||s(r,D)&&r[D][e]||(o.enumerable=!0),o}},ft=function(t){var n=U(g(t)),r=[];return q(n,(function(t){s(Y,t)||s(I,t)||r.push(t)})),r},st=function(t){var n=t===$,r=U(n?K:g(t)),e=[];return q(r,(function(t){!s(Y,t)||n&&!s($,t)||e.push(Y[t])})),e};(a||(E((z=function(){if(this instanceof z)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,n=R(t),r=function(t){this===$&&r.call(K,t),s(this,D)&&s(this[D],n)&&(this[D][n]=!1),rt(this,n,h(1,t))};return c&&nt&&rt($,n,{configurable:!0,set:r}),et(n,t)}).prototype,"toString",(function(){return V(this).tag})),A.f=ct,j.f=it,O.f=at,x.f=S.f=ft,w.f=st,c&&(H(z.prototype,"description",{configurable:!0,get:function(){return V(this).description}}),u||E($,"propertyIsEnumerable",ct,{unsafe:!0})),k.f=function(t){return et(L(t),t)}),e({global:!0,wrap:!0,forced:!a,sham:!a},{Symbol:z}),q(b(X),(function(t){M(t)})),e({target:"Symbol",stat:!0,forced:!a},{for:function(t){var n=String(t);if(s(Q,n))return Q[n];var r=z(n);return Q[n]=r,Z[r]=n,r},keyFor:function(t){if(!ot(t))throw TypeError(t+" is not a symbol");if(s(Z,t))return Z[t]},useSetter:function(){nt=!0},useSimple:function(){nt=!1}}),e({target:"Object",stat:!0,forced:!a,sham:!c},{create:function(t,n){return void 0===n?m(t):ut(m(t),n)},defineProperty:it,defineProperties:ut,getOwnPropertyDescriptor:at}),e({target:"Object",stat:!0,forced:!a},{getOwnPropertyNames:ft,getOwnPropertySymbols:st}),e({target:"Object",stat:!0,forced:f((function(){w.f(1)}))},{getOwnPropertySymbols:function(t){return w.f(y(t))}}),J)&&e({target:"JSON",stat:!0,forced:!a||f((function(){var t=z();return"[null]"!=J([t])||"{}"!=J({a:t})||"{}"!=J(Object(t))}))},{stringify:function(t,n,r){for(var e,o=[t],i=1;arguments.length>i;)o.push(arguments[i++]);if(e=n,(p(n)||void 0!==t)&&!ot(t))return l(n)||(n=function(t,n){if("function"==typeof e&&(n=e.call(this,t,n)),!ot(n))return n}),o[1]=n,J.apply(null,o)}});z.prototype[F]||_(z.prototype,F,z.prototype.valueOf),C(z,"Symbol"),I[D]=!0},function(t,n,r){var e=r(15);t.exports=e("document","documentElement")},function(t,n,r){var e=r(4),o=r(28),i=r(0)("species");t.exports=function(t,n){var r;return o(t)&&("function"!=typeof(r=t.constructor)||r!==Array&&!o(r.prototype)?e(r)&&null===(r=r[i])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===n?0:n)}},function(t,n,r){"use strict";var e=r(9),o=r(8),i=r(1),u=r(5),c=r(4),a=r(7).f,f=r(52),s=i.Symbol;if(o&&"function"==typeof s&&(!("description"in s.prototype)||void 0!==s().description)){var l={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),n=this instanceof p?new s(t):void 0===t?s():s(t);return""===t&&(l[n]=!0),n};f(p,s);var v=p.prototype=s.prototype;v.constructor=p;var y=v.toString,g="Symbol(test)"==String(s("test")),d=/^Symbol\((.*)\)[^)]+$/;a(v,"description",{configurable:!0,get:function(){var t=c(this)?this.valueOf():this,n=y.call(t);if(u(l,t))return"";var r=g?n.slice(7,-1):n.replace(d,"$1");return""===r?void 0:r}}),e({global:!0,forced:!0},{Symbol:p})}},function(t,n,r){var e=r(2),o=r(0),i=r(42),u=o("species");t.exports=function(t){return i>=51||!e((function(){var n=[];return(n.constructor={})[u]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},function(t,n,r){var e=r(15);t.exports=e("navigator","userAgent")||""},function(t,n,r){var e=r(9),o=r(97);e({target:"Array",stat:!0,forced:!r(78)((function(t){Array.from(t)}))},{from:o})},function(t,n,r){var e=r(3);t.exports=function(t,n,r,o){try{return o?n(e(r)[0],r[1]):n(r)}catch(n){var i=t.return;throw void 0!==i&&e(i.call(t)),n}}},function(t,n,r){var e=r(0),o=r(21),i=e("iterator"),u=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||u[i]===t)}},function(t,n,r){var e=r(62),o=r(21),i=r(0)("iterator");t.exports=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[e(t)]}},function(t,n,r){var e=r(0)("iterator"),o=!1;try{var i=0,u={next:function(){return{done:!!i++}},return:function(){o=!0}};u[e]=function(){return this},Array.from(u,(function(){throw 2}))}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var r=!1;try{var i={};i[e]=function(){return{next:function(){return{done:r=!0}}}},t(i)}catch(t){}return r}},function(t,n,r){"use strict";var e=r(9),o=r(4),i=r(28),u=r(55),c=r(12),a=r(11),f=r(40),s=r(72),l=r(0)("species"),p=[].slice,v=Math.max;e({target:"Array",proto:!0,forced:!s("slice")},{slice:function(t,n){var r,e,s,y=a(this),g=c(y.length),d=u(t,g),h=u(void 0===n?g:n,g);if(i(y)&&("function"!=typeof(r=y.constructor)||r!==Array&&!i(r.prototype)?o(r)&&null===(r=r[l])&&(r=void 0):r=void 0,r===Array||void 0===r))return p.call(y,d,h);for(e=new(void 0===r?Array:r)(v(h-d,0)),s=0;d<h;d++,s++)d in y&&f(e,s,y[d]);return e.length=s,e}})},function(t,n,r){"use strict";var e=r(66).charAt,o=r(22),i=r(63),u=o.set,c=o.getterFor("String Iterator");i(String,"String",(function(t){u(this,{type:"String Iterator",string:String(t),index:0})}),(function(){var t,n=c(this),r=n.string,o=n.index;return o>=r.length?{value:void 0,done:!0}:(t=e(r,o),n.index+=t.length,{value:t,done:!1})}))},,function(t,n,r){var e=r(32),o=r(38),i=r(17),u=r(12),c=r(70),a=[].push,f=function(t){var n=1==t,r=2==t,f=3==t,s=4==t,l=6==t,p=5==t||l;return function(v,y,g,d){for(var h,m,b=i(v),x=o(b),S=e(y,g,3),w=u(x.length),O=0,j=d||c,A=n?j(v,w):r?j(v,0):void 0;w>O;O++)if((p||O in x)&&(m=S(h=x[O],O,b),t))if(n)A[O]=m;else if(m)switch(t){case 3:return!0;case 5:return h;case 6:return O;case 2:a.call(A,h)}else if(s)return!1;return l?-1:f||s?s:A}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6)}},function(t,n,r){r(60)("iterator")},function(t,n,r){var e=r(3),o=r(101);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,n=!1,r={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(r,[]),n=r instanceof Array}catch(t){}return function(r,i){return e(r),o(i),n?t.call(r,i):r.__proto__=i,r}}():void 0)},function(t,n,r){"use strict";var e=r(10),o=r(3),i=r(2),u=r(45),c=RegExp.prototype,a=c.toString,f=i((function(){return"/a/b"!=a.call({source:"a",flags:"b"})})),s="toString"!=a.name;(f||s)&&e(RegExp.prototype,"toString",(function(){var t=o(this),n=String(t.source),r=t.flags;return"/"+n+"/"+String(void 0===r&&t instanceof RegExp&&!("flags"in c)?u.call(t):r)}),{unsafe:!0})},function(t,n){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,n,r){var e=r(1),o=r(86),i=r(43),u=r(6),c=r(0),a=c("iterator"),f=c("toStringTag"),s=i.values;for(var l in o){var p=e[l],v=p&&p.prototype;if(v){if(v[a]!==s)try{u(v,a,s)}catch(t){v[a]=s}if(v[f]||u(v,f,l),o[l])for(var y in i)if(v[y]!==i[y])try{u(v,y,i[y])}catch(t){v[y]=i[y]}}}},,function(t,n){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,n,r){var e=r(1),o=r(33),i=e["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,n,r){var e=r(1),o=r(51),i=e.WeakMap;t.exports="function"==typeof i&&/native code/.test(o.call(i))},function(t,n,r){var e=r(15),o=r(31),i=r(56),u=r(3);t.exports=e("Reflect","ownKeys")||function(t){var n=o.f(u(t)),r=i.f;return r?n.concat(r(t)):n}},function(t,n,r){var e=r(11),o=r(12),i=r(55),u=function(t){return function(n,r,u){var c,a=e(n),f=o(a.length),s=i(u,f);if(t&&r!=r){for(;f>s;)if((c=a[s++])!=c)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===r)return t||s||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},function(t,n,r){var e=r(8),o=r(7),i=r(3),u=r(41);t.exports=e?Object.defineProperties:function(t,n){i(t);for(var r,e=u(n),c=e.length,a=0;c>a;)o.f(t,r=e[a++],n[r]);return t}},function(t,n,r){var e=r(11),o=r(31).f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return u.slice()}}(t):o(e(t))}},,function(t,n,r){"use strict";var e=r(32),o=r(17),i=r(75),u=r(76),c=r(12),a=r(40),f=r(77);t.exports=function(t){var n,r,s,l,p,v=o(t),y="function"==typeof this?this:Array,g=arguments.length,d=g>1?arguments[1]:void 0,h=void 0!==d,m=0,b=f(v);if(h&&(d=e(d,g>2?arguments[2]:void 0,2)),null==b||y==Array&&u(b))for(r=new y(n=c(v.length));n>m;m++)a(r,m,h?d(v[m],m):v[m]);else for(p=(l=b.call(v)).next,r=new y;!(s=p.call(l)).done;m++)a(r,m,h?i(l,d,[s.value,m],!0):s.value);return r.length=m,r}},function(t,n,r){var e=r(0),o=r(36),i=r(6),u=e("unscopables"),c=Array.prototype;null==c[u]&&i(c,u,o(null)),t.exports=function(t){c[u][t]=!0}},function(t,n,r){"use strict";var e=r(64).IteratorPrototype,o=r(36),i=r(19),u=r(29),c=r(21),a=function(){return this};t.exports=function(t,n,r){var f=n+" Iterator";return t.prototype=o(e,{next:i(1,r)}),u(t,f,!1,!0),c[f]=a,t}},function(t,n,r){var e=r(2);t.exports=!e((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},function(t,n,r){var e=r(4);t.exports=function(t){if(!e(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},function(t,n,r){"use strict";var e=r(62),o={};o[r(0)("toStringTag")]="z",t.exports="[object z]"!==String(o)?function(){return"[object "+e(this)+"]"}:o.toString},function(t,n,r){"use strict";var e=r(15),o=r(7),i=r(0),u=r(8),c=i("species");t.exports=function(t){var n=e(t),r=o.f;u&&n&&!n[c]&&r(n,c,{configurable:!0,get:function(){return this}})}},,,,function(t,n,r){"use strict";var e=r(9),o=r(30);e({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},function(t,n,r){"use strict";var e=r(46),o=r(3),i=r(12),u=r(18),c=r(47),a=r(48);e("match",1,(function(t,n,r){return[function(n){var r=u(this),e=null==n?void 0:n[t];return void 0!==e?e.call(n,r):new RegExp(n)[t](String(r))},function(t){var e=r(n,t,this);if(e.done)return e.value;var u=o(t),f=String(this);if(!u.global)return a(u,f);var s=u.unicode;u.lastIndex=0;for(var l,p=[],v=0;null!==(l=a(u,f));){var y=String(l[0]);p[v]=y,""===y&&(u.lastIndex=c(f,i(u.lastIndex),s)),v++}return 0===v?null:p}]}))},function(t,n,r){var e=r(4),o=r(14),i=r(0)("match");t.exports=function(t){var n;return e(t)&&(void 0!==(n=t[i])?!!n:"RegExp"==o(t))}},function(t,n,r){"use strict";function e(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}r.d(n,"a",(function(){return o}));var o=function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),localStorage.news||(localStorage.setItem("news",null),localStorage.request=0)}var n,r,o;return n=t,(r=[{key:"setNewsData",value:function(t){localStorage.news=JSON.stringify(t)}},{key:"getNewsData",value:function(){return JSON.parse(localStorage.news)}},{key:"setRequest",value:function(t){localStorage.request=JSON.stringify(t)}},{key:"getRequest",value:function(){return JSON.parse(localStorage.request)}}])&&e(n.prototype,r),o&&e(n,o),t}()},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,n,r){var e=r(9),o=r(17),i=r(41);e({target:"Object",stat:!0,forced:r(2)((function(){i(1)}))},{keys:function(t){return i(o(t))}})},function(t,n,r){},function(t,n,r){var e=r(8),o=r(1),i=r(57),u=r(150),c=r(7).f,a=r(31).f,f=r(109),s=r(45),l=r(10),p=r(2),v=r(103),y=r(0)("match"),g=o.RegExp,d=g.prototype,h=/a/g,m=/a/g,b=new g(h)!==h;if(e&&i("RegExp",!b||p((function(){return m[y]=!1,g(h)!=h||g(m)==m||"/a/i"!=g(h,"i")})))){for(var x=function(t,n){var r=this instanceof x,e=f(t),o=void 0===n;return!r&&e&&t.constructor===x&&o?t:u(b?new g(e&&!o?t.source:t,n):g((e=t instanceof x)?t.source:t,e&&o?s.call(t):n),r?this:d,x)},S=function(t){t in x||c(x,t,{configurable:!0,get:function(){return g[t]},set:function(n){g[t]=n}})},w=a(g),O=0;w.length>O;)S(w[O++]);d.constructor=x,x.prototype=d,l(o,"RegExp",x)}v("RegExp")},function(t,n,r){var e=r(4),o=r(84);t.exports=function(t,n,r){var i,u;return o&&"function"==typeof(i=n.constructor)&&i!==r&&e(u=i.prototype)&&u!==r.prototype&&o(t,u),t}},,,function(t,n,r){"use strict";r.r(n);r(68),r(71),r(83),r(74),r(43),r(79),r(61),r(147),r(44),r(85),r(80),r(87),r(148),r(149),r(107),r(108);function e(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,n){if(!t)return;if("string"==typeof t)return o(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(t,n)}(t))){var n=0,r=function(){};return{s:r,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var e,i,u=!0,c=!1;return{s:function(){e=t[Symbol.iterator]()},n:function(){var t=e.next();return u=t.done,t},e:function(t){c=!0,i=t},f:function(){try{u||null==e.return||e.return()}finally{if(c)throw i}}}}function o(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}function i(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}var u=function(){function t(n,r){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.newsData=n,this.request=r,this._amount={common:0}}var n,r,o;return n=t,(r=[{key:"getMentionAmount",value:function(){var t,n=new RegExp(this.request,"ig"),r=e(this.newsData.articles);try{for(r.s();!(t=r.n()).done;){var o=t.value;o.description=o.description?o.description:"",o.title=o.title?o.title:"",this._amount.common=this._amount.common+(o.description.match(n)||[]).length+(o.title.match(n)||[]).length;var i=o.publishedAt.match(/\d{4}-\d{2}-(\d{2})/)[1];this._amount[i]?this._amount[i]=this._amount[i]+(o.description.match(n)||[]).length+(o.title.match(n)||[]).length:this._amount[i]=(o.description.match(n)||[]).length+(o.title.match(n)||[]).length}}catch(t){r.e(t)}finally{r.f()}return this._amount}}])&&i(n.prototype,r),o&&i(n,o),t}(),c=r(110),a=r(13);function f(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,n){if(!t)return;if("string"==typeof t)return s(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(t,n)}(t))){var n=0,r=function(){};return{s:r,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var e,o,i=!0,u=!1;return{s:function(){e=t[Symbol.iterator]()},n:function(){var t=e.next();return i=t.done,t},e:function(t){u=!0,o=t},f:function(){try{i||null==e.return||e.return()}finally{if(u)throw o}}}}function s(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}var l=new c.a,p=new u(l.getNewsData(),l.getRequest()),v=new Date,y={title:document.querySelector(".content__title_section_request-answer"),headers:document.querySelector(".request-answer__amount_content_headers"),text:document.querySelector(".request-answer__amount_content_text"),daysWrapper:document.querySelector(".analytics__day-wrapper"),daysTemplate:document.querySelector(".analytics__day-template"),ranges:document.querySelectorAll(".analytics__range")};y.title.insertAdjacentHTML("beforeend"," &laquo;".concat(l.getRequest(),"&raquo;")),y.text.textContent=l.getNewsData().totalResults,function(){for(var t=0;t<=6;t++)y.daysWrapper.append(y.daysTemplate.content.cloneNode(!0));var n,r=v.getDate()-6,e=f(document.querySelectorAll(".analytics__day"));try{for(e.s();!(n=e.n()).done;){var o=n.value;v.setDate(r),o.textContent=String(v.getDate())+","+String(a.b[v.getDay()]),r++}}catch(t){e.e(t)}finally{e.f()}}();var g=p.getMentionAmount();y.headers.textContent=g.common,function(){var t,n=Object.keys(g)[0],r=f(y.ranges);try{for(r.s();!(t=r.n()).done;){var e=t.value;e.textContent=g[n]?g[n]:0,e.style.width=g[n]?"".concat(g[n],"%"):"10px",n++}}catch(t){r.e(t)}finally{r.f()}}()}]);