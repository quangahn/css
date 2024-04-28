$(".slider-nav").slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: ".slider-for",
  dots: true,
  centerMode: false,
  focusOnSelect: true,
});
$(".slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  autoplay: true,//2 cái auto chạy
  autoplaySpeed: 2000,//2 cái auto chạy cái này là set time chạy
  asNavFor: ".slider-nav",
});