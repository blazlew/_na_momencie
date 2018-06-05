$(document).ready(function(){
  $(".nav a").on("click", function(){
    $(".nav").find(".active").removeClass("active");
    $(this).parent().addClass("active");
    $('.navbar-collapse.in').collapse('hide');
  });
  $("body").on("click", function(){
    $('.navbar-collapse.in').collapse('hide');
  });
});
