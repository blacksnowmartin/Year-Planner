const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const calendarElement = document.getElementById('calendar');

function addGoal() {
    const goal = document.getElementById('goal').value;
    const duration = parseInt(document.getElementById('duration').value);

    if (!goal || isNaN(duration) || duration <= 0) {
        alert('Please enter a valid goal and duration.');
        return;
    }

    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    
    for (let i = 0; i < duration; i++) {
        const monthIndex = (currentMonth + i) % 12;
        const year = currentYear + Math.floor((currentMonth + i) / 12);
        const monthElement = document.createElement('div');
        monthElement.classList.add('month');
        monthElement.innerHTML = `<h3>${months[monthIndex]} ${year}</h3>`;
        const goalElement = document.createElement('div');
        goalElement.classList.add('goal');
        goalElement.textContent = goal;
        monthElement.appendChild(goalElement);
        calendarElement.appendChild(monthElement);
    }
}
