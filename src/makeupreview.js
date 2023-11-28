// MakeupReview.js
import React from 'react';

const MakeupReview = ({ makeupReviews }) => (
  <div className="makeup-review-container">
    <div>
    <h2>Makeup Reviews</h2>
    </div>
    <div className="makeup-reviews">
      {makeupReviews.map((review, index) => (
        <div key={review.id} className="makeup-card">
          <p>Name: {review.name}</p>
          <p>Brand: {review.brand}</p>
          <p>Description: {review.description}</p>
          <p>Rating: {review.rating}</p>
          <img
            src={review.image}
            alt={`${review.name} - ${review.brand}`}
            style={{ width: '100%', height: 'auto', maxWidth: '100%' }}
          />
          {index < makeupReviews.length - 1 && <hr className="review-divider" />}
        </div>
      ))}
    </div>
  </div>
);

export default MakeupReview;




