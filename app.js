const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');

// initialize express application
const app = express();

// port
const PORT = process.env.PORT || 3000;

// setting template engine
app.set('view engine', 'ejs');

// setting express middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.get('/', (req, res) => {
    res.send('This is my Homepage');
});

app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`);
})