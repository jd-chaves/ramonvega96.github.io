"use strict";

function myF(){
  $(".circle-loader-checked").toggleClass("load-complete");
  $(".checkmark").toggle();
}

setTimeout(function() { myF(); }, 3000);

$.getJSON("./docs/quotes.json", function (data) {
  var quoteId = Math.floor(Math.random()*150);
  var i = 0;
  $.each(data, function (index, value) {
    i = i + 1;
    if(i === quoteId){
      $(".cookie-quote").text("\"" + value.quote + "\"");
    }    
  });
});