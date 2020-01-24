const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');

//configurar servidor
app.set('port', 8090);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Middleweres
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

//Routes
app.use(require('./routes/index'));

//static
app.use(express.static(path.join(__dirname, 'public')));

// error 404
app.use((re, res, next) => {
    res.status(404).send('404 error');
});

module.exports = app;
