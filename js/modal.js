const modalBackdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const modalBtnOpen = document.querySelector('.modal-btn-open');
const modalBtnClose = document.querySelector('.modal-btn-close');

const toggleModal = () => modalBackdrop.classList.toggle('is-hidden');
const closeModal = () => modalBackdrop.classList.add('is-hidden');
const closeModalIfClickedOutside = event => {
  if (!modal.contains(event.target) && !modalBtnOpen.contains(event.target)) {
    closeModal();
  }
};

modalBtnOpen.addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click', toggleModal);
document.addEventListener('click', closeModalIfClickedOutside);
