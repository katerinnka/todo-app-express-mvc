// routes/todoRoutes.js
const express = require('express');
const router = express.Router();
const c = require('../controllers/todoController');

router.get('/', c.getList);           // GET / — список задач
router.get('/new', c.getNew);         // GET /new — форма
router.post('/new', c.postNew);       // POST /new — создать
router.post('/:id/toggle', c.postToggle); // POST /:id/toggle
router.post('/:id/delete', c.postDelete); // POST /:id/delete

module.exports = router;

