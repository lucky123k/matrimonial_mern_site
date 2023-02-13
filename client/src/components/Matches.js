import React, {useState, useEffect} from 'react'
import Nav from './Nav'
import Matchcard from './Matchcard'
import "./css/Matches.css"
import { Link } from "react-router-dom";
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import Last from './Footer';
const Matches = () => {
    const location = useLocation()
    const [shikha, setShikha] = useState("")
    const [age, setAge] = useState("")
    const [gender, setGender] = useState("")
    const current = location.pathname.split("/");
    const [BlogsData, SetData] = useState([])
    const {search} = useLocation()
    useEffect(() => {
        async function fetchData() {
          const got = await axios.get("http://localhost:8081/getUsers" + search)
          console.log(got.data);
          SetData(got.data);
        }
        fetchData();
      }, [search]);


    return (
        <div>
            <Nav />
            <h1 className='h1x1'>Search for your type of your better half here!!!</h1>
            <div className="search">
                <input className='inpx12' type="text" placeholder='Enter city to search for' onChange={(e) => setShikha(e.target.value)}/>
                <input className='inpx12' type="text" placeholder='Enter age to search for' onChange={(e) => setAge(e.target.value)}/>
                <select className='selx12' name="" id="">
                    <option value="M">M</option>
                    <option value="F">F</option>
                </select>
            </div>
            <Link to = {`/Matches?name=${shikha}&age=${age}&gender=${gender}`} className='lnkx12'>Search.....</Link>
            <div className="side">
                {
                    BlogsData.map((curr) => {
                        return(
                        <>
                            <Matchcard topic = {curr}/>
                        </>)
                    })
                }
            </div> 
           <Last/>
        </div>
    )
}

export default Matches