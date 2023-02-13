import React, { useEffect } from 'react'
import Nav1 from './Nav1'
import { useContext } from 'react'
import { Users } from "../contexts/Context"
import Nav2 from './Nav2'
import Banner from './Banner'
import Stories from './Stories'
import Foot from './Footer'
import Login from './Login'
import Nav from './Nav'
const Homepg = () => {
  // const [loginme, setlogin] = useState(false);
  // const {LoginStatus, setLoginStatus, Loginname, setLoginname} = useContext(Users)
  
  const { DUMMY, SETDUMMY, LoginStatus, setLoginStatus, Loginname, setLoginname } = useContext(Users)
  console.log(Loginname);
  // const userStatus = localStorage.getItem("login");

  // const userStatus = LoginStatus;
  return (
    <>
      {/* <h1>{LoginStatus}</h1> */}
      <Nav/>
      <Banner />
      <Stories />
      <Foot />
    </>

  )
}
export default Homepg