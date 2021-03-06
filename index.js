require('dotenv').config();
const express = require("express");
 

//Database

const mongoose =require("mongoose");
const mongoString = process.env.DATABASE_URL;



mongoose.connect(mongoString);
const db=mongoose.connection;

db.on('error',(error)=>{
    console.log(error)
})
db.once('connected',()=>{
    console.log('Database Connected');
})


const app=express();

app.use(express.json());
app.use(express.urlencoded({extended: true,})); 

//listen
app.listen(3000,()=>
    console.log(`Listening on localhost: ${3000}`)
)



//Routing 

const routes=require('./routes/routes');
app.use('/api',routes);











