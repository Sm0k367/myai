function initAuth() {
    console.log('Auth Initialized');

    // Login
    window.login = function() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        // Simulate login
        alert(`Logging in with username: ${username} and password: ${password}`);
    };

    // Register
    window.register = function() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        // Simulate registration
        alert(`Registering with username: ${username} and password: ${password}`);
    };
}
