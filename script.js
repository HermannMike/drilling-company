// Modal functionality
const contactBtn = document.getElementById("contactBtn");
const contactModal = document.getElementById("contactModal");
const closeModal = document.querySelector(".close");

// Show modal on "Contact Us" button click
contactBtn.addEventListener("click", () => {
    contactModal.style.display = "flex";
});

// Close modal when clicking on the close button
closeModal.addEventListener("click", () => {
    contactModal.style.display = "none";
});

// Close modal if clicking outside of the modal content
window.addEventListener("click", (e) => {
    if (e.target === contactModal) {
        contactModal.style.display = "none";
    }
});

// Contact form submission (you can later handle form data)
document.getElementById("contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
    contactModal.style.display = "none";
});
