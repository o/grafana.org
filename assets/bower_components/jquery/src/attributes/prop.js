define(["../core","../core/access","./support"],function(t,e,n){var i=/^(?:input|select|textarea|button)$/i;t.fn.extend({prop:function(n,i){return e(this,t.prop,n,i,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[t.propFix[e]||e]})}}),t.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(e,n,i){var s,r,o,a=e.nodeType;if(e&&3!==a&&8!==a&&2!==a)return o=1!==a||!t.isXMLDoc(e),o&&(n=t.propFix[n]||n,r=t.propHooks[n]),void 0!==i?r&&"set"in r&&void 0!==(s=r.set(e,i,n))?s:e[n]=i:r&&"get"in r&&null!==(s=r.get(e,n))?s:e[n]},propHooks:{tabIndex:{get:function(t){return t.hasAttribute("tabindex")||i.test(t.nodeName)||t.href?t.tabIndex:-1}}}}),n.optSelected||(t.propHooks.selected={get:function(t){var e=t.parentNode;return e&&e.parentNode&&e.parentNode.selectedIndex,null}}),t.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){t.propFix[this.toLowerCase()]=this})});