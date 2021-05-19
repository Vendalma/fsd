import BgSlider from '@/assets/js/BgSlider';

const sliderWrapper = document.querySelector('.js-landing__content');
const images = [
  'url("../../assets/images/bg-image-1.jpg")',
  'url("../../assets/images/bg-image-2.jpg")',
  'url("../../assets/images/bg-image-3.jpg")',
];
new BgSlider(sliderWrapper, images);
