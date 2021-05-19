import '@components/button/button';
import './dropdown.scss';

class Dropdown {
  constructor(container) {
    this.container = container;
    this.data = {};
    this.init();
    this.clickOnInput();
    this.clickClearButton();
    this.clickApplyButton();
    this.checkItemScore();
    this.countContainerListener();
  }

  init() {
    this.input = this.container.querySelector('.js-dropdown__input');
    this.selectList = this.container.querySelector('.js-dropdown__select-list');
    this.icon = this.container.querySelector('.js-dropdown__icon');
    this.countContainer = this.container.querySelectorAll('.js-dropdown__count');
    if (this.checkTypeDropdown()) {
      this.clearButton = this.container.querySelector('.js-dropdown__button_type_clear');
      this.applyButton = this.container.querySelector('.js-dropdown__button_type_apply');
    }
  }

  clickOnInput() {
    this.input.addEventListener('click', this.openContainer.bind(this));
  }

  openContainer() {
    this.selectList.classList.toggle('dropdown__select-list_closed');
    this.selectList.classList.toggle('dropdown__select-list_opened');

    this.input.classList.toggle('dropdown__input_closed');
    this.input.classList.toggle('dropdown__input_opened');

    this.icon.classList.toggle('dropdown__icon_closed');
    this.icon.classList.toggle('dropdown__icon_opened');
  }

  onMinClick(elem) {
    const score = elem.nextElementSibling;
    if (Number(score.textContent) > 0) {
      score.textContent = `${Number(score.textContent) - 1}`;
    }
    if (Number(score.textContent) <= 0) {
      this.hideMinButton(elem);
    }
    return Number(score.textContent);
  }

  hideMinButton(elem) {
    elem.setAttribute('disabled', 'disabled');
  }

  setMinButton(elem) {
    elem.removeAttribute('disabled');
  }

  hideClearButton() {
    if (this.checkCountProp() && this.checkTypeDropdown()) {
      this.clearButton.classList.add('dropdown__button_hidden');
    }
  }

  setClearButton() {
    if (this.checkTypeDropdown()) {
      this.clearButton.classList.remove('dropdown__button_hidden');
    }
  }

  onPlusClick(elem) {
    const score = elem.previousElementSibling;
    score.textContent = `${Number(score.textContent) + 1}`;
    this.setMinButton(score.previousElementSibling);
    this.setClearButton();
    return Number(score.textContent);
  }

  countContainerListener() {
    this.countContainer.forEach((item) => {
      item.addEventListener('click', this.onCountContainerClick.bind(this));
    });
  }

  onCountContainerClick(event) {
    let score;
    const { id } = event.target.parentElement.dataset;
    if (event.target.classList.contains('js-dropdown__button_type_plus')) {
      score = this.onPlusClick(event.target);
    } else if (event.target.classList.contains('js-dropdown__button_type_min')) {
      score = this.onMinClick(event.target);
    }
    this.changeCounterProp(id, score);
    this.renderStr();
  }

  changeCounterProp(counterId, newScore) {
    this.data[counterId].score = newScore;
  }

  checkTypeDropdown() {
    return this.container.classList.contains('dropdown_type_guests');
  }

  renderStr() {
    let str = '';
    Object.values(this.data).forEach((values) => {
      const { name, score } = values;
      if (score > 0) {
        str += `${score} ${this.setRightName(score, name.split('|'))}, `;
      }
    });
    if (str === '' && this.checkTypeDropdown()) {
      this.input.placeholder = 'Сколько гостей';
      this.input.value = null;
      this.hideClearButton();
    } else if (str === '' && !this.checkTypeDropdown()) {
      this.input.placeholder = 'Какие удобства';
      this.input.value = null;
      this.hideClearButton();
    } else {
      this.input.value = str.substring(0, str.length - 2);
    }
  }

  setRightName(num, arrItemName) {
    const calcCount = Math.abs(num) % 100;
    const calcCountRemainder = calcCount % 10;
    if (calcCount > 10 && calcCount < 20) {
      return arrItemName[2];
    }
    if (calcCountRemainder > 1 && calcCountRemainder < 5) {
      return arrItemName[1];
    }
    if (calcCountRemainder === 1) {
      return arrItemName[0];
    }
    return arrItemName[2];
  }

  checkCountProp() {
    return (
      Object.values(this.data).reduce((acc, currentValue) => acc + currentValue.score, 0) === 0
    );
  }

  setScoresRow() {
    this.countContainer.forEach((item) => {
      const scoreContainer = item.querySelector('.js-dropdown__score');
      scoreContainer.textContent = '0';
      this.hideMinButton(scoreContainer.previousElementSibling);
    });
  }

  clickClearButton() {
    if (this.checkTypeDropdown()) {
      this.clearButton.addEventListener('click', this.onClickClearButton.bind(this));
    }
  }

  onClickClearButton() {
    Object.keys(this.data).forEach((key) => {
      this.changeCounterProp(key, 0);
    });
    this.setScoresRow();
    this.hideClearButton();
    this.renderStr();
  }

  clickApplyButton() {
    if (this.checkTypeDropdown()) {
      this.applyButton.addEventListener('click', this.openContainer.bind(this));
    }
  }

  checkItemScore() {
    this.countContainer.forEach((item) => {
      const scoreContainer = item.querySelector('.js-dropdown__score');
      this.data[item.dataset.id] = {};
      Object.assign(this.data[item.dataset.id], {
        name: `${item.dataset.name}`,
        score: `${Number(scoreContainer.textContent)}`,
      });
      if (Number(scoreContainer.textContent) > 0) {
        this.setMinButton(scoreContainer.previousElementSibling);
        this.setClearButton();
      } else {
        this.hideMinButton(scoreContainer.previousElementSibling);
      }
    });
    this.renderStr();
  }
}
export default Dropdown;
