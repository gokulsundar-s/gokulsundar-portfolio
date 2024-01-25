import { Component } from 'react';
import '../Styles/Programming.css';

class Programmming extends Component {
    render() {
        return (
            <div className = "programming-container">
                <h1 className = "programming-header">PROGRAMMING</h1>
                <div className = "programming-block">
                    <div className = "programming-box">
                        <div className = "programming-names">
                            <p>C Programming</p>
                            <p>70 %</p>
                        </div>
                        <div className = "programming-progress">
                            <progress id="file" value="70" max="100"/>
                        </div>

                        <div className = "programming-names">
                            <p>Java Programming</p>
                            <p>80 %</p>
                        </div>
                        <div className = "programming-progress">
                            <progress id="file" value="80" max="100"/>
                        </div>

                        <div className = "programming-names">
                            <p>Python Programming</p>
                            <p>85 %</p>
                        </div>
                        <div className = "programming-progress">
                            <progress id="file" value="85" max="100"/>
                        </div>

                        <div className = "programming-names">
                            <p>HTML, CSS, JavaScript</p>
                            <p>75 %</p>
                        </div>
                        <div className = "programming-progress">
                            <progress id="file" value="75" max="100"/>
                        </div>
                    </div>

                    <div className = "programming-box">
                        <div className = "programming-names">
                            <p>MySQL</p>
                            <p>80 %</p>
                        </div>
                        <div className = "programming-progress">
                            <progress id="file" value="80" max="100"/>
                        </div>

                        <div className = "programming-names">
                            <p>React</p>
                            <p>70 %</p>
                        </div>
                        <div className = "programming-progress">
                            <progress id="file" value="70" max="100"/>
                        </div>

                        <div className = "programming-names">
                            <p>NodeJS, MongoDB</p>
                            <p>65 %</p>
                        </div>
                        <div className = "programming-progress">
                            <progress id="file" value="65" max="100"/>
                        </div>

                        <div className = "programming-names">
                            <p>Git</p>
                            <p>45 %</p>
                        </div>
                        <div className = "programming-progress">
                            <progress id="file" value="45" max="100"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Programmming;