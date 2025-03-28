const express = require('express');
const app = express();
const port = 3000;

// Example JSON data
const data = {
  message: 'Hello, World!',
  status: 'success',
};

// Route for the API
app.get('/api', (req, res) => {
  res.json(data); // Send the JSON data as a response
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
