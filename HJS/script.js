const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const calendarElement = document.getElementById('calendar');
let savedGoals = JSON.parse(localStorage.getItem('goals')) || [];

function renderGoals() {
    calendarElement.innerHTML = '';
    const renderedMonths = new Set(); // Use a Set to keep track of rendered months
    
    savedGoals.forEach(({ goal, duration }) => {
        const today = new Date();
        const currentMonth = today.getMonth();
        const currentYear = today.getFullYear();
        
        for (let i = 0; i < duration; i++) {
            const monthIndex = (currentMonth + i) % 12;
            const year = currentYear + Math.floor((currentMonth + i) / 12);
            const monthName = `${months[monthIndex]} ${year}`;
            
            // Check if the month has already been rendered
            if (!renderedMonths.has(monthName)) {
                const monthElement = document.createElement('div');
                monthElement.classList.add('month');
                monthElement.innerHTML = `<h3>${monthName}</h3>`;
                calendarElement.appendChild(monthElement);
                renderedMonths.add(monthName); // Add the month to the Set
            }
            
            // Add goal to the current month
            const goalElement = document.createElement('div');
            goalElement.classList.add('goal');
            goalElement.textContent = goal;
            
            // Add delete button
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.classList.add('delete-button');
            deleteButton.onclick = function() {
                deleteGoal(goal, monthName); // Pass monthName to deleteGoal
            };
            goalElement.appendChild(deleteButton);
            
            calendarElement.lastChild.appendChild(goalElement);
        }
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

function deleteGoal(goalToDelete, monthNameToDelete) {
    savedGoals = savedGoals.filter(({ goal, duration }) => {
        // Check if the goal is in the month to delete
        return !(goal === goalToDelete && `${months[duration - 1]} ${today.getFullYear()}` === monthNameToDelete);
    });
    localStorage.setItem('goals', JSON.stringify(savedGoals));
    renderGoals();
}

renderGoals();
