import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'
import 'swiper/swiper.scss'
import 'swiper/modules/pagination.scss'
import '../scss/style.scss'
import BurgerMenu from './burger.js'
import PopUp from './popup.js'

// ПОДКЛЮЧЕНИЕ СЛАЙДЕРА
window.addEventListener('DOMContentLoaded', () => {
  const resizableSwiper = (
    breakpoint,
    swiperClass,
    swiperSettings,
    callback
  ) => {
    let swiper

    breakpoint = window.matchMedia(breakpoint)

    const enableSwiper = function (className, settings) {
      swiper = new Swiper(className, settings)

      if (callback) {
        callback(swiper)
      }
    }

    const checker = function () {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings)
      } else {
        if (swiper !== undefined) swiper.destroy(true, true)
        return
      }
    }

    breakpoint.addEventListener('change', checker)
    checker()
  }

  resizableSwiper('(max-width: 767px)', '.js-slider-brands', {
    modules: [Pagination],
    loop: true,
    spaceBetween: 16,
    direction: 'horizontal',
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  })

  resizableSwiper('(max-width: 767px)', '.js-slider-technic', {
    modules: [Pagination],
    loop: true,
    spaceBetween: 16,
    direction: 'horizontal',
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  })

  resizableSwiper('(max-width: 767px)', '.js-slider-price', {
    modules: [Pagination],
    loop: true,
    spaceBetween: 16,
    direction: 'horizontal',
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  })
})

// КНОПКА РАСКРЫТИЯ ТЕКСТА СЕКЦИИ ABOUT
const aboutButton = document.querySelector('.about__btn')
const aboutTextContent = document.querySelector('.about__text-hidden')
const readIconMore = document.querySelector('.about__btn-ico')
const aboutTextButton = document.querySelector('.about__btn-text')

aboutButton.addEventListener('click', () => {
  if (!aboutTextContent.classList.contains('about__text-hidden--open')) {
    aboutTextContent.classList.remove('about__text-hidden--close')
    aboutTextContent.classList.add('about__text-hidden--open')
  } else {
    aboutTextContent.classList.add('about__text-hidden--close')
    aboutTextContent.classList.remove('about__text-hidden--open')
  }

  readIconMore.classList.toggle('about__btn-ico--rotate')

  if (!aboutTextContent.classList.contains('about__text-hidden--open')) {
    aboutTextButton.textContent = 'Читать далее'
  } else {
    aboutTextButton.textContent = 'Свернуть'
  }
})

// КНОПКA РАСКРЫТИЯ/СКРЫТИЯ ДЛЯ ТЕКСТА, СЕКЦИИ BRANDS
const brandsButton = document.querySelector('.brands__btn')
const brandsContent = document.querySelector('.js-slider-brands__wrapper')
const brandsIconMore = document.querySelector('.brands__btn-ico')
const brandsTextButton = document.querySelector('.brands__btn-text')

brandsButton.addEventListener('click', () => {
  if (!brandsContent.classList.contains('js-slider-brands__wrapper--open')) {
    brandsContent.classList.remove('js-slider-brands__wrapper--close')
    brandsContent.classList.add('js-slider-brands__wrapper--open')
  } else {
    brandsContent.classList.add('js-slider-brands__wrapper--close')
    brandsContent.classList.remove('js-slider-brands__wrapper--open')
  }

  brandsIconMore.classList.toggle('brands__btn-ico--rotate')

  if (!brandsContent.classList.contains('js-slider-brands__wrapper--open')) {
    brandsTextButton.textContent = 'Показать все'
  } else {
    brandsTextButton.textContent = 'Скрыть'
  }
})

// КНОПКА РАСКРЫТИЯ/СКРЫТИЯ ДЛЯ ТЕКСТА, СЕКЦИИ TECHNIC
const technicButton = document.querySelector('.technic__btn')
const technicContent = document.querySelector('.js-slider-technic__wrapper')
const technicIconMore = document.querySelector('.technic__btn-ico')
const technicTextButton = document.querySelector('.technic__btn-text')

technicButton.addEventListener('click', () => {
  if (!technicContent.classList.contains('js-slider-technic__wrapper--open')) {
    technicContent.classList.remove('js-slider-technic__wrapper--close')
    technicContent.classList.add('js-slider-technic__wrapper--open')
  } else {
    technicContent.classList.add('js-slider-technic__wrapper--close')
    technicContent.classList.remove('js-slider-technic__wrapper--open')
  }

  technicIconMore.classList.toggle('technic__btn-ico--rotate')

  if (!technicContent.classList.contains('js-slider-technic__wrapper--open')) {
    technicTextButton.textContent = 'Показать все'
  } else {
    technicTextButton.textContent = 'Скрыть'
  }
})
