const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON data from request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Dummy storage (in a real application, you would save this to a database)
let contactSubmissions = [];

// Serve static files (if you're serving the front-end from this server)
app.use(express.static('public'));  // Make sure 'public' contains your HTML, CSS, and JS files

// Route for handling contact form submission
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;

    // Validate the incoming data
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
