import "./css/nav1.css"
import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import bg from "./images/mybg.jpg"
import Carousel from "react-elastic-carousel";
import Dummy from "./Dummy"
import axios from "axios";
const Banner = () => {
    const [BlogsData, SetData] = useState([])
    useEffect(() => {
      async function fetchData() {
        const got = await axios.get("http://localhost:8081/fetchBlogs")
        console.log(got.data);
        SetData(got.data);
      }
      fetchData();
    }, []);
    const id = 1911;
    const breakPoints = [
        { width: 110, itemsToShow: 1 }
      ];
  return (
    <div>
        <div className="blogcard2">
            <img className="bgimg" src="https://www.teahub.io/photos/full/35-351110_1920x1080-wedding-wallpaper-hd-data-id-341163-marriage.jpg" alt="" srcset="" />   
            <Carousel breakPoints={breakPoints} enableTilt enableMouseSwipe enableAutoPlay autoPlaySpeed={1800} className = "crousl">
                {
                    BlogsData.map((curr) => {
                        return(
                        <>
                            <Dummy topic = {curr} className = "dummy2" />
                        </>)
                    })
                    
                }
            </Carousel>
        </div>
    </div>

  )
}

export default Banner