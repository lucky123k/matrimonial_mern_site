import React from 'react'
import "./css/Signup.css"
import {Users} from "../contexts/Context"
import {useNavigate} from "react-router-dom"
import { useContext } from 'react'
import axios from "axios"
const Signup = () => {
    const navigate = useNavigate();
    const {name, setname, email, setemail, password, setpassword, confirmpass, setconfirmpass,
    contactnum, setcontactnum, gender, setgender, state, setstate, age, setage, DOB, setDOB} = useContext(Users);
    console.log(useContext(Users));
    const xyz = async() => {
        const data = {
            NAME : name,
            EMAIL : "shikha",
            PASSWORD : "shikha", CONFIRMPASSWORD : "shikha", CONTACT : 909090909,
            GENDER : "M", STATE : "RJ", AGE : 19, DOb : DOB
        }
        await axios.post("http://localhost:8081/register", data)
        .then(function(res) {
            console.log("done!!");
            if (res.data.msg === "success"){
                window.alert("Signup successfull")
                navigate("/login")
            }

          })
          .catch(function (error) {
            console.log(error);
          });
        console.log("data sent");
    }
    return (
        <>
            <div className="upper">
                <div className="navtype">
                    <h2 className='h2haiiski'>Shiary.com</h2>
                    <div className="right1">
                        <h4>LIVE CHAT</h4>
                        <h5>1-800-419-0886(TOLL-FREE)</h5>
                    </div>

                </div>
                <h3 className='h3haibhai'>Personal Details</h3>
            </div>
            <div className='all'>
                <div className="left">
                    <div className="form">
                        <input type="text" placeholder='Enter Your Name' onChange={(e) => setname(e.target.value)}/>
                        <input type="text" placeholder='Enter Your Email-id' onChange={(e) => setemail(e.target.value)}/>
                        <input type="text" placeholder='Enter Your Password' onChange={(e) => setpassword(e.target.value)}/>
                        <input type="text" placeholder='Confirm Password' onChange={(e) => setconfirmpass(e.target.value)}/>
                        <input type="number" placeholder='Enter Your Phone Number' onChange={(e) => setcontactnum(e.target.value)}/>
                        <p>Shiary.com members who like your profile will contact you on this phone number.
                            Verification of this number is compulsory after your registration.</p>
                        <div className="mid">
                            <div className="gender">
                                <label>Gender</label>
                                <select name="" id="">
                                    <option value="Male">M</option>
                                    <option value="Female">F</option>
                                </select>
                            </div>
                            <div className="state">
                                <label>State</label>
                                <select name="" id="">
                                    <option value="UP" onClick={(e) => setstate(e.target.value)}>UP</option>
                                    <option value="Bihar"  onChange={(e) => setstate(e.target.value)}>Bihar</option>
                                    <option value="MP">MP</option>
                                    <option value="Delhi">Delhi</option>
                                </select>
                            </div>
                        </div>
                        <input type="number" placeholder='Enter Your Age' />
                        <label>Select Your DOB</label>
                        <input type="date" id="birthday" name="birthday"></input>

                        <button className='btn12' onClick={xyz}>Register ME</button>
                        <p className='p12'>By clicking on <span className='span12'>'Register me'</span>, you confirm</p>
                        <p className='p123'>that you accept the <span className='span2'>Terms of use</span> and <span className='span2'>Privacy Policy</span></p>
                    </div>

                    <div className="formkaright">
                        <h2>WHY REGISTER</h2>
                        <div className="aaa">
                            <i class="fa-solid fa-cubes-stacked fuck"></i>
                            <h3>Lakhs of genuine profiles</h3>
                        </div>

                        <div className="aaa">
                            <i class="fa-solid fa-user fuck"></i>
                            <h3>Many verified by personal visits</h3>
                        </div>
                        <div className="aaa">
                            <i class="fa-solid fa-users fuck"></i>
                            <h3>Secure & Family friendly</h3>
                        </div>
                        <div className="aaa">
                            <i class="fa-solid fa-key fuck"></i>
                            <h3>Strict privacy control</h3>
                        </div>

                    </div>
                </div>
                
            </div>
        </>

    )
}

export default Signup