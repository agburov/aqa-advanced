const axios = require('axios');

async function getWithHeadersAndParams(url, params = {}, headers = {}) {
    try {
        const response = await axios.get(url, {
            params,
            headers,
        });
        return response;
    } catch (error) {
        return error;
    }
}

module.exports = getWithHeadersAndParams;
