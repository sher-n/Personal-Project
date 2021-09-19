const express = require("express");
const router = express.Router();
const userControllers = require('../controllers/User');
const passport = require('passport');

const authentication = passport.authenticate('jwt', { session: false });

router.get('/',authentication, userControllers.getUser);
router.post('/register', userControllers.registerUser);
router.post('/login', userControllers.loginUser);


module.exports = router;