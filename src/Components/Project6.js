import React from "react";
import '../Styles/Projects.css';

export default function Project6() {
    return (
        <div className = "projects-container">
            <div className = "projects-box">
                <img src={require("../../src/Sources/project6.png")} alt="Project" className = "projects-image"></img>
                <div>
                    <p className = "projects-header"><b>BILLING SOFTWARE - AJRA TEX</b></p>
                    <p className = "projects-content">Billing Software Project is a Python application developed to manage billing processes efficiently using the Tkinter for GUI and MySQL for database. </p>
                    <div className = "projects-button-container">
                        <a href = "https://github.com/gokulsundar-s/KEC-presence" target = "_blank" rel="noreferrer"><button className = "projects-button">View code</button></a>
                        {/* <a><button className = "projects-button">Live demo</button></a> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
