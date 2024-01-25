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
            <nav>
                <a href id="name">GOKULSUNDAR S</a>
                <div>
                    <ul id="btns" className = {this.state.clicked ? "bnts active" : "#btns"}>
                        <li><Link to="page-1" smooth={true}>Home</Link></li>
                        <li><Link to="page-2" smooth={true}>About</Link></li>
                        <li><Link to="page-3" smooth={true}>Resume</Link></li>
                        <li><Link to="page-4" smooth={true}>Projects</Link></li>
                        <li><Link to="page-5" smooth={true}>Contact</Link></li>
                    </ul>
                </div>
                <div id="res" onClick={this.handleClick}>
                    <i id="bars" className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
            </nav>
        )
    }
}

export default Navbar;