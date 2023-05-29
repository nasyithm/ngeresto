/* eslint-disable no-undef */
const assert = require('assert')

Feature('Liking Restaurant')

Before(({ I }) => {
  I.amOnPage('/#/favorite')
})

Scenario('showing empty liked restaurants', ({ I }) => {
  I.see('Tidak Ada Restoran', '.restaurant-item__not__found')
})

Scenario('liking and unliking one restaurant', async ({ I }) => {
  I.see('Tidak Ada Restoran', '.restaurant-item__not__found')

  I.amOnPage('/')

  I.waitForElement('.card__title')
  I.seeElement('.card__title a')

  const firstRestaurant = locate('.card__title a').first()
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant)
  I.click(firstRestaurant)

  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('/#/favorite')

  I.waitForElement('.card')
  I.seeElement('.card')
  const likedRestaurantTitle = await I.grabTextFrom('.card__title')

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle)

  I.click(locate('.card__title a'))

  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('/#/favorite')

  I.see('Tidak Ada Restoran', '.restaurant-item__not__found')
})
