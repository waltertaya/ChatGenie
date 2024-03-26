require('dotenv').config();

const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const port = process.env.PORT || 5000;

// register express middleware

app.use(express.static('public'));

// set template engine
app.use(expressLayouts);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

// registering routes
app.use('/', require('./server/routes/main.js'));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});