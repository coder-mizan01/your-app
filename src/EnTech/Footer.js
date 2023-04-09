import React from 'react'
import "./CSS/Footer.css"

const Footer = () => {
  return (
    <>
     <section id='footer'>

        <div className='address'>
           <h4>Entech</h4>
           <p>Registered Office: <br></br> 32nd Floor, City Center, Motijheel, Dhaka-1000</p>
           <p>Corporate Office: <br></br> 10/2, Gawsia Kashem Tower, 3rd Floor, Arambag, Dhaka</p> 
        </div>

        <div className='company'>
            <h4>Company</h4>
            <p>Seller Registration</p>
            <p>Career</p>
            <p>Cashback Offer</p> 
            <p>Nagad Mega payment Carnival</p> 
        </div>

        <div className='customerCare'>
            <h4>Customer Care</h4>
            <p>About Us</p>
            <p>Call Us (9:00am-10:00pm)</p>  
        </div>

        <div className='Legal'>
           <h4>Legal</h4>
           <p>Privacy Policy</p>
           <p>Terms and Condition</p>
           <p>Return & Refund</p>   
        </div>

        <div className='DownloadApp'>
            <h4>Download our APP</h4>
        </div>

     </section>
    </>
  )
}

export default Footer