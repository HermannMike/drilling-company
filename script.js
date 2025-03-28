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
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware to parse JSON data from request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Dummy storage (in a real application, you would save this to a database)
let contactSubmissions = [];

// Serve static files (optional, if you're serving the front-end from this server)
app.use(express.static('public'));

// Route for handling contact form submission
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;

    // Validate the incoming data (you can add more checks if necessary)
    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    // Store the data (in a real-world scenario, store this in a database)
    contactSubmissions.push({ name, email, message });

    // Respond with success
    res.status(200).json({ message: 'Form submitted successfully' });
});

// Optional: Add an endpoint to view all submissions (for testing purposes)
app.get('/api/submissions', (req, res) => {
    res.status(200).json(contactSubmissions);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

