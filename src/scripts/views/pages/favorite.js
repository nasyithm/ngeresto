import DicodingRestaurantAPISource from '../../data/dicodingrestaurantapi-source'
import { createRestaurantItemTemplate } from '../templates/template-creator'

const Favorite = {
  async render() {
    return `
      <div class="content favorite">
        <h2 class="content__title">Restoran Favorit</h2>
        <div id="restaurant-list" class="content__list"></div>
      </div>
    `
  },

  async afterRender() {
    const restaurants = await DicodingRestaurantAPISource.listRestaurant()
    const restaurantsContainer = document.querySelector('#restaurant-list')
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant)
    })
  }
}

export default Favorite
