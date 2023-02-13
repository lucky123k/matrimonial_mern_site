import React, { useState } from 'react'
import axios from 'axios';
import Nav from "./Nav"
import "./css/createblog.css"
const CreateBlog = () => {
    const [Heading, SetHeading] = useState("");
    const [About, SetAbout] = useState("");
    const [Author, SetAuthor] = useState("");
    const [Imag, SetImag] = useState("");
    // const [Heading, SetHeading]= useState("");
    const [Desc, SetDesc] = useState("");
    const [FirstHead, SetFirstHead] = useState("");
    const [FirstDesc, SetFirstDesc] = useState("");
    const [SecondHead, SetSecondHead] = useState("");
    const [SecondDesc, SetSecondDesc] = useState("");
    const [End, SetEnd] = useState("");
    const publish = async () => {
        console.log(SecondDesc);
        await axios.post("http://localhost:8081/CreateBlog", { Heading, About, Author, Imag, Desc, FirstHead, FirstDesc, SecondHead, SecondDesc, End })

    }
    return (
        <div>
            <Nav />
            <div className="container1">
                <h1 className='h1x'>Create your own blog with your amazing ideas!!!</h1>
                <input className='inp12' type="text" placeholder='Enter Main Heading of the blog' onChange={(e) => SetHeading(e.target.value)} />
                <input  className='inp123' type="text" placeholder='Brief description about the topic' onChange={(e) => SetAbout(e.target.value)} />
                <input className='inp12' type="text" placeholder='Author Name' onChange={(e) => SetAuthor(e.target.value)} />
                <input className='inp12' type="text" placeholder='please paste any image URL from internet' onChange={(e) => SetImag(e.target.value)} />
                <input className='inp123' type="text" placeholder='Description of the blog' onChange={(e) => SetDesc(e.target.value)} />
                <input className='inp12' type="text" placeholder='Enter First Sub-Heading of the blog' onChange={(e) => SetFirstHead(e.target.value)} />
                <input className='inp123' type="text" placeholder='Enter First Sub-Heading description of the blog' onChange={(e) => SetFirstDesc(e.target.value)} />
                <input className='inp12' type="text" placeholder='Enter Second Sub-Heading of the blog' onChange={(e) => SetSecondHead(e.target.value)} />
                <input className='inp123' type="text" placeholder='Enter Second Sub-Heading description of the blog' onChange={(e) => SetSecondDesc(e.target.value)} />
                <input className='inp12' type="text" placeholder='Enter the ending of the blog' onChange={(e) => SetEnd(e.target.value)} />
                <button className='btnx' onClick={publish}>Publish</button>
            </div>
        </div>
    )
}

export default CreateBlog