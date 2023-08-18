import React from 'react'
import working from './assets/working.png'
import './App.css'
export const Hero = () => {
  return (
    <>
          <div className="front">
            <div className='front1'>
            <p>Hello, I'm</p>
                    <h1>Kiruthiga Shree</h1>
                    <p>A recent graduate with hands-on experience in HTML, CSS, and JavaScript, I am seeking an
                        entry-level position as a Junior Web Developer. </p>
            </div>
            <div className='front1' id='front2'>
            <img src={working} alt=""  />
            </div>
          </div>
    </>
  )
}
