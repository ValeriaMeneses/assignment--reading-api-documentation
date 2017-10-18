/*
##### Geocoding
1. What are latitude longitude coordinates of Montreal?
  - https://maps.googleapis.com/maps/api/geocode/json?address=Montreal

2. What time does the sun set in Montreal (based on the Google geocode coordinates)?
  - https://sunrise-sunset.org/api

3. What is the weekly weather forecast in Montreal?
  - https://darksky.net/dev
  - Note: You will have to create an account.

*/


//========================================================================
//  (1) What are latitude longitude coordinates of Montreal?
//
//     - https://developers.google.com/maps/documentation/geocoding/start
//     = NOtE: You don't need an API key for this api
//

const answerElement_apimashup_1 = document.getElementById('apimashup-1')
  request
    .get('https://maps.googleapis.com/maps/api/geocode/json?address=Montreal')
    .then(function (dates) {
      let coordinates = dates.body.results[0].geometry.location
      let latitud = coordinates.lat
      let longitude = coordinates.lng
      answerElement_apimashup_1.innerHTML = `
        <ul>
          <li>Latitud: ${latitud}</li>
          <li>Longitude: ${longitude}</li>
        <ul>
        `
    })





//========================================================================
//  (2) What time does the sun set in Montreal (based on the Google geocode coordinates)?

const answerElement_apimashup_2 = document.getElementById('apimashup-2')

  request
    .get('https://api.sunrise-sunset.org/json?lat=45.5016889&lng=-73.567256')
    .then(function (dates) {
      let sunSet = dates.body.results.sunset
      // console.log(sunSet);
      answerElement_apimashup_2.innerHTML = sunSet

    })






//========================================================================
//  (3) What is the weekly weather forecast in Montreal? (look for summary property in 'daily')

const answerElement_apimashup_3 = document.getElementById('apimashup-3')
  request
    .get('https://api.darksky.net/forecast/ad11882bb123d3f2048e37b390554679/45.5016889,-73.567256')
    .then(function (dates) {
      let weather = dates.body.daily.summary
      // console.log(weather);
      answerElement_apimashup_3.innerHTML = weather

    })




//
