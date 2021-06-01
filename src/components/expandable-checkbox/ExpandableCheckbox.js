import { boundMethod } from 'autobind-decorator';

class ExpandableCheckbox {
  constructor(container) {
    this.container = container;
    this.init();
    this.openList();
  }

  init() {
    this.items = this.container.querySelector('.js-expandable-checkbox__items');
    this.name = this.container.querySelector('.js-expandable-checkbox__name');
    this.arrow = this.container.querySelector('.js-expandable-checkbox__arrow');
  }

  openList() {
    this.name.addEventListener('click', this.onClick);
  }

  @boundMethod
  onClick() {
    this.items.classList.toggle('expandable-checkbox__items_hidden');
    this.arrow.classList.toggle('expandable-checkbox__arrow_opened');
  }
}
export default ExpandableCheckbox;
