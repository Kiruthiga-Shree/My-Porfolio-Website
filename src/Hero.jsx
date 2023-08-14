import React from 'react'
import working from './assets/working.png'
import './App.css'
export const Hero = () => {
  return (
    <>
         <div id='hero'>
                <div className="sec1">
                    <p className='hello'>Hello, I'm</p>
                    <h1>Kiruthiga Shree</h1>
                    <p className='intro'>A recent graduate with hands-on experience in HTML, CSS, and JavaScript, I am seeking an
                        entry-level position as a Junior Web Developer. </p>
                </div>
                <img src={working} alt="" />
            </div>
    </>
  )
}
