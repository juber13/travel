import React from 'react'
import './Home.scss'
import Video from '../../Assets/video.mp4'
import { AiOutlineSwapRight } from 'react-icons/ai'

const Home = () => {
  return (
    <div className="Home">  
      <div className="videoBg">
        <video src={Video} autoPlay loop muted></video>
      </div>

      <div className="sectionText">
        <h1>Unlock Your Travel Dreams With Us!</h1>
        <p>Discover the world's most adventurous nature, Life is so short for a trip.</p>
      <button className='btn flex'>GET STARTED <AiOutlineSwapRight className="icon"/></button>
      </div>
      <div className="popularPlaces">
        <div className="content">
          <h1>Popular places</h1>
          <div className="images flex"></div>
        </div>
      </div>
    </div>
  )
}

export default Home