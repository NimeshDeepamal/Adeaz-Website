import './RelatedProducts.css';
import data_product from '../Assets/data';
import Item from '../Items/Item';

const RelatedProducts = () => {
  return (
    <div className='relatedproducts'>
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-item">
        {data_product.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}      // pass array or single image
            new_price={item.new_price}
            old_price={item.old_price}
            rating={item.star}
            reviews={item.reviews}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
