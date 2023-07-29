const RoomsRouter = require('express').Router();
const roomsModel = require('../models/rooms.model');


RoomsRouter.get('/',(req,res,next) => {
    roomsModel.find()
    .then(response => {
        if(response && response.length>0){
            return res.status(200).json({
                result : response,
                success : true,
                message : "Rooms collection create SuccessFully"
            })
        }
        else{
            return res.status(200).json({
                result : [],
                success : true,
                message : "Rooms collection create SuccessFully"
            })
        }
    })
    .catch(err => {
        return res.status(401).json({
            success : false,
            message : "rooms collection create failed",
            Error : err
        })
    })
})


module.exports = RoomsRouter;