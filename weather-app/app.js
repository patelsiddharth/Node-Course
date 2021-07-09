const geoCode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js');

const inputLocation = process.argv[2];

if(!inputLocation)
{
    console.log('Please provide a location');
}
else
{
    geoCode(inputLocation, (error, response) => {
        if(error)
        {
            console.log(error);
        }
        else
        {
            forecast(response, (error, data) => {
                if(error)
                {
                    console.log(error);
                }
                else
                {
                    console.log('Current Weather Forecast : ')
                    console.log('Location : ' + response.location);
                    console.log('Weather : ' + data)
                }
            })
        }
    });
}

