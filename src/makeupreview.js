// MakeupReview.js
import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

const MakeupReview = ({ makeupReviews, status }) => {

  function toDetail(product){
    // var link = '/product/detail/'
    // link += product_id
    // navigate(link)

    navigate(
      '/product/detail', 
      {state: {
        product: product,
        status: status
      }})
  }

  const navigate  = useNavigate();

  return (
    <div className="makeup-review-container">
      <h2>Makeup Reviews</h2>
      <div className="review-list">
        {makeupReviews.map((review, index) => (
          <div className='makeup-product'>
            <div key={review.id} className="makeup-review" onClick={() => toDetail(review)}>
              <div className='makeup-card'>
                <img className='makeup-image'
                  src={review.api_featured_image}
                  alt={`${review.name} - ${review.brand}`}
                />
                <div className='makeup-desc'>
                  <p>Name: {review.name}</p>
                  <p>Brand: {review.brand}</p>
                  <p>Description: {review.description}</p>
                  <p>Rating: {review.rating}</p>
                </div>
              </div>
              {index < makeupReviews.length - 1  && <hr className="review-divider" />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MakeupReview;




