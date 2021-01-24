import React, { useState } from 'react';
import { AddCategoria } from './AddCategoria';


export const GifExpertApp = () => {
    const [categorias, setCategorias] = useState(['enfadado', 'iconico', 'wow'])

    const actualizarState = () => {
        setCategorias([...categorias, "nuevo valor"]);
    }

    return (
        <>
            <button onClick={actualizarState}>
                texto
            </button>

            <h2>GifExpertApp</h2>
            {

                categorias.map(cat => {
                    return <ul key={cat}>
                        {cat}
                    </ul>
                }
                )
            }
            <AddCategoria />
            <hr />
        </>
    )
}
