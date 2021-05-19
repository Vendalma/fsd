import './pagination';

$('.js-pagination__block').pagination({
  itemsOnPage: 12,
  pages: 15,
  displayedPages: 3,
  edges: 1,
  ellipsePageSet: false,
  selectOnClick: false,
  nextText: 'arrow_forward',
  prevText: '',
  cssStyle: 'light-theme',
});
