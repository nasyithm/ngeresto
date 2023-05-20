import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb'
import { createRestaurantItemTemplate } from '../templates/template-creator'

const Favorite = {
  async render() {
    return `
      <article id="content" class="content favorite">
        <h2 class="content__title">Restoran Favorit</h2>
        <div id="favoriteDefault"></div>
        <div id="restaurantList" class="content__list"></div>
      </article>
    `
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant()
    const restaurantsContainer = document.querySelector('#restaurantList')
    if (restaurants.length !== 0) {
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML +=
          createRestaurantItemTemplate(restaurant)
      })
    } else {
      const favoriteDefault = document.querySelector('#favoriteDefault')
      favoriteDefault.innerHTML = '<p>Tidak Ada Restoran</p>'
    }
  }
}

export default Favorite
