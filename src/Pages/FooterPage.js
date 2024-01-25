import { Component } from 'react';
import '../Styles/FooterPage.css';

class FooterPage extends Component {
    render() {
        return (
            <div className = "footer-container">
                <h2>GOKULSUNDAR S</h2>
                
                <ul className = "social-icons">
                    <li><a href="https://www.instagram.com/sgs_gokul/"><img src={require("../../src/Sources/instagram.png")} alt="instagram" className = "ficon"></img></a></li>
                    <li><a href="https://www.threads.net/@sgs_gokul"><img src={require("../../src/Sources/thread.png")} alt="threads" className = "ficon"></img></a></li>
                    <li><a href="http://www.linkedin.com/in/gokulsundar-s"><img src={require("../../src/Sources/linkedin.png")} alt="linkedin" className = "ficon"></img></a></li>
                    <li><a href="https://github.com/gokulsundars21cse"><img src={require("../../src/Sources/github.png")} alt="github" className = "ficon"></img></a></li>
                </ul>
                
                <div className = "contact-info">
                    <p className = "phone">+91 7010740253</p>
                    <p>gokulsundars.cse@gmail.com</p>
                </div>

                <div className = "copyrights">
                    <p className = "ccicon">&#169;</p>
                    <p> Gokulsundar S, All rights reserved.</p>
                </div>

            </div>
        )
    }
}

export default FooterPage;