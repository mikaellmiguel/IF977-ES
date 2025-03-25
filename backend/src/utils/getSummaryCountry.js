const wikiApi = require('../services/wikiApi');

async function getSummaryCountry(countryName) {
    const {data} = await wikiApi.get(`/${countryName}`);
    return data.extract;
}

module.exports = getSummaryCountry;