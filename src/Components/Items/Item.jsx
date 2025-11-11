import "./Item.css";
import { Link } from "react-router-dom";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Item = ({ id, image, name, new_price, old_price, rating, reviews }) => {
  return (
    <Link to={`/product/${id}`} onClick={() => window.scrollTo(0, 0)} style={{ textDecoration: "none" }}>
      <div className="item-card">
        <div className="item-image-container">
          <img src={image} alt={name} className="item-image" />
        </div>

        <div className="item-details">
          <h3 className="item-name">{name}</h3>

          <div className="item-prices">
            <span className="new-price">Rs.{new_price}</span>
            <span className="old-price">Rs.{old_price}</span>
          </div>

          <div className="item-rating">
            <div className="stars">
              {Array.from({ length: 5 }).map((_, i) => {
                const starValue = i + 1;
                if (starValue <= rating) return <FaStar key={i} />;
                else if (starValue - rating === 0.5)
                  return <FaStarHalfAlt key={i} />;
                else return <FaRegStar key={i} />;
              })}
            </div>
            <span className="review-count">({reviews} reviews)</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Item;
