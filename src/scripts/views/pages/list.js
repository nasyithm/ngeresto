import DicodingRestaurantAPISource from '../../data/dicodingrestaurantapi-source'
import { createRestaurantItemTemplate } from '../templates/template-creator'

const List = {
  async render() {
    return `
      <div class="hero">
        <div class="hero__inner">
          <h1 class="hero__title">NgeResto</h1>
          <p class="hero__desc">
            NgeResto merupakan website tempat mencari restoran dalam berbagai
            rating untuk memudahkan Anda mencari restoran yang diinginkan.
          </p>
          <p class="hero__tagline">
            <em>Mau Cari Restoran? Ya NgeResto Aja!</em>
          </p>
        </div>
      </div>
      <article class="content">
        <h2 class="content__title">Cari Restoran</h2>
        <div id="restaurant-list" class="content__list"></div>
      </article>
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

export default List
