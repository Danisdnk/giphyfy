import React, { useState, useEffect } from 'react';
import { GifGridItem } from './GifGridItem';
import { getGifs } from '../services/getGifs';

export const GifGrid = ({ categoria }) => {
// aca podria usar un custom hook para no dejarlo en el componente 
    const [images, setimages] = useState([]);
    useEffect(() => {
        getGifs(categoria)
            .then(setimages);

    }, [categoria])

    return (
        <>
            <div className="card-grid">
                <h3>{categoria}</h3>
                {
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }

            </div>
        </>
    )
}
