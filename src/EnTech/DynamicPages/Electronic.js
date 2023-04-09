import React from 'react'
import { useParams , useLocation } from 'react-router-dom'

const Electronic = () => {
    const {title} = useParams();
    const {state} = useLocation();
    
  return (
    <div>
      <h3>{title}</h3>
      <img src={state.image} alt="" />
      <p>{state.model}</p>
      <p>{state.price}</p> 
     </div>

  )
}

export default Electronic;