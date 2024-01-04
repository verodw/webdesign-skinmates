 // Home.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ImageSlider from './imgslider';
import MakeupReviewSection from './makeupreview';
import './App.css';
import './Home.css';

const Home = ({status}) => {
  const [makeupReviews, setMakeupReviews] = useState([]);

  useEffect(() => {
    // Fetch makeup reviews from the API
    axios.get('https://makeup-api.herokuapp.com/api/v1/products.json?rating_greater_than=3.5&rating_less_than=4.2&price_greater_than=5.0&price_less_than=7.5')
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

  var seemorelink = '/product';
  if(status=='login'){
    seemorelink = '/product-login=true';
  }

  var blushLink = '/blush'; var bronzerLink='/bronzer'; var eyebrowLink='/eyebrow'; var eyelinerLink='/eyeliner';
  var eyeshadowLink = '/eyeshadow'; var foundationLink='/foundation'; var liplinerLink='/lip_liner'; var lipstickLink='/lipstick'; 
  var mascaraLink='/mascara'; var nailpolishLink='/nail_polish'; 

  if(status=='login'){
    var blushLink = '/home/blush';
    var bronzerLink='/home/bronzer'; 
    var eyebrowLink='/home/eyebrow'; 
    var eyelinerLink='/home/eyeliner';
    var eyeshadowLink = '/home/eyeshadow'; 
    var foundationLink='/home/foundation'; 
    var liplinerLink='/home/lip_liner'; 
    var lipstickLink='/home/lipstick'; 
    var mascaraLink='/home/mascaralink'; 
    var nailpolishLink='/home/nail_polish';
  }

  return (
    <div>

      {/* Header Section */}
      <Navbar status={status} />

      {/* Slider Section */}
      <div> 
        <ImageSlider slides={sliderImages} parentWidth={parentWidth} />
      </div>

      {/* Text Section */}
    
      <div className="category-section">
      <h1 style={{margin: '50px'}}>
        Begin your beauty journey here.
      </h1>
      </div>

      {/* Kategori Tautan */}
      <div className="categories">
        <Link to={blushLink} className="category-item" status={status}>
          Blush
        </Link>
        <Link to={bronzerLink} className="category-item" status={status}>
          Bronzer
        </Link>
        <Link to={eyebrowLink} className="category-item" status={status}>
          Eyebrow
        </Link>
        <Link to={eyelinerLink} className="category-item" status={status}>
          Eyeliner
        </Link>
        <Link to={eyeshadowLink} className="category-item" status={status}>
          Eyeshadow
        </Link>
        <Link to={foundationLink} className="category-item" status={status}>
          Foundation
        </Link>
        <Link to={liplinerLink} className="category-item" status={status}>
          Lip Liner
        </Link>
        <Link to={lipstickLink} className="category-item" status={status}>
          Lipstick
        </Link>
        <Link to={mascaraLink} className="category-item" status={status}>
          Mascara
        </Link>
        <Link to={nailpolishLink} className="category-item" status={status}>
          Nail Polish
        </Link>
      </div>


      {/* Makeup Reviews Section */}
      <MakeupReviewSection makeupReviews={makeupReviews} status={status}/>
      <div className='see-more-section'>
        <a className='see-more' href={seemorelink}>See more<img src='/arrow-next.png'></img></a>
      </div>
      {/* Footer Section */ }
      <Footer status={status} />

    </div>
  );
};

export default Home;