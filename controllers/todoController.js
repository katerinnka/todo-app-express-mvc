// controllers/todoController.js
const Todo = require('../models/todo');

exports.getList = (req, res) => {
  const todos = Todo.getAll();
  res.render('index', { title: 'Список задач', todos });
};

exports.getNew = (req, res) => {
  res.render('new', { title: 'Новая задача' });
};

exports.postNew = (req, res) => {
  Todo.add(req.body.title);
  res.redirect('/'); // redirect после успешного POST
};

exports.postToggle = (req, res) => {
  Todo.toggle(req.params.id);
  res.redirect('/');
};

exports.postDelete = (req, res) => {
  Todo.remove(req.params.id);
  res.redirect('/');
};
