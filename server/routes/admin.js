var express = require('express');
var router = express.Router();


router.all('*',function(req,res,next){
	console.log("Interceptor");
	next();		
});

//HOME
// ===================
var indexController = require('../controllers/indexController');
router.get('/', indexController.index);
router.get('/listar', indexController.listar);

//NOTES
// ===================
var notesController = require('../controllers/notesController');
router.get('/notes', notesController.index);
router.get('/notes/listar', notesController.list);


module.exports = router;
