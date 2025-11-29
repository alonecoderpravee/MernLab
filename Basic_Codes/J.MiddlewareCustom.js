const express = require('express');
const app = express();

// Custom middleware
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next(); // Pass control to the next handler
};

app.use(logger);

app.get('/', (req, res) => {
    res.send('Home Page');
});


const authenticate = (req, res, next) => {
    const auth = req.headers['authorization'];
    if (auth === 'secret-token') {
        next();
    } else {
        res.status(403).send('Forbidden');
    }
};

app.get('/protected', authenticate, (req, res) => {
    res.send('You are authorized');
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});