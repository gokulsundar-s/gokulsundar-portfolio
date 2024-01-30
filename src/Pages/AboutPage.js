import React from "react";
import '../Styles/AboutPage.css';

export default function AboutPage() {
    return (
        <div className = "about-container">
            <h1 className = "about-header" id = "page-2">ABOUT ME</h1>

            <div className = "about-top-container">
                <p className = "about-top-header"><b>Why to choose me?🎯</b></p>
                <p className = "about-top-content">I am a passionate full-stack developer with a keen eye for creative design. My journey in the world of technology began with a strong fascination for turning ideas into interactive and visually stunning experiences. Armed with love for frontend development and crafting engaging user interfaces that not only look great but also deliver enjoyable user experiences.</p>
            </div>
        
            <div className = "about-bottom-container">
                <div className = "about-bottom-boxes">
                    <img src={require("../../src/Sources/teamwork.png")} alt="frontend developer" className = "box-icon"></img>
                    <h3>Teamwork</h3>
                    <p>Collaboration is the driving force behind achieving shared objectives. Let's turn our collective efforts into achievements.</p>
                </div>
                
                <div className = "about-bottom-boxes">
                    <img src={require("../../src/Sources/creative.png")} alt="designer" className = "box-icon"></img>
                    <h3>Creativity</h3>
                    <p>Let's embark on a journey where imagination knows no limits, and together, we'll craft exceptional and imaginative solutions.</p>
                </div>

                <div className = "about-bottom-boxes">
                    <img src={require("../../src/Sources/leadership.png")} alt="designer" className = "box-icon"></img>
                    <h3>Leadership</h3>
                    <p>Driven by a vision for success and a commitment to empowering individuals in the team toward achieving high.</p>
                </div>
            </div>
        </div>
    )
}
 
