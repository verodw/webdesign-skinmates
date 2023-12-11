import react from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './App.css';
import './Detail.css';

const Detail = () => {
    return(
        <div className='detail'>
            <Navbar status='login'/>
            <div className='product-part'>
                <div className='product-side'>
                    <h2>Product Name</h2>
                    <img src='' className='product-img' alt='Product Image'/>
                    <h4>Brand: Unknown</h4>
                    <h4>Rating: null</h4>
                    <p>Description ...</p>
                </div>
                <div className='review-side'>
                    <h3>Reviews</h3>
                    <input type='message'></input>
                    <div className='review-list'>
                        <div></div>
                    </div>
                </div>
            </div>
            <Footer status='login' />
        </div>
    );
};

export default Detail;