const express=require('express');
const app=express();
const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
const LoacalStrategy=require('passport-local').Strategy;

//load user model
const User=require('../models/user');

module.exports=function(passport)
{
    passport.use(
        new LoacalStrategy({usernameField:'email'},(email,password,done)=>{
            //match user
            user.findOne({email:email})
            .then(user=>{
                if(!user){
                    return done(null,false);
                }
            })
            .catch(err=>console.log(err));
        })
    )
}