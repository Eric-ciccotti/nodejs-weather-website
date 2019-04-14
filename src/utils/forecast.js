const request = require('request')

const forecast = (latitude, longitutde, callback) => {
    const url = 'https://api.darksky.net/forecast/a82370ae20e36dd04f11386647e9f9a9/' + latitude + ',' + longitutde + '?units=auto&lang=fr'
    request({ url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service', undefined);
        } else if (body.error) {
            callback('Unable to find location', undefined);
        } else {
            callback(undefined, `${body.daily.data[0].summary} la température est de ${body.currently.temperature} °. 
            Il y a ${body.currently.precipProbability} % de chance d'avoir de la pluie. 
            La vitesse du vent est de ${body.currently.windSpeed} Km/h`)
        }
    })
}

module.exports = forecast