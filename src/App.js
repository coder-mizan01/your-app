import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'

//pages
import Home from './EnTech/Home';
import Fashion from './EnTech/Pages/Fashion'
import Fashionn from './EnTech/DynamicPages/Fashionn';
import Electronics from './EnTech/Pages/Electronics'
import Electronic from './EnTech/DynamicPages/Electronic';
import Error from './EnTech/Pages/Error';
import Childrens from "./EnTech/Pages/Children"
import BabyToys from "./EnTech/Pages/BabyToys"
import Pets from "./EnTech/Pages/Pets"
import Books from "./EnTech/Pages/Books"
import Book from './EnTech/DynamicPages/Book';
import Groceries from "./EnTech/Pages/Groceries"
import Gift from "./EnTech/Pages/Gift"
import HealthBeauty from "./EnTech/Pages/HealthBeauty"
import User from "./EnTech/Pages/User"





export const App = () => {




  return (
  <>
      <BrowserRouter>
         <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/Fashion" element={<Fashion />} />
         <Route path="/Fashion/:Name" element={<Fashionn />} />
         <Route path="/Electronics" element={<Electronics />} />
         <Route path='/Electronics/:title' element={<Electronic />} />
         <Route path="/Childrens" element={<Childrens />} />
         <Route path="/BabyToys" element={<BabyToys />} />
         <Route path="/Gift" element={<Gift />} />
         <Route path="/HealthBeauty" element={<HealthBeauty />} />
         <Route path="/HealthBeauty/:title" element={<HealthBeauty />} />
         <Route path='/Pets' element={<Pets />} />
         <Route path='/Books' element={<Books />} />
         <Route path='/Books/:Name' element={<Book />} />
         <Route path='/Groceries' element={<Groceries />} />
         <Route path='*' element={<Error />} />
         <Route path='/User' element={<User />} />

        </Routes>
      </BrowserRouter>

  
  </>
  )
}

export default App;
