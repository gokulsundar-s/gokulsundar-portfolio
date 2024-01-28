import { Component } from 'react';
import { Link } from "react-scroll";
import '../Styles/Navbar.css';

class Navbar extends Component {
    state = { clicked: false };
    handleClick = () =>{
        this.setState({clicked:!this.state.clicked})
    }
     render() {
        return (
            <div className = "navbar-container">
                <a href="*" className = "navbar-name"><span>GOKULSUNDAR S</span></a>
                <div>
                    <ul id="btns" className = {this.state.clicked ? "bnts active" : "#btns"}>
                        <li><Link to="*" smooth={true}>Home</Link></li>
                        <li><Link to="page-2" smooth={true}>About</Link></li>
                        <li><Link to="page-3" smooth={true}>Resume</Link></li>
                        <li><Link to="page-4" smooth={true}>Projects</Link></li>
                        <li><Link to="page-5" smooth={true}>Contact</Link></li>
                    </ul>
                </div>
                <div className = "navbar-bars" onClick={this.handleClick}>
                    <i id="bars" className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
            </div>
        )
    }
}

export default Navbar;