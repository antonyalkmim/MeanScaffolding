var express = require('express');
var router = express.Router();


//HOME
// ===================
var indexController = require('../controllers/indexController');
router.get('/', indexController.index);
router.get('/listar', indexController.listar);

//NOTES
// ===================
var notesController = require('../controllers/notesController');
router.get('/notes', notesController.index);
router.get('/notes/listar', notesController.listar);


module.exports = router;
