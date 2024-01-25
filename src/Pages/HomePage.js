import { Component } from 'react';
import { Link } from "react-scroll";
import Navbar  from "../Components/Navbar";
import '../Styles/HomePage.css';

class HomePage extends Component {    
    render() {
        return (
            <div className = "home-container" id = "page-1">
                <Navbar/>
                <div className = "home-page">
                    <div className = "hello">
                        <p>Hello👋, I'm</p>
                        <h1>GOKULSUNDAR S</h1>
                        <p>Full-stack Developer🖥️</p>

                        <div className = "buttons">
                            <button className = "homebtn"><Link to="page-5" smooth={true}><b>HIRE ME</b></Link></button>
                            <a href={require("../../src/Sources/Gokulsundar S.pdf")} download="Gokulsundar S"><button className = "homebtn"><b>GET RESUME</b></button></a>
                        </div>

                        <ul className = "social">
                            <li><a href="https://www.instagram.com/sgs_gokul/" target = "_blank" rel="noreferrer"><img src={require("../../src/Sources/instagram.png")} alt="instagram" className = "icon"></img></a></li>
                            <li><a href="https://www.threads.net/@sgs_gokul" target = "_blank" rel="noreferrer"><img src={require("../../src/Sources/thread.png")} alt="threads" className = "icon"></img></a></li>
                            <li><a href="http://www.linkedin.com/in/gokulsundar-s" target = "_blank" rel="noreferrer"><img src={require("../../src/Sources/linkedin.png")} alt="linkedin" className = "icon"></img></a></li>
                            <li><a href="https://github.com/gokulsundar-s" target = "_blank" rel="noreferrer"><img src={require("../../src/Sources/github.png")} alt="github" className = "icon"></img></a></li>
                        </ul>
                    </div>
                    <img src={require("../../src/Sources/profile.png")} alt="Profile" className = "profile"></img>
                </div>
            </div>
        )
    }
}

export default HomePage;