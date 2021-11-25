/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Resto');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('liking a restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.allRestaurant .card a');

  const firstRestaurant = locate('.allRestaurant .card a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.allRestaurant .card');
  const likedRestaurantName = await I.grabTextFrom('.allRestaurant .card a');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});
