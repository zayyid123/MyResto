/* eslint-disable no-undef */
const assert = require('assert');

Feature('Unliking Resto');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('unliking one restaurant', async ({ I }) => {
  // lakukan like dulu sebelum unlike
  I.amOnPage('/');
  I.seeElement('.allRestaurant .card a');
  const firstRestaurant = locate('.allRestaurant .card a').first();
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.allRestaurant .card a');
  const firstLikedRestaurant = locate('.allRestaurant .card a').first();
  const firstLikedRestaurantName = await I.grabTextFrom(firstLikedRestaurant);
  I.click(firstLikedRestaurant);

  I.seeElement('.descriptDetail');
  const likedRestaurantName = await I.grabTextFrom('.descriptDetail h2');
  assert.strictEqual(firstLikedRestaurantName, likedRestaurantName);

  I.seeElement('[aria-label="unlike this resto"]');
  I.click('[aria-label="unlike this resto"]');

  I.amOnPage('/#/favorite');
  I.dontSeeElement(likedRestaurantName);
});
