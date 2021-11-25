/* eslint-disable import/no-extraneous-dependencies */
import lottie from 'lottie-web';
import animationData from '../data/myLottie.json';

const anmLottie = {
  play() {
    const heroAnimation = lottie.loadAnimation({
      container: document.querySelector('.myLottie'),
      renderer: 'svg',
      animationData,
    });

    heroAnimation.goToAndPlay(0, true);
  },
};

export default anmLottie;
