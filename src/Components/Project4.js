import React from "react";
import '../Styles/Projects.css';

export default function Project4() {
    return (
        <div className = "projects-container">
            <div className = "projects-box">
                <img src={require("../../src/Sources/project4.png")} alt="Project" className = "projects-image"></img>
                <div>
                    <p className = "projects-header"><b>STUDENT ATTENDANCE MANAGEMENT SYSTEM</b></p>
                    <p className = "projects-content">Student Attendance Management System is a Java application designed to track and manage student attendance efficiently and accurately.</p>
                    <div className = "projects-button-container">
                        <a href = "https://github.com/gokulsundar-s/student-attendanve-management-system-Java" target = "_blank" rel="noreferrer"><button className = "projects-button">View code</button></a>
                        {/* <a><button className = "projects-button">Live demo</button></a> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
