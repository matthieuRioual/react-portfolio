import React from 'react'
import Python from "../assets/img/languages/python.gif"
import Java from "../assets/img/languages/java.gif"
import C from "../assets/img/languages/c.gif"
import Javascript from "../assets/img/languages/javascript.gif"

export const FlippingCard = ({ language_name, color1, color2, projects }) => {
    console.log(color1, color2)
    let iconObj =
        { "python": Python, "java": Java, "c": C, "javascript": Javascript }
    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front" style={{ backgroundImage: `linear-gradient(135deg,${color1},${color2}) ` }}>
                    <img src={iconObj[language_name]} alt="" />
                </div>
                <div className="flip-card-back" style={{ backgroundImage: `linear-gradient(135deg,${color1},${color2}) ` }}>
                    <ul>
                        {projects && projects.map((name, index) =>
                            <li key={index}><a href="#">
                                {name}
                            </a></li>

                        )}
                    </ul>

                </div>
            </div>

        </div>
    )
}
