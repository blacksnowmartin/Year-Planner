const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const calendarElement = document.getElementById('calendar');
let savedGoals = JSON.parse(localStorage.getItem('goals')) || [];

function renderGoals() {
    calendarElement.innerHTML = '';
    const monthGoalsMap = {}; // Use an object to map months to their goals
    
    savedGoals.forEach(({ goal, duration }) => {
        const today = new Date();
        const currentMonth = today.getMonth();
        const currentYear = today.getFullYear();
        
        for (let i = 0; i < duration; i++) {
            const monthIndex = (currentMonth + i) % 12;
            const year = currentYear + Math.floor((currentMonth + i) / 12);
            const monthName = `${months[monthIndex]} ${year}`;
            
            // Initialize the month's goals list if it doesn't exist
            if (!monthGoalsMap[monthName]) {
                monthGoalsMap[monthName] = [];
            }
            
            // Add the goal to the month's goals list
            monthGoalsMap[monthName].push(goal);
        }
    });
    
    // Render each month and its goals
    Object.entries(monthGoalsMap).forEach(([monthName, goals]) => {
        const monthElement = document.createElement('div');
        monthElement.classList.add('month');
        monthElement.innerHTML = `<h3>${monthName}</h3>`;
        
        // Create a list of goals for the month
        const goalsList = document.createElement('ul');
        goals.forEach(goal => {
            const goalItem = document.createElement('li');
            goalItem.textContent = goal;
            goalsList.appendChild(goalItem);
        });
        
        monthElement.appendChild(goalsList);
        calendarElement.appendChild(monthElement);
    });
}

function addGoal() {
    const goal = document.getElementById('goal').value;
    const duration = parseInt(document.getElementById('duration').value);

    if (!goal || isNaN(duration) || duration <= 0) {
        alert('Please enter a valid goal and duration.');
        return;
    }

    savedGoals.push({ goal, duration });
    localStorage.setItem('goals', JSON.stringify(savedGoals));
    renderGoals();
}

renderGoals();
