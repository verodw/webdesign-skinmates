// // Home.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
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
    axios.get('https://makeup-api.herokuapp.com/api/v1/products.json?rating_greater_than=3.5&rating_less_than=4.2&price_greater_than=7.5&price_less_than=9.5')
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
      <div className='see-more-section'>
        <a className='see-more' href={seemorelink}>See more<img src='/arrow-next.png'></img></a>
      </div>
      {/* Footer Section */ }
      <Footer status={status} />

    </div>
  );
};

export default Home;

// Home.js
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Navbar from './Navbar';
// import Footer from './Footer';
// import ImageSlider from './imgslider';
// import MakeupReviewSection from './makeupreview';
// import PaginationComponent from './Pagination'; 
// import './App.css';
// import './Home.css';

// const Home = ({ status }) => {
//   const [makeupReviews, setMakeupReviews] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 10;

//   // Define sliderImages
//   const sliderImages = [
//     { url: process.env.PUBLIC_URL + '/banner1.jpeg' },
//     { url: process.env.PUBLIC_URL + '/banner2.jpeg' },
//     { url: process.env.PUBLIC_URL + '/banner3.jpeg' },
//     { url: process.env.PUBLIC_URL + '/banner4.jpeg' },
//   ];

//   useEffect(() => {
//     // Fetch makeup reviews from the API
//     axios.get('https://makeup-api.herokuapp.com/api/v1/products.json?rating_greater_than=3.5&rating_less_than=4.2&price_greater_than=7.5&price_less_than=9.5')
//       .then(response => {
//         setMakeupReviews(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching makeup reviews:', error);
//       });
//   }, []);

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = makeupReviews.slice(indexOfFirstItem, indexOfLastItem);

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const parentWidth = window.innerWidth;

//   var seemorelink = '/product';
//   if (status === 'login') {
//     seemorelink = '/product-login=true';
//   }

//   return (
//     <div>
//       {/* Header Section */}
//       <Navbar status={status} />

//       {/* Slider Section */}
//       <div> 
//        <ImageSlider slides={sliderImages} parentWidth={parentWidth} />
//       </div>

//       {/* Text Section */}
//       <div className="category-section">
//         <h1 style={{ margin: '50px' }}>
//           Begin your beauty journey here.
//         </h1>
//       </div>

//       <div className="categories">
//         {/* Categories go here */}
//       </div>

//       {/* Makeup Reviews Section */}
//       <MakeupReviewSection makeupReviews={currentItems} status={status} />
//       <div className='see-more-section'>
//         <a className='see-more' href={seemorelink}>See more<img src='/arrow-next.png'></img></a>
//       </div>

//       {/* Custom Pagination Component */}
//       <PaginationComponent
//         totalItems={makeupReviews.length}
//         itemsPerPage={itemsPerPage}
//         currentPage={currentPage}
//         onPageChange={handlePageChange}
//       />

//       {/* Footer Section */}
//       <Footer status={status} />
//     </div>
//   );
// };

// export default Home;
