define(["./core","./var/strundefined","./core/access","./css/var/rnumnonpx","./css/curCSS","./css/addGetHookIf","./css/support","./core/init","./css","./selector"],function(t,e,n,i,r,o,s){function a(e){return t.isWindow(e)?e:9===e.nodeType&&e.defaultView}var c=window.document.documentElement;return t.offset={setOffset:function(e,n,i){var r,o,s,a,c,u,l,f=t.css(e,"position"),p=t(e),h={};"static"===f&&(e.style.position="relative"),c=p.offset(),s=t.css(e,"top"),u=t.css(e,"left"),l=("absolute"===f||"fixed"===f)&&(s+u).indexOf("auto")>-1,l?(r=p.position(),a=r.top,o=r.left):(a=parseFloat(s)||0,o=parseFloat(u)||0),t.isFunction(n)&&(n=n.call(e,i,c)),null!=n.top&&(h.top=n.top-c.top+a),null!=n.left&&(h.left=n.left-c.left+o),"using"in n?n.using.call(e,h):p.css(h)}},t.fn.extend({offset:function(n){if(arguments.length)return void 0===n?this:this.each(function(e){t.offset.setOffset(this,n,e)});var i,r,o=this[0],s={top:0,left:0},c=o&&o.ownerDocument;if(c)return i=c.documentElement,t.contains(i,o)?(typeof o.getBoundingClientRect!==e&&(s=o.getBoundingClientRect()),r=a(c),{top:s.top+r.pageYOffset-i.clientTop,left:s.left+r.pageXOffset-i.clientLeft}):s},position:function(){if(this[0]){var e,n,i=this[0],r={top:0,left:0};return"fixed"===t.css(i,"position")?n=i.getBoundingClientRect():(e=this.offsetParent(),n=this.offset(),t.nodeName(e[0],"html")||(r=e.offset()),r.top+=t.css(e[0],"borderTopWidth",!0),r.left+=t.css(e[0],"borderLeftWidth",!0)),{top:n.top-r.top-t.css(i,"marginTop",!0),left:n.left-r.left-t.css(i,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent||c;e&&!t.nodeName(e,"html")&&"static"===t.css(e,"position");)e=e.offsetParent;return e||c})}}),t.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,i){var r="pageYOffset"===i;t.fn[e]=function(t){return n(this,function(t,e,n){var o=a(t);return void 0===n?o?o[i]:t[e]:(o?o.scrollTo(r?window.pageXOffset:n,r?n:window.pageYOffset):t[e]=n,void 0)},e,t,arguments.length,null)}}),t.each(["top","left"],function(e,n){t.cssHooks[n]=o(s.pixelPosition,function(e,o){return o?(o=r(e,n),i.test(o)?t(e).position()[n]+"px":o):void 0})}),t});