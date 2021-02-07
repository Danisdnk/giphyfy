export const getGifs = async (categoria) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria)}&limit=10&api_key=hU1xrTiv6XASMzdTHjyQxMjdj0C22hMI`
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
    return gifs;
}

