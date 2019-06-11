const lugar = require('./lugar/lugar.js');
const clima = require('./clima/clima.js');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad',
        demand: true
    }
}).argv;

console.log(argv.direccion);

const getInfo = async(direccion) => {
    const _lugar = await lugar.getLugarLatLong(direccion);
    if (_lugar.lat === undefined) {
        throw new Error(`Error al obtener el lugar ${direccion}`)
    }
    const _clima = await clima.getClimaLatLong(_lugar.lat, _lugar.lng);
    if (_clima.temp !== undefined) {
        console.log(`El clima de ${direccion} es ${_clima.temp}`);
    } else {
        console.log(`Error al obtener La temperatura de ${direccion}`)
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)