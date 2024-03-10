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
           
