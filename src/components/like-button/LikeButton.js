import { boundMethod } from 'autobind-decorator';
import './like-button.scss';

class LikeButton {
  constructor(container) {
    this.container = container;
    this.init();
    this.changeCount();
  }

  init() {
    this.count = this.container.querySelector('.js-like-button__count');
  }

  changeCount() {
    this.container.addEventListener('click', this.onContainerClick);
  }

  @boundMethod
  onContainerClick() {
    if (this.container.classList.contains('like-button_active')) {
      this.container.classList.remove('like-button_active');
      this.count.textContent = `${Number(this.count.textContent) - 1}`;
    } else {
      this.container.classList.add('like-button_active');
      this.count.textContent = `${Number(this.count.textContent) + 1}`;
    }
  }
}
export default LikeButton;
