document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const bookingForm = document.getElementById('booking-form');
    const paymentForm = document.getElementById('payment-form');
    const complaintsForm = document.getElementById('complaints-form');

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            
            const customerId = event.target['customer-id'].value;
            const name = event.target.name.value;
            const email = event.target.email.value;
            const phone = event.target.phone.value;

            if (customerId && name && email && phone) {
                alert(`Welcome, ${name}! You have successfully logged in.`);
                loginForm.reset();
            } else {
                alert('Please fill out all fields.');
            }
        });
    }

    if (bookingForm) {
        bookingForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const service = event.target.service.value;
            const location = event.target.location.value;
            const duration = event.target.duration.value;

            if (service && location && duration) {
                alert(`Your booking for ${service} service at ${location} for ${duration} hours has been confirmed.`);
                bookingForm.reset();
            } else {
                alert('Please fill out all fields.');
            }
        });
    }

    if (paymentForm) {
        paymentForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const cardName = event.target['card-name'].value;
            const cardNumber = event.target['card-number'].value;
            const expiryDate = event.target['expiry-date'].value;
            const cvv = event.target.cvv.value;

            if (cardName && cardNumber && expiryDate && cvv) {
                alert(`Thank you for your payment, ${cardName}. Your transaction has been processed.`);
                paymentForm.reset();
            } else {
                alert('Please fill out all fields.');
            }
        });
    }

    if (complaintsForm) {
        complaintsForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const complaintId = event.target['complaint-id'].value;
            const employeeName = event.target['employee-name'].value;
            const complaintDetails = event.target['complaint-details'].value;

            if (complaintId && employeeName && complaintDetails) {
                alert(`Your complaint regarding ${employeeName} has been submitted.`);
                complaintsForm.reset();
            } else {
                alert('Please fill out all fields.');
            }
        });
    }
});
