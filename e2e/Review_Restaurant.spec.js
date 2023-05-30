/* eslint-disable no-undef */
const assert = require('assert')

Feature('Review Restaurant')

Before(({ I }) => {
  I.amOnPage('/')
})

Scenario('adding review one restaurant', async ({ I }) => {
  I.waitForElement('.card__title')
  I.seeElement('.card__title a')

  I.click(locate('.card__title a').first())

  I.waitForElement('.review__form')
  I.fillField('#inputName', 'Test')
  I.fillField('#inputReview', 'Coba')
  I.click('#buttonReview')

  I.waitForElement('.detail__reviews')
  const reviewName = await I.grabTextFrom(
    locate('.detail__review__name').last()
  )
  const reviewTest = await I.grabTextFrom(
    locate('.detail__review__text').last()
  )

  assert.strictEqual(reviewName, 'Test')
  assert.strictEqual(reviewTest, 'Coba')
})
