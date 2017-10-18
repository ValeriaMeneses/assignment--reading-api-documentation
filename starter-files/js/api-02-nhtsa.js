/*##### National Highway Transit Safety Administration
https://vpic.nhtsa.dot.gov/api/

*/
// 1. How many types of Chevrolet models are registered with the NHTSA?
const answerElement_nhtsa1 = document.getElementById('nhtsa-1')
  request
    .get('https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/chevrolet?format=json')
    .then(function (dates) {
      let models = dates.body.Count
      // console.log(models);
      answerElement_nhtsa1.innerHTML = models

    })

//========================================================================
// 2. What are the vehicle types that Nissan has?
const answerElement_nhtsa2 = document.getElementById('nhtsa-2')
  request
    .get('https://vpic.nhtsa.dot.gov/api/vehicles/GetVehicleTypesForMake/nissan?format=json')
    .then(function (dates){
      let types = dates.body.Results

      types.forEach(function (element) {
        // console.log(element.VehicleTypeName);
        answerElement_nhtsa2.innerHTML +=`
        <ul><li>${element.VehicleTypeName}</li></ul>`

      })
  })

//========================================================================
// 3. What are the types of models that exist for Toyota trucks in 2017?

const answerElement_nhtsa3 = document.getElementById('nhtsa-3')
  request
    .get('https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/toyota/modelyear/2017/vehicleType/truck?format=json')
    .then(function (dates) {
      let modelsToyota = dates.body.Results
      // console.log(modelsToyota);
      modelsToyota.forEach(function (element) {
        // console.log(element.Model_Name);
        answerElement_nhtsa3.innerHTML += `
        <ul><li>${element.Model_Name}</li></ul>
        `
      })

    })
