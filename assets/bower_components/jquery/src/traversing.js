define(["./core","./var/indexOf","./traversing/var/rneedsContext","./core/init","./traversing/findFilter","./selector"],function(t,e,n){function i(t,e){for(;(t=t[e])&&1!==t.nodeType;);return t}var r=/^(?:parents|prev(?:Until|All))/,s={children:!0,contents:!0,next:!0,prev:!0};return t.extend({dir:function(e,n,i){for(var r=[],s=void 0!==i;(e=e[n])&&9!==e.nodeType;)if(1===e.nodeType){if(s&&t(e).is(i))break;r.push(e)}return r},sibling:function(t,e){for(var n=[];t;t=t.nextSibling)1===t.nodeType&&t!==e&&n.push(t);return n}}),t.fn.extend({has:function(e){var n=t(e,this),i=n.length;return this.filter(function(){for(var e=0;i>e;e++)if(t.contains(this,n[e]))return!0})},closest:function(e,i){for(var r,s=0,o=this.length,c=[],a=n.test(e)||"string"!=typeof e?t(e,i||this.context):0;o>s;s++)for(r=this[s];r&&r!==i;r=r.parentNode)if(r.nodeType<11&&(a?a.index(r)>-1:1===r.nodeType&&t.find.matchesSelector(r,e))){c.push(r);break}return this.pushStack(c.length>1?t.unique(c):c)},index:function(n){return n?"string"==typeof n?e.call(t(n),this[0]):e.call(this,n.jquery?n[0]:n):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,n){return this.pushStack(t.unique(t.merge(this.get(),t(e,n))))},addBack:function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}}),t.each({parent:function(t){var e=t.parentNode;return e&&11!==e.nodeType?e:null},parents:function(e){return t.dir(e,"parentNode")},parentsUntil:function(e,n,i){return t.dir(e,"parentNode",i)},next:function(t){return i(t,"nextSibling")},prev:function(t){return i(t,"previousSibling")},nextAll:function(e){return t.dir(e,"nextSibling")},prevAll:function(e){return t.dir(e,"previousSibling")},nextUntil:function(e,n,i){return t.dir(e,"nextSibling",i)},prevUntil:function(e,n,i){return t.dir(e,"previousSibling",i)},siblings:function(e){return t.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return t.sibling(e.firstChild)},contents:function(e){return e.contentDocument||t.merge([],e.childNodes)}},function(e,n){t.fn[e]=function(i,o){var c=t.map(this,n,i);return"Until"!==e.slice(-5)&&(o=i),o&&"string"==typeof o&&(c=t.filter(o,c)),this.length>1&&(s[e]||t.unique(c),r.test(e)&&c.reverse()),this.pushStack(c)}}),t});