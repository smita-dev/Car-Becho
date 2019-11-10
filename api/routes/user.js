const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const User=require('../models/usermodel');
const bcrypt=require('bcryptjs');


//signup handle
router.post('/signup',(req,res,next)=>{
     //  const product ={
    //     email:req.body.email,
    //     password:req.body.password
    // }
    const {email,password}=req.body;
    User.findOne({email:email}).then(user=>{
        if(user){
            res.send("This email is already exist");
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
                    // res.status(200).send("success");
                    // req.flash('success_msg','you are now registered');
                    res.status("201").send("success");
                })
                .catch(err=>console.log(err));
            }))
           
        }
        console.log("sdfsad");
    })
})


router.post('/login',(req,res)=>{
    console.log("gfjh")
    const {email,password}=req.body;
    User.findOne({email:email})
             .then(user => {       
                bcrypt.compare(password,user.password)
                            .then(correct =>{
                                console.log(correct)
                                if(correct){
                                    res.status("201").json({
                                        success : true
                                    })
                                }
                                else{
                                    res.status(404).json({failed:'Invalid user credentials'});
                                }
                            })
                            .catch(err => console.log("error generating token "+err));
             })

            console.log("gdgf");
})


module.exports=router;