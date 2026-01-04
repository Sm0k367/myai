function initInfoRetrieval() {
    console.log('Info Retrieval Initialized');

    // Get information
    window.getInfo = function() {
        const queryInput = document.getElementById('info-query');
        const infoResult = document.getElementById('info-result');
        const query = queryInput.value;
        if (query) {
            // Simulate information retrieval
            infoResult.textContent = `Result for "${query}": This is a simulated response.`;
        }
    };
}
