import React from 'react'
import "./PLans.css"
import {plansData} from "../../data/plansData"
import whiteTick from "../../assets/whiteTick.png"

const Plans = () => {
  return (
    <div className="plans-container">
        <div className="blur plan-blur-1 " ></div>
        <div className="blur plan-blur-2 " ></div>
        <div className="programs-header" style={{gap:"2rem"}} >
            <span className='stroke-text' >Ready to start</span>
            <span>your journey</span>
            <span className='stroke-text' >now with us</span>
        </div>

        {/* plansCard */}
        <div className="plans" id='plans'>
            {
                plansData.map((plandata, i)=>(
                    <div className='plan' key={i}>
                        {plandata.icon}
                        <span>{plandata.name}</span>
                        <span>${plandata.price}</span>
                        {
                            plandata.features.map((feature,i)=>(
                                <div className="feature">
                                    <img src={whiteTick} alt="" />
                                    <span key={i}>{feature}</span>
                                </div>
                            ))
                        }
                        <div>
                            <span>See more benefits</span>
                        </div>
                        <button className="btn">Join now</button>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Plans
