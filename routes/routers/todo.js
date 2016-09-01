var router = require('express').Router();
var todoCtrl = require('../../controllers/todo');

router.route('/')
	.get(todoCtrl.getAll)
	.post(todoCtrl.add);

router.route('/:id')
	.delete(todoCtrl.delete);


module.exports = router;