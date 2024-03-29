import React from 'react'
import AOS from 'aos';
import'./App.css';
export const Skillset = () => {
    AOS.init();
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
    return (
        <>
            {/* <div id='skills' className='hide'>
                <div className="left">
                    <h1>Skills</h1>
                    <p>With expertise in JavaScript, HTML/CSS, React, Python (Basics), SQL, Node.js, Express.js, AWS, and proficiency in design tools like Figma, Canva, CorelDraw, along with Bootstrap 5, wireframing, prototyping, and DOM manipulation, I am a versatile developer capable of handling interactive web app development, both front-end and back-end tasks efficiently.</p>
                </div>
                <div className="right">
                    <div className="row1">
                        <div className="skill-img
                        " data-bs-toggle="tooltip" data-bs-placement="left"
                            data-bs-custom-class="custom-tooltip"
                            data-bs-title="HTML5" data-aos="fade-down" data-aos-duration="1000"  data-aos-once="true">
                            <img src="https://logos-download.com/wp-content/uploads/2017/07/HTML5_badge.png" alt="" />
                        </div>
                        <div className="skill-img
                        " id='css' data-bs-toggle="tooltip" data-bs-placement="top"
                            data-bs-custom-class="custom-tooltip"
                            data-bs-title="CSS3" data-aos="fade-down" data-aos-duration="1000"  data-aos-once="true">
                            <img src="https://www.shareicon.net/data/512x512/2016/08/01/639873_internet_512x512.png" alt="" />
                        </div>
                        <div className="skill-img
                        " id='js' data-bs-toggle="tooltip" data-bs-placement="right"
                            data-bs-custom-class="custom-tooltip"
                            data-bs-title="JavaScript" data-aos="fade-down" data-aos-duration="1000"  data-aos-once="true" >
                            <img src="https://www.britefish.net/wp-content/uploads/2019/06/logo-javascript-2.png" alt="" />
                        </div>
                    </div>
                    <div className="row1">
                        <div className="skill-img
                        " data-bs-toggle="tooltip" data-bs-placement="left"
                            data-bs-custom-class="custom-tooltip"
                            data-bs-title="React.js"data-aos="fade-down" data-aos-duration="1000"  data-aos-once="true">
                            <img src="https://tech775.files.wordpress.com/2016/08/react-logo-colored.png?w=620" alt="" />
                        </div>
                        <div className="skill-img
                        " data-bs-toggle="tooltip" data-bs-placement="top"
                            data-bs-custom-class="custom-tooltip"
                            data-bs-title="Node.js" data-aos="fade-down" data-aos-duration="1000"  data-aos-once="true">
                            <img src="https://th.bing.com/th/id/R.bdd9dbc21b1a93bdc21e9cb5d772e3bf?rik=5gtPY6ddl2pLdA&riu=http%3a%2f%2fwww.mindrops.com%2fimages%2fnodejs-image.png&ehk=qPCsxE0%2bX2K%2bJfokkA9DLNfdBnmhTrYxgUAsaWPRg%2fc%3d&risl=&pid=ImgRaw&r=0" alt="" />
                        </div>
                        <div className="skill-img
                        " data-bs-toggle="tooltip" data-bs-placement="right"
                            data-bs-custom-class="custom-tooltip"
                            data-bs-title="Github" data-aos="fade-down" data-aos-duration="1000"  data-aos-once="true" >
                            <img src="https://th.bing.com/th/id/OIP.ckeUFk-yid0vfWnd56w7wAHaHa?pid=ImgDet&rs=1" alt="" />
                        </div>
                    </div>
                    <div className="row1">
                        <div className="skill-img
                        " data-bs-toggle="tooltip" data-bs-placement="left"
        data-bs-custom-class="custom-tooltip"
        data-bs-title="Bootstrap5" data-aos="fade-down" data-aos-duration="1000"  data-aos-once="true">
                            <img src="https://brandlogos.net/wp-content/uploads/2021/09/bootstrap-logo.png" alt="" />
                        </div>
                        <div className="skill-img
                        " data-bs-toggle="tooltip" data-bs-placement="bottom"
        data-bs-custom-class="custom-tooltip"
        data-bs-title="AWS" data-aos="fade-down" data-aos-duration="1000"  data-aos-once="true">
                            <img src="https://www.loudounchamber.org/wp-content/uploads/2018/02/aws_logo_smile-NEW.png" alt="" />
                        </div>
                        <div className="skill-img
                        " data-bs-toggle="tooltip" data-bs-placement="right"
        data-bs-custom-class="custom-tooltip"
        data-bs-title="Figma"  data-aos="fade-down" data-aos-duration="1000"  data-aos-once="true">
                            <img src="https://logodownload.org/wp-content/uploads/2022/12/figma-logo-0.png" alt="" />
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="skill">
                <div className="box" id='skills'>
                <h1>Skills</h1>
                    <p>With expertise in JavaScript, HTML/CSS, React, Python (Basics), SQL, Node.js, Express.js, AWS, and proficiency in design tools like Figma, Canva, CorelDraw, along with Bootstrap 5, wireframing, prototyping, and DOM manipulation, I am a versatile developer capable of handling interactive web app development, both front-end and back-end tasks efficiently.</p>
                </div>
                <div className="box" id='grid'>
                    <div className="skill-img">
                        <div className="skill-image" data-bs-toggle="tooltip" data-bs-placement="left"
                            data-bs-custom-class="custom-tooltip"
                            data-bs-title="HTML5" data-aos="fade-down" data-aos-duration="1000"  data-aos-once="true"><img src="https://cdn.icon-icons.com/icons2/844/PNG/512/HTML5_icon-icons.com_67090.png" alt="" /></div>
                        <div className="skill-image" data-bs-toggle="tooltip" data-bs-placement="left"
                            data-bs-custom-class="custom-tooltip"
                            data-bs-title="CSS3" data-aos="fade-down" data-aos-duration="1000"  data-aos-once="true"><img src="https://www.shareicon.net/data/512x512/2016/08/01/639873_internet_512x512.png" alt="" /></div>
                        <div className="skill-image" data-bs-toggle="tooltip" data-bs-placement="left"
                            data-bs-custom-class="custom-tooltip"
                            data-bs-title="Java Script" data-aos="fade-down" data-aos-duration="1000"  data-aos-once="true"><img src="https://www.britefish.net/wp-content/uploads/2019/06/logo-javascript-2.png" alt="" /></div>
                    </div>
                    <div className="skill-img
                    ">
                        <div className="skill-image" data-bs-toggle="tooltip" data-bs-placement="left"
                            data-bs-custom-class="custom-tooltip"
                            data-bs-title="React.js" data-aos="fade-down" data-aos-duration="1000"  data-aos-once="true"><img src="https://tech775.files.wordpress.com/2016/08/react-logo-colored.png?w=620" alt="" /></div>
                        <div className="skill-image" data-bs-toggle="tooltip" data-bs-placement="left"
                            data-bs-custom-class="custom-tooltip"
                            data-bs-title="Node.js" data-aos="fade-down" data-aos-duration="1000"  data-aos-once="true"> <img src="https://th.bing.com/th/id/R.bdd9dbc21b1a93bdc21e9cb5d772e3bf?rik=5gtPY6ddl2pLdA&riu=http%3a%2f%2fwww.mindrops.com%2fimages%2fnodejs-image.png&ehk=qPCsxE0%2bX2K%2bJfokkA9DLNfdBnmhTrYxgUAsaWPRg%2fc%3d&risl=&pid=ImgRaw&r=0" alt="" /></div>
                        <div className="skill-image" data-bs-toggle="tooltip" data-bs-placement="left"
                            data-bs-custom-class="custom-tooltip"
                            data-bs-title="Github" data-aos="fade-down" data-aos-duration="1000"  data-aos-once="true"> <img src="https://th.bing.com/th/id/OIP.ckeUFk-yid0vfWnd56w7wAHaHa?pid=ImgDet&rs=1" alt="" /></div>
                    </div>
                    <div className="skill-img
                    ">
                        <div className="skill-image" data-bs-toggle="tooltip" data-bs-placement="left"
                            data-bs-custom-class="custom-tooltip"
                            data-bs-title="Bootstrap5" data-aos="fade-down" data-aos-duration="1000"  data-aos-once="true"><img src="https://brandlogos.net/wp-content/uploads/2021/09/bootstrap-logo.png" alt="" /></div>
                        <div className="skill-image" data-bs-toggle="tooltip" data-bs-placement="left"
                            data-bs-custom-class="custom-tooltip"
                            data-bs-title="AWS" data-aos="fade-down" data-aos-duration="1000"  data-aos-once="true"> <img src="https://www.loudounchamber.org/wp-content/uploads/2018/02/aws_logo_smile-NEW.png" alt="" /></div>
                        <div className="skill-image" data-bs-toggle="tooltip" data-bs-placement="left"
                            data-bs-custom-class="custom-tooltip"
                            data-bs-title="Figma" data-aos="fade-down" data-aos-duration="1000"  data-aos-once="true"> <img src="https://logodownload.org/wp-content/uploads/2022/12/figma-logo-0.png" alt="" /></div>
                    </div>
                </div>
            </div>
        </>
    )
}
