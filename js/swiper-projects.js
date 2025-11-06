

const swiperProjects = new Swiper('.projectSliderWraper',{
    loop: true,
    grabCursor: true,
    centeredSlides: true,

    pagination: {
        el: '.projectSwiperButtonPagination',
        clickable: true,
        dynamicBullets: true,
    },

    navigation: {
        prevEl: '.projectSwiperButtonNext',
        nextEl: '.projectSwiperButtonPrev',
        grabCursor: true,
    },


    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },

    breakpoints: {
        1200: {slidesPerView: 3, spaceBetween: 50},
        1150: {slidesPerView: 3, spaceBetween: 50},
        1100: {slidesPerView: 3, spaceBetween: 50},
        1000: {slidesPerView: 3, spaceBetween: 60},
        900: { slidesPerView: 2, spaceBetween: -170},
        800: { slidesPerView: 2, spaceBetween: -20},
        700: { slidesPerView: 2, spaceBetween: 20},
        600: { slidesPerView: 1, spaceBetween: 50},
        500: { slidesPerView: 1, spaceBetween: 50},
        400: { slidesPerView: 1, spaceBetween: 20},
        300: { slidesPerView: 1, spaceBetween: 20},
        200: { slidesPerView: 1, spaceBetween: 20},
        0: { slidesPerView: 3, spaceBetween: 30},
    },

});

window.addEventListener('resize', () => {
  swiperProjects.update();
});