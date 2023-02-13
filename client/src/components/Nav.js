import React, {useEffect} from 'react'
import Nav1 from './Nav1'
import Nav2 from './Nav2'
import { useContext } from 'react'
import { Users } from "../contexts/Context"
const Nav = () => {
    const {LoginStatus, setLoginStatus, Logout, setLogout} = useContext(Users);
    var userStatus = localStorage.getItem("login");
    return (
        <div>
            {
                userStatus === "true" ? <Nav2 /> : <Nav1 />
            }
        </div>
    )
}

export default Nav