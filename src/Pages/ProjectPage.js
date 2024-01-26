import { Component } from 'react';
import '../Styles/ProjectPage.css';

class ProjectPage extends Component {
    render() {
        return (
            <div className = "project-container" id = "page-4">
                <h1>PROJECTS</h1>
                <div className = "projects-block">
                    <div className = "projects-div">
                        <div className = "projects-box">
                            <img src = {require("../../src/Sources/kecpresence-project.png")} alt = "project" className = "project-image"/>
                            <p className = "project-name">KEC Presence</p>
                            <p className = "project-content">KEC Presence is a cutting-edge project developed using the MERN stack, designed to redefine and enhance user engagement in the digital space.</p>
                            <div className = "project-buttons">
                                <div>
                                    <button>View code</button>
                                </div>
                                <div>
                                    <button>Live demo</button>
                                </div>
                            </div>
                        </div>
                        
                        <div className = "projects-box">
                            <img src = {require("../../src/Sources/restaurant-project.png")} alt = "project" className = "project-image"/>
                            <p className = "project-name">Turban Tudka - Restaurant website</p>
                            <p className = "project-content">Turban Tudka, a gastronomic website, was developed with the cutting-edge MERN stack to provide a good online experience for our patrons.</p>
                            <div className = "project-buttons">
                                <div>
                                    <button>View code</button>
                                </div>
                                <div>
                                    <button>Live demo</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = "projects-div">
                        <div className = "projects-box">
                            <img src = {require("../../src/Sources/events-project.png")} alt = "project" className = "project-image"/>
                            <p className = "project-name">CodeUp - Registration website</p>
                            <p className = "project-content">CodeUp is an event registration website using HTML, CSS, and Node. JS is a dynamic platform designed to process participant registration.</p>
                            <div className = "project-buttons">
                                <div>
                                    <button>View code</button>
                                </div>
                                <div>
                                    <button>Live demo</button>
                                </div>
                            </div>
                        </div>
                        
                        <div className = "projects-box">
                            <img src = {require("../../src/Sources/attendance-project.png")} alt = "project" className = "project-image"/>
                            <p className = "project-name">Student attendance system</p>
                            <p className = "project-content">CodeUp is an event registration website using HTML, CSS, and Node. JS is a dynamic platform designed to process participant registration.</p>
                            <div className = "project-buttons">
                                <div>
                                    <button>View code</button>
                                </div>
                                <div>
                                    <button>Live demo</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectPage;