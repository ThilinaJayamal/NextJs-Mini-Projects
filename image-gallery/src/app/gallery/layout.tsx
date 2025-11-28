import React from 'react'

function GalleryLayout(
    { children, display }:
        {
            children: React.ReactNode,
            display: React.ReactNode
        }
) {
    return (
        <div>
            {children}
            {display}
        </div>
    )
}

export default GalleryLayout