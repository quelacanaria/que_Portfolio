const swiperCards = new Swiper('.aboutSliderWraper', {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 3,
  grabCursor: true,
centeredSlides: true,
  pagination: {
    el: '.aboutSwiperPagination',
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    prevEl: '.aboutSwiperButtonNext',
    nextEl: '.aboutSwiperButtonPrev',
    grabCursor: true,
  },

  autoplay: {
    delay: 2500, // 2.5 seconds
    disableOnInteraction: false, // keeps autoplay after manual navigation
  },

  breakpoints: {
    1200:{slidesPerView:5, spaceBetween: 10},
    900: { slidesPerView: 5, spaceBetween: 10},
    800: { slidesPerView: 5, spaceBetween: 10},
    700: { slidesPerView: 5, spaceBetween: 10},
    600: { slidesPerView: 5, spaceBetween: 10},
    500: { slidesPerView: 5, spaceBetween: 10},
    400: { slidesPerView: 5, spaceBetween: 10},
    300: { slidesPerView: 5, spaceBetween: 8},
    0: { slidesPerView: 5, spaceBetween: 8},
  },
});

window.addEventListener('resize', () => {
  swiperCards.update();
});