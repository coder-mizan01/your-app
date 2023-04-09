import React from 'react'
import { useLocation } from 'react-router-dom';

function HealthAndBeauty() {

  const {state} = useLocation();
  return (
    <div>
    <img src={state.Image} alt="" />
  <h1>{state.title}</h1>
  <p>{state.Price}</p> 
</div>
  )
}

export default HealthAndBeauty