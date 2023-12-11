import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ReviewList from './ReviewList';
import './App.css';
import './Detail.css';

const Detail = () => {
    return(
        <div className='detail'>
            <Navbar status='login'/>
            <div className='product-part'>
                <div className='product-side'>
                    <h2>Product Name</h2>
                    <img src='./logo-skinmates.png' className='product-img' alt='Product Image'/>
                    <h4>Brand: Unknown</h4>
                    <h4>Rating: null</h4>
                    <p>Description ...</p>
                </div>
                <div className='review-side'>
                    <h3>Post a Review</h3>
                    <form className='create-review-part'>
                        <label>Rating</label>
                        {/* <div className='' */}
                        <input type='text' placeholder='Input a number (max: 5.0)'></input>
                        <label>Review</label>
                        <textarea placeholder='Write your review'></textarea>
                        <button className='pink-button'>Post</button>
                    </form>
                    <h3>Other Reviews</h3>
                    <div className='review-list'>
                        <ReviewList />
                    </div>
                </div>
            </div>
            <Footer status='login' />
        </div>
    );
};

export default Detail;