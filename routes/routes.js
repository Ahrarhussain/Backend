const express = require('express');
const Customer = require('../model/model');
const Purchase=require('../model/purchase')
const Shipping=require('../model/shipping')
const router = express.Router()
const bodyParser = require('body-parser').json();

const Model = require('../model/model');


//Adding customer details using post route
router.post('/customer', bodyParser,async (req, res) => {
    const newCustomer = new Customer({
        CustomerName: req.body.CustomerName,
        Email: req.body.Email,
        MobileNumber: req.body.MobileNumber,
        City: req.body.City
    })
    // console.log(newCustomer)
    try {
        const customerdataToSave = await newCustomer.save();
        res.status(200).json(customerdataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

//Adding purchase details using post route for a particular user
router.post('/purchase', bodyParser,async (req, res) => {
    const newPurchase = new Purchase({
        ProductName: req.body.ProductName,
        Quantity: req.body.Quantity,
        Pricing: req.body.Pricing,
        MRP: req.body.MRP,
        Customer_ID: req.body.Customer_ID
    })
    // console.log(newPurchase)
    try {
        const purchasedataToSave = await newPurchase.save();
        res.status(200).json(purchasedataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

//Post the Shipment details for  a particular user
router.post('/shipment', bodyParser,async (req, res) => {
    const newShipment = new Shipping({
        Address: req.body.Address,
        City: req.body.City,
        Pincode: req.body.Pincode,
        Customer_ID: req.body.Customer_ID,
        Product_ID: req.body.Product_ID
    })
    // console.log(newPurchase)
    try {
        const shippingdataToSave = await newShipment.save();
        res.status(200).json(shippingdataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

module.exports = router;