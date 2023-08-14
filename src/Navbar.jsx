import React from 'react'
import pdf from './assets/Resume.pdf'
import logo from './assets/klogo.png'

import './App.css'

export const Navigation = () => {
    return (
        <>
            <nav className='navbar'>
                <img src={logo} alt="" />
                {/* <div className="toggle">
                <i className="fa-solid fa-bars" style={{color:"white",fontSize:30}}></i>
                </div> */}
                <ul>
                    <li><a href="#hero">Home</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href={pdf} download="Kiruthiga-Shree-Resume.pdf">Resume</a></li>
                </ul>
            </nav>

        </>
    )
}
