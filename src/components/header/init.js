import Header from './Header';

const buttonMenu = document.querySelectorAll('.js-header__burger-menu');
buttonMenu.forEach((elem) => {
  new Header(elem);
});
