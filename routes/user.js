const express           = require('express');
const router            = express.Router();
const jwt               = require('jsonwebtoken'); //used to decode jwt token
const userController    = require('../controllers/user_controllers'); // doctor controller added

console.log('user route loading');

router.post('/register', userController.CreateUser); //route for registering a new doctor
router.post('/login', userController.UserLogin); //route for loggin in a doctor

module.exports = router;
