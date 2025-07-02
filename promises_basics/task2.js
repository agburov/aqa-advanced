function fetchTodo() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error fetching todo:', error);
            throw error;
        });
}

function fetchUser() {
    return fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error fetching user:', error);
            throw error;
        });
}

const allPromisesResult = Promise.all([fetchTodo(), fetchUser()])
    .then(results => {
        const [todo, user] = results;
        console.log('Promise.all results:');
        console.log('Todo:', todo);
        console.log('User:', user);
        return results;
    })
    .catch(error => {
        console.error('Error in Promise.all:', error);
    });

const racePromiseResult = Promise.race([fetchTodo(), fetchUser()])
    .then(firstResult => {
        console.log('Promise.race result (first to complete):', firstResult);
        return firstResult;
    })
    .catch(error => {
        console.error('Error in Promise.race:', error);
    });

fetchTodo();
fetchUser();
allPromisesResult;
racePromiseResult;
