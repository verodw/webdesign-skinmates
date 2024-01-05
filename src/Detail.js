import React from 'react';
import { useLocation} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ReviewList from './ReviewList';
import './App.css';
import './Detail.css';

const Detail = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const product = location.state.product;
    const status = location.state.status;

    console.log('Location:', location);

    console.log(product, status)

    const validateStatus = () => {
        if(status==='logout'){
            alert('You have not logged in yet! Please log in first!')
            navigate('/login')
            return
        }
        
        else if (status==='login'){
            alert('Review has been posted!')
            navigate('/home')
            return
        }
    }

    console.log(product.id)
    console.log(status)

    return(
        <div className='detail'>
            <Navbar status={status}/>
            <div className='product-part'>
                <div className='product-side'>
                    <h2>{product.name}</h2>
                    <img src={product.api_featured_image} className='product-img' alt='Product Image'/>
                    <h4>Brand: {product.brand}</h4>
                    <h4>Price: {product.price}</h4>
                    <h4>Category: {product.category}</h4>
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
                    <h4>Rating: {product.rating}</h4>
                    <p>{product.description}</p>
                </div>
                <div className='review-side'>
                    <h3>Post a Review</h3>
                    <form className='create-review-part'>
                        <label>Rating</label>
                        {/* <div className='' */}
                        <input type='text' placeholder='Input a number (max: 5.0)'></input>
                        <label>Review</label>
                        <textarea placeholder='Write your review'></textarea>
                        <button className='pink-button' onClick={validateStatus}>Post</button>
                    </form>
                    <h3>Other Reviews</h3>
                    <div className='review-list'>
                        <ReviewList />
                    </div>
                </div>
            </div>
            <Footer status={status} />
        </div>
    );
};

export default Detail;