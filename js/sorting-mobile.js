const sortingBackdrop = document.querySelector('.sorting-mobile-backdrop');
const sorting = document.querySelector('.sorting-mobile');
const sortingBtnOpen = document.querySelector('.sorting-mobile-open');
const sortingBtnClose = document.querySelectorAll('.sorting-mobile-close');

const toggleSorting = () => {
  sortingBackdrop.classList.toggle('is-hidden');
  sorting.classList.toggle('is-close');
};
const closeSorting = () => {
  sortingBackdrop.classList.add('is-hidden');
  sorting.classList.add('is-close');
};
const closeSortingIfClickedOutside = event => {
  if (
    !sorting.contains(event.target) &&
    !sortingBtnOpen.contains(event.target)
  ) {
    closeSorting();
  }
};

sortingBtnOpen.addEventListener('click', toggleSorting);
sortingBtnClose.forEach(btn => btn.addEventListener('click', toggleSorting));
document.addEventListener('click', closeSortingIfClickedOutside);
