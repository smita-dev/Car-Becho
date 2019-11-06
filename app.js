const express=require('express');
const app=express();
const bodyparser=require('body-parser');
const cors=require('cors');
const mongoose=require('mongoose');
const port=process.env.PORT || 3000;

//cors
app.use(cors());

//Bodyparser
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

const userRoutes=require('./api/routes/user')
const carRoutes=require('./api/routes/car')


//filter routes
app.use('/api',userRoutes);
app.use('/car',carRoutes);

//connected to db
mongoose.connect("mongodb+srv://dbUser:"+process.env.MONGO_ATLAS_PW+
"@cluster0-uz0v7.mongodb.net/CarApp?retryWrites=true&w=majority",
{
    useUnifiedTopology:true,useNewUrlParser:true
})
.then(()=>console.log("connected to mongodb"))
.catch(err => console.log('Error occured while connecting MongoDB '+err));


app.listen(port,()=>{
    console.log("connected on port "+port)
})

module.exports=app;