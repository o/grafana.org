define(["./core","./var/strundefined","./var/rnotwhite","./var/hasOwn","./var/slice","./event/support","./data/var/data_priv","./core/init","./data/accepts","./selector"],function(e,t,n,i,r,o,s){function a(){return!0}function c(){return!1}function u(){try{return document.activeElement}catch(e){}}var l=/^key/,d=/^(?:mouse|pointer|contextmenu)|click/,p=/^(?:focusinfocus|focusoutblur)$/,f=/^([^.]*)(?:\.(.+)|)$/;return e.event={global:{},add:function(i,r,o,a,c){var u,l,d,p,h,v,g,m,y,x,b,k=s.get(i);if(k)for(o.handler&&(u=o,o=u.handler,c=u.selector),o.guid||(o.guid=e.guid++),(p=k.events)||(p=k.events={}),(l=k.handle)||(l=k.handle=function(n){return typeof e!==t&&e.event.triggered!==n.type?e.event.dispatch.apply(i,arguments):void 0}),r=(r||"").match(n)||[""],h=r.length;h--;)d=f.exec(r[h])||[],y=b=d[1],x=(d[2]||"").split(".").sort(),y&&(g=e.event.special[y]||{},y=(c?g.delegateType:g.bindType)||y,g=e.event.special[y]||{},v=e.extend({type:y,origType:b,data:a,handler:o,guid:o.guid,selector:c,needsContext:c&&e.expr.match.needsContext.test(c),namespace:x.join(".")},u),(m=p[y])||(m=p[y]=[],m.delegateCount=0,g.setup&&g.setup.call(i,a,x,l)!==!1||i.addEventListener&&i.addEventListener(y,l,!1)),g.add&&(g.add.call(i,v),v.handler.guid||(v.handler.guid=o.guid)),c?m.splice(m.delegateCount++,0,v):m.push(v),e.event.global[y]=!0)},remove:function(t,i,r,o,a){var c,u,l,d,p,h,v,g,m,y,x,b=s.hasData(t)&&s.get(t);if(b&&(d=b.events)){for(i=(i||"").match(n)||[""],p=i.length;p--;)if(l=f.exec(i[p])||[],m=x=l[1],y=(l[2]||"").split(".").sort(),m){for(v=e.event.special[m]||{},m=(o?v.delegateType:v.bindType)||m,g=d[m]||[],l=l[2]&&new RegExp("(^|\\.)"+y.join("\\.(?:.*\\.|)")+"(\\.|$)"),u=c=g.length;c--;)h=g[c],!a&&x!==h.origType||r&&r.guid!==h.guid||l&&!l.test(h.namespace)||o&&o!==h.selector&&("**"!==o||!h.selector)||(g.splice(c,1),h.selector&&g.delegateCount--,v.remove&&v.remove.call(t,h));u&&!g.length&&(v.teardown&&v.teardown.call(t,y,b.handle)!==!1||e.removeEvent(t,m,b.handle),delete d[m])}else for(m in d)e.event.remove(t,m+i[p],r,o,!0);e.isEmptyObject(d)&&(delete b.handle,s.remove(t,"events"))}},trigger:function(t,n,r,o){var a,c,u,l,d,f,h,v=[r||document],g=i.call(t,"type")?t.type:t,m=i.call(t,"namespace")?t.namespace.split("."):[];if(c=u=r=r||document,3!==r.nodeType&&8!==r.nodeType&&!p.test(g+e.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),d=g.indexOf(":")<0&&"on"+g,t=t[e.expando]?t:new e.Event(g,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=m.join("."),t.namespace_re=t.namespace?new RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=r),n=null==n?[t]:e.makeArray(n,[t]),h=e.event.special[g]||{},o||!h.trigger||h.trigger.apply(r,n)!==!1)){if(!o&&!h.noBubble&&!e.isWindow(r)){for(l=h.delegateType||g,p.test(l+g)||(c=c.parentNode);c;c=c.parentNode)v.push(c),u=c;u===(r.ownerDocument||document)&&v.push(u.defaultView||u.parentWindow||window)}for(a=0;(c=v[a++])&&!t.isPropagationStopped();)t.type=a>1?l:h.bindType||g,f=(s.get(c,"events")||{})[t.type]&&s.get(c,"handle"),f&&f.apply(c,n),f=d&&c[d],f&&f.apply&&e.acceptData(c)&&(t.result=f.apply(c,n),t.result===!1&&t.preventDefault());return t.type=g,o||t.isDefaultPrevented()||h._default&&h._default.apply(v.pop(),n)!==!1||!e.acceptData(r)||d&&e.isFunction(r[g])&&!e.isWindow(r)&&(u=r[d],u&&(r[d]=null),e.event.triggered=g,r[g](),e.event.triggered=void 0,u&&(r[d]=u)),t.result}},dispatch:function(t){t=e.event.fix(t);var n,i,o,a,c,u=[],l=r.call(arguments),d=(s.get(this,"events")||{})[t.type]||[],p=e.event.special[t.type]||{};if(l[0]=t,t.delegateTarget=this,!p.preDispatch||p.preDispatch.call(this,t)!==!1){for(u=e.event.handlers.call(this,t,d),n=0;(a=u[n++])&&!t.isPropagationStopped();)for(t.currentTarget=a.elem,i=0;(c=a.handlers[i++])&&!t.isImmediatePropagationStopped();)(!t.namespace_re||t.namespace_re.test(c.namespace))&&(t.handleObj=c,t.data=c.data,o=((e.event.special[c.origType]||{}).handle||c.handler).apply(a.elem,l),void 0!==o&&(t.result=o)===!1&&(t.preventDefault(),t.stopPropagation()));return p.postDispatch&&p.postDispatch.call(this,t),t.result}},handlers:function(t,n){var i,r,o,s,a=[],c=n.delegateCount,u=t.target;if(c&&u.nodeType&&(!t.button||"click"!==t.type))for(;u!==this;u=u.parentNode||this)if(u.disabled!==!0||"click"!==t.type){for(r=[],i=0;c>i;i++)s=n[i],o=s.selector+" ",void 0===r[o]&&(r[o]=s.needsContext?e(o,this).index(u)>=0:e.find(o,this,null,[u]).length),r[o]&&r.push(s);r.length&&a.push({elem:u,handlers:r})}return c<n.length&&a.push({elem:this,handlers:n.slice(c)}),a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,i,r,o=t.button;return null==e.pageX&&null!=t.clientX&&(n=e.target.ownerDocument||document,i=n.documentElement,r=n.body,e.pageX=t.clientX+(i&&i.scrollLeft||r&&r.scrollLeft||0)-(i&&i.clientLeft||r&&r.clientLeft||0),e.pageY=t.clientY+(i&&i.scrollTop||r&&r.scrollTop||0)-(i&&i.clientTop||r&&r.clientTop||0)),e.which||void 0===o||(e.which=1&o?1:2&o?3:4&o?2:0),e}},fix:function(t){if(t[e.expando])return t;var n,i,r,o=t.type,s=t,a=this.fixHooks[o];for(a||(this.fixHooks[o]=a=d.test(o)?this.mouseHooks:l.test(o)?this.keyHooks:{}),r=a.props?this.props.concat(a.props):this.props,t=new e.Event(s),n=r.length;n--;)i=r[n],t[i]=s[i];return t.target||(t.target=document),3===t.target.nodeType&&(t.target=t.target.parentNode),a.filter?a.filter(t,s):t},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==u()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===u()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&e.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(t){return e.nodeName(t.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}},simulate:function(t,n,i,r){var o=e.extend(new e.Event,i,{type:t,isSimulated:!0,originalEvent:{}});r?e.event.trigger(o,null,n):e.event.dispatch.call(n,o),o.isDefaultPrevented()&&i.preventDefault()}},e.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)},e.Event=function(t,n){return this instanceof e.Event?(t&&t.type?(this.originalEvent=t,this.type=t.type,this.isDefaultPrevented=t.defaultPrevented||void 0===t.defaultPrevented&&t.returnValue===!1?a:c):this.type=t,n&&e.extend(this,n),this.timeStamp=t&&t.timeStamp||e.now(),this[e.expando]=!0,void 0):new e.Event(t,n)},e.Event.prototype={isDefaultPrevented:c,isPropagationStopped:c,isImmediatePropagationStopped:c,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=a,e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=a,e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=a,e&&e.stopImmediatePropagation&&e.stopImmediatePropagation(),this.stopPropagation()}},e.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(t,n){e.event.special[t]={delegateType:n,bindType:n,handle:function(t){var i,r=this,o=t.relatedTarget,s=t.handleObj;return(!o||o!==r&&!e.contains(r,o))&&(t.type=s.origType,i=s.handler.apply(this,arguments),t.type=n),i}}}),o.focusinBubbles||e.each({focus:"focusin",blur:"focusout"},function(t,n){var i=function(t){e.event.simulate(n,t.target,e.event.fix(t),!0)};e.event.special[n]={setup:function(){var e=this.ownerDocument||this,r=s.access(e,n);r||e.addEventListener(t,i,!0),s.access(e,n,(r||0)+1)},teardown:function(){var e=this.ownerDocument||this,r=s.access(e,n)-1;r?s.access(e,n,r):(e.removeEventListener(t,i,!0),s.remove(e,n))}}}),e.fn.extend({on:function(t,n,i,r,o){var s,a;if("object"==typeof t){"string"!=typeof n&&(i=i||n,n=void 0);for(a in t)this.on(a,n,i,t[a],o);return this}if(null==i&&null==r?(r=n,i=n=void 0):null==r&&("string"==typeof n?(r=i,i=void 0):(r=i,i=n,n=void 0)),r===!1)r=c;else if(!r)return this;return 1===o&&(s=r,r=function(t){return e().off(t),s.apply(this,arguments)},r.guid=s.guid||(s.guid=e.guid++)),this.each(function(){e.event.add(this,t,r,i,n)})},one:function(e,t,n,i){return this.on(e,t,n,i,1)},off:function(t,n,i){var r,o;if(t&&t.preventDefault&&t.handleObj)return r=t.handleObj,e(t.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof t){for(o in t)this.off(o,n,t[o]);return this}return(n===!1||"function"==typeof n)&&(i=n,n=void 0),i===!1&&(i=c),this.each(function(){e.event.remove(this,t,i,n)})},trigger:function(t,n){return this.each(function(){e.event.trigger(t,n,this)})},triggerHandler:function(t,n){var i=this[0];return i?e.event.trigger(t,n,i,!0):void 0}}),e});