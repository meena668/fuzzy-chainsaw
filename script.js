document.addEventListener('DOMContentLoaded', function () {
    const reviewsContainer = document.getElementById('reviews-container');
    const addReviewBtn = document.getElementById('add-review-btn');

    addReviewBtn.addEventListener('click', function () {
        const review = prompt('Leave a review:');
        if (review) {
            addReview(review);
        }
    });

    function addReview(reviewText) {
        const reviewElement = document.createElement('p');
        reviewElement.textContent = reviewText;
        reviewsContainer.appendChild(reviewElement);
    }
});
