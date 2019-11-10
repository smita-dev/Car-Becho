const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const User=require('../models/usermodel');

router.get('/carname',(req,res)=>{
    console.log("carname get")
})