// Client-side JavaScript for handling button clicks and modal

document.addEventListener('DOMContentLoaded', function() {
    const contactBtn = document.getElementById('contactBtn');
    const contactModal = document.getElementById('contactModal');
    const loginBtn = document.getElementById('loginBtn');
    const loginModal = document.getElementById('loginModal');
    const signupBtn = document.getElementById('signupBtn');
    const signupModal = document.getElementById('signupModal');
    const servicesBtn = document.getElementById('servicesBtn');
    const servicesDetails = document.getElementById('servicesDetails');
    const closeBtns = document.querySelectorAll('.close');

    if (contactBtn) {
        contactBtn.addEventListener('click', function() {
            contactModal.style.display = 'block';
        });
    }

    if (loginBtn) {
        loginBtn.addEventListener('click', function() {
            loginModal.style.display = 'block';
        });
    }

    if (signupBtn) {
        signupBtn.addEventListener('click', function() {
            signupModal.style.display = 'block';
        });
    }

    if (servicesBtn) {
        servicesBtn.addEventListener('click', function() {
            servicesDetails.style.display = servicesDetails.style.display === 'none' ? 'block' : 'none';
        });
    }

    closeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            contactModal.style.display = 'none';
            loginModal.style.display = 'none';
            signupModal.style.display = 'none';
        });
    });

    // Close modal when clicking outside of it
    window.addEventListener('click', function(event) {
        if (event.target === contactModal) {
            contactModal.style.display = 'none';
        }
        if (event.target === loginModal) {
            loginModal.style.display = 'none';
        }
        if (event.target === signupModal) {
            signupModal.style.display = 'none';
        }
    });

    // Handle contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, message })
            })
            .then(response => response.json())
            .then(data => {
                alert(data.message);
                contactModal.style.display = 'none';
                contactForm.reset();
            })
            .catch(error => {
                console.error('Error:', error);
                alert('An error occurred. Please try again.');
            });
        });
    }

    // Handle login form submission
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;

            fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            })
            .then(response => response.json())
            .then(data => {
                alert(data.message);
                loginModal.style.display = 'none';
                loginForm.reset();
            })
            .catch(error => {
                console.error('Error:', error);
                alert('An error occurred. Please try again.');
            });
        });
    }

    // Handle signup form submission
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const firstName = document.getElementById('firstName').value;
            const idNumber = document.getElementById('idNumber').value;
            const email = document.getElementById('signupEmail').value;

            fetch('/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ firstName, idNumber, email })
            })
            .then(response => response.json())
            .then(data => {
                alert(data.message);
                signupModal.style.display = 'none';
                signupForm.reset();
            })
            .catch(error => {
                console.error('Error:', error);
                alert('An error occurred. Please try again.');
            });
        });
    }
});

