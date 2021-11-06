import React from 'react'
import './styles/circle.css'
import styled from 'styled-components';

const CSSVariables = styled.div`
  --p: ${props => props.percentage};
  --v: calc( ((18/5) * ${(props) => props.percentage} - 90)*1deg);
`;

export const StaticRoundBar = ({ percentage, title, label }) => {
    return (
        <div>
            <CSSVariables className="box" percentage={percentage} >
                {label}
            </CSSVariables>
            <p>
                {title}
            </p>
        </div>

    )
}
