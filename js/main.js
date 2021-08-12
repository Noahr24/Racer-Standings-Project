const getData = async () => {
    let season = document.querySelector('.season')
    let round = document.querySelector('.round')
    let response = await axios.get('http://ergast.com/api/f1/<season>/<round>/driverStandings.json')
    return response.data
};

