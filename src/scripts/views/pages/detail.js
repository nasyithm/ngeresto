import DicodingRestaurantApiSource from '../../data/dicodingrestaurantapi-source'
import UrlParser from '../../routes/url-parser'
import AddReviewInitiator from '../../utils/add-review-initiator'
import LikeButtonPresenter from '../../utils/like-button-presenter'
import { createRestaurantDetailTemplate } from '../templates/template-creator'

const Detail = {
  async render() {
    return `
      <article id="content">
        <div id="restaurant" class="detail"></div>
        <div id="likeButtonContainer"></div>
      </article>
    `
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const restaurant = await DicodingRestaurantApiSource.detailRestaurant(
      url.id
    )
    const restaurantContainer = document.querySelector('#restaurant')

    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant)

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        city: restaurant.city,
        rating: restaurant.rating
      }
    })

    AddReviewInitiator.init({
      reviewId: restaurant.id
    })
  }
}

export default Detail
