const knex = require("../database/knex");
const AppError = require("../utils/AppError");
const getDataCountries = require("../utils/getDataCountries");

class FavoritesController {
    async create(request, response) {
        const {id: user_id} = request.user;
        const {ccn3} = request.body;

        if(!ccn3) {
            throw new AppError("Informe o CCN3 do país");
        }

        if(ccn3.length !== 3) {
            throw new AppError("O CCN3 deve ter 3 dígitos");
        }

        const checkInFavorites = await knex("favorites").where({user_id, ccn3}).first();
        
        if(checkInFavorites) {
            throw new AppError("País já favoritado");
        }

        const countries = getDataCountries();
        const country = countries.find(country => country.ccn3 == ccn3);

        if(!country) {
            throw new AppError("País não encontrado");
        }

        await knex("favorites").insert({
            user_id,
            country_name: country.name,
            area: country.area,
            population: country.population,
            ccn3,
            capital: country.capital,
            flag: country.flag,
        });

        return response.status(201).json();

    }

    async index(request, response) {
        const {id: user_id} = request.user;

        const favorites = await knex("favorites").where({user_id})

        return response.json(favorites);
    }

    async searchByName(request, response) {
        const {id: user_id} = request.user;
        const {name} = request.params;

        const favorites = await knex("favorites").where({user_id}).where("country_name", "like", `%${name}%`);

        return response.json(favorites);
    }
}

module.exports = FavoritesController;