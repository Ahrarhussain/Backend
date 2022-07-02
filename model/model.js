const mongoose=require('mongoose');

const CustomerAdd = new mongoose.Schema({
    CustomerName:{
        required:true,
        type: String
    },
    Email:{
        required:true,
        type: String
    },
    MobileNumber:{
        required:true,
        type: Number
    },
    City:{
        required:true,
        type: String
    }

})

module.exports = mongoose.model('Customer',CustomerAdd);