import React from "react";
import '../Styles/Projects.css';

export default function Project5() {
    return (
        <div className = "projects-container">
            <div className = "projects-box">
                <img src={require("../../src/Sources/project5.png")} alt="Project" className = "projects-image"></img>
                <div>
                    <p className = "projects-header"><b>HOSPITAL MANAGEMENT SYSTEM</b></p>
                    <p className = "projects-content">Hospital Management System Project is a Python application developed to manage hospital operations using the Tkinter for GUI and MySQL for database.</p>
                    <div className = "projects-button-container">
                        <a href = "https://github.com/gokulsundar-s/hospital-management-system-python" target = "_blank" rel="noreferrer"><button className = "projects-button">View code</button></a>
                        {/* <a><button className = "projects-button">Live demo</button></a> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
