import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import heart from "../../assets/heart.png"
import calories from "../../assets/calories.png"
const Hero = () => {
  return (
    <div className='hero' >
        <div className="blur hero-blur "></div>
      <div className="left-h">
        <Header/>
        {/* The best ad */}
        <div className="the-best-ad">
            <div></div>
            <span>the best fitness club in the town</span>
        </div>
        {/* Hero heading */}
        <div className="hero-text">
            <div>
                <span className='stroke-text' >Shape </span>
                <span>your</span>
            </div>
            <div>
                <span>ideal body</span>
            </div>
            <div>
                <span>
                    In here we help you to shape and build your ideal body and live up your life to the fullest
                </span>
            </div>
        </div>
        {/* figures */}
        <div className="figures">
            <div>
                <span>+140</span>
                <span>Expert coaches</span>
            </div>
            <div>
                <span>+978</span>
                <span>Members joined</span>
            </div>
            <div>
                <span>+50</span>
                <span>Fitness programs</span>
            </div>
        </div>
        <div className="hero-buttons">
            <button className="btn">Get started</button>
            <button className="btn">Learn more</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join now</button>
        <div className="heart-rate">
            <img src={heart} alt="" />
            <span>Heart rate</span><span>BPM</span>
        </div>
        {/* hero images */}
        <img src={hero_image} alt="" className='hero-image' srcset="" />
        <img src={hero_image_back} alt="" className='hero-image-back' srcset="" />
        {/* calories */}
        <div className="calories">
            <img src={calories} alt="" />
            <div>
                <span>Calories burned</span>
                <span>220Kcal</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
