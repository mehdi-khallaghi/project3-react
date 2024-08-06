import React from 'react'
import './Product.css'

function Product({title,image,price,count}) {
  // console.log(props);

  // let {title,image,price,count} = props

  return (
    count &&
    <div className='product'>
      <div className='card'>
        <img src={image} alt='Product' />
        <h3>{title}</h3>
        <p className='price'>{price} T</p>
        <p className='p-des'>The Samsung Galaxy A51 has a good screen and worse power</p>
        <button>Add To Card</button>
      </div>
    </div>
  )




  // if (props.count > 0) {
  //   return (
  //     <div className='product'>
  //       <div className='card'>
  //         <img src={props.image} alt='Product' />
  //         <h3>{props.title}</h3>
  //         <p className='price'>{props.price} T</p>
  //         <p className='p-des'>The Samsung Galaxy A51 has a good screen and worse power</p>
  //         <button>Add To Card</button>
  //       </div>
  //     </div> 
  //   )
  // } 

  // return null;


}

export default Product;
