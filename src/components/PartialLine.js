import React from 'react'

export const PartialLine = ({ percentage }) => {
    return (
        <div className="underline">
            <div className="upperline" style={{ width: percentage }}>

            </div>
        </div>
    )
}
