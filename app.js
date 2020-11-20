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

// static files
app.use(express.static(__dirname + '/public'));

// Routes

// HOME ROUTE
app.get('/', (req, res) => {
    res.render('index');
});


// ACCOUNTS ROUTE
app.get('/accounts', (req, res) => {
    res.render('accounts');
});

// ABOUT ROUTE
app.get('/about', (req, res) => {
    res.render('about');
});

// MOVIES ROUTE
app.get('/movies', (req, res) => {
    res.render('movies');
});

// end of routes

app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`);
})