import React from 'react'
import image from '../images/rbbanner2.webp'
import '../style/home.css'

const Home = () => {
  return (
    <div className='home'>
      <div className='homeInfo'>
        <h1>Discover, connect and transact with top quality food suppliers in your area.</h1>
        <p>Introducing Redbasil's digital marketplace for restaurants and hotels. Get started now by downloading the marketplace app.</p>
        <div className='button'>
            <span>Download Android App</span>
            <span>Download iPhone App</span>
        </div>
      </div>
      <div className='homeImage'>
        <img src={image} alt="image1"/>
      </div>
    </div>
  )
}

export default Home
