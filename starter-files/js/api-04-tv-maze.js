// ##### TV Maze
// https://www.tvmaze.com/ap

// 1. What is the average rating for the show Better Call Saul?
const answerElement_tvmaze1 = document.getElementById('tvmaze-1')
  request
  .get('http://api.tvmaze.com/shows/618')
  .then(function (dates) {
    let average = dates.body.rating.average
    // console.log(average);
    answerElement_tvmaze1.innerHTML = average
  })


//========================================================================
// 2. When was the premiere date for the 9th season of Friends?
const answerElement_tvmaze2 = document.getElementById('tvmaze-2')
  request
    .get('http://api.tvmaze.com/shows/431/seasons')
    .then(function(datos){
      let seasons = datos.body[8].premiereDate
      let seasonReverse = seasons.split('-').reverse().join('-')
      // console.log(seasonReverse);
      answerElement_tvmaze2.innerHTML = seasonReverse

    })

//========================================================================
// 3. How many shows has actor Andrew Grimes (of the Walking Dead) appeared in?

const answerElement_tvmaze3 = document.getElementById('tvmaze-3')
  request
    .get('http://api.tvmaze.com/shows/73/cast')
    .then(function(datos){
      let shows = datos.body
      // console.log(shows);
      shows.forEach(function (element) {
        let nombre = element.person.name

        if (nombre === "Andrew Grimes") {
          answerElement_tvmaze3.innerHTML = "Que rayos"

        }else {
          answerElement_tvmaze3.innerHTML = "Este actor nunca aparecio en esta serie"
        }

      })
    })
