import CONFIG from '../globals/config'

const AddReviewInitiator = {
  init({ reviewId }) {
    this._reviewId = reviewId
    this._addReview()
  },

  _addReview() {
    const name = document.querySelector('#inputName')
    const review = document.querySelector('#inputReview')
    const buttonReview = document.querySelector('#buttonReview')

    buttonReview.addEventListener('click', (event) => {
      const customerReview = {
        id: this._reviewId,
        name: name.value,
        review: review.value
      }
      this._postReview(customerReview)
    })
  },

  _postReview(customerReview) {
    fetch(`${CONFIG.BASE_URL}review`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(customerReview)
    })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export default AddReviewInitiator
