const AppError = require('../utils/AppError');
const getDataCountries = require('../utils/getDataCountries');
const getSummaryCountry = require('../utils/getSummaryCountry');

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

        // Integração com API da Wikipedia
        let summary = "";
        try {
            summary = await getSummaryCountry(country.name);
        } catch {
            summary = "Informações não disponíveis";
        }

        return response.json({
            ...country,
            summary
        });
    }

    async findByCountryName(request, response) {
        const countries = getDataCountries();
        const arrayCountries = Object.values(countries);

        const { name } = request.params;

        if (!name) {
            throw new AppError("Informe o nome do país");
        }

        const country = arrayCountries.filter(country => country.name.toLowerCase().includes(name.toLowerCase()));

        return response.json(country);
    }


}

module.exports = CountriesController;