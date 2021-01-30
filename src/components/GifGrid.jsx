import React, { useState } from 'react';

export const GifGrid = ({ categoria }) => {

    const getGifs = async () => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=waifu&limit=10&api_key=hU1xrTiv6XASMzdTHjyQxMjdj0C22hMI'
        const resp = await fetch(url);
        const { data } = await resp.json();//aplico desescturcturacion 
        console.log(data);

        //devuelvo las imgs en un nuevo objeto
        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        });
    }
        getGifs();

        return (
            <div>
                <h3>{categoria}</h3>
            </div>
        )
    }
