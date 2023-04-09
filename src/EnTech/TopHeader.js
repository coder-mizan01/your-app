import React from 'react'
import "./CSS/TopHeader.css"
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";



const TopHeader = () => {
    return (
        <div className='topheader'>

            <div className='div1'>

                <div className='phone'>
                    <BiPhoneCall />
                    <a href="/">+8801995952159</a>
                </div>

                <div className='email'>
                    <AiOutlineMail />
                    <a href="/">example@gmail.com</a>
                </div>

            </div>


            <div className='div2'>
                <div>
                   <a href="/">Theme FAQ</a>
                   <a href="/">Need Helps</a>
                   <a href="/">Language</a>    
                </div>

            </div>

        </div>
    )
}

export default TopHeader