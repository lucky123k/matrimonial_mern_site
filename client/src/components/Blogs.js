import React, { useEffect, useState } from 'react'
import Blogcard from './Blogcard'
import "./css/Blogcd.css"
import { Link } from "react-router-dom";
import Nav1 from './Nav1'
import axios from 'axios';
import Last from './Footer';
import Homepg from './Homepg';
import { useContext } from 'react'
import { Users } from "../contexts/Context"
import Nav2 from './Nav2';
const Blogs = () => {
  const [BlogsData, SetData] = useState([])
  const { DUMMY, SETDUMMY, LoginStatus, setLoginStatus, Loginname, setLoginname } = useContext(Users)
  const UserStatus = localStorage.getItem("login");
  useEffect(() => {
    async function fetchData() {
      const got = await axios.get("http://localhost:8081/fetchBlogs")
      console.log(got.data);
      SetData(got.data);
    }
    fetchData();
  }, []);
  return (
    <>
      {
        UserStatus === "true" ?
          <>
            <Nav2 />
            <h2 className='h3why'>Stay connected with blogs at<span className='span1'>Shiary.com</span>?</h2>
            <div className='divblog'>
              {
                BlogsData.map((curr) => {
                  return (
                    <>
                      <Blogcard title={curr} />
                    </>
                  )
                })
              }
            </div>
            <div className='middle1'>
              <p className='line'>World-class articles, delivered weekly.</p>
              <div className='mail'>
                <input className='middle_input1' type="text" placeholder='Enter your email' />
                <button className='middle_btn'>Sign Me Up</button>
                <p className='middle_p'>Subscription implies consent to our privacy policy</p>
              </div>
            </div>
            <div className='create_blog'>
              <div className='flex'>
                <h1 className='blog_h1'>Now you can create</h1>
                <Link className='blog_btn' to="/CreateBlog">Create</Link>
              </div>
              <h1 className='blog_h2'> you own amazing</h1>
              <h1 className='blog_h3'> blogs with <span className=' blog_span'>Shiary.com</span></h1>
            </div>
            <Last />
          </> : <Homepg />
      }
    </>
  )
}

export default Blogs