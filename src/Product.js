import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from "./Footer";
import Navbar from './Navbar';
import MakeupReviewSection from './makeupreview';
import PaginationComponent from './Pagination'; // Import komponen paginasi
import './App.css';
import './Home.css';

const Product = ({ status }) => {
  const [makeupReviews, setMakeupReviews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // Sesuaikan dengan jumlah item per halaman

  useEffect(() => {
    // Fetch makeup reviews from the API
    axios.get('https://makeup-api.herokuapp.com/api/v1/products.json?rating_greater_than=0.5')
      .then(response => {
        setMakeupReviews(response.data);
      })
      .catch(error => {
        console.error('Error fetching makeup reviews:', error);
      });
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = makeupReviews.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      {/* Header Section */}
      <Navbar status={status} />

      {/* Text Section */}
      <div className="category-section">
        <h1 style={{ margin: '50px' }}>
          Begin your beauty journey here.
        </h1>
      </div>

      {/* Makeup Reviews Section */}
      <MakeupReviewSection makeupReviews={currentItems} status={status} />

      {/* Custom Pagination Component */}
      <PaginationComponent
        totalItems={makeupReviews.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />

      {/* Footer Section */}
      <Footer status={status} />
    </div>
  );
};

export default Product;

