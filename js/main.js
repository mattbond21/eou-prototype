  // CHECKBOX
  $("button.checkbox").click(function(){
    if ($(this).hasClass("selected") == true){
      $(this).removeClass("selected");
    } else {
      $(this).addClass("selected");
    }
  });

  //RADIO
$(".radio").click(function(){
  if ($(this).hasClass("selected") == true){
    $(this).removeClass("selected");
  }else{
    $(this).addClass("selected");
  }
});

$(document).ready(function() {
  $('.drawer').drawer();
});
