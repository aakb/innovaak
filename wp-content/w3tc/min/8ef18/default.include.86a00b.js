/*! jQuery v1.7.1 jquery.com | jquery.org/license */
(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cv(a){if(!ck[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){cl||(cl=c.createElement("iframe"),cl.frameBorder=cl.width=cl.height=0),b.appendChild(cl);if(!cm||!cl.createElement)cm=(cl.contentWindow||cl.contentDocument).document,cm.write((c.compatMode==="CSS1Compat"?"<!doctype html>":"")+"<html><body>"),cm.close();d=cm.createElement(a),cm.body.appendChild(d),e=f.css(d,"display"),b.removeChild(cl)}ck[a]=e}return ck[a]}function cu(a,b){var c={};f.each(cq.concat.apply([],cq.slice(0,b)),function(){c[this]=a});return c}function ct(){cr=b}function cs(){setTimeout(ct,0);return cr=f.now()}function cj(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ci(){try{return new a.XMLHttpRequest}catch(b){}}function cc(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function cb(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function ca(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bE.test(a)?d(a,e):ca(a+"["+(typeof e=="object"||f.isArray(e)?b:"")+"]",e,c,d)});else if(!c&&b!=null&&typeof b=="object")for(var e in b)ca(a+"["+e+"]",b[e],c,d);else d(a,b)}function b_(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function b$(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bT,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=b$(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=b$(a,c,d,e,"*",g));return l}function bZ(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bP),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bC(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?bx:by,g=0,h=e.length;if(d>0){if(c!=="border")for(;g<h;g++)c||(d-=parseFloat(f.css(a,"padding"+e[g]))||0),c==="margin"?d+=parseFloat(f.css(a,c+e[g]))||0:d-=parseFloat(f.css(a,"border"+e[g]+"Width"))||0;return d+"px"}d=bz(a,b,b);if(d<0||d==null)d=a.style[b]||0;d=parseFloat(d)||0;if(c)for(;g<h;g++)d+=parseFloat(f.css(a,"padding"+e[g]))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+e[g]+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+e[g]))||0);return d+"px"}function bp(a,b){b.src?f.ajax({url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)}function bo(a){var b=c.createElement("div");bh.appendChild(b),b.innerHTML=a.outerHTML;return b.firstChild}function bn(a){var b=(a.nodeName||"").toLowerCase();b==="input"?bm(a):b!=="script"&&typeof a.getElementsByTagName!="undefined"&&f.grep(a.getElementsByTagName("input"),bm)}function bm(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bl(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bk(a,b){var c;if(b.nodeType===1){b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase();if(c==="object")b.outerHTML=a.outerHTML;else if(c!=="input"||a.type!=="checkbox"&&a.type!=="radio"){if(c==="option")b.selected=a.defaultSelected;else if(c==="input"||c==="textarea")b.defaultValue=a.defaultValue}else a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value);b.removeAttribute(f.expando)}}function bj(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c,d,e,g=f._data(a),h=f._data(b,g),i=g.events;if(i){delete h.handle,h.events={};for(c in i)for(d=0,e=i[c].length;d<e;d++)f.event.add(b,c+(i[c][d].namespace?".":"")+i[c][d].namespace,i[c][d],i[c][d].data)}h.data&&(h.data=f.extend({},h.data))}}function bi(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function U(a){var b=V.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function T(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(O.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function S(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function K(){return!0}function J(){return!1}function n(a,b,c){var d=b+"defer",e=b+"queue",g=b+"mark",h=f._data(a,d);h&&(c==="queue"||!f._data(a,e))&&(c==="mark"||!f._data(a,g))&&setTimeout(function(){!f._data(a,e)&&!f._data(a,g)&&(f.removeData(a,d,!0),h.fire())},0)}function m(a){for(var b in a){if(b==="data"&&f.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function l(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(k,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNumeric(d)?parseFloat(d):j.test(d)?f.parseJSON(d):d}catch(g){}f.data(a,c,d)}else d=b}return d}function h(a){var b=g[a]={},c,d;a=a.split(/\s+/);for(c=0,d=a.length;c<d;c++)b[a[c]]=!0;return b}var c=a.document,d=a.navigator,e=a.location,f=function(){function J(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(J,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig,w=/^-ms-/,x=function(a,b){return(b+"").toUpperCase()},y=d.userAgent,z,A,B,C=Object.prototype.toString,D=Object.prototype.hasOwnProperty,E=Array.prototype.push,F=Array.prototype.slice,G=String.prototype.trim,H=Array.prototype.indexOf,I={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=m.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.7.1",length:0,size:function(){return this.length},toArray:function(){return F.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?E.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),A.add(a);return this},eq:function(a){a=+a;return a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(F.apply(this,arguments),"slice",F.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:E,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;A.fireWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").off("ready")}},bindReady:function(){if(!A){A=e.Callbacks("once memory");if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",B,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",B),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&J()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a&&typeof a=="object"&&"setInterval"in a},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):I[C.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!D.call(a,"constructor")&&!D.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||D.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw new Error(a)},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(w,"ms-").replace(v,x)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:G?function(a){return a==null?"":G.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?E.call(c,a):e.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(H)return H.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=F.call(arguments,2),g=function(){return a.apply(c,f.concat(F.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h){var i=a.length;if(typeof c=="object"){for(var j in c)e.access(a,j,c[j],f,g,d);return a}if(d!==b){f=!h&&f&&e.isFunction(d);for(var k=0;k<i;k++)g(a[k],c,f?d.call(a[k],k,g(a[k],c)):d,h);return a}return i?g(a[0],c):b},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){I["[object "+b+"]"]=b.toLowerCase()}),z=e.uaMatch(y),z.browser&&(e.browser[z.browser]=!0,e.browser.version=z.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?B=function(){c.removeEventListener("DOMContentLoaded",B,!1),e.ready()}:c.attachEvent&&(B=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",B),e.ready())});return e}(),g={};f.Callbacks=function(a){a=a?g[a]||h(a):{};var c=[],d=[],e,i,j,k,l,m=function(b){var d,e,g,h,i;for(d=0,e=b.length;d<e;d++)g=b[d],h=f.type(g),h==="array"?m(g):h==="function"&&(!a.unique||!o.has(g))&&c.push(g)},n=function(b,f){f=f||[],e=!a.memory||[b,f],i=!0,l=j||0,j=0,k=c.length;for(;c&&l<k;l++)if(c[l].apply(b,f)===!1&&a.stopOnFalse){e=!0;break}i=!1,c&&(a.once?e===!0?o.disable():c=[]:d&&d.length&&(e=d.shift(),o.fireWith(e[0],e[1])))},o={add:function(){if(c){var a=c.length;m(arguments),i?k=c.length:e&&e!==!0&&(j=a,n(e[0],e[1]))}return this},remove:function(){if(c){var b=arguments,d=0,e=b.length;for(;d<e;d++)for(var f=0;f<c.length;f++)if(b[d]===c[f]){i&&f<=k&&(k--,f<=l&&l--),c.splice(f--,1);if(a.unique)break}}return this},has:function(a){if(c){var b=0,d=c.length;for(;b<d;b++)if(a===c[b])return!0}return!1},empty:function(){c=[];return this},disable:function(){c=d=e=b;return this},disabled:function(){return!c},lock:function(){d=b,(!e||e===!0)&&o.disable();return this},locked:function(){return!d},fireWith:function(b,c){d&&(i?a.once||d.push([b,c]):(!a.once||!e)&&n(b,c));return this},fire:function(){o.fireWith(this,arguments);return this},fired:function(){return!!e}};return o};var i=[].slice;f.extend({Deferred:function(a){var b=f.Callbacks("once memory"),c=f.Callbacks("once memory"),d=f.Callbacks("memory"),e="pending",g={resolve:b,reject:c,notify:d},h={done:b.add,fail:c.add,progress:d.add,state:function(){return e},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);return this},always:function(){i.done.apply(i,arguments).fail.apply(i,arguments);return this},pipe:function(a,b,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],e=b[1],g;f.isFunction(c)?i[a](function(){g=c.apply(this,arguments),g&&f.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify):d[e+"With"](this===i?d:this,[g])}):i[a](d[e])})}).promise()},promise:function(a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({}),j;for(j in g)i[j]=g[j].fire,i[j+"With"]=g[j].fireWith;i.done(function(){e="resolved"},c.disable,d.lock).fail(function(){e="rejected"},b.disable,d.lock),a&&a.call(i,i);return i},when:function(a){function m(a){return function(b){e[a]=arguments.length>1?i.call(arguments,0):b,j.notifyWith(k,e)}}function l(a){return function(c){b[a]=arguments.length>1?i.call(arguments,0):c,--g||j.resolveWith(j,b)}}var b=i.call(arguments,0),c=0,d=b.length,e=Array(d),g=d,h=d,j=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred(),k=j.promise();if(d>1){for(;c<d;c++)b[c]&&b[c].promise&&f.isFunction(b[c].promise)?b[c].promise().then(l(c),j.reject,m(c)):--g;g||j.resolveWith(j,b)}else j!==a&&j.resolveWith(j,d?[a]:[]);return k}}),f.support=function(){var b,d,e,g,h,i,j,k,l,m,n,o,p,q=c.createElement("div"),r=c.documentElement;q.setAttribute("className","t"),q.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=q.getElementsByTagName("*"),e=q.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=q.getElementsByTagName("input")[0],b={leadingWhitespace:q.firstChild.nodeType===3,tbody:!q.getElementsByTagName("tbody").length,htmlSerialize:!!q.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:q.className!=="t",enctype:!!c.createElement("form").enctype,html5Clone:c.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0},i.checked=!0,b.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,b.optDisabled=!h.disabled;try{delete q.test}catch(s){b.deleteExpando=!1}!q.addEventListener&&q.attachEvent&&q.fireEvent&&(q.attachEvent("onclick",function(){b.noCloneEvent=!1}),q.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),b.radioValue=i.value==="t",i.setAttribute("checked","checked"),q.appendChild(i),k=c.createDocumentFragment(),k.appendChild(q.lastChild),b.checkClone=k.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=i.checked,k.removeChild(i),k.appendChild(q),q.innerHTML="",a.getComputedStyle&&(j=c.createElement("div"),j.style.width="0",j.style.marginRight="0",q.style.width="2px",q.appendChild(j),b.reliableMarginRight=(parseInt((a.getComputedStyle(j,null)||{marginRight:0}).marginRight,10)||0)===0);if(q.attachEvent)for(o in{submit:1,change:1,focusin:1})n="on"+o,p=n in q,p||(q.setAttribute(n,"return;"),p=typeof q[n]=="function"),b[o+"Bubbles"]=p;k.removeChild(q),k=g=h=j=q=i=null,f(function(){var a,d,e,g,h,i,j,k,m,n,o,r=c.getElementsByTagName("body")[0];!r||(j=1,k="position:absolute;top:0;left:0;width:1px;height:1px;margin:0;",m="visibility:hidden;border:0;",n="style='"+k+"border:5px solid #000;padding:0;'",o="<div "+n+"><div></div></div>"+"<table "+n+" cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>",a=c.createElement("div"),a.style.cssText=m+"width:0;height:0;position:static;top:0;margin-top:"+j+"px",r.insertBefore(a,r.firstChild),q=c.createElement("div"),a.appendChild(q),q.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>",l=q.getElementsByTagName("td"),p=l[0].offsetHeight===0,l[0].style.display="",l[1].style.display="none",b.reliableHiddenOffsets=p&&l[0].offsetHeight===0,q.innerHTML="",q.style.width=q.style.paddingLeft="1px",f.boxModel=b.boxModel=q.offsetWidth===2,typeof q.style.zoom!="undefined"&&(q.style.display="inline",q.style.zoom=1,b.inlineBlockNeedsLayout=q.offsetWidth===2,q.style.display="",q.innerHTML="<div style='width:4px;'></div>",b.shrinkWrapBlocks=q.offsetWidth!==2),q.style.cssText=k+m,q.innerHTML=o,d=q.firstChild,e=d.firstChild,h=d.nextSibling.firstChild.firstChild,i={doesNotAddBorder:e.offsetTop!==5,doesAddBorderForTableAndCells:h.offsetTop===5},e.style.position="fixed",e.style.top="20px",i.fixedPosition=e.offsetTop===20||e.offsetTop===15,e.style.position=e.style.top="",d.style.overflow="hidden",d.style.position="relative",i.subtractsBorderForOverflowNotVisible=e.offsetTop===-5,i.doesNotIncludeMarginInBodyOffset=r.offsetTop!==j,r.removeChild(a),q=a=null,f.extend(b,i))});return b}();var j=/^(?:\{.*\}|\[.*\])$/,k=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!m(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i,j=f.expando,k=typeof c=="string",l=a.nodeType,m=l?f.cache:a,n=l?a[j]:a[j]&&j,o=c==="events";if((!n||!m[n]||!o&&!e&&!m[n].data)&&k&&d===b)return;n||(l?a[j]=n=++f.uuid:n=j),m[n]||(m[n]={},l||(m[n].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?m[n]=f.extend(m[n],c):m[n].data=f.extend(m[n].data,c);g=h=m[n],e||(h.data||(h.data={}),h=h.data),d!==b&&(h[f.camelCase(c)]=d);if(o&&!h[c])return g.events;k?(i=h[c],i==null&&(i=h[f.camelCase(c)])):i=h;return i}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[h]:h;if(!j[k])return;if(b){d=c?j[k]:j[k].data;if(d){f.isArray(b)||(b in d?b=[b]:(b=f.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,g=b.length;e<g;e++)delete d[b[e]];if(!(c?m:f.isEmptyObject)(d))return}}if(!c){delete j[k].data;if(!m(j[k]))return}f.support.deleteExpando||!j.setInterval?delete j[k]:j[k]=null,i&&(f.support.deleteExpando?delete a[h]:a.removeAttribute?a.removeAttribute(h):a[h]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d,e,g,h=null;if(typeof a=="undefined"){if(this.length){h=f.data(this[0]);if(this[0].nodeType===1&&!f._data(this[0],"parsedAttrs")){e=this[0].attributes;for(var i=0,j=e.length;i<j;i++)g=e[i].name,g.indexOf("data-")===0&&(g=f.camelCase(g.substring(5)),l(this[0],g,h[g]));f._data(this[0],"parsedAttrs",!0)}}return h}if(typeof a=="object")return this.each(function(){f.data(this,a)});d=a.split("."),d[1]=d[1]?"."+d[1]:"";if(c===b){h=this.triggerHandler("getData"+d[1]+"!",[d[0]]),h===b&&this.length&&(h=f.data(this[0],a),h=l(this[0],a,h));return h===b&&d[1]?this.data(d[0]):h}return this.each(function(){var b=f(this),e=[d[0],c];b.triggerHandler("setData"+d[1]+"!",e),f.data(this,a,c),b.triggerHandler("changeData"+d[1]+"!",e)})},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",f._data(a,b,(f._data(a,b)||0)+1))},_unmark:function(a,b,c){a!==!0&&(c=b,b=a,a=!1);if(b){c=c||"fx";var d=c+"mark",e=a?0:(f._data(b,d)||1)-1;e?f._data(b,d,e):(f.removeData(b,d,!0),n(b,c,"mark"))}},queue:function(a,b,c){var d;if(a){b=(b||"fx")+"queue",d=f._data(a,b),c&&(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c)):d.push(c));return d||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e={};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),f._data(a,b+".run",e),d.call(a,function(){f.dequeue(a,b)},e)),c.length||(f.removeData(a,b+"queue "+b+".run",!0),n(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){typeof a!="string"&&(c=a,a="fx");if(c===b)return f.queue(this[0],a);return this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f.Callbacks("once memory"),!0))h++,l.add(m);m();return d.promise()}});var o=/[\n\t\r]/g,p=/\s+/,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i,t=/^a(?:rea)?$/i,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v=f.support.getSetAttribute,w,x,y;f.fn.extend({attr:function(a,b){return f.access(this,a,b,!0,f.attr)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,a,b,!0,f.prop)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(p);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(p);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(o," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(p);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(o," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,g=this[0];{if(!!arguments.length){e=f.isFunction(a);return this.each(function(d){var g=f(this),h;if(this.nodeType===1){e?h=a.call(this,d,g.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.nodeName.toLowerCase()]||f.valHooks[this.type];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}if(g){c=f.valHooks[g.nodeName.toLowerCase()]||f.valHooks[g.type];if(c&&"get"in c&&(d=c.get(g,"value"))!==b)return d;d=g.value;return typeof d=="string"?d.replace(q,""):d==null?"":d}}}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type==="select-one";if(g<0)return null;c=j?g:0,d=j?g+1:i.length;for(;c<d;c++){e=i[c];if(e.selected&&(f.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!f.nodeName(e.parentNode,"optgroup"))){b=f(e).val();if(j)return b;h.push(b)}}if(j&&!h.length&&i.length)return f(i[g]).val();return h},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType;if(!!a&&j!==3&&j!==8&&j!==2){if(e&&c in f.attrFn)return f(a)[c](d);if(typeof a.getAttribute=="undefined")return f.prop(a,c,d);i=j!==1||!f.isXMLDoc(a),i&&(c=c.toLowerCase(),h=f.attrHooks[c]||(u.test(c)?x:w));if(d!==b){if(d===null){f.removeAttr(a,c);return}if(h&&"set"in h&&i&&(g=h.set(a,d,c))!==b)return g;a.setAttribute(c,""+d);return d}if(h&&"get"in h&&i&&(g=h.get(a,c))!==null)return g;g=a.getAttribute(c);return g===null?b:g}},removeAttr:function(a,b){var c,d,e,g,h=0;if(b&&a.nodeType===1){d=b.toLowerCase().split(p),g=d.length;for(;h<g;h++)e=d[h],e&&(c=f.propFix[e]||e,f.attr(a,e,""),a.removeAttribute(v?e:c),u.test(e)&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(r.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(w&&f.nodeName(a,"button"))return w.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(w&&f.nodeName(a,"button"))return w.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,g,h,i=a.nodeType;if(!!a&&i!==3&&i!==8&&i!==2){h=i!==1||!f.isXMLDoc(a),h&&(c=f.propFix[c]||c,g=f.propHooks[c]);return d!==b?g&&"set"in g&&(e=g.set(a,d,c))!==b?e:a[c]=d:g&&"get"in g&&(e=g.get(a,c))!==null?e:a[c]}},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,e=f.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},v||(y={name:!0,id:!0},w=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&(y[c]?d.nodeValue!=="":d.specified)?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.attrHooks.tabindex.set=w.set,f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})}),f.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===""&&(b="false"),w.set(a,b,c)}}),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.enctype||(f.propFix.enctype="encoding"),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var z=/^(?:textarea|input|select)$/i,A=/^([^\.]*)?(?:\.(.+))?$/,B=/\bhover(\.\S+)?\b/,C=/^key/,D=/^(?:mouse|contextmenu)|click/,E=/^(?:focusinfocus|focusoutblur)$/,F=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,G=function(a){var b=F.exec(a);b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)"));return b},H=function(a,b){var c=a.attributes||{};return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||(c.id||{}).value===b[2])&&(!b[3]||b[3].test((c["class"]||{}).value))},I=function(a){return f.event.special.hover?a:a.replace(B,"mouseenter$1 mouseleave$1")};
f.event={add:function(a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;if(!(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))){d.handler&&(p=d,d=p.handler),d.guid||(d.guid=f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.dispatch.apply(i.elem,arguments):b},i.elem=a),c=f.trim(I(c)).split(" ");for(k=0;k<c.length;k++){l=A.exec(c[k])||[],m=l[1],n=(l[2]||"").split(".").sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,quick:G(g),namespace:n.join(".")},p),r=j[m];if(!r){r=j[m]=[],r.delegateCount=0;if(!s.setup||s.setup.call(a,e,n,i)===!1)a.addEventListener?a.addEventListener(m,i,!1):a.attachEvent&&a.attachEvent("on"+m,i)}s.add&&(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):r.push(o),f.event.global[m]=!0}a=null}},global:{},remove:function(a,b,c,d,e){var g=f.hasData(a)&&f._data(a),h,i,j,k,l,m,n,o,p,q,r,s;if(!!g&&!!(o=g.events)){b=f.trim(I(b||"")).split(" ");for(h=0;h<b.length;h++){i=A.exec(b[h])||[],j=k=i[1],l=i[2];if(!j){for(j in o)f.event.remove(a,j+b[h],c,d,!0);continue}p=f.event.special[j]||{},j=(d?p.delegateType:p.bindType)||j,r=o[j]||[],m=r.length,l=l?new RegExp("(^|\\.)"+l.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(n=0;n<r.length;n++)s=r[n],(e||k===s.origType)&&(!c||c.guid===s.guid)&&(!l||l.test(s.namespace))&&(!d||d===s.selector||d==="**"&&s.selector)&&(r.splice(n--,1),s.selector&&r.delegateCount--,p.remove&&p.remove.call(a,s));r.length===0&&m!==r.length&&((!p.teardown||p.teardown.call(a,l)===!1)&&f.removeEvent(a,j,g.handle),delete o[j])}f.isEmptyObject(o)&&(q=g.handle,q&&(q.elem=null),f.removeData(a,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&&e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;if(E.test(h+f.event.triggered))return;h.indexOf("!")>=0&&(h=h.slice(0,-1),k=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if((!e||f.event.customEvent[h])&&!f.event.global[h])return;c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=k,c.namespace=i.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=h.indexOf(":")<0?"on"+h:"";if(!e){j=f.cache;for(l in j)j[l].events&&j[l].events[h]&&f.event.trigger(c,d,j[l].handle.elem,!0);return}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};if(p.trigger&&p.trigger.apply(e,d)===!1)return;r=[[e,p.bindType||h]];if(!g&&!p.noBubble&&!f.isWindow(e)){s=p.delegateType||h,m=E.test(s+h)?e:e.parentNode,n=null;for(;m;m=m.parentNode)r.push([m,s]),n=m;n&&n===e.ownerDocument&&r.push([n.defaultView||n.parentWindow||a,s])}for(l=0;l<r.length&&!c.isPropagationStopped();l++)m=r[l][0],c.type=r[l][1],q=(f._data(m,"events")||{})[c.type]&&f._data(m,"handle"),q&&q.apply(m,d),q=o&&m[o],q&&f.acceptData(m)&&q.apply(m,d)===!1&&c.preventDefault();c.type=h,!g&&!c.isDefaultPrevented()&&(!p._default||p._default.apply(e.ownerDocument,d)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)&&o&&e[h]&&(h!=="focus"&&h!=="blur"||c.target.offsetWidth!==0)&&!f.isWindow(e)&&(n=e[o],n&&(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&&(e[o]=n));return c.result}},dispatch:function(c){c=f.event.fix(c||a.event);var d=(f._data(this,"events")||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&&!c.namespace,i=[],j,k,l,m,n,o,p,q,r,s,t;g[0]=c,c.delegateTarget=this;if(e&&!c.target.disabled&&(!c.button||c.type!=="click")){m=f(this),m.context=this.ownerDocument||this;for(l=c.target;l!=this;l=l.parentNode||this){o={},q=[],m[0]=l;for(j=0;j<e;j++)r=d[j],s=r.selector,o[s]===b&&(o[s]=r.quick?H(l,r.quick):m.is(s)),o[s]&&q.push(r);q.length&&i.push({elem:l,matches:q})}}d.length>e&&i.push({elem:this,matches:d.slice(e)});for(j=0;j<i.length&&!c.isPropagationStopped();j++){p=i[j],c.currentTarget=p.elem;for(k=0;k<p.matches.length&&!c.isImmediatePropagationStopped();k++){r=p.matches[k];if(h||!c.namespace&&!r.namespace||c.namespace_re&&c.namespace_re.test(r.namespace))c.data=r.data,c.handleObj=r,n=((f.event.special[r.origType]||{}).handle||r.handler).apply(p.elem,g),n!==b&&(c.result=n,n===!1&&(c.preventDefault(),c.stopPropagation()))}}return c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode);return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;a.pageX==null&&d.clientX!=null&&(e=a.target.ownerDocument||c,f=e.documentElement,g=e.body,a.pageX=d.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=d.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?d.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0);return a}},fix:function(a){if(a[f.expando])return a;var d,e,g=a,h=f.event.fixHooks[a.type]||{},i=h.props?this.props.concat(h.props):this.props;a=f.Event(g);for(d=i.length;d;)e=i[--d],a[e]=g[e];a.target||(a.target=g.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=a.ctrlKey);return h.filter?h.filter(a,g):a},special:{ready:{setup:f.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=f.extend(new f.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?f.event.trigger(e,null,b):f.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},f.event.handle=f.event.dispatch,f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!(this instanceof f.Event))return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?K:J):this.type=a,b&&f.extend(this,b),this.timeStamp=a&&a.timeStamp||f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=K;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=K;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=K,this.stopPropagation()},isDefaultPrevented:J,isPropagationStopped:J,isImmediatePropagationStopped:J},f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c=this,d=a.relatedTarget,e=a.handleObj,g=e.selector,h;if(!d||d!==c&&!f.contains(c,d))a.type=e.origType,h=e.handler.apply(this,arguments),a.type=b;return h}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(){if(f.nodeName(this,"form"))return!1;f.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=f.nodeName(c,"input")||f.nodeName(c,"button")?c.form:b;d&&!d._submit_attached&&(f.event.add(d,"submit._submit",function(a){this.parentNode&&!a.isTrigger&&f.event.simulate("submit",this.parentNode,a,!0)}),d._submit_attached=!0)})},teardown:function(){if(f.nodeName(this,"form"))return!1;f.event.remove(this,"._submit")}}),f.support.changeBubbles||(f.event.special.change={setup:function(){if(z.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")f.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),f.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1,f.event.simulate("change",this,a,!0))});return!1}f.event.add(this,"beforeactivate._change",function(a){var b=a.target;z.test(b.nodeName)&&!b._change_attached&&(f.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&f.event.simulate("change",this.parentNode,a,!0)}),b._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){f.event.remove(this,"._change");return z.test(this.nodeName)}}),f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){var d=0,e=function(a){f.event.simulate(b,a.target,f.event.fix(a),!0)};f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.fn.extend({on:function(a,c,d,e,g){var h,i;if(typeof a=="object"){typeof c!="string"&&(d=c,c=b);for(i in a)this.on(i,c,d,a[i],g);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=J;else if(!e)return this;g===1&&(h=e,e=function(a){f().off(a);return h.apply(this,arguments)},e.guid=h.guid||(h.guid=f.guid++));return this.each(function(){f.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on.call(this,a,b,c,d,1)},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;f(a.delegateTarget).off(e.namespace?e.type+"."+e.namespace:e.type,e.selector,e.handler);return this}if(typeof a=="object"){for(var g in a)this.off(g,c,a[g]);return this}if(c===!1||typeof c=="function")d=c,c=b;d===!1&&(d=J);return this.each(function(){f.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){f(this.context).on(a,this.selector,b,c);return this},die:function(a,b){f(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f._data(this,"lastToggle"+a.guid)||0)%d;f._data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.on(b,null,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0),C.test(b)&&(f.event.fixHooks[b]=f.event.keyHooks),D.test(b)&&(f.event.fixHooks[b]=f.event.mouseHooks)}),function(){function x(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}if(j.nodeType===1){g||(j[d]=c,j.sizset=h);if(typeof b!="string"){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length>0){k=j;break}}j=j[a]}e[h]=k}}}function w(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}j.nodeType===1&&!g&&(j[d]=c,j.sizset=h);if(j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}e[h]=k}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d="sizcache"+(Math.random()+"").replace(".",""),e=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){i=!1;return 0});var m=function(b,d,e,f){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return e;var i,j,k,l,n,q,r,t,u=!0,v=m.isXML(d),w=[],x=b;do{a.exec(""),i=a.exec(x);if(i){x=i[3],w.push(i[1]);if(i[2]){l=i[3];break}}}while(i);if(w.length>1&&p.exec(b))if(w.length===2&&o.relative[w[0]])j=y(w[0]+w[1],d,f);else{j=o.relative[w[0]]?[d]:m(w.shift(),d);while(w.length)b=w.shift(),o.relative[b]&&(b+=w.shift()),j=y(b,j,f)}else{!f&&w.length>1&&d.nodeType===9&&!v&&o.match.ID.test(w[0])&&!o.match.ID.test(w[w.length-1])&&(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr,n.set)[0]:n.set[0]);if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length===1&&(w[0]==="~"||w[0]==="+")&&d.parentNode?d.parentNode:d,v),j=n.expr?m.filter(n.expr,n.set):n.set,w.length>0?k=s(j):u=!1;while(w.length)q=w.pop(),r=q,o.relative[q]?r=w.pop():q="",r==null&&(r=d),o.relative[q](k,r,v)}else k=w=[]}k||(k=j),k||m.error(q||b);if(g.call(k)==="[object Array]")if(!u)e.push.apply(e,k);else if(d&&d.nodeType===1)for(t=0;k[t]!=null;t++)k[t]&&(k[t]===!0||k[t].nodeType===1&&m.contains(d,k[t]))&&e.push(j[t]);else for(t=0;k[t]!=null;t++)k[t]&&k[t].nodeType===1&&e.push(j[t]);else s(k,e);l&&(m(l,h,e,f),m.uniqueSort(e));return e};m.uniqueSort=function(a){if(u){h=i,a.sort(u);if(h)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length>0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)return[];for(e=0,f=o.order.length;e<f;e++){h=o.order[e];if(g=o.leftMatch[h].exec(a)){i=g[1],g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(j,""),d=o.find[h](g,b,c);if(d!=null){a=a.replace(o.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);while(a&&c.length){for(h in o.filter)if((f=o.leftMatch[h].exec(a))!=null&&f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);if(l.substr(l.length-1)==="\\")continue;s===r&&(r=[]);if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);if(!f)g=i=!0;else if(f===!0)continue}if(f)for(n=0;(j=s[n])!=null;n++)j&&(i=k(j,f,n,s),p=e^i,d&&i!=null?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0));if(i!==b){d||(s=r),a=a.replace(o.match[h],"");if(!g)return[];break}}if(a===q)if(g==null)m.error(a);else break;q=a}return s},m.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)};var n=m.getText=function(a){var b,c,d=a.nodeType,e="";if(d){if(d===1||d===9){if(typeof a.textContent=="string")return a.textContent;if(typeof a.innerText=="string")return a.innerText.replace(k,"");for(a=a.firstChild;a;a=a.nextSibling)e+=n(a)}else if(d===3||d===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&&(e+=n(c));return e},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!l.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&m.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!l.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&m.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(j,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(j,"")},TAG:function(a,b){return a[1].replace(j,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&m.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(j,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=m(b[3],null,null,c);else{var g=m.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||n([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c,e,f,g,h,i,j,k=b[1],l=a;switch(k){case"only":case"first":while(l=l.previousSibling)if(l.nodeType===1)return!1;if(k==="first")return!0;l=a;case"last":while(l=l.nextSibling)if(l.nodeType===1)return!1;return!0;case"nth":c=b[2],e=b[3];if(c===1&&e===0)return!0;f=b[0],g=a.parentNode;if(g&&(g[d]!==f||!a.nodeIndex)){i=0;for(l=g.firstChild;l;l=l.nextSibling)l.nodeType===1&&(l.nodeIndex=++i);g[d]=f}j=a.nodeIndex-e;return c===0?j===0:j%c===0&&j/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":!f&&m.attr?d!=null:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(f)return f(a,c,b,d)}}},p=o.match.POS,q=function(a,b){return"\\"+(b-0+1)};for(var r in o.match)o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q));var s=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(t){s=function(a,b){var c=0,d=b||[];if(g.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var u,v;c.documentElement.compareDocumentPosition?u=function(a,b){if(a===b){h=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(u=function(a,b){if(a===b){h=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v(a,b);if(!g)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(o.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=m,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){m=function(b,e,f,g){e=e||c;if(!g&&!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return s(e.getElementsByTagName(b),f);if(h[2]&&o.find.CLASS&&e.getElementsByClassName)return s(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return s([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return s([],f);if(i.id===h[3])return s([i],f)}try{return s(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var k=e,l=e.getAttribute("id"),n=l||d,p=e.parentNode,q=/^\s*[+~]/.test(b);l?n=n.replace(/'/g,"\\$&"):e.setAttribute("id",n),q&&p&&(e=e.parentNode);try{if(!q||p)return s(e.querySelectorAll("[id='"+n+"'] "+b),f)}catch(r){}finally{l||k.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)m[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}m.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!m.isXML(a))try{if(e||!o.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return m(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?m.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?m.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:m.contains=function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var y=function(a,b,c){var d,e=[],f="",g=b.nodeType?[b]:b;while(d=o.match.PSEUDO.exec(a))f+=d[0],a=a.replace(o.match.PSEUDO,"");a=o.relative[a]?a+"*":a;for(var h=0,i=g.length;h<i;h++)m(a,g[h],e,c);return m.filter(f,e)};m.attr=f.attr,m.selectors.attrMap={},f.find=m,f.expr=m.selectors,f.expr[":"]=f.expr.filters,f.unique=m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains}();var L=/Until$/,M=/^(?:parents|prevUntil|prevAll)/,N=/,/,O=/^.[^:#\[\.,]*$/,P=Array.prototype.slice,Q=f.expr.match.POS,R={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(T(this,a,!1),"not",a)},filter:function(a){return this.pushStack(T(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?Q.test(a)?f(a,this.context).index(this[0])>=0:f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h=1;while(g&&g.ownerDocument&&g!==b){for(d=0;d<a.length;d++)f(g).is(a[d])&&c.push({selector:a[d],elem:g,level:h});g=g.parentNode,h++}return c}var i=Q.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(i?i.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(S(c[0])||S(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling(a.parentNode.firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c);L.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!R[a]?f.unique(e):e,(this.length>1||N.test(d))&&M.test(a)&&(e=e.reverse());return this.pushStack(e,a,P.call(arguments).join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var V="abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|style)/i,bb=/<(?:script|object|embed|option|style)/i,bc=new RegExp("<(?:"+V+")","i"),bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bh=U(c);bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){if(f.isFunction(a))return this.each(function(b){var c=f(this);c.text(a.call(this,b,c.text()))});if(typeof a!="object"&&a!==b)return this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a));return f.text(this)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=f.isFunction(a);return this.each(function(c){f(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f.clean(arguments));return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function()
{for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){if(a===b)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!bg[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");try{for(var c=0,d=this.length;c<d;c++)this[c].nodeType===1&&(f.cleanData(this[c].getElementsByTagName("*")),this[c].innerHTML=a)}catch(e){this.empty().append(a)}}else f.isFunction(a)?this.each(function(b){var c=f(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bi(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,bp)}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof j=="string"&&j.length<512&&i===c&&j.charAt(0)==="<"&&!bb.test(j)&&(f.support.checkClone||!bd.test(j))&&(f.support.html5Clone||!bc.test(j))&&(g=!0,h=f.fragments[j],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[j]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d,e,g,h=f.support.html5Clone||!bc.test("<"+a.nodeName)?a.cloneNode(!0):bo(a);if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bk(a,h),d=bl(a),e=bl(h);for(g=0;d[g];++g)e[g]&&bk(d[g],e[g])}if(b){bj(a,h);if(c){d=bl(a),e=bl(h);for(g=0;d[g];++g)bj(d[g],e[g])}}d=e=null;return h},clean:function(a,b,d,e){var g;b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);var h=[],i;for(var j=0,k;(k=a[j])!=null;j++){typeof k=="number"&&(k+="");if(!k)continue;if(typeof k=="string")if(!_.test(k))k=b.createTextNode(k);else{k=k.replace(Y,"<$1></$2>");var l=(Z.exec(k)||["",""])[1].toLowerCase(),m=bg[l]||bg._default,n=m[0],o=b.createElement("div");b===c?bh.appendChild(o):U(b).appendChild(o),o.innerHTML=m[1]+k+m[2];while(n--)o=o.lastChild;if(!f.support.tbody){var p=$.test(k),q=l==="table"&&!p?o.firstChild&&o.firstChild.childNodes:m[1]==="<table>"&&!p?o.childNodes:[];for(i=q.length-1;i>=0;--i)f.nodeName(q[i],"tbody")&&!q[i].childNodes.length&&q[i].parentNode.removeChild(q[i])}!f.support.leadingWhitespace&&X.test(k)&&o.insertBefore(b.createTextNode(X.exec(k)[0]),o.firstChild),k=o.childNodes}var r;if(!f.support.appendChecked)if(k[0]&&typeof (r=k.length)=="number")for(i=0;i<r;i++)bn(k[i]);else bn(k);k.nodeType?h.push(k):h=f.merge(h,k)}if(d){g=function(a){return!a.type||be.test(a.type)};for(j=0;h[j];j++)if(e&&f.nodeName(h[j],"script")&&(!h[j].type||h[j].type.toLowerCase()==="text/javascript"))e.push(h[j].parentNode?h[j].parentNode.removeChild(h[j]):h[j]);else{if(h[j].nodeType===1){var s=f.grep(h[j].getElementsByTagName("script"),g);h.splice.apply(h,[j+1,0].concat(s))}d.appendChild(h[j])}}return h},cleanData:function(a){var b,c,d=f.cache,e=f.event.special,g=f.support.deleteExpando;for(var h=0,i;(i=a[h])!=null;h++){if(i.nodeName&&f.noData[i.nodeName.toLowerCase()])continue;c=i[f.expando];if(c){b=d[c];if(b&&b.events){for(var j in b.events)e[j]?f.event.remove(i,j):f.removeEvent(i,j,b.handle);b.handle&&(b.handle.elem=null)}g?delete i[f.expando]:i.removeAttribute&&i.removeAttribute(f.expando),delete d[c]}}}});var bq=/alpha\([^)]*\)/i,br=/opacity=([^)]*)/,bs=/([A-Z]|^ms)/g,bt=/^-?\d+(?:px)?$/i,bu=/^-?\d/,bv=/^([\-+])=([\-+.\de]+)/,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Left","Right"],by=["Top","Bottom"],bz,bA,bB;f.fn.css=function(a,c){if(arguments.length===2&&c===b)return this;return f.access(this,a,c,!0,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)})},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bz(a,"opacity","opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h==="string"&&(g=bv.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(bz)return bz(a,c)},swap:function(a,b,c){var d={};for(var e in b)d[e]=a.style[e],a.style[e]=b[e];c.call(a);for(e in b)a.style[e]=d[e]}}),f.curCSS=f.css,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){var e;if(c){if(a.offsetWidth!==0)return bC(a,b,d);f.swap(a,bw,function(){e=bC(a,b,d)});return e}},set:function(a,b){if(!bt.test(b))return b;b=parseFloat(b);if(b>=0)return b+"px"}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return br.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bq,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bq.test(g)?g.replace(bq,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){var c;f.swap(a,{display:"inline-block"},function(){b?c=bz(a,"margin-right","marginRight"):c=a.style.marginRight});return c}})}),c.defaultView&&c.defaultView.getComputedStyle&&(bA=function(a,b){var c,d,e;b=b.replace(bs,"-$1").toLowerCase(),(d=a.ownerDocument.defaultView)&&(e=d.getComputedStyle(a,null))&&(c=e.getPropertyValue(b),c===""&&!f.contains(a.ownerDocument.documentElement,a)&&(c=f.style(a,b)));return c}),c.documentElement.currentStyle&&(bB=function(a,b){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;f===null&&g&&(e=g[b])&&(f=e),!bt.test(f)&&bu.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left=b==="fontSize"?"1em":f||0,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d));return f===""?"auto":f}),bz=bA||bB,f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style&&a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)});var bD=/%20/g,bE=/\[\]$/,bF=/\r?\n/g,bG=/#.*$/,bH=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bI=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bJ=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bK=/^(?:GET|HEAD)$/,bL=/^\/\//,bM=/\?/,bN=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bO=/^(?:select|textarea)/i,bP=/\s+/,bQ=/([?&])_=[^&]*/,bR=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bS=f.fn.load,bT={},bU={},bV,bW,bX=["*/"]+["*"];try{bV=e.href}catch(bY){bV=c.createElement("a"),bV.href="",bV=bV.href}bW=bR.exec(bV.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bS)return bS.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bN,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bO.test(this.nodeName)||bI.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bF,"\r\n")}}):{name:b.name,value:c.replace(bF,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.on(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?b_(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),b_(a,b);return a},ajaxSettings:{url:bV,isLocal:bJ.test(bW[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bX},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bZ(bT),ajaxTransport:bZ(bU),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?cb(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=cc(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.fireWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f.Callbacks("once memory"),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bH.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.add,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bG,"").replace(bL,bW[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bP),d.crossDomain==null&&(r=bR.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bW[1]&&r[2]==bW[2]&&(r[3]||(r[1]==="http:"?80:443))==(bW[3]||(bW[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),b$(bT,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bK.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bM.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bQ,"$1_="+x);d.url=y+(y===d.url?(bM.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bX+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=b$(bU,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){if(s<2)w(-1,z);else throw z}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)ca(g,a[g],c,e);return d.join("&").replace(bD,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cd=f.now(),ce=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cd++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=b.contentType==="application/x-www-form-urlencoded"&&typeof b.data=="string";if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(ce.test(b.url)||e&&ce.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(ce,l),b.url===j&&(e&&(k=k.replace(ce,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var cf=a.ActiveXObject?function(){for(var a in ch)ch[a](0,1)}:!1,cg=0,ch;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ci()||cj()}:ci,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,cf&&delete ch[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n),m.text=h.responseText;try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cg,cf&&(ch||(ch={},f(a).unload(cf)),ch[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var ck={},cl,cm,cn=/^(?:toggle|show|hide)$/,co=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,cp,cq=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cr;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(cu("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),e===""&&f.css(d,"display")==="none"&&f._data(d,"olddisplay",cv(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(cu("hide",3),a,b,c);var d,e,g=0,h=this.length;for(;g<h;g++)d=this[g],d.style&&(e=f.css(d,"display"),e!=="none"&&!f._data(d,"olddisplay")&&f._data(d,"olddisplay",e));for(g=0;g<h;g++)this[g].style&&(this[g].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(cu("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){function g(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]),h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(!f.support.inlineBlockNeedsLayout||cv(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)j=new f.fx(this,b,i),h=a[i],cn.test(h)?(o=f._data(this,"toggle"+i)||(h==="toggle"?d?"show":"hide":0),o?(f._data(this,"toggle"+i,o==="show"?"hide":"show"),j[o]()):j[h]()):(k=co.exec(h),l=j.cur(),k?(m=parseFloat(k[2]),n=k[3]||(f.cssNumber[i]?"":"px"),n!=="px"&&(f.style(this,i,(m||1)+n),l=(m||1)/j.cur()*l,f.style(this,i,l+n)),k[1]&&(m=(k[1]==="-="?-1:1)*m+l),j.custom(l,m,n)):j.custom(l,h,""));return!0}var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return e.queue===!1?this.each(g):this.queue(e.queue,g)},stop:function(a,c,d){typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]);return this.each(function(){function h(a,b,c){var e=b[c];f.removeData(a,c,!0),e.stop(d)}var b,c=!1,e=f.timers,g=f._data(this);d||f._unmark(!0,this);if(a==null)for(b in g)g[b]&&g[b].stop&&b.indexOf(".run")===b.length-4&&h(this,g,b);else g[b=a+".run"]&&g[b].stop&&h(this,g,b);for(b=e.length;b--;)e[b].elem===this&&(a==null||e[b].queue===a)&&(d?e[b](!0):e[b].saveState(),c=!0,e.splice(b,1));(!d||!c)&&f.dequeue(this,a)})}}),f.each({slideDown:cu("show",1),slideUp:cu("hide",1),slideToggle:cu("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue?f.dequeue(this,d.queue):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a,b,c,d){return c+d*a},swing:function(a,b,c,d){return(-Math.cos(a*Math.PI)/2+.5)*d+c}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,c,d){function h(a){return e.step(a)}var e=this,g=f.fx;this.startTime=cr||cs(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(f.cssNumber[this.prop]?"":"px"),h.queue=this.options.queue,h.elem=this.elem,h.saveState=function(){e.options.hide&&f._data(e.elem,"fxshow"+e.prop)===b&&f._data(e.elem,"fxshow"+e.prop,e.start)},h()&&f.timers.push(h)&&!cp&&(cp=setInterval(g.tick,g.interval))},show:function(){var a=f._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||f.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f._data(this.elem,"fxshow"+this.prop)||f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b,c,d,e=cr||cs(),g=!0,h=this.elem,i=this.options;if(a||e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties)i.animatedProperties[b]!==!0&&(g=!1);if(g){i.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){h.style["overflow"+b]=i.overflow[a]}),i.hide&&f(h).hide();if(i.hide||i.show)for(b in i.animatedProperties)f.style(h,b,i.orig[b]),f.removeData(h,"fxshow"+b,!0),f.removeData(h,"toggle"+b,!0);d=i.complete,d&&(i.complete=!1,d.call(h))}return!1}i.duration==Infinity?this.now=e:(c=e-this.startTime,this.state=c/i.duration,this.pos=f.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){var a,b=f.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||f.fx.stop()},interval:13,stop:function(){clearInterval(cp),cp=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}}),f.each(["width","height"],function(a,b){f.fx.step[b]=function(a){f.style(a.elem,b,Math.max(0,a.now)+a.unit)}}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?f.fn.offset=function(a){var b=this[0],c;if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);try{c=b.getBoundingClientRect()}catch(d){}var e=b.ownerDocument,g=e.documentElement;if(!c||!f.contains(g,b))return c?{top:c.top,left:c.left}:{top:0,left:0};var h=e.body,i=cy(e),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0,l=i.pageYOffset||f.support.boxModel&&g.scrollTop||h.scrollTop,m=i.pageXOffset||f.support.boxModel&&g.scrollLeft||h.scrollLeft,n=c.top+l-j,o=c.left+m-k;return{top:n,left:o}}:f.fn.offset=function(a){var b=this[0];if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);var c,d=b.offsetParent,e=b,g=b.ownerDocument,h=g.documentElement,i=g.body,j=g.defaultView,k=j?j.getComputedStyle(b,null):b.currentStyle,l=b.offsetTop,m=b.offsetLeft;while((b=b.parentNode)&&b!==i&&b!==h){if(f.support.fixedPosition&&k.position==="fixed")break;c=j?j.getComputedStyle(b,null):b.currentStyle,l-=b.scrollTop,m-=b.scrollLeft,b===d&&(l+=b.offsetTop,m+=b.offsetLeft,f.support.doesNotAddBorder&&(!f.support.doesAddBorderForTableAndCells||!cw.test(b.nodeName))&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),e=d,d=b.offsetParent),f.support.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),k=c}if(k.position==="relative"||k.position==="static")l+=i.offsetTop,m+=i.offsetLeft;f.support.fixedPosition&&k.position==="fixed"&&(l+=Math.max(h.scrollTop,i.scrollTop),m+=Math.max(h.scrollLeft,i.scrollLeft));return{top:l,left:m}},f.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each(["Left","Top"],function(a,c){var d="scroll"+c;f.fn[d]=function(c){var e,g;if(c===b){e=this[0];if(!e)return null;g=cy(e);return g?"pageXOffset"in g?g[a?"pageYOffset":"pageXOffset"]:f.support.boxModel&&g.document.documentElement[d]||g.document.body[d]:e[d]}return this.each(function(){g=cy(this),g?g.scrollTo(a?f(g).scrollLeft():c,a?c:f(g).scrollTop()):this[d]=c})}}),f.each(["Height","Width"],function(a,c){var d=c.toLowerCase();f.fn["inner"+c]=function(){var a=this[0];return a?a.style?parseFloat(f.css(a,d,"padding")):this[d]():null},f.fn["outer"+c]=function(a){var b=this[0];return b?b.style?parseFloat(f.css(b,d,a?"margin":"border")):this[d]():null},f.fn[d]=function(a){var e=this[0];if(!e)return a==null?null:this;if(f.isFunction(a))return this.each(function(b){var c=f(this);c[d](a.call(this,b,c[d]()))});if(f.isWindow(e)){var g=e.document.documentElement["client"+c],h=e.document.body;return e.document.compatMode==="CSS1Compat"&&g||h&&h["client"+c]||g}if(e.nodeType===9)return Math.max(e.documentElement["client"+c],e.body["scroll"+c],e.documentElement["scroll"+c],e.body["offset"+c],e.documentElement["offset"+c]);if(a===b){var i=f.css(e,d),j=parseFloat(i);return f.isNumeric(j)?j:i}return this.css(d,typeof a=="string"?a:a+"px")}}),a.jQuery=a.$=f,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return f})})(window);
jQuery.noConflict();

;/*!
 * jQuery UI 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI
 */
(function(c,j){function k(a,b){var d=a.nodeName.toLowerCase();if("area"===d){b=a.parentNode;d=b.name;if(!a.href||!d||b.nodeName.toLowerCase()!=="map")return false;a=c("img[usemap=#"+d+"]")[0];return!!a&&l(a)}return(/input|select|textarea|button|object/.test(d)?!a.disabled:"a"==d?a.href||b:b)&&l(a)}function l(a){return!c(a).parents().andSelf().filter(function(){return c.curCSS(this,"visibility")==="hidden"||c.expr.filters.hidden(this)}).length}c.ui=c.ui||{};if(!c.ui.version){c.extend(c.ui,{version:"1.8.16",
keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}});c.fn.extend({propAttr:c.fn.prop||c.fn.attr,_focus:c.fn.focus,focus:function(a,b){return typeof a==="number"?this.each(function(){var d=
this;setTimeout(function(){c(d).focus();b&&b.call(d)},a)}):this._focus.apply(this,arguments)},scrollParent:function(){var a;a=c.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(c.curCSS(this,"position",1))&&/(auto|scroll)/.test(c.curCSS(this,"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(c.curCSS(this,
"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0);return/fixed/.test(this.css("position"))||!a.length?c(document):a},zIndex:function(a){if(a!==j)return this.css("zIndex",a);if(this.length){a=c(this[0]);for(var b;a.length&&a[0]!==document;){b=a.css("position");if(b==="absolute"||b==="relative"||b==="fixed"){b=parseInt(a.css("zIndex"),10);if(!isNaN(b)&&b!==0)return b}a=a.parent()}}return 0},disableSelection:function(){return this.bind((c.support.selectstart?"selectstart":
"mousedown")+".ui-disableSelection",function(a){a.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}});c.each(["Width","Height"],function(a,b){function d(f,g,m,n){c.each(e,function(){g-=parseFloat(c.curCSS(f,"padding"+this,true))||0;if(m)g-=parseFloat(c.curCSS(f,"border"+this+"Width",true))||0;if(n)g-=parseFloat(c.curCSS(f,"margin"+this,true))||0});return g}var e=b==="Width"?["Left","Right"]:["Top","Bottom"],h=b.toLowerCase(),i={innerWidth:c.fn.innerWidth,innerHeight:c.fn.innerHeight,
outerWidth:c.fn.outerWidth,outerHeight:c.fn.outerHeight};c.fn["inner"+b]=function(f){if(f===j)return i["inner"+b].call(this);return this.each(function(){c(this).css(h,d(this,f)+"px")})};c.fn["outer"+b]=function(f,g){if(typeof f!=="number")return i["outer"+b].call(this,f);return this.each(function(){c(this).css(h,d(this,f,true,g)+"px")})}});c.extend(c.expr[":"],{data:function(a,b,d){return!!c.data(a,d[3])},focusable:function(a){return k(a,!isNaN(c.attr(a,"tabindex")))},tabbable:function(a){var b=c.attr(a,
"tabindex"),d=isNaN(b);return(d||b>=0)&&k(a,!d)}});c(function(){var a=document.body,b=a.appendChild(b=document.createElement("div"));c.extend(b.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0});c.support.minHeight=b.offsetHeight===100;c.support.selectstart="onselectstart"in b;a.removeChild(b).style.display="none"});c.extend(c.ui,{plugin:{add:function(a,b,d){a=c.ui[a].prototype;for(var e in d){a.plugins[e]=a.plugins[e]||[];a.plugins[e].push([b,d[e]])}},call:function(a,b,d){if((b=a.plugins[b])&&
a.element[0].parentNode)for(var e=0;e<b.length;e++)a.options[b[e][0]]&&b[e][1].apply(a.element,d)}},contains:function(a,b){return document.compareDocumentPosition?a.compareDocumentPosition(b)&16:a!==b&&a.contains(b)},hasScroll:function(a,b){if(c(a).css("overflow")==="hidden")return false;b=b&&b==="left"?"scrollLeft":"scrollTop";var d=false;if(a[b]>0)return true;a[b]=1;d=a[b]>0;a[b]=0;return d},isOverAxis:function(a,b,d){return a>b&&a<b+d},isOver:function(a,b,d,e,h,i){return c.ui.isOverAxis(a,d,h)&&
c.ui.isOverAxis(b,e,i)}})}})(jQuery);

;/*!
 * jQuery UI Widget 1.8.10
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Widget
 */
(function( $, undefined ) {

// jQuery 1.4+
if ( $.cleanData ) {
	var _cleanData = $.cleanData;
	$.cleanData = function( elems ) {
		for ( var i = 0, elem; (elem = elems[i]) != null; i++ ) {
			$( elem ).triggerHandler( "remove" );
		}
		_cleanData( elems );
	};
} else {
	var _remove = $.fn.remove;
	$.fn.remove = function( selector, keepData ) {
		return this.each(function() {
			if ( !keepData ) {
				if ( !selector || $.filter( selector, [ this ] ).length ) {
					$( "*", this ).add( [ this ] ).each(function() {
						$( this ).triggerHandler( "remove" );
					});
				}
			}
			return _remove.call( $(this), selector, keepData );
		});
	};
}

$.widget = function( name, base, prototype ) {
	var namespace = name.split( "." )[ 0 ],
		fullName;
	name = name.split( "." )[ 1 ];
	fullName = namespace + "-" + name;

	if ( !prototype ) {
		prototype = base;
		base = $.Widget;
	}

	// create selector for plugin
	$.expr[ ":" ][ fullName ] = function( elem ) {
		return !!$.data( elem, name );
	};

	$[ namespace ] = $[ namespace ] || {};
	$[ namespace ][ name ] = function( options, element ) {
		// allow instantiation without initializing for simple inheritance
		if ( arguments.length ) {
			this._createWidget( options, element );
		}
	};

	var basePrototype = new base();
	// we need to make the options hash a property directly on the new instance
	// otherwise we'll modify the options hash on the prototype that we're
	// inheriting from
//	$.each( basePrototype, function( key, val ) {
//		if ( $.isPlainObject(val) ) {
//			basePrototype[ key ] = $.extend( {}, val );
//		}
//	});
	basePrototype.options = $.extend( true, {}, basePrototype.options );
	$[ namespace ][ name ].prototype = $.extend( true, basePrototype, {
		namespace: namespace,
		widgetName: name,
		widgetEventPrefix: $[ namespace ][ name ].prototype.widgetEventPrefix || name,
		widgetBaseClass: fullName
	}, prototype );

	$.widget.bridge( name, $[ namespace ][ name ] );
};

$.widget.bridge = function( name, object ) {
	$.fn[ name ] = function( options ) {
		var isMethodCall = typeof options === "string",
			args = Array.prototype.slice.call( arguments, 1 ),
			returnValue = this;

		// allow multiple hashes to be passed on init
		options = !isMethodCall && args.length ?
			$.extend.apply( null, [ true, options ].concat(args) ) :
			options;

		// prevent calls to internal methods
		if ( isMethodCall && options.charAt( 0 ) === "_" ) {
			return returnValue;
		}

		if ( isMethodCall ) {
			this.each(function() {
				var instance = $.data( this, name ),
					methodValue = instance && $.isFunction( instance[options] ) ?
						instance[ options ].apply( instance, args ) :
						instance;
				// TODO: add this back in 1.9 and use $.error() (see #5972)
//				if ( !instance ) {
//					throw "cannot call methods on " + name + " prior to initialization; " +
//						"attempted to call method '" + options + "'";
//				}
//				if ( !$.isFunction( instance[options] ) ) {
//					throw "no such method '" + options + "' for " + name + " widget instance";
//				}
//				var methodValue = instance[ options ].apply( instance, args );
				if ( methodValue !== instance && methodValue !== undefined ) {
					returnValue = methodValue;
					return false;
				}
			});
		} else {
			this.each(function() {
				var instance = $.data( this, name );
				if ( instance ) {
					instance.option( options || {} )._init();
				} else {
					$.data( this, name, new object( options, this ) );
				}
			});
		}

		return returnValue;
	};
};

$.Widget = function( options, element ) {
	// allow instantiation without initializing for simple inheritance
	if ( arguments.length ) {
		this._createWidget( options, element );
	}
};

$.Widget.prototype = {
	widgetName: "widget",
	widgetEventPrefix: "",
	options: {
		disabled: false
	},
	_createWidget: function( options, element ) {
		// $.widget.bridge stores the plugin instance, but we do it anyway
		// so that it's stored even before the _create function runs
		$.data( element, this.widgetName, this );
		this.element = $( element );
		this.options = $.extend( true, {},
			this.options,
			this._getCreateOptions(),
			options );

		var self = this;
		this.element.bind( "remove." + this.widgetName, function() {
			self.destroy();
		});

		this._create();
		this._trigger( "create" );
		this._init();
	},
	_getCreateOptions: function() {
		return $.metadata && $.metadata.get( this.element[0] )[ this.widgetName ];
	},
	_create: function() {},
	_init: function() {},

	destroy: function() {
		this.element
			.unbind( "." + this.widgetName )
			.removeData( this.widgetName );
		this.widget()
			.unbind( "." + this.widgetName )
			.removeAttr( "aria-disabled" )
			.removeClass(
				this.widgetBaseClass + "-disabled " +
				"ui-state-disabled" );
	},

	widget: function() {
		return this.element;
	},

	option: function( key, value ) {
		var options = key;

		if ( arguments.length === 0 ) {
			// don't return a reference to the internal hash
			return $.extend( {}, this.options );
		}

		if  (typeof key === "string" ) {
			if ( value === undefined ) {
				return this.options[ key ];
			}
			options = {};
			options[ key ] = value;
		}

		this._setOptions( options );

		return this;
	},
	_setOptions: function( options ) {
		var self = this;
		$.each( options, function( key, value ) {
			self._setOption( key, value );
		});

		return this;
	},
	_setOption: function( key, value ) {
		this.options[ key ] = value;

		if ( key === "disabled" ) {
			this.widget()
				[ value ? "addClass" : "removeClass"](
					this.widgetBaseClass + "-disabled" + " " +
					"ui-state-disabled" )
				.attr( "aria-disabled", value );
		}

		return this;
	},

	enable: function() {
		return this._setOption( "disabled", false );
	},
	disable: function() {
		return this._setOption( "disabled", true );
	},

	_trigger: function( type, event, data ) {
		var callback = this.options[ type ];

		event = $.Event( event );
		event.type = ( type === this.widgetEventPrefix ?
			type :
			this.widgetEventPrefix + type ).toLowerCase();
		data = data || {};

		// copy original event properties over to the new event
		// this would happen if we could call $.event.fix instead of $.Event
		// but we don't have a way to force an event to be fixed multiple times
		if ( event.originalEvent ) {
			for ( var i = $.event.props.length, prop; i; ) {
				prop = $.event.props[ --i ];
				event[ prop ] = event.originalEvent[ prop ];
			}
		}

		this.element.trigger( event, data );

		return !( $.isFunction(callback) &&
			callback.call( this.element[0], event, data ) === false ||
			event.isDefaultPrevented() );
	}
};

})( jQuery );

;/*
 * jQuery UI Accordion 1.8.12
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Accordion
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 */
(function( $, undefined ) {

$.widget( "ui.accordion", {
	options: {
		active: 0,
		animated: "slide",
		autoHeight: true,
		clearStyle: false,
		collapsible: false,
		event: "click",
		fillSpace: false,
		header: "> li > :first-child,> :not(li):even",
		icons: {
			header: "ui-icon-triangle-1-e",
			headerSelected: "ui-icon-triangle-1-s"
		},
		navigation: false,
		navigationFilter: function() {
			return this.href.toLowerCase() === location.href.toLowerCase();
		}
	},

	_create: function() {
		var self = this,
			options = self.options;

		self.running = 0;

		self.element
			.addClass( "ui-accordion ui-widget ui-helper-reset" )
			// in lack of child-selectors in CSS
			// we need to mark top-LIs in a UL-accordion for some IE-fix
			.children( "li" )
				.addClass( "ui-accordion-li-fix" );

		self.headers = self.element.find( options.header )
			.addClass( "ui-accordion-header ui-helper-reset ui-state-default ui-corner-all" )
			.bind( "mouseenter.accordion", function() {
				if ( options.disabled ) {
					return;
				}
				$( this ).addClass( "ui-state-hover" );
			})
			.bind( "mouseleave.accordion", function() {
				if ( options.disabled ) {
					return;
				}
				$( this ).removeClass( "ui-state-hover" );
			})
			.bind( "focus.accordion", function() {
				if ( options.disabled ) {
					return;
				}
				$( this ).addClass( "ui-state-focus" );
			})
			.bind( "blur.accordion", function() {
				if ( options.disabled ) {
					return;
				}
				$( this ).removeClass( "ui-state-focus" );
			});

		self.headers.next()
			.addClass( "ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom" );

		if ( options.navigation ) {
			var current = self.element.find( "a" ).filter( options.navigationFilter ).eq( 0 );
			if ( current.length ) {
				var header = current.closest( ".ui-accordion-header" );
				if ( header.length ) {
					// anchor within header
					self.active = header;
				} else {
					// anchor within content
					self.active = current.closest( ".ui-accordion-content" ).prev();
				}
			}
		}

		self.active = self._findActive( self.active || options.active )
			.addClass( "ui-state-default ui-state-active" )
			.toggleClass( "ui-corner-all" )
			.toggleClass( "ui-corner-top" );
		self.active.next().addClass( "ui-accordion-content-active" );

		self._createIcons();
		self.resize();
		
		// ARIA
		self.element.attr( "role", "tablist" );

		self.headers
			.attr( "role", "tab" )
			.bind( "keydown.accordion", function( event ) {
				return self._keydown( event );
			})
			.next()
				.attr( "role", "tabpanel" );

		self.headers
			.not( self.active || "" )
			.attr({
				"aria-expanded": "false",
				"aria-selected": "false",
				tabIndex: -1
			})
			.next()
				.hide();

		// make sure at least one header is in the tab order
		if ( !self.active.length ) {
			self.headers.eq( 0 ).attr( "tabIndex", 0 );
		} else {
			self.active
				.attr({
					"aria-expanded": "true",
					"aria-selected": "true",
					tabIndex: 0
				});
		}

		// only need links in tab order for Safari
		if ( !$.browser.safari ) {
			self.headers.find( "a" ).attr( "tabIndex", -1 );
		}

		if ( options.event ) {
			self.headers.bind( options.event.split(" ").join(".accordion ") + ".accordion", function(event) {
				self._clickHandler.call( self, event, this );
				event.preventDefault();
			});
		}
	},

	_createIcons: function() {
		var options = this.options;
		if ( options.icons ) {
			$( "<span></span>" )
				.addClass( "ui-icon " + options.icons.header )
				.prependTo( this.headers );
			this.active.children( ".ui-icon" )
				.toggleClass(options.icons.header)
				.toggleClass(options.icons.headerSelected);
			this.element.addClass( "ui-accordion-icons" );
		}
	},

	_destroyIcons: function() {
		this.headers.children( ".ui-icon" ).remove();
		this.element.removeClass( "ui-accordion-icons" );
	},

	destroy: function() {
		var options = this.options;

		this.element
			.removeClass( "ui-accordion ui-widget ui-helper-reset" )
			.removeAttr( "role" );

		this.headers
			.unbind( ".accordion" )
			.removeClass( "ui-accordion-header ui-accordion-disabled ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top" )
			.removeAttr( "role" )
			.removeAttr( "aria-expanded" )
			.removeAttr( "aria-selected" )
			.removeAttr( "tabIndex" );

		this.headers.find( "a" ).removeAttr( "tabIndex" );
		this._destroyIcons();
		var contents = this.headers.next()
			.css( "display", "" )
			.removeAttr( "role" )
			.removeClass( "ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-accordion-disabled ui-state-disabled" );
		if ( options.autoHeight || options.fillHeight ) {
			contents.css( "height", "" );
		}

		return $.Widget.prototype.destroy.call( this );
	},

	_setOption: function( key, value ) {
		$.Widget.prototype._setOption.apply( this, arguments );
			
		if ( key == "active" ) {
			this.activate( value );
		}
		if ( key == "icons" ) {
			this._destroyIcons();
			if ( value ) {
				this._createIcons();
			}
		}
		// #5332 - opacity doesn't cascade to positioned elements in IE
		// so we need to add the disabled class to the headers and panels
		if ( key == "disabled" ) {
			this.headers.add(this.headers.next())
				[ value ? "addClass" : "removeClass" ](
					"ui-accordion-disabled ui-state-disabled" );
		}
	},

	_keydown: function( event ) {
		if ( this.options.disabled || event.altKey || event.ctrlKey ) {
			return;
		}

		var keyCode = $.ui.keyCode,
			length = this.headers.length,
			currentIndex = this.headers.index( event.target ),
			toFocus = false;

		switch ( event.keyCode ) {
			case keyCode.RIGHT:
			case keyCode.DOWN:
				toFocus = this.headers[ ( currentIndex + 1 ) % length ];
				break;
			case keyCode.LEFT:
			case keyCode.UP:
				toFocus = this.headers[ ( currentIndex - 1 + length ) % length ];
				break;
			case keyCode.SPACE:
			case keyCode.ENTER:
				this._clickHandler( { target: event.target }, event.target );
				event.preventDefault();
		}

		if ( toFocus ) {
			$( event.target ).attr( "tabIndex", -1 );
			$( toFocus ).attr( "tabIndex", 0 );
			toFocus.focus();
			return false;
		}

		return true;
	},

	resize: function() {
		var options = this.options,
			maxHeight;

		if ( options.fillSpace ) {
			if ( $.browser.msie ) {
				var defOverflow = this.element.parent().css( "overflow" );
				this.element.parent().css( "overflow", "hidden");
			}
			maxHeight = this.element.parent().height();
			if ($.browser.msie) {
				this.element.parent().css( "overflow", defOverflow );
			}

			this.headers.each(function() {
				maxHeight -= $( this ).outerHeight( true );
			});

			this.headers.next()
				.each(function() {
					$( this ).height( Math.max( 0, maxHeight -
						$( this ).innerHeight() + $( this ).height() ) );
				})
				.css( "overflow", "auto" );
		} else if ( options.autoHeight ) {
			maxHeight = 0;
			this.headers.next()
				.each(function() {
					maxHeight = Math.max( maxHeight, $( this ).height( "" ).height() );
				})
				.height( maxHeight );
		}

		return this;
	},

	activate: function( index ) {
		// TODO this gets called on init, changing the option without an explicit call for that
		this.options.active = index;
		// call clickHandler with custom event
		var active = this._findActive( index )[ 0 ];
		this._clickHandler( { target: active }, active );

		return this;
	},

	_findActive: function( selector ) {
		return selector
			? typeof selector === "number"
				? this.headers.filter( ":eq(" + selector + ")" )
				: this.headers.not( this.headers.not( selector ) )
			: selector === false
				? $( [] )
				: this.headers.filter( ":eq(0)" );
	},

	// TODO isn't event.target enough? why the separate target argument?
	_clickHandler: function( event, target ) {
		var options = this.options;
		if ( options.disabled ) {
			return;
		}

		// called only when using activate(false) to close all parts programmatically
		if ( !event.target ) {
			if ( !options.collapsible ) {
				return;
			}
			this.active
				.removeClass( "ui-state-active ui-corner-top" )
				.addClass( "ui-state-default ui-corner-all" )
				.children( ".ui-icon" )
					.removeClass( options.icons.headerSelected )
					.addClass( options.icons.header );
			this.active.next().addClass( "ui-accordion-content-active" );
			var toHide = this.active.next(),
				data = {
					options: options,
					newHeader: $( [] ),
					oldHeader: options.active,
					newContent: $( [] ),
					oldContent: toHide
				},
				toShow = ( this.active = $( [] ) );
			this._toggle( toShow, toHide, data );
			return;
		}

		// get the click target
		var clicked = $( event.currentTarget || target ),
			clickedIsActive = clicked[0] === this.active[0];

		// TODO the option is changed, is that correct?
		// TODO if it is correct, shouldn't that happen after determining that the click is valid?
		options.active = options.collapsible && clickedIsActive ?
			false :
			this.headers.index( clicked );

		// if animations are still active, or the active header is the target, ignore click
		if ( this.running || ( !options.collapsible && clickedIsActive ) ) {
			return;
		}

		// find elements to show and hide
		var active = this.active,
			toShow = clicked.next(),
			toHide = this.active.next(),
			data = {
				options: options,
				newHeader: clickedIsActive && options.collapsible ? $([]) : clicked,
				oldHeader: this.active,
				newContent: clickedIsActive && options.collapsible ? $([]) : toShow,
				oldContent: toHide
			},
			down = this.headers.index( this.active[0] ) > this.headers.index( clicked[0] );

		// when the call to ._toggle() comes after the class changes
		// it causes a very odd bug in IE 8 (see #6720)
		this.active = clickedIsActive ? $([]) : clicked;
		this._toggle( toShow, toHide, data, clickedIsActive, down );

		// switch classes
		active
			.removeClass( "ui-state-active ui-corner-top" )
			.addClass( "ui-state-default ui-corner-all" )
			.children( ".ui-icon" )
				.removeClass( options.icons.headerSelected )
				.addClass( options.icons.header );
		if ( !clickedIsActive ) {
			clicked
				.removeClass( "ui-state-default ui-corner-all" )
				.addClass( "ui-state-active ui-corner-top" )
				.children( ".ui-icon" )
					.removeClass( options.icons.header )
					.addClass( options.icons.headerSelected );
			clicked
				.next()
				.addClass( "ui-accordion-content-active" );
		}

		return;
	},

	_toggle: function( toShow, toHide, data, clickedIsActive, down ) {
		var self = this,
			options = self.options;

		self.toShow = toShow;
		self.toHide = toHide;
		self.data = data;

		var complete = function() {
			if ( !self ) {
				return;
			}
			return self._completed.apply( self, arguments );
		};

		// trigger changestart event
		self._trigger( "changestart", null, self.data );

		// count elements to animate
		self.running = toHide.size() === 0 ? toShow.size() : toHide.size();

		if ( options.animated ) {
			var animOptions = {};

			if ( options.collapsible && clickedIsActive ) {
				animOptions = {
					toShow: $( [] ),
					toHide: toHide,
					complete: complete,
					down: down,
					autoHeight: options.autoHeight || options.fillSpace
				};
			} else {
				animOptions = {
					toShow: toShow,
					toHide: toHide,
					complete: complete,
					down: down,
					autoHeight: options.autoHeight || options.fillSpace
				};
			}

			if ( !options.proxied ) {
				options.proxied = options.animated;
			}

			if ( !options.proxiedDuration ) {
				options.proxiedDuration = options.duration;
			}

			options.animated = $.isFunction( options.proxied ) ?
				options.proxied( animOptions ) :
				options.proxied;

			options.duration = $.isFunction( options.proxiedDuration ) ?
				options.proxiedDuration( animOptions ) :
				options.proxiedDuration;

			var animations = $.ui.accordion.animations,
				duration = options.duration,
				easing = options.animated;

			if ( easing && !animations[ easing ] && !$.easing[ easing ] ) {
				easing = "slide";
			}
			if ( !animations[ easing ] ) {
				animations[ easing ] = function( options ) {
					this.slide( options, {
						easing: easing,
						duration: duration || 700
					});
				};
			}

			animations[ easing ]( animOptions );
		} else {
			if ( options.collapsible && clickedIsActive ) {
				toShow.toggle();
			} else {
				toHide.hide();
				toShow.show();
			}

			complete( true );
		}

		// TODO assert that the blur and focus triggers are really necessary, remove otherwise
		toHide.prev()
			.attr({
				"aria-expanded": "false",
				"aria-selected": "false",
				tabIndex: -1
			})
			.blur();
		toShow.prev()
			.attr({
				"aria-expanded": "true",
				"aria-selected": "true",
				tabIndex: 0
			})
			.focus();
	},

	_completed: function( cancel ) {
		this.running = cancel ? 0 : --this.running;
		if ( this.running ) {
			return;
		}

		if ( this.options.clearStyle ) {
			this.toShow.add( this.toHide ).css({
				height: "",
				overflow: ""
			});
		}

		// other classes are removed before the animation; this one needs to stay until completed
		this.toHide.removeClass( "ui-accordion-content-active" );
		// Work around for rendering bug in IE (#5421)
		if ( this.toHide.length ) {
			this.toHide.parent()[0].className = this.toHide.parent()[0].className;
		}

		this._trigger( "change", null, this.data );
	}
});

$.extend( $.ui.accordion, {
	version: "1.8.12",
	animations: {
		slide: function( options, additions ) {
			options = $.extend({
				easing: "swing",
				duration: 300
			}, options, additions );
			if ( !options.toHide.size() ) {
				options.toShow.animate({
					height: "show",
					paddingTop: "show",
					paddingBottom: "show"
				}, options );
				return;
			}
			if ( !options.toShow.size() ) {
				options.toHide.animate({
					height: "hide",
					paddingTop: "hide",
					paddingBottom: "hide"
				}, options );
				return;
			}
			var overflow = options.toShow.css( "overflow" ),
				percentDone = 0,
				showProps = {},
				hideProps = {},
				fxAttrs = [ "height", "paddingTop", "paddingBottom" ],
				originalWidth;
			// fix width before calculating height of hidden element
			var s = options.toShow;
			originalWidth = s[0].style.width;
			s.width( parseInt( s.parent().width(), 10 )
				- parseInt( s.css( "paddingLeft" ), 10 )
				- parseInt( s.css( "paddingRight" ), 10 )
				- ( parseInt( s.css( "borderLeftWidth" ), 10 ) || 0 )
				- ( parseInt( s.css( "borderRightWidth" ), 10) || 0 ) );

			$.each( fxAttrs, function( i, prop ) {
				hideProps[ prop ] = "hide";

				var parts = ( "" + $.css( options.toShow[0], prop ) ).match( /^([\d+-.]+)(.*)$/ );
				showProps[ prop ] = {
					value: parts[ 1 ],
					unit: parts[ 2 ] || "px"
				};
			});
			options.toShow.css({ height: 0, overflow: "hidden" }).show();
			options.toHide
				.filter( ":hidden" )
					.each( options.complete )
				.end()
				.filter( ":visible" )
				.animate( hideProps, {
				step: function( now, settings ) {
					// only calculate the percent when animating height
					// IE gets very inconsistent results when animating elements
					// with small values, which is common for padding
					if ( settings.prop == "height" ) {
						percentDone = ( settings.end - settings.start === 0 ) ? 0 :
							( settings.now - settings.start ) / ( settings.end - settings.start );
					}

					options.toShow[ 0 ].style[ settings.prop ] =
						( percentDone * showProps[ settings.prop ].value )
						+ showProps[ settings.prop ].unit;
				},
				duration: options.duration,
				easing: options.easing,
				complete: function() {
					if ( !options.autoHeight ) {
						options.toShow.css( "height", "" );
					}
					options.toShow.css({
						width: originalWidth,
						overflow: overflow
					});
					options.complete();
				}
			});
		},
		bounceslide: function( options ) {
			this.slide( options, {
				easing: options.down ? "easeOutBounce" : "swing",
				duration: options.down ? 1000 : 200
			});
		}
	}
});

})( jQuery );

;/*
 * jQuery UI Tabs 1.8.12
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Tabs
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 */
(function( $, undefined ) {

var tabId = 0,
	listId = 0;

function getNextTabId() {
	return ++tabId;
}

function getNextListId() {
	return ++listId;
}

$.widget( "ui.tabs", {
	options: {
		add: null,
		ajaxOptions: null,
		cache: false,
		cookie: null, // e.g. { expires: 7, path: '/', domain: 'jquery.com', secure: true }
		collapsible: false,
		disable: null,
		disabled: [],
		enable: null,
		event: "click",
		fx: null, // e.g. { height: 'toggle', opacity: 'toggle', duration: 200 }
		idPrefix: "ui-tabs-",
		load: null,
		panelTemplate: "<div></div>",
		remove: null,
		select: null,
		show: null,
		spinner: "<em>Loading&#8230;</em>",
		tabTemplate: "<li><a href='#{href}'><span>#{label}</span></a></li>"
	},

	_create: function() {
		this._tabify( true );
	},

	_setOption: function( key, value ) {
		if ( key == "selected" ) {
			if (this.options.collapsible && value == this.options.selected ) {
				return;
			}
			this.select( value );
		} else {
			this.options[ key ] = value;
			this._tabify();
		}
	},

	_tabId: function( a ) {
		return a.title && a.title.replace( /\s/g, "_" ).replace( /[^\w\u00c0-\uFFFF-]/g, "" ) ||
			this.options.idPrefix + getNextTabId();
	},

	_sanitizeSelector: function( hash ) {
		// we need this because an id may contain a ":"
		return hash.replace( /:/g, "\\:" );
	},

	_cookie: function() {
		var cookie = this.cookie ||
			( this.cookie = this.options.cookie.name || "ui-tabs-" + getNextListId() );
		return $.cookie.apply( null, [ cookie ].concat( $.makeArray( arguments ) ) );
	},

	_ui: function( tab, panel ) {
		return {
			tab: tab,
			panel: panel,
			index: this.anchors.index( tab )
		};
	},

	_cleanup: function() {
		// restore all former loading tabs labels
		this.lis.filter( ".ui-state-processing" )
			.removeClass( "ui-state-processing" )
			.find( "span:data(label.tabs)" )
				.each(function() {
					var el = $( this );
					el.html( el.data( "label.tabs" ) ).removeData( "label.tabs" );
				});
	},

	_tabify: function( init ) {
		var self = this,
			o = this.options,
			fragmentId = /^#.+/; // Safari 2 reports '#' for an empty hash

		this.list = this.element.find( "ol,ul" ).eq( 0 );
		this.lis = $( " > li:has(a[href])", this.list );
		this.anchors = this.lis.map(function() {
			return $( "a", this )[ 0 ];
		});
		this.panels = $( [] );

		this.anchors.each(function( i, a ) {
			var href = $( a ).attr( "href" );
			// For dynamically created HTML that contains a hash as href IE < 8 expands
			// such href to the full page url with hash and then misinterprets tab as ajax.
			// Same consideration applies for an added tab with a fragment identifier
			// since a[href=#fragment-identifier] does unexpectedly not match.
			// Thus normalize href attribute...
			var hrefBase = href.split( "#" )[ 0 ],
				baseEl;
			if ( hrefBase && ( hrefBase === location.toString().split( "#" )[ 0 ] ||
					( baseEl = $( "base" )[ 0 ]) && hrefBase === baseEl.href ) ) {
				href = a.hash;
				a.href = href;
			}

			// inline tab
			if ( fragmentId.test( href ) ) {
				self.panels = self.panels.add( self.element.find( self._sanitizeSelector( href ) ) );
			// remote tab
			// prevent loading the page itself if href is just "#"
			} else if ( href && href !== "#" ) {
				// required for restore on destroy
				$.data( a, "href.tabs", href );

				// TODO until #3808 is fixed strip fragment identifier from url
				// (IE fails to load from such url)
				$.data( a, "load.tabs", href.replace( /#.*$/, "" ) );

				var id = self._tabId( a );
				a.href = "#" + id;
				var $panel = self.element.find( "#" + id );
				if ( !$panel.length ) {
					$panel = $( o.panelTemplate )
						.attr( "id", id )
						.addClass( "ui-tabs-panel ui-widget-content ui-corner-bottom" )
						.insertAfter( self.panels[ i - 1 ] || self.list );
					$panel.data( "destroy.tabs", true );
				}
				self.panels = self.panels.add( $panel );
			// invalid tab href
			} else {
				o.disabled.push( i );
			}
		});

		// initialization from scratch
		if ( init ) {
			// attach necessary classes for styling
			this.element.addClass( "ui-tabs ui-widget ui-widget-content ui-corner-all" );
			this.list.addClass( "ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all" );
			this.lis.addClass( "ui-state-default ui-corner-top" );
			this.panels.addClass( "ui-tabs-panel ui-widget-content ui-corner-bottom" );

			// Selected tab
			// use "selected" option or try to retrieve:
			// 1. from fragment identifier in url
			// 2. from cookie
			// 3. from selected class attribute on <li>
			if ( o.selected === undefined ) {
				if ( location.hash ) {
					this.anchors.each(function( i, a ) {
						if ( a.hash == location.hash ) {
							o.selected = i;
							return false;
						}
					});
				}
				if ( typeof o.selected !== "number" && o.cookie ) {
					o.selected = parseInt( self._cookie(), 10 );
				}
				if ( typeof o.selected !== "number" && this.lis.filter( ".ui-tabs-selected" ).length ) {
					o.selected = this.lis.index( this.lis.filter( ".ui-tabs-selected" ) );
				}
				o.selected = o.selected || ( this.lis.length ? 0 : -1 );
			} else if ( o.selected === null ) { // usage of null is deprecated, TODO remove in next release
				o.selected = -1;
			}

			// sanity check - default to first tab...
			o.selected = ( ( o.selected >= 0 && this.anchors[ o.selected ] ) || o.selected < 0 )
				? o.selected
				: 0;

			// Take disabling tabs via class attribute from HTML
			// into account and update option properly.
			// A selected tab cannot become disabled.
			o.disabled = $.unique( o.disabled.concat(
				$.map( this.lis.filter( ".ui-state-disabled" ), function( n, i ) {
					return self.lis.index( n );
				})
			) ).sort();

			if ( $.inArray( o.selected, o.disabled ) != -1 ) {
				o.disabled.splice( $.inArray( o.selected, o.disabled ), 1 );
			}

			// highlight selected tab
			this.panels.addClass( "ui-tabs-hide" );
			this.lis.removeClass( "ui-tabs-selected ui-state-active" );
			// check for length avoids error when initializing empty list
			if ( o.selected >= 0 && this.anchors.length ) {
				self.element.find( self._sanitizeSelector( self.anchors[ o.selected ].hash ) ).removeClass( "ui-tabs-hide" );
				this.lis.eq( o.selected ).addClass( "ui-tabs-selected ui-state-active" );

				// seems to be expected behavior that the show callback is fired
				self.element.queue( "tabs", function() {
					self._trigger( "show", null,
						self._ui( self.anchors[ o.selected ], self.element.find( self._sanitizeSelector( self.anchors[ o.selected ].hash ) )[ 0 ] ) );
				});

				this.load( o.selected );
			}

			// clean up to avoid memory leaks in certain versions of IE 6
			// TODO: namespace this event
			$( window ).bind( "unload", function() {
				self.lis.add( self.anchors ).unbind( ".tabs" );
				self.lis = self.anchors = self.panels = null;
			});
		// update selected after add/remove
		} else {
			o.selected = this.lis.index( this.lis.filter( ".ui-tabs-selected" ) );
		}

		// update collapsible
		// TODO: use .toggleClass()
		this.element[ o.collapsible ? "addClass" : "removeClass" ]( "ui-tabs-collapsible" );

		// set or update cookie after init and add/remove respectively
		if ( o.cookie ) {
			this._cookie( o.selected, o.cookie );
		}

		// disable tabs
		for ( var i = 0, li; ( li = this.lis[ i ] ); i++ ) {
			$( li )[ $.inArray( i, o.disabled ) != -1 &&
				// TODO: use .toggleClass()
				!$( li ).hasClass( "ui-tabs-selected" ) ? "addClass" : "removeClass" ]( "ui-state-disabled" );
		}

		// reset cache if switching from cached to not cached
		if ( o.cache === false ) {
			this.anchors.removeData( "cache.tabs" );
		}

		// remove all handlers before, tabify may run on existing tabs after add or option change
		this.lis.add( this.anchors ).unbind( ".tabs" );

		if ( o.event !== "mouseover" ) {
			var addState = function( state, el ) {
				if ( el.is( ":not(.ui-state-disabled)" ) ) {
					el.addClass( "ui-state-" + state );
				}
			};
			var removeState = function( state, el ) {
				el.removeClass( "ui-state-" + state );
			};
			this.lis.bind( "mouseover.tabs" , function() {
				addState( "hover", $( this ) );
			});
			this.lis.bind( "mouseout.tabs", function() {
				removeState( "hover", $( this ) );
			});
			this.anchors.bind( "focus.tabs", function() {
				addState( "focus", $( this ).closest( "li" ) );
			});
			this.anchors.bind( "blur.tabs", function() {
				removeState( "focus", $( this ).closest( "li" ) );
			});
		}

		// set up animations
		var hideFx, showFx;
		if ( o.fx ) {
			if ( $.isArray( o.fx ) ) {
				hideFx = o.fx[ 0 ];
				showFx = o.fx[ 1 ];
			} else {
				hideFx = showFx = o.fx;
			}
		}

		// Reset certain styles left over from animation
		// and prevent IE's ClearType bug...
		function resetStyle( $el, fx ) {
			$el.css( "display", "" );
			if ( !$.support.opacity && fx.opacity ) {
				$el[ 0 ].style.removeAttribute( "filter" );
			}
		}

		// Show a tab...
		var showTab = showFx
			? function( clicked, $show ) {
				$( clicked ).closest( "li" ).addClass( "ui-tabs-selected ui-state-active" );
				$show.hide().removeClass( "ui-tabs-hide" ) // avoid flicker that way
					.animate( showFx, showFx.duration || "normal", function() {
						resetStyle( $show, showFx );
						self._trigger( "show", null, self._ui( clicked, $show[ 0 ] ) );
					});
			}
			: function( clicked, $show ) {
				$( clicked ).closest( "li" ).addClass( "ui-tabs-selected ui-state-active" );
				$show.removeClass( "ui-tabs-hide" );
				self._trigger( "show", null, self._ui( clicked, $show[ 0 ] ) );
			};

		// Hide a tab, $show is optional...
		var hideTab = hideFx
			? function( clicked, $hide ) {
				$hide.animate( hideFx, hideFx.duration || "normal", function() {
					self.lis.removeClass( "ui-tabs-selected ui-state-active" );
					$hide.addClass( "ui-tabs-hide" );
					resetStyle( $hide, hideFx );
					self.element.dequeue( "tabs" );
				});
			}
			: function( clicked, $hide, $show ) {
				self.lis.removeClass( "ui-tabs-selected ui-state-active" );
				$hide.addClass( "ui-tabs-hide" );
				self.element.dequeue( "tabs" );
			};

		// attach tab event handler, unbind to avoid duplicates from former tabifying...
		this.anchors.bind( o.event + ".tabs", function() {
			var el = this,
				$li = $(el).closest( "li" ),
				$hide = self.panels.filter( ":not(.ui-tabs-hide)" ),
				$show = self.element.find( self._sanitizeSelector( el.hash ) );

			// If tab is already selected and not collapsible or tab disabled or
			// or is already loading or click callback returns false stop here.
			// Check if click handler returns false last so that it is not executed
			// for a disabled or loading tab!
			if ( ( $li.hasClass( "ui-tabs-selected" ) && !o.collapsible) ||
				$li.hasClass( "ui-state-disabled" ) ||
				$li.hasClass( "ui-state-processing" ) ||
				self.panels.filter( ":animated" ).length ||
				self._trigger( "select", null, self._ui( this, $show[ 0 ] ) ) === false ) {
				this.blur();
				return false;
			}

			o.selected = self.anchors.index( this );

			self.abort();

			// if tab may be closed
			if ( o.collapsible ) {
				if ( $li.hasClass( "ui-tabs-selected" ) ) {
					o.selected = -1;

					if ( o.cookie ) {
						self._cookie( o.selected, o.cookie );
					}

					self.element.queue( "tabs", function() {
						hideTab( el, $hide );
					}).dequeue( "tabs" );

					this.blur();
					return false;
				} else if ( !$hide.length ) {
					if ( o.cookie ) {
						self._cookie( o.selected, o.cookie );
					}

					self.element.queue( "tabs", function() {
						showTab( el, $show );
					});

					// TODO make passing in node possible, see also http://dev.jqueryui.com/ticket/3171
					self.load( self.anchors.index( this ) );

					this.blur();
					return false;
				}
			}

			if ( o.cookie ) {
				self._cookie( o.selected, o.cookie );
			}

			// show new tab
			if ( $show.length ) {
				if ( $hide.length ) {
					self.element.queue( "tabs", function() {
						hideTab( el, $hide );
					});
				}
				self.element.queue( "tabs", function() {
					showTab( el, $show );
				});

				self.load( self.anchors.index( this ) );
			} else {
				throw "jQuery UI Tabs: Mismatching fragment identifier.";
			}

			// Prevent IE from keeping other link focussed when using the back button
			// and remove dotted border from clicked link. This is controlled via CSS
			// in modern browsers; blur() removes focus from address bar in Firefox
			// which can become a usability and annoying problem with tabs('rotate').
			if ( $.browser.msie ) {
				this.blur();
			}
		});

		// disable click in any case
		this.anchors.bind( "click.tabs", function(){
			return false;
		});
	},

    _getIndex: function( index ) {
		// meta-function to give users option to provide a href string instead of a numerical index.
		// also sanitizes numerical indexes to valid values.
		if ( typeof index == "string" ) {
			index = this.anchors.index( this.anchors.filter( "[href$=" + index + "]" ) );
		}

		return index;
	},

	destroy: function() {
		var o = this.options;

		this.abort();

		this.element
			.unbind( ".tabs" )
			.removeClass( "ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible" )
			.removeData( "tabs" );

		this.list.removeClass( "ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all" );

		this.anchors.each(function() {
			var href = $.data( this, "href.tabs" );
			if ( href ) {
				this.href = href;
			}
			var $this = $( this ).unbind( ".tabs" );
			$.each( [ "href", "load", "cache" ], function( i, prefix ) {
				$this.removeData( prefix + ".tabs" );
			});
		});

		this.lis.unbind( ".tabs" ).add( this.panels ).each(function() {
			if ( $.data( this, "destroy.tabs" ) ) {
				$( this ).remove();
			} else {
				$( this ).removeClass([
					"ui-state-default",
					"ui-corner-top",
					"ui-tabs-selected",
					"ui-state-active",
					"ui-state-hover",
					"ui-state-focus",
					"ui-state-disabled",
					"ui-tabs-panel",
					"ui-widget-content",
					"ui-corner-bottom",
					"ui-tabs-hide"
				].join( " " ) );
			}
		});

		if ( o.cookie ) {
			this._cookie( null, o.cookie );
		}

		return this;
	},

	add: function( url, label, index ) {
		if ( index === undefined ) {
			index = this.anchors.length;
		}

		var self = this,
			o = this.options,
			$li = $( o.tabTemplate.replace( /#\{href\}/g, url ).replace( /#\{label\}/g, label ) ),
			id = !url.indexOf( "#" ) ? url.replace( "#", "" ) : this._tabId( $( "a", $li )[ 0 ] );

		$li.addClass( "ui-state-default ui-corner-top" ).data( "destroy.tabs", true );

		// try to find an existing element before creating a new one
		var $panel = self.element.find( "#" + id );
		if ( !$panel.length ) {
			$panel = $( o.panelTemplate )
				.attr( "id", id )
				.data( "destroy.tabs", true );
		}
		$panel.addClass( "ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide" );

		if ( index >= this.lis.length ) {
			$li.appendTo( this.list );
			$panel.appendTo( this.list[ 0 ].parentNode );
		} else {
			$li.insertBefore( this.lis[ index ] );
			$panel.insertBefore( this.panels[ index ] );
		}

		o.disabled = $.map( o.disabled, function( n, i ) {
			return n >= index ? ++n : n;
		});

		this._tabify();

		if ( this.anchors.length == 1 ) {
			o.selected = 0;
			$li.addClass( "ui-tabs-selected ui-state-active" );
			$panel.removeClass( "ui-tabs-hide" );
			this.element.queue( "tabs", function() {
				self._trigger( "show", null, self._ui( self.anchors[ 0 ], self.panels[ 0 ] ) );
			});

			this.load( 0 );
		}

		this._trigger( "add", null, this._ui( this.anchors[ index ], this.panels[ index ] ) );
		return this;
	},

	remove: function( index ) {
		index = this._getIndex( index );
		var o = this.options,
			$li = this.lis.eq( index ).remove(),
			$panel = this.panels.eq( index ).remove();

		// If selected tab was removed focus tab to the right or
		// in case the last tab was removed the tab to the left.
		if ( $li.hasClass( "ui-tabs-selected" ) && this.anchors.length > 1) {
			this.select( index + ( index + 1 < this.anchors.length ? 1 : -1 ) );
		}

		o.disabled = $.map(
			$.grep( o.disabled, function(n, i) {
				return n != index;
			}),
			function( n, i ) {
				return n >= index ? --n : n;
			});

		this._tabify();

		this._trigger( "remove", null, this._ui( $li.find( "a" )[ 0 ], $panel[ 0 ] ) );
		return this;
	},

	enable: function( index ) {
		index = this._getIndex( index );
		var o = this.options;
		if ( $.inArray( index, o.disabled ) == -1 ) {
			return;
		}

		this.lis.eq( index ).removeClass( "ui-state-disabled" );
		o.disabled = $.grep( o.disabled, function( n, i ) {
			return n != index;
		});

		this._trigger( "enable", null, this._ui( this.anchors[ index ], this.panels[ index ] ) );
		return this;
	},

	disable: function( index ) {
		index = this._getIndex( index );
		var self = this, o = this.options;
		// cannot disable already selected tab
		if ( index != o.selected ) {
			this.lis.eq( index ).addClass( "ui-state-disabled" );

			o.disabled.push( index );
			o.disabled.sort();

			this._trigger( "disable", null, this._ui( this.anchors[ index ], this.panels[ index ] ) );
		}

		return this;
	},

	select: function( index ) {
		index = this._getIndex( index );
		if ( index == -1 ) {
			if ( this.options.collapsible && this.options.selected != -1 ) {
				index = this.options.selected;
			} else {
				return this;
			}
		}
		this.anchors.eq( index ).trigger( this.options.event + ".tabs" );
		return this;
	},

	load: function( index ) {
		index = this._getIndex( index );
		var self = this,
			o = this.options,
			a = this.anchors.eq( index )[ 0 ],
			url = $.data( a, "load.tabs" );

		this.abort();

		// not remote or from cache
		if ( !url || this.element.queue( "tabs" ).length !== 0 && $.data( a, "cache.tabs" ) ) {
			this.element.dequeue( "tabs" );
			return;
		}

		// load remote from here on
		this.lis.eq( index ).addClass( "ui-state-processing" );

		if ( o.spinner ) {
			var span = $( "span", a );
			span.data( "label.tabs", span.html() ).html( o.spinner );
		}

		this.xhr = $.ajax( $.extend( {}, o.ajaxOptions, {
			url: url,
			success: function( r, s ) {
				self.element.find( self._sanitizeSelector( a.hash ) ).html( r );

				// take care of tab labels
				self._cleanup();

				if ( o.cache ) {
					$.data( a, "cache.tabs", true );
				}

				self._trigger( "load", null, self._ui( self.anchors[ index ], self.panels[ index ] ) );
				try {
					o.ajaxOptions.success( r, s );
				}
				catch ( e ) {}
			},
			error: function( xhr, s, e ) {
				// take care of tab labels
				self._cleanup();

				self._trigger( "load", null, self._ui( self.anchors[ index ], self.panels[ index ] ) );
				try {
					// Passing index avoid a race condition when this method is
					// called after the user has selected another tab.
					// Pass the anchor that initiated this request allows
					// loadError to manipulate the tab content panel via $(a.hash)
					o.ajaxOptions.error( xhr, s, index, a );
				}
				catch ( e ) {}
			}
		} ) );

		// last, so that load event is fired before show...
		self.element.dequeue( "tabs" );

		return this;
	},

	abort: function() {
		// stop possibly running animations
		this.element.queue( [] );
		this.panels.stop( false, true );

		// "tabs" queue must not contain more than two elements,
		// which are the callbacks for the latest clicked tab...
		this.element.queue( "tabs", this.element.queue( "tabs" ).splice( -2, 2 ) );

		// terminate pending requests from other tabs
		if ( this.xhr ) {
			this.xhr.abort();
			delete this.xhr;
		}

		// take care of tab labels
		this._cleanup();
		return this;
	},

	url: function( index, url ) {
		this.anchors.eq( index ).removeData( "cache.tabs" ).data( "load.tabs", url );
		return this;
	},

	length: function() {
		return this.anchors.length;
	}
});

$.extend( $.ui.tabs, {
	version: "1.8.12"
});

/*
 * Tabs Extensions
 */

/*
 * Rotate
 */
$.extend( $.ui.tabs.prototype, {
	rotation: null,
	rotate: function( ms, continuing ) {
		var self = this,
			o = this.options;

		var rotate = self._rotate || ( self._rotate = function( e ) {
			clearTimeout( self.rotation );
			self.rotation = setTimeout(function() {
				var t = o.selected;
				self.select( ++t < self.anchors.length ? t : 0 );
			}, ms );
			
			if ( e ) {
				e.stopPropagation();
			}
		});

		var stop = self._unrotate || ( self._unrotate = !continuing
			? function(e) {
				if (e.clientX) { // in case of a true click
					self.rotate(null);
				}
			}
			: function( e ) {
				t = o.selected;
				rotate();
			});

		// start rotation
		if ( ms ) {
			this.element.bind( "tabsshow", rotate );
			this.anchors.bind( o.event + ".tabs", stop );
			rotate();
		// stop rotation
		} else {
			clearTimeout( self.rotation );
			this.element.unbind( "tabsshow", rotate );
			this.anchors.unbind( o.event + ".tabs", stop );
			delete this._rotate;
			delete this._unrotate;
		}

		return this;
	}
});

})( jQuery );

;/*
 * jQuery UI Datepicker 1.8.10
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Datepicker
 *
 * Depends:
 *	jquery.ui.core.js
 */
(function( $, undefined ) {

$.extend($.ui, { datepicker: { version: "1.8.10" } });

var PROP_NAME = 'datepicker';
var dpuuid = new Date().getTime();

/* Date picker manager.
   Use the singleton instance of this class, $.datepicker, to interact with the date picker.
   Settings for (groups of) date pickers are maintained in an instance object,
   allowing multiple different settings on the same page. */

function Datepicker() {
	this.debug = false; // Change this to true to start debugging
	this._curInst = null; // The current instance in use
	this._keyEvent = false; // If the last event was a key event
	this._disabledInputs = []; // List of date picker inputs that have been disabled
	this._datepickerShowing = false; // True if the popup picker is showing , false if not
	this._inDialog = false; // True if showing within a "dialog", false if not
	this._mainDivId = 'ui-datepicker-div'; // The ID of the main datepicker division
	this._inlineClass = 'ui-datepicker-inline'; // The name of the inline marker class
	this._appendClass = 'ui-datepicker-append'; // The name of the append marker class
	this._triggerClass = 'ui-datepicker-trigger'; // The name of the trigger marker class
	this._dialogClass = 'ui-datepicker-dialog'; // The name of the dialog marker class
	this._disableClass = 'ui-datepicker-disabled'; // The name of the disabled covering marker class
	this._unselectableClass = 'ui-datepicker-unselectable'; // The name of the unselectable cell marker class
	this._currentClass = 'ui-datepicker-current-day'; // The name of the current day marker class
	this._dayOverClass = 'ui-datepicker-days-cell-over'; // The name of the day hover marker class
	this.regional = []; // Available regional settings, indexed by language code
	this.regional[''] = { // Default regional settings
		closeText: 'Done', // Display text for close link
		prevText: 'Prev', // Display text for previous month link
		nextText: 'Next', // Display text for next month link
		currentText: 'Today', // Display text for current month link
		monthNames: ['January','February','March','April','May','June',
			'July','August','September','October','November','December'], // Names of months for drop-down and formatting
		monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], // For formatting
		dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], // For formatting
		dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], // For formatting
		dayNamesMin: ['Su','Mo','Tu','We','Th','Fr','Sa'], // Column headings for days starting at Sunday
		weekHeader: 'Wk', // Column header for week of the year
		dateFormat: 'mm/dd/yy', // See format options on parseDate
		firstDay: 0, // The first day of the week, Sun = 0, Mon = 1, ...
		isRTL: false, // True if right-to-left language, false if left-to-right
		showMonthAfterYear: false, // True if the year select precedes month, false for month then year
		yearSuffix: '' // Additional text to append to the year in the month headers
	};
	this._defaults = { // Global defaults for all the date picker instances
		showOn: 'focus', // 'focus' for popup on focus,
			// 'button' for trigger button, or 'both' for either
		showAnim: 'fadeIn', // Name of jQuery animation for popup
		showOptions: {}, // Options for enhanced animations
		defaultDate: null, // Used when field is blank: actual date,
			// +/-number for offset from today, null for today
		appendText: '', // Display text following the input box, e.g. showing the format
		buttonText: '...', // Text for trigger button
		buttonImage: '', // URL for trigger button image
		buttonImageOnly: false, // True if the image appears alone, false if it appears on a button
		hideIfNoPrevNext: false, // True to hide next/previous month links
			// if not applicable, false to just disable them
		navigationAsDateFormat: false, // True if date formatting applied to prev/today/next links
		gotoCurrent: false, // True if today link goes back to current selection instead
		changeMonth: false, // True if month can be selected directly, false if only prev/next
		changeYear: false, // True if year can be selected directly, false if only prev/next
		yearRange: 'c-10:c+10', // Range of years to display in drop-down,
			// either relative to today's year (-nn:+nn), relative to currently displayed year
			// (c-nn:c+nn), absolute (nnnn:nnnn), or a combination of the above (nnnn:-n)
		showOtherMonths: false, // True to show dates in other months, false to leave blank
		selectOtherMonths: false, // True to allow selection of dates in other months, false for unselectable
		showWeek: false, // True to show week of the year, false to not show it
		calculateWeek: this.iso8601Week, // How to calculate the week of the year,
			// takes a Date and returns the number of the week for it
		shortYearCutoff: '+10', // Short year values < this are in the current century,
			// > this are in the previous century,
			// string value starting with '+' for current year + value
		minDate: null, // The earliest selectable date, or null for no limit
		maxDate: null, // The latest selectable date, or null for no limit
		duration: 'fast', // Duration of display/closure
		beforeShowDay: null, // Function that takes a date and returns an array with
			// [0] = true if selectable, false if not, [1] = custom CSS class name(s) or '',
			// [2] = cell title (optional), e.g. $.datepicker.noWeekends
		beforeShow: null, // Function that takes an input field and
			// returns a set of custom settings for the date picker
		onSelect: null, // Define a callback function when a date is selected
		onChangeMonthYear: null, // Define a callback function when the month or year is changed
		onClose: null, // Define a callback function when the datepicker is closed
		numberOfMonths: 1, // Number of months to show at a time
		showCurrentAtPos: 0, // The position in multipe months at which to show the current month (starting at 0)
		stepMonths: 1, // Number of months to step back/forward
		stepBigMonths: 12, // Number of months to step back/forward for the big links
		altField: '', // Selector for an alternate field to store selected dates into
		altFormat: '', // The date format to use for the alternate field
		constrainInput: true, // The input is constrained by the current date format
		showButtonPanel: false, // True to show button panel, false to not show it
		autoSize: false // True to size the input for the date format, false to leave as is
	};
	$.extend(this._defaults, this.regional['']);
	this.dpDiv = $('<div id="' + this._mainDivId + '" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>');
}

$.extend(Datepicker.prototype, {
	/* Class name added to elements to indicate already configured with a date picker. */
	markerClassName: 'hasDatepicker',

	/* Debug logging (if enabled). */
	log: function () {
		if (this.debug)
			console.log.apply('', arguments);
	},
	
	// TODO rename to "widget" when switching to widget factory
	_widgetDatepicker: function() {
		return this.dpDiv;
	},

	/* Override the default settings for all instances of the date picker.
	   @param  settings  object - the new settings to use as defaults (anonymous object)
	   @return the manager object */
	setDefaults: function(settings) {
		extendRemove(this._defaults, settings || {});
		return this;
	},

	/* Attach the date picker to a jQuery selection.
	   @param  target    element - the target input field or division or span
	   @param  settings  object - the new settings to use for this date picker instance (anonymous) */
	_attachDatepicker: function(target, settings) {
		// check for settings on the control itself - in namespace 'date:'
		var inlineSettings = null;
		for (var attrName in this._defaults) {
			var attrValue = target.getAttribute('date:' + attrName);
			if (attrValue) {
				inlineSettings = inlineSettings || {};
				try {
					inlineSettings[attrName] = eval(attrValue);
				} catch (err) {
					inlineSettings[attrName] = attrValue;
				}
			}
		}
		var nodeName = target.nodeName.toLowerCase();
		var inline = (nodeName == 'div' || nodeName == 'span');
		if (!target.id) {
			this.uuid += 1;
			target.id = 'dp' + this.uuid;
		}
		var inst = this._newInst($(target), inline);
		inst.settings = $.extend({}, settings || {}, inlineSettings || {});
		if (nodeName == 'input') {
			this._connectDatepicker(target, inst);
		} else if (inline) {
			this._inlineDatepicker(target, inst);
		}
	},

	/* Create a new instance object. */
	_newInst: function(target, inline) {
		var id = target[0].id.replace(/([^A-Za-z0-9_-])/g, '\\\\$1'); // escape jQuery meta chars
		return {id: id, input: target, // associated target
			selectedDay: 0, selectedMonth: 0, selectedYear: 0, // current selection
			drawMonth: 0, drawYear: 0, // month being drawn
			inline: inline, // is datepicker inline or not
			dpDiv: (!inline ? this.dpDiv : // presentation div
			$('<div class="' + this._inlineClass + ' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))};
	},

	/* Attach the date picker to an input field. */
	_connectDatepicker: function(target, inst) {
		var input = $(target);
		inst.append = $([]);
		inst.trigger = $([]);
		if (input.hasClass(this.markerClassName))
			return;
		this._attachments(input, inst);
		input.addClass(this.markerClassName).keydown(this._doKeyDown).
			keypress(this._doKeyPress).keyup(this._doKeyUp).
			bind("setData.datepicker", function(event, key, value) {
				inst.settings[key] = value;
			}).bind("getData.datepicker", function(event, key) {
				return this._get(inst, key);
			});
		this._autoSize(inst);
		$.data(target, PROP_NAME, inst);
	},

	/* Make attachments based on settings. */
	_attachments: function(input, inst) {
		var appendText = this._get(inst, 'appendText');
		var isRTL = this._get(inst, 'isRTL');
		if (inst.append)
			inst.append.remove();
		if (appendText) {
			inst.append = $('<span class="' + this._appendClass + '">' + appendText + '</span>');
			input[isRTL ? 'before' : 'after'](inst.append);
		}
		input.unbind('focus', this._showDatepicker);
		if (inst.trigger)
			inst.trigger.remove();
		var showOn = this._get(inst, 'showOn');
		if (showOn == 'focus' || showOn == 'both') // pop-up date picker when in the marked field
			input.focus(this._showDatepicker);
		if (showOn == 'button' || showOn == 'both') { // pop-up date picker when button clicked
			var buttonText = this._get(inst, 'buttonText');
			var buttonImage = this._get(inst, 'buttonImage');
			inst.trigger = $(this._get(inst, 'buttonImageOnly') ?
				$('<img/>').addClass(this._triggerClass).
					attr({ src: buttonImage, alt: buttonText, title: buttonText }) :
				$('<button type="button"></button>').addClass(this._triggerClass).
					html(buttonImage == '' ? buttonText : $('<img/>').attr(
					{ src:buttonImage, alt:buttonText, title:buttonText })));
			input[isRTL ? 'before' : 'after'](inst.trigger);
			inst.trigger.click(function() {
				if ($.datepicker._datepickerShowing && $.datepicker._lastInput == input[0])
					$.datepicker._hideDatepicker();
				else
					$.datepicker._showDatepicker(input[0]);
				return false;
			});
		}
	},

	/* Apply the maximum length for the date format. */
	_autoSize: function(inst) {
		if (this._get(inst, 'autoSize') && !inst.inline) {
			var date = new Date(2009, 12 - 1, 20); // Ensure double digits
			var dateFormat = this._get(inst, 'dateFormat');
			if (dateFormat.match(/[DM]/)) {
				var findMax = function(names) {
					var max = 0;
					var maxI = 0;
					for (var i = 0; i < names.length; i++) {
						if (names[i].length > max) {
							max = names[i].length;
							maxI = i;
						}
					}
					return maxI;
				};
				date.setMonth(findMax(this._get(inst, (dateFormat.match(/MM/) ?
					'monthNames' : 'monthNamesShort'))));
				date.setDate(findMax(this._get(inst, (dateFormat.match(/DD/) ?
					'dayNames' : 'dayNamesShort'))) + 20 - date.getDay());
			}
			inst.input.attr('size', this._formatDate(inst, date).length);
		}
	},

	/* Attach an inline date picker to a div. */
	_inlineDatepicker: function(target, inst) {
		var divSpan = $(target);
		if (divSpan.hasClass(this.markerClassName))
			return;
		divSpan.addClass(this.markerClassName).append(inst.dpDiv).
			bind("setData.datepicker", function(event, key, value){
				inst.settings[key] = value;
			}).bind("getData.datepicker", function(event, key){
				return this._get(inst, key);
			});
		$.data(target, PROP_NAME, inst);
		this._setDate(inst, this._getDefaultDate(inst), true);
		this._updateDatepicker(inst);
		this._updateAlternate(inst);
		inst.dpDiv.show();
	},

	/* Pop-up the date picker in a "dialog" box.
	   @param  input     element - ignored
	   @param  date      string or Date - the initial date to display
	   @param  onSelect  function - the function to call when a date is selected
	   @param  settings  object - update the dialog date picker instance's settings (anonymous object)
	   @param  pos       int[2] - coordinates for the dialog's position within the screen or
	                     event - with x/y coordinates or
	                     leave empty for default (screen centre)
	   @return the manager object */
	_dialogDatepicker: function(input, date, onSelect, settings, pos) {
		var inst = this._dialogInst; // internal instance
		if (!inst) {
			this.uuid += 1;
			var id = 'dp' + this.uuid;
			this._dialogInput = $('<input type="text" id="' + id +
				'" style="position: absolute; top: -100px; width: 0px; z-index: -10;"/>');
			this._dialogInput.keydown(this._doKeyDown);
			$('body').append(this._dialogInput);
			inst = this._dialogInst = this._newInst(this._dialogInput, false);
			inst.settings = {};
			$.data(this._dialogInput[0], PROP_NAME, inst);
		}
		extendRemove(inst.settings, settings || {});
		date = (date && date.constructor == Date ? this._formatDate(inst, date) : date);
		this._dialogInput.val(date);

		this._pos = (pos ? (pos.length ? pos : [pos.pageX, pos.pageY]) : null);
		if (!this._pos) {
			var browserWidth = document.documentElement.clientWidth;
			var browserHeight = document.documentElement.clientHeight;
			var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
			var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
			this._pos = // should use actual width/height below
				[(browserWidth / 2) - 100 + scrollX, (browserHeight / 2) - 150 + scrollY];
		}

		// move input on screen for focus, but hidden behind dialog
		this._dialogInput.css('left', (this._pos[0] + 20) + 'px').css('top', this._pos[1] + 'px');
		inst.settings.onSelect = onSelect;
		this._inDialog = true;
		this.dpDiv.addClass(this._dialogClass);
		this._showDatepicker(this._dialogInput[0]);
		if ($.blockUI)
			$.blockUI(this.dpDiv);
		$.data(this._dialogInput[0], PROP_NAME, inst);
		return this;
	},

	/* Detach a datepicker from its control.
	   @param  target    element - the target input field or division or span */
	_destroyDatepicker: function(target) {
		var $target = $(target);
		var inst = $.data(target, PROP_NAME);
		if (!$target.hasClass(this.markerClassName)) {
			return;
		}
		var nodeName = target.nodeName.toLowerCase();
		$.removeData(target, PROP_NAME);
		if (nodeName == 'input') {
			inst.append.remove();
			inst.trigger.remove();
			$target.removeClass(this.markerClassName).
				unbind('focus', this._showDatepicker).
				unbind('keydown', this._doKeyDown).
				unbind('keypress', this._doKeyPress).
				unbind('keyup', this._doKeyUp);
		} else if (nodeName == 'div' || nodeName == 'span')
			$target.removeClass(this.markerClassName).empty();
	},

	/* Enable the date picker to a jQuery selection.
	   @param  target    element - the target input field or division or span */
	_enableDatepicker: function(target) {
		var $target = $(target);
		var inst = $.data(target, PROP_NAME);
		if (!$target.hasClass(this.markerClassName)) {
			return;
		}
		var nodeName = target.nodeName.toLowerCase();
		if (nodeName == 'input') {
			target.disabled = false;
			inst.trigger.filter('button').
				each(function() { this.disabled = false; }).end().
				filter('img').css({opacity: '1.0', cursor: ''});
		}
		else if (nodeName == 'div' || nodeName == 'span') {
			var inline = $target.children('.' + this._inlineClass);
			inline.children().removeClass('ui-state-disabled');
		}
		this._disabledInputs = $.map(this._disabledInputs,
			function(value) { return (value == target ? null : value); }); // delete entry
	},

	/* Disable the date picker to a jQuery selection.
	   @param  target    element - the target input field or division or span */
	_disableDatepicker: function(target) {
		var $target = $(target);
		var inst = $.data(target, PROP_NAME);
		if (!$target.hasClass(this.markerClassName)) {
			return;
		}
		var nodeName = target.nodeName.toLowerCase();
		if (nodeName == 'input') {
			target.disabled = true;
			inst.trigger.filter('button').
				each(function() { this.disabled = true; }).end().
				filter('img').css({opacity: '0.5', cursor: 'default'});
		}
		else if (nodeName == 'div' || nodeName == 'span') {
			var inline = $target.children('.' + this._inlineClass);
			inline.children().addClass('ui-state-disabled');
		}
		this._disabledInputs = $.map(this._disabledInputs,
			function(value) { return (value == target ? null : value); }); // delete entry
		this._disabledInputs[this._disabledInputs.length] = target;
	},

	/* Is the first field in a jQuery collection disabled as a datepicker?
	   @param  target    element - the target input field or division or span
	   @return boolean - true if disabled, false if enabled */
	_isDisabledDatepicker: function(target) {
		if (!target) {
			return false;
		}
		for (var i = 0; i < this._disabledInputs.length; i++) {
			if (this._disabledInputs[i] == target)
				return true;
		}
		return false;
	},

	/* Retrieve the instance data for the target control.
	   @param  target  element - the target input field or division or span
	   @return  object - the associated instance data
	   @throws  error if a jQuery problem getting data */
	_getInst: function(target) {
		try {
			return $.data(target, PROP_NAME);
		}
		catch (err) {
			throw 'Missing instance data for this datepicker';
		}
	},

	/* Update or retrieve the settings for a date picker attached to an input field or division.
	   @param  target  element - the target input field or division or span
	   @param  name    object - the new settings to update or
	                   string - the name of the setting to change or retrieve,
	                   when retrieving also 'all' for all instance settings or
	                   'defaults' for all global defaults
	   @param  value   any - the new value for the setting
	                   (omit if above is an object or to retrieve a value) */
	_optionDatepicker: function(target, name, value) {
		var inst = this._getInst(target);
		if (arguments.length == 2 && typeof name == 'string') {
			return (name == 'defaults' ? $.extend({}, $.datepicker._defaults) :
				(inst ? (name == 'all' ? $.extend({}, inst.settings) :
				this._get(inst, name)) : null));
		}
		var settings = name || {};
		if (typeof name == 'string') {
			settings = {};
			settings[name] = value;
		}
		if (inst) {
			if (this._curInst == inst) {
				this._hideDatepicker();
			}
			var date = this._getDateDatepicker(target, true);
			extendRemove(inst.settings, settings);
			this._attachments($(target), inst);
			this._autoSize(inst);
			this._setDateDatepicker(target, date);
			this._updateDatepicker(inst);
		}
	},

	// change method deprecated
	_changeDatepicker: function(target, name, value) {
		this._optionDatepicker(target, name, value);
	},

	/* Redraw the date picker attached to an input field or division.
	   @param  target  element - the target input field or division or span */
	_refreshDatepicker: function(target) {
		var inst = this._getInst(target);
		if (inst) {
			this._updateDatepicker(inst);
		}
	},

	/* Set the dates for a jQuery selection.
	   @param  target   element - the target input field or division or span
	   @param  date     Date - the new date */
	_setDateDatepicker: function(target, date) {
		var inst = this._getInst(target);
		if (inst) {
			this._setDate(inst, date);
			this._updateDatepicker(inst);
			this._updateAlternate(inst);
		}
	},

	/* Get the date(s) for the first entry in a jQuery selection.
	   @param  target     element - the target input field or division or span
	   @param  noDefault  boolean - true if no default date is to be used
	   @return Date - the current date */
	_getDateDatepicker: function(target, noDefault) {
		var inst = this._getInst(target);
		if (inst && !inst.inline)
			this._setDateFromField(inst, noDefault);
		return (inst ? this._getDate(inst) : null);
	},

	/* Handle keystrokes. */
	_doKeyDown: function(event) {
		var inst = $.datepicker._getInst(event.target);
		var handled = true;
		var isRTL = inst.dpDiv.is('.ui-datepicker-rtl');
		inst._keyEvent = true;
		if ($.datepicker._datepickerShowing)
			switch (event.keyCode) {
				case 9: $.datepicker._hideDatepicker();
						handled = false;
						break; // hide on tab out
				case 13: var sel = $('td.' + $.datepicker._dayOverClass + ':not(.' + 
									$.datepicker._currentClass + ')', inst.dpDiv);
						if (sel[0])
							$.datepicker._selectDay(event.target, inst.selectedMonth, inst.selectedYear, sel[0]);
						else
							$.datepicker._hideDatepicker();
						return false; // don't submit the form
						break; // select the value on enter
				case 27: $.datepicker._hideDatepicker();
						break; // hide on escape
				case 33: $.datepicker._adjustDate(event.target, (event.ctrlKey ?
							-$.datepicker._get(inst, 'stepBigMonths') :
							-$.datepicker._get(inst, 'stepMonths')), 'M');
						break; // previous month/year on page up/+ ctrl
				case 34: $.datepicker._adjustDate(event.target, (event.ctrlKey ?
							+$.datepicker._get(inst, 'stepBigMonths') :
							+$.datepicker._get(inst, 'stepMonths')), 'M');
						break; // next month/year on page down/+ ctrl
				case 35: if (event.ctrlKey || event.metaKey) $.datepicker._clearDate(event.target);
						handled = event.ctrlKey || event.metaKey;
						break; // clear on ctrl or command +end
				case 36: if (event.ctrlKey || event.metaKey) $.datepicker._gotoToday(event.target);
						handled = event.ctrlKey || event.metaKey;
						break; // current on ctrl or command +home
				case 37: if (event.ctrlKey || event.metaKey) $.datepicker._adjustDate(event.target, (isRTL ? +1 : -1), 'D');
						handled = event.ctrlKey || event.metaKey;
						// -1 day on ctrl or command +left
						if (event.originalEvent.altKey) $.datepicker._adjustDate(event.target, (event.ctrlKey ?
									-$.datepicker._get(inst, 'stepBigMonths') :
									-$.datepicker._get(inst, 'stepMonths')), 'M');
						// next month/year on alt +left on Mac
						break;
				case 38: if (event.ctrlKey || event.metaKey) $.datepicker._adjustDate(event.target, -7, 'D');
						handled = event.ctrlKey || event.metaKey;
						break; // -1 week on ctrl or command +up
				case 39: if (event.ctrlKey || event.metaKey) $.datepicker._adjustDate(event.target, (isRTL ? -1 : +1), 'D');
						handled = event.ctrlKey || event.metaKey;
						// +1 day on ctrl or command +right
						if (event.originalEvent.altKey) $.datepicker._adjustDate(event.target, (event.ctrlKey ?
									+$.datepicker._get(inst, 'stepBigMonths') :
									+$.datepicker._get(inst, 'stepMonths')), 'M');
						// next month/year on alt +right
						break;
				case 40: if (event.ctrlKey || event.metaKey) $.datepicker._adjustDate(event.target, +7, 'D');
						handled = event.ctrlKey || event.metaKey;
						break; // +1 week on ctrl or command +down
				default: handled = false;
			}
		else if (event.keyCode == 36 && event.ctrlKey) // display the date picker on ctrl+home
			$.datepicker._showDatepicker(this);
		else {
			handled = false;
		}
		if (handled) {
			event.preventDefault();
			event.stopPropagation();
		}
	},

	/* Filter entered characters - based on date format. */
	_doKeyPress: function(event) {
		var inst = $.datepicker._getInst(event.target);
		if ($.datepicker._get(inst, 'constrainInput')) {
			var chars = $.datepicker._possibleChars($.datepicker._get(inst, 'dateFormat'));
			var chr = String.fromCharCode(event.charCode == undefined ? event.keyCode : event.charCode);
			return event.ctrlKey || event.metaKey || (chr < ' ' || !chars || chars.indexOf(chr) > -1);
		}
	},

	/* Synchronise manual entry and field/alternate field. */
	_doKeyUp: function(event) {
		var inst = $.datepicker._getInst(event.target);
		if (inst.input.val() != inst.lastVal) {
			try {
				var date = $.datepicker.parseDate($.datepicker._get(inst, 'dateFormat'),
					(inst.input ? inst.input.val() : null),
					$.datepicker._getFormatConfig(inst));
				if (date) { // only if valid
					$.datepicker._setDateFromField(inst);
					$.datepicker._updateAlternate(inst);
					$.datepicker._updateDatepicker(inst);
				}
			}
			catch (event) {
				$.datepicker.log(event);
			}
		}
		return true;
	},

	/* Pop-up the date picker for a given input field.
	   @param  input  element - the input field attached to the date picker or
	                  event - if triggered by focus */
	_showDatepicker: function(input) {
		input = input.target || input;
		if (input.nodeName.toLowerCase() != 'input') // find from button/image trigger
			input = $('input', input.parentNode)[0];
		if ($.datepicker._isDisabledDatepicker(input) || $.datepicker._lastInput == input) // already here
			return;
		var inst = $.datepicker._getInst(input);
		if ($.datepicker._curInst && $.datepicker._curInst != inst) {
			$.datepicker._curInst.dpDiv.stop(true, true);
		}
		var beforeShow = $.datepicker._get(inst, 'beforeShow');
		extendRemove(inst.settings, (beforeShow ? beforeShow.apply(input, [input, inst]) : {}));
		inst.lastVal = null;
		$.datepicker._lastInput = input;
		$.datepicker._setDateFromField(inst);
		if ($.datepicker._inDialog) // hide cursor
			input.value = '';
		if (!$.datepicker._pos) { // position below input
			$.datepicker._pos = $.datepicker._findPos(input);
			$.datepicker._pos[1] += input.offsetHeight; // add the height
		}
		var isFixed = false;
		$(input).parents().each(function() {
			isFixed |= $(this).css('position') == 'fixed';
			return !isFixed;
		});
		if (isFixed && $.browser.opera) { // correction for Opera when fixed and scrolled
			$.datepicker._pos[0] -= document.documentElement.scrollLeft;
			$.datepicker._pos[1] -= document.documentElement.scrollTop;
		}
		var offset = {left: $.datepicker._pos[0], top: $.datepicker._pos[1]};
		$.datepicker._pos = null;
		//to avoid flashes on Firefox
		inst.dpDiv.empty();
		// determine sizing offscreen
		inst.dpDiv.css({position: 'absolute', display: 'block', top: '-1000px'});
		$.datepicker._updateDatepicker(inst);
		// fix width for dynamic number of date pickers
		// and adjust position before showing
		offset = $.datepicker._checkOffset(inst, offset, isFixed);
		inst.dpDiv.css({position: ($.datepicker._inDialog && $.blockUI ?
			'static' : (isFixed ? 'fixed' : 'absolute')), display: 'none',
			left: offset.left + 'px', top: offset.top + 'px'});
		if (!inst.inline) {
			var showAnim = $.datepicker._get(inst, 'showAnim');
			var duration = $.datepicker._get(inst, 'duration');
			var postProcess = function() {
				$.datepicker._datepickerShowing = true;
				var cover = inst.dpDiv.find('iframe.ui-datepicker-cover'); // IE6- only
				if( !! cover.length ){
					var borders = $.datepicker._getBorders(inst.dpDiv);
					cover.css({left: -borders[0], top: -borders[1],
						width: inst.dpDiv.outerWidth(), height: inst.dpDiv.outerHeight()});
				}
			};
			inst.dpDiv.zIndex($(input).zIndex()+1);
			if ($.effects && $.effects[showAnim])
				inst.dpDiv.show(showAnim, $.datepicker._get(inst, 'showOptions'), duration, postProcess);
			else
				inst.dpDiv[showAnim || 'show']((showAnim ? duration : null), postProcess);
			if (!showAnim || !duration)
				postProcess();
			if (inst.input.is(':visible') && !inst.input.is(':disabled'))
				inst.input.focus();
			$.datepicker._curInst = inst;
		}
	},

	/* Generate the date picker content. */
	_updateDatepicker: function(inst) {
		var self = this;
		var borders = $.datepicker._getBorders(inst.dpDiv);
		inst.dpDiv.empty().append(this._generateHTML(inst));
		var cover = inst.dpDiv.find('iframe.ui-datepicker-cover'); // IE6- only
		if( !!cover.length ){ //avoid call to outerXXXX() when not in IE6
			cover.css({left: -borders[0], top: -borders[1], width: inst.dpDiv.outerWidth(), height: inst.dpDiv.outerHeight()})
		}
		inst.dpDiv.find('button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a')
				.bind('mouseout', function(){
					$(this).removeClass('ui-state-hover');
					if(this.className.indexOf('ui-datepicker-prev') != -1) $(this).removeClass('ui-datepicker-prev-hover');
					if(this.className.indexOf('ui-datepicker-next') != -1) $(this).removeClass('ui-datepicker-next-hover');
				})
				.bind('mouseover', function(){
					if (!self._isDisabledDatepicker( inst.inline ? inst.dpDiv.parent()[0] : inst.input[0])) {
						$(this).parents('.ui-datepicker-calendar').find('a').removeClass('ui-state-hover');
						$(this).addClass('ui-state-hover');
						if(this.className.indexOf('ui-datepicker-prev') != -1) $(this).addClass('ui-datepicker-prev-hover');
						if(this.className.indexOf('ui-datepicker-next') != -1) $(this).addClass('ui-datepicker-next-hover');
					}
				})
			.end()
			.find('.' + this._dayOverClass + ' a')
				.trigger('mouseover')
			.end();
		var numMonths = this._getNumberOfMonths(inst);
		var cols = numMonths[1];
		var width = 17;
		if (cols > 1)
			inst.dpDiv.addClass('ui-datepicker-multi-' + cols).css('width', (width * cols) + 'em');
		else
			inst.dpDiv.removeClass('ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4').width('');
		inst.dpDiv[(numMonths[0] != 1 || numMonths[1] != 1 ? 'add' : 'remove') +
			'Class']('ui-datepicker-multi');
		inst.dpDiv[(this._get(inst, 'isRTL') ? 'add' : 'remove') +
			'Class']('ui-datepicker-rtl');
		if (inst == $.datepicker._curInst && $.datepicker._datepickerShowing && inst.input &&
				// #6694 - don't focus the input if it's already focused
				// this breaks the change event in IE
				inst.input.is(':visible') && !inst.input.is(':disabled') && inst.input[0] != document.activeElement)
			inst.input.focus();
		// deffered render of the years select (to avoid flashes on Firefox) 
		if( inst.yearshtml ){
			var origyearshtml = inst.yearshtml;
			setTimeout(function(){
				//assure that inst.yearshtml didn't change.
				if( origyearshtml === inst.yearshtml ){
					inst.dpDiv.find('select.ui-datepicker-year:first').replaceWith(inst.yearshtml);
				}
				origyearshtml = inst.yearshtml = null;
			}, 0);
		}
	},

	/* Retrieve the size of left and top borders for an element.
	   @param  elem  (jQuery object) the element of interest
	   @return  (number[2]) the left and top borders */
	_getBorders: function(elem) {
		var convert = function(value) {
			return {thin: 1, medium: 2, thick: 3}[value] || value;
		};
		return [parseFloat(convert(elem.css('border-left-width'))),
			parseFloat(convert(elem.css('border-top-width')))];
	},

	/* Check positioning to remain on screen. */
	_checkOffset: function(inst, offset, isFixed) {
		var dpWidth = inst.dpDiv.outerWidth();
		var dpHeight = inst.dpDiv.outerHeight();
		var inputWidth = inst.input ? inst.input.outerWidth() : 0;
		var inputHeight = inst.input ? inst.input.outerHeight() : 0;
		var viewWidth = document.documentElement.clientWidth + $(document).scrollLeft();
		var viewHeight = document.documentElement.clientHeight + $(document).scrollTop();

		offset.left -= (this._get(inst, 'isRTL') ? (dpWidth - inputWidth) : 0);
		offset.left -= (isFixed && offset.left == inst.input.offset().left) ? $(document).scrollLeft() : 0;
		offset.top -= (isFixed && offset.top == (inst.input.offset().top + inputHeight)) ? $(document).scrollTop() : 0;

		// now check if datepicker is showing outside window viewport - move to a better place if so.
		offset.left -= Math.min(offset.left, (offset.left + dpWidth > viewWidth && viewWidth > dpWidth) ?
			Math.abs(offset.left + dpWidth - viewWidth) : 0);
		offset.top -= Math.min(offset.top, (offset.top + dpHeight > viewHeight && viewHeight > dpHeight) ?
			Math.abs(dpHeight + inputHeight) : 0);

		return offset;
	},

	/* Find an object's position on the screen. */
	_findPos: function(obj) {
		var inst = this._getInst(obj);
		var isRTL = this._get(inst, 'isRTL');
        while (obj && (obj.type == 'hidden' || obj.nodeType != 1 || $.expr.filters.hidden(obj))) {
            obj = obj[isRTL ? 'previousSibling' : 'nextSibling'];
        }
        var position = $(obj).offset();
	    return [position.left, position.top];
	},

	/* Hide the date picker from view.
	   @param  input  element - the input field attached to the date picker */
	_hideDatepicker: function(input) {
		var inst = this._curInst;
		if (!inst || (input && inst != $.data(input, PROP_NAME)))
			return;
		if (this._datepickerShowing) {
			var showAnim = this._get(inst, 'showAnim');
			var duration = this._get(inst, 'duration');
			var postProcess = function() {
				$.datepicker._tidyDialog(inst);
				this._curInst = null;
			};
			if ($.effects && $.effects[showAnim])
				inst.dpDiv.hide(showAnim, $.datepicker._get(inst, 'showOptions'), duration, postProcess);
			else
				inst.dpDiv[(showAnim == 'slideDown' ? 'slideUp' :
					(showAnim == 'fadeIn' ? 'fadeOut' : 'hide'))]((showAnim ? duration : null), postProcess);
			if (!showAnim)
				postProcess();
			var onClose = this._get(inst, 'onClose');
			if (onClose)
				onClose.apply((inst.input ? inst.input[0] : null),
					[(inst.input ? inst.input.val() : ''), inst]);  // trigger custom callback
			this._datepickerShowing = false;
			this._lastInput = null;
			if (this._inDialog) {
				this._dialogInput.css({ position: 'absolute', left: '0', top: '-100px' });
				if ($.blockUI) {
					$.unblockUI();
					$('body').append(this.dpDiv);
				}
			}
			this._inDialog = false;
		}
	},

	/* Tidy up after a dialog display. */
	_tidyDialog: function(inst) {
		inst.dpDiv.removeClass(this._dialogClass).unbind('.ui-datepicker-calendar');
	},

	/* Close date picker if clicked elsewhere. */
	_checkExternalClick: function(event) {
		if (!$.datepicker._curInst)
			return;
		var $target = $(event.target);
		if ($target[0].id != $.datepicker._mainDivId &&
				$target.parents('#' + $.datepicker._mainDivId).length == 0 &&
				!$target.hasClass($.datepicker.markerClassName) &&
				!$target.hasClass($.datepicker._triggerClass) &&
				$.datepicker._datepickerShowing && !($.datepicker._inDialog && $.blockUI))
			$.datepicker._hideDatepicker();
	},

	/* Adjust one of the date sub-fields. */
	_adjustDate: function(id, offset, period) {
		var target = $(id);
		var inst = this._getInst(target[0]);
		if (this._isDisabledDatepicker(target[0])) {
			return;
		}
		this._adjustInstDate(inst, offset +
			(period == 'M' ? this._get(inst, 'showCurrentAtPos') : 0), // undo positioning
			period);
		this._updateDatepicker(inst);
	},

	/* Action for current link. */
	_gotoToday: function(id) {
		var target = $(id);
		var inst = this._getInst(target[0]);
		if (this._get(inst, 'gotoCurrent') && inst.currentDay) {
			inst.selectedDay = inst.currentDay;
			inst.drawMonth = inst.selectedMonth = inst.currentMonth;
			inst.drawYear = inst.selectedYear = inst.currentYear;
		}
		else {
			var date = new Date();
			inst.selectedDay = date.getDate();
			inst.drawMonth = inst.selectedMonth = date.getMonth();
			inst.drawYear = inst.selectedYear = date.getFullYear();
		}
		this._notifyChange(inst);
		this._adjustDate(target);
	},

	/* Action for selecting a new month/year. */
	_selectMonthYear: function(id, select, period) {
		var target = $(id);
		var inst = this._getInst(target[0]);
		inst._selectingMonthYear = false;
		inst['selected' + (period == 'M' ? 'Month' : 'Year')] =
		inst['draw' + (period == 'M' ? 'Month' : 'Year')] =
			parseInt(select.options[select.selectedIndex].value,10);
		this._notifyChange(inst);
		this._adjustDate(target);
	},

	/* Restore input focus after not changing month/year. */
	_clickMonthYear: function(id) {
		var target = $(id);
		var inst = this._getInst(target[0]);
		if (inst.input && inst._selectingMonthYear) {
			setTimeout(function() {
				inst.input.focus();
			}, 0);
		}
		inst._selectingMonthYear = !inst._selectingMonthYear;
	},

	/* Action for selecting a day. */
	_selectDay: function(id, month, year, td) {
		var target = $(id);
		if ($(td).hasClass(this._unselectableClass) || this._isDisabledDatepicker(target[0])) {
			return;
		}
		var inst = this._getInst(target[0]);
		inst.selectedDay = inst.currentDay = $('a', td).html();
		inst.selectedMonth = inst.currentMonth = month;
		inst.selectedYear = inst.currentYear = year;
		this._selectDate(id, this._formatDate(inst,
			inst.currentDay, inst.currentMonth, inst.currentYear));
	},

	/* Erase the input field and hide the date picker. */
	_clearDate: function(id) {
		var target = $(id);
		var inst = this._getInst(target[0]);
		this._selectDate(target, '');
	},

	/* Update the input field with the selected date. */
	_selectDate: function(id, dateStr) {
		var target = $(id);
		var inst = this._getInst(target[0]);
		dateStr = (dateStr != null ? dateStr : this._formatDate(inst));
		if (inst.input)
			inst.input.val(dateStr);
		this._updateAlternate(inst);
		var onSelect = this._get(inst, 'onSelect');
		if (onSelect)
			onSelect.apply((inst.input ? inst.input[0] : null), [dateStr, inst]);  // trigger custom callback
		else if (inst.input)
			inst.input.trigger('change'); // fire the change event
		if (inst.inline)
			this._updateDatepicker(inst);
		else {
			this._hideDatepicker();
			this._lastInput = inst.input[0];
			if (typeof(inst.input[0]) != 'object')
				inst.input.focus(); // restore focus
			this._lastInput = null;
		}
	},

	/* Update any alternate field to synchronise with the main field. */
	_updateAlternate: function(inst) {
		var altField = this._get(inst, 'altField');
		if (altField) { // update alternate field too
			var altFormat = this._get(inst, 'altFormat') || this._get(inst, 'dateFormat');
			var date = this._getDate(inst);
			var dateStr = this.formatDate(altFormat, date, this._getFormatConfig(inst));
			$(altField).each(function() { $(this).val(dateStr); });
		}
	},

	/* Set as beforeShowDay function to prevent selection of weekends.
	   @param  date  Date - the date to customise
	   @return [boolean, string] - is this date selectable?, what is its CSS class? */
	noWeekends: function(date) {
		var day = date.getDay();
		return [(day > 0 && day < 6), ''];
	},

	/* Set as calculateWeek to determine the week of the year based on the ISO 8601 definition.
	   @param  date  Date - the date to get the week for
	   @return  number - the number of the week within the year that contains this date */
	iso8601Week: function(date) {
		var checkDate = new Date(date.getTime());
		// Find Thursday of this week starting on Monday
		checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
		var time = checkDate.getTime();
		checkDate.setMonth(0); // Compare with Jan 1
		checkDate.setDate(1);
		return Math.floor(Math.round((time - checkDate) / 86400000) / 7) + 1;
	},

	/* Parse a string value into a date object.
	   See formatDate below for the possible formats.

	   @param  format    string - the expected format of the date
	   @param  value     string - the date in the above format
	   @param  settings  Object - attributes include:
	                     shortYearCutoff  number - the cutoff year for determining the century (optional)
	                     dayNamesShort    string[7] - abbreviated names of the days from Sunday (optional)
	                     dayNames         string[7] - names of the days from Sunday (optional)
	                     monthNamesShort  string[12] - abbreviated names of the months (optional)
	                     monthNames       string[12] - names of the months (optional)
	   @return  Date - the extracted date value or null if value is blank */
	parseDate: function (format, value, settings) {
		if (format == null || value == null)
			throw 'Invalid arguments';
		value = (typeof value == 'object' ? value.toString() : value + '');
		if (value == '')
			return null;
		var shortYearCutoff = (settings ? settings.shortYearCutoff : null) || this._defaults.shortYearCutoff;
		shortYearCutoff = (typeof shortYearCutoff != 'string' ? shortYearCutoff :
				new Date().getFullYear() % 100 + parseInt(shortYearCutoff, 10));
		var dayNamesShort = (settings ? settings.dayNamesShort : null) || this._defaults.dayNamesShort;
		var dayNames = (settings ? settings.dayNames : null) || this._defaults.dayNames;
		var monthNamesShort = (settings ? settings.monthNamesShort : null) || this._defaults.monthNamesShort;
		var monthNames = (settings ? settings.monthNames : null) || this._defaults.monthNames;
		var year = -1;
		var month = -1;
		var day = -1;
		var doy = -1;
		var literal = false;
		// Check whether a format character is doubled
		var lookAhead = function(match) {
			var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) == match);
			if (matches)
				iFormat++;
			return matches;
		};
		// Extract a number from the string value
		var getNumber = function(match) {
			var isDoubled = lookAhead(match);
			var size = (match == '@' ? 14 : (match == '!' ? 20 :
				(match == 'y' && isDoubled ? 4 : (match == 'o' ? 3 : 2))));
			var digits = new RegExp('^\\d{1,' + size + '}');
			var num = value.substring(iValue).match(digits);
			if (!num)
				throw 'Missing number at position ' + iValue;
			iValue += num[0].length;
			return parseInt(num[0], 10);
		};
		// Extract a name from the string value and convert to an index
		var getName = function(match, shortNames, longNames) {
			var names = (lookAhead(match) ? longNames : shortNames);
			for (var i = 0; i < names.length; i++) {
				if (value.substr(iValue, names[i].length).toLowerCase() == names[i].toLowerCase()) {
					iValue += names[i].length;
					return i + 1;
				}
			}
			throw 'Unknown name at position ' + iValue;
		};
		// Confirm that a literal character matches the string value
		var checkLiteral = function() {
			if (value.charAt(iValue) != format.charAt(iFormat))
				throw 'Unexpected literal at position ' + iValue;
			iValue++;
		};
		var iValue = 0;
		for (var iFormat = 0; iFormat < format.length; iFormat++) {
			if (literal)
				if (format.charAt(iFormat) == "'" && !lookAhead("'"))
					literal = false;
				else
					checkLiteral();
			else
				switch (format.charAt(iFormat)) {
					case 'd':
						day = getNumber('d');
						break;
					case 'D':
						getName('D', dayNamesShort, dayNames);
						break;
					case 'o':
						doy = getNumber('o');
						break;
					case 'm':
						month = getNumber('m');
						break;
					case 'M':
						month = getName('M', monthNamesShort, monthNames);
						break;
					case 'y':
						year = getNumber('y');
						break;
					case '@':
						var date = new Date(getNumber('@'));
						year = date.getFullYear();
						month = date.getMonth() + 1;
						day = date.getDate();
						break;
					case '!':
						var date = new Date((getNumber('!') - this._ticksTo1970) / 10000);
						year = date.getFullYear();
						month = date.getMonth() + 1;
						day = date.getDate();
						break;
					case "'":
						if (lookAhead("'"))
							checkLiteral();
						else
							literal = true;
						break;
					default:
						checkLiteral();
				}
		}
		if (year == -1)
			year = new Date().getFullYear();
		else if (year < 100)
			year += new Date().getFullYear() - new Date().getFullYear() % 100 +
				(year <= shortYearCutoff ? 0 : -100);
		if (doy > -1) {
			month = 1;
			day = doy;
			do {
				var dim = this._getDaysInMonth(year, month - 1);
				if (day <= dim)
					break;
				month++;
				day -= dim;
			} while (true);
		}
		var date = this._daylightSavingAdjust(new Date(year, month - 1, day));
		if (date.getFullYear() != year || date.getMonth() + 1 != month || date.getDate() != day)
			throw 'Invalid date'; // E.g. 31/02/*
		return date;
	},

	/* Standard date formats. */
	ATOM: 'yy-mm-dd', // RFC 3339 (ISO 8601)
	COOKIE: 'D, dd M yy',
	ISO_8601: 'yy-mm-dd',
	RFC_822: 'D, d M y',
	RFC_850: 'DD, dd-M-y',
	RFC_1036: 'D, d M y',
	RFC_1123: 'D, d M yy',
	RFC_2822: 'D, d M yy',
	RSS: 'D, d M y', // RFC 822
	TICKS: '!',
	TIMESTAMP: '@',
	W3C: 'yy-mm-dd', // ISO 8601

	_ticksTo1970: (((1970 - 1) * 365 + Math.floor(1970 / 4) - Math.floor(1970 / 100) +
		Math.floor(1970 / 400)) * 24 * 60 * 60 * 10000000),

	/* Format a date object into a string value.
	   The format can be combinations of the following:
	   d  - day of month (no leading zero)
	   dd - day of month (two digit)
	   o  - day of year (no leading zeros)
	   oo - day of year (three digit)
	   D  - day name short
	   DD - day name long
	   m  - month of year (no leading zero)
	   mm - month of year (two digit)
	   M  - month name short
	   MM - month name long
	   y  - year (two digit)
	   yy - year (four digit)
	   @ - Unix timestamp (ms since 01/01/1970)
	   ! - Windows ticks (100ns since 01/01/0001)
	   '...' - literal text
	   '' - single quote

	   @param  format    string - the desired format of the date
	   @param  date      Date - the date value to format
	   @param  settings  Object - attributes include:
	                     dayNamesShort    string[7] - abbreviated names of the days from Sunday (optional)
	                     dayNames         string[7] - names of the days from Sunday (optional)
	                     monthNamesShort  string[12] - abbreviated names of the months (optional)
	                     monthNames       string[12] - names of the months (optional)
	   @return  string - the date in the above format */
	formatDate: function (format, date, settings) {
		if (!date)
			return '';
		var dayNamesShort = (settings ? settings.dayNamesShort : null) || this._defaults.dayNamesShort;
		var dayNames = (settings ? settings.dayNames : null) || this._defaults.dayNames;
		var monthNamesShort = (settings ? settings.monthNamesShort : null) || this._defaults.monthNamesShort;
		var monthNames = (settings ? settings.monthNames : null) || this._defaults.monthNames;
		// Check whether a format character is doubled
		var lookAhead = function(match) {
			var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) == match);
			if (matches)
				iFormat++;
			return matches;
		};
		// Format a number, with leading zero if necessary
		var formatNumber = function(match, value, len) {
			var num = '' + value;
			if (lookAhead(match))
				while (num.length < len)
					num = '0' + num;
			return num;
		};
		// Format a name, short or long as requested
		var formatName = function(match, value, shortNames, longNames) {
			return (lookAhead(match) ? longNames[value] : shortNames[value]);
		};
		var output = '';
		var literal = false;
		if (date)
			for (var iFormat = 0; iFormat < format.length; iFormat++) {
				if (literal)
					if (format.charAt(iFormat) == "'" && !lookAhead("'"))
						literal = false;
					else
						output += format.charAt(iFormat);
				else
					switch (format.charAt(iFormat)) {
						case 'd':
							output += formatNumber('d', date.getDate(), 2);
							break;
						case 'D':
							output += formatName('D', date.getDay(), dayNamesShort, dayNames);
							break;
						case 'o':
							output += formatNumber('o',
								(date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000, 3);
							break;
						case 'm':
							output += formatNumber('m', date.getMonth() + 1, 2);
							break;
						case 'M':
							output += formatName('M', date.getMonth(), monthNamesShort, monthNames);
							break;
						case 'y':
							output += (lookAhead('y') ? date.getFullYear() :
								(date.getYear() % 100 < 10 ? '0' : '') + date.getYear() % 100);
							break;
						case '@':
							output += date.getTime();
							break;
						case '!':
							output += date.getTime() * 10000 + this._ticksTo1970;
							break;
						case "'":
							if (lookAhead("'"))
								output += "'";
							else
								literal = true;
							break;
						default:
							output += format.charAt(iFormat);
					}
			}
		return output;
	},

	/* Extract all possible characters from the date format. */
	_possibleChars: function (format) {
		var chars = '';
		var literal = false;
		// Check whether a format character is doubled
		var lookAhead = function(match) {
			var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) == match);
			if (matches)
				iFormat++;
			return matches;
		};
		for (var iFormat = 0; iFormat < format.length; iFormat++)
			if (literal)
				if (format.charAt(iFormat) == "'" && !lookAhead("'"))
					literal = false;
				else
					chars += format.charAt(iFormat);
			else
				switch (format.charAt(iFormat)) {
					case 'd': case 'm': case 'y': case '@':
						chars += '0123456789';
						break;
					case 'D': case 'M':
						return null; // Accept anything
					case "'":
						if (lookAhead("'"))
							chars += "'";
						else
							literal = true;
						break;
					default:
						chars += format.charAt(iFormat);
				}
		return chars;
	},

	/* Get a setting value, defaulting if necessary. */
	_get: function(inst, name) {
		return inst.settings[name] !== undefined ?
			inst.settings[name] : this._defaults[name];
	},

	/* Parse existing date and initialise date picker. */
	_setDateFromField: function(inst, noDefault) {
		if (inst.input.val() == inst.lastVal) {
			return;
		}
		var dateFormat = this._get(inst, 'dateFormat');
		var dates = inst.lastVal = inst.input ? inst.input.val() : null;
		var date, defaultDate;
		date = defaultDate = this._getDefaultDate(inst);
		var settings = this._getFormatConfig(inst);
		try {
			date = this.parseDate(dateFormat, dates, settings) || defaultDate;
		} catch (event) {
			this.log(event);
			dates = (noDefault ? '' : dates);
		}
		inst.selectedDay = date.getDate();
		inst.drawMonth = inst.selectedMonth = date.getMonth();
		inst.drawYear = inst.selectedYear = date.getFullYear();
		inst.currentDay = (dates ? date.getDate() : 0);
		inst.currentMonth = (dates ? date.getMonth() : 0);
		inst.currentYear = (dates ? date.getFullYear() : 0);
		this._adjustInstDate(inst);
	},

	/* Retrieve the default date shown on opening. */
	_getDefaultDate: function(inst) {
		return this._restrictMinMax(inst,
			this._determineDate(inst, this._get(inst, 'defaultDate'), new Date()));
	},

	/* A date may be specified as an exact value or a relative one. */
	_determineDate: function(inst, date, defaultDate) {
		var offsetNumeric = function(offset) {
			var date = new Date();
			date.setDate(date.getDate() + offset);
			return date;
		};
		var offsetString = function(offset) {
			try {
				return $.datepicker.parseDate($.datepicker._get(inst, 'dateFormat'),
					offset, $.datepicker._getFormatConfig(inst));
			}
			catch (e) {
				// Ignore
			}
			var date = (offset.toLowerCase().match(/^c/) ?
				$.datepicker._getDate(inst) : null) || new Date();
			var year = date.getFullYear();
			var month = date.getMonth();
			var day = date.getDate();
			var pattern = /([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g;
			var matches = pattern.exec(offset);
			while (matches) {
				switch (matches[2] || 'd') {
					case 'd' : case 'D' :
						day += parseInt(matches[1],10); break;
					case 'w' : case 'W' :
						day += parseInt(matches[1],10) * 7; break;
					case 'm' : case 'M' :
						month += parseInt(matches[1],10);
						day = Math.min(day, $.datepicker._getDaysInMonth(year, month));
						break;
					case 'y': case 'Y' :
						year += parseInt(matches[1],10);
						day = Math.min(day, $.datepicker._getDaysInMonth(year, month));
						break;
				}
				matches = pattern.exec(offset);
			}
			return new Date(year, month, day);
		};
		var newDate = (date == null || date === '' ? defaultDate : (typeof date == 'string' ? offsetString(date) :
			(typeof date == 'number' ? (isNaN(date) ? defaultDate : offsetNumeric(date)) : new Date(date.getTime()))));
		newDate = (newDate && newDate.toString() == 'Invalid Date' ? defaultDate : newDate);
		if (newDate) {
			newDate.setHours(0);
			newDate.setMinutes(0);
			newDate.setSeconds(0);
			newDate.setMilliseconds(0);
		}
		return this._daylightSavingAdjust(newDate);
	},

	/* Handle switch to/from daylight saving.
	   Hours may be non-zero on daylight saving cut-over:
	   > 12 when midnight changeover, but then cannot generate
	   midnight datetime, so jump to 1AM, otherwise reset.
	   @param  date  (Date) the date to check
	   @return  (Date) the corrected date */
	_daylightSavingAdjust: function(date) {
		if (!date) return null;
		date.setHours(date.getHours() > 12 ? date.getHours() + 2 : 0);
		return date;
	},

	/* Set the date(s) directly. */
	_setDate: function(inst, date, noChange) {
		var clear = !date;
		var origMonth = inst.selectedMonth;
		var origYear = inst.selectedYear;
		var newDate = this._restrictMinMax(inst, this._determineDate(inst, date, new Date()));
		inst.selectedDay = inst.currentDay = newDate.getDate();
		inst.drawMonth = inst.selectedMonth = inst.currentMonth = newDate.getMonth();
		inst.drawYear = inst.selectedYear = inst.currentYear = newDate.getFullYear();
		if ((origMonth != inst.selectedMonth || origYear != inst.selectedYear) && !noChange)
			this._notifyChange(inst);
		this._adjustInstDate(inst);
		if (inst.input) {
			inst.input.val(clear ? '' : this._formatDate(inst));
		}
	},

	/* Retrieve the date(s) directly. */
	_getDate: function(inst) {
		var startDate = (!inst.currentYear || (inst.input && inst.input.val() == '') ? null :
			this._daylightSavingAdjust(new Date(
			inst.currentYear, inst.currentMonth, inst.currentDay)));
			return startDate;
	},

	/* Generate the HTML for the current state of the date picker. */
	_generateHTML: function(inst) {
		var today = new Date();
		today = this._daylightSavingAdjust(
			new Date(today.getFullYear(), today.getMonth(), today.getDate())); // clear time
		var isRTL = this._get(inst, 'isRTL');
		var showButtonPanel = this._get(inst, 'showButtonPanel');
		var hideIfNoPrevNext = this._get(inst, 'hideIfNoPrevNext');
		var navigationAsDateFormat = this._get(inst, 'navigationAsDateFormat');
		var numMonths = this._getNumberOfMonths(inst);
		var showCurrentAtPos = this._get(inst, 'showCurrentAtPos');
		var stepMonths = this._get(inst, 'stepMonths');
		var isMultiMonth = (numMonths[0] != 1 || numMonths[1] != 1);
		var currentDate = this._daylightSavingAdjust((!inst.currentDay ? new Date(9999, 9, 9) :
			new Date(inst.currentYear, inst.currentMonth, inst.currentDay)));
		var minDate = this._getMinMaxDate(inst, 'min');
		var maxDate = this._getMinMaxDate(inst, 'max');
		var drawMonth = inst.drawMonth - showCurrentAtPos;
		var drawYear = inst.drawYear;
		if (drawMonth < 0) {
			drawMonth += 12;
			drawYear--;
		}
		if (maxDate) {
			var maxDraw = this._daylightSavingAdjust(new Date(maxDate.getFullYear(),
				maxDate.getMonth() - (numMonths[0] * numMonths[1]) + 1, maxDate.getDate()));
			maxDraw = (minDate && maxDraw < minDate ? minDate : maxDraw);
			while (this._daylightSavingAdjust(new Date(drawYear, drawMonth, 1)) > maxDraw) {
				drawMonth--;
				if (drawMonth < 0) {
					drawMonth = 11;
					drawYear--;
				}
			}
		}
		inst.drawMonth = drawMonth;
		inst.drawYear = drawYear;
		var prevText = this._get(inst, 'prevText');
		prevText = (!navigationAsDateFormat ? prevText : this.formatDate(prevText,
			this._daylightSavingAdjust(new Date(drawYear, drawMonth - stepMonths, 1)),
			this._getFormatConfig(inst)));
		var prev = (this._canAdjustMonth(inst, -1, drawYear, drawMonth) ?
			'<a class="ui-datepicker-prev ui-corner-all" onclick="DP_jQuery_' + dpuuid +
			'.datepicker._adjustDate(\'#' + inst.id + '\', -' + stepMonths + ', \'M\');"' +
			' title="' + prevText + '"><span class="ui-icon ui-icon-circle-triangle-' + ( isRTL ? 'e' : 'w') + '">' + prevText + '</span></a>' :
			(hideIfNoPrevNext ? '' : '<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="'+ prevText +'"><span class="ui-icon ui-icon-circle-triangle-' + ( isRTL ? 'e' : 'w') + '">' + prevText + '</span></a>'));
		var nextText = this._get(inst, 'nextText');
		nextText = (!navigationAsDateFormat ? nextText : this.formatDate(nextText,
			this._daylightSavingAdjust(new Date(drawYear, drawMonth + stepMonths, 1)),
			this._getFormatConfig(inst)));
		var next = (this._canAdjustMonth(inst, +1, drawYear, drawMonth) ?
			'<a class="ui-datepicker-next ui-corner-all" onclick="DP_jQuery_' + dpuuid +
			'.datepicker._adjustDate(\'#' + inst.id + '\', +' + stepMonths + ', \'M\');"' +
			' title="' + nextText + '"><span class="ui-icon ui-icon-circle-triangle-' + ( isRTL ? 'w' : 'e') + '">' + nextText + '</span></a>' :
			(hideIfNoPrevNext ? '' : '<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="'+ nextText + '"><span class="ui-icon ui-icon-circle-triangle-' + ( isRTL ? 'w' : 'e') + '">' + nextText + '</span></a>'));
		var currentText = this._get(inst, 'currentText');
		var gotoDate = (this._get(inst, 'gotoCurrent') && inst.currentDay ? currentDate : today);
		currentText = (!navigationAsDateFormat ? currentText :
			this.formatDate(currentText, gotoDate, this._getFormatConfig(inst)));
		var controls = (!inst.inline ? '<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" onclick="DP_jQuery_' + dpuuid +
			'.datepicker._hideDatepicker();">' + this._get(inst, 'closeText') + '</button>' : '');
		var buttonPanel = (showButtonPanel) ? '<div class="ui-datepicker-buttonpane ui-widget-content">' + (isRTL ? controls : '') +
			(this._isInRange(inst, gotoDate) ? '<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" onclick="DP_jQuery_' + dpuuid +
			'.datepicker._gotoToday(\'#' + inst.id + '\');"' +
			'>' + currentText + '</button>' : '') + (isRTL ? '' : controls) + '</div>' : '';
		var firstDay = parseInt(this._get(inst, 'firstDay'),10);
		firstDay = (isNaN(firstDay) ? 0 : firstDay);
		var showWeek = this._get(inst, 'showWeek');
		var dayNames = this._get(inst, 'dayNames');
		var dayNamesShort = this._get(inst, 'dayNamesShort');
		var dayNamesMin = this._get(inst, 'dayNamesMin');
		var monthNames = this._get(inst, 'monthNames');
		var monthNamesShort = this._get(inst, 'monthNamesShort');
		var beforeShowDay = this._get(inst, 'beforeShowDay');
		var showOtherMonths = this._get(inst, 'showOtherMonths');
		var selectOtherMonths = this._get(inst, 'selectOtherMonths');
		var calculateWeek = this._get(inst, 'calculateWeek') || this.iso8601Week;
		var defaultDate = this._getDefaultDate(inst);
		var html = '';
		for (var row = 0; row < numMonths[0]; row++) {
			var group = '';
			for (var col = 0; col < numMonths[1]; col++) {
				var selectedDate = this._daylightSavingAdjust(new Date(drawYear, drawMonth, inst.selectedDay));
				var cornerClass = ' ui-corner-all';
				var calender = '';
				if (isMultiMonth) {
					calender += '<div class="ui-datepicker-group';
					if (numMonths[1] > 1)
						switch (col) {
							case 0: calender += ' ui-datepicker-group-first';
								cornerClass = ' ui-corner-' + (isRTL ? 'right' : 'left'); break;
							case numMonths[1]-1: calender += ' ui-datepicker-group-last';
								cornerClass = ' ui-corner-' + (isRTL ? 'left' : 'right'); break;
							default: calender += ' ui-datepicker-group-middle'; cornerClass = ''; break;
						}
					calender += '">';
				}
				calender += '<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix' + cornerClass + '">' +
					(/all|left/.test(cornerClass) && row == 0 ? (isRTL ? next : prev) : '') +
					(/all|right/.test(cornerClass) && row == 0 ? (isRTL ? prev : next) : '') +
					this._generateMonthYearHeader(inst, drawMonth, drawYear, minDate, maxDate,
					row > 0 || col > 0, monthNames, monthNamesShort) + // draw month headers
					'</div><table class="ui-datepicker-calendar"><thead>' +
					'<tr>';
				var thead = (showWeek ? '<th class="ui-datepicker-week-col">' + this._get(inst, 'weekHeader') + '</th>' : '');
				for (var dow = 0; dow < 7; dow++) { // days of the week
					var day = (dow + firstDay) % 7;
					thead += '<th' + ((dow + firstDay + 6) % 7 >= 5 ? ' class="ui-datepicker-week-end"' : '') + '>' +
						'<span title="' + dayNames[day] + '">' + dayNamesMin[day] + '</span></th>';
				}
				calender += thead + '</tr></thead><tbody>';
				var daysInMonth = this._getDaysInMonth(drawYear, drawMonth);
				if (drawYear == inst.selectedYear && drawMonth == inst.selectedMonth)
					inst.selectedDay = Math.min(inst.selectedDay, daysInMonth);
				var leadDays = (this._getFirstDayOfMonth(drawYear, drawMonth) - firstDay + 7) % 7;
				var numRows = (isMultiMonth ? 6 : Math.ceil((leadDays + daysInMonth) / 7)); // calculate the number of rows to generate
				var printDate = this._daylightSavingAdjust(new Date(drawYear, drawMonth, 1 - leadDays));
				for (var dRow = 0; dRow < numRows; dRow++) { // create date picker rows
					calender += '<tr>';
					var tbody = (!showWeek ? '' : '<td class="ui-datepicker-week-col">' +
						this._get(inst, 'calculateWeek')(printDate) + '</td>');
					for (var dow = 0; dow < 7; dow++) { // create date picker days
						var daySettings = (beforeShowDay ?
							beforeShowDay.apply((inst.input ? inst.input[0] : null), [printDate]) : [true, '']);
						var otherMonth = (printDate.getMonth() != drawMonth);
						var unselectable = (otherMonth && !selectOtherMonths) || !daySettings[0] ||
							(minDate && printDate < minDate) || (maxDate && printDate > maxDate);
						tbody += '<td class="' +
							((dow + firstDay + 6) % 7 >= 5 ? ' ui-datepicker-week-end' : '') + // highlight weekends
							(otherMonth ? ' ui-datepicker-other-month' : '') + // highlight days from other months
							((printDate.getTime() == selectedDate.getTime() && drawMonth == inst.selectedMonth && inst._keyEvent) || // user pressed key
							(defaultDate.getTime() == printDate.getTime() && defaultDate.getTime() == selectedDate.getTime()) ?
							// or defaultDate is current printedDate and defaultDate is selectedDate
							' ' + this._dayOverClass : '') + // highlight selected day
							(unselectable ? ' ' + this._unselectableClass + ' ui-state-disabled': '') +  // highlight unselectable days
							(otherMonth && !showOtherMonths ? '' : ' ' + daySettings[1] + // highlight custom dates
							(printDate.getTime() == currentDate.getTime() ? ' ' + this._currentClass : '') + // highlight selected day
							(printDate.getTime() == today.getTime() ? ' ui-datepicker-today' : '')) + '"' + // highlight today (if different)
							((!otherMonth || showOtherMonths) && daySettings[2] ? ' title="' + daySettings[2] + '"' : '') + // cell title
							(unselectable ? '' : ' onclick="DP_jQuery_' + dpuuid + '.datepicker._selectDay(\'#' +
							inst.id + '\',' + printDate.getMonth() + ',' + printDate.getFullYear() + ', this);return false;"') + '>' + // actions
							(otherMonth && !showOtherMonths ? '&#xa0;' : // display for other months
							(unselectable ? '<span class="ui-state-default">' + printDate.getDate() + '</span>' : '<a class="ui-state-default' +
							(printDate.getTime() == today.getTime() ? ' ui-state-highlight' : '') +
							(printDate.getTime() == currentDate.getTime() ? ' ui-state-active' : '') + // highlight selected day
							(otherMonth ? ' ui-priority-secondary' : '') + // distinguish dates from other months
							'" href="#">' + printDate.getDate() + '</a>')) + '</td>'; // display selectable date
						printDate.setDate(printDate.getDate() + 1);
						printDate = this._daylightSavingAdjust(printDate);
					}
					calender += tbody + '</tr>';
				}
				drawMonth++;
				if (drawMonth > 11) {
					drawMonth = 0;
					drawYear++;
				}
				calender += '</tbody></table>' + (isMultiMonth ? '</div>' + 
							((numMonths[0] > 0 && col == numMonths[1]-1) ? '<div class="ui-datepicker-row-break"></div>' : '') : '');
				group += calender;
			}
			html += group;
		}
		html += buttonPanel + ($.browser.msie && parseInt($.browser.version,10) < 7 && !inst.inline ?
			'<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>' : '');
		inst._keyEvent = false;
		return html;
	},

	/* Generate the month and year header. */
	_generateMonthYearHeader: function(inst, drawMonth, drawYear, minDate, maxDate,
			secondary, monthNames, monthNamesShort) {
		var changeMonth = this._get(inst, 'changeMonth');
		var changeYear = this._get(inst, 'changeYear');
		var showMonthAfterYear = this._get(inst, 'showMonthAfterYear');
		var html = '<div class="ui-datepicker-title">';
		var monthHtml = '';
		// month selection
		if (secondary || !changeMonth)
			monthHtml += '<span class="ui-datepicker-month">' + monthNames[drawMonth] + '</span>';
		else {
			var inMinYear = (minDate && minDate.getFullYear() == drawYear);
			var inMaxYear = (maxDate && maxDate.getFullYear() == drawYear);
			monthHtml += '<select class="ui-datepicker-month" ' +
				'onchange="DP_jQuery_' + dpuuid + '.datepicker._selectMonthYear(\'#' + inst.id + '\', this, \'M\');" ' +
				'onclick="DP_jQuery_' + dpuuid + '.datepicker._clickMonthYear(\'#' + inst.id + '\');"' +
			 	'>';
			for (var month = 0; month < 12; month++) {
				if ((!inMinYear || month >= minDate.getMonth()) &&
						(!inMaxYear || month <= maxDate.getMonth()))
					monthHtml += '<option value="' + month + '"' +
						(month == drawMonth ? ' selected="selected"' : '') +
						'>' + monthNamesShort[month] + '</option>';
			}
			monthHtml += '</select>';
		}
		if (!showMonthAfterYear)
			html += monthHtml + (secondary || !(changeMonth && changeYear) ? '&#xa0;' : '');
		// year selection
		inst.yearshtml = '';
		if (secondary || !changeYear)
			html += '<span class="ui-datepicker-year">' + drawYear + '</span>';
		else {
			// determine range of years to display
			var years = this._get(inst, 'yearRange').split(':');
			var thisYear = new Date().getFullYear();
			var determineYear = function(value) {
				var year = (value.match(/c[+-].*/) ? drawYear + parseInt(value.substring(1), 10) :
					(value.match(/[+-].*/) ? thisYear + parseInt(value, 10) :
					parseInt(value, 10)));
				return (isNaN(year) ? thisYear : year);
			};
			var year = determineYear(years[0]);
			var endYear = Math.max(year, determineYear(years[1] || ''));
			year = (minDate ? Math.max(year, minDate.getFullYear()) : year);
			endYear = (maxDate ? Math.min(endYear, maxDate.getFullYear()) : endYear);
			inst.yearshtml += '<select class="ui-datepicker-year" ' +
				'onchange="DP_jQuery_' + dpuuid + '.datepicker._selectMonthYear(\'#' + inst.id + '\', this, \'Y\');" ' +
				'onclick="DP_jQuery_' + dpuuid + '.datepicker._clickMonthYear(\'#' + inst.id + '\');"' +
				'>';
			for (; year <= endYear; year++) {
				inst.yearshtml += '<option value="' + year + '"' +
					(year == drawYear ? ' selected="selected"' : '') +
					'>' + year + '</option>';
			}
			inst.yearshtml += '</select>';
			//when showing there is no need for later update
			if( ! $.browser.mozilla ){
				html += inst.yearshtml;
				inst.yearshtml = null;
			} else {
				// will be replaced later with inst.yearshtml
				html += '<select class="ui-datepicker-year"><option value="' + drawYear + '" selected="selected">' + drawYear + '</option></select>';
			}
		}
		html += this._get(inst, 'yearSuffix');
		if (showMonthAfterYear)
			html += (secondary || !(changeMonth && changeYear) ? '&#xa0;' : '') + monthHtml;
		html += '</div>'; // Close datepicker_header
		return html;
	},

	/* Adjust one of the date sub-fields. */
	_adjustInstDate: function(inst, offset, period) {
		var year = inst.drawYear + (period == 'Y' ? offset : 0);
		var month = inst.drawMonth + (period == 'M' ? offset : 0);
		var day = Math.min(inst.selectedDay, this._getDaysInMonth(year, month)) +
			(period == 'D' ? offset : 0);
		var date = this._restrictMinMax(inst,
			this._daylightSavingAdjust(new Date(year, month, day)));
		inst.selectedDay = date.getDate();
		inst.drawMonth = inst.selectedMonth = date.getMonth();
		inst.drawYear = inst.selectedYear = date.getFullYear();
		if (period == 'M' || period == 'Y')
			this._notifyChange(inst);
	},

	/* Ensure a date is within any min/max bounds. */
	_restrictMinMax: function(inst, date) {
		var minDate = this._getMinMaxDate(inst, 'min');
		var maxDate = this._getMinMaxDate(inst, 'max');
		var newDate = (minDate && date < minDate ? minDate : date);
		newDate = (maxDate && newDate > maxDate ? maxDate : newDate);
		return newDate;
	},

	/* Notify change of month/year. */
	_notifyChange: function(inst) {
		var onChange = this._get(inst, 'onChangeMonthYear');
		if (onChange)
			onChange.apply((inst.input ? inst.input[0] : null),
				[inst.selectedYear, inst.selectedMonth + 1, inst]);
	},

	/* Determine the number of months to show. */
	_getNumberOfMonths: function(inst) {
		var numMonths = this._get(inst, 'numberOfMonths');
		return (numMonths == null ? [1, 1] : (typeof numMonths == 'number' ? [1, numMonths] : numMonths));
	},

	/* Determine the current maximum date - ensure no time components are set. */
	_getMinMaxDate: function(inst, minMax) {
		return this._determineDate(inst, this._get(inst, minMax + 'Date'), null);
	},

	/* Find the number of days in a given month. */
	_getDaysInMonth: function(year, month) {
		return 32 - this._daylightSavingAdjust(new Date(year, month, 32)).getDate();
	},

	/* Find the day of the week of the first of a month. */
	_getFirstDayOfMonth: function(year, month) {
		return new Date(year, month, 1).getDay();
	},

	/* Determines if we should allow a "next/prev" month display change. */
	_canAdjustMonth: function(inst, offset, curYear, curMonth) {
		var numMonths = this._getNumberOfMonths(inst);
		var date = this._daylightSavingAdjust(new Date(curYear,
			curMonth + (offset < 0 ? offset : numMonths[0] * numMonths[1]), 1));
		if (offset < 0)
			date.setDate(this._getDaysInMonth(date.getFullYear(), date.getMonth()));
		return this._isInRange(inst, date);
	},

	/* Is the given date in the accepted range? */
	_isInRange: function(inst, date) {
		var minDate = this._getMinMaxDate(inst, 'min');
		var maxDate = this._getMinMaxDate(inst, 'max');
		return ((!minDate || date.getTime() >= minDate.getTime()) &&
			(!maxDate || date.getTime() <= maxDate.getTime()));
	},

	/* Provide the configuration settings for formatting/parsing. */
	_getFormatConfig: function(inst) {
		var shortYearCutoff = this._get(inst, 'shortYearCutoff');
		shortYearCutoff = (typeof shortYearCutoff != 'string' ? shortYearCutoff :
			new Date().getFullYear() % 100 + parseInt(shortYearCutoff, 10));
		return {shortYearCutoff: shortYearCutoff,
			dayNamesShort: this._get(inst, 'dayNamesShort'), dayNames: this._get(inst, 'dayNames'),
			monthNamesShort: this._get(inst, 'monthNamesShort'), monthNames: this._get(inst, 'monthNames')};
	},

	/* Format the given date for display. */
	_formatDate: function(inst, day, month, year) {
		if (!day) {
			inst.currentDay = inst.selectedDay;
			inst.currentMonth = inst.selectedMonth;
			inst.currentYear = inst.selectedYear;
		}
		var date = (day ? (typeof day == 'object' ? day :
			this._daylightSavingAdjust(new Date(year, month, day))) :
			this._daylightSavingAdjust(new Date(inst.currentYear, inst.currentMonth, inst.currentDay)));
		return this.formatDate(this._get(inst, 'dateFormat'), date, this._getFormatConfig(inst));
	}
});

/* jQuery extend now ignores nulls! */
function extendRemove(target, props) {
	$.extend(target, props);
	for (var name in props)
		if (props[name] == null || props[name] == undefined)
			target[name] = props[name];
	return target;
};

/* Determine whether an object is an array. */
function isArray(a) {
	return (a && (($.browser.safari && typeof a == 'object' && a.length) ||
		(a.constructor && a.constructor.toString().match(/\Array\(\)/))));
};

/* Invoke the datepicker functionality.
   @param  options  string - a command, optionally followed by additional parameters or
                    Object - settings for attaching new datepicker functionality
   @return  jQuery object */
$.fn.datepicker = function(options){
	
	/* Verify an empty collection wasn't passed - Fixes #6976 */
	if ( !this.length ) {
		return this;
	}
	
	/* Initialise the date picker. */
	if (!$.datepicker.initialized) {
		$(document).mousedown($.datepicker._checkExternalClick).
			find('body').append($.datepicker.dpDiv);
		$.datepicker.initialized = true;
	}

	var otherArgs = Array.prototype.slice.call(arguments, 1);
	if (typeof options == 'string' && (options == 'isDisabled' || options == 'getDate' || options == 'widget'))
		return $.datepicker['_' + options + 'Datepicker'].
			apply($.datepicker, [this[0]].concat(otherArgs));
	if (options == 'option' && arguments.length == 2 && typeof arguments[1] == 'string')
		return $.datepicker['_' + options + 'Datepicker'].
			apply($.datepicker, [this[0]].concat(otherArgs));
	return this.each(function() {
		typeof options == 'string' ?
			$.datepicker['_' + options + 'Datepicker'].
				apply($.datepicker, [this].concat(otherArgs)) :
			$.datepicker._attachDatepicker(this, options);
	});
};

$.datepicker = new Datepicker(); // singleton instance
$.datepicker.initialized = false;
$.datepicker.uuid = new Date().getTime();
$.datepicker.version = "1.8.10";

// Workaround for #4055
// Add another global to avoid noConflict issues with inline event handlers
window['DP_jQuery_' + dpuuid] = $;

})(jQuery);

;// Modernizr v1.7  www.modernizr.com
window.Modernizr=function(a,b,c){function G(){e.input=function(a){for(var b=0,c=a.length;b<c;b++)t[a[b]]=!!(a[b]in l);return t}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)l.setAttribute("type",f=a[d]),e=l.type!=="text",e&&(l.value=m,l.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&l.style.WebkitAppearance!==c?(g.appendChild(l),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(l,null).WebkitAppearance!=="textfield"&&l.offsetHeight!==0,g.removeChild(l)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=l.checkValidity&&l.checkValidity()===!1:/^color$/.test(f)?(g.appendChild(l),g.offsetWidth,e=l.value!=m,g.removeChild(l)):e=l.value!=m)),s[a[d]]=!!e;return s}("search tel url email datetime date month week time datetime-local number range color".split(" "))}function F(a,b){var c=a.charAt(0).toUpperCase()+a.substr(1),d=(a+" "+p.join(c+" ")+c).split(" ");return!!E(d,b)}function E(a,b){for(var d in a)if(k[a[d]]!==c&&(!b||b(a[d],j)))return!0}function D(a,b){return(""+a).indexOf(b)!==-1}function C(a,b){return typeof a===b}function B(a,b){return A(o.join(a+";")+(b||""))}function A(a){k.cssText=a}var d="1.7",e={},f=!0,g=b.documentElement,h=b.head||b.getElementsByTagName("head")[0],i="modernizr",j=b.createElement(i),k=j.style,l=b.createElement("input"),m=":)",n=Object.prototype.toString,o=" -webkit- -moz- -o- -ms- -khtml- ".split(" "),p="Webkit Moz O ms Khtml".split(" "),q={svg:"http://www.w3.org/2000/svg"},r={},s={},t={},u=[],v,w=function(a){var c=b.createElement("style"),d=b.createElement("div"),e;c.textContent=a+"{#modernizr{height:3px}}",h.appendChild(c),d.id="modernizr",g.appendChild(d),e=d.offsetHeight===3,c.parentNode.removeChild(c),d.parentNode.removeChild(d);return!!e},x=function(){function d(d,e){e=e||b.createElement(a[d]||"div");var f=(d="on"+d)in e;f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=C(e[d],"function"),C(e[d],c)||(e[d]=c),e.removeAttribute(d))),e=null;return f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),y=({}).hasOwnProperty,z;C(y,c)||C(y.call,c)?z=function(a,b){return b in a&&C(a.constructor.prototype[b],c)}:z=function(a,b){return y.call(a,b)},r.flexbox=function(){function c(a,b,c,d){a.style.cssText=o.join(b+":"+c+";")+(d||"")}function a(a,b,c,d){b+=":",a.style.cssText=(b+o.join(c+";"+b)).slice(0,-b.length)+(d||"")}var d=b.createElement("div"),e=b.createElement("div");a(d,"display","box","width:42px;padding:0;"),c(e,"box-flex","1","width:10px;"),d.appendChild(e),g.appendChild(d);var f=e.offsetWidth===42;d.removeChild(e),g.removeChild(d);return f},r.canvas=function(){var a=b.createElement("canvas");return a.getContext&&a.getContext("2d")},r.canvastext=function(){return e.canvas&&C(b.createElement("canvas").getContext("2d").fillText,"function")},r.webgl=function(){return!!a.WebGLRenderingContext},r.touch=function(){return"ontouchstart"in a||w("@media ("+o.join("touch-enabled),(")+"modernizr)")},r.geolocation=function(){return!!navigator.geolocation},r.postmessage=function(){return!!a.postMessage},r.websqldatabase=function(){var b=!!a.openDatabase;return b},r.indexedDB=function(){for(var b=-1,c=p.length;++b<c;){var d=p[b].toLowerCase();if(a[d+"_indexedDB"]||a[d+"IndexedDB"])return!0}return!1},r.hashchange=function(){return x("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},r.history=function(){return !!(a.history&&history.pushState)},r.draganddrop=function(){return x("dragstart")&&x("drop")},r.websockets=function(){return"WebSocket"in a},r.rgba=function(){A("background-color:rgba(150,255,150,.5)");return D(k.backgroundColor,"rgba")},r.hsla=function(){A("background-color:hsla(120,40%,100%,.5)");return D(k.backgroundColor,"rgba")||D(k.backgroundColor,"hsla")},r.multiplebgs=function(){A("background:url(//:),url(//:),red url(//:)");return(new RegExp("(url\\s*\\(.*?){3}")).test(k.background)},r.backgroundsize=function(){return F("backgroundSize")},r.borderimage=function(){return F("borderImage")},r.borderradius=function(){return F("borderRadius","",function(a){return D(a,"orderRadius")})},r.boxshadow=function(){return F("boxShadow")},r.textshadow=function(){return b.createElement("div").style.textShadow===""},r.opacity=function(){B("opacity:.55");return/^0.55$/.test(k.opacity)},r.cssanimations=function(){return F("animationName")},r.csscolumns=function(){return F("columnCount")},r.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";A((a+o.join(b+a)+o.join(c+a)).slice(0,-a.length));return D(k.backgroundImage,"gradient")},r.cssreflections=function(){return F("boxReflect")},r.csstransforms=function(){return!!E(["transformProperty","WebkitTransform","MozTransform","OTransform","msTransform"])},r.csstransforms3d=function(){var a=!!E(["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"]);a&&"webkitPerspective"in g.style&&(a=w("@media ("+o.join("transform-3d),(")+"modernizr)"));return a},r.csstransitions=function(){return F("transitionProperty")},r.fontface=function(){var a,c,d=h||g,e=b.createElement("style"),f=b.implementation||{hasFeature:function(){return!1}};e.type="text/css",d.insertBefore(e,d.firstChild),a=e.sheet||e.styleSheet;var i=f.hasFeature("CSS2","")?function(b){if(!a||!b)return!1;var c=!1;try{a.insertRule(b,0),c=/src/i.test(a.cssRules[0].cssText),a.deleteRule(a.cssRules.length-1)}catch(d){}return c}:function(b){if(!a||!b)return!1;a.cssText=b;return a.cssText.length!==0&&/src/i.test(a.cssText)&&a.cssText.replace(/\r+|\n+/g,"").indexOf(b.split(" ")[0])===0};c=i('@font-face { font-family: "font"; src: url(data:,); }'),d.removeChild(e);return c},r.video=function(){var a=b.createElement("video"),c=!!a.canPlayType;if(c){c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"');var d='video/mp4; codecs="avc1.42E01E';c.h264=a.canPlayType(d+'"')||a.canPlayType(d+', mp4a.40.2"'),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"')}return c},r.audio=function(){var a=b.createElement("audio"),c=!!a.canPlayType;c&&(c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"'),c.mp3=a.canPlayType("audio/mpeg;"),c.wav=a.canPlayType('audio/wav; codecs="1"'),c.m4a=a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;"));return c},r.localstorage=function(){try{return!!localStorage.getItem}catch(a){return!1}},r.sessionstorage=function(){try{return!!sessionStorage.getItem}catch(a){return!1}},r.webWorkers=function(){return!!a.Worker},r.applicationcache=function(){return!!a.applicationCache},r.svg=function(){return!!b.createElementNS&&!!b.createElementNS(q.svg,"svg").createSVGRect},r.inlinesvg=function(){var a=b.createElement("div");a.innerHTML="<svg/>";return(a.firstChild&&a.firstChild.namespaceURI)==q.svg},r.smil=function(){return!!b.createElementNS&&/SVG/.test(n.call(b.createElementNS(q.svg,"animate")))},r.svgclippaths=function(){return!!b.createElementNS&&/SVG/.test(n.call(b.createElementNS(q.svg,"clipPath")))};for(var H in r)z(r,H)&&(v=H.toLowerCase(),e[v]=r[H](),u.push((e[v]?"":"no-")+v));e.input||G(),e.crosswindowmessaging=e.postmessage,e.historymanagement=e.history,e.addTest=function(a,b){a=a.toLowerCase();if(!e[a]){b=!!b(),g.className+=" "+(b?"":"no-")+a,e[a]=b;return e}},A(""),j=l=null,f&&a.attachEvent&&function(){var a=b.createElement("div");a.innerHTML="<elem></elem>";return a.childNodes.length!==1}()&&function(a,b){function p(a,b){var c=-1,d=a.length,e,f=[];while(++c<d)e=a[c],(b=e.media||b)!="screen"&&f.push(p(e.imports,b),e.cssText);return f.join("")}function o(a){var b=-1;while(++b<e)a.createElement(d[b])}var c="abbr|article|aside|audio|canvas|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",d=c.split("|"),e=d.length,f=new RegExp("(^|\\s)("+c+")","gi"),g=new RegExp("<(/*)("+c+")","gi"),h=new RegExp("(^|[^\\n]*?\\s)("+c+")([^\\n]*)({[\\n\\w\\W]*?})","gi"),i=b.createDocumentFragment(),j=b.documentElement,k=j.firstChild,l=b.createElement("body"),m=b.createElement("style"),n;o(b),o(i),k.insertBefore(m,k.firstChild),m.media="print",a.attachEvent("onbeforeprint",function(){var a=-1,c=p(b.styleSheets,"all"),k=[],o;n=n||b.body;while((o=h.exec(c))!=null)k.push((o[1]+o[2]+o[3]).replace(f,"$1.iepp_$2")+o[4]);m.styleSheet.cssText=k.join("\n");while(++a<e){var q=b.getElementsByTagName(d[a]),r=q.length,s=-1;while(++s<r)q[s].className.indexOf("iepp_")<0&&(q[s].className+=" iepp_"+d[a])}i.appendChild(n),j.appendChild(l),l.className=n.className,l.innerHTML=n.innerHTML.replace(g,"<$1font")}),a.attachEvent("onafterprint",function(){l.innerHTML="",j.removeChild(l),j.appendChild(n),m.styleSheet.cssText=""})}(a,b),e._enableHTML5=f,e._version=d,g.className=g.className.replace(/\bno-js\b/,"")+" js "+u.join(" ");return e}(this,this.document)
;// ColorBox v1.3.16 - a full featured, light-weight, customizable lightbox based on jQuery 1.3+
// Copyright (c) 2011 Jack Moore - jack@colorpowered.com
// Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
(function(a,b,c){function ba(b){if(!T){O=b,Z(a.extend(J,a.data(O,e))),x=a(O),P=0,J.rel!=="nofollow"&&(x=a("."+V).filter(function(){var b=a.data(this,e).rel||this.rel;return b===J.rel}),P=x.index(O),P===-1&&(x=x.add(O),P=x.length-1));if(!R){R=S=!0,q.show();if(J.returnFocus)try{O.blur(),a(O).one(k,function(){try{this.focus()}catch(a){}})}catch(c){}p.css({opacity:+J.opacity,cursor:J.overlayClose?"pointer":"auto"}).show(),J.w=X(J.initialWidth,"x"),J.h=X(J.initialHeight,"y"),U.position(0),n&&y.bind("resize."+o+" scroll."+o,function(){p.css({width:y.width(),height:y.height(),top:y.scrollTop(),left:y.scrollLeft()})}).trigger("resize."+o),$(g,J.onOpen),I.add(C).hide(),H.html(J.close).show()}U.load(!0)}}function _(){var a,b=f+"Slideshow_",c="click."+f,d,e,g;J.slideshow&&x[1]&&(d=function(){E.text(J.slideshowStop).unbind(c).bind(i,function(){if(P<x.length-1||J.loop)a=setTimeout(U.next,J.slideshowSpeed)}).bind(h,function(){clearTimeout(a)}).one(c+" "+j,e),q.removeClass(b+"off").addClass(b+"on"),a=setTimeout(U.next,J.slideshowSpeed)},e=function(){clearTimeout(a),E.text(J.slideshowStart).unbind([i,h,j,c].join(" ")).one(c,d),q.removeClass(b+"on").addClass(b+"off")},J.slideshowAuto?d():e())}function $(b,c){c&&c.call(O),a.event.trigger(b)}function Z(b){for(var c in b)a.isFunction(b[c])&&c.substring(0,2)!=="on"&&(b[c]=b[c].call(O));b.rel=b.rel||O.rel||"nofollow",b.href=a.trim(b.href||a(O).attr("href")),b.title=b.title||O.title}function Y(a){return J.photo||/\.(gif|png|jpg|jpeg|bmp)(?:\?([^#]*))?(?:#(\.*))?$/i.test(a)}function X(a,b){b=b==="x"?y.width():y.height();return typeof a=="string"?Math.round(/%/.test(a)?b/100*parseInt(a,10):parseInt(a,10)):a}function W(c,d){var e=b.createElement("div");e.id=c?f+c:!1,e.style.cssText=d||!1;return a(e)}var d={transition:"elastic",speed:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,inline:!1,html:!1,iframe:!1,fastIframe:!0,photo:!1,href:!1,title:!1,rel:!1,opacity:.9,preloading:!0,current:"image {current} of {total}",previous:"previous",next:"next",close:"close",open:!1,returnFocus:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,overlayClose:!0,escKey:!0,arrowKey:!0},e="colorbox",f="cbox",g=f+"_open",h=f+"_load",i=f+"_complete",j=f+"_cleanup",k=f+"_closed",l=f+"_purge",m=a.browser.msie&&!a.support.opacity,n=m&&a.browser.version<7,o=f+"_IE6",p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J={},K,L,M,N,O,P,Q,R,S,T=!1,U,V=f+"Element";U=a.fn[e]=a[e]=function(b,c){var f=this,g;if(!f[0]&&f.selector)return f;b=b||{},c&&(b.onComplete=c);if(!f[0]||f.selector===undefined)f=a("<a/>"),b.open=!0;f.each(function(){a.data(this,e,a.extend({},a.data(this,e)||d,b)),a(this).addClass(V)}),g=b.open,a.isFunction(g)&&(g=g.call(f)),g&&ba(f[0]);return f},U.init=function(){y=a(c),q=W().attr({id:e,"class":m?f+(n?"IE6":"IE"):""}),p=W("Overlay",n?"position:absolute":"").hide(),r=W("Wrapper"),s=W("Content").append(z=W("LoadedContent","width:0; height:0; overflow:hidden"),B=W("LoadingOverlay").add(W("LoadingGraphic")),C=W("Title"),D=W("Current"),F=W("Next"),G=W("Previous"),E=W("Slideshow").bind(g,_),H=W("Close")),r.append(W().append(W("TopLeft"),t=W("TopCenter"),W("TopRight")),W(!1,"clear:left").append(u=W("MiddleLeft"),s,v=W("MiddleRight")),W(!1,"clear:left").append(W("BottomLeft"),w=W("BottomCenter"),W("BottomRight"))).children().children().css({"float":"left"}),A=W(!1,"position:absolute; width:9999px; visibility:hidden; display:none"),a("body").prepend(p,q.append(r,A)),s.children().hover(function(){a(this).addClass("hover")},function(){a(this).removeClass("hover")}).addClass("hover"),K=t.height()+w.height()+s.outerHeight(!0)-s.height(),L=u.width()+v.width()+s.outerWidth(!0)-s.width(),M=z.outerHeight(!0),N=z.outerWidth(!0),q.css({"padding-bottom":K,"padding-right":L}).hide(),F.click(function(){U.next()}),G.click(function(){U.prev()}),H.click(function(){U.close()}),I=F.add(G).add(D).add(E),s.children().removeClass("hover"),a("."+V).live("click",function(a){a.button!==0&&typeof a.button!="undefined"||a.ctrlKey||a.shiftKey||a.altKey||(a.preventDefault(),ba(this))}),p.click(function(){J.overlayClose&&U.close()}),a(b).bind("keydown",function(a){R&&J.escKey&&a.keyCode===27&&(a.preventDefault(),U.close()),R&&J.arrowKey&&!S&&x[1]&&(a.keyCode===37&&(P||J.loop)?(a.preventDefault(),G.click()):a.keyCode===39&&(P<x.length-1||J.loop)&&(a.preventDefault(),F.click()))})},U.remove=function(){q.add(p).remove(),a("."+V).die("click").removeData(e).removeClass(V)},U.position=function(a,c){function g(a){t[0].style.width=w[0].style.width=s[0].style.width=a.style.width,B[0].style.height=B[1].style.height=s[0].style.height=u[0].style.height=v[0].style.height=a.style.height}var d,e=Math.max(b.documentElement.clientHeight-J.h-M-K,0)/2+y.scrollTop(),f=Math.max(y.width()-J.w-N-L,0)/2+y.scrollLeft();d=q.width()===J.w+N&&q.height()===J.h+M?0:a,r[0].style.width=r[0].style.height="9999px",q.dequeue().animate({width:J.w+N,height:J.h+M,top:e,left:f},{duration:d,complete:function(){g(this),S=!1,r[0].style.width=J.w+N+L+"px",r[0].style.height=J.h+M+K+"px",c&&c()},step:function(){g(this)}})},U.resize=function(a){if(R){a=a||{},a.width&&(J.w=X(a.width,"x")-N-L),a.innerWidth&&(J.w=X(a.innerWidth,"x")),z.css({width:J.w}),a.height&&(J.h=X(a.height,"y")-M-K),a.innerHeight&&(J.h=X(a.innerHeight,"y"));if(!a.innerHeight&&!a.height){var b=z.wrapInner("<div style='overflow:auto'></div>").children();J.h=b.height(),b.replaceWith(b.children())}z.css({height:J.h}),U.position(J.transition==="none"?0:J.speed)}},U.prep=function(b){function h(b){U.position(b,function(){var b,d,g,h,j=x.length,k,n;!R||(n=function(){B.hide(),$(i,J.onComplete)},m&&Q&&z.fadeIn(100),C.html(J.title).add(z).show(),j>1?(typeof J.current=="string"&&D.html(J.current.replace(/\{current\}/,P+1).replace(/\{total\}/,j)).show(),F[J.loop||P<j-1?"show":"hide"]().html(J.next),G[J.loop||P?"show":"hide"]().html(J.previous),b=P?x[P-1]:x[j-1],g=P<j-1?x[P+1]:x[0],J.slideshow&&E.show(),J.preloading&&(h=a.data(g,e).href||g.href,d=a.data(b,e).href||b.href,h=a.isFunction(h)?h.call(g):h,d=a.isFunction(d)?d.call(b):d,Y(h)&&(a("<img/>")[0].src=h),Y(d)&&(a("<img/>")[0].src=d))):I.hide(),J.iframe?(k=a("<iframe frameborder=0/>").addClass(f+"Iframe")[0],J.fastIframe?n():a(k).load(n),k.name=f+ +(new Date),k.src=J.href,J.scrolling||(k.scrolling="no"),m&&(k.allowTransparency="true"),a(k).appendTo(z).one(l,function(){k.src="//about:blank"})):n(),J.transition==="fade"?q.fadeTo(c,1,function(){q[0].style.filter=""}):q[0].style.filter="",y.bind("resize."+f,function(){U.position(0)}))})}function g(){J.h=J.h||z.height(),J.h=J.mh&&J.mh<J.h?J.mh:J.h;return J.h}function d(){J.w=J.w||z.width(),J.w=J.mw&&J.mw<J.w?J.mw:J.w;return J.w}if(!!R){var c=J.transition==="none"?0:J.speed;y.unbind("resize."+f),z.remove(),z=W("LoadedContent").html(b),z.hide().appendTo(A.show()).css({width:d(),overflow:J.scrolling?"auto":"hidden"}).css({height:g()}).prependTo(s),A.hide(),a(Q).css({"float":"none"}),n&&a("select").not(q.find("select")).filter(function(){return this.style.visibility!=="hidden"}).css({visibility:"hidden"}).one(j,function(){this.style.visibility="inherit"}),J.transition==="fade"?q.fadeTo(c,0,function(){h(0)}):h(c)}},U.load=function(b){var c,d,g=U.prep;S=!0,Q=!1,O=x[P],b||Z(a.extend(J,a.data(O,e))),$(l),$(h,J.onLoad),J.h=J.height?X(J.height,"y")-M-K:J.innerHeight&&X(J.innerHeight,"y"),J.w=J.width?X(J.width,"x")-N-L:J.innerWidth&&X(J.innerWidth,"x"),J.mw=J.w,J.mh=J.h,J.maxWidth&&(J.mw=X(J.maxWidth,"x")-N-L,J.mw=J.w&&J.w<J.mw?J.w:J.mw),J.maxHeight&&(J.mh=X(J.maxHeight,"y")-M-K,J.mh=J.h&&J.h<J.mh?J.h:J.mh),c=J.href,B.show(),J.inline?(W().hide().insertBefore(a(c)[0]).one(l,function(){a(this).replaceWith(z.children())}),g(a(c))):J.iframe?g(" "):J.html?g(J.html):Y(c)?(a(Q=new Image).addClass(f+"Photo").error(function(){J.title=!1,g(W("Error").text("This image could not be loaded"))}).load(function(){var a;Q.onload=null,J.scalePhotos&&(d=function(){Q.height-=Q.height*a,Q.width-=Q.width*a},J.mw&&Q.width>J.mw&&(a=(Q.width-J.mw)/Q.width,d()),J.mh&&Q.height>J.mh&&(a=(Q.height-J.mh)/Q.height,d())),J.h&&(Q.style.marginTop=Math.max(J.h-Q.height,0)/2+"px"),x[1]&&(P<x.length-1||J.loop)&&(Q.style.cursor="pointer",Q.onclick=function(){U.next()}),m&&(Q.style.msInterpolationMode="bicubic"),setTimeout(function(){g(Q)},1)}),setTimeout(function(){Q.src=c},1)):c&&A.load(c,function(b,c,d){g(c==="error"?W("Error").text("Request unsuccessful: "+d.statusText):a(this).contents())})},U.next=function(){S||(P=P<x.length-1?P+1:0,U.load())},U.prev=function(){S||(P=P?P-1:x.length-1,U.load())},U.close=function(){R&&!T&&(T=!0,R=!1,$(j,J.onCleanup),y.unbind("."+f+" ."+o),p.fadeTo(200,0),q.stop().fadeTo(300,0,function(){q.add(p).css({opacity:1,cursor:"auto"}).hide(),$(l),z.remove(),setTimeout(function(){T=!1,$(k,J.onClosed)},1)}))},U.element=function(){return a(O)},U.settings=d,a(U.init)})(jQuery,document,this);
;/*
 * jQuery Cycle Plugin (with Transition Definitions)
 * Examples and documentation at: http://jquery.malsup.com/cycle/
 * Copyright (c) 2007-2010 M. Alsup
 * Version: 2.97 (14-FEB-2011)
 * Dual licensed under the MIT and GPL licenses.
 * http://jquery.malsup.com/license.html
 * Requires: jQuery v1.3.2 or later
 */
;(function($){var ver="2.97";if($.support==undefined){$.support={opacity:!($.browser.msie)};}function debug(s){$.fn.cycle.debug&&log(s);}function log(){window.console&&console.log&&console.log("[cycle] "+Array.prototype.join.call(arguments," "));}$.expr[":"].paused=function(el){return el.cyclePause;};$.fn.cycle=function(options,arg2){var o={s:this.selector,c:this.context};if(this.length===0&&options!="stop"){if(!$.isReady&&o.s){log("DOM not ready, queuing slideshow");$(function(){$(o.s,o.c).cycle(options,arg2);});return this;}log("terminating; zero elements found by selector"+($.isReady?"":" (DOM not ready)"));return this;}return this.each(function(){var opts=handleArguments(this,options,arg2);if(opts===false){return;}opts.updateActivePagerLink=opts.updateActivePagerLink||$.fn.cycle.updateActivePagerLink;if(this.cycleTimeout){clearTimeout(this.cycleTimeout);}this.cycleTimeout=this.cyclePause=0;var $cont=$(this);var $slides=opts.slideExpr?$(opts.slideExpr,this):$cont.children();var els=$slides.get();if(els.length<2){log("terminating; too few slides: "+els.length);return;}var opts2=buildOptions($cont,$slides,els,opts,o);if(opts2===false){return;}var startTime=opts2.continuous?10:getTimeout(els[opts2.currSlide],els[opts2.nextSlide],opts2,!opts2.backwards);if(startTime){startTime+=(opts2.delay||0);if(startTime<10){startTime=10;}debug("first timeout: "+startTime);this.cycleTimeout=setTimeout(function(){go(els,opts2,0,!opts.backwards);},startTime);}});};function handleArguments(cont,options,arg2){if(cont.cycleStop==undefined){cont.cycleStop=0;}if(options===undefined||options===null){options={};}if(options.constructor==String){switch(options){case"destroy":case"stop":var opts=$(cont).data("cycle.opts");if(!opts){return false;}cont.cycleStop++;if(cont.cycleTimeout){clearTimeout(cont.cycleTimeout);}cont.cycleTimeout=0;$(cont).removeData("cycle.opts");if(options=="destroy"){destroy(opts);}return false;case"toggle":cont.cyclePause=(cont.cyclePause===1)?0:1;checkInstantResume(cont.cyclePause,arg2,cont);return false;case"pause":cont.cyclePause=1;return false;case"resume":cont.cyclePause=0;checkInstantResume(false,arg2,cont);return false;case"prev":case"next":var opts=$(cont).data("cycle.opts");if(!opts){log('options not found, "prev/next" ignored');return false;}$.fn.cycle[options](opts);return false;default:options={fx:options};}return options;}else{if(options.constructor==Number){var num=options;options=$(cont).data("cycle.opts");if(!options){log("options not found, can not advance slide");return false;}if(num<0||num>=options.elements.length){log("invalid slide index: "+num);return false;}options.nextSlide=num;if(cont.cycleTimeout){clearTimeout(cont.cycleTimeout);cont.cycleTimeout=0;}if(typeof arg2=="string"){options.oneTimeFx=arg2;}go(options.elements,options,1,num>=options.currSlide);return false;}}return options;function checkInstantResume(isPaused,arg2,cont){if(!isPaused&&arg2===true){var options=$(cont).data("cycle.opts");if(!options){log("options not found, can not resume");return false;}if(cont.cycleTimeout){clearTimeout(cont.cycleTimeout);cont.cycleTimeout=0;}go(options.elements,options,1,!options.backwards);}}}function removeFilter(el,opts){if(!$.support.opacity&&opts.cleartype&&el.style.filter){try{el.style.removeAttribute("filter");}catch(smother){}}}function destroy(opts){if(opts.next){$(opts.next).unbind(opts.prevNextEvent);}if(opts.prev){$(opts.prev).unbind(opts.prevNextEvent);}if(opts.pager||opts.pagerAnchorBuilder){$.each(opts.pagerAnchors||[],function(){this.unbind().remove();});}opts.pagerAnchors=null;if(opts.destroy){opts.destroy(opts);}}function buildOptions($cont,$slides,els,options,o){var opts=$.extend({},$.fn.cycle.defaults,options||{},$.metadata?$cont.metadata():$.meta?$cont.data():{});if(opts.autostop){opts.countdown=opts.autostopCount||els.length;}var cont=$cont[0];$cont.data("cycle.opts",opts);opts.$cont=$cont;opts.stopCount=cont.cycleStop;opts.elements=els;opts.before=opts.before?[opts.before]:[];opts.after=opts.after?[opts.after]:[];if(!$.support.opacity&&opts.cleartype){opts.after.push(function(){removeFilter(this,opts);});}if(opts.continuous){opts.after.push(function(){go(els,opts,0,!opts.backwards);});}saveOriginalOpts(opts);if(!$.support.opacity&&opts.cleartype&&!opts.cleartypeNoBg){clearTypeFix($slides);}if($cont.css("position")=="static"){$cont.css("position","relative");}if(opts.width){$cont.width(opts.width);}if(opts.height&&opts.height!="auto"){$cont.height(opts.height);}if(opts.startingSlide){opts.startingSlide=parseInt(opts.startingSlide);}else{if(opts.backwards){opts.startingSlide=els.length-1;}}if(opts.random){opts.randomMap=[];for(var i=0;i<els.length;i++){opts.randomMap.push(i);}opts.randomMap.sort(function(a,b){return Math.random()-0.5;});opts.randomIndex=1;opts.startingSlide=opts.randomMap[1];}else{if(opts.startingSlide>=els.length){opts.startingSlide=0;}}opts.currSlide=opts.startingSlide||0;var first=opts.startingSlide;$slides.css({position:"absolute",top:0,left:0}).hide().each(function(i){var z;if(opts.backwards){z=first?i<=first?els.length+(i-first):first-i:els.length-i;}else{z=first?i>=first?els.length-(i-first):first-i:els.length-i;}$(this).css("z-index",z);});$(els[first]).css("opacity",1).show();removeFilter(els[first],opts);if(opts.fit&&opts.width){$slides.width(opts.width);}if(opts.fit&&opts.height&&opts.height!="auto"){$slides.height(opts.height);}var reshape=opts.containerResize&&!$cont.innerHeight();if(reshape){var maxw=0,maxh=0;for(var j=0;j<els.length;j++){var $e=$(els[j]),e=$e[0],w=$e.outerWidth(),h=$e.outerHeight();if(!w){w=e.offsetWidth||e.width||$e.attr("width");}if(!h){h=e.offsetHeight||e.height||$e.attr("height");}maxw=w>maxw?w:maxw;maxh=h>maxh?h:maxh;}if(maxw>0&&maxh>0){$cont.css({width:maxw+"px",height:maxh+"px"});}}if(opts.pause){$cont.hover(function(){this.cyclePause++;},function(){this.cyclePause--;});}if(supportMultiTransitions(opts)===false){return false;}var requeue=false;options.requeueAttempts=options.requeueAttempts||0;$slides.each(function(){var $el=$(this);this.cycleH=(opts.fit&&opts.height)?opts.height:($el.height()||this.offsetHeight||this.height||$el.attr("height")||0);this.cycleW=(opts.fit&&opts.width)?opts.width:($el.width()||this.offsetWidth||this.width||$el.attr("width")||0);if($el.is("img")){var loadingIE=($.browser.msie&&this.cycleW==28&&this.cycleH==30&&!this.complete);var loadingFF=($.browser.mozilla&&this.cycleW==34&&this.cycleH==19&&!this.complete);var loadingOp=($.browser.opera&&((this.cycleW==42&&this.cycleH==19)||(this.cycleW==37&&this.cycleH==17))&&!this.complete);var loadingOther=(this.cycleH==0&&this.cycleW==0&&!this.complete);if(loadingIE||loadingFF||loadingOp||loadingOther){if(o.s&&opts.requeueOnImageNotLoaded&&++options.requeueAttempts<100){log(options.requeueAttempts," - img slide not loaded, requeuing slideshow: ",this.src,this.cycleW,this.cycleH);setTimeout(function(){$(o.s,o.c).cycle(options);},opts.requeueTimeout);requeue=true;return false;}else{log("could not determine size of image: "+this.src,this.cycleW,this.cycleH);}}}return true;});if(requeue){return false;}opts.cssBefore=opts.cssBefore||{};opts.cssAfter=opts.cssAfter||{};opts.cssFirst=opts.cssFirst||{};opts.animIn=opts.animIn||{};opts.animOut=opts.animOut||{};$slides.not(":eq("+first+")").css(opts.cssBefore);$($slides[first]).css(opts.cssFirst);if(opts.timeout){opts.timeout=parseInt(opts.timeout);if(opts.speed.constructor==String){opts.speed=$.fx.speeds[opts.speed]||parseInt(opts.speed);}if(!opts.sync){opts.speed=opts.speed/2;}var buffer=opts.fx=="none"?0:opts.fx=="shuffle"?500:250;while((opts.timeout-opts.speed)<buffer){opts.timeout+=opts.speed;}}if(opts.easing){opts.easeIn=opts.easeOut=opts.easing;}if(!opts.speedIn){opts.speedIn=opts.speed;}if(!opts.speedOut){opts.speedOut=opts.speed;}opts.slideCount=els.length;opts.currSlide=opts.lastSlide=first;if(opts.random){if(++opts.randomIndex==els.length){opts.randomIndex=0;}opts.nextSlide=opts.randomMap[opts.randomIndex];}else{if(opts.backwards){opts.nextSlide=opts.startingSlide==0?(els.length-1):opts.startingSlide-1;}else{opts.nextSlide=opts.startingSlide>=(els.length-1)?0:opts.startingSlide+1;}}if(!opts.multiFx){var init=$.fn.cycle.transitions[opts.fx];if($.isFunction(init)){init($cont,$slides,opts);}else{if(opts.fx!="custom"&&!opts.multiFx){log("unknown transition: "+opts.fx,"; slideshow terminating");return false;}}}var e0=$slides[first];if(opts.before.length){opts.before[0].apply(e0,[e0,e0,opts,true]);}if(opts.after.length>1){opts.after[1].apply(e0,[e0,e0,opts,true]);}if(opts.next){$(opts.next).bind(opts.prevNextEvent,function(){return advance(opts,1);});}if(opts.prev){$(opts.prev).bind(opts.prevNextEvent,function(){return advance(opts,0);});}if(opts.pager||opts.pagerAnchorBuilder){buildPager(els,opts);}exposeAddSlide(opts,els);return opts;}function saveOriginalOpts(opts){opts.original={before:[],after:[]};opts.original.cssBefore=$.extend({},opts.cssBefore);opts.original.cssAfter=$.extend({},opts.cssAfter);opts.original.animIn=$.extend({},opts.animIn);opts.original.animOut=$.extend({},opts.animOut);$.each(opts.before,function(){opts.original.before.push(this);});$.each(opts.after,function(){opts.original.after.push(this);});}function supportMultiTransitions(opts){var i,tx,txs=$.fn.cycle.transitions;if(opts.fx.indexOf(",")>0){opts.multiFx=true;opts.fxs=opts.fx.replace(/\s*/g,"").split(",");for(i=0;i<opts.fxs.length;i++){var fx=opts.fxs[i];tx=txs[fx];if(!tx||!txs.hasOwnProperty(fx)||!$.isFunction(tx)){log("discarding unknown transition: ",fx);opts.fxs.splice(i,1);i--;}}if(!opts.fxs.length){log("No valid transitions named; slideshow terminating.");return false;}}else{if(opts.fx=="all"){opts.multiFx=true;opts.fxs=[];for(p in txs){tx=txs[p];if(txs.hasOwnProperty(p)&&$.isFunction(tx)){opts.fxs.push(p);}}}}if(opts.multiFx&&opts.randomizeEffects){var r1=Math.floor(Math.random()*20)+30;for(i=0;i<r1;i++){var r2=Math.floor(Math.random()*opts.fxs.length);opts.fxs.push(opts.fxs.splice(r2,1)[0]);}debug("randomized fx sequence: ",opts.fxs);}return true;}function exposeAddSlide(opts,els){opts.addSlide=function(newSlide,prepend){var $s=$(newSlide),s=$s[0];if(!opts.autostopCount){opts.countdown++;}els[prepend?"unshift":"push"](s);if(opts.els){opts.els[prepend?"unshift":"push"](s);}opts.slideCount=els.length;$s.css("position","absolute");$s[prepend?"prependTo":"appendTo"](opts.$cont);if(prepend){opts.currSlide++;opts.nextSlide++;}if(!$.support.opacity&&opts.cleartype&&!opts.cleartypeNoBg){clearTypeFix($s);}if(opts.fit&&opts.width){$s.width(opts.width);}if(opts.fit&&opts.height&&opts.height!="auto"){$s.height(opts.height);}s.cycleH=(opts.fit&&opts.height)?opts.height:$s.height();s.cycleW=(opts.fit&&opts.width)?opts.width:$s.width();$s.css(opts.cssBefore);if(opts.pager||opts.pagerAnchorBuilder){$.fn.cycle.createPagerAnchor(els.length-1,s,$(opts.pager),els,opts);}if($.isFunction(opts.onAddSlide)){opts.onAddSlide($s);}else{$s.hide();}};}$.fn.cycle.resetState=function(opts,fx){fx=fx||opts.fx;opts.before=[];opts.after=[];opts.cssBefore=$.extend({},opts.original.cssBefore);opts.cssAfter=$.extend({},opts.original.cssAfter);opts.animIn=$.extend({},opts.original.animIn);opts.animOut=$.extend({},opts.original.animOut);opts.fxFn=null;$.each(opts.original.before,function(){opts.before.push(this);});$.each(opts.original.after,function(){opts.after.push(this);});var init=$.fn.cycle.transitions[fx];if($.isFunction(init)){init(opts.$cont,$(opts.elements),opts);}};function go(els,opts,manual,fwd){if(manual&&opts.busy&&opts.manualTrump){debug("manualTrump in go(), stopping active transition");$(els).stop(true,true);opts.busy=0;}if(opts.busy){debug("transition active, ignoring new tx request");return;}var p=opts.$cont[0],curr=els[opts.currSlide],next=els[opts.nextSlide];if(p.cycleStop!=opts.stopCount||p.cycleTimeout===0&&!manual){return;}if(!manual&&!p.cyclePause&&!opts.bounce&&((opts.autostop&&(--opts.countdown<=0))||(opts.nowrap&&!opts.random&&opts.nextSlide<opts.currSlide))){if(opts.end){opts.end(opts);}return;}var changed=false;if((manual||!p.cyclePause)&&(opts.nextSlide!=opts.currSlide)){changed=true;var fx=opts.fx;curr.cycleH=curr.cycleH||$(curr).height();curr.cycleW=curr.cycleW||$(curr).width();next.cycleH=next.cycleH||$(next).height();next.cycleW=next.cycleW||$(next).width();if(opts.multiFx){if(opts.lastFx==undefined||++opts.lastFx>=opts.fxs.length){opts.lastFx=0;}fx=opts.fxs[opts.lastFx];opts.currFx=fx;}if(opts.oneTimeFx){fx=opts.oneTimeFx;opts.oneTimeFx=null;}$.fn.cycle.resetState(opts,fx);if(opts.before.length){$.each(opts.before,function(i,o){if(p.cycleStop!=opts.stopCount){return;}o.apply(next,[curr,next,opts,fwd]);});}var after=function(){opts.busy=0;$.each(opts.after,function(i,o){if(p.cycleStop!=opts.stopCount){return;}o.apply(next,[curr,next,opts,fwd]);});};debug("tx firing("+fx+"); currSlide: "+opts.currSlide+"; nextSlide: "+opts.nextSlide);opts.busy=1;if(opts.fxFn){opts.fxFn(curr,next,opts,after,fwd,manual&&opts.fastOnEvent);}else{if($.isFunction($.fn.cycle[opts.fx])){$.fn.cycle[opts.fx](curr,next,opts,after,fwd,manual&&opts.fastOnEvent);}else{$.fn.cycle.custom(curr,next,opts,after,fwd,manual&&opts.fastOnEvent);}}}if(changed||opts.nextSlide==opts.currSlide){opts.lastSlide=opts.currSlide;if(opts.random){opts.currSlide=opts.nextSlide;if(++opts.randomIndex==els.length){opts.randomIndex=0;}opts.nextSlide=opts.randomMap[opts.randomIndex];if(opts.nextSlide==opts.currSlide){opts.nextSlide=(opts.currSlide==opts.slideCount-1)?0:opts.currSlide+1;}}else{if(opts.backwards){var roll=(opts.nextSlide-1)<0;if(roll&&opts.bounce){opts.backwards=!opts.backwards;opts.nextSlide=1;opts.currSlide=0;}else{opts.nextSlide=roll?(els.length-1):opts.nextSlide-1;opts.currSlide=roll?0:opts.nextSlide+1;}}else{var roll=(opts.nextSlide+1)==els.length;if(roll&&opts.bounce){opts.backwards=!opts.backwards;opts.nextSlide=els.length-2;opts.currSlide=els.length-1;}else{opts.nextSlide=roll?0:opts.nextSlide+1;opts.currSlide=roll?els.length-1:opts.nextSlide-1;}}}}if(changed&&opts.pager){opts.updateActivePagerLink(opts.pager,opts.currSlide,opts.activePagerClass);}var ms=0;if(opts.timeout&&!opts.continuous){ms=getTimeout(els[opts.currSlide],els[opts.nextSlide],opts,fwd);}else{if(opts.continuous&&p.cyclePause){ms=10;}}if(ms>0){p.cycleTimeout=setTimeout(function(){go(els,opts,0,!opts.backwards);},ms);}}$.fn.cycle.updateActivePagerLink=function(pager,currSlide,clsName){$(pager).each(function(){$(this).children().removeClass(clsName).eq(currSlide).addClass(clsName);});};function getTimeout(curr,next,opts,fwd){if(opts.timeoutFn){var t=opts.timeoutFn.call(curr,curr,next,opts,fwd);while(opts.fx!="none"&&(t-opts.speed)<250){t+=opts.speed;}debug("calculated timeout: "+t+"; speed: "+opts.speed);if(t!==false){return t;}}return opts.timeout;}$.fn.cycle.next=function(opts){advance(opts,1);};$.fn.cycle.prev=function(opts){advance(opts,0);};function advance(opts,moveForward){var val=moveForward?1:-1;var els=opts.elements;var p=opts.$cont[0],timeout=p.cycleTimeout;if(timeout){clearTimeout(timeout);p.cycleTimeout=0;}if(opts.random&&val<0){opts.randomIndex--;if(--opts.randomIndex==-2){opts.randomIndex=els.length-2;}else{if(opts.randomIndex==-1){opts.randomIndex=els.length-1;}}opts.nextSlide=opts.randomMap[opts.randomIndex];}else{if(opts.random){opts.nextSlide=opts.randomMap[opts.randomIndex];}else{opts.nextSlide=opts.currSlide+val;if(opts.nextSlide<0){if(opts.nowrap){return false;}opts.nextSlide=els.length-1;}else{if(opts.nextSlide>=els.length){if(opts.nowrap){return false;}opts.nextSlide=0;}}}}var cb=opts.onPrevNextEvent||opts.prevNextClick;if($.isFunction(cb)){cb(val>0,opts.nextSlide,els[opts.nextSlide]);}go(els,opts,1,moveForward);return false;}function buildPager(els,opts){var $p=$(opts.pager);$.each(els,function(i,o){$.fn.cycle.createPagerAnchor(i,o,$p,els,opts);});opts.updateActivePagerLink(opts.pager,opts.startingSlide,opts.activePagerClass);}$.fn.cycle.createPagerAnchor=function(i,el,$p,els,opts){var a;if($.isFunction(opts.pagerAnchorBuilder)){a=opts.pagerAnchorBuilder(i,el);debug("pagerAnchorBuilder("+i+", el) returned: "+a);}else{a='<a href="#">'+(i+1)+"</a>";}if(!a){return;}var $a=$(a);if($a.parents("body").length===0){var arr=[];if($p.length>1){$p.each(function(){var $clone=$a.clone(true);$(this).append($clone);arr.push($clone[0]);});$a=$(arr);}else{$a.appendTo($p);}}opts.pagerAnchors=opts.pagerAnchors||[];opts.pagerAnchors.push($a);$a.bind(opts.pagerEvent,function(e){e.preventDefault();opts.nextSlide=i;var p=opts.$cont[0],timeout=p.cycleTimeout;if(timeout){clearTimeout(timeout);p.cycleTimeout=0;}var cb=opts.onPagerEvent||opts.pagerClick;if($.isFunction(cb)){cb(opts.nextSlide,els[opts.nextSlide]);}go(els,opts,1,opts.currSlide<i);});if(!/^click/.test(opts.pagerEvent)&&!opts.allowPagerClickBubble){$a.bind("click.cycle",function(){return false;});}if(opts.pauseOnPagerHover){$a.hover(function(){opts.$cont[0].cyclePause++;},function(){opts.$cont[0].cyclePause--;});}};$.fn.cycle.hopsFromLast=function(opts,fwd){var hops,l=opts.lastSlide,c=opts.currSlide;if(fwd){hops=c>l?c-l:opts.slideCount-l;}else{hops=c<l?l-c:l+opts.slideCount-c;}return hops;};function clearTypeFix($slides){debug("applying clearType background-color hack");function hex(s){s=parseInt(s).toString(16);return s.length<2?"0"+s:s;}function getBg(e){for(;e&&e.nodeName.toLowerCase()!="html";e=e.parentNode){var v=$.css(e,"background-color");if(v.indexOf("rgb")>=0){var rgb=v.match(/\d+/g);return"#"+hex(rgb[0])+hex(rgb[1])+hex(rgb[2]);}if(v&&v!="transparent"){return v;}}return"#ffffff";}$slides.each(function(){$(this).css("background-color",getBg(this));});}$.fn.cycle.commonReset=function(curr,next,opts,w,h,rev){$(opts.elements).not(curr).hide();if(typeof opts.cssBefore.opacity=="undefined"){opts.cssBefore.opacity=1;}opts.cssBefore.display="block";if(opts.slideResize&&w!==false&&next.cycleW>0){opts.cssBefore.width=next.cycleW;}if(opts.slideResize&&h!==false&&next.cycleH>0){opts.cssBefore.height=next.cycleH;}opts.cssAfter=opts.cssAfter||{};opts.cssAfter.display="none";$(curr).css("zIndex",opts.slideCount+(rev===true?1:0));$(next).css("zIndex",opts.slideCount+(rev===true?0:1));};$.fn.cycle.custom=function(curr,next,opts,cb,fwd,speedOverride){var $l=$(curr),$n=$(next);var speedIn=opts.speedIn,speedOut=opts.speedOut,easeIn=opts.easeIn,easeOut=opts.easeOut;$n.css(opts.cssBefore);if(speedOverride){if(typeof speedOverride=="number"){speedIn=speedOut=speedOverride;}else{speedIn=speedOut=1;}easeIn=easeOut=null;}var fn=function(){$n.animate(opts.animIn,speedIn,easeIn,function(){cb();});};$l.animate(opts.animOut,speedOut,easeOut,function(){$l.css(opts.cssAfter);if(!opts.sync){fn();}});if(opts.sync){fn();}};$.fn.cycle.transitions={fade:function($cont,$slides,opts){$slides.not(":eq("+opts.currSlide+")").css("opacity",0);opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts);opts.cssBefore.opacity=0;});opts.animIn={opacity:1};opts.animOut={opacity:0};opts.cssBefore={top:0,left:0};}};$.fn.cycle.ver=function(){return ver;};$.fn.cycle.defaults={activePagerClass:"activeSlide",after:null,allowPagerClickBubble:false,animIn:null,animOut:null,autostop:0,autostopCount:0,backwards:false,before:null,cleartype:!$.support.opacity,cleartypeNoBg:false,containerResize:1,continuous:0,cssAfter:null,cssBefore:null,delay:0,easeIn:null,easeOut:null,easing:null,end:null,fastOnEvent:0,fit:0,fx:"fade",fxFn:null,height:"auto",manualTrump:true,next:null,nowrap:0,onPagerEvent:null,onPrevNextEvent:null,pager:null,pagerAnchorBuilder:null,pagerEvent:"click.cycle",pause:0,pauseOnPagerHover:0,prev:null,prevNextEvent:"click.cycle",random:0,randomizeEffects:1,requeueOnImageNotLoaded:true,requeueTimeout:250,rev:0,shuffle:null,slideExpr:null,slideResize:1,speed:1000,speedIn:null,speedOut:null,startingSlide:0,sync:1,timeout:4000,timeoutFn:null,updateActivePagerLink:null};})(jQuery);
/*
 * jQuery Cycle Plugin Transition Definitions
 * This script is a plugin for the jQuery Cycle Plugin
 * Examples and documentation at: http://malsup.com/jquery/cycle/
 * Copyright (c) 2007-2010 M. Alsup
 * Version:	 2.73
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 */
;(function($){$.fn.cycle.transitions.none=function($cont,$slides,opts){opts.fxFn=function(curr,next,opts,after){$(next).show();$(curr).hide();after();};};$.fn.cycle.transitions.fadeout=function($cont,$slides,opts){$slides.not(":eq("+opts.currSlide+")").css({display:"block",opacity:1});opts.before.push(function(curr,next,opts,w,h,rev){$(curr).css("zIndex",opts.slideCount+(!rev===true?1:0));$(next).css("zIndex",opts.slideCount+(!rev===true?0:1));});opts.animIn.opacity=1;opts.animOut.opacity=0;opts.cssBefore.opacity=1;opts.cssBefore.display="block";opts.cssAfter.zIndex=0;};$.fn.cycle.transitions.scrollUp=function($cont,$slides,opts){$cont.css("overflow","hidden");opts.before.push($.fn.cycle.commonReset);var h=$cont.height();opts.cssBefore.top=h;opts.cssBefore.left=0;opts.cssFirst.top=0;opts.animIn.top=0;opts.animOut.top=-h;};$.fn.cycle.transitions.scrollDown=function($cont,$slides,opts){$cont.css("overflow","hidden");opts.before.push($.fn.cycle.commonReset);var h=$cont.height();opts.cssFirst.top=0;opts.cssBefore.top=-h;opts.cssBefore.left=0;opts.animIn.top=0;opts.animOut.top=h;};$.fn.cycle.transitions.scrollLeft=function($cont,$slides,opts){$cont.css("overflow","hidden");opts.before.push($.fn.cycle.commonReset);var w=$cont.width();opts.cssFirst.left=0;opts.cssBefore.left=w;opts.cssBefore.top=0;opts.animIn.left=0;opts.animOut.left=0-w;};$.fn.cycle.transitions.scrollRight=function($cont,$slides,opts){$cont.css("overflow","hidden");opts.before.push($.fn.cycle.commonReset);var w=$cont.width();opts.cssFirst.left=0;opts.cssBefore.left=-w;opts.cssBefore.top=0;opts.animIn.left=0;opts.animOut.left=w;};$.fn.cycle.transitions.scrollHorz=function($cont,$slides,opts){$cont.css("overflow","hidden").width();opts.before.push(function(curr,next,opts,fwd){if(opts.rev){fwd=!fwd;}$.fn.cycle.commonReset(curr,next,opts);opts.cssBefore.left=fwd?(next.cycleW-1):(1-next.cycleW);opts.animOut.left=fwd?-curr.cycleW:curr.cycleW;});opts.cssFirst.left=0;opts.cssBefore.top=0;opts.animIn.left=0;opts.animOut.top=0;};$.fn.cycle.transitions.scrollVert=function($cont,$slides,opts){$cont.css("overflow","hidden");opts.before.push(function(curr,next,opts,fwd){if(opts.rev){fwd=!fwd;}$.fn.cycle.commonReset(curr,next,opts);opts.cssBefore.top=fwd?(1-next.cycleH):(next.cycleH-1);opts.animOut.top=fwd?curr.cycleH:-curr.cycleH;});opts.cssFirst.top=0;opts.cssBefore.left=0;opts.animIn.top=0;opts.animOut.left=0;};$.fn.cycle.transitions.slideX=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$(opts.elements).not(curr).hide();$.fn.cycle.commonReset(curr,next,opts,false,true);opts.animIn.width=next.cycleW;});opts.cssBefore.left=0;opts.cssBefore.top=0;opts.cssBefore.width=0;opts.animIn.width="show";opts.animOut.width=0;};$.fn.cycle.transitions.slideY=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$(opts.elements).not(curr).hide();$.fn.cycle.commonReset(curr,next,opts,true,false);opts.animIn.height=next.cycleH;});opts.cssBefore.left=0;opts.cssBefore.top=0;opts.cssBefore.height=0;opts.animIn.height="show";opts.animOut.height=0;};$.fn.cycle.transitions.shuffle=function($cont,$slides,opts){var i,w=$cont.css("overflow","visible").width();$slides.css({left:0,top:0});opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,true,true);});if(!opts.speedAdjusted){opts.speed=opts.speed/2;opts.speedAdjusted=true;}opts.random=0;opts.shuffle=opts.shuffle||{left:-w,top:15};opts.els=[];for(i=0;i<$slides.length;i++){opts.els.push($slides[i]);}for(i=0;i<opts.currSlide;i++){opts.els.push(opts.els.shift());}opts.fxFn=function(curr,next,opts,cb,fwd){if(opts.rev){fwd=!fwd;}var $el=fwd?$(curr):$(next);$(next).css(opts.cssBefore);var count=opts.slideCount;$el.animate(opts.shuffle,opts.speedIn,opts.easeIn,function(){var hops=$.fn.cycle.hopsFromLast(opts,fwd);for(var k=0;k<hops;k++){fwd?opts.els.push(opts.els.shift()):opts.els.unshift(opts.els.pop());}if(fwd){for(var i=0,len=opts.els.length;i<len;i++){$(opts.els[i]).css("z-index",len-i+count);}}else{var z=$(curr).css("z-index");$el.css("z-index",parseInt(z)+1+count);}$el.animate({left:0,top:0},opts.speedOut,opts.easeOut,function(){$(fwd?this:curr).hide();if(cb){cb();}});});};$.extend(opts.cssBefore,{display:"block",opacity:1,top:0,left:0});};$.fn.cycle.transitions.turnUp=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,false);opts.cssBefore.top=next.cycleH;opts.animIn.height=next.cycleH;opts.animOut.width=next.cycleW;});opts.cssFirst.top=0;opts.cssBefore.left=0;opts.cssBefore.height=0;opts.animIn.top=0;opts.animOut.height=0;};$.fn.cycle.transitions.turnDown=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,false);opts.animIn.height=next.cycleH;opts.animOut.top=curr.cycleH;});opts.cssFirst.top=0;opts.cssBefore.left=0;opts.cssBefore.top=0;opts.cssBefore.height=0;opts.animOut.height=0;};$.fn.cycle.transitions.turnLeft=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,false,true);opts.cssBefore.left=next.cycleW;opts.animIn.width=next.cycleW;});opts.cssBefore.top=0;opts.cssBefore.width=0;opts.animIn.left=0;opts.animOut.width=0;};$.fn.cycle.transitions.turnRight=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,false,true);opts.animIn.width=next.cycleW;opts.animOut.left=curr.cycleW;});$.extend(opts.cssBefore,{top:0,left:0,width:0});opts.animIn.left=0;opts.animOut.width=0;};$.fn.cycle.transitions.zoom=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,false,false,true);opts.cssBefore.top=next.cycleH/2;opts.cssBefore.left=next.cycleW/2;$.extend(opts.animIn,{top:0,left:0,width:next.cycleW,height:next.cycleH});$.extend(opts.animOut,{width:0,height:0,top:curr.cycleH/2,left:curr.cycleW/2});});opts.cssFirst.top=0;opts.cssFirst.left=0;opts.cssBefore.width=0;opts.cssBefore.height=0;};$.fn.cycle.transitions.fadeZoom=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,false,false);opts.cssBefore.left=next.cycleW/2;opts.cssBefore.top=next.cycleH/2;$.extend(opts.animIn,{top:0,left:0,width:next.cycleW,height:next.cycleH});});opts.cssBefore.width=0;opts.cssBefore.height=0;opts.animOut.opacity=0;};$.fn.cycle.transitions.blindX=function($cont,$slides,opts){var w=$cont.css("overflow","hidden").width();opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts);opts.animIn.width=next.cycleW;opts.animOut.left=curr.cycleW;});opts.cssBefore.left=w;opts.cssBefore.top=0;opts.animIn.left=0;opts.animOut.left=w;};$.fn.cycle.transitions.blindY=function($cont,$slides,opts){var h=$cont.css("overflow","hidden").height();opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts);opts.animIn.height=next.cycleH;opts.animOut.top=curr.cycleH;});opts.cssBefore.top=h;opts.cssBefore.left=0;opts.animIn.top=0;opts.animOut.top=h;};$.fn.cycle.transitions.blindZ=function($cont,$slides,opts){var h=$cont.css("overflow","hidden").height();var w=$cont.width();opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts);opts.animIn.height=next.cycleH;opts.animOut.top=curr.cycleH;});opts.cssBefore.top=h;opts.cssBefore.left=w;opts.animIn.top=0;opts.animIn.left=0;opts.animOut.top=h;opts.animOut.left=w;};$.fn.cycle.transitions.growX=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,false,true);opts.cssBefore.left=this.cycleW/2;opts.animIn.left=0;opts.animIn.width=this.cycleW;opts.animOut.left=0;});opts.cssBefore.top=0;opts.cssBefore.width=0;};$.fn.cycle.transitions.growY=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,false);opts.cssBefore.top=this.cycleH/2;opts.animIn.top=0;opts.animIn.height=this.cycleH;opts.animOut.top=0;});opts.cssBefore.height=0;opts.cssBefore.left=0;};$.fn.cycle.transitions.curtainX=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,false,true,true);opts.cssBefore.left=next.cycleW/2;opts.animIn.left=0;opts.animIn.width=this.cycleW;opts.animOut.left=curr.cycleW/2;opts.animOut.width=0;});opts.cssBefore.top=0;opts.cssBefore.width=0;};$.fn.cycle.transitions.curtainY=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,false,true);opts.cssBefore.top=next.cycleH/2;opts.animIn.top=0;opts.animIn.height=next.cycleH;opts.animOut.top=curr.cycleH/2;opts.animOut.height=0;});opts.cssBefore.height=0;opts.cssBefore.left=0;};$.fn.cycle.transitions.cover=function($cont,$slides,opts){var d=opts.direction||"left";var w=$cont.css("overflow","hidden").width();var h=$cont.height();opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts);if(d=="right"){opts.cssBefore.left=-w;}else{if(d=="up"){opts.cssBefore.top=h;}else{if(d=="down"){opts.cssBefore.top=-h;}else{opts.cssBefore.left=w;}}}});opts.animIn.left=0;opts.animIn.top=0;opts.cssBefore.top=0;opts.cssBefore.left=0;};$.fn.cycle.transitions.uncover=function($cont,$slides,opts){var d=opts.direction||"left";var w=$cont.css("overflow","hidden").width();var h=$cont.height();opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,true,true);if(d=="right"){opts.animOut.left=w;}else{if(d=="up"){opts.animOut.top=-h;}else{if(d=="down"){opts.animOut.top=h;}else{opts.animOut.left=-w;}}}});opts.animIn.left=0;opts.animIn.top=0;opts.cssBefore.top=0;opts.cssBefore.left=0;};$.fn.cycle.transitions.toss=function($cont,$slides,opts){var w=$cont.css("overflow","visible").width();var h=$cont.height();opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,true,true);if(!opts.animOut.left&&!opts.animOut.top){$.extend(opts.animOut,{left:w*2,top:-h/2,opacity:0});}else{opts.animOut.opacity=0;}});opts.cssBefore.left=0;opts.cssBefore.top=0;opts.animIn.left=0;};$.fn.cycle.transitions.wipe=function($cont,$slides,opts){var w=$cont.css("overflow","hidden").width();var h=$cont.height();opts.cssBefore=opts.cssBefore||{};var clip;if(opts.clip){if(/l2r/.test(opts.clip)){clip="rect(0px 0px "+h+"px 0px)";}else{if(/r2l/.test(opts.clip)){clip="rect(0px "+w+"px "+h+"px "+w+"px)";}else{if(/t2b/.test(opts.clip)){clip="rect(0px "+w+"px 0px 0px)";}else{if(/b2t/.test(opts.clip)){clip="rect("+h+"px "+w+"px "+h+"px 0px)";}else{if(/zoom/.test(opts.clip)){var top=parseInt(h/2);var left=parseInt(w/2);clip="rect("+top+"px "+left+"px "+top+"px "+left+"px)";}}}}}}opts.cssBefore.clip=opts.cssBefore.clip||clip||"rect(0px 0px 0px 0px)";var d=opts.cssBefore.clip.match(/(\d+)/g);var t=parseInt(d[0]),r=parseInt(d[1]),b=parseInt(d[2]),l=parseInt(d[3]);opts.before.push(function(curr,next,opts){if(curr==next){return;}var $curr=$(curr),$next=$(next);$.fn.cycle.commonReset(curr,next,opts,true,true,false);opts.cssAfter.display="block";var step=1,count=parseInt((opts.speedIn/13))-1;(function f(){var tt=t?t-parseInt(step*(t/count)):0;var ll=l?l-parseInt(step*(l/count)):0;var bb=b<h?b+parseInt(step*((h-b)/count||1)):h;var rr=r<w?r+parseInt(step*((w-r)/count||1)):w;$next.css({clip:"rect("+tt+"px "+rr+"px "+bb+"px "+ll+"px)"});(step++<=count)?setTimeout(f,13):$curr.css("display","none");})();});$.extend(opts.cssBefore,{display:"block",opacity:1,top:0,left:0});opts.animIn={left:0};opts.animOut={left:0};};})(jQuery);
;/**
 * Isotope v1.3.110623
 * An exquisite jQuery plugin for magical layouts
 * http://isotope.metafizzy.co
 *
 * Commercial use requires one-time license fee
 * http://metafizzy.co/#licenses
 *
 * Copyright 2011 David DeSandro / Metafizzy
 */
/*global Modernizr: true */
(function(a,b,c){function f(a,b){b=b||document.documentElement;var c=b.style,f;if(typeof c[a]=="string")return a;a=d(a);for(var g=0,h=e.length;g<h;g++){f=e[g]+a;if(typeof c[f]=="string")return f}}function d(a){return a.charAt(0).toUpperCase()+a.slice(1)}var e="Moz Webkit Khtml O Ms".split(" "),g=f("transform"),h=document.documentElement,i=[{name:"csstransforms",getResult:function(){return!!g}},{name:"csstransforms3d",getResult:function(){var a=!!f("perspective");if(a){var b=document.createElement("style"),c=document.createElement("div"),d=" -o- -moz- -ms- -webkit- -khtml- ".split(" "),e="@media ("+d.join("transform-3d),(")+"modernizr)";b.textContent=e+"{#modernizr{height:3px}}",(document.head||document.getElementsByTagName("head")[0]).appendChild(b),c.id="modernizr",h.appendChild(c),a=c.offsetHeight===3,b.parentNode.removeChild(b),c.parentNode.removeChild(c)}return!!a}},{name:"csstransitions",getResult:function(){return!!f("transitionProperty")}}],j,k=i.length;if(a.Modernizr)for(j=0;j<k;j++){var l=i[j];Modernizr.hasOwnProperty(l.name)||Modernizr.addTest(l.name,l.getResult)}else a.Modernizr=function(){var a={_version:"1.6ish: miniModernizr for Isotope"},b=[],c,d,e;for(j=0;j<k;j++)c=i[j],d=c.getResult(),a[c.name]=d,e=(d?"":"no-")+c.name,b.push(e);h.className+=" "+b.join(" ");return a}();if(Modernizr.csstransforms){var m=Modernizr.csstransforms3d?{translate:function(a){return"translate3d("+a[0]+"px, "+a[1]+"px, 0) "},scale:function(a){return"scale3d("+a+", "+a+", 1) "}}:{translate:function(a){return"translate("+a[0]+"px, "+a[1]+"px) "},scale:function(a){return"scale("+a+") "}},n=function(a,c,d){var e=b.data(a,"isoTransform")||{},f={},h,i={},j;f[c]=d,b.extend(e,f);for(h in e)j=e[h],i[h]=m[h](j);var k=i.translate||"",l=i.scale||"",n=k+l;b.data(a,"isoTransform",e),a.style[g]=n};b.cssNumber.scale=!0,b.cssHooks.scale={set:function(a,b){n(a,"scale",b)},get:function(a,c){var d=b.data(a,"isoTransform");return d&&d.scale?d.scale:1}},b.fx.step.scale=function(a){b.cssHooks.scale.set(a.elem,a.now+a.unit)},b.cssNumber.translate=!0,b.cssHooks.translate={set:function(a,b){n(a,"translate",b)},get:function(a,c){var d=b.data(a,"isoTransform");return d&&d.translate?d.translate:[0,0]}}}var o=b.event,p;o.special.smartresize={setup:function(){b(this).bind("resize",o.special.smartresize.handler)},teardown:function(){b(this).unbind("resize",o.special.smartresize.handler)},handler:function(a,b){var c=this,d=arguments;a.type="smartresize",p&&clearTimeout(p),p=setTimeout(function(){jQuery.event.handle.apply(c,d)},b==="execAsap"?0:100)}},b.fn.smartresize=function(a){return a?this.bind("smartresize",a):this.trigger("smartresize",["execAsap"])},b.Isotope=function(a,c){this.element=b(c),this._create(a),this._init()};var q=["overflow","position","width","height"];b.Isotope.settings={resizable:!0,layoutMode:"masonry",containerClass:"isotope",itemClass:"isotope-item",hiddenClass:"isotope-hidden",hiddenStyle:Modernizr.csstransforms&&!b.browser.opera?{opacity:0,scale:.001}:{opacity:0},visibleStyle:Modernizr.csstransforms&&!b.browser.opera?{opacity:1,scale:1}:{opacity:1},animationEngine:b.browser.opera?"jquery":"best-available",animationOptions:{queue:!1,duration:800},sortBy:"original-order",sortAscending:!0,resizesContainer:!0,transformsEnabled:!0,itemPositionDataEnabled:!1},b.Isotope.prototype={_create:function(c){this.options=b.extend(!0,{},b.Isotope.settings,c),this.styleQueue=[],this.elemCount=0;var d=this.element[0].style;this.originalStyle={};for(var e=0,f=q.length;e<f;e++){var g=q[e];this.originalStyle[g]=d[g]||null}this.element.css({overflow:"hidden",position:"relative"}),this._updateAnimationEngine(),this._updateUsingTransforms();var h={"original-order":function(a,b){return b.elemCount}};this.options.getSortData=b.extend(this.options.getSortData,h),this.reloadItems();var i=b(document.createElement("div")).prependTo(this.element);this.offset=i.position(),i.remove();var j=this;setTimeout(function(){j.element.addClass(j.options.containerClass)},0),this.options.resizable&&b(a).bind("smartresize.isotope",function(){j.resize()})},_getAtoms:function(a){var b=this.options.itemSelector,c=b?a.filter(b).add(a.find(b)):a,d={position:"absolute"};this.usingTransforms&&(d.left=0,d.top=0),c.css(d).addClass(this.options.itemClass),this.updateSortData(c,!0);return c},_init:function(a){this.$filteredAtoms=this._filter(this.$allAtoms),this._sort(),this.reLayout(a)},option:function(a){if(b.isPlainObject(a)){this.options=b.extend(!0,this.options,a);for(var c in a)this._updateOption(c)}},_updateOption:function(a){var b="_update"+d(a);this[b]&&this[b]()},_updateAnimationEngine:function(){var a=this.options.animationEngine.toLowerCase().replace(/[ _\-]/g,"");switch(a){case"css":case"none":this.isUsingJQueryAnimation=!1;break;case"jquery":this.isUsingJQueryAnimation=!0;break;default:this.isUsingJQueryAnimation=!Modernizr.csstransitions}this._updateUsingTransforms()},_updateTransformsEnabled:function(){this._updateUsingTransforms()},_updateUsingTransforms:function(){this.usingTransforms=this.options.transformsEnabled&&Modernizr.csstransforms&&Modernizr.csstransitions&&!this.isUsingJQueryAnimation,this.getPositionStyles=this.usingTransforms?this._translate:this._positionAbs},_filter:function(a){var b,c=this.options.filter===""?"*":this.options.filter;if(!c)b=a;else{var d=this.options.hiddenClass,e="."+d,f=a.not(e),g=a.filter(e),h=g;b=a.filter(c);if(c!=="*"){h=g.filter(c);var i=f.not(c).toggleClass(d);i.addClass(d),this.styleQueue.push({$el:i,style:this.options.hiddenStyle})}this.styleQueue.push({$el:h,style:this.options.visibleStyle}),h.removeClass(d)}return b},updateSortData:function(a,c){var d=this,e=this.options.getSortData,f,g;a.each(function(){f=b(this),g={};for(var a in e)g[a]=e[a](f,d);b.data(this,"isotope-sort-data",g),c&&d.elemCount++})},_sort:function(){var a=this.options.sortBy,b=this._getSorter,c=this.options.sortAscending?1:-1,d=function(d,e){var f=b(d,a),g=b(e,a);f===g&&a!=="original-order"&&(f=b(d,"original-order"),g=b(e,"original-order"));return(f>g?1:f<g?-1:0)*c};this.$filteredAtoms.sort(d)},_getSorter:function(a,c){return b.data(a,"isotope-sort-data")[c]},_translate:function(a,b){return{translate:[a,b]}},_positionAbs:function(a,b){return{left:a,top:b}},_pushPosition:function(a,b,c){b+=this.offset.left,c+=this.offset.top;var d=this.getPositionStyles(b,c);this.styleQueue.push({$el:a,style:d}),this.options.itemPositionDataEnabled&&a.data("isotope-item-position",{x:b,y:c})},layout:function(a,c){var d=this.options.layoutMode;this["_"+d+"Layout"](a);if(this.options.resizesContainer){var e=this["_"+d+"GetContainerSize"]();this.styleQueue.push({$el:this.element,style:e})}var f=this.isLaidOut?this.isUsingJQueryAnimation?"animate":"css":"css",g=this.options.animationOptions;b.each(this.styleQueue,function(a,b){b.$el[f](b.style,g)}),this.styleQueue=[],c&&c.call(a),this.isLaidOut=!0},resize:function(){this["_"+this.options.layoutMode+"ResizeChanged"]()&&this.reLayout()},reLayout:function(a){this["_"+this.options.layoutMode+"Reset"](),this.layout(this.$filteredAtoms,a)},addItems:function(a,b){var c=this._getAtoms(a);this.$allAtoms=this.$allAtoms.add(c),b&&b(c)},insert:function(a,b){this.element.append(a);var c=this;this.addItems(a,function(a){var b=c._filter(a);c.$filteredAtoms=c.$filteredAtoms.add(b)}),this._sort(),this.reLayout(b)},appended:function(a,b){var c=this;this.addItems(a,function(a){c.$filteredAtoms=c.$filteredAtoms.add(a),c.layout(a,b)})},reloadItems:function(){this.$allAtoms=this._getAtoms(this.element.children())},remove:function(a){this.$allAtoms=this.$allAtoms.not(a),this.$filteredAtoms=this.$filteredAtoms.not(a),a.remove()},_shuffleArray:function(a){var b,c,d=a.length;if(d)while(--d)c=~~(Math.random()*(d+1)),b=a[c],a[c]=a[d],a[d]=b;return a},shuffle:function(a){this.options.sortBy="shuffle",this.$allAtoms=this._shuffleArray(this.$allAtoms),this.$filteredAtoms=this._filter(this.$allAtoms),this.reLayout(a)},destroy:function(){var c=this.usingTransforms;this.$allAtoms.removeClass(this.options.hiddenClass+" "+this.options.itemClass).each(function(){this.style.position=null,this.style.top=null,this.style.left=null,this.style.opacity=null,c&&(this.style[g]=null)});var d=this.element[0].style;for(var e=0,f=q.length;e<f;e++){var h=q[e];d[h]=this.originalStyle[h]}this.element.unbind(".isotope").removeClass(this.options.containerClass).removeData("isotope"),b(a).unbind(".isotope")},_getSegments:function(a){var b=this.options.layoutMode,c=a?"rowHeight":"columnWidth",e=a?"height":"width",f=a?"rows":"cols",g=this.element[e](),h,i=this.options[b]&&this.options[b][c]||this.$filteredAtoms["outer"+d(e)](!0)||g;h=Math.floor(g/i),h=Math.max(h,1),this[b][f]=h,this[b][c]=i},_checkIfSegmentsChanged:function(a){var b=this.options.layoutMode,c=a?"rows":"cols",d=this[b][c];this._getSegments(a);return this[b][c]!==d},_masonryReset:function(){this.masonry={},this._getSegments();var a=this.masonry.cols;this.masonry.colYs=[];while(a--)this.masonry.colYs.push(0)},_masonryLayout:function(a){var c=this,d=c.masonry;a.each(function(){var a=b(this),e=Math.ceil(a.outerWidth(!0)/d.columnWidth);e=Math.min(e,d.cols);if(e===1)c._masonryPlaceBrick(a,d.colYs);else{var f=d.cols+1-e,g=[],h,i;for(i=0;i<f;i++)h=d.colYs.slice(i,i+e),g[i]=Math.max.apply(Math,h);c._masonryPlaceBrick(a,g)}})},_masonryPlaceBrick:function(a,b){var c=Math.min.apply(Math,b),d=0;for(var e=0,f=b.length;e<f;e++)if(b[e]===c){d=e;break}var g=this.masonry.columnWidth*d,h=c;this._pushPosition(a,g,h);var i=c+a.outerHeight(!0),j=this.masonry.cols+1-f;for(e=0;e<j;e++)this.masonry.colYs[d+e]=i},_masonryGetContainerSize:function(){var a=Math.max.apply(Math,this.masonry.colYs);return{height:a}},_masonryResizeChanged:function(){return this._checkIfSegmentsChanged()},_fitRowsReset:function(){this.fitRows={x:0,y:0,height:0}},_fitRowsLayout:function(a){var c=this,d=this.element.width(),e=this.fitRows;a.each(function(){var a=b(this),f=a.outerWidth(!0),g=a.outerHeight(!0);e.x!==0&&f+e.x>d&&(e.x=0,e.y=e.height),c._pushPosition(a,e.x,e.y),e.height=Math.max(e.y+g,e.height),e.x+=f})},_fitRowsGetContainerSize:function(){return{height:this.fitRows.height}},_fitRowsResizeChanged:function(){return!0},_cellsByRowReset:function(){this.cellsByRow={index:0},this._getSegments(),this._getSegments(!0)},_cellsByRowLayout:function(a){var c=this,d=this.cellsByRow;a.each(function(){var a=b(this),e=d.index%d.cols,f=~~(d.index/d.cols),g=(e+.5)*d.columnWidth-a.outerWidth(!0)/2,h=(f+.5)*d.rowHeight-a.outerHeight(!0)/2;c._pushPosition(a,g,h),d.index++})},_cellsByRowGetContainerSize:function(){return{height:Math.ceil(this.$filteredAtoms.length/this.cellsByRow.cols)*this.cellsByRow.rowHeight+this.offset.top}},_cellsByRowResizeChanged:function(){return this._checkIfSegmentsChanged()},_straightDownReset:function(){this.straightDown={y:0}},_straightDownLayout:function(a){var c=this;a.each(function(a){var d=b(this);c._pushPosition(d,0,c.straightDown.y),c.straightDown.y+=d.outerHeight(!0)})},_straightDownGetContainerSize:function(){return{height:this.straightDown.y}},_straightDownResizeChanged:function(){return!0},_masonryHorizontalReset:function(){this.masonryHorizontal={},this._getSegments(!0);var a=this.masonryHorizontal.rows;this.masonryHorizontal.rowXs=[];while(a--)this.masonryHorizontal.rowXs.push(0)},_masonryHorizontalLayout:function(a){var c=this,d=c.masonryHorizontal;a.each(function(){var a=b(this),e=Math.ceil(a.outerHeight(!0)/d.rowHeight);e=Math.min(e,d.rows);if(e===1)c._masonryHorizontalPlaceBrick(a,d.rowXs);else{var f=d.rows+1-e,g=[],h,i;for(i=0;i<f;i++)h=d.rowXs.slice(i,i+e),g[i]=Math.max.apply(Math,h);c._masonryHorizontalPlaceBrick(a,g)}})},_masonryHorizontalPlaceBrick:function(a,b){var c=Math.min.apply(Math,b),d=0;for(var e=0,f=b.length;e<f;e++)if(b[e]===c){d=e;break}var g=c,h=this.masonryHorizontal.rowHeight*d;this._pushPosition(a,g,h);var i=c+a.outerWidth(!0),j=this.masonryHorizontal.rows+1-f;for(e=0;e<j;e++)this.masonryHorizontal.rowXs[d+e]=i},_masonryHorizontalGetContainerSize:function(){var a=Math.max.apply(Math,this.masonryHorizontal.rowXs);return{width:a}},_masonryHorizontalResizeChanged:function(){return this._checkIfSegmentsChanged(!0)},_fitColumnsReset:function(){this.fitColumns={x:0,y:0,width:0}},_fitColumnsLayout:function(a){var c=this,d=this.element.height(),e=this.fitColumns;a.each(function(){var a=b(this),f=a.outerWidth(!0),g=a.outerHeight(!0);e.y!==0&&g+e.y>d&&(e.x=e.width,e.y=0),c._pushPosition(a,e.x,e.y),e.width=Math.max(e.x+f,e.width),e.y+=g})},_fitColumnsGetContainerSize:function(){return{width:this.fitColumns.width}},_fitColumnsResizeChanged:function(){return!0},_cellsByColumnReset:function(){this.cellsByColumn={index:0},this._getSegments(),this._getSegments(!0)},_cellsByColumnLayout:function(a){var c=this,d=this.cellsByColumn;a.each(function(){var a=b(this),e=~~(d.index/d.rows),f=d.index%d.rows,g=(e+.5)*d.columnWidth-a.outerWidth(!0)/2,h=(f+.5)*d.rowHeight-a.outerHeight(!0)/2;c._pushPosition(a,g,h),d.index++})},_cellsByColumnGetContainerSize:function(){return{width:Math.ceil(this.$filteredAtoms.length/this.cellsByColumn.rows)*this.cellsByColumn.columnWidth}},_cellsByColumnResizeChanged:function(){return this._checkIfSegmentsChanged(!0)},_straightAcrossReset:function(){this.straightAcross={x:0}},_straightAcrossLayout:function(a){var c=this;a.each(function(a){var d=b(this);c._pushPosition(d,c.straightAcross.x,0),c.straightAcross.x+=d.outerWidth(!0)})},_straightAcrossGetContainerSize:function(){return{width:this.straightAcross.x}},_straightAcrossResizeChanged:function(){return!0}},b.fn.imagesLoaded=function(a){var b=this.find("img"),d=b.length,e=this;b.length||a.call(this),b.bind("load",function(){--d<=0&&a.call(e)}).each(function(){if(this.complete||this.complete===c){var a=this.src;this.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",this.src=a}});return this};var r=function(a){this.console&&console.error(a)};b.fn.isotope=function(a){if(typeof a=="string"){var c=Array.prototype.slice.call(arguments,1);this.each(function(){var d=b.data(this,"isotope");if(!d)r("cannot call methods on isotope prior to initialization; attempted to call method '"+a+"'");else{if(!b.isFunction(d[a])||a.charAt(0)==="_"){r("no such method '"+a+"' for isotope instance");return}d[a].apply(d,c)}})}else this.each(function(){var c=b.data(this,"isotope");c?(c.option(a),c._init()):b.data(this,"isotope",new b.Isotope(a,this))});return this}})(window,jQuery);
;/*
// Infinite Scroll jQuery plugin
// copyright Paul Irish, licensed GPL & MIT
// version 1.5.100504

// home and docs: http://www.infinite-scroll.com
*/
(function(A){A.fn.infinitescroll=function(R,O){function E(){if(B.debug){window.console&&console.log.call(console,arguments)}}function H(T){for(var S in T){if(S.indexOf&&S.indexOf("Selector")>-1&&A(T[S]).length===0){E("Your "+S+" found no elements.");return false}return true}}function N(S){S.match(C)?S.match(C)[2]:S;if(S.match(/^(.*?)\b2\b(.*?$)/)){S=S.match(/^(.*?)\b2\b(.*?$)/).slice(1)}else{if(S.match(/^(.*?)2(.*?$)/)){if(S.match(/^(.*?page=)2(\/.*|$)/)){S=S.match(/^(.*?page=)2(\/.*|$)/).slice(1);return S}E("Trying backup next selector parse technique. Treacherous waters here, matey.");S=S.match(/^(.*?)2(.*?$)/).slice(1)}else{if(S.match(/^(.*?page=)1(\/.*|$)/)){S=S.match(/^(.*?page=)1(\/.*|$)/).slice(1);return S}E("Sorry, we couldn't parse your Next (Previous Posts) URL. Verify your the css selector points to the correct A tag. If you still get this error: yell, scream, and kindly ask for help at infinite-scroll.com.");K.isInvalidPage=true}}return S}function L(){return B.localMode?(A(K.container)[0].scrollHeight&&A(K.container)[0].scrollHeight):A(document).height()}function F(){var S=0+L()-(B.localMode?A(K.container).scrollTop():(A(K.container).scrollTop()||A(K.container.ownerDocument.body).scrollTop()))-A(B.localMode?K.container:window).height();E("math:",S,K.pixelsFromNavToBottom);return(S-B.bufferPx<K.pixelsFromNavToBottom)}function M(){K.loadingMsg.find("img").hide().parent().find("div").html(B.donetext).animate({opacity:1},2000).fadeOut("normal");B.errorCallback()}function D(){if(K.isDuringAjax||K.isInvalidPage||K.isDone){return }if(!F(B,K)){return }A(document).trigger("retrieve.infscr")}function G(){K.isDuringAjax=true;K.loadingMsg.appendTo(B.contentSelector).show();A(B.navSelector).hide();K.currPage++;E("heading into ajax",Q);J=A(B.contentSelector).is("table")?A("<tbody/>"):A("<div/>");P=document.createDocumentFragment();J.load(Q.join(K.currPage)+" "+B.itemSelector,null,I)}function I(){if(K.isDone){M();return false}else{var T=J.children().get();if(T.length==0){return A.event.trigger("ajaxError",[{status:404}])}while(J[0].firstChild){P.appendChild(J[0].firstChild)}A(B.contentSelector)[0].appendChild(P);K.loadingMsg.fadeOut("normal");if(B.animate){var S=A(window).scrollTop()+A("#infscr-loading").height()+B.extraScrollPx+"px";A("html,body").animate({scrollTop:S},800,function(){K.isDuringAjax=false})}O.call(A(B.contentSelector)[0],T);if(!B.animate){K.isDuringAjax=false}}}A.browser.ie6=A.browser.msie&&A.browser.version<7;var B=A.extend({},A.infinitescroll.defaults,R),K=A.infinitescroll,J,P;O=O||function(){};if(!H(B)){return false}K.container=B.localMode?this:document.documentElement;B.contentSelector=B.contentSelector||this;var C=/(.*?\/\/).*?(\/.*)/,Q=A(B.nextSelector).attr("href");if(!Q){E("Navigation selector not found");return }Q=N(Q);if(B.localMode){A(K.container)[0].scrollTop=0}K.pixelsFromNavToBottom=L()+(K.container==document.documentElement?0:A(K.container).offset().top)-A(B.navSelector).offset().top;K.loadingMsg=A('<div id="infscr-loading" style="text-align: center;"><img alt="Loading..." src="'+B.loadingImg+'" /><div>'+B.loadingText+"</div></div>");(new Image()).src=B.loadingImg;A(document).ajaxError(function(T,U,S){E("Page not found. Self-destructing...");if(U.status==404){M();K.isDone=true;A(B.localMode?this:window).unbind("scroll.infscr")}});A(B.localMode?this:window).bind("scroll.infscr",D).trigger("scroll.infscr");A(document).bind("retrieve.infscr",G);return this};A.infinitescroll={defaults:{debug:false,preload:false,nextSelector:"div.navigation a:first",loadingImg:"http://www.infinite-scroll.com/loading.gif",loadingText:"<em>Loading the next set of posts...</em>",donetext:"<em>Congratulations, you've reached the end of the internet.</em>",navSelector:"div.navigation",contentSelector:null,extraScrollPx:150,itemSelector:"div.post",animate:false,localMode:false,bufferPx:40,errorCallback:function(){}},loadingImg:undefined,loadingMsg:undefined,container:undefined,currPage:1,currDOMChunk:null,isDuringAjax:false,isInvalidPage:false,isDone:false}})(jQuery);
;/*
* qTip2 - Pretty powerful tooltips
* http://craigsworks.com/projects/qtip2/
*
* Version: nightly
* Copyright 2009-2010 Craig Michael Thompson - http://craigsworks.com
*
* Dual licensed under MIT or GPLv2 licenses
*   http://en.wikipedia.org/wiki/MIT_License
*   http://en.wikipedia.org/wiki/GNU_General_Public_License
*
* Date: Mon May  2 14:06:03 PDT 2011
*/"use strict",function(a,b,c){function A(b){var c=this,d=b.elements,e=d.tooltip,f=".bgiframe-"+b.id;a.extend(c,{init:function(){d.bgiframe=a('<iframe class="ui-tooltip-bgiframe" frameborder="0" tabindex="-1" src="javascript:\'\';"  style="display:block; position:absolute; z-index:-1; filter:alpha(opacity=0); -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";"></iframe>'),d.bgiframe.appendTo(e),e.bind("tooltipmove"+f,c.adjust)},adjust:function(){var a=b.get("dimensions"),c=b.plugins.tip,f=d.tip,g,h;h=parseInt(e.css("border-left-width"),10)||0,h={left:-h,top:-h},c&&f&&(g=c.corner.precedance==="x"?["width","left"]:["height","top"],h[g[1]]-=f[g[0]]()),d.bgiframe.css(h).css(a)},destroy:function(){d.bgiframe.remove(),e.unbind(f)}}),c.init()}function z(c){var f=this,g=c.options.show.modal,h=c.elements,i=h.tooltip,j="#qtip-overlay",k=".qtipmodal",l=k+c.id,m="is-modal-qtip",o;c.checks.modal={"^show.modal.(on|blur)$":function(){f.init(),h.overlay.toggle(i.is(":visible"))}},a.extend(f,{init:function(){if(!g.on)return f;o=f.create(),i.attr(m,d).unbind(k).unbind(l).bind("tooltipshow"+k+" tooltiphide"+k,function(a,b,c){f[a.type.replace("tooltip","")](a,c)}).bind("tooltipfocus"+k,function(a,b,c){o[0].style.zIndex=c-1}).bind("tooltipblur"+k,function(b){a("["+m+"]:visible").not(i).last().qtip("focus",b)}),g.escape&&a(b).unbind(l).bind("keydown"+l,function(a){a.keyCode===27&&i.hasClass(n)&&c.hide(a)}),g.blur&&h.overlay.unbind(l).bind("click"+l,function(a){i.hasClass(n)&&c.hide(a)});return f},create:function(){var c=a(j);if(c.length){h.overlay=c;return c}o=h.overlay=a("<div />",{id:j.substr(1),css:{position:"absolute",top:0,left:0,display:"none"},mousedown:function(){return e}}).appendTo(document.body),a(b).unbind(k).bind("resize"+k,function(){o.css({height:Math.max(a(b).height(),a(document).height()),width:Math.max(a(b).width(),a(document).width())})}).trigger("resize");return o},toggle:function(b,c,j){if(b&&b.isDefaultPrevented())return f;var k=g.effect,l=c?"show":"hide",n=a("["+m+"]:visible").not(i),p;o||(o=f.create());if(o.is(":animated")&&!c||!c&&n.length)return f;c&&h.overlay.css("cursor",g.blur?"pointer":""),o.stop(d,e),a.isFunction(k)?k.call(o,c):k===e?o[l]():o.fadeTo(parseInt(j,10)||90,c?.7:0,function(){c||a(this).hide()});return f},show:function(a,b){return f.toggle(a,d,b)},hide:function(a,b){return f.toggle(a,e,b)},destroy:function(){var d=o;d&&(d=a("["+m+"]").not(i).length<1,d?(h.overlay.remove(),a(b).unbind(k)):h.overlay.unbind(k+c.id));return i.removeAttr(m).unbind(k)}}),f.init()}function y(b,g){function v(a){var b=a.precedance==="y",c=n[b?"width":"height"],d=n[b?"height":"width"],e=a.string().indexOf("center")>-1,f=c*(e?.5:1),g=Math.pow,h=Math.round,i,j,k,l=Math.sqrt(g(f,2)+g(d,2)),m=[p/f*l,p/d*l];m[2]=Math.sqrt(g(m[0],2)-g(p,2)),m[3]=Math.sqrt(g(m[1],2)-g(p,2)),i=l+m[2]+m[3]+(e?0:m[0]),j=i/l,k=[h(j*d),h(j*c)];return{height:k[b?0:1],width:k[b?1:0]}}function u(b){var c=k.titlebar&&b.y==="top",d=c?k.titlebar:k.content,e=a.browser.mozilla,f=e?"-moz-":a.browser.webkit?"-webkit-":"",g=b.y+(e?"":"-")+b.x,h=f+(e?"border-radius-"+g:"border-"+g+"-radius");return parseInt(d.css(h),10)||parseInt(l.css(h),10)||0}function t(a,b,c){b=b?b:a[a.precedance];var d=k.titlebar&&a.y==="top",e=d?k.titlebar:k.content,f="border-"+b+"-width",g=parseInt(e.css(f),10);return(c?g||parseInt(l.css(f),10):g)||0}function s(f,g,h,l){if(k.tip){var n=a.extend({},i.corner),o=h.adjusted,p=b.options.position.adjust.method.split(" "),q=p[0],r=p[1]||p[0],s={left:e,top:e,x:0,y:0},t,u={},v;i.corner.fixed!==d&&(q==="shift"&&n.precedance==="x"&&o.left&&n.y!=="center"?n.precedance=n.precedance==="x"?"y":"x":q==="flip"&&o.left&&(n.x=n.x==="center"?o.left>0?"left":"right":n.x==="left"?"right":"left"),r==="shift"&&n.precedance==="y"&&o.top&&n.x!=="center"?n.precedance=n.precedance==="y"?"x":"y":r==="flip"&&o.top&&(n.y=n.y==="center"?o.top>0?"top":"bottom":n.y==="top"?"bottom":"top"),n.string()!==m.corner&&(m.top!==o.top||m.left!==o.left)&&i.update(n,e)),t=i.position(n,o),t.right!==c&&(t.left=-t.right),t.bottom!==c&&(t.top=-t.bottom),t.user=Math.max(0,j.offset);if(s.left=q==="shift"&&!!o.left)n.x==="center"?u["margin-left"]=s.x=t["margin-left"]-o.left:(v=t.right!==c?[o.left,-t.left]:[-o.left,t.left],(s.x=Math.max(v[0],v[1]))>v[0]&&(h.left-=o.left,s.left=e),u[t.right!==c?"right":"left"]=s.x);if(s.top=r==="shift"&&!!o.top)n.y==="center"?u["margin-top"]=s.y=t["margin-top"]-o.top:(v=t.bottom!==c?[o.top,-t.top]:[-o.top,t.top],(s.y=Math.max(v[0],v[1]))>v[0]&&(h.top-=o.top,s.top=e),u[t.bottom!==c?"bottom":"top"]=s.y);k.tip.css(u).toggle(!(s.x&&s.y||n.x==="center"&&s.y||n.y==="center"&&s.x)),h.left-=t.left.charAt?t.user:q!=="shift"||s.top||!s.left&&!s.top?t.left:0,h.top-=t.top.charAt?t.user:r!=="shift"||s.left||!s.left&&!s.top?t.top:0,m.left=o.left,m.top=o.top,m.corner=n.string()}}var i=this,j=b.options.style.tip,k=b.elements,l=k.tooltip,m={top:0,left:0,corner:""},n={width:j.width,height:j.height},o={},p=j.border||0,q=".qtip-tip",r=a("<canvas />")[0].getContext;i.corner=f,i.mimic=f,i.position={},b.checks.tip={"^position.my|style.tip.(corner|mimic|border)$":function(){i.init()||i.destroy(),b.reposition()},"^style.tip.(height|width)$":function(){n={width:j.width,height:j.height},i.create(),i.update(),b.reposition()},"^content.title.text|style.(classes|widget)$":function(){k.tip&&i.update()}},a.extend(i,{init:function(){var b=i.detectCorner()&&(r||a.browser.msie);b&&(i.create(),i.update(),l.unbind(q).bind("tooltipmove"+q,s));return b},detectCorner:function(){var a=j.corner,c=b.options.position,f=c.at,g=c.my.string?c.my.string():c.my;if(a===e||g===e&&f===e)return e;a===d?i.corner=new h.Corner(g):a.string||(i.corner=new h.Corner(a),i.corner.fixed=d);return i.corner.string()!=="centercenter"},detectColours:function(){var c,d,e,f=k.tip.css({backgroundColor:"",border:""}),g=i.corner,h=g[g.precedance],m="border-"+h+"-color",p="border"+h.charAt(0)+h.substr(1)+"Color",q=/rgba?\(0, 0, 0(, 0)?\)|transparent/i,r="background-color",s="transparent",t="ui-tooltip-fluid",u=a(document.body).css("color"),v=b.elements.content.css("color"),w=k.titlebar&&(g.y==="top"||g.y==="center"&&f.position().top+n.height/2+j.offset<k.titlebar.outerHeight(1)),x=w?k.titlebar:k.content;l.addClass(t),d=f.css(r)||s,e=f[0].style[p];if(!d||q.test(d))o.fill=x.css(r),q.test(o.fill)&&(o.fill=l.css(r)||d);if(!e||q.test(e)){o.border=l.css(m);if(q.test(o.border)||o.border===u)o.border=x.css(m),o.border===v&&(o.border=e)}a("*",f).add(f).css(r,s).css("border",""),l.removeClass(t)},create:function(){var b=n.width,c=n.height,d;k.tip&&k.tip.remove(),k.tip=a("<div />",{"class":"ui-tooltip-tip"}).css({width:b,height:c}).prependTo(l),r?a("<canvas />").appendTo(k.tip)[0].getContext("2d").save():(d='<vml:shape coordorigin="0,0" style="display:inline-block; position:absolute; behavior:url(#default#VML);"></vml:shape>',k.tip.html(p?d+=d:d))},update:function(b,c){var g=k.tip,l=g.children(),m=n.width,q=n.height,s="px solid ",u="px dashed transparent",w=j.mimic,y=Math.round,z,A,B,C,D;b||(b=i.corner),w===e?w=b:(w=new h.Corner(w),w.precedance=b.precedance,w.x==="inherit"?w.x=b.x:w.y==="inherit"?w.y=b.y:w.x===w.y&&(w[b.precedance]=b[b.precedance])),z=w.precedance,i.detectColours(),p=o.border==="transparent"||o.border==="#123456"?0:j.border===d?t(b,f,d):j.border,B=x(w,m,q),D=v(b),g.css(D),b.precedance==="y"?C=[y(w.x==="left"?p:w.x==="right"?D.width-m-p:(D.width-m)/2),y(w.y==="top"?D.height-q:0)]:C=[y(w.x==="left"?D.width-m:0),y(w.y==="top"?p:w.y==="bottom"?D.height-q-p:(D.height-q)/2)],r?(l.attr(D),A=l[0].getContext("2d"),A.restore(),A.save(),A.clearRect(0,0,3e3,3e3),A.translate(C[0],C[1]),A.beginPath(),A.moveTo(B[0][0],B[0][1]),A.lineTo(B[1][0],B[1][1]),A.lineTo(B[2][0],B[2][1]),A.closePath(),A.fillStyle=o.fill,A.strokeStyle=o.border,A.lineWidth=p*2,A.lineJoin="miter",A.miterLimit=100,A.stroke(),A.fill()):(B="m"+B[0][0]+","+B[0][1]+" l"+B[1][0]+","+B[1][1]+" "+B[2][0]+","+B[2][1]+" xe",C[2]=p&&/^(r|b)/i.test(b.string())?parseFloat(a.browser.version,10)===8?2:1:0,l.css({antialias:""+(w.string().indexOf("center")>-1),left:C[0]-C[2]*Number(z==="x"),top:C[1]-C[2]*Number(z==="y"),width:m+p,height:q+p}).each(function(b){var c=a(this);c.attr({coordsize:m+p+" "+(q+p),path:B,fillcolor:o.fill,filled:!!b,stroked:!b}).css({display:p||b?"block":"none"}),!b&&p>0&&c.html()===""&&c.html('<vml:stroke weight="'+p*2+'px" color="'+o.border+'" miterlimit="1000" joinstyle="miter"  style="behavior:url(#default#VML); display:inline-block;" />')})),c!==e&&i.position(b)},position:function(b){var c=k.tip,f={},g=Math.max(0,j.offset),h,l,m;if(j.corner===e||!c)return e;b=b||i.corner,h=b.precedance,l=v(b),m=[b.x,b.y],h==="x"&&m.reverse(),a.each(m,function(a,c){var e,i;c==="center"?(e=h==="y"?"left":"top",f[e]="50%",f["margin-"+e]=-Math.round(l[h==="y"?"width":"height"]/2)+g):(e=t(b,c,d),i=u(b),f[c]=a?t(b,c):g+(i>e?i:0))}),f[b[h]]-=l[h==="x"?"width":"height"],c.css({top:"",bottom:"",left:"",right:"",margin:""}).css(f);return f},destroy:function(){k.tip&&k.tip.remove(),l.unbind(q)}}),i.init()}function x(a,b,c){var d=Math.ceil(b/2),e=Math.ceil(c/2),f={bottomright:[[0,0],[b,c],[b,0]],bottomleft:[[0,0],[b,0],[0,c]],topright:[[0,c],[b,0],[b,c]],topleft:[[0,0],[0,c],[b,c]],topcenter:[[0,c],[d,0],[b,c]],bottomcenter:[[0,0],[b,0],[d,c]],rightcenter:[[0,0],[b,e],[0,c]],leftcenter:[[b,0],[b,c],[0,e]]};f.lefttop=f.bottomright,f.righttop=f.bottomleft,f.leftbottom=f.topright,f.rightbottom=f.topleft;return f[a.string()]}function w(b){var c=this,f=b.elements.tooltip,g=b.options.content.ajax,h=".qtip-ajax",i=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,j=d;b.checks.ajax={"^content.ajax":function(a,b,d){b==="ajax"&&(g=d),b==="once"?c.init():g&&g.url?c.load():f.unbind(h)}},a.extend(c,{init:function(){g&&g.url&&f.unbind(h)[g.once?"one":"bind"]("tooltipshow"+h,c.load);return c},load:function(d,h){function p(a,c,d){b.set("content.text",c+": "+d),n()}function o(c){l&&(c=a("<div/>").append(c.replace(i,"")).find(l)),b.set("content.text",c),n()}function n(){m&&(f.css("visibility",""),h=e)}if(d&&d.isDefaultPrevented())return c;var j=g.url.indexOf(" "),k=g.url,l,m=g.once&&!g.loading&&h;m&&f.css("visibility","hidden"),j>-1&&(l=k.substr(j),k=k.substr(0,j)),a.ajax(a.extend({success:o,error:p,context:b},g,{url:k}));return c}}),c.init()}function v(b,c){var i,j,k,l,m=a(this),n=a(document.body),o=this===document?n:m,p=m.metadata?m.metadata(c.metadata):f,q=c.metadata.type==="html5"&&p?p[c.metadata.name]:f,v=m.data(c.metadata.name||"qtipopts");try{v=typeof v==="string"?(new Function("return "+v))():v}catch(w){s("Unable to parse HTML5 attribute data: "+v)}l=a.extend(d,{},g.defaults,c,typeof v==="object"?t(v):f,t(q||p)),p&&a.removeData(this,"metadata"),j=l.position,l.id=b;if("boolean"===typeof l.content.text){k=m.attr(l.content.attr);if(l.content.attr!==e&&k)l.content.text=k;else return e}j.container===e&&(j.container=n),j.target===e&&(j.target=o),l.show.target===e&&(l.show.target=o),l.show.solo===d&&(l.show.solo=n),l.hide.target===e&&(l.hide.target=o),l.position.viewport===d&&(l.position.viewport=j.container),j.at=new h.Corner(j.at),j.my=new h.Corner(j.my);if(a.data(this,"qtip"))if(l.overwrite)m.qtip("destroy");else if(l.overwrite===e)return e;a.attr(this,"title")&&(a.attr(this,r,a.attr(this,"title")),this.removeAttribute("title")),i=new u(m,l,b,!!k),a.data(this,"qtip",i),m.bind("remove.qtip",function(){i.destroy()});return i}function u(c,p,q,s){function L(c,d,e,f){f=parseInt(f,10)!==0;var g=".qtip-"+q,h={show:c&&p.show.target[0],hide:d&&p.hide.target[0],tooltip:e&&u.rendered&&A.tooltip[0],content:e&&u.rendered&&A.content[0],container:f&&p.position.container[0]===v?document:p.position.container[0],window:f&&b};u.rendered?a([]).pushStack(a.grep([h.show,h.hide,h.tooltip,h.container,h.content,h.window],function(a){return typeof a==="object"})).unbind(g):c&&p.show.target.unbind(g+"-create")}function K(d,f,h,j){function D(a){z.is(":visible")&&u.reposition(a)}function C(a){if(z.hasClass(l))return e;clearTimeout(u.timers.inactive),u.timers.inactive=setTimeout(function(){u.hide(a)},p.hide.inactive)}function y(b){if(z.hasClass(l))return e;var c=a(b.relatedTarget||b.target),d=c.closest(m)[0]===z[0],f=c[0]===r.show[0];clearTimeout(u.timers.show),clearTimeout(u.timers.hide);if(n.target==="mouse"&&d||p.hide.fixed&&(/mouse(out|leave|move)/.test(b.type)&&(d||f))){b.stopPropagation(),b.preventDefault();return e}p.hide.delay>0?u.timers.hide=setTimeout(function(){u.hide(b)},p.hide.delay):u.hide(b)}function x(a){if(z.hasClass(l))return e;r.show.trigger("qtip-"+q+"-inactive"),clearTimeout(u.timers.show),clearTimeout(u.timers.hide);var b=function(){u.show(a)};p.show.delay>0?u.timers.show=setTimeout(b,p.show.delay):b()}var k=".qtip-"+q,n=p.position,r={show:p.show.target,hide:p.hide.target,container:n.container[0]===v?a(document):n.container,doc:a(document)},s={show:a.trim(""+p.show.event).split(" "),hide:a.trim(""+p.hide.event).split(" ")},t=a.browser.msie&&parseInt(a.browser.version,10)===6,w;h&&(p.hide.fixed&&(r.hide=r.hide.add(z),z.bind("mouseover"+k,function(){z.hasClass(l)||clearTimeout(u.timers.hide)})),n.target==="mouse"&&n.adjust.mouse&&p.hide.event&&z.bind("mouseleave"+k,function(a){(a.relatedTarget||a.target)!==r.show[0]&&u.hide(a)}),z.bind("mouseenter"+k,function(a){u[a.type==="mouseenter"?"focus":"blur"](a)}),z.bind("mouseenter"+k+" mouseleave"+k,function(a){z.toggleClass(o,a.type==="mouseenter")})),f&&("number"===typeof p.hide.inactive&&(r.show.bind("qtip-"+q+"-inactive",C),a.each(g.inactiveEvents,function(a,b){r.hide.add(A.tooltip).bind(b+k+"-inactive",C)})),/mouse(over|enter)/i.test(p.show.event)&&!/mouse(out|leave)/i.test(p.hide.event)&&r.hide.bind("mouseleave"+k,function(a){clearTimeout(u.timers.show)}),a.each(s.hide,function(b,c){var d=a.inArray(c,s.show),e=a(r.hide);d>-1&&e.add(r.show).length===e.length||c==="unfocus"?(r.show.bind(c+k,function(a){z.is(":visible")?y(a):x(a)}),delete s.show[d]):r.hide.bind(c+k,y)})),d&&(a.each(s.show,function(a,b){r.show.bind(b+k,x)}),"number"===typeof p.hide.distance&&r.show.bind("mousemove"+k,function(a){var b=B.origin||{},c=p.hide.distance,d=Math.abs;b&&(d(a.pageX-b.pageX)>=c||d(a.pageY-b.pageY)>=c)&&u.hide(a)})),j&&((n.adjust.resize||n.viewport)&&a(a.event.special.resize?n.viewport:b).bind("resize"+k,D),(n.viewport||t&&z.css("position")==="fixed")&&a(n.viewport).bind("scroll"+k,D),/unfocus/i.test(p.hide.event)&&r.doc.bind("mousedown"+k,function(b){var d=a(b.target);d.parents(m).length===0&&d.add(c).length>1&&z.is(":visible")&&!z.hasClass(l)&&u.hide(b)}),p.hide.leave&&/mouseleave|mouseout/i.test(p.hide.event)&&a(b).bind("blur"+k+" mouse"+(p.hide.leave.indexOf("frame")>-1?"out":"leave")+k,function(a){a.relatedTarget||u.hide(a)}),n.target==="mouse"&&r.doc.bind("mousemove"+k,function(a){n.adjust.mouse&&!z.hasClass(l)&&z.is(":visible")&&u.reposition(a||i)}))}function J(b,d){function g(a){function c(c){(b=b.not(this)).length===0&&(u.redraw(),u.reposition(B.event),a())}var b;if((b=f.find("img:not([height]):not([width])")).length===0)return c.call(b);b.each(function(a,b){(function d(){var e=u.timers.img;if(b.height&&b.width){clearTimeout(e[a]);return c.call(b)}e[a]=setTimeout(d,20)})()})}var f=A.content;b=b||p.content.text;if(!u.rendered||!b)return e;a.isFunction(b)&&(b=b.call(c,u)||""),b.jquery&&b.length>0?f.empty().append(b.css({display:"block"})):f.html(b),u.rendered<0?z.queue("fx",g):(y=0,g(a.noop));return u}function I(b){var d=A.title;if(!u.rendered||!b)return e;a.isFunction(b)&&(b=b.call(c,u)||""),b.jquery&&b.length>0?d.empty().append(b.css({display:"block"})):d.html(b),u.redraw(),u.rendered&&z.is(":visible")&&u.reposition(B.event)}function H(a){var b=A.button,c=A.title;if(!u.rendered)return e;a?(c||G(),F()):b.remove()}function G(){var b=w+"-title";A.titlebar&&E(),A.titlebar=a("<div />",{"class":j+"-titlebar "+(p.style.widget?"ui-widget-header":"")}).append(A.title=a("<div />",{id:b,"class":j+"-title","aria-atomic":d})).insertBefore(A.content),p.content.title.button?F():u.rendered&&u.redraw()}function F(){var b=p.content.title.button,c=typeof b==="string",d=c?b:"Close tooltip";A.button&&A.button.remove(),b.jquery?A.button=b:A.button=a("<a />",{"class":"ui-state-default "+(p.style.widget?"":j+"-icon"),title:d,"aria-label":d}).prepend(a("<span />",{"class":"ui-icon ui-icon-close",html:"&times;"})),A.button.appendTo(A.titlebar).attr("role","button").hover(function(b){a(this).toggleClass("ui-state-hover",b.type==="mouseenter")}).click(function(a){z.hasClass(l)||u.hide(a);return e}).bind("mousedown keydown mouseup keyup mouseout",function(b){a(this).toggleClass("ui-state-active ui-state-focus",b.type.substr(-4)==="down")}),u.redraw()}function E(){A.title&&(A.titlebar.remove(),A.titlebar=A.title=A.button=f,u.reposition())}function D(){var a=p.style.widget;z.toggleClass(k,a),A.content.toggleClass(k+"-content",a),A.titlebar&&A.titlebar.toggleClass(k+"-header",a),A.button&&A.button.toggleClass(j+"-icon",!a)}function C(a){var b=0,c,d=p,e=a.split(".");while(d=d[e[b++]])b<e.length&&(c=d);return[c||p,e.pop()]}var u=this,v=document.body,w=j+"-"+q,x=0,y=0,z=a(),A,B;u.id=q,u.rendered=e,u.elements=A={target:c},u.timers={img:[]},u.options=p,u.checks={},u.plugins={},u.cache=B={event:{},target:f,disabled:e,attr:s},u.checks.builtin={"^id$":function(b,c,f){var h=f===d?g.nextid:f,i=j+"-"+h;h!==e&&h.length>0&&!a("#"+i).length&&(z[0].id=i,A.content[0].id=i+"-content",A.title[0].id=i+"-title")},"^content.text$":function(a,b,c){J(c)},"^content.title.text$":function(a,b,c){if(!c)return E();!A.title&&c&&G(),I(c)},"^content.title.button$":function(a,b,c){H(c)},"^position.(my|at)$":function(a,b,c){"string"===typeof c&&(a[b]=new h.Corner(c))},"^position.container$":function(a,b,c){u.rendered&&z.appendTo(c)},"^(show|hide).(event|target|fixed|delay|inactive)$":function(a,b,c,d,e){var f=[1,0,0];f[e[1]==="show"?"push":"unshift"](0),L.apply(u,f),K.apply(u,[1,1,0,0])},"^show.ready$":function(){u.rendered?u.show():u.render(1)},"^style.classes$":function(b,c,d){a.attr(z[0],"class",j+" qtip ui-helper-reset "+d)},"^style.widget|content.title":D,"^events.(render|show|move|hide|focus|blur)$":function(b,c,d){z[(a.isFunction(d)?"":"un")+"bind"]("tooltip"+c,d)}},a.extend(u,{render:function(b){if(u.rendered)return u;var f=p.content.title.text,g=a.Event("tooltiprender");a.attr(c[0],"aria-describedby",w),z=A.tooltip=a("<div/>",{id:w,"class":j+" qtip ui-helper-reset "+p.style.classes,width:p.style.width||"",role:"alert","aria-live":"polite","aria-atomic":e,"aria-describedby":w+"-content","aria-hidden":d}).toggleClass(l,B.disabled).data("qtip",u).appendTo(p.position.container).append(A.content=a("<div />",{"class":j+"-content",id:w+"-content","aria-atomic":d})),u.rendered=-1,y=1,f&&(G(),I(f)),J(),u.rendered=d,D(),a.each(p.events,function(b,c){a.isFunction(c)&&z.bind(b==="toggle"?"tooltipshow tooltiphide":"tooltip"+b,c)}),a.each(h,function(){this.initialize==="render"&&this(u)}),K(1,1,1,1),z.queue("fx",function(a){g.originalEvent=B.event,z.trigger(g,[u]),y=0,u.redraw(),(p.show.ready||b)&&u.show(B.event),a()});return u},get:function(a){var b,c;switch(a.toLowerCase()){case"dimensions":b={height:z.outerHeight(),width:z.outerWidth()};break;case"offset":b=h.offset(z,p.position.container);break;default:c=C(a.toLowerCase()),b=c[0][c[1]],b=b.precedance?b.string():b}return b},set:function(b,c){function m(a,b){var c,d,e;for(c in k)for(d in k[c])if(e=(new RegExp(d,"i")).exec(a))b.push(e),k[c][d].apply(u,b)}var g=/^position\.(my|at|adjust|target|container)|style|content|show\.ready/i,h=/^content\.(title|attr)|style/i,i=e,j=e,k=u.checks,l;"string"===typeof b?(l=b,b={},b[l]=c):b=a.extend(d,{},b),a.each(b,function(c,d){var e=C(c.toLowerCase()),f;f=e[0][e[1]],e[0][e[1]]="object"===typeof d&&d.nodeType?a(d):d,b[c]=[e[0],e[1],d,f],i=g.test(c)||i,j=h.test(c)||j}),t(p),x=y=1,a.each(b,m),x=y=0,z.is(":visible")&&u.rendered&&(i&&u.reposition(p.position.target==="mouse"?f:B.event),j&&u.redraw());return u},toggle:function(b,c){function l(){b?(a.browser.msie&&z[0].style.removeAttribute("filter"),z.css("overflow","")):z.css({display:"",visibility:"",width:"",opacity:"",left:"",top:""})}if(!u.rendered)if(b)u.render(1);else return u;var d=b?"show":"hide",g=p[d],h=z.is(":visible"),j,k;(typeof b).search("boolean|number")&&(b=!h);if(h===b)return u;if(c){if(/over|enter/.test(c.type)&&/out|leave/.test(B.event.type)&&c.target===p.show.target[0]&&z.has(c.relatedTarget).length)return u;B.event=a.extend({},c)}k=a.Event("tooltip"+d),k.originalEvent=c?B.event:f,z.trigger(k,[u,90]);if(k.isDefaultPrevented())return u;a.attr(z[0],"aria-hidden",!b),b?(B.origin=a.extend({},i),u.focus(c),a.isFunction(p.content.text)&&J(),u.reposition(c),g.solo&&a(m,g.solo).not(z).qtip("hide",k)):(clearTimeout(u.timers.show),delete B.origin,u.blur(c)),z.stop(0,1),a.isFunction(g.effect)?(g.effect.call(z,u),z.queue("fx",function(a){l(),a()})):g.effect===e?(z[d](),l.call(z)):z.fadeTo(90,b?1:0,l),b&&g.target.trigger("qtip-"+q+"-inactive");return u},show:function(a){return u.toggle(d,a)},hide:function(a){return u.toggle(e,a)},focus:function(b){if(!u.rendered)return u;var c=a(m),d=parseInt(z[0].style.zIndex,10),e=g.zindex+c.length,f=a.extend({},b),h,i;z.hasClass(n)||(i=a.Event("tooltipfocus"),i.originalEvent=f,z.trigger(i,[u,e]),i.isDefaultPrevented()||(d!==e&&(c.each(function(){this.style.zIndex>d&&(this.style.zIndex=this.style.zIndex-1)}),c.filter("."+n).qtip("blur",f)),z.addClass(n)[0].style.zIndex=e));return u},blur:function(b){var c=a.extend({},b),d;z.removeClass(n),d=a.Event("tooltipblur"),d.originalEvent=c,z.trigger(d,[u]);return u},reposition:function(c,d){if(!u.rendered||x)return u;x=1;var f=p.position.target,g=p.position,k=g.my,l=g.at,m=g.adjust,n=m.method.split(" "),o=z.outerWidth(),q=z.outerHeight(),r=0,s=0,t=a.Event("tooltipmove"),w=z.css("position")==="fixed",y=g.viewport,A={left:0,top:0},C=(u.plugins.tip||{}).corner,D={horizontal:n[0],vertical:n[1]||n[0],tip:p.style.tip||{},left:function(a){var b=D.horizontal==="shift",c=y.offset.left+y.scrollLeft,d=k.x==="left"?o:k.x==="right"?-o:-o/2,e=l.x==="left"?r:l.x==="right"?-r:-r/2,f=D.tip.width+D.tip.border*2||0,g=C&&C.precedance==="x"&&!b?f:0,h=c-a-g,i=a+o-y.width-c+g,j=d-(k.precedance==="x"||k.x===k.y?e:0),n=k.x==="center";b?(g=C&&C.precedance==="y"?f:0,j=(k.x==="left"?1:-1)*d-g,A.left+=h>0?h:i>0?-i:0,A.left=Math.max(y.offset.left+(g&&C.x==="center"?D.tip.offset:0),a-j,Math.min(Math.max(y.offset.left+y.width,a+j),A.left))):(h>0&&(k.x!=="left"||i>0)?A.left-=j+(n?0:2*m.x):i>0&&(k.x!=="right"||h>0)&&(A.left-=n?-j:j+2*m.x),A.left!==a&&n&&(A.left-=m.x),A.left<c&&-A.left>i&&(A.left=a));return A.left-a},top:function(a){var b=D.vertical==="shift",c=y.offset.top+y.scrollTop,d=k.y==="top"?q:k.y==="bottom"?-q:-q/2,e=l.y==="top"?s:l.y==="bottom"?-s:-s/2,f=D.tip.height+D.tip.border*2||0,g=C&&C.precedance==="y"&&!b?f:0,h=c-a-g,i=a+q-y.height-c+g,j=d-(k.precedance==="y"||k.x===k.y?e:0),n=k.y==="center";b?(g=C&&C.precedance==="x"?f:0,j=(k.y==="top"?1:-1)*d-g,A.top+=h>0?h:i>0?-i:0,A.top=Math.max(y.offset.top+(g&&C.x==="center"?D.tip.offset:0),a-j,Math.min(Math.max(y.offset.top+y.height,a+j),A.top))):(h>0&&(k.y!=="top"||i>0)?A.top-=j+(n?0:2*m.y):i>0&&(k.y!=="bottom"||h>0)&&(A.top-=n?-j:j+2*m.y),A.top!==a&&n&&(A.top-=m.y),A.top<0&&-A.top>i&&(A.top=a));return A.top-a}};if(f==="mouse")l={x:"left",y:"top"},c=c&&(c.type==="resize"||c.type==="scroll")?B.event:!m.mouse&&B.origin?B.origin:i&&(m.mouse||!c||!c.pageX)?{pageX:i.pageX,pageY:i.pageY}:c,A={top:c.pageY,left:c.pageX};else{f==="event"&&(c&&c.target&&c.type!=="scroll"&&c.type!=="resize"?f=B.target=a(c.target):f=B.target),f=a(f).eq(0);if(f.length===0)return u;f[0]===document||f[0]===b?(r=h.iOS?b.innerWidth:f.width(),s=h.iOS?b.innerHeight:f.height(),f[0]===b&&(A={top:!w||h.iOS?y.scrollTop():0,left:!w||h.iOS?y.scrollLeft():0})):f.is("area")&&h.imagemap?A=h.imagemap(f,l):f[0].namespaceURI==="http://www.w3.org/2000/svg"&&h.svg?A=h.svg(f,l):(r=f.outerWidth(),s=f.outerHeight(),A=h.offset(f,g.container,w)),A.offset&&(r=A.width,s=A.height,A=A.offset),A.left+=l.x==="right"?r:l.x==="center"?r/2:0,A.top+=l.y==="bottom"?s:l.y==="center"?s/2:0}A.left+=m.x+(k.x==="right"?-o:k.x==="center"?-o/2:0),A.top+=m.y+(k.y==="bottom"?-q:k.y==="center"?-q/2:0),y.jquery&&f[0]!==b&&f[0]!==v&&D.vertical+D.horizontal!=="nonenone"?(y={elem:y,height:y[(y[0]===b?"h":"outerH")+"eight"](),width:y[(y[0]===b?"w":"outerW")+"idth"](),scrollLeft:y.scrollLeft(),scrollTop:y.scrollTop(),offset:y.offset()||{left:0,top:0}},A.adjusted={left:D.horizontal!=="none"?D.left(A.left):0,top:D.vertical!=="none"?D.top(A.top):0}):A.adjusted={left:0,top:0},z.attr("class",function(b,c){return a.attr(this,"class").replace(/ui-tooltip-pos-\w+/i,"")}).addClass(j+"-pos-"+k.abbreviation()),t.originalEvent=a.extend({},c),z.trigger(t,[u,A,y.elem||y]);if(t.isDefaultPrevented())return u;delete A.adjusted,d===e||isNaN(A.left)||isNaN(A.top)||!a.isFunction(g.effect)?z.css(A):a.isFunction(g.effect)&&(g.effect.call(z,u,a.extend({},A)),z.queue(function(b){a(this).css({opacity:"",height:""}),a.browser.msie&&this.style.removeAttribute("filter"),b()})),x=0;return u},redraw:function(){if(u.rendered<1||p.style.width||y)return u;var b=j+"-fluid",c=p.position.container,d,e,f,g;y=1,z.css("width","").addClass(b),e=z.width()+(a.browser.mozilla?1:0),f=z.css("max-width")||"",g=z.css("min-width")||"",d=(f+g).indexOf("%")>-1?c.width()/100:0,f=(f.indexOf("%")>-1?d:1)*parseInt(f,10)||e,g=(g.indexOf("%")>-1?d:1)*parseInt(g,10)||0,e=f+g?Math.min(Math.max(e,g),f):e,z.css("width",Math.round(e)).removeClass(b),y=0;return u},disable:function(b){var c=l;"boolean"!==typeof b&&(b=!z.hasClass(c)&&!B.disabled),u.rendered?(z.toggleClass(c,b),a.attr(z[0],"aria-disabled",b)):B.disabled=!!b;return u},enable:function(){return u.disable(e)},destroy:function(){var b=c[0],d=a.attr(b,r);u.rendered&&(z.remove(),a.each(u.plugins,function(){this.destroy&&this.destroy()})),clearTimeout(u.timers.show),clearTimeout(u.timers.hide),L(1,1,1,1),a.removeData(b,"qtip"),d&&(a.attr(b,"title",d),c.removeAttr(r)),c.removeAttr("aria-describedby").unbind(".qtip");return c}})}function t(b){var c;if(!b||"object"!==typeof b)return e;"object"!==typeof b.metadata&&(b.metadata={type:b.metadata});if("content"in b){if("object"!==typeof b.content||b.content.jquery)b.content={text:b.content};c=b.content.text||e,!a.isFunction(c)&&(!c&&!c.attr||c.length<1||"object"===typeof c&&!c.jquery)&&(b.content.text=e),"title"in b.content&&("object"!==typeof b.content.title&&(b.content.title={text:b.content.title}),c=b.content.title.text||e,!a.isFunction(c)&&(!c&&!c.attr||c.length<1||"object"===typeof c&&!c.jquery)&&(b.content.title.text=e))}"position"in b&&("object"!==typeof b.position&&(b.position={my:b.position,at:b.position})),"show"in b&&("object"!==typeof b.show&&(b.show.jquery?b.show={target:b.show}:b.show={event:b.show})),"hide"in b&&("object"!==typeof b.hide&&(b.hide.jquery?b.hide={target:b.hide}:b.hide={event:b.hide})),"style"in b&&("object"!==typeof b.style&&(b.style={classes:b.style})),a.each(h,function(){this.sanitize&&this.sanitize(b)});return b}function s(){var c=b.console;return c&&(c.error||c.log||a.noop).apply(c,arguments)}var d=!0,e=!1,f=null,g,h,i,j="ui-tooltip",k="ui-widget",l="ui-state-disabled",m="div.qtip."+j,n=j+"-focus",o=j+"-hover",p="-31000px",q="_replacedByqTip",r="oldtitle";g=a.fn.qtip=function(b,h,i){var j=(""+b).toLowerCase(),k=f,l=j==="disable"?[d]:a.makeArray(arguments).slice(1,10),m=l[l.length-1],n=this[0]?a.data(this[0],"qtip"):f;if(!arguments.length&&n||j==="api")return n;if("string"===typeof b){this.each(function(){var b=a.data(this,"qtip");if(!b)return d;m&&m.timeStamp&&(b.cache.event=m);if(j!=="option"&&j!=="options"||!h)b[j]&&b[j].apply(b[j],l);else if(a.isPlainObject(h)||i!==c)b.set(h,i);else{k=b.get(h);return e}});return k!==f?k:this}if("object"===typeof b||!arguments.length){n=t(a.extend(d,{},b));return g.bind.call(this,n,m)}},g.bind=function(b,c){return this.each(function(f){function p(b){function c(){o.render(typeof b==="object"||i.show.ready),k.show.unbind(l.show),k.hide.unbind(l.hide)}if(o.cache.disabled)return e;o.cache.event=a.extend({},b),i.show.delay>0?(clearTimeout(o.timers.show),o.timers.show=setTimeout(c,i.show.delay),l.show!==l.hide&&k.hide.bind(l.hide,function(){clearTimeout(o.timers.show)})):c()}var i,k,l,m=!b.id||b.id===e||b.id.length<1||a("#"+j+"-"+b.id).length?g.nextid++:b.id,n=".qtip-"+m+"-create",o=v.call(this,m,b);if(o===e)return d;i=o.options,a.each(h,function(){this.initialize==="initialize"&&this(o)}),k={show:i.show.target,hide:i.hide.target},l={show:a.trim(""+i.show.event).replace(/ /g,n+" ")+n,hide:a.trim(""+i.hide.event).replace(/ /g,n+" ")+n},/mouse(over|enter)/i.test(l.show)&&!/mouse(out|leave)/i.test(l.hide)&&(l.hide+=" mouseleave"+n),k.show.bind(l.show,p),(i.show.ready||i.prerender)&&p(c)})},h=g.plugins={Corner:function(a){a=(""+a).replace(/([A-Z])/," $1").replace(/middle/gi,"center").toLowerCase(),this.x=(a.match(/left|right/i)||a.match(/center/)||["inherit"])[0].toLowerCase(),this.y=(a.match(/top|bottom|center/i)||["inherit"])[0].toLowerCase(),this.precedance=a.charAt(0).search(/^(t|b)/)>-1?"y":"x",this.string=function(){return this.precedance==="y"?this.y+this.x:this.x+this.y},this.abbreviation=function(){var a=this.x.substr(0,1),b=this.y.substr(0,1);return a===b?a:a==="c"||a!=="c"&&b!=="c"?b+a:a+b}},offset:function(c,d,e){function l(a,b){f.left+=b*a.scrollLeft(),f.top+=b*a.scrollTop()}var f=c.offset(),g=d,i=0,j=document.body,k;if(g){do{if(g[0]===j)break;g.css("position")!=="static"&&(k=g.position(),f.left-=k.left+(parseInt(g.css("borderLeftWidth"),10)||0),f.top-=k.top+(parseInt(g.css("borderTopWidth"),10)||0),i++)}while(g=g.offsetParent());(d[0]!==j||i>1)&&l(d,1),(h.iOS<4.1&&h.iOS>3.1||!h.iOS&&e)&&l(a(b),-1)}return f},iOS:parseFloat((""+(/CPU.*OS ([0-9_]{1,3})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent)||[0,""])[1]).replace("undefined","3_2").replace("_","."))||e,fn:{attr:function(b,c){if(this.length){var d=this[0],e="title",f=a.data(d,"qtip");if(b===e){if(arguments.length<2)return a.attr(d,r);if(typeof f==="object"){f&&f.rendered&&f.options.content.attr===e&&f.cache.attr&&f.set("content.text",c),a.fn["attr"+q].apply(this,arguments),a.attr(d,r,a.attr(d,e));return this.removeAttr(e)}}}},clone:function(b){var c=a([]),d="title",e;e=a.fn["clone"+q].apply(this,arguments).filter("[oldtitle]").each(function(){a.attr(this,d,a.attr(this,r)),this.removeAttribute(r)}).end();return e},remove:a.ui?f:function(b,c){a(this).each(function(){c||(!b||a.filter(b,[this]).length)&&a("*",this).add(this).each(function(){a(this).triggerHandler("remove")})})}}},a.each(h.fn,function(b,c){if(!c)return d;var e=a.fn[b+q]=a.fn[b];a.fn[b]=function(){return c.apply(this,arguments)||e.apply(this,arguments)}}),a(document).bind("mousemove.qtip",function(a){i={pageX:a.pageX,pageY:a.pageY,type:"mousemove"}}),g.version="nightly",g.nextid=0,g.inactiveEvents="click dblclick mousedown mouseup mousemove mouseleave mouseenter".split(" "),g.zindex=15e3,g.defaults={prerender:e,id:e,overwrite:d,content:{text:d,attr:"title",title:{text:e,button:e}},position:{my:"top left",at:"bottom right",target:e,container:e,viewport:e,adjust:{x:0,y:0,mouse:d,resize:d,method:"flip flip"},effect:d},show:{target:e,event:"mouseenter",effect:d,delay:90,solo:e,ready:e},hide:{target:e,event:"mouseleave",effect:d,delay:0,fixed:e,inactive:e,leave:"window",distance:e},style:{classes:"",widget:e,width:e},events:{render:f,move:f,show:f,hide:f,toggle:f,focus:f,blur:f}},h.ajax=function(a){var b=a.plugins.ajax;return"object"===typeof b?b:a.plugins.ajax=new w(a)},h.ajax.initialize="render",h.ajax.sanitize=function(a){var b=a.content,c;b&&"ajax"in b&&(c=b.ajax,typeof c!=="object"&&(c=a.content.ajax={url:c}),"boolean"!==typeof c.once&&c.once&&(c.once=!!c.once))},a.extend(d,g.defaults,{content:{ajax:{loading:d,once:d}}}),h.imagemap=function(b,c){function l(a,b){var d=0,e=1,f=1,g=0,h=0,i=a.width,j=a.height;while(i>0&&j>0&&e>0&&f>0){i=Math.floor(i/2),j=Math.floor(j/2),c.x==="left"?e=i:c.x==="right"?e=a.width-i:e+=Math.floor(i/2),c.y==="top"?f=j:c.y==="bottom"?f=a.height-j:f+=Math.floor(j/2),d=b.length;while(d--){if(b.length<2)break;g=b[d][0]-a.offset.left,h=b[d][1]-a.offset.top,(c.x==="left"&&g>=e||c.x==="right"&&g<=e||c.x==="center"&&(g<e||g>a.width-e)||c.y==="top"&&h>=f||c.y==="bottom"&&h<=f||c.y==="center"&&(h<f||h>a.height-f))&&b.splice(d,1)}}return{left:b[0][0],top:b[0][1]}}var d=b.attr("shape").toLowerCase(),e=b.attr("coords").split(","),f=[],g=a('img[usemap="#'+b.parent("map").attr("name")+'"]'),h=g.offset(),i={width:0,height:0,offset:{top:1e10,right:0,bottom:0,left:1e10}},j=0,k=0;h.left+=Math.ceil((g.outerWidth()-g.width())/2),h.top+=Math.ceil((g.outerHeight()-g.height())/2);if(d==="poly"){j=e.length;while(j--)k=[parseInt(e[--j],10),parseInt(e[j+1],10)],k[0]>i.offset.right&&(i.offset.right=k[0]),k[0]<i.offset.left&&(i.offset.left=k[0]),k[1]>i.offset.bottom&&(i.offset.bottom=k[1]),k[1]<i.offset.top&&(i.offset.top=k[1]),f.push(k)}else f=a.map(e,function(a){return parseInt(a,10)});switch(d){case"rect":i={width:Math.abs(f[2]-f[0]),height:Math.abs(f[3]-f[1]),offset:{left:f[0],top:f[1]}};break;case"circle":i={width:f[2]+2,height:f[2]+2,offset:{left:f[0],top:f[1]}};break;case"poly":a.extend(i,{width:Math.abs(i.offset.right-i.offset.left),height:Math.abs(i.offset.bottom-i.offset.top)}),c.string()==="centercenter"?i.offset={left:i.offset.left+i.width/2,top:i.offset.top+i.height/2}:i.offset=l(i,f.slice()),i.width=i.height=0}i.offset.left+=h.left,i.offset.top+=h.top;return i},h.tip=function(a){var b=a.plugins.tip;return"object"===typeof b?b:a.plugins.tip=new y(a)},h.tip.initialize="render",h.tip.sanitize=function(a){var b=a.style,c;b&&"tip"in b&&(c=a.style.tip,typeof c!=="object"&&(a.style.tip={corner:c}),/string|boolean/i.test(typeof c.corner)||(c.corner=d),typeof c.width!=="number"&&delete c.width,typeof c.height!=="number"&&delete c.height,typeof c.border!=="number"&&c.border!==d&&delete c.border,typeof c.offset!=="number"&&delete c.offset)},a.extend(d,g.defaults,{style:{tip:{corner:d,mimic:e,width:6,height:6,border:d,offset:0}}}),h.svg=function(b,c){var d=a(document),e=b[0],f={width:0,height:0,offset:{top:1e10,left:1e10}},g,h,i,j,k;if(e.getBBox&&e.parentNode){g=e.getBBox(),h=e.getScreenCTM(),i=e.farthestViewportElement||e;if(!i.createSVGPoint)return f;j=i.createSVGPoint(),j.x=g.x,j.y=g.y,k=j.matrixTransform(h),f.offset.left=k.x,f.offset.top=k.y,j.x+=g.width,j.y+=g.height,k=j.matrixTransform(h),f.width=k.x-f.offset.left,f.height=k.y-f.offset.top,f.offset.left+=d.scrollLeft(),f.offset.top+=d.scrollTop()}return f},h.modal=function(a){var b=a.plugins.modal;return"object"===typeof b?b:a.plugins.modal=new z(a)},h.modal.initialize="render",h.modal.sanitize=function(a){a.show&&(typeof a.show.modal!=="object"?a.show.modal={on:!!a.show.modal}:typeof a.show.modal.on==="undefined"&&(a.show.modal.on=d))},a.extend(d,g.defaults,{show:{modal:{on:e,effect:d,blur:d,escape:d}}}),h.bgiframe=function(b){var c=a.browser,d=b.plugins.bgiframe;if(a("select, object").length<1||(!c.msie||c.version.charAt(0)!=="6"))return e;return"object"===typeof d?d:b.plugins.bgiframe=new A(b)},h.bgiframe.initialize="render"}(jQuery,window)
;/**
* hoverIntent r6 // 2011.02.26 // jQuery 1.5.1+
* <http://cherne.net/brian/resources/jquery.hoverIntent.html>
* 
* @param  f  onMouseOver function || An object with configuration options
* @param  g  onMouseOut function  || Nothing (use configuration options object)
* @author    Brian Cherne brian(at)cherne(dot)net
*/
(function($){$.fn.hoverIntent=function(f,g){var cfg={sensitivity:7,interval:100,timeout:0};cfg=$.extend(cfg,g?{over:f,out:g}:f);var cX,cY,pX,pY;var track=function(ev){cX=ev.pageX;cY=ev.pageY};var compare=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);if((Math.abs(pX-cX)+Math.abs(pY-cY))<cfg.sensitivity){$(ob).unbind("mousemove",track);ob.hoverIntent_s=1;return cfg.over.apply(ob,[ev])}else{pX=cX;pY=cY;ob.hoverIntent_t=setTimeout(function(){compare(ev,ob)},cfg.interval)}};var delay=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);ob.hoverIntent_s=0;return cfg.out.apply(ob,[ev])};var handleHover=function(e){var ev=jQuery.extend({},e);var ob=this;if(ob.hoverIntent_t){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t)}if(e.type=="mouseenter"){pX=ev.pageX;pY=ev.pageY;$(ob).bind("mousemove",track);if(ob.hoverIntent_s!=1){ob.hoverIntent_t=setTimeout(function(){compare(ev,ob)},cfg.interval)}}else{$(ob).unbind("mousemove",track);if(ob.hoverIntent_s==1){ob.hoverIntent_t=setTimeout(function(){delay(ev,ob)},cfg.timeout)}}};return this.bind('mouseenter',handleHover).bind('mouseleave',handleHover)}})(jQuery);
;/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */
;/*
Thumbnail scroller jQuery plugin
Author: malihu [http://manos.malihu.gr]
Homepage: manos.malihu.gr/jquery-thumbnail-scroller
*/
(function($){  
 $.fn.thumbnailScroller=function(options){  
	var defaults={ //default options
		scrollerType:"hoverPrecise", //values: "hoverPrecise", "hoverAccelerate", "clickButtons"
		scrollerOrientation:"horizontal", //values: "horizontal", "vertical"
		scrollEasing:"easeOutCirc", //easing type
		scrollEasingAmount:800, //value: milliseconds
		acceleration:2, //value: integer
		scrollSpeed:600, //value: milliseconds
		noScrollCenterSpace:0, //value: pixels
		autoScrolling:0, //value: integer
		autoScrollingSpeed:8000, //value: milliseconds
		autoScrollingEasing:"easeInOutQuad", //easing type
		autoScrollingDelay:2500 //value: milliseconds
	};
	var options=$.extend(defaults,options);
    return this.each(function(){ 
		//cache vars
		var $this=$(this);
		var $scrollerContainer=$this.children(".jTscrollerContainer");
		var $scroller=$this.children(".jTscrollerContainer").children(".jTscroller");
		var $scrollerNextButton=$this.children(".jTscrollerNextButton");
		var $scrollerPrevButton=$this.children(".jTscrollerPrevButton");
		//set scroller width
		if(options.scrollerOrientation=="horizontal"){
			$scrollerContainer.css("width",999999); 
			var totalWidth=$scroller.outerWidth(true);
			$scrollerContainer.css("width",totalWidth);
		}else{
			var totalWidth=$scroller.outerWidth(true);
		}
		var totalHeight=$scroller.outerHeight(true); //scroller height
		//do the scrolling
		if(totalWidth>$this.width() || totalHeight>$this.height()){ //needs scrolling		
			var pos;
			var mouseCoords;
			var mouseCoordsY;
			if(options.scrollerType=="hoverAccelerate"){ //type hoverAccelerate
				var animTimer;
				var interval=8;
				$this.hover(function(){ //mouse over
					$this.mousemove(function(e){
						pos=findPos(this);
						mouseCoords=(e.pageX-pos[1]);
						mouseCoordsY=(e.pageY-pos[0]);
					});
					clearInterval(animTimer);
					animTimer = setInterval(Scrolling,interval);
				},function(){  //mouse out
					clearInterval(animTimer);
					$scroller.stop();
				});
				$scrollerPrevButton.add($scrollerNextButton).hide(); //hide buttons
			}else if(options.scrollerType=="clickButtons"){
				ClickScrolling();
			}else{ //type hoverPrecise
				pos=findPos(this);
				$this.mousemove(function(e){
					mouseCoords=(e.pageX-pos[1]);
					mouseCoordsY=(e.pageY-pos[0]);
					var mousePercentX=mouseCoords/$this.width(); if(mousePercentX>1){mousePercentX=1;}
					var mousePercentY=mouseCoordsY/$this.height(); if(mousePercentY>1){mousePercentY=1;}
					var destX=Math.round(-((totalWidth-$this.width())*(mousePercentX)));
					var destY=Math.round(-((totalHeight-$this.height())*(mousePercentY)));
					$scroller.stop(true,false).animate({left:destX,top:destY},options.scrollEasingAmount,options.scrollEasing); 
				});
				$scrollerPrevButton.add($scrollerNextButton).hide(); //hide buttons
			}
			//auto scrolling
			if(options.autoScrolling>0){
				AutoScrolling();
			}
		} else {
			//no scrolling needed
			$scrollerPrevButton.add($scrollerNextButton).hide(); //hide buttons
		}
		//"hoverAccelerate" scrolling fn
		var scrollerPos;
		var scrollerPosY;
		function Scrolling(){
			if((mouseCoords<$this.width()/2) && ($scroller.position().left>=0)){
				$scroller.stop(true,true).css("left",0); 
			}else if((mouseCoords>$this.width()/2) && ($scroller.position().left<=-(totalWidth-$this.width()))){
				$scroller.stop(true,true).css("left",-(totalWidth-$this.width())); 
			}else{
				if((mouseCoords<=($this.width()/2)-options.noScrollCenterSpace) || (mouseCoords>=($this.width()/2)+options.noScrollCenterSpace)){
					scrollerPos=Math.round(Math.cos((mouseCoords/$this.width())*Math.PI)*(interval+options.acceleration));
					$scroller.stop(true,true).animate({left:"+="+scrollerPos},interval,"linear"); 
				}else{
					$scroller.stop(true,true);
				}
			}
			if((mouseCoordsY<$this.height()/2) && ($scroller.position().top>=0)){
				$scroller.stop(true,true).css("top",0); 
			}else if((mouseCoordsY>$this.height()/2) && ($scroller.position().top<=-(totalHeight-$this.height()))){
				$scroller.stop(true,true).css("top",-(totalHeight-$this.height())); 
			}else{
				if((mouseCoordsY<=($this.height()/2)-options.noScrollCenterSpace) || (mouseCoordsY>=($this.height()/2)+options.noScrollCenterSpace)){
					scrollerPosY=Math.cos((mouseCoordsY/$this.height())*Math.PI)*(interval+options.acceleration);
					$scroller.stop(true,true).animate({top:"+="+scrollerPosY},interval,"linear"); 
				}else{
					$scroller.stop(true,true);
				}
			}
		}
		//auto scrolling fn
		var autoScrollingCount=0;
		function AutoScrolling(){
			$scroller.delay(options.autoScrollingDelay).animate({left:-(totalWidth-$this.width()),top:-(totalHeight-$this.height())},options.autoScrollingSpeed,options.autoScrollingEasing,function(){
				$scroller.animate({left:0,top:0},options.autoScrollingSpeed,options.autoScrollingEasing,function(){
					autoScrollingCount++;
					if(options.autoScrolling>1 && options.autoScrolling!=autoScrollingCount){
						AutoScrolling();
					}
				});
			});
		}
		//click scrolling fn
		function ClickScrolling(){
			$scrollerPrevButton.hide();
			$scrollerNextButton.show();
			$scrollerNextButton.click(function(e){ //next button
				e.preventDefault();
				var posX=$scroller.position().left;
				var diffX=totalWidth+(posX-$this.width());
				var posY=$scroller.position().top;
				var diffY=totalHeight+(posY-$this.height());
				$scrollerPrevButton.stop().show("fast");
				if(options.scrollerOrientation=="horizontal"){
					if(diffX>=$this.width()){
						$scroller.stop().animate({left:"-="+$this.width()},options.scrollSpeed,options.scrollEasing,function(){
							if(diffX==$this.width()){
								$scrollerNextButton.stop().hide("fast");
							}
						});
					} else {
						$scrollerNextButton.stop().hide("fast");
						$scroller.stop().animate({left:$this.width()-totalWidth},options.scrollSpeed,options.scrollEasing);
					}
				}else{
					if(diffY>=$this.height()){
						$scroller.stop().animate({top:"-="+$this.height()},options.scrollSpeed,options.scrollEasing,function(){
							if(diffY==$this.height()){
								$scrollerNextButton.stop().hide("fast");
							}
						});
					} else {
						$scrollerNextButton.stop().hide("fast");
						$scroller.stop().animate({top:$this.height()-totalHeight},options.scrollSpeed,options.scrollEasing);
					}
				}
			});
			$scrollerPrevButton.click(function(e){ //previous button
				e.preventDefault();
				var posX=$scroller.position().left;
				var diffX=totalWidth+(posX-$this.width());
				var posY=$scroller.position().top;
				var diffY=totalHeight+(posY-$this.height());
				$scrollerNextButton.stop().show("fast");
				if(options.scrollerOrientation=="horizontal"){
					if(posX+$this.width()<=0){
						$scroller.stop().animate({left:"+="+$this.width()},options.scrollSpeed,options.scrollEasing,function(){
							if(posX+$this.width()==0){
								$scrollerPrevButton.stop().hide("fast");
							}
						});
					} else {
						$scrollerPrevButton.stop().hide("fast");
						$scroller.stop().animate({left:0},options.scrollSpeed,options.scrollEasing);
					}
				}else{
					if(posY+$this.height()<=0){
						$scroller.stop().animate({top:"+="+$this.height()},options.scrollSpeed,options.scrollEasing,function(){
							if(posY+$this.height()==0){
								$scrollerPrevButton.stop().hide("fast");
							}
						});
					} else {
						$scrollerPrevButton.stop().hide("fast");
						$scroller.stop().animate({top:0},options.scrollSpeed,options.scrollEasing);
					}
				}
			});
		}
	});  
 };  
})(jQuery); 
//global js functions
//find element Position
function findPos(obj){
	var curleft=curtop=0;
	if (obj.offsetParent){
		curleft=obj.offsetLeft
		curtop=obj.offsetTop
		while(obj=obj.offsetParent){
			curleft+=obj.offsetLeft
			curtop+=obj.offsetTop
		}
	}
	return [curtop,curleft];
}
;/*	SWFObject v2.2 <http://code.google.com/p/swfobject/> 
	is released under the MIT License <http://www.opensource.org/licenses/mit-license.php> 
*/
var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+encodeURI(O.location).toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();
;/* 
 * flowplayer.js 3.2.6. The Flowplayer API
 * 
 * Copyright 2009-2011 Flowplayer Oy
 * 
 * This file is part of Flowplayer.
 * 
 * Flowplayer is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * Flowplayer is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with Flowplayer.  If not, see <http://www.gnu.org/licenses/>.
 * 
 * Date: 2011-02-04 05:45:28 -0500 (Fri, 04 Feb 2011)
 * Revision: 614 
 */
(function(){function g(o){console.log("$f.fireEvent",[].slice.call(o))}function k(q){if(!q||typeof q!="object"){return q}var o=new q.constructor();for(var p in q){if(q.hasOwnProperty(p)){o[p]=k(q[p])}}return o}function m(t,q){if(!t){return}var o,p=0,r=t.length;if(r===undefined){for(o in t){if(q.call(t[o],o,t[o])===false){break}}}else{for(var s=t[0];p<r&&q.call(s,p,s)!==false;s=t[++p]){}}return t}function c(o){return document.getElementById(o)}function i(q,p,o){if(typeof p!="object"){return q}if(q&&p){m(p,function(r,s){if(!o||typeof s!="function"){q[r]=s}})}return q}function n(s){var q=s.indexOf(".");if(q!=-1){var p=s.slice(0,q)||"*";var o=s.slice(q+1,s.length);var r=[];m(document.getElementsByTagName(p),function(){if(this.className&&this.className.indexOf(o)!=-1){r.push(this)}});return r}}function f(o){o=o||window.event;if(o.preventDefault){o.stopPropagation();o.preventDefault()}else{o.returnValue=false;o.cancelBubble=true}return false}function j(q,o,p){q[o]=q[o]||[];q[o].push(p)}function e(){return"_"+(""+Math.random()).slice(2,10)}var h=function(t,r,s){var q=this,p={},u={};q.index=r;if(typeof t=="string"){t={url:t}}i(this,t,true);m(("Begin*,Start,Pause*,Resume*,Seek*,Stop*,Finish*,LastSecond,Update,BufferFull,BufferEmpty,BufferStop").split(","),function(){var v="on"+this;if(v.indexOf("*")!=-1){v=v.slice(0,v.length-1);var w="onBefore"+v.slice(2);q[w]=function(x){j(u,w,x);return q}}q[v]=function(x){j(u,v,x);return q};if(r==-1){if(q[w]){s[w]=q[w]}if(q[v]){s[v]=q[v]}}});i(this,{onCuepoint:function(x,w){if(arguments.length==1){p.embedded=[null,x];return q}if(typeof x=="number"){x=[x]}var v=e();p[v]=[x,w];if(s.isLoaded()){s._api().fp_addCuepoints(x,r,v)}return q},update:function(w){i(q,w);if(s.isLoaded()){s._api().fp_updateClip(w,r)}var v=s.getConfig();var x=(r==-1)?v.clip:v.playlist[r];i(x,w,true)},_fireEvent:function(v,y,w,A){if(v=="onLoad"){m(p,function(B,C){if(C[0]){s._api().fp_addCuepoints(C[0],r,B)}});return false}A=A||q;if(v=="onCuepoint"){var z=p[y];if(z){return z[1].call(s,A,w)}}if(y&&"onBeforeBegin,onMetaData,onStart,onUpdate,onResume".indexOf(v)!=-1){i(A,y);if(y.metaData){if(!A.duration){A.duration=y.metaData.duration}else{A.fullDuration=y.metaData.duration}}}var x=true;m(u[v],function(){x=this.call(s,A,y,w)});return x}});if(t.onCuepoint){var o=t.onCuepoint;q.onCuepoint.apply(q,typeof o=="function"?[o]:o);delete t.onCuepoint}m(t,function(v,w){if(typeof w=="function"){j(u,v,w);delete t[v]}});if(r==-1){s.onCuepoint=this.onCuepoint}};var l=function(p,r,q,t){var o=this,s={},u=false;if(t){i(s,t)}m(r,function(v,w){if(typeof w=="function"){s[v]=w;delete r[v]}});i(this,{animate:function(y,z,x){if(!y){return o}if(typeof z=="function"){x=z;z=500}if(typeof y=="string"){var w=y;y={};y[w]=z;z=500}if(x){var v=e();s[v]=x}if(z===undefined){z=500}r=q._api().fp_animate(p,y,z,v);return o},css:function(w,x){if(x!==undefined){var v={};v[w]=x;w=v}r=q._api().fp_css(p,w);i(o,r);return o},show:function(){this.display="block";q._api().fp_showPlugin(p);return o},hide:function(){this.display="none";q._api().fp_hidePlugin(p);return o},toggle:function(){this.display=q._api().fp_togglePlugin(p);return o},fadeTo:function(y,x,w){if(typeof x=="function"){w=x;x=500}if(w){var v=e();s[v]=w}this.display=q._api().fp_fadeTo(p,y,x,v);this.opacity=y;return o},fadeIn:function(w,v){return o.fadeTo(1,w,v)},fadeOut:function(w,v){return o.fadeTo(0,w,v)},getName:function(){return p},getPlayer:function(){return q},_fireEvent:function(w,v,x){if(w=="onUpdate"){var z=q._api().fp_getPlugin(p);if(!z){return}i(o,z);delete o.methods;if(!u){m(z.methods,function(){var B=""+this;o[B]=function(){var C=[].slice.call(arguments);var D=q._api().fp_invoke(p,B,C);return D==="undefined"||D===undefined?o:D}});u=true}}var A=s[w];if(A){var y=A.apply(o,v);if(w.slice(0,1)=="_"){delete s[w]}return y}return o}})};function b(q,G,t){var w=this,v=null,D=false,u,s,F=[],y={},x={},E,r,p,C,o,A;i(w,{id:function(){return E},isLoaded:function(){return(v!==null&&v.fp_play!==undefined&&!D)},getParent:function(){return q},hide:function(H){if(H){q.style.height="0px"}if(w.isLoaded()){v.style.height="0px"}return w},show:function(){q.style.height=A+"px";if(w.isLoaded()){v.style.height=o+"px"}return w},isHidden:function(){return w.isLoaded()&&parseInt(v.style.height,10)===0},load:function(J){if(!w.isLoaded()&&w._fireEvent("onBeforeLoad")!==false){var H=function(){u=q.innerHTML;if(u&&!flashembed.isSupported(G.version)){q.innerHTML=""}if(J){J.cached=true;j(x,"onLoad",J)}flashembed(q,G,{config:t})};var I=0;m(a,function(){this.unload(function(K){if(++I==a.length){H()}})})}return w},unload:function(J){if(this.isFullscreen()&&/WebKit/i.test(navigator.userAgent)){if(J){J(false)}return w}if(u.replace(/\s/g,"")!==""){if(w._fireEvent("onBeforeUnload")===false){if(J){J(false)}return w}D=true;try{if(v){v.fp_close();w._fireEvent("onUnload")}}catch(H){}var I=function(){v=null;q.innerHTML=u;D=false;if(J){J(true)}};setTimeout(I,50)}else{if(J){J(false)}}return w},getClip:function(H){if(H===undefined){H=C}return F[H]},getCommonClip:function(){return s},getPlaylist:function(){return F},getPlugin:function(H){var J=y[H];if(!J&&w.isLoaded()){var I=w._api().fp_getPlugin(H);if(I){J=new l(H,I,w);y[H]=J}}return J},getScreen:function(){return w.getPlugin("screen")},getControls:function(){return w.getPlugin("controls")._fireEvent("onUpdate")},getLogo:function(){try{return w.getPlugin("logo")._fireEvent("onUpdate")}catch(H){}},getPlay:function(){return w.getPlugin("play")._fireEvent("onUpdate")},getConfig:function(H){return H?k(t):t},getFlashParams:function(){return G},loadPlugin:function(K,J,M,L){if(typeof M=="function"){L=M;M={}}var I=L?e():"_";w._api().fp_loadPlugin(K,J,M,I);var H={};H[I]=L;var N=new l(K,null,w,H);y[K]=N;return N},getState:function(){return w.isLoaded()?v.fp_getState():-1},play:function(I,H){var J=function(){if(I!==undefined){w._api().fp_play(I,H)}else{w._api().fp_play()}};if(w.isLoaded()){J()}else{if(D){setTimeout(function(){w.play(I,H)},50)}else{w.load(function(){J()})}}return w},getVersion:function(){var I="flowplayer.js 3.2.6";if(w.isLoaded()){var H=v.fp_getVersion();H.push(I);return H}return I},_api:function(){if(!w.isLoaded()){throw"Flowplayer "+w.id()+" not loaded when calling an API method"}return v},setClip:function(H){w.setPlaylist([H]);return w},getIndex:function(){return p},_swfHeight:function(){return v.clientHeight}});m(("Click*,Load*,Unload*,Keypress*,Volume*,Mute*,Unmute*,PlaylistReplace,ClipAdd,Fullscreen*,FullscreenExit,Error,MouseOver,MouseOut").split(","),function(){var H="on"+this;if(H.indexOf("*")!=-1){H=H.slice(0,H.length-1);var I="onBefore"+H.slice(2);w[I]=function(J){j(x,I,J);return w}}w[H]=function(J){j(x,H,J);return w}});m(("pause,resume,mute,unmute,stop,toggle,seek,getStatus,getVolume,setVolume,getTime,isPaused,isPlaying,startBuffering,stopBuffering,isFullscreen,toggleFullscreen,reset,close,setPlaylist,addClip,playFeed,setKeyboardShortcutsEnabled,isKeyboardShortcutsEnabled").split(","),function(){var H=this;w[H]=function(J,I){if(!w.isLoaded()){return w}var K=null;if(J!==undefined&&I!==undefined){K=v["fp_"+H](J,I)}else{K=(J===undefined)?v["fp_"+H]():v["fp_"+H](J)}return K==="undefined"||K===undefined?w:K}});w._fireEvent=function(Q){if(typeof Q=="string"){Q=[Q]}var R=Q[0],O=Q[1],M=Q[2],L=Q[3],K=0;if(t.debug){g(Q)}if(!w.isLoaded()&&R=="onLoad"&&O=="player"){v=v||c(r);o=w._swfHeight();m(F,function(){this._fireEvent("onLoad")});m(y,function(S,T){T._fireEvent("onUpdate")});s._fireEvent("onLoad")}if(R=="onLoad"&&O!="player"){return}if(R=="onError"){if(typeof O=="string"||(typeof O=="number"&&typeof M=="number")){O=M;M=L}}if(R=="onContextMenu"){m(t.contextMenu[O],function(S,T){T.call(w)});return}if(R=="onPluginEvent"||R=="onBeforePluginEvent"){var H=O.name||O;var I=y[H];if(I){I._fireEvent("onUpdate",O);return I._fireEvent(M,Q.slice(3))}return}if(R=="onPlaylistReplace"){F=[];var N=0;m(O,function(){F.push(new h(this,N++,w))})}if(R=="onClipAdd"){if(O.isInStream){return}O=new h(O,M,w);F.splice(M,0,O);for(K=M+1;K<F.length;K++){F[K].index++}}var P=true;if(typeof O=="number"&&O<F.length){C=O;var J=F[O];if(J){P=J._fireEvent(R,M,L)}if(!J||P!==false){P=s._fireEvent(R,M,L,J)}}m(x[R],function(){P=this.call(w,O,M);if(this.cached){x[R].splice(K,1)}if(P===false){return false}K++});return P};function B(){if($f(q)){$f(q).getParent().innerHTML="";p=$f(q).getIndex();a[p]=w}else{a.push(w);p=a.length-1}A=parseInt(q.style.height,10)||q.clientHeight;E=q.id||"fp"+e();r=G.id||E+"_api";G.id=r;t.playerId=E;if(typeof t=="string"){t={clip:{url:t}}}if(typeof t.clip=="string"){t.clip={url:t.clip}}t.clip=t.clip||{};if(q.getAttribute("href",2)&&!t.clip.url){t.clip.url=q.getAttribute("href",2)}s=new h(t.clip,-1,w);t.playlist=t.playlist||[t.clip];var I=0;m(t.playlist,function(){var K=this;if(typeof K=="object"&&K.length){K={url:""+K}}m(t.clip,function(L,M){if(M!==undefined&&K[L]===undefined&&typeof M!="function"){K[L]=M}});t.playlist[I]=K;K=new h(K,I,w);F.push(K);I++});m(t,function(K,L){if(typeof L=="function"){if(s[K]){s[K](L)}else{j(x,K,L)}delete t[K]}});m(t.plugins,function(K,L){if(L){y[K]=new l(K,L,w)}});if(!t.plugins||t.plugins.controls===undefined){y.controls=new l("controls",null,w)}y.canvas=new l("canvas",null,w);u=q.innerHTML;function J(L){var K=w.hasiPadSupport&&w.hasiPadSupport();if(/iPad|iPhone|iPod/i.test(navigator.userAgent)&&!/.flv$/i.test(F[0].url)&&!K){return true}if(!w.isLoaded()&&w._fireEvent("onBeforeClick")!==false){w.load()}return f(L)}function H(){if(u.replace(/\s/g,"")!==""){if(q.addEventListener){q.addEventListener("click",J,false)}else{if(q.attachEvent){q.attachEvent("onclick",J)}}}else{if(q.addEventListener){q.addEventListener("click",f,false)}w.load()}}setTimeout(H,0)}if(typeof q=="string"){var z=c(q);if(!z){throw"Flowplayer cannot access element: "+q}q=z;B()}else{B()}}var a=[];function d(o){this.length=o.length;this.each=function(p){m(o,p)};this.size=function(){return o.length}}window.flowplayer=window.$f=function(){var p=null;var o=arguments[0];if(!arguments.length){m(a,function(){if(this.isLoaded()){p=this;return false}});return p||a[0]}if(arguments.length==1){if(typeof o=="number"){return a[o]}else{if(o=="*"){return new d(a)}m(a,function(){if(this.id()==o.id||this.id()==o||this.getParent()==o){p=this;return false}});return p}}if(arguments.length>1){var t=arguments[1],q=(arguments.length==3)?arguments[2]:{};if(typeof t=="string"){t={src:t}}t=i({bgcolor:"#000000",version:[9,0],expressInstall:"http://static.flowplayer.org/swf/expressinstall.swf",cachebusting:false},t);if(typeof o=="string"){if(o.indexOf(".")!=-1){var s=[];m(n(o),function(){s.push(new b(this,k(t),k(q)))});return new d(s)}else{var r=c(o);return new b(r!==null?r:o,t,q)}}else{if(o){return new b(o,t,q)}}}return null};i(window.$f,{fireEvent:function(){var o=[].slice.call(arguments);var q=$f(o[0]);return q?q._fireEvent(o.slice(1)):null},addPlugin:function(o,p){b.prototype[o]=p;return $f},each:m,extend:i});if(typeof jQuery=="function"){jQuery.fn.flowplayer=function(q,p){if(!arguments.length||typeof arguments[0]=="number"){var o=[];this.each(function(){var r=$f(this);if(r){o.push(r)}});return arguments.length?o[arguments[0]]:new d(o)}return this.each(function(){$f(this,k(q),p?k(p):{})})}}})();(function(){var e=typeof jQuery=="function";var i={width:"100%",height:"100%",allowfullscreen:true,allowscriptaccess:"always",quality:"high",version:null,onFail:null,expressInstall:null,w3c:false,cachebusting:false};if(e){jQuery.tools=jQuery.tools||{};jQuery.tools.flashembed={version:"1.0.4",conf:i}}function j(){if(c.done){return false}var l=document;if(l&&l.getElementsByTagName&&l.getElementById&&l.body){clearInterval(c.timer);c.timer=null;for(var k=0;k<c.ready.length;k++){c.ready[k].call()}c.ready=null;c.done=true}}var c=e?jQuery:function(k){if(c.done){return k()}if(c.timer){c.ready.push(k)}else{c.ready=[k];c.timer=setInterval(j,13)}};function f(l,k){if(k){for(key in k){if(k.hasOwnProperty(key)){l[key]=k[key]}}}return l}function g(k){switch(h(k)){case"string":k=k.replace(new RegExp('(["\\\\])',"g"),"\\$1");k=k.replace(/^\s?(\d+)%/,"$1pct");return'"'+k+'"';case"array":return"["+b(k,function(n){return g(n)}).join(",")+"]";case"function":return'"function()"';case"object":var l=[];for(var m in k){if(k.hasOwnProperty(m)){l.push('"'+m+'":'+g(k[m]))}}return"{"+l.join(",")+"}"}return String(k).replace(/\s/g," ").replace(/\'/g,'"')}function h(l){if(l===null||l===undefined){return false}var k=typeof l;return(k=="object"&&l.push)?"array":k}if(window.attachEvent){window.attachEvent("onbeforeunload",function(){__flash_unloadHandler=function(){};__flash_savedUnloadHandler=function(){}})}function b(k,n){var m=[];for(var l in k){if(k.hasOwnProperty(l)){m[l]=n(k[l])}}return m}function a(r,t){var q=f({},r);var s=document.all;var n='<object width="'+q.width+'" height="'+q.height+'"';if(s&&!q.id){q.id="_"+(""+Math.random()).substring(9)}if(q.id){n+=' id="'+q.id+'"'}if(q.cachebusting){q.src+=((q.src.indexOf("?")!=-1?"&":"?")+Math.random())}if(q.w3c||!s){n+=' data="'+q.src+'" type="application/x-shockwave-flash"'}else{n+=' classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'}n+=">";if(q.w3c||s){n+='<param name="movie" value="'+q.src+'" />'}q.width=q.height=q.id=q.w3c=q.src=null;for(var l in q){if(q[l]!==null){n+='<param name="'+l+'" value="'+q[l]+'" />'}}var o="";if(t){for(var m in t){if(t[m]!==null){o+=m+"="+(typeof t[m]=="object"?g(t[m]):t[m])+"&"}}o=o.substring(0,o.length-1);n+='<param name="flashvars" value=\''+o+"' />"}n+="</object>";return n}function d(m,p,l){var k=flashembed.getVersion();f(this,{getContainer:function(){return m},getConf:function(){return p},getVersion:function(){return k},getFlashvars:function(){return l},getApi:function(){return m.firstChild},getHTML:function(){return a(p,l)}});var q=p.version;var r=p.expressInstall;var o=!q||flashembed.isSupported(q);if(o){p.onFail=p.version=p.expressInstall=null;m.innerHTML=a(p,l)}else{if(q&&r&&flashembed.isSupported([6,65])){f(p,{src:r});l={MMredirectURL:location.href,MMplayerType:"PlugIn",MMdoctitle:document.title};m.innerHTML=a(p,l)}else{if(m.innerHTML.replace(/\s/g,"")!==""){}else{m.innerHTML="<h2>Flash version "+q+" or greater is required</h2><h3>"+(k[0]>0?"Your version is "+k:"You have no flash plugin installed")+"</h3>"+(m.tagName=="A"?"<p>Click here to download latest version</p>":"<p>Download latest version from <a href='http://www.adobe.com/go/getflashplayer'>here</a></p>");if(m.tagName=="A"){m.onclick=function(){location.href="http://www.adobe.com/go/getflashplayer"}}}}}if(!o&&p.onFail){var n=p.onFail.call(this);if(typeof n=="string"){m.innerHTML=n}}if(document.all){window[p.id]=document.getElementById(p.id)}}window.flashembed=function(l,m,k){if(typeof l=="string"){var n=document.getElementById(l);if(n){l=n}else{c(function(){flashembed(l,m,k)});return}}if(!l){return}if(typeof m=="string"){m={src:m}}var o=f({},i);f(o,m);return new d(l,o,k)};f(window.flashembed,{getVersion:function(){var m=[0,0];if(navigator.plugins&&typeof navigator.plugins["Shockwave Flash"]=="object"){var l=navigator.plugins["Shockwave Flash"].description;if(typeof l!="undefined"){l=l.replace(/^.*\s+(\S+\s+\S+$)/,"$1");var n=parseInt(l.replace(/^(.*)\..*$/,"$1"),10);var r=/r/.test(l)?parseInt(l.replace(/^.*r(.*)$/,"$1"),10):0;m=[n,r]}}else{if(window.ActiveXObject){try{var p=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")}catch(q){try{p=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");m=[6,0];p.AllowScriptAccess="always"}catch(k){if(m[0]==6){return m}}try{p=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(o){}}if(typeof p=="object"){l=p.GetVariable("$version");if(typeof l!="undefined"){l=l.replace(/^\S+\s+(.*)$/,"$1").split(",");m=[parseInt(l[0],10),parseInt(l[2],10)]}}}}return m},isSupported:function(k){var m=flashembed.getVersion();var l=(m[0]>k[0])||(m[0]==k[0]&&m[1]>=k[1]);return l},domReady:c,asString:g,getHTML:a});if(e){jQuery.fn.flashembed=function(l,k){var m=null;this.each(function(){m=flashembed(this,l,k)});return l.api===false?this:m}}})();
;/*!
 * projekktor zwei V 0.9.01 (r59) 
 * http://www.projekktor.com
 * Copyright 2010, 2011, Sascha Kluger, Spinning Airwhale Media, http://www.spinningairwhale.com
 * under GNU General Public License
 * http://www.projekktor.com/license/
 *
 * You can use, modify and distribute the software, but do so in the spirit of Open Source.
 * You need to leave the copyright notices intact.
 * You need to be able to share any modifications you make to the Projekktor source (not the software Projekktor is integrated to).
 * Give credit where credit is due, spread the word, link to us if you can.
 */var projekktorConfig=function(){};projekktorConfig.prototype={_cookieName:"prkktr",_cookieExpiry:356,_plugins:["Display","Controlbar"],_addplugins:[],_version:"0.9.00",_reelParser:function(a){return a},_cssClassPrefix:"pp",_platformPriority:["native","flash"],_bypassFlashFFFix:false,_sandBox:false,_loop:false,_autoplay:false,_continuous:true,_allowPlaybackFrom:[],_dynamicTypeExtensions:false,_FilePosterSeparator:";",_playlist:[],_theme:false,_themeRepo:"http://themes.projekktorxl.com/",_messages:{0:"An error occurred.",1:"You aborted the media playback. ",2:"A network error caused the media download to fail part-way. ",3:"The media playback was aborted due to a corruption problem. ",4:"The media (%{src}) could not be loaded because the server or network failed.",5:"Sorry, your browser does not support the media format of the requested file (%{type}).",6:"Your client is in lack of the Flash Plugin V%{flashver} or higher.",7:"No media scheduled.",8:"! Invalid media model configured !",9:"File (%{src}) not found.",97:"No media scheduled.",98:"Invalid or malformed playlist data!",99:"Click display to proceed. ",500:"This Youtube video has been removed or set to private",501:"The Youtube user owning this video disabled embedding.",502:"Invalid Youtube Video-Id specified.",1000:"Copy this text and send it to your webmaster:"},_debug:false,_width:0,_height:0,_minHeight:160,_minWidth:160,ID:0,title:"",poster:false,controls:false,start:false,stop:false,volume:0.5,cover:"",disablePause:false,disallowSkip:false,fixedVolume:false,imageScaling:"aspectratio",videoScaling:"aspectratio",playerFlashMP4:"jarisplayer.swf",playerFlashMP3:"jarisplayer.swf",flashStreamType:"file",flashRTMPServer:"",flashVars:null,useYTIframeAPI:false,enableFlashFallback:true,enableNativePlayback:true,enableKeyboard:true,enableFullscreen:true,enableTestcard:true,duration:0};jQuery(function($){if($.browser.msie){(function(){if(!
/*@cc_on!@*/
0){return}var e="div,audio,video,source".split(",");for(var i=0;i<e.length;i++){document.createElement(e[i])}})();if(!Array.prototype.indexOf){Array.prototype.indexOf=function(obj,start){for(var i=(start||0),j=this.length;i<j;i++){if(this[i]==obj){return i}}return -1}}}var projekktors=[];function Iterator(arr){this.length=arr.length;this.each=function(fn){$.each(arr,fn)};this.size=function(){return arr.length}}if($.prop==undefined||$().jquery<"1.6"){$.fn.prop=function(arga,argb){return $(this).attr(arga,argb)}}projekktor=$p=function(){var arg=arguments[0],instances=[];if(!arguments.length){return projekktors[0]||null}if(typeof arg=="number"){return projekktors[arg]}if(typeof arg=="string"){if(arg=="*"){return new Iterator(projekktors)}for(var i=0;i<projekktors.length;i++){try{if(projekktors[i].getId()==arg.id){instances.push(projekktors[i]);continue}}catch(e){}try{for(var j=0;j<$(arg).length;j++){if(projekktors[i].env.playerDom.get(0)==$(arg).get(j)){instances.push(projekktors[i]);continue}}}catch(e){}try{if(projekktors[i].getParent()==arg){instances.push(projekktors[i]);continue}}catch(e){}try{if(projekktors[i].getId()==arg){instances.push(projekktors[i]);continue}}catch(e){}}if(instances.length>0){return(instances.length==1)?instances[0]:new Iterator(instances)}}if(instances.length==0){var cfg=arguments[1]||{};var callback=arguments[2]||{};if(typeof arg=="string"){var count=0;var playerA;$.each($(arg),function(){playerA=new PPlayer($(this),cfg,callback);projekktors.push(playerA);count++});return(count>1)?new Iterator(projekktors):playerA}else{if(arg){projekktors.push(new PPlayer(arg,cfg,callback));return new Iterator(projekktors)}}}return null;function PPlayer(srcNode,cfg,onReady){this.config=new projekktorConfig();this._persCfg=["volume","enableNativePlayback","enableFlashFallback"];this._queue=[];this.env={inFullscreen:false,playerStyle:null,scrollTop:null,scrollLeft:null,bodyOverflow:null,playerDom:null,mediaContainer:null,agent:"standard",mouseIsOver:false,loading:false,autoSize:false};this.media=[null];this._plugins=[];this.listeners=[];this.mediaGrid={};this.playerModel={};this._isReady=false;this._currentItem=0;this._playlistServer="";this._id="";this._reelUpdate=function(obj){this.env.loading=true;switch(typeof obj){default:obj=[{file:"",type:"",errorCode:98}];break;case"object":if(obj.length==0){obj=[{file:"",type:"",errorCode:97}]}break;case"undefined":obj=[{file:"",type:"",errorCode:97}];break}var ref=this,data=obj;this.media=[];try{var changes=false;for(var props in data.config){if(typeof data.config[props].indexOf("objectfunction")>-1){continue}this.config[props]=this._cleanValue(data.config[props]);changes=true}delete (data.config);if(changes===true){this._debug("Updated config var: "+props+" to "+this.config[props]);this._bubbleEvent("configModified")}}catch(e){}var files=data.playlist||data;for(var item in files){if(typeof files[item]=="function"){continue}if(typeof files[item]==undefined){continue}if(files[item]){this._addItem(this._prepareMedia({file:files[item],config:files[item].config||{},errorCode:files[item].errorCode}))}}this.env.loading=false;this._bubbleEvent("scheduled",this.getItemCount());this._syncPlugins(function(){ref.setActiveItem(0)})};this._addItem=function(data,idx,replace){var resultIdx=0;if(this.media.length===1&&this.media[0].mediaModel=="NA"){this._detachplayerModel();this.media=[]}if(idx===undefined||idx<0||idx>this.media.length-1){this.media.push(data);resultIdx=this.media.length-1}else{this.media.splice(idx,(replace===true)?1:0,data);resultIdx=idx}if(this.env.loading===false){this._bubbleEvent("scheduleModified",this.getItemCount())}return resultIdx};this._removeItem=function(idx){var resultIdx=0;if(this.media.length===1){if(this.media[0].mediaModel=="NA"){return 0}else{this.media[0]=this._prepareMedia({file:""});return 0}}if(idx===undefined||idx<0||idx>this.media.length-1){this.media.pop();resultIdx=this.media.length}else{this.media.splice(idx,1);resultIdx=idx}if(this.env.loading===false){this._bubbleEvent("scheduleModified",this.getItemCount())}return resultIdx};this._prepareMedia=function(data){var mediaFile="",indexChoosen=0,mediaType="",mediaModel="NA",fileExt="",extTypes={},typesModels={},errorCode=data.errorCode||7,lastLevel=100;var extRegEx=[];for(var i in $p.mmap){extRegEx.push("."+$p.mmap[i].ext);extTypes[$p.mmap[i].ext]=$p.mmap[i];typesModels[$p.mmap[i].type]=$p.mmap[i]}extRegEx="^.*.("+extRegEx.join("|")+")$";if(typeof data.file=="string"){data.file=[{src:data.file}];if(typeof data.type=="string"){data.file=[{src:data.file,type:data.type}]}}if(data.file===false){data.file=[{src:""}]}try{var dynConf=this.config._dynamicTypeExtensions;var tagsUsed,tag,filename;if(dynConf){filename=data.file[0].src+"";if(data.file.length==1){for(var j in dynConf){if(filename.match("{*}")){if(!data.file[j]){data.file[j]={}}data.file[j].src=filename.replace("{*}",dynConf[j].ext);for(var k in dynConf[j]){if(k=="ext"){continue}data.file[j][k]=dynConf[j][k]}}}}}for(var i in data.file){tagsUsed=data.file[0][i].src.match(/\{[a-z\*]*\}/gi);tag="";if(tagsUsed){for(var i=0;i<tagsUsed.length;i++){tag=tagsUsed[i].replace("{","").replace("}","");if(this.getConfig(tag)!==false){data.file[0][i].src=data.file[0][i].src.replace("{"+tag+"}",this.getConfig(tag))}else{data.file[0][i].src=data.file[0][i].src.replace("{"+tag+"}","")}}}}}catch(e){}var sourceObj={};for(var index in data.file){if(index=="config"){continue}sourceObj=data.file[index];if(typeof sourceObj=="string"){sourceObj={src:sourceObj}}if(sourceObj.src==undefined){continue}try{fileExt=sourceObj.src.match(new RegExp(extRegEx))[1];fileExt=(!fileExt)?"NaN":fileExt.replace(".","")}catch(e){fileExt="NaN"}if(sourceObj.type===undefined||sourceObj.type===""){if(extTypes[fileExt]){$.extend(sourceObj,extTypes[fileExt])}}else{try{var codecMatch=sourceObj.type.split(" ").join("").split(/[\;]codecs=.([a-zA-Z0-9\,]*)[\'|\"]/i);if(codecMatch[1]!==undefined){sourceObj.codec=codecMatch[1];sourceObj.type=codecMatch[0]}}catch(e){}if(typesModels[sourceObj.type]){$.extend(sourceObj,typesModels[sourceObj.type])}}if(lastLevel===100){mediaFile=sourceObj.src}if(lastLevel>this.config._platformPriority.indexOf(sourceObj.platform)&&this.mediaGrid[sourceObj.type]!="NA"){lastLevel=this.config._platformPriority.indexOf(sourceObj.platform);try{mediaModel=this.mediaGrid[sourceObj.type].toUpperCase()}catch(e){mediaModel="NA"}mediaFile=sourceObj.src;mediaType=sourceObj.type;indexChoosen=index}if(index==="src"){break}}try{if(typeof eval("playerModel"+mediaModel)!=="function"){mediaModel="NA";errorCode=0}else{if(data.config.flashStreamType=="rtmp"&&mediaModel.indexOf("FLASH")==-1){mediaModel+="FLASH"}}}catch(e){}var block=0;if(this.config._allowPlaybackFrom.length>0){for(var i=0;i<this.config._allowPlaybackFrom.length;i++){if(mediaFile.indexOf(this.config._allowPlaybackFrom[i])>-1){block++}}if(block==0){mediaFile=""}}data._originalConfig=data.file;data.fileConfig=data.file[indexChoosen];if(data.config.flashStreamType!="rtmp"){data.file=this.toAbsoluteURL(mediaFile)}else{data.file=mediaFile}data.mediaModel=mediaModel;data.mediaType=mediaType;data.errorCode=errorCode;data.ID=this.randomId(8);data._VALIDATED=true;data.config=data.config||{};this._debug("Set item of type: "+mediaType+" Model: "+data.mediaModel+" File:"+data.file+" Priority: "+lastLevel);return data};this._modelUpdateListener=function(type,value){var ref=this;if(!this.playerModel.init){return}if(type!="time"&&type!="progress"){this._debug("Received model Update: '"+type+"' ("+value+") while handling '"+this.playerModel.getFile()+"' using '"+this.playerModel.getModelName()+"'")}switch(type){case"state":this._bubbleEvent("state",value);switch(value){case"IDLE":break;case"AWAKENING":break;case"BUFFERING":break;case"ERROR":this._bubbleEvent("error",{});break;case"PLAYING":break;case"STOPPED":this._bubbleEvent("stopped",{});break;case"PAUSED":if(this.getConfig("disablePause")===true){this.playerModel.applyCommand("play",0)}break;case"COMPLETED":if(this._currentItem+1>=this.media.length){if(this.getInFullscreen()===true){this.setFullscreen(false)}this._bubbleEvent("done",{})}this.setActiveItem("next");break}break;case"buffer":this._bubbleEvent("buffer",value);this._bubbleEvent("time",value);break;case"modelReady":this._bubbleEvent("item",ref._currentItem);break;case"displayReady":this._bubbleEvent("displayReady",true);this._addGUIListeners();this._syncPlugins();break;case"FFreinit":break;case"seek":this._bubbleEvent("seek",{dest:value});break;case"volume":this.setConfig({volume:value});this._bubbleEvent("volume",value);break;case"progress":this._bubbleEvent("progress",value);break;case"time":this._bubbleEvent("time",value);break;case"fullscreen":this._bubbleEvent("fullscreen",value);break;case"resize":this._bubbleEvent("resize",value);break;case"playlist":this.setFile(value,true);break;case"config":this.setConfig(value);break;case"scaled":if(this.env.autoSize===true){this.env.playerDom.css({height:value.realHeight+"px",width:value.realWidth+"px"});this._bubbleEvent("resize",value);this.env.autoSize=false;break}this._bubbleEvent("scaled",value);break}};this._syncPlugins=function(callback){var ref=this;this.env.loading=true;(function(){try{if(ref._plugins.length>0){for(var i=0;i<ref._plugins.length;i++){if(ref._plugins[i].pluginReady!==true){setTimeout(arguments.callee,50);return}}}ref.env.loading=false;ref._bubbleEvent("pluginsReady",{});if(ref._isReady===true){ref._bubbleEvent("ready",{})}try{callback()}catch(e){}}catch(e){}})()};this._addGUIListeners=function(){var ref=this;this.env.playerDom.unbind();this.env.playerDom.mousemove(function(event){ref._displayMousemoveListener(event)});this.env.playerDom.mouseenter(function(event){ref._displayMouseEnterListener(event)});this.env.playerDom.mouseleave(function(event){ref._displayMouseLeaveListener(event)});$(window).bind("resize.projekktor"+this.getId(),function(){ref.playerModel.applyCommand("resize")});if(this.config.enableKeyboard===true){if(!$.browser.mozilla){$(document.documentElement).unbind("keydown.pp"+this._id);$(document.documentElement).bind("keydown.pp"+this._id,function(evt){ref._keyListener(evt)})}else{$(document.documentElement).unbind("keypress.pp"+this._id);$(document.documentElement).bind("keypress.pp"+this._id,function(evt){ref._keyListener(evt)})}}};this._removeGUIListeners=function(){$("#"+this.getId()).unbind();this.env.playerDom.unbind();$(window).unbind("resize.projekktor"+this.getId())};this._registerPlugins=function(){var plugins=$.merge(this.config._plugins,this.config._addplugins);if(this._plugins.length>0){return}if(plugins==0){return}for(var i=0;i<plugins.length;i++){var pluginName="projekktor"+plugins[i];try{typeof eval(pluginName)}catch(e){continue}var pluginObj=$.extend(true,{},new projekktorPluginInterface(),eval(pluginName).prototype);pluginObj.name=plugins[i].toLowerCase();pluginObj.pp=this;pluginObj.playerDom=this.env.playerDom;pluginObj._init(this.config["plugin_"+plugins[i].toLowerCase()]||{});this._plugins.push(pluginObj)}};this.removePlugin=function(rmvPl){if(this._plugins.length==0){return}var pluginsToRemove=rmvPl||this.config._plugins,pluginsRegistered=this._plugins.length;for(var j=0;j<pluginsToRemove.length;j++){for(var k=0;k<pluginsRegistered;k++){if(this._plugins[k]!=undefined){if(this._plugins[k].name==pluginsToRemove[j].toLowerCase()){this._plugins[k].deconstruct();this._plugins.splice(k,1)}}}}};this._bubbleEvent=function(evt,value){var event=evt,pluginData={};if(typeof event=="object"){if(!event._plugin){return}value.PLUGIN=event._plugin+"";value.EVENT=event._event+"";event="pluginevent"}if(event!="time"&&event!="progress"&&event!="mousemove"){this._debug("Fireing :"+event)}if(this._plugins.length>0){for(var i in this._plugins){try{this._plugins[i][event+"Handler"](value,this)}catch(e){}}}if(this.listeners.length>0){for(var i in this.listeners){try{if(this.listeners[i]["event"]==event||this.listeners[i]["event"]=="*"){this.listeners[i]["callback"](value,this)}}catch(e){}}}};this._detachplayerModel=function(){this._removeGUIListeners();try{this.playerModel.destroy()}catch(e){}this._bubbleEvent("detach",{})};this._displayMousemoveListener=function(evt){this._bubbleEvent("mousemove",{})};this._displayMouseEnterListener=function(evt){this._bubbleEvent("mouseenter",{});this.env.mouseIsOver=true;if($.browser.msie){evt.cancelBubble=true}else{evt.stopPropagation()}};this._displayMouseLeaveListener=function(evt){this._bubbleEvent("mouseleave",{});this.env.mouseIsOver=false;if($.browser.msie){evt.cancelBubble=true}else{evt.stopPropagation()}};this._keyListener=function(evt){if(this.env.mouseIsOver!==true){return false}if($.browser.msie){evt.cancelBubble=true}else{evt.stopPropagation()}evt.preventDefault();this._debug("Keypress: "+evt.keyCode);this._bubbleEvent("key",evt.keyCode);switch(evt.keyCode){case 27:this.setFullscreen(false);break;case 13:this.setFullscreen(true);break;case 39:this.setActiveItem("next");break;case 37:this.setActiveItem("previous");break;case 0:this.setPlayPause();break}return false};this._enterFullViewport=function(){if(this.env.inFullscreen===true){return}this.env.scrollTop=$(window).scrollTop();this.env.scrollLeft=$(window).scrollLeft();this.env.playerStyle=this.env.playerDom.attr("style");this.env.bodyOverflow=$("body").css("overflow");$(window).scrollTop(0);$(window).scrollLeft(0);$("body").css("overflow","hidden");this.env.playerDom.css({position:"fixed",display:"block",top:0,left:0,width:"100%",height:"100%",zIndex:99997});this.env.inFullscreen=true};this._exitFullViewport=function(){if(this.env.inFullscreen===false){return}this.env.playerDom.attr("style",this.env.playerStyle);$("body").css("overflow",this.env.bodyOverflow);$(window).scrollTop(this.env.scrollTop);$(window).scrollLeft(this.env.scrollLef);this.env.inFullscreen=false};this._enterSandboxFullViewport=function(){if(this.env.inFullscreen===true){return}var win=this.getSandboxWindow();var iframe=this.getSandboxIframe();if(!win||!iframe){return}this.env.scrollTop=win.scrollTop();this.env.scrollLeft=win.scrollLeft();this.env.playerStyle=iframe.attr("style");this.env.sandBoxWidth=iframe.attr("width");this.env.sandBoxHeight=iframe.attr("height");this.env.bodyOverflow=$(win[0].document.body).css("overflow");win.scrollTop(0);win.scrollLeft(0);$(win[0].document.body).css("overflow","hidden");iframe.css({position:"fixed",display:"block",top:0,left:0,width:"100%",height:"100%",zIndex:9999});this.env.inFullscreen=true};this._exitSandboxFullViewport=function(){if(this.env.inFullscreen===false){return}var win=this.getSandboxWindow();var iframe=this.getSandboxIframe();if(!win||!iframe){return}win.scrollTop(this.env.scrollTop);win.scrollLeft(this.env.scrollLef);$(win[0].document.body).css("overflow",this.env.bodyOverflow);iframe.attr("width",this.env.sandBoxWidth+"px");iframe.attr("height",this.env.sandBoxHeight+"px");iframe.attr("style",(this.env.playerStyle==undefined)?"":this.env.playerStyle);this.env.inFullscreen=false};this.getItemConfig=function(name,itemIdx){return this.getConfig(name,itemIdx)};this.getConfig=function(name,itemIdx){var idx=itemIdx||this._currentItem,result=undefined,playerCfg=(this.config["_"+name])?this.config["_"+name]:this.config[name];if(playerCfg!==undefined){result=playerCfg;if($.inArray(name,this._persCfg)>-1){if(this._cookie(name)!==null){result=this._cookie(name)}}if(this.config["_"+name]==undefined){try{if(this.media[idx]["config"][name]!==undefined){result=this.media[idx]["config"][name]}}catch(e){}}}else{if(name.indexOf("plugin_")>-1){try{if(this.media[idx]["config"][name]){result=this.media[idx]["config"][name]}}catch(e){}}}return result};this.getItemCount=function(){return this.media.length};this.getDC=function(){return this.env.playerDom};this.getState=function(){try{return this.playerModel.getState()}catch(e){return"IDLE"}};this.getLoadProgress=function(){try{return this.playerModel.getLoadProgress()}catch(e){return 0}};this.getKbPerSec=function(){try{return this.playerModel.getKbPerSec()}catch(e){return 0}};this.getItemId=function(idx){if(idx==undefined){return this.media[this._currentItem].ID}return this.media[idx].ID};this.getItemIdx=function(){return this._currentItem};this.getItem=function(){arg=arguments[0]||"current";switch(arg){case"next":return $.extend(true,[],this.media[this._currentItem+1]);case"prev":return $.extend(true,[],this.media[this._currentItem-1]);case"current":return $.extend(true,[],this.media[this._currentItem]);case"*":return $.extend(true,[],this.media);default:return $.extend(true,[],this.media[arg])}};this.getVolume=function(){return(this.getConfig("fixedVolume")===true)?this.config.volume:this.getConfig("volume")};this.getTrackId=function(){if(this.getConfig("trackId")){return this.config.trackId}if(this._playlistServer!=null){return"pl"+this._currentItem}return null};this.getLoadPlaybackProgress=function(){try{return this.playerModel.getLoadPlaybackProgress()}catch(e){return 0}};this.getDuration=function(){try{return this.playerModel.getDuration()}catch(e){return 0}};this.getPosition=function(){try{return this.playerModel.getPosition()||0}catch(e){return 0}};this.getTimeLeft=function(){try{return this.playerModel.getDuration()-this.playerModel.getPosition()}catch(e){return this.media[this._currentItem].duration}};this.getInFullscreen=function(){return this.env.inFullscreen};this.getMediaContainer=function(){if(this.env.mediaContainer==null){this.env.mediaContainer=$("#"+this.getMediaId())}if(this.env.mediaContainer.length==0){if(this.env.playerDom.find("."+this.config._cssClassPrefix+"display").length>0){this.env.mediaContainer=$(document.createElement("div")).attr({id:this.getId()+"_media"}).css({position:"absolute",overflow:"hidden",height:"100%",width:"100%",top:0,left:0,padding:0,margin:0,display:"block"}).appendTo(this.env.playerDom.find("."+this.config._cssClassPrefix+"display"))}else{this.env.mediaContainer=$(document.createElement("div")).attr({id:this.getMediaId()}).css({width:"1px",height:"1px"}).appendTo($(document.body))}}return this.env.mediaContainer};this.getMediaId=function(){return this.getId()+"_media"};this.getMediaType=function(){return this.media[this._currentItem].mediaType};this.getUsesFlash=function(){return(this.playerModel.requiresFlash!==false)};this.getModel=function(){try{return this.media[this._currentItem].mediaModel}catch(e){return"NA"}};this.getSandboxWindow=function(){try{return $(parent.window)}catch(e){return false}};this.getSandboxIframe=function(){try{return window.$(frameElement)}catch(e){return false}};this.getPlaylist=function(){return this.getItem("*")};this.getFlashVersion=function(){try{try{var axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");try{axo.AllowScriptAccess="always"}catch(e){return"6,0,0"}}catch(e){}return new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version").replace(/\D+/g,",").match(/^,?(.+),?$/)[1].match(/\d+/g)[0]}catch(e){try{if(navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin){return(navigator.plugins["Shockwave Flash 2.0"]||navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g,",").match(/^,?(.+),?$/)[1].match(/\d+/g)[0]}}catch(e){}}return"0,0,0".match(/\d+/g)[0]};this.getCanPlayNatively=function(type){var checkFor=[];compTable=this._testMediaSupport(true);if(typeof type=="string"){checkFor.push(type)}if(typeof type=="array"){checkFor=type}for(var i in this.mediaGrid){if(compTable[i]=="video"||compTable[i]=="audio"){if(arguments.length===0){return true}else{if($.inArray(i,checkFor)>-1){return true}}}}return false};this.getId=function(){return this._id};this.getHasGUI=function(){try{return this.playerModel.getHasGUI()}catch(e){return false}};this.getCssPrefix=function(){return this.config._cssClassPrefix};this.getPlayerDimensions=function(){return{width:this.config._width,height:this.config._height}};this.getMediaDimensions=function(){return{width:this.config._width,height:this.config._height}};this.getFromUrl=function(url,dest,callback,customParser,dataType){var data=null,ref=this;if(dest==ref&&callback=="_reelUpdate"){this._bubbleEvent("scheduleLoading",1+this.getItemCount())}this["_jsonp"+callback]=function(data){dest[callback](data)};if(dataType){if($.parseJSON==undefined&&dataType.indexOf("json")>-1){this._raiseError("Projekktor requires jQuery 1.4.2 in order to handle JSON playlists.");return this}dataType=(dataType.indexOf("/")>-1)?dataType.split("/")[1]:dataType}$.ajax({url:url,complete:function(xhr,status){if(dataType==undefined){try{if(xhr.getResponseHeader("Content-Type").indexOf("xml")>-1){dataType="xml"}if(xhr.getResponseHeader("Content-Type").indexOf("json")>-1){dataType="json"}}catch(e){}}switch(dataType){case"xml":if(window.DOMParser){data=new DOMParser();data=data.parseFromString(xhr.responseText,"text/xml")}else{data=new ActiveXObject("Microsoft.XMLDOM");data.async="false";data.loadXML(xhr.responseText)}break;case"json":data=xhr.responseText;if(typeof data=="string"){data=$.parseJSON(data)}break;case"jsonp":break;default:data=xhr.responseText;break}if(dest===ref){try{data=customParser(data,xhr.responseText)}catch(e){}}if(status!="error"&&dataType!="jsonp"){dest[callback](data)}},error:function(data){if(dataType!="jsonp"){dest[callback](false)}},cache:true,dataType:dataType,jsonpCallback:"projekktor('"+this.getId()+"')._jsonp"+callback,jsonp:"callback"});return this};this.setActiveItem=function(mixedData){var newItem=0;var lastItem=this._currentItem;if(this.env.loading===true){return this}if(typeof mixedData=="string"){switch(mixedData){case"previous":if(this.getConfig("disallowSkip")==true&&this.getState()!=="COMPLETED"){return this}newItem=this._currentItem-1;break;case"next":if(this.getConfig("disallowSkip")==true&&this.getState()!=="COMPLETED"){return this}newItem=this._currentItem+1;break;default:case"poster":result=0;break}}else{if(typeof mixedData=="number"){newItem=parseInt(mixedData)}else{newItem=0}}if(newItem!=this._currentItem){if(this.getConfig("disallowSkip")==true&&this.getState()!=="COMPLETED"){return this}this._detachplayerModel()}var ap=false;if(newItem===0&&lastItem==0&&this.config._autoplay===true){ap=true}else{if(this.getItemCount()>1&&newItem!=lastItem&&this.config._continuous===true&&newItem<this.getItemCount()){ap=true}}if(newItem>=this.getItemCount()||newItem<0){ap=this.config._loop;newItem=0}this._currentItem=newItem;var newModel=this.media[this._currentItem].mediaModel.toUpperCase();if(!$p.models[newModel]){newModel="NA";this.media[this._currentItem].mediaModel=newModel;this.media[this._currentItem].errorCode=8}this.playerModel=new playerModel();$.extend(this.playerModel,$p.models[newModel].prototype);this.playerModel._init({media:$.extend(true,{},this.media[this._currentItem]),model:newModel,pp:this,environment:$.extend(true,{},this.env),autoplay:ap});return this};this._enqueue=function(command,params,delay){this._queue.push({command:command,params:params,delay:delay});this._processQueue()};this._clearqueue=function(command,params){if(this._isReady!==true){return}this._queue=[]};this._processQueue=function(){var ref=this,modelReady=false;if(this._processing===true){return}if(this.env.loading===true){return}this._processing=true;(function(){modelReady=false;try{modelReady=ref.playerModel.getIsReady()}catch(e){}if(ref.env.loading!==true&&modelReady){var msg=ref._queue.shift();if(!msg){ref._processing=false;if(ref._isReady===false){ref._bubbleEvent("ready",true);ref._isReady=true}return}if(typeof msg.command=="string"){if(msg.delay>0){setTimeout(function(){ref.playerModel.applyCommand(msg.command,msg.params)},msg.delay)}else{ref.playerModel.applyCommand(msg.command,msg.params)}}else{msg.command(ref)}arguments.callee();return}setTimeout(arguments.callee,100)})()};this.getIsLastItem=function(){return((this._currentItem==this.media.length-1)&&this.config._loop!==true)};this.getIsFirstItem=function(){return((this._currentItem==0)&&this.config._loop!==true)};this.getIsMobileClient=function(){var uagent=navigator.userAgent.toLowerCase();var mobileAgents=["android","windows ce","blackberry","palm","mobile"];for(var i=0;i<mobileAgents.length;i++){if(uagent.indexOf(mobileAgents[i])>-1){return true}}return false};this.setPlay=function(){this._enqueue("play",false);return this};this.setPause=function(){this._enqueue("pause",false);return this};this.setStop=function(toZero){var ref=this;this._enqueue("stop",false);if(toZero){this._enqueue(function(){ref._currentItem=0;ref.setActiveItem(0)})}return this};this.setPlayPause=function(){if(this.getState()!=="PLAYING"){this.setPlay()}else{this.setPause()}return this};this.setVolume=function(vol,fadeDelay){if(this.getConfig("fixedVolume")==true){return this}var initalVolume=this.getVolume();if(typeof vol=="string"){var dir=vol.substr(0,1);vol=parseFloat(vol.substr(1));vol=(vol>1)?vol/100:vol;if(dir=="+"){vol=this.getVolume()+vol}else{if(dir=="-"){vol=this.getVolume()-vol}else{vol=this.getVolume()}}}if(typeof vol=="number"){vol=(vol>1)?1:vol;vol=(vol<0)?0:vol}else{return this}if(vol>initalVolume&&fadeDelay){if(vol-initalVolume>0.03){for(var i=initalVolume;i<=vol;i=i+0.03){this._enqueue("volume",i,fadeDelay)}this._enqueue("volume",vol,fadeDelay);return this}}else{if(vol<initalVolume&&fadeDelay){if(initalVolume-vol>0.03){for(var i=initalVolume;i>=vol;i=i-0.03){this._enqueue("volume",i,fadeDelay)}this._enqueue("volume",vol,fadeDelay);return this}}}this._enqueue("volume",vol);return this};this.setPlayhead=function(position){if(this.getConfig("disallowSkip")==true){return this}if(typeof position=="string"){var dir=position.substr(0,1);position=parseFloat(position.substr(1));if(dir=="+"){position=this.getPosition()+position}else{if(dir=="-"){position=this.getPosition()-position}else{position=this.getPosition()}}}if(typeof position=="number"){this._enqueue("seek",position)}return this};this.setPlayerPoster=function(url){var ref=this;this._enqueue(function(){ref.setConfig({poster:url},0)});return this};this.setItemConfig=function(){var ref=this,args=arguments;this._enqueue(function(){ref._setConfig(args[0]||null,args[1]||null)});return this};this.setConfig=function(){var ref=this,args=arguments;this._enqueue(function(){ref._setConfig(args[0]||null,args[1]||null)});return this};this._setConfig=function(){if(!arguments.length){return result}var confObj=arguments[0],dest="*",value=false;if(typeof confObj!="object"){return this}if(arguments[1]=="string"||arguments[1]=="number"){dest=arguments[1]}else{dest=this._currentItem}for(var i in confObj){if($.inArray(i,this._persCfg)>-1){this._cookie(i,this._cleanValue(confObj[i]))}if(this.config["_"+i]!=undefined){continue}value=this._cleanValue(confObj[i]);if(dest=="*"){$.each(this.media,function(){if(this.config==undefined){this.config={}}this.config[i]=value});continue}if(this.media[dest]==undefined){return this}if(this.media[dest]["config"]==undefined){this.media[dest]["config"]={}}this.media[dest]["config"][i]=value}return this};this.setFullscreen=function(full){full=full||!this.getInFullscreen();if(full==this.getInFullscreen()||!this.config.enableFullscreen||this.getIsMobileClient()){return this}switch(full){case true:if(this.config._sandBox!==false){this._enterSandboxFullViewport()}else{this._enterFullViewport()}break;case false:if(this.config._sandBox!==false){this._exitSandboxFullViewport()}else{this._exitFullViewport()}break}this.playerModel.applyCommand("fullscreen",full);return this};this.setResize=function(){this._modelUpdateListener("resize");return this};this.addListener=function(evt,callback){var ref=this;this._enqueue(function(){ref._addListener(evt,callback)})};this._addListener=function(evt,callback){var listenerObj={event:evt,callback:callback};this.listeners.push(listenerObj);return this};this.removeListener=function(evt,callback){var len=this.listeners.length;for(var i=0;i<len;i++){if(this.listeners[i]==undefined){continue}if(this.listeners[i].event!=evt&&evt!=="*"){continue}if(this.listeners[i].callback!=callback&&callback!==undefined){continue}this.listeners.splice(i,1)}return this};this.setItem=function(){var itemData=arguments[0];var affectedIdx=0;this._clearqueue();if(this.env.loading===true){return this}if(itemData==null){affectedIdx=this._removeItem(arguments[1]);if(affectedIdx===this._currentItem){this.setActiveItem("previous")}}else{affectedIdx=this._addItem(this._prepareMedia({file:itemData,config:itemData.config||{}}),arguments[1],arguments[2]);if(affectedIdx===this._currentItem){this.setActiveItem(this._currentItem)}}return this};this.setFile=function(arg,ext,dataType){var data=arg||{},result={},externalData=ext||false;this._clearqueue();if(this.env.loading===true){return this}if(typeof data=="object"&&data.length==0){return false}this.env.loading=true;this._detachplayerModel();if(typeof data=="object"){if(data.length==0){this._reelUpdate({});return false}this._debug("Applying incoming JS Object",data);this._reelUpdate(data);return this}if(typeof data=="string"){var splt=[];splt[0]=data;if(data.indexOf(this.config._FilePosterSeparator)>-1){splt=data.split(this.config._FilePosterSeparator);data.config={poster:splt[1]}}else{result[0]={};result[0].file=data}if(externalData===false){this._debug("Applying incoming single file:"+result[0]["file"],data);this._reelUpdate(result)}else{this._debug("Loading external data from "+splt[0]+" supposed to be "+dataType);this._playlistServer=splt[0];this.getFromUrl(splt[0],this,"_reelUpdate",this.config._reelParser,dataType)}}return this};this.openUrl=function(cfg){cfg=cfg||{url:"",target:"",pause:false};window.open(cfg.url,cfg.target).focus();if(cfg.pause===true){this.setPause()}return this};this.selfDestruct=function(){var ref=this;this._enqueue(function(){ref._selfDestruct()});return this},this._selfDestruct=function(){var ref=this;$(this).unbind();this.removePlugin();this._removeGUIListeners();$($("<div></div>").html($(this.env.srcNode).clone()));this.env.playerDom.replaceWith($($("<div></div>").html($(this.env.srcNode).clone())));$.each(projekktors,function(idx){try{if(this.getId()==ref.getId()||this.getId()==ref.getId()||this.getParent()==ref.getId()){projekktors.splice(idx,1);return}}catch(e){}});return this};this.reset=function(){var ref=this;this._clearqueue();this._enqueue(function(){ref._reset()});return this},this._reset=function(){$(this).unbind();this.env.mediaContainer=null;this.removePlugin();this._removeGUIListeners();this._init(this.env.playerDom,this.config);return this},this._cookie=function(key,value){if(document.cookie===undefined){return null}if(document.cookie===false){return null}var options={};if(arguments.length>1&&(value===null||typeof value!=="object")){if(value===null){options.expires=-1}if(typeof options.expires==="number"){var days=options.expires,t=options.expires=new Date();t.setDate(t.getDate()+days)}return(document.cookie=[encodeURIComponent(this.config._cookieName+"_"+key),"=",options.raw?String(value):encodeURIComponent(String(value)),options.expires?"; expires="+this.config._cookieExpiry.toUTCString():"",options.path?"; path="+options.path:"",options.domain?"; domain="+options.domain:"",options.secure?"; secure":""].join(""))}options=value||{};var result,decode=options.raw?function(s){return s}:decodeURIComponent;var returnthis=(result=new RegExp("(?:^|; )"+encodeURIComponent(this.config._cookieName+"_"+key)+"=([^;]*)").exec(document.cookie))?decode(result[1]):null;return(returnthis!=null)?this._cleanValue(returnthis):null};this._testMediaSupport=function(foceTest){var result=[];var hasNativeAudio=false;var hasFlash=(this.getFlashVersion()>0);var nativeElementType="";for(var i=0;i<$p.mmap.length;i++){result[$p.mmap[i]["type"]]="NA";if($p.mmap[i]["model"]=="image"&&$p.mmap[i]["platform"]=="native"){result[$p.mmap[i]["type"]]="image";continue}if($p.mmap[i]["platform"]=="internal"){result[$p.mmap[i]["type"]]=$p.mmap[i]["model"];continue}if((hasFlash==true||$p.mmap[i]["fixed"]==="maybe")&&$p.mmap[i]["platform"]=="flash"){if($p.mmap[i]["model"].toUpperCase().indexOf("flash")>-1){if(this.getConfig("enableFlashFallback")==true||foceTest===true){result[$p.mmap[i]["type"]]=($p.mmap[i]["type"].indexOf("audio")>-1)?"audioflash":"videoflash"}}else{result[$p.mmap[i]["type"]]=$p.mmap[i]["model"]}}if($p.mmap[i]["fixed"]!==true&&(this.getConfig("enableNativePlayback")!==false||foceTest===true)){if(($p.mmap[i]["type"].indexOf("video")>-1||$p.mmap[i]["type"].indexOf("audio")>-1)){try{nativeElementType=($p.mmap[i]["type"].indexOf("video")>-1)?"video":"audio";var testObject=document.createElement(nativeElementType);if(testObject.canPlayType!=false){switch(testObject.canPlayType($p.mmap[i]["type"])){case"no":break;case"":break;case"maybe":if($.browser.opera){if($.browser.version.slice(0,2)<11){break}}case"probably":default:result[$p.mmap[i]["type"]]=nativeElementType}}}catch(e){}}}}return result};this.randomId=function(length){var chars="abcdefghiklmnopqrstuvwxyz";var result="";for(var i=0;i<length;i++){var rnum=Math.floor(Math.random()*chars.length);result+=chars.substring(rnum,rnum+1)}return result};this.toAbsoluteURL=function(s){var l=location,h,p,f,i;if(s==null||s==""){return""}if(/^\w+:/.test(s)){return s}h=l.protocol+"//"+l.host;if(s.indexOf("/")==0){return h+s}p=l.pathname.replace(/\/[^\/]*$/,"");f=s.match(/\.\.\//g);if(f){s=s.substring(f.length*3);for(i=f.length;i--;){p=p.substring(0,p.lastIndexOf("/"))}}return h+p+"/"+s};this.parseTemplate=function(template,data){if(data===undefined||data.length==0||typeof data!="object"){return template}for(var i in data){template=template.replace(new RegExp("%{"+i+"}","gi"),data[i])}template=template.replace(/%{(.*?)}/gi,"");return template};this._cleanValue=function(value){switch(value){case"false":return false;case"true":return true;case"null":return null;case"undefined":return"";case undefined:return false;default:return(typeof value!="string"&&typeof value!="number"&&typeof value!="boolean")?false:value}};this._getFilesFromHash=function(idx){var data=window.location.hash.substring(1);if(data==undefined||data==null){return false}if(data.indexOf(this.config._FilePosterSeparator)>-1){data=data.split(this.config._FilePosterSeparator)}if(data[1]&&idx==1){return data[1]}else{if(idx==0){return data[0]}}return false};this._getTypeFromFileExtension=function(url){var fileExt="",extRegEx=[],extTypes={},extRegEx=[];for(var i in $p.mmap){extRegEx.push("."+$p.mmap[i].ext);extTypes[$p.mmap[i].ext]=$p.mmap[i]}extRegEx="^.*.("+extRegEx.join("|")+")$";try{fileExt=url.match(new RegExp(extRegEx))[1];fileExt=(!fileExt)?"NaN":fileExt.replace(".","")}catch(e){fileExt="NaN"}return extTypes[fileExt].type};this._debug=function(desc,data){if(this.config._debug===false){return}if(this.config._debug=="console"){try{if(desc){console.log(desc)}if(data){console.log(data)}}catch(e){}return}var result="<pre><b>"+desc+"</b>\n";if(data&&this.config.debugLevel>1){switch(typeof data){case"undefined":break;case"object":var temp="";if(temp==""){temp="";for(var i in data){temp+=i+" : "+data[i]+"\n"}}result+=temp;break;case"string":result+=data}result+="</pre>"}try{$("#"+this.config._debug).prepend(result)}catch(e){}};this._raiseError=function(txt){this.env.playerDom.html(txt).css({color:"#fdfdfd",backgroundColor:"#333",lineHeight:this.config.height+"px",textAlign:"center",display:"block"});this._bubbleEvent("error")};this._readMediaTag=function(domNode){var result={};if(domNode[0].tagName.toUpperCase()!="VIDEO"&&domNode[0].tagName.toUpperCase()!="AUDIO"){return false}result={autoplay:(domNode.prop("autoplay")!==undefined&&domNode.prop("autoplay")!==false)?true:false,controls:(domNode.prop("controls")!==undefined&&domNode.prop("controls")!==false)?true:false,loop:(domNode.prop("loop")!==undefined&&domNode.prop("loop")!==false)?true:false,title:(domNode.attr("title")!==undefined&&domNode.attr("title")!==false)?domNode.attr("title"):"",poster:(domNode.attr("poster")!==undefined&&domNode.attr("poster")!==false)?domNode.attr("poster"):"",width:(domNode.attr("width")!==undefined&&domNode.attr("width")!==false)?domNode.attr("width"):false,height:(domNode.attr("height")!==undefined&&domNode.attr("height")!==false)?domNode.attr("height"):false};if($.browser.msie){var htmlTag=$($("<div></div>").html($(domNode).clone())).html();var attr=["autoplay","controls","loop"];for(var i=0;i<attr.length;i++){if(htmlTag.indexOf(attr[i])==-1){continue}result[attr[i]]=true}}domNode.prop("autoplay",false);result.playlist=[];result.playlist[0]=[];if(srcNode.attr("src")){result.playlist[0].push({src:srcNode.attr("src"),type:srcNode.attr("type")||this._getTypeFromFileExtension(srcNode.attr("src"))})}if($.browser.msie&&$.browser.version<9){var childNode=srcNode;do{childNode=childNode.next("source");if(childNode.attr("src")){result.playlist[0].push({src:childNode.attr("src"),type:childNode.attr("type")||this._getTypeFromFileExtension(childNode.attr("src"))})}}while(childNode.attr("src"))}else{srcNode.children("source").each(function(){if($(this).attr("src")){result.playlist[0].push({src:$(this).attr("src"),type:$(this).attr("type")||ref._getTypeFromFileExtension($(this).attr("src"))})}})}return result};this.cDump=function(){try{JSON.stringify({})}catch(e){return}if($("#debug"+this.getId()).length>0){$("#debug"+this.getId()).remove();return}var result={timestamp:new Date().getTime(),agent:navigator.userAgent.toLowerCase(),dom:$($("<div></div>").html($(this.env.srcNode).clone())).html(),media:this.media,grid:{},config:this.config};for(var i in this.mediaGrid){result.grid[i]=this.mediaGrid[i]}var w=$(document.createElement("div")).attr("id","debug"+this.getId()).css({backgroundColor:"#FF0000",color:"#fdfdfd",padding:"5px",width:(this.env.playerDom.width()-10)+"px",zIndex:99999,position:"absolute",top:this.env.playerDom.position().top,left:this.env.playerDom.position().left}).html("<b>"+this.config._messages[1000]+"</b>");var tA=$(document.createElement("textarea")).attr("id","debug"+this.getId()).css({backgroundColor:"#fdfdfd",width:"100%",height:"100px",border:0}).html(JSON.stringify(result)).appendTo(w);$("body").append(w);tA.select()};this._applyDimensions=function(){if(this.config._height!==false&&this.config._width!==false){if(this.config._width<=this.config._minWidth){this.config._width=this.config._minWidth;this.env.autoSize=true}if(this.config._height<=this.config._minHeight){this.config._height=this.config._minHeight;this.env.autoSize=true}}this.env.playerDom.css({overflow:"hidden"});if(this.config._width!==false&&this.config._height!==false){this.env.playerDom.css({width:this.config._width+"px",height:this.config._height+"px"})}};this._init=function(){this.env.srcNode=$.extend(true,{},srcNode);var cfgBySource=this._readMediaTag(srcNode);if(cfgBySource!==false){this.env.playerDom=$(document.createElement("div")).attr({"class":srcNode[0].className,style:srcNode.attr("style")});srcNode.replaceWith(this.env.playerDom)}else{cfgBySource={width:(srcNode.attr("width"))?srcNode.attr("width"):srcNode.width(),height:(srcNode.attr("height"))?srcNode.attr("height"):srcNode.height()};this.env.playerDom=srcNode}cfg=$.extend(true,{},cfgBySource,cfg);for(var i in cfg){if(this.config["_"+i]!=undefined){this.config["_"+i]=cfg[i]}else{this.config[i]=cfg[i]}}if(this.getIsMobileClient()){this.config._autoplay=false}if(this.config._sandBox!==false&&this.config._playlist.length==0){this.config._playlist=[];this.config._playlist.push({0:{src:this._getFilesFromHash(0),type:this._getTypeFromFileExtension(this._getFilesFromHash(0))},config:{poster:this._getFilesFromHash(1)}})}this._id=srcNode[0].id||this.randomId(8);this.env.playerDom.attr("id",this._id);if(this.config._theme){this.getFromUrl(this.parseTemplate(this.config._themeRepo,{id:this.config._theme,ver:this.config._version}),this,"_applyTheme",false,"jsonp")}else{this._start(false)}return this};this._start=function(data){var ref=this,files=[];this._applyDimensions();this.mediaGrid=this._testMediaSupport();try{$("#projekktorver").html("V"+this.config._version)}catch(e){}this._registerPlugins();if(this.config._sandBox!==false){if(this.getSandboxWindow()){this.getSandboxWindow().ready(function(){ref._enterFullViewport();ref.env.inFullscreen=false})}else{ref._enterFullViewport();ref.env.inFullscreen=false;this.config.disableFullscreen=true}}if(typeof onReady==="function"){this._enqueue(function(){onReady(ref)})}for(var i in this.config._playlist[0]){if(this.config._playlist[0][i].type){if(this.config._playlist[0][i].type.indexOf("/json")>-1||this.config._playlist[0][i].type.indexOf("/xml")>-1){this.setFile(this.config._playlist[0][i].src,true,this.config._playlist[0][i].type);return this}}}this.setFile(this.config._playlist);return this};this._applyTheme=function(data){var ref=this;if(data===false){this._raiseError("The Projekktor theme-set specified could not be loaded.");return false}if(typeof data.version=="string"){if((parseInt(this.config._version.split(".")[0])||0)<(parseInt(data.version.split(".")[0])||0)||(parseInt(this.config._version.split(".")[1])||0)<(parseInt(data.version.split(".")[1])||0)){this._raiseError("You are using Projekktor V"+this.config._version+" but the applied theme requires at least V"+data.version+".");return false}}if(typeof data.config.plugins=="object"){for(var i=0;i<data.config.plugins.length;i++){try{typeof eval("projekktor"+data.config.plugins[i])}catch(e){this._raiseError("The applied theme requires the following Projekktor plugin(s): <b>"+data.config.plugins.join(", ")+"</b>");return false}}}if(typeof data.css=="string"){$("head").append('<style type="text/css">'+this.parseTemplate(data.css,{rp:data.baseURL})+"</style>")}if(typeof data.html=="string"){this.env.playerDom.html(this.parseTemplate(data.html,{p:this.config._cssClassPrefix}))}this.env.playerDom.addClass(data.id);if(typeof data.config=="object"){for(var i in data.config){if(this.config["_"+i]!=undefined){this.config["_"+i]=data.config[i]}else{this.config[i]=data.config[i]}}}if(data.onReady){this._enqueue(function(player){eval(data.onReady)})}return this._start()};return this._init()}};$p.mmap=[];$p.models={};$p.newModel=function(obj,ext){var result=false,extend=($p.models[ext]&&ext!=undefined)?$p.models[ext].prototype:{};if(typeof obj!="object"){return result}if(!obj.modelId){return result}if($p.models[obj.modelId]){return result}$p.models[obj.modelId]=function(){};$p.models[obj.modelId].prototype=$.extend({},extend,obj);for(var i=0;i<obj.iLove.length;i++){obj.iLove[i].model=obj.modelId.toLowerCase();$p.mmap.push(obj.iLove[i])}return true}});var projekktorPluginInterface=function(){};jQuery(function(a){projekktorPluginInterface.prototype={pluginReady:false,name:"",pp:{},config:{},playerDom:null,canvas:{media:null,projekktor:null},_appliedDOMObj:[],_init:function(b){this.config=a.extend(true,this.config,b);this.initialize()},getConfig:function(b){var c=undefined;if(this.pp.getConfig("plugin_"+this.name)!=undefined){c=this.pp.getConfig("plugin_"+this.name)[b]}if(c==undefined){c=this.pp.getConfig(b)}if(c==undefined){c=(this.config[b]||false)}return c},sendEvent:function(b,c){this.pp._bubbleEvent({_plugin:this.name,_event:b},c)},deconstruct:function(){this.pluginReady=false;a.each(this._appliedDOMObj,function(){a(this).remove()})},parseTemplate:function(b,c){return this.pp.parseTemplate(b,c)},blockSelection:function(b){if(!b){return}if(a.browser.mozilla){b.css("MozUserSelect","none")}else{if(a.browser.msie){b.bind("selectstart",function(){return false})}else{b.mousedown(function(){return false})}}},applyToPlayer:function(c,d){var e=this.getConfig("cssClassPrefix");if(!c){return null}if(this.playerDom.find("."+e+c.attr("class")).length==0){var b=c.attr("class");c.removeClass(b);c.addClass(e+b);if(d===true){c.prependTo(this.playerDom)}else{c.appendTo(this.playerDom)}this._appliedDOMObj.push(c);return c}var b=c.attr("class");c=this.playerDom.find("."+e+c.attr("class"));c.removeClass(b);c.addClass(e+b);return c},initialize:function(){},detachHandler:function(b){},displayReadyHandler:function(b){},pluginsReadyHandler:function(b){},stateHandler:function(){},bufferHandler:function(){},scheduleLoading:function(b){},configModified:function(b){},scheduledHandler:function(b){},scheduleModifiedHandler:function(b){},itemHandler:function(b){},startHandler:function(b){},doneHandler:function(b){},stopHandler:function(b){},endedHandler:function(b){},canplayHandler:function(b){},volumeHandler:function(b){},timeHandler:function(b){},progressHandler:function(b){},mousemoveHandler:function(b){},mouseleaveHandler:function(b){},mouseeterHandler:function(b){},fullscreenHandler:function(b){},awakingHandler:function(b){},keyHandler:function(b){}}});var playerModel=function(){};jQuery(function(a){playerModel.prototype={modelId:"player",iLove:[],_currentState:null,_currentBufferState:null,_KbPerSec:0,_bandWidthTimer:null,_isPoster:false,_isPlaying:false,modelReady:true,requiresFlash:false,hasGUI:false,allowRandomSeek:false,flashVerifyMethod:"api_get",elementReady:false,mediaElement:null,pp:{},media:{duration:0,position:0,startOffset:0,file:false,poster:"",ended:false,message:"",error:null,mediaType:"",loadProgress:0,errorCode:0,message:"",type:"NA",volume:0},_init:function(b){this.pp=b.pp||null;this.media=b.media||this.media;this._ap=b.autoplay;this.init()},init:function(b){this.ready()},ready:function(){this.sendUpdate("modelReady");this.displayItem(this._ap)},displayItem:function(b){if(b!==true||this.getState()==="STOPPED"){this._setState("idle");this.applyImage(this.getPoster(),this.pp.getMediaContainer().html(""));this._isPoster=true;this.elementReady=true}else{if(this.hasGUI){this.pp.env.playerDom.children().not(".ppdisplay").addClass("inactive").removeClass("active")}if(this.requiresFlash!==false){if(this.requiresFlash>this.pp.getFlashVersion()){this.setTestcard(6);return}}this.elementReady=false;this._isPoster=false;this.applyMedia(this.pp.getMediaContainer().html("").show())}this.waitTillReady(b)},applyMedia:function(){},sendUpdate:function(b,c){this.pp._modelUpdateListener(b,c)},waitTillReady:function(c){var b=this;(function(){try{if(b.elementReady!==true){setTimeout(arguments.callee,70);return}}catch(d){}if(b.getState()!=="STOPPED"||c===true){try{b.addListeners()}catch(d){}}b.pp._modelUpdateListener("displayReady");if(c===true){b.setPlay()}})()},addListeners:function(){},removeListeners:function(){try{this.mediaElement.unbind()}catch(b){}},detachMedia:function(){},destroy:function(){this.setPause();this.removeListeners();this.detachMedia();try{a("#"+this.mediaElement.id).empty()}catch(b){}try{a("#"+this.mediaElement.id).remove()}catch(b){}try{this.mediaElement.remove()}catch(b){}this.pp.getMediaContainer().html("");this.mediaElement=null;this.media.loadProgress=0;this.media.playProgress=0;this.media.position=0;this.media.duration=0;this._setState("stopped")},reInit:function(){if(this.requiresFlash===false||!(a.browser.mozilla)||this.getState()==="ERROR"||this.pp.getConfig("bypassFlashFFFix")===true){return}this.sendUpdate("FFreinit");this.removeListeners();this.displayItem((this.getState()!=="IDLE"))},applyCommand:function(c,b){switch(c){case"play":if(this.getState()==="IDLE"){this._setState("awakening");this.displayItem(true);break}this.setPlay();break;case"pause":this.setPause();break;case"volume":if(!this.setVolume(b)){this.sendUpdate("volume",b)}break;case"stop":this.setStop();break;case"seek":if(this.media.loadProgress==-1){break}this.setSeek(b);break;case"fullscreen":this.sendUpdate("fullscreen",b);this.setFullscreen(b);this.reInit();break;case"resize":this.setResize();this.sendUpdate("resize",b);break}},setSeek:function(b){},setPlay:function(){},setPause:function(){},setStop:function(){this.detachMedia();this.destroy();this.displayItem(false)},setVolume:function(b){},setFullscreen:function(b){},setResize:function(){},getVolume:function(){var b=this.mediaElement.prop("muted");return(b==true)?0:this.mediaElement.prop("volume")},getLoadProgress:function(){return this.media.loadProgress||0},getLoadPlaybackProgress:function(){return this.media.playProgress||0},getPosition:function(){return this.media.position||0},getDuration:function(){return this.media.duration||0},getInFullscreen:function(){return this.pp.getInFullscreen()},getKbPerSec:function(){return this._KbPerSec},getIsPlaying:function(){return this._isPlaying},getState:function(){return(this._currentState==null)?"IDLE":this._currentState},getFile:function(){return this.media.file||null},getModelName:function(){return this.modelId||null},getHasGUI:function(){return(this.hasGUI&&!this._isPoster)},getIsReady:function(){return this.elementReady},getPoster:function(){return this.pp.getConfig("poster")},timeListener:function(e){if(e==undefined){return}var d=(e.position!=undefined)?e.position:e.currentTime;var c=e.duration;var b=(d>0&&c>0)?d*100/c:0;this.media.duration=this._roundNumber(c,2);this.media.position=this._roundNumber(d,2);this.media.playProgress=b;this.sendUpdate("time",this.media.position);this.loadProgressUpdate()},loadProgressUpdate:function(){try{var d=this.mediaElement[0];if(typeof d.buffered!=="object"){return}if(typeof d.buffered.length<=0){return}var b=Math.round(d.buffered.end(d.buffered.length-1)*100)/100,c=b*100/this.media.duration;if(c==this.media.loadProgress){return}this.media.loadProgress=(this.allowRandomSeek===true)?100:-1;this.media.loadProgress=(this.media.loadProgress<100||this.media.loadProgress==undefined)?c:100;this.sendUpdate("progress",this.media.loadProgress)}catch(f){}},progressListener:function(c,h){try{if(typeof this.mediaElement[0].buffered=="object"){if(this.mediaElement[0].buffered.length>0){this.mediaElement.unbind("progress");return}}}catch(g){}if(this._bandWidthTimer==null){this._bandWidthTimer=(new Date()).getTime()}var f=0,d=0;if(!isNaN(c.loaded/c.total)){f=c.loaded;d=c.total}else{if(c.originalEvent&&!isNaN(c.originalEvent.loaded/c.originalEvent.total)){f=c.originalEvent.loaded;d=c.originalEvent.total}else{if(h&&!isNaN(h.loaded/h.total)){f=h.loaded;d=h.total}}}var b=(f>0&&d>0)?f*100/d:0;if(Math.round(b)>Math.round(this.media.loadProgress)){this._KbPerSec=((f/1024)/(((new Date()).getTime()-this._bandWidthTimer)/1000))}b=(this.media.loadProgress!==100)?b:100;b=(this.allowRandomSeek===true)?100:b;if(this.media.loadProgress!=b){this.media.loadProgress=b;this.sendUpdate("progress",b)}if(this.media.loadProgress>=100&&this.allowRandomSeek==false){this._setBufferState("full")}},endedListener:function(b){if(this.mediaElement===null){return}this._setState("completed")},waitingListener:function(b){this._setBufferState("empty")},canplayListener:function(b){this._setBufferState("full")},canplaythroughListener:function(b){this._setBufferState("full")},suspendListener:function(b){this._setBufferState("full")},playingListener:function(b){this._setState("playing")},startListener:function(b){this.applyCommand("volume",this.pp.getConfig("volume"));this._setState("playing")},pauseListener:function(b){this._setState("paused")},volumeListener:function(b){this.sendUpdate("volume",this.getVolume())},flashReadyListener:function(){this.elementReady=true},errorListener:function(b,d){try{switch(b.target.error.code){case b.target.error.MEDIA_ERR_ABORTED:this.setTestcard(1);break;case b.target.error.MEDIA_ERR_NETWORK:this.setTestcard(2);break;case b.target.error.MEDIA_ERR_DECODE:this.setTestcard(3);break;case b.target.error.MEDIA_ERR_SRC_NOT_SUPPORTED:this.setTestcard(4);break;default:this.setTestcard(5);break}}catch(c){}},metaDataListener:function(c){try{this.videoWidth=c.videoWidth;this.videoHeight=c.videoHeight}catch(b){}this._scaleVideo()},setTestcard:function(f,b){var e=this.pp.getMediaContainer(),d=this.pp.getConfig("messages"),c=(d[f]!=undefined)?d[f]:d[0];c=(b!=undefined&&b!="")?b:c;if(this.pp.getItemCount()>1){c+=d[99]}if(c.length<3){c="ERROR"}if(f==100){c=""}c=this.pp.parseTemplate(c,a.extend({},this.media.fileConfig,{flashver:this.requiresFlash}));e.css({width:"100%",height:"100%"}).html("");this.mediaElement=a(document.createElement("div")).addClass("pptestcard").appendTo(e);if(c.length>0){a(document.createElement("p")).appendTo(this.mediaElement).html(c)}this._setState("error")},applyImage:function(e,c){var g=a(document.createElement("img")).hide(),f=this;if(e==""||e==undefined){g=a(document.createElement("span")).attr({id:this.pp.getMediaId()+"_image"}).appendTo(c);return g}g.appendTo(c).attr({id:this.pp.getMediaId()+"_image",src:e}).css({position:"absolute"});g.error(function(h){a(this).remove()});var b=function(h){h.realWidth=h.prop("width");h.realHeight=h.prop("height");h.width=function(){return h.realWidth};h.height=function(){return h.realHeight}};if(a.browser.msie){(function(){try{if(g[0].complete==true){g.show();b(g);f.stretch(f.pp.getConfig("imageScaling"),g,c.width(),c.height());return}setTimeout(arguments.callee,100)}catch(h){setTimeout(arguments.callee,100)}})()}else{g.load(function(h){a(this).show();b(g);f.stretch(f.pp.getConfig("imageScaling"),a(this),c.width(),c.height())})}var d=function(i,h){if(h.is(":visible")===false){f.pp.removeListener("fullscreen",arguments.callee)}f.stretch(f.pp.getConfig("imageScaling"),i,h.width(),h.height())};this.pp.addListener("fullscreen",function(){d(g,c)});this.pp.addListener("resize",function(){d(g,c)});return g},stretch:function(b,d,m,k,f,h){if(d==undefined||d==null){return false}if(d._originalDimensions===undefined){d._originalDimensions={};d._originalDimensions={width:d.width(),height:d.height()}}var g=(f!==undefined)?f:d._originalDimensions.width;var c=(h!==undefined)?h:d._originalDimensions.height;var i=(m/g);var l=(k/c);var e=m;var j=k;switch(b){case"fill":if(i>l){e=g*i;j=c*i}else{if(i<l){e=g*l;j=c*l}}break;case"aspectratio":default:if(i>l){e=g*l;j=c*l}else{if(i<l){e=g*i;j=c*i}}break}m=this._roundNumber((e/m)*100,0);k=this._roundNumber((j/k)*100,0);if(m==0||k==0){return false}d.css({margin:0,padding:0,width:m+"%",height:k+"%",left:(100-m)/2+"%",top:(100-k)/2+"%"});if(d._originalDimensions.width!=d.width()||d._originalDimensions.height!=d.height()){return true}return false},toAttributeString:function(c){var d="";for(var b in c){if(b.toUpperCase()==="FLASHVARS"){continue}if(typeof c[b]!="function"){d+=b+'="'+c[b]+'" '}}return d},toFlashvarsString:function(d){var f="";var e="";for(var c in d){if(typeof d[c]!="function"){e=d[c];for(var b in this.media){if(typeof e!="string"){continue}e=e.replace("{"+b+"}",this.media[b])}f+=c+"="+encodeURIComponent(e)+"&"}}return f.replace(/&$/,"")},createFlash:function(h,b){var f=(h.FlashVars===null)?this.pp.getConfig("flashVars"):h.FlashVars;var e="",d="",c="",g="";if(f){f=this.toFlashvarsString(f);if(f.length>0){h.src+="?"+f}}if(a.browser.msie){g=' id="'+h.id+'" '}var d="<object"+g+' codebase="https://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0"  name="'+h.name+'" width="'+h.width+'" height="'+h.height+'" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000">';d+='<param name="movie" value="'+h.src+'"></param>';d+='<param name="allowScriptAccess" value="'+h.allowScriptAccess+'"></param>';d+='<param name="allowFullScreen" value="'+h.allowFullScreen+'"></param>';d+='<param name="wmode" value="'+h.wmode+'"></param>';var c="<embed "+this.toAttributeString(h)+' pluginspage="http://www.macromedia.com/go/getflashplayer" swliveconnect="true" type="application/x-shockwave-flash"></embed>';e=d+c;e+="</object>";if(a.browser.mozilla){e=c}b[0].innerHTML=e;this.mediaElement=a("#"+h.id)[0];this._waitforPlayer()},_waitforPlayer:function(){if(this.elementReady==true){return}var b=this;this._setBufferState("empty");(function(){try{if(b.mediaElement==undefined){setTimeout(arguments.callee,100)}else{if(b.mediaElement[b.flashVerifyMethod]==undefined){setTimeout(arguments.callee,100)}else{b._setBufferState("full");b.flashReadyListener()}}}catch(c){setTimeout(arguments.callee,100)}})()},_roundNumber:function(b,c){if(b<=0||isNaN(b)){return 0}return Math.round(b*Math.pow(10,c))/Math.pow(10,c)},_setState:function(b){if(this._currentState!=b){this._currentState=b.toUpperCase();this.sendUpdate("state",this._currentState)}},_setBufferState:function(b){if(this._currentBufferState!=b){this._currentBufferState=b.toUpperCase();this.sendUpdate("buffer",this._currentBufferState)}},_scaleVideo:function(h){var d=this.pp.getMediaContainer();if(this.pp.getIsMobileClient()){return}try{var f=d.width();var i=d.height();var b=this.videoWidth;var c=this.videoHeight;if(this.stretch(this.pp.getConfig("videoScaling"),this.mediaElement,f,i,b,c)){this.sendUpdate("scaled",{realWidth:b,realHeight:c,displayWidth:f,displayHeight:i})}}catch(g){}}}});jQuery(function(a){$p.newModel({modelId:"NA",iLove:[{ext:"NaN",type:"none/none",platform:"native"}],hasGUI:true,applyMedia:function(b){if(this.pp.getConfig("enableTestcard")&&!this.pp.getIsMobileClient()){this.setTestcard((this.media.file!==""&&this.media.errorCode===7)?5:this.media.errorCode);this.elementReady=true}else{this.elementReady=true;this.applyCommand("stop");window.location.href=this.media.file}},setPlay:function(){this.sendUpdate("start")},setPause:function(){if(this._hasEnded==false){this._hasEnded=true;this.sendUpdate("ended")}}})});jQuery(function(a){$p.newModel({modelId:"PLAYLIST",iLove:[{ext:"json",type:"text/json",platform:"internal"},{ext:"jsonp",type:"text/jsonp",platform:"internal"},{ext:"xml",type:"text/xml",platform:"internal"}],applyMedia:function(b){this.elementReady=true},setPlay:function(){this.sendUpdate("playlist",this.media.file)}})});jQuery(function(a){$p.newModel({modelId:"VIDEOFLASH",iLove:[{ext:"flv",type:"video/x-flv",platform:"flash",fixed:true},{ext:"flv",type:"video/flv",platform:"flash",fixed:true},{ext:"mp4",type:"video/mp4",platform:"flash"},{ext:"mov",type:"video/quicktime",platform:"flash"},{ext:"m4v",type:"video/mp4",platform:"flash"}],requiresFlash:9,allowRandomSeek:false,flashVerifyMethod:"api_get",_jarisVolume:0,applyMedia:function(b){var c={id:this.pp.getMediaId()+"_flash",name:this.pp.getMediaId()+"_flash",src:this.pp.getConfig("playerFlashMP4"),width:"100%",height:"100%",allowScriptAccess:"always",allowFullScreen:"true",allowNetworking:"all",wmode:"transparent",bgcolor:"#000000",FlashVars:{source:this.media.file,type:"video",streamtype:this.pp.getConfig("flashStreamType"),server:(this.pp.getConfig("flashStreamType")=="rtmp")?this.pp.getConfig("flashRTMPServer"):"",autostart:"false",hardwarescaling:"true",controls:"false",jsapi:"true"}};switch(this.pp.getConfig("flashStreamType")){case"rtmp":case"http":this.allowRandomSeek=true;this.media.loadProgress=100;break}this.createFlash(c,b)},addListeners:function(){this.mediaElement.api_addlistener("onprogress","projekktor('"+this.pp.getId()+"').playerModel.progressListener");this.mediaElement.api_addlistener("ontimeupdate","projekktor('"+this.pp.getId()+"').playerModel.timeListener");if(this.getModelName().indexOf("VIDEO")>-1){this.mediaElement.api_addlistener("ondatainitialized","projekktor('"+this.pp.getId()+"').playerModel.metaDataListener")}if(this.getModelName().indexOf("AUDIO")>-1){this.mediaElement.api_addlistener("onconnectionsuccess","projekktor('"+this.pp.getId()+"').playerModel.startListener")}this.mediaElement.api_addlistener("onplaypause","projekktor('"+this.pp.getId()+"').playerModel._playpauseListener");this.mediaElement.api_addlistener("onplaybackfinished","projekktor('"+this.pp.getId()+"').playerModel.endedListener");this.mediaElement.api_addlistener("onmute","projekktor('"+this.pp.getId()+"').playerModel.volumeListener");this.mediaElement.api_addlistener("onvolumechange","projekktor('"+this.pp.getId()+"').playerModel.volumeListener");this.mediaElement.api_addlistener("onbuffering","projekktor('"+this.pp.getId()+"').playerModel.waitingListener");this.mediaElement.api_addlistener("onnotbuffering","projekktor('"+this.pp.getId()+"').playerModel.canplayListener");this.mediaElement.api_addlistener("onconnectionfailed","projekktor('"+this.pp.getId()+"').playerModel.errorListener")},removeListeners:function(){try{this.mediaElement.api_removelistener("*")}catch(b){}},_playpauseListener:function(b){if(b.isplaying){this.playingListener()}else{this.pauseListener()}},metaDataListener:function(c){this.startListener(c);try{this.videoWidth=c.width;this.videoHeight=c.height;this.sendUpdate("scaled",{width:this.videoWidth,height:this.videoHeight})}catch(b){}},setSeek:function(c){try{this.mediaElement.api_seek(c)}catch(b){}},setVolume:function(b){try{this.mediaElement.api_volume(b)}catch(c){return false}return true},setPause:function(b){try{this.mediaElement.api_pause()}catch(c){}},setPlay:function(b){try{this.mediaElement.api_play()}catch(c){}},getVolume:function(){return this._jarisVolume},errorListener:function(b){this.setTestcard(4)},volumeListener:function(b){if(this._jarisVolume!=b.volume){this._jarisVolume=b.volume;this.sendUpdate("volume",b.volume)}},detachMedia:function(){try{a(this.mediaElement).remove()}catch(b){}}});$p.newModel({modelId:"AUDIOFLASH",iLove:[{ext:"mp3",type:"audio/mp3",platform:"flash"},{ext:"m4a",type:"audio/mp4",platform:"flash"}],applyMedia:function(b){this.imageElement=this.applyImage(this.pp.getConfig("cover")||this.pp.getConfig("poster"),b);var c=a("#"+this.pp.getMediaId()+"_flash_container");if(c.length==0){c=a(document.createElement("div")).css({width:"1px",height:"1px"}).attr("id",this.pp.getMediaId()+"_flash_container").appendTo(a(document.body))}var d={id:this.pp.getMediaId()+"_flash",name:this.pp.getMediaId()+"_flash",src:this.pp.getConfig("playerFlashMP3"),width:"1px",height:"1px",allowScriptAccess:"always",allowFullScreen:"true",allowNetworking:"all",wmode:"transparent",bgcolor:"#000000",FlashVars:{source:this.media.file,type:"audio",streamtype:this.pp.getConfig("flashStreamType"),server:(this.pp.getConfig("flashStreamType")=="rtmp")?this.pp.getConfig("flashRTMPServer"):"",autostart:"false",hardwarescaling:"false",controls:"false",jsapi:"true"}};this.createFlash(d,c)}},"VIDEOFLASH")});jQuery(function(a){$p.newModel({modelId:"VIDEO",iLove:[{ext:"ogv",type:"video/ogg",platform:"native"},{ext:"webm",type:"video/webm",platform:"native"},{ext:"ogg",type:"video/ogg",platform:"native"},{ext:"anx",type:"video/ogg",platform:"native"}],allowRandomSeek:false,videoWidth:0,videoHeight:0,element:"video",init:function(b){if(this.pp.getIsMobileClient()&&this.element=="video"){this.hasGUI=true}this.ready()},applyMedia:function(d){this.elementReady=false;if(this.media.mediaType.indexOf("/ogg")>-1||this.media.mediaType.indexOf("/webm")>-1){this.allowRandomSeek=true}if(this.element=="audio"){this.imageElement=this.applyImage(this.pp.getConfig("cover")||this.pp.getConfig("poster"),d)}var b=(this.element=="video")?d:a("body");b.append(a(document.createElement(this.element)).attr({id:this.pp.getMediaId()+"_html",poster:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABBJREFUeNpi/v//PwNAgAEACQsDAUdpTjcAAAAASUVORK5CYII=",loop:false,"x-webkit-airplay":"allow"}).prop({controls:this.hasGUI,autoplay:false,loop:false}).css({width:((this.element=="video")?"100%":"1px"),height:((this.element=="video")?"100%":"1px"),position:"absolute",top:0,left:0}));this.mediaElement=a("#"+this.pp.getMediaId()+"_html");for(var c in this.media._originalConfig){if(this.media._originalConfig[c].src){a(document.createElement("source")).appendTo(this.mediaElement).attr({src:this.media._originalConfig[c].src,type:this.media._originalConfig[c].type})}}this.waitforPlayer()},waitforPlayer:function(){if(this.elementReady==true){return}var d=this,c=a("#"+this.pp.getMediaId()+"_html");try{if(c==undefined){setTimeout(function(){d.waitforPlayer()},200);return}if(c[0].networkState==undefined){setTimeout(function(){d.waitforPlayer()},200);return}this.elementReady=true}catch(b){setTimeout(function(){d.waitforPlayer()},200);return}},addListeners:function(){var b=this;if(this.element=="video"){this.mediaElement.bind("loadedmetadata",function(){b.metaDataListener(this)})}this.mediaElement.bind("pause",function(){b.pauseListener(this)});this.mediaElement.bind("playing",function(){b.startListener(this)});this.mediaElement.bind("play",function(){b.playingListener(this)});this.mediaElement.bind("volumechange",function(){b.volumeListener(this)});this.mediaElement.bind("progress",function(c){b.progressListener(c,this)});this.mediaElement.bind("timeupdate",function(){b.timeListener(this)});this.mediaElement.bind("ended",function(){b.endedListener(this)});this.mediaElement.bind("waiting",function(){b.waitingListener(this)});this.mediaElement.bind("canplaythrough",function(){b.canplayListener(this)});this.mediaElement.bind("canplay",function(){b.canplayListener(this)});this.mediaElement.bind("error",function(c){b.errorListener(c,this)});this.mediaElement.bind("suspend",function(){b.suspendListener(this)})},updatePlayerInfo:function(){if(this.mediaElement==null){return}var b=this,c=this.mediaElement[0];if(this.getState()=="PLAYING"){switch(c.networkState){case c.NETWORK_EMPTY:break;case c.NETWORK_IDLE:break;case c.NETWORK_LOADING:break;case c.NETWORK_NO_SOURCE:this.setTestcard(4);break}}if("PAUSED|ERROR".indexOf(this.getState())==-1){setTimeout(function(){b.updatePlayerInfo()},500)}},detachMedia:function(){try{this.mediaElement[0].pause();a(this.mediaElement[0]).prop("src","");this.mediaElement[0].load()}catch(b){}},setPlay:function(){try{this.mediaElement[0].play()}catch(b){}this.updatePlayerInfo()},setPause:function(){try{this.mediaElement[0].pause()}catch(b){}},setVolume:function(b){try{this.mediaElement.prop("volume",b)}catch(c){}return true},setSeek:function(c){try{this.mediaElement.prop("currentTime",c)}catch(b){}},setFullscreen:function(b){if(this.element=="audio"){return}this._scaleVideo()},setResize:function(){if(this.element=="audio"){return}this._scaleVideo(false)}});$p.newModel({modelId:"AUDIO",iLove:[{ext:"ogg",type:"audio/ogg",platform:"native"},{ext:"oga",type:"audio/ogg",platform:"native"}],imageElement:{},element:"audio"},"VIDEO")});jQuery(function(a){$p.newModel({modelId:"IMAGE",iLove:[{ext:"jpg",type:"image/jpeg",platform:"native"},{ext:"gif",type:"image/gif",platform:"native"},{ext:"png",type:"image/png",platform:"native"}],allowRandomSeek:true,_interval:null,_position:0,_duration:0,applyMedia:function(b){this.mediaElement=this.applyImage(this.media.file,b);this.elementReady=true;this._duration=this.pp.getConfig("duration")},setPlay:function(){var b=this;this._setBufferState("full");this.progressListener(100);this.playingListener();if(this._duration>0){this._interval=setInterval(function(){b._position=b._position+0.5;if(b._position>b._duration){clearInterval(b._interval);b._setState("completed")}b.timeListener({duration:b._duration,position:b._position})},500)}else{b._setState("completed")}},detachMedia:function(){clearInterval(this._interval);this.mediaElement.remove()},setPause:function(){this.pauseListener();clearInterval(this._interval)},setSeek:function(b){if(b<this._duration){this._position=b}}});$p.newModel({modelId:"HTML",iLove:[{ext:"html",type:"text/html",platform:"internal"}],applyMedia:function(c){var b=this;this.mediaElement=a(document.createElement("iframe")).attr({id:this.pp.getMediaId()+"_iframe",name:this.pp.getMediaId()+"_iframe",src:this.media.file,scrolling:"no",frameborder:"0",width:"100%",height:"100%"}).css({overflow:"hidden",border:"0px",width:"100%",height:"100%"}).appendTo(c);this.mediaElement.load(function(d){b.success()});this.mediaElement.error(function(d){b.remove()});this._duration=this.pp.getConfig("duration")},success:function(){this.elementReady=true},remove:function(){this.mediaElement.remove();this.elementReady=true}},"IMAGE")});jQuery(function(a){$p.newModel({modelId:"YTVIDEO",iLove:[{ext:"youtube.com",type:"video/youtube",platform:"flash",fixed:"maybe"}],modelReady:false,allowRandomSeek:true,useIframeAPI:true,_updateTimer:null,init:function(c){var b=this;this.useIframeAPI=this.pp.getConfig("useYTIframeAPI")||this.pp.getIsMobileClient();if(this.useIframeAPI!==true){this.requiresFlash=8;this.flashVerifyMethod="cueVideoById";this.ready();return}var d=this.pp.getId();if(window.ProjekktorYoutubePlayerAPIReady!==true){a.getScript("http://www.youtube.com/player_api");(function(){try{if(window.ProjekktorYoutubePlayerAPIReady==true){b.ready();return}setTimeout(arguments.callee,50)}catch(f){setTimeout(arguments.callee,50)}})()}else{this.ready()}window.onYouTubePlayerAPIReady=function(){window.ProjekktorYoutubePlayerAPIReady=true}},applyMedia:function(c){this._setBufferState("empty");var b=this;if(this.useIframeAPI===true){this.mediaElement=new YT.Player(this.pp.getId()+"_media",{width:(this.pp.getIsMobileClient())?this.pp.config._width:"100%",height:(this.pp.getIsMobileClient())?this.pp.config._height:"100%",playerVars:{autoplay:0,disablekb:1,start:0,controls:0,enablejsapi:1,wmode:"transparent"},videoId:this.youtubeGetId(),events:{onReady:function(e){b.onReady(e)},onStateChange:function(e){b.stateChange(e)},onError:function(e){b.errorListener(e)}}});a(this.mediaElement.a).prop("ALLOWTRANSPARENCY",true).attr({scrolling:"no",frameborder:0}).css({overflow:"hidden",border:"0px",display:"block"});if(a.browser.mozilla){this.requiresFlash=8}}else{var d={id:this.pp.getId()+"_youtube",name:this.pp.getId()+"_youtube",src:"http://www.youtube.com/apiplayer",width:"100%",height:"100%",bgcolor:"#000000",allowScriptAccess:"always",wmode:"transparent",FlashVars:{enablejsapi:1,autoplay:1}};this.createFlash(d,c)}},flashReadyListener:function(){this._youtubeResizeFix();this.addListeners();this.mediaElement.cueVideoById(this.youtubeGetId())},flashReinitListener:function(){this._youtubeResizeFix();this.addListeners();if(a.browser.mozilla){this.mediaElement.cueVideoById(this.youtubeGetId());if(this.getState()==="PLAYING"){this.setPlay()}}this.elementReady=true},_youtubeResizeFix:function(){a(this.mediaElement).attr({width:"99.99999%",height:"99.9999%"});this.applyCommand("volume",this.pp.getConfig("volume"))},addListeners:function(){if(this.useIframeAPI===true){return}this.mediaElement.addEventListener("onStateChange","projekktor('"+this.pp.getId()+"').playerModel.stateChange");this.mediaElement.addEventListener("onError","projekktor('"+this.pp.getId()+"').playerModel.errorListener")},setSeek:function(c){try{this.mediaElement.seekTo(c,true)}catch(b){}},setVolume:function(b){try{this.mediaElement.setVolume(b*100)}catch(c){}},setPause:function(b){try{this.mediaElement.pauseVideo()}catch(c){}},setPlay:function(b){try{this.mediaElement.playVideo()}catch(c){}},getVolume:function(){try{return this.mediaElement.getVolume()}catch(b){}return 0},getPoster:function(){return this.media.config["poster"]||this.pp.config.poster||"http://img.youtube.com/vi/"+this.youtubeGetId()+"/0.jpg"},errorListener:function(b){switch((b.data==undefined)?b:b.data){case 100:this.setTestcard(500);break;case 101:case 150:this.setTestcard(501);break;case 2:this.setTestcard(502);break}},stateChange:function(b){clearTimeout(this._updateTimer);if(this.mediaElement===null){return}switch((b.data==undefined)?b:b.data){case -1:this.setPlay();break;case 0:this.endedListener({});break;case 1:this._setBufferState("full");this.playingListener({});this.canplayListener({});this.updateInfo();break;case 2:this.pauseListener({});break;case 3:this.waitingListener({});break;case 5:if(this.useIframeAPI!==true){this.onReady()}break}},onReady:function(){this.setVolume(this.pp.getVolume());this.elementReady=true;if(this.media.title||this.pp.config.title||this.elementReady){return}var b=this;a.ajax({url:"http://gdata.youtube.com/feeds/api/videos/"+this.youtubeGetId()+"?v=2&alt=jsonc",complete:function(f,c){try{data=f.responseText;if(typeof data=="string"){data=a.parseJSON(data)}if(data.data.title){b.sendUpdate("config",{title:data.data.title+" ("+data.data.uploader+")"})}}catch(d){}b.elementReady=true}})},youtubeGetId:function(){return encodeURIComponent(this.media.file.replace(/^[^v]+v.(.{11}).*/,"$1"))},updateInfo:function(){var b=this;clearTimeout(this._updateTimer);(function(){if(b.mediaElement==null){clearTimeout(b._updateTimer);return}try{if(b.getState()!=="IDLE"&&b.getState()!=="COMPLETED"){b.timeListener({position:b.mediaElement.getCurrentTime(),duration:b.mediaElement.getDuration()});b.progressListener({loaded:b.mediaElement.getVideoBytesLoaded(),total:b.mediaElement.getVideoBytesTotal()})}}catch(c){}b._updateTimer=setTimeout(arguments.callee,500)})()}});$p.newModel({modelId:"YTAUDIO",iLove:[{ext:"youtube.com",type:"audio/youtube",platform:"flash",fixed:"maybe"}],applyMedia:function(b){this.imageElement=this.applyImage(this.pp.getConfig("cover")||this.pp.getConfig("poster"),b);this._setBufferState("empty");this.mediaElement=new YT.Player(this.pp.getId()+"_media",{width:"100px",height:"100px",playerVars:{autoplay:10,disablekb:1,start:0,controls:0,enablejsapi:1,playerapiid:this.pp.getId(),origin:location.host},videoId:this.youtubeGetId(),events:{onReady:"onReady"+this.pp.getId(),onStateChange:"onStateChange"+this.pp.getId(),onError:"onError"+this.pp.getId()}})}},"YTVIDEO")});var projekktorControlbar=function(){};jQuery(function(a){projekktorControlbar.prototype={_cTimer:null,_noCHide:false,_cFading:false,_vSliderAct:false,_storeVol:0,_timeTags:{},cb:null,cbFS:null,_pos:{left:0,right:0},controlElements:{},controlElementsConfig:{cb:null,playhead:{on:null,call:null},loaded:{on:"click",call:"scrubberClk"},scrubber:{on:"click",call:"scrubberClk"},play:{on:"click",call:"playClk"},pause:{on:"click",call:"pauseClk"},stop:{on:"click",call:"stopClk"},prev:{on:"click",call:"prevClk"},next:{on:"click",call:"nextClk"},rewind:{on:"click",call:"rewindClk"},forward:{on:"click",call:"forwardClk"},fsexit:{on:"click",call:"exitFullscreenClk"},fsenter:{on:"click",call:"enterFullscreenClk"},vslider:{on:"click",call:"vsliderClk"},vmarker:{on:"click",call:"vsliderClk"},vknob:{on:"mousedown",call:"vknobStartDragListener"},mute:{on:"click",call:"muteClk"},unmute:{on:"click",call:"unmuteClk"},vmax:{on:"click",call:"vmaxClk"},open:{on:"click",call:"openCloseClk"},close:{on:"click",call:"openCloseClk"},loopon:{on:"click",call:"loopClk"},loopoff:{on:"click",call:"loopClk"},draghandle:{on:"mousedown",call:"handleStartDragListener"},controls:{on:null,call:null},title:null,sec_dur:null,min_dur:null,hr_dur:null,sec_elp:null,min_elp:null,hr_elp:null,sec_rem:null,min_rem:null,hr_rem:null},config:{controlsDisableFade:false,controlsTemplate:"<div %{fsexit}></div><div %{fsenter}></div><div %{play}></div><div %{pause}></div><div %{prev}></div><div %{next}></div><div %{title}></div><div %{timeleft}>%{min_dur}:%{sec_dur} | %{min_rem}:%{sec_rem}</div><div %{scrubber}><div %{loaded}></div><div %{playhead}></div></div><div %{vslider}><div %{vmarker}></div><div %{vknob}></div></div><div %{mute}></div><div %{vmax}></div>",controlsTemplateFull:null,toggleMute:false},initialize:function(){var e=this,d=this.playerDom.html(),c=true,f=this.getConfig("cssClassPrefix");for(var b in this.controlElementsConfig){if(d.match(new RegExp(f+b,"gi"))){c=false;break}}if(c){this.cb=this.applyToPlayer(a(document.createElement("div")).addClass("controls"));this.cbFS=this.applyToPlayer(a(document.createElement("div")).addClass("controls").addClass("fullscreen").removeClass("active").addClass("inactive"));if(this.getConfig("controlsDisableFade")!==true){this.cb.addClass("fade");this.cbFS.addClass("fade")}this.applyTemplate(this.cb,this.getConfig("controlsTemplate"));this.applyTemplate(this.cbFS,this.getConfig("controlsTemplateFull")||this.getConfig("controlsTemplate"))}else{this.cb=this.playerDom.find("."+f+"controls:not(.fullscreen)");this.cbFS=this.playerDom.children("."+f+"controls.fullscreen");if(this.cbFS.length==0){this.cbFS=this.cb}}for(var b in this.controlElementsConfig){this.controlElements[b]=a(this.playerDom).find("."+f+b);this.blockSelection(this.controlElements[b])}this.addGuiListeners();this._storeVol=this.getConfig("volume");this.drawUpdateControls();this.hidecb(true);this.pluginReady=true},applyTemplate:function(d,c){var e=this,f=this.getConfig("cssClassPrefix");if(c){var b=c.match(/\%{[a-zA-Z_]*\}/gi);if(b!=null){a.each(b,function(g,h){var i=h.replace(/\%{|}/gi,"");if(h.match(/\_/gi)){c=c.replace(h,'<span class="'+f+i+'"></span>')}else{c=c.replace(h,'class="'+f+i+'"')}})}d.html(c)}},itemHandler:function(b){this.pluginReady=true;this.hidecb(true)},displayReadyHandler:function(b){this.pluginReady=true;this.showcb(true)},drawUpdateControls:function(){var b=this,c=this.pp.getState();clearTimeout(this._cTimer);if(this.pp.getHasGUI()){return}if(this.getConfig("controls")==false){this.hidecb(true);return}var d=(this.pp.getItemCount()<2||this.getConfig("disallowSkip"));if(!d){this.controlElements.prev.removeClass("inactive").addClass("active");this.controlElements.next.removeClass("inactive").addClass("active")}else{this.controlElements.prev.removeClass("active").addClass("inactive");this.controlElements.next.removeClass("active").addClass("inactive")}if(this.pp.getItemIdx()<1){this.controlElements.prev.removeClass("active").addClass("inactive")}if(this.pp.getItemIdx()>=this.pp.getItemCount()-1){this.controlElements.next.removeClass("active").addClass("inactive")}if(this.getConfig("disablePause")){this.controlElements.pause.removeClass("active").addClass("inactive");this.controlElements.play.removeClass("active").addClass("inactive")}else{if(c==="PLAYING"){this.drawPauseButton()}if(c==="PAUSED"){this.drawPlayButton()}if(c==="IDLE"){this.drawPlayButton()}}if(c=="IDLE"){this.controlElements.stop.removeClass("active").addClass("inactive")}else{this.controlElements.stop.removeClass("inactive").addClass("active")}if(c=="IDLE"){this.controlElements.forward.removeClass("active").addClass("inactive");this.controlElements.rewind.removeClass("active").addClass("inactive")}else{this.controlElements.forward.removeClass("inactive").addClass("active");this.controlElements.rewind.removeClass("inactive").addClass("active")}if(this.pp.getInFullscreen()===true){this.drawExitFullscreenButton()}else{this.drawEnterFullscreenButton()}if(this.getConfig("disableFullscreen")){this.controlElements.fsexit.removeClass("active").addClass("inactive");this.controlElements.fsenter.removeClass("active").addClass("inactive")}if(this.pp.config._loop!=true){this.controlElements.loopoff.removeClass("active").addClass("inactive");this.controlElements.loopon.removeClass("inactive").addClass("active")}else{this.controlElements.loopoff.removeClass("inactive").addClass("active");this.controlElements.loopon.removeClass("active").addClass("inactive")}this.drawTitle(this.getConfig("title"));this.drawUpdateTimeDisplay();this.drawUpdateVolumeDisplay(this.pp.getVolume()||this._storeVol)},stateHandler:function(b){this.drawUpdateControls();if("STOPPED|STARTING|AWAKENING|IDLE".indexOf(b)>-1){this.drawUpdateTimeDisplay(0,0,0);this.drawUpdateProgressDisplay(0);this.hidecb(true)}else{this.drawUpdateProgressDisplay()}},scheduleModifiedHandler:function(){if(this.pp.getState()==="IDLE"){return}this.drawUpdateControls();this.drawUpdateTimeDisplay();this.drawUpdateProgressDisplay()},volumeHandler:function(b){this.drawUpdateVolumeDisplay(b)},progressHandler:function(b){this.drawUpdateProgressDisplay()},timeHandler:function(b){this.drawUpdateTimeDisplay();this.drawUpdateProgressDisplay()},fullscreenHandler:function(d){var b=this,c=this.getConfig("cssClassPrefix");this._noCHide=false;this._cFading=false;this._vSliderAct=false;clearTimeout(this._cTimer);if(!this.getConfig("controls")){return}if(this.pp.getInFullscreen()===true){this.playerDom.children("."+c+"controls:not(.fullscreen)").stop(true,true).removeClass("active").addClass("inactive").css("display","");this.playerDom.children("."+c+"controls.fullscreen").stop(true,true).removeClass("inactive").addClass("active").css("display","")}else{this.playerDom.children("."+c+"controls:not(.fullscreen)").stop(true,true).removeClass("inactive").addClass("active").css("display","");this.playerDom.children("."+c+"controls.fullscreen").stop(true,true).removeClass("active").addClass("inactive").css("display","")}this.drawUpdateControls();if(this.pp.getState()=="IDLE"){this.hidecb(true)}else{this._cTimer=setTimeout(function(){b.hidecb()},2500)}},addGuiListeners:function(){var b=this;a.each(this.controlElementsConfig,function(c,d){if(!d){return}if(d.on!=null){b.controlElements[c][d.on](function(e){b.clickCatcher(e,d.call,b.controlElements[c])})}});this.cbFS.mouseenter(function(c){b.controlsMouseEnterListener(c)});this.cbFS.mouseleave(function(c){b.controlsMouseLeaveListener(c)});this.cb.mouseenter(function(c){b.controlsMouseEnterListener(c)});this.cb.mouseleave(function(c){b.controlsMouseLeaveListener(c)})},clickCatcher:function(b,d,c){if(a.browser.msie){b.cancelBubble=true}else{b.stopPropagation()}if(c.hasClass("inactive")){return}this[d](b,c)},drawTitle:function(b){this.controlElements.title.html(b)},hidecb:function(c){var d=this.getConfig("cssClassPrefix"),b=(this.pp.getInFullscreen()===true)?this.cbFS:this.cb;clearTimeout(this._cTimer);if(b==null){return}b.stop(true,true);if(this.pp.getHasGUI()||this.getConfig("controls")==false){b.removeClass("active").addClass("inactive").css("display","");return}if(!b.is(":visible")){return}if(c===true||!b.hasClass("fade")){this._noCHide=false;this._cFading=false;b.removeClass("active").addClass("inactive").css("display","");return}else{if(this._noCHide==true&&this.getConfig("controls")==true){return}}if(this.getConfig("controls")==false){b.removeClass("active").addClass("inactive")}else{b.fadeOut("slow",function(){a(this).removeClass("active").addClass("inactive").css("display","")})}},showcb:function(c){if(this.pp.getHasGUI()||this.getConfig("controls")==false){b.removeClass("active").addClass("inactive").css("display","");return}var d=this,b=(this.pp.getInFullscreen()===true)?this.cbFS:this.cb,e=this.getConfig("cssClassPrefix");clearTimeout(this._cTimer);if(b==null){return}if("IDLE|AWAKENING|ERROR".indexOf(this.pp.getState())>-1){return}b.stop(true,true);if((!b.hasClass("fade")&&c==true)){b.removeClass("inactive").addClass("active").css("display","");return}if(b.is(":visible")||this._cFading==true){b.removeClass("inactive").addClass("active").css("display","");this._cTimer=setTimeout(function(){d.hidecb()},2500);return}this._cFading=true;b.fadeIn("fast",function(){d._cFading=false;a(this).removeClass("inactive").addClass("active").css("display","")})},drawUpdateTimeDisplay:function(f,d,j){if(this.pp.getHasGUI()){return}try{var c=(f!=undefined)?f:this.pp.getLoadPlaybackProgress(),i=(d!=undefined)?d:this.pp.getDuration(),b=(j!=undefined)?j:this.pp.getPosition()}catch(g){var c=f||0,i=d||0,b=j||0}this.controlElements.playhead.css("width",c+"%");var h=a.extend({},this._clockDigits(i,"dur"),this._clockDigits(b,"elp"),this._clockDigits(i-b,"rem"));a.each(this.controlElements,function(e,k){if(h[e]){a.each(k,function(){a(this).html(h[e])})}})},drawUpdateProgressDisplay:function(){this.controlElements.loaded.css("width",this.pp.getLoadProgress()+"%")},drawUpdateVolumeDisplay:function(b){if(this._vSliderAct==true){return}if(b==undefined){return}clearTimeout(this._cTimer);var d=(this.pp.getInFullscreen()===true)?this.cbFS:this.cb,f=d.is(":visible"),e=this,c=(this.controlElements.mute.hasClass("toggle")||this.controlElements.unmute.hasClass("toggle"));d.stop(true,true).show();switch(b){case 0:this.controlElements.vknob.css("left",0);break;case 1:this.controlElements.vknob.css("left",(this.controlElements.vslider.width()-(this.controlElements.vknob.width()/2))+"px");break;default:this.controlElements.vknob.css("left",b*(this.controlElements.vslider.width()-(this.controlElements.vknob.width()/2))+"px");break}if(c){if(b){this.controlElements.mute.removeClass("inactive").addClass("active");this.controlElements.unmute.removeClass("active").addClass("inactive")}else{this.controlElements.mute.removeClass("active").addClass("inactive");this.controlElements.unmute.removeClass("inactive").addClass("active");this.controlElements.vmax.removeClass("inactive").addClass("active")}if(b==1){this.controlElements.vmax.removeClass("active").addClass("inactive")}else{this.controlElements.vmax.removeClass("inactive").addClass("active")}}else{this.controlElements.vmax.removeClass("inactive").addClass("active");this.controlElements.unmute.removeClass("inactive").addClass("active");this.controlElements.mute.removeClass("inactive").addClass("active")}this.controlElements.vmarker.css("width",b*100+"%");this._cTimer=setTimeout(function(){e.hidecb()},3500);if(!f){d.hide()}},drawPauseButton:function(b){this.controlElements.pause.removeClass("inactive").addClass("active");this.controlElements.play.removeClass("active").addClass("inactive")},drawPlayButton:function(b){this.controlElements.pause.removeClass("active").addClass("inactive");this.controlElements.play.removeClass("inactive").addClass("active")},drawEnterFullscreenButton:function(b){this.controlElements.fsexit.removeClass("active").addClass("inactive");this.controlElements.fsenter.removeClass("inactive").addClass("active")},drawExitFullscreenButton:function(b){this.controlElements.fsexit.removeClass("inactive").addClass("active");this.controlElements.fsenter.removeClass("active").addClass("inactive")},playClk:function(b){this.pp.setPlay()},pauseClk:function(b){this.pp.setPause()},stopClk:function(b){this.pp.setStop()},controlsMouseEnterListener:function(b){this._noCHide=true},controlsMouseLeaveListener:function(b){this._noCHide=false},controlsClk:function(b){},mousemoveHandler:function(b){this.showcb()},mouseleaveHandler:function(b){var c=this;this._cTimer=setTimeout(function(){c.hidecb()},2500)},prevClk:function(b){this.pp.setActiveItem("previous")},nextClk:function(b){this.pp.setActiveItem("next")},forwardClk:function(b){this.pp.setPlayhead("+10")},rewindClk:function(b){this.pp.setPlayhead("-10")},muteClk:function(b){this._storeVol=(this.pp.getVolume()==0)?this.getConfig("volume"):this.pp.getVolume();this.pp.setVolume(0)},unmuteClk:function(b){if(this._storeVol<=0){this._storeVol=1}this.pp.setVolume(this._storeVol)},vmaxClk:function(b){this.pp.setVolume(1)},enterFullscreenClk:function(b){this.pp.setFullscreen(true)},exitFullscreenClk:function(b){this.pp.setFullscreen(false)},openCloseClk:function(b){var c=this;a(a(b.currentTarget).attr("class").split(/\s+/)).each(function(d,e){if(e.indexOf("toggle")==-1){return}c.playerDom.find("."+e.substring(6)).slideToggle("slow",function(){c.pp.setResize()});c.controlElements.open.toggle();c.controlElements.close.toggle()})},loopClk:function(b){if(a.inArray(this.getConfig("cssClassPrefix")+"loopon",a(b.currentTarget).attr("class").split(/\s+/))>-1){this.pp.config._loop=true}else{this.pp.config._loop=false}this.drawUpdateControls()},startClk:function(b){this.pp.setPlay()},scrubberClk:function(b){var e=0;if(this.getConfig("disallowSkip")==true){return}var g=(this.pp.getInFullscreen()===true)?1:0,d=a(this.controlElements.scrubber[g]).width(),c=a(this.controlElements.loaded[g]).width(),f=b.pageX-a(this.controlElements.scrubber[g]).offset().left;if(f<0||f=="NaN"||f==undefined){e=0}else{if(c!=undefined){if(f>c){f=c-1}e=((f*100/d)*this.pp.getDuration()/100)*1}}this.pp.setPlayhead(e)},vmarkerClk:function(b){vsliderClk(b)},vsliderClk:function(c){if(this._vSliderAct==true){return}var f=(this.pp.getInFullscreen()===true)?1:0,b=a(this.controlElements.vslider[f]),d=b.width(),e=c.pageX-b.offset().left;if(e<0||e=="NaN"||e==undefined){result=0}else{result=(e/d)}this.pp.setVolume(result);this._storeVol=result},vknobStartDragListener:function(b,i){this._vSliderAct=true;var d=this,f=(this.pp.getInFullscreen()===true)?1:0,c=a(i[f]),h=a(this.controlElements.vslider[f]),k=Math.abs(parseInt(c.position().left)-b.clientX),e=0,g=function(l){if(a.browser.msie){l.cancelBubble=true}else{l.stopPropagation()}d.playerDom.unbind("mouseup",g);h.unbind("mousemove",j);h.unbind("mouseup",g);c.unbind("mousemove",j);c.unbind("mouseup",g);d._vSliderAct=false;return false},j=function(l){clearTimeout(d._cTimer);if(a.browser.msie){l.cancelBubble=true}else{l.stopPropagation()}var m=(l.clientX-k);m=(m>h.width()-c.width()/2)?h.width()-(c.width()/2):m;m=(m<0)?0:m;c.css("left",m+"px");e=Math.abs(m/(h.width()-(c.width()/2)));d.pp.setVolume(e);d._storeVol=e;a(d.controlElements.vmarker[f]).css("width",e*100+"%");return false};this.playerDom.mouseup(g);h.mousemove(j);h.mouseup(g);c.mousemove(j);c.mouseup(g)},handleStartDragListener:function(d,g){var h=this;var f=Math.abs(parseInt(this.cb.position().left)-d.clientX);var c=Math.abs(parseInt(this.cb.position().top)-d.clientY);var b=function(i){if(a.browser.msie){i.cancelBubble=true}else{i.stopPropagation()}h.playerDom.unbind("mouseup",b);h.playerDom.unbind("mouseout",b);h.playerDom.unbind("mousemove",e);return false};var e=function(j){if(a.browser.msie){j.cancelBubble=true}else{j.stopPropagation()}clearTimeout(h._cTimer);var k=(j.clientX-f);k=(k>h.playerDom.width()-h.cb.width())?h.playerDom.width()-h.cb.width():k;k=(k<0)?0:k;h.cb.css("left",k+"px");var i=(j.clientY-c);i=(i>h.playerDom.height()-h.cb.height())?h.playerDom.height()-h.cb.height():i;i=(i<0)?0:i;h.cb.css("top",i+"px");return false};this.playerDom.mousemove(e);this.playerDom.mouseup(b)},errorHandler:function(b){this.hidecb(true)},_clockDigits:function(d,i){if(d<0||isNaN(d)||d==undefined){d=0}var f=Math.floor(d/(60*60));var g=d%(60*60);var c=Math.floor(g/60);var b=g%60;var e=Math.floor(b);var h={};h["min_"+i]=(c<10)?"0"+c:c;h["sec_"+i]=(e<10)?"0"+e:e;h["hr_"+i]=(f<10)?"0"+f:f;return h}}});var projekktorDisplay=function(){};jQuery(function(a){projekktorDisplay.prototype={logo:null,logoIsFading:false,display:null,clickCatcher:null,displayClicks:0,buffIcn:null,buffIcnSprite:null,bufferDelayTimer:null,bufferIconDelay:1,config:{onclick:{callback:"setPlayPause",value:null},onclick_playing:{callback:"setPlayPause",value:null},ondblclick:{callback:"setFullscreen",value:null},bufferIconDelay:200,spriteUrl:"",spriteWidth:50,spriteHeight:50,spriteTiles:25,spriteOffset:1,spriteCountUp:false,logoImage:"",logoDelay:0,logoPosition:"tl",onlogoclick:{callback:"",value:{url:"",target:"_blank",pause:true}}},initialize:function(){var c=this;var b={position:"absolute",overflow:"hidden",height:"100%",width:"100%",top:0,left:0,padding:0,margin:0,display:"block"};this.startButton=this.applyToPlayer(a(document.createElement("div")).addClass("start")).addClass("inactive");this.buffIcn=this.applyToPlayer(a(document.createElement("div")).addClass("buffering")).addClass("inactive");if(this.config.spriteUrl!=""){this.buffIcnSprite=a(document.createElement("div")).appendTo(this.buffIcn).css({width:this.config.spriteWidth,height:this.config.spriteHeight,marginLeft:((this.buffIcn.width()-this.config.spriteWidth)/2)+"px",marginTop:((this.buffIcn.height()-this.config.spriteHeight)/2)+"px",backgroundColor:"transparent",backgroundImage:"url("+this.config.spriteUrl+")",backgroundRepeat:"no-repeat",backgroundPosition:"0 0"}).addClass("inactive")}this.display=this.applyToPlayer(a(document.createElement("div")).addClass("display").css(b));this.pp.getMediaContainer();this.logo=this.applyToPlayer(a(document.createElement("img")).addClass("logo").attr("src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABBJREFUeNpi/v//PwNAgAEACQsDAUdpTjcAAAAASUVORK5CYII=").css("position","absolute").css(((this.getConfig("logoPosition").indexOf("r")>-1)?"right":"left"),"2%").css(((this.getConfig("logoPosition").indexOf("t")>-1)?"top":"bottom"),"2%"));if(!this.pp.getIsMobileClient()){this.clickCatcher=a(document.createElement("div")).css(b).addClass("clickcatcher").appendTo(this.display);if(a.browser.msie){this.clickCatcher.css("background","url(#)")}}this.pluginReady=true},displayReadyHandler:function(){var b=this;try{this.clickCatcher.unbind();this.clickCatcher.click(function(d){b._displayClickListener(d)})}catch(c){}this.startButton.unbind();this.startButton.click(function(){b.pp.setPlay()})},bufferHandler:function(b){if(b=="EMPTY"){this.showBufferIcon()}else{this.hideBufferIcon()}},stateHandler:function(b){if(b==="IDLE"){this.startButton.addClass("active").removeClass("inactive")}else{this.startButton.addClass("inactive").removeClass("active")}if(b=="AWAKENING"||b=="COMPLETED"||b=="ERROR"){this.hideBufferIcon()}if(b=="ERROR"||b==="STOPPED"){this.logo.addClass("inactive").removeClass("active")}},stoppedHandler:function(){this.hideBufferIcon()},scheduleLoadingHandler:function(){this.startButton.addClass("inactive").removeClass("active");this.showBufferIcon()},scheduledHandler:function(){if(!this.getConfig("autoplay")){this.startButton.addClass("active").removeClass("inactive")}this.hideBufferIcon()},itemHandler:function(){var b=this;this.hideBufferIcon();this.logoIsFading=false;this.logo.stop(true,true).addClass("inactive").removeClass("active").unbind();if(this.getConfig("logoImage")!=false){this.logo.attr("src",this.getConfig("logoImage")).css({cursor:(this.getConfig("logoURL")!="")?"pointer":"normal"}).click(function(){try{b.pp[b.getConfig("onlogoclick").callback](b.getConfig("onlogoclick").value)}catch(c){}return false})}else{this.logo.attr("src","").addClass("inactive").removeClass("active")}},timeHandler:function(){if(this.getConfig("logoImage")==false){return}if(this.pp.getIsMobileClient()){return}var b=this.pp.getPosition(),d=this.pp.getDuration(),c=this;if(!this.logo.is(":visible")&&!this.logoIsFading&&b+this.config.logoDelay<d){if(b>this.config.logoDelay&&d>(this.config.logoDelay*2)){this.logoIsFading=true;this.logo.fadeIn("slow",function(){c.logoIsFading=false;a(this).addClass("active").removeClass("inactive").css("display","")})}}if(this.logo.is(":visible")&&!this.logoIsFading){if(b+this.config.logoDelay>d){this.logoIsFading=true;this.logo.fadeOut("slow",function(){a(this).addClass("inactive").removeClass("active").css("display","");c.logoIsFading=false})}}},_displayClickListener:function(b){var c=this;if(this.pp.getState()=="ERROR"){this.pp.setActiveItem("next");return false}this.displayClicks++;if(this.displayClicks>0){setTimeout(function(){if(c.displayClicks==1){if(c.pp.getState()=="PLAYING"){try{c.pp[c.getConfig("onclick_playing").callback](c.getConfig("onclick_playing").value)}catch(d){}}else{try{c.pp[c.getConfig("onclick").callback](c.getConfig("onclick").value)}catch(d){}}}else{if(c.displayClicks==2){try{c.pp[c.getConfig("ondblclick").callback](c.getConfig("ondblclick").value)}catch(d){}}}c.displayClicks=0;if(a.browser.msie){b.cancelBubble=true}else{b.stopPropagation()}},250)}return false},hideBufferIcon:function(){var b=this;clearTimeout(this.bufferDelayTimer);this.buffIcn.stop(true,true);this.buffIcn.fadeOut("fast",function(){a(this).addClass("inactive").removeClass("active").css("display","")})},showBufferIcon:function(b){var c=this;clearTimeout(this.bufferDelayTimer);if(this.pp.getHasGUI()){return}if(this.pp.getModel()==="YTAUDIO"||this.pp.getModel()==="YTVIDEO"){b=true}if(b!=true&&this.config.bufferIconDelay>0){this.bufferDelayTimer=setTimeout(function(){c.showBufferIcon(true)},c.config.bufferIconDelay);return}this.buffIcn.stop(true,true);if(this.buffIcn.hasClass("active")){return}this.buffIcn.fadeIn("fast",function(){if(c.buffIcnSprite==null){return}var d=(c.config.spriteCountUp==true)?0:(c.config.spriteHeight+c.config.spriteOffset)*c.config.spriteTiles;c.buffIcnSprite.addClass("active").removeClass("inactive").css("display","");(function(){if(!c.buffIcn.is(":visible")){return}c.buffIcnSprite.css("backgroundPosition","0px -"+d+"px");if(c.config.spriteCountUp==true){d+=c.config.spriteHeight+c.config.spriteOffset}else{d-=c.config.spriteHeight+c.config.spriteOffset}if(d>=c.config.spriteHeight*c.config.spriteTiles){d=0}setTimeout(arguments.callee,60)})()})}}});
;/*
 * Copyright (c) 2009 Simo Kinnunen.
 * Licensed under the MIT license.
 *
 * @version 1.09i
 */
var Cufon=(function(){var m=function(){return m.replace.apply(null,arguments)};var x=m.DOM={ready:(function(){var C=false,E={loaded:1,complete:1};var B=[],D=function(){if(C){return}C=true;for(var F;F=B.shift();F()){}};if(document.addEventListener){document.addEventListener("DOMContentLoaded",D,false);window.addEventListener("pageshow",D,false)}if(!window.opera&&document.readyState){(function(){E[document.readyState]?D():setTimeout(arguments.callee,10)})()}if(document.readyState&&document.createStyleSheet){(function(){try{document.body.doScroll("left");D()}catch(F){setTimeout(arguments.callee,1)}})()}q(window,"load",D);return function(F){if(!arguments.length){D()}else{C?F():B.push(F)}}})(),root:function(){return document.documentElement||document.body}};var n=m.CSS={Size:function(C,B){this.value=parseFloat(C);this.unit=String(C).match(/[a-z%]*$/)[0]||"px";this.convert=function(D){return D/B*this.value};this.convertFrom=function(D){return D/this.value*B};this.toString=function(){return this.value+this.unit}},addClass:function(C,B){var D=C.className;C.className=D+(D&&" ")+B;return C},color:j(function(C){var B={};B.color=C.replace(/^rgba\((.*?),\s*([\d.]+)\)/,function(E,D,F){B.opacity=parseFloat(F);return"rgb("+D+")"});return B}),fontStretch:j(function(B){if(typeof B=="number"){return B}if(/%$/.test(B)){return parseFloat(B)/100}return{"ultra-condensed":0.5,"extra-condensed":0.625,condensed:0.75,"semi-condensed":0.875,"semi-expanded":1.125,expanded:1.25,"extra-expanded":1.5,"ultra-expanded":2}[B]||1}),getStyle:function(C){var B=document.defaultView;if(B&&B.getComputedStyle){return new a(B.getComputedStyle(C,null))}if(C.currentStyle){return new a(C.currentStyle)}return new a(C.style)},gradient:j(function(F){var G={id:F,type:F.match(/^-([a-z]+)-gradient\(/)[1],stops:[]},C=F.substr(F.indexOf("(")).match(/([\d.]+=)?(#[a-f0-9]+|[a-z]+\(.*?\)|[a-z]+)/ig);for(var E=0,B=C.length,D;E<B;++E){D=C[E].split("=",2).reverse();G.stops.push([D[1]||E/(B-1),D[0]])}return G}),quotedList:j(function(E){var D=[],C=/\s*((["'])([\s\S]*?[^\\])\2|[^,]+)\s*/g,B;while(B=C.exec(E)){D.push(B[3]||B[1])}return D}),recognizesMedia:j(function(G){var E=document.createElement("style"),D,C,B;E.type="text/css";E.media=G;try{E.appendChild(document.createTextNode("/**/"))}catch(F){}C=g("head")[0];C.insertBefore(E,C.firstChild);D=(E.sheet||E.styleSheet);B=D&&!D.disabled;C.removeChild(E);return B}),removeClass:function(D,C){var B=RegExp("(?:^|\\s+)"+C+"(?=\\s|$)","g");D.className=D.className.replace(B,"");return D},supports:function(D,C){var B=document.createElement("span").style;if(B[D]===undefined){return false}B[D]=C;return B[D]===C},textAlign:function(E,D,B,C){if(D.get("textAlign")=="right"){if(B>0){E=" "+E}}else{if(B<C-1){E+=" "}}return E},textShadow:j(function(F){if(F=="none"){return null}var E=[],G={},B,C=0;var D=/(#[a-f0-9]+|[a-z]+\(.*?\)|[a-z]+)|(-?[\d.]+[a-z%]*)|,/ig;while(B=D.exec(F)){if(B[0]==","){E.push(G);G={};C=0}else{if(B[1]){G.color=B[1]}else{G[["offX","offY","blur"][C++]]=B[2]}}}E.push(G);return E}),textTransform:(function(){var B={uppercase:function(C){return C.toUpperCase()},lowercase:function(C){return C.toLowerCase()},capitalize:function(C){return C.replace(/\b./g,function(D){return D.toUpperCase()})}};return function(E,D){var C=B[D.get("textTransform")];return C?C(E):E}})(),whiteSpace:(function(){var D={inline:1,"inline-block":1,"run-in":1};var C=/^\s+/,B=/\s+$/;return function(H,F,G,E){if(E){if(E.nodeName.toLowerCase()=="br"){H=H.replace(C,"")}}if(D[F.get("display")]){return H}if(!G.previousSibling){H=H.replace(C,"")}if(!G.nextSibling){H=H.replace(B,"")}return H}})()};n.ready=(function(){var B=!n.recognizesMedia("all"),E=false;var D=[],H=function(){B=true;for(var K;K=D.shift();K()){}};var I=g("link"),J=g("style");function C(K){return K.disabled||G(K.sheet,K.media||"screen")}function G(M,P){if(!n.recognizesMedia(P||"all")){return true}if(!M||M.disabled){return false}try{var Q=M.cssRules,O;if(Q){search:for(var L=0,K=Q.length;O=Q[L],L<K;++L){switch(O.type){case 2:break;case 3:if(!G(O.styleSheet,O.media.mediaText)){return false}break;default:break search}}}}catch(N){}return true}function F(){if(document.createStyleSheet){return true}var L,K;for(K=0;L=I[K];++K){if(L.rel.toLowerCase()=="stylesheet"&&!C(L)){return false}}for(K=0;L=J[K];++K){if(!C(L)){return false}}return true}x.ready(function(){if(!E){E=n.getStyle(document.body).isUsable()}if(B||(E&&F())){H()}else{setTimeout(arguments.callee,10)}});return function(K){if(B){K()}else{D.push(K)}}})();function s(D){var C=this.face=D.face,B={"\u0020":1,"\u00a0":1,"\u3000":1};this.glyphs=D.glyphs;this.w=D.w;this.baseSize=parseInt(C["units-per-em"],10);this.family=C["font-family"].toLowerCase();this.weight=C["font-weight"];this.style=C["font-style"]||"normal";this.viewBox=(function(){var F=C.bbox.split(/\s+/);var E={minX:parseInt(F[0],10),minY:parseInt(F[1],10),maxX:parseInt(F[2],10),maxY:parseInt(F[3],10)};E.width=E.maxX-E.minX;E.height=E.maxY-E.minY;E.toString=function(){return[this.minX,this.minY,this.width,this.height].join(" ")};return E})();this.ascent=-parseInt(C.ascent,10);this.descent=-parseInt(C.descent,10);this.height=-this.ascent+this.descent;this.spacing=function(L,N,E){var O=this.glyphs,M,K,G,P=[],F=0,J=-1,I=-1,H;while(H=L[++J]){M=O[H]||this.missingGlyph;if(!M){continue}if(K){F-=G=K[H]||0;P[I]-=G}F+=P[++I]=~~(M.w||this.w)+N+(B[H]?E:0);K=M.k}P.total=F;return P}}function f(){var C={},B={oblique:"italic",italic:"oblique"};this.add=function(D){(C[D.style]||(C[D.style]={}))[D.weight]=D};this.get=function(H,I){var G=C[H]||C[B[H]]||C.normal||C.italic||C.oblique;if(!G){return null}I={normal:400,bold:700}[I]||parseInt(I,10);if(G[I]){return G[I]}var E={1:1,99:0}[I%100],K=[],F,D;if(E===undefined){E=I>400}if(I==500){I=400}for(var J in G){if(!k(G,J)){continue}J=parseInt(J,10);if(!F||J<F){F=J}if(!D||J>D){D=J}K.push(J)}if(I<F){I=F}if(I>D){I=D}K.sort(function(M,L){return(E?(M>=I&&L>=I)?M<L:M>L:(M<=I&&L<=I)?M>L:M<L)?-1:1});return G[K[0]]}}function r(){function D(F,G){if(F.contains){return F.contains(G)}return F.compareDocumentPosition(G)&16}function B(G){var F=G.relatedTarget;if(!F||D(this,F)){return}C(this,G.type=="mouseover")}function E(F){C(this,F.type=="mouseenter")}function C(F,G){setTimeout(function(){var H=d.get(F).options;m.replace(F,G?h(H,H.hover):H,true)},10)}this.attach=function(F){if(F.onmouseenter===undefined){q(F,"mouseover",B);q(F,"mouseout",B)}else{q(F,"mouseenter",E);q(F,"mouseleave",E)}}}function u(){var C=[],D={};function B(H){var E=[],G;for(var F=0;G=H[F];++F){E[F]=C[D[G]]}return E}this.add=function(F,E){D[F]=C.push(E)-1};this.repeat=function(){var E=arguments.length?B(arguments):C,F;for(var G=0;F=E[G++];){m.replace(F[0],F[1],true)}}}function A(){var D={},B=0;function C(E){return E.cufid||(E.cufid=++B)}this.get=function(E){var F=C(E);return D[F]||(D[F]={})}}function a(B){var D={},C={};this.extend=function(E){for(var F in E){if(k(E,F)){D[F]=E[F]}}return this};this.get=function(E){return D[E]!=undefined?D[E]:B[E]};this.getSize=function(F,E){return C[F]||(C[F]=new n.Size(this.get(F),E))};this.isUsable=function(){return !!B}}function q(C,B,D){if(C.addEventListener){C.addEventListener(B,D,false)}else{if(C.attachEvent){C.attachEvent("on"+B,function(){return D.call(C,window.event)})}}}function v(C,B){var D=d.get(C);if(D.options){return C}if(B.hover&&B.hoverables[C.nodeName.toLowerCase()]){b.attach(C)}D.options=B;return C}function j(B){var C={};return function(D){if(!k(C,D)){C[D]=B.apply(null,arguments)}return C[D]}}function c(F,E){var B=n.quotedList(E.get("fontFamily").toLowerCase()),D;for(var C=0;D=B[C];++C){if(i[D]){return i[D].get(E.get("fontStyle"),E.get("fontWeight"))}}return null}function g(B){return document.getElementsByTagName(B)}function k(C,B){return C.hasOwnProperty(B)}function h(){var C={},B,F;for(var E=0,D=arguments.length;B=arguments[E],E<D;++E){for(F in B){if(k(B,F)){C[F]=B[F]}}}return C}function o(E,M,C,N,F,D){var K=document.createDocumentFragment(),H;if(M===""){return K}var L=N.separate;var I=M.split(p[L]),B=(L=="words");if(B&&t){if(/^\s/.test(M)){I.unshift("")}if(/\s$/.test(M)){I.push("")}}for(var J=0,G=I.length;J<G;++J){H=z[N.engine](E,B?n.textAlign(I[J],C,J,G):I[J],C,N,F,D,J<G-1);if(H){K.appendChild(H)}}return K}function l(D,M){var C=D.nodeName.toLowerCase();if(M.ignore[C]){return}var E=!M.textless[C];var B=n.getStyle(v(D,M)).extend(M);var F=c(D,B),G,K,I,H,L,J;if(!F){return}for(G=D.firstChild;G;G=I){K=G.nodeType;I=G.nextSibling;if(E&&K==3){if(H){H.appendData(G.data);D.removeChild(G)}else{H=G}if(I){continue}}if(H){D.replaceChild(o(F,n.whiteSpace(H.data,B,H,J),B,M,G,D),H);H=null}if(K==1){if(G.firstChild){if(G.nodeName.toLowerCase()=="cufon"){z[M.engine](F,null,B,M,G,D)}else{arguments.callee(G,M)}}J=G}}}var t=" ".split(/\s+/).length==0;var d=new A();var b=new r();var y=new u();var e=false;var z={},i={},w={autoDetect:false,engine:null,forceHitArea:false,hover:false,hoverables:{a:true},ignore:{applet:1,canvas:1,col:1,colgroup:1,head:1,iframe:1,map:1,optgroup:1,option:1,script:1,select:1,style:1,textarea:1,title:1,pre:1},printable:true,selector:(window.Sizzle||(window.jQuery&&function(B){return jQuery(B)})||(window.dojo&&dojo.query)||(window.Ext&&Ext.query)||(window.YAHOO&&YAHOO.util&&YAHOO.util.Selector&&YAHOO.util.Selector.query)||(window.$$&&function(B){return $$(B)})||(window.$&&function(B){return $(B)})||(document.querySelectorAll&&function(B){return document.querySelectorAll(B)})||g),separate:"words",textless:{dl:1,html:1,ol:1,table:1,tbody:1,thead:1,tfoot:1,tr:1,ul:1},textShadow:"none"};var p={words:/\s/.test("\u00a0")?/[^\S\u00a0]+/:/\s+/,characters:"",none:/^/};m.now=function(){x.ready();return m};m.refresh=function(){y.repeat.apply(y,arguments);return m};m.registerEngine=function(C,B){if(!B){return m}z[C]=B;return m.set("engine",C)};m.registerFont=function(D){if(!D){return m}var B=new s(D),C=B.family;if(!i[C]){i[C]=new f()}i[C].add(B);return m.set("fontFamily",'"'+C+'"')};m.replace=function(D,C,B){C=h(w,C);if(!C.engine){return m}if(!e){n.addClass(x.root(),"cufon-active cufon-loading");n.ready(function(){n.addClass(n.removeClass(x.root(),"cufon-loading"),"cufon-ready")});e=true}if(C.hover){C.forceHitArea=true}if(C.autoDetect){delete C.fontFamily}if(typeof C.textShadow=="string"){C.textShadow=n.textShadow(C.textShadow)}if(typeof C.color=="string"&&/^-/.test(C.color)){C.textGradient=n.gradient(C.color)}else{delete C.textGradient}if(!B){y.add(D,arguments)}if(D.nodeType||typeof D=="string"){D=[D]}n.ready(function(){for(var F=0,E=D.length;F<E;++F){var G=D[F];if(typeof G=="string"){m.replace(C.selector(G),C,true)}else{l(G,C)}}});return m};m.set=function(B,C){w[B]=C;return m};return m})();Cufon.registerEngine("vml",(function(){var e=document.namespaces;if(!e){return}e.add("cvml","urn:schemas-microsoft-com:vml");e=null;var b=document.createElement("cvml:shape");b.style.behavior="url(#default#VML)";if(!b.coordsize){return}b=null;var h=(document.documentMode||0)<8;document.write(('<style type="text/css">cufoncanvas{text-indent:0;}@media screen{cvml\\:shape,cvml\\:rect,cvml\\:fill,cvml\\:shadow{behavior:url(#default#VML);display:block;antialias:true;position:absolute;}cufoncanvas{position:absolute;text-align:left;}cufon{display:inline-block;position:relative;vertical-align:'+(h?"middle":"text-bottom")+";}cufon cufontext{position:absolute;left:-10000in;font-size:1px;}a cufon{cursor:pointer}}@media print{cufon cufoncanvas{display:none;}}</style>").replace(/;/g,"!important;"));function c(i,j){return a(i,/(?:em|ex|%)$|^[a-z-]+$/i.test(j)?"1em":j)}function a(l,m){if(m==="0"){return 0}if(/px$/i.test(m)){return parseFloat(m)}var k=l.style.left,j=l.runtimeStyle.left;l.runtimeStyle.left=l.currentStyle.left;l.style.left=m.replace("%","em");var i=l.style.pixelLeft;l.style.left=k;l.runtimeStyle.left=j;return i}function f(l,k,j,n){var i="computed"+n,m=k[i];if(isNaN(m)){m=k.get(n);k[i]=m=(m=="normal")?0:~~j.convertFrom(a(l,m))}return m}var g={};function d(p){var q=p.id;if(!g[q]){var n=p.stops,o=document.createElement("cvml:fill"),i=[];o.type="gradient";o.angle=180;o.focus="0";o.method="sigma";o.color=n[0][1];for(var m=1,l=n.length-1;m<l;++m){i.push(n[m][0]*100+"% "+n[m][1])}o.colors=i.join(",");o.color2=n[l][1];g[q]=o}return g[q]}return function(ac,G,Y,C,K,ad,W){var n=(G===null);if(n){G=K.alt}var I=ac.viewBox;var p=Y.computedFontSize||(Y.computedFontSize=new Cufon.CSS.Size(c(ad,Y.get("fontSize"))+"px",ac.baseSize));var y,q;if(n){y=K;q=K.firstChild}else{y=document.createElement("cufon");y.className="cufon cufon-vml";y.alt=G;q=document.createElement("cufoncanvas");y.appendChild(q);if(C.printable){var Z=document.createElement("cufontext");Z.appendChild(document.createTextNode(G));y.appendChild(Z)}if(!W){y.appendChild(document.createElement("cvml:shape"))}}var ai=y.style;var R=q.style;var l=p.convert(I.height),af=Math.ceil(l);var V=af/l;var P=V*Cufon.CSS.fontStretch(Y.get("fontStretch"));var U=I.minX,T=I.minY;R.height=af;R.top=Math.round(p.convert(T-ac.ascent));R.left=Math.round(p.convert(U));ai.height=p.convert(ac.height)+"px";var F=Y.get("color");var ag=Cufon.CSS.textTransform(G,Y).split("");var L=ac.spacing(ag,f(ad,Y,p,"letterSpacing"),f(ad,Y,p,"wordSpacing"));if(!L.length){return null}var k=L.total;var x=-U+k+(I.width-L[L.length-1]);var ah=p.convert(x*P),X=Math.round(ah);var O=x+","+I.height,m;var J="r"+O+"ns";var u=C.textGradient&&d(C.textGradient);var o=ac.glyphs,S=0;var H=C.textShadow;var ab=-1,aa=0,w;while(w=ag[++ab]){var D=o[ag[ab]]||ac.missingGlyph,v;if(!D){continue}if(n){v=q.childNodes[aa];while(v.firstChild){v.removeChild(v.firstChild)}}else{v=document.createElement("cvml:shape");q.appendChild(v)}v.stroked="f";v.coordsize=O;v.coordorigin=m=(U-S)+","+T;v.path=(D.d?"m"+D.d+"xe":"")+"m"+m+J;v.fillcolor=F;if(u){v.appendChild(u.cloneNode(false))}var ae=v.style;ae.width=X;ae.height=af;if(H){var s=H[0],r=H[1];var B=Cufon.CSS.color(s.color),z;var N=document.createElement("cvml:shadow");N.on="t";N.color=B.color;N.offset=s.offX+","+s.offY;if(r){z=Cufon.CSS.color(r.color);N.type="double";N.color2=z.color;N.offset2=r.offX+","+r.offY}N.opacity=B.opacity||(z&&z.opacity)||1;v.appendChild(N)}S+=L[aa++]}var M=v.nextSibling,t,A;if(C.forceHitArea){if(!M){M=document.createElement("cvml:rect");M.stroked="f";M.className="cufon-vml-cover";t=document.createElement("cvml:fill");t.opacity=0;M.appendChild(t);q.appendChild(M)}A=M.style;A.width=X;A.height=af}else{if(M){q.removeChild(M)}}ai.width=Math.max(Math.ceil(p.convert(k*P)),0);if(h){var Q=Y.computedYAdjust;if(Q===undefined){var E=Y.get("lineHeight");if(E=="normal"){E="1em"}else{if(!isNaN(E)){E+="em"}}Y.computedYAdjust=Q=0.5*(a(ad,E)-parseFloat(ai.height))}if(Q){ai.marginTop=Math.ceil(Q)+"px";ai.marginBottom=Q+"px"}}return y}})());Cufon.registerEngine("canvas",(function(){var b=document.createElement("canvas");if(!b||!b.getContext||!b.getContext.apply){return}b=null;var a=Cufon.CSS.supports("display","inline-block");var e=!a&&(document.compatMode=="BackCompat"||/frameset|transitional/i.test(document.doctype.publicId));var f=document.createElement("style");f.type="text/css";f.appendChild(document.createTextNode(("cufon{text-indent:0;}@media screen,projection{cufon{display:inline;display:inline-block;position:relative;vertical-align:middle;"+(e?"":"font-size:1px;line-height:1px;")+"}cufon cufontext{display:-moz-inline-box;display:inline-block;width:0;height:0;overflow:hidden;text-indent:-10000in;}"+(a?"cufon canvas{position:relative;}":"cufon canvas{position:absolute;}")+"}@media print{cufon{padding:0;}cufon canvas{display:none;}}").replace(/;/g,"!important;")));document.getElementsByTagName("head")[0].appendChild(f);function d(p,h){var n=0,m=0;var g=[],o=/([mrvxe])([^a-z]*)/g,k;generate:for(var j=0;k=o.exec(p);++j){var l=k[2].split(",");switch(k[1]){case"v":g[j]={m:"bezierCurveTo",a:[n+~~l[0],m+~~l[1],n+~~l[2],m+~~l[3],n+=~~l[4],m+=~~l[5]]};break;case"r":g[j]={m:"lineTo",a:[n+=~~l[0],m+=~~l[1]]};break;case"m":g[j]={m:"moveTo",a:[n=~~l[0],m=~~l[1]]};break;case"x":g[j]={m:"closePath"};break;case"e":break generate}h[g[j].m].apply(h,g[j].a)}return g}function c(m,k){for(var j=0,h=m.length;j<h;++j){var g=m[j];k[g.m].apply(k,g.a)}}return function(V,w,P,t,C,W){var k=(w===null);if(k){w=C.getAttribute("alt")}var A=V.viewBox;var m=P.getSize("fontSize",V.baseSize);var B=0,O=0,N=0,u=0;var z=t.textShadow,L=[];if(z){for(var U=z.length;U--;){var F=z[U];var K=m.convertFrom(parseFloat(F.offX));var I=m.convertFrom(parseFloat(F.offY));L[U]=[K,I];if(I<B){B=I}if(K>O){O=K}if(I>N){N=I}if(K<u){u=K}}}var Z=Cufon.CSS.textTransform(w,P).split("");var E=V.spacing(Z,~~m.convertFrom(parseFloat(P.get("letterSpacing"))||0),~~m.convertFrom(parseFloat(P.get("wordSpacing"))||0));if(!E.length){return null}var h=E.total;O+=A.width-E[E.length-1];u+=A.minX;var s,n;if(k){s=C;n=C.firstChild}else{s=document.createElement("cufon");s.className="cufon cufon-canvas";s.setAttribute("alt",w);n=document.createElement("canvas");s.appendChild(n);if(t.printable){var S=document.createElement("cufontext");S.appendChild(document.createTextNode(w));s.appendChild(S)}}var aa=s.style;var H=n.style;var j=m.convert(A.height);var Y=Math.ceil(j);var M=Y/j;var G=M*Cufon.CSS.fontStretch(P.get("fontStretch"));var J=h*G;var Q=Math.ceil(m.convert(J+O-u));var o=Math.ceil(m.convert(A.height-B+N));n.width=Q;n.height=o;H.width=Q+"px";H.height=o+"px";B+=A.minY;H.top=Math.round(m.convert(B-V.ascent))+"px";H.left=Math.round(m.convert(u))+"px";var r=Math.max(Math.ceil(m.convert(J)),0)+"px";if(a){aa.width=r;aa.height=m.convert(V.height)+"px"}else{aa.paddingLeft=r;aa.paddingBottom=(m.convert(V.height)-1)+"px"}var X=n.getContext("2d"),D=j/A.height;X.scale(D,D*M);X.translate(-u,-B);X.save();function T(){var x=V.glyphs,ab,l=-1,g=-1,y;X.scale(G,1);while(y=Z[++l]){var ab=x[Z[l]]||V.missingGlyph;if(!ab){continue}if(ab.d){X.beginPath();if(ab.code){c(ab.code,X)}else{ab.code=d("m"+ab.d,X)}X.fill()}X.translate(E[++g],0)}X.restore()}if(z){for(var U=z.length;U--;){var F=z[U];X.save();X.fillStyle=F.color;X.translate.apply(X,L[U]);T()}}var q=t.textGradient;if(q){var v=q.stops,p=X.createLinearGradient(0,A.minY,0,A.maxY);for(var U=0,R=v.length;U<R;++U){p.addColorStop.apply(p,v[U])}X.fillStyle=p}else{X.fillStyle=P.get("color")}T();return s}})());
;/*!
 * The following copyright notice may not be removed under any circumstances.
 * 
 * Copyright:
 * Typeface � (your company). 2011. All Rights Reserved
 * 
 * Description:
 * This font was created using FontCreator 5.6 from High-Logic.com
 */
Cufon.registerFont({"w":178,"face":{"font-family":"icons","font-weight":400,"font-stretch":"normal","units-per-em":"360","panose-1":"2 0 5 0 0 0 0 0 0 0","ascent":"288","descent":"-72","bbox":"-2.30515 -327 343.152 75.2403","underline-thickness":"26.3672","underline-position":"-24.9609","unicode-range":"U+0020-U+00BB"},"glyphs":{" ":{"w":89},"\u00a0":{"w":89},"!":{"d":"61,-256v11,0,16,6,15,16r-14,182r-7,0r-9,-182v1,-10,4,-16,15,-16xm38,-19v-5,-11,16,-31,26,-25v5,8,21,14,14,26v-7,5,-15,25,-24,16","w":118},"\"":{"d":"32,-277v11,0,15,7,14,19r-11,63r-6,0r-11,-69v0,-9,4,-13,14,-13xm87,-277v11,0,15,8,13,19r-11,63r-5,0r-11,-69v0,-9,4,-13,14,-13","w":118},"#":{"d":"105,-151r-15,51r42,0r15,-51r-42,0xm118,-252r17,0r-25,84r42,0r25,-84r17,0r-25,84r45,0r-5,17r-45,0r-15,51r49,0r-5,17r-49,0r-25,83r-16,0r24,-83r-42,0r-25,83r-16,0r25,-83r-48,0r5,-17r47,0r16,-51r-52,0r5,-17r52,0","w":234},"$":{"d":"20,-190v-1,-38,31,-62,69,-65r0,-18r12,0r0,18v13,0,31,16,36,-1r9,0r18,50r-9,0v-9,-25,-29,-34,-54,-38r0,95v46,20,69,25,71,78v2,45,-32,70,-71,74r0,42r-12,0r0,-42v-25,0,-39,-3,-51,-7v-5,0,-6,11,-16,8r0,-59r9,0v7,34,29,45,58,48r0,-112v-42,-15,-68,-24,-69,-71xm101,-8v41,0,70,-54,41,-87v-7,-7,-21,-14,-41,-20r0,107xm89,-245v-38,-2,-67,43,-41,72v6,6,20,13,41,20r0,-92"},"%":{"d":"11,-190v0,-38,29,-66,68,-66v38,0,68,28,68,66v0,39,-29,67,-68,67v-39,0,-68,-28,-68,-67xm73,-252v-59,8,-43,125,14,124v56,-8,41,-123,-14,-124xm52,5r165,-257r15,0r-165,257r-15,0xm136,-63v0,-39,30,-67,68,-67v38,0,68,28,68,67v0,39,-29,67,-68,67v-39,0,-68,-28,-68,-67xm198,-125v-59,8,-43,125,14,124v56,-9,41,-122,-14,-124","w":283},"&":{"d":"45,-104v-3,72,85,119,140,70r-98,-121v-27,0,-41,24,-42,51xm196,-51v15,-25,23,-38,24,-65v1,-19,-11,-18,-27,-17r0,-9r78,0r0,9v-30,-2,-31,4,-41,39v-4,15,-13,33,-28,52v20,31,67,32,81,1r8,0r-18,41v-40,1,-64,-1,-82,-28v-15,17,-41,31,-73,31v-94,0,-127,-148,-38,-168v-39,-38,8,-117,59,-83v4,0,4,-11,14,-8r17,50r-8,0v-7,-36,-78,-57,-78,-9v0,15,5,31,18,47","w":295},"'":{"d":"32,-277v11,0,15,7,14,19r-11,63r-6,0r-11,-69v0,-9,4,-13,14,-13","w":60},"(":{"d":"109,65v-37,-39,-65,-101,-65,-171v0,-70,28,-132,65,-171r14,0v-69,80,-68,263,0,342r-14,0","w":133},")":{"d":"89,-106v0,70,-28,132,-65,171r-14,0v70,-79,70,-264,0,-342r14,0v37,39,65,101,65,171","w":133},"*":{"d":"88,-227v1,-19,-29,-47,2,-51v30,4,1,31,2,50v18,-7,42,-43,50,-7v-1,22,-31,5,-48,12v7,15,36,13,34,32v-1,7,-8,14,-18,13v-17,-1,-9,-32,-20,-42v-11,11,-3,41,-21,42v-8,-1,-17,-7,-18,-16v2,-15,28,-15,35,-29v-16,-7,-48,11,-48,-11v0,-19,19,-25,30,-7v6,6,12,11,20,14","w":180},"+":{"d":"84,-213v9,-7,32,-1,46,-3v4,65,4,151,0,216v-15,-2,-37,4,-46,-3r0,-210xm3,-84v-7,-9,-1,-32,-3,-46v65,-4,151,-4,216,0v-2,15,4,37,-3,46r-210,0"},",":{"d":"42,-45v41,11,19,97,-14,98v10,-19,31,-60,-7,-69v0,-16,15,-19,21,-29","w":97},"-":{"d":"3,-84v-7,-9,-1,-32,-3,-46v65,-4,151,-4,216,0v-2,15,4,37,-3,46r-210,0","w":117},"\u00ad":{"d":"3,-84v-7,-9,-1,-32,-3,-46v65,-4,151,-4,216,0v-2,15,4,37,-3,46r-210,0","w":117},".":{"d":"24,-19v-3,-13,16,-31,26,-25v5,8,23,15,14,26v-7,5,-15,25,-24,16","w":97},"\/":{"d":"16,9r-14,0r95,-261r14,0","w":100},"0":{"d":"89,4v-102,-11,-101,-248,0,-260v103,12,102,248,0,260xm41,-143v0,58,9,128,57,138v31,-9,40,-59,39,-104v-1,-57,-10,-128,-57,-138v-31,9,-39,61,-39,104"},"1":{"d":"41,0r0,-9v29,3,35,-3,35,-41r0,-140v2,-23,-17,-23,-38,-22r0,-9v34,-7,54,-18,58,-31r9,0r0,202v1,37,6,44,35,41r0,9r-99,0"},"2":{"d":"27,-228v32,-51,128,-23,128,46v0,31,-37,84,-110,161v43,-3,93,11,111,-20r9,0r-19,41r-126,0r0,-9v71,-79,107,-137,107,-173v0,-56,-66,-81,-96,-37v-6,2,-4,-5,-4,-9"},"3":{"d":"23,-36v1,22,28,32,53,32v65,0,68,-119,12,-132r0,-3v41,-11,53,-108,-3,-108v-15,0,-32,12,-31,28r-8,0r0,-28v39,-22,110,-4,104,50v-3,27,-21,42,-45,54v24,4,52,39,52,72v0,38,-43,77,-82,75v-33,-1,-67,-3,-60,-40r8,0"},"4":{"d":"105,-77r0,-121r-74,121r74,0xm130,-59v1,24,-8,59,26,50r0,9r-78,0r0,-9v31,8,28,-23,27,-50r-97,0r0,-7r116,-186r6,0r0,175v19,1,29,-7,37,-23r8,0r-18,41r-27,0"},"5":{"d":"125,-85v0,-43,-37,-72,-85,-65r26,-102v28,-3,77,8,89,-9r9,0r-11,30r-76,0r-18,73v47,-2,97,32,97,75v0,50,-38,87,-83,87v-32,0,-66,-3,-59,-40r8,0v0,23,27,33,53,32v41,-1,50,-35,50,-81"},"6":{"d":"82,-144v-66,10,-44,141,16,142v27,1,40,-32,40,-61v0,-40,-24,-79,-56,-81xm100,4v-104,0,-102,-134,-50,-205v26,-36,55,-55,91,-55r0,8v-53,7,-84,58,-99,114v44,-40,127,-3,123,61v-2,41,-28,77,-65,77"},"7":{"d":"130,-231v-40,3,-91,-12,-104,20r-9,0r18,-41r126,0r0,9v-43,101,-65,172,-65,212v-1,25,12,22,32,22r0,9r-72,0r0,-9v18,2,25,-2,25,-23v2,-35,19,-101,49,-199"},"8":{"d":"49,-205v2,35,11,49,48,59v51,-10,36,-107,-15,-105v-21,2,-35,22,-33,46xm137,-61v0,-41,-16,-66,-54,-77v-58,12,-53,137,15,137v25,0,39,-28,39,-60xm152,-197v0,27,-17,48,-40,54v28,11,53,35,53,72v0,43,-33,75,-76,75v-43,0,-76,-31,-75,-75v0,-37,24,-61,52,-72v-22,-7,-40,-27,-40,-54v0,-34,28,-59,63,-59v35,0,63,24,63,59"},"9":{"d":"96,-108v67,-10,45,-142,-16,-142v-27,0,-39,32,-39,61v0,40,24,79,55,81xm79,-256v104,0,102,134,49,205v-26,35,-55,55,-91,55r0,-8v53,-7,84,-58,99,-114v-44,40,-122,3,-122,-61v0,-42,27,-77,65,-77"},":":{"d":"24,-19v-3,-13,16,-31,26,-25v5,8,23,15,14,26v-7,5,-15,25,-24,16xm24,-141v-2,-13,14,-28,26,-25v5,8,22,15,14,26v-7,5,-13,23,-24,17","w":97},";":{"d":"24,-141v-3,-13,15,-31,26,-24v5,7,23,15,14,25v-7,5,-13,23,-24,17xm42,-45v41,11,19,97,-14,98v10,-19,31,-60,-7,-69v0,-16,15,-19,21,-29","w":97},"\u037e":{"d":"24,-141v-3,-13,15,-31,26,-24v5,7,23,15,14,25v-7,5,-13,23,-24,17xm42,-45v41,11,19,97,-14,98v10,-19,31,-60,-7,-69v0,-16,15,-19,21,-29","w":97},"<":{"d":"78,-107r100,104r0,4r-40,0r-103,-103r0,-5r107,-107v13,2,34,-4,40,4","w":216},"=":{"d":"116,-213v9,-6,39,-5,49,0r0,210v-10,7,-32,1,-47,3v-7,-65,0,-144,-2,-213xm23,-213v9,-7,32,-1,46,-3v4,65,4,151,0,216v-15,-2,-37,4,-46,-3r0,-210","w":186},">":{"d":"0,-211v6,-8,27,-2,40,-4r107,107r0,4r-103,103r-40,0r0,-3r100,-104","w":149},"?":{"d":"3,-216v1,2,63,38,184,106v-2,9,-66,42,-187,110r0,-213","w":186},"@":{"d":"171,-109v-53,4,-50,102,5,98v33,-3,19,-75,22,-113v-6,7,-15,14,-27,15xm331,-112v0,55,-48,105,-92,107v-15,0,-22,-4,-28,-13v-37,45,-133,-11,-94,-72v15,-23,50,-22,73,-36v19,-12,2,-45,-22,-45v-15,0,-30,17,-30,32r-8,0r0,-27v25,-20,93,-12,93,28r0,104v0,14,5,20,16,20v45,0,62,-50,62,-101v0,-71,-54,-130,-126,-128v-77,2,-126,69,-128,150v-3,134,132,203,234,121r0,13v-107,78,-267,3,-263,-130v3,-94,69,-161,162,-163v81,-3,151,62,151,140","w":354},"A":{"d":"185,-214v5,64,3,149,0,214v-112,-60,-77,-62,-181,-59r-4,-4r0,-88r4,-4v101,4,79,-2,181,-59xm257,-172v0,-7,4,-10,9,-12v52,39,56,112,3,155v-8,1,-13,-2,-12,-11v44,-41,45,-89,0,-132xm235,-166v43,29,43,86,2,119v-6,0,-10,-3,-11,-9v35,-32,32,-68,0,-98v-1,-8,1,-8,9,-12xm213,-145v13,12,20,26,20,44v-10,29,-17,44,-32,27v13,-21,25,-39,0,-60v-1,-9,1,-9,12,-11","w":270},"B":{"d":"184,-214v5,64,3,149,0,214v-112,-60,-76,-62,-180,-59r-4,-4r0,-88r4,-4v101,4,78,-2,180,-59xm201,-149v4,-3,4,-11,12,-10r42,40r39,-40v8,0,11,4,13,10r-40,42v13,15,29,27,40,44v-4,3,-5,8,-13,7r-41,-39r-40,39v-7,1,-8,-4,-12,-7r39,-44","w":214},"C":{"w":245},"D":{"w":266},"E":{"w":202},"F":{"d":"64,-265r153,0v13,2,19,8,19,19r0,98r-4,3r-184,0r-3,-3r0,-93v2,-16,8,-24,19,-24xm205,-232r-127,1v0,2,2,4,0,5r127,0v-4,-1,1,-3,0,-6xm78,-200v2,2,-1,4,0,7v41,-2,90,4,127,-2v-3,0,-2,-4,0,-5r-127,0xm205,-169v-41,2,-90,-4,-127,2v2,2,-1,4,0,7v41,-2,90,4,127,-2v-4,-1,2,-4,0,-7xm24,-138r234,0v45,7,16,74,24,116v-4,15,-11,22,-22,22r-236,0v-16,-2,-24,-9,-24,-21r0,-96v0,-12,8,-21,24,-21xm83,-124v-6,3,-7,24,0,28r25,0r0,-28r-25,0xm129,-124v-5,5,-5,23,0,28r26,0r0,-28r-26,0xm174,-124r0,28r27,0r0,-28r-27,0xm83,-83v-6,4,-7,25,0,30v9,-1,22,3,25,-4v-1,-9,2,-22,-3,-26r-22,0xm129,-83v-6,5,-3,20,-2,30v9,-1,25,3,28,-4r0,-26r-26,0xm174,-83r0,30v9,-1,24,3,27,-4r0,-26r-27,0xm84,-41v-7,3,-8,25,-1,29r25,0v-1,-10,3,-24,-3,-29r-21,0xm131,-41v-7,3,-8,23,-2,29r26,0v-1,-10,3,-24,-3,-29r-21,0xm177,-41v-6,5,-2,20,-3,29r27,0v-1,-10,3,-24,-3,-29r-21,0","w":281},"G":{"w":259},"H":{"w":277},"I":{"w":115},"J":{"w":115},"K":{"w":242},"L":{"w":198},"M":{"d":"23,-252r245,0v14,2,21,8,21,20v-86,90,-133,135,-139,135r-11,0v-4,0,-50,-45,-137,-135v2,-14,9,-20,21,-20xm292,-201v7,45,0,103,2,152r-5,5r-76,-79xm0,-46v2,-49,-4,-108,2,-153r77,76v-27,25,-50,54,-79,77xm93,-107r4,0v52,42,45,40,100,0r4,0r88,91v-5,11,-12,16,-21,16r-245,0v-14,-2,-21,-8,-21,-18","w":294},"N":{"w":273},"O":{"d":"17,-173v-41,-65,38,-146,110,-106v98,-14,173,58,160,167v34,65,-43,139,-110,104v-95,17,-172,-58,-160,-165xm72,-106v0,67,146,77,158,13v9,-49,-16,-60,-76,-75v-47,-2,-48,-41,-9,-42v23,-1,33,7,43,28v11,14,35,4,35,-11v0,-28,-35,-43,-76,-46v-72,-6,-101,83,-28,101v51,13,68,13,70,34v1,14,-17,24,-42,24v-19,0,-32,-11,-39,-33v-11,-15,-36,-8,-36,7","w":295},"P":{"w":196},"Q":{"w":283},"R":{"d":"1,-107v-12,-49,17,-82,73,-85v32,-2,61,27,65,68v3,36,-26,71,-70,71v-32,0,-59,-17,-68,-54xm216,-192v48,-4,75,17,81,69v4,36,-25,67,-70,70v-35,2,-69,-24,-69,-71v0,-34,19,-57,58,-68","w":225},"S":{"d":"166,-65v-58,7,-98,-32,-101,-101v-2,-42,37,-86,101,-86v42,0,86,37,86,100v0,41,-33,80,-86,87xm97,-157v-3,31,24,57,63,60v34,2,56,-23,62,-62v-8,-42,-28,-62,-65,-61v-34,0,-56,21,-60,63xm65,-104v9,15,21,26,37,35r0,4v-42,44,-60,66,-72,65v-8,0,-29,-12,-30,-34v0,-7,22,-30,65,-70","w":253},"T":{"d":"35,-97v-4,22,43,28,43,50v0,4,-16,26,-47,47v-25,-13,-31,-24,-31,-52v0,-41,24,-95,82,-145v51,-45,83,-57,130,-55v17,0,30,10,40,31v2,4,-20,29,-48,47v-11,7,-28,-44,-47,-43v-7,0,-22,16,-51,45v-46,46,-71,70,-71,75","w":250},"U":{"w":263},"V":{"w":255},"W":{"w":356},"X":{"w":237},"Y":{"w":216},"Z":{"w":197},"[":{"w":133},"\\":{"w":100},"]":{"w":133},"^":{"d":"108,-136r-103,99r-4,0r0,-40r103,-103r4,0r108,107v-2,13,5,35,-5,40","w":214},"_":{"d":"211,-180v10,5,3,27,5,40r-108,107r-4,0r-103,-103r0,-40r4,0r103,99","w":180},"`":{"d":"40,-232v-9,-10,5,-27,17,-18v22,16,41,41,61,60v-36,-4,-53,-27,-78,-42","w":180},"a":{"w":162},"b":{"w":174},"c":{"w":159},"d":{"w":182},"e":{"w":159},"f":{"d":"31,-219v-3,-77,11,-108,75,-108v22,0,39,3,50,7v-4,16,-4,35,-10,49v-26,-7,-50,-7,-51,20r0,32r54,0v-2,16,0,36,-4,50r-50,0r-1,169v-20,-1,-44,2,-63,-1r0,-168v-11,-1,-26,3,-33,-2v2,-15,-3,-37,2,-48r31,0","w":157},"g":{"d":"19,-170v-2,-45,42,-81,92,-81r89,0r3,3v0,4,-14,8,-41,12v41,25,34,100,-13,122v-20,27,2,24,34,59v56,61,-4,135,-91,130v-53,-3,-91,-17,-91,-72v0,-42,57,-62,111,-65v0,-3,-5,-9,-13,-19r0,-20v-48,4,-78,-23,-80,-69xm269,-249v2,-3,14,-3,17,0r0,54v18,1,42,-3,57,2v-1,6,2,14,-2,17r-55,0v-1,18,3,42,-2,56v-6,0,-14,2,-15,-3r0,-53v-18,-1,-42,3,-57,-2v1,-6,-2,-14,2,-17r55,0r0,-54xm99,-234v-26,-5,-39,25,-39,47v0,33,14,67,53,67v19,0,30,-16,33,-48v2,-27,-18,-60,-47,-66xm40,-9v-12,37,16,60,65,60v34,0,64,-15,68,-52v-8,-60,-115,-60,-133,-8","w":283},"h":{"w":194},"i":{"w":90},"j":{"w":89},"k":{"w":180},"l":{"d":"18,-253r222,0v8,4,13,13,13,26r0,204v0,15,-7,23,-20,23r-215,0v-12,0,-18,-6,-18,-18r0,-217v0,-12,6,-18,18,-18xm56,-210v-7,0,-19,6,-18,20v1,24,36,24,40,0v-3,-13,-10,-20,-22,-20xm212,-91v4,-68,-43,-80,-78,-51r0,-12r-35,0r0,111r35,0v4,-33,-15,-92,28,-86v18,-1,15,59,15,86r35,0r0,-48xm40,-154r0,111r36,0r0,-111r-36,0","w":252},"m":{"d":"188,-292v37,-3,55,11,60,49v4,27,-21,49,-52,49v-24,0,-46,-19,-46,-54v0,-20,13,-35,38,-44xm111,-275v49,6,44,70,-2,72v-21,1,-35,-13,-35,-39v0,-18,12,-29,37,-33xm9,-235v-2,-43,59,-35,59,-5v0,20,-8,29,-29,34v-20,-4,-30,-13,-30,-29xm155,-171v70,-40,124,7,110,112v-3,19,3,44,-2,60r-130,0v-5,-16,0,-42,-2,-61v-23,-1,-52,3,-71,-2r0,-28v-20,-1,-45,3,-61,-2v3,-50,-15,-111,40,-111v12,0,24,7,36,20v26,-23,59,-18,80,12","w":266},"n":{"w":194},"o":{"w":177},"p":{"w":177},"q":{"w":180},"r":{"d":"202,1v6,-101,-93,-204,-201,-203v1,-16,-2,-34,1,-48v134,-4,255,120,248,252v-16,-1,-34,2,-48,-1xm119,1v-1,-55,-50,-116,-118,-118v2,-15,-3,-37,2,-48v80,-5,169,80,162,166r-46,0xm28,-66v24,-4,40,9,40,34v0,17,-11,33,-35,33v-35,0,-46,-61,-5,-67","w":251},"s":{"d":"17,-173v-41,-65,38,-146,110,-106v98,-14,173,58,160,167v34,65,-43,139,-110,104v-95,17,-172,-58,-160,-165xm72,-106v0,67,146,77,158,13v9,-49,-16,-60,-76,-75v-47,-2,-48,-41,-9,-42v23,-1,33,7,43,28v11,14,35,4,35,-11v0,-28,-35,-43,-76,-46v-72,-6,-101,83,-28,101v51,13,68,13,70,34v1,14,-17,24,-42,24v-19,0,-32,-11,-39,-33v-11,-15,-36,-8,-36,7","w":295},"t":{"d":"152,-1v-85,7,-153,-11,-153,-87r0,-134v-3,-32,54,-43,61,-7v3,11,2,27,2,41v49,7,124,-23,124,33v0,45,-81,24,-125,29v-10,64,28,61,96,61v13,0,28,16,28,34v0,17,-11,28,-33,30","w":186},"u":{"d":"33,-252r189,0v16,0,30,12,30,35r0,182v-4,23,-15,35,-35,35r-182,0v-23,-4,-35,-14,-35,-30r0,-190v3,-22,14,-32,33,-32xm20,-178r0,32v9,0,19,-2,21,5v1,53,-11,117,46,117v21,0,39,-1,56,-4r0,-35v-22,12,-39,13,-54,-2r0,-76v8,-10,32,-3,48,-5r0,-32v-16,-2,-39,4,-48,-4r0,-46v-25,0,-29,-5,-33,26v-9,16,-20,24,-36,24xm202,-80v-37,3,-29,61,4,56v37,-4,37,-55,-4,-56","w":252},"v":{"d":"39,-252r166,-1v24,0,48,19,48,51r0,148v0,29,-18,53,-54,54r-148,0v-25,0,-42,-14,-51,-42r0,-163v0,-22,13,-38,39,-47xm105,-34v27,11,99,-85,104,-140v1,-15,-10,-24,-30,-25v-18,-1,-49,19,-48,47v12,-1,25,-1,20,15v-9,30,-13,43,-30,41v-18,5,-10,-112,-44,-97v-10,0,-28,12,-55,38v4,17,14,13,28,9v5,0,10,13,16,38v11,49,24,74,39,74","w":253},"w":{"w":248},"x":{"w":177},"y":{"d":"19,-323v38,-5,17,8,37,54v16,-49,0,-60,35,-53v-29,86,-24,67,-26,137v-7,-1,-17,2,-21,-2v1,-68,1,-50,-25,-136xm89,-264v-1,-31,55,-36,55,-5v0,33,13,86,-29,86v-33,0,-25,-48,-26,-81xm160,-286v4,-2,15,-2,20,0v1,27,-3,60,2,83v7,1,8,-2,13,-8v2,-24,-4,-56,2,-76v5,1,13,-1,17,1r-1,101v-9,0,-21,3,-18,-11v-12,14,-31,19,-35,-2r0,-88xm115,-272v-12,12,-2,45,-5,65v1,4,2,6,7,6v16,-5,8,-41,8,-60v0,-7,-3,-11,-10,-11xm0,-71v0,-56,-6,-97,46,-98r86,-1v65,0,97,2,97,5v25,11,23,40,23,81v-1,73,2,82,-52,83r-89,1v-60,0,-90,-2,-90,-6v-19,-6,-22,-38,-21,-65xm18,-140r0,15v5,1,13,-1,17,1r0,94r17,0r1,-95r17,0r0,-15r-52,0xm128,-140r0,110v7,0,15,2,16,-5v13,11,28,9,28,-18v0,-29,2,-78,-29,-52r0,-35r-15,0xm207,-113v-32,2,-23,34,-23,62v0,14,8,23,23,24v16,0,23,-12,22,-31r-15,0v2,23,-15,22,-15,2v0,-4,-1,-11,1,-13r29,0v1,-23,0,-46,-22,-44xm70,-111r0,72v3,18,18,12,28,1r0,8r15,0r0,-81r-15,0r0,62v-4,5,-9,8,-13,4r0,-66r-15,0xm143,-96v4,-6,13,-6,14,3r0,45v1,9,-10,9,-14,3r0,-51xm200,-81v-3,-7,-1,-21,7,-18v4,-1,7,7,7,17v-3,2,-9,1,-14,1","w":221},"z":{"w":127},"{":{"d":"90,6v-4,-55,18,-124,-48,-118r0,-11v66,5,44,-63,48,-118v3,-25,31,-42,65,-37r0,9v-22,-2,-41,3,-43,22v-2,54,13,124,-35,130v50,4,34,78,35,129v1,19,21,24,43,22r0,9v-34,4,-63,-11,-65,-37"},"|":{"d":"75,-277r28,0r0,350r-28,0r0,-350"},"}":{"d":"88,-241v4,55,-18,124,48,118r0,11v-66,-5,-44,63,-48,118v-3,25,-31,42,-65,37r0,-9v22,2,42,-3,43,-22v2,-54,-13,-125,36,-130v-50,-2,-34,-77,-36,-129v-1,-19,-21,-24,-43,-22r0,-9v34,-4,63,11,65,37"},"~":{"d":"17,-125v22,-39,71,-11,103,-5v19,-2,28,-9,42,-24r0,27v-11,13,-23,21,-42,22v-11,2,-50,-19,-62,-17v-19,2,-28,9,-41,24r0,-27"},"\u00ab":{"d":"44,-107r99,104r0,4r-40,0r-103,-103r0,-5r107,-107v13,2,34,-4,40,4xm114,-107r100,104r0,4r-40,0r-104,-103r0,-5r108,-107v13,2,34,-4,40,4","w":217},"\u00bb":{"d":"70,-210v7,-8,27,-3,40,-4r108,107r0,5r-104,103r-39,0r0,-4r99,-104xm0,-210v6,-8,27,-2,40,-4r107,107r0,5r-103,103r-40,0r0,-4r99,-104","w":218}}});

;addComment={moveForm:function(d,f,i,c){var m=this,a,h=m.I(d),b=m.I(i),l=m.I("cancel-comment-reply-link"),j=m.I("comment_parent"),k=m.I("comment_post_ID");if(!h||!b||!l||!j){return}m.respondId=i;c=c||false;if(!m.I("wp-temp-form-div")){a=document.createElement("div");a.id="wp-temp-form-div";a.style.display="none";b.parentNode.insertBefore(a,b)}h.parentNode.insertBefore(b,h.nextSibling);if(k&&c){k.value=c}j.value=f;l.style.display="";l.onclick=function(){var n=addComment,e=n.I("wp-temp-form-div"),o=n.I(n.respondId);if(!e||!o){return}n.I("comment_parent").value="0";e.parentNode.insertBefore(o,e);e.parentNode.removeChild(e);this.style.display="none";this.onclick=null;return false};try{m.I("comment").focus()}catch(g){}return false},I:function(a){return document.getElementById(a)}};