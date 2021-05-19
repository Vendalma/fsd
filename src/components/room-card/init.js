import './room-card';

const roomSlider = document.querySelectorAll('.js-room-card__slider');
roomSlider.forEach((elem) => {
  $(elem).lightSlider({
    item: 1,
    nextHtml: '<i class="material-icons">expand_more</i>',
    prevHtml: '<i class="material-icons">expand_more</i>',
  });
});
