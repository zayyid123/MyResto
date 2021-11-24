/* eslint-disable import/extensions */
import randomInfo from '../../utils/random_info';
import anmLottie from '../../utils/anm_lottie.js';
import anmLoading from '../../utils/anm_loading';
import restoSource from '../../data/resto-source.js';
import { createRestoItemTemplate } from '../templates/template-creator';

const dataInfo = require('../../data/info.json');

const home = {
  async render() {
    return `
    <header>
        <component-hero></component-hero>
    </header>

    <component-info></component-info>

    <component-resto></component-resto>
    <component-loading></component-loading>
      `;
  },

  async afterRender() {
    randomInfo.random(dataInfo);
    anmLottie.play();
    anmLoading.play();
    const dataResto = await restoSource.myhome();
    const AllDataResto = dataResto.restaurants;
    const restoContainer = document.querySelector('.allRestaurant');
    AllDataResto.forEach((data) => {
      restoContainer.innerHTML += createRestoItemTemplate(data);
    });
  },
};

export default home;
