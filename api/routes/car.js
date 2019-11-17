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
        {
            res.json(model);     
        }      
    })
})

router.post('/year',(req,res)=>{
        console.log(req.body);
        // Usedcardetail.aggregate([{
        //     $match: {
        //         brand: req.body.brand,
        //         model: req.body.model,
        //         yearOfRegistration: req.body.year,
        //     }
        // }], function (err, result) {
        //     if (err) {
        //         res.status(500).send("Error loading from database" + err);
        //     } else {
        //         res.status(200).send(result);
        //     }
        // });
        
        Usedcardetail.aggregate([{
            $match: {
                brand: req.body.brand,
                model:req.body.model,
                yearOfRegistration:req.body.year,
                // kilometer: kms
            }
        },
        {
            $group: {
                _id: null,
                priceAvg: {
                    $avg: "$price"
                }
            }
        }
    ], function (err, result) {
        if (err) {
            res.status(500).send("Error loading from database" + err);
        } else {
            console.log(result)
            res.status(200).send(result);
        }
    });

})
module.exports=router;