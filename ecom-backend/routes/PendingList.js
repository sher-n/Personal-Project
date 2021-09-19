const express = require('express');
const router = express.Router();
const passport = require('passport');
const PendingListControllers = require('../controllers/PendingList');

const authentication = passport.authenticate('jwt', { session: false });

// router.get('/',authentication, CartControllers.getCart);
router.get('/', authentication, PendingListControllers.getList)
router.delete('/:id',authentication, PendingListControllers.RemoveList);
// router.put('/:id', CartControllers.editCart);
// router.delete('/:id', CartControllers.deleteCart);

module.exports = router;