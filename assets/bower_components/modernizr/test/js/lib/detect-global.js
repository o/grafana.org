!function(){function e(e){var t={};for(var n in e)try{t[n]={type:typeof e[n],value:e[n]}}catch(r){t[n]={}}return t}function t(){var e=document.createElement("iframe");e.style.display="none";var t=document.getElementsByTagName("script")[0];return t.parentNode.insertBefore(e,t),e.src="about:blank",e.contentWindow}function n(e){var t=0;for(var n in e)t++;return t}function r(e){for(var t in o){var n=document.getElementById("__"+t),r=o[t].indexOf(e)>-1;if(r&&(n?n.checked:!0))return!0}}function i(){var i=function(){return this}(),o=e(i),s=t();for(var a in s)o[a]&&delete o[a];for(var a in o)r(a)&&delete o[a];window.__globalsCount=n(o),window.__globals=o,window.console&&console.log("Total number of global properties: "+__globalsCount),window.console&&console.dir(__globals)}var o={Prototype:"$$ $A $F $H $R $break $continue $w Abstract Ajax Class Enumerable Element Field Form "+"Hash Insertion ObjectRange PeriodicalExecuter Position Prototype Selector Template Toggle Try".split(" "),Scriptaculous:"Autocompleter Builder Control Draggable Draggables Droppables Effect Sortable SortableObserver Sound Scriptaculous".split(" "),Firebug:"loadFirebugConsole console _getFirebugConsoleElement _FirebugConsole _FirebugCommandLine _firebug".split(" "),Mozilla:"Components XPCNativeWrapper XPCSafeJSObjectWrapper getInterface netscape GetWeakReference GeckoActiveXObject".split(" "),GoogleAnalytics:"gaJsHost gaGlobal _gat _gaq pageTracker".split(" "),lazyGlobals:"onhashchange".split(" ")},s=document.getElementById("__analyze");s&&(s.onclick=i),i()}();