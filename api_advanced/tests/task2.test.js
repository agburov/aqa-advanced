const getWithHeadersAndParams = require('../src/task2');

const TEST_URL = 'https://httpbin.org/get';

test('getWithHeadersAndParams sends custom headers and params', async () => {
    const params = { foo: 'bar', test: '123' };
    const headers = { 'X-Custom-Header': 'my-value', 'Another-Header': 'test-header' };

    const response = await getWithHeadersAndParams(TEST_URL, params, headers);

    expect(response.data.args).toMatchObject(params);
    expect(response.data.headers['X-Custom-Header']).toBe('my-value');
    expect(response.data.headers['Another-Header']).toBe('test-header');
}); 