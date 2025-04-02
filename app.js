const express = require('express');
const pa11y = require('pa11y');
const path = require('path');

const app = express();
const port = 3000;

// Middleware to serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route to handle Pa11y scan requests
app.post('/scan', async(req, res) => {
    const urlToTest = req.body.url;  // URL provided by the user

    if (!urlToTest) {
        return res.status(400).json({ error: 'URL is required' });
    }

    try {
        // Run Pa11y on the provided URL
        const results = await pa11y(urlToTest);  

        // Log the results to the console for debugging
        console.log('Pa11y Results:', results);

        res.json(results); // Send the results back to the client
    } catch (error) {
        console.error('Pa11y Error:', error.message);
        res.status(500).json({ error: error.message });
    }
});

// Starta servern
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
