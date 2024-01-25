import { Component } from 'react';
import '../Styles/Education.css';

class Education extends Component {
    render() {
        return (
            <div className = "education-container">
                <p className = "education-header">EDUCATION</p>
                <div className = "education-block">
                    <div className = "education-name">
                        <div className = "education-logo">
                            <img src={require("../..//src/Sources/KEC 1.png")} alt="logo"></img>
                        </div>
                        <div className = "school-header">
                            <p className = "school-name">Kongu Engineering College</p>
                            <p className = "course-name">B.E. - Computer Science and Engineering - 7.71 CGPA</p>
                        </div>
                    </div>
                    <div className = "education-year">
                        <p>2021 - 2025</p>
                    </div>
                </div>
                
                <hr className = "education-line"/>
                
                <div className = "education-block">
                    <div className = "education-name">
                        <div className = "education-logo">
                            <img src={require("../../src/Sources/sagar.png")} alt="logo"></img>
                        </div>
                        <div className = "school-header">
                            <p className = "school-name">Sagar International Sr. Sec. School</p>
                            <p className = "course-name">Higher Secondary Certificate - 83.8 %</p>
                        </div>
                    </div>
                    <div className = "education-year">
                        <p>2020 - 2021</p>
                    </div>
                </div>
                
                <hr className = "education-line"/>

                <div className = "education-block">
                    <div className = "education-name">
                        <div className = "education-logo">
                            <img src={require("../../src/Sources/sagar.png")} alt="logo"></img>
                        </div>
                        <div className = "school-header">
                            <p className = "school-name">Sagar International Sr. Sec. School</p>
                            <p className = "course-name">Secondary School Leaving Certificate - 74.4 %</p>
                        </div>
                    </div>
                    <div className = "education-year">
                        <p>2018 - 2019</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Education;