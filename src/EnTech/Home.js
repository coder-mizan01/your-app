import React from 'react'
import Header from './Header'
import TopHeader from './TopHeader'
import Cover from "./Cover"
import Books from './Pages/Books'
import Electronics from './Pages/Electronics'
import Fashion from './Pages/Fashion'
import  HealthAndbeauty  from './Pages/HealthBeauty'
import Footer from './Footer'


const Home = () => {
  return (
    <>
       <TopHeader />
       <Header />

       
       <Cover />
       <Electronics />
       <Books />
       <Fashion />
       <HealthAndbeauty />
       <Footer />
       </>
    
  )
}

export default Home