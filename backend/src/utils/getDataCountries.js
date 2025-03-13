const fs = require('fs');
const path = require('path');

function getDataCountries() {
    const paises = JSON.parse(fs.readFileSync(path.join(__dirname, "../../data/dados.json"), 'utf8'));
    return paises;
}

module.exports = getDataCountries;