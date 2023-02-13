import React, {useEffect, useState} from 'react'
import { Link } from "react-router-dom";
import "./css/dummy.css"
const Dummy = ({topic}) => {
    const id = 1901;
    const desc = topic.description
    const descriptionIs = desc.slice(0, 490);
    // console.log(descriptionIs);
  return (
    <>
        <div className="blogcard">
            <h2>SHIARY.com</h2>
            <p>{descriptionIs}</p>
            <Link className="linkk" to = {`/Blog/${topic._id}`}>Read...</Link>
        </div>
    </>
  )
}

export default Dummy