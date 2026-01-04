function initScheduler() {
    console.log('Scheduler Initialized');

    // Add event
    window.addEvent = function() {
        const eventInput = document.getElementById('new-event');
        const eventList = document.getElementById('event-list');
        const event = eventInput.value;
        if (event) {
            const li = document.createElement('li');
            li.textContent = event;
            eventList.appendChild(li);
            eventInput.value = '';
        }
    };
}
