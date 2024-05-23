import React from "react";
import '../Styles/AboutPage.css';

export default function AboutPage() {
    return (
        <div className = "page-container">
            <h1 className = "page-header" id = "page-2">ABOUT ME</h1>
            
            <div className = "about-box-conatiner">
                <img src={require("../../src/Sources/about-profile.png")} alt="About Profile" className = "about-right-profile"></img>
                
                <div className = "about-left-container">
                    <p className = "about-left-header"><b>WHY TO CHOOSE ME?🎯</b></p>
                    <p className = "about-left-content">I am a passionate and dedicated full-stack developer with a keen eye for creative design. My journey in the world of technology began with a strong fascination for turning ideas into interactive and visually stunning experiences. Armed with a love for frontend development and crafting engaging user interfaces that not only look great but also deliver enjoyable user experiences, I constantly strive to push the boundaries of what's possible. Driven by a commitment to continuous learning, innovation, and growth, I embrace new challenges and emerging technologies to create innovative solutions that leave a lasting impact.</p>
                </div>
            </div>
        </div>
    )
}
 