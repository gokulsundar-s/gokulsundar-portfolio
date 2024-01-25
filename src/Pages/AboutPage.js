import { Component } from 'react';
import '../Styles/AboutPage.css';

class AboutPage extends Component {
    render() {
        return (
            <div className = "content">
                <h1 id = "page-2">ABOUT ME</h1>
                <div className = "container1">
                    <p className = "subname"><b>Why to choose me?🎯</b></p>
                    <p className = "about">I am passionate full-stack developer with a keen eye for creative design. My journey in the world of technology began with a strong fascination for turning ideas into interactive and visually stunning experiences. Armed with a love for frontend development and craft engaging user interfaces that not only look great but also deliver enjoyable user experiences.</p>
                </div>
                <div className = "container2">
                    <div className = "box">
                        <img src={require("../../src/Sources/teamwork.png")} alt="frontend developer" className = "boxicon"></img>
                        <h3>Teamwork</h3>
                        <p>Collaboration is the driving force behind achieving shared objectives. Let's turn collective efforts into achievements.</p>
                    </div>
                    <div className = "box">
                        <img src={require("../../src/Sources/creative.png")} alt="designer" className = "boxicon"></img>
                        <h3>Creativity</h3>
                        <p>Let's embark on a journey where imagination knows no limits, and together, we'll craft exceptional and imaginative solutions.</p>
                    </div>
                    <div className = "box">
                        <img src={require("../../src/Sources/leadership.png")} alt="designer" className = "boxicon"></img>
                        <h3>Leadership</h3>
                        <p>Driven by a vision for success and a commitment to empowering individuals in the team toward achieving high.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutPage;   
