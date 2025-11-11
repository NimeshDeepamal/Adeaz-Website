// ProductDisplay.jsx
import React, { useContext, useState } from "react";
import "./ProductDisplay.css";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(ShopContext);

  // Track selected main image
  const [selectedImage, setSelectedImage] = useState(product.image[0]);

  // Track description toggle
  const [showFullDescription, setShowFullDescription] = useState(false);

  // Generate stars dynamically
  const stars = Array(5).fill(false).map((_, i) => i < product.star);

  // Description character limit
  const DESCRIPTION_LIMIT = 150;



  const displayedDescription =
    showFullDescription || product.description.length <= DESCRIPTION_LIMIT
      ? product.description
      : product.description.slice(0, DESCRIPTION_LIMIT) + "...";

  return (
    <div className="productdisplay">
      {/* LEFT SIDE */}
      <div className="productdisplay-left">
        <div className="productdisplay-img-gallery">
          <div className="productdisplay-img-list">
            {product.image.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`thumb-${i}`}
                onClick={() => setSelectedImage(img)}
                className={selectedImage === img ? "selected-thumb" : ""}
              />
            ))}
          </div>
          <div className="productdisplay-img">
            <img
              className="productdisplay-main-img"
              src={selectedImage}
              alt={product.name}
            />
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="productdisplay-right">
        <h1 className="product-title">{product.name}</h1>

        {/* 💰 Price + Reviews */}
        <div className="productdisplay-right-prices">
          <div className="price-section">
            <div className="productdisplay-right-price-old">
              RS.{product.old_price}
            </div>
            <div className="productdisplay-right-price-new">
              RS.{product.new_price}
            </div>
          </div>
          <div className="reviews-section">
            {stars.map((filled, i) => (
              <span key={i} className={filled ? "star filled" : "star"}>
                ★
              </span>
            ))}
            <span className="review-count">({product.reviews} Reviews)</span>
          </div>
        </div>

        {/* 📝 Description */}
        <p className="productdisplay-right-description">
          {displayedDescription}{" "}
          
        </p>

        {/* 🧵 Size Selector */}
        <div className="productdisplay-right-size">
          <h2>Select Size</h2>
          <div className="productdisplay-right-sizes">
            {["S", "M", "L", "XL", "XXL"].map((size) => (
              <div key={size}>{size}</div>
            ))}
          </div>
        </div>

        {/* 🛒 Add to Cart */}
        <button
          className="add-to-cart-btn"
          onClick={() => addToCart(product.id)}
        >
          Add to Cart
        </button>

        {/* 🏷 Category and Tags */}
        <p className="productdisplay-right-category">
          <span>Category:</span> {product.category}
        </p>
        <p className="productdisplay-right-category">
          <span>Tags:</span> Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
