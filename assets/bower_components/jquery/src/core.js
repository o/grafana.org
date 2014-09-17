define(["./var/arr","./var/slice","./var/concat","./var/push","./var/indexOf","./var/class2type","./var/toString","./var/hasOwn","./var/support"],function(e,t,n,r,i,o,s,a,u){function c(e){var t=e.length,n=d.type(e);return"function"===n||d.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e}var l=window.document,f="@VERSION",d=function(e,t){return new d.fn.init(e,t)},p=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,h=/^-ms-/,m=/-([\da-z])/gi,g=function(e,t){return t.toUpperCase()};return d.fn=d.prototype={jquery:f,constructor:d,selector:"",length:0,toArray:function(){return t.call(this)},get:function(e){return null!=e?0>e?this[e+this.length]:this[e]:t.call(this)},pushStack:function(e){var t=d.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return d.each(this,e,t)},map:function(e){return this.pushStack(d.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(t.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:r,sort:e.sort,splice:e.splice},d.extend=d.fn.extend=function(){var e,t,n,r,i,o,s=arguments[0]||{},a=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[a]||{},a++),"object"==typeof s||d.isFunction(s)||(s={}),a===u&&(s=this,a--);u>a;a++)if(null!=(e=arguments[a]))for(t in e)n=s[t],r=e[t],s!==r&&(c&&r&&(d.isPlainObject(r)||(i=d.isArray(r)))?(i?(i=!1,o=n&&d.isArray(n)?n:[]):o=n&&d.isPlainObject(n)?n:{},s[t]=d.extend(c,o,r)):void 0!==r&&(s[t]=r));return s},d.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isFunction:function(e){return"function"===d.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){return!d.isArray(e)&&e-parseFloat(e)>=0},isPlainObject:function(e){return"object"!==d.type(e)||e.nodeType||d.isWindow(e)?!1:e.constructor&&!a.call(e.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?o[s.call(e)]||"object":typeof e},globalEval:function(e){var t,n=eval;e=d.trim(e),e&&(1===e.indexOf("use strict")?(t=l.createElement("script"),t.text=e,l.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(h,"ms-").replace(m,g)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,s=c(e);if(n){if(s)for(;o>i&&(r=t.apply(e[i],n),r!==!1);i++);else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(s)for(;o>i&&(r=t.call(e[i],i,e[i]),r!==!1);i++);else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:function(e){return null==e?"":(e+"").replace(p,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(c(Object(e))?d.merge(n,"string"==typeof e?[e]:e):r.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;n>r;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,s=e.length,a=!n;s>o;o++)r=!t(e[o],o),r!==a&&i.push(e[o]);return i},map:function(e,t,r){var i,o=0,s=e.length,a=c(e),u=[];if(a)for(;s>o;o++)i=t(e[o],o,r),null!=i&&u.push(i);else for(o in e)i=t(e[o],o,r),null!=i&&u.push(i);return n.apply([],u)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(r=e[n],n=e,e=r),d.isFunction(e)?(i=t.call(arguments,2),o=function(){return e.apply(n||this,i.concat(t.call(arguments)))},o.guid=e.guid=e.guid||d.guid++,o):void 0},now:Date.now,support:u}),d.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){o["[object "+t+"]"]=t.toLowerCase()}),d});