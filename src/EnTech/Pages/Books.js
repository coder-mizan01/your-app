import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlinePlus, AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BooksData } from '../Data'

import "../CSS/Books.css"

const Books = () => {

  return (
    <section id='products'>
      {BooksData.map((BookData) => {
       const {id , Name , Writer , Image , Price , DiscountPrice} = BookData;
        return <div key={id} className='product'>

          <div className='productimage'>
            <a href='' target='_blank' ><img src={Image} alt="" id='image' /></a>
          </div>

          <div className='product-info'>
            <h5>{Name}</h5>
            <p>{Writer}</p>
            <div className='rating'>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <div className='prices'>
              <p style={{margin:'0'}}>{Price}</p>
              <p style={{margin:'0'}} className='mainprice'>{DiscountPrice}</p>
            </div>
            <div className='product-btn'>
            <Link to={Name} type='button'  state={{id , Name , Writer, Image,  Price , DiscountPrice }} className='btn-cart'>add to cart
              <AiOutlinePlus />
            </Link>
          </div>  
          </div>


        </div>
      })}
    </section>
  )
}

export default Books