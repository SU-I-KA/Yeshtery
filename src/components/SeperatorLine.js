import React from 'react'

export default function SeperatorLine({width}) {
    
    const bold = {
        width: `${width}`,
    }
    return (
        <div className="seperator">
            <div style={bold} className="bold-line"></div>
        </div>
    )
}
