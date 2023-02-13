import "./css/nav1.css"
import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Login from "./Login";
const Nav1 = () => {
    return (
        <>
            <div className='navbar'>
                <div className="logo"> 
                    <Link className="logo2" to="/">SHIARY.com</Link>
                </div>
                <div className="middle">
                    <Link className="middle2" to="/blogs">Blogs</Link>
                    <Link className="middle2" to="/matches">Matches</Link>
                    <Link className="middle2" to="/about">About us</Link> 
                    <Link className="middle2" to="/contact">Contact us</Link>
                </div>
                <div className="right">
                    <Link className="right2" to="/login" > <i class="fa-solid fa-right-to-bracket"></i>  Login</Link>
                    <Link className="right2" to="/register">Register</Link>
                </div>
            </div>
        
        </>
    )
}
export default Nav1