define(["../core","../manipulation"],function(e){function t(t,a){var r=e(a.createElement(t)).appendTo(a.body),n=window.getDefaultComputedStyle?window.getDefaultComputedStyle(r[0]).display:e.css(r[0],"display");return r.detach(),n}function a(a){var o=document,s=n[a];return s||(s=t(a,o),"none"!==s&&s||(r=(r||e("<iframe frameborder='0' width='0' height='0'/>")).appendTo(o.documentElement),o=r[0].contentDocument,o.write(),o.close(),s=t(a,o),r.detach()),n[a]=s),s}var r,n={};return a});