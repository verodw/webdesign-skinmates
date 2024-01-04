// ProductCategory.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import './ProductCategory.css';
import Navbar from './Navbar';
import Footer from './Footer';
import PaginationComponent from './Pagination';

const ProductCategory = ({ status }) => {
  const navigate  = useNavigate();
  const [makeupReviews, setMakeupReviews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12); // mengubah jumlah item per halaman 
  const [searchTerm, setSearchTerm] = useState('');
  const { category } = useParams(); // ambil parameter kategori dari URL

  useEffect(() => {
    // Gunakan parameter kategori untuk membuat URL API yang sesuai  
    // const apiUrl = `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${category}`;

    const apiUrl = searchTerm
      ? `https://makeup-api.herokuapp.com/api/v1/products.json?product_name=${searchTerm}`
      : `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${category}`;

    // Fetch produk berdasarkan kategori dari API
    axios.get(apiUrl)
      .then(response => {
        setMakeupReviews(response.data);
      })
      .catch(error => {
        console.error('Error fetching makeup reviews:', error);
      });
  }, [category, searchTerm]);


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = makeupReviews.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  function toDetail(product, status){
    navigate(
      '/product/detail', 
      {state: {
        product: product,
        status: status
      }})
  }

//   const handleSearchChange = (searchValue) => {
//     setSearchTerm(searchValue);
//   };

  var categoryFirstLetter = category.charAt(0).toUpperCase()
  var categoryStr = category.slice(1)
  var categoryName = categoryFirstLetter + categoryStr
  if(categoryName=="Nail_polish"){
    categoryName = "Nail Polish"
  }
  else if (categoryName=="Lip_liner"){
    categoryName = "Lip Liner"
  }

  return (
    <div>
        {/* Header Section */}
        <Navbar status={status} onSearchChange={setSearchTerm} />

      {/* Tampilkan produk berdasarkan kategori */}
      <h1 className="product-category-title">{categoryName} Products</h1>
      {makeupReviews.length === 0 ? (
        <p>No products found in this category.</p>
      ) : (
        <>
          <div className="product-category-container">
            {currentItems.map((product, index) => (
              <div key={index} className="product-item" onClick={() => toDetail(product, status)}>
                <img src={product.api_featured_image} alt={product.name} className="product-image" />
                <strong>{product.name}</strong>
                <p className="brand">{product.brand}</p>
                <p className="price">{product.price_sign}{product.price}</p>
                <p className='category'>Type: {product.category}</p>
                {/* Menambahkan lingkaran warna untuk setiap warna produk */}
                {product.product_colors && (
                  <div className="color-list">
                    <p>Colours:</p>
                    {product.product_colors.map((color, colorIndex) => (
                      <div
                        key={colorIndex}
                        className="color"
                        style={{
                          backgroundColor: color.hex_value,
                          width: '20px',
                          height: '20px',
                          borderRadius: '50%',
                          display: 'inline-block',
                          marginRight: '5px',
                        }}
                        title={color.colour_name}
                      ></div>
                    ))}
                  </div>
                )}
                <p className='rating'>Rating: {product.rating}</p>
              </div>
            ))}
          </div>
          {/* Tambahkan navigasi pagination di sini */}

        
          {/* Custom Pagination Component */}
          <PaginationComponent
            totalItems={makeupReviews.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </>
      )}
      
      {/* Footer Section */}
      <Footer status={status}/>

    </div>
  );
};

export default ProductCategory;