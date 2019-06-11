const axios = require('axios');

const getLugarLatLong = async(direccion) => {

    const encodedURL = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURL}`,
        headers: { 'X-RapidApi-Key': 'e4cfbd028dmshed8706d5c322a41p1dc200jsn335eb06982f5' }

    })
    const resp = await instance.get();
    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${direccion}`)
    }
    const data = resp.data.Results[0];
    const dir = data.name;
    const lat = data.lat;
    const lng = data.lon;
    return {
        dir,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLong
}