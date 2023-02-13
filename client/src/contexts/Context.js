import React, { useState } from 'react'
import { createContext } from 'react'
export const Users = createContext()
const Context = ({children}) => {
    const [name, setname] = useState(" ");
    const [email, setemail] = useState(" ");
    const [password, setpassword] = useState(" ");
    const [confirmpass, setconfirmpass] = useState(" ");
    const [contactnum, setcontactnum] = useState();
    const [gender, setgender] = useState(" ");
    const [state, setstate] = useState(" ");
    const [age, setage] = useState();
    const [DOB, setDOB] = useState(" ");
    const [Loginname, setLoginname] = useState(" ");
    const [Loginpassword, setLoginpassword] = useState(" ");
    const [LoginStatus, setLoginStatus] = useState("false");
  return (
    <Users.Provider value={{name, setname, email, setemail, password, setpassword, confirmpass, setconfirmpass
    ,contactnum, setcontactnum, gender, setgender, state, setstate, age, setage, DOB, setDOB, Loginname, setLoginname,
    Loginpassword, setLoginpassword,LoginStatus, setLoginStatus}}>{children}</Users.Provider>
  )
}

export default Context