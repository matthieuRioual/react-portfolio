import React from 'react'
import "./styles/Left.css";
import avatar from "../minion.png";
import github from "../github-brands.svg";
import linkdin from "../linkedin-brands.svg";
import discord from "../discord-brands.svg";
import { StaticRoundBar } from './StaticRoundBar';
import { Divider } from './Divider';
import { PartialLine } from './PartialLine';


const Left = () => {
    return (
        <div className="l-s-b">
            <div className="l-s-b-header">
                <img src={avatar} />
                <p>Matthieu RIOUAL</p>
                <p>Computering engineer</p>
            </div>
            <div className="l-s-b-info">
                <div className="l-s-b-personal">
                    <h2>Information</h2>
                    <ul>
                        <li>
                            <h5>Residence:</h5>
                            <span>France</span>
                        </li>
                        <li>
                            <h5>City:</h5>
                            <span>Villeurbanne</span>
                        </li>
                        <li>
                            <h5>Age:</h5>
                            <span>24</span>
                        </li>
                        <li>
                            <h5>Email:</h5>
                            <span>m.rioual83@gmail.com</span>
                        </li>
                    </ul>
                </div>
                <Divider />
                <div className="l-s-b-language">
                    <h2>Language</h2>
                    <div className="bar-charts">
                        <div>
                            <StaticRoundBar percentage="100" title="French" label="native" />
                        </div>
                        <div>
                            <StaticRoundBar percentage="80" title="English" label="C1" />
                        </div>
                        <div>
                            <StaticRoundBar percentage="30" title="Chinese" label="A2" />
                        </div>

                    </div>

                </div>
                <Divider />
                <div className="l-s-b-coding">
                    <h2>Coding</h2>


                </div>
                <div className="l-s-b-coding">
                    <p>PYTHON</p>
                    <PartialLine percentage="85%" />
                    <p>HTML/CSS/JS</p>
                    <PartialLine percentage="80%" />
                    <p>JAVA</p>
                    <PartialLine percentage="70%" />
                    <p>C</p>
                    <PartialLine percentage="60%" />



                </div>

            </div>
            <div className="l-s-b-socials">
                <div className="socials-wrapper">
                    <a href="https://github.com/matthieulapatate?tab=overview">
                        <img src={github} />
                    </a>
                    <a href="https://www.linkedin.com/in/matthieu-rioual-1689b4133/">
                        <img src={linkdin} />
                    </a>
                    <a href="https://www.linkedin.com/in/matthieu-rioual-1689b4133/">
                        <img src={discord} />
                    </a>
                </div>

            </div>
        </div>
    )
}

export default Left
