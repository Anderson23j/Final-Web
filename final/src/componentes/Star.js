import React from "react";

const Star = ({ filled, onClick }) => {
  return (
    <span style={{ cursor: "pointer" }} onClick={onClick}>
      {filled ? "★" : "☆"}
    </span>
  );
};

export default Star;
