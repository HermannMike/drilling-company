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

    // Contact form is now handled by React

    // Login and signup forms are now handled by React
});

