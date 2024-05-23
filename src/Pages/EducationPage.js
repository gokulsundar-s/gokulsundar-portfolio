import React from 'react';
import '../Styles/EducationPage.css';

export default function EducationPage() {
    return (
        <div className = "page-container">
            <h1 className = "page-header" id = "page-3">EDUCATION</h1>
            
            <div className = "education-box-container">
                <div className = "education-box">
                    <img src={require("../../src/Sources/kec.png")} alt="Education Logo" className = "education-logo"></img>
                    <div>

                    <p className = "education-content-header">KONGU ENGINEERING COLLEGE</p>
                    <p className = "education-content">B.E. (Computer Science and Engineering)</p>
                    <p className = "education-content-year"><b>2021 - 2025</b></p>
                    </div>
                </div>
                
                <div className = "education-box">
                    <img src={require("../../src/Sources/sagar.png")} alt="Education Logo" className = "education-logo"></img>
                    <p className = "education-content-header">SAGAR INTERNATIONAL SCHOOL</p>
                    <p className = "education-content">Higher Secondary Certificate</p>
                    <p className = "education-content-year"><b>2020 - 2021</b></p>
                </div>
                    
                <div className = "education-box">
                    <img src={require("../../src/Sources/sagar.png")} alt="Education Logo" className = "education-logo"></img>
                    <p className = "education-content-header">SAGAR INTERNATIONAL SCHOOL</p>
                    <p className = "education-content">Secondary School Leaving Certificate</p>
                    <p className = "education-content-year"><b>2018 - 2019</b></p>
                </div>
            </div>
        </div>
    )
}
