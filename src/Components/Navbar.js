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
            <a href="/" className = "navbar-header" id="page-1"><img src={require("../../src/Sources/gs-icon.png")} alt="hello"></img></a>
            <div>
                <ul id="btns" className = {clicked ? "bnts active" : "#btns"}>
                    <li><Link to="page-1" smooth="true">Home</Link></li>
                    <li><Link to="page-2" smooth="true">About</Link></li>
                    <li><Link to="page-3" smooth="true">Education</Link></li>
                    <li><Link to="page-4" smooth="true">Skills</Link></li>
                    <li><Link to="page-5" smooth="true">Projects</Link></li>
                    <li><Link to="page-6" smooth="true">Contact</Link></li>
                </ul>
            </div>
            <div className = "navbar-bars" onClick={handleClick}>
                <i id="bars" className={clicked ? 'fas fa-times fa-lg' : 'fa-solid fa-bars fa-lg'}></i>
            </div>
        </div>
    )
}