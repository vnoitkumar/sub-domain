const express = require('express');
const app = express();

app.use((req, res, next) => {
    const host = req.headers.host; // Get the host header
    const subdomain = host.split('.')[0]; // Extract subdomain
    req.subdomain = subdomain; // Store it for later use
    next();
});

app.get('/', (req, res) => {
    res.send(`Welcome to ${req.subdomain}'s page!`);
});

app.listen(3000);
