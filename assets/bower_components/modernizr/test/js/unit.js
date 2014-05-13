QUnit.begin=function(){console.log("Starting test suite"),console.log("================================================\n")},QUnit.moduleDone=function(e){0===e.failed?console.log("✔ All tests passed in '"+e.name+"' module"):console.log("✖ "+e.failed+" tests failed in '"+e.name+"' module")},QUnit.done=function(e){console.log("\n================================================"),console.log("Tests completed in "+e.runtime+" milliseconds"),console.log(e.passed+" tests of "+e.total+" passed, "+e.failed+" failed.")},module("Basics",{setup:function(){},teardown:function(){}}),test("globals set up",function(){ok(window.Modernizr,"global modernizr object created")}),test("bind is implemented",function(){function e(e,t){o=this+" -> x:"+e+", y:"+t}ok(Function.prototype.bind,"bind is a member of Function.prototype");var t=function(){return this.modernizr};t=t.bind({modernizr:"just awsome"}),equal("just awsome",t(),"bind works as expected");var o;G=e.bind("'a'","'b'"),H=G.bind("'Cannot rebind this!'","'c'"),G(1,2),equal(o,"'a' -> x:'b', y:1"),H(1,2),equal(o,"'a' -> x:'b', y:'c'");var n=new e(1,2);equal(o,"[object Object] -> x:1, y:2");var r=new G(1,2);equal(o,"[object Object] -> x:'b', y:1");var i=new H(1,2);equal(o,"[object Object] -> x:'b', y:'c'"),ok(n instanceof e,"f instanceof F"),ok(r instanceof e,"g instanceof F"),ok(i instanceof e,"h instanceof F"),ok("prototype"in e,'"prototype" in F'),raises(function(){Function.bind.call(void 0)});var s=String.prototype.charAt.bind("abc");equal(s(1),"b","Objects that allow call but not construct can be bound..."),equal(1,Function.bind.length,"it exists")}),test("document.documentElement is valid and correct",1,function(){equal(document.documentElement,document.getElementsByTagName("html")[0])}),test("no-js class is gone.",function(){ok(!/(?:^|\s)no-js(?:^|\s)/.test(document.documentElement.className),"no-js class is gone"),ok(/(?:^|\s)js(?:^|\s)/.test(document.documentElement.className),"html.js class is present"),ok(/(?:^|\s)\+no-js(?:\s|$)/.test(document.documentElement.className),"html.+no-js class is still present"),ok(/(?:^|\s)no-js-(?:\s|$)/.test(document.documentElement.className),"html.no-js- class is still present"),ok(/(?:^|\s)i-has-no-js(?:\s|$)/.test(document.documentElement.className),"html.i-has-no-js class is still present"),document.querySelector&&ok(document.querySelector("html.js")==document.documentElement,"document.querySelector('html.js') matches.")}),test("html shim worked",function(){expect(2);var e=document.getElementsByTagName("section")[0];e.id="html5section",ok(1===e.childNodes.length,"unknown elements dont collapse"),e.style.color="red",ok(/red|#ff0000/i.test(e.style.color),"unknown elements are styleable")}),module("Modernizr classes and bools",{setup:function(){},teardown:function(){}}),test("html classes are looking good",function(){for(var e=TEST.trim(document.documentElement.className).split(/\s+/),t=Object.keys(Modernizr),o=t,n=-1,r=TEST.privates.length;++n<r;){var i=TEST.privates[n];equal(-1,TEST.inArray(i,e),"private Modernizr object "+i+"should not have matching classes"),equal(-1,TEST.inArray("no-"+i,e),"private Modernizr object no-"+i+" should not have matching classes")}$.each(TEST.deprecated,function(){o.splice(TEST.inArray(i,o),1)}),e.length!==o;for(var s,n=0,r=e.length;r>n;n++)s=e[n],/^(?:js|\+no-js|no-js-|i-has-no-js)$/.test(s)||(0===s.indexOf("no-")?(s=s.replace("no-",""),equal(Modernizr[s],!1,s+" is correctly false in the classes and object")):equal(Modernizr[s],!0,s+" is correctly true in the classes and object"));for(var s,n=0,r=e.length;r>n;n++)equal(e[n],e[n].toLowerCase(),"all classes are lowerCase.");var a=document.documentElement.className;$.each(["\\+no-js","no-js-","i-has-no-js"],function(e,t){a=a.replace(new RegExp("(^|\\s)"+t+"(\\s|$)","g"),"$1$2")}),equal(/[^\s]no-/.test(a),!1,"whitespace between all classes.")}),test("Modernizr properties are looking good",function(){var e=TEST.API.concat(TEST.inputs).concat(TEST.audvid).concat(TEST.privates).concat(["textarea"]);for(var t in window.Modernizr)if(Modernizr.hasOwnProperty(t)){if(TEST.inArray(t,e)>=0)continue;ok(Modernizr[t]===!0||Modernizr[t]===!1,"Modernizr."+t+" is a straight up boolean"),equal(t,t.toLowerCase(),"all properties are lowerCase.")}}),test("Modernizr.audio and Modernizr.video",function(){for(var e=-1,t=TEST.audvid.length;++e<t;){var o=TEST.audvid[e];"true"==Modernizr[o].toString()?(ok(Modernizr[o],"Modernizr."+o+" is truthy."),equal(1==Modernizr[o],!0,"Modernizr."+o+" is == true"),equal("object"==typeof Modernizr[o],!0,"Moderizr."+o+" is truly an object"),equal(Modernizr[o]!==!0,!0,"Modernizr."+o+" is !== true")):equal(1!=Modernizr[o],!0,"Modernizr."+o+" is != true")}}),test("Modernizr results match expected values",function(){equal(!!document.createElement("canvas").getContext,Modernizr.canvas,"canvas test consistent"),equal(!!window.Worker,Modernizr.webworkers,"web workers test consistent")}),module("Modernizr's API methods",{setup:function(){},teardown:function(){}}),test("Modernizr.addTest()",22,function(){var e=document.documentElement;Modernizr.addTest("testtrue",function(){return!0}),Modernizr.addTest("testtruthy",function(){return 100}),Modernizr.addTest("testfalse",function(){return!1}),Modernizr.addTest("testfalsy",function(){return void 0}),ok(e.className.indexOf(" testtrue")>=0,"positive class added"),equal(Modernizr.testtrue,!0,"positive prop added"),ok(e.className.indexOf(" testtruthy")>=0,"positive class added"),equal(Modernizr.testtruthy,100,"truthy value is not casted to straight boolean"),ok(e.className.indexOf(" no-testfalse")>=0,"negative class added"),equal(Modernizr.testfalse,!1,"negative prop added"),ok(e.className.indexOf(" no-testfalsy")>=0,"negative class added"),equal(Modernizr.testfalsy,void 0,"falsy value is not casted to straight boolean"),Modernizr.addTest("testcamelCase",function(){return!0}),ok(-1===e.className.indexOf(" testcamelCase"),"camelCase test name toLowerCase()'d"),Modernizr.addTest("testboolfalse",!1),ok(~e.className.indexOf(" no-testboolfalse"),"Modernizr.addTest(feature, bool): negative class added"),equal(Modernizr.testboolfalse,!1,"Modernizr.addTest(feature, bool): negative prop added"),Modernizr.addTest("testbooltrue",!0),ok(~e.className.indexOf(" testbooltrue"),"Modernizr.addTest(feature, bool): positive class added"),equal(Modernizr.testbooltrue,!0,"Modernizr.addTest(feature, bool): positive prop added"),Modernizr.addTest({testobjboolfalse:!1,testobjbooltrue:!0}),ok(~e.className.indexOf(" no-testobjboolfalse"),"Modernizr.addTest({feature: bool}): negative class added"),equal(Modernizr.testobjboolfalse,!1,"Modernizr.addTest({feature: bool}): negative prop added"),ok(~e.className.indexOf(" testobjbooltrue"),"Modernizr.addTest({feature: bool}): positive class added"),equal(Modernizr.testobjbooltrue,!0,"Modernizr.addTest({feature: bool}): positive prop added"),Modernizr.addTest({testobjfnfalse:function(){return!1},testobjfntrue:function(){return!0}}),ok(~e.className.indexOf(" no-testobjfnfalse"),"Modernizr.addTest({feature: bool}): negative class added"),equal(Modernizr.testobjfnfalse,!1,"Modernizr.addTest({feature: bool}): negative prop added"),ok(~e.className.indexOf(" testobjfntrue"),"Modernizr.addTest({feature: bool}): positive class added"),equal(Modernizr.testobjfntrue,!0,"Modernizr.addTest({feature: bool}): positive prop added"),Modernizr.addTest("testchainone",!0).addTest({testchaintwo:!0}).addTest("testchainthree",function(){return!0}),ok(Modernizr.testchainone==Modernizr.testchaintwo==Modernizr.testchainthree,"addTest is chainable")}),test("Modernizr.mq: media query testing",function(){var e=$("html");$.mobile={},$.mobile.media=function(){var t={},o=$("<div id='jquery-mediatest'>"),n=$("<body>").append(o);return function(r){if(!(r in t)){var i=document.createElement("style"),s="@media "+r+" { #jquery-mediatest { position:absolute; } }";i.type="text/css",i.styleSheet?i.styleSheet.cssText=s:i.appendChild(document.createTextNode(s)),e.prepend(n).prepend(i),t[r]="absolute"===o.css("position"),n.add(i).remove()}return t[r]}}(),ok(Modernizr.mq,"Modernizr.mq() doesn' freak out."),equal($.mobile.media("only screen"),Modernizr.mq("only screen"),"screen media query matches jQuery mobile's result"),equal(Modernizr.mq("only all"),Modernizr.mq("only all"),"Cache hit matches")}),test("Modernizr.hasEvent()",function(){ok("function"==typeof Modernizr.hasEvent,"Modernizr.hasEvent() is a function"),equal(Modernizr.hasEvent("click"),!0,"click event is supported"),equal(Modernizr.hasEvent("modernizrcustomevent"),!1,"random event is definitely not supported")}),test("Modernizr.testStyles()",function(){equal(typeof Modernizr.testStyles,"function","Modernizr.testStyles() is a function");var e="#modernizr{ width: 9px; height: 4px; font-size: 0; color: papayawhip; }";Modernizr.testStyles(e,function(t,o){equal(e,o,"rule passsed back matches what i gave it."),equal(t.offsetWidth,9,"width was set through the style"),equal(t.offsetHeight,4,"height was set through the style"),equal(t.id,"modernizr","element is indeed the modernizr element")})}),test("Modernizr._[properties]",function(){equal(6,Modernizr._prefixes.length,"Modernizr._prefixes has 6 items"),equal(4,Modernizr._domPrefixes.length,"Modernizr.domPrefixes has 4 items")}),test("Modernizr.testProp()",function(){equal(!0,Modernizr.testProp("margin"),"Everyone supports margin"),equal(!1,Modernizr.testProp("happiness"),"Nobody supports the happiness style. :("),equal(!0,Modernizr.testProp("fontSize"),"Everyone supports fontSize"),equal(!1,Modernizr.testProp("font-size"),"Nobody supports font-size"),equal("pointerEvents"in document.createElement("div").style,Modernizr.testProp("pointerEvents"),"results for `pointer-events` are consistent with a homegrown feature test")}),test("Modernizr.testAllProps()",function(){equal(!0,Modernizr.testAllProps("margin"),"Everyone supports margin"),equal(!1,Modernizr.testAllProps("happiness"),"Nobody supports the happiness style. :("),equal(!0,Modernizr.testAllProps("fontSize"),"Everyone supports fontSize"),equal(!1,Modernizr.testAllProps("font-size"),"Nobody supports font-size"),equal(Modernizr.csstransitions,Modernizr.testAllProps("transition"),"Modernizr result matches API result: csstransitions"),equal(Modernizr.csscolumns,Modernizr.testAllProps("columnCount"),"Modernizr result matches API result: csscolumns")}),test("Modernizr.prefixed() - css and DOM resolving",function(){function e(e,t){var o=["Moz","Khtml","Webkit","O","ms"],n=["moz","khtml","webkit","o","ms"],r=document.createElement("div"),i=e.charAt(0).toUpperCase()+e.slice(1);if(t){if(e in t)return e;for(var s=n.length;s--;)if(n[s]+i in t)return n[s]+i}else{if(e in r.style)return e;for(var s=o.length;s--;)if(o[s]+i in r.style)return o[s]+i}return!1}for(var t=["transition","backgroundSize","boxSizing","borderImage","borderRadius","boxShadow","columnCount"],o=[{prop:"requestAnimationFrame",obj:window},{prop:"querySelectorAll",obj:document},{prop:"matchesSelector",obj:document.createElement("div")}],n=-1,r=t.length;++n<r;){var i=t[n];equal(Modernizr.prefixed(i),e(i),"results for "+i+" match the homebaked prefix finder")}for(var n=-1,r=o.length;++n<r;){var i=o[n];ok(!!~Modernizr.prefixed(i.prop,i.obj,!1).toString().indexOf(e(i.prop,i.obj)),"results for "+i.prop+" match the homebaked prefix finder")}}),test("Modernizr.prefixed autobind",function(){for(var e,t=["ms","moz","webkit","o"],o=0;o<t.length&&!e;++o)e=window[t[o]+"RequestAnimationFrame"]&&t[o]+"RequestAnimationFrame";if(e&&(equal("function",typeof Modernizr.prefixed("requestAnimationFrame",window),"Modernizr.prefixed('requestAnimationFrame', window) returns a function"),equal(e,Modernizr.prefixed("requestAnimationFrame",window,!1),"Modernizr.prefixed('requestAnimationFrame', window, false) returns a string (the prop name)")),document.body.webkitMatchesSelector||document.body.mozMatchesSelector){var n=Modernizr.prefixed("matchesSelector",HTMLElement.prototype,document.body);equal("function",typeof n,"Modernizr.prefixed('matchesSelector', HTMLElement.prototype, document.body) returns a function"),equal(!0,n("body"),"Modernizr.prefixed('matchesSelector', HTMLElement.prototype, document.body) is scoped to the body")}window.webkitNotifications&&equal("object",typeof Modernizr.prefixed("Notifications",window),"Modernizr.prefixed('Notifications') returns an object"),"undefined"!=typeof document.webkitIsFullScreen&&equal("boolean",typeof Modernizr.prefixed("isFullScreen",document),"Modernizr.prefixed('isFullScreen') returns a boolean"),"undefined"!=typeof document.mozFullScreen&&equal("boolean",typeof Modernizr.prefixed("fullScreen",document),"Modernizr.prefixed('fullScreen') returns a boolean"),document.body.style.WebkitAnimation&&(equal("string",typeof Modernizr.prefixed("animation",document.body.style),"Modernizr.prefixed('animation', document.body.style) returns value of that, as a string"),equal(animationStyle.toLowerCase(),Modernizr.prefixed("animation",document.body.style,!1).toLowerCase(),"Modernizr.prefixed('animation', document.body.style, false) returns the (case-normalized) name of the property: webkitanimation")),equal(!1,Modernizr.prefixed("doSomethingAmazing$#$",window),"Modernizr.prefixed('doSomethingAmazing$#$', window) : Gobbledygook with prefixed(str,obj) returns false"),equal(!1,Modernizr.prefixed("doSomethingAmazing$#$",window,document.body),"Modernizr.prefixed('doSomethingAmazing$#$', window) : Gobbledygook with prefixed(str,obj, scope) returns false"),equal(!1,Modernizr.prefixed("doSomethingAmazing$#$",window,!1),"Modernizr.prefixed('doSomethingAmazing$#$', window) : Gobbledygook with prefixed(str,obj, false) returns false")});