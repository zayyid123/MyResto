/* eslint-disable import/prefer-default-export */
/* eslint-disable no-param-reassign */
import { myRepeatFoodAndDrink, myReview } from '../view/templates/template-creator';

const repeatMenu = (allData, component) => {
  allData.forEach((data) => {
    const number = allData.indexOf(data) + 1;
    component.innerHTML += myRepeatFoodAndDrink(data, number);
  });
};

const repeatReview = (allData, component) => {
  allData.forEach((data) => {
    component.innerHTML += myReview(data);
  });
};

export { repeatMenu, repeatReview };
