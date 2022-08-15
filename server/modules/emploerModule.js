
const mongoose = require('mongoose')
const emploerSchema = new mongoose.Schema({

    fname:{
        type:String,
    },
    lname:{
        type:String,
    },
    address:{
        type:String,
    },
    email:{
        type:String,
    },
    city:{
        type:String,
    },
    state:{
        type:String,
    },
    zip:{
        type: Number,
    }


},{timestamps: true})

module.exports = mongoose.model('EmploerData', emploerSchema)