define(["./core","./manipulation/var/rcheckableType","./core/init","./traversing","./attributes/prop"],function(e,t){function n(t,r,i,a){var s;if(e.isArray(r))e.each(r,function(e,r){i||o.test(t)?a(t,r):n(t+"["+("object"==typeof r?e:"")+"]",r,i,a)});else if(i||"object"!==e.type(r))a(t,r);else for(s in r)n(t+"["+s+"]",r[s],i,a)}var r=/%20/g,o=/\[\]$/,i=/\r?\n/g,a=/^(?:submit|button|image|reset|file)$/i,s=/^(?:input|select|textarea|keygen)/i;return e.param=function(t,o){var i,a=[],s=function(t,n){n=e.isFunction(n)?n():null==n?"":n,a[a.length]=encodeURIComponent(t)+"="+encodeURIComponent(n)};if(void 0===o&&(o=e.ajaxSettings&&e.ajaxSettings.traditional),e.isArray(t)||t.jquery&&!e.isPlainObject(t))e.each(t,function(){s(this.name,this.value)});else for(i in t)n(i,t[i],o,s);return a.join("&").replace(r,"+")},e.fn.extend({serialize:function(){return e.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var t=e.prop(this,"elements");return t?e.makeArray(t):this}).filter(function(){var n=this.type;return this.name&&!e(this).is(":disabled")&&s.test(this.nodeName)&&!a.test(n)&&(this.checked||!t.test(n))}).map(function(t,n){var r=e(this).val();return null==r?null:e.isArray(r)?e.map(r,function(e){return{name:n.name,value:e.replace(i,"\r\n")}}):{name:n.name,value:r.replace(i,"\r\n")}}).get()}}),e});