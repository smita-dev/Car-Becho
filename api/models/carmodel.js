const mongoose=require('mongoose');

const usedcardetail= new mongoose.Schema({

    brand: String,
    yearOfRegistration: Number,
    kilometer: {type: Number, default: 0},
    model:String,
    price: Number,

});
usedcardetail.set('collection','usedcardetail')

module.exports=mongoose.model('usedcardetail',usedcardetail);