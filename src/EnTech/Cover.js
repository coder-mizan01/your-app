import React from 'react'
import { NavLink } from "react-router-dom"
import Carousel from 'react-bootstrap/Carousel';
import './CSS/cover.css'

//images
import smartwatch from "./photos/smartwatch.jpg"
import Headphone from "./photos/Headphone.jpg"
import bag from "./photos/bag.jpg"

const Cover = () => {
  return (
    <div id='cover'>
        
   
      <div className='covernav'>
        <NavLink to="/Fashion" className='link' >Fashion</NavLink>
        <NavLink to="/Electronics" className='link'>Electronics</NavLink>
        <NavLink to="/Childrens" className='link'>Childrens</NavLink>
        <NavLink to="/Gift"  className='link'>Gift</NavLink>
        <NavLink to="/HealthBeauty"  className='link'>Helth & Beuty</NavLink>
        <NavLink to="/Pets"  className='link'>Pets</NavLink>
        <NavLink to="/Books"  className='link'>Books</NavLink>
        <NavLink to="/BabyToys"  className='link'>Baby & Toys</NavLink>
        <NavLink to="/Groceries" style={{margin:'0px 0px 0px 0px  '}}  className='link' >Groceries</NavLink>

      </div>


<Carousel className='carousel'>

      <Carousel.Item>
        <img
          className="carouselimage img-fluid"
          src={smartwatch}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="carouselimage img-fluid"
          src={Headphone}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="carouselimage img-fluid"
          src={bag}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>

    </div>
  )
}

export default Cover