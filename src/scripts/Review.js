// This module changes the review message value into an interpolated html representation, while retaining object form

const Review = (reviewObject) => {
    reviewObject["reviewMessage"] = `<div class="review" id="review--${reviewObject.id}">~ "${reviewObject.reviewMessage}"</div>`
}


export default Review