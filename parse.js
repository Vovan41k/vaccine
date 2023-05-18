const fs = require('fs')
const path = require('path');
const Papa = require('papaparse')
const csvFilePath = path.join(__dirname, './list.csv');
const csvFile = fs.readFileSync(csvFilePath, 'utf-8');
const dVaccine = {}
Papa.parse(csvFile, {
  header: true,
  // delimiter:',',
  // newline:"\n",
  complete: function(results) {
    console.log(results.data);
    // пройти циклом по results.data и обновить dVaccine
    console.log(dVaccine)
  }
});