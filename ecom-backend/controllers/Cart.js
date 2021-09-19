const db = require("../models");


const getCart = async (req,res) => {
    const cartList = await db.Cart.findAll({ where : { user_id : req.user.id}}); //{ where : { UserId : 
    res.status(200).send(cartList);
}

const addCart = async (req,res) => {

    const { product_name } = req.body;
    const targetProduct = await db.Product.findOne({
        where : {
            product_name
        }
    })

    if(!targetProduct) {
        res.status(404).send({message: 'sorry,product not found.'})
    }

    await db.Cart.create({
        user_id: req.user.id,
        product_id :targetProduct.id,
        product_name: targetProduct.product_name,
        price: targetProduct.price,
        link: targetProduct.link,
        description: targetProduct.description
    })

    res.status(201).send({ message : "added cart"});

};

const deleteCart = async (req,res) => {
    const { product_name } = req.body;
    const targetCartItem = await db.Cart.findOne({
        where : {
            product_name: product_name,
            user_id: req.user.id
        }
    })

    await targetCartItem.destroy();

    // return res.status(204).send(targetCartItem)
    return res.status(200).send({ message : `removed ${product_name} from cart.`})
}

module.exports = {
    getCart,
    addCart,
    deleteCart
}