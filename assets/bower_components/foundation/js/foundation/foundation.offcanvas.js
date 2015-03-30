!function(t){"use strict";Foundation.libs.offcanvas={name:"offcanvas",version:"5.4.7",settings:{open_method:"move",close_on_click:!1},init:function(t,e,n){this.bindings(e,n)},events:function(){var e=this,n=e.S,i="",r="",o="";"move"===this.settings.open_method?(i="move-",r="right",o="left"):"overlap_single"===this.settings.open_method?(i="offcanvas-overlap-",r="right",o="left"):"overlap"===this.settings.open_method&&(i="offcanvas-overlap"),n(this.scope).off(".offcanvas").on("click.fndtn.offcanvas",".left-off-canvas-toggle",function(o){e.click_toggle_class(o,i+r),"overlap"!==e.settings.open_method&&n(".left-submenu").removeClass(i+r),t(".left-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".left-off-canvas-menu a",function(o){var a=e.get_settings(o),s=n(this).parent();!a.close_on_click||s.hasClass("has-submenu")||s.hasClass("back")?n(this).parent().hasClass("has-submenu")?(o.preventDefault(),n(this).siblings(".left-submenu").toggleClass(i+r)):s.hasClass("back")&&(o.preventDefault(),s.parent().removeClass(i+r)):(e.hide.call(e,i+r,e.get_wrapper(o)),s.parent().removeClass(i+r)),t(".left-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".right-off-canvas-toggle",function(r){e.click_toggle_class(r,i+o),"overlap"!==e.settings.open_method&&n(".right-submenu").removeClass(i+o),t(".right-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".right-off-canvas-menu a",function(r){var a=e.get_settings(r),s=n(this).parent();!a.close_on_click||s.hasClass("has-submenu")||s.hasClass("back")?n(this).parent().hasClass("has-submenu")?(r.preventDefault(),n(this).siblings(".right-submenu").toggleClass(i+o)):s.hasClass("back")&&(r.preventDefault(),s.parent().removeClass(i+o)):(e.hide.call(e,i+o,e.get_wrapper(r)),s.parent().removeClass(i+o)),t(".right-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".exit-off-canvas",function(a){e.click_remove_class(a,i+o),n(".right-submenu").removeClass(i+o),r&&(e.click_remove_class(a,i+r),n(".left-submenu").removeClass(i+o)),t(".right-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".exit-off-canvas",function(n){e.click_remove_class(n,i+o),t(".left-off-canvas-toggle").attr("aria-expanded","false"),r&&(e.click_remove_class(n,i+r),t(".right-off-canvas-toggle").attr("aria-expanded","false"))})},toggle:function(t,e){e=e||this.get_wrapper(),e.is("."+t)?this.hide(t,e):this.show(t,e)},show:function(t,e){e=e||this.get_wrapper(),e.trigger("open").trigger("open.fndtn.offcanvas"),e.addClass(t)},hide:function(t,e){e=e||this.get_wrapper(),e.trigger("close").trigger("close.fndtn.offcanvas"),e.removeClass(t)},click_toggle_class:function(t,e){t.preventDefault();var n=this.get_wrapper(t);this.toggle(e,n)},click_remove_class:function(t,e){t.preventDefault();var n=this.get_wrapper(t);this.hide(e,n)},get_settings:function(t){var e=this.S(t.target).closest("["+this.attr_name()+"]");return e.data(this.attr_name(!0)+"-init")||this.settings},get_wrapper:function(t){var e=this.S(t?t.target:this.scope).closest(".off-canvas-wrap");return 0===e.length&&(e=this.S(".off-canvas-wrap")),e},reflow:function(){}}}(jQuery,window,window.document);