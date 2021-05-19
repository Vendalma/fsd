import '@components/button/button';
import '@components/link/link';
import '@components/logo/logo';
import './header.scss';

class Header {
  constructor(container) {
    this.container = container;
    this.init();
    this.clickContainer();
  }

  init() {
    this.navBar = this.container.parentElement.querySelector('.js-header__nav-bar');
    this.iconMenu = this.container.querySelector('.js-header__menu-icon_opened');
    this.iconClose = this.container.querySelector('.js-header__menu-icon_closed');
  }

  clickContainer() {
    this.container.addEventListener('click', this.onContainerClick.bind(this));
  }

  onContainerClick() {
    this.navBar.classList.toggle('header__nav-bar_open');
    this.iconMenu.classList.toggle('header__menu-icon_hidden');
    this.iconClose.classList.toggle('header__menu-icon_hidden');
  }
}
export default Header;
