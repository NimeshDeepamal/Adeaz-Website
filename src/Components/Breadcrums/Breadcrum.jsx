import React from "react";
import "./Breadcrum.css";

const Breadcrum = ({ product }) => {
  return (
    <div className="breadcrum">
      <span className="bread-item">HOME</span>
      <span className="bread-arrow">→</span>
      <span className="bread-item">SHOP</span>
      <span className="bread-arrow">→</span>
      <span className="bread-item">{product.category}</span>
      <span className="bread-arrow">→</span>
      <span className="bread-item current">{product.name}</span>
    </div>
  );
};

export default Breadcrum;
