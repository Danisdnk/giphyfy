import React from 'react'
//rafc
export const GifGridItem = ({ id, title, url }) => {
    return (
        <div key={id} className="card">
            <img src={url} alt={title}></img>
            <p>{title}</p>
        </div>
    )
}
