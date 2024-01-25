import { Component } from 'react';
import Education from "../Components/Education";
import Programming from "../Components/Programming";
import Interest from "../Components/Interests";
import Activities from "../Components/Activities";
import '../Styles/ResumePage.css';

class ResumePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          activeTab: 1,
        };
      }
  
      handleTabClick = (id) => {
        this.setState({ activeTab: id });
      };

    render() {
        const { activeTab } = this.state;
        return (
            <div className = "resume-container" id = "page-3">
                <h1>RESUME</h1>
                <div className = "resume-block">
                    <div className = "resume-buttons">
                        <button className={activeTab === 1 ? 'active' : ''} id = "left" onClick={() => this.handleTabClick(1)}><div><img src={require("../../src/Sources/education.png")} alt = "icon"></img></div><span>Education</span></button>
                        <button className={activeTab === 2 ? 'active' : ''} onClick={() => this.handleTabClick(2)}><div><img src={require("../../src/Sources/programming.png")} alt = "icon"></img></div><span>Programming</span></button>
                        <button className={activeTab === 3 ? 'active' : ''} onClick={() => this.handleTabClick(3)}><div><img src={require("../../src/Sources/interest.png")} alt = "icon"></img></div><span>Interest</span></button>
                        <button className={activeTab === 4 ? 'active' : ''} id = "right" onClick={() => this.handleTabClick(4)}><div><img src={require("../../src/Sources/activity.png")} alt = "icon"></img></div><span>Activities</span></button>
                    </div>

                    <div className = "resume-content">
                        {activeTab === 1 && <Education/>}
                        {activeTab === 2  && <Programming/>}
                        {activeTab === 3 && <Interest/>}
                        {activeTab === 4 && <Activities/>}
                    </div>
                </div>
            </div>
        )
    }
}

export default ResumePage;