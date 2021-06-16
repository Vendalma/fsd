import BgSlider from '@/assets/js/BgSlider';

const registrationContent = document.querySelector('.js-registration__content');
const images = [
  'url("../../assets/images/bg-image-1.jpg")',
  'url("../../assets/images/bg-image-4.jpg")',
];
new BgSlider(registrationContent, images);
