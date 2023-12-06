// Home.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ImageSlider from './imgslider';
import MakeupReviewSection from './makeupreview';
import './App.css';
import './Home.css';

const Home = () => {
  const [makeupReviews, setMakeupReviews] = useState([]);

  useEffect(() => {
    // Fetch makeup reviews from the API
    axios.get('http://makeup-api.herokuapp.com/api/v1/products.json')
      .then(response => {
        setMakeupReviews(response.data);
      })
      .catch(error => {
        console.error('Error fetching makeup reviews:', error);
      });
  }, []);

  const sliderImages = [
    { url: process.env.PUBLIC_URL + '/banner1.jpeg' },
    { url: process.env.PUBLIC_URL + '/banner2.jpeg' },
    { url: process.env.PUBLIC_URL + '/banner3.jpeg' },
    { url: process.env.PUBLIC_URL + '/banner4.jpeg' },
  ];

  const parentWidth = window.innerWidth; 

  return (
    <div>

      {/* Header Section */}
      <header>
        <img src={process.env.PUBLIC_URL + '/logo-skinmates.png'} alt="Skinmates Logo" className='img-logo'/>

        <input type="text" placeholder="Find Products..." className='search-bar'/>

        <div className='button-and-notif'>
            <button className='pink-button' style={{ }}><a href='/login'>Login / Signup</a></button>
            <button className='icon-button'>
              <img src={process.env.PUBLIC_URL + '/notification.png'} alt="Notification Icon" className='icon'/>
            </button>
        </div> 
      </header>
  

      {/* Slider Section */}
      <div style={{ marginTop: '120px' }}> 
        <ImageSlider slides={sliderImages} parentWidth={parentWidth} />
      </div>

      {/* Text Section */}
    
      <div className="category-section">
      <h1 style={{margin: '50px'}}>
        Begin your beauty journey here.
      </h1>
      </div>
      

      <div className="categories">
        <div className="category-item">Makeup</div>
        <div className="category-item">Cleanser</div>
        <div className="category-item">Toner</div>
        <div className="category-item">Moisturizer</div>
        <div className="category-item">Serums</div>
        <div className="category-item">Sunscreen</div>
        <div className="category-item">Mask</div>
        <div className="category-item">Eyecream</div>
        <div className="category-item">Exfoliator</div>
        <div className="category-item">Lip Balm</div>
      </div>


      {/* Makeup Reviews Section */}
    
      <div className="makeup-review-container">
        <MakeupReviewSection makeupReviews={makeupReviews} />
      </div>
      

    </div>
  );
};

export default Home;
