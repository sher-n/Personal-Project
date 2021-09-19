const db = require("../models");
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const getUser = async (req,res) => {
    const userList = await db.User.findAll({
        where : {
            id : req.user.id
        }
    });
    if(!userList) {
        res.status(404).send({message: "notfound user"})
    }

    res.status(200).send(userList);
}

const registerUser = async (req,res) => {
    const { username, password ,email, nickname } = req.body;
    const targetUser = await db.User.findOne({ where : { username : username }});
    if (targetUser) {
        res.status(200).send({ status: 9000, 
            message : `username ${username} has already taken.`});
    } else {
        const salt = bcryptjs.genSaltSync(12);
        const hashPassword = bcryptjs.hashSync(password, salt);
        await db.User.create({ 
            username : username,
            password : hashPassword,
            email : email,
            nickname : nickname
        });

        res.status(201).send({ status: 0000, message : `user ${username} has been created`});
    }
    }

const loginUser = async (req,res) => {
    const { username, password } = req.body;
    const targetUser = await db.User.findOne({ where : { username : username}});
    if (!targetUser) {
        res.status(404).send({message : "Wrong username or password"})
    } else {
        const isCorrectPassword = bcryptjs.compareSync(password, targetUser.password);
        if (!isCorrectPassword) {
            res.status(404).send({message : "Wrong username or password"});
        } else {
            await db.Profile.create({
                name: "xxx",
                bio: "xxxx",
                address: "",
                balance: 0,
                user_id: targetUser.id
            })
            await db.Store.create({
                name: username,
                user_id: targetUser.id
            })
            const payload = {
                id : targetUser.id,
                username : targetUser.username
            }

            const token = jwt.sign(payload, 'ggez', { expiresIn : 3600 })
            res.status(200).send({  
                token : token,
                message : "you are logging in"
            })
        }
    }
}   

module.exports = {
    registerUser,
    loginUser,
    getUser
}