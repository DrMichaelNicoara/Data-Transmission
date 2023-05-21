const fetch = require('isomorphic-fetch');
const express = require('express');

const app = express();

// Set up CORS headers
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Proxy route
app.get('/proxy', async (req, res) => {
    const { url } = req.query;
    if (!url) {
        res.status(400).send('Missing URL parameter');
        return;
    }

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }

        const data = await response.text();
        res.send(data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: error.message });
    }
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
