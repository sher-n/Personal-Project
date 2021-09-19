const db = require("../models");

const getList = async (req,res) => {

    const listsOfPending = await db.PendingList.findAll({
        where : {
            user_id: req.user.id
        }
    })

    if(!listsOfPending) {
        res.status(404).send({ message: "not found any product"})
    }

    res.status(200).send(listsOfPending);
}



const RemoveList = async (req,res) => {

    const targetUser = await db.User.findOne({
        where : {
            id : req.user.id
        }
    });

    const targetPendingList = await db.PendingList.findOne({
        where : {
            user_id : targetUser.id,
            id: req.params.id
        }
    })
    await targetPendingList.destroy()

    // await db.

    res.status(200).send({message : `Removed delivered product.`})
    
    // res.status(200).send(userList);
}


module.exports = {
    RemoveList,
    getList
}