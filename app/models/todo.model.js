var mongoose = require('mongoose');
var schema = mongoose.Schema;

var toDoSchema = schema({
	todo : {
		type : String
	},

	completed : {
		type : Boolean
	},

	created_on : {
		type : Date,
		default : Date.now()
	},

	finished_by : {
		type : Date
	}
});

var toDoModel = mongoose.model('Todo', toDoSchema);
module.exports = toDoSchema;