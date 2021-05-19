import './range-slider';

$('.js-range-slider__input').ionRangeSlider({
  keyboard: false,
  type: 'double',
  min: 0,
  max: 15900,
  from: 5000,
  to: 10000,
  postfix: '₽',
  hide_min_max: true,
  prettify_enabled: true,
  values_separator: ' - ',
});
