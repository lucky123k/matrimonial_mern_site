import React from 'react'
import "./css/Storycard.css"
import bg from "./images/aa.jpg"
// import { Link } from "react-router-dom";
const Storycard = () => {
    return (
        <div className='APP'>
            <div className='cardx'>
                <img className="card_img" src={bg} alt="" srcset="" />
                <h3 className='h3'>Pratik & Ms XYZ</h3>
                <p className='card_p'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, corrupti. Dolore voluptate ipsum ea itaque quidem, aspernatur illo numquam, corporis tempora, consequuntur debitis corrupti iste pariatur ducimus laudantium dolorem at?</p>
            </div>
        </div>
    )
}

export default Storycard