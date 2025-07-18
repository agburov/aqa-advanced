const axios = require('axios');
const chalk = require('chalk');

function colorizeJson(val, indent = 0) {
    const pad = '  '.repeat(indent);
    if (Array.isArray(val)) {
        if (val.length === 0) return chalk.cyan('[]');
        let out = chalk.cyan('[\n');
        out += val.map(v => pad + '  ' + colorizeJson(v, indent + 1)).join(',\n') + '\n' + pad + chalk.cyan(']');
        return out;
    }
    if (val && typeof val === 'object') {
        const keys = Object.keys(val);
        if (keys.length === 0) return chalk.yellow('{}');
        let out = chalk.yellow('{\n');
        out += keys.map(k => pad + '  ' + chalk.white(k) + ': ' + colorizeJson(val[k], indent + 1)).join(',\n') + '\n' + pad + chalk.yellow('}');
        return out;
    }
    if (typeof val === 'string') return chalk.green('"' + val + '"');
    if (typeof val === 'number') return chalk.yellow(val);
    if (typeof val === 'boolean') return chalk.blue(val);
    if (val === null) return chalk.gray('null');
    return String(val);
}

axios.interceptors.request.use(request => {
    process.stdout.write('\n' + chalk.green('[AXIOS REQUEST]') + '\n');
    if (request.myDescription) {
        process.stdout.write('  test: ' + chalk.white(request.myDescription) + '\n');
    }
    process.stdout.write('  method: ' + chalk.magenta(request.method.toUpperCase()) + '\n');
    process.stdout.write('  url: ' + chalk.blue(request.url) + '\n');
    if (request.params !== undefined) process.stdout.write('  params: ' + colorizeJson(request.params, 2) + '\n');
    if (request.data !== undefined) process.stdout.write('  data: ' + colorizeJson(request.data, 2) + '\n');
    return request;
});

axios.interceptors.response.use(response => {
    process.stdout.write(chalk.green('[AXIOS RESPONSE]') + '\n');
    process.stdout.write('  status: ' + chalk.yellow(response.status) + '\n');
    process.stdout.write('  url: ' + chalk.blue(response.config.url) + '\n');
    process.stdout.write('  data: ' + colorizeJson(response.data, 2) + '\n');
    process.stdout.write('\n');
    return response;
});

test('GET /posts/1 should return a valid post object', async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts/1', {
        myDescription: 'GET /posts/1 should return a valid post object'
    });
    expect(res.status).toBe(200);
    expect(res.data).toHaveProperty('id', 1);
    expect(res.data).toHaveProperty('title');
    expect(res.data).toHaveProperty('body');
    expect(res.data).toHaveProperty('userId');
});

test('GET /users/1 should return a valid user object', async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users/1', {
        myDescription: 'GET /users/1 should return a valid user object'
    });
    expect(res.status).toBe(200);
    expect(res.data).toHaveProperty('id', 1);
    expect(res.data).toHaveProperty('name');
    expect(res.data).toHaveProperty('username');
    expect(res.data).toHaveProperty('email');
});

test('GET /posts?userId=1 should return an array of posts for userId=1', async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts', {
        params: { userId: 1 },
        myDescription: 'GET /posts?userId=1 should return an array of posts for userId=1'
    });
    expect(res.status).toBe(200);
    expect(Array.isArray(res.data)).toBe(true);
    expect(res.data.length).toBeGreaterThan(0);
    res.data.forEach(post => expect(post.userId).toBe(1));
});

test('POST /posts should create a new post and return it with id', async () => {
    const payload = { title: 'foo', body: 'bar', userId: 1 };
    const res = await axios.post('https://jsonplaceholder.typicode.com/posts', payload, {
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
        myDescription: 'POST /posts should create a new post and return it with id'
    });
    expect(res.status).toBe(201);
    expect(res.data).toMatchObject(payload);
    expect(res.data).toHaveProperty('id');
});

test('POST /comments should create a new comment and return it with id', async () => {
    const payload = { name: 'test', email: 'test@example.com', body: 'comment', postId: 1 };
    const res = await axios.post('https://jsonplaceholder.typicode.com/comments', payload, {
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
        myDescription: 'POST /comments should create a new comment and return it with id'
    });
    expect(res.status).toBe(201);
    expect(res.data).toMatchObject(payload);
    expect(res.data).toHaveProperty('id');
});
