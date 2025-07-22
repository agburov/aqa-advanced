const fetchData = require('../src/task3');
const axios = require('axios');

jest.mock('axios');

describe('fetchData', () => {
    it('returns data when request is successful', async () => {
        const mockData = { message: 'success' };
        axios.get.mockResolvedValue({ data: mockData });

        const result = await fetchData('https://example.com/success');
        expect(result).toEqual(mockData);
        expect(axios.get).toHaveBeenCalledWith('https://example.com/success');
    });

    it('throws error when request fails', async () => {
        const mockError = new Error('Request failed');
        axios.get.mockRejectedValue(mockError);

        await expect(fetchData('https://example.com/fail')).rejects.toThrow('Request failed');
        expect(axios.get).toHaveBeenCalledWith('https://example.com/fail');
    });
}); 