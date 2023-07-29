const mongoose = require('mongoose');
const {Schema} = mongoose;

const usersSchema = new Schema({
    customerName : String,
    roomName : String,
    roomId : {type:Schema.Types.ObjectId, required:true},
    date : Date,
    startTime : String,
    endTime : String
})

module.exports = mongoose.model("users",usersSchema);