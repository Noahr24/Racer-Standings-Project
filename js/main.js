const getData = async () => {
    let season = document.querySelector('.season')
    let round = document.querySelector('.round')
    let response = await axios.get('https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js')
    return response.data
};
