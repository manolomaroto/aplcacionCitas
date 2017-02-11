$(document).ready(function(){
    $("#madrid").click(function(){
        $("#madrid+aside").toggle("slow",cerrarLasOtras(0));
    });
    $("#colmenar").click(function(){
        $("#colmenar+aside").toggle("slow",cerrarLasOtras(1));
    });
    $("#miraflores").click(function(){
        $("#miraflores+aside").toggle("slow",cerrarLasOtras(2));
    });
})

var cerrarLasOtras = function(numero){
    var direcciones = $("aside");
    for(var i = 0; i < direcciones.length; i++){
        if($(direcciones[i]).css("display")=="block"){
            $(direcciones[i]).hide("slow");
        };
    }
    $(direcciones[numero]).css("display","none");
}