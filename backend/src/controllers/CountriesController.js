const getDataCountries = require('../utils/getDataCountries');
const AppError = require('../utils/AppError');

class CountriesController {

    async index(request, response) {
        const countries = getDataCountries();
        return response.json(countries);
    }

    async show(request, response) {
        const countries = getDataCountries();
        const { ccn3 } = request.params;

        if (!ccn3) {
            throw new AppError("Informe o ID do país");
        }
        
        const country = countries.find(country => country.ccn3 == ccn3);

        if (!country) {
            throw new AppError("País não encontrado");
        }

        return response.json(country);
    }
}

module.exports = CountriesController;