import React,{useRef} from 'react'
import { BsSearch ,} from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import { FiMenu } from "react-icons/fi";


import {  BiUserCircle , BiCartAlt} from "react-icons/bi";
import "./CSS/Header.css"


const Header = () => {

  const responsiveIcon = useRef();

  const iconclick = () =>{
     if(responsiveIcon.current.style.display === 'none'){
      responsiveIcon.current.style.display = 'block'
     }else{
      responsiveIcon.current.style.display = 'none'
     }
  }

  const userIcon = useRef();

  const UserClick = () =>{
      if(userIcon.current.style.display === 'none'){
        userIcon.current.style.display = 'block'
      }else{
        userIcon.current.style.display = 'none';
      }
  }

  return (
    <>
    <section id='header'>

    <div id='headerPart1'>

        <div className='brandDiv'>
         <a href="http://localhost:3000/" className='brandLogo'>  EnTech</a>
        </div>



        <div className='serachDiv'>
            <BsSearch  className='searchicon'/>
            <input type="search" placeholder='search and hit enter...' />
        </div>



        <div className='userandcart'>
            <IoIosSearch  className='responsiveSearchicon' onClick={iconclick} />
        
            <BiUserCircle  className='user' onClick={UserClick}/>

            <BiCartAlt  className='cart' />

            <div className='LogInDropdown' ref={userIcon}>
               <div className='emaildiv'>
                 <input type="email" placeholder='Enter your email' />
               </div>
               <div className='passwordDiv'>
                 <input type="password"  placeholder='Enter your password'/>
               </div>
               <div className='btnDiv'>
                 <button>Sign In</button>
               </div>
            </div>
        </div>


    </div>






    <div className='headerpart2'>

       <button className='menuButton'>
        <FiMenu className='menuIcon' />
        <p className='menuText' >CATEGORIES</p>
       </button>

      <ul className='menu'>
        <li><a href="./">Home</a></li>
        <li><a href="./">Pages</a></li>
        <li><a href="./">User Account</a></li>
        <li><a href="./">vender Account</a></li>
        <li><a href="./">Track My Order</a></li>
        <li><a href="./">Contact</a></li>
      </ul>

     </div>

    </section>

     
    <div className='responsiveSearch'>
        <input className='remove' type="text" ref={responsiveIcon}   />
     </div>
    </>
  )
}

export default Header