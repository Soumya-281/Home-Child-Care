document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const name = event.target.name.value;
        const email = event.target.email.value;
        const message = event.target.message.value;

        if (name && email && message) {
            alert(`Thank you, ${name}! Your message has been sent.`);
            contactForm.reset();
        } else {
            alert('Please fill out all fields.');
        }
    });
});
