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
      $('.carousel.carousel-slider').carousel({fullWidth: true});
      window.setInterval(() => $('.carousel').carousel('next'), 4000);
      
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

  $('.inicio').on('click', function(){
    ga('send', 'event', 'Enlaces', 'Inicio', 0);
  });
  $('.psicologa').on('click', function(){
    ga('send', 'event', 'Enlaces', 'Psicologa', 0);
  });
  $('.dondeEstamos').on('click', function(){
    ga('send', 'event', 'Enlaces', 'Donde estamos, 0');
  });
  $('.madrid').on('click', function(){
    ga('send', 'event', 'Enlaces', 'Madrid', 0);
  });
  $('.colmenar').on('click', function(){
    ga('send', 'event', 'Enlaces', 'Colmenar', 0);
  });
  $('.miraflores').on('click', function(){
    ga('send', 'event', 'Enlaces', 'Miraflores', 0);
  });
  $('.adultos').on('click', function(){
    ga('send', 'event', 'Enlaces', 'Adultos', 0);
  });
  $('.adolescentes').on('click', function(){
    ga('send', 'event', 'Enlaces', 'Adolescentes', 0);
  });
  $('.pareja').on('click', function(){
    ga('send', 'event', 'Enlaces', 'Pareja', 0);
  });
  $('.blog').on('click', function(){
    ga('send', 'event', 'Enlaces', 'Blog', 0);
  });
  $('.llamanos').on('click', function(){
    ga('send', 'event', 'Enlaces', 'Llamanos', 0);
  });
  $('.llamanosMovil').on('click', function(){
    ga('send', 'event', 'Enlaces', 'Llamanos movil', 0);
  });
  $('#instagram').on('click', function(){
    ga('send', 'event', 'Enlaces', 'Instagram', 0);
  });
  $('#facebook').on('click', function(){
    ga('send', 'event', 'Enlaces', 'Facebook', 0);
  });
});