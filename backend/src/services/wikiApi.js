const axios = require('axios');

const wikiApi = axios.create({
    baseURL: "https://pt.wikipedia.org/api/rest_v1/page/summary"
});

module.exports = wikiApi;