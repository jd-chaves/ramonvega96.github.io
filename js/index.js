"use strict";

/*
Función para dibujar el chulito dentro del
gadget de carga junto al logo del colegio.
*/
function myF(){
  $(".circle-loader-checked").toggleClass("load-complete");
  $(".checkmark").toggle();
}

/*
Función que dispara el evento de tiempo para dibujar el chulito dentro del
gadget de carga junto al logo del colegio.
*/
setTimeout(function() { myF(); }, 3000);


/*
Función que permite la aleatoriedad del gadget "cookie quote". Se obtiene un número
aleatorio n (quoteId). Luego se leen n objetos del archivo quotes.json y el atributo "quote" del
objeto n es el que se presenta en el documento html.
*/
$.getJSON("./docs/quotes.json", function (data) {
  var quoteId = Math.floor(Math.random()*148) + 1;
  var i = 0;
  $.each(data, function (index, value) {
    i = i + 1;
    if(i === quoteId){
      $(".cookie-quote").text("\"" + value.quote + "\"");
    }    
  });
});

