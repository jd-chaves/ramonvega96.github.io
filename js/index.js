function myF(){
  $(".circle-loader-checked").toggleClass("load-complete");
  $(".checkmark").toggle();
}

setTimeout(function() { myF(); }, 3000);
