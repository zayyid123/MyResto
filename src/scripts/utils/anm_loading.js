/* eslint-disable import/no-extraneous-dependencies */
import lottie from 'lottie-web';
import animationData from '../data/loading.json';

const anmLoading = {
  play() {
    const heroAnimation = lottie.loadAnimation({
      container: document.querySelector('.loading'),
      renderer: 'svg',
      animationData,
    });

    heroAnimation.goToAndPlay(0, true);
  },
};

export default anmLoading;
