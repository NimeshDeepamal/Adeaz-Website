import React from "react";
import "./Offer.css";

const Offer = () => {
  return (
    <section className="offer-section">
      <div className="offer-box">
        <h3 className="offer-sub">Special Deal</h3>
        <h1 className="offer-title">Exclusive Offers Just For You</h1>
        <p className="offer-desc">
          Get the best discounts on our most popular products.
        </p>

        <button className="offer-btn">Shop Now</button>
      </div>
    </section>
  );
};

export default Offer;
