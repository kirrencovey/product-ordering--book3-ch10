// This module adds reviews to the DOM, matching them to the appropriate product

import ReviewData from "./ReviewData"
import Review from "./Review"


const ReviewList = () => {
    ReviewData()
        .then((reviewArray) => {
            let htmlReviewArray = reviewArray.map(currentReviewObject => {
                return Review(currentReviewObject)
            })
            return reviewArray
        })
        .then((reviewArray) => {
            reviewArray.forEach(element => {
                let whereToAdd = document.querySelector(`#product--${element.productID}`)
                whereToAdd.innerHTML += element.reviewMessage
            });
        })
    }


export default ReviewList