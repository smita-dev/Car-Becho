const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const User=require('../models/usermodel');
const bcrypt=require('bcryptjs');
const passport=require('passport');
const LoacalStrategy=require('passport-local').Strategy;
const session = require('express-session')
const flash=require('connect-flash')
//signup handle
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
                    // res.status(200).send("success");
                    // req.flash('success_msg','you are now registered');
                    res.redirect('../login')
                })
                .catch(err=>console.log(err));
            }))
           
        }
        console.log("sdfsad");
    })
})
// router.post('/login',(req,res,next)=>{
//     console.log("sahk")
//     passport.authenticate('local',{
//          successRedirect: '/homepage',
//          failureRedirect: '/user/login',
//          failureFlash: true 
//     })(req,res,next)

// })

router.post('/login',(req,res)=>{
    console.log("gfjh")
    const {email,password}=req.body;
    // User.findOne({email:email})
    //          .then(user => {
    //             //  if(!user)
    //             //     return res.status(404).send({
    //             //         "Error" : "User with the given name does not exists"
    //             //     });
                
    //             bcrypt.compare(password,user.password)
    //                         .then(correct =>{
    //                             if(correct){
    //                                 const payload = {
    //                                     id : user.id,
    //                                     username : user.username,
    //                                     email: user.email
    //                                 }

    //                                 jsonwt.sign(
    //                                     payload,
    //                                     key,{
    //                                         expiresIn:10800
    //                                     },(err,token) => {
    //                                         if(err) throw err;
    //                                         res.json({
    //                                             success : true,
    //                                             token : "Bearer "+ token
    //                                         })
    //                                     }

    //                                 )
    //                             }
    //                             else{
    //                                 res.status(401).json({failed:'Invalid user credentials'});
    //                             }
    //                         })
    //                         .catch(err => console.log("error generating token "+err));
    //          })

    User.findOne({email:email})
            .then(user=>{
                if(!user){
                    // return done(null,false,{message:"This email is not registered"});
                    res.status(201).json({failed:"This email is not registered"});
                }

                //match password
                bcrypt.compare(password,password,(err,isMatch)=>{
                    if(err)throw err;

                    if(isMatch){
                        res.status(201).json({failed:'success'});
                    }
                    else
                    {
                        res.status(201).json({failed:'password incorrect'});
                    }
                })
            })
            .catch(err=>console.log(err));

            console.log("gdgf")
})



module.exports=router;