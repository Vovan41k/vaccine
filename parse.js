const fs = require('fs')
const path = require('path');
const Papa = require('papaparse')
const csvFilePath = path.join(__dirname, './list.csv');
const csvFile = fs.readFileSync(csvFilePath, 'utf-8');
const jsonFilePath = path.join(__dirname, './d-vaccine.json')
const jsonFilePathCountry = path.join(__dirname, './countries.json')
Papa.parse(csvFile, {
  header: true,
  // delimiter:',',
  // newline:"\n",
  complete: function (results) {
    // console.log(results.data);
    // пройти циклом по results.data и обновить dVaccine
    const dVaccine = {}
    const countries = []
    let currentCountry = ''
    let currentVaccines = []
    for (const item of results.data) {
      const vaccine = item['Неспецифическая вакцина для региона'] //Гепатит А
      const value = item['Назначение вакцины_1']//Наличие данной прививки рекомендовано всем путешественникам.
      if (vaccine) {
        dVaccine[vaccine] = value
      }
      const country = item['Страна ']

      if (country) {
        if (currentCountry) {
          countries.push({ name: currentCountry, vaccines: currentVaccines })
          currentVaccines = []
        }
        currentCountry = country
      }
      if (vaccine) {
        currentVaccines.push(vaccine)
      }

    }

    fs.writeFileSync(jsonFilePath, JSON.stringify(dVaccine, null, 2))
    fs.writeFileSync(jsonFilePathCountry, JSON.stringify(countries, null, 2))
    // console.log(countries)
    // console.log(dVaccine)
  }
});
