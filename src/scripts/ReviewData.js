// This module retrieves review data

const ReviewData = () => {
    return fetch("http://localhost:8088/reviews")
        .then(response => response.json())
}


export default ReviewData