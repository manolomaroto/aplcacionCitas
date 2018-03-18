$(document).ready(function(){
    $(".button-collapse").sideNav();
    $('.parallax').parallax();
    $(".dropdown-button").dropdown();
    $('.collapsible').collapsible();
    var options = [
        {selector: '#adultos', offset: 0,callback: function(el) { Materialize.fadeInImage($(el)); } },
        {selector: '#infantil', offset: 0,callback: function(el) { Materialize.fadeInImage($(el)); } },
        {selector: '#parejas', offset: 0,callback: function(el) { Materialize.fadeInImage($(el)); } },
        {selector: '.page-footer', offset: 0,callback: function(el) { Materialize.fadeInImage($(el)); } }
        
      ];
      Materialize.scrollFire(options);
});