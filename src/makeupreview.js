// MakeupReview.js
import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

const MakeupReview = ({ makeupReviews, status }) => {

  function toDetail(product){
    navigate(
      '/product/detail', 
      {state: {
        product: product,
        status: status
      }})
  }


  const navigate  = useNavigate();

  return (
    <div className="makeup-review-container">
      <h2>Makeup Reviews</h2>
      <div className="product-category-container">
            {makeupReviews.map((product, index) => (
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
    </div>
  );
}

export default MakeupReview;




