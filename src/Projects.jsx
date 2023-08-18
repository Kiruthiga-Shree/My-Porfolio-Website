import React from 'react';
import img1 from './assets/box1.png'
import img2 from './assets/box2.png'
import img3 from './assets/box3.png'
import img4 from './assets/box4.png'
import img8 from './assets/box8.png'

export default function projects() {
    return (
        <>
            <div className='main' id='projects'>
                <h1>Projects</h1>
                <div className='boxes'>
                    <div className='box2'>
                        <div className='img'>
                            <a href={img1} target='_blank'><img src={img1} alt="" /></a>
                        </div>
                        <p className='lang'>JAVASCRIPT | HTML | CSS</p>
                        <h2>College Website Revamp</h2>
                        <p className='description'>Implemented a website for my college that improved usability and included features such as a college bus system</p>
                        <a href="https://ksrct-35e15.web.app/index.html#home" target='_blank'><button className='project-button'>VIEW PROJECT</button></a>
                    </div>
                    <div className='box2'>
                        <div className='img'>
                            <a href={img2} target='_blank'><img src={img2} alt="" /></a>
                        </div>
                        <p className='lang'>JAVASCRIPT | HTML | CSS |BOOTSTRAP 5 | JQUERY</p>
                        <h2>Multi-State Co-Operative Societies</h2>
                        <p className='description'>Participated in a Hackathon to design/develop Dashboard portal for Multi-State Co-Operative Societies</p>
                        <a href="https://dashboard-294b9.web.app/" target='_blank'><button className='project-button'>VIEW PROJECT</button></a>
                    </div>
                    <div className='box2'>
                        <div className='img'>
                            <a href={img3} target='_blank'><img src={img3} alt="" /></a>
                        </div>
                        <p className='lang'>FIGMA | PROTOTYPING</p>
                        <h2>Food Delivery Application</h2>
                        <p className='description'>Designed an UI/UX Food Delivery Application also created the flow using Figma Designing Tool</p>
                        <a href="https://www.figma.com/file/v5oZxndxWiV3JKy1NMXhLJ/Food-Application?type=design&mode=dev" target='_blank'>
                            <button className='project-button'>VIEW PROJECT</button>
                        </a>
                    </div>
                    <div className='box2'>
                        <div className='img'>
                            <a href={img4} target='_blank'><img src={img4} alt="" /></a>
                        </div>
                        <p className='lang'>JAVASCRIPT | HTML | CSS</p>
                        <h2>Company's Official Website</h2>
                        <p className='description'>Implemented a website for an organisation during my internship period</p>
                        <a href="https://krishtec.co.in/#" target='_blank'><button className='project-button'>VIEW PROJECT</button></a>
                    </div>
                    <div className='box2'>
                        <div className='img'>
                            <a href={img8} target='_blank'><img src={img8} alt="" /></a>
                        </div>
                        <p className='lang'> BOOTSTRAP5 | CSS | HTML</p>
                        <h2>Restaurant Website</h2>
                        <p className='description'>Implemented a Restaurant Website User Interface using Web Framework</p>
                        <a href="https://github.com/Kiruthiga-Shree/Restaurant-Website" target='_blank'><button className='project-button'>VIEW PROJECT</button></a>
                    </div>
                </div>
                </div>
                
                {/* <div className='boxes'>
                    <div className='box2'>
                        <div className='box'>
                            <a href={img5} target='_blank'><img src={img5} alt="" /></a>
                        </div>
                        <p className='lang'> HTML | CSS</p>
                        <h2>Travel Website</h2>
                        <p className='description'>Implemented a website for my college that improved usability and included features such as a college bus system</p>
                        <a href="https://kiruthiga-shree.github.io/Travel-Website/" target='_blank'><button className='project-button'>VIEW PROJECT</button></a>
                    </div>
                </div> */}
                {/* <div className='boxes'>
                    <div className='box2'>
                        <div className='box'>
                            <a href={img6} target='_blank'><img src={img6} alt="" /></a>
                        </div>
                        <p className='lang'> BOOTSTRAP5 | CSS | HTML</p>
                        <h2>Portfolio Template (Side navigation)</h2>
                        <p className='description'>Developed a Portfolio Template using Web Framework(BOOTSTRAP 5)</p>
                        <a href="https://github.com/Kiruthiga-Shree/Bootstrap_Portfolio" target='_blank'><button className='project-button'>VIEW PROJECT</button></a>
                    </div>
                </div> */}

                    {/* <div className='box2'>
                        <div className='box'>
                            <a href={img7} target='_blank'><img src={img7} alt="" /></a>
                        </div>
                        <p className='lang'> BOOTSTRAP5 | CSS | HTML</p>
                        <h2>Portfolio Template</h2>
                        <p className='description'>Developed a Portfolio Template using Web Framework(BOOTSTRAP 5)</p>
                        <a href="https://github.com/Kiruthiga-Shree/Portfolio_UI" target='_blank'><button className='project-button'>VIEW PROJECT</button></a>
                    </div> */}
                 
                    {/* <div className='box2'>
                        <div className='box'>
                            <a href={img9} target='_blank'><img src={img9} alt="" /></a>
                        </div>
                        <p className='lang'> BOOTSTRAP5 | CSS | HTML</p>
                        <h2>Candies Website</h2>
                        <p className='description'>Developed a simple webpage for Candies using Web Framework</p>
                        <a href="https://github.com/Kiruthiga-Shree/Candy_webpage" target='_blank'><button className='project-button'>VIEW PROJECT</button></a>
                    </div> */}
                
            
        </>
    )
}
