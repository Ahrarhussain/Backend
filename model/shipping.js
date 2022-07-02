const mongoose = require('mongoose');

const Schema=mongoose.Schema;
const ShippingSchema = new Schema({
    Address: {
        required:true,
        type:String
    },
    City: {
        required:true,
        type:String
    },
    Pincode: {
        required:true,
        type:Number
    },
    Customer_ID: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Customer'
        }
    ],
    Product_ID: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Purchase'
        }
    ]
})

module.exports = mongoose.model('Shipping', ShippingSchema);