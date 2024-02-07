import React, {useState} from 'react';
import Education from "../Components/Education";
import Programming from "../Components/Programming";
import Activities from "../Components/Activities";
import '../Styles/ResumePage.css';

export default function ResumePage() {
    const [activeTab, setActiveTab] = useState(1);

     const handleTabClick = (id) => {
        setActiveTab(id);
    };


        return (
            <div className = "resume-container">
                <h1 className = "resume-header" id = "page-3">RESUME</h1>
                <div className = "resume-container-box">
                    <div className = "resume-box-buttons">
                        <button className={activeTab === 1 ? 'active' : ''} id = "left" onClick={() => handleTabClick(1)}><div><img src={require("../../src/Sources/education.png")} alt = "icon"></img></div><span>Education</span></button>
                        <button className={activeTab === 2 ? 'active' : ''} onClick={() => handleTabClick(2)}><div><img src={require("../../src/Sources/programming.png")} alt = "icon"></img></div><span>Programming</span></button>
                        <button className={activeTab === 3 ? 'active' : ''} id = "right" onClick={() => handleTabClick(3)}><div><img src={require("../../src/Sources/activity.png")} alt = "icon"></img></div><span>Activities</span></button>
                    </div>

                    <div className = "resume-content">
                        {activeTab === 1 && <Education/>}
                        {activeTab === 2  && <Programming/>}
                        {activeTab === 3 && <Activities/>}
                    </div>
                </div>
            </div>
        )
    }
