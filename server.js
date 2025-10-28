const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON data from request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Dummy storage (in a real application, you would save this to a database)
let contactSubmissions = [];
let users = [];

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

// Route for handling login
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;

    // Validate the incoming data
    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' });
    }

    // Check if user exists (in a real app, check against database)
    const user = users.find(u => u.email === email);
    if (!user) {
        return res.status(401).json({ error: 'User not found' });
    }

    // In a real app, verify password hash
    if (user.password !== password) {
        return res.status(401).json({ error: 'Invalid password' });
    }

    // Respond with success
    res.status(200).json({ message: 'Login successful' });
});

// Route for handling signup
app.post('/api/signup', (req, res) => {
    const { firstName, idNumber, email } = req.body;

    // Validate the incoming data
    if (!firstName || !idNumber || !email) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    // Check if user already exists
    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
        return res.status(400).json({ error: 'User already exists' });
    }

    // Store the user (in a real-world scenario, store this in a database with hashed password)
    users.push({ firstName, idNumber, email, password: 'defaultpassword' }); // Placeholder password

    // Respond with success
    res.status(200).json({ message: 'Sign up successful' });
});

// Start the server
app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running on http://0.0.0.0:${port}`);
});
