import React from 'react'
import { productdata } from '../Data'
import { AiOutlinePlus, AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Link } from 'react-router-dom';

import "../CSS/products.css"


const Electronics  = () => {

  return (
    <section id='products'>
      {productdata.map((product) => {
        const {id, title , image,  model , price } = product;
        return <div key={id} className='product'>

          <div className='productimage'>
            <a href='' target='_blank' ><img src={image} alt="" id='image' /></a>
          </div>

          <div className='product-info'>
            <h5>{title}</h5>
            <p>{model}</p>
            <div className='rating'>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <div className='prices'>
              <p style={{margin:'0'}}>10,900</p>
              <p style={{margin:'0'}} className='mainprice'>{price}</p>
            </div>
            <div className='product-btn'>
            <Link to={title} state={{id, title , image,  model , price }}  type='button' className='btn-cart'>add to cart
              <AiOutlinePlus />
            </Link>
          </div>  
          </div>

        </div>
      })}
    </section>
  )
}

export default Electronics; 