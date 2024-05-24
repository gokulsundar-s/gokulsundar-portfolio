import React from "react";
import '../Styles/Projects.css';

export default function Project1() {
    return (
        <div className = "projects-container">
            <div className = "projects-box">
                <img src={require("../../src/Sources/project1.png")} alt="Project" className = "projects-image"></img>
                <div>
                    <p className = "projects-header"><b>KEC PRESENCE</b></p>
                    <p className = "projects-content">KEC Presence is a cutting-edge project developed using the MERN stack designed to enhance user engagement and to create a dynamic interactive platform.</p>
                    <div className = "projects-button-container">
                        <a href = "https://github.com/gokulsundar-s/KEC-presence" target = "_blank" rel="noreferrer"><button className = "projects-button">View code</button></a>
                        {/* <a><button className = "projects-button">Live demo</button></a> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
