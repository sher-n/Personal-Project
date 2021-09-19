const express = require('express');
const router = express.Router();
const passport = require('passport');
const CartControllers = require('../controllers/Cart');

const authentication = passport.authenticate('jwt', { session: false });

router.get('/',authentication, CartControllers.getCart);
router.post('/',authentication, CartControllers.addCart);
// router.put('/:id', CartControllers.editCart);
router.delete('/',authentication, CartControllers.deleteCart);

module.exports = router;