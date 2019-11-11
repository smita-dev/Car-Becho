const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const User=require('../models/usermodel');
const bcrypt=require('bcryptjs');

mongoose.connect("mongodb+srv://dbUser:q9twDpjE06O9oTxd@cluster0-uz0v7.mongodb.net/CarApp?retryWrites=true&w=majority",
{
    useUnifiedTopology:true,
    useNewUrlParser:true,
    useCreateIndex: true,
})
.then(()=>console.log("connected to mongodb"))
.catch(err => console.log('Error occured while connecting MongoDB '+err));

router.get('/carname',(req,res)=>{
   console.log("get route")
})

module.exports=router;