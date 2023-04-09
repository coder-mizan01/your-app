import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const User = () => {
    const [params , setParams] = useSearchParams(''); 
    const [name , setName] = useState("");

    const handlefrom = (e) =>{
        e.preventDefault();
        setParams({name : name})
    }
  return (
    <div>
        <h1>user</h1>
        <form onSubmit={handlefrom}>
            <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
            <button type='submit'>click</button>
        </form>

    </div>
  )
}

export default User