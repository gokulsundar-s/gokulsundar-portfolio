import React from 'react';
import '../Styles/Activities.css';

export default function Activities() {
    return (
        <div className = "activity-container">
            <p className = "activity-header">ACTIVITIES</p>
                    
            <div className = "activity-name-container">
                <p className = "activity-institution">KONGU ENGINEERING COLLEGE</p>
                <p className = "activity-roll">CSE Coding Club - Joint Secretary</p>
            </div>
            <div className = "activity-year-container">
                <p>2023 - 2024</p>
            </div>
                    
            <div className = "activity-name-container">
                <p className = "activity-institution">KONGU ENGINEERING COLLEGE</p>
                <p className = "activity-roll">CSE Coding Club - Executive Member</p>
            </div>
            <div className = "activity-year-container">
                <p>2022 - 2023</p>
            </div>
                
            <div className = "activity-name-container">
                <p className = "activity-institution">SAGAR INTERNATIONAL SCHOOL</p>
                <p className = "activity-roll">Class Representative</p>
            </div>
            <div className = "activity-year-container">
                <p>2017 - 2018</p>
            </div>
        </div>
    )
}