export const getGifts = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=TxnNfs4IARGgsC4nJKspFuXTVAoW3O1r&q=${ category}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    console.log(data);

    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
      }
    })

    return gifs;
}