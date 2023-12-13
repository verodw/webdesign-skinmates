// product.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from "./Footer";
import Navbar from './Navbar';
import MakeupReviewSection from './makeupreview';
import './App.css';
import './Home.css';

const Product = ({status}) => {

  const [makeupReviews, setMakeupReviews] = useState([]);

  console.log(status)

  useEffect(() => {
    // Fetch makeup reviews from the API
    axios.get('https://makeup-api.herokuapp.com/api/v1/products.json?rating_greater_than=3.0')
      .then(response => {
        setMakeupReviews(response.data);
      })
      .catch(error => {
        console.error('Error fetching makeup reviews:', error);
      });
  }, []);

  return(
    <div>

      {/* Header Section */}
      <Navbar status={status} />

      {/* Text Section */}
    
      <div className="category-section">
      <h1 style={{margin: '50px'}}>
        Begin your beauty journey here.
      </h1>
      </div>
      

      <div className="categories">
        <div className="category-item">Blush</div>
        <div className="category-item">Bronzer</div>
        <div className="category-item">Eyebrow</div>
        <div className="category-item">Eyeliner</div>
        <div className="category-item">Eyeshadow</div>
        <div className="category-item">Foundation</div>
        <div className="category-item">Lip liner</div>
        <div className="category-item">Lipstick</div>
        <div className="category-item">Mascara</div>
        <div className="category-item">Nail polish</div>
      </div>


      {/* Makeup Reviews Section */}
      <MakeupReviewSection makeupReviews={makeupReviews} status={status}/>
      {/* <div className="makeup-review-container">
        <MakeupReviewSection makeupReviews={makeupReviews} />
      </div> */}
      
      {/* Footer Section */ }
      <Footer status={status} />

    </div>
  );
};

export default Product;

