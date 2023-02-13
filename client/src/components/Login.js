import React, { useEffect } from 'react'
import "./css/login.css"
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom"

import {Users} from "../contexts/Context"
import { useContext } from 'react'

import axios from 'axios';
const Login = () => {
    const navigate = useNavigate();
    // const history = useHistory();
    const {Loginname, setLoginname, Loginpassword, setLoginpassword, LoginStatus, setLoginStatus, name, setname} = useContext(Users)
    const Loginm = async() => {
        console.log(Loginname, Loginpassword);
        console.log("signup name is" + name);
        console.log("login status is false");
        await axios.post("http://localhost:8081/login", {Name : Loginname, Passwd : Loginpassword})
        .then((res) => {
            if (res.data.login === "true"){
                console.log(res.data);
                setLoginStatus("true"); 
                localStorage.setItem("login", "true");
                alert("Login success")
                navigate("/")
            }
            else{
                setLoginStatus("false")
            }
        })
        // console.log("login status is now..." + LoginStatus);
    }
    return (
        <div className='MAINBG'>
            <div className='login'>
                <h3>Login to continue</h3>
                <div className='input'>
                    <input className='input1' type="text" placeholder='Enter your email' onChange={(e) => setLoginname(e.target.value)}/>
                    <input className='input1' type="password" placeholder='Enter your password' onChange={(e) => setLoginpassword(e.target.value)}/>
                </div>
                {/* <button>LOGIN</button> */}
                <Link  className='forgot' to="/forgotpassword">Forgot Password</Link>
                <br/>
                <button className='loginbtn'  onClick={Loginm}>LOGIN</button>
                {/* <hr /> */}
                <h4 className='newon'>New on Shiary.com?</h4>
                <br/>
                <Link className='registermadarchod' to="/register">REGISTER FREE</Link>
            </div>
        </div>
    )
}

export default Login