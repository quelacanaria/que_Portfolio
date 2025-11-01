const swiperProjects = new Swiper('.projectSliderWraper',{
    loop: true,
    spaceBetween: 30,
    slidesPerView: 3,
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
        1200: {slidesPerView: 3, spaceBetween: 30,},
        1100: {slidesPerView: 3, spaceBetween: 20,},
        1000: {slidesPerView: 3, spaceBetween: 10,},
        900: { slidesPerView: 3, spaceBetween: 10},
        800: { slidesPerView: 3, spaceBetween: 10},
        700: { slidesPerView: 3, spaceBetween: 5},
        600: { slidesPerView: 3, spaceBetween: 4},
        500: { slidesPerView: 3, spaceBetween: 2},
        400: { slidesPerView: 3, spaceBetween: 2},
        300: { slidesPerView: 3, spaceBetween: 2},
        0: { slidesPerView: 3, spaceBetween: 2},
    },

});

window.addEventListener('resize', () => {
  swiperProjects.update();
});