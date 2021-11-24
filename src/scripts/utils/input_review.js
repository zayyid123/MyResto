/* eslint-disable no-new */
import restoSource from '../data/resto-source';
import { repeatReview } from './repeat_detail';

class actionRev {
  static async actionInputReview(data) {
    const nameInput = document.querySelector('#myReviewName').value.toUpperCase();
    const reviewInput = document.querySelector('#myReview').value;
    const dataInput = {
      id: data,
      name: nameInput,
      review: reviewInput,
    };
    const hasil = await restoSource.postReview(dataInput);
    // manipulasi dom review
    const componentReview = document.querySelector('.innerReview');
    const AllDataReview = hasil.restaurant.customerReviews;
    componentReview.innerHTML = '';
    await repeatReview(AllDataReview, componentReview);
  }
}

export default actionRev;
