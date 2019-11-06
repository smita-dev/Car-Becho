const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const User=require('../models/usermodel');
const bcrypt=require('bcryptjs');

router.post('/signup',(req,res,next)=>{
     //  const product ={
    //     email:req.body.email,
    //     password:req.body.password
    // }
    const {email,password}=req.body;
    User.findOne({email:email}).then(user=>{
        if(user){
            res.send("error");
        }
        else
        {
            const user=new User({
                email:req.body.email,
                password:req.body.password
            });

            console.log(user);
            
            //hash password
            bcrypt.genSalt(10,(err,salt)=>
            bcrypt.hash(user.password, salt,(err,hash)=>{
                if(err) throw err;

                //set password to hashed
                user.password=hash;

                //save user
                user.save()
                .then(user=>{
                    res.status(200).json({ message:'user is registered' });
                })
                .catch(err=>console.log(err));
            
            }))
           
        }
        console.log("sdfsad");
    })
})
module.exports=router;