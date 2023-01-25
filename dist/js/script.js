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

console.log(navLinks)

// navbar fixed
window.onscroll = () => {
  const header = document.querySelector('header')
  const fixedNav = header.offsetTop
  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed')
  } else {
    header.classList.remove('navbar-fixed')
  }
  console.log(window.pageYOffset)
}
