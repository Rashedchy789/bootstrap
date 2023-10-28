$(function () {
  // SLICK SLIDER
  $('#banner').slick({
    arrows: false,
    dots: true,
    fade: true,
    dotsClass: 'bannerDots container',
  });
  // BOOTSTRAP TOOLTIP
  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );
  const tooltipList = [...tooltipTriggerList].map(
    tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl)
  );

  $('.timing').countdown('2023/11/12', function (event) {
    $('.days').text(event.strftime('%D'));
    $('.hour').text(event.strftime('%H'));
    $('.mins').text(event.strftime('%M'));
    $('.sec').text(event.strftime('%S'));
  });
});
