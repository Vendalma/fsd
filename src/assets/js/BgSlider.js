import { boundMethod } from 'autobind-decorator';

class BgSlider {
  constructor(container, images) {
    this.container = container;
    this.images = images; /* eslint-disable-line */

    setInterval(this.changeBg, 30000);
  }

  @boundMethod
  changeBg() {
    const bg = this.images[Math.floor(Math.random() * this.images.length)];
    this.container.style.backgroundImage = bg;
  }
}
export default BgSlider;
