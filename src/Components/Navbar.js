import React, {useState} from 'react';
import { Link } from 'react-scroll';
import '../Styles/Navbar.css';

export default function Navbar() {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    };

    return (
        <div className = "navbar-container">
            <a href="/" className = "navbar-name" id="page-1"><span>GOKULSUNDAR S</span></a>
            <div>
                <ul id="btns" className = {clicked ? "bnts active" : "#btns"}>
                    <li><Link to="page-1" smooth="true">Home</Link></li>
                    <li><Link to="page-2" smooth="true">About</Link></li>
                    <li><Link to="page-3" smooth="true">Resume</Link></li>
                    <li><Link to="page-4" smooth="true">Projects</Link></li>
                    <li><Link to="page-5" smooth="true">Contact</Link></li>
                </ul>
            </div>
            <div className = "navbar-bars" onClick={handleClick}>
                <i id="bars" className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
        </div>
    )
}