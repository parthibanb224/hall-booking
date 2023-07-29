const mongoose = require('mongoose');
const {Schema} = mongoose;

const bookingSchema = new Schema({
    cutomerName : String,
    roomName : String,
    roomId : Schema.Types.ObjectId,
    date : Date,
    start : String,
    end : String,
    status : String
})

module.exports = mongoose.model("bookings",bookingSchema);