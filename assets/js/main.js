/* Animate scroll */
$("a").click(function () {
   event.preventDefault();
   $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top + "px"
   }, {
      duration: 700,
      easing: "swing"
   });
   return false;
});
/* ====================== */

/* burger */
$('.burger-icon').click(function () {
   event.preventDefault();
   $('.burger-menu').fadeToggle();
})