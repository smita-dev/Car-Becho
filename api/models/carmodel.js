const mongoose=require('mongoose');

const carSchema= new mongoose.Schema({

    car:{
       type: String,
    //    required:true
    },
    price:{
        type:Number,
        // required:true,
        // minlength:8
    }
});

module.exports=mongoose.model('Car',carSchema);