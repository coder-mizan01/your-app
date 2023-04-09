import React from 'react'
import { useLocation } from 'react-router-dom';

const Fashionn = () => {

    const {state} = useLocation();

    return (
    <div>
        <img src={state.image} alt="" />
      <h1>{state.Name}</h1>
      <p>{state.price}</p> 
    </div>
  )
}

export default Fashionn;