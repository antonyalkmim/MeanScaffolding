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



module.exports = router;
