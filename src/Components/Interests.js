import React from 'react';
import '../Styles/Interests.css';

export default function Interests() {
    return (
        <div className = "interest-container">
            <p className = "interest-header">INTEREST</p>
            <div className = "interest-name-container">
                <p className = "interest-topic">GRAPHIC DESIGN🎨</p>
                <p className = "interest-content">Graphic design is the art of visually communicating ideas through images and typography, blending creativity with strategic communication.</p>
            </div>

            <div className = "interest-name-container">
                <p className = "interest-topic">MUSIC🎶</p>
                <p className = "interest-content">Music is a universal language that transcends boundaries, expressing emotions and narratives through melody, harmony, and rhythm.</p>
            </div>

            <div className = "interest-name-container">
                <p className = "interest-topic">COMPUTER GAMES🎮</p>
                <p className = "interest-content">Computer games are immersive digital experiences that blend technology, storytelling, and interactive gameplay, providing players a good entertainment.</p>
            </div>
        </div>
    )
}