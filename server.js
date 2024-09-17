require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const app = express();

// Use the PORT environment variable or default to 3000
const port = process.env.PORT;

// Middleware to parse JSON bodies
app.use(express.json());

// GET request endpoint
app.get('/api/data', (req, res) => {
    res.json({ message: 'GET request received!', secret: process.env.JWT_SECRET });
});

// POST request endpoint
app.post('/api/data', (req, res) => {
    const { body } = req;
    res.json({ message: 'POST request received!', data: body });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
