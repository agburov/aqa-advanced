async function fetchTodo() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching todo:', error);
        throw error;
    }
}

async function fetchUser() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching user:', error);
        throw error;
    }
}

let allPromisesResult;
let racePromiseResult;

(async () => {
    try {
        allPromisesResult = await Promise.all([fetchTodo(), fetchUser()]);
        const [todo, user] = allPromisesResult;
        console.log('Promise.all results:');
        console.log('Todo:', todo);
        console.log('User:', user);
    } catch (error) {
        console.error('Error in Promise.all:', error);
    }
})();

(async () => {
    try {
        racePromiseResult = await Promise.race([fetchTodo(), fetchUser()]);
        console.log('Promise.race result (first to complete):', racePromiseResult);
    } catch (error) {
        console.error('Error in Promise.race:', error);
    }
})();

fetchTodo();
fetchUser();
console.log('allPromisesResult and racePromiseResult will be populated asynchronously');
