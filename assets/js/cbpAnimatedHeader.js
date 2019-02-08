/**
 * cbpAnimatedHeader.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var cbpAnimatedHeader=function(){function e(){window.addEventListener("scroll",function(a){c||(c=!0,setTimeout(f,250))},!1)}function f(){var a=g();a>=d?$(".navbar").addClass("navbar-shrink"):$(".navbar").removeClass("navbar-shrink"),c=!1}function g(){return window.pageYOffset||a.scrollTop}var a=document.documentElement,c=(document.querySelector(".navbar-default"),!1),d=300;e()}();