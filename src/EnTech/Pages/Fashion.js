import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlinePlus, AiFillStar, AiOutlineStar } from "react-icons/ai";
import { fashionData } from '../Data'

import "../CSS/products.css"
const Fashion = () => {
  return (
    <div>
        <section id='products'>
           {fashionData.map((data)=>{
            const  {id , Name, image , price } = data;

            return <div key={id} className='product'>

            <div className='productimage'>
              <a href='' target='_blank' ><img src={image} alt="" id='image' /></a>
            </div>
  
            <div className='product-info'>
              <h5>{Name}</h5>
              <p>Nothing</p>
              <div className='rating'>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
              </div>
              <div className='prices'>
                <p style={{margin:'0'}}>{price}</p>
                <p style={{margin:'0'}} className='mainprice'>{price}</p>
              </div>
              <div className='product-btn'>
              <Link type='button' to={Name} state={{id , Name , image , price}} className='btn-cart'>add to cart
                <AiOutlinePlus />
              </Link>
            </div>  
            </div>
  
  
          </div>

           })}
        </section>
    </div>
  )
}

export default Fashion