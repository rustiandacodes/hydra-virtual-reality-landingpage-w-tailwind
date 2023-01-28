// hamburger
let hamburger = document.querySelector('#hamburger')
let navPhone = document.querySelector('nav')
let navLinks = document.querySelector('#links')
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('hamburger-active')
  navPhone.classList.toggle('nav-phone')
  navLinks.classList.toggle('nav-links')
  navLinks.classList.toggle('hidden')
})

// navbar fixed
window.onscroll = () => {
  const header = document.querySelector('header')
  const fixedNav = header.offsetTop
  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed')
  } else {
    header.classList.remove('navbar-fixed')
  }
}

// swiper js
let swiper = new Swiper('.mySwiper', {
  spaceBetween: 30,
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
    1020: {
      slidesPerView: 3,
    },
  },
})

// swiper js
let swiperslider = new Swiper('.servicesSwiper', {
  spaceBetween: 20,
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
      slidesPerView: 2,
    },
    800: {
      slidesPerView: 3,
    },
    1020: {
      slidesPerView: 4,
    },
  },
})

console.log('berhasil')
