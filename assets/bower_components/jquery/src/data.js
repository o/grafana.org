define(["./core","./var/rnotwhite","./core/access","./data/var/data_priv","./data/var/data_user"],function(t,e,n,i,r){function o(e,n,i){var o;if(void 0===i&&1===e.nodeType)if(o="data-"+n.replace(a,"-$1").toLowerCase(),i=e.getAttribute(o),"string"==typeof i){try{i="true"===i?!0:"false"===i?!1:"null"===i?null:+i+""===i?+i:s.test(i)?t.parseJSON(i):i}catch(u){}r.set(e,n,i)}else i=void 0;return i}var s=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,a=/([A-Z])/g;return t.extend({hasData:function(t){return r.hasData(t)||i.hasData(t)},data:function(t,e,n){return r.access(t,e,n)},removeData:function(t,e){r.remove(t,e)},_data:function(t,e,n){return i.access(t,e,n)},_removeData:function(t,e){i.remove(t,e)}}),t.fn.extend({data:function(e,s){var a,u,c,l=this[0],f=l&&l.attributes;if(void 0===e){if(this.length&&(c=r.get(l),1===l.nodeType&&!i.get(l,"hasDataAttrs"))){for(a=f.length;a--;)f[a]&&(u=f[a].name,0===u.indexOf("data-")&&(u=t.camelCase(u.slice(5)),o(l,u,c[u])));i.set(l,"hasDataAttrs",!0)}return c}return"object"==typeof e?this.each(function(){r.set(this,e)}):n(this,function(n){var i,s=t.camelCase(e);if(l&&void 0===n){if(i=r.get(l,e),void 0!==i)return i;if(i=r.get(l,s),void 0!==i)return i;if(i=o(l,s,void 0),void 0!==i)return i}else this.each(function(){var t=r.get(this,s);r.set(this,s,n),-1!==e.indexOf("-")&&void 0!==t&&r.set(this,e,n)})},null,s,arguments.length>1,null,!0)},removeData:function(t){return this.each(function(){r.remove(this,t)})}}),t});