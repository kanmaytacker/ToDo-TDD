var todo = ('../models/todo.model');

var todoController = {
	getTodo : (req, res) => {
		todo.find({}, (err, todos) => {
			if (err) {
				res.json({status: false, error: "Something went wrong"});
				return;
			}
			res.json({status: true, todo: todos});
		});

	},

	createTodo : (req, res) => {
		var todoObject = new todo(req.body);
		todoObject.save((err, todoResponse) =>{
			if (err) {
				res.json({status: false, error: "Something went wrong"});
				return;
			}
			res.json({status: true, message: "Todo Saved!!"});
		});
	},

	updateTodo : (req, res) => {
		var toDoCompleted = req.body.completed;
		todo.findById(req.params.id, (err, todoResponse) =>{
			todoResponse.completed = completed;
			 if(err) {
                res.json({status: false, error: "Status not updated"});
              }
              res.json({status: true, message: "Status updated successfully"});
		});
	},

	deleteTodo : (req, res) => {
		todo.remove({_id : req.params.id}, (err, todoResponse) => {
			if(err) {
              res.json({status: false, error: "Deleting todo is not successfull"});
              return;
            }
      res.json({status: true, message: "Todo deleted successfully!!"});
		});
	}
}

module.exports = todoController;