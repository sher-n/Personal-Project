const db = require("../models");

const Buy = async (req,res) => {
    const { balance } = req.body;
    const targetUser = await db.User.findOne({
        where : {
            id : req.user.id
        }
    });
    if (!targetUser) {
        res.status(404).send({ message : "please sign in"})
        return
    }
    const targetProduct = await db.Product.findOne({
        where : {
            id : req.params.id
        }
    })
    if(!targetProduct) {
        res.status(404).send({ message : "product not found."})
        return;
    }

    const targetProfile = await db.Profile.findOne({
        where : {
            user_id : req.user.id
        }
    });
    
        
        if (targetProfile) {
            await targetProfile.update({ 
                balance : balance 
            })
        }

    await db.PendingList.create({
        product_name: targetProduct.product_name,
        price: targetProduct.price,
        link: targetProduct.link,
        description: targetProduct.description,
        category: targetProduct.category,
        user_id: targetProduct.store_id,
        product_id: targetProduct.id,
        customer_id: targetUser.id
    })

    const targetCartItem = await db.Cart.findOne({
        where : {
            product_name: targetProduct.product_name,
            user_id: targetUser.id

        }
    })
    if (targetCartItem) {

        await targetCartItem.destroy();
    }

    // await db.

    res.status(200).send({message : `Thank you, we will deliver ${targetProduct.product_name} to you soon`})
    
    // res.status(200).send(userList);
}


module.exports = {
    Buy,
}