import React from 'react'
import { Link } from "react-router-dom";
import Storycard from './Storycard';
import Carousel from "react-elastic-carousel";
import "./css/stories.css"
import WhyWe from './WhyWe';
const Stories = () => {
  const breakPoints = [
    { width: 0, itemsToShow: 3}
  ];
  return (
    <>
      <h1 className='h11'>Matrimony Service with Millions of Success Stories</h1>
      <div className='stories4'>
        <Carousel breakPoints={breakPoints} enableMouseSwipe enableAutoPlay autoPlaySpeed={1800} className = "csl">
          <Storycard />
          <Storycard />
          <Storycard />
          <Storycard />
          <Storycard />
          <Storycard />
          <Storycard />
          <Storycard />
          <Storycard />
          <Storycard />
          <Storycard />
          <Storycard />
          <Storycard />
          <Storycard />
          <Storycard />
          <Storycard />
          <Storycard />
          <Storycard />
          <Storycard />
          <Storycard />
          <Storycard />
          <Storycard />
          <Storycard />
          <Storycard />
          <Storycard />
          <Storycard />
          <Storycard />
          <Storycard />
        </Carousel>
      </div>
      <div className='aa'>
        <h1 className='h12'>Your story is waiting to happen!</h1>
        <Link to="/register" className='aa1'>Get Started</Link>
      </div>
      <WhyWe/>
    </>
  )
}

export default Stories