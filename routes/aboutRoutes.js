// routes/aboutRoutes.js
const express = require('express');
const router = express.Router();
const about = require('../controllers/aboutController');

router.get('/', about.getAbout); // GET /about

module.exports = router;

