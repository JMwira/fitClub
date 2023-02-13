import React from 'react'
import "./Testimonials.css"
import {testimonialsData} from "../../data/testimonialsData";
import { useState } from 'react';
import leftArrow from "../../assets/leftArrow.png"
import rightArrow from "../../assets/rightArrow.png"
import {motion} from 'framer-motion'

const Testimonials = () => {
    const [selected, setSelected] = useState(0);
    const tLength = testimonialsData.length;
    const transition = {type:'tween', duration:3}

  return (
    <div className="Testimonials">
        <div className="left-t">
            <span>Testimonials</span>
            <span className='stroke-text' >What they</span>
            <span>Say about us</span>
            <motion.span
                key={selected}
                initial={{x:-20, opacity:0}}
                animate={{x:0, opacity:1}}
                whileInView={{x:0, opacity:1}}
                exit={{opacity:0, x:20}}
                transition={transition}
            >
                {testimonialsData[selected].review}
            </motion.span>
            <span>
                <span
                    style={{color:'var(--orange)'}}
                >{testimonialsData[selected].name}</span>
                -{testimonialsData[selected].status}
            </span>
        </div>
        <div className="right-t">
            <motion.div
                initial={{opacity:'0', x:-50}}
                transition = {{...transition, duration:2}}
                whileInView = {{opacity:1, x:0}}
            ></motion.div>
            <motion.div
                initial={{opacity:'0', x:50}}
                transition = {{...transition, duration:2}}
                whileInView = {{opacity:1, x:0}}
            ></motion.div>
            <motion.img
                initial={{opacity:.8,x:100}}
                key={selected}
                animate={{opacity:1, x:0}}
                exit={{opacity:.8, x:-100}}
                transition={{...transition, duration:.7}}
            src={testimonialsData[selected].image} alt="" />
            <div className="arrows">
                <img src={leftArrow} alt="" 
                    onClick={()=>{
                        selected===0
                        ?setSelected(tLength-1)
                        :setSelected((prev)=>prev-1);
                    }}
                />
                <img src={rightArrow} alt=""
                    onClick={()=>{
                        selected==tLength -1
                        ?setSelected(0)
                        :setSelected((prev)=>prev+1);
                    }}
                />
            </div>
        </div>
    </div>
  )
}

export default Testimonials
