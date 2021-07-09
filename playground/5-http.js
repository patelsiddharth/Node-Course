const http = require('http');

const url = `http://api.weatherstack.com/current?access_key=7ae9bbff0c627beec46ff31170005193&query=40,-75`;

const request = http.request(url, (response) =>
{
    let data = '';

    response.on('data', (chunk) => {
        data += chunk.toString();
    })

    response.on('end', () => {
        const body = JSON.parse(data);
        console.log(body);
    })
})

response.on('error', error => {
    console.log(error);
})

request.end()