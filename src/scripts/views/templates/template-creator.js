import CONFIG from '../../globals/config'

const createRestaurantItemTemplate = (restaurant) => `
  <div class="card">
    <div class="card__header">
      <img class="card__thumb" src="${
        restaurant.pictureId
          ? CONFIG.BASE_IMAGE_SMALL_URL + restaurant.pictureId
          : 'https://picsum.photos/id/666/800/450?grayscale'
      }" alt="${restaurant.name}" title="${restaurant.name}" crossorigin="anonymous">
      <p class="card__city">${restaurant.city}</p>
    </div>
    <div class="card__content">
      <p class="card__rating">
          Rating :
          <span class="card__rating__number">${restaurant.rating}</span>
      </p>
      <h2><a href="/#/detail/${restaurant.id}" class="card__title">${
  restaurant.name
}</a></h2>
      <p class="card__desc">${restaurant.description.slice(0, 150)}...</p>
    </div>
  </div>
`
const createRestaurantDetailTemplate = (restaurant) => `
  <section class="detail__main">
    <img class="detail__image" src="${
      restaurant.pictureId
        ? CONFIG.BASE_IMAGE_MEDIUM_URL + restaurant.pictureId
        : 'https://picsum.photos/id/666/800/450?grayscale'
    }" alt="${restaurant.name}" title="${restaurant.name}" crossorigin="anonymous">
    <div class="detail__info">
      <h2 class="detail__name">${restaurant.name}</h2>
      <h3>Rating</h3>
      <p class="detail__rating">${restaurant.rating}</p>
      <h3>Kota</h3>
      <p class="detail__city">${restaurant.city}</p>
      <h3>Alamat</h3>
      <p class="detail__addr">${restaurant.address}</p>
    </div>
    <div class="detail__desc">
      <h3>Deskripsi</h3>
      <p class="detail__desc__text">${restaurant.description}</p>
    </div>
  </section>
  <section class="detail__menus">
    <h2>Menu</h2>
    <div class="detail__menu">
      <h3>Makanan</h3>
      <ul>
        ${restaurant?.menus.foods
          .map(
            (food) => `
          <li><p>${food.name}</p></li>
          `
          )
          .join('')}
      </ul>
    </div>
    <div class="detail__menu">
      <h3>Minuman</h3>
      <ul>
        ${restaurant?.menus.drinks
          .map(
            (drink) => `
          <li><p>${drink.name}</p></li>
          `
          )
          .join('')}
      </ul>
    </div>
  </section>
  <section class="detail__reviews">
    <h2>Review</h2>
    <ul>
      ${restaurant?.customerReviews
        .map(
          (customerReview) => `
        <li>
          <p class="detail__review__name">${customerReview.name}</p>
          <p class="detail__review__text">${customerReview.review}</p>
          <p class="detail__review__date">${customerReview.date}</p>
        </li>
        `
        )
        .join('')}
    </ul>
    <div class="review__add">
      <h2>Tambahkan Review</h2>
      <form class="review__form">
        <div class="form__group">
          <label for="inputName">Nama</label>
          <input id="inputName" type="text">
        </div>
        <div class="form__group">
          <label for="inputReview">Review</label>
          <input id="inputReview" type="text">
        </div>
        <div class="form__group">
          <button id="buttonReview" type="submit">Tambah</button>
        </div>
      </form>
    </div>
  </section>
`

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-star-o" aria-hidden="true"></i>
  </button>
`

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-star" aria-hidden="true"></i>
  </button>
`

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate
}
