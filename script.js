const fetch = require('node-fetch');

const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=chennai';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '57a33d8002msh2d8478326d29ae0p10ff24jsnae40a15ff959',
        'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

fetch(url, options)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(result => {
        console.log(result);

        // Assuming you have elements with these IDs in your HTML
        document.getElementById('cloud_pct').innerHTML = result.cloud_pct;
        document.getElementById('feels_like').innerHTML = result.feels_like;
        document.getElementById('humidity').innerHTML = result.humidity;
        document.getElementById('max_temp').innerHTML = result.max_temp;
        document.getElementById('min_temp').innerHTML = result.min_temp;
        document.getElementById('sunrise').innerHTML = result.sunrise;
        document.getElementById('sunset').innerHTML = result.sunset;
        document.getElementById('temp').innerHTML = result.temp;
        document.getElementById('wind_degrees').innerHTML = result.wind_degrees;
        document.getElementById('wind_speed').innerHTML = result.wind_speed;
    })
    .catch(error => {
        console.error('Error:', error);
    });
