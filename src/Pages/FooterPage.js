import React from "react";
import '../Styles/FooterPage.css';

export default function FooterPage() {
    return (
        <div className = "footer-container">
            <h1 className = "footer-header">GOKULSUNDAR S</h1>
                
            <ul className = "footer-social-icons-container">
            <li><a href="https://www.instagram.com/sgs_gokul/" target = "_blank" rel="noreferrer"><img src={require("../../src/Sources/instagram.png")} alt="instagram" className = "left-social-icon"></img></a></li>
                    <li><a href="https://www.threads.net/@sgs_gokul" target = "_blank" rel="noreferrer"><img src={require("../../src/Sources/thread.png")} alt="threads" className = "left-social-icon"></img></a></li>
                    <li><a href="http://www.linkedin.com/in/gokulsundar-s" target = "_blank" rel="noreferrer"><img src={require("../../src/Sources/linkedin.png")} alt="linkedin" className = "left-social-icon"></img></a></li>
                    <li><a href="https://github.com/gokulsundar-s" target = "_blank" rel="noreferrer"><img src={require("../../src/Sources/github.png")} alt="github" className = "left-social-icon"></img></a></li>
            </ul>
                
            <div className = "footer-contact-info">
                <p className = "footer-phone-number">+91 7010740253</p>
                <p>gokulsundars.cse@gmail.com</p>
            </div>

            <div className = "footer-copyrights-container">
                <p>&#169;</p>
                <p> Gokulsundar Sundararaj, All rights reserved.</p>
            </div>

        </div>
    )
}