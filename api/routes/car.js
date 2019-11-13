const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const Usedcardetail=require('../models/carmodel');
const bcrypt=require('bcryptjs');

// mongoose.connect("mongodb+srv://dbUser:q9twDpjE06O9oTxd@cluster0-uz0v7.mongodb.net/Car?retryWrites=true&w=majority",
// {
//     useUnifiedTopology:true,
//     useNewUrlParser:true,
//     useCreateIndex: true,
// })
// .then(()=>console.log("connected to car db"))
// .catch(err => console.log('Error occured while connecting MongoDB '+err));

// router.get('/carname',(req,res)=>{
//     console.log("get route");
//     Usedcardetail.find(function(err, users) {
//         if (err) throw err;
      
//         // object of all the users
//         console.log(users);
//       });
//     //Display the comments returned by MongoDB, if any were found. Executes after the query is complete.

// })
router.get('/carname',(req,res) => {
    Usedcardetail.find({}).select('brand')
              .then(car =>{
                  if(!car)
                       return res.status(404).json({"noShopFound": "No shop detail found in the collection"});
                  res.json(car);
                  console.log(car);
              })
              .catch(err => console.log("error occured while finding shops list from  collection "+err));
})

module.exports=router;