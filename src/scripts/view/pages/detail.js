import { getDataDetail, getDataId } from '../../utils/get_DataDetail';
import { createRestoDetailTemplate, myInputReview } from '../templates/template-creator';
import { repeatMenu, repeatReview } from '../../utils/repeat_detail';
import actionRev from '../../utils/input_review';
import anmLoading from '../../utils/anm_loading';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const detail = {
  async render() {
    return `
        <component-detail></component-detail>
        <component-loading></component-loading>
        `;
  },

  async afterRender() {
    anmLoading.play();
    const resto = await getDataDetail();
    const dataId = getDataId();
    const allDetailResto = resto.restaurant;
    const restoContainer = document.querySelector('.detail');
    restoContainer.innerHTML = createRestoDetailTemplate(allDetailResto);

    // manipulasi dom menu
    const componentFood = document.querySelector('.innerFood');
    const componentDrink = document.querySelector('.innerDrink');
    const AllDataFood = allDetailResto.menus.foods;
    const AllDataDrink = allDetailResto.menus.drinks;
    repeatMenu(AllDataFood, componentFood);
    repeatMenu(AllDataDrink, componentDrink);

    // manipulasi input review
    const componentInputReview = document.querySelector('.containerRev');
    componentInputReview.innerHTML += myInputReview();

    // manipulasi dom review
    const componentReview = document.querySelector('.innerReview');
    const AllDataReview = allDetailResto.customerReviews;
    repeatReview(AllDataReview, componentReview);

    // input review
    const btnSubmit = document.querySelector('.myReviewButton');
    btnSubmit.addEventListener('click', () => {
      actionRev.actionInputReview(dataId);
    });

    // button like
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: allDetailResto.id,
        name: allDetailResto.name,
        description: allDetailResto.description,
        city: allDetailResto.city,
        pictureId: allDetailResto.pictureId,
        rating: allDetailResto.rating,
      },
    });
  },
};

export default detail;
