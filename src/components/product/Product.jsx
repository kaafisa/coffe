import React from 'react'
import './product.css'
import { IoIosStarOutline, IoMdStar } from 'react-icons/io'
import { RiShoppingBasketLine } from 'react-icons/ri'
const Stars = () =>(
  <>
     <IoMdStar className='icon'/>
     <IoMdStar className='icon'/>
     <IoMdStar className='icon'/>
     <IoMdStar className='icon'/>
     <IoIosStarOutline className='icon'/>
  </>
)
const Product = ({disC,title,image,price,exP}) => {
  return (
    <div className='coffee__product'>
      <div className="coffee__product-disc">
        <p>{disC}</p>
      </div>
      <div className="cofee__product-img">
        <img src={image} alt="product" />
      </div>

      <div className="coffee__product-content_stars">
         <Stars/>
      </div>
      <h3>{title}</h3>
      <div className="price">
        <div><RiShoppingBasketLine className='icon'/></div>
        <h2>{price}<span>{exP}</span></h2>
      </div>
     
    
      
    </div>
    
    
  )
}

export default Product