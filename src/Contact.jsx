import React from 'react'
import girl from './assets/contact.png'
export const Contact = () => {
  return (
    <>
      <div className="contact" id='contact'>
        <h1>Contact</h1>
        <div className="girl">
          <img src={girl} alt="" />
        </div>
        <div className="sources">
          <div className="src" id='linkedin'>
                  <a href="https://www.linkedin.com/in/kiruthiga-shree-3a791220b" target='_blank' style={{textDecoration:"none",color:"#133F25"}}><h2><i class="fa-brands fa-linkedin"></i>  LINKEDIN</h2></a>
          </div>
          <div className="src" id='github'>
              <a href="https://github.com/Kiruthiga-Shree" target='blank' style={{textDecoration:"none",color:"#133F25"}}><h2><i class="fa-brands fa-github"></i>  GITHUB</h2></a>
          </div>
          <div className="src" id='mail'>
<a href="mailto:kiruthigashree2002@gmail.com" target='_blank' style={{textDecoration:"none",color:"#133F25"}}><h2><i class="fa-solid fa-envelope"></i>  MAIL</h2></a>
          </div>
        </div>
      </div>
    </>
  )
}