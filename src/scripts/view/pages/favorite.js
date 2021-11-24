import FavoriteRestoIdb from '../../data/favoriteresto-idb';
import { createRestoItemTemplate } from '../templates/template-creator';
import anmLoading from '../../utils/anm_loading';

const favorite = {
  async render() {
    return `
        <component-favorit></component-favorit>
        <component-loading></component-loading>
        `;
  },

  async afterRender() {
    anmLoading.play();
    const AllResto = await FavoriteRestoIdb.getAllRestos();
    const restoContainer = document.querySelector('.allRestaurant');
    if (AllResto.length === 0) {
      restoContainer.innerHTML = `
      <h2 style="color: white;">Maaf data anda belum ada</h2>
      `;
    } else {
      AllResto.forEach((data) => {
        restoContainer.innerHTML += createRestoItemTemplate(data);
      });
    }
  },
};

export default favorite;
