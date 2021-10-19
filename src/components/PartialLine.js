import React from 'react'
import "./styles/progressbar.css"

export const PartialLine = ({ percentage }) => {
    return (
        <div className="underline">
            <div className="upperline" style={{ width: percentage }}>

            </div>
        </div>
    )
}
