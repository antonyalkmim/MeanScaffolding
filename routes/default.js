var express = require('express');
var router = express.Router();


//HOME
// ===================
var indexController = require('../controllers/indexController');
router.get('/', indexController.index);

// USERS     
// ===================
var userController = require('../controllers/userController');
router.get('/users', userController.index);
router.get('/users/list', userController.list);
router.post('/users/add', userController.add);
router.post('/users/edit', userController.edit);
router.delete('/users/delete/:id', userController.delete);


module.exports = router;
