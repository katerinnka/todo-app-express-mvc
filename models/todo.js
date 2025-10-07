// models/todo.js
const { v4: uuid } = require('uuid');

const todos = []; // { id, title, done, createdAt }

function getAll() {
  // можно сортировать по времени добавления (новые сверху)
  return [...todos].sort((a, b) => b.createdAt - a.createdAt);
}

function add(title) {
  const text = String(title || '').trim();
  if (!text) return null;
  const item = { id: uuid(), title: text, done: false, createdAt: Date.now() };
  todos.push(item);
  return item;
}

function toggle(id) {
  const t = todos.find(x => x.id === id);
  if (t) t.done = !t.done;
  return t;
}

function remove(id) {
  const i = todos.findIndex(x => x.id === id);
  if (i >= 0) return todos.splice(i, 1)[0];
  return null;
}

module.exports = { getAll, add, toggle, remove };
