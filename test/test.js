var sinon = require('sinon');
var chai = require('chai');
var expect = chai.expect;

var mongoose = require('mongoose');
require('sinon-mongoose');

var todo = require('../app/models/todo.model');

describe('Get all todos', () => {
	it('should return all todos', (done) => {
		var todoModelMock = sinon.mock(todo);
		var expectedResult = { status : true, todo : []};
		todoModelMock.expects('find').yields(null, expectedResult);
		todo.find((err, result) => {
			todoModelMock.verify();
			todoModelMock.restore();
			expect(result.status).to.be.true;
			done();
		});
	});

	it('should return error', (done) => {
		var todoModelMock = sinon.mock(todo);
		var expectedResult = { status : false, error : 'Something went wrong'};
		todoModelMock.expects('find').yields(expectedResult, null);
		todo.find((err, result) => {
			todoModelMock.verify();
			todoModelMock.restore();
			expect(err.status).to.not.be.true;
			done();
		});
	});
});

describe('Post a todo', () => {
	it('should create a new post', (done) => {
		var todoMock = sinon.mock(new todo({todo : 'Save a new todo from todo mock'}));
		var todoObject = todoMock.object;
		var expectedResult = {status : true};
		todoModelMock.expects('save').yields(null, expectedResult);
		todoObject.save((err, result) => {
			todoModelMock.verify();
			todoModelMock.restore();
			expect(result.status).to.be.true;
			done();
		});
	});

	it('should return error', (done) => {
		var todoMock = sinon.mock(new todo({todo : 'Save a new todo from todo mock'}));
		var todoObject = todoMock.object;
		var expectedResult = {status : false};
		todoModelMock.expects('save').yields(expectedResult, null);
		todoObject.save((err, result) => {
			todoModelMock.verify();
			todoModelMock.restore();
			expect(err.status).to.not.be.true;
			done();
		});
	});

});

describe('Update a todo', () => {
	it('should update a post', (done) => {
		var todoMock = sinon.mock(new todo({completed : true}));
		var todoObject = todoMock.object;
		var expectedResult = {status : true};
		todoMock.expects('save').withArgs({_id : 12345}).yields(null, expectedResult);
		todoObject.save((err, result) => {
			todoMock.verify();
			todoMock.restore();
			expect(result.status).to.be.true;
			done();
		});
	});

	it('should return error', (done) => {
		var todoMock = sinon.mock(new todo({todo : 'Save a new todo from todo mock'}));
		var todoObject = todoMock.object;
		var expectedResult = {status : false};
		todoMock.expects('save').withArgs({_id : 12345}).yields(expectedResult, null);
		todoObject.save((err, result) => {
			todoMock.verify();
			todoMock.restore();
			expect(err.status).to.not.be.true;
			done();
		});
	});

});

describe('Delete a todo', () => {
	it('should Delete a post', (done) => {
		var todoMock = sinon.mock(new todo({completed : true}));
		var todoObject = todoMock.object;
		var expectedResult = {status : true};
		todoMock.expects('remove').withArgs({_id : 12345}).yields(null, expectedResult);
		todo.save((err, result) => {
			todoMock.verify();
			todoMock.restore();
			expect(result.status).to.be.true;
			done();
		});
	});

	it('should return error', (done) => {
		var todoMock = sinon.mock(new todo({todo : 'Save a new todo from todo mock'}));
		var todoObject = todoMock.object;
		var expectedResult = {status : false};
		todoMock.expects('remove').withArgs({_id : 12345}).yields(expectedResult, null);
		todo.save((err, result) => {
			todoMock.verify();
			todoMock.restore();
			expect(err.status).to.not.be.true;
			done();
		});
	});

});