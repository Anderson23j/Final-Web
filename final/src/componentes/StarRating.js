import React, { useState } from "react";
import "../styles/estrellas.css";

const StarRating = () => {
  const [rating, setRating] = useState(0);

  const handleRating = (value) => {
    setRating(value);
  };

  return (
    <div className="star-rating-container">
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          className={`star ${index + 1 <= rating ? "filled" : ""}`}
          onClick={() => handleRating(index + 1)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;
