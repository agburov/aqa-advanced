/**
 * Class for fetching data from API endpoints
 */
class ApiService {
    /**
     * Fetches a todo item from the server
     * @returns {Promise<Object>} Promise that resolves to a todo object
     */
    async fetchTodo() {
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

    /**
     * Fetches a user from the server
     * @returns {Promise<Object>} Promise that resolves to a user object
     */
    async fetchUser() {
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
}

/**
 * Class for handling promise operations
 */
class PromiseHandler {
    constructor(apiService) {
        this.apiService = apiService;
        this.allPromisesResult = null;
        this.racePromiseResult = null;
    }

    /**
     * Executes Promise.all with todo and user requests
     * @returns {Promise<Array>} Promise that resolves to an array of results
     */
    async handlePromiseAll() {
        try {
            this.allPromisesResult = await Promise.all([
                this.apiService.fetchTodo(),
                this.apiService.fetchUser()
            ]);

            const [todo, user] = this.allPromisesResult;
            console.log('Promise.all results:');
            console.log('Todo:', todo);
            console.log('User:', user);

            return this.allPromisesResult;
        } catch (error) {
            console.error('Error in Promise.all:', error);
            throw error;
        }
    }

    /**
     * Executes Promise.race with todo and user requests
     * @returns {Promise<Object>} Promise that resolves to the first completed result
     */
    async handlePromiseRace() {
        try {
            this.racePromiseResult = await Promise.race([
                this.apiService.fetchTodo(),
                this.apiService.fetchUser()
            ]);

            console.log('Promise.race result (first to complete):', this.racePromiseResult);

            return this.racePromiseResult;
        } catch (error) {
            console.error('Error in Promise.race:', error);
            throw error;
        }
    }

    /**
     * Executes both Promise.all and Promise.race operations
     * @returns {Promise<Object>} Promise that resolves to an object with both results
     */
    async handleAllPromiseOperations() {
        try {
            await this.handlePromiseAll();
            await this.handlePromiseRace();

            return {
                allPromisesResult: this.allPromisesResult,
                racePromiseResult: this.racePromiseResult
            };
        } catch (error) {
            console.error('Error handling promise operations:', error);
            throw error;
        }
    }
}

const apiService = new ApiService();
const promiseHandler = new PromiseHandler(apiService);

promiseHandler.handleAllPromiseOperations().catch(error => {
    console.error('Unhandled error:', error);
});
