
require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const logger = require('morgan');
const path = require('path');
const ejsEngine = require('ejs-mate');

const app = express();
const PORT = process.env.PORT || 3000;
// Set EJS as templating engine
app.engine('ejs', ejsEngine);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));

// Set up mongoose connection
const connectDb = require('./models/database');
connectDb();


// Routes
app.use('/', require('./routes'));

// 404 handler
app.use((req, res, next) => {
  res.status(404).send('404 Not Found');
});

// Error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500).send(err.message || 'Something went wrong');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
