// Nav JS Inicialization
var options = {};
options.edge = "left";

var elem = document.querySelector('.sidenav');
 var instance = M.Sidenav.init(elem, options);

 //Scroll Inicialization;
var scroll = new SmoothScroll('a[href*="#"]');

