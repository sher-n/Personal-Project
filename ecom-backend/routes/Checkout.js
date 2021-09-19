const express = require('express');
const router = express.Router();
const passport = require('passport');
const CheckoutControllers = require('../controllers/Checkout');

const authentication = passport.authenticate('jwt', { session: false });

// router.get('/',authentication, CartControllers.getCart);
router.post('/:id',authentication, CheckoutControllers.Buy);
// router.put('/:id', CartControllers.editCart);
// router.delete('/:id', CartControllers.deleteCart);

module.exports = router;