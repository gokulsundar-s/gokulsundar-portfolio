import React from "react";
import '../Styles/Projects.css';

export default function Project2() {
    return (
        <div className = "projects-container">
            <div className = "projects-box">
                <img src={require("../../src/Sources/project2.png")} alt="Project" className = "projects-image"></img>
                <div>
                    <p className = "projects-header"><b>TURBAN TUDKA - RESTAURANT WEBSITE</b></p>
                    <p className = "projects-content">Turban Tudka, a gastronomic website, was developed with the cutting-edge MERN stack to provide a good online experience for our patrons.</p>
                    <div className = "projects-button-container">
                        <a href = "https://github.com/gokulsundar-s/Turban-Tudka-Restaurant-website" target = "_blank" rel="noreferrer"><button className = "projects-button">View code</button></a>
                        {/* <a><button className = "projects-button">Live demo</button></a> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
