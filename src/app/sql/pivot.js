var define = window.define || window.ace.define;

define("pivot", ["$rootScope","require", "exports", "module"], function(require, exports) {
        "use strict";

    alert('asd');


    require(["d3"], function(d3) {
        	require([ "c3",'jquery-ui.min','pivot','c3_renderers'], function(c3) {
        		window.c3 = c3;
        		// ......
        	});
        });






});