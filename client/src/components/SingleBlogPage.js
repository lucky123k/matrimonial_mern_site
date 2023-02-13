import React, { useState, useEffect } from 'react'
import Nav2 from './Nav2'
import axios from 'axios'
import "./css/SingleBlog.css"
import blogbg from "./images/blogbg.jpg"
import Blogcard from './Blogcard'
import Last from './Footer'
import { useLocation } from 'react-router-dom'
const SingleBlogPage = () => {
    const [BlogsData, SetData] = useState([])
    const [CurrentBlog, SetCurrentBlog] = useState([])
    const location = useLocation() 
    console.log(location.pathname.split("/")[2]);
    const BlogId = location.pathname.split("/")[2]
    useEffect(() => {
        async function fetchData() {
            const got = await axios.get("http://localhost:8081/fetchBlogs")
            const helllo = await axios.get("http://localhost:8081/Blogs/" + BlogId);
            console.log(helllo);
            SetCurrentBlog(helllo.data)
            SetData(got.data);
        }
        fetchData();
    });
    return (
        <div>
            <Nav2 />
            <div className="container">
                <div className="upper1">
                    <p>03 min reading......</p>
                    <h1 className='blog_h11'>{CurrentBlog.mainheading}</h1>
                    <p>{CurrentBlog.about}</p>
                    <div className="bywhom">
                        <p>by {CurrentBlog.author}</p>
                        <p>Published at 13th September, 2022</p>
                    </div>
                </div>
                <div className="imagehai">
                    <img className='imagehaii' src={CurrentBlog.img} alt="" srcset="" />
                </div>
                <div className="contenthai">
                    <p>{CurrentBlog.description}</p>
                    <h1>{CurrentBlog.firstHead}</h1>
                    <p>{CurrentBlog.firstdesc}</p>
                    <h1>{CurrentBlog.secondHead}</h1>
                    <p>{CurrentBlog.description}</p>
                    <h1>Conclusion</h1>
                    <p>{CurrentBlog.ending}</p>

                </div>
                <div className="share">
                    <p>Share anywhere on:</p>
                    <div className="font">
                        <i class="fa-brands fa-twitter i11"></i>
                        <i class="fa-brands fa-instagram i11"></i>
                        <i class="fa-brands fa-facebook i11"></i>
                        <i class="fa-brands fa-linkedin i11"></i>
                        <i class="fa-brands fa-pinterest i11"></i>
                    </div>
                </div>
            </div>
            <div className="other">
                <div className="heading">
                    <i class="fa-regular fa-star ia1"></i>
                    <h1>Related Post</h1>
                </div>
                <div className="helloblogs">
                    {
                        BlogsData.slice(0, 3).map((curr) => {
                            return (<>
                                <div>
                                    <Blogcard title={curr} />
                                </div>
                            </>
                            )
                        })
                    }
                </div>

            </div>
            <Last />
        </div>
    )
}
export default SingleBlogPage