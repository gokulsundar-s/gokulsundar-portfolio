import React from "react";
import '../Styles/Projects.css';

export default function Project1() {
    return (
        <div className = "projects-container">
            <div className = "projects-box">
                <img src={require("../../src/Sources/project3.png")} alt="KEC Presence" className = "projects-image"></img>
                <div>
                    <p className = "projects-header"><b>CODEUP - EVENT WEBSITE</b></p>
                    <p className = "projects-content">CodeUp is an event registration website using HTML, CSS, and NodeJS is a dynamic platform designed to process participant registration.</p>
                    <div className = "projects-button-container">
                        <a href = "https://github.com/gokulsundar-s/CodeUp-event-registration-website" target = "_blank" rel="noreferrer"><button className = "projects-button">View code</button></a>
                        {/* <a><button className = "projects-button">Live demo</button></a> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
