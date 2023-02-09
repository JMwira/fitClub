import React from 'react'
import {programsData} from "../../data/programsData.js"
import "./Programs.css"
import RightArrow from "../../assets/rightArrow.png"

const Programs = () => {
  return (
    <div className="programs" id="programs" >
        {/* headers */}
        <div className="programs-header">
            <span className='stroke-text'>Explore Our</span>
            <span>Programs</span>
            <span className='stroke-text'>To shape you</span>
        </div>
        <div className="program-categories">
            {
                programsData.map((programData)=>(
                    <div className="category">
                        {programData.image}
                        <span>
                            {programData.heading}
                        </span>
                        <span>
                            {programData.details}
                        </span>
                        <div className="join-now">
                            <span>Join now</span>
                            <img src={RightArrow} alt="" />
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Programs
