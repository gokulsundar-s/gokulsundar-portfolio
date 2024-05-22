import React from "react";
import '../Styles/ProjectPage.css';

export default function ProjectPage() {
    return (
        <div className = "page-container">
            <h1 className = "page-header" id = "page-4">PROJECTS</h1>
            
            <div className = "projects-container-block">
                <div className = "projects-flex-container">
                    <div className = "projects-box">
                        <img src = {require("../../src/Sources/kecpresence-project.png")} alt = "project" className = "project-image"/>
                        <p className = "project-name">KEC Presence</p>
                        <p className = "project-content">KEC Presence is a cutting-edge project developed using the MERN stack, designed to redefine and enhance user engagement in the digital space.</p>
                        <div className = "project-buttons">
                            <div>
                                <a href = "https://github.com/gokulsundar-s/KEC-presence" target = "_blank" rel="noreferrer"><button>View code</button></a>
                            </div>
                            {/* <div>
                                <button>Live demo</button>
                            </div> */}
                        </div>
                    </div>
                        
                    <div className = "projects-box">
                        <img src = {require("../../src/Sources/restaurant-project.png")} alt = "project" className = "project-image"/>
                        <p className = "project-name">Turban Tudka - Restaurant website</p>
                        <p className = "project-content">Turban Tudka, a gastronomic website, was developed with the cutting-edge MERN stack to provide a good online experience for our patrons.</p>
                        <div className = "project-buttons">
                            <div>
                                <a href = "https://github.com/gokulsundar-s/Turban-Tudka-Restaurant-website" target = "_blank" rel="noreferrer"><button>View code</button></a>
                            </div>
                            {/* <div>
                                <button>Live demo</button>
                            </div> */}
                        </div>
                    </div>
                </div>

                <div className = "projects-flex-container">
                    <div className = "projects-box">
                        <img src = {require("../../src/Sources/events-project.png")} alt = "project" className = "project-image"/>
                        <p className = "project-name">CodeUp - Registration website</p>
                        <p className = "project-content">CodeUp is an event registration website using HTML, CSS, and NodeJS is a dynamic platform designed to process participant registration.</p>
                        <div className = "project-buttons">
                            <div>
                                <a href = "https://github.com/gokulsundar-s/CodeUp-event-registration-website" target = "_blank" rel="noreferrer"><button>View code</button></a>
                            </div>
                            {/* <div>
                                <button>Live demo</button>
                            </div> */}
                        </div>
                    </div>
                        
                    <div className = "projects-box">
                        <img src = {require("../../src/Sources/attendance-project.png")} alt = "project" className = "project-image"/>
                        <p className = "project-name">Student attendance system</p>
                        <p className = "project-content">Student Attendance Management System is a Java application designed to track and manage student attendance efficiently.</p>
                        <div className = "project-buttons">
                            <div>
                                <a href = "https://github.com/gokulsundar-s/student-attendanve-management-system-Java" target = "_blank" rel="noreferrer"><button>View code</button></a>
                            </div>
                            {/* <div>
                                <button>Live demo</button>
                            </div> */}
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}