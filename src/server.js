const express = require('express');
const hbs = require('express-hbs')

const path = require('path');
//Initialization
const app = express()
//Settings
app.set('port', process.env.PORT || 3000); //para hacer deploy en la nube, resaltamos el app set para eviar el puerto que en este caso utilizaremos entornos virtuales para senalar el puerto

app.engine('hbs', hbs.express4({
  partialsDir: path.join(__dirname, 'views', 'partials'),
  layoutsDir: path.join(__dirname, 'views', 'layouts'),
  defaultLayout: path.join(__dirname, 'views', 'layouts', 'default.hbs')
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));


//Middleware
app.use(express.urlencoded({ extended:false }));
//Global Variables
//Routes
app.use(require('./routes/routes'))
//static files
app.use(express.static(path.join(__dirname, 'public')));
module.exports = app;