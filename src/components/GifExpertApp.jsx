import React, { useState } from 'react';
import { AddCategoria } from './AddCategoria';
import { GifGrid } from './GifGrid';


export const GifExpertApp = () => {

    const [categorias, setCategorias] = useState([])
    return (
        <>
            <h1 className="color-wave">Giphyfy ♪ </h1>
            <AddCategoria setCategorias={setCategorias} />
            <hr />
            <ol>
                {
                    categorias.map(categoria => (
                        <GifGrid
                            key={categoria}
                            categoria={categoria} />
                    ))
                }
            </ol>
        </>
    )
}
