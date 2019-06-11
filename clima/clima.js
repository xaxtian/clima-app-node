const axios = require('axios');

const getClimaLatLong = async(lat, long) => {

    const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=ea79485523ea70fdbf95ab5290062d26`

    })
    const resp = await instance.get();
    if (resp.status !== 200) {
        throw new Error(`Error en l apeticion ${resp.statusText}`)
    }
    const data = resp;
    return {
        temp: data.data.main.temp
    }
}

module.exports = {
    getClimaLatLong
}