// Home.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ImageSlider from './imgslider';
import MakeupReviewSection from './makeupreview';
import './App.css';

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
  <header style={{ position: 'fixed', top: 0, left: 0, right: 0, padding: '35px', borderBottom: '1px solid #ccc', background: '#ffff', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '50px', zIndex: 1 }}>
    <div>
      <img src={process.env.PUBLIC_URL + '/logo-skinmates.png'} alt="Skinmates Logo" style={{ width: '150px', height: 'auto' }} />
    </div>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <div style={{ display: 'flex', alignItems: 'center', width: '100%', maxWidth: '600px', margin: '0 auto' }}>
        <input type="text" placeholder="Find Products..." style={{ flex: 2, marginLeft: '10px', padding: '10px', fontSize: '16px' }} />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginLeft: '10px' }}>
        <button style={{ padding: '15px', fontSize: '16px', fontWeight: 'bold', background: 'pink', color: '#fff', border: 'none'}}><a href='/login'>Login or Signup</a></button>
        <button style={{ padding: '15px', fontSize: '16px', background: 'transparent', border: 'none' }}>
          <img src={process.env.PUBLIC_URL + '/notification.png'} alt="Notification Icon" style={{ width: '30px', height: 'auto' }} />
        </button>
      </div>
    </div>
  </header>
  

      {/* Slider Section */}
      <div style={{ marginTop: '120px' }}> 
        <ImageSlider slides={sliderImages} parentWidth={parentWidth} />
      </div>

      {/* Text Section */}
    
      <div className="category-section">
      <h1 style={{ textAlign: 'center', margin: '50px', fontFamily: 'Poppins, sans-serif' }}>
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
