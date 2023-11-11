const express = require('express');
const { renderTodoPage, addTodo, editTodo } = require('../controllers/todo.controller');

const router = express.Router();

router.get('/', renderTodoPage);
router.post('/add-todo', addTodo);
router.put('/edit-todo', editTodo);
module.exports = router;
