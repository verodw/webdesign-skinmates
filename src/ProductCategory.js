// ProductCategory.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './ProductCategory.css';
import Navbar from './Navbar';
import Footer from './Footer';
import PaginationComponent from './Pagination';

const ProductCategory = ({ status }) => {
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

//   const handleSearchChange = (searchValue) => {
//     setSearchTerm(searchValue);
//   };

  return (
    <div>
        {/* Header Section */}
        <Navbar status="login" onSearchChange={setSearchTerm} />

      {/* Tampilkan produk berdasarkan kategori */}
      <h1 className="product-category-title">{category.charAt(0).toUpperCase() + category.slice(1)} Products</h1>
      {makeupReviews.length === 0 ? (
        <p>No products found in this category.</p>
      ) : (
        <>
          <div className="product-category-container">
            {currentItems.map((product, index) => (
              <div key={index} className="product-item">
                <img src={product.image_link} alt={product.name} className="product-image" />
                <strong>{product.name}</strong>
                <p className="brand">{product.brand}</p>
                <p className="price">{product.price_sign}{product.price}</p>
                <p className='category'>{product.category}</p>
                {/* Menambahkan lingkaran warna untuk setiap warna produk */}
                {product.product_colors && (
                  <div className="color-list">
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
      <Footer status='login'/>

    </div>
  );
};

export default ProductCategory;




// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// const ProductCategory = () => {
//   const [makeupReviews, setMakeupReviews] = useState([]);
//   const { category } = useParams(); // Ambil parameter kategori dari URL

//   useEffect(() => {
//     // Gunakan parameter kategori untuk membuat URL API yang sesuai
//     const apiUrl = `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${category}`;

//     // Fetch produk berdasarkan kategori dari API
//     axios.get(apiUrl)
//       .then(response => {
//         setMakeupReviews(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching makeup reviews:', error);
//       });
//   }, [category]);

//   return (
//     <div>
//       {/* Tampilkan produk berdasarkan kategori */}
//       <h1>{category.charAt(0).toUpperCase() + category.slice(1)} Products</h1>
//       {makeupReviews.length === 0 ? (
//         <p>No products found in this category.</p>
//       ) : (
//         <ul className="product-list">
//           {makeupReviews.map((product, index) => (
//             <li key={index} className="product-item">
//               <strong>{product.name}</strong>
//               <p className="brand">Brand: {product.brand}</p>
//               <p className="price">Price: {product.price_sign}{product.price}</p>
//               <p className='category'>Category: {product.category}</p>

//               {/* Menambahkan lingkaran warna untuk setiap warna produk */}
//               {product.product_colors && (
//                 <div className="color-list">
//                   {product.product_colors.map((color, colorIndex) => (
//                     <div
//                       key={colorIndex}
//                       className="color"
//                       style={{
//                         backgroundColor: color.hex_value,
//                         width: '20px',
//                         height: '20px',
//                         borderRadius: '50%',
//                         display: 'inline-block',
//                         marginRight: '5px',
//                       }}
//                       title={color.colour_name}
//                     ></div>
//                   ))}
//                 </div>
//               )}

//               <p className="rating">Rating: {product.rating}</p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default ProductCategory;




// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// const ProductCategory = () => {
//   const [makeupReviews, setMakeupReviews] = useState([]);
//   const { category } = useParams(); // Ambil parameter kategori dari URL

//   useEffect(() => {
//     // Gunakan parameter kategori untuk membuat URL API yang sesuai
//     const apiUrl = `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${category}`;

//     // Fetch produk berdasarkan kategori dari API
//     axios.get(apiUrl)
//       .then(response => {
//         setMakeupReviews(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching makeup reviews:', error);
//       });
//   }, [category]);

//   return (
//     <div>
//       {/* Tampilkan produk berdasarkan kategori */}
//       <h1>{category.charAt(0).toUpperCase() + category.slice(1)} Products</h1>
//       {makeupReviews.length === 0 ? (
//         <p>No products found in this category.</p>
//       ) : (
//         <ul className="product-list">
//           {makeupReviews.map((product, index) => (
//             <li key={index} className="product-item">
//               <strong>{product.name}</strong>
//               <p className="brand"> {product.brand}</p>
//               <p className="price"> {product.price_sign}{product.price}</p>
//               <p className='category'> {product.category}</p>
//               <p className='product-colors'> {product.product_colors}</p>
//               <p className='rating'> {product.rating}</p>

//               {/* Menambahkan lingkaran warna untuk setiap warna produk */}
//               {product.product_colors && (
//                 <div className="color-list">
//                   {product.product_colors.map((color, colorIndex) => (
//                     <div
//                       key={colorIndex}
//                       className="color"
//                       style={{ backgroundColor: color.hex_value }}
//                       title={color.colour_name}
//                     ></div>
//                   ))}
//                 </div>
//               )}

//               <p className="rating">Rating: {product.rating}</p>
            
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default ProductCategory;
