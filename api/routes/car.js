const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const Car=require('../models/carmodel');
const bcrypt=require('bcryptjs');

mongoose.connect("mongodb+srv://dbUser:q9twDpjE06O9oTxd@cluster0-uz0v7.mongodb.net/CarInfo?retryWrites=true&w=majority",
{
    useUnifiedTopology:true,
    useNewUrlParser:true,
    useCreateIndex: true,
})
.then(()=>console.log("connected to car db"))
.catch(err => console.log('Error occured while connecting MongoDB '+err));

router.get('/carname',(req,res)=>{
    console.log("get route");
    Car.find({}, function(error, data) {
    console.log(data);
    //Display the comments returned by MongoDB, if any were found. Executes after the query is complete.
});
})

module.exports=router;