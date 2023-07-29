const BookingsRouter = require('express').Router();
const bookingModel = require('../models/bookings.model');


BookingsRouter.get('/',(req,res,next) => {
    bookingModel.find()
    .then(response => {
        if(response && response.length>0){
            return res.status(200).json({
                result : response,
                success : true,
                message : "booking collection create successfully"
            })
        }
        else{
            return res.status(200).json({
                result : [],
                success : true,
                message : "booking collection create successfully"
            })
        }
    })
    .catch(err => {
        return res.status(401).json({
            success : false,
            message : "booking collection create failed",
            Error : err
        })
    })
})


module.exports = BookingsRouter;