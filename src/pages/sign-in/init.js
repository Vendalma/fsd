import BgSlider from '@/assets/js/BgSlider';

const signInContent = document.querySelector('.js-sign-in__content');
const images = [
  'url("../../assets/images/bg-image-1.jpg")',
  'url("../../assets/images/bg-image-4.jpg")',
];
new BgSlider(signInContent, images);
