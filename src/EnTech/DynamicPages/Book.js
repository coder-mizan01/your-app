import React from 'react'
import { useParams , useLocation ,  } from 'react-router-dom'

const Book = () => {
    const {Name} = useParams();
    const {state} = useLocation();
  return (
    <div>
    <img src={state.Image} alt="" /> 
     <h1>{Name}</h1>
     <p>{state.Writer}</p>
     <p>{state.Price}</p>
     <p>{state.DiscountPrice}</p>   
    </div>
  )
}

export default Book