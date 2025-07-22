const axios = require('axios');

async function fetchWithError() {
    try {
        await axios.get('https://jsonplaceholder.typicode.com/invalid-endpoint');
        return 'No error';
    } catch (error) {
        if (error.response && error.response.status) {
            return `Request failed with status code ${error.response.status}`;
        }
        return error.message;
    }
}

module.exports = fetchWithError;
