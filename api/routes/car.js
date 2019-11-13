const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const Usedcardetail=require('../models/carmodel');
const bcrypt=require('bcryptjs');

router.get('/carname',(req,res) => {
    Usedcardetail.find({}).select('brand')
              .then(car =>{
                  if(!car)
                       return res.status(404).json("Error");
                  res.json(car);
                  console.log(car);
              })
              .catch(err => console.log("error occured while finding shops list from  collection "+err));
})
router.post('/modelname',(req,res)=>{
    console.log(req.body.brand);
    Usedcardetail.find({brand:req.body.brand}).
    then(model=>{
        if(model)
            res.json(model);     
    })
})

module.exports=router;