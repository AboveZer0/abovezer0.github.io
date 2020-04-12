$(document).ready(function() {
  $(".header__burger").click(function(event) {
    $(".header__burger,.header__menu").toggleClass("active");
    $("body").toggleClass("lock");
  });
  $(".button__js").click(function(event) {
      $(".overlay").toggleClass("overlay__js");
      $("body").toggleClass("lock");
  });
  $(".close__modal").click(function(event) {
      $(".overlay").toggleClass("overlay__js");
      $("body").toggleClass("lock");
  });
});