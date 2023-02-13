import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Bg from "./images/bog.jpg"
import "./css/Blogcd.css"
const Blogcard = ({title}) => {
  const [Heading, SetHeading] = useState("")
  const desc = title.description
  const descriptionIs = desc.slice(0, 320);
  console.log(descriptionIs);
  return (
    <div className='aaa'>
      <div className='blogcard1'>
        <img className='image1' src={title.img} alt="" srcset="" />
        <p className='p1'>Destinations</p>
        <h3 className='mainheading'>{title.mainheading}</h3>
        <p className='p2'>By <span>{title.author}</span></p>
        <p className='p3'>{descriptionIs}</p>
        <p className='h1'>10 minute read</p>
        <Link className='h2' to={`/Blog/${title._id}`}>CONTINUE READING <i class="fa-solid fa-arrow-right"></i></Link>
      </div>
    </div>
  )
}

export default Blogcard