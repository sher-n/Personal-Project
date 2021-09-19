const express = require('express');
const router = express.Router();
const passport = require('passport');
const StoreControllers = require('../controllers/Store');


const authentication = passport.authenticate('jwt', { session: false });

router.get('/sport', StoreControllers.getSportProduct)
router.get('/fashion', StoreControllers.getFashionProduct)
router.get('/car', StoreControllers.getCarProduct)
router.get('/',authentication, StoreControllers.getProduct);
router.get('/:id', StoreControllers.getOneProduct);
router.post('/',authentication, StoreControllers.addProduct);
router.put('/:id',authentication, StoreControllers.editProduct);
router.delete('/:id', StoreControllers.deleteProduct);

module.exports = router;