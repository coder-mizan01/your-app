import React from 'react'
import { AiOutlinePlus, AiFillStar, AiOutlineStar } from "react-icons/ai";
import { healthAndbeauty } from '../Data';
import { Link } from 'react-router-dom';
import "../CSS/products.css"

const HealthBeauty = () => {
  return (
    <section id='products'>
    {healthAndbeauty.map((data)=>{
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
           <Link to={title} state={{id , title , Image , Price}}  type='button' className='btn-cart'>add to cart
             <AiOutlinePlus />
           </Link>
         </div>  
         </div>

       </div>
    })}
   </section>
  )
}

export default HealthBeauty