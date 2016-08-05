var config = {
	port : process.env.PORT || 8080,
	db : process.env.MONGOLAB_URI || 'mongodb://localhost/todo_api',
	test_port : 8081,
	test_db : 'mongodb://localhost/todo_api_test'
}

module.exports = config;