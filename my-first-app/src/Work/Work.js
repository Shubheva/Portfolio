import React from 'react'
import SCHAEFFLER from "../../assets/SCHAEFFLER.png"
import tatamotors from "../../assets/tatamotors.jpg"
import knorrbremse from "../../assets/knorrbremse.png"

const Work = () => {
  return (
    <div className='Work-container'>
        <h1> My recent works</h1>

        <div className='Work-list-container'>
            <div className='Works-items'>
                <img src={SCHAEFFLER} alt='SCHAEFFLER'/>
            </div>

            <div className='Works-items'>
                <img src={tatamotors} alt='tatamotors'/>
            </div>

            <div className='Works-items'>
                <img src={knorrbremse} alt='knorrbremse'/>
            </div>

        </div>
    </div>
  )
}

export default Work