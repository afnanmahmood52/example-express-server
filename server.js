require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const app = express();

// Use the PORT environment variable or default to 3000
const port = process.env.PORT;

// Middleware to parse JSON bodies
app.use(express.json());

// POST request endpoint
app.post('/post-request', (req, res) => {
    try {
        const { body } = req;
        res.status(200).json({ message: 'POST request received!', data: body });
    } catch (error) {
        res.status(500).json({ error: error});
    }
});

// GET request endpoint
app.get('/api/data', (req, res) => {
    res.status(200).json({ message: 'GET request received!', secret: process.env.JWT_SECRET });
});


// GET request endpoint
app.get('/api/blablalalal', (req, res) => {
    res.status(200).json({ message: 'GET request received! blablalalal'})
}
)


// GET request endpoint
app.put('/api/put-request', (req, res) => {
    res.status(200).json({ message: 'GET request received! blablalalal'})
}
)

// Start the server
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
