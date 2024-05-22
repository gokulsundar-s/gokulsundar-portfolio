import React from 'react';
import '../Styles/SkillsPage.css';

export default function SkillsPage() {
    return (
        <div className = "page-container">
            <h1 className = "page-header" id = "page-4">SKILLS</h1>
            
            <div className = "skills-box-container">
                <div className = "programming-progress-container">
                    <div className = "programming-progress-header">
                        <p className = "programming-name">C PROGRAMMING</p>
                        <p className = "programming-percentage"><b>70%</b></p>
                    </div>
                    <div className = "programming-progress-outer">
                        <div style={{backgroundColor: "#1B9FFE", width: "70%", borderRadius : "30px"}}></div>
                    </div>
                </div>
                
                <div className = "programming-progress-container">
                    <div className = "programming-progress-header">
                        <p className = "programming-name">JAVA PROGRAMMING</p>
                        <p className = "programming-percentage"><b>80%</b></p>
                    </div>
                    <div className = "programming-progress-outer">
                        <div style={{backgroundColor: "#1B9FFE", width: "80%", borderRadius : "30px"}}></div>
                    </div>
                </div>

                <div className = "programming-progress-container">
                    <div className = "programming-progress-header">
                        <p className = "programming-name">PYTHON PROGRAMMING</p>
                        <p className = "programming-percentage"><b>85%</b></p>
                    </div>
                    <div className = "programming-progress-outer">
                        <div style={{backgroundColor: "#1B9FFE", width: "85%", borderRadius : "30px"}}></div>
                    </div>
                </div>

                <div className = "programming-progress-container">
                    <div className = "programming-progress-header">
                        <p className = "programming-name">HTML, CSS AND JAVASCRIPT</p>
                        <p className = "programming-percentage">75%</p>
                    </div>
                    <div className = "programming-progress-outer">
                        <div style={{backgroundColor: "#1B9FFE", width: "75%", borderRadius : "30px"}}></div>
                    </div>
                </div>

                <div className = "programming-progress-container">
                    <div className = "programming-progress-header">
                        <p className = "programming-name">MYSQL DATABASE</p>
                        <p className = "programming-percentage">80%</p>
                    </div>
                    <div className = "programming-progress-outer">
                        <div style={{backgroundColor: "#1B9FFE", width: "80%", borderRadius : "30px"}}></div>
                    </div>
                </div>

                <div className = "programming-progress-container">
                    <div className = "programming-progress-header">
                        <p className = "programming-name">REACTJS</p>
                        <p className = "programming-percentage">75%</p>
                    </div>
                    <div className = "programming-progress-outer">
                        <div style={{backgroundColor: "#1B9FFE", width: "75%", borderRadius : "30px"}}></div>
                    </div>
                </div>

                <div className = "programming-progress-container">
                    <div className = "programming-progress-header">
                        <p className = "programming-name">NODEJS AND MONGODB</p>
                        <p className = "programming-percentage">65%</p>
                    </div>
                    <div className = "programming-progress-outer">
                        <div style={{backgroundColor: "#1B9FFE", width: "65%", borderRadius : "30px"}}></div>
                    </div>
                </div>

                <div className = "programming-progress-container">
                    <div className = "programming-progress-header">
                        <p className = "programming-name"> GIT AND GITHUB</p>
                        <p className = "programming-percentage">50%</p>
                    </div>
                    <div className = "programming-progress-outer">
                        <div style={{backgroundColor: "#1B9FFE", width: "50%", borderRadius : "30px"}}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
