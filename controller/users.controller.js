const usersRouter = require('express').Router();
const userModel = require('../models/users.model');

usersRouter.get('/',(req,res,next) => {
    userModel.find()
    .then(cursor => {
        if(cursor && cursor.length>0){
            return res.status(200).json({
                data : cursor,
                success : true,
                message : "users fetch successfully"
            })
        }
        else{
            return res.status(200).json({
                data : [],
                success : true,
                message : "users fetch successfully"
            })
        }
    })
    .catch(err => {
        return res.status(401).json({
            success : false,
            message : "users fetch failure",
            Error : err,
        })
    })
})

module.exports = usersRouter;