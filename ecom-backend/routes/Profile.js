const express = require("express");
const router = express.Router();
const profileControllers = require('../controllers/Profile');
const passport = require('passport');


const authentication = passport.authenticate('jwt', { session: false });

router.get('/',authentication, profileControllers.getProfile);
router.get('/:id',authentication, profileControllers.getPublicProfile);
// router.post('/:uid', profileControllers.createProfile)
router.put('/:action',authentication ,profileControllers.editProfile);

module.exports = router;