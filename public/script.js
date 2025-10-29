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
            if (servicesDetails.style.display === 'none' || servicesDetails.style.display === '') {
                servicesDetails.style.display = 'block';
                servicesDetails.classList.add('show');
            } else {
                servicesDetails.classList.remove('show');
                setTimeout(() => {
                    servicesDetails.style.display = 'none';
                }, 500); // Match transition duration
            }
        });
    }

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

    // Contact form is now handled by React

    // Login and signup forms are now handled by React
});

