const modalBackdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const modalBtnOpen = document.querySelector('.modal-btn-open');
const modalBtnClose = document.querySelector('.modal-btn-close');

const disableScroll = () => {
  document.body.style.overflow = 'hidden';
};
const enableScroll = () => {
  document.body.style.overflow = 'auto';
};
const toggleModal = () => {
  modalBackdrop.classList.toggle('is-hidden');
  if (!modalBackdrop.classList.contains('is-hidden')) {
    disableScroll();
  } else {
    enableScroll();
  }
};
const closeModal = () => {
  modalBackdrop.classList.add('is-hidden');
  enableScroll();
};
const closeModalIfClickedOutside = event => {
  if (!modal.contains(event.target) && !modalBtnOpen.contains(event.target)) {
    closeModal();
  }
};

modalBtnOpen.addEventListener('click', () => {
  toggleModal();
  disableScroll();
});
modalBtnClose.addEventListener('click', () => {
  toggleModal();
  enableScroll();
});
document.addEventListener('click', closeModalIfClickedOutside);
