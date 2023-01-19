let swiper = new Swiper('.mySwiper', {
  spaceBetween: 10,
  slidesPerGroup: 1,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grapCursor: 'true',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    530: {
      slidesPerView: 1,
    },
    1100: {
      slidesPerView: 3,
    },
  },
})
