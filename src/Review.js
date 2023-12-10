// import React from "react";
// import "./Review.css";

// export const Review = () =>{
//     return(
//         <div className="review">
//             <div className="div">
//                 <div className="overlap">
//                     <div className="overlap-group">
//                         <img className="back" alt="Back" src="back.png"/>
//                         <div className="rectangle"/> 
//                     </div>
//                     <div className="text-wrapper">Review This</div>
//                 </div>
//                 <div className="group">
//                     <div className="div-wrapper">
//                         <div className="text-wrapper-2">Post Review</div>
//                         </div>
//                     </div>
//                     <div className="group-2">
//                         <div className="rectangle-2"/>
//                         <div className="text-wrapper-3">Description</div>
//                 </div>
//                 <div className="group-3">
//                     <div className="rectangle-3"/>
//                     <div className="text-wrapper-4">Rating</div>
//                 </div>
//                 <p className="p">SK-II Pitera Facial Treatment Essence</p>
//                 <div className="overlap-2">
//                     <div className="text-wrapper-5">Upload Photo</div>
//                     <img className="vector" alt="Vector" src="vector.svg"/>
//                 </div>
//                 <div className="text-wrapper-6">/ 5.0</div>
//             </div>
//         </div>
//     );
// };

import React, { useState } from "react";
import "./Review.css";

export const Review = () => {
  const [rating, setRating] = useState(0); // State to store the rating
  const [description, setDescription] = useState(""); // State to store the description

  return (
    <div className="review">
      <div className="div">
        <div className="overlap">
          <div className="overlap-group">
            <img className="back" alt="Back" src="back.png" />
            <div className="rectangle">
              <input
                type="number"
                min="1"
                max="5"
                placeholder="Rating (1-5)"
                className="rating-input"
                value={rating}
                onChange={(e) => setRating(parseInt(e.target.value, 10))}
              />
            </div>
          </div>
          <div className="text-wrapper">Review This</div>
        </div>
        <div className="group">
          <div className="div-wrapper">
            <div className="text-wrapper-2">Post Review</div>
          </div>
        </div>
        <div className="group-2">
          <div className="rectangle-2" />
          <div className="text-wrapper-3">
            <textarea
              placeholder="Enter your description..."
              className="description-textarea"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="group-3">
          <div className="rectangle-3" />
          <div className="text-wrapper-4">Rating</div>
        </div>
        <p className="p">SK-II Pitera Facial Treatment Essence</p>
        <div className="overlap-2">
          <div className="text-wrapper-5">Upload Photo</div>
          <img className="vector" alt="Vector" src="vector.svg" />
        </div>
        <div className="text-wrapper-6">{rating} / 5.0</div>
      </div>
    </div>
  );
};

export default Review;