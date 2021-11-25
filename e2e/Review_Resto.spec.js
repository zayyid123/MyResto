/* eslint-disable no-undef */
const assert = require('assert');

Feature('Review Resto');

Before(({ I }) => {
  I.amOnPage('/');
  I.seeElement('.allRestaurant .card a');
  const firstRestaurant = locate('.allRestaurant .card a').first();
  I.click(firstRestaurant);
});

const reviewer = 'ZAYYID COGAN';
const textReviewer = 'Enak banget masakannya';

Scenario('add review to restaurant', async ({ I }) => {
  I.seeElement('.inputReview');

  I.seeElement('#myReviewName');
  I.fillField('#myReviewName', reviewer);
  I.fillField('#myReview', textReviewer);
  I.click('.myReviewButton');

  I.click('.swal2-confirm');

  const lastReview = locate('.cardReview .innercard .account p').last();
  const myReviewer = await I.grabTextFrom(lastReview);

  // refresh resto
  I.amOnPage('/');
  I.seeElement('.allRestaurant .card a');
  const firstRestaurant = locate('.allRestaurant .card a').first();
  I.click(firstRestaurant);

  assert.strictEqual(reviewer, myReviewer);
});
