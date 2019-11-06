const express=require('express');
const app=express();
const bodyparser=require('body-parser');
const cors=require('cors');
const port=process.env.PORT || 3000;

//cors
app.use(cors());

//Bodyparser
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

app.listen(port,()=>{
    console.log("connected on port "+port)
})

module.exports=app;