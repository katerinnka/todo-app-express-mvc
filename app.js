// app.js
require('dotenv').config();
const path = require('path');
const express = require('express');
const morgan = require('morgan');

const todoRoutes = require('./routes/todoRoutes');
const aboutRoutes = require('./routes/aboutRoutes');
const errorController = require('./controllers/errorController'); // <— новый импорт

const app = express();

// === View engine ===
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// === Middlewares ===
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// === Routes ===
app.use('/', todoRoutes);
app.use('/about', aboutRoutes);

// === 404 (через контроллер) ===
app.use(errorController.notFound);

// === Start server ===
const PORT = process.env.PORT || 3000;
const APP_NAME = process.env.APP_NAME || 'TodoApp';

app.listen(PORT, () => {
  console.log(`🚀 ${APP_NAME} running at http://localhost:${PORT}`);
});
