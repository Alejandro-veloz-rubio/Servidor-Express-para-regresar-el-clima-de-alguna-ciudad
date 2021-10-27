const express = require('express')
const app = express()

app.get('/cities/:city', function (req, res) {
    const request = require('postman-request');
  request(`http://api.weatherstack.com/current?access_key=f51f659fde487e91a24fe0803c4dc253&query=${req.params.city}`, function (error, response, body) {
    console.log('error:', error); 
    console.log('statusCode:', response && response.statusCode); 
    let city=JSON.parse(body);
    let cityweather=`
    <html>
    <body>
    <p>Temperatura de la ciudad de ${city.location.name} es : ${city.current.temperature} °C</p>
    </body>
    </html>`;
    res.send(cityweather)
  });
  })
  app.listen(3000)
  