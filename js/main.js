//burger menu//
let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__link');
let search = document.querySelector('.header__btn');

burger.addEventListener('click',
  function () {
    burger.classList.toggle('burger--active');
    menu.classList.toggle('header__nav--active');
    document.body.classList.toggle('stop-scroll');
    search.classList.toggle('header__btn--stop');
  })

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {
    burger.classList.remove('burger--active');
    menu.classList.remove('header__nav--active');
    document.body.classList.remove('stop-scroll');
    search.classList.remove('header__btn--stop');
  })
})

//search button//
//let search = document.querySelector('.header__btn');//
let form = document.querySelector('.search-form');
let exit = document.querySelector('.search-form__close');

search.addEventListener('click',
  function () {
    form.classList.toggle('search-form_show');
    search.classList.toggle('header__btn--hide');
  });

exit.addEventListener('click',
  function () {
    form.classList.remove('search-form_show');
    search.classList.remove('header__btn--hide');
  });

//swiper //
const swiper = new Swiper('.swiper-container', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },

  a11y: {
    paginationBulletMessage: 'Тут название слайда {{index}}',
  }
});

//tabs//
let tabsBtn = document.querySelectorAll('.hwaw__tab');
let tabsItem = document.querySelectorAll('.hwaw__content');

tabsBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) { btn.classList.remove('hwaw__tab--active') });
    e.currentTarget.classList.add('hwaw__tab--active');

    tabsItem.forEach(function (element) { element.classList.remove('hwaw__content--active') });
    document.querySelector(`[data-target="${path}"]`).classList.add('hwaw__content--active');
  });
});

//faq accordion//
new Accordion('.accordion-list', {
  elementClass: 'accordion',
  triggerClass: 'accordion__control',
  panelClass: 'accordion__content',
  activeClass: 'accordion--active'
});
