$(document).ready(function() {
  $(".header__burger").click(function(event) {
    $(".header__burger,.header__menu").toggleClass("active");
    $("body").toggleClass("lock");
    });
  $(".form__title").click(function(event) {
    $(".form").toggleClass("form__active");
    });
  $(".form__title").click(function(event) {
    $(".form__title").toggleClass("form__act");
    });
});