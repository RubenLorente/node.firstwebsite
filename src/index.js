const express = require('express');
const app = express();
const path = require('path');  //modulo que detecta en que SO estas para las barras de las rutas
const PORT = process.env.PORT || 3000;

// settings
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');


// middlewares

// routes
app.use(require('./routes/index'));

//static files
app.use(express.static(path.join(__dirname, 'public')));

// listening server
app.listen(PORT, () => {
    console.log('Server on port', PORT);
});