import { Component } from 'react';
import { Link } from "react-scroll";
import Navbar  from "../Components/Navbar";
import '../Styles/HomePage.css';

class HomePage extends Component {    
    render() {
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
                                UI/UX Designer✌️<br/>
                            </span>
                        </div>
                        <div className = "left-buttons-container">
                            <button className = "left-button"><Link to="page-5" smooth={true}><b>HIRE ME</b></Link></button>
                            <a href={require("../../src/Sources/Gokulsundar S.pdf")} download="Gokulsundar S"><button className = "left-button"><b>GET RESUME</b></button></a>
                        </div>

                        <ul className = "left-social-icons-container">
                            <li><a href="https://www.instagram.com/sgs_gokul/" target = "_blank" rel="noreferrer"><img src={require("../../src/Sources/instagram.png")} alt="instagram" className = "left-social-icon"></img></a></li>
                            <li><a href="https://www.threads.net/@sgs_gokul" target = "_blank" rel="noreferrer"><img src={require("../../src/Sources/thread.png")} alt="threads" className = "left-social-icon"></img></a></li>
                            <li><a href="http://www.linkedin.com/in/gokulsundar-s" target = "_blank" rel="noreferrer"><img src={require("../../src/Sources/linkedin.png")} alt="linkedin" className = "left-social-icon"></img></a></li>
                            <li><a href="https://github.com/gokulsundar-s" target = "_blank" rel="noreferrer"><img src={require("../../src/Sources/github.png")} alt="github" className = "left-social-icon"></img></a></li>
                        </ul>
                    </div>
                    <img src={require("../../src/Sources/profile.png")} alt="Profile" className = "home-right-profile"></img>
                </div>
            </>
        )
    }
}

export default HomePage;