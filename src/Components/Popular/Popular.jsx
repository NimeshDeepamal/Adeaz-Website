import React from 'react'
import "./Popular.css"
import data_product from '../Assets/popuular_women'
import Item from '../Items/Item'

const Popular = () => {
  return (
    <div className='popular'>
      <h1>Popular in Women</h1>
      <hr />
      <div className="popular-grid">
        {data_product.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
            rating={item.star}
            reviews={item.reviews}
          />
        ))}
      </div>
    </div>
  )
}

export default Popular
