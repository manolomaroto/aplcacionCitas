$(document).ready(function(){
    var altura = $(window).height();    
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

      checkCookie();
      $("#botonAceptarCookies").click(setCookie);
      
      
      
      function setCookie() {
      
      document.cookie = "cookie=true";
      $("#cajacookies").hide("slow");
  }
  
      function getCookie(cname) {
      var name = cname + "=";
      var ca = document.cookie.split(';');
      for(var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') {
              c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
              return c.substring(name.length, c.length);
          }
      }
      return "";
  }
  
  function checkCookie() {
      var cookieText = getCookie("cookie");
      if (cookieText == "true") {
          cajacookies.style.display = 'none';
      }else{
        $("#cajacookies").css({'position':'fixed','top': altura - $("#cajacookies").height()});
      }
  }


});