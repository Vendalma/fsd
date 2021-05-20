import Inputmask from 'inputmask';
import './text-field';

const element = document.querySelector('.js-text-field__input_masked');
Inputmask({
  alias: 'datetime',
  inputFormat: 'dd.mm.yyyy',
  placeholder: 'ДД.ММ.ГГГГ',
}).mask(element);
