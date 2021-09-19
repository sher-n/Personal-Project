const db = require("../models");



const getSportProduct = async (req,res) => {
    const allSportProduct = await db.Product.findAll({
        where: {
            category: "SPORT"
        }
    })
    res.status(200).send(allSportProduct);
}
const getFashionProduct = async (req,res) => {
    const allFashionProduct = await db.Product.findAll({
        where: {
            category: "FASHION"
        }
    })
    res.status(200).send(allFashionProduct);
}
const getCarProduct = async (req,res) => {
    const allCarProduct = await db.Product.findAll({
        where: {
            category: "CAR"
        }
    })
    res.status(200).send(allCarProduct);
}

const getProduct = async (req,res) => {

    
    const targetStore = await db.Store.findOne({ 
        where : {
            user_id : req.user.id
        }
    })
    const productList = await db.Product.findAll({ 
        where : {
            store_id : targetStore.user_id
        }
     });
    res.status(200).send(productList);
}

const getOneProduct = async (req,res) => {

    
    const targetProduct = await db.Product.findOne({ 
        where : {
            id : req.params.id
        }
     });
    res.status(200).send(targetProduct);
}

const addProduct = async (req,res) => {
    const { product_name , price, link, amount, description,category, store_id} = req.body;
    
        await db.Product.create({
            product_name,
            price,
            link,
            description,
            category,
            store_id
        });

        res.status(200).send({ message : `Product ${product_name} added `});
        //trycatch
};

const editProduct = async (req,res) => {
    const { product_name, price, link, amount, description, category } = req.body;
    const targetStore = await db.Store.findOne({
        where : {
            user_id : req.user.id
        }
    })
    if (!targetStore) {
        return res.status(404).send({message : "product not found"})
    }
    const targetProduct = await db.Product.findOne({
        where : {
            id: req.params.id
        }
    })
    if (product_name) {
        await targetProduct.update({
            product_name,
        })
    }
    if (price) {
        await targetProduct.update({
            price,
        })
    }
    
    res.status(201).send({ message : `edited product id ${product_name}` })
}

const deleteProduct = async (req,res) => {
    const targetProduct = await db.Product.findOne({ where : { id : req.params.id }});
    if (targetProduct) {
        await targetProduct.destroy()
        res.status(204).send({message : `Product id ${req.params.id} has been deleted.`})
    } else {
        res.status(404).send({ message : "Product not found"})
    }
}

module.exports = {
    getCarProduct,
    getFashionProduct,
    getSportProduct,
    getOneProduct,
    getProduct,
    addProduct,
    editProduct,
    deleteProduct
}