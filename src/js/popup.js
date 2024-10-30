// МОДАЛЬНОЕ ОКНО MESSAGE
const BODY_FIXED_CLASSNAME = 'body_fixed'
const bodyNode = document.querySelector('body')

const POPUP_CHAT_OPENED_CLASSNAME = 'popup__chat--open'

const popupChatNode = document.querySelector('.js-popup__chat')
const btnOpenChatNode = document.querySelector('.js-btn__chat')
const btnHeaderOpenChatNode = document.querySelector('.js-header-btn__chat')
const popupChatContentNode = document.querySelector('.js-popup__content-chat')
const btnChatCloseNode = document.querySelector('.js-popup__close')

btnOpenChatNode.addEventListener('click', togglePopupChat)
btnHeaderOpenChatNode.addEventListener('click', togglePopupChat)
btnChatCloseNode.addEventListener('click', togglePopupChat)

popupChatNode.addEventListener('click', (event) => {
  const isClickOutsideContent = !event
    .composedPath()
    .includes(popupChatContentNode)

  if (isClickOutsideContent) {
    togglePopupChat()
  }
})

function togglePopupChat() {
  popupChatNode.classList.toggle(POPUP_CHAT_OPENED_CLASSNAME)
  bodyNode.classList.toggle(BODY_FIXED_CLASSNAME)
}

// МОДАЛЬНОЕ ОКНО CALL
const POPUP_CALL_OPENED_CLASSNAME = 'popup__call--open'

const popupCallNode = document.querySelector('.js-popup__call')
const btnOpenCallNode = document.querySelector('.js-btn__call')
const btnHeaderOpenCallNode = document.querySelector('.js-header-btn__call')
const popupCallContentNode = document.querySelector('.js-popup__content-call')
const btnCallCloseNode = document.querySelector('.js-popup__close-btn')

btnOpenCallNode.addEventListener('click', togglePopupCall)
btnHeaderOpenCallNode.addEventListener('click', togglePopupCall)
btnCallCloseNode.addEventListener('click', togglePopupCall)

popupCallNode.addEventListener('click', (event) => {
  const isClickOutsideContent = !event
    .composedPath()
    .includes(popupCallContentNode)

  if (isClickOutsideContent) {
    togglePopupCall()
  }
})

function togglePopupCall() {
  popupCallNode.classList.toggle(POPUP_CALL_OPENED_CLASSNAME)
  bodyNode.classList.toggle(BODY_FIXED_CLASSNAME)
}
