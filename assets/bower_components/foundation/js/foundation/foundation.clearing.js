!function(t,e,n,i){"use strict";Foundation.libs.clearing={name:"clearing",version:"5.4.7",settings:{templates:{viewing:'<a href="#" class="clearing-close">&times;</a><div class="visible-img" style="display: none"><div class="clearing-touch-label"></div><img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" alt="" /><p class="clearing-caption"></p><a href="#" class="clearing-main-prev"><span></span></a><a href="#" class="clearing-main-next"><span></span></a></div>'},close_selectors:".clearing-close, div.clearing-blackout",open_selectors:"",skip_selector:"",touch_label:"",init:!1,locked:!1},init:function(t,e,n){var i=this;Foundation.inherit(this,"throttle image_loaded"),this.bindings(e,n),i.S(this.scope).is("["+this.attr_name()+"]")?this.assemble(i.S("li",this.scope)):i.S("["+this.attr_name()+"]",this.scope).each(function(){i.assemble(i.S("li",this))})},events:function(i){var r=this,o=r.S,s=t(".scroll-container");s.length>0&&(this.scope=s),o(this.scope).off(".clearing").on("click.fndtn.clearing","ul["+this.attr_name()+"] li "+this.settings.open_selectors,function(t,e,n){var e=e||o(this),n=n||e,i=e.next("li"),s=e.closest("["+r.attr_name()+"]").data(r.attr_name(!0)+"-init"),a=o(t.target);t.preventDefault(),s||(r.init(),s=e.closest("["+r.attr_name()+"]").data(r.attr_name(!0)+"-init")),n.hasClass("visible")&&e[0]===n[0]&&i.length>0&&r.is_open(e)&&(n=i,a=o("img",n)),r.open(a,e,n),r.update_paddles(n)}).on("click.fndtn.clearing",".clearing-main-next",function(t){r.nav(t,"next")}).on("click.fndtn.clearing",".clearing-main-prev",function(t){r.nav(t,"prev")}).on("click.fndtn.clearing",this.settings.close_selectors,function(t){Foundation.libs.clearing.close(t,this)}),t(n).on("keydown.fndtn.clearing",function(t){r.keydown(t)}),o(e).off(".clearing").on("resize.fndtn.clearing",function(){r.resize()}),this.swipe_events(i)},swipe_events:function(){var t=this,e=t.S;e(this.scope).on("touchstart.fndtn.clearing",".visible-img",function(t){t.touches||(t=t.originalEvent);var n={start_page_x:t.touches[0].pageX,start_page_y:t.touches[0].pageY,start_time:(new Date).getTime(),delta_x:0,is_scrolling:i};e(this).data("swipe-transition",n),t.stopPropagation()}).on("touchmove.fndtn.clearing",".visible-img",function(n){if(n.touches||(n=n.originalEvent),!(n.touches.length>1||n.scale&&1!==n.scale)){var i=e(this).data("swipe-transition");if("undefined"==typeof i&&(i={}),i.delta_x=n.touches[0].pageX-i.start_page_x,Foundation.rtl&&(i.delta_x=-i.delta_x),"undefined"==typeof i.is_scrolling&&(i.is_scrolling=!!(i.is_scrolling||Math.abs(i.delta_x)<Math.abs(n.touches[0].pageY-i.start_page_y))),!i.is_scrolling&&!i.active){n.preventDefault();var r=i.delta_x<0?"next":"prev";i.active=!0,t.nav(n,r)}}}).on("touchend.fndtn.clearing",".visible-img",function(t){e(this).data("swipe-transition",{}),t.stopPropagation()})},assemble:function(e){var n=e.parent();if(!n.parent().hasClass("carousel")){n.after('<div id="foundationClearingHolder"></div>');var i=n.detach(),r="";if(null!=i[0]){r=i[0].outerHTML;var o=this.S("#foundationClearingHolder"),s=n.data(this.attr_name(!0)+"-init"),a={grid:'<div class="carousel">'+r+"</div>",viewing:s.templates.viewing},l='<div class="clearing-assembled"><div>'+a.viewing+a.grid+"</div></div>",u=this.settings.touch_label;Modernizr.touch&&(l=t(l).find(".clearing-touch-label").html(u).end()),o.after(l).remove()}}},open:function(e,i,r){function o(){setTimeout(function(){this.image_loaded(f,function(){1!==f.outerWidth()||h?s.call(this,f):o.call(this)}.bind(this))}.bind(this),100)}function s(e){var n=t(e);n.css("visibility","visible"),l.css("overflow","hidden"),u.addClass("clearing-blackout"),c.addClass("clearing-container"),d.show(),this.fix_height(r).caption(a.S(".clearing-caption",d),a.S("img",r)).center_and_label(e,p).shift(i,r,function(){r.closest("li").siblings().removeClass("visible"),r.closest("li").addClass("visible")}),d.trigger("opened.fndtn.clearing")}var a=this,l=t(n.body),u=r.closest(".clearing-assembled"),c=a.S("div",u).first(),d=a.S(".visible-img",c),f=a.S("img",d).not(e),p=a.S(".clearing-touch-label",c),h=!1;t("body").on("touchmove",function(t){t.preventDefault()}),f.error(function(){h=!0}),this.locked()||(d.trigger("open.fndtn.clearing"),f.attr("src",this.load(e)).css("visibility","hidden"),o.call(this))},close:function(e,i){e.preventDefault();var r,o,s=function(t){return/blackout/.test(t.selector)?t:t.closest(".clearing-blackout")}(t(i)),a=t(n.body);return i===e.target&&s&&(a.css("overflow",""),r=t("div",s).first(),o=t(".visible-img",r),o.trigger("close.fndtn.clearing"),this.settings.prev_index=0,t("ul["+this.attr_name()+"]",s).attr("style","").closest(".clearing-blackout").removeClass("clearing-blackout"),r.removeClass("clearing-container"),o.hide(),o.trigger("closed.fndtn.clearing")),t("body").off("touchmove"),!1},is_open:function(t){return t.parent().prop("style").length>0},keydown:function(e){var n=t(".clearing-blackout ul["+this.attr_name()+"]"),i=this.rtl?37:39,r=this.rtl?39:37,o=27;e.which===i&&this.go(n,"next"),e.which===r&&this.go(n,"prev"),e.which===o&&this.S("a.clearing-close").trigger("click").trigger("click.fndtn.clearing")},nav:function(e,n){var i=t("ul["+this.attr_name()+"]",".clearing-blackout");e.preventDefault(),this.go(i,n)},resize:function(){var e=t("img",".clearing-blackout .visible-img"),n=t(".clearing-touch-label",".clearing-blackout");e.length&&(this.center_and_label(e,n),e.trigger("resized.fndtn.clearing"))},fix_height:function(t){var e=t.parent().children(),n=this;return e.each(function(){var t=n.S(this),e=t.find("img");t.height()>e.outerHeight()&&t.addClass("fix-height")}).closest("ul").width(100*e.length+"%"),this},update_paddles:function(t){t=t.closest("li");var e=t.closest(".carousel").siblings(".visible-img");t.next().length>0?this.S(".clearing-main-next",e).removeClass("disabled"):this.S(".clearing-main-next",e).addClass("disabled"),t.prev().length>0?this.S(".clearing-main-prev",e).removeClass("disabled"):this.S(".clearing-main-prev",e).addClass("disabled")},center_and_label:function(t,e){return this.rtl?(t.css({marginRight:-(t.outerWidth()/2),marginTop:-(t.outerHeight()/2),left:"auto",right:"50%"}),e.length>0&&e.css({marginRight:-(e.outerWidth()/2),marginTop:-(t.outerHeight()/2)-e.outerHeight()-10,left:"auto",right:"50%"})):(t.css({marginLeft:-(t.outerWidth()/2),marginTop:-(t.outerHeight()/2)}),e.length>0&&e.css({marginLeft:-(e.outerWidth()/2),marginTop:-(t.outerHeight()/2)-e.outerHeight()-10})),this},load:function(t){var e;return e="A"===t[0].nodeName?t.attr("href"):t.parent().attr("href"),this.preload(t),e?e:t.attr("src")},preload:function(t){this.img(t.closest("li").next()).img(t.closest("li").prev())},img:function(t){if(t.length){var e=new Image,n=this.S("a",t);e.src=n.length?n.attr("href"):this.S("img",t).attr("src")}return this},caption:function(t,e){var n=e.attr("data-caption");return n?t.html(n).show():t.text("").hide(),this},go:function(t,e){var n=this.S(".visible",t),i=n[e]();this.settings.skip_selector&&0!=i.find(this.settings.skip_selector).length&&(i=i[e]()),i.length&&this.S("img",i).trigger("click",[n,i]).trigger("click.fndtn.clearing",[n,i]).trigger("change.fndtn.clearing")},shift:function(t,e,n){var i,r=e.parent(),o=this.settings.prev_index||e.index(),s=this.direction(r,t,e),a=this.rtl?"right":"left",l=parseInt(r.css("left"),10),u=e.outerWidth(),c={};e.index()===o||/skip/.test(s)?/skip/.test(s)&&(i=e.index()-this.settings.up_count,this.lock(),i>0?(c[a]=-(i*u),r.animate(c,300,this.unlock())):(c[a]=0,r.animate(c,300,this.unlock()))):/left/.test(s)?(this.lock(),c[a]=l+u,r.animate(c,300,this.unlock())):/right/.test(s)&&(this.lock(),c[a]=l-u,r.animate(c,300,this.unlock())),n()},direction:function(t,e,n){var i,r=this.S("li",t),o=r.outerWidth()+r.outerWidth()/4,s=Math.floor(this.S(".clearing-container").outerWidth()/o)-1,a=r.index(n);return this.settings.up_count=s,i=this.adjacent(this.settings.prev_index,a)?a>s&&a>this.settings.prev_index?"right":a>s-1&&a<=this.settings.prev_index?"left":!1:"skip",this.settings.prev_index=a,i},adjacent:function(t,e){for(var n=e+1;n>=e-1;n--)if(n===t)return!0;return!1},lock:function(){this.settings.locked=!0},unlock:function(){this.settings.locked=!1},locked:function(){return this.settings.locked},off:function(){this.S(this.scope).off(".fndtn.clearing"),this.S(e).off(".fndtn.clearing")},reflow:function(){this.init()}}}(jQuery,window,window.document);