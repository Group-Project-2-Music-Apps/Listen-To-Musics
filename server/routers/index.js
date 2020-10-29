const express = require('express');
const router =  express.Router();
const authentication = require('../middlewares/authentication');
// const authorization = require('../middlewares/authorization');

const UserController = require('../controllers/UserController');

router.post('/signup', UserController.signup);
router.post('/login', UserController.login);
router.post('/googleLogin', UserController.googleLogin);
router.use(authentication);


module.exports = router;
