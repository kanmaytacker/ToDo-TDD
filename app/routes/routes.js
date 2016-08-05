var express = require('express');
var router = express.Router();

var todo = require('../models/todo.model');
var todoController = require('../controllers/todo.controller')(todo);

router.get('/todo', todoController.getTodo);
router.post('/todo', todoController.createTodo);

router.put('/todo/:id', todoController.updateTodo);
router.delete('/todo/:id', todoController.deleteTodo);

module.exports = router;