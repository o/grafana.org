Modernizr.addTest("cssvminunit",function(){var e;return Modernizr.testStyles("#modernizr { width: 50vmin; }",function(t){var n=window.innerWidth/100,r=window.innerHeight/100,i=parseInt((window.getComputedStyle?getComputedStyle(t,null):t.currentStyle).width,10);e=parseInt(50*Math.min(n,r),10)==i}),e});