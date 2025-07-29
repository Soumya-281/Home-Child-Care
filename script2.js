document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const employeeId = event.target['employee-id'].value;
        const name = event.target.name.value;
        const email = event.target.email.value;
        const location = event.target.location.value;

        if (employeeId && name && email && location) {
            alert(`Welcome, ${name}! Your details have been submitted successfully.`);
            loginForm.reset();
        } else {
            alert('Please fill out all fields.');
        }
    });
});
