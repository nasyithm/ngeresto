import DicodingRestaurantAPISource from '../../data/dicodingrestaurantapi-source'
import UrlParser from '../../routes/url-parser'
import { createRestaurantDetailTemplate } from '../templates/template-creator'

const Detail = {
  async render() {
    return `
      <div id="restaurant" class="detail"></div>
    `
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const restaurant = await DicodingRestaurantAPISource.detailRestaurant(url.id)
    const restaurantContainer = document.querySelector('#restaurant')
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant)
  }
}

export default Detail
