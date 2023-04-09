/*
import React, { useState } from 'react'
import Home from './COMPONENT/Home'
*/

import Usefetch from './Usefetch'
import Todos from "./TODOAPP/Todos"
import NewTodo from './TODOAPP/NewTodo'
import { useState } from 'react'

const App = () => {

  const {data , loading , error } = Usefetch("https://jsonplaceholder.typicode.com/users")

  const [ element , setElemebt ] =  useState(data);

const UpComingUser = (cominguser) =>{
  } 

    

  return (
    <>
    
    <NewTodo onUsers={UpComingUser} />
    {data && <Todos data={data} /> }  

  </>
  )
}

export default App