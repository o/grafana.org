/**
 * QUnit v1.9.0 - A JavaScript Unit Testing Framework
 *
 * http://docs.jquery.com/QUnit
 *
 * Copyright (c) 2012 John Resig, Jörn Zaefferer
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * or GPL (GPL-LICENSE.txt) licenses.
 */
!function(e){function t(e){f(this,e),this.assertions=[],this.testNumber=++t.count}function n(){b.autorun=!0,b.currentModule&&g("moduleDone",v,{name:b.currentModule,failed:b.moduleStats.bad,passed:b.moduleStats.all-b.moduleStats.bad,total:b.moduleStats.all});var e,t,n=h("qunit-banner"),r=h("qunit-tests"),o=+new Date-b.started,i=b.stats.all-b.stats.bad,a=["Tests completed in ",o," milliseconds.<br/>","<span class='passed'>",i,"</span> tests of <span class='total'>",b.stats.all,"</span> passed, <span class='failed'>",b.stats.bad,"</span> failed."].join("");if(n&&(n.className=b.stats.bad?"qunit-fail":"qunit-pass"),r&&(h("qunit-testresult").innerHTML=a),b.altertitle&&"undefined"!=typeof document&&document.title&&(document.title=[b.stats.bad?"✖":"✔",document.title.replace(/^[\u2714\u2716] /i,"")].join(" ")),b.reorder&&E.sessionStorage&&0===b.stats.bad)for(e=0;e<sessionStorage.length;e++)t=sessionStorage.key(e++),0===t.indexOf("qunit-test-")&&sessionStorage.removeItem(t);g("done",v,{failed:b.stats.bad,passed:i,total:b.stats.all,runtime:o})}function r(e){var t,n=b.filter&&b.filter.toLowerCase(),r=b.module&&b.module.toLowerCase(),o=(e.module+": "+e.testName).toLowerCase();return b.testNumber?e.testNumber===b.testNumber:!r||e.module&&e.module.toLowerCase()===r?n?(t="!"!==n.charAt(0),t||(n=n.slice(1)),-1!==o.indexOf(n)?t:!t):!0:!1}function o(e,t){t=void 0===t?3:t;var n,r,o;if(e.stacktrace)return e.stacktrace.split("\n")[t+3];if(e.stack){if(n=e.stack.split("\n"),/^error$/i.test(n[0])&&n.shift(),T){for(r=[],o=t;o<n.length&&-1==n[o].indexOf(T);o++)r.push(n[o]);if(r.length)return r.join("\n")}return n[t]}if(e.sourceURL){if(/qunit.js$/.test(e.sourceURL))return;return e.sourceURL+":"+e.line}}function i(e){try{throw new Error}catch(t){return o(t,e)}}function a(e){return e?(e+="",e.replace(/[\&<>]/g,function(e){switch(e){case"&":return"&amp;";case"<":return"&lt;";case">":return"&gt;";default:return e}})):""}function s(e,t){b.queue.push(e),b.autorun&&!b.blocking&&l(t)}function l(t){function r(){l(t)}var o=(new Date).getTime();for(b.depth=b.depth?b.depth+1:1;b.queue.length&&!b.blocking;){if(!(!E.setTimeout||b.updateRate<=0||(new Date).getTime()-o<b.updateRate)){e.setTimeout(r,13);break}b.queue.shift()()}b.depth--,!t||b.blocking||b.queue.length||0!==b.depth||n()}function u(){if(b.pollution=[],b.noglobals)for(var t in e)S.call(e,t)&&!/^qunit-test-output/.test(t)&&b.pollution.push(t)}function c(){var e,t,n=b.pollution;u(),e=d(b.pollution,n),e.length>0&&v.pushFailure("Introduced global variable(s): "+e.join(", ")),t=d(n,b.pollution),t.length>0&&v.pushFailure("Deleted global variable(s): "+t.join(", "))}function d(e,t){var n,r,o=e.slice();for(n=0;n<o.length;n++)for(r=0;r<t.length;r++)if(o[n]===t[r]){o.splice(n,1),n--;break}return o}function f(t,n){for(var r in n)void 0===n[r]?delete t[r]:("constructor"!==r||t!==e)&&(t[r]=n[r]);return t}function p(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent?e.attachEvent("on"+t,n):n()}function h(e){return!("undefined"==typeof document||!document||!document.getElementById)&&document.getElementById(e)}function m(e){return function(t){b[e].push(t)}}function g(e,t,n){var r,o;if(v.hasOwnProperty(e))v[e].call(t,n);else for(o=b[e],r=0;r<o.length;r++)o[r].call(t,n)}function y(e,t){if(t.indexOf)return t.indexOf(e);for(var n=0,r=t.length;r>n;n++)if(t[n]===e)return n;return-1}var v,b,x,w=0,T=(i(0)||"").replace(/(:\d+)+\)?/,"").replace(/.+\//,""),k=Object.prototype.toString,S=Object.prototype.hasOwnProperty,E={setTimeout:"undefined"!=typeof e.setTimeout,sessionStorage:function(){var e="qunit-test-string";try{return sessionStorage.setItem(e,e),sessionStorage.removeItem(e),!0}catch(t){return!1}}()};t.count=0,t.prototype={init:function(){var e,t,n,r=h("qunit-tests");r&&(t=document.createElement("strong"),t.innerHTML=this.name,e=document.createElement("a"),e.innerHTML="Rerun",e.href=v.url({testNumber:this.testNumber}),n=document.createElement("li"),n.appendChild(t),n.appendChild(e),n.className="running",n.id=this.id="qunit-test-output"+w++,r.appendChild(n))},setup:function(){if(this.module!==b.previousModule?(b.previousModule&&g("moduleDone",v,{name:b.previousModule,failed:b.moduleStats.bad,passed:b.moduleStats.all-b.moduleStats.bad,total:b.moduleStats.all}),b.previousModule=this.module,b.moduleStats={all:0,bad:0},g("moduleStart",v,{name:this.module})):b.autorun&&g("moduleStart",v,{name:this.module}),b.current=this,this.testEnvironment=f({setup:function(){},teardown:function(){}},this.moduleTestEnvironment),g("testStart",v,{name:this.testName,module:this.module}),v.current_testEnvironment=this.testEnvironment,b.pollution||u(),b.notrycatch)return this.testEnvironment.setup.call(this.testEnvironment),void 0;try{this.testEnvironment.setup.call(this.testEnvironment)}catch(e){v.pushFailure("Setup failed on "+this.testName+": "+e.message,o(e,1))}},run:function(){b.current=this;var e=h("qunit-testresult");if(e&&(e.innerHTML="Running: <br/>"+this.name),this.async&&v.stop(),b.notrycatch)return this.callback.call(this.testEnvironment,v.assert),void 0;try{this.callback.call(this.testEnvironment,v.assert)}catch(t){v.pushFailure("Died on test #"+(this.assertions.length+1)+" "+this.stack+": "+t.message,o(t,0)),u(),b.blocking&&v.start()}},teardown:function(){if(b.current=this,b.notrycatch)return this.testEnvironment.teardown.call(this.testEnvironment),void 0;try{this.testEnvironment.teardown.call(this.testEnvironment)}catch(e){v.pushFailure("Teardown failed on "+this.testName+": "+e.message,o(e,1))}c()},finish:function(){b.current=this,b.requireExpects&&null==this.expected?v.pushFailure("Expected number of assertions to be defined, but expect() was not called.",this.stack):null!=this.expected&&this.expected!=this.assertions.length?v.pushFailure("Expected "+this.expected+" assertions, but "+this.assertions.length+" were run",this.stack):null!=this.expected||this.assertions.length||v.pushFailure("Expected at least one assertion, but none were run - call expect(0) to accept zero assertions.",this.stack);var t,n,r,o,i,a,s=this,l=0,u=0,c=h("qunit-tests");if(b.stats.all+=this.assertions.length,b.moduleStats.all+=this.assertions.length,c){for(a=document.createElement("ol"),o=0;o<this.assertions.length;o++)t=this.assertions[o],i=document.createElement("li"),i.className=t.result?"pass":"fail",i.innerHTML=t.message||(t.result?"okay":"failed"),a.appendChild(i),t.result?l++:(u++,b.stats.bad++,b.moduleStats.bad++);v.config.reorder&&E.sessionStorage&&(u?sessionStorage.setItem("qunit-test-"+this.module+"-"+this.testName,u):sessionStorage.removeItem("qunit-test-"+this.module+"-"+this.testName)),0===u&&(a.style.display="none"),r=document.createElement("strong"),r.innerHTML=this.name+" <b class='counts'>(<b class='failed'>"+u+"</b>, <b class='passed'>"+l+"</b>, "+this.assertions.length+")</b>",p(r,"click",function(){var e=r.nextSibling.nextSibling,t=e.style.display;e.style.display="none"===t?"block":"none"}),p(r,"dblclick",function(t){var n=t&&t.target?t.target:e.event.srcElement;("span"==n.nodeName.toLowerCase()||"b"==n.nodeName.toLowerCase())&&(n=n.parentNode),e.location&&"strong"===n.nodeName.toLowerCase()&&(e.location=v.url({testNumber:s.testNumber}))}),i=h(this.id),i.className=u?"fail":"pass",i.removeChild(i.firstChild),n=i.firstChild,i.appendChild(r),i.appendChild(n),i.appendChild(a)}else for(o=0;o<this.assertions.length;o++)this.assertions[o].result||(u++,b.stats.bad++,b.moduleStats.bad++);g("testDone",v,{name:this.testName,module:this.module,failed:u,passed:this.assertions.length-u,total:this.assertions.length}),v.reset(),b.current=void 0},queue:function(){function e(){s(function(){n.setup()}),s(function(){n.run()}),s(function(){n.teardown()}),s(function(){n.finish()})}var t,n=this;s(function(){n.init()}),t=v.config.reorder&&E.sessionStorage&&+sessionStorage.getItem("qunit-test-"+this.module+"-"+this.testName),t?e():s(e,!0)}},v={module:function(e,t){b.currentModule=e,b.currentModuleTestEnviroment=t},asyncTest:function(e,t,n){2===arguments.length&&(n=t,t=null),v.test(e,t,n,!0)},test:function(e,n,o,s){var l,u="<span class='test-name'>"+a(e)+"</span>";2===arguments.length&&(o=n,n=null),b.currentModule&&(u="<span class='module-name'>"+b.currentModule+"</span>: "+u),l=new t({name:u,testName:e,expected:n,async:s,callback:o,module:b.currentModule,moduleTestEnvironment:b.currentModuleTestEnviroment,stack:i(2)}),r(l)&&l.queue()},expect:function(e){b.current.expected=e},start:function(t){b.semaphore-=t||1,b.semaphore>0||(b.semaphore<0&&(b.semaphore=0),E.setTimeout?e.setTimeout(function(){b.semaphore>0||(b.timeout&&clearTimeout(b.timeout),b.blocking=!1,l(!0))},13):(b.blocking=!1,l(!0)))},stop:function(t){b.semaphore+=t||1,b.blocking=!0,b.testTimeout&&E.setTimeout&&(clearTimeout(b.timeout),b.timeout=e.setTimeout(function(){v.ok(!1,"Test timed out"),b.semaphore=1,v.start()},b.testTimeout))}},v.assert={ok:function(e,t){if(!b.current)throw new Error("ok() assertion outside test context, was "+i(2));e=!!e;var n,r={result:e,message:t};t=a(t||(e?"okay":"failed")),t="<span class='test-message'>"+t+"</span>",e||(n=i(2),n&&(r.source=n,t+="<table><tr class='test-source'><th>Source: </th><td><pre>"+a(n)+"</pre></td></tr></table>")),g("log",v,r),b.current.assertions.push({result:e,message:t})},equal:function(e,t,n){v.push(t==e,e,t,n)},notEqual:function(e,t,n){v.push(t!=e,e,t,n)},deepEqual:function(e,t,n){v.push(v.equiv(e,t),e,t,n)},notDeepEqual:function(e,t,n){v.push(!v.equiv(e,t),e,t,n)},strictEqual:function(e,t,n){v.push(t===e,e,t,n)},notStrictEqual:function(e,t,n){v.push(t!==e,e,t,n)},"throws":function(e,t,n){var r,o=!1;"string"==typeof t&&(n=t,t=null),b.current.ignoreGlobalErrors=!0;try{e.call(b.current.testEnvironment)}catch(i){r=i}b.current.ignoreGlobalErrors=!1,r?(t?"regexp"===v.objectType(t)?o=t.test(r):r instanceof t?o=!0:t.call({},r)===!0&&(o=!0):o=!0,v.push(o,r,null,n)):v.pushFailure(n,null,"No exception was thrown.")}},f(v,v.assert),v.raises=v.assert.throws,v.equals=function(){v.push(!1,!1,!1,"QUnit.equals has been deprecated since 2009 (e88049a0), use QUnit.equal instead")},v.same=function(){v.push(!1,!1,!1,"QUnit.same has been deprecated since 2009 (e88049a0), use QUnit.deepEqual instead")},function(){function e(){}e.prototype=v,v=new e,v.constructor=e}(),b={queue:[],blocking:!0,hidepassed:!1,reorder:!0,altertitle:!0,requireExpects:!1,urlConfig:[{id:"noglobals",label:"Check for Globals",tooltip:"Enabling this will test if any test introduces new properties on the `window` object. Stored as query-strings."},{id:"notrycatch",label:"No try-catch",tooltip:"Enabling this will run tests outside of a try-catch block. Makes debugging exceptions in IE reasonable. Stored as query-strings."}],begin:[],done:[],log:[],testStart:[],testDone:[],moduleStart:[],moduleDone:[]},function(){var t,n,r=e.location||{search:"",protocol:"file:"},o=r.search.slice(1).split("&"),i=o.length,a={};if(o[0])for(t=0;i>t;t++)n=o[t].split("="),n[0]=decodeURIComponent(n[0]),n[1]=n[1]?decodeURIComponent(n[1]):!0,a[n[0]]=n[1];v.urlParams=a,b.filter=a.filter,b.module=a.module,b.testNumber=parseInt(a.testNumber,10)||null,v.isLocal="file:"===r.protocol}(),"undefined"==typeof exports&&(f(e,v),e.QUnit=v),f(v,{config:b,init:function(){f(b,{stats:{all:0,bad:0},moduleStats:{all:0,bad:0},started:+new Date,updateRate:1e3,blocking:!1,autostart:!0,autorun:!1,filter:"",queue:[],semaphore:0});var e,t,n,r=h("qunit");r&&(r.innerHTML="<h1 id='qunit-header'>"+a(document.title)+"</h1>"+"<h2 id='qunit-banner'></h2>"+"<div id='qunit-testrunner-toolbar'></div>"+"<h2 id='qunit-userAgent'></h2>"+"<ol id='qunit-tests'></ol>"),e=h("qunit-tests"),t=h("qunit-banner"),n=h("qunit-testresult"),e&&(e.innerHTML=""),t&&(t.className=""),n&&n.parentNode.removeChild(n),e&&(n=document.createElement("p"),n.id="qunit-testresult",n.className="result",e.parentNode.insertBefore(n,e),n.innerHTML="Running...<br/>&nbsp;")},reset:function(){var t;e.jQuery?jQuery("#qunit-fixture").html(b.fixture):(t=h("qunit-fixture"),t&&(t.innerHTML=b.fixture))},triggerEvent:function(e,t,n){document.createEvent?(n=document.createEvent("MouseEvents"),n.initMouseEvent(t,!0,!0,e.ownerDocument.defaultView,0,0,0,0,0,!1,!1,!1,!1,0,null),e.dispatchEvent(n)):e.fireEvent&&e.fireEvent("on"+t)},is:function(e,t){return v.objectType(t)==e},objectType:function(e){if("undefined"==typeof e)return"undefined";if(null===e)return"null";var t=k.call(e).match(/^\[object\s(.*)\]$/)[1]||"";switch(t){case"Number":return isNaN(e)?"nan":"number";case"String":case"Boolean":case"Array":case"Date":case"RegExp":case"Function":return t.toLowerCase()}return"object"==typeof e?"object":void 0},push:function(e,t,n,r){if(!b.current)throw new Error("assertion outside test context, was "+i());var o,s,l={result:e,message:r,actual:t,expected:n};r=a(r)||(e?"okay":"failed"),r="<span class='test-message'>"+r+"</span>",o=r,e||(n=a(v.jsDump.parse(n)),t=a(v.jsDump.parse(t)),o+="<table><tr class='test-expected'><th>Expected: </th><td><pre>"+n+"</pre></td></tr>",t!=n&&(o+="<tr class='test-actual'><th>Result: </th><td><pre>"+t+"</pre></td></tr>",o+="<tr class='test-diff'><th>Diff: </th><td><pre>"+v.diff(n,t)+"</pre></td></tr>"),s=i(),s&&(l.source=s,o+="<tr class='test-source'><th>Source: </th><td><pre>"+a(s)+"</pre></td></tr>"),o+="</table>"),g("log",v,l),b.current.assertions.push({result:!!e,message:o})},pushFailure:function(e,t,n){if(!b.current)throw new Error("pushFailure() assertion outside test context, was "+i(2));var r,o={result:!1,message:e};e=a(e)||"error",e="<span class='test-message'>"+e+"</span>",r=e,r+="<table>",n&&(r+="<tr class='test-actual'><th>Result: </th><td><pre>"+a(n)+"</pre></td></tr>"),t&&(o.source=t,r+="<tr class='test-source'><th>Source: </th><td><pre>"+a(t)+"</pre></td></tr>"),r+="</table>",g("log",v,o),b.current.assertions.push({result:!1,message:r})},url:function(t){t=f(f({},v.urlParams),t);var n,r="?";for(n in t)S.call(t,n)&&(r+=encodeURIComponent(n)+"="+encodeURIComponent(t[n])+"&");return e.location.pathname+r.slice(0,-1)},extend:f,id:h,addEvent:p}),f(v.constructor.prototype,{begin:m("begin"),done:m("done"),log:m("log"),testStart:m("testStart"),testDone:m("testDone"),moduleStart:m("moduleStart"),moduleDone:m("moduleDone")}),("undefined"==typeof document||"complete"===document.readyState)&&(b.autorun=!0),v.load=function(){g("begin",v,{});var t,n,r,o,i,a,s,l,u,c,d,m="",y=f({},b);for(v.init(),f(b,y),b.blocking=!1,i=b.urlConfig.length,r=0;i>r;r++)c=b.urlConfig[r],"string"==typeof c&&(c={id:c,label:c,tooltip:"[no tooltip available]"}),b[c.id]=v.urlParams[c.id],m+="<input id='qunit-urlconfig-"+c.id+"' name='"+c.id+"' type='checkbox'"+(b[c.id]?" checked='checked'":"")+" title='"+c.tooltip+"'><label for='qunit-urlconfig-"+c.id+"' title='"+c.tooltip+"'>"+c.label+"</label>";u=h("qunit-userAgent"),u&&(u.innerHTML=navigator.userAgent),t=h("qunit-header"),t&&(t.innerHTML="<a href='"+v.url({filter:void 0,module:void 0,testNumber:void 0})+"'>"+t.innerHTML+"</a> "),l=h("qunit-testrunner-toolbar"),l&&(n=document.createElement("input"),n.type="checkbox",n.id="qunit-filter-pass",p(n,"click",function(){var e,t=document.getElementById("qunit-tests");n.checked?t.className=t.className+" hidepass":(e=" "+t.className.replace(/[\n\t\r]/g," ")+" ",t.className=e.replace(/ hidepass /," ")),E.sessionStorage&&(n.checked?sessionStorage.setItem("qunit-filter-passed-tests","true"):sessionStorage.removeItem("qunit-filter-passed-tests"))}),(b.hidepassed||E.sessionStorage&&sessionStorage.getItem("qunit-filter-passed-tests"))&&(n.checked=!0,s=document.getElementById("qunit-tests"),s.className=s.className+" hidepass"),l.appendChild(n),o=document.createElement("label"),o.setAttribute("for","qunit-filter-pass"),o.setAttribute("title","Only show tests and assertons that fail. Stored in sessionStorage."),o.innerHTML="Hide passed tests",l.appendChild(o),d=document.createElement("span"),d.innerHTML=m,p(d,"change",function(t){var n={};n[t.target.name]=t.target.checked?!0:void 0,e.location=v.url(n)}),l.appendChild(d)),a=h("qunit-fixture"),a&&(b.fixture=a.innerHTML),b.autostart&&v.start()},p(e,"load",v.load),x=e.onerror,e.onerror=function(e,t,n){var r=!1;if(x&&(r=x(e,t,n)),r!==!0){if(v.config.current){if(v.config.current.ignoreGlobalErrors)return!0;v.pushFailure(e,t+":"+n)}else v.test("global failure",function(){v.pushFailure(e,t+":"+n)});return!1}return r},v.equiv=function(){function e(e,t,n){var r=v.objectType(e);return r?"function"===v.objectType(t[r])?t[r].apply(t,n):t[r]:void 0}var t,n=[],r=[],o=Object.getPrototypeOf||function(e){return e.__proto__},i=function(){function e(e,t){return e instanceof t.constructor||t instanceof e.constructor?t==e:t===e}return{string:e,"boolean":e,number:e,"null":e,undefined:e,nan:function(e){return isNaN(e)},date:function(e,t){return"date"===v.objectType(e)&&t.valueOf()===e.valueOf()},regexp:function(e,t){return"regexp"===v.objectType(e)&&t.source===e.source&&t.global===e.global&&t.ignoreCase===e.ignoreCase&&t.multiline===e.multiline},"function":function(){var e=n[n.length-1];return e!==Object&&"undefined"!=typeof e},array:function(e,n){var o,i,a,s;if("array"!==v.objectType(e))return!1;if(a=n.length,a!==e.length)return!1;for(r.push(n),o=0;a>o;o++){for(s=!1,i=0;i<r.length;i++)r[i]===n[o]&&(s=!0);if(!s&&!t(n[o],e[o]))return r.pop(),!1}return r.pop(),!0},object:function(e,i){var a,s,l,u=!0,c=[],d=[];if(i.constructor!==e.constructor&&!(null===o(i)&&o(e)===Object.prototype||null===o(e)&&o(i)===Object.prototype))return!1;n.push(i.constructor),r.push(i);for(a in i){for(l=!1,s=0;s<r.length;s++)r[s]===i[a]&&(l=!0);if(c.push(a),!l&&!t(i[a],e[a])){u=!1;break}}n.pop(),r.pop();for(a in e)d.push(a);return u&&t(c.sort(),d.sort())}}}();return t=function(){var t=[].slice.apply(arguments);return t.length<2?!0:function(t,n){return t===n?!0:null===t||null===n||"undefined"==typeof t||"undefined"==typeof n||v.objectType(t)!==v.objectType(n)?!1:e(t,i,[n,t])}(t[0],t[1])&&arguments.callee.apply(this,t.splice(1,t.length-1))}}(),/**
 * jsDump Copyright (c) 2008 Ariel Flesler - aflesler(at)gmail(dot)com |
 * http://flesler.blogspot.com Licensed under BSD
 * (http://www.opensource.org/licenses/bsd-license.php) Date: 5/15/2008
 *
 * @projectDescription Advanced and extensible data dumping for Javascript.
 * @version 1.0.0
 * @author Ariel Flesler
 * @link {http://flesler.blogspot.com/2008/05/jsdump-pretty-dump-of-any-javascript.html}
 */
v.jsDump=function(){function e(e){return'"'+e.toString().replace(/"/g,'\\"')+'"'}function t(e){return e+""}function n(e,t,n){var r=i.separator(),o=i.indent(),a=i.indent(1);return t.join&&(t=t.join(","+r+a)),t?[e,a+t,o+n].join(r):e+n}function r(e,t){var r=e.length,o=new Array(r);for(this.up();r--;)o[r]=this.parse(e[r],void 0,t);return this.down(),n("[",o,"]")}var o=/^function (\w+)/,i={parse:function(e,t,n){n=n||[];var r,o,i=this.parsers[t||this.typeOf(e)];return t=typeof i,r=y(e,n),-1!=r?"recursion("+(r-n.length)+")":"function"==t?(n.push(e),o=i.call(this,e,n),n.pop(),o):"string"==t?i:this.parsers.error},typeOf:function(e){var t;return t=null===e?"null":"undefined"==typeof e?"undefined":v.is("regexp",e)?"regexp":v.is("date",e)?"date":v.is("function",e)?"function":void 0!==typeof e.setInterval&&"undefined"!=typeof e.document&&"undefined"==typeof e.nodeType?"window":9===e.nodeType?"document":e.nodeType?"node":"[object Array]"===k.call(e)||"number"==typeof e.length&&"undefined"!=typeof e.item&&(e.length?e.item(0)===e[0]:null===e.item(0)&&"undefined"==typeof e[0])?"array":typeof e},separator:function(){return this.multiline?this.HTML?"<br />":"\n":this.HTML?"&nbsp;":" "},indent:function(e){if(!this.multiline)return"";var t=this.indentChar;return this.HTML&&(t=t.replace(/\t/g,"   ").replace(/ /g,"&nbsp;")),new Array(this._depth_+(e||0)).join(t)},up:function(e){this._depth_+=e||1},down:function(e){this._depth_-=e||1},setParser:function(e,t){this.parsers[e]=t},quote:e,literal:t,join:n,_depth_:1,parsers:{window:"[Window]",document:"[Document]",error:"[ERROR]",unknown:"[Unknown]","null":"null",undefined:"undefined","function":function(e){var t="function",r="name"in e?e.name:(o.exec(e)||[])[1];return r&&(t+=" "+r),t+="( ",t=[t,v.jsDump.parse(e,"functionArgs"),"){"].join(""),n(t,v.jsDump.parse(e,"functionCode"),"}")},array:r,nodelist:r,arguments:r,object:function(e,t){var r,o,i,a,s=[];if(v.jsDump.up(),Object.keys)r=Object.keys(e);else{r=[];for(o in e)r.push(o)}for(r.sort(),a=0;a<r.length;a++)o=r[a],i=e[o],s.push(v.jsDump.parse(o,"key")+": "+v.jsDump.parse(i,void 0,t));return v.jsDump.down(),n("{",s,"}")},node:function(e){var t,n,r=v.jsDump.HTML?"&lt;":"<",o=v.jsDump.HTML?"&gt;":">",i=e.nodeName.toLowerCase(),a=r+i;for(t in v.jsDump.DOMAttrs)n=e[v.jsDump.DOMAttrs[t]],n&&(a+=" "+t+"="+v.jsDump.parse(n,"attribute"));return a+o+r+"/"+i+o},functionArgs:function(e){var t,n=e.length;if(!n)return"";for(t=new Array(n);n--;)t[n]=String.fromCharCode(97+n);return" "+t.join(", ")+" "},key:e,functionCode:"[code]",attribute:e,string:e,date:e,regexp:t,number:t,"boolean":t},DOMAttrs:{id:"id",name:"name","class":"className"},HTML:!1,indentChar:"  ",multiline:!0};return i}(),v.diff=function(){function e(e,t){var n,r={},o={};for(n=0;n<t.length;n++)null==r[t[n]]&&(r[t[n]]={rows:[],o:null}),r[t[n]].rows.push(n);for(n=0;n<e.length;n++)null==o[e[n]]&&(o[e[n]]={rows:[],n:null}),o[e[n]].rows.push(n);for(n in r)S.call(r,n)&&1==r[n].rows.length&&"undefined"!=typeof o[n]&&1==o[n].rows.length&&(t[r[n].rows[0]]={text:t[r[n].rows[0]],row:o[n].rows[0]},e[o[n].rows[0]]={text:e[o[n].rows[0]],row:r[n].rows[0]});for(n=0;n<t.length-1;n++)null!=t[n].text&&null==t[n+1].text&&t[n].row+1<e.length&&null==e[t[n].row+1].text&&t[n+1]==e[t[n].row+1]&&(t[n+1]={text:t[n+1],row:t[n].row+1},e[t[n].row+1]={text:e[t[n].row+1],row:n+1});for(n=t.length-1;n>0;n--)null!=t[n].text&&null==t[n-1].text&&t[n].row>0&&null==e[t[n].row-1].text&&t[n-1]==e[t[n].row-1]&&(t[n-1]={text:t[n-1],row:t[n].row-1},e[t[n].row-1]={text:e[t[n].row-1],row:n-1});return{o:e,n:t}}return function(t,n){t=t.replace(/\s+$/,""),n=n.replace(/\s+$/,"");var r,o,i="",a=e(""===t?[]:t.split(/\s+/),""===n?[]:n.split(/\s+/)),s=t.match(/\s+/g),l=n.match(/\s+/g);if(null==s?s=[" "]:s.push(" "),null==l?l=[" "]:l.push(" "),0===a.n.length)for(r=0;r<a.o.length;r++)i+="<del>"+a.o[r]+s[r]+"</del>";else{if(null==a.n[0].text)for(n=0;n<a.o.length&&null==a.o[n].text;n++)i+="<del>"+a.o[n]+s[n]+"</del>";for(r=0;r<a.n.length;r++)if(null==a.n[r].text)i+="<ins>"+a.n[r]+l[r]+"</ins>";else{for(o="",n=a.n[r].row+1;n<a.o.length&&null==a.o[n].text;n++)o+="<del>"+a.o[n]+s[n]+"</del>";i+=" "+a.n[r].text+l[r]+o}}return i}}(),"undefined"!=typeof exports&&f(exports,v)}(function(){return this}.call());