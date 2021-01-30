import React, { useState } from 'react';
import { AddCategoria } from './AddCategoria';


export const GifExpertApp = () => {

    const [categorias, setCategorias] = useState([])

    return (
        <>
            <h2>GifExpertApp</h2>
            {
                categorias.map(cat => {
                    return <ul key={cat}>
                        {cat}
                    </ul>
                }
                )
            }
            <AddCategoria setCategorias={setCategorias} />
            <hr />
        </>
    )
}
