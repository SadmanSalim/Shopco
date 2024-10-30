var swiper = new Swiper(".mySwiper", {
    spaceBetween: 24,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    breakpoints: {
        300: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1400: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
      },
  });