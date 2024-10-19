// login
/**
 * Logs in a user with the provided username and password.
 *
 * @param {string} username - The username of the user.
 * @param {string} password - The password of the user.
 * @returns {Promise<Object>} A promise that resolves to the response JSON object.
 * @throws {Error} If the login request fails.
 */
async function login(username, password) {
    const response = await fetch('/api/auth.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    });

    if (!response.ok) {
        throw new Error('Login failed');
    }

    return response.json();
}

// logout
/**
 * Logs out the current user by sending a DELETE request to the authentication API.
 *
 * @async
 * @function logout
 * @returns {Promise<Object>} The response from the server as a JSON object.
 * @throws {Error} If the logout request fails.
 */
async function logout() {
    const response = await fetch('/api/auth.php', {
        method: 'DELETE'
    });

    if (!response.ok) {
        throw new Error('Logout failed');
    }

    return response.json();
}

// isAuthenticated
/**
 * Checks if the user is authenticated by making a GET request to the authentication API.
 *
 * @async
 * @function isAuthenticated
 * @returns {Promise<Object>} A promise that resolves to the JSON response from the authentication API.
 * @throws {Error} Throws an error if the authentication check fails.
 */
async function isAuthenticated() {
    const response = await fetch('/api/auth.php', {
        method: 'GET'
    });

    if (!response.ok) {
        throw new Error('Authentication check failed');
    }

    return response.json();
}

// redirectIfAuthenticated
/**
 * Redirects the user to the dashboard page if they are authenticated.
 * 
 * This function checks the user's authentication status by calling the 
 * `isAuthenticated` function. If the user is authenticated, it redirects 
 * them to the '/dashboard.html' page.
 * 
 * @async
 * @function redirectIfAuthenticated
 * @returns {Promise<void>} A promise that resolves when the redirection is complete.
 */
async function redirectIfAuthenticated() {
    const authStatus = await isAuthenticated();
    if (authStatus.authenticated) {
        window.location.href = '/dashboard.html';
    }
}

// redirectIfNotAuthenticated
/**
 * Redirects the user to the login page if they are not authenticated.
 * 
 * This function checks the user's authentication status by calling the
 * `isAuthenticated` function. If the user is not authenticated, it redirects
 * the user to the login page.
 * 
 * @async
 * @function redirectIfNotAuthenticated
 * @returns {Promise<void>} A promise that resolves when the redirection is complete.
 */
async function redirectIfNotAuthenticated() {
    const authStatus = await isAuthenticated();
    if (!authStatus.authenticated) {
        window.location.href = '/login.html';
    }
}