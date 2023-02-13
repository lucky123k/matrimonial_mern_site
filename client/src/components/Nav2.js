import React from 'react'
import "./css/nav1.css"
import { Link } from "react-router-dom";
import { useContext } from 'react'
import {Users} from "../contexts/Context"
import {useNavigate} from "react-router-dom"

const Nav2 = () => {
    const navigate = useNavigate();
    const {LoginStatus, setLoginStatus} = useContext(Users);
    const handleIT = () => {
        console.log(LoginStatus);
        localStorage.setItem("login", "false");
        // setLogout("true");
        navigate("/")
        window.location.reload();
    }
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
            <Link className="right2" to="/profile"> <i class="fa-regular fa-user"></i> Profile  </Link>
            <Link className="right2" onClick={handleIT}>Log out <i class="fa-solid fa-arrow-right-from-bracket"></i> </Link>
        </div>
    </div>


</>
  )
}

export default Nav2