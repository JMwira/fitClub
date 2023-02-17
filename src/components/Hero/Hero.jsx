import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import heart from "../../assets/heart.png"
import calories from "../../assets/calories.png"
import {motion} from 'framer-motion'
import NumberCounter from "number-counter"
const Hero = () => {
    const transition = {type:'tween', duration:3}

  return (
    <div className='hero' id='home' >
        <div className="blur hero-blur "></div>
      <div className="left-h">
        <Header/>
        {/* The best ad */}
        <div className="the-best-ad">
            <motion.div
                initial={{left:'238px'}}
                whileInView={{left:'8px'}}
                transition={{...transition, type:'tween'}}
            ></motion.div>
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
                <span><NumberCounter end={140} start={50} delay={4} /></span>
                <span>Expert coaches</span>
            </div>
            <div>
            <span><NumberCounter end={978} start={880} delay={4} /></span>
                <span>Members joined</span>
            </div>
            <div>
            <span><NumberCounter end={50} start={30} delay={4} /></span>
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
        <motion.div className="heart-rate"
            transition={{...transition}}
            initial={{right:'-1rem'}}
            whileInView={{right:'4rem'}}
        >
            <img src={heart} alt="" />
            <span>Heart rate</span><span>BPM</span>
        </motion.div>
        {/* hero images */}
        <img src={hero_image} alt="" className='hero-image' srcset="" />
        <motion.img src={hero_image_back} alt="" className='hero-image-back' srcset="" initial={{right:'11rem'}} whileInView={{right:'20rem'}} transition={transition} />
        {/* calories */}
        <motion.div className="calories"
            initial={{right:'37rem'}}
            whileInView={{right:'28rem'}}
            transition={transition}
        >
            <img src={calories} alt="" />
            <div>
                <span>Calories burned</span>
                <span>220Kcal</span>
            </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
