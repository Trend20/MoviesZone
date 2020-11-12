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
app.get('/', (req, res) => {
    res.render('index');
});

app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`);
})