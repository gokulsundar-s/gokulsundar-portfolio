import { Component } from 'react';
import '../Styles/Interests.css';

class Interests extends Component {
    render() {
        return (
            <div className = "interest-container">
                <h1 className = "interest-header">INTEREST</h1>
                <div className = "interest-block">
                    <p className = "sub-heading">Graphic Designing🎨</p>
                    <p className = "sub-content">Graphic design is the art of visually communicating ideas through images and typography, blending creativity with strategic communication.</p>
                </div>

                <hr className = "activity-line"/>

                <div className = "interest-block">
                    <p className = "sub-heading">Music🎶</p>
                    <p className = "sub-content">Music is a universal language that transcends boundaries, expressing emotions and narratives through melody, harmony, and rhythm.</p>
                </div>

                <hr className = "activity-line"/>

                <div className = "interest-block">
                    <p className = "sub-heading">Computer games🎮</p>
                    <p className = "sub-content">Computer games are immersive digital experiences that blend technology, storytelling, and interactive gameplay, providing players a good entertainment.</p>
                </div>
            </div>
        )
    }
}

export default Interests;