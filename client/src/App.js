import React from 'react'
import Homepg from "./components/Homepg";
import Login from './components/Login';
import Blogs from "./components/Blogs";
import Signup from './components/Signup';
import SingleBlogPage from './components/SingleBlogPage';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import CreateBlog from './components/CreateBlog';
import Matches from './components/Matches';
import "./components/css/App.css"
import Profile from './components/Profile';
import About from './components/About';
function App() {
  return (
    <div>
      {/* <Homepg/> */}
      {/* <Blogs/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Homepg/>}></Route>
          <Route path="/blogs" element = {<Blogs/>}></Route> 
          <Route path='/login' element = {<Login/>}/>
          <Route path='/register' element = {<Signup/>}/>
          <Route path='/matches' element = {<Matches/>}/>
          <Route path='/CreateBlog' element = {<CreateBlog/>}/>
          <Route path='/Single' element = {<SingleBlogPage/>}/>
          <Route path='/Blog/:id' element = {<SingleBlogPage/>}/>
          <Route path='/profile' element = {<Profile/>}/>
          <Route path='/about' element = {<About/>}/>
          {/* <Route path='contact' element = {<Contact/>}/> */}
          {/* <Route path='/Matches' element = {<SingleBlogPage/>}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
