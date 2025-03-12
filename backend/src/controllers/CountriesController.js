const getDataCountries = require('../utils/getDataCountries');

class CountriesController {

    async index(request, response) {
        const countries = getDataCountries();
        return response.json(countries);
    }
}

module.exports = CountriesController;