import { Component } from 'react';
import '../Styles/Programming.css';

class Programmming extends Component {
    render() {
        return (
            <div className = "programming-container">
                <p className = "programming-header">PROGRAMMING</p>
                
                <div className = "programming-progress-container">
                    <div className = "programming-progress-header">
                        <p className = "programming-name">C PROGRAMMING</p>
                        <p className = "programming-percentage">70%</p>
                    </div>
                    <div className = "programming-progress-outer">
                        <div style={{backgroundColor: "#1B9FFE", width: "70%", borderRadius : "30px"}}></div>
                    </div>
                </div>
                
                <div className = "programming-progress-container">
                    <div className = "programming-progress-header">
                        <p className = "programming-name">JAVA PROGRAMMING</p>
                        <p className = "programming-percentage">80%</p>
                    </div>
                    <div className = "programming-progress-outer">
                        <div style={{backgroundColor: "#1B9FFE", width: "80%", borderRadius : "30px"}}></div>
                    </div>
                </div>

                <div className = "programming-progress-container">
                    <div className = "programming-progress-header">
                        <p className = "programming-name">PYTHON PROGRAMMING</p>
                        <p className = "programming-percentage">85%</p>
                    </div>
                    <div className = "programming-progress-outer">
                        <div style={{backgroundColor: "#1B9FFE", width: "85%", borderRadius : "30px"}}></div>
                    </div>
                </div>

                <div className = "programming-progress-container">
                    <div className = "programming-progress-header">
                        <p className = "programming-name">HTML, CSS & JAVASCRIPT</p>
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
                        <p className = "programming-name">NODEJS & MONGODB</p>
                        <p className = "programming-percentage">65%</p>
                    </div>
                    <div className = "programming-progress-outer">
                        <div style={{backgroundColor: "#1B9FFE", width: "65%", borderRadius : "30px"}}></div>
                    </div>
                </div>

                <div className = "programming-progress-container">
                    <div className = "programming-progress-header">
                        <p className = "programming-name"> GIT & GITHUB</p>
                        <p className = "programming-percentage">45%</p>
                    </div>
                    <div className = "programming-progress-outer">
                        <div style={{backgroundColor: "#1B9FFE", width: "45%", borderRadius : "30px"}}></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Programmming;