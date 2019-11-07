const express=require('express');
const app=express();
const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
const LoacalStrategy=require('passport-local').Strategy;

//load user model
const User=require('../models/usermodel');

module.exports=function(passport)
{
    passport.use(
        new LoacalStrategy({usernameField:'email'},(email,password,done)=>{
            //match user
            User.findOne({email:email})
            .then(user=>{
                if(!user){
                    return done(null,false,{message:"This email is not registered"});
                }

                //match password
                bcrypt.compare(password,user.password,(err,isMatch)=>{
                    if(err)throw err;

                    if(isMatch){
                        return done(null,user);
                    }
                    else
                    {
                        return done(null,false,{message:'password incorrect'});
                    }
                })
            })
            .catch(err=>console.log(err));
        })
    );

    passport.serializeUser((user, done)=> {
        done(null, user.id);
      });
      
      passport.deserializeUser((id, done)=> {
        User.findById(id, function(err, user) {
          done(err, user);
        });
      });

}
