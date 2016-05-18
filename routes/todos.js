var express = require('express');
var router = express.Router();
var models  = require('../models');


// www.abc.com/todo/
router.get('/', function(req,res,next) {
	models.Task.findAll({})
	.then(function(tasks) {
		res.json(tasks);
	}).error(function(error) {
		res.json(error);
	})
});


// www.abc.com/todo/add
router.post('/add',function(req,res,next) {
	var newTask  = models.Task.build(req.body);
	
  	newTask.save()
  	.then(function(anotherTask) {
    	res.json(anotherTask); // you can now access the currently saved task with the variable anotherTask... nice!
  	}).catch(function(error) {
    	res.json(error);
  	});


});

module.exports = router;