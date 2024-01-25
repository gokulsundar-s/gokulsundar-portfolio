import { Component } from 'react';
import '../Styles/Activities.css';

class Activities extends Component {
    render() {
        return (
            <div className = "activity-container">
                <h1 className = "activity-header">ACTIVITIES</h1>

                <div className = "activity-block">
                    <div className = "activity-name">
                        <div className = "activity-logo">
                            <img src={require("../../src/Sources/CCC-Logo.png")} alt="logo"></img>
                        </div>
                        <div className = "club-header">
                            <p className = "club-name">CSE Coding Club</p>
                            <p className = "activity-name">Joint Secretary</p>
                        </div>
                    </div>
                    <div className = "education-year">
                        <p>2021 - 2025</p>
                    </div>
                </div>

                <hr className = "education-line"/>

                <div className = "activity-block">
                    <div className = "activity-name">
                        <div className = "activity-logo">
                            <img src={require("../../src/Sources/CCC-Logo.png")} alt="logo"></img>
                        </div>
                        <div className = "club-header">
                            <p className = "club-name">CSE Coding Club</p>
                            <p className = "activity-name">Executive Member</p>
                        </div>
                    </div>
                    <div className = "education-year">
                        <p>2021 - 2025</p>
                    </div>
                </div>

            </div>
        )
    }
}

export default Activities;