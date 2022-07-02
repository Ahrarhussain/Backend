const mongoose = require('mongoose');

const Schema=mongoose.Schema;
const PurchaseOrder = new Schema({
    ProductName:{
        required: true,
        type: String
    },
    Quantity:{
        required:true,
        type: Number
    },
    Pricing:{
        required:true,
        type: Number
    },
    MRP:{
        required:true,
        type: Number
    },
    Customer_ID: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Customer'
        }
    ]
    
})

module.exports = mongoose.model('Purchase',PurchaseOrder);