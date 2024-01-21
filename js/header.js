window.addEventListener('scroll', function () {
  if (pageYOffset > 117) {
    document.querySelector('.header').classList.add('active');
  } else {
    document.querySelector('.header').classList.remove('active');
  }
});
