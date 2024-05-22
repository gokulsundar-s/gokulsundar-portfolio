import React from "react";
import { Link } from "react-scroll";
import Navbar  from "../Components/Navbar";
import '../Styles/HomePage.css';

export default function HomePage() {    
    return (
        <>
        <Navbar/>
        <div className = "home-container">
            <div className = "home-left">
                <p>Hello👋, I'm</p>
                <h1>GOKULSUNDAR S</h1>
                
                <div className = "home-skills-container">
                    <span>
                        Web Developer🌐<br/>
                        ReactJS Developer😎<br/>
                        MERN Stack Developer👨‍💻<br/>
                        Web Designer🖥️<br/>
                    </span>
                </div>

                <div className = "left-buttons-container">
                    <Link to="page-5" smooth={true}><button className = "left-button"><b>HIRE ME</b></button></Link>
                    <a href={require("../../src/Sources/Gokulsundar S.pdf")} download="koGokulsundar S"><button className = "left-button"><b>GET RESUME</b></button></a>
                </div>

                <div className = "left-social-icons-container">
                    <li><a href="https://www.instagram.com/sgs_gokul/" target = "_blank" rel="noreferrer"><img src={require("../../src/Sources/instagram.png")} alt="instagram" className = "left-social-icon"></img></a></li>
                    <li><a href="https://www.threads.net/@sgs_gokul" target = "_blank" rel="noreferrer"><img src={require("../../src/Sources/thread.png")} alt="threads" className = "left-social-icon"></img></a></li>
                    <li><a href="http://www.linkedin.com/in/gokulsundar-s" target = "_blank" rel="noreferrer"><img src={require("../../src/Sources/linkedin.png")} alt="linkedin" className = "left-social-icon"></img></a></li>
                    <li><a href="https://github.com/gokulsundar-s" target = "_blank" rel="noreferrer"><img src={require("../../src/Sources/github.png")} alt="github" className = "left-social-icon"></img></a></li>
                </div>
            </div>
            <div>
                <img src={require("../../src/Sources/home-profile.png")} alt="Profile" className = "home-right-profile"></img>
            </div>

        </div>
        </>
    )
}