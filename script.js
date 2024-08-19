document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Capture form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Display an alert for demonstration
    alert(`Thank you, ${name}! Your message has been received.`);
    
    // Clear form fields
    document.getElementById('contact-form').reset();
});
