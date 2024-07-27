import React from 'react'
import './Product.css'

function Product() {
  return (
    <div>
      <h2>Product card</h2>
      <div className='card'>
        <img src='sumsungA51.png' alt='Product'/>
        <h1>Sumsung A51</h1>
        <p className='price'>300$</p>
        <p className='p-des'>The Samsung Galaxy A51 has a good screen and worse power</p>
        <button>Add To Card</button>
        </div>
    </div>
  )
}

export default Product;
