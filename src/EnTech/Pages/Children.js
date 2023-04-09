import React from 'react'
import { AiOutlinePlus, AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Link } from 'react-router-dom';
import {childData} from "../Data"
import "../CSS/products.css"
const Children = () => {
  return (
    <section id='products'>
     {childData.map((data)=>{
      const {id , title , Image , Price} = data;
      return <div key={id} className='product'>

          <div className='productimage'>
            <a href='/' target='_blank' ><img src={Image} alt="" id='image' /></a>
          </div>

          <div className='product-info'>
            <h5>{title}</h5>
            <p>nothing</p>
            <div className='rating'>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <div className='prices'>
              <p style={{margin:'0'}}>10,900</p>
              <p style={{margin:'0'}} className='mainprice'>{Price}</p>
            </div>
            <div className='product-btn'>
            <Link to={title}  type='button' className='btn-cart'>add to cart
              <AiOutlinePlus />
            </Link>
          </div>  
          </div>

        </div>
     })}
    </section>
  )
}

export default Children