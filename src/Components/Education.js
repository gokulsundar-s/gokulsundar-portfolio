import { Component } from 'react';
import '../Styles/Education.css';

class Education extends Component {
    render() {
        return (
            <div className = "education-container">
                <p className = "education-header">EDUCATION</p>
                
                <div className = "education-name-container">
                    <p className = "education-institution">KONGU ENGINEERING COLLEGE</p>
                    <p className = "education-course">B.E. - Computer Science and Engineering - 7.71 CGPA</p>
                </div>
                <div className = "education-year-container">
                    <p>2021 - 2025</p>
                </div>
                
                <div className = "education-name-container">
                    <p className = "education-institution">SAGAR INTERNATIONAL SR. SEC. SCHOOL</p>
                    <p className = "education-course">Higher Secondary Certificate - 83.8%</p>
                </div>
                <div className = "education-year-container">
                    <p>2020 - 2021</p>
                </div>
                
                <div className = "education-name-container">
                    <p className = "education-institution">SAGAR INTERNATIONAL SR. SEC. SCHOOL</p>
                    <p className = "education-course">Secondary School Leaving Certificate - 74.4%</p>
                </div>
                <div className = "education-year-container">
                    <p>2018 - 2019</p>
                </div>
            </div>
        )
    }
}

export default Education;