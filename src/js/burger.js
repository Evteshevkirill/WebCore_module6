const BODY_FIXED_CLASSNAME = 'body_fixed'
const bodyNode = document.querySelector('body')

const BURGER_OPENED_CLASSNAME = 'menu-fixed__open'

const burgerNode = document.querySelector('.js-menu-fixed')
const burgerBtnNode = document.querySelector('.js-burger-btn')
const burgerContentNode = document.querySelector('.js-menu-fixed__wrapper')
const burgerBtnCloseNode = document.querySelector('.js-menu-fixed--close')

burgerBtnNode.addEventListener('click', toggleBurger)
burgerBtnCloseNode.addEventListener('click', toggleBurger)

burgerNode.addEventListener('click', (event) => {
  const isClickOutsideContent = !event
    .composedPath()
    .includes(burgerContentNode)

  if (isClickOutsideContent) {
    toggleBurger()
  }
})

function toggleBurger() {
  burgerNode.classList.toggle(BURGER_OPENED_CLASSNAME)
  bodyNode.classList.toggle(BODY_FIXED_CLASSNAME)
}
