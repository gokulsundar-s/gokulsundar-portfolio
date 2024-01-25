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
                            <p className = "project-content">Collaboration is the driving force behind achieving shared objectives. Let's turn collective efforts into achievements.</p>
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
                            <p className = "project-content">Collaboration is the driving force behind achieving shared objectives. Let's turn collective efforts into achievements.</p>
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
                            <p className = "project-content">Collaboration is the driving force behind achieving shared objectives. Let's turn collective efforts into achievements.</p>
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
                            <p className = "project-content">Collaboration is the driving force behind achieving shared objectives. Let's turn collective efforts into achievements.</p>
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