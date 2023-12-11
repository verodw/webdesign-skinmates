import React from 'react';
import './App.css';
import './ReviewList.css';

const ReviewList = () => {
    return (
        <div className='review-list'>
            <b>Username</b>
            <div className='rating-div'>
                <span>Rating: </span><span>5.0</span>
            </div>
            <p>Bagus!!!</p>
        </div>
    );
}

export default ReviewList;