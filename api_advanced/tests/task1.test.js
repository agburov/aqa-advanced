const fetchWithError = require('../src/task1');

test('fetchWithError returns an error message for an incorrect URL', async () => {
    const result = await fetchWithError();
    expect(result).toMatch(/Request failed with status code 404|Network Error|404/);
}); 