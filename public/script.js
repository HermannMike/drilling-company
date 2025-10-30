 // Client-side JavaScript for handling button clicks and modal

document.addEventListener('DOMContentLoaded', function() {
    const contactBtn = document.getElementById('contactBtn');
    const loginBtn = document.getElementById('loginBtn');
    const loginModal = document.getElementById('loginModal');
    const signupBtn = document.getElementById('signupBtn');
    const signupModal = document.getElementById('signupModal');
    const servicesBtn = document.getElementById('servicesBtn');
    const servicesDetails = document.getElementById('servicesDetails');

    if (loginBtn) {
        loginBtn.addEventListener('click', function() {
            const loginModal = document.getElementById('loginModal');
            loginModal.style.display = 'block';
            const loginModalContent = loginModal.querySelector('.modal-content');
            if (loginModalContent && !loginModalContent.hasChildNodes()) {
                ReactDOM.render(React.createElement(LoginForm), loginModalContent);
            }
        });
    }

    if (signupBtn) {
        signupBtn.addEventListener('click', function() {
            const signupModal = document.getElementById('signupModal');
            signupModal.style.display = 'block';
            const signupModalContent = signupModal.querySelector('.modal-content');
            if (signupModalContent && !signupModalContent.hasChildNodes()) {
                ReactDOM.render(React.createElement(SignupForm), signupModalContent);
            }
        });
    }

    if (contactBtn) {
        contactBtn.addEventListener('click', function() {
            const contactModal = document.getElementById('contactModal');
            contactModal.style.display = 'block';
            const contactModalContent = contactModal.querySelector('.modal-content');
            if (contactModalContent && !contactModalContent.hasChildNodes()) {
                ReactDOM.render(React.createElement(ContactForm), contactModalContent);
            }
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
        if (event.target === document.getElementById('contactModal')) {
            document.getElementById('contactModal').style.display = 'none';
        }
    });

    // Close modal when clicking outside of it
    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    });

    // Contact form is now handled by React

    // Login and signup forms are now handled by React


});

